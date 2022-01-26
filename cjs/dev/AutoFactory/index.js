/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * @Author: zihao.zhu@united-imaging.com
 * @Date: 2022-01-14 16:17:32
 * @Last Modified by: zihao.zhu
 * @Last Modified time: 2022-01-24 11:22:06
 * @desc : 用于自动生成propsType的验证器
 * 1:基础数据
 * 2:数组 / 对象 / typedArray
 * 3:函数
 * 4:复杂对象嵌套
 */
import { toTypeString } from '../util';
import { isProduction } from '../Env';
const PropsPlugin = {
    extends: [],
    getTypeSpec: () => '{}',
    extendsFactory: () => { },
};
// ((globalThis || window) as any).PropsPlugin = PropsPlugin;
const getType = (value) => { const [a, target] = value.match(/\[object (\w+)\]/) ?? []; return target; };
const Wrapper = (type, topName) => [`${topName}.${type}`, `${topName}.${type}.isRequired`];
export default function initAutoFactory(WsProps) {
    if (!isProduction()) {
        // const PropsPlugin = ((globalThis || window) as any).PropsPlugin;
        const DefaultOption = { maxDepth: 3, topName: 'WsPropsType' };
        const baseSource = [null, undefined, 1, '', false, () => { }, Symbol.for(''), new Date(), /\w/, Promise.resolve()];
        const seniorSource = [[], {},];
        let typeArray = [];
        const exec = { option: DefaultOption };
        const getValidator = (type) => {
            type = type.toLocaleLowerCase();
            // var vaFunc = WsProps[type];
            if (type === getType(toTypeString({})).toLocaleLowerCase())
                type = 'shape($)';
            // if (!!vaFunc === false) type = 'any';
            return Wrapper(type, exec.option.topName);
        };
        baseSource.forEach(item => {
            const objStr = toTypeString(item);
            const minType = getType(objStr);
            exec[`exec${minType}`] = function (props, value, isRequire = false) {
                return typeArray.find(item => item.type === objStr)?.validator[Number(isRequire)] || '';
            };
        });
        exec.execAny = function (props, value, isRequire = false) {
            return typeArray.find(item => item.type === toTypeString(null))?.validator[Number(isRequire)] || '';
        };
        exec.execUnknown = function (props, value, isRequire = false) {
            const objStr = toTypeString(value);
            const info = typeArray.find(item => item.type === objStr);
            if (!!info === false) {
                let minType = getType(objStr);
                minType = minType.toLocaleLowerCase();
                if (!!WsProps[minType] === true)
                    return Wrapper(minType, exec.option.topName)[Number(isRequire)];
            }
            return exec.execAny(props, value, isRequire);
        };
        // exec.execUndefined = exec.execAny;
        // exec.execNull = exec.execAny;
        exec.execObject = function (props, target, isRequire = false, depth = 0, option) {
            const objInfo = typeArray.find(item => item.type === toTypeString({})) || {};
            if (Object.keys(target).length === 0 || depth === option.maxDepth)
                return Wrapper(objInfo.minType.toLocaleLowerCase(), exec.option.topName)[Number(isRequire)];
            const result = {};
            Object.keys(target).forEach(key => {
                const value = target[key];
                const func = PropsPlugin.switchExec(value, key, target);
                if (func && typeof func === typeof Function) {
                    result[key] = func(props, value, isRequire, depth + 1, option);
                }
            });
            if (depth === 0)
                return result;
            const { validator } = objInfo;
            const template = validator[Number(isRequire)];
            return template.replace('$', JSON.stringify(result));
        };
        exec.execArray = function (props, value = [], isRequire = false, depth = 0, option) {
            const sourceInfo = typeArray.find(item => item.type === toTypeString([])) || {};
            if (value.length === 0 || depth === option.maxDepth)
                return sourceInfo.validator[Number(isRequire)];
            const execFunc = PropsPlugin.switchExec(value[0]);
            const validator = sourceInfo.validator[Number(false)];
            //TODO:isRequire 是否直接给false
            const result = `${validator}Of(${execFunc(props, value[0], false, depth + 1, option)})${isRequire ? '.isRequired' : ''}`;
            // const 
            return result;
        };
        PropsPlugin.switchExec = function switchExec(source, key, target) {
            const type = typeArray.find(item => item.type === toTypeString(source));
            let execFunc = null;
            const fName = type ? `exec${type.minType}` : null;
            if (fName && !!exec[fName] === true) {
                execFunc = exec[fName];
            }
            else {
                const plugin = PropsPlugin.extends.find(item => item.test(source));
                if (plugin) {
                    const { choice, execMap } = plugin;
                    const execName = choice(source, key, target);
                    execFunc = execMap[execName] || exec[execName];
                }
            }
            return execFunc || exec.execAny;
        };
        PropsPlugin.installType = function (source, isRequire = false) {
            typeArray = (function (target) {
                return target.map(item => {
                    const targetType = toTypeString(item);
                    const minType = getType(targetType);
                    const validator = getValidator(minType);
                    return { type: targetType, minType, validator, };
                });
            })([...baseSource, ...seniorSource]);
        };
        PropsPlugin.extendsFactory = function (plugin) {
            if (!!plugin.test && typeof plugin.test === 'function' && !!plugin.choice && typeof plugin.choice === 'function' && !!plugin.execMap) {
                PropsPlugin.extends.push(plugin);
            }
        };
        PropsPlugin.__getID = () => {
            const IDS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            const IDL = IDS.length;
            let UID = '';
            for (let i = 0; i < 10; i++) {
                UID += IDS.charAt(Math.floor(Math.random() * IDL));
            }
            return UID;
        };
        PropsPlugin.getTypeSpec = function (source, isRequire = true, option = DefaultOption) {
            option = { ...DefaultOption, ...option };
            exec.option = option;
            PropsPlugin.installType();
            const result = PropsPlugin.switchExec(source)('', source, isRequire, 0, option);
            (typeof result === 'object') && (result.__tag = `'${PropsPlugin.__getID()}'`);
            return JSON.stringify(result, null, 2).replace(/\n/g, '').replace(/"/g, "").replace(/\\/g, "");
        };
        extendTypedArray(PropsPlugin);
        extendBigInt(PropsPlugin);
    }
    WsProps.PropsPlugin = PropsPlugin;
    return PropsPlugin;
}
function extendTypedArray(plugin) {
    // 对typedArray 扩展
    plugin.extendsFactory && plugin.extendsFactory({
        test: (source) => {
            const type = toTypeString(new ArrayBuffer(0));
            const minType = getType(type);
            if (source && !!source.buffer && Object.prototype.toString.call(source.buffer) === type)
                return true;
            if (source && source.constructor && source.constructor.name === minType)
                return true;
            return false;
        },
        choice: (props, propName, typeObject) => 'execTypedArray',
        execMap: {
            execTypedArray: function (props, value, isRequire = false, depth = 0, option) {
                const type = toTypeString(value);
                const minType = getType(type).toLocaleLowerCase().replace('array', '');
                return `${Wrapper(minType, option.topName)[Number(isRequire)]}`;
            }
        },
    });
}
function extendBigInt(plugin) {
    plugin.extendsFactory && plugin.extendsFactory({
        test: (source) => {
            return typeof source === typeof 1n;
        },
        choice: (props, propName, typeObject) => 'bigint',
        execMap: {
            bigint: function (props, value, isRequire = false, depth = 0, option) {
                const type = toTypeString(value);
                const minType = getType(type).toLocaleLowerCase();
                return `${Wrapper(minType, option.topName)[Number(isRequire)]}`;
            }
        },
    });
}
