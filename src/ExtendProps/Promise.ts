/*
 * @Author: zihao.zhu@github.com 
 * @Date: 2022-01-21 14:21:29 
 * @Last Modified by:   zihao.zhu 
 * @Last Modified time: 2022-01-21 14:21:29 
 * @desc : promise 
 */
/* eslint-disable */
import { createExpectedTypeChecker, toTypeString } from "../util";


export default {
  promise: createExpectedTypeChecker(toTypeString(new Promise(() => { })) as string),
}