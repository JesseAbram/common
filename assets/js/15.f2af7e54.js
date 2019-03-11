(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{303:function(t,s,a){"use strict";a.r(s);var n=a(46),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("em",[a("strong",[t._v("name")])]),t._v(": DiskDb")]),t._v(" "),a("p",[a("em",[a("strong",[t._v("summary")])]),t._v(": Creates DiskDb database using LruDb for caching with FileFlatDb and extending TransactionDb.")]),t._v(" "),a("p",[a("em",[a("strong",[t._v("description")])]),t._v(": Create an instance of a Disk database using LruDb (for caching with FileFlatDb) and extending TransactionDb. Note that LruDB uses the "),a("a",{attrs:{href:"https://www.npmjs.com/package/lru_map",target:"_blank",rel:"noopener noreferrer"}},[t._v("Least Recently Used (LRU) cache algorithm"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("em",[a("strong",[t._v("example")])]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" stringToU8a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/util/string/toU8a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" DiskDb "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/db/Disk'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" TransactionDb "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/db/engines/TransactionDb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Creat diskDb instance that wraps LruDb with backing and Lru cache")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" diskDb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DiskDb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Creat txDb instance that uses diskDb")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" txDb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TransactionDb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("diskDb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Open the disk db backing database. Clears the Lru cache")]),t._v("\ndiskDb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Declare key/value pair to allocate to store under a the key")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringToU8a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringToU8a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'some value'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Store key/value pair in disk db backing and also in Lru cache")]),t._v("\ndiskDb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Retrieve value for key from disk db. Returns cached value if key")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// in cache, otherwise returns backing value for key and stores")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this latest retrieved key/value pair in Lru cache")]),t._v("\nvalueRetrieved "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" diskDb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Delete key/value pair from disk db backing and set the key to null in Lru cache")]),t._v("\ndiskDb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("del")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Transaction to Store key/value pair in transaction db")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" isTxSuccess "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" txDb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("transaction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  txDb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Boolean to indicate whether transaction was successful or not")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("`Transaction successful?: ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("isTxSuccess"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Retrieve transaction value from diskDb db")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("`Transfered value: ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("diskDb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Close the diskDb database and clear Lru cache")]),t._v("\ndiskDb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br")])]),a("h1",{attrs:{id:"hierarchy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hierarchy","aria-hidden":"true"}},[t._v("#")]),t._v(" Hierarchy")]),t._v(" "),a("p",[a("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html"}},[t._v("TransactionDb")])],1),t._v(" "),a("p",[a("strong",[t._v("↳ DiskDb")])]),t._v(" "),a("h1",{attrs:{id:"implements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implements","aria-hidden":"true"}},[t._v("#")]),t._v(" Implements")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html"}},[t._v("TxDb")])],1)]),t._v(" "),a("h1",{attrs:{id:"constructors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constructors","aria-hidden":"true"}},[t._v("#")]),t._v(" Constructors")]),t._v(" "),a("p",[a("a",{attrs:{id:"constructor"}})]),t._v(" "),a("h2",{attrs:{id:"constructor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constructor","aria-hidden":"true"}},[t._v("#")]),t._v(" constructor")]),t._v(" "),a("p",[t._v("⊕ "),a("strong",[t._v("new DiskDb")]),t._v("(base: "),a("em",[a("code",[t._v("string")])]),t._v(", name: "),a("em",[a("code",[t._v("string")])]),t._v(", options?: "),a("em",[a("router-link",{attrs:{to:"/db/modules/_types_.html#basedboptions"}},[t._v("BaseDbOptions")])],1),t._v("): "),a("router-link",{attrs:{to:"/db/classes/_disk_.diskdb.html"}},[t._v("DiskDb")])],1),t._v(" "),a("p",[a("em",[t._v("Overrides "),a("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html"}},[t._v("TransactionDb")]),t._v("."),a("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html#constructor"}},[t._v("constructor")])],1)]),t._v(" "),a("p",[a("em",[t._v("Defined in "),a("a",{attrs:{href:"https://github.com/polkadot-js/common/blob/4ae7e4f/packages/db/src/Disk.ts#L67",target:"_blank",rel:"noopener noreferrer"}},[t._v("Disk.ts:67"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("strong",[t._v("Parameters:")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("base")]),t._v(" "),a("td",[a("code",[t._v("string")])])]),t._v(" "),a("tr",[a("td",[t._v("name")]),t._v(" "),a("td",[a("code",[t._v("string")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("Optional")]),t._v(" options")]),t._v(" "),a("td",[a("router-link",{attrs:{to:"/db/modules/_types_.html#basedboptions"}},[t._v("BaseDbOptions")])],1)])])]),t._v(" "),a("p",[a("strong",[t._v("Returns:")]),t._v(" "),a("router-link",{attrs:{to:"/db/classes/_disk_.diskdb.html"}},[t._v("DiskDb")])],1),t._v(" "),a("hr"),t._v(" "),a("h1",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),a("p",[a("a",{attrs:{id:"close"}})]),t._v(" "),a("h2",{attrs:{id:"close"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#close","aria-hidden":"true"}},[t._v("#")]),t._v(" close")]),t._v(" "),a("p",[t._v("▸ "),a("strong",[t._v("close")]),t._v("(): "),a("code",[t._v("void")])]),t._v(" "),a("p",[a("em",[t._v("Implementation of "),a("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html"}},[t._v("TxDb")]),t._v("."),a("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html#close"}},[t._v("close")])],1)]),t._v(" "),a("p",[a("em",[t._v("Inherited from "),a("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html"}},[t._v("TransactionDb")]),t._v("."),a("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html#close"}},[t._v("close")])],1)]),t._v(" "),a("p",[a("em",[t._v("Defined in "),a("a",{attrs:{href:"https://github.com/polkadot-js/common/blob/4ae7e4f/packages/db/src/engines/TransactionDb.ts#L51",target:"_blank",rel:"noopener noreferrer"}},[t._v("engines/TransactionDb.ts:51"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("strong",[t._v("Returns:")]),t._v(" "),a("code",[t._v("void")])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("a",{attrs:{id:"del"}})]),t._v(" "),a("h2",{attrs:{id:"del"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#del","aria-hidden":"true"}},[t._v("#")]),t._v(" del")]),t._v(" "),a("p",[t._v("▸ "),a("strong",[t._v("del")]),t._v("(key: "),a("em",[a("code",[t._v("Uint8Array")])]),t._v("): "),a("code",[t._v("void")])]),t._v(" "),a("p",[a("em",[t._v("Implementation of "),a("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html"}},[t._v("TxDb")]),t._v("."),a("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html#del"}},[t._v("del")])],1)]),t._v(" "),a("p",[a("em",[t._v("Inherited from "),a("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html"}},[t._v("TransactionDb")]),t._v("."),a("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html#del"}},[t._v("del")])],1)]),t._v(" "),a("p",[a("em",[t._v("Defined in "),a("a",{attrs:{href:"https://github.com/polkadot-js/common/blob/4ae7e4f/packages/db/src/engines/TransactionDb.ts#L81",target:"_blank",rel:"noopener noreferrer"}},[t._v("engines/TransactionDb.ts:81"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("strong",[t._v("Parameters:")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("key")]),t._v(" "),a("td",[a("code",[t._v("Uint8Array")])])])])]),t._v(" "),a("p",[a("strong",[t._v("Returns:")]),t._v(" "),a("code",[t._v("void")])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("a",{attrs:{id:"drop"}})]),t._v(" "),a("h2",{attrs:{id:"drop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#drop","aria-hidden":"true"}},[t._v("#")]),t._v(" drop")]),t._v(" "),a("p",[t._v("▸ "),a("strong",[t._v("drop")]),t._v("(): "),a("code",[t._v("void")])]),t._v(" "),a("p",[a("em",[t._v("Implementation of "),a("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html"}},[t._v("TxDb")]),t._v("."),a("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html#drop"}},[t._v("drop")])],1)]),t._v(" "),a("p",[a("em",[t._v("Inherited from "),a("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html"}},[t._v("TransactionDb")]),t._v("."),a("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html#drop"}},[t._v("drop")])],1)]),t._v(" "),a("p",[a("em",[t._v("Defined in "),a("a",{attrs:{href:"https://github.com/polkadot-js/common/blob/4ae7e4f/packages/db/src/engines/TransactionDb.ts#L59",target:"_blank",rel:"noopener noreferrer"}},[t._v("engines/TransactionDb.ts:59"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("strong",[t._v("Returns:")]),t._v(" "),a("code",[t._v("void")])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("a",{attrs:{id:"empty"}})]),t._v(" "),a("h2",{attrs:{id:"empty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#empty","aria-hidden":"true"}},[t._v("#")]),t._v(" empty")]),t._v(" "),a("p",[t._v("▸ "),a("strong",[t._v("empty")]),t._v("(): "),a("code",[t._v("void")])]),t._v(" "),a("p",[a("em",[t._v("Implementation of "),a("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html"}},[t._v("TxDb")]),t._v("."),a("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html#empty"}},[t._v("empty")])],1)]),t._v(" "),a("p",[a("em",[t._v("Inherited from "),a("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html"}},[t._v("TransactionDb")]),t._v("."),a("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html#empty"}},[t._v("empty")])],1)]),t._v(" "),a("p",[a("em",[t._v("Defined in "),a("a",{attrs:{href:"https://github.com/polkadot-js/common/blob/4ae7e4f/packages/db/src/engines/TransactionDb.ts#L63",target:"_blank",rel:"noopener noreferrer"}},[t._v("engines/TransactionDb.ts:63"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("strong",[t._v("Returns:")]),t._v(" "),a("code",[t._v("void")])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("a",{attrs:{id:"get"}})]),t._v(" "),a("h2",{attrs:{id:"get"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get","aria-hidden":"true"}},[t._v("#")]),t._v(" get")]),t._v(" "),a("p",[t._v("▸ "),a("strong",[t._v("get")]),t._v("(key: "),a("em",[a("code",[t._v("Uint8Array")])]),t._v("): "),a("code",[t._v("Uint8Array")]),t._v(" | "),a("code",[t._v("null")])]),t._v(" "),a("p",[a("em",[t._v("Implementation of "),a("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html"}},[t._v("TxDb")]),t._v("."),a("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html#get"}},[t._v("get")])],1)]),t._v(" "),a("p",[a("em",[t._v("Inherited from "),a("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html"}},[t._v("TransactionDb")]),t._v("."),a("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html#get"}},[t._v("get")])],1)]),t._v(" "),a("p",[a("em",[t._v("Defined in "),a("a",{attrs:{href:"https://github.com/polkadot-js/common/blob/4ae7e4f/packages/db/src/engines/TransactionDb.ts#L93",target:"_blank",rel:"noopener noreferrer"}},[t._v("engines/TransactionDb.ts:93"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("strong",[t._v("Parameters:")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("key")]),t._v(" "),a("td",[a("code",[t._v("Uint8Array")])])])])]),t._v(" "),a("p",[a("strong",[t._v("Returns:")]),t._v(" "),a("code",[t._v("Uint8Array")]),t._v(" | "),a("code",[t._v("null")])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("a",{attrs:{id:"maintain"}})]),t._v(" "),a("h2",{attrs:{id:"maintain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maintain","aria-hidden":"true"}},[t._v("#")]),t._v(" maintain")]),t._v(" "),a("p",[t._v("▸ "),a("strong",[t._v("maintain")]),t._v("(fn: "),a("em",[a("router-link",{attrs:{to:"/db/modules/_types_.html#progresscb"}},[t._v("ProgressCb")])],1),t._v("): "),a("code",[t._v("void")])]),t._v(" "),a("p",[a("em",[t._v("Implementation of "),a("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html"}},[t._v("TxDb")]),t._v("."),a("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html#maintain"}},[t._v("maintain")])],1)]),t._v(" "),a("p",[a("em",[t._v("Inherited from "),a("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html"}},[t._v("TransactionDb")]),t._v("."),a("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html#maintain"}},[t._v("maintain")])],1)]),t._v(" "),a("p",[a("em",[t._v("Defined in "),a("a",{attrs:{href:"https://github.com/polkadot-js/common/blob/4ae7e4f/packages/db/src/engines/TransactionDb.ts#L71",target:"_blank",rel:"noopener noreferrer"}},[t._v("engines/TransactionDb.ts:71"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("strong",[t._v("Parameters:")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("fn")]),t._v(" "),a("td",[a("router-link",{attrs:{to:"/db/modules/_types_.html#progresscb"}},[t._v("ProgressCb")])],1)])])]),t._v(" "),a("p",[a("strong",[t._v("Returns:")]),t._v(" "),a("code",[t._v("void")])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("a",{attrs:{id:"open"}})]),t._v(" "),a("h2",{attrs:{id:"open"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#open","aria-hidden":"true"}},[t._v("#")]),t._v(" open")]),t._v(" "),a("p",[t._v("▸ "),a("strong",[t._v("open")]),t._v("(): "),a("code",[t._v("void")])]),t._v(" "),a("p",[a("em",[t._v("Implementation of "),a("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html"}},[t._v("TxDb")]),t._v("."),a("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html#open"}},[t._v("open")])],1)]),t._v(" "),a("p",[a("em",[t._v("Inherited from "),a("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html"}},[t._v("TransactionDb")]),t._v("."),a("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html#open"}},[t._v("open")])],1)]),t._v(" "),a("p",[a("em",[t._v("Defined in "),a("a",{attrs:{href:"https://github.com/polkadot-js/common/blob/4ae7e4f/packages/db/src/engines/TransactionDb.ts#L55",target:"_blank",rel:"noopener noreferrer"}},[t._v("engines/TransactionDb.ts:55"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("strong",[t._v("Returns:")]),t._v(" "),a("code",[t._v("void")])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("a",{attrs:{id:"put"}})]),t._v(" "),a("h2",{attrs:{id:"put"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#put","aria-hidden":"true"}},[t._v("#")]),t._v(" put")]),t._v(" "),a("p",[t._v("▸ "),a("strong",[t._v("put")]),t._v("(key: "),a("em",[a("code",[t._v("Uint8Array")])]),t._v(", value: "),a("em",[a("code",[t._v("Uint8Array")])]),t._v("): "),a("code",[t._v("void")])]),t._v(" "),a("p",[a("em",[t._v("Implementation of "),a("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html"}},[t._v("TxDb")]),t._v("."),a("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html#put"}},[t._v("put")])],1)]),t._v(" "),a("p",[a("em",[t._v("Inherited from "),a("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html"}},[t._v("TransactionDb")]),t._v("."),a("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html#put"}},[t._v("put")])],1)]),t._v(" "),a("p",[a("em",[t._v("Defined in "),a("a",{attrs:{href:"https://github.com/polkadot-js/common/blob/4ae7e4f/packages/db/src/engines/TransactionDb.ts#L107",target:"_blank",rel:"noopener noreferrer"}},[t._v("engines/TransactionDb.ts:107"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("strong",[t._v("Parameters:")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("key")]),t._v(" "),a("td",[a("code",[t._v("Uint8Array")])])]),t._v(" "),a("tr",[a("td",[t._v("value")]),t._v(" "),a("td",[a("code",[t._v("Uint8Array")])])])])]),t._v(" "),a("p",[a("strong",[t._v("Returns:")]),t._v(" "),a("code",[t._v("void")])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("a",{attrs:{id:"rename"}})]),t._v(" "),a("h2",{attrs:{id:"rename"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rename","aria-hidden":"true"}},[t._v("#")]),t._v(" rename")]),t._v(" "),a("p",[t._v("▸ "),a("strong",[t._v("rename")]),t._v("(base: "),a("em",[a("code",[t._v("string")])]),t._v(", file: "),a("em",[a("code",[t._v("string")])]),t._v("): "),a("code",[t._v("void")])]),t._v(" "),a("p",[a("em",[t._v("Implementation of "),a("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html"}},[t._v("TxDb")]),t._v("."),a("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html#rename"}},[t._v("rename")])],1)]),t._v(" "),a("p",[a("em",[t._v("Inherited from "),a("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html"}},[t._v("TransactionDb")]),t._v("."),a("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html#rename"}},[t._v("rename")])],1)]),t._v(" "),a("p",[a("em",[t._v("Defined in "),a("a",{attrs:{href:"https://github.com/polkadot-js/common/blob/4ae7e4f/packages/db/src/engines/TransactionDb.ts#L67",target:"_blank",rel:"noopener noreferrer"}},[t._v("engines/TransactionDb.ts:67"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("strong",[t._v("Parameters:")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("base")]),t._v(" "),a("td",[a("code",[t._v("string")])])]),t._v(" "),a("tr",[a("td",[t._v("file")]),t._v(" "),a("td",[a("code",[t._v("string")])])])])]),t._v(" "),a("p",[a("strong",[t._v("Returns:")]),t._v(" "),a("code",[t._v("void")])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("a",{attrs:{id:"size"}})]),t._v(" "),a("h2",{attrs:{id:"size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#size","aria-hidden":"true"}},[t._v("#")]),t._v(" size")]),t._v(" "),a("p",[t._v("▸ "),a("strong",[t._v("size")]),t._v("(): "),a("code",[t._v("number")])]),t._v(" "),a("p",[a("em",[t._v("Implementation of "),a("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html"}},[t._v("TxDb")]),t._v("."),a("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html#size"}},[t._v("size")])],1)]),t._v(" "),a("p",[a("em",[t._v("Inherited from "),a("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html"}},[t._v("TransactionDb")]),t._v("."),a("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html#size"}},[t._v("size")])],1)]),t._v(" "),a("p",[a("em",[t._v("Defined in "),a("a",{attrs:{href:"https://github.com/polkadot-js/common/blob/4ae7e4f/packages/db/src/engines/TransactionDb.ts#L77",target:"_blank",rel:"noopener noreferrer"}},[t._v("engines/TransactionDb.ts:77"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("strong",[t._v("Returns:")]),t._v(" "),a("code",[t._v("number")])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("a",{attrs:{id:"transaction"}})]),t._v(" "),a("h2",{attrs:{id:"transaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction","aria-hidden":"true"}},[t._v("#")]),t._v(" transaction")]),t._v(" "),a("p",[t._v("▸ "),a("strong",[t._v("transaction")]),t._v("<"),a("code",[t._v("T")]),t._v(">(fn: "),a("em",[a("code",[t._v("function")])]),t._v("): "),a("code",[t._v("T")])]),t._v(" "),a("p",[a("em",[t._v("Inherited from "),a("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html"}},[t._v("TransactionDb")]),t._v("."),a("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html#transaction"}},[t._v("transaction")])],1)]),t._v(" "),a("p",[a("em",[t._v("Defined in "),a("a",{attrs:{href:"https://github.com/polkadot-js/common/blob/4ae7e4f/packages/db/src/engines/TransactionDb.ts#L29",target:"_blank",rel:"noopener noreferrer"}},[t._v("engines/TransactionDb.ts:29"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("strong",[t._v("Type parameters:")])]),t._v(" "),a("h4",{attrs:{id:"t"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#t","aria-hidden":"true"}},[t._v("#")]),t._v(" T")]),t._v(" "),a("p",[a("strong",[t._v("Parameters:")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("fn")]),t._v(" "),a("td",[a("code",[t._v("function")])])])])]),t._v(" "),a("p",[a("strong",[t._v("Returns:")]),t._v(" "),a("code",[t._v("T")])]),t._v(" "),a("hr")])},[],!1,null,null,null);s.default=e.exports}}]);