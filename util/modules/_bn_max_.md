

# Functions

<a id="max"></a>

##  max

▸ **max**(...items: *[BnList](_types_.md#bnlist)*): `BN`

*Defined in [bn/max.ts:23](https://github.com/polkadot-js/common/blob/9c03ec8/packages/util/src/bn/max.ts#L23)*

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
| `Rest` items | [BnList](_types_.md#bnlist) |

**Returns:** `BN`

___

