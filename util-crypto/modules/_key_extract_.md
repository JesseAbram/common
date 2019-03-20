

# Functions

<a id="keyextract"></a>

##  keyExtract

▸ **keyExtract**(suri: *`string`*): `DeriveResult`

*Defined in [key/extract.ts:21](https://github.com/polkadot-js/common/blob/7da1c54/packages/util-crypto/src/key/extract.ts#L21)*

*__description__*: Extracts the phrase, path and password from a SURI format for specifying secret keys `<secret>/<soft-key>//<hard-key>///<password>` (the `///password` may be omitted, and `/<soft-key>` and `//<hard-key>` maybe repeated and mixed).

**Parameters:**

| Name | Type |
| ------ | ------ |
| suri | `string` |

**Returns:** `DeriveResult`

___

