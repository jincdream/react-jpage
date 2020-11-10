import * as React from 'react';
import isEqual from 'lodash.isequal'
import _set from 'lodash.set'
import ObsParser, { IComponentRenderDO, Base, EffectFields, OBS_Schema } from 'obs-parser'
import { IProps, IState } from './types'
import EffectWrap from './EffectWrap'
import { updateSate, fixGridAreaName, getScriptFilds } from './common'
import LayoutBox_ from './Layout/LayoutBox'
import LayoutItem_ from './Layout/LayoutItem'
import LinkageWrap from './LinkageWrap'
import { Client, Server } from 'jinter';

const LocalComponents: { [key: string]: React.ReactType } = { Layout: LayoutBox_ }
// Built into the layout component
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
    this.allFields = this.createFields(props.schema) as ComponentsData
    this.initLinkages(this.allFields)
  }
  private allFields: ComponentsData = {} as ComponentsData
  private createFields(schema: OBS_Schema<ComponentsData, AllComponents>) {
    let staticFields: {
      [key: string]: object
    } = {}
    Object.keys(schema.data).forEach((name: string) => {
      let componentData = schema.data[name]
      let { fields } = componentData
      staticFields[name] = fields ? JSON.parse(JSON.stringify(fields)) : {}
    })

    Object.keys(schema.data).forEach((name: keyof ComponentsData) => {
      let componentData = schema.data[name]
      let { scriptFields } = componentData
      if (!scriptFields) return;
      let data = getScriptFilds<EffectFields<AllComponents>, object, Partial<ComponentsData>>(scriptFields, {
        ...this.PageContext,
        ...staticFields
      }, staticFields[name])
      staticFields[name] = data
    })

    Object.keys(schema.data).forEach((name: keyof ComponentsData) => {
      let componentData = schema.data[name]
      let { effectFields } = componentData
      if (!effectFields) return;
      let data = getScriptFilds<EffectFields<AllComponents>, object, Partial<ComponentsData>>(effectFields, {
        ...this.PageContext,
        ...staticFields
      }, staticFields[name])
      staticFields[name] = data
    })

    return staticFields
  }

  initLinkages(allFields: ComponentsData) {
    let linkageContext = new Proxy<ComponentsData>(allFields, {
      set: (obj: any, componentId: string, value) => {
        _set(obj, componentId, value)
        this.Client.post({
          server: this.ServerID,
          path: "/linkage/update",
          body: { id: componentId }
        })
        return true
      }
    })
    this.LinkageContext = linkageContext
  }

  // To avoid being the external changes
  PageContext: Readonly<Context | {}> = Object.freeze(this.props.PageContext || {})

  triggers: {
    [key: string]: () => void
  }[] = []
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
    // Initialize the end
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
    name = name.replace(/^(\S)/, (m: string, a: string) => a.toUpperCase())
    let C: React.ReactType = LocalComponents[name] || ReactComponents[name]
    if (!C) return <div key={component.id as string} />

    // let nFields = scriptFields ? getScriptFilds<EffectFields<ComponentsData>, Readonly<{}> | Readonly<Context>, Partial<ComponentsData>>(scriptFields, this.PageContext, data) : data
    // nFields = JSON.parse(JSON.stringify(nFields))
    let componentProps = {
      PageContext: this.PageContext,
      changeContext: (data: Partial<ComponentsData[keyof ComponentsData]>) => {
        this.LinkageContext[id] = data
      },
      ...data,
      ...this.allFields[id]
    }

    let layout = fixGridAreaName(id)
    let childrensComponent = [].map.call(childrens, (component: IComponentRenderDO<AllComponents, ComponentsData>, index: number) => this.renderComponents(component, index))
    let Child = React.cloneElement(<C />, componentProps, childrensComponent)

    if (effect) {
      // Passive linkage
      Child = <EffectWrap key={id + index} {...effect}>{Child}</EffectWrap>
    } else {
      // Active linkage
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
