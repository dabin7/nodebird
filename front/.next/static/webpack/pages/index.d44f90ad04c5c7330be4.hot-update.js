webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");


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
  return Object(immer__WEBPACK_IMPORTED_MODULE_2__["default"])(state, function (draft) {
    switch (action.type) {
      case FOLLOW_REQUEST:
        draft.followLoading = true;
        draft.followDone = false;
        draft.followError = null;
        break;
      case FOLLOW_SUCCESS:
        draft.followLoading = false;
        draft.followDone = true;
        draft.me = dummyUser(action.data);
        break;
      case FOLLOW_FAILURE:
        draft.followLoading = false;
        draft.followError = action.error;
        break;
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
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJpc0xvZ2dpbmdJbiIsImlzTG9nZ2VkSW4iLCJsb2dJbkVycm9yIiwiaXNMb2dnaW5nT3V0IiwiaXNMb2dnZWRPdXQiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInVuZm9sbG93TG9hZGluZyIsInVuZm9sbG93RG9uZSIsInVuZm9sbG93RXJyb3IiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwiZHVtbXlVc2VyIiwiZGF0YSIsIm5pY2tuYW1lIiwiaWQiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJ0eXBlIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIs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Q0FDS29CLEtBQUs7VUFDUjNDLHFCQUFxQixFQUFFLEtBQUs7VUFDNUJFLG1CQUFtQixFQUFFMEMsTUFBTSxDQUFDRztRQUFLO01BRXJDLEtBQUtqQixjQUFjO1FBQ2pCLHVDQUNLYSxLQUFLO1VBQ1JsQyxFQUFFLGtDQUNHa0MsS0FBSyxDQUFDbEMsRUFBRTtZQUNYMkIsS0FBSyxHQUFHO2NBQUVELEVBQUUsRUFBRVMsTUFBTSxDQUFDWDtZQUFLLENBQUMsc0dBQUtVLEtBQUssQ0FBQ2xDLEVBQUUsQ0FBQzJCLEtBQUs7VUFBQztRQUNoRDtNQUVMLEtBQUtMLGlCQUFpQjtRQUNwQix1Q0FDS1ksS0FBSztVQUNSbEMsRUFBRSxrQ0FDR2tDLEtBQUssQ0FBQ2xDLEVBQUU7WUFDWDJCLEtBQUssRUFBRU8sS0FBSyxDQUFDbEMsRUFBRSxDQUFDMkIsS0FBSyxDQUFDWSxNQUFNLENBQUMsVUFBQ0MsQ0FBQztjQUFBLE9BQUtBLENBQUMsQ0FBQ2QsRUFBRSxLQUFLUyxNQUFNLENBQUNYLElBQUk7WUFBQTtVQUFDO1VBRTNEO1FBQUE7O01BR0o7UUFDRSxPQUFPVSxLQUFLO0lBQUM7RUFFbkIsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVjRCxzRUFBTyxFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ0NGY5MGFkMDRjNWM3MzMwYmU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGlzTG9nZ2luZ0luOiBmYWxzZSxcclxuICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICBsb2dJbkVycm9yOiBudWxsLFxyXG4gIGlzTG9nZ2luZ091dDogZmFsc2UsXHJcbiAgaXNMb2dnZWRPdXQ6IGZhbHNlLFxyXG4gIGxvZ091dEVycm9yOiBudWxsLFxyXG4gIHNpZ25VcExvYWRpbmc6IGZhbHNlLFxyXG4gIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gIHNpZ25VcEVycm9yOiBudWxsLFxyXG4gIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsXHJcbiAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG4gIGZvbGxvd0xvYWRpbmc6IGZhbHNlLFxyXG4gIGZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gIGZvbGxvd0Vycm9yOiBudWxsLFxyXG4gIHVuZm9sbG93TG9hZGluZzogZmFsc2UsXHJcbiAgdW5mb2xsb3dEb25lOiBmYWxzZSxcclxuICB1bmZvbGxvd0Vycm9yOiBudWxsLFxyXG4gIG1lOiBudWxsLFxyXG4gIHNpZ25VcERhdGE6IHt9LFxyXG4gIGxvZ2luRGF0YToge30sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSAnQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gJ0ZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gJ0ZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gJ0ZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSAnVU5GT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSAnUkVNT1ZFX1BPU1RfT0ZfTUUnO1xyXG5cclxuY29uc3QgZHVtbXlVc2VyID0gKGRhdGEpID0+ICh7XHJcbiAgLi4uZGF0YSxcclxuICBuaWNrbmFtZTogJ2RhYmluJyxcclxuICBpZDogMSxcclxuICBQb3N0czogW10sXHJcbiAgRm9sbG93aW5nczogW10sXHJcbiAgRm9sbG93ZXJzOiBbXSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIEZPTExPV19TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tZSA9IGR1bW15VXNlcihhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIEZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICB1bmZvbGxvd0xvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICB1bmZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgdW5mb2xsb3dFcnJvcjogbnVsbCxcclxuICAgICAgICB9O1xyXG4gICAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgdW5mb2xsb3dMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIHVuZm9sbG93RG9uZTogdHJ1ZSxcclxuICAgICAgICAgIG1lOiBkdW1teVVzZXIoYWN0aW9uLmRhdGEpLFxyXG4gICAgICAgIH07XHJcbiAgICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICB1bmZvbGxvd0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgdW5mb2xsb3dFcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGlzTG9nZ2luZ0luOiB0cnVlLFxyXG4gICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgICAgICBsb2dJbkVycm9yOiBudWxsLFxyXG4gICAgICAgIH07XHJcbiAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgaXNMb2dnaW5nSW46IGZhbHNlLFxyXG4gICAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcclxuICAgICAgICAgIG1lOiBkdW1teVVzZXIoYWN0aW9uLmRhdGEpLFxyXG4gICAgICAgIH07XHJcbiAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgaXNMb2dnaW5nSW46IGZhbHNlLFxyXG4gICAgICAgICAgbG9nSW5FcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBpc0xvZ2dpbmdPdXQ6IHRydWUsXHJcbiAgICAgICAgICBpc0xvZ2dlZE91dDogZmFsc2UsXHJcbiAgICAgICAgICBsb2dPdXRFcnJvcjogbnVsbCxcclxuICAgICAgICB9O1xyXG4gICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLFxyXG4gICAgICAgICAgaXNMb2dnZWRPdXQ6IHRydWUsXHJcbiAgICAgICAgICBtZTogbnVsbCxcclxuICAgICAgICB9O1xyXG4gICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLFxyXG4gICAgICAgICAgbG9nT3V0RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgc2lnblVwTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgc2lnblVwRXJyb3I6IG51bGwsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIHNpZ25VcExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgc2lnblVwRG9uZTogdHJ1ZSxcclxuICAgICAgICB9O1xyXG4gICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBzaWduVXBMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIHNpZ25VcEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICAgICAgICAgIGNoYW5nZU5pY2tuYW1lRXJyb3I6IG51bGwsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGNoYW5nZU5pY2tuYW1lRG9uZTogdHJ1ZSxcclxuICAgICAgICB9O1xyXG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgfTtcclxuICAgICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBtZToge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgICAgICAgUG9zdHM6IFt7IGlkOiBhY3Rpb24uZGF0YSB9LCAuLi5zdGF0ZS5tZS5Qb3N0c10sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgbWU6IHtcclxuICAgICAgICAgICAgLi4uc3RhdGUubWUsXHJcbiAgICAgICAgICAgIFBvc3RzOiBzdGF0ZS5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAvL2ZpbHRlcuulvCDsgqzsmqntlZjsl6wg7IKt7KCcXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==