

# Hierarchy

**LmDb**

# Implements

* [BaseDb](../interfaces/_types_.basedb.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new LmDb**(base: *`string`*, name: *`string`*, options?: *[BaseDbOptions](../modules/_types_.md#basedboptions)*): [LmDb](_engines_lmdb_.lmdb.md)

*Defined in [engines/LmDb.ts:18](https://github.com/polkadot-js/common/blob/9a3468d/packages/db/src/engines/LmDb.ts#L18)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| base | `string` |
| name | `string` |
| `Optional` options | [BaseDbOptions](../modules/_types_.md#basedboptions) |

**Returns:** [LmDb](_engines_lmdb_.lmdb.md)

___

# Methods

<a id="close"></a>

##  close

▸ **close**(): `void`

*Implementation of [BaseDb](../interfaces/_types_.basedb.md).[close](../interfaces/_types_.basedb.md#close)*

*Defined in [engines/LmDb.ts:33](https://github.com/polkadot-js/common/blob/9a3468d/packages/db/src/engines/LmDb.ts#L33)*

**Returns:** `void`

___
<a id="del"></a>

##  del

▸ **del**(key: *`Uint8Array`*): `void`

*Implementation of [BaseDb](../interfaces/_types_.basedb.md).[del](../interfaces/_types_.basedb.md#del)*

*Defined in [engines/LmDb.ts:84](https://github.com/polkadot-js/common/blob/9a3468d/packages/db/src/engines/LmDb.ts#L84)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `Uint8Array` |

**Returns:** `void`

___
<a id="drop"></a>

##  drop

▸ **drop**(): `void`

*Implementation of [BaseDb](../interfaces/_types_.basedb.md).[drop](../interfaces/_types_.basedb.md#drop)*

*Defined in [engines/LmDb.ts:46](https://github.com/polkadot-js/common/blob/9a3468d/packages/db/src/engines/LmDb.ts#L46)*

**Returns:** `void`

___
<a id="empty"></a>

##  empty

▸ **empty**(): `void`

*Implementation of [BaseDb](../interfaces/_types_.basedb.md).[empty](../interfaces/_types_.basedb.md#empty)*

*Defined in [engines/LmDb.ts:50](https://github.com/polkadot-js/common/blob/9a3468d/packages/db/src/engines/LmDb.ts#L50)*

**Returns:** `void`

___
<a id="get"></a>

##  get

▸ **get**(_key: *`Uint8Array`*): `Uint8Array` \| `null`

*Implementation of [BaseDb](../interfaces/_types_.basedb.md).[get](../interfaces/_types_.basedb.md#get)*

*Defined in [engines/LmDb.ts:88](https://github.com/polkadot-js/common/blob/9a3468d/packages/db/src/engines/LmDb.ts#L88)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| _key | `Uint8Array` |

**Returns:** `Uint8Array` \| `null`

___
<a id="maintain"></a>

##  maintain

▸ **maintain**(fn: *[ProgressCb](../modules/_types_.md#progresscb)*): `void`

*Implementation of [BaseDb](../interfaces/_types_.basedb.md).[maintain](../interfaces/_types_.basedb.md#maintain)*

*Defined in [engines/LmDb.ts:54](https://github.com/polkadot-js/common/blob/9a3468d/packages/db/src/engines/LmDb.ts#L54)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fn | [ProgressCb](../modules/_types_.md#progresscb) |

**Returns:** `void`

___
<a id="open"></a>

##  open

▸ **open**(): `void`

*Implementation of [BaseDb](../interfaces/_types_.basedb.md).[open](../interfaces/_types_.basedb.md#open)*

*Defined in [engines/LmDb.ts:38](https://github.com/polkadot-js/common/blob/9a3468d/packages/db/src/engines/LmDb.ts#L38)*

**Returns:** `void`

___
<a id="put"></a>

##  put

▸ **put**(key: *`Uint8Array`*, value: *`Uint8Array`*): `void`

*Implementation of [BaseDb](../interfaces/_types_.basedb.md).[put](../interfaces/_types_.basedb.md#put)*

*Defined in [engines/LmDb.ts:108](https://github.com/polkadot-js/common/blob/9a3468d/packages/db/src/engines/LmDb.ts#L108)*

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

*Implementation of [BaseDb](../interfaces/_types_.basedb.md).[rename](../interfaces/_types_.basedb.md#rename)*

*Defined in [engines/LmDb.ts:62](https://github.com/polkadot-js/common/blob/9a3468d/packages/db/src/engines/LmDb.ts#L62)*

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

*Implementation of [BaseDb](../interfaces/_types_.basedb.md).[size](../interfaces/_types_.basedb.md#size)*

*Defined in [engines/LmDb.ts:66](https://github.com/polkadot-js/common/blob/9a3468d/packages/db/src/engines/LmDb.ts#L66)*

**Returns:** `number`

___
<a id="txcommit"></a>

##  txCommit

▸ **txCommit**(): `void`

*Defined in [engines/LmDb.ts:70](https://github.com/polkadot-js/common/blob/9a3468d/packages/db/src/engines/LmDb.ts#L70)*

**Returns:** `void`

___
<a id="txrevert"></a>

##  txRevert

▸ **txRevert**(): `void`

*Defined in [engines/LmDb.ts:75](https://github.com/polkadot-js/common/blob/9a3468d/packages/db/src/engines/LmDb.ts#L75)*

**Returns:** `void`

___
<a id="txstart"></a>

##  txStart

▸ **txStart**(): `void`

*Defined in [engines/LmDb.ts:80](https://github.com/polkadot-js/common/blob/9a3468d/packages/db/src/engines/LmDb.ts#L80)*

**Returns:** `void`

___

