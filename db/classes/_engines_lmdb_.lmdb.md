

# Hierarchy

**LmDb**

# Implements

* [BaseDb](../interfaces/_types_.basedb.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new LmDb**(base: *`string`*, name: *`string`*, options?: *[BaseDbOptions](../modules/_types_.md#basedboptions)*): [LmDb](_engines_lmdb_.lmdb.md)

*Defined in [engines/LmDb.ts:16](https://github.com/polkadot-js/common/blob/1f0674c/packages/db/src/engines/LmDb.ts#L16)*

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

*Defined in [engines/LmDb.ts:29](https://github.com/polkadot-js/common/blob/1f0674c/packages/db/src/engines/LmDb.ts#L29)*

**Returns:** `void`

___
<a id="del"></a>

##  del

▸ **del**(key: *`Uint8Array`*): `void`

*Implementation of [BaseDb](../interfaces/_types_.basedb.md).[del](../interfaces/_types_.basedb.md#del)*

*Defined in [engines/LmDb.ts:84](https://github.com/polkadot-js/common/blob/1f0674c/packages/db/src/engines/LmDb.ts#L84)*

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

*Defined in [engines/LmDb.ts:44](https://github.com/polkadot-js/common/blob/1f0674c/packages/db/src/engines/LmDb.ts#L44)*

**Returns:** `void`

___
<a id="empty"></a>

##  empty

▸ **empty**(): `void`

*Implementation of [BaseDb](../interfaces/_types_.basedb.md).[empty](../interfaces/_types_.basedb.md#empty)*

*Defined in [engines/LmDb.ts:48](https://github.com/polkadot-js/common/blob/1f0674c/packages/db/src/engines/LmDb.ts#L48)*

**Returns:** `void`

___
<a id="get"></a>

##  get

▸ **get**(key: *`Uint8Array`*): `Uint8Array` \| `null`

*Implementation of [BaseDb](../interfaces/_types_.basedb.md).[get](../interfaces/_types_.basedb.md#get)*

*Defined in [engines/LmDb.ts:88](https://github.com/polkadot-js/common/blob/1f0674c/packages/db/src/engines/LmDb.ts#L88)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `Uint8Array` |

**Returns:** `Uint8Array` \| `null`

___
<a id="maintain"></a>

##  maintain

▸ **maintain**(fn: *[ProgressCb](../modules/_types_.md#progresscb)*): `void`

*Implementation of [BaseDb](../interfaces/_types_.basedb.md).[maintain](../interfaces/_types_.basedb.md#maintain)*

*Defined in [engines/LmDb.ts:52](https://github.com/polkadot-js/common/blob/1f0674c/packages/db/src/engines/LmDb.ts#L52)*

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

*Defined in [engines/LmDb.ts:34](https://github.com/polkadot-js/common/blob/1f0674c/packages/db/src/engines/LmDb.ts#L34)*

**Returns:** `void`

___
<a id="put"></a>

##  put

▸ **put**(key: *`Uint8Array`*, value: *`Uint8Array`*): `void`

*Implementation of [BaseDb](../interfaces/_types_.basedb.md).[put](../interfaces/_types_.basedb.md#put)*

*Defined in [engines/LmDb.ts:96](https://github.com/polkadot-js/common/blob/1f0674c/packages/db/src/engines/LmDb.ts#L96)*

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

*Defined in [engines/LmDb.ts:60](https://github.com/polkadot-js/common/blob/1f0674c/packages/db/src/engines/LmDb.ts#L60)*

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

*Defined in [engines/LmDb.ts:64](https://github.com/polkadot-js/common/blob/1f0674c/packages/db/src/engines/LmDb.ts#L64)*

**Returns:** `number`

___
<a id="txcommit"></a>

##  txCommit

▸ **txCommit**(): `void`

*Defined in [engines/LmDb.ts:68](https://github.com/polkadot-js/common/blob/1f0674c/packages/db/src/engines/LmDb.ts#L68)*

**Returns:** `void`

___
<a id="txrevert"></a>

##  txRevert

▸ **txRevert**(): `void`

*Defined in [engines/LmDb.ts:74](https://github.com/polkadot-js/common/blob/1f0674c/packages/db/src/engines/LmDb.ts#L74)*

**Returns:** `void`

___
<a id="txstart"></a>

##  txStart

▸ **txStart**(): `void`

*Defined in [engines/LmDb.ts:80](https://github.com/polkadot-js/common/blob/1f0674c/packages/db/src/engines/LmDb.ts#L80)*

**Returns:** `void`

___

