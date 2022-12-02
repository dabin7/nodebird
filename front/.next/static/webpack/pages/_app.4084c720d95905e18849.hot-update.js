webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var initialState = {
  isLoggingIn: false,
  isLoggedIn: false,
  logInError: null,
  isLoggingOut: false,
  isLoggedOut: false,
  logOutError: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameError: null,
  followLoading: false,
  followDone: false,
  followError: null,
  unfollowLoading: false,
  unfollowDone: false,
  unfollowError: null,
  me: null,
  signUpData: {},
  loginData: {}
};
var LOG_IN_REQUEST = 'LOG_IN_REQUEST';
var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
var LOG_IN_FAILURE = 'LOG_IN_FAILURE';
var LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
var LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
var LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
var SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
var SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
var SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
var CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
var CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
var CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
var FOLLOW_REQUEST = 'FOLLOW_REQUEST';
var FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
var FOLLOW_FAILURE = 'FOLLOW_FAILURE';
var UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
var UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
var UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
var ADD_POST_TO_ME = 'ADD_POST_TO_ME';
var REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
var dummyUser = function dummyUser(data) {
  return _objectSpread(_objectSpread({}, data), {}, {
    nickname: 'dabin',
    id: 1,
    Posts: [],
    Followings: [],
    Followers: []
  });
};
var loginRequestAction = function loginRequestAction() {
  return {
    type: LOG_IN_REQUEST
  };
};
var logoutRequestAction = function logoutRequestAction() {
  return {
    type: LOG_OUT_REQUEST
  };
};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case FOLLOW_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        followLoading: true,
        followDone: false,
        followError: null
      });
    case FOLLOW_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        followLoading: false,
        followDone: true,
        me: dummyUser(action.data)
      });
    case FOLLOW_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        followLoading: false,
        followError: action.error
      });
    case UNFOLLOW_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        unfollowLoading: true,
        unfollowDone: false,
        unfollowError: null
      });
    case UNFOLLOW_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        unfollowLoading: false,
        unfollowDone: true,
        me: dummyUser(action.data)
      });
    case UNFOLLOW_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        unfollowLoading: false,
        unfollowError: action.error
      });
    case LOG_IN_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggingIn: true,
        isLoggedIn: false,
        logInError: null
      });
    case LOG_IN_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggingIn: false,
        isLoggedIn: true,
        me: dummyUser(action.data)
      });
    case LOG_IN_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggingIn: false,
        logInError: action.error
      });
    case LOG_OUT_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggingOut: true,
        isLoggedOut: false,
        logOutError: null
      });
    case LOG_OUT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggingOut: false,
        isLoggedOut: true,
        me: null
      });
    case LOG_OUT_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggingOut: false,
        logOutError: action.error
      });
    case SIGN_UP_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        signUpLoading: true,
        signUpDone: false,
        signUpError: null
      });
    case SIGN_UP_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        signUpLoading: false,
        signUpDone: true
      });
    case SIGN_UP_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        signUpLoading: false,
        signUpError: action.error
      });
    case CHANGE_NICKNAME_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        changeNicknameLoading: true,
        changeNicknameDone: false,
        changeNicknameError: null
      });
    case CHANGE_NICKNAME_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        changeNicknameLoading: false,
        changeNicknameDone: true
      });
    case CHANGE_NICKNAME_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        changeNicknameLoading: false,
        changeNicknameError: action.error
      });
    case ADD_POST_TO_ME:
      return _objectSpread(_objectSpread({}, state), {}, {
        me: _objectSpread(_objectSpread({}, state.me), {}, {
          Posts: [{
            id: action.data
          }].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.me.Posts))
        })
      });
    case REMOVE_POST_OF_ME:
      return _objectSpread(_objectSpread({}, state), {}, {
        me: _objectSpread(_objectSpread({}, state.me), {}, {
          Posts: state.me.Posts.filter(function (v) {
            return v.id !== action.data;
          })
        })
        //filter를 사용하여 삭제
      });

    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJpc0xvZ2dpbmdJbiIsImlzTG9nZ2VkSW4iLCJsb2dJbkVycm9yIiwiaXNMb2dnaW5nT3V0IiwiaXNMb2dnZWRPdXQiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInVuZm9sbG93TG9hZGluZyIsInVuZm9sbG93RG9uZSIsInVuZm9sbG93RXJyb3IiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwiZHVtbXlVc2VyIiwiZGF0YSIsIm5pY2tuYW1lIiwiaWQiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJ0eXBlIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIs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QyxFQUFFO1VBQ1gyQixLQUFLLEdBQUc7WUFBRUQsRUFBRSxFQUFFUyxNQUFNLENBQUNYO1VBQUssQ0FBQyxzR0FBS1UsS0FBSyxDQUFDbEMsRUFBRSxDQUFDMkIsS0FBSztRQUFDO01BQ2hEO0lBRUwsS0FBS0wsaUJBQWlCO01BQ3BCLHVDQUNLWSxLQUFLO1FBQ1JsQyxFQUFFLGtDQUNHa0MsS0FBSyxDQUFDbEMsRUFBRTtVQUNYMkIsS0FBSyxFQUFFTyxLQUFLLENBQUNsQyxFQUFFLENBQUMyQixLQUFLLENBQUNVLE1BQU0sQ0FBQyxVQUFDQyxDQUFDO1lBQUEsT0FBS0EsQ0FBQyxDQUFDWixFQUFFLEtBQUtTLE1BQU0sQ0FBQ1gsSUFBSTtVQUFBO1FBQUM7UUFFM0Q7TUFBQTs7SUFHSjtNQUNFLE9BQU9VLEtBQUs7RUFBQztBQUVuQixDQUFDO0FBRWNELHNFQUFPLEVBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40MDg0YzcyMGQ5NTkwNWUxODg0OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBpc0xvZ2dpbmdJbjogZmFsc2UsXHJcbiAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgbG9nSW5FcnJvcjogbnVsbCxcclxuICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLFxyXG4gIGlzTG9nZ2VkT3V0OiBmYWxzZSxcclxuICBsb2dPdXRFcnJvcjogbnVsbCxcclxuICBzaWduVXBMb2FkaW5nOiBmYWxzZSxcclxuICBzaWduVXBEb25lOiBmYWxzZSxcclxuICBzaWduVXBFcnJvcjogbnVsbCxcclxuICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLFxyXG4gIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXHJcbiAgY2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCxcclxuICBmb2xsb3dMb2FkaW5nOiBmYWxzZSxcclxuICBmb2xsb3dEb25lOiBmYWxzZSxcclxuICBmb2xsb3dFcnJvcjogbnVsbCxcclxuICB1bmZvbGxvd0xvYWRpbmc6IGZhbHNlLFxyXG4gIHVuZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgdW5mb2xsb3dFcnJvcjogbnVsbCxcclxuICBtZTogbnVsbCxcclxuICBzaWduVXBEYXRhOiB7fSxcclxuICBsb2dpbkRhdGE6IHt9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUID0gJ0NIQU5HRV9OSUNLTkFNRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTID0gJ0NIQU5HRV9OSUNLTkFNRV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFID0gJ0NIQU5HRV9OSUNLTkFNRV9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9ICdGT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9ICdGT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9ICdGT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9ICdVTkZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSAnVU5GT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gJ1JFTU9WRV9QT1NUX09GX01FJztcclxuXHJcbmNvbnN0IGR1bW15VXNlciA9IChkYXRhKSA9PiAoe1xyXG4gIC4uLmRhdGEsXHJcbiAgbmlja25hbWU6ICdkYWJpbicsXHJcbiAgaWQ6IDEsXHJcbiAgUG9zdHM6IFtdLFxyXG4gIEZvbGxvd2luZ3M6IFtdLFxyXG4gIEZvbGxvd2VyczogW10sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgRk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZm9sbG93TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBmb2xsb3dEb25lOiBmYWxzZSxcclxuICAgICAgICBmb2xsb3dFcnJvcjogbnVsbCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZm9sbG93TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgZm9sbG93RG9uZTogdHJ1ZSxcclxuICAgICAgICBtZTogZHVtbXlVc2VyKGFjdGlvbi5kYXRhKSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZm9sbG93TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgZm9sbG93RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdW5mb2xsb3dMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIHVuZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgICAgICAgdW5mb2xsb3dFcnJvcjogbnVsbCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB1bmZvbGxvd0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIHVuZm9sbG93RG9uZTogdHJ1ZSxcclxuICAgICAgICBtZTogZHVtbXlVc2VyKGFjdGlvbi5kYXRhKSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB1bmZvbGxvd0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIHVuZm9sbG93RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9nZ2luZ0luOiB0cnVlLFxyXG4gICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICAgIGxvZ0luRXJyb3I6IG51bGwsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9nZ2luZ0luOiBmYWxzZSxcclxuICAgICAgICBpc0xvZ2dlZEluOiB0cnVlLFxyXG4gICAgICAgIG1lOiBkdW1teVVzZXIoYWN0aW9uLmRhdGEpLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xvZ2dpbmdJbjogZmFsc2UsXHJcbiAgICAgICAgbG9nSW5FcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9nZ2luZ091dDogdHJ1ZSxcclxuICAgICAgICBpc0xvZ2dlZE91dDogZmFsc2UsXHJcbiAgICAgICAgbG9nT3V0RXJyb3I6IG51bGwsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLFxyXG4gICAgICAgIGlzTG9nZ2VkT3V0OiB0cnVlLFxyXG4gICAgICAgIG1lOiBudWxsLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMb2dnaW5nT3V0OiBmYWxzZSxcclxuICAgICAgICBsb2dPdXRFcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNpZ25VcExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgICAgICAgc2lnblVwRXJyb3I6IG51bGwsXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc2lnblVwTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgc2lnblVwRG9uZTogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNpZ25VcExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIHNpZ25VcEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICAgICAgICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBjaGFuZ2VOaWNrbmFtZURvbmU6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgY2hhbmdlTmlja25hbWVFcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtZToge1xyXG4gICAgICAgICAgLi4uc3RhdGUubWUsXHJcbiAgICAgICAgICBQb3N0czogW3sgaWQ6IGFjdGlvbi5kYXRhIH0sIC4uLnN0YXRlLm1lLlBvc3RzXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtZToge1xyXG4gICAgICAgICAgLi4uc3RhdGUubWUsXHJcbiAgICAgICAgICBQb3N0czogc3RhdGUubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSksXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvL2ZpbHRlcuulvCDsgqzsmqntlZjsl6wg7IKt7KCcXHJcbiAgICAgIH07XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=