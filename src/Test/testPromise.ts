import WsPropsType, { PromiseExtends } from ".."


(Promise.resolve({ a: 'null', b: 'bb', c: { d: 1, e: { ee: 1, eee: [] } }, f: [ Symbol()] }) as PromiseExtends<any>).validator({
  __tag: 'test error dome',
  a: WsPropsType.number,
  b: WsPropsType.string,
  c: WsPropsType.shape({
    d: WsPropsType.string,
    e: WsPropsType.shape({
      ee: WsPropsType.number,
      eee: WsPropsType.string
    })
  }),
  f: WsPropsType.arrayOf(WsPropsType.number),
}, (source) => source)
