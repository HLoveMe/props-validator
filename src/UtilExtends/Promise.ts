/*
 * @Author: zihao.zhu@united-imaging.com 
 * @Date: 2022-01-21 14:20:23 
 * @Last Modified by: zihao.zhu
 * @Last Modified time: 2022-01-21 16:54:32
 * @desc : Promise 验证 
 */
/* eslint-disable no-extra-boolean-cast */
import { checkPropTypes } from '../util';
import { validatorLog } from "../util";
import { isProduction } from "../Env";

(function (prototype: any) {
  if (!!prototype.validator) return;
  prototype.validator = function (typeSpec: any, handle: (source: any) => any) {
    if (!isProduction()) {
      const nextHandle = (source: any) => {
        const result = !!handle ? handle(source) : source;
        const error = checkPropTypes(typeSpec, result);
        if (typeof source === 'object' && source !== null) {
          Object.defineProperty(source, '__props__error', {
            configurable: false,
            enumerable: false,
            get: () => error,
          })
        }
        error && validatorLog && validatorLog(source, typeSpec, error);
        return source
      }
      return this.then(nextHandle);
    }
    return this.then((data: any) => data)
  }
})((((window as any) || this) as any).Promise.prototype);