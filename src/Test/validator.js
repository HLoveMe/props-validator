var _a, _b, _c;
import WsPropsType from '../index.dev';
var Spec1 = {
    __tag: 'Spec1',
    data: WsPropsType.arrayOf(WsPropsType.number),
    people: WsPropsType.exact({
        a: WsPropsType.string.isRequired,
        b: WsPropsType.any.isRequired,
        c: WsPropsType.array.isRequired,
        d: WsPropsType.symbol.isRequired
    }).isRequired
};
var Spec2 = {
    __tag: 'Spec2',
    data: WsPropsType.arrayOf(WsPropsType.date),
    age: WsPropsType.number.isRequired,
    name: WsPropsType.string.isRequired,
    time: WsPropsType.date.isRequired,
    aa: function (props, name) {
        var value = props[name];
        return value > 2020 ? "" : new Error('年龄不能小于2020');
    }
};
var Spec3 = {
    __tag: 'Spec3',
    a: WsPropsType.string.isRequired,
    b: WsPropsType.number.isRequired,
    c: WsPropsType.null.isRequired,
    d: WsPropsType.boolean.isRequired,
    e: WsPropsType.array.isRequired,
    f: WsPropsType.undefined.isRequired
};
console.log("data - check1", (_a = WsPropsType.checkPropTypes(Spec1, { data: [], people: { a: '', b: 1, c: [1], d: Symbol.for('a') } })) !== null && _a !== void 0 ? _a : 'success');
console.log("data - check2", (_b = WsPropsType.checkPropTypes(Spec2, { data: [new Date()], age: 1, name: 'aaa', time: '2021-11-1 00:00:11', aa: 2021 })) !== null && _b !== void 0 ? _b : 'success');
console.log("data - check3", (_c = WsPropsType.checkPropTypes(Spec3, { a: '', b: 1, c: null, d: true, e: [], f: undefined })) !== null && _c !== void 0 ? _c : 'success');
// console.log("===================================================================================")
