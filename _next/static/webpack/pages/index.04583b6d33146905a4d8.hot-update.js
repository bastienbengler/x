webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/FileManager/FileManager.tsx":
/*!*******************************************************!*\
  !*** ./components/System/FileManager/FileManager.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! path */ \"./node_modules/node-libs-browser/node_modules/path-browserify/index.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _contexts_FileSystem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/contexts/FileSystem */ \"./contexts/FileSystem.tsx\");\n/* harmony import */ var _utils_filemanager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/filemanager */ \"./utils/filemanager.ts\");\n/* harmony import */ var _contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/contexts/ProcessManager */ \"./contexts/ProcessManager.tsx\");\n/* harmony import */ var _contexts_SessionManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/contexts/SessionManager */ \"./contexts/SessionManager.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/events */ \"./utils/events.ts\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/dustin/Git/x/components/System/FileManager/FileManager.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nvar FileManager = function FileManager(_ref) {\n  _s();\n\n  var directoryPath = _ref.path,\n      render = _ref.render,\n      _ref$details = _ref.details,\n      details = _ref$details === void 0 ? false : _ref$details,\n      onChange = _ref.onChange;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_10__[\"useState\"])(directoryPath),\n      cwd = _useState[0],\n      cd = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_10__[\"useState\"])([]),\n      entries = _useState2[0],\n      setEntries = _useState2[1];\n\n  var fs = Object(react__WEBPACK_IMPORTED_MODULE_10__[\"useContext\"])(_contexts_FileSystem__WEBPACK_IMPORTED_MODULE_6__[\"FileContext\"]);\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_10__[\"useContext\"])(_contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_8__[\"ProcessContext\"]),\n      load = _useContext.load,\n      open = _useContext.open,\n      restore = _useContext.restore;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_10__[\"useContext\"])(_contexts_SessionManager__WEBPACK_IMPORTED_MODULE_9__[\"SessionContext\"]),\n      foreground = _useContext2.foreground,\n      getState = _useContext2.getState;\n\n  var fileDropHandler = Object(_utils_events__WEBPACK_IMPORTED_MODULE_11__[\"useFileDrop\"])( /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(dragEvent, file) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              load(file, getState({\n                name: file.name\n              }), dragEvent.target);\n              fs.writeFile(\"\".concat(cwd, \"/\").concat(file.name), file);\n              _context.t0 = setEntries;\n              _context.t1 = [];\n              _context.t2 = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(entries);\n              _context.next = 7;\n              return Object(_utils_filemanager__WEBPACK_IMPORTED_MODULE_7__[\"getDirectoryEntry\"])(fs, cwd, file.name, details);\n\n            case 7:\n              _context.t3 = _context.sent;\n              _context.t4 = [_context.t3];\n              _context.t5 = _context.t1.concat.call(_context.t1, _context.t2, _context.t4);\n              (0, _context.t0)(_context.t5);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x, _x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }());\n\n  var onDoubleClick = function onDoubleClick(_ref3) {\n    var path = _ref3.path,\n        url = _ref3.url,\n        _ref3$icon = _ref3.icon,\n        icon = _ref3$icon === void 0 ? '' : _ref3$icon,\n        _ref3$name = _ref3.name,\n        name = _ref3$name === void 0 ? '' : _ref3$name;\n    return function (event) {\n      if (path && !path.includes('.url') && (path === '..' || !Object(path__WEBPACK_IMPORTED_MODULE_5__[\"extname\"])(path))) {\n        cd(path === '..' ? Object(path__WEBPACK_IMPORTED_MODULE_5__[\"resolve\"])(cwd, '..') : path);\n      } else {\n        var processsId = open({\n          url: url || path || '',\n          icon: icon,\n          name: name\n        }, getState({\n          name: name\n        }), event.currentTarget); // restore(processsId, 'minimized');\n\n        foreground(processsId);\n        onChange === null || onChange === void 0 ? void 0 : onChange();\n      }\n    };\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_10__[\"useEffect\"])(function () {\n    Object(_utils_filemanager__WEBPACK_IMPORTED_MODULE_7__[\"getDirectory\"])(fs, cwd, details, setEntries);\n    onChange === null || onChange === void 0 ? void 0 : onChange(cwd);\n  }, [fs, cwd]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"article\", _objectSpread(_objectSpread({}, fileDropHandler), {}, {\n    children: render({\n      entries: entries,\n      onDoubleClick: onDoubleClick,\n      cwd: cwd\n    })\n  }), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(FileManager, \"3e1cDAFmQbjnmlx2WbgzGQvV57A=\", false, function () {\n  return [_utils_events__WEBPACK_IMPORTED_MODULE_11__[\"useFileDrop\"]];\n});\n\n_c = FileManager;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FileManager);\n\nvar _c;\n\n$RefreshReg$(_c, \"FileManager\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vRmlsZU1hbmFnZXIvRmlsZU1hbmFnZXIudHN4PzFlMTUiXSwibmFtZXMiOlsiRmlsZU1hbmFnZXIiLCJkaXJlY3RvcnlQYXRoIiwicGF0aCIsInJlbmRlciIsImRldGFpbHMiLCJvbkNoYW5nZSIsInVzZVN0YXRlIiwiY3dkIiwiY2QiLCJlbnRyaWVzIiwic2V0RW50cmllcyIsImZzIiwidXNlQ29udGV4dCIsIkZpbGVDb250ZXh0IiwiUHJvY2Vzc0NvbnRleHQiLCJsb2FkIiwib3BlbiIsInJlc3RvcmUiLCJTZXNzaW9uQ29udGV4dCIsImZvcmVncm91bmQiLCJnZXRTdGF0ZSIsImZpbGVEcm9wSGFuZGxlciIsInVzZUZpbGVEcm9wIiwiZHJhZ0V2ZW50IiwiZmlsZSIsIm5hbWUiLCJ0YXJnZXQiLCJ3cml0ZUZpbGUiLCJnZXREaXJlY3RvcnlFbnRyeSIsIm9uRG91YmxlQ2xpY2siLCJ1cmwiLCJpY29uIiwiZXZlbnQiLCJpbmNsdWRlcyIsImV4dG5hbWUiLCJyZXNvbHZlIiwicHJvY2Vzc3NJZCIsImN1cnJlbnRUYXJnZXQiLCJ1c2VFZmZlY3QiLCJnZXREaXJlY3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFvQyxHQUFHLFNBQXZDQSxXQUF1QyxPQUt2QztBQUFBOztBQUFBLE1BSkVDLGFBSUYsUUFKSkMsSUFJSTtBQUFBLE1BSEpDLE1BR0ksUUFISkEsTUFHSTtBQUFBLDBCQUZKQyxPQUVJO0FBQUEsTUFGSkEsT0FFSSw2QkFGTSxLQUVOO0FBQUEsTUFESkMsUUFDSSxRQURKQSxRQUNJOztBQUFBLGtCQUNjQyx1REFBUSxDQUFDTCxhQUFELENBRHRCO0FBQUEsTUFDR00sR0FESDtBQUFBLE1BQ1FDLEVBRFI7O0FBQUEsbUJBRTBCRix1REFBUSxDQUFtQixF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QUtBLHNCQUNFLGdIQUFhYyxlQUFiO0FBQUEsY0FDR2xCLE1BQU0sQ0FBQztBQUFFTSxhQUFPLEVBQVBBLE9BQUY7QUFBV29CLG1CQUFhLEVBQWJBLGFBQVg7QUFBMEJ0QixTQUFHLEVBQUhBO0FBQTFCLEtBQUQ7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQWpERDs7R0FBTVAsVztVQVdvQnNCLDBEOzs7S0FYcEJ0QixXO0FBbURTQSwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU3lzdGVtL0ZpbGVNYW5hZ2VyL0ZpbGVNYW5hZ2VyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtcbiAgRGlyZWN0b3J5RW50cnksXG4gIERpcmVjdG9yeUVudHJ5RG91YmxlQ2xpY2ssXG4gIERpcmVjdG9yeVR5cGVcbn0gZnJvbSAnQC90eXBlcy9jb21wb25lbnRzL1N5c3RlbS9GaWxlTWFuYWdlci9GaWxlTWFuYWdlcic7XG5cbmltcG9ydCB7IGV4dG5hbWUsIHJlc29sdmUgfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IEZpbGVDb250ZXh0IH0gZnJvbSAnQC9jb250ZXh0cy9GaWxlU3lzdGVtJztcbmltcG9ydCB7IGdldERpcmVjdG9yeSwgZ2V0RGlyZWN0b3J5RW50cnkgfSBmcm9tICdAL3V0aWxzL2ZpbGVtYW5hZ2VyJztcbmltcG9ydCB7IFByb2Nlc3NDb250ZXh0IH0gZnJvbSAnQC9jb250ZXh0cy9Qcm9jZXNzTWFuYWdlcic7XG5pbXBvcnQgeyBTZXNzaW9uQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dHMvU2Vzc2lvbk1hbmFnZXInO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUZpbGVEcm9wIH0gZnJvbSAnQC91dGlscy9ldmVudHMnO1xuXG5jb25zdCBGaWxlTWFuYWdlcjogUmVhY3QuRkM8RGlyZWN0b3J5VHlwZT4gPSAoe1xuICBwYXRoOiBkaXJlY3RvcnlQYXRoLFxuICByZW5kZXIsXG4gIGRldGFpbHMgPSBmYWxzZSxcbiAgb25DaGFuZ2Vcbn0pID0+IHtcbiAgY29uc3QgW2N3ZCwgY2RdID0gdXNlU3RhdGUoZGlyZWN0b3J5UGF0aCk7XG4gIGNvbnN0IFtlbnRyaWVzLCBzZXRFbnRyaWVzXSA9IHVzZVN0YXRlPERpcmVjdG9yeUVudHJ5W10+KFtdKTtcbiAgY29uc3QgZnMgPSB1c2VDb250ZXh0KEZpbGVDb250ZXh0KTtcbiAgY29uc3QgeyBsb2FkLCBvcGVuLCByZXN0b3JlIH0gPSB1c2VDb250ZXh0KFByb2Nlc3NDb250ZXh0KTtcbiAgY29uc3QgeyBmb3JlZ3JvdW5kLCBnZXRTdGF0ZSB9ID0gdXNlQ29udGV4dChTZXNzaW9uQ29udGV4dCk7XG4gIGNvbnN0IGZpbGVEcm9wSGFuZGxlciA9IHVzZUZpbGVEcm9wKGFzeW5jIChkcmFnRXZlbnQsIGZpbGUpID0+IHtcbiAgICBsb2FkKGZpbGUsIGdldFN0YXRlKHsgbmFtZTogZmlsZS5uYW1lIH0pLCBkcmFnRXZlbnQudGFyZ2V0KTtcbiAgICBmcy53cml0ZUZpbGUoYCR7Y3dkfS8ke2ZpbGUubmFtZX1gLCBmaWxlKTtcbiAgICBzZXRFbnRyaWVzKFtcbiAgICAgIC4uLmVudHJpZXMsXG4gICAgICBhd2FpdCBnZXREaXJlY3RvcnlFbnRyeShmcywgY3dkLCBmaWxlLm5hbWUsIGRldGFpbHMpXG4gICAgXSk7XG4gIH0pO1xuICBjb25zdCBvbkRvdWJsZUNsaWNrID0gKHtcbiAgICBwYXRoLFxuICAgIHVybCxcbiAgICBpY29uID0gJycsXG4gICAgbmFtZSA9ICcnXG4gIH06IERpcmVjdG9yeUVudHJ5RG91YmxlQ2xpY2spID0+IChldmVudDogUmVhY3QuTW91c2VFdmVudDxFbGVtZW50PikgPT4ge1xuICAgIGlmIChwYXRoICYmICFwYXRoLmluY2x1ZGVzKCcudXJsJykgJiYgKHBhdGggPT09ICcuLicgfHwgIWV4dG5hbWUocGF0aCkpKSB7XG4gICAgICBjZChwYXRoID09PSAnLi4nID8gcmVzb2x2ZShjd2QsICcuLicpIDogcGF0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByb2Nlc3NzSWQgPSBvcGVuKFxuICAgICAgICB7IHVybDogdXJsIHx8IHBhdGggfHwgJycsIGljb24sIG5hbWUgfSxcbiAgICAgICAgZ2V0U3RhdGUoeyBuYW1lIH0pLFxuICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0XG4gICAgICApO1xuICAgICAgLy8gcmVzdG9yZShwcm9jZXNzc0lkLCAnbWluaW1pemVkJyk7XG4gICAgICBmb3JlZ3JvdW5kKHByb2Nlc3NzSWQpO1xuICAgICAgb25DaGFuZ2U/LigpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldERpcmVjdG9yeShmcywgY3dkLCBkZXRhaWxzLCBzZXRFbnRyaWVzKTtcbiAgICBvbkNoYW5nZT8uKGN3ZCk7XG4gIH0sIFtmcywgY3dkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8YXJ0aWNsZSB7Li4uZmlsZURyb3BIYW5kbGVyfT5cbiAgICAgIHtyZW5kZXIoeyBlbnRyaWVzLCBvbkRvdWJsZUNsaWNrLCBjd2QgfSl9XG4gICAgPC9hcnRpY2xlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsZU1hbmFnZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/System/FileManager/FileManager.tsx\n");

/***/ })

})