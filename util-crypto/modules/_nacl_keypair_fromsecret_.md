

# Functions

<a id="naclkeypairfromsecret"></a>

##  naclKeypairFromSecret

▸ **naclKeypairFromSecret**(secret: *`Uint8Array`*): [Keypair](_types_.md#keypair)

*Defined in [nacl/keypair/fromSecret.ts:23](https://github.com/polkadot-js/common/blob/5bc4ea2/packages/util-crypto/src/nacl/keypair/fromSecret.ts#L23)*

*__name__*: naclKeypairFromSecret

*__summary__*: Creates a new public/secret keypair from a secret.

*__description__*: Returns a object containing a `publicKey` & `secretKey` generated from the supplied secret.

*__example__*:   

```javascript
import { naclKeypairFromSecret } from '@polkadot/util-crypto';

naclKeypairFromSecret(...); // => { secretKey: [...], publicKey: [...] }
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| secret | `Uint8Array` |

**Returns:** [Keypair](_types_.md#keypair)

___

