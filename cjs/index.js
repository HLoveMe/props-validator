(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["PropsValidator"] = factory(require("prop-types"));
	else
		root["PropsValidator"] = factory(root[undefined]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__73__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 73:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__73__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "RunEnv": () => (/* binding */ RunEnv),
  "default": () => (/* binding */ src)
});

// EXTERNAL MODULE: external {"commonjs":"prop-types","commonjs2":"prop-types"}
var external_commonjs_prop_types_commonjs2_prop_types_ = __webpack_require__(73);
var external_commonjs_prop_types_commonjs2_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_prop_types_commonjs2_prop_types_);
;// CONCATENATED MODULE: ./src/Env/index.ts
let isProduction = () => true;
function initEnv(option) {
    isProduction = () => {
        return option.env === 'production';
    };
}


;// CONCATENATED MODULE: ./src/Error/index.ts
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


;// CONCATENATED MODULE: ./src/util.ts


const toTypeString = Function.call.bind(Object.prototype.toString);
const ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
const validatorSymbol = Symbol.for('validatorDisplayName');
const has = Function.call.bind(Object.prototype.hasOwnProperty);
function isSymbol(propType, propValue) {
    if (propType === 'symbol')
        return true;
    if (!propValue)
        return false;
    if (propValue['@@toStringTag'] === 'Symbol')
        return true;
    if (typeof Symbol === 'function' && propValue instanceof Symbol)
        return true;
    return false;
}
function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
        return '' + propValue;
    }
    const propType = getPropType(propValue);
    if (propType === 'object') {
        if (propValue instanceof Date) {
            return 'date';
        }
        else if (propValue instanceof RegExp) {
            return 'regexp';
        }
    }
    return propType;
}
function getPropType(propValue) {
    const propType = typeof propValue;
    if (Array.isArray(propValue))
        return 'array';
    if (propValue instanceof RegExp)
        return 'object';
    if (isSymbol(propType, propValue))
        return 'symbol';
    return propType;
}
function createChainableTypeChecker(validate) {
    function checkType(isRequired, props, propName, c, l, propFullName) {
        propFullName = propFullName || propName;
        if (props[propName] == null) {
            if (isRequired) {
                return wrapperError(propName, props[propName], '非空', 'null/undefined');
            }
            return null;
        }
        else {
            return validate(props, propName, c, l, propFullName);
        }
    }
    const chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
}
function wrapperError(propsName, value, expectedType, preciseType) {
    return new ValidatorError(`${propsName} 验证失败`, propsName, {
        propsName,
        value,
        expectedType,
        preciseType
    });
}
/***
 * 验证属性类型 是否为给定的值
 * createExpectedTypeChecker('[object Array]')
 */
function createExpectedTypeChecker(expectedType) {
    function validate(props, propName) {
        const propValue = props[propName];
        const propType = toTypeString(propValue);
        if (propType !== expectedType) {
            const preciseType = getPreciseType(propValue);
            return wrapperError(propName, propValue, expectedType, preciseType);
        }
        return null;
    }
    return createChainableTypeChecker(validate);
}
function checkPropTypes(typeSpecs, values, showDifference = true) {
    if (isProduction())
        return null;
    let objectError = {};
    let error = null;
    for (const typeSpecName in typeSpecs) {
        if (typeSpecName === '__tag')
            continue;
        if (has(typeSpecs, typeSpecName)) {
            try {
                if (typeof typeSpecs[typeSpecName] !== 'function') {
                    const err = Error('验证函数类型错误');
                    err.name = 'Invariant Violation';
                    throw err;
                }
                error = typeSpecs[typeSpecName](values, typeSpecName, '', '', null, ReactPropTypesSecret);
                objectError[typeSpecName] = (!!error === false || error instanceof ObjectValidatorError) ? error : new ValidatorError(`${typeSpecName} 验证失败`, typeSpecName, error, values[typeSpecName]);
            }
            catch (ex) {
                objectError = ex;
                break;
            }
        }
    }
    if (Object.values(objectError).filter($1 => !!$1 === true).length > 0) {
        if (showDifference)
            showDifferenceTable(typeSpecs, values, objectError);
        return new Error(flattenError(objectError));
    }
    return null;
}
function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
        const errors = [];
        const propValue = props[propName];
        if (!Array.isArray(propValue)) {
            const propType = getPropType(propValue);
            return wrapperError(propName, propValue, '[object Array]', propType);
            // return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
        }
        for (let i = 0; i < propValue.length; i++) {
            const error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
            error && errors.push(new ValidatorError(`${propFullName} 验证失败`, propFullName, error, propValue));
        }
        return null;
    }
    return createChainableTypeChecker(validate);
}
function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
        const errors = [];
        const propValue = props[propName];
        const propType = getPropType(propValue);
        if (propType !== 'object') {
            return wrapperError(propName, propValue, 'object', propType);
        }
        for (const key in shapeTypes) {
            const checker = shapeTypes[key];
            if (!checker) {
                continue;
            }
            const error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
            error && errors.push(new ValidatorError(`${propFullName} 验证失败`, propFullName, error, propValue));
        }
        if (errors.length > 0) {
            const objError = new ObjectValidatorError(`验证错误：${propFullName}`, propFullName, errors);
            return objError;
        }
        return null;
    }
    return createChainableTypeChecker(validate);
}
function validatorLog(_, typeSpec, msg) {
    !isProduction() && console.log(`Validator Error。 [typeSpec.__tag]:[${typeSpec.__tag}] =>`, msg);
}


;// CONCATENATED MODULE: ./src/AutoFactory/index.ts
/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * @Author: zihao.zhu@github.com
 * @Date: 2022-01-14 16:17:32
 * @Last Modified by: zihao.zhu
 * @Last Modified time: 2022-02-22 17:23:16
 * @desc : 用于自动生成propsType的验证器
 * 1:基础数据
 * 2:数组 / 对象 / typedArray
 * 3:函数
 * 4:复杂对象嵌套
 */


const PropsPlugin = {
    extends: [],
    getTypeSpec: () => "{}",
    extendsFactory: () => { },
};
const getType = (value) => {
    const [_, target] = value.match(/\[object (\w+)\]/) || [];
    return target;
};
const Wrapper = (type, topName) => [
    `${topName}.${type}`,
    `${topName}.${type}.isRequired`,
];
function initAutoFactory(WsProps) {
    if (!isProduction()) {
        const DefaultOption = { maxDepth: 3, topName: "WsPropsType" };
        const baseSource = [
            null,
            undefined,
            1,
            "",
            false,
            () => { },
            Symbol.for(""),
            new Date(),
            /\w/,
            Promise.resolve(),
        ];
        const seniorSource = [[], {}];
        let typeArray = [];
        const exec = { option: DefaultOption };
        const getValidator = (type) => {
            type = type.toLocaleLowerCase();
            // var vaFunc = WsProps[type];
            if (type === getType(toTypeString({})).toLocaleLowerCase())
                type = "shape($)";
            // if (!!vaFunc === false) type = 'any';
            return Wrapper(type, exec.option.topName);
        };
        baseSource.forEach((item) => {
            const objStr = toTypeString(item);
            const minType = getType(objStr);
            exec[`exec${minType}`] = function (props, value, isRequire = false) {
                return (typeArray.find((item) => item.type === objStr)?.validator[Number(isRequire)] || "");
            };
        });
        exec.execAny = function (props, value, isRequire = false) {
            return (typeArray.find((item) => item.type === toTypeString(null))?.validator[Number(isRequire)] || "");
        };
        exec.execUnknown = function (props, value, isRequire = false) {
            const objStr = toTypeString(value);
            const info = typeArray.find((item) => item.type === objStr);
            if (!!info === false) {
                let minType = getType(objStr);
                minType = minType.toLocaleLowerCase();
                if (!!WsProps[minType] === true)
                    return Wrapper(minType, exec.option.topName)[Number(isRequire)];
            }
            return exec.execAny(props, value, isRequire);
        };
        // exec.execUndefined = exec.execAny;
        // exec.execNull = exec.execAny;
        exec.execObject = function (props, target, isRequire = false, depth = 0, option) {
            const objInfo = typeArray.find((item) => item.type === toTypeString({})) ||
                {};
            if (Object.keys(target).length === 0 || depth === option.maxDepth)
                return Wrapper(objInfo.minType.toLocaleLowerCase(), exec.option.topName)[Number(isRequire)];
            const result = {};
            Object.keys(target).forEach((key) => {
                const value = target[key];
                const func = PropsPlugin.switchExec(value, key, target);
                if (func && typeof func === typeof Function) {
                    result[key] = func(props, value, isRequire, depth + 1, option);
                }
            });
            if (depth === 0)
                return result;
            const { validator } = objInfo;
            const template = validator[Number(isRequire)];
            return template.replace("$", JSON.stringify(result));
        };
        exec.execArray = function (props, value = [], isRequire = false, depth = 0, option) {
            const sourceInfo = typeArray.find((item) => item.type === toTypeString([])) ||
                {};
            if (value.length === 0 || depth === option.maxDepth)
                return sourceInfo.validator[Number(isRequire)];
            const execFunc = PropsPlugin.switchExec(value[0]);
            const validator = sourceInfo.validator[Number(false)];
            //TODO:isRequire 是否直接给false
            const result = `${validator}Of(${execFunc(props, value[0], false, depth + 1, option)})${isRequire ? ".isRequired" : ""}`;
            // const
            return result;
        };
        PropsPlugin.switchExec = function switchExec(source, key, target) {
            const type = typeArray.find((item) => item.type === toTypeString(source));
            let execFunc = null;
            const fName = type ? `exec${type.minType}` : null;
            if (fName && !!exec[fName] === true) {
                execFunc = exec[fName];
            }
            else {
                const plugin = PropsPlugin.extends.find((item) => item.test(source));
                if (plugin) {
                    const { choice, execMap } = plugin;
                    const execName = choice(source, key, target);
                    execFunc = execMap[execName] || exec[execName];
                }
            }
            return execFunc || exec.execAny;
        };
        PropsPlugin.installType = function (source, isRequire = false) {
            typeArray = (function (target) {
                return target.map((item) => {
                    const targetType = toTypeString(item);
                    const minType = getType(targetType);
                    const validator = getValidator(minType);
                    return { type: targetType, minType, validator };
                });
            })([...baseSource, ...seniorSource]);
        };
        PropsPlugin.extendsFactory = function (plugin) {
            if (!!plugin.test &&
                typeof plugin.test === "function" &&
                !!plugin.choice &&
                typeof plugin.choice === "function" &&
                !!plugin.execMap) {
                PropsPlugin.extends.unshift(plugin);
            }
        };
        PropsPlugin.__getID = () => {
            const IDS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            const IDL = IDS.length;
            let UID = "";
            for (let i = 0; i < 10; i++) {
                UID += IDS.charAt(Math.floor(Math.random() * IDL));
            }
            return UID;
        };
        PropsPlugin.getTypeSpec = function (source, isRequire = true, option = DefaultOption) {
            option = { ...DefaultOption, ...option };
            exec.option = option;
            PropsPlugin.installType();
            const result = PropsPlugin.switchExec(source)("", source, isRequire, 0, option);
            typeof result === "object" &&
                (result.__tag = `'${PropsPlugin.__getID()}'`);
            return JSON.stringify(result, null, 2)
                .replace(/\n/g, "")
                .replace(/"/g, "")
                .replace(/\\/g, "");
        };
        extendTypedArray(PropsPlugin);
        extendBigInt(PropsPlugin);
    }
    WsProps.PropsPlugin = PropsPlugin;
    return PropsPlugin;
}
function extendTypedArray(plugin) {
    // 对typedArray 扩展
    plugin.extendsFactory &&
        plugin.extendsFactory({
            test: (source) => {
                const type = toTypeString(new ArrayBuffer(0));
                const minType = getType(type);
                if (source &&
                    !!source.buffer &&
                    Object.prototype.toString.call(source.buffer) === type)
                    return true;
                if (source && source.constructor && source.constructor.name === minType)
                    return true;
                return false;
            },
            choice: (props, propName, typeObject) => "execTypedArray",
            execMap: {
                execTypedArray: function (props, value, isRequire = false, depth = 0, option) {
                    const type = toTypeString(value);
                    const minType = getType(type)
                        .toLocaleLowerCase()
                        .replace("array", "");
                    return `${Wrapper(minType, option.topName)[Number(isRequire)]}`;
                },
            },
        });
}
function extendBigInt(plugin) {
    plugin.extendsFactory &&
        plugin.extendsFactory({
            test: (source) => {
                return typeof source === typeof 1n;
            },
            choice: (props, propName, typeObject) => "bigint",
            execMap: {
                bigint: function (props, value, isRequire = false, depth = 0, option) {
                    const type = toTypeString(value);
                    const minType = getType(type).toLocaleLowerCase();
                    return `${Wrapper(minType, option.topName)[Number(isRequire)]}`;
                },
            },
        });
}

;// CONCATENATED MODULE: ./src/DefaultValue/index.ts
function initDefaultValue(ws) { }

;// CONCATENATED MODULE: ./src/ExtendProps/DateValidator.ts
/*
 * @Author: zihao.zhu@github.com
 * @Date: 2022-01-21 14:20:58
 * @Last Modified by:   zihao.zhu
 * @Last Modified time: 2022-01-21 14:20:58
 * @desc : date 验证
 */

/**
 * date String '2021-11-11 00:00:00' 进行匹配
 * /(\d){4}?-(\d){2}?-(\d){2}? (\d){2}?:(\d){2}?:(\d){2}?/
 * @param regex
 * @returns
 */
function dateValidatorCheckString(regex) {
    function validate(props, propName) {
        const propValue = props[propName];
        if (regex && regex.test(propValue) === false) {
            const preciseType = getPreciseType(propValue);
            return new Error(`${JSON.stringify(props)}-[${propName}]-[${propValue}] is type ${preciseType} , but expected value is test(/^${regex}$/)`);
        }
        return null;
    }
    return createChainableTypeChecker(validate);
}
/**
 * 可以被解析成日期的值
 */
const dateValidatorCheck = ((check) => {
    function validate(props, propName) {
        const propValue = props[propName];
        if (check && !check(propValue)) {
            const preciseType = getPreciseType(propValue);
            return new Error(`${JSON.stringify(props)}-[${propName}]-[${propValue}] is type ${preciseType} , but expected value is test by Date.parse`);
        }
        return null;
    }
    return createChainableTypeChecker(validate);
})((data) => {
    const date = Date.parse(data);
    return typeof date === 'number' && !isNaN(date) && date > 0;
});

;// CONCATENATED MODULE: ./src/ExtendProps/TypedArray.ts
/*
 * @Author: zihao.zhu@github.com
 * @Date: 2022-01-21 14:21:35
 * @Last Modified by:   zihao.zhu
 * @Last Modified time: 2022-01-21 14:21:35
 * @desc : typedArray
 */
/* eslint-disable  */

/* harmony default export */ const TypedArray = ({
    buffer: createExpectedTypeChecker(toTypeString(new ArrayBuffer(0))),
    dataview: createExpectedTypeChecker(toTypeString(new DataView(new ArrayBuffer(0)))),
    uint8: createExpectedTypeChecker(toTypeString(new Uint8Array())),
    uint16: createExpectedTypeChecker(toTypeString(new Uint16Array())),
    uint32: createExpectedTypeChecker(toTypeString(new Uint32Array())),
    int8: createExpectedTypeChecker(toTypeString(new Int8Array())),
    int16: createExpectedTypeChecker(toTypeString(new Int16Array())),
    int32: createExpectedTypeChecker(toTypeString(new Int32Array())),
    float32: createExpectedTypeChecker(toTypeString(new Float32Array())),
    float64: createExpectedTypeChecker(toTypeString(new Float64Array())),
    uint8clamped: createExpectedTypeChecker(toTypeString(new Uint8ClampedArray())),
});

;// CONCATENATED MODULE: ./src/ExtendProps/Nullly.ts
/*
 * @Author: zihao.zhu@github.com
 * @Date: 2022-01-21 14:21:10
 * @Last Modified by:   zihao.zhu
 * @Last Modified time: 2022-01-21 14:21:10
 * @desc : undefined / null
 */
/* eslint-disable */

function createNullUndefinedTypeChecker(validate) {
    function checkType(isRequired, props, propName) {
        const value = props[propName];
        if (value === null || value === undefined) {
            return validate(props, propName);
        }
        else {
            if (isRequired) {
                return new Error(`The \`${propName}\` is null/Undefined as required , but its value is ${toTypeString(value)}`);
            }
            return null;
        }
    }
    const chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
}
function Nullly_createExpectedTypeChecker(expectedType) {
    function validate(props, propName) {
        const propValue = props[propName];
        const propType = toTypeString(propValue);
        if (propType !== expectedType) {
            const preciseType = getPreciseType(propValue);
            return new Error(`Invalid ${propName} value is ${propValue} ,but expected ${expectedType} but get ${preciseType}`);
        }
        return null;
    }
    return createNullUndefinedTypeChecker(validate);
}
/* harmony default export */ const Nullly = ({
    null: Nullly_createExpectedTypeChecker(toTypeString(null)),
    undefined: Nullly_createExpectedTypeChecker(toTypeString(undefined)),
});

;// CONCATENATED MODULE: ./src/ExtendProps/Promise.ts
/*
 * @Author: zihao.zhu@github.com
 * @Date: 2022-01-21 14:21:29
 * @Last Modified by:   zihao.zhu
 * @Last Modified time: 2022-01-21 14:21:29
 * @desc : promise
 */
/* eslint-disable */

/* harmony default export */ const ExtendProps_Promise = ({
    promise: createExpectedTypeChecker(toTypeString(new Promise(() => { }))),
});

;// CONCATENATED MODULE: ./src/ExtendProps/index.ts
/* eslint-disable  */




/* harmony default export */ const ExtendProps = ({
    dateString: dateValidatorCheckString(/(\d){4}?-(\d){2}?-(\d){2}? (\d){2}?:(\d){2}?:(\d){2}?/),
    date: dateValidatorCheck,
    ...TypedArray,
    ...Nullly,
    ...ExtendProps_Promise,
});

;// CONCATENATED MODULE: ./src/UtilExtends/Promise.ts
/*
 * @Author: zihao.zhu@github.com
 * @Date: 2022-01-21 14:20:23
 * @Last Modified by: zihao.zhu
 * @Last Modified time: 2022-01-21 16:54:32
 * @desc : Promise 验证
 */
/* eslint-disable no-extra-boolean-cast */



(function (prototype) {
    if (!!prototype.validator)
        return;
    prototype.validator = function (typeSpec, handle) {
        if (!isProduction()) {
            const nextHandle = (source) => {
                const result = !!handle ? handle(source) : source;
                const error = checkPropTypes(typeSpec, result);
                if (typeof source === 'object' && source !== null) {
                    Object.defineProperty(source, '__props__error', {
                        configurable: false,
                        enumerable: false,
                        get: () => error,
                    });
                }
                error && validatorLog && validatorLog(source, typeSpec, error);
                return source;
            };
            return this.then(nextHandle);
        }
        return this.then((data) => data);
    };
})((window || undefined).Promise.prototype);

;// CONCATENATED MODULE: ./src/UtilExtends/WrapperApi.ts

function WrapperApi(Api, spec) {
    if (isProduction())
        Api;
    const createProxy = (api, specSource) => {
        Object.keys(api).forEach(key => {
            const target = api[key];
            if (typeof target === 'object') {
                let spec = specSource && specSource[key];
                if (typeof spec !== 'object')
                    spec = {};
                api[key] = createProxy(target, spec);
            }
        });
        return new Proxy(api, {
            get(target, key) {
                const source = target[key];
                if (typeof source === 'function') {
                    const spec = ((specSource && specSource[key]) || {});
                    return (...args) => {
                        return source(...args).validator(spec.spec, spec.handler);
                    };
                }
                return target[key];
            }
        });
    };
    return createProxy(Api, spec);
    // const keys = Object.keys(Api);
    // const newApi = {};
    // keys.forEach((key) => {
    //   const module = Api[key];
    //   const moduleSpec = SpecSpace.default[key];
    //   newApi[key] = new Proxy(module, {
    //     get(target, propKey) {
    //       const exec = target[propKey];
    //       const spec = moduleSpec[propKey as string];
    //       if (typeof exec === 'function' && typeof spec === 'object') {
    //         return (...args) => {
    //           return (exec(...args) as PromiseExtends<any>).validator(spec.spec, spec.handler);
    //         }
    //       }
    //       return exec;
    //     }
    //   })
    // })
    // return newApi;
}

;// CONCATENATED MODULE: ./src/UtilExtends/index.ts




;// CONCATENATED MODULE: ./src/index.ts
/*
 * @Author: zihao.zhu@github.com
 * @Date: 2022-01-21 14:19:46
 * @Last Modified by: zihao.zhu
 * @Last Modified time: 2022-03-09 15:08:11
 * @desc : 类型声明和验证
 */
/* eslint-disable @typescript-eslint/no-redeclare */







var RunEnv;
(function (RunEnv) {
    RunEnv["dev"] = "development";
    RunEnv["prod"] = "production";
})(RunEnv || (RunEnv = {}));
const WsPropsType = { env: RunEnv.dev };
function initValidator(source) {
    if (!Array.isArray(source))
        source = [source];
    source.forEach((item) => Object.getOwnPropertyNames(item).forEach((key) => {
        const target = item[key];
        WsPropsType[key] = target;
    }));
}
function extendsValidator(name, validator) {
    WsPropsType[name] = createChainableTypeChecker(validator);
}
initValidator([
    (external_commonjs_prop_types_commonjs2_prop_types_default()),
    ExtendProps,
    {
        checkPropTypes: checkPropTypes,
        boolean: (external_commonjs_prop_types_commonjs2_prop_types_default()).bool,
        function: (external_commonjs_prop_types_commonjs2_prop_types_default()).func,
        shape: createShapeTypeChecker,
        arrayOf: createArrayOfTypeChecker,
        // exact: createStrictShapeTypeChecker,
    },
    {
        extendsValidator,
        util: {
            createChainableTypeChecker: createChainableTypeChecker,
            createExpectedTypeChecker: createExpectedTypeChecker,
            validatorLog: validatorLog,
        },
        apiUtil: { WrapperApi: WrapperApi },
        setEnv: (env) => {
            WsPropsType.env = env;
        },
        // PropsPlugin,
    },
]);
initEnv(WsPropsType);
initAutoFactory(WsPropsType);
initDefaultValue(WsPropsType);
/* harmony default export */ const src = (WsPropsType);

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});