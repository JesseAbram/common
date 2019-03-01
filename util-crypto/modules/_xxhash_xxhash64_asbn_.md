

# Functions

<a id="xxhash64asbn"></a>

##  xxhash64AsBn

▸ **xxhash64AsBn**(data: *`Buffer` \| `Uint8Array` \| `string`*, seed: *`number`*): `BN`

*Defined in [xxhash/xxhash64/asBn.ts:23](https://github.com/polkadot-js/common/blob/785c4e4/packages/util-crypto/src/xxhash/xxhash64/asBn.ts#L23)*

*__name__*: xxhash64AsBn

*__summary__*: Creates a xxhash BN from the input.

*__description__*: From either a `string`, `Uint8Array` or a `Buffer` input, create the xxhash and return the result as a BN.

*__example__*:   

```javascript
import { xxhash64AsNumber } from '@polkadot/util-crypto';

xxhash64AsBn('abcd', 0xabcd)); // => new BN(0xe29f70f8b8c96df7)
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| data | `Buffer` \| `Uint8Array` \| `string` |
| seed | `number` |

**Returns:** `BN`

___

