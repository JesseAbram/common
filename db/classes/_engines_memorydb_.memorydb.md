> # Class: MemoryDb

## Hierarchy

* **MemoryDb**

## Implements

* [BaseDb](../interfaces/_types_.basedb.md)

### Index

#### Methods

* [close](_engines_memorydb_.memorydb.md#close)
* [del](_engines_memorydb_.memorydb.md#del)
* [drop](_engines_memorydb_.memorydb.md#drop)
* [empty](_engines_memorydb_.memorydb.md#empty)
* [get](_engines_memorydb_.memorydb.md#get)
* [maintain](_engines_memorydb_.memorydb.md#maintain)
* [open](_engines_memorydb_.memorydb.md#open)
* [put](_engines_memorydb_.memorydb.md#put)
* [rename](_engines_memorydb_.memorydb.md#rename)
* [size](_engines_memorydb_.memorydb.md#size)

## Methods

###  close

▸ **close**(): *void*

*Implementation of [BaseDb](../interfaces/_types_.basedb.md)*

*Defined in [engines/MemoryDb.ts:14](url)*

**Returns:** *void*

___

###  del

▸ **del**(`key`: `Uint8Array`): *void*

*Implementation of [BaseDb](../interfaces/_types_.basedb.md)*

*Defined in [engines/MemoryDb.ts:52](url)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | `Uint8Array` |

**Returns:** *void*

___

###  drop

▸ **drop**(): *void*

*Implementation of [BaseDb](../interfaces/_types_.basedb.md)*

*Defined in [engines/MemoryDb.ts:22](url)*

**Returns:** *void*

___

###  empty

▸ **empty**(): *void*

*Implementation of [BaseDb](../interfaces/_types_.basedb.md)*

*Defined in [engines/MemoryDb.ts:26](url)*

**Returns:** *void*

___

###  get

▸ **get**(`key`: `Uint8Array`): *`Uint8Array` | null*

*Implementation of [BaseDb](../interfaces/_types_.basedb.md)*

*Defined in [engines/MemoryDb.ts:58](url)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | `Uint8Array` |

**Returns:** *`Uint8Array` | null*

___

###  maintain

▸ **maintain**(`fn`: [ProgressCb](../modules/_types_.md#progresscb)): *void*

*Implementation of [BaseDb](../interfaces/_types_.basedb.md)*

*Defined in [engines/MemoryDb.ts:34](url)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [ProgressCb](../modules/_types_.md#progresscb) |

**Returns:** *void*

___

###  open

▸ **open**(): *void*

*Implementation of [BaseDb](../interfaces/_types_.basedb.md)*

*Defined in [engines/MemoryDb.ts:18](url)*

**Returns:** *void*

___

###  put

▸ **put**(`key`: `Uint8Array`, `value`: `Uint8Array`): *void*

*Implementation of [BaseDb](../interfaces/_types_.basedb.md)*

*Defined in [engines/MemoryDb.ts:64](url)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | `Uint8Array` |
`value` | `Uint8Array` |

**Returns:** *void*

___

###  rename

▸ **rename**(`base`: string, `file`: string): *void*

*Implementation of [BaseDb](../interfaces/_types_.basedb.md)*

*Defined in [engines/MemoryDb.ts:30](url)*

**Parameters:**

Name | Type |
------ | ------ |
`base` | string |
`file` | string |

**Returns:** *void*

___

###  size

▸ **size**(): *number*

*Implementation of [BaseDb](../interfaces/_types_.basedb.md)*

*Defined in [engines/MemoryDb.ts:42](url)*

**Returns:** *number*

___