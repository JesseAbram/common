

# Hierarchy

**NodeHeader**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new NodeHeader**(input?: *`null` \| `Uint8Array` \| `Array`<`null` \| `Uint8Array`>*): [NodeHeader](_nodeheader_.nodeheader.md)

*Defined in [NodeHeader.ts:40](https://github.com/polkadot-js/common/blob/e921161/packages/trie-codec/src/NodeHeader.ts#L40)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` input | `null` \| `Uint8Array` \| `Array`<`null` \| `Uint8Array`> |

**Returns:** [NodeHeader](_nodeheader_.nodeheader.md)

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

**get encodedLength**(): `number`

*Defined in [NodeHeader.ts:92](https://github.com/polkadot-js/common/blob/e921161/packages/trie-codec/src/NodeHeader.ts#L92)*

**Returns:** `number`

___
<a id="nodetype"></a>

##  nodeType

**get nodeType**(): `number`

*Defined in [NodeHeader.ts:114](https://github.com/polkadot-js/common/blob/e921161/packages/trie-codec/src/NodeHeader.ts#L114)*

**Returns:** `number`

___
<a id="value"></a>

##  value

**get value**(): [Null](_nodeheader_.null.md) \| [BranchHeader](_nodeheader_.branchheader.md) \| [ExtensionHeader](_nodeheader_.extensionheader.md) \| [LeafHeader](_nodeheader_.leafheader.md)

*Defined in [NodeHeader.ts:118](https://github.com/polkadot-js/common/blob/e921161/packages/trie-codec/src/NodeHeader.ts#L118)*

**Returns:** [Null](_nodeheader_.null.md) \| [BranchHeader](_nodeheader_.branchheader.md) \| [ExtensionHeader](_nodeheader_.extensionheader.md) \| [LeafHeader](_nodeheader_.leafheader.md)

___

# Methods

<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(): `Uint8Array`

*Defined in [NodeHeader.ts:122](https://github.com/polkadot-js/common/blob/e921161/packages/trie-codec/src/NodeHeader.ts#L122)*

**Returns:** `Uint8Array`

___

