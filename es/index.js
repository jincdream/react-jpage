import _extends from "@babel/runtime/helpers/extends";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import * as React from 'react';
import isEqual from 'lodash.isequal';
import ObsParser from 'obs-parser';
import EffectWrap from './EffectWrap';
import { updateSate, fixGridAreaName, getScriptFilds } from './common';
import LayoutBox_ from './Layout/LayoutBox';
import LayoutItem_ from './Layout/LayoutItem';
import LinkageWrap from './LinkageWrap';
import { Client, Server } from 'jinter';
var LocalComponents = {
  Layout: LayoutBox_
}; // Built into the layout component

export var LayoutBox = LayoutBox_;
export var LayoutItem = LayoutItem_;

var ReactJPage = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ReactJPage, _React$Component);

  function ReactJPage(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.LinkageContext = void 0;
    _this.ServerID = "ReactJPage_" + Date.now().toString(32);
    _this.Server = new Server(_this.ServerID);
    _this.Client = new Client(_this.ServerID);
    _this.PageContext = Object.freeze(_this.props.PageContext || {});
    _this.triggers = [];
    _this.state = {
      schema: _this.props.schema,
      components: {}
    };

    _this.initLinkages();

    return _this;
  }

  var _proto = ReactJPage.prototype;

  _proto.initLinkages = function initLinkages() {
    var _this2 = this;

    var linkageContext = new Proxy(this.props.LinkageContext || {}, {
      set: function set(obj, componentId, value) {
        // Has not yet been initialized
        if (componentId === "____inited____") {
          obj.____inited____ = true;
          return true;
        }

        if (!obj[componentId]) {
          obj[componentId] = {};
        }

        if ({}.toString.call(value).toLocaleLowerCase() === "[object object]") {
          obj[componentId] = _extends({}, obj[componentId], value);
        } else {
          obj[componentId] = value;
        }

        if (obj.____inited____) {
          _this2.Client.post({
            server: _this2.ServerID,
            path: "/linkage/update",
            body: {
              id: componentId
            }
          });
        }

        return true;
      }
    });
    this.LinkageContext = linkageContext;
  } // To avoid being the external changes
  ;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(props) {
    var keys = ["schema"];
    var state = updateSate(keys, props, this.state);
    this.setState(state);
  };

  _proto.componentDidMount = function componentDidMount() {
    // Initialize the end
    this.LinkageContext.____inited____ = true;
    this.mounted();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.Server.close();
  };

  _proto.mounted = function mounted() {
    this.Client.post({
      server: this.ServerID,
      path: "/linkage/update",
      body: {}
    });
  };

  _proto.updateSate = function updateSate(keys, receiveProps) {
    var _this3 = this;

    var state = {};
    keys.forEach(function (key) {
      var value = _this3.state[key];
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
    var _this4 = this;

    var ReactComponents = this.props.components;
    var name = component.n,
        data = component.d,
        id = component.id,
        childrens = component.childrens,
        effect = component.e,
        _component$l = component.l,
        linkages = _component$l === void 0 ? [] : _component$l,
        scriptFields = component.s;
    name = name.replace(/^(\S)/, function (m, a) {
      return a.toUpperCase();
    });
    var C = LocalComponents[name] || ReactComponents[name];
    if (!C) return /*#__PURE__*/React.createElement("div", {
      key: component.id
    });
    var nFields = scriptFields ? getScriptFilds(scriptFields, this.PageContext, data) : data;

    var componentProps = _extends({
      PageContext: this.PageContext,
      changeContext: function changeContext(data) {
        _this4.LinkageContext[id] = data;
      }
    }, nFields);

    this.LinkageContext[id] = nFields;
    var layout = fixGridAreaName(id);
    var childrensComponent = [].map.call(childrens, function (component, index) {
      return _this4.renderComponents(component, index);
    });
    var Child = /*#__PURE__*/React.cloneElement( /*#__PURE__*/React.createElement(C, null), componentProps, childrensComponent);

    if (effect) {
      // Passive linkage
      Child = /*#__PURE__*/React.createElement(EffectWrap, _extends({
        key: id + index
      }, effect), Child);
    } else {
      // Active linkage
      Child = /*#__PURE__*/React.createElement(LinkageWrap, {
        getContext: function getContext() {
          var obj = {};
          Object.keys(_this4.LinkageContext).forEach(function (n) {
            return obj[n] = _this4.LinkageContext[n];
          });
          return obj;
        },
        key: id + index,
        server: this.Server,
        linkages: linkages
      }, Child);
    }

    Child = /*#__PURE__*/React.createElement(LayoutItem_, {
      key: id + index,
      name: name,
      nid: id,
      index: index,
      layout: layout
    }, Child);
    return Child;
  };

  _proto.render = function render() {
    var _ref = this.state || {},
        schema = _ref.schema;

    if (!schema) return /*#__PURE__*/React.createElement("div", null);
    var rootComponent = ObsParser(schema)[0];
    return this.renderComponents(rootComponent, 0);
  };

  return ReactJPage;
}(React.Component);

export { ReactJPage as default };