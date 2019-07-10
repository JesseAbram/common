> # Class: NodeHeader

## Hierarchy

* **NodeHeader**

### Index

#### Constructors

* [constructor](_nodeheader_.nodeheader.md#constructor)

#### Accessors

* [encodedLength](_nodeheader_.nodeheader.md#encodedlength)
* [nodeType](_nodeheader_.nodeheader.md#nodetype)
* [value](_nodeheader_.nodeheader.md#value)

#### Methods

* [toU8a](_nodeheader_.nodeheader.md#tou8a)

## Constructors

###  constructor

\+ **new NodeHeader**(`input?`: null | `Uint8Array` | `Array<null | Uint8Array>`): *[NodeHeader](_nodeheader_.nodeheader.md)*

*Defined in [NodeHeader.ts:21](https://github.com/polkadot-js/common/blob/e5ab357/packages/trie-codec/src/NodeHeader.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`input?` | null \| `Uint8Array` \| `Array<null \| Uint8Array>` |

**Returns:** *[NodeHeader](_nodeheader_.nodeheader.md)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [NodeHeader.ts:73](https://github.com/polkadot-js/common/blob/e5ab357/packages/trie-codec/src/NodeHeader.ts#L73)*

**Returns:** *number*

___

###  nodeType

• **get nodeType**(): *number*

*Defined in [NodeHeader.ts:94](https://github.com/polkadot-js/common/blob/e5ab357/packages/trie-codec/src/NodeHeader.ts#L94)*

**Returns:** *number*

___

###  value

• **get value**(): *[Null](../modules/_nodeheader_.md#null) | [BranchHeader](../modules/_nodeheader_.md#branchheader) | [ExtensionHeader](../modules/_nodeheader_.md#extensionheader) | [LeafHeader](../modules/_nodeheader_.md#leafheader)*

*Defined in [NodeHeader.ts:98](https://github.com/polkadot-js/common/blob/e5ab357/packages/trie-codec/src/NodeHeader.ts#L98)*

**Returns:** *[Null](../modules/_nodeheader_.md#null) | [BranchHeader](../modules/_nodeheader_.md#branchheader) | [ExtensionHeader](../modules/_nodeheader_.md#extensionheader) | [LeafHeader](../modules/_nodeheader_.md#leafheader)*

## Methods

###  toU8a

▸ **toU8a**(): *`Uint8Array`*

*Defined in [NodeHeader.ts:102](https://github.com/polkadot-js/common/blob/e5ab357/packages/trie-codec/src/NodeHeader.ts#L102)*

**Returns:** *`Uint8Array`*