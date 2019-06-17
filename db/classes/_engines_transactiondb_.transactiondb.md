> # Class: TransactionDb

## Hierarchy

* **TransactionDb**

  * [Memory](_memory_.memory.md)

## Implements

* [TxDb](../interfaces/_types_.txdb.md)

### Index

#### Constructors

* [constructor](_engines_transactiondb_.transactiondb.md#constructor)

#### Methods

* [close](_engines_transactiondb_.transactiondb.md#close)
* [del](_engines_transactiondb_.transactiondb.md#del)
* [drop](_engines_transactiondb_.transactiondb.md#drop)
* [empty](_engines_transactiondb_.transactiondb.md#empty)
* [get](_engines_transactiondb_.transactiondb.md#get)
* [maintain](_engines_transactiondb_.transactiondb.md#maintain)
* [open](_engines_transactiondb_.transactiondb.md#open)
* [put](_engines_transactiondb_.transactiondb.md#put)
* [rename](_engines_transactiondb_.transactiondb.md#rename)
* [size](_engines_transactiondb_.transactiondb.md#size)
* [transaction](_engines_transactiondb_.transactiondb.md#transaction)

## Constructors

###  constructor

\+ **new TransactionDb**(`backing`: [BaseDb](../interfaces/_types_.basedb.md)): *[TransactionDb](_engines_transactiondb_.transactiondb.md)*

*Defined in [engines/TransactionDb.ts:19](url)*

**Parameters:**

Name | Type |
------ | ------ |
`backing` | [BaseDb](../interfaces/_types_.basedb.md) |

**Returns:** *[TransactionDb](_engines_transactiondb_.transactiondb.md)*

___

## Methods

###  close

▸ **close**(): *void*

*Implementation of [TxDb](../interfaces/_types_.txdb.md)*

*Defined in [engines/TransactionDb.ts:48](url)*

**Returns:** *void*

___

###  del

▸ **del**(`key`: `Uint8Array`): *void*

*Implementation of [TxDb](../interfaces/_types_.txdb.md)*

*Defined in [engines/TransactionDb.ts:78](url)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | `Uint8Array` |

**Returns:** *void*

___

###  drop

▸ **drop**(): *void*

*Implementation of [TxDb](../interfaces/_types_.txdb.md)*

*Defined in [engines/TransactionDb.ts:56](url)*

**Returns:** *void*

___

###  empty

▸ **empty**(): *void*

*Implementation of [TxDb](../interfaces/_types_.txdb.md)*

*Defined in [engines/TransactionDb.ts:60](url)*

**Returns:** *void*

___

###  get

▸ **get**(`key`: `Uint8Array`): *`Uint8Array` | null*

*Implementation of [TxDb](../interfaces/_types_.txdb.md)*

*Defined in [engines/TransactionDb.ts:87](url)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | `Uint8Array` |

**Returns:** *`Uint8Array` | null*

___

###  maintain

▸ **maintain**(`fn`: [ProgressCb](../modules/_types_.md#progresscb)): *void*

*Implementation of [TxDb](../interfaces/_types_.txdb.md)*

*Defined in [engines/TransactionDb.ts:68](url)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [ProgressCb](../modules/_types_.md#progresscb) |

**Returns:** *void*

___

###  open

▸ **open**(): *void*

*Implementation of [TxDb](../interfaces/_types_.txdb.md)*

*Defined in [engines/TransactionDb.ts:52](url)*

**Returns:** *void*

___

###  put

▸ **put**(`key`: `Uint8Array`, `value`: `Uint8Array`): *void*

*Implementation of [TxDb](../interfaces/_types_.txdb.md)*

*Defined in [engines/TransactionDb.ts:101](url)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | `Uint8Array` |
`value` | `Uint8Array` |

**Returns:** *void*

___

###  rename

▸ **rename**(`base`: string, `file`: string): *void*

*Implementation of [TxDb](../interfaces/_types_.txdb.md)*

*Defined in [engines/TransactionDb.ts:64](url)*

**Parameters:**

Name | Type |
------ | ------ |
`base` | string |
`file` | string |

**Returns:** *void*

___

###  size

▸ **size**(): *number*

*Implementation of [TxDb](../interfaces/_types_.txdb.md)*

*Defined in [engines/TransactionDb.ts:74](url)*

**Returns:** *number*

___

###  transaction

▸ **transaction**<**T**>(`fn`: function): *`T`*

*Defined in [engines/TransactionDb.ts:26](url)*

**Type parameters:**

■` T`

**Parameters:**

■` fn`: *function*

▸ (): *`T`*

**Returns:** *`T`*

___