/*
 * @Author: zihao.zhu@united-imaging.com
 * @Date: 2022-01-21 14:21:10
 * @Last Modified by:   zihao.zhu
 * @Last Modified time: 2022-01-21 14:21:10
 * @desc : undefined / null
 */
/* eslint-disable */
import { getPreciseType, toTypeString } from "../util";
function createNullUndefinedTypeChecker(validate) {
    function checkType(isRequired, props, propName) {
        const value = props[propName];
        if (value === null || value === undefined) {
            return validate(props, propName);
        }
        else {
            if (isRequired) {
                return new Error(`The \`${propName}\` is null/Undefined as required , but its value is ${toTypeString(value)}`);
            }
            return null;
        }
    }
    const chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
}
function createExpectedTypeChecker(expectedType) {
    function validate(props, propName) {
        const propValue = props[propName];
        const propType = toTypeString(propValue);
        if (propType !== expectedType) {
            const preciseType = getPreciseType(propValue);
            return new Error(`Invalid ${propName} value is ${propValue} ,but expected ${expectedType} but get ${preciseType}`);
        }
        return null;
    }
    return createNullUndefinedTypeChecker(validate);
}
export default {
    null: createExpectedTypeChecker(toTypeString(null)),
    undefined: createExpectedTypeChecker(toTypeString(undefined)),
};
