import _extends from "@babel/runtime/helpers/extends";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import * as React from 'react';
import isEqual from 'lodash.isequal';
import ObsParser from 'obs-parser';
import Layout from './layout';
import { updateSate, fixGridAreaName } from './common';
var LocalComponents = {
  Layout: Layout
};

var ReactJPage = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ReactJPage, _React$Component);

  var _super = _createSuper(ReactJPage);

  function ReactJPage(props) {
    return _React$Component.call(this, props) || this;
  }

  var _proto = ReactJPage.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.setState({
      schema: this.props.schema
    });
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(props) {
    var keys = ["schema"];
    var state = updateSate(keys, props, this.state);
    this.setState(state);
  };

  _proto.updateSate = function updateSate(keys, receiveProps) {
    var _this = this;

    var state = {};
    keys.forEach(function (key) {
      var value = _this.state[key];
      var receiveValue = receiveProps[key];

      if (isEqual(value, receiveValue)) {
        Object.defineProperty(state, key, {
          value: receiveValue
        });
      }
    });
    return state;
  };

  _proto.renderComponents = function renderComponents(component, index) {
    var _this2 = this;

    var ReactComponents = this.props.components;
    var name = component.n,
        data = component.d,
        id = component.id,
        childrens = component.childrens;
    name = name.replace(/^(\S)/, function (m, a) {
      return a.toUpperCase();
    });
    var C = LocalComponents[name] || ReactComponents[name];
    if (!C) return /*#__PURE__*/React.createElement("div", {
      key: component.id
    });
    var layout = fixGridAreaName(id);
    var childrensComponent = [].map.call(childrens, function (component, index) {
      return _this2.renderComponents(component, index);
    });
    var Child = React.cloneElement( /*#__PURE__*/React.createElement(C, null), _extends({
      key: id + index,
      "data-com": id + '.' + index
    }, data, {
      style: _extends({
        gridRow: layout,
        gridColumn: layout
      }, data.style)
    }), childrensComponent);
    return Child;
  };

  _proto.render = function render() {
    var _ref = this.state || {},
        schema = _ref.schema;

    if (!schema) return /*#__PURE__*/React.createElement("div", null, "loadding...");
    var rootComponent = ObsParser(schema)[0];
    return this.renderComponents(rootComponent, 0);
  };

  return ReactJPage;
}(React.Component);

export { ReactJPage as default };