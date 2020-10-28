webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/FileManager/FileManager.tsx":
/*!*******************************************************!*\
  !*** ./components/System/FileManager/FileManager.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! path */ \"./node_modules/node-libs-browser/node_modules/path-browserify/index.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _contexts_FileSystem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/contexts/FileSystem */ \"./contexts/FileSystem.tsx\");\n/* harmony import */ var _utils_filemanager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/filemanager */ \"./utils/filemanager.ts\");\n/* harmony import */ var _contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/contexts/ProcessManager */ \"./contexts/ProcessManager.tsx\");\n/* harmony import */ var _contexts_SessionManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/contexts/SessionManager */ \"./contexts/SessionManager.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/events */ \"./utils/events.ts\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/dustin/Git/x/components/System/FileManager/FileManager.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nvar FileManager = function FileManager(_ref) {\n  _s();\n\n  var directoryPath = _ref.path,\n      render = _ref.render,\n      _ref$details = _ref.details,\n      details = _ref$details === void 0 ? false : _ref$details,\n      onChange = _ref.onChange;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_10__[\"useState\"])(directoryPath),\n      cwd = _useState[0],\n      cd = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_10__[\"useState\"])([]),\n      entries = _useState2[0],\n      setEntries = _useState2[1];\n\n  var fs = Object(react__WEBPACK_IMPORTED_MODULE_10__[\"useContext\"])(_contexts_FileSystem__WEBPACK_IMPORTED_MODULE_6__[\"FileContext\"]);\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_10__[\"useContext\"])(_contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_8__[\"ProcessContext\"]),\n      load = _useContext.load,\n      open = _useContext.open;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_10__[\"useContext\"])(_contexts_SessionManager__WEBPACK_IMPORTED_MODULE_9__[\"SessionContext\"]),\n      foreground = _useContext2.foreground,\n      getState = _useContext2.getState;\n\n  var fileDropHandler = Object(_utils_events__WEBPACK_IMPORTED_MODULE_11__[\"useFileDrop\"])( /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(dragEvent, file) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              load(file, getState({\n                name: file.name\n              }), dragEvent.target);\n              fs.writeFile(\"\".concat(cwd, \"/\").concat(file.name), file);\n              _context.t0 = setEntries;\n              _context.t1 = [];\n              _context.t2 = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(entries);\n              _context.next = 7;\n              return Object(_utils_filemanager__WEBPACK_IMPORTED_MODULE_7__[\"getDirectoryEntry\"])(fs, cwd, file.name, details);\n\n            case 7:\n              _context.t3 = _context.sent;\n              _context.t4 = [_context.t3];\n              _context.t5 = _context.t1.concat.call(_context.t1, _context.t2, _context.t4);\n              (0, _context.t0)(_context.t5);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x, _x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }());\n\n  var onDoubleClick = function onDoubleClick(_ref3) {\n    var path = _ref3.path,\n        url = _ref3.url,\n        _ref3$icon = _ref3.icon,\n        icon = _ref3$icon === void 0 ? '' : _ref3$icon,\n        _ref3$name = _ref3.name,\n        name = _ref3$name === void 0 ? '' : _ref3$name;\n    return function (event) {\n      if (path && !path.includes('.url') && (path === '..' || !Object(path__WEBPACK_IMPORTED_MODULE_5__[\"extname\"])(path))) {\n        cd(path === '..' ? Object(path__WEBPACK_IMPORTED_MODULE_5__[\"resolve\"])(cwd, '..') : path);\n      } else {\n        var processsId = open({\n          url: url || path || '',\n          icon: icon,\n          name: name\n        }, getState({\n          name: name\n        }), event.currentTarget);\n        foreground(processsId);\n        onChange === null || onChange === void 0 ? void 0 : onChange();\n      }\n    };\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_10__[\"useEffect\"])(function () {\n    Object(_utils_filemanager__WEBPACK_IMPORTED_MODULE_7__[\"getDirectory\"])(fs, cwd, details, setEntries);\n    onChange === null || onChange === void 0 ? void 0 : onChange(cwd);\n  }, [fs, cwd]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"article\", _objectSpread(_objectSpread({}, fileDropHandler), {}, {\n    children: render({\n      entries: entries,\n      onDoubleClick: onDoubleClick,\n      cwd: cwd\n    })\n  }), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(FileManager, \"4VDrHYONNtsD41hgVm0wT0TVCyo=\", false, function () {\n  return [_utils_events__WEBPACK_IMPORTED_MODULE_11__[\"useFileDrop\"]];\n});\n\n_c = FileManager;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FileManager);\n\nvar _c;\n\n$RefreshReg$(_c, \"FileManager\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vRmlsZU1hbmFnZXIvRmlsZU1hbmFnZXIudHN4PzFlMTUiXSwibmFtZXMiOlsiRmlsZU1hbmFnZXIiLCJkaXJlY3RvcnlQYXRoIiwicGF0aCIsInJlbmRlciIsImRldGFpbHMiLCJvbkNoYW5nZSIsInVzZVN0YXRlIiwiY3dkIiwiY2QiLCJlbnRyaWVzIiwic2V0RW50cmllcyIsImZzIiwidXNlQ29udGV4dCIsIkZpbGVDb250ZXh0IiwiUHJvY2Vzc0NvbnRleHQiLCJsb2FkIiwib3BlbiIsIlNlc3Npb25Db250ZXh0IiwiZm9yZWdyb3VuZCIsImdldFN0YXRlIiwiZmlsZURyb3BIYW5kbGVyIiwidXNlRmlsZURyb3AiLCJkcmFnRXZlbnQiLCJmaWxlIiwibmFtZSIsInRhcmdldCIsIndyaXRlRmlsZSIsImdldERpcmVjdG9yeUVudHJ5Iiwib25Eb3VibGVDbGljayIsInVybCIsImljb24iLCJldmVudCIsImluY2x1ZGVzIiwiZXh0bmFtZSIsInJlc29sdmUiLCJwcm9jZXNzc0lkIiwiY3VycmVudFRhcmdldCIsInVzZUVmZmVjdCIsImdldERpcmVjdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQW9DLEdBQUcsU0FBdkNBLFdBQXVDLE9BS3ZDO0FBQUE7O0FBQUEsTUFKRUMsYUFJRixRQUpKQyxJQUlJO0FBQUEsTUFISkMsTUFHSSxRQUhKQSxNQUdJO0FBQUEsMEJBRkpDLE9BRUk7QUFBQSxNQUZKQSxPQUVJLDZCQUZNLEtBRU47QUFBQSxNQURKQyxRQUNJLFFBREpBLFFBQ0k7O0FBQUEsa0JBQ2NDLHVEQUFRLENBQUNMLGFBQUQsQ0FEdEI7QUFBQSxNQUNHTSxHQURIO0FBQUEsTUFDUUMsRUFEUjs7QUFBQSxtQkFFMEJGLHVEQUFRLENBQW1CLEVBQW5CLENBRmxD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TyxFQUFQQSxPQUFGO0FBQVdtQixtQkFBYSxFQUFiQSxhQUFYO0FBQTBCckIsU0FBRyxFQUFIQTtBQUExQixLQUFEO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FoREQ7O0dBQU1QLFc7VUFXb0JxQiwwRDs7O0tBWHBCckIsVztBQWtEU0EsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1N5c3RlbS9GaWxlTWFuYWdlci9GaWxlTWFuYWdlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7XG4gIERpcmVjdG9yeUVudHJ5LFxuICBEaXJlY3RvcnlFbnRyeURvdWJsZUNsaWNrLFxuICBEaXJlY3RvcnlUeXBlXG59IGZyb20gJ0AvdHlwZXMvY29tcG9uZW50cy9TeXN0ZW0vRmlsZU1hbmFnZXIvRmlsZU1hbmFnZXInO1xuXG5pbXBvcnQgeyBleHRuYW1lLCByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBGaWxlQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dHMvRmlsZVN5c3RlbSc7XG5pbXBvcnQgeyBnZXREaXJlY3RvcnksIGdldERpcmVjdG9yeUVudHJ5IH0gZnJvbSAnQC91dGlscy9maWxlbWFuYWdlcic7XG5pbXBvcnQgeyBQcm9jZXNzQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dHMvUHJvY2Vzc01hbmFnZXInO1xuaW1wb3J0IHsgU2Vzc2lvbkNvbnRleHQgfSBmcm9tICdAL2NvbnRleHRzL1Nlc3Npb25NYW5hZ2VyJztcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGaWxlRHJvcCB9IGZyb20gJ0AvdXRpbHMvZXZlbnRzJztcblxuY29uc3QgRmlsZU1hbmFnZXI6IFJlYWN0LkZDPERpcmVjdG9yeVR5cGU+ID0gKHtcbiAgcGF0aDogZGlyZWN0b3J5UGF0aCxcbiAgcmVuZGVyLFxuICBkZXRhaWxzID0gZmFsc2UsXG4gIG9uQ2hhbmdlXG59KSA9PiB7XG4gIGNvbnN0IFtjd2QsIGNkXSA9IHVzZVN0YXRlKGRpcmVjdG9yeVBhdGgpO1xuICBjb25zdCBbZW50cmllcywgc2V0RW50cmllc10gPSB1c2VTdGF0ZTxEaXJlY3RvcnlFbnRyeVtdPihbXSk7XG4gIGNvbnN0IGZzID0gdXNlQ29udGV4dChGaWxlQ29udGV4dCk7XG4gIGNvbnN0IHsgbG9hZCwgb3BlbiB9ID0gdXNlQ29udGV4dChQcm9jZXNzQ29udGV4dCk7XG4gIGNvbnN0IHsgZm9yZWdyb3VuZCwgZ2V0U3RhdGUgfSA9IHVzZUNvbnRleHQoU2Vzc2lvbkNvbnRleHQpO1xuICBjb25zdCBmaWxlRHJvcEhhbmRsZXIgPSB1c2VGaWxlRHJvcChhc3luYyAoZHJhZ0V2ZW50LCBmaWxlKSA9PiB7XG4gICAgbG9hZChmaWxlLCBnZXRTdGF0ZSh7IG5hbWU6IGZpbGUubmFtZSB9KSwgZHJhZ0V2ZW50LnRhcmdldCk7XG4gICAgZnMud3JpdGVGaWxlKGAke2N3ZH0vJHtmaWxlLm5hbWV9YCwgZmlsZSk7XG4gICAgc2V0RW50cmllcyhbXG4gICAgICAuLi5lbnRyaWVzLFxuICAgICAgYXdhaXQgZ2V0RGlyZWN0b3J5RW50cnkoZnMsIGN3ZCwgZmlsZS5uYW1lLCBkZXRhaWxzKVxuICAgIF0pO1xuICB9KTtcbiAgY29uc3Qgb25Eb3VibGVDbGljayA9ICh7XG4gICAgcGF0aCxcbiAgICB1cmwsXG4gICAgaWNvbiA9ICcnLFxuICAgIG5hbWUgPSAnJ1xuICB9OiBEaXJlY3RvcnlFbnRyeURvdWJsZUNsaWNrKSA9PiAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8RWxlbWVudD4pID0+IHtcbiAgICBpZiAocGF0aCAmJiAhcGF0aC5pbmNsdWRlcygnLnVybCcpICYmIChwYXRoID09PSAnLi4nIHx8ICFleHRuYW1lKHBhdGgpKSkge1xuICAgICAgY2QocGF0aCA9PT0gJy4uJyA/IHJlc29sdmUoY3dkLCAnLi4nKSA6IHBhdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcm9jZXNzc0lkID0gb3BlbihcbiAgICAgICAgeyB1cmw6IHVybCB8fCBwYXRoIHx8ICcnLCBpY29uLCBuYW1lIH0sXG4gICAgICAgIGdldFN0YXRlKHsgbmFtZSB9KSxcbiAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldFxuICAgICAgKTtcbiAgICAgIGZvcmVncm91bmQocHJvY2Vzc3NJZCk7XG4gICAgICBvbkNoYW5nZT8uKCk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0RGlyZWN0b3J5KGZzLCBjd2QsIGRldGFpbHMsIHNldEVudHJpZXMpO1xuICAgIG9uQ2hhbmdlPy4oY3dkKTtcbiAgfSwgW2ZzLCBjd2RdKTtcblxuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlIHsuLi5maWxlRHJvcEhhbmRsZXJ9PlxuICAgICAge3JlbmRlcih7IGVudHJpZXMsIG9uRG91YmxlQ2xpY2ssIGN3ZCB9KX1cbiAgICA8L2FydGljbGU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWxlTWFuYWdlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/System/FileManager/FileManager.tsx\n");

/***/ })

})