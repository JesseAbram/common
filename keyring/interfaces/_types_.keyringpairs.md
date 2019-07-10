> # Interface: KeyringPairs

## Hierarchy

* **KeyringPairs**

## Implemented by

* [Pairs](../classes/_pairs_.pairs.md)

### Index

#### Properties

* [add](_types_.keyringpairs.md#add)
* [all](_types_.keyringpairs.md#all)
* [get](_types_.keyringpairs.md#get)
* [remove](_types_.keyringpairs.md#remove)

## Properties

###  add

• **add**: *function*

*Defined in [types.ts:49](https://github.com/polkadot-js/common/blob/e5ab357/packages/keyring/src/types.ts#L49)*

#### Type declaration:

▸ (`pair`: [KeyringPair](_types_.keyringpair.md)): *[KeyringPair](_types_.keyringpair.md)*

**Parameters:**

Name | Type |
------ | ------ |
`pair` | [KeyringPair](_types_.keyringpair.md) |

___

###  all

• **all**: *function*

*Defined in [types.ts:50](https://github.com/polkadot-js/common/blob/e5ab357/packages/keyring/src/types.ts#L50)*

#### Type declaration:

▸ (): *`Array<KeyringPair>`*

___

###  get

• **get**: *function*

*Defined in [types.ts:51](https://github.com/polkadot-js/common/blob/e5ab357/packages/keyring/src/types.ts#L51)*

#### Type declaration:

▸ (`address`: string | `Uint8Array`): *[KeyringPair](_types_.keyringpair.md)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string \| `Uint8Array` |

___

###  remove

• **remove**: *function*

*Defined in [types.ts:52](https://github.com/polkadot-js/common/blob/e5ab357/packages/keyring/src/types.ts#L52)*

#### Type declaration:

▸ (`address`: string | `Uint8Array`): *void*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string \| `Uint8Array` |