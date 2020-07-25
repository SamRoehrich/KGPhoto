webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ \"./node_modules/@material-ui/styles/esm/index.js\");\n/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Instagram */ \"./node_modules/@material-ui/icons/Instagram.js\");\n/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Menu */ \"./node_modules/@material-ui/icons/Menu.js\");\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/sam/Desktop/another-app/components/Header.jsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function () {\n  return {\n    textStyles: {\n      color: \"rgba(0, 0, 0, 0.87)\",\n      // marginLeft: \"60px\",\n      margin: \"0 auto\",\n      fontWeight: 500\n    }\n  };\n});\n\nfunction handleInstaIconClick() {\n  window.open(\"https://www.instagram.com/kylegarrettphoto/\");\n}\n\nvar Header = function Header() {\n  _s();\n\n  var classes = useStyles();\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"AppBar\"], {\n    position: \"static\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Toolbar\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    onClick: handleInstaIconClick,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    color: \"action\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 11\n    }\n  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    className: classes.textStyles,\n    variant: \"h5\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, \"Kyle Garrett Photography\"), __jsx(DropDownMenu, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(Header, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Header;\n\nvar DropDownMenu = function DropDownMenu() {\n  _s2();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  function handleBurgerIconClick(event) {\n    setOpen(event.currentTarget);\n  }\n\n  return __jsx(\"div\", {\n    onClick: handleBurgerIconClick(e),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    color: \"action\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s2(DropDownMenu, \"3gHT60S3lHEhyYybFcB05ha95j4=\");\n\n_c2 = DropDownMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c2, \"DropDownMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qc3g/MGEwOCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGV4dFN0eWxlcyIsImNvbG9yIiwibWFyZ2luIiwiZm9udFdlaWdodCIsImhhbmRsZUluc3RhSWNvbkNsaWNrIiwid2luZG93Iiwib3BlbiIsIkhlYWRlciIsImNsYXNzZXMiLCJEcm9wRG93bk1lbnUiLCJ1c2VTdGF0ZSIsInNldE9wZW4iLCJoYW5kbGVCdXJnZXJJY29uQ2xpY2siLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msc0VBQVUsQ0FBQztBQUFBLFNBQU87QUFDbENDLGNBQVUsRUFBRTtBQUNWQyxXQUFLLEVBQUUscUJBREc7QUFFVjtBQUNBQyxZQUFNLEVBQUUsUUFIRTtBQUlWQyxnQkFBVSxFQUFFO0FBSkY7QUFEc0IsR0FBUDtBQUFBLENBQUQsQ0FBNUI7O0FBU0EsU0FBU0Msb0JBQVQsR0FBZ0M7QUFDOUJDLFFBQU0sQ0FBQ0MsSUFBUCxDQUFZLDZDQUFaO0FBQ0Q7O0FBRUQsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNuQixNQUFNQyxPQUFPLEdBQUdWLFNBQVMsRUFBekI7QUFDQSxTQUNFLE1BQUMsd0RBQUQ7QUFBUSxZQUFRLEVBQUMsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsV0FBTyxFQUFFTSxvQkFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtRUFBRDtBQUFlLFNBQUssRUFBQyxRQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFLE1BQUMsNERBQUQ7QUFBWSxhQUFTLEVBQUVJLE9BQU8sQ0FBQ1IsVUFBL0I7QUFBMkMsV0FBTyxFQUFDLElBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBSkYsRUFPRSxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLENBREYsQ0FERjtBQWFELENBZkQ7O0dBQU1PLE07VUFDWVQsUzs7O0tBRFpTLE07O0FBaUJOLElBQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFBQSxrQkFDREMsc0RBQVEsQ0FBQyxJQUFELENBRFA7QUFBQSxNQUNsQkosSUFEa0I7QUFBQSxNQUNaSyxPQURZOztBQUd6QixXQUFTQyxxQkFBVCxDQUErQkMsS0FBL0IsRUFBc0M7QUFDcENGLFdBQU8sQ0FBQ0UsS0FBSyxDQUFDQyxhQUFQLENBQVA7QUFDRDs7QUFFRCxTQUNFO0FBQUssV0FBTyxFQUFFRixxQkFBcUIsQ0FBQ0csQ0FBRCxDQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRDtBQUFVLFNBQUssRUFBQyxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERjtBQUtELENBWkQ7O0lBQU1OLFk7O01BQUFBLFk7QUFjU0YscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBCYXIsIFRvb2xiYXIsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiO1xuaW1wb3J0IEluc3RhZ3JhbUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9JbnN0YWdyYW1cIjtcbmltcG9ydCBNZW51SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gKHtcbiAgdGV4dFN0eWxlczoge1xuICAgIGNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC44NylcIixcbiAgICAvLyBtYXJnaW5MZWZ0OiBcIjYwcHhcIixcbiAgICBtYXJnaW46IFwiMCBhdXRvXCIsXG4gICAgZm9udFdlaWdodDogNTAwLFxuICB9LFxufSkpO1xuXG5mdW5jdGlvbiBoYW5kbGVJbnN0YUljb25DbGljaygpIHtcbiAgd2luZG93Lm9wZW4oXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2t5bGVnYXJyZXR0cGhvdG8vXCIpO1xufVxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgcmV0dXJuIChcbiAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCI+XG4gICAgICA8VG9vbGJhcj5cbiAgICAgICAgPGEgb25DbGljaz17aGFuZGxlSW5zdGFJY29uQ2xpY2t9PlxuICAgICAgICAgIDxJbnN0YWdyYW1JY29uIGNvbG9yPVwiYWN0aW9uXCIgLz5cbiAgICAgICAgPC9hPlxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dFN0eWxlc30gdmFyaWFudD1cImg1XCI+XG4gICAgICAgICAgS3lsZSBHYXJyZXR0IFBob3RvZ3JhcGh5XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPERyb3BEb3duTWVudSAvPlxuICAgICAgPC9Ub29sYmFyPlxuICAgIDwvQXBwQmFyPlxuICApO1xufTtcblxuY29uc3QgRHJvcERvd25NZW51ID0gKCkgPT4ge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBmdW5jdGlvbiBoYW5kbGVCdXJnZXJJY29uQ2xpY2soZXZlbnQpIHtcbiAgICBzZXRPcGVuKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IG9uQ2xpY2s9e2hhbmRsZUJ1cmdlckljb25DbGljayhlKX0+XG4gICAgICA8TWVudUljb24gY29sb3I9XCJhY3Rpb25cIiAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.jsx\n");

/***/ })

})