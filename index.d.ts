/*
 * @Author: zihao.zhu@united-imaging.com 
 * @Date: 2022-01-21 14:19:46 
 * @Last Modified by: zihao.zhu
 * @Last Modified time: 2022-02-22 09:32:12
 * @desc : 类型声明和验证 
 */
/* eslint-disable @typescript-eslint/no-redeclare */

import PropTypes, { ReactComponentLike, ReactElementLike, ReactNodeLike } from 'prop-types';

declare type ErrorAble = null | Error | any;
declare type ShowIDString = string;
declare type DateString = string;
declare type DateStamp = number;
declare type ExecName = string
declare type ValidatorFunction = (props: any, propName: string) => ErrorAble;
declare type ValidatorSource = any;

export enum RunEnv {
  dev = 'development',
  prod = 'production',
}

declare type AsyncFunction = (...args: any[]) => Promise<any>
interface ValidatorData extends Object {
  __props__error: ErrorAble
}

declare interface Util {
  createChainableTypeChecker: (validator: Function) => PropTypes.Requireable<any>,
  createExpectedTypeChecker: (validator: string) => PropTypes.Requireable<any>,
  validatorLog: (error: ErrorAble) => void,
}

declare interface TypeObject {
  type: string;//[object Number]
  minType: string;// Number
  validator: Array<string>;// [wsProps.number,wsProps.number.isRequire]
}
export declare interface FactoryOption {
  maxDepth: number;
  topName: string;
}
export declare type ExecMap = { [K in ExecName]: (props: any, propName: string, typeObject: TypeObject) => string };


declare interface APISource {
  [key: string]: AsyncFunction | APISource;
}
export declare interface PluginExec {
  test: () => boolean;
  choice: (props: any, propName: string, typeObject: TypeObject) => ExecName;
  execMap: ExecMap
}

interface SpecAtom {
  spec: TypeSpecSpace;
  handler: ((source: any) => any) | null | undefined;
}

declare interface APISpaceSpec {
  [key: string]: SpecAtom | APISpaceSpec;
}

declare interface ApiUtil {
  WrapperApi: (Api: APISource, spec?: APISpaceSpec) => APISource;
}

declare type TypeSpecSpaceString = string;
declare interface PropsPluginSpace {
  extends: Array<PluginExec>;
  getTypeSpec(target: any, isRequire?: boolean, option?: FactoryOption): TypeSpecSpaceString
  extendsFactory(plugin: PluginExec): void;
}

export interface PropsValidatorClass {
  env: RunEnv;
  //
  any: PropTypes.Requireable<any>;
  array: PropTypes.Requireable<any[]>;
  bool: PropTypes.Requireable<boolean>;
  func: PropTypes.Requireable<(...args: any[]) => any>;
  number: PropTypes.Requireable<number>;
  object: PropTypes.Requireable<object>;
  string: PropTypes.Requireable<string>;
  node: PropTypes.Requireable<ReactNodeLike>;
  element: PropTypes.Requireable<ReactElementLike>;
  symbol: PropTypes.Requireable<symbol>;
  elementType: PropTypes.Requireable<ReactComponentLike>;

  //重命名
  boolean: PropTypes.Requireable<boolean>;
  function: PropTypes.Requireable<Function>;
  //add:date
  dateString: PropTypes.Requireable<DateString>;
  date: PropTypes.Requireable<DateStamp | DateString>;
  //promise
  promise: PropTypes.Requireable<Promise<any>>;
  // null undefined
  null: PropTypes.Requireable<null>;
  undefined: PropTypes.Requireable<undefined>;
  //add:typedArray
  uint8: PropTypes.Requireable<Uint8Array>;
  uint8clamped: PropTypes.Requireable<Uint8ClampedArray>;
  uint16: PropTypes.Requireable<Uint16Array>;
  uint32: PropTypes.Requireable<Uint32Array>;
  int8: PropTypes.Requireable<Int8Array>;
  int16: PropTypes.Requireable<Int16Array>;
  int32: PropTypes.Requireable<Int32Array>;
  float32: PropTypes.Requireable<Float32Array>;
  float64: PropTypes.Requireable<Float64Array>;
  buffer: PropTypes.Requireable<ArrayBuffer>;
  dataview: PropTypes.Requireable<DataView>;
  // BigInt
  bigint: PropTypes.Requireable<bigint>;



  instanceOf<T>(expectedClass: new (...args: any[]) => T): PropTypes.Requireable<T>;
  oneOf<T>(types: ReadonlyArray<T>): PropTypes.Requireable<T>;
  oneOfType<T extends PropTypes.Validator<any>>(types: T[]): PropTypes.Requireable<NonNullable<PropTypes.InferType<T>>>;
  arrayOf<T>(type: PropTypes.Validator<T>): PropTypes.Requireable<T[]>;
  // // 强制规定对象 所有属性值都是指定的类型
  objectOf<T>(type: PropTypes.Validator<T>): PropTypes.Requireable<{ [K in keyof any]: T; }>;
  // null || {} 只要props满足Spec即可
  shape<P extends PropTypes.ValidationMap<any>>(type: P): PropTypes.Requireable<PropTypes.InferProps<P>>;
  // null || {} 满足Spec 但不能有多余属性key-value
  exact<P extends PropTypes.ValidationMap<any>>(type: P): PropTypes.Requireable<Required<PropTypes.InferProps<P>>>;


  checkPropTypes(typeSpecs: TypeSpecSpace, values: any, showDifference?: boolean): ErrorAble;

  /**
   * 扩展现有验证条件
   * extendsValidator('isNaN',(props,propsName)=>{
   *    const value = props[propsName];
   *    if(isNaN(value)){
   *      return null
   *    }
   *    return  return new Error('必须是NaN');
   * })
   * 
   * checkPropTypes({
   *   some:Props.isNaN,
   *   other:Props.isNaN.isRequired,
   * },{some:NaN,other:1})
   * @param name 
   * @param source 
   */
  extendsValidator(name: string, source: ValidatorFunction): void;
  //设置运行环境
  // production: 不会运行任何检查
  setEnv(env: RunEnv): void;
  // 扩展验证函数函数
  util: Util;
  //生成Props
  PropsPlugin: PropsPluginSpace;

  apiUtil: ApiUtil;
}

declare type instanceOfValue = ReturnType<PropsValidator["instanceOf"]>
declare type oneOfTypeValue = ReturnType<PropsValidator["oneOfType"]>
declare type shapeValue = ReturnType<PropsValidator["shape"]>
declare type exactValue = ReturnType<PropsValidator["exact"]>
declare type SpecValue =
  | PropTypes.Requireable<any>
  | PropTypes.Validator<any>
  | ValidatorFunction
  | instanceOfValue
  | oneOfTypeValue
  | shapeValue
  | exactValue
  | ShowIDString

export interface TypeSpecSpaceTag {
  __tag: ShowIDString;
}
export interface TypeSpecSpace extends TypeSpecSpaceTag {
  [key: string]: SpecValue
}

export declare interface PromiseExtends<T> extends Promise<T> {
  validator(typeSpec: TypeSpecSpace, handle?: (source: any) => ValidatorSource): PromiseExtends<ValidatorData>;
}

const PropsValidator:PropsValidatorClass;

export default PropsValidator;