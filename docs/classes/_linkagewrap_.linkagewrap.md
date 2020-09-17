[react-j-page](../README.md) › [Globals](../globals.md) › ["LinkageWrap"](../modules/_linkagewrap_.md) › [LinkageWrap](_linkagewrap_.linkagewrap.md)

# Class: LinkageWrap ‹**Names, S, S**›

## Type parameters

▪ **Names**

▪ **S**

▪ **S**

## Hierarchy

* Component‹[Props](../modules/_linkagewrap_.md#props)‹Names››

  ↳ **LinkageWrap**

## Index

### Constructors

* [constructor](_linkagewrap_.linkagewrap.md#constructor)

### Properties

* [context](_linkagewrap_.linkagewrap.md#context)
* [eventId](_linkagewrap_.linkagewrap.md#eventid)
* [props](_linkagewrap_.linkagewrap.md#props)
* [refs](_linkagewrap_.linkagewrap.md#refs)
* [state](_linkagewrap_.linkagewrap.md#state)

### Methods

* [componentDidMount](_linkagewrap_.linkagewrap.md#optional-componentdidmount)
* [componentDidUpdate](_linkagewrap_.linkagewrap.md#optional-componentdidupdate)
* [componentWillMount](_linkagewrap_.linkagewrap.md#optional-componentwillmount)
* [componentWillReceiveProps](_linkagewrap_.linkagewrap.md#optional-componentwillreceiveprops)
* [componentWillUnmount](_linkagewrap_.linkagewrap.md#componentwillunmount)
* [componentWillUpdate](_linkagewrap_.linkagewrap.md#optional-componentwillupdate)
* [forceUpdate](_linkagewrap_.linkagewrap.md#forceupdate)
* [render](_linkagewrap_.linkagewrap.md#render)
* [setState](_linkagewrap_.linkagewrap.md#setstate)
* [shouldComponentUpdate](_linkagewrap_.linkagewrap.md#optional-shouldcomponentupdate)

## Constructors

###  constructor

\+ **new LinkageWrap**(`props`: [Props](../modules/_linkagewrap_.md#props)‹Names›): *[LinkageWrap](_linkagewrap_.linkagewrap.md)*

*Overrides [Layout](_layout_layoutbox_.layout.md).[constructor](_layout_layoutbox_.layout.md#constructor)*

*Defined in [src/LinkageWrap.tsx:14](https://github.com/jincdream/react-jpage/blob/208fde3/src/LinkageWrap.tsx#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [Props](../modules/_linkagewrap_.md#props)‹Names› |

**Returns:** *[LinkageWrap](_linkagewrap_.linkagewrap.md)*

## Properties

###  context

• **context**: *any*

*Inherited from [EffectWrap](_effectwrap_.effectwrap.md).[context](_effectwrap_.effectwrap.md#context)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:322

___

###  eventId

• **eventId**: *number*

*Defined in [src/LinkageWrap.tsx:27](https://github.com/jincdream/react-jpage/blob/208fde3/src/LinkageWrap.tsx#L27)*

___

###  props

• **props**: *Readonly‹object› & Readonly‹[Props](../modules/_linkagewrap_.md#props)‹Names››*

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

###  state

• **state**: *any*

*Overrides [LayoutItem](_layout_layoutitem_.layoutitem.md).[state](_layout_layoutitem_.layoutitem.md#state)*

*Defined in [src/LinkageWrap.tsx:14](https://github.com/jincdream/react-jpage/blob/208fde3/src/LinkageWrap.tsx#L14)*

## Methods

### `Optional` componentDidMount

▸ **componentDidMount**(): *void*

*Inherited from [Layout](_layout_layoutbox_.layout.md).[componentDidMount](_layout_layoutbox_.layout.md#optional-componentdidmount)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:383

**Returns:** *void*

___

### `Optional` componentDidUpdate

▸ **componentDidUpdate**(`prevProps`: Readonly‹[Props](../modules/_linkagewrap_.md#props)‹Names››, `prevState`: Readonly‹S›, `prevContext`: any): *void*

*Inherited from [EffectWrap](_effectwrap_.effectwrap.md).[componentDidUpdate](_effectwrap_.effectwrap.md#optional-componentdidupdate)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:387

**Parameters:**

Name | Type |
------ | ------ |
`prevProps` | Readonly‹[Props](../modules/_linkagewrap_.md#props)‹Names›› |
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

▸ **componentWillReceiveProps**(`nextProps`: Readonly‹[Props](../modules/_linkagewrap_.md#props)‹Names››, `nextContext`: any): *void*

*Inherited from [EffectWrap](_effectwrap_.effectwrap.md).[componentWillReceiveProps](_effectwrap_.effectwrap.md#optional-componentwillreceiveprops)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:384

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹[Props](../modules/_linkagewrap_.md#props)‹Names›› |
`nextContext` | any |

**Returns:** *void*

___

###  componentWillUnmount

▸ **componentWillUnmount**(): *void*

*Overrides [Layout](_layout_layoutbox_.layout.md).[componentWillUnmount](_layout_layoutbox_.layout.md#optional-componentwillunmount)*

*Defined in [src/LinkageWrap.tsx:28](https://github.com/jincdream/react-jpage/blob/208fde3/src/LinkageWrap.tsx#L28)*

**Returns:** *void*

___

### `Optional` componentWillUpdate

▸ **componentWillUpdate**(`nextProps`: Readonly‹[Props](../modules/_linkagewrap_.md#props)‹Names››, `nextState`: Readonly‹S›, `nextContext`: any): *void*

*Inherited from [EffectWrap](_effectwrap_.effectwrap.md).[componentWillUpdate](_effectwrap_.effectwrap.md#optional-componentwillupdate)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:386

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹[Props](../modules/_linkagewrap_.md#props)‹Names›› |
`nextState` | Readonly‹S› |
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

###  render

▸ **render**(): *ReactElement‹any›*

*Overrides void*

*Defined in [src/LinkageWrap.tsx:31](https://github.com/jincdream/react-jpage/blob/208fde3/src/LinkageWrap.tsx#L31)*

**Returns:** *ReactElement‹any›*

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

▸ **shouldComponentUpdate**(`nextProps`: Readonly‹[Props](../modules/_linkagewrap_.md#props)‹Names››, `nextState`: Readonly‹S›, `nextContext`: any): *boolean*

*Inherited from [EffectWrap](_effectwrap_.effectwrap.md).[shouldComponentUpdate](_effectwrap_.effectwrap.md#optional-shouldcomponentupdate)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:385

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹[Props](../modules/_linkagewrap_.md#props)‹Names›› |
`nextState` | Readonly‹S› |
`nextContext` | any |

**Returns:** *boolean*
