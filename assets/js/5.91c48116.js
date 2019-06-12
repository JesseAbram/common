(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{221:function(e,a,t){"use strict";t.r(a);var r=t(0),i=Object(r.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"_0-92-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-92-1","aria-hidden":"true"}},[e._v("#")]),e._v(" 0.92.1")]),e._v(" "),t("ul",[t("li",[e._v("Only allow integer input values into formatBalance")]),e._v(" "),t("li",[e._v("Allow formatBalance, formatDecimal & formatNumber to cater for negative numbers")]),e._v(" "),t("li",[e._v("Add 'Bob//stash' to testing keyring")]),e._v(" "),t("li",[e._v("Move decodeAddress, encodeAddress & setAddressPrefix functions into "),t("code",[e._v("@polkadot/util-crypto")]),e._v(" from "),t("code",[e._v("@polkadot/keyring")]),e._v(". External interfaces should not be affected at this point since it is also (still) esxported and exposed on keyring")])]),e._v(" "),t("h1",{attrs:{id:"_0-91-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-91-1","aria-hidden":"true"}},[e._v("#")]),e._v(" 0.91.1")]),e._v(" "),t("ul",[t("li",[e._v("ed25519/sr25519 sign & verify functions can now take the message input as Uint8Array/string/hex and verify allows for the signature/publicKey to be specified as Uint8Array/hex")]),e._v(" "),t("li",[e._v("Update "),t("code",[e._v("@polkadot/wasm")]),e._v(" to include a maintenance bump for the "),t("code",[e._v("w3f/schnorrkel")]),e._v(" libraries")])]),e._v(" "),t("h1",{attrs:{id:"_0-90-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-90-1","aria-hidden":"true"}},[e._v("#")]),e._v(" 0.90.1")]),e._v(" "),t("ul",[t("li",[e._v("Moving towards 1.0")]),e._v(" "),t("li",[e._v("Added bnMin & bnMax functions")])]),e._v(" "),t("h1",{attrs:{id:"_0-76-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-76-1","aria-hidden":"true"}},[e._v("#")]),e._v(" 0.76.1")]),e._v(" "),t("ul",[t("li",[e._v("Fix "),t("code",[e._v("addFromMnemonic")]),e._v(" to generate using new-style derivation.")]),e._v(" "),t("li",[e._v("Pull in formatBalance, formatDecimal, formatElapsed, formatNumber, calcSi, findSi & isTestChain util fuinctions from the originals in @polkadot/ui-util")]),e._v(" "),t("li",[e._v("Swap DB interfaces to optional LRU, removing transactionAsync (client-only changes)")]),e._v(" "),t("li",[e._v("Swap out "),t("code",[e._v("wasm-schnorrkel")]),e._v(" & "),t("code",[e._v("wasm-ed25519")]),e._v(" for combined version with "),t("code",[e._v("wasm-crypto")])])]),e._v(" "),t("h1",{attrs:{id:"_0-75-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-75-1","aria-hidden":"true"}},[e._v("#")]),e._v(" 0.75.1")]),e._v(" "),t("ul",[t("li",[e._v("Start journey to 1.0")])]),e._v(" "),t("h1",{attrs:{id:"_0-42-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-42-1","aria-hidden":"true"}},[e._v("#")]),e._v(" 0.42.1")]),e._v(" "),t("ul",[t("li",[e._v("Add assertSingletonPackage to util")]),e._v(" "),t("li",[e._v("Ensure that only a single keyring instance is loaded (uses above)")])]),e._v(" "),t("h1",{attrs:{id:"_0-41-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-41-1","aria-hidden":"true"}},[e._v("#")]),e._v(" 0.41.1")]),e._v(" "),t("ul",[t("li",[e._v("Extensions to the client-specific database interfaces (non-breaking for API and util users)")])]),e._v(" "),t("h1",{attrs:{id:"_0-40-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-40-1","aria-hidden":"true"}},[e._v("#")]),e._v(" 0.40.1")]),e._v(" "),t("ul",[t("li",[e._v("Add additional derivation path extraction mechanisms to util-crypto")]),e._v(" "),t("li",[e._v("Add createFromUri function to keypair (creates keypair, does not add it)")]),e._v(" "),t("li",[e._v("Allow all crypto hashing & ed25519 to use WASM (as available, JS fallbacks)")])]),e._v(" "),t("h1",{attrs:{id:"_0-39-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-39-1","aria-hidden":"true"}},[e._v("#")]),e._v(" 0.39.1")]),e._v(" "),t("ul",[t("li",[e._v("Pull in bip39 generation functions from @poladkot/wasm-crypto with a fallback to the pure JS versions")])]),e._v(" "),t("h1",{attrs:{id:"_0-38-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-38-1","aria-hidden":"true"}},[e._v("#")]),e._v(" 0.38.1")]),e._v(" "),t("ul",[t("li",[e._v("Align with current substrate master for sr25519 keys and hard/soft derivation")]),e._v(" "),t("li",[e._v("Swap default dev keys to derived (sr25519)")])]),e._v(" "),t("h1",{attrs:{id:"_0-37-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-37-1","aria-hidden":"true"}},[e._v("#")]),e._v(" 0.37.1")]),e._v(" "),t("ul",[t("li",[e._v("Swap to publishing -beta.x on merge (non-breaking testing)")])]),e._v(" "),t("h1",{attrs:{id:"_0-36-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-36-1","aria-hidden":"true"}},[e._v("#")]),e._v(" 0.36.1")]),e._v(" "),t("ul",[t("li",[e._v("Add "),t("code",[e._v("fromUri")]),e._v(" to keyring along with hard & soft key derivation.")])]),e._v(" "),t("h1",{attrs:{id:"_0-35-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-35-1","aria-hidden":"true"}},[e._v("#")]),e._v(" 0.35.1")]),e._v(" "),t("ul",[t("li",[e._v("Remove NodeJs-only "),t("code",[e._v("syncify")]),e._v(" function, not exported by the package (with binary dependency for Node)")])]),e._v(" "),t("h1",{attrs:{id:"_0-34-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-34-1","aria-hidden":"true"}},[e._v("#")]),e._v(" 0.34.1")]),e._v(" "),t("ul",[t("li",[e._v("Keyring now allows for ed25519 and sr25519 instances. Upon creation, you need to pass the "),t("code",[e._v("ed25519")]),e._v("or "),t("code",[e._v("sr25519")]),e._v(" string to denote the type, i.e. "),t("code",[e._v("new Keyring({ type: 'sr25519' })")])])])])},[],!1,null,null,null);a.default=i.exports}}]);