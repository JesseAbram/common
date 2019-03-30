

# Functions

<a id="toseed"></a>

##  toSeed

▸ **toSeed**(mnemonic: *`string`*, password?: *`string`*): `Uint8Array`

*Defined in [mnemonic/toSeed.ts:26](https://github.com/polkadot-js/common/blob/c11f068/packages/util-crypto/src/mnemonic/toSeed.ts#L26)*

*__name__*: toSeed

*__summary__*: Creates a valid seed from a mnemonic input

*__example__*:   

```javascript
import { mnemonicGenerate, mnemonicToSeed, mnemonicValidate } from '@polkadot/util-crypto';

const mnemonic = mnemonicGenerate(); // => string
const isValidMnemonic = mnemonicValidate(mnemonic); // => boolean

if (isValidMnemonic) {
  console.log(`Seed generated from mnemonic: ${mnemonicToSeed(mnemonic)}`); => u8a
}
```

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| mnemonic | `string` | - |
| `Default value` password | `string` | &quot;&quot; |

**Returns:** `Uint8Array`

___

