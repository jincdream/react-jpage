import React, { Component } from 'react';
import { updateSate, fixGridAreaName } from '../common';

export interface ILayoutProps {
  template: string[][],
  rows: string[],
  columns?: string[],
  gap?: string,
  style?: object
}

export default class Layout extends Component<ILayoutProps, ILayoutProps> {
  state = {...this.props}
  componentWillReceiveProps(props: ILayoutProps) {
    let keys = ["columns", "rows", "template"] as (keyof ILayoutProps)[]
    let state = updateSate<ILayoutProps>(keys, props, this.state)
    this.setState(state)
  }
  render() {
    let { columns = [], rows = [], template = [[]], gap, style = {} } = this.state
    let gridTemplateAreas = template
      .map(area => `"${area.map(name => fixGridAreaName(name)).join(" ")}"`)
      .join(" ")
    return <div style={{
      display: "grid",
      gridTemplateColumns: columns.join(" "),
      gridTemplateRows: rows.join(" "),
      gridTemplateAreas,
      gridGap: gap,
      ...style
    }}>
      {this.props.children}
    </div>
  }
}
