> # External module: "bn/toU8a"

### Index

#### Functions

* [bnToU8a](_bn_tou8a_.md#bntou8a)

## Functions

###  bnToU8a

▸ **bnToU8a**(`value`: `BN` | number | null, `options?`: `Options`): *`Uint8Array`*

*Defined in [bn/toU8a.ts:29](https://github.com/polkadot-js/common/blob/e5ab357/packages/util/src/bn/toU8a.ts#L29)*

**`name`** bnToU8a

**`summary`** Creates a Uint8Array object from a BN.

**`description`** 
`null`/`undefined`/`NaN` inputs returns an empty `Uint8Array` result. `BN` input values return the actual bytes value converted to a `Uint8Array`. Optionally convert using little-endian format if `isLE` is set.

**`example`** 
<BR>

```javascript
import { bnToU8a } from '@polkadot/util';

bnToU8a(new BN(0x1234)); // => [0x12, 0x34]
```

**Parameters:**

Name | Type |
------ | ------ |
`value` | `BN` \| number \| null |
`options?` | `Options` |

**Returns:** *`Uint8Array`*

▸ **bnToU8a**(`value`: `BN` | number | null, `bitLength?`: undefined | number, `isLe?`: undefined | false | true): *`Uint8Array`*

*Defined in [bn/toU8a.ts:30](https://github.com/polkadot-js/common/blob/e5ab357/packages/util/src/bn/toU8a.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | `BN` \| number \| null |
`bitLength?` | undefined \| number |
`isLe?` | undefined \| false \| true |

**Returns:** *`Uint8Array`*