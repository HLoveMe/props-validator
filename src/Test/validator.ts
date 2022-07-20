import WsPropsType from '../index.dev'

const Spec1 = {
  __tag:'Spec1',
  data: WsPropsType.arrayOf(WsPropsType.number),
  people: WsPropsType.exact({
    a: WsPropsType.string.isRequired,
    b: WsPropsType.any.isRequired,
    c: WsPropsType.array.isRequired,
    d: WsPropsType.symbol.isRequired
  }).isRequired
}
const Spec2 = {
  __tag:'Spec2',
  data: WsPropsType.arrayOf(WsPropsType.date),
  age: WsPropsType.number.isRequired,
  name: WsPropsType.string.isRequired,
  time: WsPropsType.date.isRequired,
  aa: function (props:any, name:string) {
    const value = props[name]
    return value > 2020 ? "" : new Error('年龄不能小于2020')
  }
}

const Spec3 = {
  __tag:'Spec3',
  a: WsPropsType.string.isRequired,
  b: WsPropsType.number.isRequired,
  c: WsPropsType.null.isRequired,
  d: WsPropsType.boolean.isRequired,
  e: WsPropsType.array.isRequired,
  f: WsPropsType.undefined.isRequired
}
console.log("data - check1", WsPropsType.checkPropTypes(Spec1, { data: [], people: { a: '', b: 1, c: [1], d: Symbol.for('a') } }) ?? 'success')
console.log("data - check2", WsPropsType.checkPropTypes(Spec2, { data: [new Date()], age: 1, name: 'aaa', time: '2021-11-1 00:00:11', aa: 2021 }) ?? 'success')
console.log("data - check3", WsPropsType.checkPropTypes(Spec3, { a: '', b: 1, c: null, d: true, e: [], f: undefined }) ?? 'success')
// console.log("===================================================================================")