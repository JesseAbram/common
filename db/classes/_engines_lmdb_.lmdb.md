

# Hierarchy

**LmDb**

# Implements

* [BaseDb](../interfaces/_types_.basedb.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new LmDb**(base: *`string`*, name: *`string`*, options?: *[BaseDbOptions](../modules/_types_.md#basedboptions)*): [LmDb](_engines_lmdb_.lmdb.md)

*Defined in [engines/LmDb.ts:21](https://github.com/polkadot-js/common/blob/9e9910e/packages/db/src/engines/LmDb.ts#L21)*

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

*Defined in [engines/LmDb.ts:62](https://github.com/polkadot-js/common/blob/9e9910e/packages/db/src/engines/LmDb.ts#L62)*

**Returns:** `void`

___
<a id="del"></a>

##  del

▸ **del**(key: *`Uint8Array`*): `void`

*Implementation of [BaseDb](../interfaces/_types_.basedb.md).[del](../interfaces/_types_.basedb.md#del)*

*Defined in [engines/LmDb.ts:119](https://github.com/polkadot-js/common/blob/9e9910e/packages/db/src/engines/LmDb.ts#L119)*

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

*Defined in [engines/LmDb.ts:75](https://github.com/polkadot-js/common/blob/9e9910e/packages/db/src/engines/LmDb.ts#L75)*

**Returns:** `void`

___
<a id="empty"></a>

##  empty

▸ **empty**(): `void`

*Implementation of [BaseDb](../interfaces/_types_.basedb.md).[empty](../interfaces/_types_.basedb.md#empty)*

*Defined in [engines/LmDb.ts:79](https://github.com/polkadot-js/common/blob/9e9910e/packages/db/src/engines/LmDb.ts#L79)*

**Returns:** `void`

___
<a id="get"></a>

##  get

▸ **get**(_key: *`Uint8Array`*): `Uint8Array` \| `null`

*Implementation of [BaseDb](../interfaces/_types_.basedb.md).[get](../interfaces/_types_.basedb.md#get)*

*Defined in [engines/LmDb.ts:123](https://github.com/polkadot-js/common/blob/9e9910e/packages/db/src/engines/LmDb.ts#L123)*

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

*Defined in [engines/LmDb.ts:83](https://github.com/polkadot-js/common/blob/9e9910e/packages/db/src/engines/LmDb.ts#L83)*

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

*Defined in [engines/LmDb.ts:68](https://github.com/polkadot-js/common/blob/9e9910e/packages/db/src/engines/LmDb.ts#L68)*

**Returns:** `void`

___
<a id="put"></a>

##  put

▸ **put**(key: *`Uint8Array`*, value: *`Uint8Array`*): `void`

*Implementation of [BaseDb](../interfaces/_types_.basedb.md).[put](../interfaces/_types_.basedb.md#put)*

*Defined in [engines/LmDb.ts:143](https://github.com/polkadot-js/common/blob/9e9910e/packages/db/src/engines/LmDb.ts#L143)*

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

*Defined in [engines/LmDb.ts:91](https://github.com/polkadot-js/common/blob/9e9910e/packages/db/src/engines/LmDb.ts#L91)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| base | `string` |
| file | `string` |

**Returns:** `void`

___
<a id="size"></a>

##  size

▸ **size**(withExistsSync?: *`boolean`*): `number`

*Defined in [engines/LmDb.ts:95](https://github.com/polkadot-js/common/blob/9e9910e/packages/db/src/engines/LmDb.ts#L95)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` withExistsSync | `boolean` | false |

**Returns:** `number`

___
<a id="txcommit"></a>

##  txCommit

▸ **txCommit**(): `void`

*Defined in [engines/LmDb.ts:103](https://github.com/polkadot-js/common/blob/9e9910e/packages/db/src/engines/LmDb.ts#L103)*

**Returns:** `void`

___
<a id="txrevert"></a>

##  txRevert

▸ **txRevert**(): `void`

*Defined in [engines/LmDb.ts:108](https://github.com/polkadot-js/common/blob/9e9910e/packages/db/src/engines/LmDb.ts#L108)*

**Returns:** `void`

___
<a id="txstart"></a>

##  txStart

▸ **txStart**(): `void`

*Defined in [engines/LmDb.ts:113](https://github.com/polkadot-js/common/blob/9e9910e/packages/db/src/engines/LmDb.ts#L113)*

**Returns:** `void`

___

