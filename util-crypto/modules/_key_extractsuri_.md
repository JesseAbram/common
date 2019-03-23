

# Functions

<a id="keyextract"></a>

##  keyExtract

▸ **keyExtract**(suri: *`string`*): `ExtractResult`

*Defined in [key/extractSuri.ts:21](https://github.com/polkadot-js/common/blob/364a5d9/packages/util-crypto/src/key/extractSuri.ts#L21)*

*__description__*: Extracts the phrase, path and password from a SURI format for specifying secret keys `<secret>/<soft-key>//<hard-key>///<password>` (the `///password` may be omitted, and `/<soft-key>` and `//<hard-key>` maybe repeated and mixed).

**Parameters:**

| Name | Type |
| ------ | ------ |
| suri | `string` |

**Returns:** `ExtractResult`

___

