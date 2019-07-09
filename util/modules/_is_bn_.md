> # External module: "is/bn"

### Index

#### Functions

* [isBn](_is_bn_.md#isbn)

## Functions

###  isBn

▸ **isBn**(`value`: any): *boolean*

*Defined in [is/bn.ts:22](https://github.com/polkadot-js/common/blob/5aea366/packages/util/src/is/bn.ts#L22)*

**`name`** isBn

**`summary`** Tests for a `BN` object instance.

**`description`** 
Checks to see if the input object is an instance of `BN` (bn.js).

**`example`** 
<BR>

```javascript
import BN from 'bn.js';
import { isBn } from '@polkadot/util';

console.log('isBn', isBn(new BN(1))); // => true
```

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *boolean*