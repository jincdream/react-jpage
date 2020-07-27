import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import * as React from 'react';
import expressionRun from 'expression-run';
import _set from 'lodash.set';

var LinkageWrap = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(LinkageWrap, _React$Component);

  function LinkageWrap(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {};
    _this.eventId = void 0;
    _this.eventId = props.server.onPost({
      path: "/linkage/update"
    }, function (data) {
      var linkages = props.linkages.filter(function (l) {
        return data.id ? l.deps.findIndex(function (v) {
          return v === data.id;
        }) >= 0 : true;
      }).map(function (l) {
        var target = l.target;

        _set(_this.state, target, expressionRun(l.exp, {
          $Context: props.getContext()
        }));
      });
      linkages.length > 0 && _this.forceUpdate();
    });
    return _this;
  }

  var _proto = LinkageWrap.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.props.server.off(this.eventId);
  };

  _proto.render = function render() {
    var children = this.props.children;
    var C = children; // return React.cloneElement(C, this.state)

    return /*#__PURE__*/React.cloneElement(C, this.state);
  };

  return LinkageWrap;
}(React.Component);

export { LinkageWrap as default };