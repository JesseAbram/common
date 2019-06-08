

# Functions

<a id="naclsign"></a>

##  naclSign

▸ **naclSign**(message: *`Uint8Array` \| `string`*, __namedParameters: *`object`*): `Uint8Array`

*Defined in [nacl/sign.ts:25](https://github.com/polkadot-js/common/blob/1e561a4/packages/util-crypto/src/nacl/sign.ts#L25)*

*__name__*: naclSign

*__summary__*: Signs a message using the supplied secretKey

*__description__*: Returns message signature of `message`, using the `secretKey`.

*__example__*:   

```javascript
import { naclSign } from '@polkadot/util-crypto';

naclSign([...], [...]); // => [...]
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| message | `Uint8Array` \| `string` |
| __namedParameters | `object` |

**Returns:** `Uint8Array`

___

