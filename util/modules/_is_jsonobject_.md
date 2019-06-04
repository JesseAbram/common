

# Functions

<a id="isjsonobject"></a>

##  isJsonObject

▸ **isJsonObject**(value: *`any`*): `boolean`

*Defined in [is/jsonObject.ts:34](https://github.com/polkadot-js/common/blob/bb88778/packages/util/src/is/jsonObject.ts#L34)*

*__name__*: isJsonObject

*__summary__*: Tests for a valid JSON `object`.

*__description__*: Checks to see if the input value is a valid JSON object. It returns false if the input is JSON parsable, but not an Javascript object.

*__example__*:   

```javascript
import { isJsonObject } from '@polkadot/util';

isJsonObject({}); // => true
isJsonObject({
 "Test": "1234",
 "NestedTest": {
  "Test": "5678"
 }
}); // => true
isJsonObject(1234); // JSON parsable, but not an object =>  false
isJsonObject(null); // JSON parsable, but not an object => false
isJsonObject('not an object'); // => false
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |

**Returns:** `boolean`

___

