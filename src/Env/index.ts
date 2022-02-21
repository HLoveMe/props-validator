/*
 * @Author: zihao.zhu@united-imaging.com 
 * @Date: 2022-01-21 14:21:56 
 * @Last Modified by:   zihao.zhu 
 * @Last Modified time: 2022-01-21 14:21:56 
 * @desc : 运行环境初始化 
 */
import { WsType } from "..";

declare type IsProductionFunc = () => boolean;

let isProduction: IsProductionFunc = () => true;

function initEnv(option: WsType) {
  isProduction = () => {
    return option.env === 'production'
  }
}
export {
  isProduction,
  initEnv,
}