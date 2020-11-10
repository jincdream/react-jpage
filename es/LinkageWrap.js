import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _extends from "@babel/runtime/helpers/extends";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import * as React from 'react';
import expressionRun from 'expression-run';
import _set from 'lodash.set';

var LinkageWrap = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(LinkageWrap, _React$Component);

  function LinkageWrap(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = _extends({}, _this.props.children.props || {});
    _this.eventId = void 0;
    return _this;
  }

  var _proto = LinkageWrap.prototype;

  _proto.init = function init(props) {
    var _this2 = this;

    this.eventId = this.props.server.onPost({
      path: "/linkage/update"
    }, /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(data) {
        var linkages;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                linkages = _this2.props.linkages.filter(function (l) {
                  return data.id ? l.deps.findIndex(function (v) {
                    return v === data.id;
                  }) >= 0 : true;
                }).map(function (l) {
                  var target = l.target; // console.log(this.state, l.exp, target, "this.statethis.state")

                  var rz;

                  try {
                    rz = expressionRun(l.exp, {
                      $Context: props.getContext()
                    });
                  } catch (error) {
                    return;
                  }

                  _set(_this2.state, target, rz); // _merge(this.state, rz)

                });
                linkages.length > 0 && _this2.forceUpdate();

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
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.props.server.off(this.eventId, true);
  };

  _proto.componentWillMount = function componentWillMount() {
    this.init(this.props);
  };

  _proto.render = function render() {
    var children = this.props.children;
    var C = children; // return React.cloneElement(C, this.state)

    return /*#__PURE__*/React.cloneElement(C, this.state);
  };

  return LinkageWrap;
}(React.Component);

export { LinkageWrap as default };