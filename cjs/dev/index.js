/*
 * @Author: zihao.zhu@united-imaging.com
 * @Date: 2022-01-21 14:19:46
 * @Last Modified by: zihao.zhu
 * @Last Modified time: 2022-01-25 19:14:08
 * @desc : 类型声明和验证
 */
/* eslint-disable @typescript-eslint/no-redeclare */
import PropTypes from 'prop-types';
import initAutoFactory from './AutoFactory';
import { initEnv } from './Env';
import ExtendsValidator from './ExtendProps';
import { createChainableTypeChecker, checkPropTypes, createExpectedTypeChecker, validatorLog, validatorSymbol, createShapeTypeChecker, createArrayOfTypeChecker } from './util';
import { WrapperApi } from './UtilExtends/index';
export var RunEnv;
(function (RunEnv) {
    RunEnv["dev"] = "development";
    RunEnv["prod"] = "production";
})(RunEnv || (RunEnv = {}));
const PropsValidator = { env: RunEnv.dev };
function initValidator(source) {
    if (!Array.isArray(source))
        source = [source];
    source.forEach((item) => Object.getOwnPropertyNames(item).forEach(key => {
        const target = item[key];
        target[validatorSymbol] = key;
        PropsValidator[key] = target;
    }));
}
function extendsValidator(name, validator) {
    PropsValidator[name] = createChainableTypeChecker(validator);
}
initValidator([
    PropTypes,
    ExtendsValidator,
    {
        checkPropTypes,
        boolean: PropTypes.bool,
        function: PropTypes.func,
        shape: createShapeTypeChecker,
        arrayOf: createArrayOfTypeChecker,
        // exact: createStrictShapeTypeChecker,
    },
    {
        extendsValidator,
        util: { createChainableTypeChecker, createExpectedTypeChecker, validatorLog },
        apiUtil: { WrapperApi },
        setEnv: (env) => { PropsValidator.env = env; },
    }
]);
initEnv(PropsValidator);
initAutoFactory(PropsValidator);
export default PropsValidator;
