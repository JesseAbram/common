

# Hierarchy

**TransactionDb**

↳  [Memory](_memory_.memory.md)

# Implements

* [TxDb](../interfaces/_types_.txdb.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new TransactionDb**(backing: *[BaseDb](../interfaces/_types_.basedb.md)*): [TransactionDb](_engines_transactiondb_.transactiondb.md)

*Defined in [engines/TransactionDb.ts:19](https://github.com/polkadot-js/common/blob/825a9de/packages/db/src/engines/TransactionDb.ts#L19)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| backing | [BaseDb](../interfaces/_types_.basedb.md) |

**Returns:** [TransactionDb](_engines_transactiondb_.transactiondb.md)

___

# Methods

<a id="close"></a>

##  close

▸ **close**(): `void`

*Implementation of [TxDb](../interfaces/_types_.txdb.md).[close](../interfaces/_types_.txdb.md#close)*

*Defined in [engines/TransactionDb.ts:48](https://github.com/polkadot-js/common/blob/825a9de/packages/db/src/engines/TransactionDb.ts#L48)*

**Returns:** `void`

___
<a id="del"></a>

##  del

▸ **del**(key: *`Uint8Array`*): `void`

*Implementation of [TxDb](../interfaces/_types_.txdb.md).[del](../interfaces/_types_.txdb.md#del)*

*Defined in [engines/TransactionDb.ts:78](https://github.com/polkadot-js/common/blob/825a9de/packages/db/src/engines/TransactionDb.ts#L78)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `Uint8Array` |

**Returns:** `void`

___
<a id="drop"></a>

##  drop

▸ **drop**(): `void`

*Implementation of [TxDb](../interfaces/_types_.txdb.md).[drop](../interfaces/_types_.txdb.md#drop)*

*Defined in [engines/TransactionDb.ts:56](https://github.com/polkadot-js/common/blob/825a9de/packages/db/src/engines/TransactionDb.ts#L56)*

**Returns:** `void`

___
<a id="empty"></a>

##  empty

▸ **empty**(): `void`

*Implementation of [TxDb](../interfaces/_types_.txdb.md).[empty](../interfaces/_types_.txdb.md#empty)*

*Defined in [engines/TransactionDb.ts:60](https://github.com/polkadot-js/common/blob/825a9de/packages/db/src/engines/TransactionDb.ts#L60)*

**Returns:** `void`

___
<a id="get"></a>

##  get

▸ **get**(key: *`Uint8Array`*): `Uint8Array` \| `null`

*Implementation of [TxDb](../interfaces/_types_.txdb.md).[get](../interfaces/_types_.txdb.md#get)*

*Defined in [engines/TransactionDb.ts:87](https://github.com/polkadot-js/common/blob/825a9de/packages/db/src/engines/TransactionDb.ts#L87)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `Uint8Array` |

**Returns:** `Uint8Array` \| `null`

___
<a id="maintain"></a>

##  maintain

▸ **maintain**(fn: *[ProgressCb](../modules/_types_.md#progresscb)*): `void`

*Implementation of [TxDb](../interfaces/_types_.txdb.md).[maintain](../interfaces/_types_.txdb.md#maintain)*

*Defined in [engines/TransactionDb.ts:68](https://github.com/polkadot-js/common/blob/825a9de/packages/db/src/engines/TransactionDb.ts#L68)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fn | [ProgressCb](../modules/_types_.md#progresscb) |

**Returns:** `void`

___
<a id="open"></a>

##  open

▸ **open**(): `void`

*Implementation of [TxDb](../interfaces/_types_.txdb.md).[open](../interfaces/_types_.txdb.md#open)*

*Defined in [engines/TransactionDb.ts:52](https://github.com/polkadot-js/common/blob/825a9de/packages/db/src/engines/TransactionDb.ts#L52)*

**Returns:** `void`

___
<a id="put"></a>

##  put

▸ **put**(key: *`Uint8Array`*, value: *`Uint8Array`*): `void`

*Implementation of [TxDb](../interfaces/_types_.txdb.md).[put](../interfaces/_types_.txdb.md#put)*

*Defined in [engines/TransactionDb.ts:101](https://github.com/polkadot-js/common/blob/825a9de/packages/db/src/engines/TransactionDb.ts#L101)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `Uint8Array` |
| value | `Uint8Array` |

**Returns:** `void`

___
<a id="rename"></a>

##  rename

▸ **rename**(base: *`string`*, file: *`string`*): `void`

*Implementation of [TxDb](../interfaces/_types_.txdb.md).[rename](../interfaces/_types_.txdb.md#rename)*

*Defined in [engines/TransactionDb.ts:64](https://github.com/polkadot-js/common/blob/825a9de/packages/db/src/engines/TransactionDb.ts#L64)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| base | `string` |
| file | `string` |

**Returns:** `void`

___
<a id="size"></a>

##  size

▸ **size**(): `number`

*Implementation of [TxDb](../interfaces/_types_.txdb.md).[size](../interfaces/_types_.txdb.md#size)*

*Defined in [engines/TransactionDb.ts:74](https://github.com/polkadot-js/common/blob/825a9de/packages/db/src/engines/TransactionDb.ts#L74)*

**Returns:** `number`

___
<a id="transaction"></a>

##  transaction

▸ **transaction**<`T`>(fn: *`function`*): `T`

*Defined in [engines/TransactionDb.ts:26](https://github.com/polkadot-js/common/blob/825a9de/packages/db/src/engines/TransactionDb.ts#L26)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| fn | `function` |

**Returns:** `T`

___

