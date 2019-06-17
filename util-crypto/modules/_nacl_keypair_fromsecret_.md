> # External module: "nacl/keypair/fromSecret"

### Index

#### Functions

* [naclKeypairFromSecret](_nacl_keypair_fromsecret_.md#naclkeypairfromsecret)

## Functions

###  naclKeypairFromSecret

▸ **naclKeypairFromSecret**(`secret`: `Uint8Array`): *[Keypair](_types_.md#keypair)*

*Defined in [nacl/keypair/fromSecret.ts:23](url)*

**`name`** naclKeypairFromSecret

**`summary`** Creates a new public/secret keypair from a secret.

**`description`** 
Returns a object containing a `publicKey` & `secretKey` generated from the supplied secret.

**`example`** 
<BR>

```javascript
import { naclKeypairFromSecret } from '@polkadot/util-crypto';

naclKeypairFromSecret(...); // => { secretKey: [...], publicKey: [...] }
```

**Parameters:**

Name | Type |
------ | ------ |
`secret` | `Uint8Array` |

**Returns:** *[Keypair](_types_.md#keypair)*

___