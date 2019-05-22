

# Functions

<a id="naclverify"></a>

##  naclVerify

▸ **naclVerify**(message: *`Uint8Array` \| `string`*, signature: *`Uint8Array` \| `string`*, publicKey: *`Uint8Array` \| `string`*): `boolean`

*Defined in [nacl/verify.ts:23](https://github.com/polkadot-js/common/blob/d916ca1/packages/util-crypto/src/nacl/verify.ts#L23)*

*__name__*: naclSign

*__summary__*: Verifies the signature on the supplied message.

*__description__*: Verifies the `signature` on `message` with the supplied `plublicKey`. Returns `true` on sucess, `false` otherwise.

*__example__*:   

```javascript
import { naclVerify } from '@polkadot/util-crypto';

naclVerify([...], [...], [...]); // => true/false
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| message | `Uint8Array` \| `string` |
| signature | `Uint8Array` \| `string` |
| publicKey | `Uint8Array` \| `string` |

**Returns:** `boolean`

___

