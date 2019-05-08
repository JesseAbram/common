

# Functions

<a id="hexstripprefix"></a>

##  hexStripPrefix

▸ **hexStripPrefix**(value?: *`string` \| `null`*): `string`

*Defined in [hex/stripPrefix.ts:23](https://github.com/polkadot-js/common/blob/b0d8c85/packages/util/src/hex/stripPrefix.ts#L23)*

*__name__*: hexStripPrefix

*__summary__*: Strips any leading `0x` prefix.

*__description__*: Tests for the existence of a `0x` prefix, and returns the value without the prefix. Un-prefixed values are returned as-is.

*__example__*:   

```javascript
import { hexStripPrefix } from '@polkadot/util';

console.log('stripped', hexStripPrefix('0x1234')); // => 1234
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `string` \| `null` |

**Returns:** `string`

___

