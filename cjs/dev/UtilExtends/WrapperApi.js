import { isProduction } from "../Env";
export default function WrapperApi(Api, spec) {
    if (isProduction())
        Api;
    const createProxy = (api, specSource) => {
        Object.keys(api).forEach(key => {
            const target = api[key];
            if (typeof target === 'object') {
                let spec = specSource && specSource[key];
                if (typeof spec !== 'object')
                    spec = {};
                api[key] = createProxy(target, spec);
            }
        });
        return new Proxy(api, {
            get(target, key) {
                const source = target[key];
                if (typeof source === 'function') {
                    const spec = ((specSource && specSource[key]) || {});
                    return (...args) => {
                        return source(...args).validator(spec.spec, spec.handler);
                    };
                }
                return target[key];
            }
        });
    };
    return createProxy(Api, spec);
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
