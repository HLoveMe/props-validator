/*
 * @Author: zihao.zhu@united-imaging.com 
 * @Date: 2022-01-21 14:21:17 
 * @Last Modified by: zihao.zhu
 * @Last Modified time: 2022-02-22 09:16:55
 * @desc : bigint
 */
/* eslint-disable  */
import { createExpectedTypeChecker, toTypeString } from "../util";


export default {
  bigint: createExpectedTypeChecker(toTypeString(BigInt(1)) as string),
}