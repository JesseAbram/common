> # Interface: TrieDb

## Hierarchy

* `TxDb`

  * **TrieDb**

### Index

#### Properties

* [db](_types_.triedb.md#db)
* [txCommit](_types_.triedb.md#optional-txcommit)
* [txRevert](_types_.triedb.md#optional-txrevert)
* [txStart](_types_.triedb.md#optional-txstart)

#### Methods

* [close](_types_.triedb.md#close)
* [del](_types_.triedb.md#del)
* [drop](_types_.triedb.md#drop)
* [empty](_types_.triedb.md#empty)
* [entries](_types_.triedb.md#entries)
* [get](_types_.triedb.md#get)
* [getEntry](_types_.triedb.md#getentry)
* [getNode](_types_.triedb.md#getnode)
* [getRoot](_types_.triedb.md#getroot)
* [maintain](_types_.triedb.md#maintain)
* [open](_types_.triedb.md#open)
* [put](_types_.triedb.md#put)
* [rename](_types_.triedb.md#rename)
* [setRoot](_types_.triedb.md#setroot)
* [size](_types_.triedb.md#size)
* [snapshot](_types_.triedb.md#snapshot)
* [transaction](_types_.triedb.md#transaction)

## Properties

###  db

● **db**: *`TxDb`*

*Defined in [types.ts:40](url)*

___

### `Optional` txCommit

● **txCommit**? : *undefined | function*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/common/packages/db/src/types.ts:28](url)*

___

### `Optional` txRevert

● **txRevert**? : *undefined | function*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/common/packages/db/src/types.ts:29](url)*

___

### `Optional` txStart

● **txStart**? : *undefined | function*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/common/packages/db/src/types.ts:30](url)*

___

## Methods

###  close

▸ **close**(): *void*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/common/packages/db/src/types.ts:20](url)*

**Returns:** *void*

___

###  del

▸ **del**(`key`: `Uint8Array`): *void*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/common/packages/db/src/types.ts:32](url)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | `Uint8Array` |

**Returns:** *void*

___

###  drop

▸ **drop**(): *void*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/common/packages/db/src/types.ts:22](url)*

**Returns:** *void*

___

###  empty

▸ **empty**(): *void*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/common/packages/db/src/types.ts:23](url)*

**Returns:** *void*

___

###  entries

▸ **entries**(): *`Array<TrieEntry>`*

*Defined in [types.ts:48](url)*

**Returns:** *`Array<TrieEntry>`*

___

###  get

▸ **get**(`key`: `Uint8Array`): *`Uint8Array` | null*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/common/packages/db/src/types.ts:33](url)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | `Uint8Array` |

**Returns:** *`Uint8Array` | null*

___

###  getEntry

▸ **getEntry**(`root?`: `Uint8Array`): *[TrieEntry](../modules/_types_.md#trieentry) | null*

*Defined in [types.ts:45](url)*

**Parameters:**

Name | Type |
------ | ------ |
`root?` | `Uint8Array` |

**Returns:** *[TrieEntry](../modules/_types_.md#trieentry) | null*

___

###  getNode

▸ **getNode**(`hash?`: `Uint8Array`): *[Node](../modules/_types_.md#node)*

*Defined in [types.ts:46](url)*

**Parameters:**

Name | Type |
------ | ------ |
`hash?` | `Uint8Array` |

**Returns:** *[Node](../modules/_types_.md#node)*

___

###  getRoot

▸ **getRoot**(): *`Uint8Array`*

*Defined in [types.ts:42](url)*

**Returns:** *`Uint8Array`*

___

###  maintain

▸ **maintain**(`fn`: `ProgressCb`): *void*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/common/packages/db/src/types.ts:24](url)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | `ProgressCb` |

**Returns:** *void*

___

###  open

▸ **open**(): *void*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/common/packages/db/src/types.ts:21](url)*

**Returns:** *void*

___

###  put

▸ **put**(`key`: `Uint8Array`, `value`: `Uint8Array`): *void*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/common/packages/db/src/types.ts:34](url)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | `Uint8Array` |
`value` | `Uint8Array` |

**Returns:** *void*

___

###  rename

▸ **rename**(`base`: string, `file`: string): *void*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/common/packages/db/src/types.ts:25](url)*

**Parameters:**

Name | Type |
------ | ------ |
`base` | string |
`file` | string |

**Returns:** *void*

___

###  setRoot

▸ **setRoot**(`rootHash`: `Uint8Array`): *void*

*Defined in [types.ts:43](url)*

**Parameters:**

Name | Type |
------ | ------ |
`rootHash` | `Uint8Array` |

**Returns:** *void*

___

###  size

▸ **size**(): *number*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/common/packages/db/src/types.ts:26](url)*

**Returns:** *number*

___

###  snapshot

▸ **snapshot**(`dest`: [TrieDb](_types_.triedb.md), `fn?`: `ProgressCb`): *number*

*Defined in [types.ts:49](url)*

**Parameters:**

Name | Type |
------ | ------ |
`dest` | [TrieDb](_types_.triedb.md) |
`fn?` | `ProgressCb` |

**Returns:** *number*

___

###  transaction

▸ **transaction**<**T**>(`fn`: function): *`T`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/common/packages/db/src/types.ts:38](url)*

**Type parameters:**

■` T`

**Parameters:**

■` fn`: *function*

▸ (): *`T`*

**Returns:** *`T`*

___