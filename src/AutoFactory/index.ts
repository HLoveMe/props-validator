/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * @Author: zihao.zhu@github.com
 * @Date: 2022-01-14 16:17:32
 * @Last Modified by: zihao.zhu
 * @Last Modified time: 2022-07-21 11:03:11
 * @desc : 用于自动生成propsType的验证器
 * 1:基础数据
 * 2:数组 / 对象 / typedArray
 * 3:函数
 * 4:复杂对象嵌套
 */

import { isProduction } from '../Env';
import { toTypeString } from '../util';
declare interface TypeObject {
  type: string; //[object Number]
  minType: string; // Number
  validator: Array<string>; // [wsProps.number,wsProps.number.isRequire]
}
export declare interface FactoryOption {
  maxDepth: number;
  topName: string;
}
declare type ExecName = string;
export declare type ExecMap = {
  [K in ExecName]: (
    props: any,
    propName: string,
    typeObject: TypeObject
  ) => string;
};

export declare interface PluginExec {
  test: () => boolean;
  choice: (props: any, propName: string, typeObject: TypeObject) => ExecName;
  execMap: ExecMap;
}

const PropsPlugin: any = {
  extends: [] as Array<PluginExec>,
  getTypeSpec: () => '{}',
  extendsFactory: () => {},
};

const getType = (value: string) => {
  const [_, target] = value.match(/\[object (\w+)\]/) || [];
  return target;
};

const Wrapper = (type: string, topName: string): Array<string> => [
  `${topName}.${type}`,
  `${topName}.${type}.isRequired`,
];

export default function initAutoFactory(WsProps: any) {
  const DefaultOption = { maxDepth: 3, topName: 'Type' };
  const baseSource = [
    null,
    undefined,
    1,
    '',
    false,
    () => {},
    Symbol.for(''),
    new Date(),
    /\w/,
    Promise.resolve(),
  ];
  const seniorSource = [[], {}];
  let typeArray: Array<TypeObject> = [];
  const exec: any = { option: DefaultOption };

  const getValidator = (type: string) => {
    type = type.toLocaleLowerCase();
    if (type === getType(toTypeString({})).toLocaleLowerCase())
      type = 'shape($)';
    return Wrapper(type, exec.option.topName);
  };

  baseSource.forEach((item) => {
    const objStr = toTypeString(item);
    const minType = getType(objStr);
    (exec as any)[`exec${minType}`] = function (
      props: string,
      value: any,
      isRequire: boolean = false
    ): string {
      return (
        typeArray.find((item) => item.type === objStr)?.validator[
          Number(isRequire)
        ] || ''
      );
    };
  });
  exec.execAny = function (
    props: string,
    value: any,
    isRequire: boolean = false
  ): string {
    return (
      typeArray.find((item) => item.type === toTypeString(null))?.validator[
        Number(isRequire)
      ] || ''
    );
  };
  exec.execUnknown = function (
    props: string,
    value: any,
    isRequire: boolean = false
  ): string {
    const objStr = toTypeString(value);
    const info = typeArray.find((item) => item.type === objStr);
    if (!!info === false) {
      let minType = getType(objStr);
      minType = minType.toLocaleLowerCase();
      if (!!WsProps[minType] === true)
        return Wrapper(minType, exec.option.topName)[Number(isRequire)];
    }
    return exec.execAny(props, value, isRequire);
  };

  exec.execObject = function (
    props: string,
    target: any,
    isRequire: boolean = false,
    depth = 0,
    option: FactoryOption
  ): any {
    const objInfo: TypeObject =
      typeArray.find((item) => item.type === toTypeString({})) ||
      ({} as TypeObject);
    if (Object.keys(target).length === 0 || depth === option.maxDepth)
      return Wrapper(objInfo.minType.toLocaleLowerCase(), exec.option.topName)[
        Number(isRequire)
      ];
    const result = {};
    Object.keys(target).forEach((key) => {
      const value = target[key];
      const func = PropsPlugin.switchExec(value, key, target);
      if (func && typeof func === typeof Function) {
        (result as any)[key] = func(props, value, isRequire, depth + 1, option);
      }
    });
    if (depth === 0) return result;
    const { validator } = objInfo;
    const template = validator[Number(isRequire)];
    return template.replace('$', JSON.stringify(result, null, 2));
  };
  exec.execArray = function (
    props: string,
    value: any[] = [],
    isRequire: boolean = false,
    depth = 0,
    option: FactoryOption
  ): string {
    const sourceInfo =
      typeArray.find((item) => item.type === toTypeString([])) ||
      ({} as TypeObject);
    if (value.length === 0 || depth === option.maxDepth)
      return sourceInfo.validator[Number(isRequire)];
    const execFunc = PropsPlugin.switchExec(value[0]);
    const validator = sourceInfo.validator[Number(false)];
    //TODO:isRequire 是否直接给false
    const result = `${validator}Of(${execFunc(
      props,
      value[0],
      false,
      depth + 1,
      option
    )})${isRequire ? '.isRequired' : ''}`;
    // const
    return result;
  };

  PropsPlugin.switchExec = function switchExec(
    source: any,
    key?: string,
    target?: any
  ): any {
    const type = typeArray.find((item) => item.type === toTypeString(source));
    let execFunc: Function | null = null;
    const fName = type ? `exec${type.minType}` : null;
    if (fName && !!exec[fName] === true) {
      execFunc = exec[fName];
    } else {
      const plugin = (PropsPlugin.extends as any[]).find((item) =>
        item.test(source)
      );
      if (plugin) {
        const { choice, execMap } = plugin;
        const execName = choice(source, key, target);
        execFunc = execMap[execName] || exec[execName];
      }
    }
    return execFunc || exec.execAny;
  };

  PropsPlugin.installType = function (source: any, isRequire: boolean = false) {
    typeArray = (function (target: any[]) {
      return target.map((item) => {
        const targetType = toTypeString(item);
        const minType = getType(targetType);
        const validator = getValidator(minType);
        return { type: targetType, minType, validator };
      });
    })([...baseSource, ...seniorSource]);
  };

  PropsPlugin.extendsFactory = function (plugin: PluginExec) {
    if (
      !!plugin.test &&
      typeof plugin.test === 'function' &&
      !!plugin.choice &&
      typeof plugin.choice === 'function' &&
      !!plugin.execMap
    ) {
      PropsPlugin.extends.unshift(plugin);
    }
  };
  PropsPlugin.__getID = () => {
    const IDS =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const IDL = IDS.length;
    let UID = '';
    for (let i = 0; i < 10; i++) {
      UID += IDS.charAt(Math.floor(Math.random() * IDL));
    }
    return UID;
  };
  PropsPlugin.getTypeSpec = function (
    source: any,
    isRequire: boolean = true,
    option: any = DefaultOption
  ) {
    option = { ...DefaultOption, ...option };
    exec.option = option;
    PropsPlugin.installType();
    const result = PropsPlugin.switchExec(source)(
      '',
      source,
      isRequire,
      0,
      option
    );
    typeof result === 'object' && (result.__tag = `'${PropsPlugin.__getID()}'`);
    const topName =
      option.topName === DefaultOption.topName
        ? DefaultOption.topName
        : `${DefaultOption.topName} as ${option.topName}`;
    const Spec = `
  import OV , { ${topName}} from 'types-format';
  const Spec = ${JSON.stringify(result, null, 2)};
`;
    !isProduction() &&
      console.info(
        '运行一下代码，得到javascript\r\n',
        `\`${Spec}\`.replace(/\"/g,'').replace(/\\r|\\n/g,'')`
      );
    return Spec;
  };

  extendTypedArray(PropsPlugin);
  extendBigInt(PropsPlugin);

  WsProps.PropsPlugin = PropsPlugin;
  return PropsPlugin;
}

function extendTypedArray(plugin: typeof PropsPlugin) {
  // 对typedArray 扩展
  plugin.extendsFactory &&
    plugin.extendsFactory({
      test: (source: any) => {
        const type = toTypeString(new ArrayBuffer(0));
        const minType = getType(type);
        if (
          source &&
          !!source.buffer &&
          Object.prototype.toString.call(source.buffer) === type
        )
          return true;
        if (source && source.constructor && source.constructor.name === minType)
          return true;
        return false;
      },
      choice: (props: any, propName: string, typeObject: TypeObject): string =>
        'execTypedArray',
      execMap: {
        execTypedArray: function (
          props: any,
          value: any,
          isRequire: boolean = false,
          depth = 0,
          option: FactoryOption
        ): string {
          const type = toTypeString(value);
          const minType = getType(type)
            .toLocaleLowerCase()
            .replace('array', '');
          return `${Wrapper(minType, option.topName)[Number(isRequire)]}`;
        },
      },
    } as unknown as PluginExec);
}

function extendBigInt(plugin: typeof PropsPlugin) {
  // plugin.extendsFactory &&
  //   plugin.extendsFactory({
  //     test: (source: any) => {
  //       return typeof source === typeof 1n;
  //     },
  //     choice: (props: any, propName: string, typeObject: TypeObject): string =>
  //       "bigint",
  //     execMap: {
  //       bigint: function (
  //         props: any,
  //         value: any,
  //         isRequire: boolean = false,
  //         depth = 0,
  //         option: FactoryOption
  //       ): string {
  //         const type = toTypeString(value);
  //         const minType = getType(type).toLocaleLowerCase();
  //         return `${Wrapper(minType, option.topName)[Number(isRequire)]}`;
  //       },
  //     },
  //   } as unknown as PluginExec);
}
