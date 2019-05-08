

# Functions

<a id="naclkeypairfromrandom"></a>

##  naclKeypairFromRandom

▸ **naclKeypairFromRandom**(): [Keypair](_types_.md#keypair)

*Defined in [nacl/keypair/fromRandom.ts:23](https://github.com/polkadot-js/common/blob/f46ba03/packages/util-crypto/src/nacl/keypair/fromRandom.ts#L23)*

*__name__*: naclKeypairFromRandom

*__summary__*: Creates a new public/secret keypair.

*__description__*: Returns a new generate object containing a `publicKey` & `secretKey`.

*__example__*:   

```javascript
import { naclKeypairFromRandom } from '@polkadot/util-crypto';

naclKeypairFromRandom(); // => { secretKey: [...], publicKey: [...] }
```

**Returns:** [Keypair](_types_.md#keypair)

___

