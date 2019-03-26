

# Hierarchy

**LmDb**

# Implements

* [BaseDb](../interfaces/_types_.basedb.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new LmDb**(base: *`string`*, name: *`string`*, options?: *[BaseDbOptions](../modules/_types_.md#basedboptions)*): [LmDb](_engines_lmdb_.lmdb.md)

*Defined in [engines/LmDb.ts:30](https://github.com/polkadot-js/common/blob/5bc4ea2/packages/db/src/engines/LmDb.ts#L30)*

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

*Defined in [engines/LmDb.ts:72](https://github.com/polkadot-js/common/blob/5bc4ea2/packages/db/src/engines/LmDb.ts#L72)*

**Returns:** `void`

___
<a id="del"></a>

##  del

▸ **del**(key: *`Uint8Array`*): `void`

*Implementation of [BaseDb](../interfaces/_types_.basedb.md).[del](../interfaces/_types_.basedb.md#del)*

*Defined in [engines/LmDb.ts:147](https://github.com/polkadot-js/common/blob/5bc4ea2/packages/db/src/engines/LmDb.ts#L147)*

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

*Defined in [engines/LmDb.ts:89](https://github.com/polkadot-js/common/blob/5bc4ea2/packages/db/src/engines/LmDb.ts#L89)*

**Returns:** `void`

___
<a id="empty"></a>

##  empty

▸ **empty**(): `void`

*Implementation of [BaseDb](../interfaces/_types_.basedb.md).[empty](../interfaces/_types_.basedb.md#empty)*

*Defined in [engines/LmDb.ts:93](https://github.com/polkadot-js/common/blob/5bc4ea2/packages/db/src/engines/LmDb.ts#L93)*

**Returns:** `void`

___
<a id="get"></a>

##  get

▸ **get**(_key: *`Uint8Array`*): `Uint8Array` \| `null`

*Implementation of [BaseDb](../interfaces/_types_.basedb.md).[get](../interfaces/_types_.basedb.md#get)*

*Defined in [engines/LmDb.ts:151](https://github.com/polkadot-js/common/blob/5bc4ea2/packages/db/src/engines/LmDb.ts#L151)*

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

*Defined in [engines/LmDb.ts:97](https://github.com/polkadot-js/common/blob/5bc4ea2/packages/db/src/engines/LmDb.ts#L97)*

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

*Defined in [engines/LmDb.ts:80](https://github.com/polkadot-js/common/blob/5bc4ea2/packages/db/src/engines/LmDb.ts#L80)*

**Returns:** `void`

___
<a id="put"></a>

##  put

▸ **put**(key: *`Uint8Array`*, value: *`Uint8Array`*): `void`

*Implementation of [BaseDb](../interfaces/_types_.basedb.md).[put](../interfaces/_types_.basedb.md#put)*

*Defined in [engines/LmDb.ts:159](https://github.com/polkadot-js/common/blob/5bc4ea2/packages/db/src/engines/LmDb.ts#L159)*

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

*Defined in [engines/LmDb.ts:105](https://github.com/polkadot-js/common/blob/5bc4ea2/packages/db/src/engines/LmDb.ts#L105)*

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

*Defined in [engines/LmDb.ts:109](https://github.com/polkadot-js/common/blob/5bc4ea2/packages/db/src/engines/LmDb.ts#L109)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` withExistsSync | `boolean` | false |

**Returns:** `number`

___
<a id="txcommit"></a>

##  txCommit

▸ **txCommit**(): `void`

*Defined in [engines/LmDb.ts:126](https://github.com/polkadot-js/common/blob/5bc4ea2/packages/db/src/engines/LmDb.ts#L126)*

**Returns:** `void`

___
<a id="txrevert"></a>

##  txRevert

▸ **txRevert**(): `void`

*Defined in [engines/LmDb.ts:132](https://github.com/polkadot-js/common/blob/5bc4ea2/packages/db/src/engines/LmDb.ts#L132)*

**Returns:** `void`

___
<a id="txstart"></a>

##  txStart

▸ **txStart**(): `void`

*Defined in [engines/LmDb.ts:138](https://github.com/polkadot-js/common/blob/5bc4ea2/packages/db/src/engines/LmDb.ts#L138)*

**Returns:** `void`

___

