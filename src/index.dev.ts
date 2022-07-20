import { WsType } from './types'
import OV from './InitRun'
import initDefaultValue from "./DefaultValue";
import { initEnv } from "./Env";
import initAutoFactory from "./AutoFactory";

initEnv(OV);
initAutoFactory(OV);
initDefaultValue(OV);
OV.setEnv('development')

export const Type: WsType = OV
export default OV;
