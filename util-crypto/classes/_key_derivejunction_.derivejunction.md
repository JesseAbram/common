> # Class: DeriveJunction

## Hierarchy

* **DeriveJunction**

### Index

#### Accessors

* [chainCode](_key_derivejunction_.derivejunction.md#chaincode)
* [isHard](_key_derivejunction_.derivejunction.md#ishard)
* [isSoft](_key_derivejunction_.derivejunction.md#issoft)

#### Methods

* [hard](_key_derivejunction_.derivejunction.md#hard)
* [harden](_key_derivejunction_.derivejunction.md#harden)
* [soft](_key_derivejunction_.derivejunction.md#soft)
* [soften](_key_derivejunction_.derivejunction.md#soften)
* [from](_key_derivejunction_.derivejunction.md#static-from)

## Accessors

###  chainCode

• **get chainCode**(): *`Uint8Array`*

*Defined in [key/DeriveJunction.ts:39](https://github.com/polkadot-js/common/blob/e5ab357/packages/util-crypto/src/key/DeriveJunction.ts#L39)*

**Returns:** *`Uint8Array`*

___

###  isHard

• **get isHard**(): *boolean*

*Defined in [key/DeriveJunction.ts:43](https://github.com/polkadot-js/common/blob/e5ab357/packages/util-crypto/src/key/DeriveJunction.ts#L43)*

**Returns:** *boolean*

___

###  isSoft

• **get isSoft**(): *boolean*

*Defined in [key/DeriveJunction.ts:47](https://github.com/polkadot-js/common/blob/e5ab357/packages/util-crypto/src/key/DeriveJunction.ts#L47)*

**Returns:** *boolean*

## Methods

###  hard

▸ **hard**(`value`: number | `BN` | string | `Uint8Array`): *[DeriveJunction](_key_derivejunction_.derivejunction.md)*

*Defined in [key/DeriveJunction.ts:51](https://github.com/polkadot-js/common/blob/e5ab357/packages/util-crypto/src/key/DeriveJunction.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number \| `BN` \| string \| `Uint8Array` |

**Returns:** *[DeriveJunction](_key_derivejunction_.derivejunction.md)*

___

###  harden

▸ **harden**(): *[DeriveJunction](_key_derivejunction_.derivejunction.md)*

*Defined in [key/DeriveJunction.ts:55](https://github.com/polkadot-js/common/blob/e5ab357/packages/util-crypto/src/key/DeriveJunction.ts#L55)*

**Returns:** *[DeriveJunction](_key_derivejunction_.derivejunction.md)*

___

###  soft

▸ **soft**(`value`: number | `BN` | string | `Uint8Array`): *[DeriveJunction](_key_derivejunction_.derivejunction.md)*

*Defined in [key/DeriveJunction.ts:61](https://github.com/polkadot-js/common/blob/e5ab357/packages/util-crypto/src/key/DeriveJunction.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number \| `BN` \| string \| `Uint8Array` |

**Returns:** *[DeriveJunction](_key_derivejunction_.derivejunction.md)*

___

###  soften

▸ **soften**(): *[DeriveJunction](_key_derivejunction_.derivejunction.md)*

*Defined in [key/DeriveJunction.ts:80](https://github.com/polkadot-js/common/blob/e5ab357/packages/util-crypto/src/key/DeriveJunction.ts#L80)*

**Returns:** *[DeriveJunction](_key_derivejunction_.derivejunction.md)*

___

### `Static` from

▸ **from**(`value`: string): *[DeriveJunction](_key_derivejunction_.derivejunction.md)*

*Defined in [key/DeriveJunction.ts:22](https://github.com/polkadot-js/common/blob/e5ab357/packages/util-crypto/src/key/DeriveJunction.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[DeriveJunction](_key_derivejunction_.derivejunction.md)*