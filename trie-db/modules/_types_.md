> # External module: "types"

### Index

#### Enumerations

* [NodeType](../enums/_types_.nodetype.md)

#### Interfaces

* [TrieDb](../interfaces/_types_.triedb.md)

#### Type aliases

* [EncodedPath](_types_.md#encodedpath)
* [Node](_types_.md#node)
* [NodeBranch](_types_.md#nodebranch)
* [NodeEmpty](_types_.md#nodeempty)
* [NodeEncoded](_types_.md#nodeencoded)
* [NodeEncodedOrEmpty](_types_.md#nodeencodedorempty)
* [NodeKv](_types_.md#nodekv)
* [NodeNotEmpty](_types_.md#nodenotempty)
* [TrieEntry](_types_.md#trieentry)

## Type aliases

###  EncodedPath

Ƭ **EncodedPath**: *`Uint8Array` | null*

*Defined in [types.ts:28](url)*

___

###  Node

Ƭ **Node**: *[NodeEmpty](_types_.md#nodeempty) | [NodeNotEmpty](_types_.md#nodenotempty)*

*Defined in [types.ts:34](url)*

___

###  NodeBranch

Ƭ **NodeBranch**: *[[NodeEncodedOrEmpty](_types_.md#nodeencodedorempty), [NodeEncodedOrEmpty](_types_.md#nodeencodedorempty), [NodeEncodedOrEmpty](_types_.md#nodeencodedorempty), [NodeEncodedOrEmpty](_types_.md#nodeencodedorempty), [NodeEncodedOrEmpty](_types_.md#nodeencodedorempty), [NodeEncodedOrEmpty](_types_.md#nodeencodedorempty), [NodeEncodedOrEmpty](_types_.md#nodeencodedorempty), [NodeEncodedOrEmpty](_types_.md#nodeencodedorempty), [NodeEncodedOrEmpty](_types_.md#nodeencodedorempty), [NodeEncodedOrEmpty](_types_.md#nodeencodedorempty), [NodeEncodedOrEmpty](_types_.md#nodeencodedorempty), [NodeEncodedOrEmpty](_types_.md#nodeencodedorempty), [NodeEncodedOrEmpty](_types_.md#nodeencodedorempty), [NodeEncodedOrEmpty](_types_.md#nodeencodedorempty), [NodeEncodedOrEmpty](_types_.md#nodeencodedorempty), [NodeEncodedOrEmpty](_types_.md#nodeencodedorempty), [NodeEncodedOrEmpty](_types_.md#nodeencodedorempty)]*

*Defined in [types.ts:20](url)*

___

###  NodeEmpty

Ƭ **NodeEmpty**: *null*

*Defined in [types.ts:14](url)*

___

###  NodeEncoded

Ƭ **NodeEncoded**: *`Uint8Array`*

*Defined in [types.ts:16](url)*

___

###  NodeEncodedOrEmpty

Ƭ **NodeEncodedOrEmpty**: *[NodeEncoded](_types_.md#nodeencoded) | [NodeEmpty](_types_.md#nodeempty)*

*Defined in [types.ts:18](url)*

___

###  NodeKv

Ƭ **NodeKv**: *[[EncodedPath](_types_.md#encodedpath), [NodeEncodedOrEmpty](_types_.md#nodeencodedorempty)]*

*Defined in [types.ts:30](url)*

___

###  NodeNotEmpty

Ƭ **NodeNotEmpty**: *[NodeKv](_types_.md#nodekv) | [NodeBranch](_types_.md#nodebranch)*

*Defined in [types.ts:32](url)*

___

###  TrieEntry

Ƭ **TrieEntry**: *[`Uint8Array`, `Uint8Array`, `Array<Uint8Array>`]*

*Defined in [types.ts:37](url)*

___