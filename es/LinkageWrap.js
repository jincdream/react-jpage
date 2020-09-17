import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import * as React from 'react';
import expressionRun from 'expression-run';
import _set from 'lodash.set';
import _merge from 'lodash.merge';

var LinkageWrap = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(LinkageWrap, _React$Component);

  function LinkageWrap(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {};
    _this.eventId = void 0;
    _this.eventId = props.server.onPost({
      path: "/linkage/update"
    }, /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(data) {
        var linkages;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                linkages = props.linkages.filter(function (l) {
                  return data.id ? l.deps.findIndex(function (v) {
                    return v === data.id;
                  }) >= 0 : true;
                }).map(function (l) {
                  var target = l.target;
                  console.log(_this.state, l.exp, target, "this.statethis.state");

                  _set(_this.state, target, expressionRun(l.exp, {
                    $Context: props.getContext()
                  }));
                });
                linkages.length > 0 && _this.forceUpdate();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    return _this;
  }

  var _proto = LinkageWrap.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.props.server.off(this.eventId, true);
  };

  _proto.render = function render() {
    var children = this.props.children;
    var cProps = children.props;
    var C = children; // return React.cloneElement(C, this.state)

    return /*#__PURE__*/React.cloneElement(C, _merge(cProps, this.state));
  };

  return LinkageWrap;
}(React.Component);

export { LinkageWrap as default };