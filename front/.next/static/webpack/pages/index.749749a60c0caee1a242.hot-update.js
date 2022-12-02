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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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
  return Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(state, function (draft) {
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
        draft.unfollowLoading = true;
        draft.unfollowDone = false;
        draft.unfollowError = null;
        break;
      case UNFOLLOW_SUCCESS:
        draft.unfollowLoading = false;
        draft.unfollowDone = true;
        draft.me = dummyUser(action.data);
        break;
      case UNFOLLOW_FAILURE:
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
        break;
      case LOG_IN_REQUEST:
        draft.isLoggingIn = true;
        draft.isLoggedIn = false;
        draft.logInError = null;
        break;
      case LOG_IN_SUCCESS:
        draft.isLoggingIn = false;
        draft.isLoggedIn = true;
        draft.me = dummyUser(action.data);
        break;
      case LOG_IN_FAILURE:
        draft.isLoggingIn = false;
        draft.logInError = action.error;
        break;
      case LOG_OUT_REQUEST:
        draft.isLoggingOut = true;
        draft.isLoggedOut = false;
        draft.logOutError = null;
        break;
      case LOG_OUT_SUCCESS:
        draft.isLoggingOut = false;
        draft.isLoggedOut = true;
        draft.me = null;
        break;
      case LOG_OUT_FAILURE:
        draft.isLoggingOut = false;
        draft.logOutError = action.error;
        break;
      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;
      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;
      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameDone = false;
        draft.changeNicknameError = null;
        break;
      case CHANGE_NICKNAME_SUCCESS:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;
      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;
      case ADD_POST_TO_ME:
        draft.me = {
          Posts: [{
            id: action.data
          }]
        };
        break;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJpc0xvZ2dpbmdJbiIsImlzTG9nZ2VkSW4iLCJsb2dJbkVycm9yIiwiaXNMb2dnaW5nT3V0IiwiaXNMb2dnZWRPdXQiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInVuZm9sbG93TG9hZGluZyIsInVuZm9sbG93RG9uZSIsInVuZm9sbG93RXJyb3IiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwiZHVtbXlVc2VyIiwiZGF0YSIsIm5pY2tuYW1lIiwiaWQiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJ0eXBlIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImVycm9yIiwiZmlsdGVyIiwidiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBRXJCLElBQU1BLFlBQVksR0FBRztFQUMxQkMsV0FBVyxFQUFFLEtBQUs7RUFDbEJDLFVBQVUsRUFBRSxLQUFLO0VBQ2pCQyxVQUFVLEVBQUUsSUFBSTtFQUNoQkMsWUFBWSxFQUFFLEtBQUs7RUFDbkJDLFdBQVcsRUFBRSxLQUFLO0VBQ2xCQyxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsYUFBYSxFQUFFLEtBQUs7RUFDcEJDLFVBQVUsRUFBRSxLQUFLO0VBQ2pCQyxXQUFXLEVBQUUsSUFBSTtFQUNqQkMscUJBQXFCLEVBQUUsS0FBSztFQUM1QkMsa0JBQWtCLEVBQUUsS0FBSztFQUN6QkMsbUJBQW1CLEVBQUUsSUFBSTtFQUN6QkMsYUFBYSxFQUFFLEtBQUs7RUFDcEJDLFVBQVUsRUFBRSxLQUFLO0VBQ2pCQyxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsZUFBZSxFQUFFLEtBQUs7RUFDdEJDLFlBQVksRUFBRSxLQUFLO0VBQ25CQyxhQUFhLEVBQUUsSUFBSTtFQUNuQkMsRUFBRSxFQUFFLElBQUk7RUFDUkMsVUFBVSxFQUFFLENBQUMsQ0FBQztFQUNkQyxTQUFTLEVBQUUsQ0FBQztBQUNkLENBQUM7QUFFTSxJQUFNQyxjQUFjLEdBQUcsZ0JBQWdCO0FBQ3ZDLElBQU1DLGNBQWMsR0FBRyxnQkFBZ0I7QUFDdkMsSUFBTUMsY0FBYyxHQUFHLGdCQUFnQjtBQUV2QyxJQUFNQyxlQUFlLEdBQUcsaUJBQWlCO0FBQ3pDLElBQU1DLGVBQWUsR0FBRyxpQkFBaUI7QUFDekMsSUFBTUMsZUFBZSxHQUFHLGlCQUFpQjtBQUV6QyxJQUFNQyxlQUFlLEdBQUcsaUJBQWlCO0FBQ3pDLElBQU1DLGVBQWUsR0FBRyxpQkFBaUI7QUFDekMsSUFBTUMsZUFBZSxHQUFHLGlCQUFpQjtBQUV6QyxJQUFNQyx1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QUFLO1FBQ2hDO01BRUYsS0FBSzFCLHVCQUF1QjtRQUMxQnlCLEtBQUssQ0FBQzlDLHFCQUFxQixHQUFHLElBQUk7UUFDbEM4QyxLQUFLLENBQUM3QyxrQkFBa0IsR0FBRyxLQUFLO1FBQ2hDNkMsS0FBSyxDQUFDNUMsbUJBQW1CLEdBQUcsSUFBSTtRQUNoQztNQUVGLEtBQUtvQix1QkFBdUI7UUFDMUJ3QixLQUFLLENBQUM5QyxxQkFBcUIsR0FBRyxLQUFLO1FBQ25DOEMsS0FBSyxDQUFDN0Msa0JBQWtCLEdBQUcsSUFBSTtRQUMvQjtNQUVGLEtBQUtzQix1QkFBdUI7UUFDMUJ1QixLQUFLLENBQUM5QyxxQkFBcUIsR0FBRyxLQUFLO1FBQ25DOEMsS0FBSyxDQUFDNUMsbUJBQW1CLEdBQUcwQyxNQUFNLENBQUNHLEtBQUs7UUFDeEM7TUFFRixLQUFLakIsY0FBYztRQUNqQmdCLEtBQUssQ0FBQ3JDLEVBQUUsR0FBRztVQUNUMkIsS0FBSyxFQUFFLENBQUM7WUFBRUQsRUFBRSxFQUFFUyxNQUFNLENBQUNYO1VBQUssQ0FBQztRQUM3QixDQUFDO1FBQ0Q7TUFFRixLQUFLRixpQkFBaUI7UUFDcEIsdUNBQ0tZLEtBQUs7VUFDUmxDLEVBQUUsa0NBQ0drQyxLQUFLLENBQUNsQyxFQUFFO1lBQ1gyQixLQUFLLEVBQUVPLEtBQUssQ0FBQ2xDLEVBQUUsQ0FBQzJCLEtBQUssQ0FBQ1ksTUFBTSxDQUFDLFVBQUNDLENBQUM7Y0FBQSxPQUFLQSxDQUFDLENBQUNkLEVBQUUsS0FBS1MsTUFBTSxDQUFDWCxJQUFJO1lBQUE7VUFBQztVQUUzRDtRQUFBOztNQUdKO1FBQ0UsT0FBT1UsS0FBSztJQUFDO0VBRW5CLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFY0Qsc0VBQU8sRUFBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43NDk3NDlhNjBjMGNhZWUxYTI0Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBpc0xvZ2dpbmdJbjogZmFsc2UsXHJcbiAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgbG9nSW5FcnJvcjogbnVsbCxcclxuICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLFxyXG4gIGlzTG9nZ2VkT3V0OiBmYWxzZSxcclxuICBsb2dPdXRFcnJvcjogbnVsbCxcclxuICBzaWduVXBMb2FkaW5nOiBmYWxzZSxcclxuICBzaWduVXBEb25lOiBmYWxzZSxcclxuICBzaWduVXBFcnJvcjogbnVsbCxcclxuICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLFxyXG4gIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXHJcbiAgY2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCxcclxuICBmb2xsb3dMb2FkaW5nOiBmYWxzZSxcclxuICBmb2xsb3dEb25lOiBmYWxzZSxcclxuICBmb2xsb3dFcnJvcjogbnVsbCxcclxuICB1bmZvbGxvd0xvYWRpbmc6IGZhbHNlLFxyXG4gIHVuZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgdW5mb2xsb3dFcnJvcjogbnVsbCxcclxuICBtZTogbnVsbCxcclxuICBzaWduVXBEYXRhOiB7fSxcclxuICBsb2dpbkRhdGE6IHt9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUID0gJ0NIQU5HRV9OSUNLTkFNRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTID0gJ0NIQU5HRV9OSUNLTkFNRV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFID0gJ0NIQU5HRV9OSUNLTkFNRV9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9ICdGT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9ICdGT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9ICdGT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9ICdVTkZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSAnVU5GT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gJ1JFTU9WRV9QT1NUX09GX01FJztcclxuXHJcbmNvbnN0IGR1bW15VXNlciA9IChkYXRhKSA9PiAoe1xyXG4gIC4uLmRhdGEsXHJcbiAgbmlja25hbWU6ICdkYWJpbicsXHJcbiAgaWQ6IDEsXHJcbiAgUG9zdHM6IFtdLFxyXG4gIEZvbGxvd2luZ3M6IFtdLFxyXG4gIEZvbGxvd2VyczogW10sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWUgPSBkdW1teVVzZXIoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBGT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1lID0gZHVtbXlVc2VyKGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5pc0xvZ2dpbmdJbiA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuaXNMb2dnZWRJbiA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5pc0xvZ2dpbmdJbiA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmlzTG9nZ2VkSW4gPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1lID0gZHVtbXlVc2VyKGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuaXNMb2dnaW5nSW4gPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuaXNMb2dnaW5nT3V0ID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5pc0xvZ2dlZE91dCA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmlzTG9nZ2luZ091dCA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmlzTG9nZ2VkT3V0ID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tZSA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5pc0xvZ2dpbmdPdXQgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICAgIGRyYWZ0Lm1lID0ge1xyXG4gICAgICAgICAgUG9zdHM6IFt7IGlkOiBhY3Rpb24uZGF0YSB9XSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBtZToge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgICAgICAgUG9zdHM6IHN0YXRlLm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIC8vZmlsdGVy66W8IOyCrOyaqe2VmOyXrCDsgq3soJxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9