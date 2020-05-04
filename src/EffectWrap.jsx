import React from 'react'
import { Client, Server } from 'jinter'
import expressionRun from 'expression-run'
import _set from 'lodash.set'

const ServerName = "__Effect__" + Date.now().toString(32)
const EffectServer = new Server(ServerName)
// EffectWrap$1: {
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
export default class EffectWrap extends React.Component {
  constructor(props) {
    super(props)
    this.init()
  }
  uid = "EffectComponent_" + this.props.uid
  serverPath = [this.props.uid + "/set/data", this.props.uid + "/visible"]
  state = { visible: true }
  Client = new Client(this.props.uid)

  init() {
    let { serverPath } = this
    EffectServer.onPost({ path: serverPath[1] }, async ({ visible }) => { this.setState({ visible }) })
    EffectServer.onPost({ path: serverPath[0] }, async ({ state = {} }) => {
      let ref = this.refs[this.uid]
      if (!ref) return;
      let thisState = ref.state
      Object.keys(state).forEach(name => {
        _set(thisState, name, state[name])
      })
      ref.setState({ ...thisState })
    })
  }
  componentWillUnmount() {
    this.serverPath.forEach(v => { EffectServer.remove("post", v) })
  }
  doEffect(values, effect) {
    let component = this.refs[this.uid] || {}
    let { Client } = this
    let { condition = "true", handle } = effect
    let { type, targetUid = this.uid, value: state = {} } = handle
    let context = {
      $value: values.length > 1 ? values : values[0],
      $state: component.state || {},
      $props: component.props || {}
    }
    let result = expressionRun(condition, context)

    switch (type) {
      case "visible":
        Client.post({ server: ServerName, path: targetUid + '/visible', body: { visible: result } })
        break;
      case "set":
        if (!result) return
        let newState = {}
        Object.keys(state).forEach(n => {
          newState[n] = expressionRun(state[n], context)
        })
        Client.post({ server: ServerName, path: targetUid + '/set/data', body: { state: newState } })
        break;
      default:
        break;
    }
  }
  componentDidMount() { }
  render() {
    let { visible } = this.state
    let { effects = [], children, uid, ...myProps } = this.props
    let { props: childrenProps = {} } = children
    let newProps = {}
    let triggers = {}
    effects.forEach(effect => {
      let { trigger } = effect
      let triggerFn = triggers[trigger]
      let hasTriggerFn = !triggerFn
      if (hasTriggerFn) {
        let defaultHandle = childrenProps[trigger]
        triggers[trigger] = [function (...args) {
          defaultHandle && defaultHandle.apply(this, args)
        }]
        newProps[trigger] = (...values) => {
          triggers[trigger].forEach(fn => {
            fn(values)
          })
        }
      }
      triggers[trigger].push((values) => {
        this.doEffect(values, effect)
      })
    })
    let C = React.cloneElement(children, {
      ref: this.uid,
      ...childrenProps,
      ...newProps
    })
    return <div {...myProps}>
      {visible ? C : null}
    </div>
  }
}
