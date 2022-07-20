/*
 * @Author: zihao.zhu@github.com 
 * @Date: 2022-01-21 14:20:05 
 * @Last Modified by: zihao.zhu
 * @Last Modified time: 2022-07-20 09:41:52
 * @desc : 工具类 包装 
 */
import PropTypes from 'prop-types';
import { TypeSpecSpace } from './types';
import { isProduction } from './Env';
import { flattenError, ObjectValidatorError, ValidatorError, showDifferenceTable } from './Error';
declare type GetType = (target: any) => string;
const toTypeString: GetType = Function.call.bind(Object.prototype.toString) as unknown as GetType;
const ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'

const validatorSymbol = Symbol.for('validatorDisplayName');

const has = Function.call.bind(Object.prototype.hasOwnProperty);

function isSymbol(propType: any, propValue: any): boolean {
  if (propType === 'symbol') return true
  if (!propValue) return false;
  if (propValue['@@toStringTag'] === 'Symbol') return true;
  if (typeof Symbol === 'function' && propValue instanceof Symbol) return true;
  return false;
}

function getPreciseType(propValue: any): string {
  if (typeof propValue === 'undefined' || propValue === null) {
    return '' + propValue;
  }
  const propType = getPropType(propValue);
  if (propType === 'object') {
    if (propValue instanceof Date) {
      return 'date';
    } else if (propValue instanceof RegExp) {
      return 'regexp';
    }
  }
  return propType;
}

function getPropType(propValue: any): string {
  const propType = typeof propValue;
  if (Array.isArray(propValue)) return 'array';
  if (propValue instanceof RegExp) return 'object';
  if (isSymbol(propType, propValue)) return 'symbol';
  return propType;
}

function createChainableTypeChecker(validate: any): PropTypes.Requireable<any> {
  function checkType(isRequired: boolean, props: string, propName: any, c: any, l: any, propFullName: string) {
    propFullName = propFullName || propName;
    if (props[propName] == null) {
      if (isRequired) {
        return wrapperError(propName, props[propName], '非空', 'null/undefined');
      }
      return null;
    } else {
      return validate(props, propName, c, l, propFullName);
    }
  }
  const chainedCheckType = checkType.bind(null, false);
  (chainedCheckType as any).isRequired = checkType.bind(null, true);

  return chainedCheckType as any;
}

function wrapperError(propsName: string, value: any, expectedType: string, preciseType: string): ValidatorError {
  return new ValidatorError(`${propsName} 验证失败`, propsName, {
    propsName,
    value,
    expectedType,
    preciseType
  });
}

/***
 * 验证属性类型 是否为给定的值
 * createExpectedTypeChecker('[object Array]')
 */
function createExpectedTypeChecker(expectedType: string): PropTypes.Requireable<any> {
  function validate(props: any, propName: string) {
    const propValue = props[propName];
    const propType = toTypeString(propValue);
    if (propType !== expectedType) {
      const preciseType = getPreciseType(propValue);
      return wrapperError(propName, propValue, expectedType, preciseType);
    }
    return null;
  }
  return createChainableTypeChecker(validate);
}

function checkPropTypes(typeSpecs: TypeSpecSpace, values: any, showDifference: boolean = true): Error | null {
  if(isProduction()) return null;
  let objectError: any = {};
  let error = null;
  for (const typeSpecName in typeSpecs) {
    if (typeSpecName === '__tag') continue;
    if (has(typeSpecs, typeSpecName)) {
      try {
        if (typeof typeSpecs[typeSpecName] !== 'function') {
          const err = Error('验证函数类型错误');
          err.name = 'Invariant Violation';
          throw err;
        }
        error = (typeSpecs as any)[typeSpecName](values, typeSpecName, '', '', null, ReactPropTypesSecret);
        objectError[typeSpecName] = (!!error === false || error instanceof ObjectValidatorError) ? error : new ValidatorError(`${typeSpecName} 验证失败`, typeSpecName, error, values[typeSpecName]);
      } catch (ex) {
        objectError = ex;
        break;
      }
    }
  }
  if (Object.values(objectError).filter($1 => !!$1 === true).length > 0) {
    if (showDifference) showDifferenceTable(typeSpecs, values, objectError);
    return new Error(flattenError(objectError))
  }
  return null;
}
function createArrayOfTypeChecker(typeChecker: any) {
  function validate(props: any, propName: string, componentName: string, location: string, propFullName: string) {
    const errors: Array<ValidatorError> = []
    const propValue = props[propName];
    if (!Array.isArray(propValue)) {
      const propType = getPropType(propValue);
      return wrapperError(propName, propValue, '[object Array]', propType);
      // return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
    }
    for (let i = 0; i < propValue.length; i++) {
      const error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
      error && errors.push(new ValidatorError(`${propFullName} 验证失败`, propFullName, error, propValue))
    }
    return null;
  }
  return createChainableTypeChecker(validate);
}

function createShapeTypeChecker(shapeTypes: any) {
  function validate(props: any, propName: string, componentName: string, location: string, propFullName: string) {
    const errors: Array<ValidatorError> = []
    const propValue = props[propName];
    const propType = getPropType(propValue);
    if (propType !== 'object') {
      return wrapperError(propName, propValue, 'object', propType);
    }
    for (const key in shapeTypes) {
      const checker = shapeTypes[key];
      if (!checker) {
        continue;
      }
      const error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
      error && errors.push(new ValidatorError(`${propFullName} 验证失败`, propFullName, error, propValue))
    }
    if (errors.length > 0) {
      const objError = new ObjectValidatorError(`验证错误：${propFullName}`, propFullName, errors)
      return objError;
    }
    return null;
  }
  return createChainableTypeChecker(validate);
}

function validatorLog(_: any, typeSpec: TypeSpecSpace, msg: Error) {
  !isProduction() && console.log(`Validator Error。 [typeSpec.__tag]:[${typeSpec.__tag}] =>`, msg);
}

export {
  toTypeString,
  getPropType,
  getPreciseType,
  createChainableTypeChecker,
  createExpectedTypeChecker,
  checkPropTypes,
  validatorLog,
  // .shape({})
  createShapeTypeChecker,
  //arrayOf
  createArrayOfTypeChecker,
  // .exact({})
  // createStrictShapeTypeChecker
}