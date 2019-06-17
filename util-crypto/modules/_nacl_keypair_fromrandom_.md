> # External module: "nacl/keypair/fromRandom"

### Index

#### Functions

* [naclKeypairFromRandom](_nacl_keypair_fromrandom_.md#naclkeypairfromrandom)

## Functions

###  naclKeypairFromRandom

▸ **naclKeypairFromRandom**(): *[Keypair](_types_.md#keypair)*

*Defined in [nacl/keypair/fromRandom.ts:23](url)*

**`name`** naclKeypairFromRandom

**`summary`** Creates a new public/secret keypair.

**`description`** 
Returns a new generate object containing a `publicKey` & `secretKey`.

**`example`** 
<BR>

```javascript
import { naclKeypairFromRandom } from '@polkadot/util-crypto';

naclKeypairFromRandom(); // => { secretKey: [...], publicKey: [...] }
```

**Returns:** *[Keypair](_types_.md#keypair)*

___