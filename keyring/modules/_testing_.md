> # External module: "testing"

### Index

#### Functions

* [testKeyring](_testing_.md#testkeyring)

## Functions

###  testKeyring

▸ **testKeyring**(`options`: [KeyringOptions](_types_.md#keyringoptions), `isDerived`: boolean): *[KeyringInstance](../interfaces/_types_.keyringinstance.md)*

*Defined in [testing.ts:65](url)*

**`name`** testKeyring

**`summary`** Create an instance of Keyring pre-populated with locked test accounts

**`description`** The test accounts (i.e. alice, bob, dave, eve, ferdie)
are available on the dev chain and each test account is initialised with DOT funds.

**Parameters:**

Name | Type | Default value |
------ | ------ | ------ |
`options` | [KeyringOptions](_types_.md#keyringoptions) |  {} |
`isDerived` | boolean | true |

**Returns:** *[KeyringInstance](../interfaces/_types_.keyringinstance.md)*

___