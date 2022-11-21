module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_UserProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/UserProfile */ "./components/UserProfile.js");
/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LoginForm */ "./components/LoginForm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\\uC815\uB2E4\uBE48\\Desktop\\nodebird\\front\\components\\AppLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Global = styled_components__WEBPACK_IMPORTED_MODULE_6__["createGlobalStyle"]`
.ant-row {
  margin-right: 0 !important;
  margin-left: 0 !important;
}

.ant-col:first-child {
  padding-left: 0 !important;
}

.ant-col:last-child {
  padding-right: 0 !important;
}
`; //gutter 떄문에 슬라이드바가 생기는 문제 해결

const AppLayout = ({
  children
}) => {
  const isLoggedIn = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user.isLoggedIn);
  //구조분해할당 const { isLoggedIn } = useSelector((state) => state.user);
  const items = [{
    label: __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }
    }, "\uB178\uB4DC\uBC84\uB4DC")),
    key: 'nodebrid'
  }, {
    label: __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/profile",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    }, "\uD504\uB85C\uD544")),
    key: 'profile'
  }, {
    label: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].Search, {
      style: {
        verticalAlign: 'middle'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 14
      }
    })
  }, {
    label: __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/signup",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }
    }, "\uD68C\uC6D0\uAC00\uC785")),
    key: 'signup'
  }];
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, __jsx(Global, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    mode: "horizontal",
    items: items,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 24,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, isLoggedIn ? __jsx(_components_UserProfile__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }) : __jsx(_components_LoginForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 43
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 24,
    md: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, children), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 24,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, "\uC624\uB978\uCABD\uBA54\uB274"))); //grid Row Col
}; //return 안의 모든 값들이 node 화면에 비추는 모든것 react의 node

/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ }),

/***/ "./components/CommentForm.js":
/*!***********************************!*\
  !*** ./components/CommentForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
var _jsxFileName = "C:\\Users\\\uC815\uB2E4\uBE48\\Desktop\\nodebird\\front\\components\\CommentForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const CommentForm = ({
  post
}) => {
  const id = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => {
    var _state$user$me;
    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  const [commentText, onChangeCommentText] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])('');
  const onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    console.log(post.id, commentText);
  }, [commentText]);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Form"], {
    onFinish: onSubmitComment,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    style: {
      position: 'relative',
      margin: 0
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Input"].TextArea, {
    value: commentText,
    onChange: onChangeCommentText,
    rows: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    style: {
      position: 'absolute',
      right: 0,
      bottom: -40
    },
    type: "primary",
    htmlType: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, "\uC090\uC57D")));
};
CommentForm.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CommentForm);

/***/ }),

/***/ "./components/ImagesZoom/index.js":
/*!****************************************!*\
  !*** ./components/ImagesZoom/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/ImagesZoom/styles.js");
var _jsxFileName = "C:\\Users\\\uC815\uB2E4\uBE48\\Desktop\\nodebird\\front\\components\\ImagesZoom\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ImagesZoom = ({
  images,
  onClose
}) => {
  const {
    0: currentSlide,
    1: setCurrentSlide
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["Overlay"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["Global"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "\uC0C1\uC138 \uC774\uBBF8\uC9C0"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["CloseBtn"], {
    onClick: onClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "X")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["SlickWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, {
    initialSlide: 0,
    afterChange: slide => setCurrentSlide(slide),
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, images.map(v => __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["ImageWrapper"], {
    key: v.src,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: v.src,
    alt: v.src,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  })))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["Indicator"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, currentSlide + 1, ``, "/", images.length)))));
};
ImagesZoom.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ImagesZoom);

/***/ }),

/***/ "./components/ImagesZoom/styles.js":
/*!*****************************************!*\
  !*** ./components/ImagesZoom/styles.js ***!
  \*****************************************/
/*! exports provided: Overlay, Header, SlickWrapper, ImageWrapper, CloseBtn, Indicator, Global */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return Overlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlickWrapper", function() { return SlickWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageWrapper", function() { return ImageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseBtn", function() { return CloseBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Indicator", function() { return Indicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);


const Overlay = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  position: fixed;
  z-index: 5000;
  top: 0;
  left: 0;
  rigth: 0;
  bottom: 0;
`;
const Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header`
  header: 44px;
  background: white;
  position: relative;
  padding: 0;
  text-align: center;

  & h1 {
    margin: 0;
    font-size: 17px;
    color: #333;
    line-height: 44px;
  }
`;
const SlickWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  height: calc(100% - 44px);
  background: #090909;
`;
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  padding: 32px;
  text-align: center;

  & img {
    margin: 0 auto;
    max-height: 750px;
  }
`;
const CloseBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["CloseOutlined"])`
  position: absolute;
  right: 0;
  top: 0;
  padding: 15px;
  line-height: 14px;
  cursor: pointer;
`;
const Indicator = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  text-align: center;

  & > div {
    width: 75px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    background: #313131;
    display: inline-block;
    text-align: center;
    color: white;
    font-size: 15px;
  }
`;
const Global = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
.slick-slide {
    display: inline-block
}
.antd-card-cover {
    transform: none !important;
}
`;

/***/ }),

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _jsxFileName = "C:\\Users\\\uC815\uB2E4\uBE48\\Desktop\\nodebird\\front\\components\\LoginForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
  margin-top: 10px;
`; // 인라인스타일은 리렌더링되기 때문에 최적화를 위해 커스텀하게 바꿔줌

const FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Form"])`
  padding: 10px;
`;
const LoginForm = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  const [id, onChangeId] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])('');
  const [password, onChangePassword] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])('');

  //컴포넌트에 props로 넘겨주는 함수는 useCallback해야 최적화가 된다

  const onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    console.log(id, password);
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_6__["loginAction"])({
      id,
      password
    }));
  }, [id, password]); //가상의 state 더미 데이터 setIsLoggedIn

  return __jsx(FormWrapper, {
    onFinish: onSubmitForm,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "user-id",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "\uC544\uC774\uB514"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "user-id",
    value: id,
    onChange: onChangeId,
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "user-password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "user-password",
    value: password,
    onChange: onChangePassword,
    required: true
    //required 제출시 반드시 채워져야하는
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  })), __jsx(ButtonWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, "\uB85C\uADF8\uC778"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, "\uD68C\uC6D0\uAC00\uC785")))));
};
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CommentForm */ "./components/CommentForm.js");
var _jsxFileName = "C:\\Users\\\uC815\uB2E4\uBE48\\Desktop\\nodebird\\front\\components\\PostCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const PostCard = ({
  post
}) => {
  const {
    0: liked,
    1: setLiked
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: commentFormOpened,
    1: setCommentFormOpened
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const onToggleLike = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    setLiked(prev => !prev);
  }, []);
  const onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    setCommentFormOpened(prev => !prev);
  }, []);
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.user);
  const id = me === null || me === void 0 ? void 0 : me.id;
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    cover: post.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_5__["default"], {
      images: post.Images,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 34
      }
    }),
    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["RetweetOutlined"], {
      key: "retweet",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }
    }), liked ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["HeartTwoTone"], {
      twoToneColor: "#eb2f96",
      key: "heart",
      onClick: onToggleLike,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["HeartOutlined"], {
      key: "heart",
      onClick: onToggleLike,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["MessageOutlined"], {
      key: "comment",
      onClick: onToggleComment,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Popover"], {
      key: "more",
      content: __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"].Group, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 15
        }
      }, id && post.User.id === id ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }
      }, "\uC218\uC815"), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
        type: "danger",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }
      }, "\uC0AD\uC81C")) : __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 19
        }
      }, "\uC2E0\uACE0")),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["EllipsisOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }
    }))] //배열안에 jsx를 넣어줄때는 key를 항상 넣어줘야됨
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 19
      }
    }, post.User.nickname[0]),
    title: post.User.nickname,
    description: post.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  })), commentFormOpened && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    post: post,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["List"], {
    header: `${post.Comments.length}개의 댓글`,
    itemLayout: "horizontal",
    dataSource: post.Comments,
    renderItem: item => __jsx("li", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 15
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Comment"], {
      author: item.User.nickname,
      avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 27
        }
      }, item.User.nickname[0]),
      content: item.content,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  })));
};
PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

/***/ }),

/***/ "./components/PostImages.js":
/*!**********************************!*\
  !*** ./components/PostImages.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ImagesZoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImagesZoom */ "./components/ImagesZoom/index.js");
var _jsxFileName = "C:\\Users\\\uC815\uB2E4\uBE48\\Desktop\\nodebird\\front\\components\\PostImages.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const PostImages = ({
  images
}) => {
  const {
    0: showImagesZoom,
    1: setShowImagesZoom
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const onZoom = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setShowImagesZoom(true);
  }, []);
  const onClose = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setShowImagesZoom(false);
  }, []);
  if (images.length === 1) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
      role: "presentation",
      src: images[0].src,
      alt: images[0].src,
      onClick: onZoom,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }), showImagesZoom && __jsx(_ImagesZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
      images: images,
      onClose: onClose,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 28
      }
    }));
  }
  if (images.length === 2) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
      role: "presentation",
      style: {
        width: '50%',
        display: 'inline-block'
      },
      src: images[0].src,
      alt: images[0].src,
      onClick: onZoom,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    }), __jsx("img", {
      role: "presentation",
      style: {
        width: '50%',
        display: 'inline-block'
      },
      src: images[1].src,
      alt: images[1].src,
      onClick: onZoom,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }
    }), showImagesZoom && __jsx(_ImagesZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
      images: images,
      onClose: onClose,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 28
      }
    }));
  }
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx("img", {
    role: "presentation",
    style: {
      width: '50%'
    },
    src: images[0].src,
    alt: images[0].src,
    onClick: onZoom,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }), __jsx("div", {
    role: "presetation",
    style: {
      width: '50%',
      display: 'inline-block',
      textAlign: 'center',
      verticalAlign: 'middle'
    },
    onCLick: onZoom,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PlusOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }), images.length - 1, "\uAC1C\uC758 \uC0AC\uC9C4 \uB354\uBCF4\uAE30")), showImagesZoom && __jsx(_ImagesZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
    images: images,
    onClose: onClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 26
    }
  }));
};
PostImages.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)
};
/* harmony default export */ __webpack_exports__["default"] = (PostImages);

/***/ }),

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\\uC815\uB2E4\uBE48\\Desktop\\nodebird\\front\\components\\UserProfile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const UserProfile = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const onLogOut = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["logoutAction"])());
  }, []);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    actions: [__jsx("div", {
      key: "twit",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }
    }, "\uD2B8\uC717", __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }
    }), "0"), __jsx("div", {
      key: "following",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, "\uD314\uB85C\uC789", __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }
    }), "0"), __jsx("div", {
      key: "follower",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }
    }, "\uD314\uB85C\uC6CC", __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }
    }), "0")],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 26
      }
    }, "DB"),
    title: "Dabin",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    style: {
      marginTop: '15px'
    },
    onClick: onLogOut,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, "\uB85C\uADF8\uC544\uC6C3"));
};
/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

/***/ }),

/***/ "./components/postForm.js":
/*!********************************!*\
  !*** ./components/postForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
var _jsxFileName = "C:\\Users\\\uC815\uB2E4\uBE48\\Desktop\\nodebird\\front\\components\\postForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const PostForm = () => {
  const {
    imagePaths
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.post);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const imageInput = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const onChangeText = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(e => {
    setText(e.target.value);
  }, []);
  const onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    dispatch(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["addPost"]);
    setText('');
  }, []);
  const onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    imageInput.current.click();
  }, [imageInput.current]);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Form"], {
    style: {
      margin: '10px 0 20px'
    },
    encType: "multipart/from-data",
    onFinish: onSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Input"].TextArea, {
    value: text,
    onChange: onChangeText,
    maxLength: 140,
    placeholder: "\uC5B4\uB5A4 \uC77C\uC774 \uC788\uC5C8\uB098\uC694?",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "file",
    multiple: true,
    hidden: true,
    ref: imageInput,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    onClick: onClickImageUpload,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    type: "primary",
    style: {
      float: 'right'
    },
    htmlType: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, "\uC9F9\uC9F9")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, imagePaths.map(v => __jsx("div", {
    key: v,
    style: {
      display: 'inline-block'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: v,
    style: {
      width: '200px'
    },
    alt: v,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, "\uC81C\uAC70"))))));
};
/* harmony default export */ __webpack_exports__["default"] = (PostForm);

/***/ }),

/***/ "./hooks/useInput.js":
/*!***************************!*\
  !*** ./hooks/useInput.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((initialValue = null) => {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue);
  const handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setValue(e.target.value);
  }, []);
  return [value, handler];
});

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");
var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");
let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};
function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser
  if (!IntersectionObserver) {
    return undefined;
  }
  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }
      const cb = listeners.get(entry.target);
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}
const listenToIntersections = (el, cb) => {
  const observer = getObserver();
  if (!observer) {
    return () => {};
  }
  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }
    listeners.delete(el);
  };
};
function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch
  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character
  prefetched[href + '%' + as] = true;
}
function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
  // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;
  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }
  e.preventDefault(); //  avoid scroll for urls with anchor refs
  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present
  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;
    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}
function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:
    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:
    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const hasWarned = _react.default.useRef(false);
    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }
  const p = props.prefetch !== false;
  const [childElm, setChildElm] = _react.default.useState();
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';
  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);
  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];
      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);
  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag
  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error
  const child = _react.Children.only(children);
  const childProps = {
    ref: el => {
      if (el) setChildElm(el);
      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }
      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };
  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;
      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }
      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user
  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }
  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}
var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0; /**
                                             * Removes the trailing slash of a path if there is one. Preserves the root path `/`.
                                             */
function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
} /**
  * Normalizes the trailing slash of a path according to the `trailingSlash` option
  * in `next.config.js`.
  */
const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));
exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;
var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");
var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));
exports.withRouter = _withRouter.default; /* global window */
const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready(cb) {
    if (this.router) return cb();
    if (false) {}
  }
}; // Create public properties and methods of the router in the singletonRouter
const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it
Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }
});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;
      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});
function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.
var _default = singletonRouter; // Reexport the withRoute HOC
exports.default = _default;
function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.
const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance
exports.createRouter = createRouter;
function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};
  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful
      continue;
    }
    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it
  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.default = withRouter;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");
function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }
  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;
  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }
  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt; /*
                        MIT License
                        Copyright (c) Jason Miller (https://jasonformat.com/)
                        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                        */ // This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file
function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;
var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");
var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");
var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));
var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");
var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");
var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");
var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));
var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");
var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");
var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} /* global __NEXT_DATA__ */ // tslint:disable:no-console
const basePath =  false || '';
function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}
function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}
function addLocale(path, locale, defaultLocale) {
  if (false) {}
  return path;
}
function delLocale(path, locale) {
  if (false) {}
  return path;
}
function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}
function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}
function delBasePath(path) {
  return path.slice(basePath.length) || '/';
} /**
  * Detects whether a given url is routable by the Next.js router (browser only).
  */
function isLocalURL(url) {
  if (url.startsWith('/')) return true;
  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches =
  // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') ||
  // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);
  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)
    let replaced = `[${repeat ? '...' : ''}${param}]`;
    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }
    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (
    // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }
  return {
    params,
    result: interpolatedRoute
  };
}
function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
} /**
  * Resolves a given hyperlink with a certain router state (basePath not included).
  * Preserves absolute urls.
  */
function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);
  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';
    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);
      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href
    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}
const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');
function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}
function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}
const manualScrollRestoration =  false && false;
function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }
      throw new Error(`Failed to load static props`);
    }
    return res.json();
  });
}
function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }
    throw err;
  });
}
class Router {
  /**
  * Map of all components loaded in `Router`
  */ // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.onPopState = e => {
      const state = e.state;
      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }
      if (!state.__N) {
        return;
      }
      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site
      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.
      if (this._bps && !this._bps(state)) {
        return;
      }
      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key
    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)
    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.
    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }
    this.components['/_app'] = {
      Component: App,
      styleSheets: [/* /_app does not need its stylesheets managed */]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch
    this.asPath =
    // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site
    this.isSsr = true;
    this.isFallback = isFallback;
    if (false) {}
    if (false) {}
  }
  reload() {
    window.location.reload();
  } /**
    * Go back in history
    */
  back() {
    window.history.back();
  } /**
    * Performs a `pushState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */
  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  } /**
    * Performs a `replaceState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */
  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }
  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }
    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry
    if (_utils.ST) {
      performance.mark('routeChange');
    }
    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }
    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.
    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to
    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);
    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1
    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url
    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }
    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly
    let resolvedAs = as;
    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);
      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded
        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }
    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);
    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};
      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);
        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }
          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }
    Router.events.emit('routeChangeStart', as);
    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition
      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not
        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
          this._resolveHref(parsedHref, pages);
          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }
        window.location.href = destination;
        return new Promise(() => {});
      }
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);
      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }
      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });
      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }
      if (false) {}
      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }
      throw err;
    }
  }
  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }
      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }
    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      },
      // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }
  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }
    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.
      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.
      throw buildCancellationError();
    }
    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };
      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }
      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }
  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];
      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;
      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");
        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }
      let dataHref;
      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }
      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component,
      // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }
  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  } /**
    * Callback to execute before replacing router state
    * @param cb callback to be executed
    */
  beforePopState(cb) {
    this._bps = cb;
  }
  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same
    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change
    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.
    return oldHash !== newHash;
  }
  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value
    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found
    const idEl = document.getElementById(hash);
    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers
    const nameEl = document.getElementsByName(hash)[0];
    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }
  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));
    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes
    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }
    return parsedHref;
  } /**
    * Prefetch page code, you may wait for the data during page rendering.
    * This feature only works in production!
    * @param url the href of prefetched page
    * @param asPath the as path of the prefetched page
    */
  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);
    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries
    if (true) {
      return;
    }
    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }
  async fetchComponent(route) {
    let cancelled = false;
    const cancel = this.clc = () => {
      cancelled = true;
    };
    const componentResult = await this.pageLoader.loadPage(route);
    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }
    if (cancel === this.clc) {
      this.clc = null;
    }
    return componentResult;
  }
  _getData(fn) {
    let cancelled = false;
    const cancel = () => {
      cancelled = true;
    };
    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }
      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }
      return data;
    });
  }
  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);
    if (false) {}
    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }
  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }
  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];
    const AppTree = this._wrapApp(App);
    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }
  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }
  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }
}
exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp
function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;
var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }
  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }
  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';
  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }
  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string
const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;
var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");
var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
const DUMMY_BASE = new URL(true ? 'http://n' : undefined); /**
                                                                                 * Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
                                                                                 * (e.g. `./hello`) then at least base must be.
                                                                                 * Absolute urls are rejected with one exception, in the browser, absolute urls that are on
                                                                                 * the current origin will be parsed as relative
                                                                                 */
function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);
  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }
  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;
var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));
exports.pathToRegexp = pathToRegexp;
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;
const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});
exports.customRouteMatcherOptions = customRouteMatcherOptions;
var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);
      if (!res) {
        return false;
      }
      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }
      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
exports.__esModule = true;
exports.default = prepareDestination;
var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");
var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};
  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }
  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath,
  // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values
  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;
    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }
    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path
  const paramKeys = Object.keys(params);
  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }
  const shouldAddBasePath = destination.startsWith('/') && basePath;
  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }
    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values
  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;
function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}
function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}
function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}
function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;
var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));
var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));
var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
const customRouteMatcher = (0, _pathMatch.default)(true);
function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);
      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }
        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);
        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain
        const resolvedHref = resolveHref(asPath);
        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }
  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;
function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);
    if (!routeMatch) {
      return false;
    }
    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];
      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes
function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}
function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');
  if (optional) {
    param = param.slice(1, -1);
  }
  const repeat = param.startsWith('...');
  if (repeat) {
    param = param.slice(3);
  }
  return {
    key: param,
    repeat,
    optional
  };
}
function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest
  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters
    const getSafeRouteKey = () => {
      let routeKey = '';
      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;
        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }
      return routeKey;
    };
    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex
        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key
        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }
        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }
        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }
        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }
  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;
var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js"); /**
                                                       * Utils
                                                       */
function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }
    return result;
  };
}
function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}
function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
  return res.finished || res.headersSent;
}
async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;
    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`
  const res = ctx.res || ctx.ctx && ctx.ctx.res;
  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }
    return {};
  }
  const props = await App.getInitialProps(ctx);
  if (res && isResSent(res)) {
    return props;
  }
  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }
  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }
  return props;
}
const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;
function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }
  return (0, _formatUrl.formatUrl)(url);
}
const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_postForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/postForm */ "./components/postForm.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
var _jsxFileName = "C:\\Users\\\uC815\uB2E4\uBE48\\Desktop\\nodebird\\front\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Home = () => {
  const {
    isLoggedIn
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.user);
  const {
    mainPosts
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.post);
  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, isLoggedIn && __jsx(_components_postForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 22
    }
  }), mainPosts.map(post => __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: post.id,
    post: post,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  })))
  //key를 index로 쓰면 안됨. 데이터 변경이 있을 경우.
  ;
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '제로초'
    },
    content: '첫 번째 게시글 #해시태그',
    Images: [],
    Comments: [{
      User: {
        nickname: 'nero'
      },
      content: '우와'
    }, {
      User: {
        nickname: 'hero'
      },
      content: '사고싶어요~'
    }]
  }],
  imagePaths: [],
  postAdded: false
}; //더미 데이터

const ADD_POST = 'ADD_POST'; //오타방지용으로 변수로 빼주는게 좋다
const addPost = {
  type: ADD_POST
};
const dummyPost = {
  id: 2,
  content: '더미',
  User: {
    id: 2,
    nickname: '제로'
  },
  Images: [{
    src: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxQUExYUFBQYGBYZGh0dGhoaGh8hHR0gHx0cHyIcHB8iHysiHxwoHxwhJDYjKCwuMTExHCE3PDcvOyswMS4BCwsLDw4PHRERHTApIigyOTAyMjAwMDAwMDAwMDAwMDAwMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMP/AABEIAL4BCgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAECBwj/xABDEAACAQIEAwYCCAQGAAUFAAABAhEDIQAEEjEFQVEGEyJhcYEykQdCUqGxwdHwFCMz4RVicoKS8RZjk7LSQ1NzosL/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMEAAUG/8QALREAAgIBAwMDAgYDAQAAAAAAAAECEQMSITEEQVETImGBkQUUcaGx8DJC0cH/2gAMAwEAAhEDEQA/ADWoutP4WEMOR6NzwTU4hUHegOSBcA3HxdDbnjMuGVXkFTqHUcmxt86zPWRgrBUUiVXqnOJO/XGi7MtGLxIk+JFP8tTtpP1Ohjn0wQ+dQkWYeFtiD19MALmU7yCg/pi6kiwAPUjl0xPWp0wQJYeB42PJvTCSSKRs7ashZSKgjQ9mBB+tfYj78MeAsO9pGQbHYg/a2vhEKIlQHUnQ+8jfX5R9+DOBZdhmKBIsA0lSD9vHOKoCe5e9KMwN9Q/d74E44wCVNasy+CADHXY45ylWkzKQXJmBJX5Wx3xx9KVGKBlhLE2NzPpyxCRaHBHlv6g/1YykKZ71RrEsdVxvfbGsuZqCNpGMSqmqr4I0tchjfe+EiPMKSiujTLR7Thjl/hwqTM0ygaLTzOGuWPhGKeBFyyXGYzGYITMZjMZjjjMZjMZjjhFmaDNUYk+EE3OwxLxB0FNC5JW0EDe2Ic/TqVHKi6gnyAvzxNncsrUlVmAAi8SLDAXIr/xdC6tWy5MFn5x4R74gZMtI8b3H2R+mCG4ZTa/ei3+U8/fENTh1OQvfCeXhM/jiir5JO/gc8D0934CSs2mxxLms6qEAzJE4i4LR0IVB1Qd8S5vM01I1xMSLT+WImjsEoZAOK9xyu6xoJEmDG8YsCMCARsRhVm86lIyyarwDzHtjjnwa4BQZSWYG4577/PGVQVrtpIkjrtvv54IyudD+JRfrBwDnM7V/iFpr8BpliYG8x+GCpCSj7QurWYcuR2/vgJc/fciTYfLpjtUJMkzAOIatLedx/bD7EkyU1G1KZ67yfzxPrcncC3IDAlZIC3wTTVJuZt1xwdw3IkyZacHYAyOmTpwfjikeDyunnagFSHazgbkgfHyPtid+JNLyEYaFN1H+TciDGBHzzzWBYGKgHiANpccxgutUSGBpJPcq0jUJtSsYMc+nTFnXgir8kf8AFISCaY/pknSxFgptBnpibMVqRKfEDpeLA7BgeY/DA1LuyUGkiabCQ0xZwbESfnjs0qepBqYf1N16lpuD+WA6GjZ1TpqTTIdPhYXBB+t1H54M4LSHf0T4SL7MD9rC6hRHgh1Nm6ifmME8Gy7CtQJAIDGYIPM8wfPAfAO5dGy1FHTfVIjxbXH9sZxtmVargKfCsBhIsxmR74CoZ6g7r/LaQ8A6tjIv6ThlxMsod1u2gWFzZjyjzxCRWDTA8s0sp6lT+GOjXBeqCiWPS5Ene+OMu8spIgmCcT1Mw+uoCLA2ldxJ5xhYlJs5o5pO71BFAva/Xyw3yplQRhbQzfhnRedgBhnlmlZw/gRcsmxmMxmCEzGYzGY44zGYzGY44Q8Reo9QoskA7D23/vgnNUCaQSwPmbemB+I5l+8KLtPIXOC9DaFEXA2wO4HumLm4eYjUg9CcB1OGNqB71J66r+1sM69GoR4QAfUYXZjh1YsrWkDeR+GHT+SLXwNuCUiqsCwYzuMTZtaUg1NIMWkxiHgtNlVg8TPLE2cyKVCC/IRviRoXATSiBG0CMIuM1lTxFA97Amw8zh5SUAADYC2EnGmpi9QMRqsF5n9Mcc+CTgeceo51QBFgLDcYD4rnGXNCFkaDubb9I/PBnA8yGaFphBHLf3ON5gFs0NoCMPvBwyJT3S3ATnSxEmLHkcbXNo2oAyegHpjvP8POqRAgE/MYr1LJVKbnu6hUjci24W2GIp1yP61M6VGht+cYPyWXH2eXXC7KLUdlDuSBqPrAw/XwfD0G5wG2VjT3NUacHYD9jBeIS0xifHFEeU1c/evqWmQG5oPtReIPPEn+IIZ1Ul/oidJYGNKmNyOX3Yjq1UZqwNFfM3E+Nehwd/htI0BWhgSjqQGEAKg2kHli1ojTA6FWjNM6XXwtF1POpPIeeO2FMshFRhdwJTeSehPXHGUy9NhTIZhZgJg7lx1HXE4yAmnDizGZB5hek4DoMbIMrQH8uKiGC3MiZjaRgng1OHok6SAx2YdfXAuWyR/lwynx9Y+z1AxLw/LOr0SVBipeCDzXodsc6o63Zb0elqEUjOrfWd5F8MOJq0PoJLaBABg2bCtOJAtHcD4onUeu+GfFqWpXUNDGmfKL7ziEikACiTqGre0zvMc8G1jU1v8AFHLpgCkpXSDcgLJF+XXng56Dd65nwna/P0wkSk+DWWqVSPEGn0wyyx8N98BZBXCkNvPUeWDqBtfDp8C92S41qGBmzW8iBG/LA9GsZkkaRc729PXDpCt70M8axDSryTKkDkTzxFXzekxb9/ljkrC3QZjMcU3kA9ROOsAInz2YYM4UBYIuBcyOuJKeru131R74jzuaK1dKqASRLc9vuxquWagCWbV1G++ADsc1A8RoPywuq5arrBKG3TGq3ewIZ7HnNx7DAtY1tSwakDedV/uwUTaXhj/goYBw4g6pxPnskKhEsRGBOzpbS2smZ+tM74J4hlWeNLlYmd8IW7BVFNKhegjCXjSIf6jaVB6TPlGHGXXSqqTJAicJuN5fXI1KomSWNv8AvAC+CTgz0g+lA2x8TH05YKYjvrASAZ/vgXg1GmrjTU1tB2FuXPHPEsxozKBRdlYsTtaI/E4dEpcbhvEtv9pwjWsFLAgfCDf0GGudrmF2uDyxWqufIfxLMwPaN7+mGSIvkd8LzQZlIUAaZttcf2w+In5YrnCiJUAmLxflG0Yd1l23+HqcBoeLCaw2xJgSRbBWsdccVTPKKuZpaqpNL6smKhvLJ1BjBlLi9Pulo6XA0OwggnxIZGwn4cBVUpFqgIcAoOY/8s2sP3OJsvlaR0EVG/pOQNAIgCoNw29jizojbNZNKOqiQziJgMg6no3nhgtan4T3gu4izc1S237nC/KqhalD8zuhHMHzxiqmin/NSzg3JBMaeUeWA0FBNEJ/Lh6dqn2vJesX8sTUKil6ZASA/wBoctPnhXSyx8PjT+p9of5bXjpjvL5Vw1MxMVeqm0r5+WBSOtlxXOX/AKCCDvf54P7RVlSjUdiYWk0+lvvnA9TPAf8A00/44K47lEq03pvID0nBI5C0x57H2xGRTHv3PJc529zAaKZAUQAABaANycWnsF2kbOPVFTSKqqCTtqExtyiPefXCzI9kMvTUFn7wlRymT9qCIAIuJ9zixdnctQp13dIph6dyQBOm8mOcSfbCRmro05MXtssnD6LKpBZSZ3BnB9AWwv4WgKakcOjGQwuDysdjthjQFsMuxCt2wLP1KVNWqVSFRVlixOn3Gx32xT3+kOn3hNDK1KlMSCyrA5XgA/fGLJ2v4N/FZapRDaWYSpmwZSCJ8pEe+EHD8utLLpSa0ARpgkDmWJEAm/n74GSUlVGzp44dDclcr47JeS28F4pTzNJa1IyjfMEWKkcmBtiPiIhtU8xaPQYr+SztDIitV8QR9LCmtyzmFAQEwGIHUDcmwkSZPtH38q6d24uBO6yPvA/XFoRlKOpGPK4xnp+xZqNAfFzvfn7eWCAbYiyx8Pviv9puP1aVVKFFaeplDO9SWVQxZVAUEElirc4Ec5sjdbsKTbpDDiVTSe8WmGBiHmRcch+eNVMw3c658Ub7DfCJu2iU6RGYp/CyIXpr/LOogCVJ1IB0vbYnFho1ZphoA9BbfC7co5pq0wKtxEIhd6oAAuTtiv5ftalSoiLmNTE7bT5CRBwt+kHMtWzGXykmGDMdA5TGozFl3364rfaLsfmKCPWVJSndtJa3msgT1thk13FWNyjds9c4LXLayx58/XAvabjDUiFp3eCdI3PSBBJPttiu/RB2pfNpUp1iTUpaYY2LIbCerAggn0wt7U56qucqa6maYrTRlo0qjU1OpnALkMvhlR1gAmN8NBxi9UlaXYbQ5LSnXyPeEdtnWrTo5qn3ZcwjEFSZsCVbcTzG04c8dyzVAVUSZxTOH8BV6or1wA6x4QgWGBM6iRqYxBGotpI3xaM05ehC/Ftbcx/a+BlywnJOKr6hWKUIvU7DeDZI02EspMGwMnGcWUCsDNzuOlsa4HlXVgzKQI8sQ9pLVqR1QGJm/QDARGa9vAWzBgvX+2K/mE8Vx9SflhhT0grDHfrgFyNTGT8P64ZEeSfsxmFYA6YHeNeTeQbeoxZ8yAIjofyxXqdUBgwUx3gO3URh8eIC3hb5YVvcrFbHQSNOC8BHM6iPCR6xgycEdHlLGjqbxVBNMTKjYqn+bewxPlXoeCKrT3bqJTqXvZuUnETcP8Vqm9IC6nki3+7HeW4Qx7siokAEfWvdj9nzxXYluIe0etaVFcu5qPUqMgIBX4gu5IthLxTsXm6Kmo1MvbUxQgkR5TJ25Dni55Xh7DuiKqAq5IN7SEE3XpPzw6p5mkuqHNR2AkyIkiT5kW842xHJkcZfBrwY1OL8nnnY/N1dS06phHh6RcgA6WCnST6jF0pAA/En9T7S+XnjdHglKvWpGQiZdHKqgu1kGmeQAXpyxZ8jlcsogUKe8+JdRnrLScPB61ZDKljlRLn88UAIFPfmP3fDHOOsCeaNf2Fh5n8sA5nPMTC0i3nsv3XxBm074FXoqQd2ZiB7Df3+/HPG2thIZop72aocMDqDTMQsBnE9bGP3GKznqFUUc673KUauoxADFGUKPnMeWLfluMKmmmoVotCCAI3uSZ/U4S/ShxMU8jU0mTX8Eco0nUR08KkT1jCxw00y8eo1JxQ57BgLw7KedFD/AMlDfnhu1adgSfwxWfo44ktTh2WkgFE7oj/8ZKfeAD74YZmoxJK2j1/HFYwsSxydr2OEHE8mX1VaaLqgxrsLQdxtN/W04Jyi1GUEsIO4gkkDlPngHt1nO5oWJ8epIBuSyMN+QEz6x0wPTUnp7jwlJP2lJ41xFvCtQhqjHUQo9QAOgF74zLZ1EZGIOpSLrHuNpK8v0woy1IhnZiTpVUH+VEELt/liT1wBmOKgG1+uN+OOPBjSnyykscL1zW77eD2bh3aOhUKKCZcmJGxtY9N99sVztfxhMrxFe8ZUSvQpqHaNKtTqVSJJ+EHvPi5W6zip9mOPnvQQplCrW2IDAx8wPmMC/S5xRcxml03QU1Cz/wAjPS7R/txhz4aWqO8Xx8fqFVFpxGn0gcaPcigrK5ckWAIAiItYvJG2049D4Rnlq0FZVAIA1IfqnmDjyLhms5ilTeCcuhUQ2oEg6ZDCQfXyxbKOfdTKGMdh6bVC73PF/Efxf8v1ChptVv8AF+AH6QGq0M/ls4lHvAqFGpKpbUJJsACJ8U+qjDvMcU76iFBqk1QwANN0gGxL6hZgLQPXniSjxvYuBA35fO/lgrP8RommzinZBJYEypJAFuZM/IHE8vTziraL9H+K4Mr0p7+Gqf0BewvZ2lw/vCGZmcDUzmTpGwEAACST1PPYYa8Ur0awgiDsGB9fiEjUtzYzucQ5NhVDODKkKAfmT+OA84adPxVDAGJdtyGfq8kcjcHS7AuZrNTU6gajE2abCebEmYtz6RbEVDMhq6gHw0aUPMRrq3iSQAwRSb8qnngzJ52lWJ7oh9MWAsZ/HY2B+WBaYWl3jAKsu7RTEXJEgQ4NiQOWwlVMTjzSUXUeWet0nUZM8Pel/wBD/wDFQWgwGvcswi4mQwGlj5g/W+L4WJXOSBqCsykw1SZAETcm0WmdpElWOjFbrOwEjUB4tIU7GGAKiIBVobw6SIui4P4bnFqzpMFTBAm0GF0wNr207aoSWLOMuPPOMvk0TxJob1JcrICw1wAR03wHWQSQekjfo2N8HztOpUekjgmnGuCLHkoAtYbx4RcDU0vgnMZeHuTEH8Gx6uPJrVmKeKUd+xlMaKQJK/VIkc+QwemYc6bASP0wGcrS0S7tErF/TbBDLRsWd+cb+uC2wKkg7KFtXiM2w0wk4X3Or+WWJI+t0w7w8brcZM86qKquFNRA3dzp8UwUsY07YOytAoq6iBc/a+0B0tcgX64JpdpEqG9JCT1Ak2Gqb9PnEYhqdr1U6Sg1GwBAAPMAt7/jjI+rdpKJygubFQUQB3qTr+35Lb18sTFLEJUpqWMfEN2MWvGqBvBNsd5njdR9JajSDgkw4BuGEmYPkZnlN8RvnQaYNWnSEeIaVjSZJmw8+hF+uDLqote6IY6obpm/4CtQJ0uKi/DYQ/iIFxJkRMnzwbVrEgweU4xM0Ki612a4PI8re9sDUK4JsLCQfbGyCSW3BnyTc3chbWrVlPhqah0Y/nhZmON5ktpBqNp+JQyhT1HmfbphxxKrJsLmygfpjWXyMSvMLc+bb/lilErDeAVy1NXKP41toU7dCbnrcb/LFc7eZ+lXzKZevXFCjSpyjBHeWc7EJyGkidhHniy5R+7oAqGVLyQAbSbgTO/l1OFXHeGUa606zKNauqmYIYKrwG6gFiRby2w8baFlkjjTk/AT9HbdwtTL06tOuGPepUQkUwG8DLMfGCgJUfaBxbq+bRQqsQuoxuTqPIC3vtih1YBs6iNpOmB6SY9MOMiMwaSvWSaouKQeGZgWUEMbRETIG49MGbpJLkP4f1MupcnKFRXe/wBi5hlVZJAAkTMDY4qX0gcapVKdOmjy3eAlStwBzHMXj1BxV8jxrPOndFXfRUJgiAGB2L7aAR163iMZn8vWqEGoaYPJQTM235R6HFI4ZxyxltX6nuYOknJ2k2KWrFqbkbtq+8mMOOyXZ6npVwve1iobS3wrtO/xMNriBf4ojC9eDVgqppDEATpZSLC8X89tzjt+0LZRO6qagCxkD4lMR1EjynD9ZieSGqL3Xb4Kyx07kq/Uu9Xh2XZahCpqdQH07EiYm24JmbbDGL9HWUrtSq1C5XQD3YaFJIU/FGvT5Tz35YWDNF6KPTpuRVAKlQ11A5g3m2wEdMW3sznu8o0oj4D1kFSAQeh8vLGDFLIk4vgy59l7WTZXs5kqXwZekDEToBMdCxkn3OI6vAsox+DST9kkD5bYLd/cRf1BiPxwHmcwUBK7/wCksTfkBzxojF9medkxY8n+cU/1Vini/YzUwenXIVZ8DCzHl4hex8jhBkss6PWSrICnS4FzNipF/wDdPKRi48OzneFmhlZbBTvzho6c79Pkg7aZ1Mu9IsupWBYibkoRE9dx8sdklNRabMv5HpozU2qS8EuTzi0lahbWh8QBmJuCOgO4HLa8TiJsmKss4keeMyFWg7F2AV3ABbYkCYGrmBJgHqcNTkvDCuI88YZO3uDN0k5tyx7x7U0KqxWisLAtJvb3EQbbRfexEjANClUYEuT4iI+RgJvaNj4ibwHEqpHHaNVQWuQPhkrpFzYk8r7RtaTviHK5sVFB5mQRvB5jYztMEGYkh/jHmSyu5NI9zBH0YRh3ojzLLTWQBEWEi8HmbggH1A/8o4Cq5apq1aitR1uwEDSxI0hTcGNfiY6jBmIJQ2s6l1mWNtKjmTYEm/sZbopb4MdZNJLPAALWgcl2jxbeGbsBAnYaqeNtt2XsG4flTQb+XIvex52g39LEKemq02mjnRVWLBvz2+WETuS0JExE2sD5kQFvOxEGdJB7wyZKo/eAXMnSBEHysfEFPXxDa6ica8GZxdCtLh8FhKlgqlHI1DkPn7HB/wDh0wSAbGxHlgXhHEtQ02FwQTh0zfD4hz2jHqxlqVowzx6JUwOlkQhDARaIAthhgTM5kDSPEfO35kYl78/Yb5j9cVinQFR5nS7uQQRJ2gbwIjp7eWIu5MoQ4KpHhZSB4SPOCZn11HC1MyV1a4m5Lcj5A8rCJnbEKZvUPiJQbk7atwDHqIA6Y8e5eRlItaUxpesQotovYGZIvoMR7fnhXxDhmYIamFdkmAyXMSDB2ty+cb4XV+Kug0nTUBOoKQRfaJ9F6deuI8r2vqKxL0ioLfVMgbCR1FsWx445ElJ0Nka0bclj4RRqJlRrDKUY6VKkMAbyQ0R8X/eAP4upTdpQjVtO08pjadsabtbQOo6zcyAQ02EWt6fPAOY4zTqaZJgmIg2sdxyB/XHotxxw2d0jCoyb3Qyo8R1lDTEswIB+z1PsOeD6VWkSaesMSbqpkwogao+EWJv+JxWuHBDUEa9BJ7zxAeERIAm07CN5PTDzI11o1qhywHc04RWaW7w6UYtcgAAmNpkb4bBKWSN1QdMU9x/xSDQFJAoYgKkWM7AQTHtGEOa7MZitRakKjIzQNbkWEidMbSBHLC/PcQ01RXXLJ3urVqVmABJJLQQR9abYJy3bIowd6epReVeNzAmRf8oGLxg4weplMixzktKJuC9nEy2lKyhSICQqgSZDMTPiaIvPX1xYzxDS6ywFtUiLDr5Yo/FfpQrBiO5osg2RlZz8ww/DHXEsxrV2ZStRishDCRp8VjLEzbfGb0Hdxex7XQYX1L01xV/VklTiBMtqMm+F1bPkWbxL94xiNtgfMCeV9sbrfY+0jijHZIITPQJU+Ecx08h1xDmc+HVhUUOJ2YTFxYcwbbjARylzBiNwNsabIv8AakTOwwG5+BMkNUd4X9j0nsrxFDl6NIg2AQNtYWt8txzxY8nWpqwVNKLeQABLne3r85x5nwrjwBFKr4NgpHw26fZOLfwbtGpcDwOCdDnpUWx9mEH1kYipOTaapnwnV4vTySpUr47otD4Hr0QdxIx0uYk3gTy/IY6Yx6YpFmJojylNQxteBf3MYX8a4PSzDaXBDIPA4JtO4IkSD0wbluLUYIFnvKtGox0vtOOMmC2p2JuZ3tgf5Jt8CyTWxQq/CXo1TSdoAAIM2I6jynC7ivbTL0IWlVdmHxBfEoi3P8iMP+3/ABVKlQZYLLAAl7ys30jrK7za4tzHlXbXgy5eqgUQHSfcEzzPljNkjTpoy4OmcMkpKTS8If5v6Sy0eAtFwDCieRNybYH4X2+Y1171UWkxhoklZ533ExIIPXcAimEeW+2NHE3ii4uPY3OKc1N7tdz2+kQNVQ2kHxE7yOXxEyL85AuaguN0EZwAo00wLk2nnJubc5k8jLH+YtN7BcdqPSNAlWandNYB8Pl10m95E6fOXnHe06ZemPFrqGyKTud9bwZCjf12JaXXxp9LOM9PNm2ORNWWIIFBvF7m4iItAvN5gkkTOl5LMtq1+nwgwAwgTz8LAJq5eE0zvYY8yzfHMw1UVjXcVOTKY0j7KAWVfIW98ScE4hmXrLRWs6CrVLVGWAxm7nVE7AmNpxr/ACEkrtE/WR7JwvvawGqmyLHiYHc9FFuX1jYSI1cnlXMqCF01Cd7KD+eKbwfLVaFMpRrsoLFjIViTAElmBJ2xY+zHeMahqVTUPhiQoj4vsgY3YlpjRLJJzdsEyXaY1a5oigygavESPqnoMPO/bo2KrwYxnX/1VPxOLzq8saeDOj58q5o1ERakioARA3JAuANpIFiMdUqwg0gNAUzNQXLESAYW4iLkRcYCpOxaAICgfEpn1kgHmL2t88aoPrOs1SYaSBMSesEbATF8eZpKDA5xFHhJswnVB02BgbTv6YFzjISJUi506bzPiJIj4Rf9nENWtT1DwKvW4mI66tugxj04A01DYkmwvOwIDCDt88dGFOwkmarkABl3EyvLexA23n5dMZQzJK2FibHn62tP6YizSIEuIG8A7DlPvsPTEFN0N10jT1tHoBh1FVZxduy1Idyzg6i7aQSIPhkfjPph5VUKoUbD9z7nAvZjKd3l6QYQQkmftN4m95b8cDcazZJ0qCfJVJO/lbHsYoqGNIxTeqbZgzaGqtMrqFQhIkAjUQJVttc9bbg432n4LUo0qTNBUTTdvLWe7kRYwYPn7YrOfSpqVxqUo6mXBUCCL3+tNh64s+W7SLmFCOT/ADPCwZrWv4ItPP28sYM+S57cG7p4x0tPkowANdNQkGovh5QWFv1xa3rEyAfzIx1V7KChOY7zWqklRpg+KwJ5GCTtG46YUZtj8QMHrjTjdwtH1f4Fh9PDLJLu/wCBg1ueI2bnhUvEPttJ6wcFJWkfn+WDHInwz1cfX4JOlJWF0Ra5HoPxJ64mpm04BpzyGGPBOEV81Pdg6BbUTCn/AHfpf0xbUWy9TixR1TlS+QbOUlYbgE8sHcIzeXy9BgECVLSALVbmLgyGBkg2I+eI+LcAq5ezlSD9iL+UfF7nCrMltERteD5k/wB8ZepbSUltTPm/xjLgyY1lxtN8cp7Hoi8Yai/d5hS4EFXQ3uARqUwCR1EbbYsHDuK0a/8ATeTFwQQfWD+WK/XygqMzG4Y/hYEfLFe47WfLOpptpdWlTH3Rz6EeuNLgux8rrfcv+c4dSY6mpgkXmL/PElWoFQlyERQWPkoEkn2wF2V7RU83T1LAqLHeU+ak8xzKnkf0xWu3XaLvdWXpN/LU/wAxh9dgfhH+QH5nyF1W7oMpUrEX8V31dqz2BqFyDyW8D2ED2xXvpSK99S0xARh7yD+eHHDmMNpXUes7fr6YOq8JpvoNdFqXKgN4om9ukxiGeXu/QfDG/qeWUaRYgKCzG0ATi28K+jutUGusy01+yPE/v9Uff6YtCcBorVUU0VRM2Hkfzw74a+qn7YzSyOtjXHGrpiTLcOoZdaaUqYXwgu+7MfMm/ttjzCoWeoXIgsxYzMySSfxx7SOD03AqVapVQNlABt1LenQ48Wy9zJ3ifnikdyMk1ydssbb9cWHsBlA1WpVP1FAX1YmT8l+/Fcrfd1xbuxlICiCrQWYk+mw/Cf8AdhpcCIvuWqeHDzsy139B+eKvRzELJnFi7KVQdRHQYSPIz4FWQMZ5/wDVV/BsXXvD5Yo2qM65/wA1T8GxZf8AEE/+4v8AyGLsgjwzL0yApdQp2WDuQCDYfOOV8QgqDpUmJnxDVvcwTykST+z2M3q3RYVouQAReb9fMdLc8cZ+sh0rp3Gokb7XgmJuYjbfHn073KkziQtkYgzJAi8kxyFo/wCsD0aKmoVJJ1HaJuZJ535Yh1Io8J8jMxcQRtMecRbBdlAeU8hbzgSxB3nmLetudoPBxnajk6SomTJUbiwMnZrH5z0xxQpiVLldMrq3NpuL7Y5SWMGwE+JQDEA+fW/yx2MuX8GqSSIMEDl8t4t5dcFOtgHoWZ4ho1Aixv5YDyvFqcSpVf8ATufyA9+vsRRo6qShvijSbbkW++MA0Oz8syC0QREbfL1x6WTK4x1LgyqK4DKfGuWrw+kk+23zwTk6mWzDrSqqNPxcg4j6wMWE2ta0GcAnsw02Y3Eb2+WMbsoxIJaYjyiOQjGd9ZGS3RWONJ2T9uEp5enTp0a1Qipq1K7A2UrFwAQJ9dvXCWhku8ylWpBaqrqFANiGiRHMxPvHvazwGl3GlkDNCg7yd/FJBMryA5M1jMFd2ayX8uCRH8QAIIIOhQ2/PfFYuEsb07Gz85nhD0lL2v8Au5zwLsV4A2atMHu1Ox/zEc+ULv1w2zOVoqNApoqjYQPw3xNxDiJVYMTfcffbC4ZHMVoAGjVH1pF+cSR+OLVjwr+2zz9U5cHGR7NUsxUgAhF+MgkeiiLEn7hfyNxqZqlQpBKcIqCFUQPxH34Hy+XXLUAqAkL8TGJY82PmfIeWKxxHMPVqaQNzHkLExfYwDaOWKPSlqeyC8s5e27IeN8ULksWJ6ch7AWxXawl5E/D5nkYtFhJn2xY6vAKjGbwCD6+5xFmOB1TAIJF7iL/f92PK6nqfUemPAYxki88J0mkKkiCuqeUETOKB2nzgdzO1z88HUsnmRTSiNXdr8Kn1kBusE+2K/m6pOq1zPKYI5RyxuwZlkugTTVA/ZKo38bCk+Kk4MTcGLHytthhxKlpLLPwsR6ATc/LfCPgOeahm0ZmIVpAPQ8jbz/HDjiWbUuVmdRkkXM+nIfidhbFIvfcWR3wgORKghSd+Z898MWrFR8LfECSflhUub0iNQHle3v1xInES1pB9/PCZMClbT3HxZdLVrYdUaxLT1GO6dZ6ZYBSQTIiD7b2wDQ4jTkAsFO2+/ng2lrXNUqFTQyVQ4R6bHwsFZlDSLg6CCBEWucZHiqNSNbz+5yjxwAcazVfundlhVRjvMAKTytig8AbLh2/ie87sISvdxJYbLcHfHqtfIu6MjL4WUq1+REEbeePHuI5NqVR6TfEjFTPODv6EX98JjlB7RYNbk7ZCas9PnhhwvjD0TKwQdwef5jFo7FcLp5vKslamHNN9CsLMq6Qw8QvEk4H4v9G9VZag2sfYazezRpPvpwzyxTpsUZ8I7U0qsIfAx5NtPkdj9xxfOyp0lgRHh/PHg2YytSi+mqjow5MsfLqPMYuX0ZcdrnNUqALNTeQRGrSACdSndQCBba8bmcUik+AMsfaDP93mKrTsx+8f3wl/8Ujqf/T/ALYZcGy5zZzZqmKtJ0DFQuhwzMhsQeaSDNwcTf8AhReo/wDTTCzyqDpgUV5PPeJ90NUqbMVty0kyCPMkbHkfLHFGnTIB1iSxABAkAAwT0EfjiJgCHUkSxEDmCL2PntfyxHUhfCCDYSflYeU3Pt0xFLah6ClroXu+nSSFGnUWBG5MwB0MHfywRUqWKoZIJDCYOy3Fr8wdthgOnS1qzOYA8RMcrjrcyDyviNfCNQLBouQIEWIkCwuPvwrirA0M8uqqAGvqBJ38YBsg6MT6Axh/2c4Ez1oqrsAxOr4WkQbGNUAjTO4MzpjFTyJVjrYkvNtXqSdvPlbfHoGX7VAUlBA1BQCdun44lktbI4c8Wy+nQQPDGn5bfngbImKyNyYFDPzA9ZGIzx6m4Km46j5/uMOOF9nmrp3itppydIiTIMTva4642dPPXicJcknB6tSJ6lM76yB6D9JxkWPiwg4hnKq+EKQRYzI/f34gpZipcagDzJNhPnfYfljzvSk+StN9iw1SsQzgA2J0hgJ56SIIG8EXwBxCkErZaghLDvHqu5WNRYN7bWMdBjOA8Jeo3eOT3IMkkGHsTCzE73MW9cc1e0WWrZkE2ZadqjtpA3GkoTYnUd/FKsCBAnd00JR5e1oD2u/BPxRBon98sTZbidMgAOJFut9sD59waRIuOo2+eFC0lgHTJHMR856Yr17ftafkhii9x9T4jpeHJkGPhX/9TFsGjI0WZaqqJCwG9yduRvc7nnOEuSydSuTbwqJZokARMW522xJTNTLuUIkA+JQZ916jF8U1mx+5fDOacHsOGIkjaN/19PPGu7BG5J9L/hjmnm9YgWLCAcQZmlWpE94h0j663U3tflfrjzup6Z43cVaLQnq7BZjqcU/tbkQlVaqi1Tfyfn6Ei/scPv48db9BucA9pQXy7aElgVMf7hPyBOE6XLoyL7HZFqjVFI7QZQMmoT1Hl1xeeAJl85lqdWpRQuwiodNyy2MkdSJv1xVlTUpU78sXLsnwUoAQ38t1UqgMi4mY5GDj0uqi5Vp+4mHhnTdmMobdwo9yPwbC3jPY7LaCyB0YR8Lk7kDZtXXlGH2YYByE5GB+/wB7YHzlU9223wn8MeUss4yq/wByyruiucI7NnxAVJIZSC1hE7Ec+Z3HLGq7HK8Qy7VauqkW00xo0qPFJvPxA2vch188Fdk+N0q/e90SSNEhlIsdX6HHfabLHMNRoFBp7xX7yPhCHx8rSvMm9hi/qtZPcPoc4vHGvPb+S01KdIEjU4j/ACgj8ceQ/SdlNGedgSVqIjAkRsug/wDs+/HptWvLGRMkm3nf3xTfpQyWujSqqINNoM/ZePv1KPniWGaWSkuSZD9D2Yh8wkTK02AJI2LAmx8x8sejLUJ2JT3Y/nGPJPo2qac5pP16bjpcFW//AJOPTdHSfww2aSjPdHEvFMjSrJorstROjqTfrfY+Yvjz7th2YTKjvss7KkgOAzzDTBknYMIi92F+l7YX2NvXHPFMtTrZerSNMzURlnVsSLECOR/DC481S8I5lV+iepP8XT60kb/hU/R8XP8Agqn2W/4nAvZThFDJUA6ioK9anSFQarqVknTaVkmIk/CNsOP8RX7Vb/1cVzOLlyDg8ffhjnxHoBty/c/PENLg4g+He28x1v6xf1xcv8FE/G3/AB/tiUcJ5Fx7jf78PokkFTRTX4fIMidM2j3+e+Mp8Ig258o29fwxcavDIHhcnyC3PvO0Y5pZFi09PYn9RibT4G1Jop3+FWBIje8Xve+CqXDjpnSZiDG/y54tTcB1bt9/XBOU4Y1Mq6mmGBBFhuP+sMk+KO1IQcM4K+r+ZFJBuX8MbcoDE3BtbzwfxfjVFe6oU9QoI4LunxESAzg8mIn2gTyDvPZepXJao1J2O7GmpNunh6W9IwvTs6s2CSOq+c7HljRjlHE7Sbf6kp3LaxTQzFF6tUU9ZXUNJYkm6ibtLRqDRN4IwY9MG8GRtvPy5/LDP+AIsWQRyFuu9t8aTL8h8xJ6+/4Yy5ZtzbS/9Gg2lQOeIZg0xTViEA3KgQOgnfAS5djUNtTEiCbkk7Dbxf3w4/h1JXWHKyNRBho8p54nRqdJgaFC4FmqGSD1F4EeQnC++S3TGUh9wbKmllBTqE641EHcajMRPInFU4fWy9PWmYpu1TUYPSIG09byRz8sE5niFdmmb9AY/Pn1wG+SYkmDJk2jfc85M9cPknJxSSe3lHbdmTVe0qhYCLpGwIbr9kNA25ecRM4F4fn++q6VLsQCQPigDSImFsCQJMxOOjwsne3nAn9MRjKBZip1Bjn5en9sJDqZxkK0nsx7lcwBXo0Kcd7JZ+gEG1vIH3w64xWYUyrRLQvlczMTNon2xVOBUKKVRVZydBDKoWZI2kn2/thnxvPGqsIYJJmeXpckztPr1tV5ckrb79h4qK4AqOXp1dTmsEVWgAnxH0Hn5+eN5jiNFQaCkw0gwTvvuec/uMBLk79eUgefWMc57h7kfy3VG+0ylgD1AkAn/VI8sZ4ZXHZr6nfNklDs+qMBVZleoGNOdMEiJBv8UGQoPJp2wx4XmRQod27KKpDaBz06tx1CyBPoPWpN2O1nvKuYerV31tq3tERUBHK04IocEZaq1GzLM0EKrQAP/cT7mcaZ56i0mLal/rT8+Rw1YAxr95M4T9oeLqlM6ayB9iAdbAXkwJuBNjHlfDWhw8iZcR6/OY5fpjunwxPKfTGCDUZW1YzS8lG7EZnus0wSmyUqgC+PlAJBE7knkJ3O+PQlrhhM4G/w9B0+X7jElLLeYA9sHLPXLVRySJRfnHphX2xNNcnWFRviWFHMuLqAP9QGGtbLJ3LhSy1SraXsVUkeFo+tG8YqWa7F1Kj6quYZxy8MH2km0dBvg4oRTUpOv5AxZ2X7L5xa2XzPcxR+LvDUpxoKkE2edjtE49EUN9pfl/fFKqfR+jQO+ZV6FQ1zzFxGLVRy+lFDVDIgT1tuemKdTKM6cWAOaObb7bY6CjrgZB79P2MTGmYtHucZN2GrO+6Hmcb0eQ+7ELKYnf0sPuxxLdPvwNztIRRAG6G3n+xjvvAbBD+WI+9vEfsYC4pxLuyNUhRY6Ym+xExt0tiseonL2p0BRQU4Bg6Rq5STE406rABG++/9sC5Pi5LMreMMAQCiiJi83PwnbrzMXZowaDpHn69cGevC9+RtKBu4p76TPkMR90skSfTDGlfy5Y21IbEA9PLA9ef9QulCj+Gkj+WRcwTp+4TjsZIAiEkX+sbHzG33nDFaYIm/7kY01GTE74WXUSaoNAlCki+FjA6Ksfv288T1GpWs594298SLlxPzP642cuCOkQPP/rDRzyS4R2lvkCr5miPqVDeLST9xxNSAPw0Z82b8pOO6dEKQN5veLfdiWrQ1C5OKLqHHlHOPg0KHIJTHtjf8CxvqUegxzRp6dunMnHJdxF+XU4L6qH+yb+otEv8AAgSS5gDa2A6tWhMQzEdYAHuY38sSCQxG5PU2/DECGT0g387YV9TFcKgpeTeXyrMbU7cjIj9SfbB9Phx5sPZbfjgVs4RB1Nt+7TGITnC8kM4i+++368sWj1EEu7A0MX4YDzONfwSjnbzH5zgVswerE8pOI6bMTdVBHQk7+o8sL+YgraidTomqUEB+NQZ6D9cRAruJb0Qj74jE6rz/AHbHXcMZGodNuX/eEfU3wjkgZaHeD+mw+Y+/bbG6GRZRCoR6vb7yTgoZhgYmb8x5eUdMdDOHnfry87XxTHlwve39jtwYZKpzUT/qn8scvl3AnupPQMJ+ZMffg05hvsja3iP/AMcabMNMaR0+I/8Axxb1cD2v9gbiyrlahJOmPKRJ9b/niAVCh8YeOZMEcrnlHn64M4jmHESQAxAhd+fM8rchjnI5mgOVQnaTHKR1wmiM/dB/crwtzS1KRO29pDWnpvM+UYmA/wAj/LDKjXSPCCJ8hicHni8ccX4+xNsSMBIlKg/2+3Q4zUouWcR1Ux+FsPcc6BhvSh4X2Osr4zqsYQk23IgDykx8t7Y3/Ev9pf37YMz1ZZKBfEYEwAL7bXtgLu2+23z/ALYwZYRUh1JH/9k='
  }, {
    src: 'data:image/jpeg;base64,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'
  }, {
    src: 'data:image/jpeg;base64,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'
  }],
  Comments: [{
    User: {
      nickname: 'nero'
    },
    content: '우와'
  }, {
    User: {
      nickname: 'hero'
    },
    content: '사고싶어요~'
  }]
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost, ...state.mainPosts],
        //dummyPost를 앞에다 두어야 게시물이 위에 온다.
        postAdded: true
      });
    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, loginAction, logoutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAction", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutAction", function() { return logoutAction; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
const initialState = {
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginData: {}
};
const loginAction = () => {
  return {
    type: 'LOG_IN'
  };
};
const logoutAction = () => {
  return {
    type: 'LOG_OUT'
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedIn: true,
        me: action.data
      });
    case 'LOG_OUT':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedIn: false,
        me: null
      });
    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29tbWVudEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JbWFnZXNab29tL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSW1hZ2VzWm9vbS9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3RJbWFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3RGb3JtLmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZUlucHV0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1tYXRjaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wcmVwYXJlLWRlc3RpbmF0aW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2xpY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkdsb2JhbCIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiQXBwTGF5b3V0IiwiY2hpbGRyZW4iLCJpc0xvZ2dlZEluIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJpdGVtcyIsImxhYmVsIiwia2V5IiwidmVydGljYWxBbGlnbiIsIkNvbW1lbnRGb3JtIiwicG9zdCIsImlkIiwibWUiLCJjb21tZW50VGV4dCIsIm9uQ2hhbmdlQ29tbWVudFRleHQiLCJ1c2VJbnB1dCIsIm9uU3VibWl0Q29tbWVudCIsInVzZUNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsInBvc2l0aW9uIiwibWFyZ2luIiwicmlnaHQiLCJib3R0b20iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiSW1hZ2VzWm9vbSIsImltYWdlcyIsIm9uQ2xvc2UiLCJjdXJyZW50U2xpZGUiLCJzZXRDdXJyZW50U2xpZGUiLCJ1c2VTdGF0ZSIsInNsaWRlIiwibWFwIiwidiIsInNyYyIsImxlbmd0aCIsImFycmF5T2YiLCJmdW5jIiwiT3ZlcmxheSIsInN0eWxlZCIsImRpdiIsIkhlYWRlciIsImhlYWRlciIsIlNsaWNrV3JhcHBlciIsIkltYWdlV3JhcHBlciIsIkNsb3NlQnRuIiwiQ2xvc2VPdXRsaW5lZCIsIkluZGljYXRvciIsIkJ1dHRvbldyYXBwZXIiLCJGb3JtV3JhcHBlciIsIkZvcm0iLCJMb2dpbkZvcm0iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25DaGFuZ2VJZCIsInBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZCIsIm9uU3VibWl0Rm9ybSIsImxvZ2luQWN0aW9uIiwiUG9zdENhcmQiLCJsaWtlZCIsInNldExpa2VkIiwiY29tbWVudEZvcm1PcGVuZWQiLCJzZXRDb21tZW50Rm9ybU9wZW5lZCIsIm9uVG9nZ2xlTGlrZSIsInByZXYiLCJvblRvZ2dsZUNvbW1lbnQiLCJJbWFnZXMiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiQ29tbWVudHMiLCJpdGVtIiwic2hhcGUiLCJudW1iZXIiLCJzdHJpbmciLCJjcmVhdGVkQXQiLCJQb3N0SW1hZ2VzIiwic2hvd0ltYWdlc1pvb20iLCJzZXRTaG93SW1hZ2VzWm9vbSIsIm9uWm9vbSIsIndpZHRoIiwiZGlzcGxheSIsInRleHRBbGlnbiIsIlVzZXJQcm9maWxlIiwib25Mb2dPdXQiLCJsb2dvdXRBY3Rpb24iLCJtYXJnaW5Ub3AiLCJQb3N0Rm9ybSIsImltYWdlUGF0aHMiLCJpbWFnZUlucHV0IiwidXNlUmVmIiwidGV4dCIsInNldFRleHQiLCJvbkNoYW5nZVRleHQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvblN1Ym1pdCIsImFkZFBvc3QiLCJvbkNsaWNrSW1hZ2VVcGxvYWQiLCJjdXJyZW50IiwiY2xpY2siLCJmbG9hdCIsImluaXRpYWxWYWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlciIsImNhY2hlZE9ic2VydmVyIiwibGlzdGVuZXJzIiwiTWFwIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiZ2V0T2JzZXJ2ZXIiLCJ1bmRlZmluZWQiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaGFzIiwiY2IiLCJnZXQiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwidW5vYnNlcnZlIiwiZGVsZXRlIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImVsIiwib2JzZXJ2ZXIiLCJvYnNlcnZlIiwic2V0IiwiZXJyIiwiZXJyb3IiLCJwcmVmZXRjaCIsInJvdXRlciIsImhyZWYiLCJhcyIsIm9wdGlvbnMiLCJjYXRjaCIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJpbmRleE9mIiwidGhlbiIsInN1Y2Nlc3MiLCJzY3JvbGxUbyIsImRvY3VtZW50IiwiYm9keSIsImZvY3VzIiwiTGluayIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsIkVycm9yIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0Iiwia2V5cyIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJoYXNXYXJuZWQiLCJSZWFjdCIsIndhcm4iLCJwIiwiY2hpbGRFbG0iLCJzZXRDaGlsZEVsbSIsInBhdGhuYW1lIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJ1c2VFZmZlY3QiLCJ0YWdOYW1lIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFByb3BzIiwicmVmIiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsInR5cGUiLCJsb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJwYXRoIiwiZW5kc1dpdGgiLCJzbGljZSIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJkZWZpbmVQcm9wZXJ0eSIsIlJvdXRlciIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwidXNlUm91dGVyIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsImFzc2lnbiIsIkFycmF5IiwiaXNBcnJheSIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsIm1pdHQiLCJhbGwiLCJjcmVhdGUiLCJwdXNoIiwib2ZmIiwic3BsaWNlIiwiZW1pdCIsImV2dHMiLCJiYXNlUGF0aCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJjYW5jZWxsZWQiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4Iiwic3RhcnRzV2l0aCIsImFkZExvY2FsZSIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiYWRkQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImlzTG9jYWxVUkwiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiVVJMIiwib3JpZ2luIiwiaW50ZXJwb2xhdGVBcyIsInJvdXRlIiwiYXNQYXRobmFtZSIsInF1ZXJ5IiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJwYXJhbXMiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwiam9pbiIsInJlc3VsdCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJpbmNsdWRlcyIsInJlc29sdmVIcmVmIiwiY3VycmVudFBhdGgiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwic2VhcmNoUGFyYW1zIiwiaGFzaCIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsIm1hcmtMb2FkaW5nRXJyb3IiLCJwcmVwYXJlVXJsQXMiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwicmVzIiwib2siLCJzdGF0dXMiLCJqc29uIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50IiwiaW5pdGlhbFN0eWxlU2hlZXRzIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImxvY2FsZXMiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwiX2JwcyIsIl93cmFwQXBwIiwiaXNTc3IiLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93Iiwib25Qb3BTdGF0ZSIsImNoYW5nZVN0YXRlIiwiX19OIiwiY2hhbmdlIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiX19OX1NTUCIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0IiwicmVsb2FkIiwibG9jYXRpb24iLCJiYWNrIiwiaGlzdG9yeSIsIm1ldGhvZCIsIl9oIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYWdlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInJld3JpdGVzIiwicHJvbWlzZWRCdWlsZE1hbmlmZXN0IiwicGFyc2VkIiwiX3Jlc29sdmVIcmVmIiwidXJsSXNOZXciLCJwb3RlbnRpYWxIcmVmIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsImZpbHRlciIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIlByb21pc2UiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJwYWdlIiwiZmV0Y2hDb21wb25lbnQiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJyZXF1aXJlIiwiZ2V0RGF0YUhyZWYiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJkYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic3BsaXQiLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsImFwcGx5QmFzZVBhdGgiLCJjbGVhblBhdGhuYW1lIiwic29tZSIsInJlIiwidGVzdCIsInByZWZldGNoRGF0YSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiZm4iLCJjYWNoZUtleSIsImN0eCIsIkFwcFRyZWUiLCJzZWdtZW50IiwiY2hhciIsImVuY29kZVVSSUNvbXBvbmVudCIsInNsYXNoZWRQcm90b2NvbHMiLCJmb3JtYXRVcmwiLCJ1cmxPYmoiLCJhdXRoIiwiaG9zdG5hbWUiLCJwcm90b2NvbCIsImhvc3QiLCJwb3J0IiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJ1cmxRdWVyeVRvU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwic3Vic3RyIiwic2xhc2hlcyIsIlRFU1RfUk9VVEUiLCJpc0R5bmFtaWNSb3V0ZSIsIkRVTU1ZX0JBU0UiLCJwYXJzZVJlbGF0aXZlVXJsIiwicmVzb2x2ZWRCYXNlIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwicmVnZXhwVG9GdW5jdGlvbiIsInByZXBhcmVEZXN0aW5hdGlvbiIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJjb21waWxlIiwidmFsaWRhdGUiLCJuZXdVcmwiLCJzdHJPckFycmF5IiwicXVlcnlDb21waWxlciIsInBhcmFtS2V5cyIsInNob3VsZEFkZEJhc2VQYXRoIiwibWF0Y2giLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5Iiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsImlzTmFOIiwidXJsUXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJzZWFyY2hQYXJhbXNMaXN0IiwiZnJvbSIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJlc29sdmVSZXdyaXRlcyIsInJld3JpdGUiLCJzb3VyY2UiLCJkZXN0UmVzIiwiZ2V0Um91dGVNYXRjaGVyIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImNvZGUiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJwYXJzZVBhcmFtZXRlciIsImdldFJvdXRlUmVnZXgiLCJub3JtYWxpemVkUm91dGUiLCJzZWdtZW50cyIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwiZnJvbUNoYXJDb2RlIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsImV4ZWNPbmNlIiwidXNlZCIsImdldExvY2F0aW9uT3JpZ2luIiwiZ2V0VVJMIiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwibG9hZEdldEluaXRpYWxQcm9wcyIsInByb3RvdHlwZSIsInVybE9iamVjdEtleXMiLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsIlNQIiwibWVhc3VyZSIsIkhvbWUiLCJtYWluUG9zdHMiLCJpbml0aWFsU3RhdGUiLCJwb3N0QWRkZWQiLCJBRERfUE9TVCIsImR1bW15UG9zdCIsInJlZHVjZXIiLCJhY3Rpb24iLCJzaWduVXBEYXRhIiwibG9naW5EYXRh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Q0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IE1lbnUsIElucHV0LCBSb3csIENvbCB9IGZyb20gJ2FudGQnO1xyXG5cclxuaW1wb3J0IFVzZXJQcm9maWxlIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlclByb2ZpbGUnO1xyXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTG9naW5Gb3JtJztcclxuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBHbG9iYWwgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuLmFudC1yb3cge1xyXG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hbnQtY29sOmZpcnN0LWNoaWxkIHtcclxuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFudC1jb2w6bGFzdC1jaGlsZCB7XHJcbiAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG59XHJcbmA7IC8vZ3V0dGVyIOuWhOusuOyXkCDsiqzrnbzsnbTrk5zrsJTqsIAg7IOd6riw64qUIOusuOygnCDtlbTqsrBcclxuXHJcbmNvbnN0IEFwcExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBpc0xvZ2dlZEluID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmlzTG9nZ2VkSW4pO1xyXG4gIC8v6rWs7KGw67aE7ZW07ZWg64u5IGNvbnN0IHsgaXNMb2dnZWRJbiB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCBpdGVtcyA9IFtcclxuICAgIHtcclxuICAgICAgbGFiZWw6IChcclxuICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgIDxhPuuFuOuTnOuyhOuTnDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICksXHJcbiAgICAgIGtleTogJ25vZGVicmlkJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiAoXHJcbiAgICAgICAgPExpbmsgaHJlZj0nL3Byb2ZpbGUnPlxyXG4gICAgICAgICAgPGE+7ZSE66Gc7ZWEPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKSxcclxuICAgICAga2V5OiAncHJvZmlsZScsXHJcbiAgICB9LFxyXG4gICAgeyBsYWJlbDogPElucHV0LlNlYXJjaCBzdHlsZT17eyB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyB9fSAvPiB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9Jy9zaWdudXAnPlxyXG4gICAgICAgICAgPGE+7ZqM7JuQ6rCA7J6FPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKSxcclxuICAgICAga2V5OiAnc2lnbnVwJyxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxHbG9iYWwgLz5cclxuICAgICAgPE1lbnUgbW9kZT0naG9yaXpvbnRhbCcgaXRlbXM9e2l0ZW1zfSAvPlxyXG4gICAgICA8Um93IGd1dHRlcj17OH0+XHJcbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXs2fT5cclxuICAgICAgICAgIHtpc0xvZ2dlZEluID8gPFVzZXJQcm9maWxlIC8+IDogPExvZ2luRm9ybSAvPn1cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICB7LyogeHMg66qo67CU7J28IG1kIOuNsOyKpO2BrO2DkSBuLzI0ICovfVxyXG4gICAgICAgIDxDb2wgeHM9ezI0fSBtZD17MTJ9PlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgeHM9ezI0fSBtZD17Nn0+XHJcbiAgICAgICAgICDsmKTrpbjsqr3rqZTribRcclxuICAgICAgICAgIHsvKiA8YSBocmVmPScvJyB0YXJnZXQ9J19ibGFuayfsg4jssL3sl5DshJwg652E7Jqw6riwIHJlbD0nbm9yZWZlcnJlciBub29wZW5lcict67O07JWI66y47KCc66GcIO2VtOykmOyVvOuQqD5mamRrbDwvYT4gKi99XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC9kaXY+XHJcbiAgKTsgLy9ncmlkIFJvdyBDb2xcclxufTsgLy9yZXR1cm4g7JWI7J2YIOuqqOuToCDqsJLrk6TsnbQgbm9kZSDtmZTrqbTsl5Ag67mE7LaU64qUIOuqqOuToOqygyByZWFjdOydmCBub2RlXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBMYXlvdXQ7XHJcbiIsImltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuXHJcbmNvbnN0IENvbW1lbnRGb3JtID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgY29uc3QgaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubWU/LmlkKTtcclxuICBjb25zdCBbY29tbWVudFRleHQsIG9uQ2hhbmdlQ29tbWVudFRleHRdID0gdXNlSW5wdXQoJycpO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdENvbW1lbnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhwb3N0LmlkLCBjb21tZW50VGV4dCk7XHJcbiAgfSwgW2NvbW1lbnRUZXh0XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybSBvbkZpbmlzaD17b25TdWJtaXRDb21tZW50fT5cclxuICAgICAgPEZvcm0uSXRlbSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgbWFyZ2luOiAwIH19PlxyXG4gICAgICAgIDxJbnB1dC5UZXh0QXJlYVxyXG4gICAgICAgICAgdmFsdWU9e2NvbW1lbnRUZXh0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQ29tbWVudFRleHR9XHJcbiAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHJpZ2h0OiAwLCBib3R0b206IC00MCB9fVxyXG4gICAgICAgICAgdHlwZT0ncHJpbWFyeSdcclxuICAgICAgICAgIGh0bWxUeXBlPSdzdWJtaXQnXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAg7IKQ7JW9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5Db21tZW50Rm9ybS5wcm9wVHlwZXMgPSB7XHJcbiAgcG9zdDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudEZvcm07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFNsaWNrIGZyb20gJ3JlYWN0LXNsaWNrJztcclxuaW1wb3J0IHtcclxuICBPdmVybGF5LFxyXG4gIEdsb2JhbCxcclxuICBIZWFkZXIsXHJcbiAgQ2xvc2VCdG4sXHJcbiAgSW1hZ2VXcmFwcGVyLFxyXG4gIEluZGljYXRvcixcclxuICBTbGlja1dyYXBwZXIsXHJcbn0gZnJvbSAnLi9zdHlsZXMnO1xyXG5cclxuY29uc3QgSW1hZ2VzWm9vbSA9ICh7IGltYWdlcywgb25DbG9zZSB9KSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnRTbGlkZSwgc2V0Q3VycmVudFNsaWRlXSA9IHVzZVN0YXRlKDApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8T3ZlcmxheT5cclxuICAgICAgPEdsb2JhbCAvPlxyXG4gICAgICA8SGVhZGVyPlxyXG4gICAgICAgIDxoMT7sg4HshLgg7J2066+47KeAPC9oMT5cclxuICAgICAgICA8Q2xvc2VCdG4gb25DbGljaz17b25DbG9zZX0+WDwvQ2xvc2VCdG4+XHJcbiAgICAgIDwvSGVhZGVyPlxyXG4gICAgICA8U2xpY2tXcmFwcGVyPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8U2xpY2tcclxuICAgICAgICAgICAgaW5pdGlhbFNsaWRlPXswfVxyXG4gICAgICAgICAgICBhZnRlckNoYW5nZT17KHNsaWRlKSA9PiBzZXRDdXJyZW50U2xpZGUoc2xpZGUpfVxyXG4gICAgICAgICAgICBpbmZpbml0ZVxyXG4gICAgICAgICAgICBhcnJvd3M9e2ZhbHNlfVxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c9ezF9XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsPXsxfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aW1hZ2VzLm1hcCgodikgPT4gKFxyXG4gICAgICAgICAgICAgIDxJbWFnZVdyYXBwZXIga2V5PXt2LnNyY30+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17di5zcmN9IGFsdD17di5zcmN9IC8+XHJcbiAgICAgICAgICAgICAgPC9JbWFnZVdyYXBwZXI+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9TbGljaz5cclxuICAgICAgICAgIDxJbmRpY2F0b3I+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAge2N1cnJlbnRTbGlkZSArIDF9XHJcbiAgICAgICAgICAgICAge2BgfS97aW1hZ2VzLmxlbmd0aH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0luZGljYXRvcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9TbGlja1dyYXBwZXI+XHJcbiAgICA8L092ZXJsYXk+XHJcbiAgKTtcclxufTtcclxuXHJcbkltYWdlc1pvb20ucHJvcFR5cGVzID0ge1xyXG4gIGltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZCxcclxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VzWm9vbTtcclxuIiwiaW1wb3J0IHN0eWxlZCwgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgQ2xvc2VPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmV4cG9ydCBjb25zdCBPdmVybGF5ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogNTAwMDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWd0aDogMDtcclxuICBib3R0b206IDA7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcclxuICBoZWFkZXI6IDQ0cHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAmIGgxIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNsaWNrV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0NHB4KTtcclxuICBiYWNrZ3JvdW5kOiAjMDkwOTA5O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMzJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICYgaW1nIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogNzUwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENsb3NlQnRuID0gc3R5bGVkKENsb3NlT3V0bGluZWQpYFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBsaW5lLWhlaWdodDogMTRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yID0gc3R5bGVkLmRpdmBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICYgPiBkaXYge1xyXG4gICAgd2lkdGg6IDc1cHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzEzMTMxO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBHbG9iYWwgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuLnNsaWNrLXNsaWRlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xyXG59XHJcbi5hbnRkLWNhcmQtY292ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgbG9naW5BY3Rpb24gfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmNvbnN0IEJ1dHRvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbmA7IC8vIOyduOudvOyduOyKpO2DgOydvOydgCDrpqzroIzrjZTrp4HrkJjquLAg65WM66y47JeQIOy1nOygge2ZlOulvCDsnITtlbQg7Luk7Iqk7YWA7ZWY6rKMIOuwlOq/lOykjFxyXG5cclxuY29uc3QgRm9ybVdyYXBwZXIgPSBzdHlsZWQoRm9ybSlgXHJcbiAgcGFkZGluZzogMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IExvZ2luRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgW2lkLCBvbkNoYW5nZUlkXSA9IHVzZUlucHV0KCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoJycpO1xyXG5cclxuICAvL+y7tO2PrOuEjO2KuOyXkCBwcm9wc+uhnCDrhJjqsqjso7zripQg7ZWo7IiY64qUIHVzZUNhbGxiYWNr7ZW07JW8IOy1nOygge2ZlOqwgCDrkJzri6RcclxuXHJcbiAgY29uc3Qgb25TdWJtaXRGb3JtID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coaWQsIHBhc3N3b3JkKTtcclxuICAgIGRpc3BhdGNoKGxvZ2luQWN0aW9uKHsgaWQsIHBhc3N3b3JkIH0pKTtcclxuICB9LCBbaWQsIHBhc3N3b3JkXSk7IC8v6rCA7IOB7J2YIHN0YXRlIOuNlOuvuCDrjbDsnbTthLAgc2V0SXNMb2dnZWRJblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1XcmFwcGVyIG9uRmluaXNoPXtvblN1Ym1pdEZvcm19PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSd1c2VyLWlkJz7slYTsnbTrlJQ8L2xhYmVsPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxJbnB1dCBuYW1lPSd1c2VyLWlkJyB2YWx1ZT17aWR9IG9uQ2hhbmdlPXtvbkNoYW5nZUlkfSByZXF1aXJlZCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj0ndXNlci1wYXNzd29yZCc+67mE67CA67KI7Zi4PC9sYWJlbD5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIG5hbWU9J3VzZXItcGFzc3dvcmQnXHJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvL3JlcXVpcmVkIOygnOy2nOyLnCDrsJjrk5zsi5wg7LGE7JuM7KC47JW87ZWY64qUXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxCdXR0b25XcmFwcGVyPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT0ncHJpbWFyeScgaHRtbFR5cGU9J3N1Ym1pdCcgbG9hZGluZz17ZmFsc2V9PlxyXG4gICAgICAgICAg66Gc6re47J24XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPExpbmsgaHJlZj0nL3NpZ251cCc+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPGJ1dHRvbj7tmozsm5DqsIDsnoU8L2J1dHRvbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvQnV0dG9uV3JhcHBlcj5cclxuICAgIDwvRm9ybVdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTtcclxuIiwiaW1wb3J0IHsgQ2FyZCwgUG9wb3ZlciwgQnV0dG9uLCBBdmF0YXIsIExpc3QsIENvbW1lbnQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7XHJcbiAgUmV0d2VldE91dGxpbmVkLFxyXG4gIEhlYXJ0T3V0bGluZWQsXHJcbiAgTWVzc2FnZU91dGxpbmVkLFxyXG4gIEVsbGlwc2lzT3V0bGluZWQsXHJcbiAgSGVhcnRUd29Ub25lLFxyXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IFBvc3RJbWFnZXMgZnJvbSAnLi9Qb3N0SW1hZ2VzJztcclxuaW1wb3J0IENvbW1lbnRGb3JtIGZyb20gJy4vQ29tbWVudEZvcm0nO1xyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcclxuICBjb25zdCBbbGlrZWQsIHNldExpa2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY29tbWVudEZvcm1PcGVuZWQsIHNldENvbW1lbnRGb3JtT3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBvblRvZ2dsZUxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRMaWtlZCgocHJldikgPT4gIXByZXYpO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBvblRvZ2dsZUNvbW1lbnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRDb21tZW50Rm9ybU9wZW5lZCgocHJldikgPT4gIXByZXYpO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IGlkID0gbWU/LmlkO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPENhcmRcclxuICAgICAgICBjb3Zlcj17cG9zdC5JbWFnZXNbMF0gJiYgPFBvc3RJbWFnZXMgaW1hZ2VzPXtwb3N0LkltYWdlc30gLz59XHJcbiAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgPFJldHdlZXRPdXRsaW5lZCBrZXk9J3JldHdlZXQnIC8+LFxyXG4gICAgICAgICAgbGlrZWQgPyAoXHJcbiAgICAgICAgICAgIDxIZWFydFR3b1RvbmVcclxuICAgICAgICAgICAgICB0d29Ub25lQ29sb3I9JyNlYjJmOTYnXHJcbiAgICAgICAgICAgICAga2V5PSdoZWFydCdcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtvblRvZ2dsZUxpa2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8SGVhcnRPdXRsaW5lZCBrZXk9J2hlYXJ0JyBvbkNsaWNrPXtvblRvZ2dsZUxpa2V9IC8+XHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICAgPE1lc3NhZ2VPdXRsaW5lZCBrZXk9J2NvbW1lbnQnIG9uQ2xpY2s9e29uVG9nZ2xlQ29tbWVudH0gLz4sXHJcbiAgICAgICAgICA8UG9wb3ZlclxyXG4gICAgICAgICAgICBrZXk9J21vcmUnXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9e1xyXG4gICAgICAgICAgICAgIDxCdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICB7aWQgJiYgcG9zdC5Vc2VyLmlkID09PSBpZCA/IChcclxuICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuyImOyglTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT0nZGFuZ2VyJz7sgq3soJw8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uPuyLoOqzoDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8RWxsaXBzaXNPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgPC9Qb3BvdmVyPixcclxuICAgICAgICBdfSAvL+uwsOyXtOyViOyXkCBqc3jrpbwg64Sj7Ja07KSE65WM64qUIGtleeulvCDtla3sg4Eg64Sj7Ja07KSY7JW865CoXHJcbiAgICAgID5cclxuICAgICAgICA8Q2FyZC5NZXRhXHJcbiAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e3Bvc3QuVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICB0aXRsZT17cG9zdC5Vc2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgZGVzY3JpcHRpb249e3Bvc3QuY29udGVudH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICAgIHtjb21tZW50Rm9ybU9wZW5lZCAmJiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxDb21tZW50Rm9ybSBwb3N0PXtwb3N0fSAvPlxyXG4gICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgaGVhZGVyPXtgJHtwb3N0LkNvbW1lbnRzLmxlbmd0aH3qsJzsnZgg64yT6riAYH1cclxuICAgICAgICAgICAgaXRlbUxheW91dD0naG9yaXpvbnRhbCdcclxuICAgICAgICAgICAgZGF0YVNvdXJjZT17cG9zdC5Db21tZW50c31cclxuICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8Q29tbWVudFxyXG4gICAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0uVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntpdGVtLlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICB7LyogPENvbW1lbnRGb3JtIC8+XHJcbiAgICAgIDxDb21tZW50cyAvPiAqL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5Qb3N0Q2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgcG9zdDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgVXNlcjogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjcmVhdGVkQXQ6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBDb21tZW50czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICBJbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgUGx1c091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgSW1hZ2VzWm9vbSBmcm9tICcuL0ltYWdlc1pvb20nO1xyXG5cclxuY29uc3QgUG9zdEltYWdlcyA9ICh7IGltYWdlcyB9KSA9PiB7XHJcbiAgY29uc3QgW3Nob3dJbWFnZXNab29tLCBzZXRTaG93SW1hZ2VzWm9vbV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG9uWm9vbSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldFNob3dJbWFnZXNab29tKHRydWUpO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBvbkNsb3NlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0U2hvd0ltYWdlc1pvb20oZmFsc2UpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgaWYgKGltYWdlcy5sZW5ndGggPT09IDEpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgcm9sZT0ncHJlc2VudGF0aW9uJ1xyXG4gICAgICAgICAgc3JjPXtpbWFnZXNbMF0uc3JjfVxyXG4gICAgICAgICAgYWx0PXtpbWFnZXNbMF0uc3JjfVxyXG4gICAgICAgICAgb25DbGljaz17b25ab29tfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge3Nob3dJbWFnZXNab29tICYmIDxJbWFnZXNab29tIGltYWdlcz17aW1hZ2VzfSBvbkNsb3NlPXtvbkNsb3NlfSAvPn1cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxuICBpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICByb2xlPSdwcmVzZW50YXRpb24nXHJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzUwJScsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19XHJcbiAgICAgICAgICBzcmM9e2ltYWdlc1swXS5zcmN9XHJcbiAgICAgICAgICBhbHQ9e2ltYWdlc1swXS5zcmN9XHJcbiAgICAgICAgICBvbkNsaWNrPXtvblpvb219XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICByb2xlPSdwcmVzZW50YXRpb24nXHJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzUwJScsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19XHJcbiAgICAgICAgICBzcmM9e2ltYWdlc1sxXS5zcmN9XHJcbiAgICAgICAgICBhbHQ9e2ltYWdlc1sxXS5zcmN9XHJcbiAgICAgICAgICBvbkNsaWNrPXtvblpvb219XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7c2hvd0ltYWdlc1pvb20gJiYgPEltYWdlc1pvb20gaW1hZ2VzPXtpbWFnZXN9IG9uQ2xvc2U9e29uQ2xvc2V9IC8+fVxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHJvbGU9J3ByZXNlbnRhdGlvbidcclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnNTAlJyB9fVxyXG4gICAgICAgICAgc3JjPXtpbWFnZXNbMF0uc3JjfVxyXG4gICAgICAgICAgYWx0PXtpbWFnZXNbMF0uc3JjfVxyXG4gICAgICAgICAgb25DbGljaz17b25ab29tfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgcm9sZT0ncHJlc2V0YXRpb24nXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICB3aWR0aDogJzUwJScsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNMaWNrPXtvblpvb219XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFBsdXNPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCAtIDF96rCc7J2YIOyCrOynhCDrjZTrs7TquLBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzaG93SW1hZ2VzWm9vbSAmJiA8SW1hZ2VzWm9vbSBpbWFnZXM9e2ltYWdlc30gb25DbG9zZT17b25DbG9zZX0gLz59XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuUG9zdEltYWdlcy5wcm9wVHlwZXMgPSB7XHJcbiAgaW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RJbWFnZXM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQXZhdGFyLCBDYXJkLCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgbG9nb3V0QWN0aW9uIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY29uc3QgVXNlclByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IG9uTG9nT3V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2gobG9nb3V0QWN0aW9uKCkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkXHJcbiAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICA8ZGl2IGtleT0ndHdpdCc+XHJcbiAgICAgICAgICDtirjsnJdcclxuICAgICAgICAgIDxiciAvPjBcclxuICAgICAgICA8L2Rpdj4sXHJcbiAgICAgICAgPGRpdiBrZXk9J2ZvbGxvd2luZyc+XHJcbiAgICAgICAgICDtjJTroZzsnolcclxuICAgICAgICAgIDxiciAvPjBcclxuICAgICAgICA8L2Rpdj4sXHJcbiAgICAgICAgPGRpdiBrZXk9J2ZvbGxvd2VyJz5cclxuICAgICAgICAgIO2MlOuhnOybjFxyXG4gICAgICAgICAgPGJyIC8+MFxyXG4gICAgICAgIDwvZGl2PixcclxuICAgICAgXX1cclxuICAgID5cclxuICAgICAgPENhcmQuTWV0YSBhdmF0YXI9ezxBdmF0YXI+REI8L0F2YXRhcj59IHRpdGxlPSdEYWJpbicgLz5cclxuXHJcbiAgICAgIDxCdXR0b24gc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTVweCcgfX0gb25DbGljaz17b25Mb2dPdXR9PlxyXG4gICAgICAgIOuhnOq3uOyVhOybg1xyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGU7XHJcbiIsImltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGFkZFBvc3QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbmNvbnN0IFBvc3RGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgaW1hZ2VQYXRocyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgaW1hZ2VJbnB1dCA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBvbkNoYW5nZVRleHQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0VGV4dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goYWRkUG9zdCk7XHJcbiAgICBzZXRUZXh0KCcnKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tJbWFnZVVwbG9hZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGltYWdlSW5wdXQuY3VycmVudC5jbGljaygpO1xyXG4gIH0sIFtpbWFnZUlucHV0LmN1cnJlbnRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtXHJcbiAgICAgIHN0eWxlPXt7IG1hcmdpbjogJzEwcHggMCAyMHB4JyB9fVxyXG4gICAgICBlbmNUeXBlPSdtdWx0aXBhcnQvZnJvbS1kYXRhJ1xyXG4gICAgICBvbkZpbmlzaD17b25TdWJtaXR9XHJcbiAgICA+XHJcbiAgICAgIDxJbnB1dC5UZXh0QXJlYVxyXG4gICAgICAgIHZhbHVlPXt0ZXh0fVxyXG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRleHR9XHJcbiAgICAgICAgbWF4TGVuZ3RoPXsxNDB9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9J+yWtOuWpCDsnbzsnbQg7J6I7JeI64KY7JqUPydcclxuICAgICAgLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aW5wdXQgdHlwZT0nZmlsZScgbXVsdGlwbGUgaGlkZGVuIHJlZj17aW1hZ2VJbnB1dH0gLz5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tJbWFnZVVwbG9hZH0+7J2066+47KeAIOyXheuhnOuTnDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT0ncHJpbWFyeScgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX0gaHRtbFR5cGU9J3N1Ym1pdCc+XHJcbiAgICAgICAgICDsp7nsp7lcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2ltYWdlUGF0aHMubWFwKCh2KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17dn0gc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXt2fSBzdHlsZT17eyB3aWR0aDogJzIwMHB4JyB9fSBhbHQ9e3Z9IC8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbj7soJzqsbA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RGb3JtO1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoaW5pdGlhbFZhbHVlID0gbnVsbCkgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlciA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiBbdmFsdWUsIGhhbmRsZXJdO1xyXG59O1xyXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShhcywgcm91dGVyICYmIHJvdXRlci5sb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSlcbiAgICApXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IGVzY2FwZVBhdGhEZWxpbWl0ZXJzIGZyb20gJy4vdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycydcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgcGFyc2VSZWxhdGl2ZVVybChhcykucGF0aG5hbWUsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcblxuICAgICAgaWYgKHJlc29sdmVkQXMgIT09IGFzKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhyZWYgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZCwgeyBwYXRobmFtZTogcmVzb2x2ZWRBcyB9KSxcbiAgICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApLnBhdGhuYW1lIVxuICAgICAgICApXG5cbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocG90ZW50aWFsSHJlZikpIHtcbiAgICAgICAgICByb3V0ZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXRobmFtZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmIChcbiAgICAgICAgKF9fTl9TU0cgfHwgX19OX1NTUCkgJiZcbiAgICAgICAgcHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcbiAgICAgICkge1xuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWRIcmVmLCBwYWdlcylcblxuICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKFxuICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKFxuICAgICAgICB1cmwsXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRFbnRyeSA9IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dXG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBoZWFkOiBIZWFkRW50cnlbXVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0JztcclxuaW1wb3J0IFBvc3RGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvcG9zdEZvcm0nO1xyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0Q2FyZCc7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgaXNMb2dnZWRJbiB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCB7IG1haW5Qb3N0cyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICByZXR1cm4gKFxyXG4gICAgPEFwcExheW91dD5cclxuICAgICAge2lzTG9nZ2VkSW4gJiYgPFBvc3RGb3JtIC8+fVxyXG4gICAgICB7bWFpblBvc3RzLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgIDxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9BcHBMYXlvdXQ+XHJcbiAgICAvL2tleeulvCBpbmRleOuhnCDsk7DrqbQg7JWI65CoLiDrjbDsnbTthLAg67OA6rK97J20IOyeiOydhCDqsr3smrAuXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWFpblBvc3RzOiBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG5cclxuICAgICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5pY2tuYW1lOiAn7KCc66Gc7LSIJyxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIGNvbnRlbnQ6ICfssqsg67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4JyxcclxuXHJcbiAgICAgIEltYWdlczogW10sXHJcblxyXG4gICAgICBDb21tZW50czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgbmlja25hbWU6ICduZXJvJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb250ZW50OiAn7Jqw7JmAJyxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiAnaGVybycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY29udGVudDogJ+yCrOqzoOyLtuyWtOyalH4nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgaW1hZ2VQYXRoczogW10sXHJcbiAgcG9zdEFkZGVkOiBmYWxzZSxcclxufTsgLy/rjZTrr7gg642w7J207YSwXHJcblxyXG5jb25zdCBBRERfUE9TVCA9ICdBRERfUE9TVCc7IC8v7Jik7YOA67Cp7KeA7Jqp7Jy866GcIOuzgOyImOuhnCDrubzso7zripTqsowg7KKL64ukXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0ge1xyXG4gIHR5cGU6IEFERF9QT1NULFxyXG59O1xyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0ge1xyXG4gIGlkOiAyLFxyXG4gIGNvbnRlbnQ6ICfrjZTrr7gnLFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiAyLFxyXG4gICAgbmlja25hbWU6ICfsoJzroZwnLFxyXG4gIH0sXHJcblxyXG4gIEltYWdlczogW1xyXG4gICAge1xyXG4gICAgICBzcmM6ICdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0NFQUFvR0J4UVVFeFlVRkJRWUdCWVpHaDBkR2hvYUdoOGhIUjBnSHgwY0h5SWNIQjhpSHlzaUh4d29IeHdoSkRZaktDd3VNVEV4SENFM1BEY3ZPeXN3TVM0QkN3c0xEdzRQSFJFUkhUQXBJaWd5T1RBeU1qQXdNREF3TURBd01EQXdNREF3TURJd01EQXdNREF3TURBd01EQXdNREF3TURBd01EQXdNREF3TURBd01QL0FBQkVJQUw0QkNnTUJJZ0FDRVFFREVRSC94QUFjQUFBQ0FnTUJBUUFBQUFBQUFBQUFBQUFFQlFNR0FBRUNCd2oveEFCREVBQUNBUUlFQXdZQ0NBUUdBQVVGQUFBQkFoRURJUUFFRWpFRlFWRUdFeUpoY1lFeWtRZENVcUd4d2RId0ZDTXo0UlZpY29LUzhSWmprN0xTUTFOem9zTC94QUFhQVFBREFRRUJBUUFBQUFBQUFBQUFBQUFCQWdNRUFBVUcvOFFBTFJFQUFnSUJBd01EQWdZREFRQUFBQUFBQUFFQ0VRTVNJVEVFUVZFVEltR0JrUVVVY2FHeDhESkMwY0gvMmdBTUF3RUFBaEVERVFBL0FEV291dFA0V0VNT1I2Tnp3VFU0aFVIZWdPU0JjQTNIeGREYm5qTXVHVlhrRlRxSFVjbXh0ODZ6UFdSZ3JCVVVpVlhxbk9KTy9YR2k3TXRHTHhJaytKRlA4dFR0cFAxT2hqbjB3UStkUWtXWWVGdGlEMTlNQUxtVTd5Q2cvcGk2a2l3QVBVamwweFBXcDB3UUpZZUI0MlBKdlRDU1NLUnM3YXNoWlNLZ2pROW1CQit0ZllqNzhNZUFzTzlwR1FiSFlnL2EydmhFS0lsUUhVblErOGpmWDVSOStET0JaZGhtS0JJc0EwbFNEOXZIT0tvQ2U1ZTlLTXdOOVEvZDc0RTQ0d0NWTmFzeStDQURIWFk0NXlsV2t6S1FYSm1CSlg1V3gzeHg5S1ZHS0JsaExFMk56UHB5eENSYUhCSGx2NmcvMVl5a0taNzFSckVzZFZ4dmZiR3N1WnFDTnBHTVNxbXFyNEkwdGNoamZlK0VpUE1LU2l1alRMUjdUaGpsL2h3cVRNMHlnYUxUek9HdVdQaEdLZUJGeXlYR1l6R1lJVE1aak1aampqTVpqTVpqamhGbWFETlVZaytFRTNPd3hMeEIwRk5DNUpXMEVEZTJJYy9UcVZIS2k2Z255QXZ6eE5uY3NyVWxWbUFBaThTTERBWElyL3hkQzZ0V3k1TUZuNXg0Ujc0Z1pNdEk4YjNIMlIrbUNHNFpUYS9laTMrVTgvZkVOVGgxT1F2ZkNlWGhNL2ppaXI1Sk8vZ2M4RDA5MzRDU3MybXh4TG1zNnFFQXpKRTRpNExSMElWQjFRZDhTNXZNMDFJMXhNU0xUK1dJbWpzRW9aQU9LOXh5dTZ4b0pFbURHOFlzQ01DQVJzUmhWbTg2bEl5eWFyd0R6SHRqam53YTRCUVpTV1lHNDU3Ny9QR1ZRVnJ0cElranJ0dnY1NEl5dWREK0pSZnJCd0RuTTdWL2lGcHI4QnBsaVlHOHgrR0NwQ1NqN1F1cldZY3VSMi92Z0pjL2ZjaVRZZkxwanRVSk1rekFPSWF0TGVkeC9iRDdFa3lVMUcxS1o2N3lmenhQcmNuY0MzSURBbFpJQzN3VFRWSnVadDF4d2R3M0lreVphY0hZQXlPbVRwd2ZqaWtlRHl1bm5hZ0ZTSGF6Z2JrZ2ZIeVB0aWQrSk5MeUVZYUZOMUgrVGNpREdCSHp6eldCWUdLZ0hpQU5wY2N4Z3V0VVNHQnBKUGNxMGpVSnRTc1lNYytuVEZuWGdpcjhrZjhBRklTQ2FZL3BrblN4RmdwdEJucGliTVZxUktmRURwZUxBN0JnZVkvREExTHV5VUdraWFiQ1EweFp3YkVTZm5qczBxZXBCcVlmMU4xNmxwdUQrV0E2R2paMVRwcVRUSWRQaFlYQkIrdDFINTRNNExTSGYwVDRTTDdNRDlyQzZoUkhnaDFObTZpZm1NRThHeTdDdFFKQUlER1lJUE04d2ZQQWZBTzVkR3kxRkhUZlZJanhiWEg5c1p4dG1WYXJnS2ZDc0JoSXN4bVI3NENvWjZnN3IvTGFROEE2dGpJdjZUaGx4TXNvZDF1MmdXRnpaanlqenhDUldEVEE4czBzcDZsVCtHT2pYQmVxQ2lXUFM1RW5lK09NdThzcElnbUNjVDFNdyt1b0NMQTJsZHhKNXhoWWxKczVvNXBPNzFCRkF2YS9YeXczeXBsUVJoYlF6ZmhuUmVkZ0JobmxtbFp3L2dSY3NteG1NeG1DRXpHWXpHWTQ0ekdZekdZNDRROFJlbzlRb3NrQTdEMjMvdmduTlVDYVFTd1BtYmVtQitJNWwrOEtMdFBJWE9DOURhRkVYQTJ3TzRIdW1MbTRlWWpVZzlDY0IxT0dOcUI3MUo2NnIrMXNNNjlHb1I0UUFmVVlYWmpoMVlzcldrRGVSK0dIVCtTTFh3TnVDVWlxc0N3WXp1TVRadGFVZzFOSU1Xa3hpSGd0TmxWZzhUUExFMmN5S1ZDQy9JUnZpUm9YQVRTaUJHMENNSXVNMWxUeEZBOTdBbXc4emg1U1VBQURZQzJFbkdtcGk5UU1ScXNGNW45TWNjK0NUZ2VjZW81MVFCRmdMRGNZRDRybkdYTkNGa2FEdWJiOUkvUEJuQTh5R2FGcGhCSExmM09ONWdGczBOb0NNUHZCd3lKVDNTM0FUblN4RW1MSGtjYlhObzJvQXllZ0hwanZQOFBPcVJBZ0UvTVlyMUxKVktibnU2aFVqY2kyNFcyR0lwMXlQNjFNNlZHaHQrY1lQeVdYSDJlWFhDN0tMVWRsRHVTQnFQckF3L1h3ZkQwRzV3RzJWalQzTlVhY0hZRDlqQmVJUzB4aWZIRkVlVTFjL2V2cVdtUUc1b1B0UmVJUFBFbitJSVoxVWwvb2lkSllHTkttTnlPWDNZanExVVpxd05GZk0zRStOZWh3ZC9odEkwQldoZ1NqcVFHRUFLZzJrSGxpMW9qVEE2RldqTk02WFh3dEYxUE9wUEllZU8yRk1zaEZSaGR3SlRlU2VoUFhIR1V5OU5oVElaaFpnSmc3bHgxSFhFNHlBbW5EaXpHWkI1aGVrNERvTWJJTXJRSDh1S2lHQzNNaVpqYVJnbmcxT0hvazZTQXgyWWRmWEF1V3lSL2x3eW54OVkrejFBeEx3L0xPcjBTVkJpcGVDRHpYb2RzYzZvNjNaYjBlbHFFVWpPcmZXZDVGOE1PSnEwUG9KTGFCQUJnMmJDdE9KQXRIY0Q0b25VZXUrR2ZGcVdwWFVOREdtZktMN3ppRWlrQUNpVHFHcmUwenZNYzhHMWpVMXY4QUZITHBnQ2twWFNEY2dMSkYrWFhuZzU2RGQ2NW53bmEvUDB3a1NrK0RXV3FWU1BFR24wd3l5eDhOOThCWkJYQ2tOdlBVZVdEcUJ0ZkRwOEM5MlM0MXFHQm16VzhpQkcvTEE5R3Naa2thUmM3MjlQWERwQ3Q3ME04YXhEU3J5VEtrRGtUenhGWHpla3hiOS9samtyQzNRWmpNY1Uza0E5Uk9Pc0FJbnoyWVlNNFVCWUl1QmN5T3VKS2VydTEzMVI3NGp6dWFLMWRLcUFTUkxjOXZ1eHF1V2FnQ1diVjFHKytBRHNjMUE4Um9QeXd1cTVhcnJCS0czVEdxM2V3SVo3SG5OeDdEQXRZMXRTd2FrRGVkVi91d1VUYVhoai9nb1lCdzRnNnB4UG5za0toRXNSR0JPenBiUzJzbVordE03NEo0aGxXZU5MbFltZDhJVzdCVkZOS2hlZ2pDWGpTSWY2amFWQjZUUGxHSEdYWFNxcVRKQWljSnVONWZYSTFLb21TV052OEF2QUMrQ1RnejBnK2xBMng4VEgwNVlLWWp2ckFTQVovdmdYZzFHbXJqVFUxdEIyRnVYUEhQRXN4b3pLQlJkbFlzVHRhSS9FNGRFcGNiaHZFdHY5cHdqV3NGTEFnZkNEZjBHR3Vkcm1GMnVEeXhXcXVmSWZ4TE13UGFONyttR1NJdmtkOEx6UVpsSVVBYVp0dGNmMncrSW41WXJuQ2lKVUFtTHhmbEcwWWQxbDIzK0hxY0JvZUxDYXcyeEpnU1JiQldzZGNjVlRQS0t1WnBhcXBOTDZzbUtodkxKMUJqQmxMaTlQdWxvNlhBME93Z2dueElaR3duNGNCVlVwRnFnSWNBb09ZLzhzMnNQM09Kc3ZsYVIwRVZHL3BPUU5BSWdDb053MjlqaXpvamJOWk5LT3FpUXppSmdNZzZubzNuaGd0YW40VDNndTRpemMxUzIzN25DL0txaGFsRDh6dWhITUh6eGlxbWluL05TemczSkJNYWVVZVdBMEZCTkVKL0xoNmRxbjJ2SmVzWDhzVFVLaWw2WkFTQS93Qm9jdFBuaFhTeXg4UGpUK3A5b2Y1YlhqcGp2TDVWdzFNeE1WZXFtMHI1K1dCU090bHhYT1gvQUtDQ0R2ZjU0UDdSVmxTalVkaVlXazArbHZ2bkE5VFBBZjhBMDAvNDRLNDdsRXEwM3B2SUQwbkJJNUMweDU3SDJ4R1JUSHYzUEpjNTI5ekFhS1pBVVFBQUJhQU55Y1duc0Yya2JPUFZGVFNLcXFDVHRxRXh0eWlQZWZYQ3pJOWtNdlRVRm43d2xSeW1UOXFDSUFJdUo5eml4ZG5jdFFwMTNkSXBoNmR5UUJPbThtT2NTZmJDUm1ybzA1TVh0c3NuRDZMS3BCWlNaM0JuQjlBV3d2NFdnS2FrY09qR1F3dUR5c2RqdGhqUUZzTXV4Q3Qyd0xQMUtWTldxVlNGUlZsaXhPbjNHeDMyeFQzK2tPbjNoTkRLMUtsTVNDeXJBNVhnQS9mR0xKMnY0Ti9GWmFwUkRhV1lTcG13WlNDSjhwRWUrRUhEOHV0TExwU2EwQVJwZ2tEbVdKRUFtL243NEdTVWxWR3pwNDRkRGNsY3I0N0plUzI4RjRwVHpOSmExSXlqZk1FV0trY21CdGlQaUlodFU4eGFQUVlyK1N6dERJaXRWOFFSOUxDbXR5em1GQVFFd0dJSFVEY213a1NaUHRIMzhxNmQyNHVCTzZ5UHZBL1hGb1JsS09wR1BLNHhucCt4WnFOQWZGenZmbjdlV0NBYllpeXg4UHZpdjlwdVAxYVZWS0ZGYWVwbERPOVNXVlF4WlZBVUVFbGlyYzRFYzVzamRic0tUYnBERGlWVFNlOFdtR0JpSG1SY2NoK2VOVk13M2M2NThVYjdEZkNKdTJpVTZSR1lwL0N5SVhwci9MT29nQ1ZKMUlCMHZiWW5GaG8xWnBob0E5QmJmQzdjbzVwcTB3S3R4RUloZDZvQUF1VHRpdjVmdGFsU29pTG1OVEU3YlQ1Q1JCd3Qra0hNdFd6R1h5a21HRE1kQTVUR296RmwzMzY0cmZhTHNmbUtDUFdWSlNuZHRKYTNtc2dUMXRoazEzRldOeWpkczljNExYTGF5eDU4L1hBdmFiakRVaUZwM2VDZEkzUFNCQkpQdHRpdS9SQjJwZk5wVXAxaVRVcGFZWTJMSWJDZXJBZ2duMHd0N1U1NnF1Y3FhNm1hWXJUUmxvMHFqVTFPcG5BTGtNdmhsUjFnQW1OOE5CeGk5VWxhWFliUTVMU25YeVBlRWR0bldyVG81cW4zWmN3akVGU1pzQ1ZiY1R6RzA0YzhkeXpWQVZVU1p4VE9IOEJWNm9yMXdBNng0UWdXR0JNNmlScVl4QkdvdHBJM3hhTTA1ZWhDL0Z0YmN4L2ErQmx5d25KT0tyNmhXS1VJdlU3RGVEWkkwMkVzcE1Hd01uR2NXVUNzRE56dU9sc2E0SGxYVmd6S1FJOHNROXBMVnFSMVFHSm0vUURBUkdhOXZBV3pCZ3ZYKzJLL21FOFZ4OVNmbGhoVDBnckRIZnJnRnlOVEdUOFA2NFpFZVNmc3htRllBNllIZU5lVGVRYmVveFo4eUFJam9meXhYcWRVQmd3VXgzZ08zVVJoOGVJQzNoYjVZVnZjckZiSFFTTk9DOEJITTZpUENSNnhneWNFZEhsTEdqcWJ4VkJOTVRLallxbitiZXd4UGxYb2VDS3JUM2JxSlRxWHZadVVuRVRjUDhWcW05SUM2bmtpMys3SGVXNFF4N3Npb2tBRWZXdmRqOW56eFhZbHVJZTBldGFWRmN1NXFQVXFNZ0lCWDRndTVJdGhMeFRzWG02S21vMU12YlV4UWdrUjVUSjI1RG5pNTVYaDdEdWlLcUFxNUlON1NFRTNYcFB6dzZwNW1rdXFITlIyQWt5SWtpVDVrVzg0MnhISmtjWmZCcndZMU9MOG5ublkvTjFkUzA2cGhIaDZSY2dBNldDblNUNmpGMHBBQS9FbjlUN1MrWG5qZEhnbEt2V3BHUWlaZEhLcWd1MWtHbWVRQVhweXhaOGpsY3NvZ1VLZTgrSmRSbnJMU2NQQjYxWkRLbGpsUkxuODhVQUlGUGZtUDNmREhPT3NDZWFOZjJGaDVuOHNBNW5QTVRDMGkzbnN2M1h4Qm0wNzRGWG9xUWQyWmlCN0RmMysvSFBHMnRoSVpvcDcyYW9jTURxRFRNUXNCbkU5YkdQM0dLem5xRlVVYzY3M0tVYXVveEFERkdVS1BuTWVXTGZsdU1LbW1tb1ZvdENDQUkzdVNaL1U0Uy9TaHhNVThqVTBtVFg4RWNvMG5VUjA4S2tUMWpDeHcwMHk4ZW8xSnhRNTdCZ0x3N0tlZEZEL0FNbERmbmh1MWFkZ1Nmd3hXZm80NGt0VGgyV2tnRkU3b2ovOFpLZmVBRDc0WVptb3hKSzJqMS9IRll3c1N4eWRyMk9FSEU4bVgxVmFhTHFneHJzTFFkeHROL1cwNEp5aTFHVUVzSU80Z2trRGxQbmdIdDFuTzVvV0o4ZXBJQnVTeU1OK1FFejZ4MHdQVFVucDdqd2xKUDJsSjQxeEZ2Q3RRaHFqSFVRbzlRQU9nRjc0ekxaMUVaR0lPcFNMckh1TnBLOHYwd295MUloblppVHBWVUgrVkVFTHQvbGlUMXdCbU9LZ0cxK3VOK09PUEJqU255eWtzY0wxelc3N2VEMmJoM2FPaFVLS0NaY21KR3h0WTlOOTlzVnp0ZnhoTXJ4RmU4WlVTdlFwcUhhTkt0VHFWU0pKK0VIdlBpNVc2emlwOW1PUG52UVFwbENyVzJJREF4OHdQbU1DL1M1eFJjeG1sMDNRVTFDei93QWpQUzdSL3R4aHo0YVdxTzhYeDhmcUZWRnB4R24wZ2NhUGNpZ3JLNWNrV0FJQWlJdFl2SkcyMDQ5RDRSbmxxMEZaVkFJQTFJZnFubURqeUxobXM1aWxUZUNjdWhVUTJvRWc2WkRDUWZYeXhiS09mZFRLR01kaDZiVkM3M1BGL0VmeGY4djFDaHB0VnY4QUYrQUg2UUdxME0vbHM0bEh2QXFGR3BLcGJVSkpzQUNKOFUrcWpEdk1jVTc2aUZCcWsxUXdBTk4wZ0d4TDZoWmdMUVBYbmlTanh2WXVCQTM1Zk8vbGdyUDhSb21temluWkJKWUV5cEpBRnVaTS9JSEU4dlR6aXJhTDlIK0s0TXIwcDcrR3FmMEJld3ZaMmx3L3ZDR1ptY0RVem1UcEd3RUFBQ1NUMVBQWVlhOFVyMGF3Z2lEc0dCOWZpRWpVdHpZenVjUTVOaFZET0RLa0tBZm1UK09BODRhZFB4VkRBR0pkdHlHZnE4a2NqY0hTN0F1WnJOVFU2Z2FqRTJhYkNlYkVtWXR6NlJiRVZETWhxNmdIdzBhVVBNUnJxM2lTUUF3UlNiOHFubmd6SjUybFdKN29oOU1XQXNaL0hZMkIrV0JhWVdsM2pBS3N1N1JURVhKRWdRNE5pUU9Xd2xWTVRqelNVWFVlV2V0MG5VWk04UGVsL3dCRC93REZRV2d3R3Zjc3dpNG1Rd0dsajVnL1crTDRXSlhPU0JxQ3N5a3cxU1pBRVRjbTBXbWRwRWxXT2pGYnJPd0VqVUI0dElVN0dHQUtpSUJWb2J3NlNJdWk0UDRibkZxenBNRlRCQW0wR0Ywd05yMjA3YW9TV0xPTXVQUE9NdmswVHhKb2IxSmNySUN3MXdBUjAzd0hXUVNRZWtqZm8yTjhIenRPcFVla2pnbW5HdUNMSGtvQXRZYng0UmNEVTB2Z25NWmVIdVRFSDhHeDZ1UEpyVm1LZUtVZCt4bE1hS1FKSy9WSWtjK1F3ZW1ZYzZiQVNQMHdHY3JTMFM3dEVyRi9UYkJETFJzV2QrY2IrdUMyd0trZzdLRnRYaU0ydzB3azRYM09yK1dXSkkrdDB3N3c4YnJjWk04NnFLcXVGTlJBM2R6cDhVd1VzWTA3WU95dEFvcTZpQmMvYSswQjB0Y2dYNjRKcGRwRXFHOUpDVDFBazJHcWI5UG5FWWhxZHIxVTZTZzFHd0JBQVBNQXQ3L2pqSStyZHBLSnlndWJGUVVRQjNxVHIrMzVMYjE4c1RGTEVKVXBxV01mRU4yTVd2R3FCdkJOc2Q1bmpkUjlKYWpTRGdrdzRCdUdFbVlQa1pubE44UnZuUWFZTlduU0VlSWFWalNaSm13OCtoRit1RExxb3RlNklZNm9icG0vNEN0UUowdUtpL0RZUS9pSUZ4SmtSTW56d2JWckVnd2VVNHhNMEtpNjEyYTRQSThyZTlzRFVLNEpzTENRZmJHeUNTVzNCbnlUYzNjaGJXclZsUGhxYWgwWS9uaFptT041a3RwQnFOcCtKUXloVDFIbWZicGh4eEtySnNMbXlnZnBqV1h5TVN2TUxjK2JiL2xpbEVyRGVBVnkxTlhLUDQxdG9VN2RDYm5yY2IvTEZjN2VaK2xYektaZXZYRkNqU3B5akJIZVdjN0VKeUdraWRoSG5peTVSKzdvQXFHVkx5UUFiU2JnVE8vbDFPRlhIZUdVYTYwNnpLTmF1cW1ZSVlLcndHNmdGaVJieTJ3OGJhRmxrampUay9BVDlIYmR3dFRMMDZ0T3VHUGVwVVFrVXdHOERMTWZHQ2dKVWZhQnhicStiUlFxc1F1b3h1VHFQSUMzdnRpaDFZQnM2aU5wT21CNlNZOU1PTWlNd2FTdldTYW91S1FlR1pnV1VFTWJSRVRJRzQ5TUdicEpMa1A0ZjFNdXBjbktGUlhlL3dCaTVobFZaSkFBa1RNRFk0cVgwZ2NhcFZLZE9tankzZUFsU3R3QnpITVhqMUJ4VjhqeHJQT25kRlhmUlVKZ2lBR0IyTDdhQVIxNjNpTVpuOHZXcUVHb2FZUEpRVE0yMzVSNkhGSTRaeHl4bHRYNm51WU9rbkoyazJLV3JGcWJrYnRxKzhtTU9PeVhaNm5wVnd2ZTFpb2JTM3dydE8veE1OcmlCZjRvakM5ZURWZ3FwcERFQVRwWlNMQzhYODl0emp0KzBMWlJPNnFhZ0N4a0Q0bE1SMUVqeW5EOVppZVNHcUwzWGI0S3l4MDdrcS9VdTlYaDJYWmFoQ3BxZFFIMDdFaVltMjRKbWJiREdMOUhXVXJ0U3ExQzVYUUQzWWFGSklVL0ZHdlQ1VHozNVlXRE5GNktQVHB1UlZBS2xRMTFBNWczbTJ3RWRNVzNzem51OG8wb2o0RDFrRlNBUWVoOHZMR0RGTElrNHZneTU5bDdXVFpYczVrcVh3WmVrREVUb0JNZEN4a24zT0k2dkFzb3grRFNUOWtrRDViWUxkL2NSZjFCaVB4d0htY3dVQks3L3dDa3NUZmtCenhvakY5bWVka3hZOG4rY1UvMVZpbmkvWXpVd2VuWElWWjhEQ3pIbDRoZXg4amhCa3NzNlBXU3JJQ25TNEZ6TmlwRi93RGRQS1JpNDhPem5lRm1obFpiQlR2emhvNmM3OVBrZzdhWjFNdTlJc3VwV0JZaWJrb1JFOWR4OHNka2xOUmFiTXY1SHBvelUycVM4RXVUemkwbGFoYldoOFFCbUp1Q09nTzRITGE4VGlKc21Lc3M0a2VlTXlGV2c3RjJBVjNBQmJZa0NZR3JtQkpnSHFjTlRrdkRDdUk4OFlaTzN1RE4wazV0eXg3eDdVMEtxeFdpc0xBdEp2YjNFUWJiUmZleEVqQU5DbFVZRXVUNGlJK1JnSnZhTmo0aWJ3SEVxcEhIYU5WUVd1UVBoa3JwRnpZazhyN1J0YVR2aUhLNXNWRkI1bVFSdkI1all6dE1FR1lraC9qSG1TeXU1Tkk5ekJIMFlSaDNvanpMTFRXUUJFV0VpOEhtYmdnSDFBLzhvNENxNWFwcTFhaXRSMXV3RURTeEkwaFRjR05maVk2akJtSUpRMnM2bDFtV050S2ptVFlFbS9zWmJvcGI0TWRaTkpMUEFBTFdnY2wyanhiZUdic0JBbllhcWVOdHQyWHNHNGZsVFFiK1hJdmV4NTJnMzlMRUtlbXEwMm1qblJWV0xCdnoyK1dFVHVTMEpFeEUyc0Q1a1FGdk94RUdkSkI3d3laS28vZUFYTW5TQkVIeXNmRUZQWHhEYTZpY2E4R1p4ZEN0TGg4RmhLbGdxbEhJMURrUG43SEIvd0RoMHdTQWJHeEhsZ1hoSEV0UTAyRndRVGgwemZENGh6MmpIcXhscVZvd3p4NkpVd09sa1FoREFSYUlBdGhoZ1RNNWtEU1BFZk8zNWtZbDc4L1liNWo5Y1ZpblFGUjVuUzd1UVFSSjJnYndJanA3ZVdJdTVNb1E0S3BIaFpTQjRTUE9DWm4xMUhDMU15VjFhNG01TGNqNUE4ckNKbmJFS1p2VVBpSlFiazdhdHdESHFJQTZZOGU1ZVJsSXRhVXhwZXNRb3RvdllHWkl2b01SN2ZuaFh4RGhtWUlhbUZka21BeVhNU0RCMnR5K2NiNFhWK0t1ZzBuVFVCT29LUVJmYUo5RjZkZXVJOHIydnFLeEwwaW9MZlZNZ2JDUjFGc1d4NDQ1RWxKME5rYTBiY2xqNFJScUpsUnJES1VZNlZLa01BYnlRMFI4WC9lQVA0dXBUZHBRalZ0TzA4cGphZHNhYnRiUU9vNnpjeUFRMDJFV3Q2ZlBBT1k0elRxYVpKZ21JZzJzZHh5Qi9YSG90eHh3MmQwakNveWIzUXlvOFIxbERURXN3SUIrejFQc09lRDZWV2tTYWVzTVNicXBrd29nYW8rRVdKditKeFd1SEJEVUVhOUJKN3p4QWVFUklBbTA3Q041UFREekkxMW8xcWh5d0hjMDRSV2FXN3c2VVl0Y2dBQW1OcGtiNGJCS1dTTjFRZE1VOXgveFNEUUZKQW9ZZ0trV003QVFUSHRHRU9hN01aaXRSYWtLakl6UU5ia1dFaWRNYlNCSExDL1BjUTAxUlhYTEozdXJWcVZtQUJKSkxRUVI5YWJZSnkzYklvd2Q2ZXBSZVZlTnpBbVJmOG9HTHhnNHdlcGxNaXh6a3RLSnVDOW5FeTJsS3loU0lDUXFnU1pETVRQaWFJdlBYMXhZenhEUzZ5d0Z0VWlMRHI1WW8vRmZwUXJCaU81b3NnMlJsWno4d3cvREhYRXN4clYyWlN0UmlzaERDUnA4VmpMRXpiZkdiMEhkeGV4N1hRWVgxTDAxeFYvVmtsVGlCTXRxTW0rRjFiUGtXYnhMOTR4aU50Z2ZNQ2VWOXNicmZZKzBqaWpIWklJVFBRSlUrRWN4MDhoMXhEbWMrSFZoVVVPSjJZVEZ4WWN3YmJqQVJ5bHpCaU53TnNhYkl2OEFha1RPd3dHNStCTWtOVWQ0WDlqMG5zcnhGRGw2TklnMkFRTnRZV3Q4dHh6eFk4bldwcXdWTktMZVFBQkxuZTNyODV4NW53cmp3QkZLcjROZ3BIdzI2ZlpPTGZ3YnRHcGNEd09DZERucFVXeDltRUgxa1lpcE9UYWFwbnduVjR2VHlTcFVyNDdvdEQ0SHIwUWR4SXgwdVlrM2dUeS9JWTZZeDZZcEZtSm9qeWxOUXh0ZUJmM01ZWDhhNFBTekRhWEJESVBBNEp0TzRJa1NEMHdibHVMVVlJRm52S3RHb3gwdnRPT01tQzJwMkp1WjN0Z2Y1SnQ4Q3lUV3hRcS9DWG8xVFNkb0FBSU0ySTZqeW5DN2l2YlRMMElXbFZkbUh4QmZFb2kzUDhpTVArMy9BQlZLbFFaWUxMQUFsN3lzMzBqcks3emE0dHpIbFhiWGd5NWVxZ1VRSFNmY0V6elBsak5ralRwb3k0T21jTWtwS1RTOElmNXY2U3kwZUF0RndEQ2llUk55YllINFgyK1kxMTcxVVdreGhva2xaNTMzRXhJSVBYY0FpbUVlVysyTkhFM2lpNHVQWTNPS2MxTjd0ZHoyK2tRTlZRMmtIeEU3eU9YeEV5TDg1QXVhZ3VOMEVad0FvMDB3TGsybm5KdWJjNWs4akxIK1l0TjdCY2RxUFNOQWxXYW5kTllCOFBsMTBtOTVFNmZPWG5IZTA2WmVtUEZycUd5S1R1ZDlid1pDamYxMkphWFh4cDlMT005UE5tMk9STldXSUlGQnZGN200aUl0QXZONWdra1RPbDVMTXRxMStud2d3QXdnVHo4TEFKcTVlRTB6dllZOHl6ZkhNdzFVVmpYY1ZPVEtZMGo3S0FXVmZJVzk4U2NFNGhtWHJMUldzNkNyVkxWR1dBeG03blZFN0FtTnB4ci9BQ0VrcnRFL1dSN0p3dnZhd0dxbXlMSGlZSGM5RkZ1WDFqWVNJMWNubFhNcUNGMDFDZDdLRCtlS2J3ZkxWYUZNcFJyc29MRmpJVmlUQUVsbUJKMnhZK3pIZU1haHFWVFVQaGlRb2o0dnNnWTNZbHBqUkxKSnpkc0V5WGFZMWE1b2lneWdhdkVTUHFub01QTy9ibzJLcndZeG5YLzFWUHhPTHpxOHNhZURPajU4cTVvMUVSYWtpb0FSQTNKQXVBTnBJRmlNZFVxd2cwZ05BVXpOUVhMRVNBWVc0aUxrUmNZQ3BPeGFBSUNnZkVwbjFrZ0htTDJ0ODhhb1ByT3MxU1lhU0JNU2VzRWJBVEY4ZVpwS0RBNXhGSGhKc3duVkIwMkJnYlR2NllGempJU0pVaTUwNmJ6UGlKSWo0UmY5bkVOV3RUMUR3S3ZXNG1JNjZ0dWd4ajA0QTAxRFlrbXd2T3dJRENEdDg4ZEdGT3drbWFya0FCbDNFeXZMZXhBMjNuNWRNWlF6SksyRmliSG42MnRQNllpelNJRXVJRzhBN0RsUHZzUFRFRk4wTjEwalQxdEhvQmgxRlZaeGR1eTFJZHl6ZzZpN2FRU0lQaGtmalBwaDVWVUtvVWJEOXo3bkF2WmpLZDNsNlFZUVFrbWZ0TjRtOTViOGNEY2F6WkowcUNmSlZKTy9sYkhzWW9xR05JeFRlcWJaZ3phR3F0TXJxRlFoSWtBalVRSlZ0dGM5YmJnNDMybjRMVW8wcVROQlVUVGR2TFdlN2tSWXdZUG43WXJPZlNwcVZ4cVVvNm1YQlVDQ0wzK3ROaDY0cytXN1NMbUZDT1QvQURQQ3dacld2NEl0UFAyOHNZTStTNTdjRzdwNHgwdFBrb3dBTmROUWtHb3ZoNVFXRnYxeGEzckV5QWZ6SXgxVjdLQ2hPWTd6V3FrbFJwZytLd0o1R0NUdEc0NllVWnRqOFFNSHJqVGpkd3RIMWY0Rmg5UERMSkx1L3dDQmcxdWVJMmJuaFV2RVB0dEo2d2NGSldrZm4rV0RISW53ejFjZlg0Sk9sSldGMFJhNUhvUHhKNjRtcG0wNEJwenlHR1BCT0VWODFQZGc2QmJVVENuL0FIZnBmMHhiVVd5OVRpeFIxVGxTK1FiT1VsWWJnRThzSGNJemVYeTlCZ0VDVkxTQUxWYm1MZ3lHQmtnMkkrZUkrTGNBcTVlemxTRDlpTCtVZkY3bkNyTWx0RVJ0ZUQ1ay93QjhaZXBiU1VsdFRQbS94akxneVkxbHh0TjhjcDdIb2k4WWFpL2Q1aFM0RUZYUTN1QVJxVXdDUjFFYmJZc0hEdUswYS84QVRlVEZ3UVFmV0QrV0svWHlncU16RzRZL2hZRWZMRmU0N1dmTE9wcHRwZFdsVEgzUno2RWV1TkxndXg4cnJmY3YrYzRkU1k2bXBna1htTC9QRWxXb0ZRbHlFUlFXUGtvRWtuMndGMlY3UlU4M1QxTEFxTEhlVSthazh4ektua2YweFd1M1hhTHZkV1hwTi9MVS93QXhoOWRnZmhIK1FINW55RjFXN29NcFVyRVg4VjMxZHF6MkJxRnlEeVc4RDJFRDJ4WHZwU0s5OVMweEFSaDd5RCtlSEhEbU1OcFhVZXM3ZnI2WU9xOEpwdm9OZEZxWEtnTjRvbTl1a3hpR2VYdS9RZkRHL3FlV1VhUllnS0N6RzBBVGkyOEsranV0VUd1c3kwMSt5UEUvdjlVZmY2WXRDY0JvclZVVTBWUk0ySGtmenc3NGErcW43WXpTeU90alhIR3JwaVRMY09vWmRhYVVxWVh3Z3UrN01mTW0vdHRqekNvV2VvWElnc3hZek15U1NmeHg3U09EMDNBcVZhcFZRTmxBQnQxTGVuUTQ4V3k5ekozaWZuaWtkeU1rMXlkc3NiYjljV0hzQmxBMVdwVlAxRkFYMVltVDhsKy9GY3JmZDF4YnV4bElDaUNyUVdZayttdy9DZjhBZGhwY0NJdnVXcWVIRHpzeTEzOUIrZUt2UnpFTEpuRmk3S1ZRZFJIUVlTUEl6NEZXUU1aNS93RFZWL0JzWFh2RDVZbzJxTTY1L3dBMVQ4R3haZjhBRUUvKzR2OEF5R0xzZ2p3ekwweUFwZFFwMldEdVFDRFlmT09WOFFncURwVW1KbnhEVnZjd1R5a1NUK3oyTTNxM1JZVm91UUFSZWI5Zk1kTGM4Y1orc2gwcnAzR29rYjdYZ21KdVlqYmZIbjA3M0tremlRdGtZZ3pKQWk4a3h5Rm8vd0NzRDBhS21vVkpKMUhhSnVaSjUzNVloMUlvOEo4ak14Y1FSdE1lY1JiQmRsQWVVOGhiemdTeEIzbm1MZXR1ZG9QQnhuYWprNlNvbVRKVWJpd01uWnJINXoweHhRcGlWTGxkTXJxM05wdUw3WTVTV01Hd0UrSlFERUErZlcveXgyTXVYOEdxU1NJTUVEbDh0NHQ1ZGNGT3RnSG9XWjRobzFBaXh2NVlEeXZGcWNTcFZmOEFUdWZ5QTkrdnNSUm82cVNodmlqU2Jia1crK01BME96OHN5QzBRUkViZkwxeDZXVEs0eDFMZ3lxSzRES2ZHdVdydytraysyM3p3VGs2bVd6RHJTcXFOUHhjZzRqNndNV0UydGEwR2NBbnN3MDJZM0ViMitXTWJzb3hJSmFZanlpT1FqR2Q5WkdTM1JXT05KMlQ5dUVwNWVuVHAwYTFRaXBxMUs3QTJVckZ3QVFKOWR2WENXaGt1OHlsV3BCYXFycUZBTmlHaVJITXhQdkh2YXp3R2wzR2xrRE5DZzd5ZC9GSkJNcnlBNU0xak1GZDJheVg4dUNSSDhRQUlJSU9oUTIvUGZGWXVFc2IwN0d6ODVuaEQwbEwydjhBdTV6d0xzVjRBMmF0TUh1MU94L3pFYytVTHYxdzJ6T1ZvcU5BcG9xallRUHczeE54RGlKVllNVGZjZmZiQzRaSE1Wb0FHalZIMXBGK2NTUitPTFZqd3IrMnp6OVU1Y0hHUjdOVXN4VWdBaEYrTWdrZWlpTEVuN2hmeU54cVpxbFFwQktjSXFDRlVRUHhIMzRIeStYWExVQXFBa0w4VEdKWTgyUG1mSWVXS3h4SE1QVnFhUU56SGtMRXhmWXdEYU9XS1BTbHFleUM4czVlMjdJZU44VUxrc1dKNmNoN0FXeFhhd2w1RS9ENW5rWXRGaEpuMnhZNnZBS2pHYndDRDYrNXhGbU9CMVRBSUpGN2lML2Y5MlBLNm5xZlVlbVBBWXhraTg4SjBta0traUN1cWVVRVRPS0IybnpnZHpPMXo4OEhVc25tUlRTaU5YZHI4S24xa0J1c0UrMksvbTZwT3ExelBLWUk1Unl4dXdabGt1Z1RUVkEvWktvMzhiQ2srS2s0TVRjR0xIeXR0aGh4S2xwTExQd3NSNkFUYy9MZkNQZ09lYWhtMFptSVZwQVBROGpiei9IRGppV2JVdVZtZFJra1hNK25JZmlkaGJGSXZmY1dSM3dnT1JLZ2hTZCtaODk4TVdyRlI4TGZFQ1NmbGhVdWIwaU5RSGxlM3YxeEluRVMxcEI5L1BDWk1DbGJUM0h4WmRMVnJZZFVheExUMUdPNmRaNlpZQlNRVElpRDdiMndEUTRqVGtBc0ZPMisvbmcybHJYTlVxRlRReVZRNFI2Ykh3c0ZabERTTGc2Q0NCRVd1Y1pIaXFOU05ieis1eWp4d0FjYXpWZnVuZGxoVlJqdk1BS1R5dGlnOEFiTGgyL2llODdzSVN2ZHhKWWJMY0hmSHF0Zkl1Nk1qTDRXVXExK1JFRWJlZVBIdUk1TnFWUjZUZkVqRlRQT0R2NkVYOThKamxCN1JZTmJrN1pDYXM5UG5oaHd2akQwVEt3UWR3ZWY1akZvN0ZjTHA1dktzbGFtSE5OOUNzTE1xNlF3OFF2RWs0SDR2OUc5VlphZzJzZllhemV6UnBQdnB3enl4VHBzVVo4STdVMHFzSWZBeDVOdFBrZGo5eHhmT3lwMGxnUkhoL1BIZzJZeXRTaSttcWpvdzVNc2ZMcVBNWXVYMFpjZHJuTlVxQUxOVGVRUkdyU0FDZFNuZFFDQmJhOGJtY1VpaytBTXNmYURQOTNtS3JUc3grOGYzd2wvOFVqcWYvVC9BTFlaY0d5NXpaelpxbUt0SjBERlF1aHd6TWhzUWVhU0ROd2NUZjhBaFJlby93RFRUQ3p5cURwZ1VWNVBQZUo5ME5VcWJNVnR5MGt5Q1BNa2JIa2ZMSEZHblRJQjFpU3hBQkFrQUF3VDBFZmppSmdDSFVrU3hFRG1DTDJQbnRmeXhIVWhmQ0NEWVNmbFllVTNQdDB4RkxhaDZDbHJvWHUrblNTRkduVVdCRzVNd0IwTUhmeXdSVXFXS29aSUpEQ1lPeTNGcjh3ZHRoZ09uUzFxek9ZQThSTWNyanJjeUR5dmlOZkNOUUxCb3VRSUVXSWtDd3VQdndyaXJBME04dXFxQUd2cUJKMzhZQnNnNk1UNkF4aC8yYzRFejFvcXJzQXhPcjRXa1FiR05VQWpUTzRNenBqRlR5SlZqcllrdk50WHFTZHZQbGJmSG9HWDdWQVVsQkExQlFDZHVuNDRsa3RiSTRjOFd5K25RUVBER241YmZuZ2JJbUt5TnlZRkRQekE5WkdJeng2bTRLbTQ2ajUvdU1PT0Y5bm1ycDNpdHBweWRJaVRJTVR2YTQ2NDJkUFBYaWNKY2tuQjZ0U0o2bE03NnlCNkQ5SnhrV1Bpd2c0aG5LcStFS1FSWXpJL2YzNGdwWmlwY2FnRHpKTmhQbmZZZmxqenZTaytTdE45aXcxU3NRemdBMkowaGdKNTZTSUlHOEVYd0J4Q2tFclphZ2hMRHZIcXU1V05SWU43YldNZEJqT0E4SmVvM2VPVDNJTWtrR0hzVEN6RTczTVc5Y2MxZTBXV3Jaa0UyWmFkcWp0cEEzR2tvVFluVWQvRktzQ0JBbmQwMEpSNWUxb0QydS9CUHhSQm9uOThzVFpiaWRNZ0FPSkZ1dDlzRDU5d2FSSXVPbzIrZUZDMGxnSFRKSE1SODU2WXIxN2Z0YWZraGlpOXg5VDRqcGVISmtHUGhYLzlURnNHakkwV1phcXFKQ3dHOXlkdVJ2Yzdubk9FdVN5ZFN1VGJ3cUpab2tBUk1XNTIyeEpUTlRMdVVJa0ErSlFaOTE2akY4VTFteCs1ZkRPYWNIc09HSWtqYU4vMTlQUEd1N0JHNUo5TC9oam1ubTlZZ1dMQ0FjUVptbFdwRTk0aDBqNjYzVTN0Zmxmcmp6dXA2WjQzY1ZhTFFucTdCWmpxY1UvdGJrUWxWYXFpMVRmeWZuNkVpL3NjUHY0OGRiOUJ1Y0E5cFFYeTdhRWxnVk1mN2hQeUJPRTZYTG95TDdIWkZxalZGSTdRWlFNbW9UMUhsMXhlZUFKbDg1bHFkV3BSUXV3aW9kTnl5Mk1rZFNKdjF4VmxUVXBVNzhzWExzbndVb0FRMzh0MVVxZ01pNG1ZNUdEajB1cWk1VnArNG1IaG5UZG1Nb2Jkd285eVB3YkMzalBZN0xhQ3lCMFlSOExrN2tEWnRYWGxHSDJZWUJ5RTVHQisvd0I3WUh6bFU5MjIzd244TWVVc3M0eXEvd0J5eXJ1aXVjSTdObnhBVkpJWlNDMWhFN0VjK1ozSExHcTdISzhReTdWYXVxa1cwMHhvMHFQRkp2UHhBMnZjaDE4OEZkaytOMHEvZTkwU1NORWhsSXNkWDZISGZhYkxITU5Sb0ZCcDd4WDd5UGhDSHg4clN2TW05aGkvcXRaUGNQb2M0dkhHdlBiK1MwMUtkSUVqVTRqL0FDZ2o4Y2VRL1NkbE5HZWRnU1ZxSWpBa1JzdWcvd0RzKy9IcHRXdkxHUk1rbTNuZjN4VGZwUXlXdWpTcXFJTk5vTS9aZVB2MUtQbmlXR2FXU2t1U1pEOUQyWWg4d2tUSzAyQUpJMkxBbXg4eDhzZWpMVUoySlQzWS9uR1BKUG8ycWFjNXBQMTZianBjRlcvL0FKT1BUZEhTZnd3MmFTalBkSEV2Rk1qU3JKb3JzdFJPanFUZnJmWStZdmp6N3RoMllUS2p2c3M3S2tnT0F6ekRUQmtuWU1JaTkyRitsN1lYMk52WEhQRk10VHJaZXJTTk16VVJsblZzU0xFQ09SL0RDNDgxUzhJNWxWK2llcFA4WFQ2MGtiL2hVL1I4WFA4QWdxbjJXLzRuQXZaVGhGREpVQTZpb0s5YW5TRlFhcnFWa25UYVZrbUlrL0NOc09QOFJYN1ZiLzFjVnpPTGx5RGc4ZmZoam54SG9CdHkvYy9QRU5MZzRnK0hlMjh4MXY2eGYxeGN2OEZFL0czL0FCL3RpVWNKNUZ4N2pmNzhQb2trRlRSVFg0ZklNaWRNMmozK2UrTXA4SWcyNThvMjlmd3hjYXZESUhoY255QzNQdk8wWTVwWkZpMDlQWW45UmliVDRHMUpvcDMrRldCSWplOFh2ZStDcVhEanBuU1ppREcveTU0dFRjQjFidDkvWEJPVTRZMU1xNm1tR0JCRmh1UCtzTWsrS08xSVFjTTRLK3IrWkZKQnVYOE1iY29ERTNCdGJ6d2Z4ZmpWRmU2b1U5UW9JNEx1bnhFU0F6ZzhtSW4yZ1R5RHZQWmVwWEphbzFKMk83R21wTnVuaDZXOUl3dlRzNnMyQ1NPcStjN0hsalJqbEhFN1NiZjZrcDNMYXhUUXpGRjZ0VVU5WlhVTkpZa202aWJ0TFJxRFJONEl3WTlNRzhHUnR2UHk1L0xEUCtBSXNXUVJ5RnV1OXQ4YVRMOGg4eEo2Ky80WXk1WnR6YlMvOUdnMmxRT2VJWmcweFRWaUVBM0tnUU9nbmZBUzVkalVOdFRFaUNia2s3RGJ4ZjN3NC9oMUpYV0hLeU5SQmhvOHA1NG5ScWRKZ2FGQzRGbXFHU0QxRjRFZVFuQysrUzNUR1VoOXdiS21sbEJUcUU2NDFFSGNhak1SUEluRlU0Zld5OVBXbVlwdTFUVVlQU0lHMDlieVJ6OHNFNW5pRmRtbWI5QVkvUG4xd0crU1lrbURKazJqZmM4NU05Y1Brbkp4U1NlM2xIYmRtVFZlMHFoWUNMcEd3SWJyOWtOQTI1ZWNSTTRGNGZuKytxNlZMc1FDUVBpZ0RTSW1Gc0NRSk14T09qd3NuZTNuQW45TVJqS0JaaXAxQmpuNWVuOXNKRHFaeGtLMG5zeDdsY3dCWG8wS2NkN0paK2dFRzF2SUgzdzY0eFdZVXlyUkxRdmxjek1UTm9uMnhWT0JVS0tWUlZaeWRCREtvV1pJMmtuMi90aG54dlBHcXNJWUpKbWVYcGNrenRQcjF0VjVja3JiNzloNHFLNEFxT1hwMWRUbXNFVldnQW54SDBIbjUrZU41amlORlFhQ2t3MGd3VHZ2dWVjL3VNQkxrNzllVWdlZldNYzU3aDdrZnkzVkcrMHlsZ0QxQWtBbi9WSThzWjRaWEhacjZuZk5rbERzK3FNQlZabGVvR05PZE1FaUpCdjhVR1FvUEpwMnd4NFhtUlFvZDI3S0twRGFCejA2dHgxQ3lCUG9QV3BOMk8xbnZLdVllclYzMXRxM3RFUlVCSEswNElvY0VaYXExR3pMTTBFS3JRQVAvY1Q3bWNhWjU2aTBtTGFsL3JUOCtSdzFZQXhyOTVNNFQ5b2VMcWxNNmF5QjlpQWRiQVhrd0p1Qk5qSGxmRFdodzhpWmNSNi9PWTVmcGp1bnd4UEtmVEdDRFVaVzFZelM4bEc3RVpudXMwd1NteVVxZ0MrUGxBSkJFN2tua0ozTytQUWxyaGhNNEcvdzlCMCtYN2pFbExMZVlBOXNITFBYTFZSeVNKUmZuSHBoWDJ4Tk5jbldGUnZpV0ZITXVMcUFQOVFHR3RiTEozTGhTeTFTcmFYc1ZVa2VGbyt0RzhZcVdhN0YxS2o2cXVZWnh5OE1IMmttMGRCdmc0b1JUVXBPdjVBeFoyWDdMNXhhMlh6UGN4UitMdkRVcHhvS2tFMmVkanRFNDlFVU45cGZsL2ZGS3FmUitqUU8rWlY2RlExenpGeEdMVlJ5K2xGRFZESWdUMXR1ZW1LZFRLTTZjV0FPYU9iYjdiWTZDanJnWkI3OVAyTVRHbVl0SHVjWk4yR3JPKzZIbWNiMGVRKzdFTEtZbmYwc1B1eHhMZFB2d056dElSUkFHNkczbit4anZ2QWJCRCtXSSs5dkVmc1lDNHB4THV5TlVoUlk2WW0reEV4dDB0aXNlb25MMnAwQlJRVTRCZzZScTVTVEU0MDZyQUJHKysvOXNDNVBpNUxNcmVNTUFRQ2lpSmk4M1B3bmJyek1YWm93YURwSG42OWNHZXZDOStSdEtCdTRwNzZUUGtNUjkwc2tTZlRER2xmeTVZMjFJYkVBOVBMQTllZjlRdWxDaitHa2orV1Jjd1RwKzRUanNaSUFpRWtYK3NiSHpHMzNuREZhWUltLzdrWTAxR1RFNzRXWFVTYW9OQWxDa2krRmpBNktzZnYyODhUMUdwV3M1OTQyOThTTGx4UHpQNjQyY3VDT2tRUFAvckRSenlTNFIybHZrQ3I1bWlQcVZEZUxTVDl4eE5TQVB3MFo4MmI4cE9PNmRFS1FONXZlTGZkaVdyUTFDNU9LTHFISGxIT1BnMEtISUpUSHRqZjhDeHZxVWVneHpScDZkdW5NbkhKZHhGK1hVNEw2cUgreWIrb3RFdjhBQWdTUzVnRGEyQTZ0V2hNUXpFZFlBSHVZMzhzU0NReEc1UFUyL0RFQ0dUMGczODdZVjlURmNLZ3BlVGVYeXJNYlU3Y2pJajlTZmJCOVBoeDVzUFpiZmpnVnM0UkIxTnQrN1RHSVRuQzhrTTRpKysrMzY4c1dqMUVFdTdBME1YNFlEek9OZndTam5iekg1emdWc3dlckU4cE9JNmJNVGRWQkhRazcrbzhzTCtZZ3JhaWRUb21xVUVCK05RWjZEOWNSQXJ1SmIwUWo3NGpFNnJ6L0FIYkhYY01aR29kTnVYL2VFZlUzd2prZ1phSGVEK213K1krL2JiRzZHUlpSQ29SNnZiN3lUZ29aaGdZbWI4eDVlVWRNZERPSG5mcnk4N1h4VEhsd3ZlMzlqdHdZWktwelVUL3FuOHNjdmwzQW51cFBRTUorWk1mZmcwNWh2c2phM2lQL0FNY2FiTU5NYVIwK0kvOEF4eGIxY0QydjlnYml5cmxhaEpPbVBLUko5Yi9uaUFWQ2g4WWVPWk1FY3JubEhuNjRNNGptSEVTUUF4QWhkK2ZNOHJjaGpuSTVtZ09WUW5hVEhLUjF3bWlNL2RCL2Nyd3R6UzFLUk8yOXBEV25wdk0rVVltQS93QWovTERLalhTUENDSjhoaWNIbmk4Y2NYNCt4TnNTTUJJbEtnLzIrM1E0elVvdVdjUjFVeCtGc1BjYzZCaHZTaDRYMk9zcjR6cXNZUWsyM0lnRHlreDh0N1kzL0V2OXBmMzdZTXoxWlpLQmZFWUV3QUw3Ylh0Z0x1MisyM3ovQUxZd1pZUlVoMUpILzlrPScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6ICdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0NFQUFvSENCVVRGQmNWRlJVWUZ4Y1pHaUFkR2hvYUdTQWNJUm9hSXlNaUlpSWlHaUFjSWl3akhSMG9IUm9jSkRVa0t5MHZNakl5SENJNFBUZ3hQQ3d4TWk4QkN3c0xEdzRQSFJFUkhURW9JaWt4TVRFeE1URXhNVEV6TVRFeE1URXhNVEV4TVRFeE1URXhNVEV4TVRFeE1URXhNVEV4TVRFeE1URXhNVEV4TVRFeE1mL0FBQkVJQUxjQkV3TUJJZ0FDRVFFREVRSC94QUFjQUFBQ0FnTUJBUUFBQUFBQUFBQUFBQUFFQlFNR0FBSUhBUWoveEFCQ0VBQUNBUUlFQXdZREJnVUNCUU1GQUFBQkFoRURJUUFFRWpFRlFWRUdFeUpoY1lFeWthRUhRckhCMGZBVUkxSmk0WUx4RlROVGNwSkRzdUlXSkdQQzB2L0VBQmtCQUFNQkFRRUFBQUFBQUFBQUFBQUFBQUVDQXdBRUJmL0VBQ29SQUFJQ0FnSUJBZ1VFQXdBQUFBQUFBQUFCQWhFU0lRTXhRVkZ4QkJNaVlZRXlrYUh3c2NIaC85b0FEQU1CQUFJUkF4RUFQd0MrdDJoUmlkTStJTURGN1I0V014RUVFSDE5TUZPNmdyQkV0VURJd3VHVm5Hb2IzaGp0NXFlc1ZpclRZTXBMWHFDNEFFa2tnenR5VWsrbU1ya2dGQkJhYmJrZkVwMUdRREFCSFR5eEJjamFEaVhITWd0cmt5RzAweEZ2aVBpSXYwWWMvdW5FTlFDdXplQXVxa0tyRWxVc2ZFUnphVGF3SThPNG5GWVBFSDAwOHVYYlVHTFZDc2k0bVJmK29rYzlpVGFaeHVuYVJxYWcvQWw0VUFBTEVtRkd3RVQ4c00rV0pzUnEzWmltd0pERU1wa0VHYmpkZExUQzh0NWpuaWJPOERwWmltdXNCTDN0ZWJnNmJ4SnhYaDJwcVN4QjBydUd0SFVtOW9JYmVCSWlNRlpEdEM0MHlOUUVnQXdJSko4cHNEcG5BYzRvMkxFUEVPenVhcE5VYWpUWWlENGpwUHhDR2dSMENqYmN6SWl5YW53ZW9yb3RhbVRyQkFTZkVISUlVM3NmR1ZPKzJPaHYyaUhkczhGU0JwQVUzTFNiQUdRRGNiMm5jMnhTWHpGVE1wM2xSNnRVSVIzWUdrV002OVRibVN2VzF1UUF3VlhnVmkzTDhNZU5EbGFZSHhGbldWRytyVHFraUZNUUwyaThZSC9pdkE2TXF0cU4ydVRzYkF6dE1IYmNZZThhNGpscTFQUlR5UDhBTkFnRUFycEorSUVwR3RnQUxrUnZ2ek95UFlxcGx5bFR2OUpJZzZJWWdHMWd4dmNpZWsrVnk5QVNLb2kwZ0N4STB5RktNMTJCa3pFWEFJdWZNVHZnekxjUlZFRk0wME5LU3hBRzVNYzk0dDE1WXlyd3daYk1OU3pIakIvNVRxQ05ZSnRaWk93WWFibVJ6NXgxc3ExRU10UUpUS3NTWitJd0Z0SXRCQmtMMURlNDB3NHRBaUtTcmxRNDB2QlVJU3VnN05xNUVubHVkOGJWM1p0TXFXL3VFL0tjR1VjL1Zwb0RTZW9vTWw3K0FqWmRJanFISHFCRjhlWmJOUWFSZGxLQmlRcTdpOXl5bHJGb0FJNWdLZlBHYjhnVmVRanN4eE42YkNXQUFKQkxreHpIUGVBZnJqb0ZMTkZrQkFzdGdPdHBrSG4vQUp3dlNubGF6Q3RUQUVDQ2dHa0dUdVY5WXZ6L0FBTy9pRkhPT1VXdDZIYkVaU3Zvckdsc0Z6R2RkMTAwMjBzUmFSTUgwNW5lM2xpVHV3UkpJSkIxZVVpOXgwK1hQQzNqWEZGb3FzaGdwTzZrVEo1NmVmTDVZQm9jWEZaSFJHMHVSSGlpQkpnbVJhTno1Q044STR2RzBGenRqWEljV05SNmptUWdnTGFTT2tpUmVJRThzUVY4L1dxRXFvMHBFTVNTSW5hNDNKakMzZ0ZWUlRjRmlDVzJHd0VkZnZmbEhuR0dUcDBCMkhwTnR1Yy81dzBKSkttQ3JWZ1BFczZ5SWxJTVJFbWJ4ZmNFNzZlVWVtSU1yd3p2S1pJSzk0R0VYK0lRREJrZ0RlZFU4b3g1eE9tN05zU1BDUUdKSmJsWUViamN6dE9IUTAwNllIdXJRRDRvRjRGN2N0L1hBNWVaeGlxQW9vS3lEbW12ZHJGTlZOMmdReGt6QjllY2UzVXNWZ3g4TEJpbzVjdlh5d25TcWFta05vZ2dTZXUyd0I5cjlUZ21WcGc5U05nSUp0dkZvNTdiNDRaYnRsRXdiaXVaZHlLZE1HcEJHdGliVTlWeGJUZmFCenY3NFY4Ui9sVTVMTlVjQWdrRXJxODJHeGdFZlc1dzVxMFdZTVUwaG1IaFl5TkpzZHhKdEVkRDh3RjM4STJrTTdBMVpaVk0rRUFUNHRyZ0hsRzNMSFJ4VFZhRWtWS2pTZXI0aW1wVklKa3dERjRKa1FDQkZoenhiTW1pVXdIN3VtamFSQVh4RUpNZ2F1WWdnSHpCNkRFRGNFWUs2R29HVW1WQ0hSNzN0MXRQK016K1ZxSlQ4SlV1QXAwZ0JRYmVLT3AzOFhQU2JZdmRvV3dMaVhHbTE5MncwQWMxSUJNQ2JRYlRQVENtbm1nd3FzMm5WQUUxQ2RRTWk5TlFJTEFEYmVKM3hML0FPOVFNVlpWZ0F1L2gwLzhBYk4rVzhYakZvNGZRcFU2YWxBdW1aQktnNmlOekk4V3ErMkFwSkdLVmxhTloyVW9qeUVadmhNdUpQaS91RTJueUF2aXhQbWFpcUtqVWlIbURUMGxnWXZJQTZRRHZ0NlljZDZUclkxSVJiMldDWTZGdDRITVlBUGFlaW5oSGpRL2UxZUwzRVdieVBQQWNyWUNzNXpPMXN5NVl1VXAyOE1EZTN3VHR5UHZ6eDdsdXpyRnRkUmpURUZrbU5iY3dJM0I2emZEdHUxZE10NFZJVWdqVkgzdGdRZDRpUHBoUG11STFha0xjQ1lERmpmbnZ6dHo5QmpaQVhZR09GNTV2RkZXOS9qajZjc1pnNSswYno4TEh6MWI0ekIyR3k1MVUxZ1BhYWNNRjU3U2ZLUW9qM0o1aUpuS3QzaEd6QStHYlJJMHdSdHVUMEVubmdGOG9FWldaSldTU1RERzVpRmo0Yjg5NzlCalRob1JhWmc2QU5TZ1dFcXAxQTczSmtBbUJZRFlqQ3hsb3JSdmwzbnZHQkdzTUZGeERDSTNIbno4c2VKcCs5SnVaQUJCQW04K1FuNlJoWmtNMnlsL0VnMGlTSW5WekFHd01BbVQ1WU5xb3prS3FlQmxJVmlOd1l1QmMrY0dON2pEVUFEemVYQ3FBaXRjRUZpVE1pOGs5WVA0ZW1CbXJnTUdZQU1BV3ZKbUJOcmVHNWsybTg0ZVZsQURJQUFXSUd3Mk9rQS9nTi92ZXVCTS93bFVUVUZEQ0FYVWszSko4UUFtSVVmUHJqSitEQzdJVnFaK0pReUtDQ1FTRHBrV2duY2tFNzRIelBIRkRJdEFDbXNFc2hHNUczUUNSZU5yNEZ6R1kwR1ZBYTVnWDhSK1FGdHIrbUFLZ3FPMnBvUDNoQ1FERVROcnNMTDdSaDBuWWpMYW5GMVVCM0tWQXNFcjhMU0NCdVR1TnZQZTJGTk92L0UxU3dNVDhLdFVNTDBCTFRlUUJITW5sR0Z5TS9kbldRUE9BUmNpSkpOdmIyQjNBOVBNNlZET2g4TFNqeXBCWmVUVEY0KzhMZ3dRTmhqVS9MTVdQdGhUN3VsbHdaRlVURjdnQUNmcnB1T21FV2N6dFdwQXFPOVJoRTZqTit0Z0J6ODkvUEIvYTdpalZ4U1lvRitLdzVlOFhtMjF2Q2NDTFFxc3BJNUdQaUErdk9CRTgvTEFqS2ttd2dxVnpjU1FKNUd3NWkzcVNmWEJ6NW1uVWpXb0pFa3NvQ21TTGJXMGdnR0FCdWVzaGJXeTcwMkhlQUtCVVVNd0pJS3QxSU1DQU50N25HVjZXbGlwa1hJQjZ4eXhaTW5pV2pLWndGb0x0QktCdnU2dVI4U2lWQWdYM2oza3lzNXBVbWRIY1dESXNsbTFNUUZ2UEptRmpjMkhtYWVqMnNTR1UrczRZNWJQS2tCMERLSUlMTDhMOGoxK1dCSmVRSXhNOHpKRlJRMGdoRHFGaU5KUGgzTmlCK0cyQ01tMU1OU3RZK0JsQWd3VEZ5ZDUzUFNjS3MxbXQxQWhTWlZSSGhnc1FCdkt5elNKNTRrVGlDTnJOV25KY2d5cGlUYytkMllnbjBQV1FYQzBhNkxidy9LaEhhbXVrMHAxYUF4bmJmcUxDTGVXSFZZcHNDRlVSRXRabzh4Y21QUEhQVzQwanZUdTlKRlhTOFhFQzRnQzV1YlRzUUQxaVNoeGxpRTB2VExFc29RTnAwbnEwaUlOenZCdnRoSHczc2RTYUwzbUJTWmRJQ1JIaHVDeEFhOE1TZjloeXdKeEN0VUpBQ0VodE10QnQxM0lCSWdla0RhODFqSloyc3F6VFFHWkdvK0lNd0FCUkNwWU1BQ09rMjVnWTFUaTFVTTYxSXRwTFJHbGRoSmlaTU5CWHFiM0VZaS9oNjZOa3d4TXozWkRVeXpzU1FBRGVlcFdkaGY2ZE1UdnhkV09rcWJteklCTXhZQSt0ejFIdGhkbXN4UWhRZ2xocVlGbUtNb0VtR0UyUEtBWkpuck9CYXpzU1pVaU5Qd3lOQjBFTGY0U0lBWW40akJqbktMaTN0QXlMV2VJTVZFaGR2Q2ZFb25vQTBiQTgrbnZnTFBjWktFMG1JRGtGZkdiQThwSklDcjRpU2J3UjU0clJ6TFBGTVZTeHNTc2JzSW5VckdEZG9FRzRVa2pEckk1V2xXbXJVa2tDQ2g4QWVRSVlOYndFdDVScUhLK0hqeDRlQTVXVjFlTDFLZFdHREVqN3BteDVTUFRCNDRoVWFscVVCRFRxQlNTTnd5a3FBWW14UnBCTUdmWEJlY1RMTTArT25VWUVycklVVkFRTkt5UkF0YWJTWWt6ZkMzSlVndFZxYmxnS2xNcVFiRWJPdThBa3NxeGVEMUcrTEpmWUZraVptcm1JcEZuT3NpUXA2YzU1YmI4bzU0dU9ZeklvMHdRVmhWQ2h5dzFmMkJnTDJGdlBGTjRkbEQzb1Z0UzkyU2FoQklzZ1lzQ1oyOE9tM1VYbkF2Rjh6VVpYY1ZHVm5hNG1QQmV4aU5yQ0kyeE5yd01FY1E0N1ZyVkZwRTdtd2dqVjh0ekhQeXhCbnN2VVJvS0lzV0NnL1dmWTQwcDVkVkNsVHFZcU5CRWtoclNMQzE1QXhya2YvdUhZc0daNWs4b25tVGdleHFDOHU3TVFTaVNva01GRm9nQTJnbUR5NXppZDh3RkhNbEFTeEY3bThpZjJabU9tbEdocUVzVEpneElnQWlkaEpJNW0zdE00OWFyVEZ5Z1A5VXRxMURrSWlSTzRJTzNUR1VWNkRwQkZLdXFnQ2R2NzFIMGtSKzk5OFpnTnNoU2J4R3FWSjNHbmJHWTJNZlEyem9kVjFYTHdIWUNCQlppU0pPcVo1R0RNa25wZ1VWVldpQkNnTk1TSWlXTUE5UENiYzdEcGdCV0dncWFqVkdJYlFOQVVhaDhJc0NkUWc4N3pndzV3R25Lb1pjSFR5NW40aVNCcXRib2ZYSEpHMSs0N1lpVjVDclloZ3pGU0pqVHZKRmlMRG5QNWE1YmlMcWdLa3F5eXdHNE43R0RZVHRJM3ZnTE0xQ3RSbEN4RGxXbmRXdEJNZkJNUnNmendIVWFUcEJHaUN3aThjdkR5RUdSRzhLTWRhUko5akhPOFJMT3pFalVUcU0yZ1FCWUMweVp0MDN3eXl2R0JvdTAzQUY3c1NBUnB0ZmZtT2Q3NHJtVnFCMitGQ0lJWmphQWVWcmN4SFRHVWF5TzJvcVZFa2xtWUFBV20wTEowK2Y0V2F2SUxENjdVWHFCQU5JT3B0WDlCRW04UkczcmZsZ2g2SVNucjE2bFlnZDZ0bFFzSVVQSU5qRVgyZ2Nwd0Zsc2hVUStJVTJVeVBFUEZCSWtDVmhvSXNlUjIzQXd4cWNRR2xVRkphU3pHazNTb09SS0hudnlJSVk5TU81cEliRml2S1pWeWRUcXdLc2RLS05YOHhaVUFnMkV2Qk80aHR4R0I2dGVveUl0UlpGTmpyRGJhenpCbmVJRmo5M3JoNXd6aTYwS1pTbXdMdFVMc3hJSmsybTV1dzJCNUE5U2NEY1RKcU11c3JKazZodjE4Y0NDWTUvWEMzc09JTnhIUFVub292Y0Ntd1BMYVJZKzVtVHZpRmsxMDBFQTZvaWIyUEt4Mi9jNFpaWGdkVE1aZFNrS05SMGlvNnBNV0pBTjRtUlBQejN4QytWYW0xT213S3VyS0NJa1RwdE5vSTIydEVIR2lsUnFQVTRlRFRjVkZHa2l4RXhUOE1UQlBvMGpuSExDV3RYQm9CWEJOUlNScTM4VXpjOHhwL0RGdHE4UVdsVFZXcDZGYm9DUVBJaWZPM0xGVFpRQ1FRRFRkdFFBdHMwZUhsc0xjaGdxUWpWQzFYWlFEdFAxOU1QY3R4Q2t0SWlwM2pFejRRUUpQSzhUdkhQRzlEaFZTb1ZZVXJSWU9WVzBXSW1KQmplTDREcVpsbGVEU0FaTFhFTUk1ZlBGSHRFMnoxTW85V20xU0pPdlNGaWZQbnp3WHhMaHNVYWRWZzVOUUVNMXZBNElqVmJvU3NlV0RjaHhvQmxKY0tCWnB2TzNseWp6MkdDS25IcWIxTlBkaHpKK0w0V1BLeDJNd2ZXY0k1eXZveWFLVTBBR1pCRS9lSC84QU41eEV0QVFKRGJURTdkZVdMcnhIaGxDcURwRk5Lb0JidzZnWGE4Z2crR1NTdDV0NVRHRStYeTFNRHZDTEFCVm5abWhqRVI2VFl6UExjSDV5cTBNa2hQVHJCU0RFUmNRMGZoSFUvUEU2Y1VkWS9zMWFic1F1cjRvQmFCT05lSTAxOExJakJEWXpmUzF3Uk84RUFFVDFPQWtaZ1NQaE1SQkhyMXc2bGFzREhkUGpkVUxBQ2xaZ3lzbVl1Wm1kVjd0TW0za2NQbW85M1I3eW90TlhkZ1FBQ3VnRUJmaDFYSU1rMy9IRmM0YmxkT1lwMDJZR1NIT2svZEM2eURFbVlXSThqaHh4bk9MVVJkT3FOSWdzTG5lUWIyVzg4d2RJNVloeVRkNkNrRzVWNk14VmFrMDNLS3ZpcUdJQkpMa0JqZGp0eUZvSU1QRWUwTk9tNVdsVHBoTFNCcUlqYUdFd2RnSTlCeW5DYWxrcWxaa1ZWSktnZ3R0cFd4QlBvUTEvUEJkYnNmbUpsZERUYVJheDNNbTVpZjhBZm5seUx5elVBUDJncW0xTmxBMVRBUlJmYVkweDlPWjJ4SlF6bWJyanUxTE9OaW9WUUZCRVJBWHdpM2x0aXk4TzdLMHFSRlIzRlYwanc3THFQTW5wMG4zdzRlaUFqUlVwb2Raa2lEYUJDdnRxTnlPVzR3a3VmMERSU3FHWHpUbHRmZXdFaCs4SkFkUVkwa21kVndCejJPRmVjWmFoVkVCbDJNaVR1VFlDVEJ2ZU91T2dQblNpNkVaQ1EwUzU5Wm0wRGxHL3B6eEZRNHNITEpUcGpVcGhqQVZkOXdZMm5ZeHoyd3Z6SDNRUlRrT0hWaXBiU29BTVE1TzQyMkc5cGp5eERsdUQxdStlbzJsSlVvNnBCTHlCRUtOcEltZlhGcFZtOEphb2xoTEJZK0tKMkl2Nnp5eFVzL3hNTG1BNWtnTllvUkhTVmJwdnZoWXptRk1LcjVkVUpOVjlKWlFGSkpsUUpBSjhqdkViRURuaFZuM1FTVllIYUlCdUJZUU41Qms3ZStQT0tWS2JCUXJTcG1EOTRHeGhwOE85OEpxdFE4NythbjlMZE1WaGJGYzJ4ajMzVUUrYzc0ekNydlIvWmp6Rk1VYjVqTGsvSEhxZUpHVFd4bUNBQUdtQnEyZ0dMMzVnaU1hdDJrWkZDa2Fhazk1SU1McTlnVHVTWjJ1Y0FzOUJLZ0FveVR0NHlRWjUrTC9PSWN6Vm9CaVdwTVRZRWlwYnlJQU8yMkovTGlVVDhFaHpacU5kbDAxSjhEQzZNYjgxdUpBTWpyaUxMVVNxblFDUVMya0dPVzAzRjdSUHZpTE1WS2RTRm9vMU53d0YyMWY3UkIrWXhKbWM1U0RGYWlWS2tBQWFXamJlZXB1UGxoMnQwZ1Y1UGE5ZlNJc0l1VEc3VHNERndMOCtXRlRaZ2doVkJoZVpnbWQ1amFQTHp3ZWxmTFZDRVdqVmt4QTd6bjZrMkhyWVlPcTVISkVhRnJMVFlibHpVSTg5SlZDTGZwaWtZTW0xWUptY3hVcUJkOVBXSXVPUUFQaFVYc01QZXpQQ1M0cUhNbXFsR25KSkNFTVRlUUdZV3VCc0NTU1BNaE1uRHFWTXovR293dklSSFBwWWhReDIzSTY0dlhCS2FISnBTTEIwcUF0NDFBQjFNVHBJL2R5WTJHRmxHdTFvdHh4emRDL2pQQ3NzdEY4eGtuWldSU1dSMjFCMUh4Ynd5c04raHhWanhRMXN4VExFa1FaR3dhMGhXRUNaYUFUaHYybzRiU3BvSFZqU2JUb1drcEdsd3MzTUVjbVlFa2M0NTNYOW51ek5ScWdlci9LcGhTYnNvcU5LbUFpRTZwTTdrUVBQYkJVVkxhQk9PRDJXSEtVODZOTE90T0NQRnFhRlUzc0NwQjNHL1ErZUZmRUtsYVIzcWFhcW1WSXNHUWh2UGNhZHplK0cvQ3VJbXRSMDYzVjBJQllFa25lQ1RCbVIxRzR3bDdRdlVxMURxVmdnRVV1ZXVEcEpFZkVaSHRZR0RqTmJ4cm9wTEhCU1Q3R0Q1Rjh6Ukx4ZUNLYUR3NnRJMzZIbGJuQjZYRTRNR3JkeFRDS1JTWXVMWGxieDVobUlFZjV4QmtxOVptSW9Cbm8wbFZlOW51NmVvRHhFbXBBVTZ5NTYzdzg0RlNVVkdyclZwTXkwd3JMU0pOellTU3FpQUZKOVkzd1BsNDlnY1lQSEYzZlpQbk9CL3dBWkxWcTdqTUNSS2txcStRV3dhT1pGL3Bpalo4T3J3OTNTVVlqN3hWaWttZDVFREhSK0lQVFZUVXFnQUM0YVpuZXlpYmxwbUJ6NjQ1dG1jd0hxZDVGNTFHM09mVHo1NEdiRjVvS05JOFJlOFpVSXVTRjhJdUx4NzR0ZFBpV1JGSWhNc2xRSVA1alBkbVkySGlONUc4Q0FOb0dGWEJPRFprMWFMbWl5VXc0Wm5xZUFhUTJxUUhndjRSYlNEeXhlRnkxS3FzdWlyVFZidFlCUUxmNllBM3htdzhFRTA3S0ptTTVxbGs4Vk94Q203SVFSQW5kZ0xRWjI5TWFjVHpBN3Frb0JHc0ZpSklpNTY5Zm9CalJjMVREVkhSQUVMdDNaa3FWVHhNdk1Fa3FVbnpIejM0K3dJcGNnUXhBMUZvQmFST29rN2VlRmJYUkdhU3RvVzBHa0ZDUGkydVRCRzNQbGNUNW5CWEF1RS94TllBTm9RRUIzTXRwSGxBSGlKa0RxYjRueUhaN09PVWVubHFzU0NDVUtyYll5NDBrZS9NNHUzWjNoVlNqVHJ2bXFWTkhkekNMQjBpSkRRcE1RR01EZWIydGg0NlRzMElaT2dOTXBsYUx0U0tpaFVJaEc3OVRVWUdaSlRWWmdRbytIbVlGekZIelRrT3dCVmhPOFdNQ0Flb245TVdMdEQyYW9Da3pxbE5JMjByQjFiQVNQWTdiYzdZcTdzUU5KTXdJazJrOVk2ODhMT1VaTFMyYWZHNE9tN0M4aHhLcFNjc2xpUWJkUkIrZ1BMeXhhdXg5R3JXVXU5UUJCSWxpVkdvN0JMSFZBVXpIUS93Qk9LS1hBVWc4OXI3SHI3VGpwT1pwbDZKV2sya29sTmFKMjBEdTBtcEFJL21RWUI1YWlkNHdJOGNaSnVYUm83ZEEvYWNJQVVOZEVNZjhBTFVnc1lFUVZNTkhuSFhsaXI1WHZLOVNuVDF3WEoxT1lQaFhja0RrQnRQbEdDZTBQQnhTV202VXhxU0dMYkdia2xqemtDVDZuQUhBczFvcDFhbTlYdXpvUFNXQU1BK3VGbEdDVnhMUjRtcFV6b0hEbFNvR3A1Wk5LcEtzenkycHVwTmpxbmVDQmhEeHJOWm1sVUZNNlZtQzVpVkl2N3dZTzl4QkUyd3c3R1ptbi9EK0NvekdtelRBM0pNK01SSUlCNWVlQisyRlZBeUxUUDh4a1lrTVNmQ1dCQmczaVE0QUhXMkZrbFJhZkduSG9yVlN0VXFWTktVeUtnSUIwemV4K0lEcnY3WXRaN041YXBRWTBmRWRCWU9ha25WRXdWRmhKc2JXbkZJTWhWSVdxTlQyTjVNUVJJRjVJRTcrM01XdjdPczVxcVZWOFJPaEMycnFDUWI3aytPTGpsenhxWkRqeFRvNS9tNjVJblZJR3dnWC9BTTh2OThDc1Ewd1NQZmI4OEdjYXlmY1ppcFNPMU4yVUNKOE82L05TcHdPbEpyUUk4MmpmeUdPbFVsb2srOWtEYS82UjlQMXg3aWJ1Mi9vUHpQNlk5d0xCWThkWFJtSjFGYVlKVW0rNGdBbmxCdkdGOVFneWJDZHhNKzl0cllkdlFGUmxWall4TzhIbnNCK1dKTTVUb2p3b0ZKRmhKSk5yaFFJaGVkZ1l1WjVBU1RMTklYWmNDbWpWRDl4U0I2L2U5eWJmUENtZ0hyTkNycVl5VDA4eWVnR0xGWHBmeXdoZzhqUFBtVDh6aFZ4S3VsTmU2MFhtWFlSNGp5QkVmZHZ6NW5GZU9PVEZuMERWalRRRUJaZWJ0SWlPZ1VpZmMzOU1EbzVPSWFtWW15QUR6eGxLMThkRkpkRTBGVEdMdXZIeFJ5bEpEVGtHaktQWW9XV1ZaV3ZJYlVOdjdoaWh2VXRpV254S290TnFSaHFiU2RMQ2RESDd5ZjB0K3B3czRLV21QR2JpN1E2bzFORDFLdFVobkJDMGdUTXR1Vy83VlVnK3JMRWJnWnN5UzB6QjNrV3YrdUFFcTZsV1FDUXU1SnQ1RHl2ODV4UGxNdnJkUTVPNEZ1aFA2V3c4Rml0Q081eVNMVDJEektybWpUY2tyVlVBU2RpRGFQT1NCZy90WHhCcU5ScWRQU0E1TGhUREJKREl4SFRWQWVMRU5KbTVuemhYRHN0U3B2WEtrdFNQaEpZK0dBRE1BaWQrZUtseFhpTFZYZXExaTVtQjkxZVFIa0IrdlBHaktNcmFLOHZITGpxRXUxWnJuT0tWS2hWV2M2RkVCZGdCeThLd0J1ZVhQQnZaN2pmOExVRE9DYVR3dFNCSkE1TUJ1WWsyNWdubkdFTk5wSjlzU1ZqNFRoV3JWTW1tMDdSWisxZFhWWFpGSzFLVFUxYWk4ZUdZVWtvVjNCTWkvVWRCaHR3VE5Vc25TUmtDVk13UUM5UXJxMDg5Tk10YXh0WWJpWk1nQ2daSXlTVDZEeUUvcURpekVEWFNRU0c3eFZLODl4OTNlNFVmSTRNWVJSbkp0MnkwVkJVZHU5TWxpMHlaTThvUDFHSWUwZVVmTjVmVFNtbXdiVm9MYVJWNVF4MjN1SnRQekRmTDZxY0l3RndSWmdZTWttd1BJSDl6amZNc3ZkMjNtUjFDKzk0djljWnFNbW14L3JqRnJ3Y2ljRlNLY01XblRFR1FaaUkzOG94MkhzbDJVU21sUE1abEFhaXFORk0zRlBvVzYxSTYvRDY0RDdKZG1GL2lhbWRxQUdTTzZCNU5BMU9QT1pBUFV0MEdMbG1hdG9HRlhHbHRra1N0VkxYSndyNHJsbGNxeGZRWkFuclBsendiVFk4K21JNndCMzVHUjY0ZHBTVk1lTGNYYU9YOGE3eW10V25YT3AwcUtxc3FrSVpCYVZBZ1hRanczTW1EdE9FR1Z5b3F1cW1VV2ZFd1V1d0Vja0JCWTJOaHlrN0MxNDdYVjBhc0tiTUZYUU5UR1RFNnRrRnlTQUJhOTRrYjRxL0ZlSTZLWXBVNlp5OUZlUmdWS2gvcXF4RWt3UENQQ1BPSnh6UjRyay9TeFc3N0pVeTJTcHRUTE5WckFFeXBBcHFZQmlUY2haNkV6aHVuSFZScXJ1SnBNeWpTaGhsMUh3TFRIM3Y2WXRaRHl4U2FXWURpTGpsMWozOGhiMWs0SHpLVkhaaFVxT2RJOE1rN0FTRkEyRjlvMkorVnNJNDBrYUVuR1ZqN3RMeGw2N0JCU2FuVFViTXlsbk1RTlFVeEVjcjRZY05vMEtXWDhhczcxbGtMR3lsZ0FPc2t3MGVReER3UktkUlIzakdrU1BpSURxUDdXa0NQWDhNZEU0Tnd1bGxJSVhYVTM3d2dTc2pZRWl3amZUR09WSlRsaXZIWlpjbUx5ZXlzZGt1ek5XaTlTbzhJdFF5dE1IeElCdEpGaVNJbjA1NGE1anNyVHIxcXRTcFVxTHJXbkJVQWxRTEVLV214MHpibVQ3MmJYSnZoTm1jNFdjd3BSa0VUcUVpUnpVckIyUE9mWWducWZEQmJaRmM4NUxFUzUvN1BLYmdBWnVvcVN3aHFlcUoySTBzbzM1UVp3eDRKMmJvNU5YTktwVXFNNFFFc0FCQWsyQS83dHZJYm5mWHRCMmkvaHFkTmpUMU5VSkFVTkFHbm5NRzBrZlBGTHozYXZOVlYwQXJTay84QXB5cElPdzFNVDEzRUcyRmxQamc5SVZLY3V5RDdTeEdiQkJuK1NnWUQrclUrNDY2U3UvVWRjVlB4Q1FCUG5iNllNekhocU1DZFhNenVUNWtFd2JuQXlMTzhpZjdaeE55dDJIbzEvd0NJUllnenp0ak1UYVc2L1gvT013dG8xb2QxU0NWQmttR00zVVdNY3hjZ0VYSG4weERscWQ5WktnQWxSTENkWFdPVzUzd1pXNGFhVFNXMUJpeCtGZ09RTWFnSkIza1d0aEhYZnZNd3EvZFVqNlhQNFJqVVdiR09kekhqRjQwcitVL2pBd2hxaWRSQWhRSm42QWZQNlRpejhUNEl5MDZsVWw1MGhpTzdJQUZyYWkzSWVYTEZjbzVacWhZSlRaekhoMC9kTWdrbVA3UXdnOVo1WXJ4NmlMSzJ3UkV4S01ZZ25HTml3aG81dmJFTlIrUXhJV3h1bVNMcnFBTzlyV2oyODhLNUpkaEhYQ2VFak5JM2RPcXVpck15VjFOc0RZN2tFU051Zm1HR3EwWEtuNGtZZ3dTTnJFYmJFZlE0MzRQbnEyU2NzcUtkYWl6VEZpWUlnZ3lET1BhOVZxak5VZU5Ua3NZRUNUMHdJcHYyQzNGSk5kbTJkejVxdUNRVkNpNDFFZ2s3VzY3NFg1bXNUdEkrVjhlMUNkUjg4YXZUTVRwZ2IrdURqanBCbnlTNUpPVXUyU1paVEVDK0pheGdUeTJQcGlLa0pCSUZ1ZmxpWno0VDZZSWhEbFhnRTlKd1hSNDVXRlJhajFITU1oYURwMUJUTUhUQUk5ZXVOdXp1WHAxS2lKVmp1MkxhNWJTTklCSmt5SUZ0NXh0eFBoMU0xM1hLSFdpd1ZLa3ROaEpCTzhFeDdZRENqcEdYemY4QUVwU3FvR1ZRek9WY1EwTlBRa2IzOHg4c2JMWEpRQjJNeTA2bGpZQW5ZVEV1ZVV3T3M0cWVUejlScWEwcXI2ZkVOVWdqVUoya2J4dmJlMkNqbW5yMVVwcVpRdEpNL2NVNm85U2ZyUHRPTGNMVE9ua3FjWXY4SFU4a1VXbWkweUdWVkFCSE9OeVk1azNQcmp4RkpZazdHMGRJMitkL3BpbzBHZGM5U3VSVGFrM3dzd0JxWE1zQVlKQWlKNVRpNXE0TTllWS9QenhXRXMxYklUamk2TUZzRFp1cEdDbThWL3JpbWZhSHhCNmRGYWRPb2FkU28wNmxPa2hWZ21DTGlUcEh6d1pQRldLdGxkN2ZWVzcxUEdWSnBpeUhTMEF0TnhjYnlPc0hwam5sZktqVVRUSllXdWJtVHZKNjRiWjdNUFVBTlQ0OWlaTW1QTTgvTVkzNFdvTG9IWlFXWUtyR3dFMjhYbmhZeXRiQTE2QU9UUjlRRVFjV1BObEpJYXhDeHFCdk1mcGd2dEh3T2psKzZOTm03eDNobEpFV0h4RCtrQWdDUDdoaFJtNmxuSjV6OU40OHQ4WlNUNkRLTFRwanpzcHhESXNhWXFxMnVhZmhCTUVrQ2RSTnRJWWVwbkYvYmlKcUY5d0FaRXlTUVJPeDJFbUlHMFk0cndqSzFUVWJ1OUlKVUtHWWdBRTg3ODdHRHlNWTdQd0kwelRSS2hnaEFDUk4yamYwbVRpTXFqTDZmTDJQR054ZXYrSHRQTVZHZ2pib1B6eEVjdjMxVXE3RlFLZmhFa2Ftay9NQW1iWWxvb05URldpTitoOVFkc0ZVNmxJN3ZUSjZhZ2Zsam9tazFWblBES0x0b28zYTBKM2dwUFVNMHhzUklHcUNSS2kvd2k1RnljVjJsWFJKZHFlb0taRXN3anBCR3hrV2tZdXZhSGg5SU5WcnVHWUJaZ0NCQ2dBQUViVHBGejF4VG16VkEwNmlCQ3VzRDRtblRGeDkyVDEzakhuL0FLcE91anAzUWt6anBVTHVRUVd2dk1IcEE2K2YrY0QwdEl0cFB6L2Y3akVkUTZUWThwQjhzZVUxazdnRHBiZnp4VWl3L1VPWS9ISG1CcGIxOThaaFFGbzRobUtkVjRaKzdRR0JCbVl2RW5lZnpHQTh4bHN0U1plNk1pQ0M5NUpua0RzSUg3TW5IUk1sMkJwRzdEekVIbi90alRNOWxhVkVrR21ZNVRFSDNPR1NiTE5DcXB4cWdmZ1UxV1ZSRUxxRnJ6Y1I4UWl3RTRvM0ZPSVpsZ2FWU293UnI2SUVSWTJJRXh0ejljZFQvd0NFQ3A0UlQ4Ti9Dc1FCN0d3dmdYaXZBS2FaZXN4V2tkTkpqREZaOEtraU9jeUJ6dzBGajRNM1hUT1NSYkVEbkU3S2NRa2pIUVRCeWZ4eDAzZ25aOFBsYVZRMUVBYWtoaVROd0R0cEluSE1SOTdyRTQ3WmthYTA2ZE5aaGFhQWJrQUJRQmUvSURFNVVORTV4eDVWR1laRk1xZ0NnK2U1K1RNUjdZRlVXeDVtWERPNzhtWXQvd0NSMVgrZU1Gc1dTcFVTZXdiTktJSjU4ak94bjYya2U4OG9NM0QxU28wVktpMDFHNU4vL0ZSdjlCK0dJc3liWWhZWHdzL3NQRDdoRlIwSVhSVEtDNEoxRmc1RVhFZ2FldW04VGpXc2ZBMy9BR244TWFMeXhtWStFanJiQVFXVDhGb2Q1VVdtUk1najNnMzlqQjlzV0RoK1ZXblkvUGJBM1lDbk9iV2VTT2ZwSDU0ZWNieS9kMW1nUUNaK2Q4YUwrcWpOYUphdVNKVUVFc1BNeVI2SG5zTittRTNHNlZWYTRkQ1Ywb3NNdTVNa2tuenZHSEhqS0JrRTZTTlVFZkNmeHZGc09zamxoVXBoMkFKdkU0SEsxVkJpaEwyUXIxNitkcEdzdzhLdHBzQkxhZEo5VHo5clk2bjNVanpIWDhveFRNdGtvcUtSVFVFR1NRTmh0SWpiZkZzeTFXd0lzRHVQNlc1KzJEd3BZdEkwM3V6UmxaU1lKdjhBajF4eUxpWEhhbFptTlNuVDFUQWxScVhlMnFKSUcwSHBqcjVaZ3hsclRiYmI1ZFp4V3N6MkZvVkdhb0tqcVhabUkwQWpVVFBJaTBrNGo4Ukc2c01kbk5IemFrK0ttaDh2UDJPRnVkVU1UYUF3MkZ4eUhQMHgxQ3Y5bnlnZUdvcFBRcVZQNGtiWW92YWpocHkxWTBpQU5LQTI4elA1NFRnalV1elNRdFN1K29NeDFFUmRpU1lHd2tuYkJGV3ZyUXBwZ21kajVlbUE2YmNzRTBQaUhxTWRUU0VKY2xtUlRCMUN4aUpzZnJpeDlsK0lJMVlFYTBwb2p2VUd1eENveldPbmUycnowbkErYTdMbExNakQxQi9QR3laVVpXblhBZ3pTWWt6TjJLMDBBLzAxSzN5eHhOWlN5TFFUc2NweFNycFlGRkhlb0NyQW40VzJQcnVQbmpmSzBSTzN5d08yWEtLTlJtS1lVRHlRYVQ4MlZqOHNUNVY0ajJ3Skk2RVZldDJrcTkyMUZtMUt5NldGUTZpT29CM24xNllWcG1sL29VZEprL25ocnhmaGxNVm5QOVRhb21OOS9yT0JseU5NRDRlVi93Qi9uaVAweDFzNVpSZDBBdm0wSUNtblRrYkVyc0J5aytYdmJmRURhUDhBcHBmeTMrdUhReXRNYkl2dVAxT0pGeXRPWmdENUQ4T2VEbWwwSzBoRDRPYUg4TVpoL3dEd3FuYjh2MXhtTm4vYkZwSFhTWFVRSmprTHlmS0J5K1dOdThBZ1ZGOFI1Y3Zrdkx5eHVnZzZ6TW5xZVhsRmhpUnBJc0I2eGIvT0txVE9qRkNyUFpVbDlTSkUyaUkrV0sxMnhWMHlsUmxYZGdqUkhoRTNKOHVYK3JGMnFabFVCZDNIaDJ2dCtaeHpIdHIyc1NvNW8waE5NSTZ1MXZIVVlXSVBSU1BmVWVneFdDYmtyRW5TUlNYMnd1ZGZGR0RYZTJCQ0xrNDZHVE42WWhnWTJJUDF4YmVKZHFLdVlwdFNjSnBhSUlVYXZRdHV3aTN0ajM3T3VFVXN6bVg3MU84U25TTGFUc1NTRkUrZ0pQckdMdG12cyt5clhwaXBUQjVCNVg1T0Nma1JpYjVGRjBOaGtqbGo3bjF4cE9MbnhyN1BxbEJHcUpXUjZhS1dZTUNwQ2dUYmNINWpGR09aQVBNanJFZlEzeFJUVEVjR2p5dHVQWEdyNGI4VTdQMXFGR2ptS21rSlZnb3NuV0pHcnhMRUMwY3p1TUtYeHJUNk5WR0tjYTVoOWg3L0FMK3VQUmdXdVphT2d4a0V1WDJjSnF6RlJwQUNVV0pKTUFEVWx5Y08rMDJhcDFLaTkxVURxRmhtaGdkVW5iVnVJTy9saXQ5aktTNmN3NzFlNnBwVFhXMTViVXhoUUI4UkpYYkh1WFNubWFvUnFxMGFNeVdaaE9rZlF1ZW13ODR2R1VwS1RhT3ZoNFl5amJPbzhCRk5xQURBS0dXOHl1b1FKRTdFV2dDUitNc2U1eTJxVzBFbTJvMWJxUDdaTnY4QUdFbkRjL1NwSUtkS3JSZEZFTEZVS3dIS1ptZldjTVU0MU8xTW5ycHFVeVAvQUh6amtmTE83U1g3MS9CS1VHdTAxK0JoL0NVRlhSVDBHWUVDNEh5OHVjN25FUWxISkZ4OTRmZ2ZYOUNNRFZNM1VZRTkzb1VYSloxSjArUVdjVmZPWjdOVVJTcmZ4T3RHVHZIVjZTcnBway9BZElBMUFBQTdHZW1PbjRYbHR0dFY3YkN1R2MxUy9sTkY1ZThFWUkxWUJ5OVlQRWRkdWgvZlBCWncvd0FTMDJoSUcrckhKZnRRcGtac0grcWtJOWovQUl4MWNpZGpqbWYybVU1clVoejdxUjV3VEk5WXY3WW54ZnFEUG81L2UyQ3FUWWdVV2c0M1V4anJJbmV1SFZWcjBLVGxRUTlOV0lNRzVBNitlS3gyajdKczRxUFRxS1Zjb1NqV0txdmVFZ0VBZ3lhbHRvQ2dYM3d3K3o3T1U2dVRWSGNLMU5tU0dnMm5VSTltajJ4WjN5bGlWWldIa2NjTDQ1SjZMeG1qbTNHTXlyUFUwbVFXQUhvT2Z1UWZualNpMEQzR0haeXlHb3lsUVJQTWZyaWJLOEZwMUtqaTZnRGx5TmhiM2s0UjJkTkpiRm1VNGQvRVZIVUJaQ2czM2lTREh5SHp3Uy9aSmhzS2JlcGpGc3lmRDZkUC9sZ0F4R3FCSkhydnZnNkQ1WUZIUEpKdXpudFhzeFVBL3dDVVpuN3JnajViNERyOW02b2orVzErcXQrVytPbW0yTVU5UjlNSEZDNG80OVY0VlVVa0ZTSThqak1kZTBqeStXTXdNWStoc0VER0NMeGJkdjN5eFFlMW5iUUE5M1FNaENDWEVnT1FkaEgzZDc4L1REcjdSTXk5UEwwNmFTQlVjaHovQUdnVEI5VGYvU2NjOXpmQXN3MlhTc3RMK1VDZkVGOFpuN3g1bW5heDJGL1hGK09sdG1sYjZCTTd4K3BVRmd5bVc4U240a1l5RllmMmtzQWVoakNrdC9iSHFSaDF3YnN6bU0wUUtkSnRQL1VZRlVBLzdvdjZDVGpwZlozc05ReXNPNEZhcVB2TXZoVS8yS2VZNm0vcGhwVDJDTVNqZG51eGIxcWJWNndhblNWR1pWTm1xUUNSSDlLVzM1OHV1S1NveDlJOFZTYVZYbE5KN2Y2VGo1eEF3ZU50M1lKcExvNko5a0ZFbXBtSDVCRVdmTWxqL3dEcmpxTWpIUGZzaVNLR1llTEdxcWkyK2xaTWYrZU9nYUFldnl4SGtmMU1lSFJYUHRCeldqSVZRTjNLcjh5Q1I4bE9PUjltK0dmeFdibzBTSlZuR29jdEMrSnAvd0JJSXgxUDdST0cxcTJYUVVrMWhYMXNOUUJqU1FMRWlmaU9FSDJYOElkSzFhcFVwc2hSQWk2bEl1eGt4TzhCWS8xWXBHVlFzRFZ5SDMyaWRuNjJjcDBqUjBzMUV0TktRQ3diVGRTWUVqUnNZK0kzdEI1Tm51SDFhRGFLdEo2YmRIVWlmVGtSNWpIMFFUR0tqOW8zRGU5b0s0djNiQmpia0pCbWVRRGx2OUp4dU9idWdUajVPTVlseWxOelJyUG9sQzZMci9wYnhOQTlRTCtXUE15QXRLa3crTm5xaDU1YWRCVUQyZjY0Nkw5bFhENmRmSlptblZUV2pWaEk5RlVpNHVDT3VLeWxTc1ZLMlYrdDJmTkxoRlRNbHczZXRTT2tMR2hWZDF1WnVTWDZEWWI0bzVHTzlkdDhtaWNLcjBxYWdJbE1hUnZBVmxQNVRPT0VhWko5UHluQ3dkN0xKWG95bldaZmhabDlDUitHQ0Y0bldIL3ExUGR5Znh3R3VNakRVWlRrdW14cFI0L21VK0dxUi9wWDYrSERYSThhclYwckpVWU1EVGFQQ0FaZzlCdC9qRlhiRFhoNzZLaEg5VE92MFA2NEdLT2ppNVo5TnV2Yzd0MmZxQ3BScFZQNjZTTmJ6VUg4OE9VSHBpdTlobW5JWlkvL0FJMEcvSlJINVlmVjFKVnU3SUR3ZEpJc0c1RWptSnhMa2R5T1ZHeEJ4UmUyK1dvVjNwczlZTDNZSWJUNG1JM0lYbE8xN3gweFR1TThjempha3ExYXExYWJ3OU1rcUk1RUtJQWtFRzNXMXNKQzlSN0xxWlZCYUFKMHJ1eGdiRG1UaDRRVVhkaU9UZXFOcWtCbkFPb0t4QVBVY2o4c2FFeUxZaFhjbllZbXBNT3VMT1JPam9YMlo1VVBUcmdrZ2gwL0E0dG1heXRTTktOdVJ6ajUrNUJ4WC9zdXB4UnJNVEUxQVBrUC9saThHbVRZRVIxeHl5YnlaZUdraXN0bGFxTnFxS1pQUGVZanA3WVk4SFNGTEhkbW5iOTljSDU2MmxmNlYvRXorRVkyeXFRbzZtLzc5Z0I3WVJ4b3ErUnVOVVNBSDArbUpxUVBNemlNVWZQRzcwZkxBSm0rckhnWW5sOU1ScFRJOHZuK2VQQ3hITS9QR1JpYWZMR1loN3dmc1l6R01TVjBSMTBzQXlua1FDUGtjYnRBNVkxVWRMWWthY01ZaUxIMng0eE9OeXZXUHgvZlBIb1VlZUZNUlZvS01HMmd6NlJqNXBaQ0lCZ2VlUHBQT3FlN3EyKzQwWDV3Zlljc2ZPR1lhNmlCSUViL0FLK21MOFRxeEpvN3YyTnlOT2hrcUNvd0laQTdNQ0NHWi9FYjdHTnZiRmdDakhLZXhuYktubHFYZFZ4VmFQaEtoWVVjdmlLa2ZQcGpwSEMrSWl2U1NycEtheElVM0lFbUppMXhmMzU0bktOUFl5ZG9SZHZlTVBrNktNZ1VsNmdVaHR0SUJKMjJ1QmlvY1A4QXRBMFZVUGR4U0lpb3N5ZFhWVDBBOHVlT2g5bytIRE1Vb0todEoxQlNOOTUzNXgrR0tKL3dqTGFoM2xJRmVZQVVmSXdjR01vMVRRSGw2bDc0UngvTDVrbGFMaGlCcUs4d052MHd3ekNCd1FZZzRSY0J5K1JvalZSVktUTUlPb3cwYndaK2VKYzcyZ1JDVlJSVTg5VUQyNjRSOTZHWFd6a2ZiSElaZE15OUtreTBWcEVnSVF4MXUxMlplU2k0V0xBYUIxeGVQczB6K1hUS0dnU0VxcTVhcHFQL0FETlpHbGtJM0duUXNiZ2dEbUpnNGpuZThabXFVYUZTU1Q0MDFIMGt6NllXWmJKVWU4QlNnYWJFMksxbXBvSnRhM2dVOHdMWHgwUEdVYWJKN1QwaTVkcE01VHJaVE4wMFlsdTVxUXNFWENreGNYMnh3aktycXFBZFZiLzJuSGFjeUtJeWI5ODFKYWxLbFVnSlYxc1ZWVEFMTkpjK1prNDR0dzh4VnArb0h6dCtlRjQrbVhoMnI5U0NnSk9Oa1FuRytRU2FnQng2aHRpallLMHZ5YlBRK0h6R0RORVZGUDhBZlUvQVloYmVuNkQ4VGlUVi9NcGZQNXMyRnN0SFYrNk95L1o4eGJoMlgvdFZoTzl3N2lJNWJZc2FVd0R5bjBrNDUxMk00dytYeXdWYVpjYXFnTUtEOTRtUEV5OWVVNDZCa013S3ROWEJpZHdUT2srZUk4aTNhWnorV2lnL2Fod2NpcFR6U2p3c29wVkNPVEF5aFBrWkt6NUtPZUdWZmhsSEw4SnE5MEFEVm9ndTUzZlVCejVDNWhmOG5GMHoyVFNyVGFsVUd0SEVNT1JIN3ZQSTN4Uk8zekhLNWVoUXA2Z25pQkpONFVBWFBQNHpnSjlXQ2puZkE4cDNtWXBKdUhxSXZ0cUFQMHgzdXBScE1JZW1oRzBNZy9BaU1jYzdKVlIvRTVlU0RGVmRNa2J6RWVlTzFCbTVqMUIvWERUMHdSNkJ1SGNOcDBReTAwV21yT1hLaVkxR0pnZmRGaFlRQmc4SVJ0dGpWYWZ0T0JPSjhUVEowKzlxYW1SU0FkSW1KNW55bU1JaGpYUGlYSW1TU0Z1SWpZZkxCaU42ajJ3cXl2RTZlWmlyU3FCeHE1RVNQN1RJc1l0Qnd6QkIya1QxdGIwdzB2VUNKcHhvWGt4ZjF4NDFJbmIvQURqV25USUpPcWZMcDlKd0Frc1J6eDRYSFg1NDBZZW85N2VlUEdRbmNBNHhqYlJqekd2Y0hvM3pINjQ4eHFNVE5tVVUrSmxIcWNiQ0RCMVc1WVM1bmhJYTZOQk0yUFAzSHA1NFUxRXFJU2pBam51WStua2Qvd0JnSldMWmNZZ1k4TCtYNy9mNDRxZVY0blVwbVBpVzFpUWZrZHh5K2VMSmxLNjFGbFR0dU9ZUG44c0I2Q25aN25YQXB2cTIwbWZsOC84QWNZNTVWeUNFazZRUGJmOEFmNTR2UEhERkZyMk1ENmpGT1pnYmZsRTRhSUpBdVM0RGtwSnFVNFlYOEtDL3oyT0xibE9OVWFhTFRHc0JSQTFBRzNtWndzNFU2SzhWRkJWaEY3Z1R0SFREdXR3S2sxeHFYME52cU1LKzloWDJJY3oyaXB4NEFXYmE5Z1BXL3dCTVZ6TXZyWXNRRkpNd3RoUDVZbTRsazJvdEJNa2l4NmowNitXQTFTYmtiZXd3VWdObWpIMjlEalJnVHZiMUg1NEwwYXJ4SHA2NGlxVWpzVGJyK25sKy9MREFBOUVHNUgweDdVSFEzOHNUdlI1ZnYyL2Y1NDFwWmN4Qkg3OVAzK21NVnZ0TzdpZ1NxMmJ3c1NMZ0gvTURGSXB2cEt0L1NaK1JuSFZNM2xReXNzYWxJdUR6SDVZNWhuY3QzZFNwVGcrRmpFN2xlWDB2aXNIcWg0djBDMVRSbVN2OTUrVGJmUWpBS05iRFhTdFZWcXEwT3FnTW9Fa3NOaVBJNEhyWmFUSUdsVGNEcFA0WVl0UGpmYTZ0dGZrMFkycG4xK2h4cy84QXpGSFRSK0FKK3BPTm5TZEk1Q1BxSS9LY1Ixbm1vemYzVGpHbC90ZjRMcDJhN1NVc3ZUZWxWb3RWVTFTNFpEQlJXQWtYNmFRZDc2amkyVUtnN3VubUtWUWhYRWdNUUhBa2c2aE1FU1B3eFdjaHdXajRTVjFHMGxpUk51UUJzUExEcEtjRHcyRVdBMnhHVk42SlRrbjBXZkljWlVnQ29OTGYxRDRUNnh0eXZjWVo1bkxKVlFvNERLZHdiajF4U0VKNWk1eE1LckJDZ1loVGNpYkhDT0lxa1E4WSt6Mm16ZDVsMzdwdDlQTC9BSCtYcmcvczV4R3ZRTFU4MVZEcUJDa0tTVklQT0p0SHlqQk9YNHdkQlNvQ2JFSzQzRm9FL3JNNFVDaUk2ZGYzTzJEYnFtYlhhTGYzdFIvRlNxSzRuWXhiNUNSNlkyVFBrQ0t0Tms2a0NWL2ZsZkZRbzFXcG1VTFNPbHY5OE44cDJpTzFSWkcwN0h6OGpoYUNtVG5nZEpuTlhLT0tOWDd6SXNvNDZWS2RwOW9JeHVNeG5VWUNyU3B0U0U2cWxKeVQ1ZUJnSXZ2YzRsVktWYTlJNkg2cllqMUZwRTlNYkU1aFA2YWcrUjk5cFA4QWpCeWRVYXZJWmxzM1JQd3VMNzh2eHdZSFVjaDZqRmJxNXFtNWlyU0t2elliKy83T05xYXNvQnBWUTQzME1ZUHBINlJnSXhZSDhXeHZqUldJOXZQZjZZVVUrTmdEeEt3UE9JajVkY0UvOFZwRVdjQ090dkxHTm9aOTc2LytQK01aaFNlSlV2OEFxVS9tTVpodGdwREx2ZVZ1ZjBJbjZOZ1RPNU1WQnFGbUFJQjZ4MStXTXhtQXdzcXowV1gwOXZPZm9SamFqVlpEcVVrSDE5L2ZiR1l6RENCZGJPMWFpNkdpREhRYlFlWFA5UGZDOEphWWlkdjM2NHpHWUpqeFlKUGxBUHJpd1UrTUJhYXlDWEFpT1Z1YytoMjljWmpNS3dvQnoyZVdzbzFKcElrcXdNL1BuRXg4c0tWUW5lMGZYOTdZekdZS0FiQkl2ZnkvT3c1WTJBQi9mb2VkOFpqTUV4ajIyQXYrUDZUakJUWURHWXpHTVFHbVQ2K2ZXZjhBYkFHYjRKUnJRYWl5UmFlWXg3ak1hekN1cDJMcHpxcHU2K1VnOHIzSW5Fdi9BTk0wMlBpWjU2Z2pmMGoweG1NeHNtR1BKS2pTcDJPSDNYWVR0T2s3ZGZuaVBoL1pMdXlIcWtQemo3dCtvM09QTVpqWk9pamJMRXRBN1dubDljRVU2SlczNTlNWmpNS1NQTnlPdmxiL0FCaklrTVR5c2VzeHkvSEdZekJSajBHRDBqOS9wanhHVmp0UE04cmJlbU14bU1GRWxQS2FtQ0taWS9kYjhpTEgzakVaU0NRZXQvd3htTXdGMlo5RzVXRElKQkY1RytHdVQ0MFZoWEJjRVdNd2Z3ZysrTXhtQVpEeWxVcDFsREFTT1dvYmZ1Y0NaamgxRnpwaUNlazllaHRFNHpHWUNHSzNtcVdsaWhKa0VqZmtPZnk1WWhZbUlGL1hwak1aaWlFWU1hblVENWY1eG1NeG1BWS8vOWs9JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3Q0VBQW9HQnhRVUV4WVVGQlFZR0JZWkdoMGRHaG9hR2g4aEhSMGdIeDBjSHlJY0hCOGlIeXNpSHh3b0h4d2hKRFlqS0N3dU1URXhIQ0UzUERjdk95c3dNUzRCQ3dzTER3NFBIUkVSSFRBcElpZ3lPVEF5TWpBd01EQXdNREF3TURBd01EQXdNREl3TURBd01EQXdNREF3TURBd01EQXdNREF3TURBd01EQXdNREF3TVAvQUFCRUlBTDRCQ2dNQklnQUNFUUVERVFIL3hBQWNBQUFDQWdNQkFRQUFBQUFBQUFBQUFBQUVCUU1HQUFFQ0J3ai94QUJERUFBQ0FRSUVBd1lDQ0FRR0FBVUZBQUFCQWhFRElRQUVFakVGUVZFR0V5SmhjWUV5a1FkQ1VxR3h3ZEh3RkNNejRSVmljb0tTOFJaams3TFNRMU56b3NML3hBQWFBUUFEQVFFQkFRQUFBQUFBQUFBQUFBQUJBZ01FQUFVRy84UUFMUkVBQWdJQkF3TURBZ1lEQVFBQUFBQUFBQUVDRVFNU0lURUVRVkVUSW1HQmtRVVVjYUd4OERKQzBjSC8yZ0FNQXdFQUFoRURFUUEvQURXb3V0UDRXRU1PUjZOendUVTRoVUhlZ09TQmNBM0h4ZERibmpNdUdWWGtGVHFIVWNteHQ4NnpQV1JnckJVVWlWWHFuT0pPL1hHaTdNdEdMeElrK0pGUDh0VHRwUDFPaGpuMHdRK2RRa1dZZUZ0aUQxOU1BTG1VN3lDZy9waTZraXdBUFVqbDB4UFdwMHdRSlllQjQyUEp2VENTU0tSczdhc2haU0tnalE5bUJCK3RmWWo3OE1lQXNPOXBHUWJIWWcvYTJ2aEVLSWxRSFVuUSs4amZYNVI5K0RPQlpkaG1LQklzQTBsU0Q5dkhPS29DZTVlOUtNd045US9kNzRFNDR3Q1ZOYXN5K0NBREhYWTQ1eWxXa3pLUVhKbUJKWDVXeDN4eDlLVkdLQmxoTEUyTnpQcHl4Q1JhSEJIbHY2Zy8xWXlrS1o3MVJyRXNkVnh2ZmJHc3VacUNOcEdNU3FtcXI0STB0Y2hqZmUrRWlQTUtTaXVqVExSN1RoamwvaHdxVE0weWdhTFR6T0d1V1BoR0tlQkZ5eVhHWXpHWUlUTVpqTVpqampNWmpNWmpqaEZtYUROVVlrK0VFM093eEx4QjBGTkM1SlcwRURlMkljL1RxVkhLaTZnbnlBdnp4Tm5jc3JVbFZtQUFpOFNMREFYSXIveGRDNnRXeTVNRm41eDRSNzRnWk10SThiM0gyUittQ0c0WlRhL2VpMytVOC9mRU5UaDFPUXZmQ2VYaE0vamlpcjVKTy9nYzhEMDkzNENTczJteHhMbXM2cUVBekpFNGk0TFIwSVZCMVFkOFM1dk0wMUkxeE1TTFQrV0ltanNFb1pBT0s5eHl1NnhvSkVtREc4WXNDTUNBUnNSaFZtODZsSXl5YXJ3RHpIdGpqbndhNEJRWlNXWUc0NTc3L1BHVlFWcnRwSWtqcnR2djU0SXl1ZEQrSlJmckJ3RG5NN1YvaUZwcjhCcGxpWUc4eCtHQ3BDU2o3UXVyV1ljdVIyL3ZnSmMvZmNpVFlmTHBqdFVKTWt6QU9JYXRMZWR4L2JEN0VreVUxRzFLWjY3eWZ6eFByY25jQzNJREFsWklDM3dUVFZKdVp0MXh3ZHczSWt5WmFjSFlBeU9tVHB3Zmppa2VEeXVubmFnRlNIYXpnYmtnZkh5UHRpZCtKTkx5RVlhRk4xSCtUY2lER0JIenp6V0JZR0tnSGlBTnBjY3hndXRVU0dCcEpQY3EwalVKdFNzWU1jK25URm5YZ2lyOGtmOEFGSVNDYVkvcGtuU3hGZ3B0Qm5waWJNVnFSS2ZFRHBlTEE3QmdlWS9EQTFMdXlVR2tpYWJDUTB4WndiRVNmbmpzMHFlcEJxWWYxTjE2bHB1RCtXQTZHaloxVHBxVFRJZFBoWVhCQit0MUg1NE00TFNIZjBUNFNMN01EOXJDNmhSSGdoMU5tNmlmbU1FOEd5N0N0UUpBSURHWUlQTTh3ZlBBZkFPNWRHeTFGSFRmVklqeGJYSDlzWnh0bVZhcmdLZkNzQmhJc3htUjc0Q29aNmc3ci9MYVE4QTZ0akl2NlRobHhNc29kMXUyZ1dGelpqeWp6eENSV0RUQThzMHNwNmxUK0dPalhCZXFDaVdQUzVFbmUrT011OHNwSWdtQ2NUMU13K3VvQ0xBMmxkeEo1eGhZbEpzNW81cE83MUJGQXZhL1h5dzN5cGxRUmhiUXpmaG5SZWRnQmhubG1sWncvZ1Jjc214bU14bUNFekdZekdZNDR6R1l6R1k0NFE4UmVvOVFvc2tBN0QyMy92Z25OVUNhUVN3UG1iZW1CK0k1bCs4S0x0UElYT0M5RGFGRVhBMndPNEh1bUxtNGVZalVnOUNjQjFPR05xQjcxSjY2cisxc002OUdvUjRRQWZVWVhaamgxWXNyV2tEZVIrR0hUK1NMWHdOdUNVaXFzQ3dZenVNVFp0YVVnMU5JTVdreGlIZ3RObFZnOFRQTEUyY3lLVkNDL0lSdmlSb1hBVFNpQkcwQ01JdU0xbFR4RkE5N0Ftdzh6aDVTVUFBRFlDMkVuR21waTlRTVJxc0Y1bjlNY2MrQ1RnZWNlbzUxUUJGZ0xEY1lENHJuR1hOQ0ZrYUR1YmI5SS9QQm5BOHlHYUZwaEJITGYzT041Z0ZzME5vQ01QdkJ3eUpUM1MzQVRuU3hFbUxIa2NiWE5vMm9BeWVnSHBqdlA4UE9xUkFnRS9NWXIxTEpWS2JudTZoVWpjaTI0VzJHSXAxeVA2MU02VkdodCtjWVB5V1hIMmVYWEM3S0xVZGxEdVNCcVByQXcvWHdmRDBHNXdHMlZqVDNOVWFjSFlEOWpCZUlTMHhpZkhGRWVVMWMvZXZxV21RRzVvUHRSZUlQUEVuK0lJWjFVbC9vaWRKWUdOS21OeU9YM1lqcTFVWnF3TkZmTTNFK05laHdkL2h0STBCV2hnU2pxUUdFQUtnMmtIbGkxb2pUQTZGV2pOTTZYWHd0RjFQT3BQSWVlTzJGTXNoRlJoZHdKVGVTZWhQWEhHVXk5TmhUSVpoWmdKZzdseDFIWEU0eUFtbkRpekdaQjVoZWs0RG9NYklNclFIOHVLaUdDM01pWmphUmduZzFPSG9rNlNBeDJZZGZYQXVXeVIvbHd5bng5WSt6MUF4THcvTE9yMFNWQmlwZUNEelhvZHNjNm82M1piMGVscUVVak9yZldkNUY4TU9KcTBQb0pMYUJBQmcyYkN0T0pBdEhjRDRvblVldStHZkZxV3BYVU5ER21mS0w3emlFaWtBQ2lUcUdyZTB6dk1jOEcxalUxdjhBRkhMcGdDa3BYU0RjZ0xKRitYWG5nNTZEZDY1bnduYS9QMHdrU2srRFdXcVZTUEVHbjB3eXl4OE45OEJaQlhDa052UFVlV0RxQnRmRHA4QzkyUzQxcUdCbXpXOGlCRy9MQTlHc1pra2FSYzcyOVBYRHBDdDcwTThheERTcnlUS2tEa1R6eEZYemVreGI5L2xqa3JDM1Faak1jVTNrQTlST09zQUluejJZWU00VUJZSXVCY3lPdUpLZXJ1MTMxUjc0anp1YUsxZEtxQVNSTGM5dnV4cXVXYWdDV2JWMUcrK0FEc2MxQThSb1B5d3VxNWFyckJLRzNUR3EzZXdJWjdIbk54N0RBdFkxdFN3YWtEZWRWL3V3VVRhWGhqL2dvWUJ3NGc2cHhQbnNrS2hFc1JHQk96cGJTMnNtWit0TTc0SjRobFdlTkxsWW1kOElXN0JWRk5LaGVnakNYalNJZjZqYVZCNlRQbEdIR1hYU3FxVEpBaWNKdU41ZlhJMUtvbVNXTnY4QXZBQytDVGd6MGcrbEEyeDhUSDA1WUtZanZyQVNBWi92Z1hnMUdtcmpUVTF0QjJGdVhQSFBFc3hvektCUmRsWXNUdGFJL0U0ZEVwY2JodkV0djlwd2pXc0ZMQWdmQ0RmMEdHdWRybUYydUR5eFdxdWZJZnhMTXdQYU43K21HU0l2a2Q4THpRWmxJVUFhWnR0Y2YydytJbjVZcm5DaUpVQW1MeGZsRzBZZDFsMjMrSHFjQm9lTENhdzJ4SmdTUmJCV3NkY2NWVFBLS3VacGFxcE5MNnNtS2h2TEoxQmpCbExpOVB1bG82WEEwT3dnZ254SVpHd240Y0JWVXBGcWdJY0FvT1kvOHMyc1AzT0pzdmxhUjBFVkcvcE9RTkFJZ0NvTncyOWppem9qYk5aTktPcWlRemlKZ01nNm5vM25oZ3RhbjRUM2d1NGl6YzFTMjM3bkMvS3FoYWxEOHp1aEhNSHp4aXFtaW4vTlN6ZzNKQk1hZVVlV0EwRkJORUovTGg2ZHFuMnZKZXNYOHNUVUtpbDZaQVNBL3dCb2N0UG5oWFN5eDhQalQrcDlvZjViWGpwanZMNVZ3MU14TVZlcW0wcjUrV0JTT3RseFhPWC9BS0NDRHZmNTRQN1JWbFNqVWRpWVdrMCtsdnZuQTlUUEFmOEEwMC80NEs0N2xFcTAzcHZJRDBuQkk1QzB4NTdIMnhHUlRIdjNQSmM1Mjl6QWFLWkFVUUFBQmFBTnljV25zRjJrYk9QVkZUU0txcUNUdHFFeHR5aVBlZlhDekk5a012VFVGbjd3bFJ5bVQ5cUNJQUl1Sjl6aXhkbmN0UXAxM2RJcGg2ZHlRQk9tOG1PY1NmYkNSbXJvMDVNWHRzc25ENkxLcEJaU1ozQm5COUFXd3Y0V2dLYWtjT2pHUXd1RHlzZGp0aGpRRnNNdXhDdDJ3TFAxS1ZOV3FWU0ZSVmxpeE9uM0d4MzJ4VDMra09uM2hOREsxS2xNU0N5ckE1WGdBL2ZHTEoydjROL0ZaYXBSRGFXWVNwbXdaU0NKOHBFZStFSEQ4dXRMTHBTYTBBUnBna0RtV0pFQW0vbjc0R1NVbFZHenA0NGREY2xjcjQ3SmVTMjhGNHBUek5KYTFJeWpmTUVXS2tjbUJ0aVBpSWh0VTh4YVBRWXIrU3p0RElpdFY4UVI5TENtdHl6bUZBUUV3R0lIVURjbXdrU1pQdEgzOHE2ZDI0dUJPNnlQdkEvWEZvUmxLT3BHUEs0eG5wK3hacU5BZkZ6dmZuN2VXQ0FiWWl5eDhQdml2OXB1UDFhVlZLRkZhZXBsRE85U1dWUXhaVkFVRUVsaXJjNEVjNXNqZGJzS1RicEREaVZUU2U4V21HQmlIbVJjY2grZU5WTXczYzY1OFViN0RmQ0p1MmlVNlJHWXAvQ3lJWHByL0xPb2dDVkoxSUIwdmJZbkZobzFacGhvQTlCYmZDN2NvNXBxMHdLdHhFSWhkNm9BQXVUdGl2NWZ0YWxTb2lMbU5URTdiVDVDUkJ3dCtrSE10V3pHWHlrbUdETWRBNVRHb3pGbDMzNjRyZmFMc2ZtS0NQV1ZKU25kdEphM21zZ1QxdGhrMTNGV055amRzOWM0TFhMYXl4NTgvWEF2YWJqRFVpRnAzZUNkSTNQU0JCSlB0dGl1L1JCMnBmTnBVcDFpVFVwYVlZMkxJYkNlckFnZ24wd3Q3VTU2cXVjcWE2bWFZclRSbG8wcWpVMU9wbkFMa012aGxSMWdBbU44TkJ4aTlVbGFYWWJRNUxTblh5UGVFZHRuV3JUbzVxbjNaY3dqRUZTWnNDVmJjVHpHMDRjOGR5elZBVlVTWnhUT0g4QlY2b3Ixd0E2eDRRZ1dHQk02aVJxWXhCR290cEkzeGFNMDVlaEMvRnRiY3gvYStCbHl3bkpPS3I2aFdLVUl2VTdEZURaSTAyRXNwTUd3TW5HY1dVQ3NETnp1T2xzYTRIbFhWZ3pLUUk4c1E5cExWcVIxUUdKbS9RREFSR2E5dkFXekJndlgrMksvbUU4Vng5U2ZsaGhUMGdyREhmcmdGeU5UR1Q4UDY0WkVlU2ZzeG1GWUE2WUhlTmVUZVFiZW94Wjh5QUlqb2Z5eFhxZFVCZ3dVeDNnTzNVUmg4ZUlDM2hiNVlWdmNyRmJIUVNOT0M4QkhNNmlQQ1I2eGd5Y0VkSGxMR2pxYnhWQk5NVEtqWXFuK2Jld3hQbFhvZUNLclQzYnFKVHFYdlp1VW5FVGNQOFZxbTlJQzZua2kzKzdIZVc0UXg3c2lva0FFZld2ZGo5bnp4WFlsdUllMGV0YVZGY3U1cVBVcU1nSUJYNGd1NUl0aEx4VHNYbTZLbW8xTXZiVXhRZ2tSNVRKMjVEbmk1NVhoN0R1aUtxQXE1SU43U0VFM1hwUHp3NnA1bWt1cUhOUjJBa3lJa2lUNWtXODQyeEhKa2NaZkJyd1kxT0w4bm5uWS9OMWRTMDZwaEhoNlJjZ0E2V0NuU1Q2akYwcEFBL0VuOVQ3UytYbmpkSGdsS3ZXcEdRaVpkSEtxZ3Uxa0dtZVFBWHB5eFo4amxjc29nVUtlOCtKZFJuckxTY1BCNjFaREtsamxSTG44OFVBSUZQZm1QM2ZESE9Pc0NlYU5mMkZoNW44c0E1blBNVEMwaTNuc3YzWHhCbTA3NEZYb3FRZDJaaUI3RGYzKy9IUEcydGhJWm9wNzJhb2NNRHFEVE1Rc0JuRTliR1AzR0t6bnFGVVVjNjczS1VhdW94QURGR1VLUG5NZVdMZmx1TUttbW1vVm90Q0NBSTN1U1ovVTRTL1NoeE1VOGpVMG1UWDhFY28wblVSMDhLa1QxakN4dzAweThlbzFKeFE1N0JnTHc3S2VkRkQvQU1sRGZuaHUxYWRnU2Z3eFdmbzQ0a3RUaDJXa2dGRTdvai84WktmZUFENzRZWm1veEpLMmoxL0hGWXdzU3h5ZHIyT0VIRThtWDFWYWFMcWd4cnNMUWR4dE4vVzA0SnlpMUdVRXNJTzRna2tEbFBuZ0h0MW5PNW9XSjhlcElCdVN5TU4rUUV6Nngwd1BUVW5wN2p3bEpQMmxKNDF4RnZDdFFocWpIVVFvOVFBT2dGNzR6TFoxRVpHSU9wU0xySHVOcEs4djB3b3kxSWhuWmlUcFZVSCtWRUVMdC9saVQxd0JtT0tnRzErdU4rT09QQmpTbnl5a3NjTDF6Vzc3ZUQyYmgzYU9oVUtLQ1pjbUpHeHRZOU45OXNWenRmeGhNcnhGZThaVVN2UXBxSGFOS3RUcVZTSkorRUh2UGk1VzZ6aXA5bU9QbnZRUXBsQ3JXMklEQXg4d1BtTUMvUzV4UmN4bWwwM1FVMUN6L3dBalBTN1IvdHhoejRhV3FPOFh4OGZxRlZGcHhHbjBnY2FQY2lncks1Y2tXQUlBaUl0WXZKRzIwNDlENFJubHEwRlpWQUlBMUlmcW5tRGp5TGhtczVpbFRlQ2N1aFVRMm9FZzZaRENRZlh5eGJLT2ZkVEtHTWRoNmJWQzczUEYvRWZ4Zjh2MUNocHRWdjhBRitBSDZRR3EwTS9sczRsSHZBcUZHcEtwYlVKSnNBQ0o4VStxakR2TWNVNzZpRkJxazFRd0FOTjBnR3hMNmhaZ0xRUFhuaVNqeHZZdUJBMzVmTy9sZ3JQOFJvbW16aW5aQkpZRXlwSkFGdVpNL0lIRTh2VHppcmFMOUgrSzRNcjBwNytHcWYwQmV3dloybHcvdkNHWm1jRFV6bVRwR3dFQUFDU1QxUFBZWWE4VXIwYXdnaURzR0I5ZmlFalV0ell6dWNRNU5oVkRPREtrS0FmbVQrT0E4NGFkUHhWREFHSmR0eUdmcThrY2pjSFM3QXVack5UVTZnYWpFMmFiQ2ViRW1ZdHo2UmJFVkRNaHE2Z0h3MGFVUE1ScnEzaVNRQXdSU2I4cW5uZ3pKNTJsV0o3b2g5TVdBc1ovSFkyQitXQmFZV2wzakFLc3U3UlRFWEpFZ1E0TmlRT1d3bFZNVGp6U1VYVWVXZXQwblVaTThQZWwvd0JEL3dERlFXZ3dHdmNzd2k0bVF3R2xqNWcvVytMNFdKWE9TQnFDc3lrdzFTWkFFVGNtMFdtZHBFbFdPakZick93RWpVQjR0SVU3R0dBS2lJQlZvYnc2U0l1aTRQNGJuRnF6cE1GVEJBbTBHRjB3TnIyMDdhb1NXTE9NdVBQT012azBUeEpvYjFKY3JJQ3cxd0FSMDN3SFdRU1Fla2pmbzJOOEh6dE9wVWVramdtbkd1Q0xIa29BdFlieDRSY0RVMHZnbk1aZUh1VEVIOEd4NnVQSnJWbUtlS1VkK3hsTWFLUUpLL1ZJa2MrUXdlbVljNmJBU1Awd0djclMwUzd0RXJGL1RiQkRMUnNXZCtjYit1QzJ3S2tnN0tGdFhpTTJ3MHdrNFgzT3IrV1dKSSt0MHc3dzhicmNaTTg2cUtxdUZOUkEzZHpwOFV3VXNZMDdZT3l0QW9xNmlCYy9hKzBCMHRjZ1g2NEpwZHBFcUc5SkNUMUFrMkdxYjlQbkVZaHFkcjFVNlNnMUd3QkFBUE1BdDcvampJK3JkcEtKeWd1YkZRVVFCM3FUciszNUxiMThzVEZMRUpVcHFXTWZFTjJNV3ZHcUJ2Qk5zZDVuamRSOUphalNEZ2t3NEJ1R0VtWVBrWm5sTjhSdm5RYVlOV25TRWVJYVZqU1pKbXc4K2hGK3VETHFvdGU2SVk2b2JwbS80Q3RRSjB1S2kvRFlRL2lJRnhKa1JNbnp3YlZyRWd3ZVU0eE0wS2k2MTJhNFBJOHJlOXNEVUs0SnNMQ1FmYkd5Q1NXM0JueVRjM2NoYldyVmxQaHFhaDBZL25oWm1PTjVrdHBCcU5wK0pReWhUMUhtZmJwaHh4S3JKc0xteWdmcGpXWHlNU3ZNTGMrYmIvbGlsRXJEZUFWeTFOWEtQNDF0b1U3ZENibnJjYi9MRmM3ZVorbFh6S1pldlhGQ2pTcHlqQkhlV2M3RUp5R2tpZGhIbml5NVIrN29BcUdWTHlRQWJTYmdUTy9sMU9GWEhlR1VhNjA2ektOYXVxbVlJWUtyd0c2Z0ZpUmJ5Mnc4YmFGbGtqalRrL0FUOUhiZHd0VEwwNnRPdUdQZXBVUWtVd0c4RExNZkdDZ0pVZmFCeGJxK2JSUXFzUXVveHVUcVBJQzN2dGloMVlCczZpTnBPbUI2U1k5TU9NaU13YVN2V1Nhb3VLUWVHWmdXVUVNYlJFVElHNDlNR2JwSkxrUDRmMU11cGNuS0ZSWGUvd0JpNWhsVlpKQUFrVE1EWTRxWDBnY2FwVktkT21qeTNlQWxTdHdCekhNWGoxQnhWOGp4clBPbmRGWGZSVUpnaUFHQjJMN2FBUjE2M2lNWm44dldxRUdvYVlQSlFUTTIzNVI2SEZJNFp4eXhsdFg2bnVZT2tuSjJrMktXckZxYmtidHErOG1NT095WFo2bnBWd3ZlMWlvYlMzd3J0Ty94TU5yaUJmNG9qQzllRFZncXBwREVBVHBaU0xDOFg4OXR6anQrMExaUk82cWFnQ3hrRDRsTVIxRWp5bkQ5WmllU0dxTDNYYjRLeXgwN2txL1V1OVhoMlhaYWhDcHFkUUgwN0VpWW0yNEptYmJER0w5SFdVcnRTcTFDNVhRRDNZYUZKSVUvRkd2VDVUejM1WVdETkY2S1BUcHVSVkFLbFExMUE1ZzNtMndFZE1XM3N6bnU4bzBvajREMWtGU0FRZWg4dkxHREZMSWs0dmd5NTlsN1dUWlhzNWtxWHdaZWtERVRvQk1kQ3hrbjNPSTZ2QXNveCtEU1Q5a2tENWJZTGQvY1JmMUJpUHh3SG1jd1VCSzcvd0Nrc1Rma0J6eG9qRjltZWRreFk4bitjVS8xVmluaS9ZelV3ZW5YSVZaOERDekhsNGhleDhqaEJrc3M2UFdTcklDblM0RnpOaXBGL3dEZFBLUmk0OE96bmVGbWhsWmJCVHZ6aG82Yzc5UGtnN2FaMU11OUlzdXBXQllpYmtvUkU5ZHg4c2RrbE5SYWJNdjVIcG96VTJxUzhFdVR6aTBsYWhiV2g4UUJtSnVDT2dPNEhMYThUaUpzbUtzczRrZWVNeUZXZzdGMkFWM0FCYllrQ1lHcm1CSmdIcWNOVGt2REN1STg4WVpPM3VETjBrNXR5eDd4N1UwS3F4V2lzTEF0SnZiM0VRYmJSZmV4RWpBTkNsVVlFdVQ0aUkrUmdKdmFOajRpYndIRXFwSEhhTlZRV3VRUGhrcnBGellrOHI3UnRhVHZpSEs1c1ZGQjVtUVJ2QjVqWXp0TUVHWWtoL2pIbVN5dTVOSTl6QkgwWVJoM29qekxMVFdRQkVXRWk4SG1iZ2dIMUEvOG80Q3E1YXBxMWFpdFIxdXdFRFN4STBoVGNHTmZpWTZqQm1JSlEyczZsMW1XTnRLam1UWUVtL3NaYm9wYjRNZFpOSkxQQUFMV2djbDJqeGJlR2JzQkFuWWFxZU50dDJYc0c0ZmxUUWIrWEl2ZXg1MmczOUxFS2VtcTAybWpuUlZXTEJ2ejIrV0VUdVMwSkV4RTJzRDVrUUZ2T3hFR2RKQjd3eVpLby9lQVhNblNCRUh5c2ZFRlBYeERhNmljYThHWnhkQ3RMaDhGaEtsZ3FsSEkxRGtQbjdIQi93RGgwd1NBYkd4SGxnWGhIRXRRMDJGd1FUaDB6ZkQ0aHoyakhxeGxxVm93eng2SlV3T2xrUWhEQVJhSUF0aGhnVE01a0RTUEVmTzM1a1lsNzgvWWI1ajljVmluUUZSNW5TN3VRUVJKMmdid0lqcDdlV0l1NU1vUTRLcEhoWlNCNFNQT0NabjExSEMxTXlWMWE0bTVMY2o1QThyQ0puYkVLWnZVUGlKUWJrN2F0d0RIcUlBNlk4ZTVlUmxJdGFVeHBlc1FvdG92WUdaSXZvTVI3Zm5oWHhEaG1ZSWFtRmRrbUF5WE1TREIydHkrY2I0WFYrS3VnMG5UVUJPb0tRUmZhSjlGNmRldUk4cjJ2cUt4TDBpb0xmVk1nYkNSMUZzV3g0NDVFbEowTmthMGJjbGo0UlJxSmxSckRLVVk2VktrTUFieVEwUjhYL2VBUDR1cFRkcFFqVnRPMDhwamFkc2FidGJRT282emN5QVEwMkVXdDZmUEFPWTR6VHFhWkpnbUlnMnNkeHlCL1hIb3R4eHcyZDBqQ295YjNReW84UjFsRFRFc3dJQit6MVBzT2VENlZXa1NhZXNNU2JxcGt3b2dhbytFV0p2K0p4V3VIQkRVRWE5Qko3enhBZUVSSUFtMDdDTjVQVER6STExbzFxaHl3SGMwNFJXYVc3dzZVWXRjZ0FBbU5wa2I0YkJLV1NOMVFkTVU5eC94U0RRRkpBb1lnS2tXTTdBUVRIdEdFT2E3TVppdFJha0tqSXpRTmJrV0VpZE1iU0JITEMvUGNRMDFSWFhMSjN1clZxVm1BQkpKTFFRUjlhYllKeTNiSW93ZDZlcFJlVmVOekFtUmY4b0dMeGc0d2VwbE1peHprdEtKdUM5bkV5MmxLeWhTSUNRcWdTWkRNVFBpYUl2UFgxeFl6eERTNnl3RnRVaUxEcjVZby9GZnBRckJpTzVvc2cyUmxaejh3dy9ESFhFc3hyVjJaU3RSaXNoRENScDhWakxFemJmR2IwSGR4ZXg3WFFZWDFMMDF4Vi9Wa2xUaUJNdHFNbStGMWJQa1dieEw5NHhpTnRnZk1DZVY5c2JyZlkrMGppakhaSUlUUFFKVStFY3gwOGgxeERtYytIVmhVVU9KMllURnhZY3diYmpBUnlsekJpTndOc2FiSXY4QWFrVE93d0c1K0JNa05VZDRYOWowbnNyeEZEbDZOSWcyQVFOdFlXdDh0eHp4WThuV3Bxd1ZOS0xlUUFCTG5lM3I4NXg1bndyandCRktyNE5ncEh3MjZmWk9MZndidEdwY0R3T0NkRG5wVVd4OW1FSDFrWWlwT1RhYXBud25WNHZUeVNwVXI0N290RDRIcjBRZHhJeDB1WWszZ1R5L0lZNll4NllwRm1Kb2p5bE5ReHRlQmYzTVlYOGE0UFN6RGFYQkRJUEE0SnRPNElrU0Qwd2JsdUxVWUlGbnZLdEdveDB2dE9PTW1DMnAySnVaM3RnZjVKdDhDeVRXeFFxL0NYbzFUU2RvQUFJTTJJNmp5bkM3aXZiVEwwSVdsVmRtSHhCZkVvaTNQOGlNUCszL0FCVktsUVpZTExBQWw3eXMzMGpySzd6YTR0ekhsWGJYZ3k1ZXFnVVFIU2ZjRXp6UGxqTmtqVHBveTRPbWNNa3BLVFM4SWY1djZTeTBlQXRGd0RDaWVSTnliWUg0WDIrWTExNzFVV2t4aG9rbFo1MzNFeElJUFhjQWltRWVXKzJOSEUzaWk0dVBZM09LYzFON3RkejIra1FOVlEya0h4RTd5T1h4RXlMODVBdWFndU4wRVp3QW8wMHdMazJubkp1YmM1azhqTEgrWXRON0JjZHFQU05BbFdhbmROWUI4UGwxMG05NUU2Zk9YbkhlMDZaZW1QRnJxR3lLVHVkOWJ3WkNqZjEySmFYWHhwOUxPTTlQTm0yT1JOV1dJSUZCdkY3bTRpSXRBdk41Z2trVE9sNUxNdHExK253Z3dBd2dUejhMQUpxNWVFMHp2WVk4eXpmSE13MVVWalhjVk9US1kwajdLQVdWZklXOThTY0U0aG1YckxSV3M2Q3JWTFZHV0F4bTduVkU3QW1OcHhyL0FDRWtydEUvV1I3Snd2dmF3R3FteUxIaVlIYzlGRnVYMWpZU0kxY25sWE1xQ0YwMUNkN0tEK2VLYndmTFZhRk1wUnJzb0xGaklWaVRBRWxtQkoyeFkrekhlTWFocVZUVVBoaVFvajR2c2dZM1lscGpSTEpKemRzRXlYYVkxYTVvaWd5Z2F2RVNQcW5vTVBPL2JvMktyd1l4blgvMVZQeE9MenE4c2FlRE9qNThxNW8xRVJha2lvQVJBM0pBdUFOcElGaU1kVXF3ZzBnTkFVek5RWExFU0FZVzRpTGtSY1lDcE94YUFJQ2dmRXBuMWtnSG1MMnQ4OGFvUHJPczFTWWFTQk1TZXNFYkFURjhlWnBLREE1eEZIaEpzd25WQjAyQmdiVHY2WUZ6aklTSlVpNTA2YnpQaUpJajRSZjluRU5XdFQxRHdLdlc0bUk2NnR1Z3hqMDRBMDFEWWttd3ZPd0lEQ0R0ODhkR0ZPd2ttYXJrQUJsM0V5dkxleEEyM241ZE1aUXpKSzJGaWJIbjYydFA2WWl6U0lFdUlHOEE3RGxQdnNQVEVGTjBOMTBqVDF0SG9CaDFGVlp4ZHV5MUlkeXpnNmk3YVFTSVBoa2ZqUHBoNVZVS29VYkQ5ejduQXZaaktkM2w2UVlRUWttZnRONG05NWI4Y0RjYXpaSjBxQ2ZKVkpPL2xiSHNZb3FHTkl4VGVxYlpnemFHcXRNcnFGUWhJa0FqVVFKVnR0YzliYmc0MzJuNExVbzBxVE5CVVRUZHZMV2U3a1JZd1lQbjdZck9mU3BxVnhxVW82bVhCVUNDTDMrdE5oNjRzK1c3U0xtRkNPVC9BRFBDd1pyV3Y0SXRQUDI4c1lNK1M1N2NHN3A0eDB0UGtvd0FOZE5Ra0dvdmg1UVdGdjF4YTNyRXlBZnpJeDFWN0tDaE9ZN3pXcWtsUnBnK0t3SjVHQ1R0RzQ2WVVadGo4UU1IcmpUamR3dEgxZjRGaDlQRExKTHUvd0NCZzF1ZUkyYm5oVXZFUHR0SjZ3Y0ZKV2tmbitXREhJbnd6MWNmWDRKT2xKV0YwUmE1SG9QeEo2NG1wbTA0QnB6eUdHUEJPRVY4MVBkZzZCYlVUQ24vQUhmcGYweGJVV3k5VGl4UjFUbFMrUWJPVWxZYmdFOHNIY0l6ZVh5OUJnRUNWTFNBTFZibUxneUdCa2cySStlSStMY0FxNWV6bFNEOWlMK1VmRjduQ3JNbHRFUnRlRDVrL3dCOFplcGJTVWx0VFBtL3hqTGd5WTFseHROOGNwN0hvaThZYWkvZDVoUzRFRlhRM3VBUnFVd0NSMUViYllzSER1SzBhLzhBVGVURndRUWZXRCtXSy9YeWdxTXpHNFkvaFlFZkxGZTQ3V2ZMT3BwdHBkV2xUSDNSejZFZXVOTGd1eDhycmZjditjNGRTWTZtcGdrWG1ML1BFbFdvRlFseUVSUVdQa29Fa24yd0YyVjdSVTgzVDFMQXFMSGVVK2FrOHh6S25rZjB4V3UzWGFMdmRXWHBOL0xVL3dBeGg5ZGdmaEgrUUg1bnlGMVc3b01wVXJFWDhWMzFkcXoyQnFGeUR5VzhEMkVEMnhYdnBTSzk5UzB4QVJoN3lEK2VISERtTU5wWFVlczdmcjZZT3E4SnB2b05kRnFYS2dONG9tOXVreGlHZVh1L1FmREcvcWVXVWFSWWdLQ3pHMEFUaTI4SytqdXRVR3VzeTAxK3lQRS92OVVmZjZZdENjQm9yVlVVMFZSTTJIa2Z6dzc0YStxbjdZelN5T3RqWEhHcnBpVExjT29aZGFhVXFZWHdndSs3TWZNbS90dGp6Q29XZW9YSWdzeFl6TXlTU2Z4eDdTT0QwM0FxVmFwVlFObEFCdDFMZW5RNDhXeTl6SjNpZm5pa2R5TWsxeWRzc2JiOWNXSHNCbEExV3BWUDFGQVgxWW1UOGwrL0ZjcmZkMXhidXhsSUNpQ3JRV1lrK213L0NmOEFkaHBjQ0l2dVdxZUhEenN5MTM5QitlS3ZSekVMSm5GaTdLVlFkUkhRWVNQSXo0RldRTVo1L3dEVlYvQnNYWHZENVlvMnFNNjUvd0ExVDhHeFpmOEFFRS8rNHY4QXlHTHNnand6TDB5QXBkUXAyV0R1UUNEWWZPT1Y4UWdxRHBVbUpueERWdmN3VHlrU1QrejJNM3EzUllWb3VRQVJlYjlmTWRMYzhjWitzaDBycDNHb2tiN1hnbUp1WWpiZkhuMDczS2t6aVF0a1lnekpBaThreHlGby93Q3NEMGFLbW9WSkoxSGFKdVpKNTM1WWgxSW84SjhqTXhjUVJ0TWVjUmJCZGxBZVU4aGJ6Z1N4QjNubUxldHVkb1BCeG5hams2U29tVEpVYml3TW5ackg1ejB4eFFwaVZMbGRNcnEzTnB1TDdZNVNXTUd3RStKUURFQStmVy95eDJNdVg4R3FTU0lNRURsOHQ0dDVkY0ZPdGdIb1daNGhvMUFpeHY1WUR5dkZxY1NwVmY4QVR1ZnlBOSt2c1JSbzZxU2h2aWpTYmJrVysrTUEwT3o4c3lDMFFSRWJmTDF4NldUSzR4MUxneXFLNERLZkd1V3J3K2trKzIzendUazZtV3pEclNxcU5QeGNnNGo2d01XRTJ0YTBHY0Fuc3cwMlkzRWIyK1dNYnNveElKYVlqeWlPUWpHZDlaR1MzUldPTkoyVDl1RXA1ZW5UcDBhMVFpcHExSzdBMlVyRndBUUo5ZHZYQ1doa3U4eWxXcEJhcXJxRkFOaUdpUkhNeFB2SHZhendHbDNHbGtETkNnN3lkL0ZKQk1yeUE1TTFqTUZkMmF5WDh1Q1JIOFFBSUlJT2hRMi9QZkZZdUVzYjA3R3o4NW5oRDBsTDJ2OEF1NXp3THNWNEEyYXRNSHUxT3gvekVjK1VMdjF3MnpPVm9xTkFwb3FqWVFQdzN4TnhEaUpWWU1UZmNmZmJDNFpITVZvQUdqVkgxcEYrY1NSK09MVmp3cisyeno5VTVjSEdSN05Vc3hVZ0FoRitNZ2tlaWlMRW43aGZ5TnhxWnFsUXBCS2NJcUNGVVFQeEgzNEh5K1hYTFVBcUFrTDhUR0pZODJQbWZJZVdLeHhITVBWcWFRTnpIa0xFeGZZd0RhT1dLUFNscWV5QzhzNWUyN0llTjhVTGtzV0o2Y2g3QVd4WGF3bDVFL0Q1bmtZdEZoSm4yeFk2dkFLakdid0NENis1eEZtT0IxVEFJSkY3aUwvZjkyUEs2bnFmVWVtUEFZeGtpODhKMG1rS2tpQ3VxZVVFVE9LQjJuemdkek8xejg4SFVzbm1SVFNpTlhkcjhLbjFrQnVzRSsySy9tNnBPcTF6UEtZSTVSeXh1d1psa3VnVFRWQS9aS28zOGJDaytLazRNVGNHTEh5dHRoaHhLbHBMTFB3c1I2QVRjL0xmQ1BnT2VhaG0wWm1JVnBBUFE4amJ6L0hEamlXYlV1Vm1kUmtrWE0rbklmaWRoYkZJdmZjV1Izd2dPUktnaFNkK1o4OThNV3JGUjhMZkVDU2ZsaFV1YjBpTlFIbGUzdjF4SW5FUzFwQjkvUENaTUNsYlQzSHhaZExWcllkVWF4TFQxR082ZFo2WllCU1FUSWlEN2Iyd0RRNGpUa0FzRk8yKy9uZzJsclhOVXFGVFF5VlE0UjZiSHdzRlpsRFNMZzZDQ0JFV3VjWkhpcU5TTmJ6KzV5anh3QWNhelZmdW5kbGhWUmp2TUFLVHl0aWc4QWJMaDIvaWU4N3NJU3ZkeEpZYkxjSGZIcXRmSXU2TWpMNFdVcTErUkVFYmVlUEh1STVOcVZSNlRmRWpGVFBPRHY2RVg5OEpqbEI3UllOYms3WkNhczlQbmhod3ZqRDBUS3dRZHdlZjVqRm83RmNMcDV2S3NsYW1ITk45Q3NMTXE2UXc4UXZFazRINHY5RzlWWmFnMnNmWWF6ZXpScFB2cHd6eXhUcHNVWjhJN1UwcXNJZkF4NU50UGtkajl4eGZPeXAwbGdSSGgvUEhnMll5dFNpK21xam93NU1zZkxxUE1ZdVgwWmNkcm5OVXFBTE5UZVFSR3JTQUNkU25kUUNCYmE4Ym1jVWlrK0FNc2ZhRFA5M21LclRzeCs4ZjN3bC84VWpxZi9UL0FMWVpjR3k1elp6WnFtS3RKMERGUXVod3pNaHNRZWFTRE53Y1RmOEFoUmVvL3dEVFRDenlxRHBnVVY1UFBlSjkwTlVxYk1WdHkwa3lDUE1rYkhrZkxIRkduVElCMWlTeEFCQWtBQXdUMEVmamlKZ0NIVWtTeEVEbUNMMlBudGZ5eEhVaGZDQ0RZU2ZsWWVVM1B0MHhGTGFoNkNscm9YdStuU1NGR25VV0JHNU13QjBNSGZ5d1JVcVdLb1pJSkRDWU95M0ZyOHdkdGhnT25TMXF6T1lBOFJNY3JqcmN5RHl2aU5mQ05RTEJvdVFJRVdJa0N3dVB2d3JpckEwTTh1cXFBR3ZxQkozOFlCc2c2TVQ2QXhoLzJjNEV6MW9xcnNBeE9yNFdrUWJHTlVBalRPNE16cGpGVHlKVmpyWWt2TnRYcVNkdlBsYmZIb0dYN1ZBVWxCQTFCUUNkdW40NGxrdGJJNGM4V3krblFRUERHbjViZm5nYkltS3lOeVlGRFB6QTlaR0l6eDZtNEttNDZqNS91TU9PRjlubXJwM2l0cHB5ZElpVElNVHZhNDY0MmRQUFhpY0pja25CNnRTSjZsTTc2eUI2RDlKeGtXUGl3ZzRobktxK0VLUVJZekkvZjM0Z3BaaXBjYWdEekpOaFBuZllmbGp6dlNrK1N0TjlpdzFTc1F6Z0EySjBoZ0o1NlNJSUc4RVh3QnhDa0VyWmFnaExEdkhxdTVXTlJZTjdiV01kQmpPQThKZW8zZU9UM0lNa2tHSHNUQ3pFNzNNVzljYzFlMFdXclprRTJaYWRxanRwQTNHa29UWW5VZC9GS3NDQkFuZDAwSlI1ZTFvRDJ1L0JQeFJCb245OHNUWmJpZE1nQU9KRnV0OXNENTl3YVJJdU9vMitlRkMwbGdIVEpITVI4NTZZcjE3ZnRhZmtoaWk5eDlUNGpwZUhKa0dQaFgvOVRGc0dqSTBXWmFxcUpDd0c5eWR1UnZjN25uT0V1U3lkU3VUYndxSlpva0FSTVc1MjJ4SlROVEx1VUlrQStKUVo5MTZqRjhVMW14KzVmRE9hY0hzT0dJa2phTi8xOVBQR3U3Qkc1SjlML2hqbW5tOVlnV0xDQWNRWm1sV3BFOTRoMGo2NjNVM3RmbGZyanp1cDZaNDNjVmFMUW5xN0JaanFjVS90YmtRbFZhcWkxVGZ5Zm42RWkvc2NQdjQ4ZGI5QnVjQTlwUVh5N2FFbGdWTWY3aFB5Qk9FNlhMb3lMN0haRnFqVkZJN1FaUU1tb1QxSGwxeGVlQUpsODVscWRXcFJRdXdpb2ROeXkyTWtkU0p2MXhWbFRVcFU3OHNYTHNud1VvQVEzOHQxVXFnTWk0bVk1R0RqMHVxaTVWcCs0bUhoblRkbU1vYmR3bzl5UHdiQzNqUFk3TGFDeUIwWVI4TGs3a0RadFhYbEdIMllZQnlFNUdCKy93QjdZSHpsVTkyMjN3bjhNZVVzczR5cS93Qnl5cnVpdWNJN05ueEFWSklaU0MxaEU3RWMrWjNITEdxN0hLOFF5N1ZhdXFrVzAweG8wcVBGSnZQeEEydmNoMTg4RmRrK04wcS9lOTBTU05FaGxJc2RYNkhIZmFiTEhNTlJvRkJwN3hYN3lQaENIeDhyU3ZNbTloaS9xdFpQY1BvYzR2SEd2UGIrUzAxS2RJRWpVNGovQUNnajhjZVEvU2RsTkdlZGdTVnFJakFrUnN1Zy93RHMrL0hwdFd2TEdSTWttM25mM3hUZnBReVd1alNxcUlOTm9NL1plUHYxS1BuaVdHYVdTa3VTWkQ5RDJZaDh3a1RLMDJBSkkyTEFteDh4OHNlakxVSjJKVDNZL25HUEpQbzJxYWM1cFAxNmJqcGNGVy8vQUpPUFRkSFNmd3cyYVNqUGRIRXZGTWpTckpvcnN0Uk9qcVRmcmZZK1l2ano3dGgyWVRLanZzczdLa2dPQXp6RFRCa25ZTUlpOTJGK2w3WVgyTnZYSFBGTXRUclplclNOTXpVUmxuVnNTTEVDT1IvREM0ODFTOEk1bFYraWVwUDhYVDYwa2IvaFUvUjhYUDhBZ3FuMlcvNG5BdlpUaEZESlVBNmlvSzlhblNGUWFycVZrblRhVmttSWsvQ05zT1A4Ulg3VmIvMWNWek9MbHlEZzhmZmhqbnhIb0J0eS9jL1BFTkxnNGcrSGUyOHgxdjZ4ZjF4Y3Y4RkUvRzMvQUIvdGlVY0o1Rng3amY3OFBva2tGVFJUWDRmSU1pZE0yajMrZStNcDhJZzI1OG8yOWZ3eGNhdkRJSGhjbnlDM1B2TzBZNXBaRmkwOVBZbjlSaWJUNEcxSm9wMytGV0JJamU4WHZlK0NxWERqcG5TWmlERy95NTR0VGNCMWJ0OS9YQk9VNFkxTXE2bW1HQkJGaHVQK3NNaytLTzFJUWNNNEsrcitaRkpCdVg4TWJjb0RFM0J0Ynp3ZnhmalZGZTZvVTlRb0k0THVueEVTQXpnOG1JbjJnVHlEdlBaZXBYSmFvMUoyTzdHbXBOdW5oNlc5SXd2VHM2czJDU09xK2M3SGxqUmpsSEU3U2JmNmtwM0xheFRRekZGNnRVVTlaWFVOSllrbTZpYnRMUnFEUk40SXdZOU1HOEdSdHZQeTUvTERQK0FJc1dRUnlGdXU5dDhhVEw4aDh4SjYrLzRZeTVadHpiUy85R2cybFFPZUlaZzB4VFZpRUEzS2dRT2duZkFTNWRqVU50VEVpQ2JrazdEYnhmM3c0L2gxSlhXSEt5TlJCaG84cDU0blJxZEpnYUZDNEZtcUdTRDFGNEVlUW5DKytTM1RHVWg5d2JLbWxsQlRxRTY0MUVIY2FqTVJQSW5GVTRmV3k5UFdtWXB1MVRVWVBTSUcwOWJ5Uno4c0U1bmlGZG1tYjlBWS9QbjF3RytTWWttREprMmpmYzg1TTljUGtuSnhTU2UzbEhiZG1UVmUwcWhZQ0xwR3dJYnI5a05BMjVlY1JNNEY0Zm4rK3E2VkxzUUNRUGlnRFNJbUZzQ1FKTXhPT2p3c25lM25BbjlNUmpLQlppcDFCam41ZW45c0pEcVp4a0swbnN4N2xjd0JYbzBLY2Q3SlorZ0VHMXZJSDN3NjR4V1lVeXJSTFF2bGN6TVROb24yeFZPQlVLS1ZSVlp5ZEJES29XWkkya24yL3Robnh2UEdxc0lZSkptZVhwY2t6dFByMXRWNWNrcmI3OWg0cUs0QXFPWHAxZFRtc0VWV2dBbnhIMEhuNStlTjVqaU5GUWFDa3cwZ3dUdnZ1ZWMvdU1CTGs3OWVVZ2VmV01jNTdoN2tmeTNWRysweWxnRDFBa0FuL1ZJOHNaNFpYSFpyNm5mTmtsRHMrcU1CVlpsZW9HTk9kTUVpSkJ2OFVHUW9QSnAyd3g0WG1SUW9kMjdLS3BEYUJ6MDZ0eDFDeUJQb1BXcE4yTzFudkt1WWVyVjMxdHEzdEVSVUJISzA0SW9jRVphcTFHekxNMEVLclFBUC9jVDdtY2FaNTZpMG1MYWwvclQ4K1J3MVlBeHI5NU00VDlvZUxxbE02YXlCOWlBZGJBWGt3SnVCTmpIbGZEV2h3OGlaY1I2L09ZNWZwanVud3hQS2ZUR0NEVVpXMVl6UzhsRzdFWm51czB3U215VXFnQytQbEFKQkU3a25rSjNPK1BRbHJoaE00Ry93OUIwK1g3akVsTExlWUE5c0hMUFhMVlJ5U0pSZm5IcGhYMnhOTmNuV0ZSdmlXRkhNdUxxQVA5UUdHdGJMSjNMaFN5MVNyYVhzVlVrZUZvK3RHOFlxV2E3RjFLajZxdVlaeHk4TUgya20wZEJ2ZzRvUlRVcE92NUF4WjJYN0w1eGEyWHpQY3hSK0x2RFVweG9La0UyZWRqdEU0OUVVTjlwZmwvZkZLcWZSK2pRTytaVjZGUTF6ekZ4R0xWUnkrbEZEVkRJZ1QxdHVlbUtkVEtNNmNXQU9hT2JiN2JZNkNqcmdaQjc5UDJNVEdtWXRIdWNaTjJHck8rNkhtY2IwZVErN0VMS1luZjBzUHV4eExkUHZ3Tnp0SVJSQUc2RzNuK3hqdnZBYkJEK1dJKzl2RWZzWUM0cHhMdXlOVWhSWTZZbSt4RXh0MHRpc2VvbkwycDBCUlFVNEJnNlJxNVNURTQwNnJBQkcrKy85c0M1UGk1TE1yZU1NQVFDaWlKaTgzUHduYnJ6TVhab3dhRHBIbjY5Y0dldkM5K1J0S0J1NHA3NlRQa01SOTBza1NmVERHbGZ5NVkyMUliRUE5UExBOWVmOVF1bENqK0draitXUmN3VHArNFRqc1pJQWlFa1grc2JIekczM25ERmFZSW0vN2tZMDFHVEU3NFdYVVNhb05BbENraStGakE2S3NmdjI4OFQxR3BXczU5NDI5OFNMbHhQelA2NDJjdUNPa1FQUC9yRFJ6eVM0UjJsdmtDcjVtaVBxVkRlTFNUOXh4TlNBUHcwWjgyYjhwT082ZEVLUU41dmVMZmRpV3JRMUM1T0tMcUhIbEhPUGcwS0hJSlRIdGpmOEN4dnFVZWd4elJwNmR1bk1uSEpkeEYrWFU0TDZxSCt5YitvdEV2OEFBZ1NTNWdEYTJBNnRXaE1RekVkWUFIdVkzOHNTQ1F4RzVQVTIvREVDR1QwZzM4N1lWOVRGY0tncGVUZVh5ck1iVTdjaklqOVNmYkI5UGh4NXNQWmJmamdWczRSQjFOdCs3VEdJVG5DOGtNNGkrKyszNjhzV2oxRUV1N0EwTVg0WUR6T05md1NqbmJ6SDV6Z1Zzd2VyRThwT0k2Yk1UZFZCSFFrNytvOHNMK1lncmFpZFRvbXFVRUIrTlFaNkQ5Y1JBcnVKYjBRajc0akU2cnovQUhiSFhjTVpHb2ROdVgvZUVmVTN3amtnWmFIZUQrbXcrWSsvYmJHNkdSWlJDb1I2dmI3eVRnb1poZ1ltYjh4NWVVZE1kRE9IbmZyeTg3WHhUSGx3dmUzOWp0d1laS3B6VVQvcW44c2N2bDNBbnVwUFFNSitaTWZmZzA1aHZzamEzaVAvQU1jYWJNTk1hUjArSS84QXh4YjFjRDJ2OWdiaXlybGFoSk9tUEtSSjliL25pQVZDaDhZZU9aTUVjcm5sSG42NE00am1IRVNRQXhBaGQrZk04cmNoam5JNW1nT1ZRbmFUSEtSMXdtaU0vZEIvY3J3dHpTMUtSTzI5cERXbnB2TStVWW1BL3dBai9MREtqWFNQQ0NKOGhpY0huaThjY1g0K3hOc1NNQklsS2cvMiszUTR6VW91V2NSMVV4K0ZzUGNjNkJodlNoNFgyT3NyNHpxc1lRazIzSWdEeWt4OHQ3WTMvRXY5cGYzN1lNejFaWktCZkVZRXdBTDdiWHRnTHUyKzIzei9BTFl3WllSVWgxSkgvOWs9JyxcclxuICAgIH0sXHJcbiAgXSxcclxuXHJcbiAgQ29tbWVudHM6IFtcclxuICAgIHtcclxuICAgICAgVXNlcjoge1xyXG4gICAgICAgIG5pY2tuYW1lOiAnbmVybycsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRlbnQ6ICfsmrDsmYAnLFxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgIFVzZXI6IHtcclxuICAgICAgICBuaWNrbmFtZTogJ2hlcm8nLFxyXG4gICAgICB9LFxyXG4gICAgICBjb250ZW50OiAn7IKs6rOg7Iu27Ja07JqUficsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFERF9QT1NUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1haW5Qb3N0czogW2R1bW15UG9zdCwgLi4uc3RhdGUubWFpblBvc3RzXSwgLy9kdW1teVBvc3Trpbwg7JWe7JeQ64ukIOuRkOyWtOyVvCDqsozsi5zrrLzsnbQg7JyE7JeQIOyYqOuLpC5cclxuICAgICAgICBwb3N0QWRkZWQ6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICBtZTogbnVsbCxcclxuICBzaWduVXBEYXRhOiB7fSxcclxuICBsb2dpbkRhdGE6IHt9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiAnTE9HX0lOJyxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dEFjdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogJ0xPR19PVVQnLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdMT0dfSU4nOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXHJcbiAgICAgICAgbWU6IGFjdGlvbi5kYXRhLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgJ0xPR19PVVQnOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICAgIG1lOiBudWxsLFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zbGlja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9