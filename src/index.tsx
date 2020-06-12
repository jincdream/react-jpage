import * as React from 'react';
import isEqual from 'lodash.isequal'
import ObsParser, { IComponentRenderDO, Base } from 'obs-parser'
import { IProps, IState } from './index.d'
import EffectWrap from './EffectWrap'
import { updateSate, fixGridAreaName } from './common'
import LayoutBox_ from './Layout/LayoutBox'
import LayoutItem_ from './Layout/LayoutItem'

const LocalComponents: { [key: string]: React.ReactType } = { Layout: LayoutBox_ }
export const LayoutBox = LayoutBox_
export const LayoutItem = LayoutItem_

export default class ReactJPage<
  AllComponents extends Base,
  Components extends Base,
  Context> extends React.Component<IProps<AllComponents, Components, Context>, IState<AllComponents, Components>
  >{
  constructor(props: IProps<AllComponents, Components, Context>) {
    super(props)
    // this.Server.onPost({
    //   path: "/save/effect"
    // }, async () => {

    // })
  }
  PageContext: Readonly<Context | {}> = Object.freeze(this.props.PageContext || {})

  triggers: {
    [key: string]: () => void
  }[] = []
  // serverId = "____ReactJPage____" + Date.now().toString(32)
  // Server = new Server(this.serverId)
  state = {
    schema: this.props.schema,
    components: {}
  }
  componentWillReceiveProps(props: IProps<AllComponents, Components, Context>) {
    let keys = ["schema"] as (keyof IProps<AllComponents, Components, Context>)[]
    let state = updateSate<IProps<AllComponents, Components, Context>>(keys, props, this.state)
    this.setState(state)
  }
  componentDidMount() {
    // console.log("gpaggg")
  }
  updateSate(
    keys: (keyof IState<AllComponents, Components>)[],
    receiveProps: IProps<AllComponents, Components, Context>
  ) {
    let state = {} as IState<AllComponents, Components>
    keys.forEach((key) => {
      let value = this.state[key]
      let receiveValue = receiveProps[key]
      if (isEqual(value, receiveValue)) {
        Object.defineProperty(state, key, { value: receiveValue })
      }
    })
    return state
  }
  renderComponents(component: IComponentRenderDO<AllComponents, Components>, index: number) {
    let { components: ReactComponents } = this.props
    let { n: name, d: data, id, childrens, e: effect } = component
    name = name.replace(/^(\S)/, (m: string, a: string) => a.toUpperCase())
    let C: React.ReactType = LocalComponents[name] || ReactComponents[name]

    if (!C) return <div key={component.id as string} />

    let layout = fixGridAreaName(id)
    let childrensComponent = [].map.call(childrens, (component: IComponentRenderDO<AllComponents, Components>, index: number) => this.renderComponents(component, index))
    let Child = React.cloneElement(<C />, {
      PageContext: this.PageContext,
      ...data,
    }, childrensComponent)

    Child = <LayoutItem_ key={id + index} name={name} nid={id} index={index} layout={layout}>{Child}</LayoutItem_>
    if (effect) return <EffectWrap key={id + index} {...effect}>{Child}</EffectWrap>
    return Child
  }
  render() {
    let { schema } = this.state || {}
    if (!schema) return <div />
    let rootComponent = ObsParser<Components, AllComponents>(schema)[0]
    return this.renderComponents(rootComponent, 0)
  }
}
