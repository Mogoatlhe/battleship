/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
	// webpackBootstrap
	/******/ var __webpack_modules__ = {
		/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
			/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
			/***/ (module, __webpack_exports__, __webpack_require__) => {
				"use strict";
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/gifs/wave.gif */ "./src/images/gifs/wave.gif"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/gifs/burning.webp */ "./src/images/gifs/burning.webp"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/gifs/cloud.gif */ "./src/images/gifs/cloud.gif"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Anton&family=Black+Ops+One&display=swap);"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, ":root {\\n\\t--light-grey: rgb(245, 244, 246);\\n\\t--black-shade: rgb(39, 39, 39);\\n\\t--darker-grey: rgb(104, 111, 139);\\n\\t--mid-grey: rgb(161, 160, 170);\\n\\t--black-ops: \\"Black Ops One\\", cursive;\\n\\t--anton: \\"Anton\\", sans-serif;\\n}\\n\\nhtml {\\n\\tbox-sizing: border-box;\\n}\\n\\n*,\\n*::before,\\n*::after {\\n\\tbox-sizing: inherit;\\n\\tmargin: 0;\\n\\tpadding: 0;\\n}\\n\\nbody {\\n\\tmargin: 0;\\n\\tpadding: 0;\\n\\twidth: 100vw;\\n\\theight: 100vh;\\n}\\n\\n#content {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\talign-items: space-around;\\n\\twidth: 100%;\\n\\theight: 100%;\\n\\tgap: 1vh;\\n}\\n\\n#game-header {\\n\\tdisplay: flex;\\n\\tjustify-content: space-between;\\n\\talign-items: center;\\n\\tpadding: 0 20px;\\n\\theight: 10vh;\\n\\tbackground-color: var(--light-grey);\\n\\tbox-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\\n\\tborder-bottom: gray solid 1px;\\n\\tfont-family: var(--black-ops);\\n\\tfont-size: 1.2rem;\\n}\\n\\na {\\n\\ttext-decoration: none;\\n\\tcolor: black;\\n}\\n\\ni:hover {\\n\\tfont-size: 1.5rem;\\n}\\n\\ni {\\n\\tfont-size: 1.2rem;\\n}\\n\\n#fleets {\\n\\tdisplay: flex;\\n\\tjustify-content: space-around;\\n\\twidth: 100%;\\n\\theight: 100%;\\n}\\n\\n.fleet {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\talign-items: center;\\n\\tgap: 2px;\\n\\twidth: 100%;\\n\\theight: 100%;\\n\\twidth: 47%;\\n\\tpadding: 20px;\\n}\\n\\n.player-heading-div {\\n\\tdisplay: flex;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n\\twidth: 350px;\\n\\theight: 50px;\\n\\tbox-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);\\n\\tbackground-color: var(--black-shade);\\n\\tborder-radius: 3%;\\n}\\n\\n.fleet:nth-child(2) .player-heading-div {\\n\\tbackground-color: var(--darker-grey);\\n}\\n\\n.player-name {\\n\\tcolor: white;\\n\\tfont-family: var(--black-ops);\\n\\tfont-size: 1.5rem;\\n}\\n\\n.alphabets {\\n\\tmargin-top: 15px;\\n\\tdisplay: flex;\\n\\twidth: 310px;\\n\\tjustify-content: space-around;\\n\\tcolor: var(--mid-grey);\\n\\tfont-family: var(--anton);\\n}\\n\\n.numbers-grid-container {\\n\\tmargin-right: 15px;\\n\\tdisplay: flex;\\n\\tgap: 5px;\\n}\\n\\n.numbers {\\n\\theight: 300px;\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\tjustify-content: space-around;\\n\\talign-items: center;\\n\\tcolor: var(--mid-grey);\\n\\tfont-family: var(--anton);\\n}\\n\\n.numbers *,\\n.alphabets * {\\n\\tfont-weight: bold;\\n}\\n\\n.grid-container {\\n\\twidth: 300px;\\n\\theight: 300px;\\n\\tdisplay: flex;\\n\\tflex-wrap: wrap;\\n\\tflex-direction: column;\\n\\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\\n}\\n\\n.grid-container * {\\n\\twidth: 30px;\\n\\theight: 30px;\\n\\tbackground-color: transparent;\\n\\tborder-bottom: solid 0.1px white;\\n\\tborder-left: solid 0.1px white;\\n}\\n\\n.grid-row {\\n\\tdisplay: flex;\\n\\twidth: 100%;\\n}\\n\\n.grid-container *:hover {\\n\\tcursor: pointer;\\n}\\n\\n#human .ship {\\n\\tbackground-color: red;\\n}\\n\\n/* .vertical:not(.border){\\n\\tborder-bottom: none;\\n}\\n\\n.horizontal:not(.border){\\n\\tborder-left: none;\\n} */\\n\\n.hit {\\n\\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\\n\\tbackground-size: cover;\\n}\\n\\n.miss {\\n\\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\\n\\tbackground-size: cover;\\n}\\n\\n.done {\\n\\tfilter: blur(12px);\\n}\\n\\n.done:hover {\\n\\tcursor: not-allowed;\\n}\\n\\n.yard {\\n\\tmargin-top: 1vh;\\n\\tdisplay: flex;\\n\\twidth: 80%;\\n\\tborder: 1px solid var(--black-shade);\\n\\tjustify-content: space-around;\\n\\talign-items: center;\\n}\\n\\n#human .grid-container div:hover {\\n\\tcursor: default;\\n}\\n\\n.yard-text {\\n\\t/* transform: rotate(270deg); */\\n\\tcolor: var(--mid-grey);\\n\\tfont-family: var(--anton);\\n\\tfont-size: 1.1rem;\\n\\twidth: 10%;\\n}\\n\\n.ships-container {\\n\\tpadding: 5px 0;\\n\\tdisplay: flex;\\n\\twidth: 70%;\\n\\tgap: 10px;\\n\\tflex-wrap: wrap;\\n\\tjustify-content: space-between;\\n}\\n\\n.ship-container {\\n\\tborder: 1px solid var(--mid-grey);\\n\\tdisplay: flex;\\n\\twidth: fit-content;\\n\\theight: fit-content;\\n}\\n\\n.shipyard .ships-container .ship-container:hover {\\n\\tcursor: move;\\n\\tcursor: grab;\\n}\\n\\n.ship-part {\\n\\twidth: 30px;\\n\\theight: 30px;\\n}\\n\\n.dragging {\\n\\tbackground-color: var(--darker-grey);\\n}\\n\\n.placed {\\n\\tbackground-color: red;\\n}\\n\\n.grid-container .ship-container {\\n\\tborder: none;\\n\\tbackground-color: red;\\n}\\n\\n.landing-indicator {\\n\\tbackground-color: lightgreen;\\n}\\n\\n[class^=\\"surround\\"] {\\n\\tbackground-color: yellow;\\n}\\n", ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://practice/./src/style/style.css?./node_modules/css-loader/dist/cjs.js'
				);

				/***/
			},

		/***/ "./node_modules/css-loader/dist/runtime/api.js":
			/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
			/***/ (module) => {
				"use strict";
				eval(
					'\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += "}";\n      }\n\n      if (item[2]) {\n        content += "}";\n      }\n\n      if (item[4]) {\n        content += "}";\n      }\n\n      return content;\n    }).join("");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://practice/./node_modules/css-loader/dist/runtime/api.js?'
				);

				/***/
			},

		/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
			/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
			/***/ (module) => {
				"use strict";
				eval(
					'\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^[\'"].*[\'"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/["\'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return "\\"".concat(url.replace(/"/g, \'\\\\"\').replace(/\\n/g, "\\\\n"), "\\"");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://practice/./node_modules/css-loader/dist/runtime/getUrl.js?'
				);

				/***/
			},

		/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
			/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
			/***/ (module) => {
				"use strict";
				eval(
					"\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://practice/./node_modules/css-loader/dist/runtime/noSourceMaps.js?"
				);

				/***/
			},

		/***/ "./node_modules/regenerator-runtime/runtime.js":
			/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
			/***/ (module) => {
				eval(
					'/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nvar runtime = (function (exports) {\n  "use strict";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === "function" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || "@@iterator";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";\n  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";\n\n  function define(obj, key, value) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n    return obj[key];\n  }\n  try {\n    // IE 8 has a broken Object.defineProperty that only works on DOM objects.\n    define({}, "");\n  } catch (err) {\n    define = function(obj, key, value) {\n      return obj[key] = value;\n    };\n  }\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  exports.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there\'s no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don\'t have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: "normal", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: "throw", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = "suspendedStart";\n  var GenStateSuspendedYield = "suspendedYield";\n  var GenStateExecuting = "executing";\n  var GenStateCompleted = "completed";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don\'t natively support it.\n  var IteratorPrototype = {};\n  define(IteratorPrototype, iteratorSymbol, function () {\n    return this;\n  });\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype &&\n      NativeIteratorPrototype !== Op &&\n      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype =\n    Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = GeneratorFunctionPrototype;\n  define(Gp, "constructor", GeneratorFunctionPrototype);\n  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);\n  GeneratorFunction.displayName = define(\n    GeneratorFunctionPrototype,\n    toStringTagSymbol,\n    "GeneratorFunction"\n  );\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    ["next", "throw", "return"].forEach(function(method) {\n      define(prototype, method, function(arg) {\n        return this._invoke(method, arg);\n      });\n    });\n  }\n\n  exports.isGeneratorFunction = function(genFun) {\n    var ctor = typeof genFun === "function" && genFun.constructor;\n    return ctor\n      ? ctor === GeneratorFunction ||\n        // For the native GeneratorFunction constructor, the best we can\n        // do is to check its .name property.\n        (ctor.displayName || ctor.name) === "GeneratorFunction"\n      : false;\n  };\n\n  exports.mark = function(genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      define(genFun, toStringTagSymbol, "GeneratorFunction");\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, "__await")` to determine if the yielded value is\n  // meant to be awaited.\n  exports.awrap = function(arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator, PromiseImpl) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === "throw") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value &&\n            typeof value === "object" &&\n            hasOwn.call(value, "__await")) {\n          return PromiseImpl.resolve(value.__await).then(function(value) {\n            invoke("next", value, resolve, reject);\n          }, function(err) {\n            invoke("throw", err, resolve, reject);\n          });\n        }\n\n        return PromiseImpl.resolve(value).then(function(unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration.\n          result.value = unwrapped;\n          resolve(result);\n        }, function(error) {\n          // If a rejected Promise was yielded, throw the rejection back\n          // into the async generator function so it can be handled there.\n          return invoke("throw", error, resolve, reject);\n        });\n      }\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new PromiseImpl(function(resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n        // If enqueue has been called before, then we want to wait until\n        // all previous Promises have been resolved before calling invoke,\n        // so that results are always delivered in the correct order. If\n        // enqueue has not been called before, then it is important to\n        // call invoke immediately, without waiting on a callback to fire,\n        // so that the async generator function has the opportunity to do\n        // any necessary setup in a predictable way. This predictability\n        // is why the Promise constructor synchronously invokes its\n        // executor callback, and why async functions synchronously\n        // execute code before the first await. Since we implement simple\n        // async functions in terms of async generators, it is especially\n        // important to get this right, even though it requires care.\n        previousPromise ? previousPromise.then(\n          callInvokeWithMethodAndArg,\n          // Avoid propagating failures to Promises returned by later\n          // invocations of the iterator.\n          callInvokeWithMethodAndArg\n        ) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {\n    return this;\n  });\n  exports.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {\n    if (PromiseImpl === void 0) PromiseImpl = Promise;\n\n    var iter = new AsyncIterator(\n      wrap(innerFn, outerFn, self, tryLocsList),\n      PromiseImpl\n    );\n\n    return exports.isGeneratorFunction(outerFn)\n      ? iter // If outerFn is a generator, return the full iterator.\n      : iter.next().then(function(result) {\n          return result.done ? result.value : iter.next();\n        });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error("Generator is already running");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === "throw") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === "next") {\n          // Setting context._sent for legacy support of Babel\'s\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n\n        } else if (context.method === "throw") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n\n        } else if (context.method === "return") {\n          context.abrupt("return", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === "normal") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done\n            ? GenStateCompleted\n            : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n\n        } else if (record.type === "throw") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = "throw";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === "throw") {\n        // Note: ["return"] must be used for ES3 parsing compatibility.\n        if (delegate.iterator["return"]) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = "return";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === "throw") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // "return" to "throw", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = "throw";\n        context.arg = new TypeError(\n          "The iterator does not provide a \'throw\' method");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === "throw") {\n      context.method = "throw";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (! info) {\n      context.method = "throw";\n      context.arg = new TypeError("iterator result is not an object");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was "throw" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was "next", forget context.arg since it has been\n      // "consumed" by the delegate iterator. If context.method was\n      // "return", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== "return") {\n        context.method = "next";\n        context.arg = undefined;\n      }\n\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  define(Gp, toStringTagSymbol, "Generator");\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers\' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn\'t happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  define(Gp, iteratorSymbol, function() {\n    return this;\n  });\n\n  define(Gp, "toString", function() {\n    return "[object Generator]";\n  });\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = "normal";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: "root" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  exports.keys = function(object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === "function") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1, next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  exports.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel\'s\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = "next";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === "t" &&\n              hasOwn.call(this, name) &&\n              !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === "throw") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = "throw";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = "next";\n          context.arg = undefined;\n        }\n\n        return !! caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === "root") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle("end");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, "catchLoc");\n          var hasFinally = hasOwn.call(entry, "finallyLoc");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else {\n            throw new Error("try statement without catch or finally");\n          }\n        }\n      }\n    },\n\n    abrupt: function(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev &&\n            hasOwn.call(entry, "finallyLoc") &&\n            this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry &&\n          (type === "break" ||\n           type === "continue") &&\n          finallyEntry.tryLoc <= arg &&\n          arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = "next";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function(record, afterLoc) {\n      if (record.type === "throw") {\n        throw record.arg;\n      }\n\n      if (record.type === "break" ||\n          record.type === "continue") {\n        this.next = record.arg;\n      } else if (record.type === "return") {\n        this.rval = this.arg = record.arg;\n        this.method = "return";\n        this.next = "end";\n      } else if (record.type === "normal" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    "catch": function(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === "throw") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error("illegal catch attempt");\n    },\n\n    delegateYield: function(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === "next") {\n        // Deliberately forget the last sent value so that we don\'t\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n\n  // Regardless of whether this script is executing as a CommonJS module\n  // or not, return the runtime object so that we can declare the variable\n  // regeneratorRuntime in the outer scope, which allows this module to be\n  // injected easily by `bin/regenerator --include-runtime script.js`.\n  return exports;\n\n}(\n  // If this script is executing as a CommonJS module, use module.exports\n  // as the regeneratorRuntime namespace. Otherwise create a new empty\n  // object. Either way, the resulting object will be used to initialize\n  // the regeneratorRuntime variable at the top of this file.\n   true ? module.exports : 0\n));\n\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  // This module should not be running in strict mode, so the above\n  // assignment should always work unless something is misconfigured. Just\n  // in case runtime.js accidentally runs in strict mode, in modern engines\n  // we can explicitly access globalThis. In older engines we can escape\n  // strict mode using a global Function call. This could conceivably fail\n  // if a Content Security Policy forbids using Function, but in that case\n  // the proper solution is to fix the accidental strict mode problem. If\n  // you\'ve misconfigured your bundler to force strict mode and applied a\n  // CSP to forbid Function, and you\'re not willing to fix either of those\n  // problems, please detail your unique predicament in a GitHub issue.\n  if (typeof globalThis === "object") {\n    globalThis.regeneratorRuntime = runtime;\n  } else {\n    Function("r", "regeneratorRuntime = r")(runtime);\n  }\n}\n\n\n//# sourceURL=webpack://practice/./node_modules/regenerator-runtime/runtime.js?'
				);

				/***/
			},

		/***/ "./src/style/style.css":
			/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				"use strict";
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://practice/./src/style/style.css?'
				);

				/***/
			},

		/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
			/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
			/***/ (module) => {
				"use strict";
				eval(
					'\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://practice/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?'
				);

				/***/
			},

		/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
			/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
			/***/ (module) => {
				"use strict";
				eval(
					'\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://practice/./node_modules/style-loader/dist/runtime/insertBySelector.js?'
				);

				/***/
			},

		/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
			/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
			/***/ (module) => {
				"use strict";
				eval(
					'\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://practice/./node_modules/style-loader/dist/runtime/insertStyleElement.js?'
				);

				/***/
			},

		/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
			/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
			/***/ (module, __unused_webpack_exports, __webpack_require__) => {
				"use strict";
				eval(
					'\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://practice/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?'
				);

				/***/
			},

		/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
			/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
			/***/ (module) => {
				"use strict";
				eval(
					'\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n\n  var needLayer = typeof obj.layer !== "undefined";\n\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += "}";\n  }\n\n  if (obj.media) {\n    css += "}";\n  }\n\n  if (obj.supports) {\n    css += "}";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://practice/./node_modules/style-loader/dist/runtime/styleDomAPI.js?'
				);

				/***/
			},

		/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
			/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
			/***/ (module) => {
				"use strict";
				eval(
					"\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://practice/./node_modules/style-loader/dist/runtime/styleTagTransform.js?"
				);

				/***/
			},

		/***/ "./src/index.ts":
			/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				"use strict";
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.css */ "./src/style/style.css");\n/* harmony import */ var _logic_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic/player */ "./src/logic/player.ts");\n/* harmony import */ var _view_alphabets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/alphabets */ "./src/view/alphabets.js");\n/* harmony import */ var _view_numbers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/numbers */ "./src/view/numbers.js");\n/* harmony import */ var _view_gridItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/gridItem */ "./src/view/gridItem.ts");\n/* harmony import */ var _view_dragover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/dragover */ "./src/view/dragover.js");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view */ "./src/view/index.ts");\n\n\n\n\n\n\n\nvar viewIndex = (0,_view__WEBPACK_IMPORTED_MODULE_6__["default"])();\nvar human = (0,_logic_player__WEBPACK_IMPORTED_MODULE_1__["default"])("human");\nvar computer = (0,_logic_player__WEBPACK_IMPORTED_MODULE_1__["default"])("computer");\n(0,_view_alphabets__WEBPACK_IMPORTED_MODULE_2__["default"])();\n(0,_view_numbers__WEBPACK_IMPORTED_MODULE_3__["default"])();\nvar p1Grid = (0,_view_gridItem__WEBPACK_IMPORTED_MODULE_4__["default"])(0, function () { return human; });\nvar p2Grid = (0,_view_gridItem__WEBPACK_IMPORTED_MODULE_4__["default"])(1, function () { return computer; });\n(0,_view_dragover__WEBPACK_IMPORTED_MODULE_5__["default"])();\np1Grid.appendGridItems(0);\np2Grid.appendGridItems(1);\ntry {\n    p1Grid.randomiseShipPlacement();\n    p2Grid.randomiseShipPlacement();\n    // console.log(computer.randomiseShipPlacement());\n    // Yard(computer.getShips());\n    // p1Grid.placeShips();\n    // p2Grid.placeShips();\n}\ncatch (e) {\n    console.log(e);\n}\n\n\n//# sourceURL=webpack://practice/./src/index.ts?'
				);

				/***/
			},

		/***/ "./src/logic/gameboard.ts":
			/*!********************************!*\
  !*** ./src/logic/gameboard.ts ***!
  \********************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				"use strict";
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/logic/ship.ts");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n    var createShipCollection = function (length, amount) {\n        var ships = [];\n        for (var i = 0; i < amount; i += 1) {\n            ships.push((0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(length));\n        }\n        return ships;\n    };\n    var isSunkCount = 10;\n    var shipPositions = [];\n    var invalidPositions = [];\n    var attackAttempts = [];\n    var missedPositions = [];\n    var lengthFourShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(4);\n    var lengthThreeShips = createShipCollection(3, 2);\n    var lengthTwoShips = createShipCollection(2, 3);\n    var lengthOneShips = createShipCollection(1, 4);\n    var ships = lengthOneShips.concat(lengthTwoShips, lengthThreeShips, lengthFourShip);\n    var getShips = function () { return ships; };\n    // const placeShip = (index: number, starting: number, direction: string) => {\n    // \tif (index < 0 || index > 9)\n    // \t\tthrow new Error("index must be between 0 and 9, inclusive");\n    // \tif (starting < 0 || starting > 99)\n    // \t\tthrow new Error("\'starting\' value must be between 0 and 99, inclusive");\n    // \tif (direction !== "horizontal" && direction !== "vertical")\n    // \t\tthrow new Error(\n    // \t\t\t"\'direction\' value must be either \'horizontal\' or \'vertical\'"\n    // \t\t);\n    // \tconst ship = ships[index];\n    // \tconst length = ship.getShipLength();\n    // \tconst lengthSize = starting.toString().length;\n    // \tconst lastDigit = lengthSize === 1 ? starting : starting % 10;\n    // \tconst firstDigit =\n    // \t\tlengthSize === 1 ? starting : Number(starting.toString()[0]);\n    // \tif (\n    // \t\tlength > 1 &&\n    // \t\t((direction === "horizontal" && lastDigit + length > 10) ||\n    // \t\t\t(direction === "vertical" && firstDigit + length > 10))\n    // \t) {\n    // \t\tthrow new Error("ship is out of bounds");\n    // \t}\n    // \tconst positions = ship.getPositions(starting, direction);\n    // \tconst tempShips = ships.filter(\n    // \t\t(currShip) => currShip.getCoordinates() !== undefined\n    // \t);\n    // \tcompareShips(tempShips, positions);\n    // \tship.setCoordinates(starting, direction);\n    // };\n    // const isClose = (currShipPositions: number[], newShipPos: number) =>\n    // \tcurrShipPositions.some((currShipPos) => {\n    // \t\tlet positionStart = currShipPos - 11;\n    // \t\tlet temp = 0;\n    // \t\twhile (positionStart < currShipPos + 12) {\n    // \t\t\tif (positionStart === newShipPos) {\n    // \t\t\t\treturn true;\n    // \t\t\t}\n    // \t\t\ttemp += 1;\n    // \t\t\tif (temp === 3) {\n    // \t\t\t\ttemp = 0;\n    // \t\t\t\tpositionStart += 8;\n    // \t\t\t} else {\n    // \t\t\t\tpositionStart += 1;\n    // \t\t\t}\n    // \t\t}\n    // \t\treturn false;\n    // \t});\n    // const compareShips = (tempShips: any[], positions: number[]) => {\n    // \ttempShips.forEach((currShip) => {\n    // \t\tconst coordinates = currShip.getCoordinates();\n    // \t\tconst currShipPositions = currShip.getPositions(\n    // \t\t\tcoordinates.coordinate,\n    // \t\t\tcoordinates.direction\n    // \t\t);\n    // \t\tpositions.forEach((newShipPos) => {\n    // \t\t\tconst close = isClose(currShipPositions, newShipPos);\n    // \t\t\tif (close) {\n    // \t\t\t\tthrow new Error("too close to another ship");\n    // \t\t\t}\n    // \t\t});\n    // \t});\n    // };\n    /** takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot. */\n    var receiveAttack = function (coordinates) {\n        if (coordinates.row < 0 ||\n            coordinates.row > 9 ||\n            coordinates.col < 0 ||\n            coordinates.col > 9) {\n            throw new Error("coordinates are out of bounds");\n        }\n        if (attackAttempts.some(function (pos) { return pos.col === coordinates.col && pos.row === coordinates.row; }))\n            throw Error("cannot hit an already hit spot");\n        attackAttempts.push(coordinates);\n        var hitShipIndex = getHitShipIndex(coordinates);\n        if (hitShipIndex < 0) {\n            missedPositions.push(coordinates);\n            return false;\n        }\n        var ship = ships[hitShipIndex];\n        ship.hitShip();\n        if (ship.isSunk())\n            isSunkCount -= 1;\n        return true;\n    };\n    var placeShip = function (start, shipIndex, direction) {\n        if (direction !== "vertical" && direction !== "horizontal")\n            throw new Error("\\"direction\\" value must be either \\"horizontal\\" or \\"vertical\\"");\n        var ship = ships[shipIndex];\n        var length = ship.getShipLength();\n        shipPositions[shipIndex] = getShipPositions(start, length, direction);\n        return shipPositions;\n    };\n    var getShipPositions = function (start, length, direction) {\n        var shipPositions = [];\n        var invalidPositionsTemp = [];\n        for (var i = 0; i < length; i++) {\n            // if start is out of bounds, throw\n            if (start.row < 0 || start.row > 9 || start.col < 0 || start.col > 9)\n                throw new Error("start values are out of bounds");\n            // if ship position is invalid (e.g another ship is there) throw\n            if (isInvalid(start, invalidPositionsTemp) ||\n                isInvalid(start, invalidPositions))\n                throw new Error("invalid ship position");\n            shipPositions.push({ row: start.row, col: start.col });\n            invalidPositionsTemp.push({ row: start.row, col: start.col });\n            if (direction === "horizontal") {\n                horizontalInvalidPos(i, start, length, invalidPositionsTemp);\n                start.col += 1;\n            }\n            else {\n                verticalInvalidPos(i, start, length, invalidPositionsTemp);\n                start.row += 1;\n            }\n        }\n        invalidPositions.push.apply(invalidPositions, invalidPositionsTemp);\n        return shipPositions;\n    };\n    var isInvalid = function (start, invalidPositionsTemp) {\n        var invalidPositionsString = JSON.stringify(invalidPositionsTemp);\n        var startString = JSON.stringify(start);\n        if (invalidPositionsString.includes(startString))\n            return true;\n        return false;\n    };\n    var verticalInvalidPos = function (i, start, length, invalidPositionsTemp) {\n        if (i === 0) {\n            invalidPositionsTemp.push({ row: start.row - 1, col: start.col }); // top\n            invalidPositionsTemp.push({ row: start.row - 1, col: start.col - 1 }); // top left only if first\n            invalidPositionsTemp.push({ row: start.row - 1, col: start.col + 1 }); // top right only if last\n        }\n        if (i === length - 1) {\n            invalidPositionsTemp.push({ row: start.row + 1, col: start.col }); // bottom\n            invalidPositionsTemp.push({ row: start.row + 1, col: start.col + 1 }); // bottom right only if last\n            invalidPositionsTemp.push({ row: start.row + 1, col: start.col - 1 }); // bottom left only if first\n        }\n        invalidPositionsTemp.push({ row: start.row, col: start.col - 1 }); // left\n        invalidPositionsTemp.push({ row: start.row, col: start.col + 1 }); // right only if last\n    };\n    var horizontalInvalidPos = function (i, start, length, invalidPositionsTemp) {\n        if (i === 0) {\n            invalidPositionsTemp.push({ row: start.row, col: start.col - 1 }); // left\n            invalidPositionsTemp.push({ row: start.row - 1, col: start.col - 1 }); // top left only if first\n            invalidPositionsTemp.push({ row: start.row + 1, col: start.col - 1 }); // bottom left only if first\n        }\n        if (i === length - 1) {\n            invalidPositionsTemp.push({ row: start.row - 1, col: start.col + 1 }); // top right only if last\n            invalidPositionsTemp.push({ row: start.row + 1, col: start.col + 1 }); // bottom right only if last\n            invalidPositionsTemp.push({ row: start.row, col: start.col + 1 }); // right only if last\n        }\n        invalidPositionsTemp.push({ row: start.row - 1, col: start.col }); // top\n        invalidPositionsTemp.push({ row: start.row + 1, col: start.col }); // bottom\n    };\n    var getHitShipIndex = function (coordinates) {\n        var hitShipIndex = shipPositions.findIndex(function (pos) {\n            var posString = JSON.stringify(pos);\n            var coordsString = JSON.stringify(coordinates);\n            if (pos !== undefined && posString.includes(coordsString))\n                return true;\n            return false;\n        });\n        return hitShipIndex;\n    };\n    var didAllSink = function () { return (isSunkCount > 0 ? false : true); };\n    return { placeShip: placeShip, receiveAttack: receiveAttack, didAllSink: didAllSink, getShips: getShips };\n});\n\n\n//# sourceURL=webpack://practice/./src/logic/gameboard.ts?'
				);

				/***/
			},

		/***/ "./src/logic/player.ts":
			/*!*****************************!*\
  !*** ./src/logic/player.ts ***!
  \*****************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				"use strict";
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/logic/gameboard.ts");\n\nvar Player = function (name) {\n    var pastAttempts = [];\n    var placedShips = [];\n    var gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();\n    var getName = function () { return name; };\n    var getShips = function () { return gameboard.getShips(); };\n    var placeShip = function (coordinates, index, direction) {\n        try {\n            gameboard.placeShip(coordinates, index, direction);\n            return true;\n        }\n        catch (error) {\n            var msg = error.message;\n            if (msg === "start values are out of bounds" ||\n                msg === "\\"direction\\" value must be either \\"horizontal\\" or \\"vertical\\"" ||\n                msg === "invalid ship position")\n                return false;\n            throw msg;\n        }\n    };\n    var randomiseShipPlacement = function () {\n        var invalidCoords = [];\n        var ships = gameboard.getShips();\n        var directions = ["horizontal", "vertical"];\n        for (var i = ships.length - 1; i > -1; i--) {\n            var isPlaced = false;\n            do {\n                var _a = getRandomPlacement(), row = _a[0], col = _a[1], directionsIndex = _a[2];\n                var direction = directions[directionsIndex];\n                if (validateCoords(row, col, direction, invalidCoords))\n                    continue;\n                isPlaced = placeShip({ row: row, col: col }, i, direction);\n                invalidCoords.push({ coords: { row: row, col: col }, direction: direction });\n                if (!isPlaced) {\n                    direction = directions[Math.abs(directionsIndex - 1)];\n                    isPlaced = placeShip({ row: row, col: col }, i, direction);\n                    invalidCoords.push({ coords: { row: row, col: col }, direction: direction });\n                }\n                if (isPlaced)\n                    placedShips.push({ coords: { row: row, col: col }, direction: direction });\n            } while (!isPlaced);\n        }\n        return placedShips;\n    };\n    var getRandomPlacement = function () {\n        var row = Math.floor(Math.random() * 10);\n        var col = Math.floor(Math.random() * 10);\n        var directionsIndex = Math.floor(Math.random() * 2);\n        return [row, col, directionsIndex];\n    };\n    var validateCoords = function (row, col, direction, invalidCoords) {\n        var invalidCoord = { coords: { row: row, col: col }, direction: direction };\n        var invalidCoordsStr = JSON.stringify(invalidCoords);\n        if (invalidCoordsStr.includes(JSON.stringify(invalidCoord)))\n            return true;\n        return false;\n    };\n    var receiveAttack = function (coordinates) {\n        return gameboard.receiveAttack(coordinates);\n    };\n    return {\n        getName: getName,\n        receiveAttack: receiveAttack,\n        placeShip: placeShip,\n        randomiseShipPlacement: randomiseShipPlacement,\n        getShips: getShips,\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n\n//# sourceURL=webpack://practice/./src/logic/player.ts?'
				);

				/***/
			},

		/***/ "./src/logic/ship.ts":
			/*!***************************!*\
  !*** ./src/logic/ship.ts ***!
  \***************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				"use strict";
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (length) {\n    var ship = [];\n    var coordinates;\n    var hitCount = 0;\n    /** initialises a ship of size { length } */\n    (function () {\n        if (length > 4 || length < 1) {\n            return;\n        }\n        for (var i = 0; i < length; i += 1) {\n            ship.push("o");\n        }\n    })();\n    /** retrieves the length of the ship */\n    var getShipLength = function () { return ship.length; };\n    var hitShip = function () {\n        hitCount += 1;\n    };\n    var isSunk = function () {\n        if (hitCount < getShipLength())\n            return false;\n        return true;\n    };\n    var setCoordinates = function (coordinate, direction) {\n        if (coordinate < 0) {\n            return "error: negative coordinates given";\n        }\n        if (coordinate > 99) {\n            return "error: coordinates position cannot be greater than grid size";\n        }\n        if (direction !== "horizontal" && direction !== "vertical") {\n            return "error: direction can only be (h) horizontal or (v) vertical";\n        }\n        coordinates = {\n            coordinate: coordinate,\n            direction: direction,\n        };\n        return true;\n    };\n    var getCoordinates = function () { return coordinates; };\n    var getPositions = function (coordinate, direction) {\n        var positions = [coordinate];\n        if (direction === "horizontal") {\n            for (var i = 1; i < length; i += 1) {\n                positions.push(positions[i - 1] + 1);\n            }\n        }\n        else {\n            for (var i = 1; i < length; i += 1) {\n                positions.push(positions[i - 1] + 10);\n            }\n        }\n        return positions;\n    };\n    return {\n        getShipLength: getShipLength,\n        hitShip: hitShip,\n        isSunk: isSunk,\n        setCoordinates: setCoordinates,\n        getCoordinates: getCoordinates,\n        getPositions: getPositions,\n    };\n});\n\n\n//# sourceURL=webpack://practice/./src/logic/ship.ts?'
				);

				/***/
			},

		/***/ "./src/view/Fleet/Fleet.ts":
			/*!*********************************!*\
  !*** ./src/view/Fleet/Fleet.ts ***!
  \*********************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				"use strict";
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _FleetHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FleetHeader */ "./src/view/Fleet/FleetHeader.ts");\n\nvar Fleet = function (fleetName) {\n    var header = (0,_FleetHeader__WEBPACK_IMPORTED_MODULE_0__["default"])(fleetName);\n    var fleet = document.createElement("div");\n    fleet.setAttribute("id", fleetName);\n    fleet.classList.add("fleet");\n    fleet.append(header.getFleetHeader());\n    var getFleet = function () { return fleet; };\n    return { getFleet: getFleet };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fleet);\n\n\n//# sourceURL=webpack://practice/./src/view/Fleet/Fleet.ts?'
				);

				/***/
			},

		/***/ "./src/view/Fleet/FleetHeader.ts":
			/*!***************************************!*\
  !*** ./src/view/Fleet/FleetHeader.ts ***!
  \***************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				"use strict";
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar FleetHeader = function (name) {\n    var headingContainer = document.createElement("div");\n    var playerName = document.createElement("p");\n    headingContainer.classList.add("player-heading-div");\n    playerName.classList.add("player-name");\n    playerName.textContent = name;\n    headingContainer.append(playerName);\n    var getFleetHeader = function () { return headingContainer; };\n    return { getFleetHeader: getFleetHeader };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FleetHeader);\n\n\n//# sourceURL=webpack://practice/./src/view/Fleet/FleetHeader.ts?'
				);

				/***/
			},

		/***/ "./src/view/Header/header.ts":
			/*!***********************************!*\
  !*** ./src/view/Header/header.ts ***!
  \***********************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				"use strict";
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Header = function () {\n    var gameHeader = document.createElement("div");\n    var gameName = document.createElement("p");\n    var gameRepoLink = document.createElement("a");\n    var icon = document.createElement("i");\n    gameHeader.setAttribute("id", "game-header");\n    gameName.setAttribute("id", "game-name");\n    gameRepoLink.setAttribute("href", "https://github.com/mogoatlhe/battleship");\n    gameRepoLink.setAttribute("target", "_blank");\n    icon.classList.add("fa", "fa-github");\n    gameName.textContent = "Battleship";\n    gameRepoLink.append(icon);\n    gameHeader.append(gameName);\n    gameHeader.append(gameRepoLink);\n    var getHeader = function () { return gameHeader; };\n    return { getHeader: getHeader };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n\n//# sourceURL=webpack://practice/./src/view/Header/header.ts?'
				);

				/***/
			},

		/***/ "./src/view/alphabets.js":
			/*!*******************************!*\
  !*** ./src/view/alphabets.js ***!
  \*******************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				"use strict";
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n    (function () {\n        var alphaCoords = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];\n        var alphabets = document.getElementsByClassName("alphabets");\n        __spreadArray([], alphabets, true).forEach(function (alphabet) {\n            alphaCoords.forEach(function (alphaCoord) {\n                var alphaText = document.createElement("p");\n                alphaText.textContent = alphaCoord;\n                alphabet.append(alphaText);\n            });\n        });\n    })();\n});\n\n\n//# sourceURL=webpack://practice/./src/view/alphabets.js?'
				);

				/***/
			},

		/***/ "./src/view/dragover.js":
			/*!******************************!*\
  !*** ./src/view/dragover.js ***!
  \******************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				"use strict";
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n    var startingPos;\n    var endingPos;\n    var dragTarget = document.querySelector("#human .grid-container");\n    var getClickedShipPart = function (dragging) {\n        return __spreadArray([], dragging.childNodes, true).findIndex(function (dragChild) {\n            return dragChild.classList.contains("clicked");\n        });\n    };\n    var getIsWholeShipInGrid = function (length, id, index) {\n        startingPos = id - index;\n        endingPos = startingPos + length;\n        if (\n        // horizontal. vertical??????\n        startingPos < 0 ||\n            endingPos > 99 ||\n            String(startingPos).length !== String(endingPos).length ||\n            (String(id).length !== 1 &&\n                String(startingPos)[0] !== String(endingPos)[0])) {\n            return false;\n        }\n        return true;\n    };\n    var removeLandingIndicator = function () {\n        var landingIndicators = document.querySelectorAll(".landing-indicator");\n        __spreadArray([], landingIndicators, true).forEach(function (landingIndicator) {\n            landingIndicator.classList.remove("landing-indicator");\n        });\n    };\n    var addLandingIndicator = function (length) {\n        removeLandingIndicator();\n        // works for horizontal ships.\n        for (var i = 0; i < length + 1; i += 1) {\n            document\n                .querySelector("[data-id=\\"".concat(startingPos + i, "\\"]"))\n                .classList.add("landing-indicator");\n        }\n    };\n    dragTarget.addEventListener("dragover", function (e) {\n        var dragging = document.querySelector(".dragging");\n        var length = dragging.childNodes.length - 1;\n        var dataID = Number(e.target.getAttribute("data-id"));\n        var dragChildIndex = getClickedShipPart(dragging);\n        var isWholeShipInGrid = getIsWholeShipInGrid(length, dataID, dragChildIndex);\n        if (!isWholeShipInGrid) {\n            removeLandingIndicator();\n            return;\n        }\n        e.preventDefault();\n        addLandingIndicator(length);\n        __spreadArray([], dragging.childNodes, true).forEach(function (part, index) {\n            part.setAttribute("data-id", startingPos + index);\n        });\n    });\n    dragTarget.addEventListener("dragleave", function (e) {\n        e.preventDefault();\n        removeLandingIndicator();\n    });\n});\n\n\n//# sourceURL=webpack://practice/./src/view/dragover.js?'
				);

				/***/
			},

		/***/ "./src/view/gridItem.ts":
			/*!******************************!*\
  !*** ./src/view/gridItem.ts ***!
  \******************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				"use strict";
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _surround__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./surround */ "./src/view/surround.js");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (index, me) {\n    var shipsPlaced = false;\n    var gridContainer = document.getElementsByClassName("grid-container");\n    var container = gridContainer[index];\n    var children = container.children;\n    var currPlayer = me("");\n    var name = currPlayer.getName();\n    // const resetId = (shipContainer) => {\n    // \tconst prevSibling = shipContainer.previousSibling;\n    // \tconst startId = Number(prevSibling.dataset.id) + 1;\n    // \tconst { length } = shipContainer.childNodes;\n    // \tfor (let i = startId, pos = 0; i < startId + length; i += 1, pos += 1) {\n    // \t\tshipContainer.childNodes[pos].setAttribute("data-id", i);\n    // \t}\n    // };\n    // const addSquares = (shipContainer) => {\n    // \tconst prevSibling = shipContainer.previousSibling;\n    // \tif (\n    // \t\tshipContainer.parentNode.parentNode.classList.contains("shipyard") ||\n    // \t\tprevSibling === null\n    // \t) {\n    // \t\treturn;\n    // \t}\n    // \tlet prevId = Number(prevSibling.dataset.id);\n    // \tconst startId = prevId + 1;\n    // \tconst { length } = shipContainer.childNodes;\n    // \tfor (let i = startId; i < length + startId; i += 1, prevId += 1) {\n    // \t\tconst prevSquare = document.querySelector(\n    // \t\t\t`div[data-id="${prevId}"]:not(.ship-part)`\n    // \t\t);\n    // \t\tconst square = document.createElement("div");\n    // \t\tsquare.dataset.id = i;\n    // \t\tprevSquare.after(square);\n    // \t}\n    // };\n    var showMiss = function (id) {\n        if (children[id - 10] !== undefined &&\n            children[id - 10].classList.contains("miss")) {\n            children[id - 10].classList.add("vertical");\n        }\n        if (children[id + 10] !== undefined &&\n            children[id + 10].classList.contains("miss")) {\n            children[id].classList.add("vertical");\n        }\n        if (children[id - 1] !== undefined &&\n            children[id - 1].classList.contains("miss")) {\n            children[id].classList.add("horizontal");\n        }\n        if (children[id + 1] !== undefined &&\n            children[id + 1].classList.contains("miss")) {\n            children[id + 1].classList.add("horizontal");\n        }\n    };\n    var surrondShip = function (ship) {\n        var coordinate = ship.getCoordinates().coordinate;\n        var direction = ship.getCoordinates().direction;\n        var positions = ship.getPositions(coordinate, direction);\n        var length = positions.length;\n        var end = length + 2;\n        var start = coordinate - 11;\n        var y = 3;\n        if (coordinate.toString().includes("0")) {\n            start = coordinate - 10;\n            y = 2;\n            end -= 1;\n        }\n        start = start < 0 ? start + 10 : start;\n        var imax = coordinate.toString().length < 2 ? 2 : 3;\n        if (direction === "horizontal")\n            for (var i = 0; i < imax; i += 1) {\n                for (var j = start; j < 100 && j < start + end; j += 1) {\n                    if (j < 0 ||\n                        children[j].classList.contains("hit") ||\n                        (coordinate > 1 && j.toString().includes("0"))) {\n                        // eslint-disable-next-line no-continue\n                        continue;\n                    }\n                    children[j].classList.add("miss");\n                    if (j < 90 && j.toString().includes("9")) {\n                        break;\n                    }\n                }\n                start += 10;\n            }\n        else {\n            if (coordinate.toString().includes("9")) {\n                y = 2;\n            }\n            var x = coordinate.toString().length > 1 ? 2 : 1;\n            for (var i = 0; i < y; i += 1) {\n                for (var j = start; j < 100 && j < start + 10 * (length + x); j += 10) {\n                    if (j < 0 || children[j].classList.contains("hit")) {\n                        // eslint-disable-next-line no-continue\n                        continue;\n                    }\n                    children[j].classList.add("miss");\n                }\n                start += 1;\n            }\n        }\n    };\n    // const isPartialOverlap = (dragging) => {\n    // \tif (!dragging.classList.contains("dragging")) {\n    // \t\treturn false;\n    // \t}\n    // \tconst prevId = Number(dragging.previousSibling.dataset.id);\n    // \t// doesn\'t work\n    // \tif (prevId + 1 === dragging.childNodes[0].dataset.id) {\n    // \t\treturn false;\n    // \t}\n    // \t// set the id of dragging childNodes\n    // \treturn true;\n    // };\n    var removeSquares = function (landingIndicators, landingIndicatorParent) {\n        landingIndicators.forEach(function (landingIndicator) {\n            landingIndicatorParent.removeChild(landingIndicator);\n        });\n    };\n    var drop = function () {\n        document.addEventListener("drop", function (e) {\n            e.preventDefault();\n            var landingIndicators = document.querySelectorAll(".landing-indicator");\n            var landingIndicatorParent = landingIndicators[0].parentNode;\n            var dragging = document.querySelector(".dragging");\n            var prevSquare = landingIndicators[0].previousSibling;\n            removeSquares(landingIndicators, landingIndicatorParent);\n            var surround = (0,_surround__WEBPACK_IMPORTED_MODULE_0__["default"])();\n            if (prevSquare !== null) {\n                prevSquare.after(dragging);\n            }\n            else {\n                landingIndicatorParent.prepend(dragging);\n            }\n            surround.surroundShip(dragging);\n            // const dragChildren = dragging.childNodes;\n            // const isOverlap = isPartialOverlap(e.target.parentNode);\n            // if (isOverlap) {\n            // \tresetId(dragging);\n            // \treturn;\n            // }\n            // addSquares(dragging);\n            // const { length } = dragChildren;\n            // const startId = Number(dragChildren[0].dataset.id);\n            // const prevSquare = document.querySelector(\n            // \t`div[data-id="${startId - 1}"]`\n            // );\n            // // removes squares to be replaced by the "dropping ship"\n            // for (let i = startId; i < length + startId; i += 1) {\n            // \tconst square = document.querySelector(\n            // \t\t`div[data-id="${i}"]:not(.ship-part)`\n            // \t);\n            // \tconst yourFleetGrid = document.querySelector(\n            // \t\t"#human .numbers-grid-container .grid-container"\n            // \t);\n            // \tyourFleetGrid.removeChild(square);\n            // }\n            // prevSquare.after(dragging);\n        });\n    };\n    // const onClick = () => {\n    // \tconst enemyShips = enemy.getShips();\n    // \tArray.from(children).forEach((child) => {\n    // \t\tchild.addEventListener("click", (e) => {\n    // \t\t\tlet isHumanGrid = false;\n    // \t\t\t// checks the click was by a human, or by a script\n    // \t\t\t// isTrusted returns true if the click was by a human\n    // \t\t\tif (Number(index) === 0 && e.isTrusted) {\n    // \t\t\t\tisHumanGrid = true;\n    // \t\t\t}\n    // \t\t\t// prevents human from clicking on own grid.\n    // \t\t\tif (isHumanGrid) {\n    // \t\t\t\treturn;\n    // \t\t\t}\n    // \t\t\tconst c = child as HTMLElement;\n    // \t\t\tconst id = Number(c.dataset.id);\n    // \t\t\tif (me.attack(enemy, id)) {\n    // \t\t\t\tc.classList.add("hit");\n    // \t\t\t\tconst enemyShipPos = enemyShips.findIndex(\n    // \t\t\t\t\t(enemyShip: { isSunk: () => any }) => enemyShip.isSunk()\n    // \t\t\t\t);\n    // \t\t\t\tif (enemyShipPos !== -1) {\n    // \t\t\t\t\tconst enemyShip = enemyShips[enemyShipPos];\n    // \t\t\t\t\tsurrondShip(enemyShip);\n    // \t\t\t\t\tenemyShips.splice(enemyShipPos, 1);\n    // \t\t\t\t\tif (enemyShips.length === 0) {\n    // \t\t\t\t\t\tconst searchItem = index === 0 ? "human" : "computer";\n    // \t\t\t\t\t\tconst fleet = document.getElementById(searchItem);\n    // \t\t\t\t\t\tconst items = fleet.querySelectorAll(".grid-container > *");\n    // \t\t\t\t\t\titems.forEach((item) => item.classList.add("done"));\n    // \t\t\t\t\t}\n    // \t\t\t\t}\n    // \t\t\t} else {\n    // \t\t\t\tchild.classList.add("miss");\n    // \t\t\t\tshowMiss(id);\n    // \t\t\t}\n    // \t\t});\n    // \t});\n    // };\n    var appendGridItems = function (gridIndex) {\n        for (var i = 0; i < 10; i++) {\n            var row = document.createElement("div");\n            row.classList.add("grid-row");\n            for (var j = 0; j < 10; j++) {\n                var item = document.createElement("div");\n                item.setAttribute("data-x", "".concat(i));\n                item.setAttribute("data-y", "".concat(j));\n                row.append(item);\n                item.addEventListener("click", function (e) { return attack(gridIndex, e); });\n            }\n            gridContainer[gridIndex].append(row);\n        }\n        if (index === 0) {\n            drop();\n        }\n    };\n    function attack(gridIndex, e) {\n        if (gridIndex !== 1)\n            return;\n        var cell = e.target;\n        console.log(cell.classList);\n        if (cell.classList.contains("miss") || cell.classList.contains("hit"))\n            return;\n        if (cell.classList.contains("ship"))\n            cell.classList.add("hit");\n        else\n            cell.classList.add("miss");\n        var col = parseInt(cell.dataset.col);\n        var row = parseInt(cell.parentElement.dataset.row);\n        console.log(currPlayer.getName());\n        console.log(currPlayer.receiveAttack({ row: row, col: col }));\n    }\n    // const placeShips = () => {\n    // \tenemy.getShips().forEach((ship) => {\n    // \t\tconst length = ship.getShipLength();\n    // \t\tconst coordinates = ship.getCoordinates();\n    // \t\tlet { coordinate } = coordinates;\n    // \t\tconst { direction } = coordinates;\n    // \t\tlet incrementValue;\n    // \t\tlet className = "ship vertical";\n    // \t\tlet border = length - 1;\n    // \t\tif (direction === "horizontal") {\n    // \t\t\tclassName = "ship horizontal";\n    // \t\t\tincrementValue = 1;\n    // \t\t\tborder = 0;\n    // \t\t} else {\n    // \t\t\tincrementValue = 10;\n    // \t\t}\n    // \t\tconst classNameArr = className.split(" ");\n    // \t\tif (length === 1) {\n    // \t\t\tclassNameArr.pop();\n    // \t\t}\n    // \t\tfor (let i = 0; i < length; i += 1) {\n    // \t\t\t// eslint-disable-next-line no-loop-func\n    // \t\t\tclassNameArr.forEach((cName) =>\n    // \t\t\t\tchildNodes[coordinate].classList.add(cName)\n    // \t\t\t);\n    // \t\t\tif (i === border) {\n    // \t\t\t\tchildNodes[coordinate].classList.add("border");\n    // \t\t\t}\n    // \t\t\tcoordinate += incrementValue;\n    // \t\t}\n    // \t});\n    // };\n    var randomiseShipPlacement = function () {\n        if (shipsPlaced)\n            return;\n        var shipLength;\n        var ships = currPlayer.randomiseShipPlacement();\n        for (var i = 0; i < ships.length; i++) {\n            if (i < 1)\n                shipLength = 4; // 0\n            else if (i < 3)\n                shipLength = 3; // 1 2\n            else if (i < 6)\n                shipLength = 2; // 3 4 5\n            else\n                shipLength = 1; // 6 7 8 9\n            var ship = ships[i];\n            var row = ship.coords.row;\n            var col = ship.coords.col;\n            for (var j = 0; j < shipLength; j++) {\n                var cell = document.querySelector("".concat(getFleet(), " [data-x=\\"").concat(row, "\\"][data-y=\\"").concat(col, "\\"]"));\n                cell.classList.add("ship");\n                if (ships[i].direction === "horizontal") {\n                    col += 1;\n                }\n                else if (ship.direction === "vertical") {\n                    row += 1;\n                }\n            }\n        }\n        shipsPlaced = true;\n    };\n    var getFleet = function () {\n        var fleet;\n        if (name === "human")\n            fleet = "#human";\n        else\n            fleet = "#computer";\n        return fleet;\n    };\n    var placeShips = function (coordsDirection) { };\n    return { appendGridItems: appendGridItems, placeShips: placeShips, randomiseShipPlacement: randomiseShipPlacement };\n});\n\n\n//# sourceURL=webpack://practice/./src/view/gridItem.ts?'
				);

				/***/
			},

		/***/ "./src/view/index.ts":
			/*!***************************!*\
  !*** ./src/view/index.ts ***!
  \***************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				"use strict";
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header/header */ "./src/view/Header/header.ts");\n/* harmony import */ var _Fleet_Fleet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fleet/Fleet */ "./src/view/Fleet/Fleet.ts");\n\n\nvar ViewIndex = function () {\n    var header = (0,_Header_header__WEBPACK_IMPORTED_MODULE_0__["default"])();\n    var humanFleet = (0,_Fleet_Fleet__WEBPACK_IMPORTED_MODULE_1__["default"])("human");\n    var computerFleet = (0,_Fleet_Fleet__WEBPACK_IMPORTED_MODULE_1__["default"])("computer");\n    var content = document.querySelector("#content");\n    var fleets = document.createElement("div");\n    fleets.setAttribute("id", "fleets");\n    fleets.append(humanFleet.getFleet());\n    content.append(header.getHeader());\n    content.append(fleets);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewIndex);\n\n\n//# sourceURL=webpack://practice/./src/view/index.ts?'
				);

				/***/
			},

		/***/ "./src/view/numbers.js":
			/*!*****************************!*\
  !*** ./src/view/numbers.js ***!
  \*****************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				"use strict";
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n    (function () {\n        var numCoords = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n        var numbers = document.getElementsByClassName("numbers");\n        __spreadArray([], numbers, true).forEach(function (num) {\n            numCoords.forEach(function (numCoord) {\n                var numText = document.createElement("p");\n                numText.textContent = numCoord;\n                num.append(numText);\n            });\n        });\n    })();\n});\n\n\n//# sourceURL=webpack://practice/./src/view/numbers.js?'
				);

				/***/
			},

		/***/ "./src/view/surround.js":
			/*!******************************!*\
  !*** ./src/view/surround.js ***!
  \******************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				"use strict";
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n    var doLeftSurround = function (currentShipPartId) {\n        var prevShipPart = document.querySelector("[data-id=\\"".concat(Number(currentShipPartId) - 1, "\\"]"));\n        if (prevShipPart === null ||\n            (currentShipPartId.length === 2 &&\n                String(Number(currentShipPartId) - 1)[0] !== currentShipPartId[0])) {\n            return;\n        }\n        prevShipPart.classList.add("surround-".concat(currentShipPartId));\n    };\n    var doRightSurround = function (currentShipPartId) {\n        var nextShipPart = document.querySelector("[data-id=\\"".concat(Number(currentShipPartId) + 1, "\\"]"));\n        if (nextShipPart === null ||\n            (currentShipPartId.length === 2 &&\n                String(Number(currentShipPartId) + 1)[0] !== currentShipPartId[0])) {\n            return;\n        }\n        nextShipPart.classList.add("surround-".concat(currentShipPartId));\n    };\n    var doUpSurround = function (currentShipPartId) {\n        var upShipPartId = Number(currentShipPartId) - 10;\n        var upShipPart = document.querySelector("[data-id=\\"".concat(upShipPartId, "\\"]"));\n        if (upShipPart === null || upShipPart < 0) {\n            return;\n        }\n        upShipPart.classList.add("surround-".concat(currentShipPartId));\n    };\n    var doDownSurround = function (currentShipPartId) {\n        var downShipPartId = Number(currentShipPartId) + 10;\n        var downShipPart = document.querySelector("[data-id=\\"".concat(downShipPartId, "\\"]"));\n        if (downShipPart === null || downShipPart > 99) {\n            return;\n        }\n        downShipPart.classList.add("surround-".concat(currentShipPartId));\n    };\n    var doDiagonalLeftUpSurround = function (currentShipPartId) {\n        if (currentShipPartId.length === 1 || currentShipPartId[1] === "0") {\n            return;\n        }\n        var diagonalLeftUpShipPartId = Number(currentShipPartId) - 11;\n        var diagonalLeftUpShipPart = document.querySelector("[data-id=\\"".concat(diagonalLeftUpShipPartId, "\\"]"));\n        diagonalLeftUpShipPart.classList.add("surround-".concat(currentShipPartId));\n    };\n    var doDiagonalRightUpSurround = function (currentShipPartId) {\n        if (currentShipPartId.length === 1 || currentShipPartId[1] === "9") {\n            return;\n        }\n        var diagonalRightUpShipPartId = Number(currentShipPartId) - 9;\n        var diagonalRightUpShipPart = document.querySelector("[data-id=\\"".concat(diagonalRightUpShipPartId, "\\"]"));\n        diagonalRightUpShipPart.classList.add("surround-".concat(currentShipPartId));\n    };\n    var doDiagonalLeftDownSurround = function (currentShipPartId) {\n        if (currentShipPartId[0] === "9" || currentShipPartId[1] === "0") {\n            return;\n        }\n        var shipPartId = Number(currentShipPartId) + 9;\n        var shipPart = document.querySelector("[data-id=\\"".concat(shipPartId, "\\"]"));\n        shipPart.classList.add("surround-".concat(currentShipPartId));\n    };\n    var doDiagonalRightDownSurround = function (currentShipPartId) {\n        if (currentShipPartId[0] === "9" || currentShipPartId[1] === "9") {\n            return;\n        }\n        var shipPartId = Number(currentShipPartId) + 11;\n        var shipPart = document.querySelector("[data-id=\\"".concat(shipPartId, "\\"]"));\n        shipPart.classList.add("surround-".concat(currentShipPartId));\n    };\n    var surroundShip = function (ship) {\n        var shipParts = ship.childNodes;\n        var length = shipParts.length;\n        __spreadArray([], shipParts, true).forEach(function (shipPart, index) {\n            var shipPartId = shipPart.dataset.id;\n            // horizontal\n            if (index === 0) {\n                doLeftSurround(shipPartId);\n                doDiagonalLeftUpSurround(shipPartId);\n                doDiagonalLeftDownSurround(shipPartId);\n                if (length === 1) {\n                    doRightSurround(shipPartId);\n                    doDiagonalRightUpSurround(shipPartId);\n                    doDiagonalRightDownSurround(shipPartId);\n                }\n            }\n            else if (length - 1 === index) {\n                doRightSurround(shipPartId);\n                doDiagonalRightUpSurround(shipPartId);\n                doDiagonalRightDownSurround(shipPartId);\n            }\n            doUpSurround(shipPartId);\n            doDownSurround(shipPartId);\n        });\n    };\n    return { surroundShip: surroundShip };\n});\n\n\n//# sourceURL=webpack://practice/./src/view/surround.js?'
				);

				/***/
			},

		/***/ "./src/images/gifs/burning.webp":
			/*!**************************************!*\
  !*** ./src/images/gifs/burning.webp ***!
  \**************************************/
			/***/ (module, __unused_webpack_exports, __webpack_require__) => {
				"use strict";
				eval(
					'module.exports = __webpack_require__.p + "1f080fbb047b4f63a251.webp";\n\n//# sourceURL=webpack://practice/./src/images/gifs/burning.webp?'
				);

				/***/
			},

		/***/ "./src/images/gifs/cloud.gif":
			/*!***********************************!*\
  !*** ./src/images/gifs/cloud.gif ***!
  \***********************************/
			/***/ (module, __unused_webpack_exports, __webpack_require__) => {
				"use strict";
				eval(
					'module.exports = __webpack_require__.p + "8f50cadfb3ca60792f42.gif";\n\n//# sourceURL=webpack://practice/./src/images/gifs/cloud.gif?'
				);

				/***/
			},

		/***/ "./src/images/gifs/wave.gif":
			/*!**********************************!*\
  !*** ./src/images/gifs/wave.gif ***!
  \**********************************/
			/***/ (module, __unused_webpack_exports, __webpack_require__) => {
				"use strict";
				eval(
					'module.exports = __webpack_require__.p + "53cb2ed2526b4e197402.gif";\n\n//# sourceURL=webpack://practice/./src/images/gifs/wave.gif?'
				);

				/***/
			},

		/******/
	};
	/************************************************************************/
	/******/ // The module cache
	/******/ var __webpack_module_cache__ = {};
	/******/
	/******/ // The require function
	/******/ function __webpack_require__(moduleId) {
		/******/ // Check if module is in cache
		/******/ var cachedModule = __webpack_module_cache__[moduleId];
		/******/ if (cachedModule !== undefined) {
			/******/ return cachedModule.exports;
			/******/
		}
		/******/ // Create a new module (and put it into the cache)
		/******/ var module = (__webpack_module_cache__[moduleId] = {
			/******/ id: moduleId,
			/******/ // no module.loaded needed
			/******/ exports: {},
			/******/
		});
		/******/
		/******/ // Execute the module function
		/******/ __webpack_modules__[moduleId](
			module,
			module.exports,
			__webpack_require__
		);
		/******/
		/******/ // Return the exports of the module
		/******/ return module.exports;
		/******/
	}
	/******/
	/******/ // expose the modules object (__webpack_modules__)
	/******/ __webpack_require__.m = __webpack_modules__;
	/******/
	/************************************************************************/
	/******/ /* webpack/runtime/compat get default export */
	/******/ (() => {
		/******/ // getDefaultExport function for compatibility with non-harmony modules
		/******/ __webpack_require__.n = (module) => {
			/******/ var getter =
				module && module.__esModule
					? /******/ () => module["default"]
					: /******/ () => module;
			/******/ __webpack_require__.d(getter, { a: getter });
			/******/ return getter;
			/******/
		};
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/define property getters */
	/******/ (() => {
		/******/ // define getter functions for harmony exports
		/******/ __webpack_require__.d = (exports, definition) => {
			/******/ for (var key in definition) {
				/******/ if (
					__webpack_require__.o(definition, key) &&
					!__webpack_require__.o(exports, key)
				) {
					/******/ Object.defineProperty(exports, key, {
						enumerable: true,
						get: definition[key],
					});
					/******/
				}
				/******/
			}
			/******/
		};
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/global */
	/******/ (() => {
		/******/ __webpack_require__.g = (function () {
			/******/ if (typeof globalThis === "object") return globalThis;
			/******/ try {
				/******/ return this || new Function("return this")();
				/******/
			} catch (e) {
				/******/ if (typeof window === "object") return window;
				/******/
			}
			/******/
		})();
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/hasOwnProperty shorthand */
	/******/ (() => {
		/******/ __webpack_require__.o = (obj, prop) =>
			Object.prototype.hasOwnProperty.call(obj, prop);
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/make namespace object */
	/******/ (() => {
		/******/ // define __esModule on exports
		/******/ __webpack_require__.r = (exports) => {
			/******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
				/******/ Object.defineProperty(exports, Symbol.toStringTag, {
					value: "Module",
				});
				/******/
			}
			/******/ Object.defineProperty(exports, "__esModule", { value: true });
			/******/
		};
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/publicPath */
	/******/ (() => {
		/******/ var scriptUrl;
		/******/ if (__webpack_require__.g.importScripts)
			scriptUrl = __webpack_require__.g.location + "";
		/******/ var document = __webpack_require__.g.document;
		/******/ if (!scriptUrl && document) {
			/******/ if (document.currentScript)
				/******/ scriptUrl = document.currentScript.src;
			/******/ if (!scriptUrl) {
				/******/ var scripts = document.getElementsByTagName("script");
				/******/ if (scripts.length)
					scriptUrl = scripts[scripts.length - 1].src;
				/******/
			}
			/******/
		}
		/******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
		/******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
		/******/ if (!scriptUrl)
			throw new Error("Automatic publicPath is not supported in this browser");
		/******/ scriptUrl = scriptUrl
			.replace(/#.*$/, "")
			.replace(/\?.*$/, "")
			.replace(/\/[^\/]+$/, "/");
		/******/ __webpack_require__.p = scriptUrl;
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/jsonp chunk loading */
	/******/ (() => {
		/******/ __webpack_require__.b = document.baseURI || self.location.href;
		/******/
		/******/ // object to store loaded and loading chunks
		/******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
		/******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
		/******/ var installedChunks = {
			/******/ main: 0,
			/******/
		};
		/******/
		/******/ // no chunk on demand loading
		/******/
		/******/ // no prefetching
		/******/
		/******/ // no preloaded
		/******/
		/******/ // no HMR
		/******/
		/******/ // no HMR manifest
		/******/
		/******/ // no on chunks loaded
		/******/
		/******/ // no jsonp function
		/******/
	})();
	/******/
	/************************************************************************/
	/******/
	/******/ // startup
	/******/ // Load entry module and return exports
	/******/ // This entry module is referenced by other modules so it can't be inlined
	/******/ __webpack_require__("./node_modules/regenerator-runtime/runtime.js");
	/******/ var __webpack_exports__ = __webpack_require__("./src/index.ts");
	/******/
	/******/
})();
