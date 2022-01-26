/*
 * @Author: zihao.zhu@united-imaging.com
 * @Date: 2022-01-21 14:21:35
 * @Last Modified by:   zihao.zhu
 * @Last Modified time: 2022-01-21 14:21:35
 * @desc : typedArray
 */
/* eslint-disable  */
import { createExpectedTypeChecker, toTypeString } from "../util";
export default {
    buffer: createExpectedTypeChecker(toTypeString(new ArrayBuffer(0))),
    dataview: createExpectedTypeChecker(toTypeString(new DataView(new ArrayBuffer(0)))),
    uint8: createExpectedTypeChecker(toTypeString(new Uint8Array())),
    uint16: createExpectedTypeChecker(toTypeString(new Uint16Array())),
    uint32: createExpectedTypeChecker(toTypeString(new Uint32Array())),
    int8: createExpectedTypeChecker(toTypeString(new Int8Array())),
    int16: createExpectedTypeChecker(toTypeString(new Int16Array())),
    int32: createExpectedTypeChecker(toTypeString(new Int32Array())),
    float32: createExpectedTypeChecker(toTypeString(new Float32Array())),
    float64: createExpectedTypeChecker(toTypeString(new Float64Array())),
    uint8clamped: createExpectedTypeChecker(toTypeString(new Uint8ClampedArray())),
};
