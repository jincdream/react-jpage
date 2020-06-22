import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import * as React from 'react';
var ClassPreFix = "react_j_page_layout_item_";

var LayoutItem = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(LayoutItem, _React$Component);

  function LayoutItem() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = LayoutItem.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        index = _this$props.index,
        nid = _this$props.nid,
        layout = _this$props.layout,
        name = _this$props.name;
    var C = children;
    var uid = nid + '.' + index;
    var className = "" + ClassPreFix + name + " " + ClassPreFix + uid;
    return /*#__PURE__*/React.cloneElement( /*#__PURE__*/React.createElement("div", {
      className: className
    }), {
      "data-com": uid,
      style: {
        gridRow: layout,
        gridColumn: layout
      }
    }, C);
  };

  return LayoutItem;
}(React.Component);

export { LayoutItem as default };