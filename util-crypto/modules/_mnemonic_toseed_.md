> # External module: "mnemonic/toSeed"

### Index

#### Functions

* [toSeed](_mnemonic_toseed_.md#toseed)

## Functions

###  toSeed

▸ **toSeed**(`mnemonic`: string, `password`: string): *`Uint8Array`*

*Defined in [mnemonic/toSeed.ts:26](url)*

**`name`** toSeed

**`summary`** Creates a valid seed from a mnemonic input

**`example`** 
<BR>

```javascript
import { mnemonicGenerate, mnemonicToSeed, mnemonicValidate } from '@polkadot/util-crypto';

const mnemonic = mnemonicGenerate(); // => string
const isValidMnemonic = mnemonicValidate(mnemonic); // => boolean

if (isValidMnemonic) {
console.log(`Seed generated from mnemonic: ${mnemonicToSeed(mnemonic)}`); => u8a
}
```

**Parameters:**

Name | Type | Default value |
------ | ------ | ------ |
`mnemonic` | string | - |
`password` | string | "" |

**Returns:** *`Uint8Array`*

___