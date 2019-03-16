

# Hierarchy

 [BaseDb](_types_.basedb.md)

**↳ TxDb**

# Implemented by

* [DiskDb](../classes/_disk_.diskdb.md)
* [Memory](../classes/_memory_.memory.md)
* [TransactionDb](../classes/_engines_transactiondb_.transactiondb.md)

# Properties

<a id="txcommit"></a>

## `<Optional>` txCommit

**● txCommit**: *`undefined` \| `function`*

*Inherited from [BaseDb](_types_.basedb.md).[txCommit](_types_.basedb.md#txcommit)*

*Defined in [types.ts:27](https://github.com/polkadot-js/common/blob/5dc8e87/packages/db/src/types.ts#L27)*

___
<a id="txrevert"></a>

## `<Optional>` txRevert

**● txRevert**: *`undefined` \| `function`*

*Inherited from [BaseDb](_types_.basedb.md).[txRevert](_types_.basedb.md#txrevert)*

*Defined in [types.ts:28](https://github.com/polkadot-js/common/blob/5dc8e87/packages/db/src/types.ts#L28)*

___
<a id="txstart"></a>

## `<Optional>` txStart

**● txStart**: *`undefined` \| `function`*

*Inherited from [BaseDb](_types_.basedb.md).[txStart](_types_.basedb.md#txstart)*

*Defined in [types.ts:29](https://github.com/polkadot-js/common/blob/5dc8e87/packages/db/src/types.ts#L29)*

___

# Methods

<a id="close"></a>

##  close

▸ **close**(): `void`

*Inherited from [BaseDb](_types_.basedb.md).[close](_types_.basedb.md#close)*

*Defined in [types.ts:19](https://github.com/polkadot-js/common/blob/5dc8e87/packages/db/src/types.ts#L19)*

**Returns:** `void`

___
<a id="del"></a>

##  del

▸ **del**(key: *`Uint8Array`*): `void`

*Inherited from [BaseDb](_types_.basedb.md).[del](_types_.basedb.md#del)*

*Defined in [types.ts:31](https://github.com/polkadot-js/common/blob/5dc8e87/packages/db/src/types.ts#L31)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `Uint8Array` |

**Returns:** `void`

___
<a id="drop"></a>

##  drop

▸ **drop**(): `void`

*Inherited from [BaseDb](_types_.basedb.md).[drop](_types_.basedb.md#drop)*

*Defined in [types.ts:21](https://github.com/polkadot-js/common/blob/5dc8e87/packages/db/src/types.ts#L21)*

**Returns:** `void`

___
<a id="empty"></a>

##  empty

▸ **empty**(): `void`

*Inherited from [BaseDb](_types_.basedb.md).[empty](_types_.basedb.md#empty)*

*Defined in [types.ts:22](https://github.com/polkadot-js/common/blob/5dc8e87/packages/db/src/types.ts#L22)*

**Returns:** `void`

___
<a id="get"></a>

##  get

▸ **get**(key: *`Uint8Array`*): `Uint8Array` \| `null`

*Inherited from [BaseDb](_types_.basedb.md).[get](_types_.basedb.md#get)*

*Defined in [types.ts:32](https://github.com/polkadot-js/common/blob/5dc8e87/packages/db/src/types.ts#L32)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `Uint8Array` |

**Returns:** `Uint8Array` \| `null`

___
<a id="maintain"></a>

##  maintain

▸ **maintain**(fn: *[ProgressCb](../modules/_types_.md#progresscb)*): `void`

*Inherited from [BaseDb](_types_.basedb.md).[maintain](_types_.basedb.md#maintain)*

*Defined in [types.ts:23](https://github.com/polkadot-js/common/blob/5dc8e87/packages/db/src/types.ts#L23)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fn | [ProgressCb](../modules/_types_.md#progresscb) |

**Returns:** `void`

___
<a id="open"></a>

##  open

▸ **open**(): `void`

*Inherited from [BaseDb](_types_.basedb.md).[open](_types_.basedb.md#open)*

*Defined in [types.ts:20](https://github.com/polkadot-js/common/blob/5dc8e87/packages/db/src/types.ts#L20)*

**Returns:** `void`

___
<a id="put"></a>

##  put

▸ **put**(key: *`Uint8Array`*, value: *`Uint8Array`*): `void`

*Inherited from [BaseDb](_types_.basedb.md).[put](_types_.basedb.md#put)*

*Defined in [types.ts:33](https://github.com/polkadot-js/common/blob/5dc8e87/packages/db/src/types.ts#L33)*

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

*Inherited from [BaseDb](_types_.basedb.md).[rename](_types_.basedb.md#rename)*

*Defined in [types.ts:24](https://github.com/polkadot-js/common/blob/5dc8e87/packages/db/src/types.ts#L24)*

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

*Inherited from [BaseDb](_types_.basedb.md).[size](_types_.basedb.md#size)*

*Defined in [types.ts:25](https://github.com/polkadot-js/common/blob/5dc8e87/packages/db/src/types.ts#L25)*

**Returns:** `number`

___
<a id="transaction"></a>

##  transaction

▸ **transaction**<`T`>(fn: *`function`*): `T`

*Defined in [types.ts:38](https://github.com/polkadot-js/common/blob/5dc8e87/packages/db/src/types.ts#L38)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| fn | `function` |

**Returns:** `T`

___
<a id="transactionasync"></a>

##  transactionAsync

▸ **transactionAsync**<`T`>(fn: *`function`*): `Promise`<`T`>

*Defined in [types.ts:37](https://github.com/polkadot-js/common/blob/5dc8e87/packages/db/src/types.ts#L37)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| fn | `function` |

**Returns:** `Promise`<`T`>

___

