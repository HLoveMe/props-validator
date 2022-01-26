class ValidatorError extends Error {
    struct = {
        propsName: "",
        value: undefined,
        expectedType: "",
        preciseType: ""
    };
    name = 'ValidatorError';
    propsName;
    info;
    value;
    constructor(msg, propsName, info, value) {
        super(msg);
        this.propsName = propsName;
        this.info = info;
        this.value = value;
    }
    toString() {
        let struct;
        if (this.info instanceof ObjectValidatorError || this.info instanceof ValidatorError) {
            this.struct = { propsName: this.info.propsName, value: '', expectedType: '', preciseType: '' };
            return this.info.toString();
        }
        else if (this.info instanceof Error) {
            // eslint-disable-next-line no-useless-escape
            const data = this.info.message.match(/(?<=(`))([\[\]\w<>\d\.]+)(?=(`))/g);
            if (data) {
                const [propsName, preciseType, value, expectedType] = data;
                struct = { propsName, value, expectedType, preciseType };
            }
            else {
                //this.info.message 
                return this.info.message;
                // struct = { propsName: 'ValidatorError 解析值错误', value: '', expectedType: '', preciseType: '' }
            }
        }
        else {
            struct = this.info;
        }
        this.struct = struct;
        const { propsName, value, expectedType, preciseType } = struct;
        //this.value ??
        return `属性:[${propsName}]的值等于['${value}'],期待为 ${expectedType} 类型/值，实际类型/值： ${preciseType} .`;
    }
}
class ObjectValidatorError extends Error {
    name = 'ObjectValidatorError';
    source = [];
    propsName;
    constructor(msg, propsName, error) {
        super(msg);
        this.source = error;
        this.propsName = propsName;
    }
    toString() {
        // let result = `{${new Array(this.source.length).fill(0).map((_) => '"$$":"$$"').join(',')}}`;
        const result = {};
        this.source.forEach(item => {
            const info = item.toString();
            const { struct: { propsName } } = item;
            // result = result.replace(`$$`, propName);
            // result = result.replace(`$$`, info);
            result[propsName] = info;
        });
        return result;
    }
}
function flattenError(objectError) {
    const result = {};
    Object.keys(objectError).forEach(key => {
        let value = objectError[key];
        if (!!value === false)
            return;
        if (!(value instanceof ObjectValidatorError)) {
            value = value instanceof ValidatorError ? value : new ValidatorError(`${key} 验证失败`, key, value);
        }
        result[key] = value.toString();
    });
    return JSON.stringify(result, null, 2);
}
function showDifferenceTable(typeSpecs, value, objectError) {
    // console.log('object-validator:', error, value);
    // const v_key = Object.keys(value);
    // var languages = {
    //   csharp: { name: "C#", paradigm: "object-oriented" },
    //   fsharp: { name: "F#", paradigm: "functional" }
    // };
}
export { ValidatorError, ObjectValidatorError, flattenError, showDifferenceTable };
