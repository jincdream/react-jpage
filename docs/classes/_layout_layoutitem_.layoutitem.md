[react-j-page](../README.md) › [Globals](../globals.md) › ["Layout/LayoutItem"](../modules/_layout_layoutitem_.md) › [LayoutItem](_layout_layoutitem_.layoutitem.md)

# Class: LayoutItem ‹**S, S**›

## Type parameters

▪ **S**

▪ **S**

## Hierarchy

* Component‹object›

  ↳ **LayoutItem**

## Index

### Constructors

* [constructor](_layout_layoutitem_.layoutitem.md#constructor)

### Properties

* [context](_layout_layoutitem_.layoutitem.md#context)
* [props](_layout_layoutitem_.layoutitem.md#props)
* [refs](_layout_layoutitem_.layoutitem.md#refs)
* [state](_layout_layoutitem_.layoutitem.md#state)

### Methods

* [componentDidMount](_layout_layoutitem_.layoutitem.md#optional-componentdidmount)
* [componentDidUpdate](_layout_layoutitem_.layoutitem.md#optional-componentdidupdate)
* [componentWillMount](_layout_layoutitem_.layoutitem.md#optional-componentwillmount)
* [componentWillReceiveProps](_layout_layoutitem_.layoutitem.md#optional-componentwillreceiveprops)
* [componentWillUnmount](_layout_layoutitem_.layoutitem.md#optional-componentwillunmount)
* [componentWillUpdate](_layout_layoutitem_.layoutitem.md#optional-componentwillupdate)
* [forceUpdate](_layout_layoutitem_.layoutitem.md#forceupdate)
* [render](_layout_layoutitem_.layoutitem.md#render)
* [setState](_layout_layoutitem_.layoutitem.md#setstate)
* [shouldComponentUpdate](_layout_layoutitem_.layoutitem.md#optional-shouldcomponentupdate)

## Constructors

###  constructor

\+ **new LayoutItem**(`props?`: object, `context?`: any): *[LayoutItem](_layout_layoutitem_.layoutitem.md)*

*Inherited from [Layout](_layout_layoutbox_.layout.md).[constructor](_layout_layoutbox_.layout.md#constructor)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:301

**Parameters:**

▪`Optional`  **props**: *object*

Name | Type |
------ | ------ |
`children` | ReactElement |
`index` | number |
`layout` | string |
`name` | string |
`nid` | string |

▪`Optional`  **context**: *any*

**Returns:** *[LayoutItem](_layout_layoutitem_.layoutitem.md)*

## Properties

###  context

• **context**: *any*

*Inherited from [EffectWrap](_effectwrap_.effectwrap.md).[context](_effectwrap_.effectwrap.md#context)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:322

___

###  props

• **props**: *Readonly‹object› & Readonly‹object›*

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

• **state**: *Readonly‹S›*

*Inherited from [LayoutItem](_layout_layoutitem_.layoutitem.md).[state](_layout_layoutitem_.layoutitem.md#state)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:321

## Methods

### `Optional` componentDidMount

▸ **componentDidMount**(): *void*

*Inherited from [Layout](_layout_layoutbox_.layout.md).[componentDidMount](_layout_layoutbox_.layout.md#optional-componentdidmount)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:383

**Returns:** *void*

___

### `Optional` componentDidUpdate

▸ **componentDidUpdate**(`prevProps`: Readonly‹object›, `prevState`: Readonly‹S›, `prevContext`: any): *void*

*Inherited from [EffectWrap](_effectwrap_.effectwrap.md).[componentDidUpdate](_effectwrap_.effectwrap.md#optional-componentdidupdate)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:387

**Parameters:**

Name | Type |
------ | ------ |
`prevProps` | Readonly‹object› |
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

▸ **componentWillReceiveProps**(`nextProps`: Readonly‹object›, `nextContext`: any): *void*

*Inherited from [EffectWrap](_effectwrap_.effectwrap.md).[componentWillReceiveProps](_effectwrap_.effectwrap.md#optional-componentwillreceiveprops)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:384

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹object› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` componentWillUnmount

▸ **componentWillUnmount**(): *void*

*Inherited from [Layout](_layout_layoutbox_.layout.md).[componentWillUnmount](_layout_layoutbox_.layout.md#optional-componentwillunmount)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:388

**Returns:** *void*

___

### `Optional` componentWillUpdate

▸ **componentWillUpdate**(`nextProps`: Readonly‹object›, `nextState`: Readonly‹S›, `nextContext`: any): *void*

*Inherited from [EffectWrap](_effectwrap_.effectwrap.md).[componentWillUpdate](_effectwrap_.effectwrap.md#optional-componentwillupdate)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:386

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹object› |
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

*Defined in [src/Layout/LayoutItem.tsx:11](https://github.com/jincdream/react-jpage/blob/208fde3/src/Layout/LayoutItem.tsx#L11)*

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

▸ **shouldComponentUpdate**(`nextProps`: Readonly‹object›, `nextState`: Readonly‹S›, `nextContext`: any): *boolean*

*Inherited from [EffectWrap](_effectwrap_.effectwrap.md).[shouldComponentUpdate](_effectwrap_.effectwrap.md#optional-shouldcomponentupdate)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:385

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹object› |
`nextState` | Readonly‹S› |
`nextContext` | any |

**Returns:** *boolean*
