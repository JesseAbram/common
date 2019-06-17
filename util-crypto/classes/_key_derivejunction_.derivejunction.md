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

● **get chainCode**(): *`Uint8Array`*

*Defined in [key/DeriveJunction.ts:39](url)*

**Returns:** *`Uint8Array`*

___

###  isHard

● **get isHard**(): *boolean*

*Defined in [key/DeriveJunction.ts:43](url)*

**Returns:** *boolean*

___

###  isSoft

● **get isSoft**(): *boolean*

*Defined in [key/DeriveJunction.ts:47](url)*

**Returns:** *boolean*

___

## Methods

###  hard

▸ **hard**(`value`: number | `BN` | string | `Uint8Array`): *[DeriveJunction](_key_derivejunction_.derivejunction.md)*

*Defined in [key/DeriveJunction.ts:51](url)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number | `BN` | string | `Uint8Array` |

**Returns:** *[DeriveJunction](_key_derivejunction_.derivejunction.md)*

___

###  harden

▸ **harden**(): *[DeriveJunction](_key_derivejunction_.derivejunction.md)*

*Defined in [key/DeriveJunction.ts:55](url)*

**Returns:** *[DeriveJunction](_key_derivejunction_.derivejunction.md)*

___

###  soft

▸ **soft**(`value`: number | `BN` | string | `Uint8Array`): *[DeriveJunction](_key_derivejunction_.derivejunction.md)*

*Defined in [key/DeriveJunction.ts:61](url)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number | `BN` | string | `Uint8Array` |

**Returns:** *[DeriveJunction](_key_derivejunction_.derivejunction.md)*

___

###  soften

▸ **soften**(): *[DeriveJunction](_key_derivejunction_.derivejunction.md)*

*Defined in [key/DeriveJunction.ts:80](url)*

**Returns:** *[DeriveJunction](_key_derivejunction_.derivejunction.md)*

___

### `Static` from

▸ **from**(`value`: string): *[DeriveJunction](_key_derivejunction_.derivejunction.md)*

*Defined in [key/DeriveJunction.ts:22](url)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[DeriveJunction](_key_derivejunction_.derivejunction.md)*

___