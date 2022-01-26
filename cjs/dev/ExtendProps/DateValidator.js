/*
 * @Author: zihao.zhu@united-imaging.com
 * @Date: 2022-01-21 14:20:58
 * @Last Modified by:   zihao.zhu
 * @Last Modified time: 2022-01-21 14:20:58
 * @desc : date 验证
 */
import { createChainableTypeChecker, getPreciseType } from "../util";
/**
 * date String '2021-11-11 00:00:00' 进行匹配
 * /(\d){4}?-(\d){2}?-(\d){2}? (\d){2}?:(\d){2}?:(\d){2}?/
 * @param regex
 * @returns
 */
export function dateValidatorCheckString(regex) {
    function validate(props, propName) {
        const propValue = props[propName];
        if (regex && regex.test(propValue) === false) {
            const preciseType = getPreciseType(propValue);
            return new Error(`${JSON.stringify(props)}-[${propName}]-[${propValue}] is type ${preciseType} , but expected value is test(/^${regex}$/)`);
        }
        return null;
    }
    return createChainableTypeChecker(validate);
}
/**
 * 可以被解析成日期的值
 */
export const dateValidatorCheck = ((check) => {
    function validate(props, propName) {
        const propValue = props[propName];
        if (check && !check(propValue)) {
            const preciseType = getPreciseType(propValue);
            return new Error(`${JSON.stringify(props)}-[${propName}]-[${propValue}] is type ${preciseType} , but expected value is test by Date.parse`);
        }
        return null;
    }
    return createChainableTypeChecker(validate);
})((data) => {
    const date = Date.parse(data);
    return typeof date === 'number' && !isNaN(date) && date > 0;
});
