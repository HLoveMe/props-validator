/*
 * @Author: zihao.zhu@github.com 
 * @Date: 2022-01-21 14:21:35 
 * @Last Modified by:   zihao.zhu 
 * @Last Modified time: 2022-01-21 14:21:35 
 * @desc : typedArray 
 */
/* eslint-disable  */
import { createExpectedTypeChecker, toTypeString } from "../util";
export default {
  buffer: createExpectedTypeChecker(toTypeString(new ArrayBuffer(0)) as string),
  dataview: createExpectedTypeChecker(toTypeString(new DataView(new ArrayBuffer(0))) as string),
  uint8: createExpectedTypeChecker(toTypeString(new Uint8Array()) as string),
  uint16: createExpectedTypeChecker(toTypeString(new Uint16Array()) as string),
  uint32: createExpectedTypeChecker(toTypeString(new Uint32Array()) as string),
  int8: createExpectedTypeChecker(toTypeString(new Int8Array()) as string),
  int16: createExpectedTypeChecker(toTypeString(new Int16Array()) as string),
  int32: createExpectedTypeChecker(toTypeString(new Int32Array()) as string),
  float32: createExpectedTypeChecker(toTypeString(new Float32Array()) as string),
  float64: createExpectedTypeChecker(toTypeString(new Float64Array()) as string),
  uint8clamped: createExpectedTypeChecker(toTypeString(new Uint8ClampedArray()) as string),
}