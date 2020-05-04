import * as React from 'react';
import isEqual from 'lodash.isequal'
import ObsParser, { IComponentRenderDO, Base } from 'obs-parser'
import { IProps, IState } from './index.d'
import Layout from './layout'
import EffectWrap from './EffectWrap'
import { updateSate, fixGridAreaName } from './common'
import { Server, Client } from 'jinter'
const LocalComponents: { [key: string]: React.ReactType } = { Layout }

export default class ReactJPage<
  AllComponents extends Base,
  Components extends Base> extends React.Component<
  IProps<AllComponents, Components>,
  IState<AllComponents, Components>
  >{
  constructor(props: IProps<AllComponents, Components>) {
    super(props)
    // this.Server.onPost({
    //   path: "/save/effect"
    // }, async () => {

    // })
  }
  triggers: {
    [key: string]: () => void
  }[] = []
  // serverId = "____ReactJPage____" + Date.now().toString(32)
  // Server = new Server(this.serverId)
  state = {
    schema: this.props.schema,
    components: {}
  }
  componentWillReceiveProps(props: IProps<AllComponents, Components>) {
    let keys = ["schema"] as (keyof IProps<AllComponents, Components>)[]
    let state = updateSate<IProps<AllComponents, Components>>(keys, props, this.state)
    this.setState(state)
  }
  componentDidMount() {
    // console.log("gpaggg")
  }
  updateSate(
    keys: (keyof IState<AllComponents, Components>)[],
    receiveProps: IProps<AllComponents, Components>
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
    let C = LocalComponents[name] || ReactComponents[name]
    if (!C) return <div key={component.id as string} />
    let layout = fixGridAreaName(id)
    let childrensComponent = [].map.call(childrens, (component: IComponentRenderDO<AllComponents, Components>, index: number) => this.renderComponents(component, index))
    let Child = React.cloneElement(<C />, {
      key: id + index,
      "data-com": id + '.' + index,
      ...data,
      style: { gridRow: layout, gridColumn: layout, ...data.style },
    }, childrensComponent)
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
