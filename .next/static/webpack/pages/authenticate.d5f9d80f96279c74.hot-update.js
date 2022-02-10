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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ authenticate; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\nfunction authenticate() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), address = ref[0], setAddress = ref[1];\n    var connectWallet = function(address) {\n        var _AlgoSigner = AlgoSigner || null;\n        if (_AlgoSigner) {\n            _AlgoSigner.connect().then(function(d) {\n                getAccount();\n            }).catch(function(e) {\n                console.error(e);\n            });\n        }\n    };\n    var getAccount = function() {\n        var _AlgoSigner = AlgoSigner ? AlgoSigner : null;\n        _AlgoSigner.accounts({\n            ledger: 'TestNet'\n        }).then(function(d) {\n            console.log('d', d);\n            setAddress(d);\n        }).catch(function(e) {\n            console.error('error...', e);\n        });\n    };\n    var navigateToDahboard = function() {\n        history.push('/dashboard');\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        children: [\n            address && address.length > 0 && address.map(function(addr) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                    onClick: navigateToDahboard,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Body, {\n                        children: addr.address\n                    }, void 0, false, {\n                        fileName: \"/Users/ananth/Downloads/digitalQ-demo/pages/authenticate.js\",\n                        lineNumber: 44,\n                        columnNumber: 29\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/ananth/Downloads/digitalQ-demo/pages/authenticate.js\",\n                    lineNumber: 43,\n                    columnNumber: 25\n                }, _this));\n            }),\n            address && address.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.CardGroup, {\n                className: \"d-flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Body, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Img, {\n                                variant: \"top\",\n                                src: \"https://algogems.io/img/myalgo.6079b807.png\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ananth/Downloads/digitalQ-demo/pages/authenticate.js\",\n                                lineNumber: 56,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ananth/Downloads/digitalQ-demo/pages/authenticate.js\",\n                            lineNumber: 55,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ananth/Downloads/digitalQ-demo/pages/authenticate.js\",\n                        lineNumber: 54,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Body, {\n                            onClick: connectWallet,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Img, {\n                                variant: \"top\",\n                                src: \"https://algogems.io/img/algosigner.2b02c885.png\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ananth/Downloads/digitalQ-demo/pages/authenticate.js\",\n                                lineNumber: 61,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ananth/Downloads/digitalQ-demo/pages/authenticate.js\",\n                            lineNumber: 60,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ananth/Downloads/digitalQ-demo/pages/authenticate.js\",\n                        lineNumber: 59,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Body, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Img, {\n                                variant: \"top\",\n                                src: \"https://algogems.io/img/algowallet.0ed6463a.svg\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ananth/Downloads/digitalQ-demo/pages/authenticate.js\",\n                                lineNumber: 66,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ananth/Downloads/digitalQ-demo/pages/authenticate.js\",\n                            lineNumber: 65,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ananth/Downloads/digitalQ-demo/pages/authenticate.js\",\n                        lineNumber: 64,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ananth/Downloads/digitalQ-demo/pages/authenticate.js\",\n                lineNumber: 53,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ananth/Downloads/digitalQ-demo/pages/authenticate.js\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, this));\n};\n_s(authenticate, \"4bWmwqNpSmwrWYwBxf0uO8LDcFo=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoZW50aWNhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBdUM7QUFDVTs7QUFDbEMsUUFBUSxDQUFDSSxZQUFZLEdBQUcsQ0FBQzs7O0lBQ3BDLEdBQUssQ0FBeUJILEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBbENJLE9BQU8sR0FBZ0JKLEdBQVksS0FBMUJLLFVBQVUsR0FBSUwsR0FBWTtJQUUxQyxHQUFLLENBQUNNLGFBQWEsR0FBRyxRQUFRLENBQVBGLE9BQU8sRUFBSyxDQUFDO1FBQ2hDLEdBQUcsQ0FBQ0csV0FBVyxHQUFHQyxVQUFVLElBQUksSUFBSTtRQUNwQyxFQUFFLEVBQUVELFdBQVcsRUFBRSxDQUFDO1lBQ2RBLFdBQVcsQ0FDTkUsT0FBTyxHQUNQQyxJQUFJLENBQUMsUUFBUSxDQUFQQyxDQUFDLEVBQUssQ0FBQztnQkFDVkMsVUFBVTtZQUNkLENBQUMsRUFDQUMsS0FBSyxDQUFDLFFBQVEsQ0FBUEMsQ0FBQyxFQUFLLENBQUM7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDO1lBQ25CLENBQUM7UUFDVCxDQUFDO0lBQ0wsQ0FBQztJQUVELEdBQUssQ0FBQ0YsVUFBVSxHQUFHLFFBQ3ZCLEdBRDZCLENBQUM7UUFDdEIsR0FBRyxDQUFDTCxXQUFXLEdBQUdDLFVBQVUsR0FBR0EsVUFBVSxHQUFHLElBQUk7UUFDaERELFdBQVcsQ0FDTlUsUUFBUSxDQUFDLENBQUM7WUFDUEMsTUFBTSxFQUFFLENBQVM7UUFDckIsQ0FBQyxFQUNBUixJQUFJLENBQUMsUUFBUSxDQUFQQyxDQUFDLEVBQUssQ0FBQztZQUNWSSxPQUFPLENBQUNJLEdBQUcsQ0FBQyxDQUFHLElBQUVSLENBQUM7WUFDbEJOLFVBQVUsQ0FBQ00sQ0FBQztRQUNoQixDQUFDLEVBQ0FFLEtBQUssQ0FBQyxRQUFRLENBQVBDLENBQUMsRUFBSyxDQUFDO1lBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLENBQVUsV0FBRUYsQ0FBQztRQUMvQixDQUFDO0lBQ1QsQ0FBQztJQUVELEdBQUssQ0FBQ00sa0JBQWtCLEdBQUcsUUFDL0IsR0FEcUMsQ0FBQztRQUM5QkMsT0FBTyxDQUFDQyxJQUFJLENBQUMsQ0FBWTtJQUM3QixDQUFDO0lBQ0QsTUFBTSw2RUFDRHZCLHVEQUFjOztZQUVQSyxPQUFPLElBQUlBLE9BQU8sQ0FBQ29CLE1BQU0sR0FBSSxDQUFDLElBQUtwQixPQUFPLENBQUNxQixHQUFHLENBQUNDLFFBQVEsQ0FBUkEsSUFBSSxFQUFJLENBQUM7Z0JBQ3BELE1BQU0sNkVBQ0R4QixpREFBSTtvQkFBQ3lCLE9BQU8sRUFBRVAsa0JBQWtCOzBHQUM1QmxCLHNEQUFTO2tDQUNMd0IsSUFBSSxDQUFDdEIsT0FBTzs7Ozs7Ozs7Ozs7WUFJN0IsQ0FBQztZQUdEQSxPQUFPLElBQUlBLE9BQU8sQ0FBQ29CLE1BQU0sS0FBSyxDQUFDLGdGQUM5QnZCLHNEQUFTO2dCQUFDNEIsU0FBUyxFQUFDLENBQVE7O2dHQUN4QjNCLGlEQUFJOzhHQUNBQSxzREFBUztrSEFDTEEscURBQVE7Z0NBQUM2QixPQUFPLEVBQUMsQ0FBSztnQ0FBQ0MsR0FBRyxFQUFDLENBQTZDOzs7Ozs7Ozs7Ozs7Ozs7O2dHQUdoRjlCLGlEQUFJOzhHQUNBQSxzREFBUzs0QkFBQ3lCLE9BQU8sRUFBRXJCLGFBQWE7a0hBQzVCSixxREFBUTtnQ0FBQzZCLE9BQU8sRUFBQyxDQUFLO2dDQUFDQyxHQUFHLEVBQUMsQ0FBaUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Z0dBR3BGOUIsaURBQUk7OEdBQ0FBLHNEQUFTO2tIQUNMQSxxREFBUTtnQ0FBQzZCLE9BQU8sRUFBQyxDQUFLO2dDQUFDQyxHQUFHLEVBQUMsQ0FBaUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRekcsQ0FBQztHQXZFdUI3QixZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2F1dGhlbnRpY2F0ZS5qcz82YmNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2FyZEdyb3VwLCBDYXJkIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXV0aGVudGljYXRlKCkge1xuICAgIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IGNvbm5lY3RXYWxsZXQgPSAoYWRkcmVzcykgPT4ge1xuICAgICAgICBsZXQgX0FsZ29TaWduZXIgPSBBbGdvU2lnbmVyIHx8IG51bGxcbiAgICAgICAgaWYgKF9BbGdvU2lnbmVyKSB7XG4gICAgICAgICAgICBfQWxnb1NpZ25lclxuICAgICAgICAgICAgICAgIC5jb25uZWN0KClcbiAgICAgICAgICAgICAgICAudGhlbigoZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBnZXRBY2NvdW50KClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldEFjY291bnQgPSAoKSA9PiB7XG4gICAgICAgIGxldCBfQWxnb1NpZ25lciA9IEFsZ29TaWduZXIgPyBBbGdvU2lnbmVyIDogbnVsbFxuICAgICAgICBfQWxnb1NpZ25lclxuICAgICAgICAgICAgLmFjY291bnRzKHtcbiAgICAgICAgICAgICAgICBsZWRnZXI6ICdUZXN0TmV0JyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkJywgZCk7XG4gICAgICAgICAgICAgICAgc2V0QWRkcmVzcyhkKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yLi4uJywgZSlcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgbmF2aWdhdGVUb0RhaGJvYXJkID0gKCkgPT4ge1xuICAgICAgICBoaXN0b3J5LnB1c2goJy9kYXNoYm9hcmQnKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFkZHJlc3MgJiYgYWRkcmVzcy5sZW5ndGggID4gMCAmJiAgYWRkcmVzcy5tYXAoYWRkciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBvbkNsaWNrPXtuYXZpZ2F0ZVRvRGFoYm9hcmR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthZGRyLmFkZHJlc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzICYmIGFkZHJlc3MubGVuZ3RoID09PSAwICYmXG4gICAgICAgICAgICAgICAgPENhcmRHcm91cCBjbGFzc05hbWU9XCJkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkltZyB2YXJpYW50PVwidG9wXCIgc3JjPVwiaHR0cHM6Ly9hbGdvZ2Vtcy5pby9pbWcvbXlhbGdvLjYwNzliODA3LnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHkgb25DbGljaz17Y29ubmVjdFdhbGxldH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSW1nIHZhcmlhbnQ9XCJ0b3BcIiBzcmM9XCJodHRwczovL2FsZ29nZW1zLmlvL2ltZy9hbGdvc2lnbmVyLjJiMDJjODg1LnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSW1nIHZhcmlhbnQ9XCJ0b3BcIiBzcmM9XCJodHRwczovL2FsZ29nZW1zLmlvL2ltZy9hbGdvd2FsbGV0LjBlZDY0NjNhLnN2Z1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgIDwvQ2FyZEdyb3VwPlxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDYXJkR3JvdXAiLCJDYXJkIiwiYXV0aGVudGljYXRlIiwiYWRkcmVzcyIsInNldEFkZHJlc3MiLCJjb25uZWN0V2FsbGV0IiwiX0FsZ29TaWduZXIiLCJBbGdvU2lnbmVyIiwiY29ubmVjdCIsInRoZW4iLCJkIiwiZ2V0QWNjb3VudCIsImNhdGNoIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImFjY291bnRzIiwibGVkZ2VyIiwibG9nIiwibmF2aWdhdGVUb0RhaGJvYXJkIiwiaGlzdG9yeSIsInB1c2giLCJGcmFnbWVudCIsImxlbmd0aCIsIm1hcCIsImFkZHIiLCJvbkNsaWNrIiwiQm9keSIsImNsYXNzTmFtZSIsIkltZyIsInZhcmlhbnQiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/authenticate.js\n");

/***/ })

});