import * as React from 'react';
import isEqual from 'lodash.isequal'
import ObsParser, { IComponentRenderDO, Base } from 'obs-parser'
import { IProps, IState, LinkageContextBase } from './types'
import EffectWrap from './EffectWrap'
import { updateSate, fixGridAreaName } from './common'
import LayoutBox_ from './Layout/LayoutBox'
import LayoutItem_ from './Layout/LayoutItem'
import LinkageWrap from './LinkageWrap'
import { Client, Server } from 'jinter';


const LocalComponents: { [key: string]: React.ReactType } = { Layout: LayoutBox_ }
export const LayoutBox = LayoutBox_
export const LayoutItem = LayoutItem_

export default class ReactJPage<
  AllComponents extends Base,
  ComponentsData extends Base,
  Context,
  LinkageContext> extends React.Component<IProps<AllComponents, ComponentsData, Context, LinkageContext>, IState<AllComponents, ComponentsData>
  >{
  LinkageContext: any;
  ServerID: string = "ReactJPage_" + Date.now().toString(32)
  Server: Server = new Server(this.ServerID)
  Client: Client = new Client(this.ServerID)

  constructor(props: IProps<AllComponents, ComponentsData, Context, LinkageContext>) {
    super(props)
    this.initLinkages()
  }
  initLinkages() {
    let linkageContext = new Proxy<LinkageContextBase<LinkageContext>>((this.props.LinkageContext || {}) as LinkageContextBase<LinkageContext>, {
      set: (obj: any, componentId: string, value = {}) => {

        if (componentId === "____inited____") {
          obj.____inited____ = true
          return true
        }
        if (!obj[componentId]) {
          obj[componentId] = {}
        }

        if (typeof value !== "object") return false

        obj[componentId] = {
          ...obj[componentId],
          ...value
        }

        if (obj.____inited____) {
          this.Client.post({
            server: this.ServerID,
            path: "/linkage/update",
            body: { id: componentId }
          })
        }
        return true
      }
    })
    this.LinkageContext = linkageContext
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
  componentWillReceiveProps(props: IProps<AllComponents, ComponentsData, Context, LinkageContext>) {
    let keys = ["schema"] as (keyof IProps<AllComponents, ComponentsData, Context, LinkageContext>)[]
    let state = updateSate<IProps<AllComponents, ComponentsData, Context, LinkageContext>>(keys, props, this.state)
    this.setState(state)
  }
  componentDidMount() {
    this.LinkageContext.____inited____ = true
    this.mounted()
  }
  componentWillUnmount() {
    this.Server.close()
  }
  mounted() {
    this.Client.post({
      server: this.ServerID,
      path: "/linkage/update",
      body: {}
    })
  }
  updateSate(
    keys: (keyof IState<AllComponents, ComponentsData>)[],
    receiveProps: IProps<AllComponents, ComponentsData, Context, LinkageContext>
  ) {
    let state = {} as IState<AllComponents, ComponentsData>
    keys.forEach((key) => {
      let value = this.state[key]
      let receiveValue = receiveProps[key]
      if (isEqual(value, receiveValue)) {
        Object.defineProperty(state, key, { value: receiveValue })
      }
    })
    return state
  }
  renderComponents(component: IComponentRenderDO<AllComponents, ComponentsData>, index: number) {
    let { components: ReactComponents } = this.props
    let { n: name, d: data, id, childrens, e: effect, l: linkages = [] } = component
    this.LinkageContext[id] = data
    name = name.replace(/^(\S)/, (m: string, a: string) => a.toUpperCase())
    let C: React.ReactType = LocalComponents[name] || ReactComponents[name]

    if (!C) return <div key={component.id as string} />

    let layout = fixGridAreaName(id)
    let childrensComponent = [].map.call(childrens, (component: IComponentRenderDO<AllComponents, ComponentsData>, index: number) => this.renderComponents(component, index))
    let Child = React.cloneElement(<C />, {
      PageContext: this.PageContext,
      changeContext: (data: Partial<ComponentsData[keyof ComponentsData]>) => {
        this.LinkageContext[id] = data
      },
      ...data,
    }, childrensComponent)

    if (effect) {
      Child = <EffectWrap key={id + index} {...effect}>{Child}</EffectWrap>
    } else {
      Child = <LinkageWrap<keyof ComponentsData[keyof ComponentsData]>
        getContext={() => {
          let obj: { [key: string]: any } = {}
          Object.keys(this.LinkageContext).forEach(n => obj[n] = this.LinkageContext[n])
          return obj
        }}
        key={id + index}
        server={this.Server}
        linkages={linkages}>
        {Child}
      </LinkageWrap>
    }

    Child = <LayoutItem_ key={id + index} name={name} nid={id} index={index} layout={layout}>{Child}</LayoutItem_>
    return Child
  }
  render() {
    let { schema } = this.state || {}
    if (!schema) return <div />
    let rootComponent = ObsParser<ComponentsData, AllComponents>(schema)[0]
    return this.renderComponents(rootComponent, 0)
  }
}
