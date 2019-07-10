> # External module: "key/extractSuri"

### Index

#### Functions

* [keyExtract](_key_extractsuri_.md#keyextract)

## Functions

###  keyExtract

▸ **keyExtract**(`suri`: string): *`ExtractResult`*

*Defined in [key/extractSuri.ts:21](https://github.com/polkadot-js/common/blob/e5ab357/packages/util-crypto/src/key/extractSuri.ts#L21)*

**`description`** Extracts the phrase, path and password from a SURI format for specifying secret keys `<secret>/<soft-key>//<hard-key>///<password>` (the `///password` may be omitted, and `/<soft-key>` and `//<hard-key>` maybe repeated and mixed).

**Parameters:**

Name | Type |
------ | ------ |
`suri` | string |

**Returns:** *`ExtractResult`*