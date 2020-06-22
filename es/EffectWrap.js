import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import _extends from "@babel/runtime/helpers/extends";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import React from 'react';
import { Client, Server } from 'jinter';
import expressionRun from 'expression-run';
import _set from 'lodash.set';
var ServerName = "__Effect__" + Date.now().toString(32);
var EffectServer = new Server(ServerName); // EffectWrap$1: {
//   fields: {
//     uid: "ContentType",
// effects: [{
//   trigger: "onChange",
//   condition: "$state.type === 'content'",
//   handle: {
//     targetUid: "Group",
//     type: "visible"
//   }
//       }, {
//         trigger: "onChange",
//         handle: {
//           type: "set",
//           targetUid: "Group",
//           state: {
//             text: "$value"
//           }
//         }
//       }]
//   }
// },

var EffectWrap = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(EffectWrap, _React$Component);

  function EffectWrap(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.uid = "EffectComponent_" + _this.props.uid;
    _this.serverPath = [_this.props.uid + "/set/data", _this.props.uid + "/visible"];
    _this.state = {
      visible: true
    };
    _this.Client = new Client(_this.props.uid);

    _this.init();

    return _this;
  }

  var _proto = EffectWrap.prototype;

  _proto.init = function init() {
    var _this2 = this;

    var serverPath = this.serverPath;
    EffectServer.onPost({
      path: serverPath[1]
    }, /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref) {
        var visible;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                visible = _ref.visible;

                _this2.setState({
                  visible: visible
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    EffectServer.onPost({
      path: serverPath[0]
    }, /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(_ref3) {
        var _ref3$state, state, ref, thisState;

        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _ref3$state = _ref3.state, state = _ref3$state === void 0 ? {} : _ref3$state;
                ref = _this2.refs[_this2.uid];

                if (ref) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return");

              case 4:
                thisState = ref.state;
                Object.keys(state).forEach(function (name) {
                  _set(thisState, name, state[name]);
                });
                ref.setState(_extends({}, thisState));

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }());
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.serverPath.forEach(function (v) {
      EffectServer.remove("post", v);
    });
  };

  _proto.doEffect = function doEffect(values, effect) {
    var component = this.refs[this.uid] || {};
    var Client = this.Client;
    var _effect$condition = effect.condition,
        condition = _effect$condition === void 0 ? "true" : _effect$condition,
        handle = effect.handle;
    var type = handle.type,
        _handle$targetUid = handle.targetUid,
        targetUid = _handle$targetUid === void 0 ? this.uid : _handle$targetUid,
        _handle$state = handle.state,
        state = _handle$state === void 0 ? {} : _handle$state;
    var context = {
      $value: values.length > 1 ? values : values[0],
      $state: component.state || {},
      $props: component.props || {}
    };
    var result = expressionRun(condition, context);

    switch (type) {
      case "visible":
        Client.post({
          server: ServerName,
          path: targetUid + '/visible',
          body: {
            visible: result
          }
        });
        break;

      case "set":
        if (!result) return;
        var newState = {};
        Object.keys(state).forEach(function (n) {
          newState[n] = expressionRun(state[n], context);
        });
        Client.post({
          server: ServerName,
          path: targetUid + '/set/data',
          body: {
            state: newState
          }
        });
        break;

      default:
        break;
    }
  };

  _proto.componentDidMount = function componentDidMount() {};

  _proto.render = function render() {
    var _this3 = this;

    var visible = this.state.visible;

    var _this$props = this.props,
        _this$props$effects = _this$props.effects,
        effects = _this$props$effects === void 0 ? [] : _this$props$effects,
        children = _this$props.children,
        uid = _this$props.uid,
        myProps = _objectWithoutPropertiesLoose(_this$props, ["effects", "children", "uid"]);

    var _children$props = children.props,
        childrenProps = _children$props === void 0 ? {} : _children$props;
    var newProps = {};
    var triggers = {};
    effects.forEach(function (effect) {
      var trigger = effect.trigger;
      var triggerFn = triggers[trigger];
      var hasTriggerFn = !triggerFn;

      if (hasTriggerFn) {
        var defaultHandle = childrenProps[trigger];
        triggers[trigger] = [function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          defaultHandle && defaultHandle.apply(this, args);
        }];

        newProps[trigger] = function () {
          for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            values[_key2] = arguments[_key2];
          }

          triggers[trigger].forEach(function (fn) {
            fn(values);
          });
        };
      }

      triggers[trigger].push(function (values) {
        _this3.doEffect(values, effect);
      });
    });
    var C = /*#__PURE__*/React.cloneElement(children, _extends({
      ref: this.uid
    }, childrenProps, newProps));
    return /*#__PURE__*/React.createElement("div", myProps, visible ? C : null);
  };

  return EffectWrap;
}(React.Component);

export { EffectWrap as default };