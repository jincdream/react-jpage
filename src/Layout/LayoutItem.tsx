import * as React from 'react';

const ClassPreFix = "react_j_page_layout_item_"
export default class LayoutItem extends React.Component<{
  nid: string,
  name: string,
  index: number,
  children: React.ReactElement,
  layout: string
}>{
  render() {
    let { children, index, nid, layout, name } = this.props
    let C = children
    let uid = nid + '@' + index
    let className = `${ClassPreFix}${name} ${ClassPreFix}${uid}`
    return React.cloneElement(<div className={className} />, {
      "data-com": uid,
      style: {
        gridRow: layout,
        gridColumn: layout,
      },
    }, C)
  }
}