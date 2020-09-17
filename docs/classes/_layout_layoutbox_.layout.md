[react-j-page](../README.md) › [Globals](../globals.md) › ["Layout/LayoutBox"](../modules/_layout_layoutbox_.md) › [Layout](_layout_layoutbox_.layout.md)

# Class: Layout

## Hierarchy

* Component‹[ILayoutProps](../interfaces/_layout_layoutbox_.ilayoutprops.md), [ILayoutProps](../interfaces/_layout_layoutbox_.ilayoutprops.md)›

  ↳ **Layout**

## Index

### Constructors

* [constructor](_layout_layoutbox_.layout.md#constructor)

### Properties

* [context](_layout_layoutbox_.layout.md#context)
* [props](_layout_layoutbox_.layout.md#props)
* [refs](_layout_layoutbox_.layout.md#refs)

### Methods

* [componentDidMount](_layout_layoutbox_.layout.md#optional-componentdidmount)
* [componentDidUpdate](_layout_layoutbox_.layout.md#optional-componentdidupdate)
* [componentWillMount](_layout_layoutbox_.layout.md#optional-componentwillmount)
* [componentWillReceiveProps](_layout_layoutbox_.layout.md#componentwillreceiveprops)
* [componentWillUnmount](_layout_layoutbox_.layout.md#optional-componentwillunmount)
* [componentWillUpdate](_layout_layoutbox_.layout.md#optional-componentwillupdate)
* [forceUpdate](_layout_layoutbox_.layout.md#forceupdate)
* [render](_layout_layoutbox_.layout.md#render)
* [setState](_layout_layoutbox_.layout.md#setstate)
* [shouldComponentUpdate](_layout_layoutbox_.layout.md#optional-shouldcomponentupdate)

### Object literals

* [state](_layout_layoutbox_.layout.md#state)

## Constructors

###  constructor

\+ **new Layout**(`props?`: [ILayoutProps](../interfaces/_layout_layoutbox_.ilayoutprops.md), `context?`: any): *[Layout](_layout_layoutbox_.layout.md)*

*Inherited from [Layout](_layout_layoutbox_.layout.md).[constructor](_layout_layoutbox_.layout.md#constructor)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:301

**Parameters:**

Name | Type |
------ | ------ |
`props?` | [ILayoutProps](../interfaces/_layout_layoutbox_.ilayoutprops.md) |
`context?` | any |

**Returns:** *[Layout](_layout_layoutbox_.layout.md)*

## Properties

###  context

• **context**: *any*

*Inherited from [EffectWrap](_effectwrap_.effectwrap.md).[context](_effectwrap_.effectwrap.md#context)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:322

___

###  props

• **props**: *Readonly‹object› & Readonly‹[ILayoutProps](../interfaces/_layout_layoutbox_.ilayoutprops.md)›*

*Inherited from [EffectWrap](_effectwrap_.effectwrap.md).[props](_effectwrap_.effectwrap.md#props)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:320

___

###  refs

• **refs**: *object*

*Inherited from [EffectWrap](_effectwrap_.effectwrap.md).[refs](_effectwrap_.effectwrap.md#refs)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:323

#### Type declaration:

* \[ **key**: *string*\]: ReactInstance

## Methods

### `Optional` componentDidMount

▸ **componentDidMount**(): *void*

*Inherited from [Layout](_layout_layoutbox_.layout.md).[componentDidMount](_layout_layoutbox_.layout.md#optional-componentdidmount)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:383

**Returns:** *void*

___

### `Optional` componentDidUpdate

▸ **componentDidUpdate**(`prevProps`: Readonly‹[ILayoutProps](../interfaces/_layout_layoutbox_.ilayoutprops.md)›, `prevState`: Readonly‹[ILayoutProps](../interfaces/_layout_layoutbox_.ilayoutprops.md)›, `prevContext`: any): *void*

*Inherited from [EffectWrap](_effectwrap_.effectwrap.md).[componentDidUpdate](_effectwrap_.effectwrap.md#optional-componentdidupdate)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:387

**Parameters:**

Name | Type |
------ | ------ |
`prevProps` | Readonly‹[ILayoutProps](../interfaces/_layout_layoutbox_.ilayoutprops.md)› |
`prevState` | Readonly‹[ILayoutProps](../interfaces/_layout_layoutbox_.ilayoutprops.md)› |
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

▸ **componentWillReceiveProps**(`props`: [ILayoutProps](../interfaces/_layout_layoutbox_.ilayoutprops.md)): *void*

*Overrides [EffectWrap](_effectwrap_.effectwrap.md).[componentWillReceiveProps](_effectwrap_.effectwrap.md#optional-componentwillreceiveprops)*

*Defined in [src/Layout/LayoutBox.tsx:20](https://github.com/jincdream/react-jpage/blob/208fde3/src/Layout/LayoutBox.tsx#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [ILayoutProps](../interfaces/_layout_layoutbox_.ilayoutprops.md) |

**Returns:** *void*

___

### `Optional` componentWillUnmount

▸ **componentWillUnmount**(): *void*

*Inherited from [Layout](_layout_layoutbox_.layout.md).[componentWillUnmount](_layout_layoutbox_.layout.md#optional-componentwillunmount)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:388

**Returns:** *void*

___

### `Optional` componentWillUpdate

▸ **componentWillUpdate**(`nextProps`: Readonly‹[ILayoutProps](../interfaces/_layout_layoutbox_.ilayoutprops.md)›, `nextState`: Readonly‹[ILayoutProps](../interfaces/_layout_layoutbox_.ilayoutprops.md)›, `nextContext`: any): *void*

*Inherited from [EffectWrap](_effectwrap_.effectwrap.md).[componentWillUpdate](_effectwrap_.effectwrap.md#optional-componentwillupdate)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:386

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹[ILayoutProps](../interfaces/_layout_layoutbox_.ilayoutprops.md)› |
`nextState` | Readonly‹[ILayoutProps](../interfaces/_layout_layoutbox_.ilayoutprops.md)› |
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

▸ **render**(): *Element‹›*

*Overrides void*

*Defined in [src/Layout/LayoutBox.tsx:25](https://github.com/jincdream/react-jpage/blob/208fde3/src/Layout/LayoutBox.tsx#L25)*

**Returns:** *Element‹›*

___

###  setState

▸ **setState**‹**K**›(`state`: function | S | object, `callback?`: function): *void*

*Inherited from [EffectWrap](_effectwrap_.effectwrap.md).[setState](_effectwrap_.effectwrap.md#setstate)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:307

**Type parameters:**

▪ **K**: *keyof ILayoutProps*

**Parameters:**

▪ **state**: *function | S | object*

▪`Optional`  **callback**: *function*

▸ (): *any*

**Returns:** *void*

___

### `Optional` shouldComponentUpdate

▸ **shouldComponentUpdate**(`nextProps`: Readonly‹[ILayoutProps](../interfaces/_layout_layoutbox_.ilayoutprops.md)›, `nextState`: Readonly‹[ILayoutProps](../interfaces/_layout_layoutbox_.ilayoutprops.md)›, `nextContext`: any): *boolean*

*Inherited from [EffectWrap](_effectwrap_.effectwrap.md).[shouldComponentUpdate](_effectwrap_.effectwrap.md#optional-shouldcomponentupdate)*

Defined in node_modules/_@types_react@15.6.28@@types/react/index.d.ts:385

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹[ILayoutProps](../interfaces/_layout_layoutbox_.ilayoutprops.md)› |
`nextState` | Readonly‹[ILayoutProps](../interfaces/_layout_layoutbox_.ilayoutprops.md)› |
`nextContext` | any |

**Returns:** *boolean*

## Object literals

###  state

### ▪ **state**: *object*

*Overrides [LayoutItem](_layout_layoutitem_.layoutitem.md).[state](_layout_layoutitem_.layoutitem.md#state)*

*Defined in [src/Layout/LayoutBox.tsx:13](https://github.com/jincdream/react-jpage/blob/208fde3/src/Layout/LayoutBox.tsx#L13)*

###  columns

• **columns**: *string[]* = this.props.columns

*Defined in [src/Layout/LayoutBox.tsx:16](https://github.com/jincdream/react-jpage/blob/208fde3/src/Layout/LayoutBox.tsx#L16)*

###  gap

• **gap**: *string* = this.props.gap

*Defined in [src/Layout/LayoutBox.tsx:17](https://github.com/jincdream/react-jpage/blob/208fde3/src/Layout/LayoutBox.tsx#L17)*

###  rows

• **rows**: *string[]* = this.props.rows

*Defined in [src/Layout/LayoutBox.tsx:15](https://github.com/jincdream/react-jpage/blob/208fde3/src/Layout/LayoutBox.tsx#L15)*

###  style

• **style**: *object* = this.props.style

*Defined in [src/Layout/LayoutBox.tsx:18](https://github.com/jincdream/react-jpage/blob/208fde3/src/Layout/LayoutBox.tsx#L18)*

###  template

• **template**: *string[][]* = this.props.template

*Defined in [src/Layout/LayoutBox.tsx:14](https://github.com/jincdream/react-jpage/blob/208fde3/src/Layout/LayoutBox.tsx#L14)*
