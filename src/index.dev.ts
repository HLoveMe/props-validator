import { WsType } from './types'
import OV from './InitRun'
import initDefaultValue from "./DefaultValue";
import { initEnv } from "./Env";
import initAutoFactory from "./AutoFactory";

OV.setEnv('development')
initEnv(OV);
initAutoFactory(OV);
initDefaultValue(OV);

export const Type: WsType = OV
export default OV;
