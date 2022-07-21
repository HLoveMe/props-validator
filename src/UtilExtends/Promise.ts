/*
 * @Author: zihao.zhu@github.com
 * @Date: 2022-01-21 14:20:23
 * @Last Modified by: zihao.zhu
 * @Last Modified time: 2022-07-20 18:34:07
 * @desc : Promise 验证
 */
/* eslint-disable no-extra-boolean-cast */
import { checkPropTypes, getTop } from '../util';
import { validatorLog } from '../util';
import { isProduction } from '../Env';

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
          });
        }
        error && validatorLog && validatorLog(source, typeSpec, error);
        return source;
      };
      return this.then(nextHandle);
    }
    return this.then((data: any) => data);
  };
})(getTop().Promise.prototype);
