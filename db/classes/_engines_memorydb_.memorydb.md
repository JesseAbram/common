

# Hierarchy

**MemoryDb**

# Implements

* [BaseDb](../interfaces/_types_.basedb.md)

# Methods

<a id="close"></a>

##  close

▸ **close**(): `void`

*Implementation of [BaseDb](../interfaces/_types_.basedb.md).[close](../interfaces/_types_.basedb.md#close)*

*Defined in [engines/MemoryDb.ts:14](https://github.com/polkadot-js/common/blob/a98151c/packages/db/src/engines/MemoryDb.ts#L14)*

**Returns:** `void`

___
<a id="del"></a>

##  del

▸ **del**(key: *`Uint8Array`*): `void`

*Implementation of [BaseDb](../interfaces/_types_.basedb.md).[del](../interfaces/_types_.basedb.md#del)*

*Defined in [engines/MemoryDb.ts:52](https://github.com/polkadot-js/common/blob/a98151c/packages/db/src/engines/MemoryDb.ts#L52)*

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

*Defined in [engines/MemoryDb.ts:22](https://github.com/polkadot-js/common/blob/a98151c/packages/db/src/engines/MemoryDb.ts#L22)*

**Returns:** `void`

___
<a id="empty"></a>

##  empty

▸ **empty**(): `void`

*Implementation of [BaseDb](../interfaces/_types_.basedb.md).[empty](../interfaces/_types_.basedb.md#empty)*

*Defined in [engines/MemoryDb.ts:26](https://github.com/polkadot-js/common/blob/a98151c/packages/db/src/engines/MemoryDb.ts#L26)*

**Returns:** `void`

___
<a id="get"></a>

##  get

▸ **get**(key: *`Uint8Array`*): `Uint8Array` \| `null`

*Implementation of [BaseDb](../interfaces/_types_.basedb.md).[get](../interfaces/_types_.basedb.md#get)*

*Defined in [engines/MemoryDb.ts:58](https://github.com/polkadot-js/common/blob/a98151c/packages/db/src/engines/MemoryDb.ts#L58)*

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

*Defined in [engines/MemoryDb.ts:34](https://github.com/polkadot-js/common/blob/a98151c/packages/db/src/engines/MemoryDb.ts#L34)*

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

*Defined in [engines/MemoryDb.ts:18](https://github.com/polkadot-js/common/blob/a98151c/packages/db/src/engines/MemoryDb.ts#L18)*

**Returns:** `void`

___
<a id="put"></a>

##  put

▸ **put**(key: *`Uint8Array`*, value: *`Uint8Array`*): `void`

*Implementation of [BaseDb](../interfaces/_types_.basedb.md).[put](../interfaces/_types_.basedb.md#put)*

*Defined in [engines/MemoryDb.ts:64](https://github.com/polkadot-js/common/blob/a98151c/packages/db/src/engines/MemoryDb.ts#L64)*

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

*Defined in [engines/MemoryDb.ts:30](https://github.com/polkadot-js/common/blob/a98151c/packages/db/src/engines/MemoryDb.ts#L30)*

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

*Defined in [engines/MemoryDb.ts:42](https://github.com/polkadot-js/common/blob/a98151c/packages/db/src/engines/MemoryDb.ts#L42)*

**Returns:** `number`

___

