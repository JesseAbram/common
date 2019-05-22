

@polkadot/keyring
=================

Overview
--------

*__name__*: Keyring

*__summary__*: Keyring management of user accounts

*__description__*: Allows generation of keyring pairs from a variety of input combinations, such as json object containing account address or public key, account metadata, and account encoded using `addFromJson`, or by providing those values as arguments separately to `addFromAddress`, or by providing the mnemonic (seed phrase) and account metadata as arguments to `addFromMnemonic`. Stores the keyring pairs in a keyring pair dictionary. Removal of the keyring pairs from the keyring pair dictionary is achieved using `removePair`. Retrieval of all the stored pairs via `getPairs` or perform lookup of a pair for a given account address or public key using `getPair`. JSON metadata associated with an account may be obtained using `toJson` accompanied by the account passphrase.

# Hierarchy

**Keyring**

# Implements

* [KeyringInstance](../interfaces/_types_.keyringinstance.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Keyring**(options?: *[KeyringOptions](../modules/_types_.md#keyringoptions)*): [Keyring](_keyring_.keyring.md)

*Defined in [keyring.ts:34](https://github.com/polkadot-js/common/blob/d916ca1/packages/keyring/src/keyring.ts#L34)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` options | [KeyringOptions](../modules/_types_.md#keyringoptions) |  {} |

**Returns:** [Keyring](_keyring_.keyring.md)

___

# Properties

<a id="decodeaddress"></a>

##  decodeAddress

**● decodeAddress**: *[decode](../modules/_address_decode_.md#decode)* =  decodeAddress

*Implementation of [KeyringInstance](../interfaces/_types_.keyringinstance.md).[decodeAddress](../interfaces/_types_.keyringinstance.md#decodeaddress)*

*Defined in [keyring.ts:47](https://github.com/polkadot-js/common/blob/d916ca1/packages/keyring/src/keyring.ts#L47)*

___
<a id="encodeaddress"></a>

##  encodeAddress

**● encodeAddress**: *[encode](../modules/_address_encode_.md#encode)* =  encodeAddress

*Implementation of [KeyringInstance](../interfaces/_types_.keyringinstance.md).[encodeAddress](../interfaces/_types_.keyringinstance.md#encodeaddress)*

*Defined in [keyring.ts:48](https://github.com/polkadot-js/common/blob/d916ca1/packages/keyring/src/keyring.ts#L48)*

___
<a id="setaddressprefix"></a>

##  setAddressPrefix

**● setAddressPrefix**: *[setPrefix](../modules/_address_setprefix_.md#setprefix)* =  setAddressPrefix

*Implementation of [KeyringInstance](../interfaces/_types_.keyringinstance.md).[setAddressPrefix](../interfaces/_types_.keyringinstance.md#setaddressprefix)*

*Defined in [keyring.ts:49](https://github.com/polkadot-js/common/blob/d916ca1/packages/keyring/src/keyring.ts#L49)*

___

# Accessors

<a id="pairs"></a>

##  pairs

**get pairs**(): `Array`<[KeyringPair](../interfaces/_types_.keyringpair.md)>

*Defined in [keyring.ts:54](https://github.com/polkadot-js/common/blob/d916ca1/packages/keyring/src/keyring.ts#L54)*

*__description__*: retrieve the pairs (alias for getPairs)

**Returns:** `Array`<[KeyringPair](../interfaces/_types_.keyringpair.md)>

___
<a id="publickeys"></a>

##  publicKeys

**get publicKeys**(): `Array`<`Uint8Array`>

*Defined in [keyring.ts:61](https://github.com/polkadot-js/common/blob/d916ca1/packages/keyring/src/keyring.ts#L61)*

*__description__*: retrieve the publicKeys (alias for getPublicKeys)

**Returns:** `Array`<`Uint8Array`>

___
<a id="type"></a>

##  type

**get type**(): `KeypairType`

*Defined in [keyring.ts:68](https://github.com/polkadot-js/common/blob/d916ca1/packages/keyring/src/keyring.ts#L68)*

*__description__*: Returns the type of the keyring, either ed25519 of sr25519

**Returns:** `KeypairType`

___

# Methods

<a id="addfromaddress"></a>

##  addFromAddress

▸ **addFromAddress**(address: *`string` \| `Uint8Array`*, meta?: *[KeyringPair$Meta](../modules/_types_.md#keyringpair_meta)*, encoded?: *`Uint8Array` \| `null`*, type?: *`KeypairType`*, ignoreChecksum?: *`undefined` \| `false` \| `true`*): [KeyringPair](../interfaces/_types_.keyringpair.md)

*Implementation of [KeyringInstance](../interfaces/_types_.keyringinstance.md).[addFromAddress](../interfaces/_types_.keyringinstance.md#addfromaddress)*

*Defined in [keyring.ts:88](https://github.com/polkadot-js/common/blob/d916ca1/packages/keyring/src/keyring.ts#L88)*

*__name__*: addFromAddress

*__summary__*: Stores an account, given an account address, as a Key/Value (public key, pair) in Keyring Pair Dictionary

*__description__*: Allows user to explicitely provide separate inputs including account address or public key, and optionally the associated account metadata, and the default encoded value as arguments (that may be obtained from the json file of an account backup), and then generates a keyring pair from them that it passes to `addPair` to stores in a keyring pair dictionary the public key of the generated pair as a key and the pair as the associated value.

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| address | `string` \| `Uint8Array` | - |
| `Default value` meta | [KeyringPair$Meta](../modules/_types_.md#keyringpair_meta) |  {} |
| `Default value` encoded | `Uint8Array` \| `null` |  null |
| `Default value` type | `KeypairType` |  this.type |
| `Optional` ignoreChecksum | `undefined` \| `false` \| `true` | - |

**Returns:** [KeyringPair](../interfaces/_types_.keyringpair.md)

___
<a id="addfromjson"></a>

##  addFromJson

▸ **addFromJson**(__namedParameters: *`object`*, ignoreChecksum?: *`undefined` \| `false` \| `true`*): [KeyringPair](../interfaces/_types_.keyringpair.md)

*Defined in [keyring.ts:101](https://github.com/polkadot-js/common/blob/d916ca1/packages/keyring/src/keyring.ts#L101)*

*__name__*: addFromJson

*__summary__*: Stores an account, given JSON data, as a Key/Value (public key, pair) in Keyring Pair Dictionary

*__description__*: Allows user to provide a json object argument that contains account information (that may be obtained from the json file of an account backup), and then generates a keyring pair from it that it passes to `addPair` to stores in a keyring pair dictionary the public key of the generated pair as a key and the pair as the associated value.

**Parameters:**

| Name | Type |
| ------ | ------ |
| __namedParameters | `object` |
| `Optional` ignoreChecksum | `undefined` \| `false` \| `true` |

**Returns:** [KeyringPair](../interfaces/_types_.keyringpair.md)

___
<a id="addfrommnemonic"></a>

##  addFromMnemonic

▸ **addFromMnemonic**(mnemonic: *`string`*, meta?: *[KeyringPair$Meta](../modules/_types_.md#keyringpair_meta)*, type?: *`KeypairType`*): [KeyringPair](../interfaces/_types_.keyringpair.md)

*Implementation of [KeyringInstance](../interfaces/_types_.keyringinstance.md).[addFromMnemonic](../interfaces/_types_.keyringinstance.md#addfrommnemonic)*

*Defined in [keyring.ts:117](https://github.com/polkadot-js/common/blob/d916ca1/packages/keyring/src/keyring.ts#L117)*

*__name__*: addFromMnemonic

*__summary__*: Stores an account, given a mnemonic, as a Key/Value (public key, pair) in Keyring Pair Dictionary

*__description__*: Allows user to provide a mnemonic (seed phrase that is provided when account is originally created) argument and a metadata argument that contains account information (that may be obtained from the json file of an account backup), and then generates a keyring pair from it that it passes to `addPair` to stores in a keyring pair dictionary the public key of the generated pair as a key and the pair as the associated value.

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| mnemonic | `string` | - |
| `Default value` meta | [KeyringPair$Meta](../modules/_types_.md#keyringpair_meta) |  {} |
| `Default value` type | `KeypairType` |  this.type |

**Returns:** [KeyringPair](../interfaces/_types_.keyringpair.md)

___
<a id="addfromseed"></a>

##  addFromSeed

▸ **addFromSeed**(seed: *`Uint8Array`*, meta?: *[KeyringPair$Meta](../modules/_types_.md#keyringpair_meta)*, type?: *`KeypairType`*): [KeyringPair](../interfaces/_types_.keyringpair.md)

*Implementation of [KeyringInstance](../interfaces/_types_.keyringinstance.md).[addFromSeed](../interfaces/_types_.keyringinstance.md#addfromseed)*

*Defined in [keyring.ts:128](https://github.com/polkadot-js/common/blob/d916ca1/packages/keyring/src/keyring.ts#L128)*

*__name__*: addFromSeed

*__summary__*: Stores an account, given seed data, as a Key/Value (public key, pair) in Keyring Pair Dictionary

*__description__*: Stores in a keyring pair dictionary the public key of the pair as a key and the pair as the associated value. Allows user to provide the account seed as an argument, and then generates a keyring pair from it that it passes to `addPair` to store in a keyring pair dictionary the public key of the generated pair as a key and the pair as the associated value.

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| seed | `Uint8Array` | - |
| `Default value` meta | [KeyringPair$Meta](../modules/_types_.md#keyringpair_meta) |  {} |
| `Default value` type | `KeypairType` |  this.type |

**Returns:** [KeyringPair](../interfaces/_types_.keyringpair.md)

___
<a id="addfromuri"></a>

##  addFromUri

▸ **addFromUri**(suri: *`string`*, meta?: *[KeyringPair$Meta](../modules/_types_.md#keyringpair_meta)*, type?: *`KeypairType`*): [KeyringPair](../interfaces/_types_.keyringpair.md)

*Implementation of [KeyringInstance](../interfaces/_types_.keyringinstance.md).[addFromUri](../interfaces/_types_.keyringinstance.md#addfromuri)*

*Defined in [keyring.ts:141](https://github.com/polkadot-js/common/blob/d916ca1/packages/keyring/src/keyring.ts#L141)*

*__name__*: addFromUri

*__summary__*: Creates an account via an suri

*__description__*: Extracts the phrase, path and password from a SURI format for specifying secret keys `<secret>/<soft-key>//<hard-key>///<password>` (the `///password` may be omitted, and `/<soft-key>` and `//<hard-key>` maybe repeated and mixed). The secret can be a hex string, mnemonic phrase or a string (to be padded)

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| suri | `string` | - |
| `Default value` meta | [KeyringPair$Meta](../modules/_types_.md#keyringpair_meta) |  {} |
| `Default value` type | `KeypairType` |  this.type |

**Returns:** [KeyringPair](../interfaces/_types_.keyringpair.md)

___
<a id="addpair"></a>

##  addPair

▸ **addPair**(pair: *[KeyringPair](../interfaces/_types_.keyringpair.md)*): [KeyringPair](../interfaces/_types_.keyringpair.md)

*Implementation of [KeyringInstance](../interfaces/_types_.keyringinstance.md).[addPair](../interfaces/_types_.keyringinstance.md#addpair)*

*Defined in [keyring.ts:76](https://github.com/polkadot-js/common/blob/d916ca1/packages/keyring/src/keyring.ts#L76)*

*__name__*: addPair

*__summary__*: Stores an account, given a keyring pair, as a Key/Value (public key, pair) in Keyring Pair Dictionary

**Parameters:**

| Name | Type |
| ------ | ------ |
| pair | [KeyringPair](../interfaces/_types_.keyringpair.md) |

**Returns:** [KeyringPair](../interfaces/_types_.keyringpair.md)

___
<a id="createfromuri"></a>

##  createFromUri

▸ **createFromUri**(_suri: *`string`*, meta?: *[KeyringPair$Meta](../modules/_types_.md#keyringpair_meta)*, type?: *`KeypairType`*): [KeyringPair](../interfaces/_types_.keyringpair.md)

*Implementation of [KeyringInstance](../interfaces/_types_.keyringinstance.md).[createFromUri](../interfaces/_types_.keyringinstance.md#createfromuri)*

*Defined in [keyring.ts:152](https://github.com/polkadot-js/common/blob/d916ca1/packages/keyring/src/keyring.ts#L152)*

*__name__*: createFromUri

*__summry__*: Creates a Keypair from an suri

*__description__*: This creates a pair from the suri, but does not add it to the keyring

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| _suri | `string` | - |
| `Default value` meta | [KeyringPair$Meta](../modules/_types_.md#keyringpair_meta) |  {} |
| `Default value` type | `KeypairType` |  this.type |

**Returns:** [KeyringPair](../interfaces/_types_.keyringpair.md)

___
<a id="getpair"></a>

##  getPair

▸ **getPair**(address: *`string` \| `Uint8Array`*): [KeyringPair](../interfaces/_types_.keyringpair.md)

*Implementation of [KeyringInstance](../interfaces/_types_.keyringinstance.md).[getPair](../interfaces/_types_.keyringinstance.md#getpair)*

*Defined in [keyring.ts:193](https://github.com/polkadot-js/common/blob/d916ca1/packages/keyring/src/keyring.ts#L193)*

*__name__*: getPair

*__summary__*: Retrieves an account keyring pair from the Keyring Pair Dictionary, given an account address

*__description__*: Returns a keyring pair value from the keyring pair dictionary by performing a key lookup using the provided account address or public key (after decoding it).

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` \| `Uint8Array` |

**Returns:** [KeyringPair](../interfaces/_types_.keyringpair.md)

___
<a id="getpairs"></a>

##  getPairs

▸ **getPairs**(): `Array`<[KeyringPair](../interfaces/_types_.keyringpair.md)>

*Implementation of [KeyringInstance](../interfaces/_types_.keyringinstance.md).[getPairs](../interfaces/_types_.keyringinstance.md#getpairs)*

*Defined in [keyring.ts:202](https://github.com/polkadot-js/common/blob/d916ca1/packages/keyring/src/keyring.ts#L202)*

*__name__*: getPairs

*__summary__*: Retrieves all account keyring pairs from the Keyring Pair Dictionary

*__description__*: Returns an array list of all the keyring pair values that are stored in the keyring pair dictionary.

**Returns:** `Array`<[KeyringPair](../interfaces/_types_.keyringpair.md)>

___
<a id="getpublickeys"></a>

##  getPublicKeys

▸ **getPublicKeys**(): `Array`<`Uint8Array`>

*Implementation of [KeyringInstance](../interfaces/_types_.keyringinstance.md).[getPublicKeys](../interfaces/_types_.keyringinstance.md#getpublickeys)*

*Defined in [keyring.ts:211](https://github.com/polkadot-js/common/blob/d916ca1/packages/keyring/src/keyring.ts#L211)*

*__name__*: getPublicKeys

*__summary__*: Retrieves Public Keys of all Keyring Pairs stored in the Keyring Pair Dictionary

*__description__*: Returns an array list of all the public keys associated with each of the keyring pair values that are stored in the keyring pair dictionary.

**Returns:** `Array`<`Uint8Array`>

___
<a id="removepair"></a>

##  removePair

▸ **removePair**(address: *`string` \| `Uint8Array`*): `void`

*Implementation of [KeyringInstance](../interfaces/_types_.keyringinstance.md).[removePair](../interfaces/_types_.keyringinstance.md#removepair)*

*Defined in [keyring.ts:223](https://github.com/polkadot-js/common/blob/d916ca1/packages/keyring/src/keyring.ts#L223)*

*__name__*: removePair

*__description__*: Deletes the provided input address or public key from the stored Keyring Pair Dictionary.

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` \| `Uint8Array` |

**Returns:** `void`

___
<a id="tojson"></a>

##  toJson

▸ **toJson**(address: *`string` \| `Uint8Array`*, passphrase?: *`undefined` \| `string`*): [KeyringPair$Json](../modules/_types_.md#keyringpair_json)

*Implementation of [KeyringInstance](../interfaces/_types_.keyringinstance.md).[toJson](../interfaces/_types_.keyringinstance.md#tojson)*

*Defined in [keyring.ts:235](https://github.com/polkadot-js/common/blob/d916ca1/packages/keyring/src/keyring.ts#L235)*

*__name__*: toJson

*__summary__*: Returns a JSON object associated with the input argument that contains metadata assocated with an account

*__description__*: Returns a JSON object containing the metadata associated with an account when valid address or public key and when the account passphrase is provided if the account secret is not already unlocked and available in memory. Note that in [Polkadot-JS Apps](https://github.com/polkadot-js/apps) the user may backup their account to a JSON file that contains this information.

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` \| `Uint8Array` |
| `Optional` passphrase | `undefined` \| `string` |

**Returns:** [KeyringPair$Json](../modules/_types_.md#keyringpair_json)

___

