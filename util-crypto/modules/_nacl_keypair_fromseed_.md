> # External module: "nacl/keypair/fromSeed"

### Index

#### Functions

* [naclKeypairFromSeed](_nacl_keypair_fromseed_.md#naclkeypairfromseed)

## Functions

###  naclKeypairFromSeed

▸ **naclKeypairFromSeed**(`seed`: `Uint8Array`): *[Keypair](_types_.md#keypair)*

*Defined in [nacl/keypair/fromSeed.ts:24](https://github.com/polkadot-js/common/blob/0021731/packages/util-crypto/src/nacl/keypair/fromSeed.ts#L24)*

**`name`** naclKeypairFromSeed

**`summary`** Creates a new public/secret keypair from a seed.

**`description`** 
Returns a object containing a `publicKey` & `secretKey` generated from the supplied seed.

**`example`** 
<BR>

```javascript
import { naclKeypairFromSeed } from '@polkadot/util-crypto';

naclKeypairFromSeed(...); // => { secretKey: [...], publicKey: [...] }
```

**Parameters:**

Name | Type |
------ | ------ |
`seed` | `Uint8Array` |

**Returns:** *[Keypair](_types_.md#keypair)*

___