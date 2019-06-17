> # Interface: KeyringPair

## Hierarchy

* **KeyringPair**

### Index

#### Properties

* [address](_types_.keyringpair.md#address)
* [decodePkcs8](_types_.keyringpair.md#decodepkcs8)
* [encodePkcs8](_types_.keyringpair.md#encodepkcs8)
* [isLocked](_types_.keyringpair.md#islocked)
* [lock](_types_.keyringpair.md#lock)
* [meta](_types_.keyringpair.md#meta)
* [publicKey](_types_.keyringpair.md#publickey)
* [setMeta](_types_.keyringpair.md#setmeta)
* [type](_types_.keyringpair.md#type)

#### Methods

* [sign](_types_.keyringpair.md#sign)
* [toJson](_types_.keyringpair.md#tojson)
* [verify](_types_.keyringpair.md#verify)

## Properties

###  address

● **address**: *string*

*Defined in [types.ts:35](url)*

___

###  decodePkcs8

● **decodePkcs8**: *function*

*Defined in [types.ts:36](url)*

#### Type declaration:

▸ (`passphrase?`: undefined | string, `encoded?`: `Uint8Array`): *void*

**Parameters:**

Name | Type |
------ | ------ |
`passphrase?` | undefined | string |
`encoded?` | `Uint8Array` |

___

###  encodePkcs8

● **encodePkcs8**: *function*

*Defined in [types.ts:37](url)*

#### Type declaration:

▸ (`passphrase?`: undefined | string): *`Uint8Array`*

**Parameters:**

Name | Type |
------ | ------ |
`passphrase?` | undefined | string |

___

###  isLocked

● **isLocked**: *boolean*

*Defined in [types.ts:39](url)*

___

###  lock

● **lock**: *function*

*Defined in [types.ts:40](url)*

#### Type declaration:

▸ (): *void*

___

###  meta

● **meta**: *[KeyringPair$Meta](../modules/_types_.md#keyringpair$meta)*

*Defined in [types.ts:38](url)*

___

###  publicKey

● **publicKey**: *`Uint8Array`*

*Defined in [types.ts:41](url)*

___

###  setMeta

● **setMeta**: *function*

*Defined in [types.ts:42](url)*

#### Type declaration:

▸ (`meta`: [KeyringPair$Meta](../modules/_types_.md#keyringpair$meta)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`meta` | [KeyringPair$Meta](../modules/_types_.md#keyringpair$meta) |

___

###  type

● **type**: *`KeypairType`*

*Defined in [types.ts:33](url)*

___

## Methods

###  sign

▸ **sign**(`message`: `Uint8Array`): *`Uint8Array`*

*Defined in [types.ts:43](url)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | `Uint8Array` |

**Returns:** *`Uint8Array`*

___

###  toJson

▸ **toJson**(`passphrase?`: undefined | string): *[KeyringPair$Json](../modules/_types_.md#keyringpair$json)*

*Defined in [types.ts:44](url)*

**Parameters:**

Name | Type |
------ | ------ |
`passphrase?` | undefined | string |

**Returns:** *[KeyringPair$Json](../modules/_types_.md#keyringpair$json)*

___

###  verify

▸ **verify**(`message`: `Uint8Array`, `signature`: `Uint8Array`): *boolean*

*Defined in [types.ts:45](url)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | `Uint8Array` |
`signature` | `Uint8Array` |

**Returns:** *boolean*

___