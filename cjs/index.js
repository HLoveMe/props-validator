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
  "default": () => (/* binding */ dist)
});

// EXTERNAL MODULE: external {"commonjs":"prop-types","commonjs2":"prop-types"}
var external_commonjs_prop_types_commonjs2_prop_types_ = __webpack_require__(73);
var external_commonjs_prop_types_commonjs2_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_prop_types_commonjs2_prop_types_);
;// CONCATENATED MODULE: ./dist/Env/index.js
var isProduction = function isProduction() {
  return true;
};

function initEnv(option) {
  isProduction = function isProduction() {
    return option.env === 'production';
  };
}


;// CONCATENATED MODULE: ./dist/Error/index.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ValidatorError = /*#__PURE__*/function (_Error) {
  _inherits(ValidatorError, _Error);

  var _super = _createSuper(ValidatorError);

  function ValidatorError(msg, propsName, info, value) {
    var _this;

    _classCallCheck(this, ValidatorError);

    _this = _super.call(this, msg);

    _defineProperty(_assertThisInitialized(_this), "struct", {
      propsName: "",
      value: undefined,
      expectedType: "",
      preciseType: ""
    });

    _defineProperty(_assertThisInitialized(_this), "name", 'ValidatorError');

    _defineProperty(_assertThisInitialized(_this), "propsName", void 0);

    _defineProperty(_assertThisInitialized(_this), "info", void 0);

    _defineProperty(_assertThisInitialized(_this), "value", void 0);

    _this.propsName = propsName;
    _this.info = info;
    _this.value = value;
    return _this;
  }

  _createClass(ValidatorError, [{
    key: "toString",
    value: function toString() {
      var struct;

      if (this.info instanceof ObjectValidatorError || this.info instanceof ValidatorError) {
        this.struct = {
          propsName: this.info.propsName,
          value: '',
          expectedType: '',
          preciseType: ''
        };
        return this.info.toString();
      } else if (this.info instanceof Error) {
        // eslint-disable-next-line no-useless-escape
        var data = this.info.message.match(/(?<=(`))([\[\]\w<>\d\.]+)(?=(`))/g);

        if (data) {
          var _data = _slicedToArray(data, 4),
              _propsName = _data[0],
              _preciseType = _data[1],
              _value = _data[2],
              _expectedType = _data[3];

          struct = {
            propsName: _propsName,
            value: _value,
            expectedType: _expectedType,
            preciseType: _preciseType
          };
        } else {
          //this.info.message 
          return this.info.message; // struct = { propsName: 'ValidatorError 解析值错误', value: '', expectedType: '', preciseType: '' }
        }
      } else {
        struct = this.info;
      }

      this.struct = struct;
      var _struct = struct,
          propsName = _struct.propsName,
          value = _struct.value,
          expectedType = _struct.expectedType,
          preciseType = _struct.preciseType; //this.value ??

      return "\u5C5E\u6027:[".concat(propsName, "]\u7684\u503C\u7B49\u4E8E['").concat(value, "'],\u671F\u5F85\u4E3A ").concat(expectedType, " \u7C7B\u578B/\u503C\uFF0C\u5B9E\u9645\u7C7B\u578B/\u503C\uFF1A ").concat(preciseType, " .");
    }
  }]);

  return ValidatorError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

var ObjectValidatorError = /*#__PURE__*/function (_Error2) {
  _inherits(ObjectValidatorError, _Error2);

  var _super2 = _createSuper(ObjectValidatorError);

  function ObjectValidatorError(msg, propsName, error) {
    var _this2;

    _classCallCheck(this, ObjectValidatorError);

    _this2 = _super2.call(this, msg);

    _defineProperty(_assertThisInitialized(_this2), "name", 'ObjectValidatorError');

    _defineProperty(_assertThisInitialized(_this2), "source", []);

    _defineProperty(_assertThisInitialized(_this2), "propsName", void 0);

    _this2.source = error;
    _this2.propsName = propsName;
    return _this2;
  }

  _createClass(ObjectValidatorError, [{
    key: "toString",
    value: function toString() {
      // let result = `{${new Array(this.source.length).fill(0).map((_) => '"$$":"$$"').join(',')}}`;
      var result = {};
      this.source.forEach(function (item) {
        var info = item.toString();
        var propsName = item.struct.propsName; // result = result.replace(`$$`, propName);
        // result = result.replace(`$$`, info);

        result[propsName] = info;
      });
      return result;
    }
  }]);

  return ObjectValidatorError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

function flattenError(objectError) {
  var result = {};
  Object.keys(objectError).forEach(function (key) {
    var value = objectError[key];
    if (!!value === false) return;

    if (!(value instanceof ObjectValidatorError)) {
      value = value instanceof ValidatorError ? value : new ValidatorError("".concat(key, " \u9A8C\u8BC1\u5931\u8D25"), key, value);
    }

    result[key] = value.toString();
  });
  return JSON.stringify(result, null, 2);
}

function showDifferenceTable(typeSpecs, value, objectError) {// console.log('object-validator:', error, value);
  // const v_key = Object.keys(value);
  // var languages = {
  //   csharp: { name: "C#", paradigm: "object-oriented" },
  //   fsharp: { name: "F#", paradigm: "functional" }
  // };
}


;// CONCATENATED MODULE: ./dist/util.js
function util_typeof(obj) { "@babel/helpers - typeof"; return util_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, util_typeof(obj); }



var toTypeString = Function.call.bind(Object.prototype.toString);
var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
var validatorSymbol = Symbol["for"]('validatorDisplayName');
var has = Function.call.bind(Object.prototype.hasOwnProperty);

function isSymbol(propType, propValue) {
  if (propType === 'symbol') return true;
  if (!propValue) return false;
  if (propValue['@@toStringTag'] === 'Symbol') return true;
  if (typeof Symbol === 'function' && propValue instanceof Symbol) return true;
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
    } else if (propValue instanceof RegExp) {
      return 'regexp';
    }
  }

  return propType;
}

function getPropType(propValue) {
  var propType = util_typeof(propValue);

  if (Array.isArray(propValue)) return 'array';
  if (propValue instanceof RegExp) return 'object';
  if (isSymbol(propType, propValue)) return 'symbol';
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
    } else {
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

function checkPropTypes(typeSpecs, values) {
  var showDifference = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (isProduction()) return null;
  var objectError = {};
  var error = null;

  for (var typeSpecName in typeSpecs) {
    if (typeSpecName === '__tag') continue;

    if (has(typeSpecs, typeSpecName)) {
      try {
        if (typeof typeSpecs[typeSpecName] !== 'function') {
          var err = Error('验证函数类型错误');
          err.name = 'Invariant Violation';
          throw err;
        }

        error = typeSpecs[typeSpecName](values, typeSpecName, '', '', null, ReactPropTypesSecret);
        objectError[typeSpecName] = !!error === false || error instanceof ObjectValidatorError ? error : new ValidatorError("".concat(typeSpecName, " \u9A8C\u8BC1\u5931\u8D25"), typeSpecName, error, values[typeSpecName]);
      } catch (ex) {
        objectError = ex;
        break;
      }
    }
  }

  if (Object.values(objectError).filter(function ($1) {
    return !!$1 === true;
  }).length > 0) {
    if (showDifference) showDifferenceTable(typeSpecs, values, objectError);
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
      return wrapperError(propName, propValue, '[object Array]', propType); // return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
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


;// CONCATENATED MODULE: ./dist/AutoFactory/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { AutoFactory_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function AutoFactory_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function AutoFactory_typeof(obj) { "@babel/helpers - typeof"; return AutoFactory_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, AutoFactory_typeof(obj); }

function AutoFactory_slicedToArray(arr, i) { return AutoFactory_arrayWithHoles(arr) || AutoFactory_iterableToArrayLimit(arr, i) || AutoFactory_unsupportedIterableToArray(arr, i) || AutoFactory_nonIterableRest(); }

function AutoFactory_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function AutoFactory_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return AutoFactory_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return AutoFactory_arrayLikeToArray(o, minLen); }

function AutoFactory_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function AutoFactory_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function AutoFactory_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable @typescript-eslint/no-unused-vars */

/*
 * @Author: zihao.zhu@united-imaging.com
 * @Date: 2022-01-14 16:17:32
 * @Last Modified by: zihao.zhu
 * @Last Modified time: 2022-02-22 17:23:16
 * @desc : 用于自动生成propsType的验证器
 * 1:基础数据
 * 2:数组 / 对象 / typedArray
 * 3:函数
 * 4:复杂对象嵌套
 */


var PropsPlugin = {
  "extends": [],
  getTypeSpec: function getTypeSpec() {
    return "{}";
  },
  extendsFactory: function extendsFactory() {}
};

var getType = function getType(value) {
  var _ref = value.match(/\[object (\w+)\]/) || [],
      _ref2 = AutoFactory_slicedToArray(_ref, 2),
      _ = _ref2[0],
      target = _ref2[1];

  return target;
};

var Wrapper = function Wrapper(type, topName) {
  return ["".concat(topName, ".").concat(type), "".concat(topName, ".").concat(type, ".isRequired")];
};

function initAutoFactory(WsProps) {
  if (!isProduction()) {
    var DefaultOption = {
      maxDepth: 3,
      topName: "WsPropsType"
    };
    var baseSource = [null, undefined, 1, "", false, function () {}, Symbol["for"](""), new Date(), /\w/, Promise.resolve()];
    var seniorSource = [[], {}];
    var typeArray = [];
    var exec = {
      option: DefaultOption
    };

    var getValidator = function getValidator(type) {
      type = type.toLocaleLowerCase(); // var vaFunc = WsProps[type];

      if (type === getType(toTypeString({})).toLocaleLowerCase()) type = "shape($)"; // if (!!vaFunc === false) type = 'any';

      return Wrapper(type, exec.option.topName);
    };

    baseSource.forEach(function (item) {
      var objStr = toTypeString(item);
      var minType = getType(objStr);

      exec["exec".concat(minType)] = function (props, value) {
        var _typeArray$find;

        var isRequire = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        return ((_typeArray$find = typeArray.find(function (item) {
          return item.type === objStr;
        })) === null || _typeArray$find === void 0 ? void 0 : _typeArray$find.validator[Number(isRequire)]) || "";
      };
    });

    exec.execAny = function (props, value) {
      var _typeArray$find2;

      var isRequire = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return ((_typeArray$find2 = typeArray.find(function (item) {
        return item.type === toTypeString(null);
      })) === null || _typeArray$find2 === void 0 ? void 0 : _typeArray$find2.validator[Number(isRequire)]) || "";
    };

    exec.execUnknown = function (props, value) {
      var isRequire = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var objStr = toTypeString(value);
      var info = typeArray.find(function (item) {
        return item.type === objStr;
      });

      if (!!info === false) {
        var minType = getType(objStr);
        minType = minType.toLocaleLowerCase();
        if (!!WsProps[minType] === true) return Wrapper(minType, exec.option.topName)[Number(isRequire)];
      }

      return exec.execAny(props, value, isRequire);
    }; // exec.execUndefined = exec.execAny;
    // exec.execNull = exec.execAny;


    exec.execObject = function (props, target) {
      var isRequire = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var depth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var option = arguments.length > 4 ? arguments[4] : undefined;
      var objInfo = typeArray.find(function (item) {
        return item.type === toTypeString({});
      }) || {};
      if (Object.keys(target).length === 0 || depth === option.maxDepth) return Wrapper(objInfo.minType.toLocaleLowerCase(), exec.option.topName)[Number(isRequire)];
      var result = {};
      Object.keys(target).forEach(function (key) {
        var value = target[key];
        var func = PropsPlugin.switchExec(value, key, target);

        if (func && AutoFactory_typeof(func) === (typeof Function === "undefined" ? "undefined" : AutoFactory_typeof(Function))) {
          result[key] = func(props, value, isRequire, depth + 1, option);
        }
      });
      if (depth === 0) return result;
      var validator = objInfo.validator;
      var template = validator[Number(isRequire)];
      return template.replace("$", JSON.stringify(result));
    };

    exec.execArray = function (props) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var isRequire = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var depth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var option = arguments.length > 4 ? arguments[4] : undefined;
      var sourceInfo = typeArray.find(function (item) {
        return item.type === toTypeString([]);
      }) || {};
      if (value.length === 0 || depth === option.maxDepth) return sourceInfo.validator[Number(isRequire)];
      var execFunc = PropsPlugin.switchExec(value[0]);
      var validator = sourceInfo.validator[Number(false)]; //TODO:isRequire 是否直接给false

      var result = "".concat(validator, "Of(").concat(execFunc(props, value[0], false, depth + 1, option), ")").concat(isRequire ? ".isRequired" : ""); // const

      return result;
    };

    PropsPlugin.switchExec = function switchExec(source, key, target) {
      var type = typeArray.find(function (item) {
        return item.type === toTypeString(source);
      });
      var execFunc = null;
      var fName = type ? "exec".concat(type.minType) : null;

      if (fName && !!exec[fName] === true) {
        execFunc = exec[fName];
      } else {
        var plugin = PropsPlugin["extends"].find(function (item) {
          return item.test(source);
        });

        if (plugin) {
          var choice = plugin.choice,
              execMap = plugin.execMap;
          var execName = choice(source, key, target);
          execFunc = execMap[execName] || exec[execName];
        }
      }

      return execFunc || exec.execAny;
    };

    PropsPlugin.installType = function (source) {
      var isRequire = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      typeArray = function (target) {
        return target.map(function (item) {
          var targetType = toTypeString(item);
          var minType = getType(targetType);
          var validator = getValidator(minType);
          return {
            type: targetType,
            minType: minType,
            validator: validator
          };
        });
      }([].concat(baseSource, seniorSource));
    };

    PropsPlugin.extendsFactory = function (plugin) {
      if (!!plugin.test && typeof plugin.test === "function" && !!plugin.choice && typeof plugin.choice === "function" && !!plugin.execMap) {
        PropsPlugin["extends"].unshift(plugin);
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

    PropsPlugin.getTypeSpec = function (source) {
      var isRequire = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DefaultOption;
      option = _objectSpread(_objectSpread({}, DefaultOption), option);
      exec.option = option;
      PropsPlugin.installType();
      var result = PropsPlugin.switchExec(source)("", source, isRequire, 0, option);
      AutoFactory_typeof(result) === "object" && (result.__tag = "'".concat(PropsPlugin.__getID(), "'"));
      return JSON.stringify(result, null, 2).replace(/\n/g, "").replace(/"/g, "").replace(/\\/g, "");
    };

    extendTypedArray(PropsPlugin);
    extendBigInt(PropsPlugin);
  }

  WsProps.PropsPlugin = PropsPlugin;
  return PropsPlugin;
}

function extendTypedArray(plugin) {
  // 对typedArray 扩展
  plugin.extendsFactory && plugin.extendsFactory({
    test: function test(source) {
      var type = toTypeString(new ArrayBuffer(0));
      var minType = getType(type);
      if (source && !!source.buffer && Object.prototype.toString.call(source.buffer) === type) return true;
      if (source && source.constructor && source.constructor.name === minType) return true;
      return false;
    },
    choice: function choice(props, propName, typeObject) {
      return "execTypedArray";
    },
    execMap: {
      execTypedArray: function execTypedArray(props, value) {
        var isRequire = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var depth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var option = arguments.length > 4 ? arguments[4] : undefined;
        var type = toTypeString(value);
        var minType = getType(type).toLocaleLowerCase().replace("array", "");
        return "".concat(Wrapper(minType, option.topName)[Number(isRequire)]);
      }
    }
  });
}

function extendBigInt(plugin) {
  plugin.extendsFactory && plugin.extendsFactory({
    test: function test(source) {
      return AutoFactory_typeof(source) === AutoFactory_typeof(1n);
    },
    choice: function choice(props, propName, typeObject) {
      return "bigint";
    },
    execMap: {
      bigint: function bigint(props, value) {
        var isRequire = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var depth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var option = arguments.length > 4 ? arguments[4] : undefined;
        var type = toTypeString(value);
        var minType = getType(type).toLocaleLowerCase();
        return "".concat(Wrapper(minType, option.topName)[Number(isRequire)]);
      }
    }
  });
}
;// CONCATENATED MODULE: ./dist/DefaultValue/index.js
function initDefaultValue(ws) {}
;// CONCATENATED MODULE: ./dist/ExtendProps/DateValidator.js
/*
 * @Author: zihao.zhu@united-imaging.com
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

var dateValidatorCheck = function (check) {
  function validate(props, propName) {
    var propValue = props[propName];

    if (check && !check(propValue)) {
      var preciseType = getPreciseType(propValue);
      return new Error("".concat(JSON.stringify(props), "-[").concat(propName, "]-[").concat(propValue, "] is type ").concat(preciseType, " , but expected value is test by Date.parse"));
    }

    return null;
  }

  return createChainableTypeChecker(validate);
}(function (data) {
  var date = Date.parse(data);
  return typeof date === 'number' && !isNaN(date) && date > 0;
});
;// CONCATENATED MODULE: ./dist/ExtendProps/TypedArray.js
/*
 * @Author: zihao.zhu@united-imaging.com
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
  uint8clamped: createExpectedTypeChecker(toTypeString(new Uint8ClampedArray()))
});
;// CONCATENATED MODULE: ./dist/ExtendProps/Nullly.js
/*
 * @Author: zihao.zhu@united-imaging.com
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
    } else {
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
  "null": Nullly_createExpectedTypeChecker(toTypeString(null)),
  undefined: Nullly_createExpectedTypeChecker(toTypeString(undefined))
});
;// CONCATENATED MODULE: ./dist/ExtendProps/Promise.js
/*
 * @Author: zihao.zhu@united-imaging.com
 * @Date: 2022-01-21 14:21:29
 * @Last Modified by:   zihao.zhu
 * @Last Modified time: 2022-01-21 14:21:29
 * @desc : promise
 */

/* eslint-disable */

/* harmony default export */ const ExtendProps_Promise = ({
  promise: createExpectedTypeChecker(toTypeString(new Promise(function () {})))
});
;// CONCATENATED MODULE: ./dist/ExtendProps/index.js
function ExtendProps_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function ExtendProps_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ExtendProps_ownKeys(Object(source), !0).forEach(function (key) { ExtendProps_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ExtendProps_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function ExtendProps_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable  */




/* harmony default export */ const ExtendProps = (ExtendProps_objectSpread(ExtendProps_objectSpread(ExtendProps_objectSpread({
  dateString: dateValidatorCheckString(/(\d){4}?-(\d){2}?-(\d){2}? (\d){2}?:(\d){2}?:(\d){2}?/),
  date: dateValidatorCheck
}, TypedArray), Nullly), ExtendProps_Promise));
;// CONCATENATED MODULE: ./dist/UtilExtends/Promise.js
function Promise_typeof(obj) { "@babel/helpers - typeof"; return Promise_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Promise_typeof(obj); }

/*
 * @Author: zihao.zhu@united-imaging.com
 * @Date: 2022-01-21 14:20:23
 * @Last Modified by: zihao.zhu
 * @Last Modified time: 2022-01-21 16:54:32
 * @desc : Promise 验证
 */

/* eslint-disable no-extra-boolean-cast */




(function (prototype) {
  if (!!prototype.validator) return;

  prototype.validator = function (typeSpec, handle) {
    if (!isProduction()) {
      var nextHandle = function nextHandle(source) {
        var result = !!handle ? handle(source) : source;
        var error = checkPropTypes(typeSpec, result);

        if (Promise_typeof(source) === 'object' && source !== null) {
          Object.defineProperty(source, '__props__error', {
            configurable: false,
            enumerable: false,
            get: function get() {
              return error;
            }
          });
        }

        error && validatorLog && validatorLog(source, typeSpec, error);
        return source;
      };

      return this.then(nextHandle);
    }

    return this.then(function (data) {
      return data;
    });
  };
})((window || undefined).Promise.prototype);
;// CONCATENATED MODULE: ./dist/UtilExtends/WrapperApi.js
function WrapperApi_typeof(obj) { "@babel/helpers - typeof"; return WrapperApi_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, WrapperApi_typeof(obj); }


function WrapperApi(Api, spec) {
  if (isProduction()) Api;

  var createProxy = function createProxy(api, specSource) {
    Object.keys(api).forEach(function (key) {
      var target = api[key];

      if (WrapperApi_typeof(target) === 'object') {
        var _spec = specSource && specSource[key];

        if (WrapperApi_typeof(_spec) !== 'object') _spec = {};
        api[key] = createProxy(target, _spec);
      }
    });
    return new Proxy(api, {
      get: function get(target, key) {
        var source = target[key];

        if (typeof source === 'function') {
          var _spec2 = specSource && specSource[key] || {};

          return function () {
            return source.apply(void 0, arguments).validator(_spec2.spec, _spec2.handler);
          };
        }

        return target[key];
      }
    });
  };

  return createProxy(Api, spec); // const keys = Object.keys(Api);
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
;// CONCATENATED MODULE: ./dist/UtilExtends/index.js



;// CONCATENATED MODULE: ./dist/index.js
/*
 * @Author: zihao.zhu@united-imaging.com
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

var WsPropsType = {
  env: RunEnv.dev
};

function initValidator(source) {
  if (!Array.isArray(source)) source = [source];
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

initValidator([(external_commonjs_prop_types_commonjs2_prop_types_default()), ExtendProps, {
  checkPropTypes: checkPropTypes,
  "boolean": (external_commonjs_prop_types_commonjs2_prop_types_default()).bool,
  "function": (external_commonjs_prop_types_commonjs2_prop_types_default()).func,
  shape: createShapeTypeChecker,
  arrayOf: createArrayOfTypeChecker // exact: createStrictShapeTypeChecker,

}, {
  extendsValidator: extendsValidator,
  util: {
    createChainableTypeChecker: createChainableTypeChecker,
    createExpectedTypeChecker: createExpectedTypeChecker,
    validatorLog: validatorLog
  },
  apiUtil: {
    WrapperApi: WrapperApi
  },
  setEnv: function setEnv(env) {
    WsPropsType.env = env;
  } // PropsPlugin,

}]);
initEnv(WsPropsType);
initAutoFactory(WsPropsType);
initDefaultValue(WsPropsType);
/* harmony default export */ const dist = (WsPropsType);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});