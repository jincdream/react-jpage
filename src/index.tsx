import * as React from 'react';
import isEqual from 'lodash.isequal'
import ObsParser, { IComponentRenderDO, Base } from 'obs-parser'
import { IProps, IState } from './index.d'
import Layout from './layout'
import { updateSate, fixGridAreaName } from './common'

const LocalComponents: { [key: string]: React.ReactType } = { Layout }

export default class ReactJPage<
  AllComponents extends Base,
  Components extends Base> extends React.Component<
  IProps<AllComponents, Components>,
  IState<AllComponents, Components>
  >{
  constructor(props: IProps<AllComponents, Components>) {
    super(props)
  }
  componentDidMount() {
    this.setState({
      schema: this.props.schema
    })
  }
  componentWillReceiveProps(props: IProps<AllComponents, Components>) {
    let keys = ["schema"] as (keyof IProps<AllComponents, Components>)[]
    let state = updateSate<IProps<AllComponents, Components>>(keys, props, this.state)
    this.setState(state)
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
    let { n: name, d: data, id, childrens } = component
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
    return Child
  }
  render() {
    let { schema } = this.state || {}
    if (!schema) return <div>loadding...</div>
    let rootComponent = ObsParser<Components, AllComponents>(schema)[0]
    return this.renderComponents(rootComponent, 0)
  }
}
