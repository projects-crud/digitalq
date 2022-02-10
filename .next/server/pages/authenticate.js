"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/authenticate";
exports.ids = ["pages/authenticate"];
exports.modules = {

/***/ "./pages/authenticate.js":
/*!*******************************!*\
  !*** ./pages/authenticate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ authenticate)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction authenticate() {\n    const { 0: address , 1: setAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const connectWallet = (address)=>{\n        let _AlgoSigner = AlgoSigner || null;\n        if (_AlgoSigner) {\n            _AlgoSigner.connect().then((d)=>{\n                getAccount();\n            }).catch((e)=>{\n                console.error(e);\n            });\n        }\n    };\n    const getAccount = ()=>{\n        let _AlgoSigner = AlgoSigner ? AlgoSigner : null;\n        _AlgoSigner.accounts({\n            ledger: 'TestNet'\n        }).then((d)=>{\n            console.log('d', d);\n            setAddress(d);\n        }).catch((e)=>{\n            console.error('error...', e);\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.CardGroup, {\n        className: \"d-flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Body, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Img, {\n                        variant: \"top\",\n                        src: \"https://algogems.io/img/myalgo.6079b807.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ananth/Downloads/digitalQ-demo/pages/authenticate.js\",\n                        lineNumber: 38,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ananth/Downloads/digitalQ-demo/pages/authenticate.js\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ananth/Downloads/digitalQ-demo/pages/authenticate.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Body, {\n                    onClick: connectWallet,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Img, {\n                        variant: \"top\",\n                        src: \"https://algogems.io/img/algosigner.2b02c885.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ananth/Downloads/digitalQ-demo/pages/authenticate.js\",\n                        lineNumber: 43,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ananth/Downloads/digitalQ-demo/pages/authenticate.js\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ananth/Downloads/digitalQ-demo/pages/authenticate.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Body, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Img, {\n                        variant: \"top\",\n                        src: \"https://algogems.io/img/algowallet.0ed6463a.svg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ananth/Downloads/digitalQ-demo/pages/authenticate.js\",\n                        lineNumber: 48,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ananth/Downloads/digitalQ-demo/pages/authenticate.js\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ananth/Downloads/digitalQ-demo/pages/authenticate.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ananth/Downloads/digitalQ-demo/pages/authenticate.js\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoZW50aWNhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBdUM7QUFDVTtBQUNsQyxRQUFRLENBQUNJLFlBQVksR0FBRyxDQUFDO0lBQ3BDLEtBQUssTUFBRUMsT0FBTyxNQUFFQyxVQUFVLE1BQUlMLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBRXpDLEtBQUssQ0FBQ00sYUFBYSxJQUFJRixPQUFPLEdBQUssQ0FBQztRQUNoQyxHQUFHLENBQUNHLFdBQVcsR0FBR0MsVUFBVSxJQUFJLElBQUk7UUFDcEMsRUFBRSxFQUFFRCxXQUFXLEVBQUUsQ0FBQztZQUNkQSxXQUFXLENBQ05FLE9BQU8sR0FDUEMsSUFBSSxFQUFFQyxDQUFDLEdBQUssQ0FBQztnQkFDVkMsVUFBVTtZQUNkLENBQUMsRUFDQUMsS0FBSyxFQUFFQyxDQUFDLEdBQUssQ0FBQztnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUM7WUFDbkIsQ0FBQztRQUNULENBQUM7SUFDTCxDQUFDO0lBRUQsS0FBSyxDQUFDRixVQUFVLE9BQVMsQ0FBQztRQUN0QixHQUFHLENBQUNMLFdBQVcsR0FBR0MsVUFBVSxHQUFHQSxVQUFVLEdBQUcsSUFBSTtRQUNoREQsV0FBVyxDQUNOVSxRQUFRLENBQUMsQ0FBQztZQUNQQyxNQUFNLEVBQUUsQ0FBUztRQUNyQixDQUFDLEVBQ0FSLElBQUksRUFBRUMsQ0FBQyxHQUFLLENBQUM7WUFDVkksT0FBTyxDQUFDSSxHQUFHLENBQUMsQ0FBRyxJQUFFUixDQUFDO1lBQ2xCTixVQUFVLENBQUNNLENBQUM7UUFDaEIsQ0FBQyxFQUNBRSxLQUFLLEVBQUVDLENBQUMsR0FBSyxDQUFDO1lBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLENBQVUsV0FBRUYsQ0FBQztRQUMvQixDQUFDO0lBQ1QsQ0FBQztJQUNELE1BQU0sNkVBQ0RiLHNEQUFTO1FBQUNtQixTQUFTLEVBQUMsQ0FBUTs7d0ZBQ3hCbEIsaURBQUk7c0dBQ0FBLHNEQUFTOzBHQUNMQSxxREFBUTt3QkFBQ3FCLE9BQU8sRUFBQyxDQUFLO3dCQUFDQyxHQUFHLEVBQUMsQ0FBNkM7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBR2hGdEIsaURBQUk7c0dBQ0FBLHNEQUFTO29CQUFDdUIsT0FBTyxFQUFFbkIsYUFBYTswR0FDNUJKLHFEQUFRO3dCQUFDcUIsT0FBTyxFQUFDLENBQUs7d0JBQUNDLEdBQUcsRUFBQyxDQUFpRDs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFHcEZ0QixpREFBSTtzR0FDQUEsc0RBQVM7MEdBQ0xBLHFEQUFRO3dCQUFDcUIsT0FBTyxFQUFDLENBQUs7d0JBQUNDLEdBQUcsRUFBQyxDQUFpRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtqRyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtby8uL3BhZ2VzL2F1dGhlbnRpY2F0ZS5qcz82YmNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2FyZEdyb3VwLCBDYXJkIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXV0aGVudGljYXRlKCkge1xuICAgIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IGNvbm5lY3RXYWxsZXQgPSAoYWRkcmVzcykgPT4ge1xuICAgICAgICBsZXQgX0FsZ29TaWduZXIgPSBBbGdvU2lnbmVyIHx8IG51bGxcbiAgICAgICAgaWYgKF9BbGdvU2lnbmVyKSB7XG4gICAgICAgICAgICBfQWxnb1NpZ25lclxuICAgICAgICAgICAgICAgIC5jb25uZWN0KClcbiAgICAgICAgICAgICAgICAudGhlbigoZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBnZXRBY2NvdW50KClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldEFjY291bnQgPSAoKSA9PiB7XG4gICAgICAgIGxldCBfQWxnb1NpZ25lciA9IEFsZ29TaWduZXIgPyBBbGdvU2lnbmVyIDogbnVsbFxuICAgICAgICBfQWxnb1NpZ25lclxuICAgICAgICAgICAgLmFjY291bnRzKHtcbiAgICAgICAgICAgICAgICBsZWRnZXI6ICdUZXN0TmV0JyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkJywgZCk7XG4gICAgICAgICAgICAgICAgc2V0QWRkcmVzcyhkKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yLi4uJywgZSlcbiAgICAgICAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxDYXJkR3JvdXAgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XG4gICAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5JbWcgdmFyaWFudD1cInRvcFwiIHNyYz1cImh0dHBzOi8vYWxnb2dlbXMuaW8vaW1nL215YWxnby42MDc5YjgwNy5wbmdcIiAvPlxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgICAgPENhcmQuQm9keSBvbkNsaWNrPXtjb25uZWN0V2FsbGV0fT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQuSW1nIHZhcmlhbnQ9XCJ0b3BcIiBzcmM9XCJodHRwczovL2FsZ29nZW1zLmlvL2ltZy9hbGdvc2lnbmVyLjJiMDJjODg1LnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5JbWcgdmFyaWFudD1cInRvcFwiIHNyYz1cImh0dHBzOi8vYWxnb2dlbXMuaW8vaW1nL2FsZ293YWxsZXQuMGVkNjQ2M2Euc3ZnXCIgLz5cbiAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9DYXJkR3JvdXA+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDYXJkR3JvdXAiLCJDYXJkIiwiYXV0aGVudGljYXRlIiwiYWRkcmVzcyIsInNldEFkZHJlc3MiLCJjb25uZWN0V2FsbGV0IiwiX0FsZ29TaWduZXIiLCJBbGdvU2lnbmVyIiwiY29ubmVjdCIsInRoZW4iLCJkIiwiZ2V0QWNjb3VudCIsImNhdGNoIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImFjY291bnRzIiwibGVkZ2VyIiwibG9nIiwiY2xhc3NOYW1lIiwiQm9keSIsIkltZyIsInZhcmlhbnQiLCJzcmMiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/authenticate.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/authenticate.js"));
module.exports = __webpack_exports__;

})();