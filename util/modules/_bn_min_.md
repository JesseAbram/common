

# Functions

<a id="min"></a>

##  min

▸ **min**(...items: *[BnList](_types_.md#bnlist)*): `BN`

*Defined in [bn/min.ts:22](https://github.com/polkadot-js/common/blob/9c03ec8/packages/util/src/bn/min.ts#L22)*

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
| `Rest` items | [BnList](_types_.md#bnlist) |

**Returns:** `BN`

___

