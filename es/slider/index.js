function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import * as React from 'react';
import RcSlider from "rc-slider/es/Slider";
import RcRange from "rc-slider/es/Range";
import RcHandle from "rc-slider/es/Handle";
import Tooltip from '../tooltip';
import { ConfigConsumer } from '../config-provider';

var Slider = /*#__PURE__*/function (_React$Component) {
  _inherits(Slider, _React$Component);

  var _super = _createSuper(Slider);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _super.call(this, props);

    _this.toggleTooltipVisible = function (index, visible) {
      _this.setState(function (_ref) {
        var visibles = _ref.visibles;
        return {
          visibles: _extends(_extends({}, visibles), _defineProperty({}, index, visible))
        };
      });
    };

    _this.handleWithTooltip = function (tooltipPrefixCls, _a) {
      var value = _a.value,
          dragging = _a.dragging,
          index = _a.index,
          restProps = __rest(_a, ["value", "dragging", "index"]);

      var _this$props = _this.props,
          tipFormatter = _this$props.tipFormatter,
          tooltipVisible = _this$props.tooltipVisible,
          tooltipPlacement = _this$props.tooltipPlacement,
          getTooltipPopupContainer = _this$props.getTooltipPopupContainer;
      var visibles = _this.state.visibles;
      var isTipFormatter = tipFormatter ? visibles[index] || dragging : false;
      var visible = tooltipVisible || tooltipVisible === undefined && isTipFormatter;
      return /*#__PURE__*/React.createElement(Tooltip, {
        prefixCls: tooltipPrefixCls,
        title: tipFormatter ? tipFormatter(value) : '',
        visible: visible,
        placement: tooltipPlacement || 'top',
        transitionName: "zoom-down",
        key: index,
        getPopupContainer: getTooltipPopupContainer || function () {
          return document.body;
        }
      }, /*#__PURE__*/React.createElement(RcHandle, _extends({}, restProps, {
        value: value,
        onMouseEnter: function onMouseEnter() {
          return _this.toggleTooltipVisible(index, true);
        },
        onMouseLeave: function onMouseLeave() {
          return _this.toggleTooltipVisible(index, false);
        }
      })));
    };

    _this.saveSlider = function (node) {
      _this.rcSlider = node;
    };

    _this.renderSlider = function (_ref2) {
      var getPrefixCls = _ref2.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          customizeTooltipPrefixCls = _a.tooltipPrefixCls,
          range = _a.range,
          restProps = __rest(_a, ["prefixCls", "tooltipPrefixCls", "range"]);

      var prefixCls = getPrefixCls('slider', customizePrefixCls);
      var tooltipPrefixCls = getPrefixCls('tooltip', customizeTooltipPrefixCls);

      if (range) {
        return /*#__PURE__*/React.createElement(RcRange, _extends({}, restProps, {
          ref: _this.saveSlider,
          handle: function handle(info) {
            return _this.handleWithTooltip(tooltipPrefixCls, info);
          },
          prefixCls: prefixCls,
          tooltipPrefixCls: tooltipPrefixCls
        }));
      }

      return /*#__PURE__*/React.createElement(RcSlider, _extends({}, restProps, {
        ref: _this.saveSlider,
        handle: function handle(info) {
          return _this.handleWithTooltip(tooltipPrefixCls, info);
        },
        prefixCls: prefixCls,
        tooltipPrefixCls: tooltipPrefixCls
      }));
    };

    _this.state = {
      visibles: {}
    };
    return _this;
  }

  _createClass(Slider, [{
    key: "focus",
    value: function focus() {
      this.rcSlider.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.rcSlider.blur();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderSlider);
    }
  }]);

  return Slider;
}(React.Component);

export { Slider as default };
Slider.defaultProps = {
  tipFormatter: function tipFormatter(value) {
    return value.toString();
  }
};
//# sourceMappingURL=index.js.map
