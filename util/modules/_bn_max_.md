

# Functions

<a id="max"></a>

##  max

▸ **max**(...items: *`BN`[]*): `BN`

*Defined in [bn/max.ts:22](https://github.com/polkadot-js/common/blob/f8f2349/packages/util/src/bn/max.ts#L22)*

*__name__*: max

*__summary__*: Finds and returns the highest value in an array of BNs.

*__example__*:   

```javascript
import BN from 'bn.js';
import { max } from '@polkadot/util';

max([new BN(1), new BN(3), new BN(2)]).toString(); // => '3'
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` items | `BN`[] |

**Returns:** `BN`

___

