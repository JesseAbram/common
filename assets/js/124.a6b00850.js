(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{506:function(t,a,e){"use strict";e.r(a);var s=e(46),r=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"functions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#functions","aria-hidden":"true"}},[t._v("#")]),t._v(" Functions")]),t._v(" "),e("p",[e("a",{attrs:{id:"trierootordered"}})]),t._v(" "),e("h2",{attrs:{id:"trierootordered"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#trierootordered","aria-hidden":"true"}},[t._v("#")]),t._v(" trieRootOrdered")]),t._v(" "),e("p",[t._v("▸ "),e("strong",[t._v("trieRootOrdered")]),t._v("(input: "),e("em",[e("code",[t._v("Array")]),t._v("<"),e("code",[t._v("Uint8Array")]),t._v(">")]),t._v(", codec?: "),e("em",[e("code",[t._v("Codec")])]),t._v("): "),e("code",[t._v("Uint8Array")])]),t._v(" "),e("p",[e("em",[t._v("Defined in "),e("a",{attrs:{href:"https://github.com/polkadot-js/common/blob/7b0a39a/packages/trie-hash/src/trieRootOrdered.ts#L30",target:"_blank",rel:"noopener noreferrer"}},[t._v("trieRootOrdered.ts:30"),e("OutboundLink")],1)])]),t._v(" "),e("p",[e("em",[e("strong",[t._v("name")])]),t._v(": trieRootOrdered")]),t._v(" "),e("p",[e("em",[e("strong",[t._v("summary")])]),t._v(": Creates a trie hash from the supplied values.")]),t._v(" "),e("p",[e("em",[e("strong",[t._v("description")])]),t._v(": From an "),e("code",[t._v("Array<Uint8Array>")]),t._v(" input, calculate the ordered triehash and return the result as a "),e("code",[t._v("Uint8Array")]),t._v(".")]),t._v(" "),e("p",[e("em",[e("strong",[t._v("example")])]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" stringToU8a "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/util'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" trieRootOrdered "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/trie-hash'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("trieRootOrdered")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringToU8a")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'doe'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringToU8a")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'reindeer'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 0xe766d5d51b89dc39d981b41bda63248d7abce4f0225eefd023792a540bcffee3")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("p",[e("strong",[t._v("Parameters:")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Default value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("input")]),t._v(" "),e("td",[e("code",[t._v("Array")]),t._v("<"),e("code",[t._v("Uint8Array")]),t._v(">")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("Default value")]),t._v(" codec")]),t._v(" "),e("td",[e("code",[t._v("Codec")])]),t._v(" "),e("td",[t._v("DEFAULT_CODEC")])])])]),t._v(" "),e("p",[e("strong",[t._v("Returns:")]),t._v(" "),e("code",[t._v("Uint8Array")])]),t._v(" "),e("hr")])},[],!1,null,null,null);a.default=r.exports}}]);