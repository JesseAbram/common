> # External module: "constants"

### Index

#### Variables

* [BITMAP](_constants_.md#const-bitmap)
* [BRANCH_NODE_NO_VALUE](_constants_.md#const-branch_node_no_value)
* [BRANCH_NODE_WITH_VALUE](_constants_.md#const-branch_node_with_value)
* [EMPTY_TRIE](_constants_.md#const-empty_trie)
* [EXTENSION_NODE_BIG](_constants_.md#const-extension_node_big)
* [EXTENSION_NODE_OFFSET](_constants_.md#const-extension_node_offset)
* [EXTENSION_NODE_SMALL_MAX](_constants_.md#const-extension_node_small_max)
* [EXTENSION_NODE_THRESHOLD](_constants_.md#const-extension_node_threshold)
* [LEAF_NODE_BIG](_constants_.md#const-leaf_node_big)
* [LEAF_NODE_OFFSET](_constants_.md#const-leaf_node_offset)
* [LEAF_NODE_SMALL_MAX](_constants_.md#const-leaf_node_small_max)
* [LEAF_NODE_THRESHOLD](_constants_.md#const-leaf_node_threshold)
* [NODE_TYPE_BRANCH](_constants_.md#const-node_type_branch)
* [NODE_TYPE_EXT](_constants_.md#const-node_type_ext)
* [NODE_TYPE_LEAF](_constants_.md#const-node_type_leaf)
* [NODE_TYPE_NULL](_constants_.md#const-node_type_null)

## Variables

### `Const` BITMAP

● **BITMAP**: *number[]* =  [
1 << 0,
1 << 1,
1 << 2,
1 << 3,
1 << 4,
1 << 5,
1 << 6,
1 << 7,
1 << 8,
1 << 9,
1 << 10,
1 << 11,
1 << 12,
1 << 13,
1 << 14,
1 << 15
]

*Defined in [constants.ts:5](url)*

___

### `Const` BRANCH_NODE_NO_VALUE

● **BRANCH_NODE_NO_VALUE**: *`254`* = 254

*Defined in [constants.ts:29](url)*

___

### `Const` BRANCH_NODE_WITH_VALUE

● **BRANCH_NODE_WITH_VALUE**: *`255`* = 255

*Defined in [constants.ts:30](url)*

___

### `Const` EMPTY_TRIE

● **EMPTY_TRIE**: *`0`* = 0

*Defined in [constants.ts:24](url)*

___

### `Const` EXTENSION_NODE_BIG

● **EXTENSION_NODE_BIG**: *`253`* = 253

*Defined in [constants.ts:28](url)*

___

### `Const` EXTENSION_NODE_OFFSET

● **EXTENSION_NODE_OFFSET**: *`128`* = 128

*Defined in [constants.ts:27](url)*

___

### `Const` EXTENSION_NODE_SMALL_MAX

● **EXTENSION_NODE_SMALL_MAX**: *number* =  EXTENSION_NODE_BIG - 1

*Defined in [constants.ts:34](url)*

___

### `Const` EXTENSION_NODE_THRESHOLD

● **EXTENSION_NODE_THRESHOLD**: *number* =  EXTENSION_NODE_BIG - EXTENSION_NODE_OFFSET

*Defined in [constants.ts:32](url)*

___

### `Const` LEAF_NODE_BIG

● **LEAF_NODE_BIG**: *`127`* = 127

*Defined in [constants.ts:26](url)*

___

### `Const` LEAF_NODE_OFFSET

● **LEAF_NODE_OFFSET**: *`1`* = 1

*Defined in [constants.ts:25](url)*

___

### `Const` LEAF_NODE_SMALL_MAX

● **LEAF_NODE_SMALL_MAX**: *number* =  LEAF_NODE_BIG - 1

*Defined in [constants.ts:33](url)*

___

### `Const` LEAF_NODE_THRESHOLD

● **LEAF_NODE_THRESHOLD**: *number* =  LEAF_NODE_BIG - LEAF_NODE_OFFSET

*Defined in [constants.ts:31](url)*

___

### `Const` NODE_TYPE_BRANCH

● **NODE_TYPE_BRANCH**: *`1`* = 1

*Defined in [constants.ts:37](url)*

___

### `Const` NODE_TYPE_EXT

● **NODE_TYPE_EXT**: *`2`* = 2

*Defined in [constants.ts:38](url)*

___

### `Const` NODE_TYPE_LEAF

● **NODE_TYPE_LEAF**: *`3`* = 3

*Defined in [constants.ts:39](url)*

___

### `Const` NODE_TYPE_NULL

● **NODE_TYPE_NULL**: *`0`* = 0

*Defined in [constants.ts:36](url)*

___