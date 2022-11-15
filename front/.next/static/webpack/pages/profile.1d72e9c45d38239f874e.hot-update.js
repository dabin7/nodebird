webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/FollowList.js":
/*!**********************************!*\
  !*** ./components/FollowList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _this = undefined,
  _jsxFileName = "C:\\Users\\\uC815\uB2E4\uBE48\\Desktop\\nodebird\\front\\components\\FollowList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var FollowList = function FollowList(_ref) {
  var header = _ref.header,
    data = _ref.data;
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
    style: {
      marginBottom: 20
    },
    grid: {
      gutter: 4,
      xs: 2,
      md: 3
    },
    size: "small",
    header: __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 15
      }
    }, header),
    loadMore: __jsx("div", {
      style: {
        textAlign: 'center',
        margin: '10px 0'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }
    }, __jsx(Button, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }
    }, "\uB354 \uBCF4\uAE30")),
    bordered: true,
    dataSource: data,
    renderItem: function renderItem(item) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
        style: {
          marginTop: 20
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 9
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        actions: [__jsx("stopOutlined", {
          key: "stop",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 27
          }
        })],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
        description: item.nickname,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }
      })));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  });
};
_c = FollowList;
/* harmony default export */ __webpack_exports__["default"] = (FollowList);
var _c;
$RefreshReg$(_c, "FollowList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LmpzIl0sIm5hbWVzIjpbIkZvbGxvd0xpc3QiLCJoZWFkZXIiLCJkYXRhIiwibWFyZ2luQm90dG9tIiwiZ3V0dGVyIiwieHMiLCJtZCIsInRleHRBbGlnbiIsIm1hcmdpbiIsIml0ZW0iLCJtYXJnaW5Ub3AiLCJuaWNrbmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDUTtBQUVsQyxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBVSxPQUF5QjtFQUFBLElBQW5CQyxNQUFNLFFBQU5BLE1BQU07SUFBRUMsSUFBSSxRQUFKQSxJQUFJO0VBQ2hDLE9BQ0UsTUFBQyx5Q0FBSTtJQUNILEtBQUssRUFBRTtNQUFFQyxZQUFZLEVBQUU7SUFBRyxDQUFFO0lBQzVCLElBQUksRUFBRTtNQUFFQyxNQUFNLEVBQUUsQ0FBQztNQUFFQyxFQUFFLEVBQUUsQ0FBQztNQUFFQyxFQUFFLEVBQUU7SUFBRSxDQUFFO0lBQ2xDLElBQUksRUFBQyxPQUFPO0lBQ1osTUFBTSxFQUFFO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsR0FBTUwsTUFBTSxDQUFRO0lBQzVCLFFBQVEsRUFDTjtNQUFLLEtBQUssRUFBRTtRQUFFTSxTQUFTLEVBQUUsUUFBUTtRQUFFQyxNQUFNLEVBQUU7TUFBUyxDQUFFO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsR0FDcEQsTUFBQyxNQUFNO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEseUJBQWMsQ0FFeEI7SUFDRCxRQUFRO0lBQ1IsVUFBVSxFQUFFTixJQUFLO0lBQ2pCLFVBQVUsRUFBRSxvQkFBQ08sSUFBSTtNQUFBLE9BQ2YsTUFBQyx5Q0FBSSxDQUFDLElBQUk7UUFBQyxLQUFLLEVBQUU7VUFBRUMsU0FBUyxFQUFFO1FBQUcsQ0FBRTtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQ2xDLE1BQUMseUNBQUk7UUFBQyxPQUFPLEVBQUUsQ0FBQztVQUFjLEdBQUcsRUFBQyxNQUFNO1VBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBO1FBQUEsRUFBRyxDQUFFO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsR0FDM0MsTUFBQyx5Q0FBSSxDQUFDLElBQUk7UUFBQyxXQUFXLEVBQUVELElBQUksQ0FBQ0UsUUFBUztRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEVBQUcsQ0FDcEMsQ0FDRztJQUFBLENBQ1o7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUNGO0FBRU4sQ0FBQztBQUFDLEtBdkJJWCxVQUFVO0FBeUJEQSx5RUFBVSxFQUFDO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjFkNzJlOWM0NWQzODIzOWY4NzRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDYXJkLCBMaXN0IH0gZnJvbSAnYW50ZCc7XHJcblxyXG5jb25zdCBGb2xsb3dMaXN0ID0gKHsgaGVhZGVyLCBkYXRhIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpc3RcclxuICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fVxyXG4gICAgICBncmlkPXt7IGd1dHRlcjogNCwgeHM6IDIsIG1kOiAzIH19XHJcbiAgICAgIHNpemU9J3NtYWxsJ1xyXG4gICAgICBoZWFkZXI9ezxkaXY+e2hlYWRlcn08L2Rpdj59XHJcbiAgICAgIGxvYWRNb3JlPXtcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpbjogJzEwcHggMCcgfX0+XHJcbiAgICAgICAgICA8QnV0dG9uPuuNlCDrs7TquLA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgfVxyXG4gICAgICBib3JkZXJlZFxyXG4gICAgICBkYXRhU291cmNlPXtkYXRhfVxyXG4gICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxyXG4gICAgICAgIDxMaXN0Lkl0ZW0gc3R5bGU9e3sgbWFyZ2luVG9wOiAyMCB9fT5cclxuICAgICAgICAgIDxDYXJkIGFjdGlvbnM9e1s8c3RvcE91dGxpbmVkIGtleT0nc3RvcCcgLz5dfT5cclxuICAgICAgICAgICAgPENhcmQuTWV0YSBkZXNjcmlwdGlvbj17aXRlbS5uaWNrbmFtZX0gLz5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgKX1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd0xpc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=