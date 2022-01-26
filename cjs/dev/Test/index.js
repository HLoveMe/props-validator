import WsPropsType from '..';
import './validator';
import './testPromise';
const Plugin = WsPropsType.PropsPlugin;
// 自动生成PropTypes代码
//基础数据类型
console.log("window.PropsPlugin--number", Plugin.getTypeSpec(11));
console.log("window.PropsPlugin--null", Plugin.getTypeSpec(null));
console.log("window.PropsPlugin--string", Plugin.getTypeSpec(''));
console.log("window.PropsPlugin--boolean", Plugin.getTypeSpec(false));
console.log("window.PropsPlugin--Symbol", Plugin.getTypeSpec(Symbol.for('a')));
console.log("window.PropsPlugin--function", Plugin.getTypeSpec(() => { }));
console.log("window.PropsPlugin--object", Plugin.getTypeSpec({}));
console.log("window.PropsPlugin--date", Plugin.getTypeSpec(new Date()));
console.log("window.PropsPlugin--regex", Plugin.getTypeSpec(/\w/));
console.log("window.PropsPlugin--promise", Plugin.getTypeSpec(Promise.resolve()));
console.log("window.PropsPlugin--bigint", Plugin.getTypeSpec(1n));
console.log("window.PropsPlugin--object", Plugin.getTypeSpec({ data: [] }));
// typedArray
console.log("window.PropsPlugin--ArrayBuffer", Plugin.getTypeSpec(new ArrayBuffer(0)));
console.log("window.PropsPlugin--Int8Array", Plugin.getTypeSpec(new Int8Array()));
console.log("window.PropsPlugin--Uint8Array", Plugin.getTypeSpec(new Uint8Array()));
console.log("window.PropsPlugin--Int16Array", Plugin.getTypeSpec(new Int16Array()));
console.log("window.PropsPlugin--Uint16Array", Plugin.getTypeSpec(new Uint16Array()));
console.log("window.PropsPlugin--Int32Array", Plugin.getTypeSpec(new Int32Array()));
console.log("window.PropsPlugin--Uint32Array", Plugin.getTypeSpec(new Uint32Array()));
console.log("window.PropsPlugin--Float32Array", Plugin.getTypeSpec(new Float32Array()));
console.log("window.PropsPlugin--Float64Array", Plugin.getTypeSpec(new Float64Array()));
console.log("window.PropsPlugin--Uint8ClampedArray", Plugin.getTypeSpec(new Uint8ClampedArray()));
console.log("window.PropsPlugin--DataView", Plugin.getTypeSpec(new DataView(new ArrayBuffer(1), 0, 0)));
//数组
console.log("window.PropsPlugin-array-number", Plugin.getTypeSpec([1]));
console.log("window.PropsPlugin-array-null", Plugin.getTypeSpec([null]));
console.log("window.PropsPlugin-array-string", Plugin.getTypeSpec(['']));
console.log("window.PropsPlugin-array-boolean", Plugin.getTypeSpec([false]));
console.log("window.PropsPlugin-array-Symbol", Plugin.getTypeSpec([Symbol.for('a')]));
console.log("window.PropsPlugin-array-function", Plugin.getTypeSpec([() => { }]));
console.log("window.PropsPlugin-array-object", Plugin.getTypeSpec([{}]));
// 复杂对象
console.log("window.PropsPlugin--object", Plugin.getTypeSpec({
    data: [
        [1, 2, 3],
    ],
    data2: [new Date()],
    people: {
        a: '',
        b: null,
        c: [1],
        d: Symbol.for('a'),
        e: () => { },
        f: ['11']
    }
}, true, { maxDepth: 5, topName: 'WsPropsType' }));
console.log("===================================================================================");
