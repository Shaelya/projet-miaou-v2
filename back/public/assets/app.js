/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~app"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/App/app.sass":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js!./src/components/App/app.sass ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/**\\n * Import\\n */\\n/* Colors */\\n/**\\n * Styles\\n */\\n.navbar {\\n  background-color: #714839; }\\n\\n.fa-user-times {\\n  color: #bdccb8;\\n  font-size: 1.5rem; }\\n\\n.subtitle {\\n  margin-left: 43%; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/App/app.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/Map/map.sass":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js!./src/components/Map/map.sass ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".leaflet-container {\\n  height: 400px;\\n  width: 60%; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/Map/map.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.sass":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.sass ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* Colors */\\n/* http://meyerweb.com/eric/tools/css/reset/ v2.0 | 20110126 */\\nhtml, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed,\\nfigure, figcaption, footer, header, hgroup,\\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline; }\\n\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure,\\nfooter, header, hgroup, menu, nav, section {\\n  display: block; }\\n\\nbody {\\n  line-height: 1; }\\n\\nol, ul {\\n  list-style: none; }\\n\\nblockquote, q {\\n  quotes: none; }\\n\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n  content: '';\\n  content: none; }\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0; }\\n\\n/* Reset perso */\\na, del, ins {\\n  text-decoration: none; }\\n\\na {\\n  color: inherit; }\\n\\nlabel, button {\\n  cursor: pointer; }\\n\\nhtml {\\n  box-sizing: border-box; }\\n\\n*, *:before, *:after {\\n  box-sizing: inherit; }\\n\\ninput, button {\\n  outline: 0; }\\n\\nbody {\\n  color: #333;\\n  padding: 2rem;\\n  font-family: 'Khula', sans-serif;\\n  background-color: #714839; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/styles/index.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./src/components/App/app.sass":
/*!*************************************!*\
  !*** ./src/components/App/app.sass ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js!./app.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/App/app.sass\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/components/App/app.sass?");

/***/ }),

/***/ "./src/components/App/index.js":
/*!*************************************!*\
  !*** ./src/components/App/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var src_components_Map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/Map */ \"./src/components/Map/index.js\");\n/* harmony import */ var src_components_ButtonGeoloc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/ButtonGeoloc */ \"./src/components/ButtonGeoloc/index.js\");\n/* harmony import */ var _app_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.sass */ \"./src/components/App/app.sass\");\n/* harmony import */ var _app_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_app_sass__WEBPACK_IMPORTED_MODULE_5__);\n\n\n/**\n * Import\n */\n\n // import PropTypes from 'prop-types';\n\n/**\n * Local import\n */\n// import { updateInputValue } from 'src/store/reducer';\n// Composants enfants éventuels\n\n\n // Styles et assets\n\n\n\nvar App = function App(_ref) {\n  var location = _ref.location,\n      handleClick = _ref.handleClick;\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"App\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"nav\", {\n    className: \"navbar navbar-dark\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"i\", {\n    className: \"fa fa-user-times\"\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"ml-2 text-white\"\n  }, \"non connect\\xE9\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"a\", {\n    className: \"navbar-brand mx-auto\",\n    href: \"#\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"img\", {\n    src: \"/docs/4.3/assets/brand/bootstrap-solid.svg\",\n    width: \"30\",\n    height: \"30\",\n    alt: \"\"\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h1\", {\n    className: \"h1\"\n  }, \"MIA'O\\xF9\")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"form\", {\n    className: \"form-inline\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"button\", {\n    className: \"btn btn-info mr-2\",\n    type: \"button\"\n  }, \"Se connecter\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"button\", {\n    className: \"btn btn-info\",\n    type: \"button\"\n  }, \"S'inscrire\"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"subtitle text-white mb-4\"\n  }, \"Le site des animaux perdus\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(src_components_Map__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    location: location\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(src_components_ButtonGeoloc__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    handleClick: handleClick\n  }));\n}; // App.propTypes = {\n//   /** Titre de l'application React */\n//   title: PropTypes.string.isRequired\n// };\n\n/**\n * Export\n */\n// Étape 1 : on définit des stratégies de connexion au store de l'app.\n\n\nvar connectionStrategies = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])( // 1er argument : stratégie de lecture (dans le state privé global)\nfunction (state) {\n  return {\n    location: state.location\n  };\n}, // 2d argument : stratégie d'écriture (dans le state privé global)\nfunction (dispatch, ownProps) {\n  return {\n    handleClick: function handleClick() {\n      navigator.geolocation.getCurrentPosition(function (position) {\n        dispatch({\n          type: 'UPDATE_LOCATION',\n          location: {\n            lat: position.coords.latitude,\n            lng: position.coords.longitude,\n            zoom: 17\n          }\n        });\n      });\n    }\n  };\n}); // Étape 2 : on applique ces stratégies à un composant spécifique.\n\nvar AppContainer = connectionStrategies(App); // Étape 3 : on exporte le composant connecté qui a été généré\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppContainer); // const App = () => (\n// <div>\n//   <Map />\n//   <button className=\"position\" >Ma position</button>\n// </div>\n// );\n// export default App;\n\n//# sourceURL=webpack:///./src/components/App/index.js?");

/***/ }),

/***/ "./src/components/ButtonGeoloc/index.js":
/*!**********************************************!*\
  !*** ./src/components/ButtonGeoloc/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar ButtonGeoloc = function ButtonGeoloc(_ref) {\n  var handleClick = _ref.handleClick;\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"button\", {\n    onClick: handleClick,\n    className: \"myposition\"\n  }, \"Ma position\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ButtonGeoloc);\n\n//# sourceURL=webpack:///./src/components/ButtonGeoloc/index.js?");

/***/ }),

/***/ "./src/components/Map/index.js":
/*!*************************************!*\
  !*** ./src/components/Map/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-leaflet */ \"./node_modules/react-leaflet/es/index.js\");\n/* harmony import */ var _map_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map.sass */ \"./src/components/Map/map.sass\");\n/* harmony import */ var _map_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_map_sass__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar MiaouMap = function MiaouMap(_ref) {\n  var location = _ref.location;\n  var position = [location.lat, location.lng];\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_leaflet__WEBPACK_IMPORTED_MODULE_2__[\"Map\"], {\n    center: position,\n    zoom: location.zoom\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_leaflet__WEBPACK_IMPORTED_MODULE_2__[\"TileLayer\"], {\n    attribution: \"\\xA9 <a href=\\\"http://osm.org/copyright\\\">OpenStreetMap</a> contributors\",\n    url: \"https://{s}.tile.osm.org/{z}/{x}/{y}.png\"\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_leaflet__WEBPACK_IMPORTED_MODULE_2__[\"Marker\"], {\n    position: position\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_leaflet__WEBPACK_IMPORTED_MODULE_2__[\"Popup\"], null, \"Vous \\xEAtes ici\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MiaouMap);\n\n//# sourceURL=webpack:///./src/components/Map/index.js?");

/***/ }),

/***/ "./src/components/Map/map.sass":
/*!*************************************!*\
  !*** ./src/components/Map/map.sass ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js!./map.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/Map/map.sass\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/components/Map/map.sass?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/polyfill */ \"./node_modules/@babel/polyfill/lib/index.js\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var src_components_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/App */ \"./src/components/App/index.js\");\n/* harmony import */ var src_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/store */ \"./src/store/index.js\");\n/* harmony import */ var src_store_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/store/reducer */ \"./src/store/reducer.js\");\n\n\n/**\n * NPM import\n */\n\n\n\n\n/**\n * Local import\n */\n\n\n\n\n/**\n * Code\n */\n\nvar reactRootElement = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"Provider\"], {\n  store: src_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n}, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(src_components_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null));\n\nvar renderingArea = document.querySelector('#root');\nObject(react_dom__WEBPACK_IMPORTED_MODULE_3__[\"render\"])(reactRootElement, renderingArea); // Exemple d'action interceptée par un middleware.\n\nsrc_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].dispatch(Object(src_store_reducer__WEBPACK_IMPORTED_MODULE_7__[\"sideEffect\"])());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var src_store_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/store/reducer */ \"./src/store/reducer.js\");\n/* harmony import */ var src_store_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/store/middleware */ \"./src/store/middleware.js\");\n// La librairie redux s'occupe de nous fournir un système de\n// gestion d'état (state management). Il n'est pas question ici\n// de React !\n\n\n\nvar composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_0__[\"compose\"]; // On crée LE store de CETTE application. Un castor sympa :)\n\nvar kastore = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(src_store_reducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(src_store_middleware__WEBPACK_IMPORTED_MODULE_2__[\"default\"])));\n/* harmony default export */ __webpack_exports__[\"default\"] = (kastore);\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "./src/store/middleware.js":
/*!*********************************!*\
  !*** ./src/store/middleware.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var src_store_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/store/reducer */ \"./src/store/reducer.js\");\n // On implémente un middleware. Son rôle est d'intercepter des actions\n// dont le but premier n'est pas d'arriver jusqu'au reducer.\n// Un middleware s'occupe avant tout des effets de bord. Il décide si\n// certaines actions doivent être traitées autrement que par une\n// mise-à-jour du state.\n// Il est possible de déclencher à la fois un effet de bord & une màj.\n\nvar middleware = function middleware(store) {\n  return function (next) {\n    return function (action) {\n      console.log('middleware:', action); // La douane examine nos papiers d'identité.\n\n      switch (action.type) {\n        // La douane intercepte spécifiquement les actions de type\n        // 'SIDE_EFFECT'. Ces actions ne doivent pas aller au reducer,\n        // mais déclencher des effets de bord.\n        case src_store_reducer__WEBPACK_IMPORTED_MODULE_0__[\"SIDE_EFFECT\"]:\n          {\n            console.log('middleware/SIDE_EFFECT'); // Ici, on peut faire du logging, lancer des requêtes AJAX, etc.\n\n            break;\n          }\n\n        default:\n          {\n            console.log('middleware/default');\n            next(action);\n          }\n      }\n    };\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (middleware);\n\n//# sourceURL=webpack:///./src/store/middleware.js?");

/***/ }),

/***/ "./src/store/reducer.js":
/*!******************************!*\
  !*** ./src/store/reducer.js ***!
  \******************************/
/*! exports provided: SIDE_EFFECT, default, sideEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIDE_EFFECT\", function() { return SIDE_EFFECT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sideEffect\", function() { return sideEffect; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// export const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';\nvar SIDE_EFFECT = 'SIDE_EFFECT';\nvar initialState = {\n  location: {\n    lat: 48.866667,\n    lng: 2.333333,\n    zoom: 13\n  }\n};\nvar defaultAction = {};\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultAction;\n\n  switch (action.type) {\n    case 'UPDATE_LOCATION':\n      {\n        var _state = _objectSpread({}, _state, {\n          location: {\n            lat: action.location.lat,\n            lng: action.location.lng,\n            zoom: action.location.zoom\n          }\n        });\n\n        console.log(_state);\n        return _objectSpread({}, _state);\n      }\n\n    default:\n      {\n        // return state;\n        // Dans le cas où on ne comprend pas quelle est l'action à\n        // effecture (action.type n'est pas reconnu), on retourne\n        // une copie non-altérée du state courant, reçu en paramètre.\n        return _objectSpread({}, state);\n      }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer); // export const updateInputValue = value => {\n//   return {\n//     type: UPDATE_INPUT_VALUE,\n//     value\n//   };\n// };\n\nvar sideEffect = function sideEffect() {\n  return {\n    type: SIDE_EFFECT\n  };\n};\n\n//# sourceURL=webpack:///./src/store/reducer.js?");

/***/ }),

/***/ "./src/styles/index.sass":
/*!*******************************!*\
  !*** ./src/styles/index.sass ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src??ref--6-2!../../node_modules/sass-loader/dist/cjs.js!./index.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.sass\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/styles/index.sass?");

/***/ }),

/***/ 0:
/*!****************************************************!*\
  !*** multi ./src/styles/index.sass ./src/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/styles/index.sass */\"./src/styles/index.sass\");\nmodule.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/styles/index.sass_./src/index.js?");

/***/ })

/******/ });