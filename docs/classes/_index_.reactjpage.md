[react-j-page](../README.md) › [Globals](../globals.md) › ["index"](../modules/_index_.md) › [ReactJPage](_index_.reactjpage.md)

# Class: ReactJPage ‹**AllComponents, ComponentsData, Context, LinkageContext**›

## Type parameters

▪ **AllComponents**: *Base*

▪ **ComponentsData**: *Base*

▪ **Context**

▪ **LinkageContext**

## Hierarchy

* Component‹IProps‹AllComponents, ComponentsData, Context, LinkageContext›, IState‹AllComponents, ComponentsData››

  ↳ **ReactJPage**

## Index

### Constructors

* [constructor](_index_.reactjpage.md#constructor)

### Properties

* [Client](_index_.reactjpage.md#client)
* [LinkageContext](_index_.reactjpage.md#linkagecontext)
* [PageContext](_index_.reactjpage.md#pagecontext)
* [Server](_index_.reactjpage.md#server)
* [ServerID](_index_.reactjpage.md#serverid)
* [context](_index_.reactjpage.md#context)
* [props](_index_.reactjpage.md#props)
* [refs](_index_.reactjpage.md#refs)
* [triggers](_index_.reactjpage.md#triggers)

### Methods

* [componentDidMount](_index_.reactjpage.md#componentdidmount)
* [componentDidUpdate](_index_.reactjpage.md#optional-componentdidupdate)
* [componentWillMount](_index_.reactjpage.md#optional-componentwillmount)
* [componentWillReceiveProps](_index_.reactjpage.md#componentwillreceiveprops)
* [componentWillUnmount](_index_.reactjpage.md#componentwillunmount)
* [componentWillUpdate](_index_.reactjpage.md#optional-componentwillupdate)
* [forceUpdate](_index_.reactjpage.md#forceupdate)
* [initLinkages](_index_.reactjpage.md#initlinkages)
* [mounted](_index_.reactjpage.md#mounted)
* [render](_index_.reactjpage.md#render)
* [renderComponents](_index_.reactjpage.md#rendercomponents)
* [setState](_index_.reactjpage.md#setstate)
* [shouldComponentUpdate](_index_.reactjpage.md#optional-shouldcomponentupdate)
* [updateSate](_index_.reactjpage.md#updatesate)

### Object literals

* [state](_index_.reactjpage.md#state)

## Constructors

###  constructor

\+ **new ReactJPage**(`props`: IProps‹AllComponents, ComponentsData, Context, LinkageContext›): *[ReactJPage](_index_.reactjpage.md)*

*Overrides [Layout](_layout_layoutbox_.layout.md).[constructor](_layout_layoutbox_.layout.md#constructor)*

*Defined in [src/index.tsx:26](https://github.com/jincdream/react-jpage/blob/208fde3/src/index.tsx#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | IProps‹AllComponents, ComponentsData, Context, LinkageContext› |

**Returns:** *[ReactJPage](_index_.reactjpage.md)*

## Properties

###  Client

• **Client**: *Client* = new Client(this.ServerID)

*Defined in [src/index.tsx:26](https://github.com/jincdream/react-jpage/blob/208fde3/src/index.tsx#L26)*

___

###  LinkageContext

• **LinkageContext**: *any*

*Defined in [src/index.tsx:23](https://github.com/jincdream/react-jpage/blob/208fde3/src/index.tsx#L23)*

___

###  PageContext

• **PageContext**: *Readonly‹Context | object›* = Object.freeze(this.props.PageContext || {})

*Defined in [src/index.tsx:68](https://github.com/jincdream/react-jpage/blob/208fde3/src/index.tsx#L68)*

___

###  Server

• **Server**: *Server* = new Server(this.ServerID)

*Defined in [src/index.tsx:25](https://github.com/jincdream/react-jpage/blob/208fde3/src/index.tsx#L25)*

___

###  ServerID

• **ServerID**: *string* = "ReactJPage_" + Date.now().toString(32)

*Defined in [src/index.tsx:24](https://github.com/jincdream/react-jpage/blob/208fde3/src/index.tsx#L24)*

___

###  context

• **context**: *any*

*Inherited from [EffectWrap](_effectwrap_.effectwrap.md).[context](_effectwrap_.effectwrap.md#context)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:322

___

###  props

• **props**: *Readonly‹object› & Readonly‹IProps‹AllComponents, ComponentsData, Context, LinkageContext››*

*Inherited from [EffectWrap](_effectwrap_.effectwrap.md).[props](_effectwrap_.effectwrap.md#props)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:320

___

###  refs

• **refs**: *object*

*Inherited from [EffectWrap](_effectwrap_.effectwrap.md).[refs](_effectwrap_.effectwrap.md#refs)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:323

#### Type declaration:

* \[ **key**: *string*\]: ReactInstance

___

###  triggers

• **triggers**: *object[]* = []

*Defined in [src/index.tsx:70](https://github.com/jincdream/react-jpage/blob/208fde3/src/index.tsx#L70)*

## Methods

###  componentDidMount

▸ **componentDidMount**(): *void*

*Overrides [Layout](_layout_layoutbox_.layout.md).[componentDidMount](_layout_layoutbox_.layout.md#optional-componentdidmount)*

*Defined in [src/index.tsx:82](https://github.com/jincdream/react-jpage/blob/208fde3/src/index.tsx#L82)*

**Returns:** *void*

___

### `Optional` componentDidUpdate

▸ **componentDidUpdate**(`prevProps`: Readonly‹IProps‹AllComponents, ComponentsData, Context, LinkageContext››, `prevState`: Readonly‹IState‹AllComponents, ComponentsData››, `prevContext`: any): *void*

*Inherited from [EffectWrap](_effectwrap_.effectwrap.md).[componentDidUpdate](_effectwrap_.effectwrap.md#optional-componentdidupdate)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:387

**Parameters:**

Name | Type |
------ | ------ |
`prevProps` | Readonly‹IProps‹AllComponents, ComponentsData, Context, LinkageContext›› |
`prevState` | Readonly‹IState‹AllComponents, ComponentsData›› |
`prevContext` | any |

**Returns:** *void*

___

### `Optional` componentWillMount

▸ **componentWillMount**(): *void*

*Inherited from [EffectWrap](_effectwrap_.effectwrap.md).[componentWillMount](_effectwrap_.effectwrap.md#optional-componentwillmount)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:382

**Returns:** *void*

___

###  componentWillReceiveProps

▸ **componentWillReceiveProps**(`props`: IProps‹AllComponents, ComponentsData, Context, LinkageContext›): *void*

*Overrides [EffectWrap](_effectwrap_.effectwrap.md).[componentWillReceiveProps](_effectwrap_.effectwrap.md#optional-componentwillreceiveprops)*

*Defined in [src/index.tsx:77](https://github.com/jincdream/react-jpage/blob/208fde3/src/index.tsx#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | IProps‹AllComponents, ComponentsData, Context, LinkageContext› |

**Returns:** *void*

___

###  componentWillUnmount

▸ **componentWillUnmount**(): *void*

*Overrides [Layout](_layout_layoutbox_.layout.md).[componentWillUnmount](_layout_layoutbox_.layout.md#optional-componentwillunmount)*

*Defined in [src/index.tsx:87](https://github.com/jincdream/react-jpage/blob/208fde3/src/index.tsx#L87)*

**Returns:** *void*

___

### `Optional` componentWillUpdate

▸ **componentWillUpdate**(`nextProps`: Readonly‹IProps‹AllComponents, ComponentsData, Context, LinkageContext››, `nextState`: Readonly‹IState‹AllComponents, ComponentsData››, `nextContext`: any): *void*

*Inherited from [EffectWrap](_effectwrap_.effectwrap.md).[componentWillUpdate](_effectwrap_.effectwrap.md#optional-componentwillupdate)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:386

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹IProps‹AllComponents, ComponentsData, Context, LinkageContext›› |
`nextState` | Readonly‹IState‹AllComponents, ComponentsData›› |
`nextContext` | any |

**Returns:** *void*

___

###  forceUpdate

▸ **forceUpdate**(`callBack?`: function): *void*

*Inherited from [EffectWrap](_effectwrap_.effectwrap.md).[forceUpdate](_effectwrap_.effectwrap.md#forceupdate)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:312

**Parameters:**

▪`Optional`  **callBack**: *function*

▸ (): *any*

**Returns:** *void*

___

###  initLinkages

▸ **initLinkages**(): *void*

*Defined in [src/index.tsx:32](https://github.com/jincdream/react-jpage/blob/208fde3/src/index.tsx#L32)*

**Returns:** *void*

___

###  mounted

▸ **mounted**(): *void*

*Defined in [src/index.tsx:90](https://github.com/jincdream/react-jpage/blob/208fde3/src/index.tsx#L90)*

**Returns:** *void*

___

###  render

▸ **render**(): *Element‹›*

*Overrides void*

*Defined in [src/index.tsx:153](https://github.com/jincdream/react-jpage/blob/208fde3/src/index.tsx#L153)*

**Returns:** *Element‹›*

___

###  renderComponents

▸ **renderComponents**(`component`: IComponentRenderDO‹AllComponents, ComponentsData›, `index`: number): *Element‹›*

*Defined in [src/index.tsx:112](https://github.com/jincdream/react-jpage/blob/208fde3/src/index.tsx#L112)*

**Parameters:**

Name | Type |
------ | ------ |
`component` | IComponentRenderDO‹AllComponents, ComponentsData› |
`index` | number |

**Returns:** *Element‹›*

___

###  setState

▸ **setState**‹**K**›(`state`: function | S | object, `callback?`: function): *void*

*Inherited from [EffectWrap](_effectwrap_.effectwrap.md).[setState](_effectwrap_.effectwrap.md#setstate)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:307

**Type parameters:**

▪ **K**: *keyof IState<AllComponents, ComponentsData>*

**Parameters:**

▪ **state**: *function | S | object*

▪`Optional`  **callback**: *function*

▸ (): *any*

**Returns:** *void*

___

### `Optional` shouldComponentUpdate

▸ **shouldComponentUpdate**(`nextProps`: Readonly‹IProps‹AllComponents, ComponentsData, Context, LinkageContext››, `nextState`: Readonly‹IState‹AllComponents, ComponentsData››, `nextContext`: any): *boolean*

*Inherited from [EffectWrap](_effectwrap_.effectwrap.md).[shouldComponentUpdate](_effectwrap_.effectwrap.md#optional-shouldcomponentupdate)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:385

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹IProps‹AllComponents, ComponentsData, Context, LinkageContext›› |
`nextState` | Readonly‹IState‹AllComponents, ComponentsData›› |
`nextContext` | any |

**Returns:** *boolean*

___

###  updateSate

▸ **updateSate**(`keys`: never[], `receiveProps`: IProps‹AllComponents, ComponentsData, Context, LinkageContext›): *IState‹AllComponents, ComponentsData›*

*Defined in [src/index.tsx:97](https://github.com/jincdream/react-jpage/blob/208fde3/src/index.tsx#L97)*

**Parameters:**

Name | Type |
------ | ------ |
`keys` | never[] |
`receiveProps` | IProps‹AllComponents, ComponentsData, Context, LinkageContext› |

**Returns:** *IState‹AllComponents, ComponentsData›*

## Object literals

###  state

### ▪ **state**: *object*

*Overrides [LayoutItem](_layout_layoutitem_.layoutitem.md).[state](_layout_layoutitem_.layoutitem.md#state)*

*Defined in [src/index.tsx:73](https://github.com/jincdream/react-jpage/blob/208fde3/src/index.tsx#L73)*

###  components

• **components**: *object*

*Defined in [src/index.tsx:75](https://github.com/jincdream/react-jpage/blob/208fde3/src/index.tsx#L75)*

#### Type declaration:

###  schema

• **schema**: *OBS_Schema‹ComponentsData, AllComponents›* = this.props.schema

*Defined in [src/index.tsx:74](https://github.com/jincdream/react-jpage/blob/208fde3/src/index.tsx#L74)*
