import _extends from "@babel/runtime/helpers/extends";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import React, { Component } from 'react';
import { updateSate, fixGridAreaName } from '../common';

var Layout = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Layout, _Component);

  function Layout() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = _this.props;
    return _this;
  }

  var _proto = Layout.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(props) {
    var keys = ["columns", "rows", "template"];
    var state = updateSate(keys, props, this.state);
    this.setState(state);
  };

  _proto.render = function render() {
    var _this$state = this.state,
        _this$state$columns = _this$state.columns,
        columns = _this$state$columns === void 0 ? [] : _this$state$columns,
        _this$state$rows = _this$state.rows,
        rows = _this$state$rows === void 0 ? [] : _this$state$rows,
        _this$state$template = _this$state.template,
        template = _this$state$template === void 0 ? [[]] : _this$state$template,
        gap = _this$state.gap,
        _this$state$style = _this$state.style,
        style = _this$state$style === void 0 ? {} : _this$state$style;
    var gridTemplateAreas = template.map(function (area) {
      return "\"" + area.map(function (name) {
        return fixGridAreaName(name);
      }).join(" ") + "\"";
    }).join(" ");
    return /*#__PURE__*/React.createElement("div", {
      style: _extends({
        display: "grid",
        gridTemplateColumns: columns.join(" "),
        gridTemplateRows: rows.join(" "),
        gridTemplateAreas: gridTemplateAreas,
        gridGap: gap
      }, style)
    }, this.props.children);
  };

  return Layout;
}(Component);

export { Layout as default };