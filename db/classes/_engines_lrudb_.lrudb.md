> # Class: LruDb

## Hierarchy

* **LruDb**

## Implements

* [BaseDb](../interfaces/_types_.basedb.md)

### Index

#### Constructors

* [constructor](_engines_lrudb_.lrudb.md#constructor)

#### Methods

* [_getLru](_engines_lrudb_.lrudb.md#_getlru)
* [close](_engines_lrudb_.lrudb.md#close)
* [del](_engines_lrudb_.lrudb.md#del)
* [drop](_engines_lrudb_.lrudb.md#drop)
* [empty](_engines_lrudb_.lrudb.md#empty)
* [get](_engines_lrudb_.lrudb.md#get)
* [maintain](_engines_lrudb_.lrudb.md#maintain)
* [open](_engines_lrudb_.lrudb.md#open)
* [put](_engines_lrudb_.lrudb.md#put)
* [rename](_engines_lrudb_.lrudb.md#rename)
* [size](_engines_lrudb_.lrudb.md#size)
* [txCommit](_engines_lrudb_.lrudb.md#txcommit)
* [txRevert](_engines_lrudb_.lrudb.md#txrevert)
* [txStart](_engines_lrudb_.lrudb.md#txstart)

## Constructors

###  constructor

\+ **new LruDb**(`backing`: [BaseDb](../interfaces/_types_.basedb.md), `itemCount`: number): *[LruDb](_engines_lrudb_.lrudb.md)*

*Defined in [engines/LruDb.ts:20](https://github.com/polkadot-js/common/blob/fcdec01/packages/db/src/engines/LruDb.ts#L20)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`backing` | [BaseDb](../interfaces/_types_.basedb.md) | - |
`itemCount` | number |  DEFAULT_ITEM_COUNT |

**Returns:** *[LruDb](_engines_lrudb_.lrudb.md)*

## Methods

###  _getLru

▸ **_getLru**(`key`: `Uint8Array`): *`CachedValue` | undefined*

*Defined in [engines/LruDb.ts:87](https://github.com/polkadot-js/common/blob/fcdec01/packages/db/src/engines/LruDb.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | `Uint8Array` |

**Returns:** *`CachedValue` | undefined*

___

###  close

▸ **close**(): *void*

*Implementation of [BaseDb](../interfaces/_types_.basedb.md)*

*Defined in [engines/LruDb.ts:27](https://github.com/polkadot-js/common/blob/fcdec01/packages/db/src/engines/LruDb.ts#L27)*

**Returns:** *void*

___

###  del

▸ **del**(`key`: `Uint8Array`): *void*

*Implementation of [BaseDb](../interfaces/_types_.basedb.md)*

*Defined in [engines/LruDb.ts:64](https://github.com/polkadot-js/common/blob/fcdec01/packages/db/src/engines/LruDb.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | `Uint8Array` |

**Returns:** *void*

___

###  drop

▸ **drop**(): *void*

*Implementation of [BaseDb](../interfaces/_types_.basedb.md)*

*Defined in [engines/LruDb.ts:41](https://github.com/polkadot-js/common/blob/fcdec01/packages/db/src/engines/LruDb.ts#L41)*

**Returns:** *void*

___

###  empty

▸ **empty**(): *void*

*Implementation of [BaseDb](../interfaces/_types_.basedb.md)*

*Defined in [engines/LruDb.ts:45](https://github.com/polkadot-js/common/blob/fcdec01/packages/db/src/engines/LruDb.ts#L45)*

**Returns:** *void*

___

###  get

▸ **get**(`key`: `Uint8Array`): *`Uint8Array` | null*

*Implementation of [BaseDb](../interfaces/_types_.basedb.md)*

*Defined in [engines/LruDb.ts:71](https://github.com/polkadot-js/common/blob/fcdec01/packages/db/src/engines/LruDb.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | `Uint8Array` |

**Returns:** *`Uint8Array` | null*

___

###  maintain

▸ **maintain**(`fn`: [ProgressCb](../modules/_types_.md#progresscb)): *void*

*Implementation of [BaseDb](../interfaces/_types_.basedb.md)*

*Defined in [engines/LruDb.ts:56](https://github.com/polkadot-js/common/blob/fcdec01/packages/db/src/engines/LruDb.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [ProgressCb](../modules/_types_.md#progresscb) |

**Returns:** *void*

___

###  open

▸ **open**(): *void*

*Implementation of [BaseDb](../interfaces/_types_.basedb.md)*

*Defined in [engines/LruDb.ts:34](https://github.com/polkadot-js/common/blob/fcdec01/packages/db/src/engines/LruDb.ts#L34)*

**Returns:** *void*

___

###  put

▸ **put**(`key`: `Uint8Array`, `value`: `Uint8Array`): *void*

*Implementation of [BaseDb](../interfaces/_types_.basedb.md)*

*Defined in [engines/LruDb.ts:91](https://github.com/polkadot-js/common/blob/fcdec01/packages/db/src/engines/LruDb.ts#L91)*

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

*Defined in [engines/LruDb.ts:52](https://github.com/polkadot-js/common/blob/fcdec01/packages/db/src/engines/LruDb.ts#L52)*

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

*Defined in [engines/LruDb.ts:60](https://github.com/polkadot-js/common/blob/fcdec01/packages/db/src/engines/LruDb.ts#L60)*

**Returns:** *number*

___

###  txCommit

▸ **txCommit**(): *void*

*Defined in [engines/LruDb.ts:98](https://github.com/polkadot-js/common/blob/fcdec01/packages/db/src/engines/LruDb.ts#L98)*

**Returns:** *void*

___

###  txRevert

▸ **txRevert**(): *void*

*Defined in [engines/LruDb.ts:104](https://github.com/polkadot-js/common/blob/fcdec01/packages/db/src/engines/LruDb.ts#L104)*

**Returns:** *void*

___

###  txStart

▸ **txStart**(): *void*

*Defined in [engines/LruDb.ts:110](https://github.com/polkadot-js/common/blob/fcdec01/packages/db/src/engines/LruDb.ts#L110)*

**Returns:** *void*