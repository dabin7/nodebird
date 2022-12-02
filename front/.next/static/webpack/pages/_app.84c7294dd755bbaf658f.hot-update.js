webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
var _marked = /*#__PURE__*/_regeneratorRuntime().mark(logIn),
  _marked2 = /*#__PURE__*/_regeneratorRuntime().mark(logOut),
  _marked3 = /*#__PURE__*/_regeneratorRuntime().mark(signUp),
  _marked4 = /*#__PURE__*/_regeneratorRuntime().mark(follow),
  _marked5 = /*#__PURE__*/_regeneratorRuntime().mark(unfollow),
  _marked6 = /*#__PURE__*/_regeneratorRuntime().mark(watchLogIn),
  _marked7 = /*#__PURE__*/_regeneratorRuntime().mark(watchLogOut),
  _marked8 = /*#__PURE__*/_regeneratorRuntime().mark(watchSignUp),
  _marked9 = /*#__PURE__*/_regeneratorRuntime().mark(watchFollow),
  _marked10 = /*#__PURE__*/_regeneratorRuntime().mark(watchUnfollow),
  _marked11 = /*#__PURE__*/_regeneratorRuntime().mark(userSaga);



function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('/api/login');
}
//여기선 * 을 붙이지않는다

function logIn(action) {
  return _regeneratorRuntime().wrap(function logIn$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
        case 3:
          _context.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
            data: action.data
          });
        case 5:
          _context.next = 11;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          _context.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
            err: _context.t0.response.data
          });
        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 7]]);
}
//성공 결과 result.data  실패 결과 err.response.data 에 담겨있음. put = dispatch

function logOutAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('/api/logout');
}
function logOut(action) {
  return _regeneratorRuntime().wrap(function logOut$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
        case 3:
          _context2.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"],
            data: action.data
          });
        case 5:
          _context2.next = 11;
          break;
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
            err: _context2.t0.response.data
          });
        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 7]]);
}
function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('/api/logout'); //signUpAPI는 generator가 아님.
}

function signUp(action) {
  return _regeneratorRuntime().wrap(function signUp$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
        case 3:
          _context3.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"],
            data: action.data
          });
        case 5:
          _context3.next = 11;
          break;
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
            err: _context3.t0.response.data
          });
        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 7]]);
}
function followAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('/api/follow');
}
//여기선 * 을 붙이지않는다

function follow(action) {
  return _regeneratorRuntime().wrap(function follow$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
        case 3:
          _context4.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
            data: action.data
          });
        case 5:
          _context4.next = 11;
          break;
        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          _context4.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
            err: _context4.t0.response.data
          });
        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 7]]);
}
function unfollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('/api/unfollow');
}
//여기선 * 을 붙이지않는다

function unfollow(action) {
  return _regeneratorRuntime().wrap(function unfollow$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
        case 3:
          _context5.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
            data: action.data
          });
        case 5:
          _context5.next = 11;
          break;
        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          _context5.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
            err: _context5.t0.response.data
          });
        case 11:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 7]]);
}
function watchLogIn() {
  return _regeneratorRuntime().wrap(function watchLogIn$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}
function watchLogOut() {
  return _regeneratorRuntime().wrap(function watchLogOut$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}
function watchSignUp() {
  return _regeneratorRuntime().wrap(function watchSignUp$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}
function watchFollow() {
  return _regeneratorRuntime().wrap(function watchFollow$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);
        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}
function watchUnfollow() {
  return _regeneratorRuntime().wrap(function watchUnfollow$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unfollow);
        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10);
}
function userSaga() {
  return _regeneratorRuntime().wrap(function userSaga$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnfollow)]);
        case 2:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJsb2dJbiIsImxvZ091dCIsInNpZ25VcCIsImZvbGxvdyIsInVuZm9sbG93Iiwid2F0Y2hMb2dJbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJ3YXRjaEZvbGxvdyIsIndhdGNoVW5mb2xsb3ciLCJ1c2VyU2FnYSIsImxvZ0luQVBJIiwiZGF0YSIsImF4aW9zIiwicG9zdCIsImFjdGlvbiIsImRlbGF5IiwicHV0IiwidHlwZSIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJlcnIiLCJyZXNwb25zZSIsImxvZ091dEFQSSIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsInNpZ25VcEFQSSIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsImZvbGxvd0FQSSIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJ1bmZvbGxvd0FQSSIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwidGFrZUV2ZXJ5IiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfT1VUX1JFUVVFU1QiLCJTSUdOX1VQX1JFUVVFU1QiLCJGT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1JFUVVFU1QiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7K0NBQ0E7QUFBQSxzREF3QlVBLEtBQUs7RUFBQSxtREFxQkxDLE1BQU07RUFBQSxtREFvQk5DLE1BQU07RUFBQSxtREFxQk5DLE1BQU07RUFBQSxtREFvQk5DLFFBQVE7RUFBQSxtREFnQlJDLFVBQVU7RUFBQSxtREFJVkMsV0FBVztFQUFBLG1EQUlYQyxXQUFXO0VBQUEsbURBSVhDLFdBQVc7RUFBQSxvREFJWEMsYUFBYTtFQUFBLG9EQUlFQyxRQUFRO0FBL0lxQztBQUM1QztBQWlCQTtBQUUxQixTQUFTQyxRQUFRLENBQUNDLElBQUksRUFBRTtFQUN0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QVVNLGFBQWE7RUFBQTtJQUFBO01BQUE7UUFBQTtVQUFBO1VBQ3JCLE9BQU0wQixvRUFBUyxDQUFDSywrREFBZ0IsRUFBRXBDLFFBQVEsQ0FBQztRQUFBO1FBQUE7VUFBQTtNQUFBO0lBQUE7RUFBQTtBQUFBO0FBRzlCLFNBQVVNLFFBQVE7RUFBQTtJQUFBO01BQUE7UUFBQTtVQUFBO1VBQy9CLE9BQU0rQiw4REFBRyxDQUFDLENBQ1JDLCtEQUFJLENBQUNyQyxVQUFVLENBQUMsRUFDaEJxQywrREFBSSxDQUFDcEMsV0FBVyxDQUFDLEVBQ2pCb0MsK0RBQUksQ0FBQ25DLFdBQVcsQ0FBQyxFQUNqQm1DLCtEQUFJLENBQUNsQyxXQUFXLENBQUMsRUFDakJrQywrREFBSSxDQUFDakMsYUFBYSxDQUFDLENBQ3BCLENBQUM7UUFBQTtRQUFBO1VBQUE7TUFBQTtJQUFBO0VBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjg0YzcyOTRkZDc1NWJiYWY2NThmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGwsIHB1dCwgdGFrZUV2ZXJ5LCBmb3JrLCBkZWxheSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7XHJcbiAgTE9HX0lOX1JFUVVFU1QsXHJcbiAgTE9HX09VVF9SRVFVRVNULFxyXG4gIExPR19JTl9TVUNDRVNTLFxyXG4gIExPR19JTl9GQUlMVVJFLFxyXG4gIExPR19PVVRfU1VDQ0VTUyxcclxuICBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgU0lHTl9VUF9SRVFVRVNULFxyXG4gIFNJR05fVVBfU1VDQ0VTUyxcclxuICBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgRk9MTE9XX1JFUVVFU1QsXHJcbiAgRk9MTE9XX1NVQ0NFU1MsXHJcbiAgRk9MTE9XX0ZBSUxVUkUsXHJcbiAgVU5GT0xMT1dfUkVRVUVTVCxcclxuICBVTkZPTExPV19TVUNDRVNTLFxyXG4gIFVORk9MTE9XX0ZBSUxVUkUsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nKTtcclxufVxyXG4vL+yXrOq4sOyEoCAqIOydhCDrtpnsnbTsp4DslYrripTri6RcclxuXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAvL2NvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTsgLy9jYWxsIGZvcmvripQgY2FsbCxmb3JrKO2VqOyImCwg66ek6rCc67OA7IiYKVxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgZXJyOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4vL+yEseqztSDqsrDqs7wgcmVzdWx0LmRhdGEgIOyLpO2MqCDqsrDqs7wgZXJyLnJlc3BvbnNlLmRhdGEg7JeQIOuLtOqyqOyeiOydjC4gcHV0ID0gZGlzcGF0Y2hcclxuXHJcbmZ1bmN0aW9uIGxvZ091dEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9nb3V0Jyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dPdXQoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgLy9jb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ091dEFQSSwgYWN0aW9uLmRhdGEpOyDshJzrsoTqsIAg7JeG7J2E65WQIGRlbGF566GcIDHstIgg6riw64uk66C464ukIOuCmOyYpOqyjFxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICBlcnI6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ291dCcpOyAvL3NpZ25VcEFQSeuKlCBnZW5lcmF0b3LqsIAg7JWE64uYLlxyXG59XHJcblxyXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIC8vY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWduVXBBUEksIGFjdGlvbi5kYXRhKTsg7ISc67KE6rCAIOyXhuydhOuVkCBkZWxheeuhnCAx7LSIIOq4sOuLpOuguOuLpCDrgpjsmKTqsoxcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgZXJyOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9sbG93QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9mb2xsb3cnKTtcclxufVxyXG4vL+yXrOq4sOyEoCAqIOydhCDrtpnsnbTsp4DslYrripTri6RcclxuXHJcbmZ1bmN0aW9uKiBmb2xsb3coYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgLy9jb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpOyAvL2NhbGwgZm9ya+uKlCBjYWxsLGZvcmso7ZWo7IiYLCDrp6TqsJzrs4DsiJgpXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBGT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEZPTExPV19GQUlMVVJFLFxyXG4gICAgICBlcnI6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIHVuZm9sbG93QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS91bmZvbGxvdycpO1xyXG59XHJcbi8v7Jes6riw7ISgICog7J2EIOu2meydtOyngOyViuuKlOuLpFxyXG5cclxuZnVuY3Rpb24qIHVuZm9sbG93KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIC8vY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpOyAvL2NhbGwgZm9ya+uKlCBjYWxsLGZvcmso7ZWo7IiYLCDrp6TqsJzrs4DsiJgpXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkZPTExPV19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5GT0xMT1dfRkFJTFVSRSxcclxuICAgICAgZXJyOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XHJcbiAgeWllbGQgdGFrZUV2ZXJ5KExPR19JTl9SRVFVRVNULCBsb2dJbik7IC8vTE9HX0lOIOydtOuCmCBMT0dfSU5fUkVRVUVTVCDtlaDrloQg67aI65+s7Jik64KYIOqwmeydjFxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHJcbiAgeWllbGQgdGFrZUV2ZXJ5KExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCkge1xyXG4gIHlpZWxkIHRha2VFdmVyeShTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpIHtcclxuICB5aWVsZCB0YWtlRXZlcnkoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7IC8vTE9HX0lOIOydtOuCmCBMT0dfSU5fUkVRVUVTVCDtlaDrloQg67aI65+s7Jik64KYIOqwmeydjFxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbmZvbGxvdygpIHtcclxuICB5aWVsZCB0YWtlRXZlcnkoVU5GT0xMT1dfUkVRVUVTVCwgdW5mb2xsb3cpOyAvL0xPR19JTiDsnbTrgpggTE9HX0lOX1JFUVVFU1Qg7ZWg65aEIOu2iOufrOyYpOuCmCDqsJnsnYxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHdhdGNoTG9nSW4pLFxyXG4gICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICBmb3JrKHdhdGNoU2lnblVwKSxcclxuICAgIGZvcmsod2F0Y2hGb2xsb3cpLFxyXG4gICAgZm9yayh3YXRjaFVuZm9sbG93KSxcclxuICBdKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9