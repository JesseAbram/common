> # Class: ExtError

**`name`** ExtError

**`summary`** Extension to the basic JS Error.

**`description`** 
The built-in JavaScript Error class is extended by adding a code to allow for Error categorization. In addition to the normal `stack`, `message`, the numeric `code` and `data` (any types) parameters are available on the object.

**`example`** 
<BR>

```javascript
const { ExtError } from '@polkadot/util');

throw new ExtError('some message', ExtError.CODES.METHOD_NOT_FOUND); // => error.code = -32601
```

## Hierarchy

* `Error`

  * **ExtError**

## Implements

* [ExtErrorInterface](../interfaces/_types_.exterrorinterface.md)

### Index

#### Constructors

* [constructor](_ext_error_.exterror.md#constructor)

#### Properties

* [code](_ext_error_.exterror.md#code)
* [data](_ext_error_.exterror.md#data)
* [message](_ext_error_.exterror.md#message)
* [name](_ext_error_.exterror.md#name)
* [stack](_ext_error_.exterror.md#stack)
* [Error](_ext_error_.exterror.md#static-error)

#### Object literals

* [CODES](_ext_error_.exterror.md#static-codes)

## Constructors

###  constructor

\+ **new ExtError**(`message`: string, `code`: number, `data?`: any): *[ExtError](_ext_error_.exterror.md)*

*Defined in [ext/error.ts:43](url)*

**Parameters:**

Name | Type | Default value |
------ | ------ | ------ |
`message` | string | "" |
`code` | number |  UNKNOWN |
`data?` | any | - |

**Returns:** *[ExtError](_ext_error_.exterror.md)*

___

## Properties

###  code

● **code**: *number*

*Implementation of [ExtErrorInterface](../interfaces/_types_.exterrorinterface.md).[code](../interfaces/_types_.exterrorinterface.md#code)*

*Defined in [ext/error.ts:35](url)*

___

###  data

● **data**: *any*

*Implementation of [ExtErrorInterface](../interfaces/_types_.exterrorinterface.md).[data](../interfaces/_types_.exterrorinterface.md#data)*

*Defined in [ext/error.ts:37](url)*

___

###  message

● **message**: *string*

*Implementation of [ExtErrorInterface](../interfaces/_types_.exterrorinterface.md).[message](../interfaces/_types_.exterrorinterface.md#message)*

*Overrides void*

*Defined in [ext/error.ts:39](url)*

___

###  name

● **name**: *string*

*Overrides void*

*Defined in [ext/error.ts:41](url)*

___

###  stack

● **stack**: *string*

*Implementation of [ExtErrorInterface](../interfaces/_types_.exterrorinterface.md).[stack](../interfaces/_types_.exterrorinterface.md#stack)*

*Overrides void*

*Defined in [ext/error.ts:43](url)*

___

### `Static` Error

■ **Error**: *`ErrorConstructor`*

Defined in /home/travis/build/polkadot-js/common/node_modules/typescript/lib/lib.es5.d.ts:984

___

## Object literals

### `Static` CODES

### ■ **CODES**: *object*

*Defined in [ext/error.ts:60](url)*

###  ASSERT

● **ASSERT**: *number* =  -90009

*Defined in [ext/error.ts:61](url)*

###  INVALID_JSONRPC

● **INVALID_JSONRPC**: *number* =  -99998

*Defined in [ext/error.ts:63](url)*

###  METHOD_NOT_FOUND

● **METHOD_NOT_FOUND**: *number* =  -32601

*Defined in [ext/error.ts:64](url)*

###  UNKNOWN

● **UNKNOWN**: *number*

*Defined in [ext/error.ts:62](url)*

___