function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

/* tslint:disable */
import * as React from 'react';
import Form from '../Form'; // test Form.create on component without own props

var WithoutOwnProps = /*#__PURE__*/function (_React$Component) {
  _inherits(WithoutOwnProps, _React$Component);

  var _super = _createSuper(WithoutOwnProps);

  function WithoutOwnProps() {
    var _this;

    _classCallCheck(this, WithoutOwnProps);

    _this = _super.apply(this, arguments);
    _this.state = {
      foo: 'bar'
    };
    return _this;
  }

  _createClass(WithoutOwnProps, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, "foo");
    }
  }]);

  return WithoutOwnProps;
}(React.Component);

var WithoutOwnPropsForm = Form.create()(WithoutOwnProps);

/*#__PURE__*/
React.createElement(WithoutOwnPropsForm, null);

var WithOwnProps = /*#__PURE__*/function (_React$Component2) {
  _inherits(WithOwnProps, _React$Component2);

  var _super2 = _createSuper(WithOwnProps);

  function WithOwnProps() {
    var _this2;

    _classCallCheck(this, WithOwnProps);

    _this2 = _super2.apply(this, arguments);
    _this2.state = {
      foo: 'bar'
    };
    return _this2;
  }

  _createClass(WithOwnProps, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, "foo");
    }
  }]);

  return WithOwnProps;
}(React.Component);

var WithOwnPropsForm = Form.create()(WithOwnProps);

/*#__PURE__*/
React.createElement(WithOwnPropsForm, {
  name: "foo"
});

var WithCreateOptions = /*#__PURE__*/function (_React$Component3) {
  _inherits(WithCreateOptions, _React$Component3);

  var _super3 = _createSuper(WithCreateOptions);

  function WithCreateOptions() {
    _classCallCheck(this, WithCreateOptions);

    return _super3.apply(this, arguments);
  }

  _createClass(WithCreateOptions, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, "foo");
    }
  }]);

  return WithCreateOptions;
}(React.Component);

var mapPropsToFields = function mapPropsToFields(props) {
  var username = props.username;
  return {
    username: Form.createFormField({
      value: username
    })
  };
};

var formOptions = {
  mapPropsToFields: mapPropsToFields
};
var WithCreateOptionsForm = Form.create(formOptions)(WithCreateOptions);

/*#__PURE__*/
React.createElement(WithCreateOptionsForm, {
  username: "foo"
}); // Should work with forwardRef & wrappedComponentRef
// https://github.com/ant-design/ant-design/issues/16229

if (React.forwardRef) {
  var ForwardDemo = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
    var str = _ref.str;
    return /*#__PURE__*/React.createElement("div", {
      ref: ref
    }, str || '');
  });
  var WrappedForwardDemo = Form.create()(ForwardDemo);

  /*#__PURE__*/
  React.createElement(WrappedForwardDemo, {
    str: ""
  });
}

var WrapRefDemo = /*#__PURE__*/function (_React$Component4) {
  _inherits(WrapRefDemo, _React$Component4);

  var _super4 = _createSuper(WrapRefDemo);

  function WrapRefDemo() {
    _classCallCheck(this, WrapRefDemo);

    return _super4.apply(this, arguments);
  }

  _createClass(WrapRefDemo, [{
    key: "getForm",
    value: function getForm() {
      return this.props.form;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.props.str || '');
    }
  }]);

  return WrapRefDemo;
}(React.Component);

var WrappedWrapRefDemo = Form.create()(WrapRefDemo);

/*#__PURE__*/
React.createElement(WrappedWrapRefDemo, {
  str: "",
  wrappedComponentRef: function wrappedComponentRef() {
    return null;
  }
});
//# sourceMappingURL=type.js.map
