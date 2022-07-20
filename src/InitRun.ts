
import PropTypes from "prop-types";
import {
  createChainableTypeChecker,
  checkPropTypes,
  createExpectedTypeChecker,
  validatorLog,
  createShapeTypeChecker,
  createArrayOfTypeChecker,
} from "./util";
import ExtendsValidator from "./ExtendProps";
import { WrapperApi } from "./UtilExtends/index";
import {RunEnv, ValidatorFunction, WsType} from './types'

const WsPropsType: WsType = { env: 'development' } as unknown as WsType;

function initValidator(source: any) {
  if (!Array.isArray(source)) source = [source];
  source.forEach((item: any) =>
    Object.getOwnPropertyNames(item).forEach((key) => {
      const target = item[key];
      (WsPropsType as any)[key] = target;
    })
  );
}

function extendsValidator(name: string, validator: ValidatorFunction) {
  (WsPropsType as any)[name] = createChainableTypeChecker(validator);
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
    util: {
      createChainableTypeChecker,
      createExpectedTypeChecker,
      validatorLog,
    },
    apiUtil: { WrapperApi },
    setEnv: (env: RunEnv) => {
      WsPropsType.env = env;
    },
    // PropsPlugin,
  },
]);

export default WsPropsType