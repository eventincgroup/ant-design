"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _configProvider = require("../config-provider");

var _Number = _interopRequireDefault(require("./Number"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Statistic = function Statistic(props) {
  var prefixCls = props.prefixCls,
      className = props.className,
      style = props.style,
      valueStyle = props.valueStyle,
      _props$value = props.value,
      value = _props$value === void 0 ? 0 : _props$value,
      title = props.title,
      valueRender = props.valueRender,
      prefix = props.prefix,
      suffix = props.suffix;
  var valueNode = /*#__PURE__*/React.createElement(_Number["default"], _extends({}, props, {
    value: value
  }));

  if (valueRender) {
    valueNode = valueRender(valueNode);
  }

  return /*#__PURE__*/React.createElement("div", {
    className: (0, _classnames["default"])(prefixCls, className),
    style: style
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-title")
  }, title), /*#__PURE__*/React.createElement("div", {
    style: valueStyle,
    className: "".concat(prefixCls, "-content")
  }, prefix && /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefixCls, "-content-prefix")
  }, prefix), valueNode, suffix && /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefixCls, "-content-suffix")
  }, suffix)));
};

Statistic.defaultProps = {
  decimalSeparator: '.',
  groupSeparator: ','
};
var WrapperStatistic = (0, _configProvider.withConfigConsumer)({
  prefixCls: 'statistic'
})(Statistic);
var _default = WrapperStatistic;
exports["default"] = _default;
//# sourceMappingURL=Statistic.js.map