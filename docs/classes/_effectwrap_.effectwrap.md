[react-j-page](../README.md) › [Globals](../globals.md) › ["EffectWrap"](../modules/_effectwrap_.md) › [EffectWrap](_effectwrap_.effectwrap.md)

# Class: EffectWrap ‹**P, S, P, S**›

## Type parameters

▪ **P**

▪ **S**

▪ **P**

▪ **S**

## Hierarchy

* Component

  ↳ **EffectWrap**

## Index

### Constructors

* [constructor](_effectwrap_.effectwrap.md#constructor)

### Properties

* [Client](_effectwrap_.effectwrap.md#client)
* [context](_effectwrap_.effectwrap.md#context)
* [props](_effectwrap_.effectwrap.md#props)
* [refs](_effectwrap_.effectwrap.md#refs)
* [serverPath](_effectwrap_.effectwrap.md#serverpath)
* [uid](_effectwrap_.effectwrap.md#uid)

### Methods

* [componentDidMount](_effectwrap_.effectwrap.md#componentdidmount)
* [componentDidUpdate](_effectwrap_.effectwrap.md#optional-componentdidupdate)
* [componentWillMount](_effectwrap_.effectwrap.md#optional-componentwillmount)
* [componentWillReceiveProps](_effectwrap_.effectwrap.md#optional-componentwillreceiveprops)
* [componentWillUnmount](_effectwrap_.effectwrap.md#componentwillunmount)
* [componentWillUpdate](_effectwrap_.effectwrap.md#optional-componentwillupdate)
* [doEffect](_effectwrap_.effectwrap.md#doeffect)
* [forceUpdate](_effectwrap_.effectwrap.md#forceupdate)
* [init](_effectwrap_.effectwrap.md#init)
* [render](_effectwrap_.effectwrap.md#render)
* [setState](_effectwrap_.effectwrap.md#setstate)
* [shouldComponentUpdate](_effectwrap_.effectwrap.md#optional-shouldcomponentupdate)

### Object literals

* [state](_effectwrap_.effectwrap.md#state)

## Constructors

###  constructor

\+ **new EffectWrap**(`props`: any): *[EffectWrap](_effectwrap_.effectwrap.md)*

*Overrides [Layout](_layout_layoutbox_.layout.md).[constructor](_layout_layoutbox_.layout.md#constructor)*

*Defined in [src/EffectWrap.jsx:30](https://github.com/jincdream/react-jpage/blob/208fde3/src/EffectWrap.jsx#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | any |

**Returns:** *[EffectWrap](_effectwrap_.effectwrap.md)*

## Properties

###  Client

• **Client**: *Client‹›* = new Client(this.props.uid)

*Defined in [src/EffectWrap.jsx:38](https://github.com/jincdream/react-jpage/blob/208fde3/src/EffectWrap.jsx#L38)*

___

###  context

• **context**: *any*

*Inherited from [EffectWrap](_effectwrap_.effectwrap.md).[context](_effectwrap_.effectwrap.md#context)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:322

___

###  props

• **props**: *Readonly‹object› & Readonly‹P›*

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

###  serverPath

• **serverPath**: *string[]* = [this.props.uid + "/set/data", this.props.uid + "/visible"]

*Defined in [src/EffectWrap.jsx:36](https://github.com/jincdream/react-jpage/blob/208fde3/src/EffectWrap.jsx#L36)*

___

###  uid

• **uid**: *string* = "EffectComponent_" + this.props.uid

*Defined in [src/EffectWrap.jsx:35](https://github.com/jincdream/react-jpage/blob/208fde3/src/EffectWrap.jsx#L35)*

## Methods

###  componentDidMount

▸ **componentDidMount**(): *void*

*Overrides [Layout](_layout_layoutbox_.layout.md).[componentDidMount](_layout_layoutbox_.layout.md#optional-componentdidmount)*

*Defined in [src/EffectWrap.jsx:84](https://github.com/jincdream/react-jpage/blob/208fde3/src/EffectWrap.jsx#L84)*

**Returns:** *void*

___

### `Optional` componentDidUpdate

▸ **componentDidUpdate**(`prevProps`: Readonly‹P›, `prevState`: Readonly‹S›, `prevContext`: any): *void*

*Inherited from [EffectWrap](_effectwrap_.effectwrap.md).[componentDidUpdate](_effectwrap_.effectwrap.md#optional-componentdidupdate)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:387

**Parameters:**

Name | Type |
------ | ------ |
`prevProps` | Readonly‹P› |
`prevState` | Readonly‹S› |
`prevContext` | any |

**Returns:** *void*

___

### `Optional` componentWillMount

▸ **componentWillMount**(): *void*

*Inherited from [EffectWrap](_effectwrap_.effectwrap.md).[componentWillMount](_effectwrap_.effectwrap.md#optional-componentwillmount)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:382

**Returns:** *void*

___

### `Optional` componentWillReceiveProps

▸ **componentWillReceiveProps**(`nextProps`: Readonly‹P›, `nextContext`: any): *void*

*Inherited from [EffectWrap](_effectwrap_.effectwrap.md).[componentWillReceiveProps](_effectwrap_.effectwrap.md#optional-componentwillreceiveprops)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:384

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹P› |
`nextContext` | any |

**Returns:** *void*

___

###  componentWillUnmount

▸ **componentWillUnmount**(): *void*

*Overrides [Layout](_layout_layoutbox_.layout.md).[componentWillUnmount](_layout_layoutbox_.layout.md#optional-componentwillunmount)*

*Defined in [src/EffectWrap.jsx:53](https://github.com/jincdream/react-jpage/blob/208fde3/src/EffectWrap.jsx#L53)*

**Returns:** *void*

___

### `Optional` componentWillUpdate

▸ **componentWillUpdate**(`nextProps`: Readonly‹P›, `nextState`: Readonly‹S›, `nextContext`: any): *void*

*Inherited from [EffectWrap](_effectwrap_.effectwrap.md).[componentWillUpdate](_effectwrap_.effectwrap.md#optional-componentwillupdate)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:386

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹P› |
`nextState` | Readonly‹S› |
`nextContext` | any |

**Returns:** *void*

___

###  doEffect

▸ **doEffect**(`values`: any, `effect`: any): *void*

*Defined in [src/EffectWrap.jsx:56](https://github.com/jincdream/react-jpage/blob/208fde3/src/EffectWrap.jsx#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | any |
`effect` | any |

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

###  init

▸ **init**(): *void*

*Defined in [src/EffectWrap.jsx:40](https://github.com/jincdream/react-jpage/blob/208fde3/src/EffectWrap.jsx#L40)*

**Returns:** *void*

___

###  render

▸ **render**(): *Element‹›*

*Overrides void*

*Defined in [src/EffectWrap.jsx:85](https://github.com/jincdream/react-jpage/blob/208fde3/src/EffectWrap.jsx#L85)*

**Returns:** *Element‹›*

___

###  setState

▸ **setState**‹**K**›(`state`: function | S | object, `callback?`: function): *void*

*Inherited from [EffectWrap](_effectwrap_.effectwrap.md).[setState](_effectwrap_.effectwrap.md#setstate)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:307

**Type parameters:**

▪ **K**: *keyof S*

**Parameters:**

▪ **state**: *function | S | object*

▪`Optional`  **callback**: *function*

▸ (): *any*

**Returns:** *void*

___

### `Optional` shouldComponentUpdate

▸ **shouldComponentUpdate**(`nextProps`: Readonly‹P›, `nextState`: Readonly‹S›, `nextContext`: any): *boolean*

*Inherited from [EffectWrap](_effectwrap_.effectwrap.md).[shouldComponentUpdate](_effectwrap_.effectwrap.md#optional-shouldcomponentupdate)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:385

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹P› |
`nextState` | Readonly‹S› |
`nextContext` | any |

**Returns:** *boolean*

## Object literals

###  state

### ▪ **state**: *object*

*Overrides [LayoutItem](_layout_layoutitem_.layoutitem.md).[state](_layout_layoutitem_.layoutitem.md#state)*

*Defined in [src/EffectWrap.jsx:37](https://github.com/jincdream/react-jpage/blob/208fde3/src/EffectWrap.jsx#L37)*

###  visible

• **visible**: *boolean* = true

*Defined in [src/EffectWrap.jsx:37](https://github.com/jincdream/react-jpage/blob/208fde3/src/EffectWrap.jsx#L37)*
