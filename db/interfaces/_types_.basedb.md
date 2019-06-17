> # Interface: BaseDb

## Hierarchy

* **BaseDb**

  * [TxDb](_types_.txdb.md)

## Implemented by

* [LruDb](../classes/_engines_lrudb_.lrudb.md)
* [MemoryDb](../classes/_engines_memorydb_.memorydb.md)

### Index

#### Properties

* [txCommit](_types_.basedb.md#optional-txcommit)
* [txRevert](_types_.basedb.md#optional-txrevert)
* [txStart](_types_.basedb.md#optional-txstart)

#### Methods

* [close](_types_.basedb.md#close)
* [del](_types_.basedb.md#del)
* [drop](_types_.basedb.md#drop)
* [empty](_types_.basedb.md#empty)
* [get](_types_.basedb.md#get)
* [maintain](_types_.basedb.md#maintain)
* [open](_types_.basedb.md#open)
* [put](_types_.basedb.md#put)
* [rename](_types_.basedb.md#rename)
* [size](_types_.basedb.md#size)

## Properties

### `Optional` txCommit

● **txCommit**? : *undefined | function*

*Defined in [types.ts:28](url)*

___

### `Optional` txRevert

● **txRevert**? : *undefined | function*

*Defined in [types.ts:29](url)*

___

### `Optional` txStart

● **txStart**? : *undefined | function*

*Defined in [types.ts:30](url)*

___

## Methods

###  close

▸ **close**(): *void*

*Defined in [types.ts:20](url)*

**Returns:** *void*

___

###  del

▸ **del**(`key`: `Uint8Array`): *void*

*Defined in [types.ts:32](url)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | `Uint8Array` |

**Returns:** *void*

___

###  drop

▸ **drop**(): *void*

*Defined in [types.ts:22](url)*

**Returns:** *void*

___

###  empty

▸ **empty**(): *void*

*Defined in [types.ts:23](url)*

**Returns:** *void*

___

###  get

▸ **get**(`key`: `Uint8Array`): *`Uint8Array` | null*

*Defined in [types.ts:33](url)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | `Uint8Array` |

**Returns:** *`Uint8Array` | null*

___

###  maintain

▸ **maintain**(`fn`: [ProgressCb](../modules/_types_.md#progresscb)): *void*

*Defined in [types.ts:24](url)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [ProgressCb](../modules/_types_.md#progresscb) |

**Returns:** *void*

___

###  open

▸ **open**(): *void*

*Defined in [types.ts:21](url)*

**Returns:** *void*

___

###  put

▸ **put**(`key`: `Uint8Array`, `value`: `Uint8Array`): *void*

*Defined in [types.ts:34](url)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | `Uint8Array` |
`value` | `Uint8Array` |

**Returns:** *void*

___

###  rename

▸ **rename**(`base`: string, `file`: string): *void*

*Defined in [types.ts:25](url)*

**Parameters:**

Name | Type |
------ | ------ |
`base` | string |
`file` | string |

**Returns:** *void*

___

###  size

▸ **size**(): *number*

*Defined in [types.ts:26](url)*

**Returns:** *number*

___