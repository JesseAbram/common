

# Hierarchy

**NodeHeader**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new NodeHeader**(input?: *`null` \| `Uint8Array` \| `Array`<`null` \| `Uint8Array`>*): [NodeHeader](_nodeheader_.nodeheader.md)

*Defined in [NodeHeader.ts:21](https://github.com/polkadot-js/common/blob/825a9de/packages/trie-codec/src/NodeHeader.ts#L21)*

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

*Defined in [NodeHeader.ts:73](https://github.com/polkadot-js/common/blob/825a9de/packages/trie-codec/src/NodeHeader.ts#L73)*

**Returns:** `number`

___
<a id="nodetype"></a>

##  nodeType

**get nodeType**(): `number`

*Defined in [NodeHeader.ts:94](https://github.com/polkadot-js/common/blob/825a9de/packages/trie-codec/src/NodeHeader.ts#L94)*

**Returns:** `number`

___
<a id="value"></a>

##  value

**get value**(): [Null](../modules/_nodeheader_.md#null) \| [BranchHeader](../modules/_nodeheader_.md#branchheader) \| [ExtensionHeader](../modules/_nodeheader_.md#extensionheader) \| [LeafHeader](../modules/_nodeheader_.md#leafheader)

*Defined in [NodeHeader.ts:98](https://github.com/polkadot-js/common/blob/825a9de/packages/trie-codec/src/NodeHeader.ts#L98)*

**Returns:** [Null](../modules/_nodeheader_.md#null) \| [BranchHeader](../modules/_nodeheader_.md#branchheader) \| [ExtensionHeader](../modules/_nodeheader_.md#extensionheader) \| [LeafHeader](../modules/_nodeheader_.md#leafheader)

___

# Methods

<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(): `Uint8Array`

*Defined in [NodeHeader.ts:102](https://github.com/polkadot-js/common/blob/825a9de/packages/trie-codec/src/NodeHeader.ts#L102)*

**Returns:** `Uint8Array`

___

