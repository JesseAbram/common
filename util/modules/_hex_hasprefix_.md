> # External module: "hex/hasPrefix"

### Index

#### Functions

* [hexHasPrefix](_hex_hasprefix_.md#hexhasprefix)

## Functions

###  hexHasPrefix

▸ **hexHasPrefix**(`value?`: string | null): *boolean*

*Defined in [hex/hasPrefix.ts:21](url)*

**`name`** hexHasPrefix

**`summary`** Tests for the existence of a `0x` prefix.

**`description`** 
Checks for a valid hex input value and if the start matched `0x`

**`example`** 
<BR>

```javascript
import { hexHasPrefix } from '@polkadot/util';

console.log('has prefix', hexHasPrefix('0x1234')); // => true
```

**Parameters:**

Name | Type |
------ | ------ |
`value?` | string | null |

**Returns:** *boolean*

___