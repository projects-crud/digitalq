"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/authenticate",{

/***/ "./pages/authenticate.js":
/*!*******************************!*\
  !*** ./pages/authenticate.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ authenticate; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\nfunction authenticate() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), address = ref[0], setAddress = ref[1];\n    var connectWallet = function(address) {\n        var _AlgoSigner = AlgoSigner || null;\n        if (_AlgoSigner) {\n            _AlgoSigner.connect().then(function(d) {\n                getAccount();\n            }).catch(function(e) {\n                console.error(e);\n            });\n        }\n    };\n    var getAccount = function() {\n        var _AlgoSigner = AlgoSigner ? AlgoSigner : null;\n        _AlgoSigner.accounts({\n            ledger: 'TestNet'\n        }).then(function(d) {\n            console.log('d', d);\n            setAddress(d);\n        }).catch(function(e) {\n            console.error('error...', e);\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.CardGroup, {\n        className: \"d-flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Body, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Title, {\n                            children: \"Card title\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ananth/Downloads/digitalQ-demo/pages/authenticate.js\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Img, {\n                            variant: \"top\",\n                            src: \"https://algogems.io/img/myalgo.6079b807.png\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ananth/Downloads/digitalQ-demo/pages/authenticate.js\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ananth/Downloads/digitalQ-demo/pages/authenticate.js\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ananth/Downloads/digitalQ-demo/pages/authenticate.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Body, {\n                    onClick: connectWallet,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Title, {\n                            children: \"Card title\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ananth/Downloads/digitalQ-demo/pages/authenticate.js\",\n                            lineNumber: 44,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Img, {\n                            variant: \"top\",\n                            src: \"https://algogems.io/img/algosigner.2b02c885.png\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ananth/Downloads/digitalQ-demo/pages/authenticate.js\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ananth/Downloads/digitalQ-demo/pages/authenticate.js\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ananth/Downloads/digitalQ-demo/pages/authenticate.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Body, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Title, {\n                            children: \"Card title\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ananth/Downloads/digitalQ-demo/pages/authenticate.js\",\n                            lineNumber: 50,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Img, {\n                            variant: \"top\",\n                            src: \"https://algogems.io/img/algowallet.0ed6463a.svg\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ananth/Downloads/digitalQ-demo/pages/authenticate.js\",\n                            lineNumber: 51,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ananth/Downloads/digitalQ-demo/pages/authenticate.js\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ananth/Downloads/digitalQ-demo/pages/authenticate.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ananth/Downloads/digitalQ-demo/pages/authenticate.js\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, this));\n};\n_s(authenticate, \"4bWmwqNpSmwrWYwBxf0uO8LDcFo=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoZW50aWNhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBc0M7QUFDVzs7QUFDbEMsUUFBUSxDQUFDSSxZQUFZLEdBQUcsQ0FBQzs7SUFDcEMsR0FBSyxDQUF5QkgsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUFsQ0ksT0FBTyxHQUFnQkosR0FBWSxLQUExQkssVUFBVSxHQUFJTCxHQUFZO0lBRTFDLEdBQUssQ0FBQ00sYUFBYSxHQUFHLFFBQVEsQ0FBUEYsT0FBTyxFQUFLLENBQUM7UUFDaEMsR0FBRyxDQUFDRyxXQUFXLEdBQUdDLFVBQVUsSUFBSSxJQUFJO1FBQ3BDLEVBQUUsRUFBRUQsV0FBVyxFQUFFLENBQUM7WUFDZEEsV0FBVyxDQUNORSxPQUFPLEdBQ1BDLElBQUksQ0FBQyxRQUFRLENBQVBDLENBQUMsRUFBSyxDQUFDO2dCQUNWQyxVQUFVO1lBQ2QsQ0FBQyxFQUNBQyxLQUFLLENBQUMsUUFBUSxDQUFQQyxDQUFDLEVBQUssQ0FBQztnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUM7WUFDbkIsQ0FBQztRQUNULENBQUM7SUFDTCxDQUFDO0lBRUQsR0FBSyxDQUFDRixVQUFVLEdBQUcsUUFDdkIsR0FENkIsQ0FBQztRQUN0QixHQUFHLENBQUNMLFdBQVcsR0FBR0MsVUFBVSxHQUFHQSxVQUFVLEdBQUcsSUFBSTtRQUNoREQsV0FBVyxDQUNOVSxRQUFRLENBQUMsQ0FBQztZQUNQQyxNQUFNLEVBQUUsQ0FBUztRQUNyQixDQUFDLEVBQ0FSLElBQUksQ0FBQyxRQUFRLENBQVBDLENBQUMsRUFBSyxDQUFDO1lBQ1ZJLE9BQU8sQ0FBQ0ksR0FBRyxDQUFDLENBQUcsSUFBRVIsQ0FBQztZQUNsQk4sVUFBVSxDQUFDTSxDQUFDO1FBQ2hCLENBQUMsRUFDQUUsS0FBSyxDQUFDLFFBQVEsQ0FBUEMsQ0FBQyxFQUFLLENBQUM7WUFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUMsQ0FBVSxXQUFFRixDQUFDO1FBQy9CLENBQUM7SUFDVCxDQUFDO0lBQ0QsTUFBTSw2RUFDRGIsc0RBQVM7UUFBQ21CLFNBQVMsRUFBQyxDQUFROzt3RkFDeEJsQixpREFBSTtzR0FDQUEsc0RBQVM7O29HQUNMQSx1REFBVTtzQ0FBQyxDQUFVOzs7Ozs7b0dBQ3JCQSxxREFBUTs0QkFBQ3NCLE9BQU8sRUFBQyxDQUFLOzRCQUFDQyxHQUFHLEVBQUMsQ0FBNkM7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUdoRnZCLGlEQUFJO3NHQUNBQSxzREFBUztvQkFBQ3dCLE9BQU8sRUFBRXBCLGFBQWE7O29HQUM1QkosdURBQVU7c0NBQUMsQ0FBVTs7Ozs7O29HQUNyQkEscURBQVE7NEJBQUNzQixPQUFPLEVBQUMsQ0FBSzs0QkFBQ0MsR0FBRyxFQUFDLENBQWlEOzs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFHcEZ2QixpREFBSTtzR0FDQUEsc0RBQVM7O29HQUNMQSx1REFBVTtzQ0FBQyxDQUFVOzs7Ozs7b0dBQ3JCQSxxREFBUTs0QkFBQ3NCLE9BQU8sRUFBQyxDQUFLOzRCQUFDQyxHQUFHLEVBQUMsQ0FBaUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2pHLENBQUM7R0FyRHVCdEIsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hdXRoZW50aWNhdGUuanM/NmJjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2FyZEdyb3VwLCBDYXJkIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXV0aGVudGljYXRlKCkge1xuICAgIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IGNvbm5lY3RXYWxsZXQgPSAoYWRkcmVzcykgPT4ge1xuICAgICAgICBsZXQgX0FsZ29TaWduZXIgPSBBbGdvU2lnbmVyIHx8IG51bGxcbiAgICAgICAgaWYgKF9BbGdvU2lnbmVyKSB7XG4gICAgICAgICAgICBfQWxnb1NpZ25lclxuICAgICAgICAgICAgICAgIC5jb25uZWN0KClcbiAgICAgICAgICAgICAgICAudGhlbigoZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBnZXRBY2NvdW50KClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldEFjY291bnQgPSAoKSA9PiB7XG4gICAgICAgIGxldCBfQWxnb1NpZ25lciA9IEFsZ29TaWduZXIgPyBBbGdvU2lnbmVyIDogbnVsbFxuICAgICAgICBfQWxnb1NpZ25lclxuICAgICAgICAgICAgLmFjY291bnRzKHtcbiAgICAgICAgICAgICAgICBsZWRnZXI6ICdUZXN0TmV0JyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkJywgZCk7XG4gICAgICAgICAgICAgICAgc2V0QWRkcmVzcyhkKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yLi4uJywgZSlcbiAgICAgICAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxDYXJkR3JvdXAgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XG4gICAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT5DYXJkIHRpdGxlPC9DYXJkLlRpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5JbWcgdmFyaWFudD1cInRvcFwiIHNyYz1cImh0dHBzOi8vYWxnb2dlbXMuaW8vaW1nL215YWxnby42MDc5YjgwNy5wbmdcIiAvPlxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgICAgPENhcmQuQm9keSBvbkNsaWNrPXtjb25uZWN0V2FsbGV0fT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+Q2FyZCB0aXRsZTwvQ2FyZC5UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQuSW1nIHZhcmlhbnQ9XCJ0b3BcIiBzcmM9XCJodHRwczovL2FsZ29nZW1zLmlvL2ltZy9hbGdvc2lnbmVyLjJiMDJjODg1LnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT5DYXJkIHRpdGxlPC9DYXJkLlRpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5JbWcgdmFyaWFudD1cInRvcFwiIHNyYz1cImh0dHBzOi8vYWxnb2dlbXMuaW8vaW1nL2FsZ293YWxsZXQuMGVkNjQ2M2Euc3ZnXCIgLz5cbiAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9DYXJkR3JvdXA+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDYXJkR3JvdXAiLCJDYXJkIiwiYXV0aGVudGljYXRlIiwiYWRkcmVzcyIsInNldEFkZHJlc3MiLCJjb25uZWN0V2FsbGV0IiwiX0FsZ29TaWduZXIiLCJBbGdvU2lnbmVyIiwiY29ubmVjdCIsInRoZW4iLCJkIiwiZ2V0QWNjb3VudCIsImNhdGNoIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImFjY291bnRzIiwibGVkZ2VyIiwibG9nIiwiY2xhc3NOYW1lIiwiQm9keSIsIlRpdGxlIiwiSW1nIiwidmFyaWFudCIsInNyYyIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/authenticate.js\n");

/***/ })

});