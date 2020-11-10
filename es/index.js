import _extends from "@babel/runtime/helpers/extends";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import * as React from 'react';
import isEqual from 'lodash.isequal';
import _set from 'lodash.set';
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
    _this.allFields = {};
    _this.PageContext = Object.freeze(_this.props.PageContext || {});
    _this.triggers = [];
    _this.state = {
      schema: _this.props.schema,
      components: {}
    };
    _this.allFields = _this.createFields(props.schema);

    _this.initLinkages(_this.allFields);

    return _this;
  }

  var _proto = ReactJPage.prototype;

  _proto.createFields = function createFields(schema) {
    var _this2 = this;

    var staticFields = {};
    Object.keys(schema.data).forEach(function (name) {
      var componentData = schema.data[name];
      var fields = componentData.fields;
      staticFields[name] = fields ? JSON.parse(JSON.stringify(fields)) : {};
    });
    Object.keys(schema.data).forEach(function (name) {
      var componentData = schema.data[name];
      var scriptFields = componentData.scriptFields;
      if (!scriptFields) return;
      var data = getScriptFilds(scriptFields, _extends({}, _this2.PageContext, staticFields), staticFields[name]);
      staticFields[name] = data;
    });
    Object.keys(schema.data).forEach(function (name) {
      var componentData = schema.data[name];
      var effectFields = componentData.effectFields;
      if (!effectFields) return;
      var data = getScriptFilds(effectFields, _extends({}, _this2.PageContext, staticFields), staticFields[name]);
      staticFields[name] = data;
    });
    return staticFields;
  };

  _proto.initLinkages = function initLinkages(allFields) {
    var _this3 = this;

    var linkageContext = new Proxy(allFields, {
      set: function set(obj, componentId, value) {
        _set(obj, componentId, value);

        _this3.Client.post({
          server: _this3.ServerID,
          path: "/linkage/update",
          body: {
            id: componentId
          }
        });

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
    var _this4 = this;

    var state = {};
    keys.forEach(function (key) {
      var value = _this4.state[key];
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
    var _this5 = this;

    var ReactComponents = this.props.components;
    var name = component.n,
        data = component.d,
        id = component.id,
        childrens = component.childrens,
        effect = component.e,
        _component$l = component.l,
        linkages = _component$l === void 0 ? [] : _component$l;
    name = name.replace(/^(\S)/, function (m, a) {
      return a.toUpperCase();
    });
    var C = LocalComponents[name] || ReactComponents[name];
    if (!C) return /*#__PURE__*/React.createElement("div", {
      key: component.id
    }); // let nFields = scriptFields ? getScriptFilds<EffectFields<ComponentsData>, Readonly<{}> | Readonly<Context>, Partial<ComponentsData>>(scriptFields, this.PageContext, data) : data
    // nFields = JSON.parse(JSON.stringify(nFields))

    var componentProps = _extends({
      PageContext: this.PageContext,
      changeContext: function changeContext(data) {
        _this5.LinkageContext[id] = data;
      }
    }, data, this.allFields[id]);

    var layout = fixGridAreaName(id);
    var childrensComponent = [].map.call(childrens, function (component, index) {
      return _this5.renderComponents(component, index);
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
          Object.keys(_this5.LinkageContext).forEach(function (n) {
            return obj[n] = _this5.LinkageContext[n];
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