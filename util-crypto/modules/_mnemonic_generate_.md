> # External module: "mnemonic/generate"

### Index

#### Functions

* [mnemonicGenerate](_mnemonic_generate_.md#mnemonicgenerate)

## Functions

###  mnemonicGenerate

▸ **mnemonicGenerate**(`numWords`: `WordCount`): *string*

*Defined in [mnemonic/generate.ts:33](https://github.com/polkadot-js/common/blob/5aea366/packages/util-crypto/src/mnemonic/generate.ts#L33)*

**`name`** mnemonicGenerate

**`summary`** Creates a valid mnemonic string using using [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki).

**`example`** 
<BR>

```javascript
import { mnemonicGenerate } from '@polkadot/util-crypto';

const mnemonic = mnemonicGenerate(); // => string
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`numWords` | `WordCount` | 12 |

**Returns:** *string*