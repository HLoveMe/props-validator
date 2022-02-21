/*
 * @Author: zihao.zhu@united-imaging.com 
 * @Date: 2022-01-21 14:20:38 
 * @Last Modified by: zihao.zhu
 * @Last Modified time: 2022-01-21 16:55:21
 * @desc : 工具函数包装Api请求 
 */
import { PromiseExtends, TypeSpecSpace } from "..";
import { isProduction } from "../Env";

declare type AsyncFunction = (...args: any[]) => Promise<any>

declare interface APISource {
  [key: string]: AsyncFunction | APISource;
}

interface SpecAtom {
  spec: TypeSpecSpace;
  handler?: (source: any) => any;
}

declare interface APISpaceSpec {
  [key: string]: SpecAtom | APISpaceSpec;
}

export default function WrapperApi(Api: APISource, spec?: APISpaceSpec): APISource {
  if (isProduction()) Api;
  const createProxy = (api: APISource, specSource?: APISpaceSpec): APISource => {
    Object.keys(api).forEach(key => {
      const target = api[key];
      if (typeof target === 'object') {
        let spec = specSource && specSource[key];
        if (typeof spec !== 'object') spec = {}
        api[key] = createProxy(target, spec as APISpaceSpec);
      }
    })
    return new Proxy(api, {
      get(target, key) {
        const source = (target as any)[key];
        if (typeof source === 'function') {
          const spec: SpecAtom = ((specSource && specSource[key as string]) || {}) as unknown as SpecAtom;
          return (...args: any[]) => {
            return (source(...args) as PromiseExtends<any>).validator(spec.spec, spec.handler);
          }
        }
        return (target as any)[key];
      }
    })
  }
  return createProxy(Api, spec)
  // const keys = Object.keys(Api);
  // const newApi = {};
  // keys.forEach((key) => {
  //   const module = Api[key];
  //   const moduleSpec = SpecSpace.default[key];
  //   newApi[key] = new Proxy(module, {
  //     get(target, propKey) {
  //       const exec = target[propKey];
  //       const spec = moduleSpec[propKey as string];
  //       if (typeof exec === 'function' && typeof spec === 'object') {
  //         return (...args) => {
  //           return (exec(...args) as PromiseExtends<any>).validator(spec.spec, spec.handler);
  //         }
  //       }
  //       return exec;
  //     }
  //   })
  // })
  // return newApi;
}