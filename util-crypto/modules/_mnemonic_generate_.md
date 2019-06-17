> # External module: "mnemonic/generate"

### Index

#### Functions

* [mnemonicGenerate](_mnemonic_generate_.md#mnemonicgenerate)

## Functions

###  mnemonicGenerate

▸ **mnemonicGenerate**(`numWords`: `WordCount`): *string*

*Defined in [mnemonic/generate.ts:33](url)*

**`name`** mnemonicGenerate

**`summary`** Creates a valid mnemonic string using using [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki).

**`example`** 
<BR>

```javascript
import { mnemonicGenerate } from '@polkadot/util-crypto';

const mnemonic = mnemonicGenerate(); // => string
```

**Parameters:**

Name | Type | Default value |
------ | ------ | ------ |
`numWords` | `WordCount` | 12 |

**Returns:** *string*

___