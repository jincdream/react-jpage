import * as React from 'react'
import { Linkages } from 'obs-parser'
import { Server } from 'jinter'
import expressionRun from 'expression-run'
import _set from 'lodash.set'

type Props<Names> = {
  linkages: Linkages<Names>,
  getContext: () => object
  children: React.ReactElement,
  server: Server
}
export default class LinkageWrap<Names> extends React.Component<Props<Names>>{
  state: any = { ...this.props.children.props || {} }
  constructor(props: Props<Names>) {
    super(props);
  }
  eventId: number
  init(props: Props<Names>) {
    this.eventId = this.props.server.onPost({ path: "/linkage/update" }, async (data: { id?: Names }) => {
      let linkages = this.props.linkages
        .filter(l => data.id ? (l.deps.findIndex(v => v === data.id) >= 0) : true)
        .map(l => {
          let target = l.target as unknown as string
          // console.log(this.state, l.exp, target, "this.statethis.state")
          let rz
          try {
            rz = expressionRun(l.exp, { $Context: props.getContext() })
          } catch (error) {
            return;
          }
          _set(this.state, target, rz)
          // _merge(this.state, rz)
        })
      linkages.length > 0 && this.forceUpdate()
    })
  }
  componentWillUnmount() {
    this.props.server.off(this.eventId, true)
  }
  componentWillMount() {
    this.init(this.props)
  }
  render() {
    let { children } = this.props
    let C = children
    // return React.cloneElement(C, this.state)
    return React.cloneElement(C, this.state)
  }
}