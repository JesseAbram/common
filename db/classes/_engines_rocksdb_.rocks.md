

# Hierarchy

**Rocks**

# Implements

* [BaseDb](../interfaces/_types_.basedb.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Rocks**(base: *`string`*, name: *`string`*): [Rocks](_engines_rocksdb_.rocks.md)

*Defined in [engines/RocksDb.ts:29](https://github.com/polkadot-js/common/blob/4ae7e4f/packages/db/src/engines/RocksDb.ts#L29)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| base | `string` |
| name | `string` |

**Returns:** [Rocks](_engines_rocksdb_.rocks.md)

___

# Methods

<a id="close"></a>

##  close

▸ **close**(): `void`

*Implementation of [BaseDb](../interfaces/_types_.basedb.md).[close](../interfaces/_types_.basedb.md#close)*

*Defined in [engines/RocksDb.ts:39](https://github.com/polkadot-js/common/blob/4ae7e4f/packages/db/src/engines/RocksDb.ts#L39)*

**Returns:** `void`

___
<a id="del"></a>

##  del

▸ **del**(key: *`Uint8Array`*): `void`

*Implementation of [BaseDb](../interfaces/_types_.basedb.md).[del](../interfaces/_types_.basedb.md#del)*

*Defined in [engines/RocksDb.ts:69](https://github.com/polkadot-js/common/blob/4ae7e4f/packages/db/src/engines/RocksDb.ts#L69)*

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

*Defined in [engines/RocksDb.ts:45](https://github.com/polkadot-js/common/blob/4ae7e4f/packages/db/src/engines/RocksDb.ts#L45)*

**Returns:** `void`

___
<a id="empty"></a>

##  empty

▸ **empty**(): `void`

*Implementation of [BaseDb](../interfaces/_types_.basedb.md).[empty](../interfaces/_types_.basedb.md#empty)*

*Defined in [engines/RocksDb.ts:49](https://github.com/polkadot-js/common/blob/4ae7e4f/packages/db/src/engines/RocksDb.ts#L49)*

**Returns:** `void`

___
<a id="get"></a>

##  get

▸ **get**(key: *`Uint8Array`*): `Uint8Array` \| `null`

*Implementation of [BaseDb](../interfaces/_types_.basedb.md).[get](../interfaces/_types_.basedb.md#get)*

*Defined in [engines/RocksDb.ts:76](https://github.com/polkadot-js/common/blob/4ae7e4f/packages/db/src/engines/RocksDb.ts#L76)*

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

*Defined in [engines/RocksDb.ts:57](https://github.com/polkadot-js/common/blob/4ae7e4f/packages/db/src/engines/RocksDb.ts#L57)*

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

*Defined in [engines/RocksDb.ts:53](https://github.com/polkadot-js/common/blob/4ae7e4f/packages/db/src/engines/RocksDb.ts#L53)*

**Returns:** `void`

___
<a id="put"></a>

##  put

▸ **put**(key: *`Uint8Array`*, value: *`Uint8Array`*): `void`

*Implementation of [BaseDb](../interfaces/_types_.basedb.md).[put](../interfaces/_types_.basedb.md#put)*

*Defined in [engines/RocksDb.ts:89](https://github.com/polkadot-js/common/blob/4ae7e4f/packages/db/src/engines/RocksDb.ts#L89)*

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

*Defined in [engines/RocksDb.ts:65](https://github.com/polkadot-js/common/blob/4ae7e4f/packages/db/src/engines/RocksDb.ts#L65)*

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

*Defined in [engines/RocksDb.ts:97](https://github.com/polkadot-js/common/blob/4ae7e4f/packages/db/src/engines/RocksDb.ts#L97)*

**Returns:** `number`

___

