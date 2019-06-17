> # External module: "xxhash/asU8a"

### Index

#### Functions

* [xxhashAsU8a](_xxhash_asu8a_.md#xxhashasu8a)

## Functions

###  xxhashAsU8a

▸ **xxhashAsU8a**(`data`: `Buffer` | `Uint8Array` | string, `bitLength`: number): *`Uint8Array`*

*Defined in [xxhash/asU8a.ts:24](url)*

**`name`** xxhashAsU8a

**`summary`** Creates a xxhash64 u8a from the input.

**`description`** 
From either a `string`, `Uint8Array` or a `Buffer` input, create the xxhash64 and return the result as a `Uint8Array` with the specified `bitLength`.

**`example`** 
<BR>

```javascript
import { xxhashAsU8a } from '@polkadot/util-crypto';

xxhashAsU8a('abc'); // => 0x44bc2cf5ad770999
```

**Parameters:**

Name | Type | Default value |
------ | ------ | ------ |
`data` | `Buffer` | `Uint8Array` | string | - |
`bitLength` | number | 64 |

**Returns:** *`Uint8Array`*

___