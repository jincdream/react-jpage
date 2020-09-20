import * as React from 'react'
import { Linkages } from 'obs-parser'
import { Server } from 'jinter'
import expressionRun from 'expression-run'
import _set from 'lodash.set'
import _merge from 'lodash.merge'
type Props<Names> = {
  linkages: Linkages<Names>,
  getContext: () => object
  children: React.ReactElement,
  server: Server
}
export default class LinkageWrap<Names> extends React.Component<Props<Names>>{
  state: any = {}
  constructor(props: Props<Names>) {
    super(props);
    this.eventId = props.server.onPost({ path: "/linkage/update" }, async (data: { id?: Names }) => {
      let linkages = props.linkages
        .filter(l => data.id ? (l.deps.findIndex(v => v === data.id) >= 0) : true)
        .map(l => {
          let target = l.target as unknown as string
          // console.log(this.state, l.exp, target, "this.statethis.state")
          _set(this.state, target, expressionRun(l.exp, { $Context: props.getContext() }))
        })
      linkages.length > 0 && this.forceUpdate()
    })
  }
  eventId: number
  componentWillUnmount() {
    this.props.server.off(this.eventId, true)
  }
  render() {
    let { children } = this.props
    let { props: cProps } = children
    let C = children
    // return React.cloneElement(C, this.state)
    return React.cloneElement(C, _merge(cProps, this.state))
  }
}