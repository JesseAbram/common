

# Functions

<a id="keccakasu8a"></a>

##  keccakAsU8a

▸ **keccakAsU8a**(value: *`Buffer` \| `Uint8Array` \| `string`*): `Uint8Array`

*Defined in [keccak/asU8a.ts:23](https://github.com/polkadot-js/common/blob/47c0533/packages/util-crypto/src/keccak/asU8a.ts#L23)*

*__name__*: keccakAsU8a

*__summary__*: Creates a keccak Uint8Array from the input.

*__description__*: From either a `string` or a `Buffer` input, create the keccak and return the result as a `Uint8Array`.

*__example__*:   

```javascript
import { keccakAsU8a } from '@polkadot/util-crypto';

keccakAsU8a('123'); // => Uint8Array
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `Buffer` \| `Uint8Array` \| `string` |

**Returns:** `Uint8Array`

___

