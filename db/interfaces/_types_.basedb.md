

# Hierarchy

**BaseDb**

↳  [TxDb](_types_.txdb.md)

# Implemented by

* [LruDb](../classes/_engines_lrudb_.lrudb.md)
* [MemoryDb](../classes/_engines_memorydb_.memorydb.md)

# Properties

<a id="txcommit"></a>

## `<Optional>` txCommit

**● txCommit**: *`undefined` \| `function`*

*Defined in [types.ts:28](https://github.com/polkadot-js/common/blob/8d86900/packages/db/src/types.ts#L28)*

___
<a id="txrevert"></a>

## `<Optional>` txRevert

**● txRevert**: *`undefined` \| `function`*

*Defined in [types.ts:29](https://github.com/polkadot-js/common/blob/8d86900/packages/db/src/types.ts#L29)*

___
<a id="txstart"></a>

## `<Optional>` txStart

**● txStart**: *`undefined` \| `function`*

*Defined in [types.ts:30](https://github.com/polkadot-js/common/blob/8d86900/packages/db/src/types.ts#L30)*

___

# Methods

<a id="close"></a>

##  close

▸ **close**(): `void`

*Defined in [types.ts:20](https://github.com/polkadot-js/common/blob/8d86900/packages/db/src/types.ts#L20)*

**Returns:** `void`

___
<a id="del"></a>

##  del

▸ **del**(key: *`Uint8Array`*): `void`

*Defined in [types.ts:32](https://github.com/polkadot-js/common/blob/8d86900/packages/db/src/types.ts#L32)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `Uint8Array` |

**Returns:** `void`

___
<a id="drop"></a>

##  drop

▸ **drop**(): `void`

*Defined in [types.ts:22](https://github.com/polkadot-js/common/blob/8d86900/packages/db/src/types.ts#L22)*

**Returns:** `void`

___
<a id="empty"></a>

##  empty

▸ **empty**(): `void`

*Defined in [types.ts:23](https://github.com/polkadot-js/common/blob/8d86900/packages/db/src/types.ts#L23)*

**Returns:** `void`

___
<a id="get"></a>

##  get

▸ **get**(key: *`Uint8Array`*): `Uint8Array` \| `null`

*Defined in [types.ts:33](https://github.com/polkadot-js/common/blob/8d86900/packages/db/src/types.ts#L33)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `Uint8Array` |

**Returns:** `Uint8Array` \| `null`

___
<a id="maintain"></a>

##  maintain

▸ **maintain**(fn: *[ProgressCb](../modules/_types_.md#progresscb)*): `void`

*Defined in [types.ts:24](https://github.com/polkadot-js/common/blob/8d86900/packages/db/src/types.ts#L24)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fn | [ProgressCb](../modules/_types_.md#progresscb) |

**Returns:** `void`

___
<a id="open"></a>

##  open

▸ **open**(): `void`

*Defined in [types.ts:21](https://github.com/polkadot-js/common/blob/8d86900/packages/db/src/types.ts#L21)*

**Returns:** `void`

___
<a id="put"></a>

##  put

▸ **put**(key: *`Uint8Array`*, value: *`Uint8Array`*): `void`

*Defined in [types.ts:34](https://github.com/polkadot-js/common/blob/8d86900/packages/db/src/types.ts#L34)*

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

*Defined in [types.ts:25](https://github.com/polkadot-js/common/blob/8d86900/packages/db/src/types.ts#L25)*

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

*Defined in [types.ts:26](https://github.com/polkadot-js/common/blob/8d86900/packages/db/src/types.ts#L26)*

**Returns:** `number`

___

