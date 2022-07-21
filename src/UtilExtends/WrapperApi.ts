/*
 * @Author: zihao.zhu@github.com
 * @Date: 2022-01-21 14:20:38
 * @Last Modified by: zihao.zhu
 * @Last Modified time: 2022-07-21 09:23:42
 * @desc : 工具函数包装Api请求
 */
import { PromiseExtends, TypeSpecSpace } from '../types';
import { isProduction } from '../Env';

declare type AsyncFunction = (...args: any[]) => Promise<any>;

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

export default function WrapperApi(
  Api: APISource,
  spec?: APISpaceSpec
): APISource {
  if (isProduction()) Api;
  const createProxy = (
    api: APISource,
    specSource?: APISpaceSpec
  ): APISource => {
    Object.keys(api).forEach((key) => {
      const target = api[key];
      if (typeof target === 'object') {
        let spec = specSource && specSource[key];
        if (typeof spec !== 'object') spec = {};
        api[key] = createProxy(target, spec as APISpaceSpec);
      }
    });
    return new Proxy(api, {
      get(target, key) {
        const source = (target as any)[key];
        if (typeof source === 'function') {
          const spec: SpecAtom = ((specSource && specSource[key as string]) ||
            {}) as unknown as SpecAtom;
          return (...args: any[]) => {
            return (source(...args) as PromiseExtends<any>).validator(
              spec.spec,
              spec.handler
            );
          };
        }
        return (target as any)[key];
      },
    });
  };
  return createProxy(Api, spec);
}
