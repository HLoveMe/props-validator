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
  "Type": () => (/* binding */ Type),
  "default": () => (/* binding */ index_dev)
});

// EXTERNAL MODULE: external {"commonjs":"prop-types","commonjs2":"prop-types"}
var external_commonjs_prop_types_commonjs2_prop_types_ = __webpack_require__(73);
var external_commonjs_prop_types_commonjs2_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_prop_types_commonjs2_prop_types_);
;// CONCATENATED MODULE: ./src/Env/index.ts
var isProduction = function () { return true; };
function initEnv(option) {
    isProduction = function () {
        return option.env === 'production';
    };
}


;// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}

;// CONCATENATED MODULE: ./src/Error/index.ts

var ValidatorError = /** @class */ (function (_super) {
    __extends(ValidatorError, _super);
    function ValidatorError(msg, propsName, info, value) {
        var _this = _super.call(this, msg) || this;
        _this.struct = {
            propsName: "",
            value: undefined,
            expectedType: "",
            preciseType: ""
        };
        _this.name = 'ValidatorError';
        _this.propsName = propsName;
        _this.info = info;
        _this.value = value;
        return _this;
    }
    ValidatorError.prototype.toString = function () {
        var struct;
        if (this.info instanceof ObjectValidatorError || this.info instanceof ValidatorError) {
            this.struct = { propsName: this.info.propsName, value: '', expectedType: '', preciseType: '' };
            return this.info.toString();
        }
        else if (this.info instanceof Error) {
            // eslint-disable-next-line no-useless-escape
            var data = this.info.message.match(/(?<=(`))([\[\]\w<>\d\.]+)(?=(`))/g);
            if (data) {
                var propsName_1 = data[0], preciseType_1 = data[1], value_1 = data[2], expectedType_1 = data[3];
                struct = { propsName: propsName_1, value: value_1, expectedType: expectedType_1, preciseType: preciseType_1 };
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
        var propsName = struct.propsName, value = struct.value, expectedType = struct.expectedType, preciseType = struct.preciseType;
        //this.value ??
        return "\u5C5E\u6027:[".concat(propsName, "]\u7684\u503C\u7B49\u4E8E['").concat(value, "'],\u671F\u5F85\u4E3A ").concat(expectedType, " \u7C7B\u578B/\u503C\uFF0C\u5B9E\u9645\u7C7B\u578B/\u503C\uFF1A ").concat(preciseType, " .");
    };
    return ValidatorError;
}(Error));
var ObjectValidatorError = /** @class */ (function (_super) {
    __extends(ObjectValidatorError, _super);
    function ObjectValidatorError(msg, propsName, error) {
        var _this = _super.call(this, msg) || this;
        _this.name = 'ObjectValidatorError';
        _this.source = [];
        _this.source = error;
        _this.propsName = propsName;
        return _this;
    }
    ObjectValidatorError.prototype.toString = function () {
        // let result = `{${new Array(this.source.length).fill(0).map((_) => '"$$":"$$"').join(',')}}`;
        var result = {};
        this.source.forEach(function (item) {
            var info = item.toString();
            var propsName = item.struct.propsName;
            // result = result.replace(`$$`, propName);
            // result = result.replace(`$$`, info);
            result[propsName] = info;
        });
        return result;
    };
    return ObjectValidatorError;
}(Error));
function flattenError(objectError) {
    var result = {};
    Object.keys(objectError).forEach(function (key) {
        var value = objectError[key];
        if (!!value === false)
            return;
        if (!(value instanceof ObjectValidatorError)) {
            value = value instanceof ValidatorError ? value : new ValidatorError("".concat(key, " \u9A8C\u8BC1\u5931\u8D25"), key, value);
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


var toTypeString = Function.call.bind(Object.prototype.toString);
var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
var validatorSymbol = Symbol.for('validatorDisplayName');
var has = Function.call.bind(Object.prototype.hasOwnProperty);
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
    var propType = getPropType(propValue);
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
    var propType = typeof propValue;
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
    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
}
function wrapperError(propsName, value, expectedType, preciseType) {
    return new ValidatorError("".concat(propsName, " \u9A8C\u8BC1\u5931\u8D25"), propsName, {
        propsName: propsName,
        value: value,
        expectedType: expectedType,
        preciseType: preciseType
    });
}
/***
 * 验证属性类型 是否为给定的值
 * createExpectedTypeChecker('[object Array]')
 */
function createExpectedTypeChecker(expectedType) {
    function validate(props, propName) {
        var propValue = props[propName];
        var propType = toTypeString(propValue);
        if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return wrapperError(propName, propValue, expectedType, preciseType);
        }
        return null;
    }
    return createChainableTypeChecker(validate);
}
function checkPropTypes(typeSpecs, values, showDifference) {
    if (showDifference === void 0) { showDifference = true; }
    if (isProduction())
        return null;
    var objectError = {};
    var error = null;
    for (var typeSpecName in typeSpecs) {
        if (typeSpecName === '__tag')
            continue;
        if (has(typeSpecs, typeSpecName)) {
            try {
                if (typeof typeSpecs[typeSpecName] !== 'function') {
                    var err = Error('验证函数类型错误');
                    err.name = 'Invariant Violation';
                    throw err;
                }
                error = typeSpecs[typeSpecName](values, typeSpecName, '', '', null, ReactPropTypesSecret);
                objectError[typeSpecName] = (!!error === false || error instanceof ObjectValidatorError) ? error : new ValidatorError("".concat(typeSpecName, " \u9A8C\u8BC1\u5931\u8D25"), typeSpecName, error, values[typeSpecName]);
            }
            catch (ex) {
                objectError = ex;
                break;
            }
        }
    }
    if (Object.values(objectError).filter(function ($1) { return !!$1 === true; }).length > 0) {
        if (showDifference)
            showDifferenceTable(typeSpecs, values, objectError);
        return new Error(flattenError(objectError));
    }
    return null;
}
function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
        var errors = [];
        var propValue = props[propName];
        if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return wrapperError(propName, propValue, '[object Array]', propType);
            // return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
        }
        for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
            error && errors.push(new ValidatorError("".concat(propFullName, " \u9A8C\u8BC1\u5931\u8D25"), propFullName, error, propValue));
        }
        return null;
    }
    return createChainableTypeChecker(validate);
}
function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
        var errors = [];
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
            return wrapperError(propName, propValue, 'object', propType);
        }
        for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (!checker) {
                continue;
            }
            var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
            error && errors.push(new ValidatorError("".concat(propFullName, " \u9A8C\u8BC1\u5931\u8D25"), propFullName, error, propValue));
        }
        if (errors.length > 0) {
            var objError = new ObjectValidatorError("\u9A8C\u8BC1\u9519\u8BEF\uFF1A".concat(propFullName), propFullName, errors);
            return objError;
        }
        return null;
    }
    return createChainableTypeChecker(validate);
}
function validatorLog(_, typeSpec, msg) {
    !isProduction() && console.log("Validator Error\u3002 [typeSpec.__tag]:[".concat(typeSpec.__tag, "] =>"), msg);
}


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
        var propValue = props[propName];
        if (regex && regex.test(propValue) === false) {
            var preciseType = getPreciseType(propValue);
            return new Error("".concat(JSON.stringify(props), "-[").concat(propName, "]-[").concat(propValue, "] is type ").concat(preciseType, " , but expected value is test(/^").concat(regex, "$/)"));
        }
        return null;
    }
    return createChainableTypeChecker(validate);
}
/**
 * 可以被解析成日期的值
 */
var dateValidatorCheck = (function (check) {
    function validate(props, propName) {
        var propValue = props[propName];
        if (check && !check(propValue)) {
            var preciseType = getPreciseType(propValue);
            return new Error("".concat(JSON.stringify(props), "-[").concat(propName, "]-[").concat(propValue, "] is type ").concat(preciseType, " , but expected value is test by Date.parse"));
        }
        return null;
    }
    return createChainableTypeChecker(validate);
})(function (data) {
    var date = Date.parse(data);
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
        var value = props[propName];
        if (value === null || value === undefined) {
            return validate(props, propName);
        }
        else {
            if (isRequired) {
                return new Error("The `".concat(propName, "` is null/Undefined as required , but its value is ").concat(toTypeString(value)));
            }
            return null;
        }
    }
    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
}
function Nullly_createExpectedTypeChecker(expectedType) {
    function validate(props, propName) {
        var propValue = props[propName];
        var propType = toTypeString(propValue);
        if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new Error("Invalid ".concat(propName, " value is ").concat(propValue, " ,but expected ").concat(expectedType, " but get ").concat(preciseType));
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
    promise: createExpectedTypeChecker(toTypeString(new Promise(function () { }))),
});

;// CONCATENATED MODULE: ./src/ExtendProps/index.ts

/* eslint-disable  */




/* harmony default export */ const ExtendProps = (__assign(__assign(__assign({ dateString: dateValidatorCheckString(/(\d){4}?-(\d){2}?-(\d){2}? (\d){2}?:(\d){2}?:(\d){2}?/), date: dateValidatorCheck }, TypedArray), Nullly), ExtendProps_Promise));

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
            var nextHandle = function (source) {
                var result = !!handle ? handle(source) : source;
                var error = checkPropTypes(typeSpec, result);
                if (typeof source === 'object' && source !== null) {
                    Object.defineProperty(source, '__props__error', {
                        configurable: false,
                        enumerable: false,
                        get: function () { return error; },
                    });
                }
                error && validatorLog && validatorLog(source, typeSpec, error);
                return source;
            };
            return this.then(nextHandle);
        }
        return this.then(function (data) { return data; });
    };
})((window || undefined).Promise.prototype);

;// CONCATENATED MODULE: ./src/UtilExtends/WrapperApi.ts

function WrapperApi(Api, spec) {
    if (isProduction())
        Api;
    var createProxy = function (api, specSource) {
        Object.keys(api).forEach(function (key) {
            var target = api[key];
            if (typeof target === 'object') {
                var spec_1 = specSource && specSource[key];
                if (typeof spec_1 !== 'object')
                    spec_1 = {};
                api[key] = createProxy(target, spec_1);
            }
        });
        return new Proxy(api, {
            get: function (target, key) {
                var source = target[key];
                if (typeof source === 'function') {
                    var spec_2 = ((specSource && specSource[key]) || {});
                    return function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return source.apply(void 0, args).validator(spec_2.spec, spec_2.handler);
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




;// CONCATENATED MODULE: ./src/InitRun.ts




var WsPropsType = { env: 'development' };
function initValidator(source) {
    if (!Array.isArray(source))
        source = [source];
    source.forEach(function (item) {
        return Object.getOwnPropertyNames(item).forEach(function (key) {
            var target = item[key];
            WsPropsType[key] = target;
        });
    });
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
        extendsValidator: extendsValidator,
        util: {
            createChainableTypeChecker: createChainableTypeChecker,
            createExpectedTypeChecker: createExpectedTypeChecker,
            validatorLog: validatorLog,
        },
        apiUtil: { WrapperApi: WrapperApi },
        setEnv: function (env) {
            WsPropsType.env = env;
        },
        // PropsPlugin,
    },
]);
/* harmony default export */ const InitRun = (WsPropsType);

;// CONCATENATED MODULE: ./src/DefaultValue/index.ts
function initDefaultValue(ws) { }

;// CONCATENATED MODULE: ./src/AutoFactory/index.ts
/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * @Author: zihao.zhu@github.com
 * @Date: 2022-01-14 16:17:32
 * @Last Modified by: zihao.zhu
 * @Last Modified time: 2022-07-20 11:16:43
 * @desc : 用于自动生成propsType的验证器
 * 1:基础数据
 * 2:数组 / 对象 / typedArray
 * 3:函数
 * 4:复杂对象嵌套
 */



var PropsPlugin = {
    extends: [],
    getTypeSpec: function () { return "{}"; },
    extendsFactory: function () { },
};
var getType = function (value) {
    var _a = value.match(/\[object (\w+)\]/) || [], _ = _a[0], target = _a[1];
    return target;
};
var Wrapper = function (type, topName) { return [
    "".concat(topName, ".").concat(type),
    "".concat(topName, ".").concat(type, ".isRequired"),
]; };
function initAutoFactory(WsProps) {
    if (!isProduction()) {
        var DefaultOption_1 = { maxDepth: 3, topName: "Type" };
        var baseSource_1 = [
            null,
            undefined,
            1,
            "",
            false,
            function () { },
            Symbol.for(""),
            new Date(),
            /\w/,
            Promise.resolve(),
        ];
        var seniorSource_1 = [[], {}];
        var typeArray_1 = [];
        var exec_1 = { option: DefaultOption_1 };
        var getValidator_1 = function (type) {
            type = type.toLocaleLowerCase();
            // var vaFunc = WsProps[type];
            if (type === getType(toTypeString({})).toLocaleLowerCase())
                type = "shape($)";
            // if (!!vaFunc === false) type = 'any';
            return Wrapper(type, exec_1.option.topName);
        };
        baseSource_1.forEach(function (item) {
            var objStr = toTypeString(item);
            var minType = getType(objStr);
            exec_1["exec".concat(minType)] = function (props, value, isRequire) {
                var _a;
                if (isRequire === void 0) { isRequire = false; }
                return (((_a = typeArray_1.find(function (item) { return item.type === objStr; })) === null || _a === void 0 ? void 0 : _a.validator[Number(isRequire)]) || "");
            };
        });
        exec_1.execAny = function (props, value, isRequire) {
            var _a;
            if (isRequire === void 0) { isRequire = false; }
            return (((_a = typeArray_1.find(function (item) { return item.type === toTypeString(null); })) === null || _a === void 0 ? void 0 : _a.validator[Number(isRequire)]) || "");
        };
        exec_1.execUnknown = function (props, value, isRequire) {
            if (isRequire === void 0) { isRequire = false; }
            var objStr = toTypeString(value);
            var info = typeArray_1.find(function (item) { return item.type === objStr; });
            if (!!info === false) {
                var minType = getType(objStr);
                minType = minType.toLocaleLowerCase();
                if (!!WsProps[minType] === true)
                    return Wrapper(minType, exec_1.option.topName)[Number(isRequire)];
            }
            return exec_1.execAny(props, value, isRequire);
        };
        // exec.execUndefined = exec.execAny;
        // exec.execNull = exec.execAny;
        exec_1.execObject = function (props, target, isRequire, depth, option) {
            if (isRequire === void 0) { isRequire = false; }
            if (depth === void 0) { depth = 0; }
            var objInfo = typeArray_1.find(function (item) { return item.type === toTypeString({}); }) ||
                {};
            if (Object.keys(target).length === 0 || depth === option.maxDepth)
                return Wrapper(objInfo.minType.toLocaleLowerCase(), exec_1.option.topName)[Number(isRequire)];
            var result = {};
            Object.keys(target).forEach(function (key) {
                var value = target[key];
                var func = PropsPlugin.switchExec(value, key, target);
                if (func && typeof func === typeof Function) {
                    result[key] = func(props, value, isRequire, depth + 1, option);
                }
            });
            if (depth === 0)
                return result;
            var validator = objInfo.validator;
            var template = validator[Number(isRequire)];
            return template.replace("$", JSON.stringify(result));
        };
        exec_1.execArray = function (props, value, isRequire, depth, option) {
            if (value === void 0) { value = []; }
            if (isRequire === void 0) { isRequire = false; }
            if (depth === void 0) { depth = 0; }
            var sourceInfo = typeArray_1.find(function (item) { return item.type === toTypeString([]); }) ||
                {};
            if (value.length === 0 || depth === option.maxDepth)
                return sourceInfo.validator[Number(isRequire)];
            var execFunc = PropsPlugin.switchExec(value[0]);
            var validator = sourceInfo.validator[Number(false)];
            //TODO:isRequire 是否直接给false
            var result = "".concat(validator, "Of(").concat(execFunc(props, value[0], false, depth + 1, option), ")").concat(isRequire ? ".isRequired" : "");
            // const
            return result;
        };
        PropsPlugin.switchExec = function switchExec(source, key, target) {
            var type = typeArray_1.find(function (item) { return item.type === toTypeString(source); });
            var execFunc = null;
            var fName = type ? "exec".concat(type.minType) : null;
            if (fName && !!exec_1[fName] === true) {
                execFunc = exec_1[fName];
            }
            else {
                var plugin = PropsPlugin.extends.find(function (item) {
                    return item.test(source);
                });
                if (plugin) {
                    var choice = plugin.choice, execMap = plugin.execMap;
                    var execName = choice(source, key, target);
                    execFunc = execMap[execName] || exec_1[execName];
                }
            }
            return execFunc || exec_1.execAny;
        };
        PropsPlugin.installType = function (source, isRequire) {
            if (isRequire === void 0) { isRequire = false; }
            typeArray_1 = (function (target) {
                return target.map(function (item) {
                    var targetType = toTypeString(item);
                    var minType = getType(targetType);
                    var validator = getValidator_1(minType);
                    return { type: targetType, minType: minType, validator: validator };
                });
            })(__spreadArray(__spreadArray([], baseSource_1, true), seniorSource_1, true));
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
        PropsPlugin.__getID = function () {
            var IDS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var IDL = IDS.length;
            var UID = "";
            for (var i = 0; i < 10; i++) {
                UID += IDS.charAt(Math.floor(Math.random() * IDL));
            }
            return UID;
        };
        PropsPlugin.getTypeSpec = function (source, isRequire, option) {
            if (isRequire === void 0) { isRequire = true; }
            if (option === void 0) { option = DefaultOption_1; }
            option = __assign(__assign({}, DefaultOption_1), option);
            exec_1.option = option;
            PropsPlugin.installType();
            var result = PropsPlugin.switchExec(source)("", source, isRequire, 0, option);
            typeof result === "object" &&
                (result.__tag = "'".concat(PropsPlugin.__getID(), "'"));
            var topName = option.topName === DefaultOption_1.topName ? DefaultOption_1.topName : "".concat(DefaultOption_1.topName, " as ").concat(option.topName);
            var Spec = "\n  import OV , { ".concat(topName, "} from 'types-format';\n  const Spec = ").concat(JSON.stringify(result, null, 2), ";\n");
            console.info(Spec);
            return Spec;
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
            test: function (source) {
                var type = toTypeString(new ArrayBuffer(0));
                var minType = getType(type);
                if (source &&
                    !!source.buffer &&
                    Object.prototype.toString.call(source.buffer) === type)
                    return true;
                if (source && source.constructor && source.constructor.name === minType)
                    return true;
                return false;
            },
            choice: function (props, propName, typeObject) {
                return "execTypedArray";
            },
            execMap: {
                execTypedArray: function (props, value, isRequire, depth, option) {
                    if (isRequire === void 0) { isRequire = false; }
                    if (depth === void 0) { depth = 0; }
                    var type = toTypeString(value);
                    var minType = getType(type)
                        .toLocaleLowerCase()
                        .replace("array", "");
                    return "".concat(Wrapper(minType, option.topName)[Number(isRequire)]);
                },
            },
        });
}
function extendBigInt(plugin) {
    // plugin.extendsFactory &&
    //   plugin.extendsFactory({
    //     test: (source: any) => {
    //       return typeof source === typeof 1n;
    //     },
    //     choice: (props: any, propName: string, typeObject: TypeObject): string =>
    //       "bigint",
    //     execMap: {
    //       bigint: function (
    //         props: any,
    //         value: any,
    //         isRequire: boolean = false,
    //         depth = 0,
    //         option: FactoryOption
    //       ): string {
    //         const type = toTypeString(value);
    //         const minType = getType(type).toLocaleLowerCase();
    //         return `${Wrapper(minType, option.topName)[Number(isRequire)]}`;
    //       },
    //     },
    //   } as unknown as PluginExec);
}

;// CONCATENATED MODULE: ./src/index.dev.ts




initEnv(InitRun);
initAutoFactory(InitRun);
initDefaultValue(InitRun);
InitRun.setEnv('development');
var Type = InitRun;
/* harmony default export */ const index_dev = (InitRun);

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});