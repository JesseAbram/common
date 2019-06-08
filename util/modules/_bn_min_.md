

# Functions

<a id="min"></a>

##  min

▸ **min**(...items: *`BN`[]*): `BN`

*Defined in [bn/min.ts:22](https://github.com/polkadot-js/common/blob/1e561a4/packages/util/src/bn/min.ts#L22)*

*__name__*: min

*__summary__*: Finds and returns the smallest value in an array of BNs.

*__example__*:   

```javascript
import BN from 'bn.js';
import { min } from '@polkadot/util';

min([new BN(1), new BN(3), new BN(2)]).toString(); // => '1'
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` items | `BN`[] |

**Returns:** `BN`

___

