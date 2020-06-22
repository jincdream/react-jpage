import * as React from 'react';
import { Linkages } from 'obs-parser';
import { Server } from 'jinter';
import expressionRun from 'expression-run'
import _set from 'lodash.set'

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
    this.eventId = props.server.onPost({ path: "/linkage/update" }, (data: { id?: Names }) => {
      let linkages = props.linkages
        .filter(l => data.id ? (l.deps.findIndex(v => v === data.id) >= 0) : true)
        .map(l => {
          this.state[l.target] = expressionRun(l.exp, { $Context: props.getContext() })
        })
      linkages.length > 0 && this.forceUpdate()
    })
  }
  eventId: number
  componentWillUnmount() {
    this.props.server.off(this.eventId)
  }
  render() {
    let { children } = this.props
    let C = children
    // return React.cloneElement(C, this.state)
    return React.cloneElement(C, this.state)
  }
}