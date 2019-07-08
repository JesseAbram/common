> # External module: "nibbles"

### Index

#### Functions

* [addNibblesTerminator](_nibbles_.md#addnibblesterminator)
* [decodeNibbles](_nibbles_.md#decodenibbles)
* [encodeNibbles](_nibbles_.md#encodenibbles)
* [extractKey](_nibbles_.md#extractkey)
* [extractNodeKey](_nibbles_.md#extractnodekey)
* [isNibblesTerminated](_nibbles_.md#isnibblesterminated)
* [removeNibblesTerminator](_nibbles_.md#removenibblesterminator)

## Functions

###  addNibblesTerminator

▸ **addNibblesTerminator**(`nibbles`: `Uint8Array`): *`Uint8Array`*

*Defined in [nibbles.ts:31](https://github.com/polkadot-js/common/blob/8a245f2/packages/trie-codec/src/nibbles.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`nibbles` | `Uint8Array` |

**Returns:** *`Uint8Array`*

___

###  decodeNibbles

▸ **decodeNibbles**(`value`: null | `Uint8Array`): *`Uint8Array`*

*Defined in [nibbles.ts:52](https://github.com/polkadot-js/common/blob/8a245f2/packages/trie-codec/src/nibbles.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | null \| `Uint8Array` |

**Returns:** *`Uint8Array`*

___

###  encodeNibbles

▸ **encodeNibbles**(`nibbles`: `Uint8Array`): *`Uint8Array`*

*Defined in [nibbles.ts:65](https://github.com/polkadot-js/common/blob/8a245f2/packages/trie-codec/src/nibbles.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`nibbles` | `Uint8Array` |

**Returns:** *`Uint8Array`*

___

###  extractKey

▸ **extractKey**(`key`: null | `Uint8Array`): *`Uint8Array`*

*Defined in [nibbles.ts:15](https://github.com/polkadot-js/common/blob/8a245f2/packages/trie-codec/src/nibbles.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | null \| `Uint8Array` |

**Returns:** *`Uint8Array`*

___

###  extractNodeKey

▸ **extractNodeKey**(`__namedParameters`: [null | `Uint8Array`]): *`Uint8Array`*

*Defined in [nibbles.ts:21](https://github.com/polkadot-js/common/blob/8a245f2/packages/trie-codec/src/nibbles.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | [null \| `Uint8Array`] |

**Returns:** *`Uint8Array`*

___

###  isNibblesTerminated

▸ **isNibblesTerminated**(`nibbles`: `Uint8Array`): *boolean*

*Defined in [nibbles.ts:27](https://github.com/polkadot-js/common/blob/8a245f2/packages/trie-codec/src/nibbles.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`nibbles` | `Uint8Array` |

**Returns:** *boolean*

___

###  removeNibblesTerminator

▸ **removeNibblesTerminator**(`nibbles`: `Uint8Array`): *`Uint8Array`*

*Defined in [nibbles.ts:44](https://github.com/polkadot-js/common/blob/8a245f2/packages/trie-codec/src/nibbles.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`nibbles` | `Uint8Array` |

**Returns:** *`Uint8Array`*