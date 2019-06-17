> # External module: "blake2/asHex"

### Index

#### Functions

* [blake2AsHex](_blake2_ashex_.md#blake2ashex)

## Functions

###  blake2AsHex

▸ **blake2AsHex**(`data`: `Uint8Array` | string, `bitLength`: number): *string*

*Defined in [blake2/asHex.ts:23](url)*

**`name`** blake2AsHex

**`summary`** Creates a blake2b hex from the input.

**`description`** 
From a `Uint8Array` input, create the blake2b and return the result as a hex string with the specified `bitLength`.

**`example`** 
<BR>

```javascript
import { blake2AsHex } from '@polkadot/util-crypto';

blake2AsHex('abc'); // => 0xba80a53f981c4d0d
```

**Parameters:**

Name | Type | Default value |
------ | ------ | ------ |
`data` | `Uint8Array` | string | - |
`bitLength` | number | 256 |

**Returns:** *string*

___