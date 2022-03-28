function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

import * as React from 'react';
import * as moment from 'moment';
import { polyfill } from 'react-lifecycles-compat';
import MonthCalendar from 'rc-calendar/lib/MonthCalendar';
import RcDatePicker from 'rc-calendar/lib/Picker';
import classNames from 'classnames';
import omit from 'omit.js';
import Icon from '../icon';
import { ConfigConsumer } from '../config-provider';
import warning from '../_util/warning';
import interopDefault from '../_util/interopDefault';
import getDataOrAriaProps from '../_util/getDataOrAriaProps';
import { formatDate } from './utils';
export default function createPicker(TheCalendar) {
  var CalenderWrapper = /*#__PURE__*/function (_React$Component) {
    _inherits(CalenderWrapper, _React$Component);

    var _super = _createSuper(CalenderWrapper);

    function CalenderWrapper(props) {
      var _this;

      _classCallCheck(this, CalenderWrapper);

      _this = _super.call(this, props);

      _this.saveInput = function (node) {
        _this.input = node;
      };

      _this.checkValue = function (value) {
        if (value && !interopDefault(moment).isMoment(value)) {
          throw new Error('The value/defaultValue of DatePicker or MonthPicker must be ' + 'a moment object or an array of moment objects after `antd@2.0`, see: https://u.ant.design/date-picker-value');
        }
      };

      _this.clearSelection = function (e) {
        e.preventDefault();
        e.stopPropagation();

        _this.handleChange(null);
      };

      _this.handleChange = function (value) {
        var _assertThisInitialize = _assertThisInitialized(_this),
            props = _assertThisInitialize.props;

        if (!('value' in props)) {
          _this.setState({
            value: value,
            showDate: value
          });
        }

        if (props.multiple) {
          var formattedValue;

          if (value && value.length) {
            formattedValue = value.map(function (singleValue) {
              return formatDate(singleValue, props.format);
            }).join(', ');
          }

          props.onChange(value, formattedValue);
        } else {
          props.onChange(value, formatDate(value, props.format));
        }
      };

      _this.handleCalendarChange = function (value) {
        _this.setState({
          showDate: value
        });
      };

      _this.handleOpenChange = function (open) {
        var onOpenChange = _this.props.onOpenChange;

        if (!('open' in _this.props)) {
          _this.setState({
            open: open
          });
        }

        if (onOpenChange) {
          onOpenChange(open);
        }
      };

      _this.renderFooter = function () {
        var renderExtraFooter = _this.props.renderExtraFooter;

        var _assertThisInitialize2 = _assertThisInitialized(_this),
            prefixCls = _assertThisInitialize2.prefixCls;

        return renderExtraFooter ? /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-footer-extra")
        }, renderExtraFooter.apply(void 0, arguments)) : null;
      };

      _this.renderPicker = function (_ref) {
        var _classNames, _classNames2;

        var getPrefixCls = _ref.getPrefixCls;
        var _this$state = _this.state,
            value = _this$state.value,
            showDate = _this$state.showDate,
            open = _this$state.open;
        var props = omit(_this.props, ['onChange']);
        var customizePrefixCls = props.prefixCls,
            locale = props.locale,
            localeCode = props.localeCode,
            suffixIcon = props.suffixIcon,
            multiple = props.multiple,
            selectWeekDays = props.selectWeekDays,
            selectMonths = props.selectMonths;
        var prefixCls = getPrefixCls('calendar', customizePrefixCls); // To support old version react.
        // Have to add prefixCls on the instance.
        // https://github.com/facebook/react/issues/12397

        _this.prefixCls = prefixCls;
        var placeholder = 'placeholder' in props ? props.placeholder : locale.lang.placeholder;
        var disabledTime = props.showTime ? props.disabledTime : null;
        var calendarClassName = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-time"), props.showTime), _defineProperty(_classNames, "".concat(prefixCls, "-month"), MonthCalendar === TheCalendar), _classNames));

        if (value && localeCode) {
          if (multiple && 'length' in value) {
            if (value.length) {
              value.forEach(function (singleValue) {
                return singleValue.locale(singleValue);
              });
            }
          } else if ('locale' in value) {
            value.locale(localeCode);
          }
        }

        var pickerProps = {};
        var calendarProps = {};
        var pickerStyle = {};

        if (props.showTime) {
          calendarProps = {
            // fix https://github.com/ant-design/ant-design/issues/1902
            onSelect: _this.handleChange
          };
          pickerStyle.minWidth = 195;
        } else {
          pickerProps = {
            onChange: _this.handleChange
          };
        }

        if ('mode' in props) {
          calendarProps.mode = props.mode;
        }

        warning(!('onOK' in props), 'DatePicker', 'It should be `DatePicker[onOk]` or `MonthPicker[onOk]`, instead of `onOK`!');
        var calendar = /*#__PURE__*/React.createElement(TheCalendar, _extends({}, calendarProps, {
          disabledDate: props.disabledDate,
          disabledTime: disabledTime,
          locale: locale.lang,
          timePicker: props.timePicker,
          defaultValue: props.defaultPickerValue || (multiple ? [interopDefault(moment)()] : interopDefault(moment)()),
          dateInputPlaceholder: placeholder,
          prefixCls: prefixCls,
          className: calendarClassName,
          onOk: props.onOk,
          dateRender: props.dateRender,
          format: props.format,
          showToday: props.showToday,
          monthCellContentRender: props.monthCellContentRender,
          renderFooter: _this.renderFooter,
          onPanelChange: props.onPanelChange,
          onChange: _this.handleCalendarChange,
          multiple: multiple,
          selectWeekDays: selectWeekDays,
          selectMonths: selectMonths,
          value: showDate
        }));
        var clearIcon = !props.disabled && props.allowClear && value ? props.clearIcon ? /*#__PURE__*/React.createElement("span", {
          onClick: _this.clearSelection
        }, props.clearIcon) : /*#__PURE__*/React.createElement(Icon, {
          type: "close-circle",
          className: "".concat(prefixCls, "-picker-clear"),
          onClick: _this.clearSelection,
          theme: "filled"
        }) : null;
        var inputIcon = suffixIcon && ( /*#__PURE__*/React.isValidElement(suffixIcon) ? /*#__PURE__*/React.cloneElement(suffixIcon, {
          className: classNames((_classNames2 = {}, _defineProperty(_classNames2, suffixIcon.props.className, suffixIcon.props.className), _defineProperty(_classNames2, "".concat(prefixCls, "-picker-icon"), true), _classNames2))
        }) : /*#__PURE__*/React.createElement("span", {
          className: "".concat(prefixCls, "-picker-icon")
        }, suffixIcon)) || props.pickerIcon || /*#__PURE__*/React.createElement(Icon, {
          type: "calendar",
          className: "".concat(prefixCls, "-picker-icon")
        });
        var inputValue = '';

        if (value) {
          if (props.formatInput) {
            inputValue = props.formatInput(value);
          } else {
            if (multiple && 'map' in value) {
              inputValue = value.map(function (singleValue) {
                return formatDate(singleValue, props.format);
              }).join(', ');
            } else if (!Array.isArray(value)) {
              inputValue = formatDate(value, props.format);
            }
          }
        }

        var dataOrAriaProps = getDataOrAriaProps(props);

        var input = function input() {
          return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", _extends({
            ref: _this.saveInput,
            disabled: props.disabled,
            readOnly: true,
            value: inputValue,
            tabIndex: props.tabIndex,
            placeholder: placeholder,
            className: props.pickerInputClass,
            name: props.name
          }, dataOrAriaProps)), clearIcon, inputIcon);
        };

        return /*#__PURE__*/React.createElement("span", {
          id: props.id,
          className: classNames(props.className, props.pickerClass),
          style: _extends(_extends({}, pickerStyle), props.style),
          onFocus: props.onFocus,
          onBlur: props.onBlur,
          onMouseEnter: props.onMouseEnter,
          onMouseLeave: props.onMouseLeave
        }, /*#__PURE__*/React.createElement(RcDatePicker, _extends({}, props, pickerProps, {
          calendar: calendar,
          value: value,
          prefixCls: "".concat(prefixCls, "-picker-container"),
          style: props.popupStyle,
          open: open,
          onOpenChange: _this.handleOpenChange
        }), input));
      };

      var value = props.value || props.defaultValue;

      if (value) {
        if (props.multiple) {
          if (value.length) {
            value.forEach(function (singleValue) {
              return _this.checkValue(singleValue);
            });
          }
        } else {
          _this.checkValue(value);
        }
      }

      _this.state = {
        value: value,
        showDate: value,
        open: false
      };
      return _this;
    }

    _createClass(CalenderWrapper, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate(_, prevState) {
        if (!('open' in this.props) && prevState.open && !this.state.open) {
          this.focus();
        }
      }
    }, {
      key: "focus",
      value: function focus() {
        this.input.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.input.blur();
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderPicker);
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps, prevState) {
        var state = {};
        var open = prevState.open;

        if ('open' in nextProps) {
          state.open = nextProps.open;
          open = nextProps.open || false;
        }

        if ('value' in nextProps) {
          state.value = nextProps.value;

          if (nextProps.value !== prevState.value || !open && nextProps.value !== prevState.showDate) {
            state.showDate = nextProps.value;
          }
        }

        return Object.keys(state).length > 0 ? state : null;
      }
    }]);

    return CalenderWrapper;
  }(React.Component);

  CalenderWrapper.defaultProps = {
    allowClear: true,
    showToday: true
  };
  polyfill(CalenderWrapper);
  return CalenderWrapper;
}
//# sourceMappingURL=createPicker.js.map
