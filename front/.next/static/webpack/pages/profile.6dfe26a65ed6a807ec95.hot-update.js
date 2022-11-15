webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);

var _templateObject,
  _templateObject2,
  _this = undefined,
  _jsxFileName = "C:\\Users\\\uC815\uB2E4\uBE48\\Desktop\\nodebird\\front\\components\\LoginForm.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-top: 10px;\n"]))); // 인라인스타일은 리렌더링되기 때문에 최적화를 위해 커스텀하게 바꿔줌
_c = ButtonWrapper;
var FormWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"])(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 10px;\n"])));
_c2 = FormWrapper;
var LoginForm = function LoginForm(_ref) {
  _s();
  var setIsLoggedIn = _ref.setIsLoggedIn;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
    id = _useState[0],
    setId = _useState[1];
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
    password = _useState2[0],
    setPassword = _useState2[1];
  var onChangeId = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setId(e.target.value);
  }, []);
  var onChangePassword = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setPassword(e.target.value);
  }, []);
  //컴포넌트에 props로 넘겨주는 함수는 useCallback해야 최적화가 된다

  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    console.log(id, password);
    setIsLoggedIn(true);
  }, [id, password]); //가상의 state 더미 데이터 setIsLoggedIn

  return __jsx(FormWrapper, {
    onFinish: onSubmitForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "user-id",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, "\uC544\uC774\uB514"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "user-id",
    value: id,
    onChange: onChangeId,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "user-password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "user-password",
    value: password,
    onChange: onChangePassword,
    required: true
    //required 제출시 반드시 채워져야하는
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  })), __jsx(ButtonWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, "\uB85C\uADF8\uC778"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/signup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx("button", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, "\uD68C\uC6D0\uAC00\uC785")))));
};
_s(LoginForm, "71+HE8XHzYDzU9jR9aPFdEuC8MA=");
_c3 = LoginForm;
LoginForm.propTypes = {
  setIsLoggedIn: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);
var _c, _c2, _c3;
$RefreshReg$(_c, "ButtonWrapper");
$RefreshReg$(_c2, "FormWrapper");
$RefreshReg$(_c3, "LoginForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiQnV0dG9uV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkZvcm1XcmFwcGVyIiwiRm9ybSIsIkxvZ2luRm9ybSIsInNldElzTG9nZ2VkSW4iLCJ1c2VTdGF0ZSIsImlkIiwic2V0SWQiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwib25DaGFuZ2VJZCIsInVzZUNhbGxiYWNrIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25DaGFuZ2VQYXNzd29yZCIsIm9uU3VibWl0Rm9ybSIsImNvbnNvbGUiLCJsb2ciLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ1Y7QUFDZDtBQUNVO0FBQ0o7QUFFbkMsSUFBTUEsYUFBYSxHQUFHQyx5REFBTSxDQUFDQyxHQUFHLHNLQUUvQixDQUFDLENBQUM7QUFBQSxLQUZHRixhQUFhO0FBSW5CLElBQU1HLFdBQVcsR0FBR0YsaUVBQU0sQ0FBQ0cseUNBQUksQ0FBQyxxS0FFL0I7QUFBQyxNQUZJRCxXQUFXO0FBSWpCLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFTLE9BQTBCO0VBQUE7RUFBQSxJQUFwQkMsYUFBYSxRQUFiQSxhQUFhO0VBQ2hDLGdCQUFvQkMsc0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBekJDLEVBQUU7SUFBRUMsS0FBSztFQUNoQixpQkFBZ0NGLHNEQUFRLENBQUMsRUFBRSxDQUFDO0lBQXJDRyxRQUFRO0lBQUVDLFdBQVc7RUFFNUIsSUFBTUMsVUFBVSxHQUFHQyx5REFBVyxDQUFDLFVBQUNDLENBQUMsRUFBSztJQUNwQ0wsS0FBSyxDQUFDSyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0VBQ3ZCLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixJQUFNQyxnQkFBZ0IsR0FBR0oseURBQVcsQ0FBQyxVQUFDQyxDQUFDLEVBQUs7SUFDMUNILFdBQVcsQ0FBQ0csQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQztFQUM3QixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBQ047O0VBRUEsSUFBTUUsWUFBWSxHQUFHTCx5REFBVyxDQUFDLFlBQU07SUFDckNNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWixFQUFFLEVBQUVFLFFBQVEsQ0FBQztJQUN6QkosYUFBYSxDQUFDLElBQUksQ0FBQztFQUNyQixDQUFDLEVBQUUsQ0FBQ0UsRUFBRSxFQUFFRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7O0VBRXBCLE9BQ0UsTUFBQyxXQUFXO0lBQUMsUUFBUSxFQUFFUSxZQUFhO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDbEM7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFO0lBQU8sT0FBTyxFQUFDLFNBQVM7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSx3QkFBWSxFQUNwQztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQU0sRUFDTixNQUFDLDBDQUFLO0lBQUMsSUFBSSxFQUFDLFNBQVM7SUFBQyxLQUFLLEVBQUVWLEVBQUc7SUFBQyxRQUFRLEVBQUVJLFVBQVc7SUFBQyxRQUFRO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRyxDQUM5RCxFQUNOO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRTtJQUFPLE9BQU8sRUFBQyxlQUFlO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsOEJBQWEsRUFDM0M7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFNLEVBQ04sTUFBQywwQ0FBSztJQUNKLElBQUksRUFBQyxlQUFlO0lBQ3BCLEtBQUssRUFBRUYsUUFBUztJQUNoQixRQUFRLEVBQUVPLGdCQUFpQjtJQUMzQixRQUFRO0lBQ1I7SUFBQTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQ0EsQ0FDRSxFQUNOLE1BQUMsYUFBYTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ1osTUFBQywyQ0FBTTtJQUFDLElBQUksRUFBQyxTQUFTO0lBQUMsUUFBUSxFQUFDLFFBQVE7SUFBQyxPQUFPLEVBQUUsS0FBTTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLHdCQUUvQyxFQUNULE1BQUMsZ0RBQUk7SUFBQyxJQUFJLEVBQUMsU0FBUztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ2xCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLDhCQUFxQixDQUNuQixDQUNDLENBQ08sQ0FDSjtBQUVsQixDQUFDO0FBQUMsR0FoRElaLFNBQVM7QUFBQSxNQUFUQSxTQUFTO0FBa0RmQSxTQUFTLENBQUNnQixTQUFTLEdBQUc7RUFDcEJmLGFBQWEsRUFBRWdCLGlEQUFTLENBQUNDLElBQUksQ0FBQ0M7QUFDaEMsQ0FBQztBQUVjbkIsd0VBQVMsRUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuNmRmZTI2YTY1ZWQ2YTgwN2VjOTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBCdXR0b25XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5gOyAvLyDsnbjrnbzsnbjsiqTtg4DsnbzsnYAg66as66CM642U66eB65CY6riwIOuVjOusuOyXkCDstZzsoIHtmZTrpbwg7JyE7ZW0IOy7pOyKpO2FgO2VmOqyjCDrsJTqv5TspIxcclxuXHJcbmNvbnN0IEZvcm1XcmFwcGVyID0gc3R5bGVkKEZvcm0pYFxyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBMb2dpbkZvcm0gPSAoeyBzZXRJc0xvZ2dlZEluIH0pID0+IHtcclxuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VJZCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBzZXRJZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9LCBbXSk7XHJcbiAgLy/su7Ttj6zrhIztirjsl5AgcHJvcHProZwg64SY6rKo7KO864qUIO2VqOyImOuKlCB1c2VDYWxsYmFja+2VtOyVvCDstZzsoIHtmZTqsIAg65Cc64ukXHJcblxyXG4gIGNvbnN0IG9uU3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGlkLCBwYXNzd29yZCk7XHJcbiAgICBzZXRJc0xvZ2dlZEluKHRydWUpO1xyXG4gIH0sIFtpZCwgcGFzc3dvcmRdKTsgLy/qsIDsg4HsnZggc3RhdGUg642U66+4IOuNsOydtO2EsCBzZXRJc0xvZ2dlZEluXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybVdyYXBwZXIgb25GaW5pc2g9e29uU3VibWl0Rm9ybX0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3VzZXItaWQnPuyVhOydtOuUlDwvbGFiZWw+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPElucHV0IG5hbWU9J3VzZXItaWQnIHZhbHVlPXtpZH0gb25DaGFuZ2U9e29uQ2hhbmdlSWR9IHJlcXVpcmVkIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSd1c2VyLXBhc3N3b3JkJz7ruYTrsIDrsojtmLg8L2xhYmVsPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgbmFtZT0ndXNlci1wYXNzd29yZCdcclxuICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8vcmVxdWlyZWQg7KCc7Lac7IucIOuwmOuTnOyLnCDssYTsm4zsoLjslbztlZjripRcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEJ1dHRvbldyYXBwZXI+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPSdwcmltYXJ5JyBodG1sVHlwZT0nc3VibWl0JyBsb2FkaW5nPXtmYWxzZX0+XHJcbiAgICAgICAgICDroZzqt7jsnbhcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8TGluayBocmVmPScvc2lnbnVwJz5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8YnV0dG9uPu2ajOybkOqwgOyehTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9CdXR0b25XcmFwcGVyPlxyXG4gICAgPC9Gb3JtV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuTG9naW5Gb3JtLnByb3BUeXBlcyA9IHtcclxuICBzZXRJc0xvZ2dlZEluOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9