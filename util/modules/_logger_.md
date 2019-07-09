> # External module: "logger"

### Index

#### Functions

* [format](_logger_.md#format)
* [logger](_logger_.md#logger)

## Functions

###  format

▸ **format**(`value`: any): *any*

*Defined in [logger.ts:42](https://github.com/polkadot-js/common/blob/5aea366/packages/util/src/logger.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *any*

___

###  logger

▸ **logger**(`_type`: string): *[Logger](_types_.md#logger)*

*Defined in [logger.ts:104](https://github.com/polkadot-js/common/blob/5aea366/packages/util/src/logger.ts#L104)*

**`name`** Logger

**`summary`** Creates a consistent log interface for messages

**`description`** 
Returns a `Logger` that has `.log`, `.error`, `.warn` and `.debug` (controlled with environment `DEBUG=typeA,typeB`) methods. Logging is done with a consistent prefix (type of logger, date) followed by the actual message using the underlying console.

**`example`** 
<BR>

```javascript
const l from '@polkadot/util/logger')('test');

l.log('blah'); // <date>     TEST: blah
```

**Parameters:**

Name | Type |
------ | ------ |
`_type` | string |

**Returns:** *[Logger](_types_.md#logger)*