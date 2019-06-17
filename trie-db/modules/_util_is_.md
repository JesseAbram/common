> # External module: "util/is"

### Index

#### Functions

* [isBranchNode](_util_is_.md#isbranchnode)
* [isEmptyNode](_util_is_.md#isemptynode)
* [isExtensionNode](_util_is_.md#isextensionnode)
* [isKvNode](_util_is_.md#iskvnode)
* [isLeafNode](_util_is_.md#isleafnode)

## Functions

###  isBranchNode

▸ **isBranchNode**(`node`: [Node](_types_.md#node)): *boolean*

*Defined in [util/is.ts:52](url)*

**`name`** isBranchNode

**`summary`** Returns true if node is an Branch 17-item node

**`description`** Refer to [Merkle Patricia Trie specification](https://github.com/ethereum/wiki/wiki/Patricia-Tree#optimization)

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](_types_.md#node) |

**Returns:** *boolean*

___

###  isEmptyNode

▸ **isEmptyNode**(`node`: [Node](_types_.md#node)): *boolean*

*Defined in [util/is.ts:16](url)*

**`name`** isEmptyNode

**`summary`** Returns true if node is NULL

**`description`** Refer to [Merkle Patricia Trie specification](https://github.com/ethereum/wiki/wiki/Patricia-Tree#optimization)

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](_types_.md#node) |

**Returns:** *boolean*

___

###  isExtensionNode

▸ **isExtensionNode**(`node`: [Node](_types_.md#node)): *boolean*

*Defined in [util/is.ts:34](url)*

**`name`** isExtensionNode

**`summary`** Returns true if node is an Extension 2-item node

**`description`** Refer to [Merkle Patricia Trie specification](https://github.com/ethereum/wiki/wiki/Patricia-Tree#optimization)

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](_types_.md#node) |

**Returns:** *boolean*

___

###  isKvNode

▸ **isKvNode**(`node`: [Node](_types_.md#node)): *boolean*

*Defined in [util/is.ts:25](url)*

**`name`** isKvNode

**`summary`** Returns true if node is not empty and contains a single key/value pair

**`description`** Refer to [Merkle Patricia Trie specification](https://github.com/ethereum/wiki/wiki/Patricia-Tree#optimization)

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](_types_.md#node) |

**Returns:** *boolean*

___

###  isLeafNode

▸ **isLeafNode**(`node`: [Node](_types_.md#node)): *boolean*

*Defined in [util/is.ts:43](url)*

**`name`** isLeafNode

**`summary`** Returns true if node is an Leaf 2-item node

**`description`** Refer to [Merkle Patricia Trie specification](https://github.com/ethereum/wiki/wiki/Patricia-Tree#optimization)

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](_types_.md#node) |

**Returns:** *boolean*

___