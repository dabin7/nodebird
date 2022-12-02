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
        isLoggingIn: false;
        isLoggedIn: true;
        me: dummyUser(action.data);
      case LOG_IN_FAILURE:
        isLoggingIn: false;
        logInError: action.error;
      case LOG_OUT_REQUEST:
        isLoggingOut: true;
        isLoggedOut: false;
        logOutError: null;
      case LOG_OUT_SUCCESS:
        isLoggingOut: false;
        isLoggedOut: true;
        me: null;
      case LOG_OUT_FAILURE:
        isLoggingOut: false;
        logOutError: action.error;
      case SIGN_UP_REQUEST:
        signUpLoading: true;
        signUpDone: false;
        signUpError: null;
      case SIGN_UP_SUCCESS:
        signUpLoading: false;
        signUpDone: true;
      case SIGN_UP_FAILURE:
        signUpLoading: false;
        signUpError: action.error;
      case CHANGE_NICKNAME_REQUEST:
        changeNicknameLoading: true;
        changeNicknameDone: false;
        changeNicknameError: null;
      case CHANGE_NICKNAME_SUCCESS:
        changeNicknameLoading: false;
        changeNicknameDone: true;
      case CHANGE_NICKNAME_FAILURE:
        changeNicknameLoading: false;
        changeNicknameError: action.error;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJpc0xvZ2dpbmdJbiIsImlzTG9nZ2VkSW4iLCJsb2dJbkVycm9yIiwiaXNMb2dnaW5nT3V0IiwiaXNMb2dnZWRPdXQiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInVuZm9sbG93TG9hZGluZyIsInVuZm9sbG93RG9uZSIsInVuZm9sbG93RXJyb3IiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwiZHVtbXlVc2VyIiwiZGF0YSIsIm5pY2tuYW1lIiwiaWQiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJ0eXBlIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImVycm9yIiwiZmlsdGVyIiwidiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFFckIsSUFBTUEsWUFBWSxHQUFHO0VBQzFCQyxXQUFXLEVBQUUsS0FBSztFQUNsQkMsVUFBVSxFQUFFLEtBQUs7RUFDakJDLFVBQVUsRUFBRSxJQUFJO0VBQ2hCQyxZQUFZLEVBQUUsS0FBSztFQUNuQkMsV0FBVyxFQUFFLEtBQUs7RUFDbEJDLFdBQVcsRUFBRSxJQUFJO0VBQ2pCQyxhQUFhLEVBQUUsS0FBSztFQUNwQkMsVUFBVSxFQUFFLEtBQUs7RUFDakJDLFdBQVcsRUFBRSxJQUFJO0VBQ2pCQyxxQkFBcUIsRUFBRSxLQUFLO0VBQzVCQyxrQkFBa0IsRUFBRSxLQUFLO0VBQ3pCQyxtQkFBbUIsRUFBRSxJQUFJO0VBQ3pCQyxhQUFhLEVBQUUsS0FBSztFQUNwQkMsVUFBVSxFQUFFLEtBQUs7RUFDakJDLFdBQVcsRUFBRSxJQUFJO0VBQ2pCQyxlQUFlLEVBQUUsS0FBSztFQUN0QkMsWUFBWSxFQUFFLEtBQUs7RUFDbkJDLGFBQWEsRUFBRSxJQUFJO0VBQ25CQyxFQUFFLEVBQUUsSUFBSTtFQUNSQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0VBQ2RDLFNBQVMsRUFBRSxDQUFDO0FBQ2QsQ0FBQztBQUVNLElBQU1DLGNBQWMsR0FBRyxnQkFBZ0I7QUFDdkMsSUFBTUMsY0FBYyxHQUFHLGdCQUFnQjtBQUN2QyxJQUFNQyxjQUFjLEdBQUcsZ0JBQWdCO0FBRXZDLElBQU1DLGVBQWUsR0FBRyxpQkFBaUI7QUFDekMsSUFBTUMsZUFBZSxHQUFHLGlCQUFpQjtBQUN6QyxJQUFNQyxlQUFlLEdBQUcsaUJBQWlCO0FBRXpDLElBQU1DLGVBQWUsR0FBRyxpQkFBaUI7QUFDekMsSUFBTUMsZUFBZSxHQUFHLGlCQUFpQjtBQUN6QyxJQUFNQyxlQUFlLEdBQUcsaUJBQWlCO0FBRXpDLElBQU1DLHVCQUF1QixHQUFHLHlCQUF5QjtBQUN6RCxJQUFNQyx1QkFBdUIsR0FBRyx5QkFBeUI7QUFDekQsSUFBTUMsdUJBQXVCLEdBQUcseUJBQXlCO0FBRXpELElBQU1DLGNBQWMsR0FBRyxnQkFBZ0I7QUFDdkMsSUFBTUMsY0FBYyxHQUFHLGdCQUFnQjtBQUN2QyxJQUFNQyxjQUFjLEdBQUcsZ0JBQWdCO0FBRXZDLElBQU1DLGdCQUFnQixHQUFHLGtCQUFrQjtBQUMzQyxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBa0I7QUFDM0MsSUFBTUMsZ0JBQWdCLEdBQUcsa0JBQWtCO0FBRTNDLElBQU1DLGNBQWMsR0FBRyxnQkFBZ0I7QUFDdkMsSUFBTUMsaUJBQWlCLEdBQUcsbUJBQW1CO0FBRXBELElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFTLENBQUlDLElBQUk7RUFBQSx1Q0FDbEJBLElBQUk7SUFDUEMsUUFBUSxFQUFFLE9BQU87SUFDakJDLEVBQUUsRUFBRSxDQUFDO0lBQ0xDLEtBQUssRUFBRSxFQUFFO0lBQ1RDLFVBQVUsRUFBRSxFQUFFO0lBQ2RDLFNBQVMsRUFBRTtFQUFFO0FBQUEsQ0FDYjtBQUVLLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0IsR0FBUztFQUN0QyxPQUFPO0lBQ0xDLElBQUksRUFBRTVCO0VBQ1IsQ0FBQztBQUNILENBQUM7QUFFTSxJQUFNNkIsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFtQixHQUFTO0VBQ3ZDLE9BQU87SUFDTEQsSUFBSSxFQUFFekI7RUFDUixDQUFDO0FBQ0gsQ0FBQztBQUVELElBQU0yQixPQUFPLEdBQUcsU0FBVkEsT0FBTyxHQUFxQztFQUFBLElBQWpDQyxLQUFLLHVFQUFHckQsWUFBWTtFQUFBLElBQUVzRCxNQUFNO0VBQzNDLE9BQU9DLHFEQUFPLENBQUNGLEtBQUssRUFBRSxVQUFDRyxLQUFLLEVBQUs7SUFDL0IsUUFBUUYsTUFBTSxDQUFDSixJQUFJO01BQ2pCLEtBQUtoQixjQUFjO1FBQ2pCc0IsS0FBSyxDQUFDM0MsYUFBYSxHQUFHLElBQUk7UUFDMUIyQyxLQUFLLENBQUMxQyxVQUFVLEdBQUcsS0FBSztRQUN4QjBDLEtBQUssQ0FBQ3pDLFdBQVcsR0FBRyxJQUFJO1FBQ3hCO01BRUYsS0FBS29CLGNBQWM7UUFDakJxQixLQUFLLENBQUMzQyxhQUFhLEdBQUcsS0FBSztRQUMzQjJDLEtBQUssQ0FBQzFDLFVBQVUsR0FBRyxJQUFJO1FBQ3ZCMEMsS0FBSyxDQUFDckMsRUFBRSxHQUFHdUIsU0FBUyxDQUFDWSxNQUFNLENBQUNYLElBQUksQ0FBQztRQUNqQztNQUVGLEtBQUtQLGNBQWM7UUFDakJvQixLQUFLLENBQUMzQyxhQUFhLEdBQUcsS0FBSztRQUMzQjJDLEtBQUssQ0FBQ3pDLFdBQVcsR0FBR3VDLE1BQU0sQ0FBQ0csS0FBSztRQUNoQztNQUVGLEtBQUtwQixnQkFBZ0I7UUFDbkJtQixLQUFLLENBQUN4QyxlQUFlLEdBQUcsSUFBSTtRQUM1QndDLEtBQUssQ0FBQ3ZDLFlBQVksR0FBRyxLQUFLO1FBQzFCdUMsS0FBSyxDQUFDdEMsYUFBYSxHQUFHLElBQUk7UUFDMUI7TUFFRixLQUFLb0IsZ0JBQWdCO1FBQ25Ca0IsS0FBSyxDQUFDeEMsZUFBZSxHQUFHLEtBQUs7UUFDN0J3QyxLQUFLLENBQUN2QyxZQUFZLEdBQUcsSUFBSTtRQUN6QnVDLEtBQUssQ0FBQ3JDLEVBQUUsR0FBR3VCLFNBQVMsQ0FBQ1ksTUFBTSxDQUFDWCxJQUFJLENBQUM7UUFDakM7TUFFRixLQUFLSixnQkFBZ0I7UUFDbkJpQixLQUFLLENBQUN4QyxlQUFlLEdBQUcsS0FBSztRQUM3QndDLEtBQUssQ0FBQ3RDLGFBQWEsR0FBR29DLE1BQU0sQ0FBQ0csS0FBSztRQUNsQztNQUVGLEtBQUtuQyxjQUFjO1FBQ2pCa0MsS0FBSyxDQUFDdkQsV0FBVyxHQUFHLElBQUk7UUFDeEJ1RCxLQUFLLENBQUN0RCxVQUFVLEdBQUcsS0FBSztRQUN4QnNELEtBQUssQ0FBQ3JELFVBQVUsR0FBRyxJQUFJO1FBQ3ZCO01BRUYsS0FBS29CLGNBQWM7UUFDakJ0QixXQUFXLEVBQUUsS0FBSztRQUNsQkMsVUFBVSxFQUFFLElBQUk7UUFDaEJpQixFQUFFLEVBQUV1QixTQUFTLENBQUNZLE1BQU0sQ0FBQ1gsSUFBSSxDQUFDO01BRTVCLEtBQUtuQixjQUFjO1FBQ2pCdkIsV0FBVyxFQUFFLEtBQUs7UUFDbEJFLFVBQVUsRUFBRW1ELE1BQU0sQ0FBQ0csS0FBSztNQUUxQixLQUFLaEMsZUFBZTtRQUNsQnJCLFlBQVksRUFBRSxJQUFJO1FBQ2xCQyxXQUFXLEVBQUUsS0FBSztRQUNsQkMsV0FBVyxFQUFFLElBQUk7TUFFbkIsS0FBS29CLGVBQWU7UUFDbEJ0QixZQUFZLEVBQUUsS0FBSztRQUNuQkMsV0FBVyxFQUFFLElBQUk7UUFDakJjLEVBQUUsRUFBRSxJQUFJO01BRVYsS0FBS1EsZUFBZTtRQUNsQnZCLFlBQVksRUFBRSxLQUFLO1FBQ25CRSxXQUFXLEVBQUVnRCxNQUFNLENBQUNHLEtBQUs7TUFFM0IsS0FBSzdCLGVBQWU7UUFDbEJyQixhQUFhLEVBQUUsSUFBSTtRQUNuQkMsVUFBVSxFQUFFLEtBQUs7UUFDakJDLFdBQVcsRUFBRSxJQUFJO01BRW5CLEtBQUtvQixlQUFlO1FBQ2xCdEIsYUFBYSxFQUFFLEtBQUs7UUFDcEJDLFVBQVUsRUFBRSxJQUFJO01BRWxCLEtBQUtzQixlQUFlO1FBQ2xCdkIsYUFBYSxFQUFFLEtBQUs7UUFDcEJFLFdBQVcsRUFBRTZDLE1BQU0sQ0FBQ0csS0FBSztNQUUzQixLQUFLMUIsdUJBQXVCO1FBQzFCckIscUJBQXFCLEVBQUUsSUFBSTtRQUMzQkMsa0JBQWtCLEVBQUUsS0FBSztRQUN6QkMsbUJBQW1CLEVBQUUsSUFBSTtNQUUzQixLQUFLb0IsdUJBQXVCO1FBQzFCdEIscUJBQXFCLEVBQUUsS0FBSztRQUM1QkMsa0JBQWtCLEVBQUUsSUFBSTtNQUUxQixLQUFLc0IsdUJBQXVCO1FBQzFCdkIscUJBQXFCLEVBQUUsS0FBSztRQUM1QkUsbUJBQW1CLEVBQUUwQyxNQUFNLENBQUNHLEtBQUs7TUFFbkMsS0FBS2pCLGNBQWM7UUFDakIsdUNBQ0thLEtBQUs7VUFDUmxDLEVBQUUsa0NBQ0drQyxLQUFLLENBQUNsQyxFQUFFO1lBQ1gyQixLQUFLLEdBQUc7Y0FBRUQsRUFBRSxFQUFFUyxNQUFNLENBQUNYO1lBQUssQ0FBQyxzR0FBS1UsS0FBSyxDQUFDbEMsRUFBRSxDQUFDMkIsS0FBSztVQUFDO1FBQ2hEO01BRUwsS0FBS0wsaUJBQWlCO1FBQ3BCLHVDQUNLWSxLQUFLO1VBQ1JsQyxFQUFFLGtDQUNHa0MsS0FBSyxDQUFDbEMsRUFBRTtZQUNYMkIsS0FBSyxFQUFFTyxLQUFLLENBQUNsQyxFQUFFLENBQUMyQixLQUFLLENBQUNZLE1BQU0sQ0FBQyxVQUFDQyxDQUFDO2NBQUEsT0FBS0EsQ0FBQyxDQUFDZCxFQUFFLEtBQUtTLE1BQU0sQ0FBQ1gsSUFBSTtZQUFBO1VBQUM7VUFFM0Q7UUFBQTs7TUFHSjtRQUNFLE9BQU9VLEtBQUs7SUFBQztFQUVuQixDQUFDLENBQUM7QUFDSixDQUFDO0FBRWNELHNFQUFPLEVBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hMmMxZjU2OTU0ZWVhN2QzY2IzZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBpc0xvZ2dpbmdJbjogZmFsc2UsXHJcbiAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgbG9nSW5FcnJvcjogbnVsbCxcclxuICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLFxyXG4gIGlzTG9nZ2VkT3V0OiBmYWxzZSxcclxuICBsb2dPdXRFcnJvcjogbnVsbCxcclxuICBzaWduVXBMb2FkaW5nOiBmYWxzZSxcclxuICBzaWduVXBEb25lOiBmYWxzZSxcclxuICBzaWduVXBFcnJvcjogbnVsbCxcclxuICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLFxyXG4gIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXHJcbiAgY2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCxcclxuICBmb2xsb3dMb2FkaW5nOiBmYWxzZSxcclxuICBmb2xsb3dEb25lOiBmYWxzZSxcclxuICBmb2xsb3dFcnJvcjogbnVsbCxcclxuICB1bmZvbGxvd0xvYWRpbmc6IGZhbHNlLFxyXG4gIHVuZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgdW5mb2xsb3dFcnJvcjogbnVsbCxcclxuICBtZTogbnVsbCxcclxuICBzaWduVXBEYXRhOiB7fSxcclxuICBsb2dpbkRhdGE6IHt9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUID0gJ0NIQU5HRV9OSUNLTkFNRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTID0gJ0NIQU5HRV9OSUNLTkFNRV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFID0gJ0NIQU5HRV9OSUNLTkFNRV9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9ICdGT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9ICdGT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9ICdGT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9ICdVTkZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSAnVU5GT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gJ1JFTU9WRV9QT1NUX09GX01FJztcclxuXHJcbmNvbnN0IGR1bW15VXNlciA9IChkYXRhKSA9PiAoe1xyXG4gIC4uLmRhdGEsXHJcbiAgbmlja25hbWU6ICdkYWJpbicsXHJcbiAgaWQ6IDEsXHJcbiAgUG9zdHM6IFtdLFxyXG4gIEZvbGxvd2luZ3M6IFtdLFxyXG4gIEZvbGxvd2VyczogW10sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWUgPSBkdW1teVVzZXIoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBGT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1lID0gZHVtbXlVc2VyKGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5pc0xvZ2dpbmdJbiA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuaXNMb2dnZWRJbiA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgICBpc0xvZ2dpbmdJbjogZmFsc2U7XHJcbiAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZTtcclxuICAgICAgICBtZTogZHVtbXlVc2VyKGFjdGlvbi5kYXRhKTtcclxuXHJcbiAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgICAgaXNMb2dnaW5nSW46IGZhbHNlO1xyXG4gICAgICAgIGxvZ0luRXJyb3I6IGFjdGlvbi5lcnJvcjtcclxuXHJcbiAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgIGlzTG9nZ2luZ091dDogdHJ1ZTtcclxuICAgICAgICBpc0xvZ2dlZE91dDogZmFsc2U7XHJcbiAgICAgICAgbG9nT3V0RXJyb3I6IG51bGw7XHJcblxyXG4gICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgICBpc0xvZ2dpbmdPdXQ6IGZhbHNlO1xyXG4gICAgICAgIGlzTG9nZ2VkT3V0OiB0cnVlO1xyXG4gICAgICAgIG1lOiBudWxsO1xyXG5cclxuICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgICAgaXNMb2dnaW5nT3V0OiBmYWxzZTtcclxuICAgICAgICBsb2dPdXRFcnJvcjogYWN0aW9uLmVycm9yO1xyXG5cclxuICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgICAgc2lnblVwTG9hZGluZzogdHJ1ZTtcclxuICAgICAgICBzaWduVXBEb25lOiBmYWxzZTtcclxuICAgICAgICBzaWduVXBFcnJvcjogbnVsbDtcclxuXHJcbiAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgIHNpZ25VcExvYWRpbmc6IGZhbHNlO1xyXG4gICAgICAgIHNpZ25VcERvbmU6IHRydWU7XHJcblxyXG4gICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICBzaWduVXBMb2FkaW5nOiBmYWxzZTtcclxuICAgICAgICBzaWduVXBFcnJvcjogYWN0aW9uLmVycm9yO1xyXG5cclxuICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuICAgICAgICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IHRydWU7XHJcbiAgICAgICAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZTtcclxuICAgICAgICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsO1xyXG5cclxuICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlO1xyXG4gICAgICAgIGNoYW5nZU5pY2tuYW1lRG9uZTogdHJ1ZTtcclxuXHJcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcbiAgICAgICAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZTtcclxuICAgICAgICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBhY3Rpb24uZXJyb3I7XHJcblxyXG4gICAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIG1lOiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLm1lLFxyXG4gICAgICAgICAgICBQb3N0czogW3sgaWQ6IGFjdGlvbi5kYXRhIH0sIC4uLnN0YXRlLm1lLlBvc3RzXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBtZToge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgICAgICAgUG9zdHM6IHN0YXRlLm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIC8vZmlsdGVy66W8IOyCrOyaqe2VmOyXrCDsgq3soJxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9