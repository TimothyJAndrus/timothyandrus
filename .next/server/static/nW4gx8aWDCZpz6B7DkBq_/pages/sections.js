module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+1zY":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Store");

/***/ }),

/***/ "+JH3":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ViewCarousel");

/***/ }),

/***/ "+bV1":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Weekend");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "/sfI":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/List");

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "0LMq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("4Kp1");


/***/ }),

/***/ "2BDn":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Group");

/***/ }),

/***/ "2weN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NpdHkuanBnIjs=");

/***/ }),

/***/ "2zww":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CardHeader; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-tim-andrus.js
var nextjs_material_tim_andrus = __webpack_require__("k7mW");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/components/cardHeaderStyle.js

const cardHeaderStyle = {
  cardHeader: {
    borderRadius: "3px",
    padding: "1rem 15px",
    marginLeft: "15px",
    marginRight: "15px",
    marginTop: "-30px",
    border: "0",
    marginBottom: "0"
  },
  cardHeaderPlain: {
    marginLeft: "0px",
    marginRight: "0px",
    "&$cardHeaderImage": {
      margin: "0 !important"
    }
  },
  cardHeaderImage: {
    position: "relative",
    padding: "0",
    zIndex: "1",
    marginLeft: "15px",
    marginRight: "15px",
    marginTop: "-30px",
    borderRadius: "6px",
    "& img": {
      width: "100%",
      borderRadius: "6px",
      pointerEvents: "none",
      boxShadow: "0 5px 15px -8px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.24), 0 8px 10px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.2)"
    },
    "& a": {
      display: "block"
    }
  },
  noShadow: {
    "& img": {
      boxShadow: "none !important"
    }
  },
  cardHeaderContact: {
    margin: "0 15px",
    marginTop: "-20px"
  },
  cardHeaderSignup: {
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "-40px",
    padding: "20px 0",
    width: "100%",
    marginBottom: "15px"
  },
  warningCardHeader: nextjs_material_tim_andrus["X" /* warningCardHeader */],
  successCardHeader: nextjs_material_tim_andrus["Q" /* successCardHeader */],
  dangerCardHeader: nextjs_material_tim_andrus["k" /* dangerCardHeader */],
  infoCardHeader: nextjs_material_tim_andrus["v" /* infoCardHeader */],
  primaryCardHeader: nextjs_material_tim_andrus["F" /* primaryCardHeader */],
  roseCardHeader: nextjs_material_tim_andrus["J" /* roseCardHeader */]
};
/* harmony default export */ var components_cardHeaderStyle = (cardHeaderStyle);
// CONCATENATED MODULE: ./components/Card/CardHeader.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components
 // @material-ui/icons
// core components


const useStyles = Object(styles_["makeStyles"])(components_cardHeaderStyle);
function CardHeader(props) {
  const {
    className,
    children,
    color,
    plain,
    image,
    contact,
    signup,
    noShadow
  } = props,
        rest = _objectWithoutProperties(props, ["className", "children", "color", "plain", "image", "contact", "signup", "noShadow"]);

  const classes = useStyles();
  const cardHeaderClasses = external_classnames_default()({
    [classes.cardHeader]: true,
    [classes[color + "CardHeader"]]: color,
    [classes.cardHeaderPlain]: plain,
    [classes.cardHeaderImage]: image,
    [classes.cardHeaderContact]: contact,
    [classes.cardHeaderSignup]: signup,
    [classes.noShadow]: noShadow,
    [className]: className !== undefined
  });
  return __jsx("div", _extends({
    className: cardHeaderClasses
  }, rest), children);
}

/***/ }),

/***/ "31Yn":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ClickAwayListener");

/***/ }),

/***/ "3uXk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Success; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pUqt");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // nodejs library to set properties for components

// @material-ui/core components
 // core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(assets_jss_nextjs_material_tim_andrus_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);
function Success(props) {
  const {
    children
  } = props;
  const classes = useStyles();
  return __jsx("div", {
    className: classes.defaultFontStyle + " " + classes.successText
  }, children);
}

/***/ }),

/***/ "3ydN":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PersonAdd");

/***/ }),

/***/ "4151":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "4CLJ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArtTrack");

/***/ }),

/***/ "4D1s":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "4Kp1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ SectionsPage; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: ./components/Header/Header.js + 1 modules
var Header = __webpack_require__("8x5e");

// EXTERNAL MODULE: ./components/Header/HeaderLinks.js
var HeaderLinks = __webpack_require__("8E12");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__("0LMq");
var List_default = /*#__PURE__*/__webpack_require__.n(List_);

// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__("c25J");
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);

// EXTERNAL MODULE: external "@material-ui/icons/Share"
var Share_ = __webpack_require__("EAEr");
var Share_default = /*#__PURE__*/__webpack_require__.n(Share_);

// EXTERNAL MODULE: external "@material-ui/icons/ShoppingCart"
var ShoppingCart_ = __webpack_require__("FQAE");
var ShoppingCart_default = /*#__PURE__*/__webpack_require__.n(ShoppingCart_);

// EXTERNAL MODULE: ./components/CustomButtons/Button.js + 1 modules
var Button = __webpack_require__("Kg+a");

// EXTERNAL MODULE: ./components/Grid/GridContainer.js
var GridContainer = __webpack_require__("mtPR");

// EXTERNAL MODULE: ./components/Grid/GridItem.js
var GridItem = __webpack_require__("i4t8");

// EXTERNAL MODULE: ./components/Card/Card.js + 1 modules
var Card = __webpack_require__("A2So");

// EXTERNAL MODULE: ./components/Card/CardBody.js + 1 modules
var CardBody = __webpack_require__("UsYt");

// EXTERNAL MODULE: ./components/CustomInput/CustomInput.js + 1 modules
var CustomInput = __webpack_require__("um8N");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-tim-andrus/components/headerLinksStyle.js
var headerLinksStyle = __webpack_require__("96c8");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-tim-andrus.js
var nextjs_material_tim_andrus = __webpack_require__("k7mW");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/pages/sectionsSections/headersStyle.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const headersSection = theme => _objectSpread({}, Object(headerLinksStyle["a" /* default */])(theme), {
  sectionBlank: {
    height: "70px",
    display: "block"
  },
  container: _objectSpread({}, nextjs_material_tim_andrus["h" /* container */], {
    zIndex: "2",
    position: "relative",
    "& h1, & h4, & h6": {
      color: nextjs_material_tim_andrus["Z" /* whiteColor */]
    }
  }),
  conatinerHeader2: _objectSpread({}, nextjs_material_tim_andrus["h" /* container */], {
    zIndex: "2",
    position: "relative",
    "& h1, & h4, & h6": {
      color: nextjs_material_tim_andrus["Z" /* whiteColor */]
    },
    paddingTop: "25vh"
  }),
  title: nextjs_material_tim_andrus["S" /* title */],
  pageHeader: {
    position: "relative",
    minHeight: "100vh",
    maxHeight: "1600px",
    backgroundPosition: "50%",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    WebkitBoxAlign: "center",
    MsFlexAlign: "center",
    alignItems: "center",
    "&:before": {
      background: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.5)"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  iframeContainer: {
    "& > iframe": {
      width: "100%",
      boxShadow: "0 16px 38px -12px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.56), 0 4px 25px 0px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.2)"
    }
  },
  mrAuto: nextjs_material_tim_andrus["C" /* mrAuto */],
  textCenter: {
    textAlign: "center"
  },
  card: {
    marginTop: "60px"
  },
  formControl: {
    margin: "0",
    padding: "8px 0 0 0"
  },
  textRight: {
    textAlign: "right"
  },
  button: {
    margin: "0 !important"
  }
});

/* harmony default export */ var headersStyle = (headersSection);
// CONCATENATED MODULE: ./assets/img/bg12.jpg
/* harmony default export */ var bg12 = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2JnMTIuanBnIjs=");
// EXTERNAL MODULE: ./assets/img/examples/office2.jpg
var office2 = __webpack_require__("y4SE");

// EXTERNAL MODULE: ./assets/img/dg1.jpg
var dg1 = __webpack_require__("lN43");

// EXTERNAL MODULE: ./assets/img/dg2.jpg
var dg2 = __webpack_require__("YJKT");

// EXTERNAL MODULE: ./assets/img/dg3.jpg
var dg3 = __webpack_require__("vyXm");

// CONCATENATED MODULE: ./pages-sections/sections-page/SectionHeaders.js
var __jsx = external_react_default.a.createElement;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

// nodejs library that concatenates classes

// react component for creating beautiful carousel

// @material-ui/core components



// @material-ui/icons


// core components













const useStyles = Object(styles_["makeStyles"])(headersStyle);
function SectionHeaders(_ref) {
  let rest = Object.assign({}, _ref);
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    // I've set the className to cd-section so that you can make smooth scroll to it
    __jsx("div", _extends({
      className: "cd-section"
    }, rest), __jsx("div", {
      className: classes.sectionBlank,
      id: "blanksection"
    }), __jsx("div", null, __jsx(Header["a" /* default */], {
      absolute: true,
      brand: "Tim Andrus",
      color: "transparent",
      links: __jsx("div", {
        className: classes.collapse
      }, __jsx(List_default.a, {
        className: classes.list + " " + classes.mlAuto
      }, __jsx(ListItem_default.a, {
        className: classes.listItem
      }, __jsx(Button["a" /* default */], {
        href: "#pablo",
        className: classes.navLink,
        onClick: e => e.preventDefault(),
        color: "transparent"
      }, "Home")), __jsx(ListItem_default.a, {
        className: classes.listItem
      }, __jsx(Button["a" /* default */], {
        href: "#pablo",
        className: classes.navLink,
        onClick: e => e.preventDefault(),
        color: "transparent"
      }, "About me")), __jsx(ListItem_default.a, {
        className: classes.listItem
      }, __jsx(Button["a" /* default */], {
        href: "#pablo",
        className: classes.navLink,
        onClick: e => e.preventDefault(),
        color: "transparent"
      }, "Products")), __jsx(ListItem_default.a, {
        className: classes.listItem
      }, __jsx(Button["a" /* default */], {
        href: "#pablo",
        className: classes.navLink,
        onClick: e => e.preventDefault(),
        color: "transparent"
      }, "Contact us"))), __jsx(List_default.a, {
        className: classes.list + " " + classes.mlAuto
      }, __jsx(ListItem_default.a, {
        className: classes.listItem
      }, __jsx(Button["a" /* default */], {
        color: "transparent",
        href: "https://twitter.com/timothyjandrus",
        target: "_blank",
        className: classes.navLink + " " + classes.navLinkJustIcon
      }, __jsx("i", {
        className: "fab fa-twitter"
      }))), __jsx(ListItem_default.a, {
        className: classes.listItem
      }, __jsx(Button["a" /* default */], {
        color: "transparent",
        href: "https://www.facebook.com/timothyjandrus",
        target: "_blank",
        className: classes.navLink + " " + classes.navLinkJustIcon
      }, __jsx("i", {
        className: "fab fa-facebook"
      }))), __jsx(ListItem_default.a, {
        className: classes.listItem
      }, __jsx(Button["a" /* default */], {
        color: "transparent",
        href: "https://www.instagram.com/timothyjandrus",
        target: "_blank",
        className: classes.navLink + " " + classes.navLinkJustIcon
      }, __jsx("i", {
        className: "fab fa-instagram"
      })))))
    }), __jsx("div", {
      className: classes.pageHeader,
      style: {
        backgroundImage: `url("${bg12}")`
      }
    }, __jsx("div", {
      className: classes.container
    }, __jsx(GridContainer["a" /* default */], null, __jsx(GridItem["a" /* default */], {
      xs: 12,
      sm: 6,
      md: 6
    }, __jsx("h1", {
      className: classes.title
    }, "Tesla Model 3."), __jsx("h4", null, "There", "'", "s no doubt that Tesla is delighted with the interest, but the data also raises a few questions. How long will it take for Tesla to fulfill all those extra orders?"), __jsx("br", null), __jsx(Button["a" /* default */], {
      color: "danger",
      size: "lg",
      href: "https://www.youtube.com/watch?v=AerjS7PTNYs",
      target: "_blank",
      rel: ""
    }, __jsx("i", {
      className: "fas fa-ticket-alt"
    }), "Order Now")), __jsx(GridItem["a" /* default */], {
      xs: 12,
      sm: 5,
      md: 5,
      className: classes.mlAuto
    }, __jsx("div", {
      className: classes.iframeContainer
    }, __jsx("iframe", {
      height: "250",
      src: "https://www.youtube.com/watch?v=AerjS7PTNYs",
      frameBorder: "0",
      allow: "encrypted-media",
      allowFullScreen: "",
      title: "Tesla"
    }))))))), __jsx("div", null, __jsx(Header["a" /* default */], {
      absolute: true,
      brand: "Tim Andrus",
      color: "transparent",
      links: __jsx("div", {
        className: classes.collapse
      }, __jsx(List_default.a, {
        className: classes.list + " " + classes.mlAuto
      }, __jsx(ListItem_default.a, {
        className: classes.listItem
      }, __jsx(Button["a" /* default */], {
        href: "#pablo",
        className: classes.navLink,
        onClick: e => e.preventDefault(),
        color: "transparent"
      }, "Home")), __jsx(ListItem_default.a, {
        className: classes.listItem
      }, __jsx(Button["a" /* default */], {
        href: "#pablo",
        className: classes.navLink,
        onClick: e => e.preventDefault(),
        color: "transparent"
      }, "About me")), __jsx(ListItem_default.a, {
        className: classes.listItem
      }, __jsx(Button["a" /* default */], {
        href: "#pablo",
        className: classes.navLink,
        onClick: e => e.preventDefault(),
        color: "transparent"
      }, "Products")), __jsx(ListItem_default.a, {
        className: classes.listItem
      }, __jsx(Button["a" /* default */], {
        href: "#pablo",
        className: classes.navLink,
        onClick: e => e.preventDefault(),
        color: "transparent"
      }, "Contact Me"))), __jsx(List_default.a, {
        className: classes.list + " " + classes.mlAuto
      }, __jsx(ListItem_default.a, {
        className: classes.listItem
      }, __jsx(Button["a" /* default */], {
        color: "transparent",
        href: "https://twitter.com/timothyjandrus",
        target: "_blank",
        className: classes.navLink + " " + classes.navLinkJustIcon
      }, __jsx("i", {
        className: "fab fa-twitter"
      }))), __jsx(ListItem_default.a, {
        className: classes.listItem
      }, __jsx(Button["a" /* default */], {
        color: "transparent",
        href: "https://www.facebook.com/timothyjandrus",
        target: "_blank",
        className: classes.navLink + " " + classes.navLinkJustIcon
      }, __jsx("i", {
        className: "fab fa-facebook"
      }))), __jsx(ListItem_default.a, {
        className: classes.listItem
      }, __jsx(Button["a" /* default */], {
        color: "transparent",
        href: "https://www.instagram.com/timothyjandrus",
        target: "_blank",
        className: classes.navLink + " " + classes.navLinkJustIcon
      }, __jsx("i", {
        className: "fab fa-instagram"
      })))))
    }), __jsx("div", {
      className: classes.pageHeader,
      style: {
        backgroundImage: `url("${office2["a" /* default */]}")`
      }
    }, __jsx("div", {
      className: classes.conatinerHeader2
    }, __jsx(GridContainer["a" /* default */], null, __jsx(GridItem["a" /* default */], {
      xs: 12,
      sm: 8,
      md: 8,
      className: external_classnames_default()(classes.mlAuto, classes.mrAuto, classes.textCenter)
    }, __jsx("h1", {
      className: classes.title
    }, "You should work with me!"), __jsx("h4", null, "Now you have no excuses, it", "'", "s time to surprise your clients, your competitors, and why not, the world. You probably won", "'", "t have a better chance to show off all your potential if it", "'", "s not by designing a website for your own agency or web studio.")), __jsx(GridItem["a" /* default */], {
      xs: 12,
      sm: 10,
      md: 10,
      className: external_classnames_default()(classes.mlAuto, classes.mrAuto)
    }, __jsx(Card["a" /* default */], {
      raised: true,
      className: classes.card
    }, __jsx(CardBody["a" /* default */], {
      formHorizontal: true
    }, __jsx("form", null, __jsx(GridContainer["a" /* default */], null, __jsx(GridItem["a" /* default */], {
      xs: 12,
      sm: 3,
      md: 3
    }, __jsx(CustomInput["a" /* default */], {
      id: "name",
      inputProps: {
        placeholder: "Company name"
      },
      formControlProps: {
        fullWidth: true,
        className: classes.formControl
      }
    })), __jsx(GridItem["a" /* default */], {
      xs: 12,
      sm: 3,
      md: 3
    }, __jsx(CustomInput["a" /* default */], {
      id: "email",
      inputProps: {
        placeholder: "Company email"
      },
      formControlProps: {
        fullWidth: true,
        className: classes.formControl
      }
    })), __jsx(GridItem["a" /* default */], {
      xs: 12,
      sm: 3,
      md: 3
    }, __jsx(CustomInput["a" /* default */], {
      id: "password",
      inputProps: {
        placeholder: "Company password",
        type: "password",
        autoComplete: "off"
      },
      formControlProps: {
        fullWidth: true,
        className: classes.formControl
      }
    })), __jsx(GridItem["a" /* default */], {
      xs: 12,
      sm: 3,
      md: 3
    }, __jsx(Button["a" /* default */], {
      block: true,
      color: "primary",
      className: classes.button
    }, "Sign up"))))))))))), __jsx("div", null, __jsx(Header["a" /* default */], {
      absolute: true,
      brand: "Tim Andrus",
      color: "transparent",
      links: __jsx(List_default.a, {
        className: classes.list + " " + classes.mlAuto
      }, __jsx(ListItem_default.a, {
        className: classes.listItem
      }, __jsx(Button["a" /* default */], {
        href: "#pablo",
        className: classes.navLink,
        onClick: e => e.preventDefault(),
        color: "transparent"
      }, "Home")), __jsx(ListItem_default.a, {
        className: classes.listItem
      }, __jsx(Button["a" /* default */], {
        href: "#pablo",
        className: classes.navLink,
        onClick: e => e.preventDefault(),
        color: "transparent"
      }, "About me")), __jsx(ListItem_default.a, {
        className: classes.listItem
      }, __jsx(Button["a" /* default */], {
        href: "#pablo",
        className: classes.navLink,
        onClick: e => e.preventDefault(),
        color: "transparent"
      }, "Products")), __jsx(ListItem_default.a, {
        className: classes.listItem
      }, __jsx(Button["a" /* default */], {
        href: "#pablo",
        className: classes.navLink,
        onClick: e => e.preventDefault(),
        color: "transparent"
      }, "Contact us")))
    }), __jsx(external_react_slick_default.a, settings, __jsx("div", null, __jsx("div", {
      className: classes.pageHeader,
      style: {
        backgroundImage: `url("${dg1["a" /* default */]}")`
      }
    }, __jsx("div", {
      className: classes.container
    }, __jsx(GridContainer["a" /* default */], null, __jsx(GridItem["a" /* default */], {
      xs: 12,
      sm: 6,
      md: 6
    }, __jsx("h1", {
      className: classes.title
    }, "Timothy Andrus"), __jsx("h4", null, "Dolce & Gabbana is a luxury Italian fashion house founded in 1985 in Legnano by Italian designers Domenico Dolce and Stefano Gabbana. The two met in Milan in 1980 and designed for the same fashion house."), __jsx("br", null), __jsx(Button["a" /* default */], {
      color: "danger",
      size: "lg"
    }, "Read more"), __jsx(Button["a" /* default */], {
      justIcon: true,
      color: "white",
      simple: true
    }, __jsx("i", {
      className: "fab fa-twitter"
    })), __jsx(Button["a" /* default */], {
      justIcon: true,
      color: "white",
      simple: true
    }, __jsx("i", {
      className: "fab fa-facebook-square"
    })), __jsx(Button["a" /* default */], {
      justIcon: true,
      color: "white",
      simple: true
    }, __jsx("i", {
      className: "fab fa-get-pocket"
    }))))))), __jsx("div", null, __jsx("div", {
      className: classes.pageHeader,
      style: {
        backgroundImage: `url("${dg2["a" /* default */]}")`
      }
    }, __jsx("div", {
      className: classes.container
    }, __jsx(GridContainer["a" /* default */], null, __jsx(GridItem["a" /* default */], {
      xs: 12,
      sm: 8,
      md: 8,
      className: external_classnames_default()(classes.mlAuto, classes.mrAuto, classes.textCenter)
    }, __jsx("h1", {
      className: classes.title
    }, "Timothy Andrus"), __jsx("h4", null, "Dolce & Gabbana is a luxury Italian fashion house founded in 1985 in Legnano by Italian designers Domenico Dolce and Stefano Gabbana. The two met in Milan in 1980 and designed for the same fashion house."), __jsx("br", null), __jsx("h6", null, "Connect with us on:"), __jsx("div", null, __jsx(Button["a" /* default */], {
      color: "white",
      simple: true,
      size: "lg",
      justIcon: true
    }, __jsx("i", {
      className: "fab fa-twitter"
    })), __jsx(Button["a" /* default */], {
      color: "white",
      simple: true,
      size: "lg",
      justIcon: true
    }, __jsx("i", {
      className: "fab fa-facebook-square"
    })), __jsx(Button["a" /* default */], {
      color: "white",
      simple: true,
      size: "lg",
      justIcon: true
    }, __jsx("i", {
      className: "fab fa-google-plus-g"
    })), __jsx(Button["a" /* default */], {
      color: "white",
      simple: true,
      size: "lg",
      justIcon: true
    }, __jsx("i", {
      className: "fab fa-instagram"
    })))))))), __jsx("div", null, __jsx("div", {
      className: classes.pageHeader,
      style: {
        backgroundImage: `url("${dg3["a" /* default */]}")`
      }
    }, __jsx("div", {
      className: classes.container
    }, __jsx(GridContainer["a" /* default */], null, __jsx(GridItem["a" /* default */], {
      xs: 12,
      sm: 7,
      md: 7,
      className: external_classnames_default()(classes.mlAuto, classes.textRight)
    }, __jsx("h1", {
      className: classes.title
    }, "New Collection 50% Off"), __jsx("h4", null, "There", "'", "s no doubt that Tesla is delighted with the interest, but the data also raises a few questions. How long will it take for Tesla to fulfill all those extra orders?"), __jsx("br", null), __jsx("div", null, __jsx(Button["a" /* default */], {
      color: "white",
      simple: true,
      size: "lg"
    }, __jsx(Share_default.a, null), " Share Offer"), __jsx(Button["a" /* default */], {
      color: "danger",
      size: "lg"
    }, __jsx(ShoppingCart_default.a, null), " Shop now"))))))))))
  );
}
// EXTERNAL MODULE: external "@material-ui/icons/Chat"
var Chat_ = __webpack_require__("HWfr");
var Chat_default = /*#__PURE__*/__webpack_require__.n(Chat_);

// EXTERNAL MODULE: external "@material-ui/icons/VerifiedUser"
var VerifiedUser_ = __webpack_require__("M2SB");
var VerifiedUser_default = /*#__PURE__*/__webpack_require__.n(VerifiedUser_);

// EXTERNAL MODULE: external "@material-ui/icons/Fingerprint"
var Fingerprint_ = __webpack_require__("Uo6P");
var Fingerprint_default = /*#__PURE__*/__webpack_require__.n(Fingerprint_);

// EXTERNAL MODULE: external "@material-ui/icons/GroupWork"
var GroupWork_ = __webpack_require__("5MrK");
var GroupWork_default = /*#__PURE__*/__webpack_require__.n(GroupWork_);

// EXTERNAL MODULE: external "@material-ui/icons/Airplay"
var Airplay_ = __webpack_require__("AW/9");
var Airplay_default = /*#__PURE__*/__webpack_require__.n(Airplay_);

// EXTERNAL MODULE: external "@material-ui/icons/LocationOn"
var LocationOn_ = __webpack_require__("cVmi");
var LocationOn_default = /*#__PURE__*/__webpack_require__.n(LocationOn_);

// EXTERNAL MODULE: external "@material-ui/icons/Extension"
var Extension_ = __webpack_require__("GC5X");
var Extension_default = /*#__PURE__*/__webpack_require__.n(Extension_);

// EXTERNAL MODULE: external "@material-ui/icons/ChildFriendly"
var ChildFriendly_ = __webpack_require__("V8/P");
var ChildFriendly_default = /*#__PURE__*/__webpack_require__.n(ChildFriendly_);

// EXTERNAL MODULE: external "@material-ui/icons/WatchLater"
var WatchLater_ = __webpack_require__("LiOz");
var WatchLater_default = /*#__PURE__*/__webpack_require__.n(WatchLater_);

// EXTERNAL MODULE: external "@material-ui/icons/Code"
var Code_ = __webpack_require__("n9Bu");
var Code_default = /*#__PURE__*/__webpack_require__.n(Code_);

// EXTERNAL MODULE: external "@material-ui/icons/FormatPaint"
var FormatPaint_ = __webpack_require__("GCdX");
var FormatPaint_default = /*#__PURE__*/__webpack_require__.n(FormatPaint_);

// EXTERNAL MODULE: external "@material-ui/icons/Dashboard"
var Dashboard_ = __webpack_require__("vFf/");
var Dashboard_default = /*#__PURE__*/__webpack_require__.n(Dashboard_);

// EXTERNAL MODULE: external "@material-ui/icons/ViewCarousel"
var ViewCarousel_ = __webpack_require__("+JH3");
var ViewCarousel_default = /*#__PURE__*/__webpack_require__.n(ViewCarousel_);

// EXTERNAL MODULE: external "@material-ui/icons/AccessTime"
var AccessTime_ = __webpack_require__("86oe");
var AccessTime_default = /*#__PURE__*/__webpack_require__.n(AccessTime_);

// EXTERNAL MODULE: external "@material-ui/icons/AttachMoney"
var AttachMoney_ = __webpack_require__("59xQ");
var AttachMoney_default = /*#__PURE__*/__webpack_require__.n(AttachMoney_);

// EXTERNAL MODULE: ./components/InfoArea/InfoArea.js + 1 modules
var InfoArea = __webpack_require__("TT5w");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/pages/sectionsSections/featuresStyle.js

const features = {
  container: nextjs_material_tim_andrus["h" /* container */],
  mlAuto: nextjs_material_tim_andrus["B" /* mlAuto */],
  mrAuto: nextjs_material_tim_andrus["C" /* mrAuto */],
  title: nextjs_material_tim_andrus["S" /* title */],
  description: nextjs_material_tim_andrus["n" /* description */],
  features1: {
    textAlign: "center",
    padding: "80px 0"
  },
  features2: {
    padding: "80px 0"
  },
  features3: {
    padding: "80px 0",
    "& $phoneContainer": {
      maxWidth: "220px",
      margin: "0 auto"
    }
  },
  features4: {
    padding: "80px 0",
    "& $phoneContainer": {
      maxWidth: "260px",
      margin: "60px auto 0"
    }
  },
  features5: {
    padding: "80px 0",
    backgroundSize: "cover",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
    position: "relative",
    "& $title": {
      marginBottom: "30px"
    },
    "& $title,& $container": {
      position: "relative",
      zIndex: "2",
      color: nextjs_material_tim_andrus["Z" /* whiteColor */]
    },
    "&:after": {
      background: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ",0.55)",
      position: "absolute",
      width: "100%",
      height: "100%",
      content: "''",
      zIndex: "0",
      left: "0px",
      top: "0px"
    },
    "& $container": {
      "& $gridContainer:last-child": {
        "& $gridItem": {
          borderBottom: "0"
        }
      },
      "& $gridItem": {
        border: "1px solid rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Z" /* whiteColor */]) + ", 0.35)",
        borderTop: "0",
        borderLeft: "0",
        "&:last-child": {
          borderRight: "0"
        }
      }
    },
    "& $infoArea5": {
      textAlign: "center",
      maxWidth: "310px",
      minHeight: "320px",
      "& h4,& p,& svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
        color: nextjs_material_tim_andrus["Z" /* whiteColor */]
      }
    }
  },
  gridContainer: {},
  gridItem: {},
  margin0: {
    margin: "0!important"
  },
  textCenter: {
    textAlign: "center"
  },
  phoneContainer: {
    "& img": {
      width: "100%"
    }
  },
  infoArea: {
    maxWidth: "none",
    margin: "0 auto",
    padding: "10px 0 0px"
  },
  infoArea5: {}
};
/* harmony default export */ var featuresStyle = (features);
// CONCATENATED MODULE: ./assets/img/sections/iphone.png
/* harmony default export */ var iphone = ("data:image/png;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2lwaG9uZS5wbmciOw==");
// CONCATENATED MODULE: ./assets/img/sections/iphone2.png
/* harmony default export */ var iphone2 = ("data:image/png;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2lwaG9uZTIucG5nIjs=");
// EXTERNAL MODULE: ./assets/img/bg9.jpg
var bg9 = __webpack_require__("OL5M");

// CONCATENATED MODULE: ./pages-sections/sections-page/SectionFeatures.js
var SectionFeatures_jsx = external_react_default.a.createElement;

function SectionFeatures_extends() { SectionFeatures_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SectionFeatures_extends.apply(this, arguments); }

 // @material-ui/core components

 // @material-ui/icons















 // core components








const SectionFeatures_useStyles = Object(styles_["makeStyles"])(featuresStyle);
function SectionFeatures(_ref) {
  let rest = Object.assign({}, _ref);
  const classes = SectionFeatures_useStyles();
  return SectionFeatures_jsx("div", SectionFeatures_extends({
    className: "cd-section"
  }, rest), SectionFeatures_jsx("div", {
    className: classes.container
  }, SectionFeatures_jsx("div", {
    className: classes.features1
  }, SectionFeatures_jsx(GridContainer["a" /* default */], null, SectionFeatures_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 8,
    md: 8,
    className: classes.mlAuto + " " + classes.mrAuto
  }, SectionFeatures_jsx("h2", {
    className: classes.title
  }, "Why our product is the best"), SectionFeatures_jsx("h5", {
    className: classes.description
  }, "This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn", "'", "t scroll to get here. Add a button if you want the user to see more."))), SectionFeatures_jsx(GridContainer["a" /* default */], null, SectionFeatures_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionFeatures_jsx(InfoArea["a" /* default */], {
    vertical: true,
    icon: Chat_default.a,
    title: "Free Chat",
    description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough",
    iconColor: "info"
  })), SectionFeatures_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionFeatures_jsx(InfoArea["a" /* default */], {
    vertical: true,
    icon: VerifiedUser_default.a,
    title: "Verified Users",
    description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
    iconColor: "success"
  })), SectionFeatures_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionFeatures_jsx(InfoArea["a" /* default */], {
    vertical: true,
    icon: Fingerprint_default.a,
    title: "Fingerprint",
    description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
    iconColor: "danger"
  })))), SectionFeatures_jsx("div", {
    className: classes.features2
  }, SectionFeatures_jsx(GridContainer["a" /* default */], null, SectionFeatures_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 8,
    md: 8,
    className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
  }, SectionFeatures_jsx("h2", {
    className: classes.title
  }, "Why our product is the best"), SectionFeatures_jsx("h5", {
    className: classes.description
  }, "This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information."))), SectionFeatures_jsx(GridContainer["a" /* default */], null, SectionFeatures_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionFeatures_jsx(InfoArea["a" /* default */], {
    icon: GroupWork_default.a,
    title: "Collaborate",
    description: SectionFeatures_jsx("span", null, SectionFeatures_jsx("p", null, "The moment you use Material Kit, you know you\u2019ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before."), SectionFeatures_jsx("a", {
      href: "#pablo",
      onClick: e => e.preventDefault()
    }, "Find more...")),
    iconColor: "info"
  })), SectionFeatures_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionFeatures_jsx(InfoArea["a" /* default */], {
    icon: Airplay_default.a,
    title: "Airplay",
    description: SectionFeatures_jsx("span", null, SectionFeatures_jsx("p", null, "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."), SectionFeatures_jsx("a", {
      href: "#pablo",
      onClick: e => e.preventDefault()
    }, "Find more...")),
    iconColor: "danger"
  })), SectionFeatures_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionFeatures_jsx(InfoArea["a" /* default */], {
    icon: LocationOn_default.a,
    title: "Location Integrated",
    description: SectionFeatures_jsx("span", null, SectionFeatures_jsx("p", null, "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."), SectionFeatures_jsx("a", {
      href: "#pablo",
      onClick: e => e.preventDefault()
    }, "Find more...")),
    iconColor: "success"
  })))), SectionFeatures_jsx("div", {
    className: classes.features3
  }, SectionFeatures_jsx(GridContainer["a" /* default */], null, SectionFeatures_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, SectionFeatures_jsx("div", {
    className: classes.phoneContainer
  }, SectionFeatures_jsx("img", {
    src: iphone,
    alt: "..."
  }))), SectionFeatures_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, SectionFeatures_jsx("h2", {
    className: classes.title
  }, "Your life will be much easier"), SectionFeatures_jsx(InfoArea["a" /* default */], {
    className: classes.infoArea,
    icon: Extension_default.a,
    title: "Hundreds of Components",
    description: "The moment you use Material Kit, you know you\u2019ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before.",
    iconColor: "primary"
  }), SectionFeatures_jsx(InfoArea["a" /* default */], {
    className: classes.infoArea,
    icon: ChildFriendly_default.a,
    title: "Easy to Use",
    description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
    iconColor: "primary"
  }), SectionFeatures_jsx(InfoArea["a" /* default */], {
    className: classes.infoArea,
    icon: WatchLater_default.a,
    title: "Fast Prototyping",
    description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
    iconColor: "primary"
  })))), SectionFeatures_jsx("div", {
    className: classes.features4
  }, SectionFeatures_jsx(GridContainer["a" /* default */], null, SectionFeatures_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 8,
    md: 8,
    className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
  }, SectionFeatures_jsx("h2", {
    className: classes.title
  }, "Your life will be much easier"), SectionFeatures_jsx("h5", {
    className: classes.description
  }, "This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information."))), SectionFeatures_jsx(GridContainer["a" /* default */], null, SectionFeatures_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 3,
    className: classes.mlAuto
  }, SectionFeatures_jsx(InfoArea["a" /* default */], {
    icon: Code_default.a,
    title: "For Developers",
    description: "The moment you use Material Kit, you know you\u2019ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before.",
    iconColor: "info"
  }), SectionFeatures_jsx(InfoArea["a" /* default */], {
    icon: FormatPaint_default.a,
    title: "For Designers",
    description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
    iconColor: "danger"
  })), SectionFeatures_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 4
  }, SectionFeatures_jsx("div", {
    className: classes.phoneContainer
  }, SectionFeatures_jsx("img", {
    src: iphone2,
    alt: "..."
  }))), SectionFeatures_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 3,
    className: classes.mrAuto
  }, SectionFeatures_jsx(InfoArea["a" /* default */], {
    icon: Dashboard_default.a,
    title: "Material-UI Grid",
    description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
    iconColor: "primary"
  }), SectionFeatures_jsx(InfoArea["a" /* default */], {
    icon: ViewCarousel_default.a,
    title: "Example Pages Included",
    description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
    iconColor: "success"
  }))))), SectionFeatures_jsx("div", {
    className: classes.features5,
    style: {
      backgroundImage: `url(${bg9["default"]})`
    }
  }, SectionFeatures_jsx(GridContainer["a" /* default */], {
    className: classes.margin0
  }, SectionFeatures_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 8,
    md: 8,
    className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
  }, SectionFeatures_jsx("h2", {
    className: classes.title
  }, "Your life will be much easier")), SectionFeatures_jsx("div", {
    className: classes.container
  }, SectionFeatures_jsx(GridContainer["a" /* default */], {
    className: classes.gridContainer,
    style: {
      margin: "0!important"
    }
  }, SectionFeatures_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    className: classes.gridItem
  }, SectionFeatures_jsx(InfoArea["a" /* default */], {
    vertical: true,
    className: classes.infoArea5,
    icon: Code_default.a,
    title: "For Developers",
    description: SectionFeatures_jsx("p", null, "The moment you use Material Kit, you know you\u2019ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before."),
    iconColor: "info"
  })), SectionFeatures_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    className: classes.gridItem
  }, SectionFeatures_jsx(InfoArea["a" /* default */], {
    vertical: true,
    className: classes.infoArea5,
    icon: FormatPaint_default.a,
    title: "For Designers",
    description: SectionFeatures_jsx("p", null, "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."),
    iconColor: "danger"
  })), SectionFeatures_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    className: classes.gridItem
  }, SectionFeatures_jsx(InfoArea["a" /* default */], {
    vertical: true,
    className: classes.infoArea5,
    icon: Dashboard_default.a,
    title: "Material-UI Grid",
    description: SectionFeatures_jsx("p", null, "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."),
    iconColor: "primary"
  }))), SectionFeatures_jsx(GridContainer["a" /* default */], {
    className: classes.gridContainer,
    style: {
      margin: "0!important"
    }
  }, SectionFeatures_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    className: classes.gridItem
  }, SectionFeatures_jsx(InfoArea["a" /* default */], {
    vertical: true,
    className: classes.infoArea5,
    icon: ViewCarousel_default.a,
    title: "Example Pages Included",
    description: SectionFeatures_jsx("p", null, "The moment you use Material Kit, you know you\u2019ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before.")
  })), SectionFeatures_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    className: classes.gridItem
  }, SectionFeatures_jsx(InfoArea["a" /* default */], {
    vertical: true,
    className: classes.infoArea5,
    icon: AccessTime_default.a,
    title: "Save Time",
    description: SectionFeatures_jsx("p", null, "The moment you use Material Kit, you know you\u2019ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before.")
  })), SectionFeatures_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    className: classes.gridItem
  }, SectionFeatures_jsx(InfoArea["a" /* default */], {
    vertical: true,
    className: classes.infoArea5,
    icon: AttachMoney_default.a,
    title: "Save Money",
    description: SectionFeatures_jsx("p", null, "The moment you use Material Kit, you know you\u2019ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before.")
  })))))));
}
// EXTERNAL MODULE: external "@material-ui/icons/TrendingUp"
var TrendingUp_ = __webpack_require__("Uivz");
var TrendingUp_default = /*#__PURE__*/__webpack_require__.n(TrendingUp_);

// EXTERNAL MODULE: ./components/Card/CardHeader.js + 1 modules
var CardHeader = __webpack_require__("2zww");

// EXTERNAL MODULE: ./components/Typography/Info.js
var Info = __webpack_require__("vwaZ");

// EXTERNAL MODULE: ./components/Typography/Danger.js
var Danger = __webpack_require__("6orC");

// EXTERNAL MODULE: ./components/Typography/Success.js
var Success = __webpack_require__("3uXk");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/pages/sectionsSections/blogsStyle.js
function blogsStyle_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function blogsStyle_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { blogsStyle_ownKeys(Object(source), true).forEach(function (key) { blogsStyle_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { blogsStyle_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function blogsStyle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const blogsSection = {
  container: nextjs_material_tim_andrus["h" /* container */],
  title: nextjs_material_tim_andrus["S" /* title */],
  coloredShadow: nextjs_material_tim_andrus["g" /* coloredShadow */],
  cardTitle: nextjs_material_tim_andrus["f" /* cardTitle */],
  mlAuto: nextjs_material_tim_andrus["B" /* mlAuto */],
  mrAuto: nextjs_material_tim_andrus["C" /* mrAuto */],
  description: nextjs_material_tim_andrus["n" /* description */],
  blog: {
    padding: "50px 0"
  },
  cardCategory: {
    marginBottom: "0",
    marginTop: "10px",
    "& svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      top: "8px",
      lineHeight: "0"
    }
  },
  description1: blogsStyle_objectSpread({}, nextjs_material_tim_andrus["n" /* description */], {
    lineHeight: "1.313rem"
  }),
  author: {
    "& a": {
      color: nextjs_material_tim_andrus["s" /* grayColor */][1],
      textDecoration: "none"
    }
  },
  card: {
    marginBottom: "80px"
  },
  card4: {
    marginBottom: "60px",
    textAlign: "center"
  }
};
/* harmony default export */ var blogsStyle = (blogsSection);
// CONCATENATED MODULE: ./assets/img/examples/card-blog4.jpg
/* harmony default export */ var card_blog4 = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NhcmQtYmxvZzQuanBnIjs=");
// CONCATENATED MODULE: ./assets/img/office2.jpg
/* harmony default export */ var img_office2 = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL29mZmljZTIuanBnIjs=");
// EXTERNAL MODULE: ./assets/img/examples/blog5.jpg
var blog5 = __webpack_require__("YDgk");

// EXTERNAL MODULE: ./assets/img/examples/blog6.jpg
var blog6 = __webpack_require__("efrK");

// EXTERNAL MODULE: ./assets/img/examples/blog7.jpg
var blog7 = __webpack_require__("g75V");

// EXTERNAL MODULE: ./assets/img/examples/blog8.jpg
var blog8 = __webpack_require__("y1WB");

// EXTERNAL MODULE: ./assets/img/bg5.jpg
var bg5 = __webpack_require__("bySf");

// CONCATENATED MODULE: ./pages-sections/sections-page/SectionBlogs.js
var SectionBlogs_jsx = external_react_default.a.createElement;

function SectionBlogs_extends() { SectionBlogs_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SectionBlogs_extends.apply(this, arguments); }

 // @material-ui/core components

 // @material-ui/icons

 // core components


















const SectionBlogs_useStyles = Object(styles_["makeStyles"])(blogsStyle);
function SectionBlogs(_ref) {
  let rest = Object.assign({}, _ref);
  const classes = SectionBlogs_useStyles();
  return SectionBlogs_jsx("div", SectionBlogs_extends({
    className: "cd-section"
  }, rest), SectionBlogs_jsx("div", {
    className: classes.blog
  }, SectionBlogs_jsx("div", {
    className: classes.container
  }, SectionBlogs_jsx(GridContainer["a" /* default */], null, SectionBlogs_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 10,
    md: 10,
    className: classes.mlAuto + " " + classes.mrAuto
  }, SectionBlogs_jsx("h2", {
    className: classes.title
  }, "Latest Blogposts"), SectionBlogs_jsx("br", null), SectionBlogs_jsx(Card["a" /* default */], {
    plain: true,
    blog: true,
    className: classes.card
  }, SectionBlogs_jsx(GridContainer["a" /* default */], null, SectionBlogs_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 5,
    md: 5
  }, SectionBlogs_jsx(CardHeader["a" /* default */], {
    image: true,
    plain: true
  }, SectionBlogs_jsx("a", {
    href: "#pablito",
    onClick: e => e.preventDefault()
  }, SectionBlogs_jsx("img", {
    src: card_blog4,
    alt: "..."
  })), SectionBlogs_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${card_blog4})`,
      opacity: "1"
    }
  }))), SectionBlogs_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 7,
    md: 7
  }, SectionBlogs_jsx(Info["a" /* default */], null, SectionBlogs_jsx("h6", {
    className: classes.cardCategory
  }, "ENTERPRISE")), SectionBlogs_jsx("h3", {
    className: classes.cardTitle
  }, SectionBlogs_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, "Autodesk looks to future of 3D printing with Project Escher")), SectionBlogs_jsx("p", {
    className: classes.description1
  }, "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Today, it\u2019s moving to a subscription model. Yet its own business model disruption is only part of the story \u2014 and\u2026", SectionBlogs_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, " ", "Read More", " ")), SectionBlogs_jsx("p", {
    className: classes.author
  }, "by", " ", SectionBlogs_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionBlogs_jsx("b", null, "Mike Butcher")), " ", ", 2 days ago")))), SectionBlogs_jsx(Card["a" /* default */], {
    plain: true,
    blog: true,
    className: classes.card
  }, SectionBlogs_jsx(GridContainer["a" /* default */], null, SectionBlogs_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 7,
    md: 7
  }, SectionBlogs_jsx(Danger["a" /* default */], null, SectionBlogs_jsx("h6", {
    className: classes.cardCategory
  }, SectionBlogs_jsx(TrendingUp_default.a, null), "TRENDING")), SectionBlogs_jsx("h3", {
    className: classes.cardTitle
  }, SectionBlogs_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, "6 insights into the French Fashion landscape")), SectionBlogs_jsx("p", {
    className: classes.description1
  }, "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Today, it\u2019s moving to a subscription model. Yet its own business model disruption is only part of the story \u2014 and\u2026", SectionBlogs_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, " ", "Read More", " ")), SectionBlogs_jsx("p", {
    className: classes.author
  }, "by", " ", SectionBlogs_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionBlogs_jsx("b", null, "Mike Butcher")), " ", ", 2 days ago")), SectionBlogs_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 5,
    md: 5
  }, SectionBlogs_jsx(CardHeader["a" /* default */], {
    image: true,
    plain: true
  }, SectionBlogs_jsx("a", {
    href: "#pablito",
    onClick: e => e.preventDefault()
  }, SectionBlogs_jsx("img", {
    src: img_office2,
    alt: "..."
  })), SectionBlogs_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${img_office2})`,
      opacity: "1"
    }
  }))))))))), SectionBlogs_jsx("div", {
    className: classes.blog
  }, SectionBlogs_jsx("div", {
    className: classes.container
  }, SectionBlogs_jsx(GridContainer["a" /* default */], null, SectionBlogs_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 10,
    className: classes.mlAuto + " " + classes.mrAuto
  }, SectionBlogs_jsx("h2", {
    className: classes.title
  }, "Latest Blogposts 2"), SectionBlogs_jsx("br", null), SectionBlogs_jsx(GridContainer["a" /* default */], null, SectionBlogs_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionBlogs_jsx(Card["a" /* default */], {
    plain: true,
    blog: true
  }, SectionBlogs_jsx(CardHeader["a" /* default */], {
    plain: true,
    image: true
  }, SectionBlogs_jsx("a", {
    href: "#pablito",
    onClick: e => e.preventDefault()
  }, SectionBlogs_jsx("img", {
    src: card_blog4,
    alt: "..."
  })), SectionBlogs_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${card_blog4})`,
      opacity: "1"
    }
  })), SectionBlogs_jsx(CardBody["a" /* default */], {
    plain: true
  }, SectionBlogs_jsx(Info["a" /* default */], null, SectionBlogs_jsx("h6", {
    className: classes.cardCategory
  }, "ENTERPRISE")), SectionBlogs_jsx("h4", {
    className: classes.cardTitle
  }, SectionBlogs_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, "Autodesk looks to future of 3D printing with Project Escher")), SectionBlogs_jsx("p", {
    className: classes.description
  }, "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses.", SectionBlogs_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, " ", "Read More", " "))))), SectionBlogs_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionBlogs_jsx(Card["a" /* default */], {
    plain: true,
    blog: true
  }, SectionBlogs_jsx(CardHeader["a" /* default */], {
    plain: true,
    image: true
  }, SectionBlogs_jsx("a", {
    href: "#pablito",
    onClick: e => e.preventDefault()
  }, SectionBlogs_jsx("img", {
    src: blog5["a" /* default */],
    alt: "..."
  })), SectionBlogs_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${blog5["a" /* default */]})`,
      opacity: "1"
    }
  })), SectionBlogs_jsx(CardBody["a" /* default */], {
    plain: true
  }, SectionBlogs_jsx(Success["a" /* default */], null, SectionBlogs_jsx("h6", {
    className: classes.cardCategory
  }, "STARTUPS")), SectionBlogs_jsx("h4", {
    className: classes.cardTitle
  }, SectionBlogs_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, "Lyft launching cross-platform service this week")), SectionBlogs_jsx("p", {
    className: classes.description
  }, "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses.", SectionBlogs_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, " ", "Read More", " "))))), SectionBlogs_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionBlogs_jsx(Card["a" /* default */], {
    plain: true,
    blog: true
  }, SectionBlogs_jsx(CardHeader["a" /* default */], {
    plain: true,
    image: true
  }, SectionBlogs_jsx("a", {
    href: "#pablito",
    onClick: e => e.preventDefault()
  }, SectionBlogs_jsx("img", {
    src: blog7["a" /* default */],
    alt: "..."
  })), SectionBlogs_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${blog7["a" /* default */]})`,
      opacity: "1"
    }
  })), SectionBlogs_jsx(CardBody["a" /* default */], {
    plain: true
  }, SectionBlogs_jsx(Danger["a" /* default */], null, SectionBlogs_jsx("h6", {
    className: classes.cardCategory
  }, SectionBlogs_jsx(TrendingUp_default.a, null), "ENTERPRISE")), SectionBlogs_jsx("h4", {
    className: classes.cardTitle
  }, SectionBlogs_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, "6 insights into the French Fashion landscape")), SectionBlogs_jsx("p", {
    className: classes.description
  }, "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses.", SectionBlogs_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, " ", "Read More", " ")))))))))), SectionBlogs_jsx("div", {
    className: classes.blog
  }, SectionBlogs_jsx("div", {
    className: classes.container
  }, SectionBlogs_jsx(GridContainer["a" /* default */], null, SectionBlogs_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 10,
    md: 10,
    className: classes.mlAuto + " " + classes.mrAuto
  }, SectionBlogs_jsx("h2", {
    className: classes.title
  }, "Latest Blogposts 3"), SectionBlogs_jsx("br", null), SectionBlogs_jsx(Card["a" /* default */], {
    plain: true,
    blog: true,
    className: classes.card
  }, SectionBlogs_jsx(GridContainer["a" /* default */], null, SectionBlogs_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionBlogs_jsx(CardHeader["a" /* default */], {
    image: true,
    plain: true
  }, SectionBlogs_jsx("a", {
    href: "#pablito",
    onClick: e => e.preventDefault()
  }, SectionBlogs_jsx("img", {
    src: card_blog4,
    alt: "..."
  })), SectionBlogs_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${card_blog4})`,
      opacity: "1"
    }
  }), SectionBlogs_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${card_blog4})`,
      opacity: "1"
    }
  }))), SectionBlogs_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 8,
    md: 8
  }, SectionBlogs_jsx(Info["a" /* default */], null, SectionBlogs_jsx("h6", {
    className: classes.cardCategory
  }, "ENTERPRISE")), SectionBlogs_jsx("h3", {
    className: classes.cardTitle
  }, SectionBlogs_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, "Autodesk looks to future of 3D printing with Project Escher")), SectionBlogs_jsx("p", {
    className: classes.description
  }, "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Today, it\u2019s moving to a subscription model. Yet its own business model disruption is only part of the story \u2014 and\u2026", SectionBlogs_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, " ", "Read More", " ")), SectionBlogs_jsx("p", {
    className: classes.author
  }, "by", " ", SectionBlogs_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionBlogs_jsx("b", null, "Mike Butcher")), " ", ", 2 days ago")))), SectionBlogs_jsx(Card["a" /* default */], {
    plain: true,
    blog: true,
    className: classes.card
  }, SectionBlogs_jsx(GridContainer["a" /* default */], null, SectionBlogs_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionBlogs_jsx(CardHeader["a" /* default */], {
    image: true,
    plain: true
  }, SectionBlogs_jsx("a", {
    href: "#pablito",
    onClick: e => e.preventDefault()
  }, SectionBlogs_jsx("img", {
    src: img_office2,
    alt: "..."
  })), SectionBlogs_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${img_office2})`,
      opacity: "1"
    }
  }), SectionBlogs_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${img_office2})`,
      opacity: "1"
    }
  }))), SectionBlogs_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 8,
    md: 8
  }, SectionBlogs_jsx(Danger["a" /* default */], null, SectionBlogs_jsx("h6", {
    className: classes.cardCategory
  }, SectionBlogs_jsx(TrendingUp_default.a, null), "TRENDING")), SectionBlogs_jsx("h3", {
    className: classes.cardTitle
  }, SectionBlogs_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, "6 insights into the French Fashion landscape")), SectionBlogs_jsx("p", {
    className: classes.description
  }, "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Today, it\u2019s moving to a subscription model. Yet its own business model disruption is only part of the story \u2014 and\u2026", SectionBlogs_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, " ", "Read More", " ")), SectionBlogs_jsx("p", {
    className: classes.author
  }, "by", " ", SectionBlogs_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionBlogs_jsx("b", null, "Mike Butcher")), " ", ", 2 days ago")))), SectionBlogs_jsx(Card["a" /* default */], {
    plain: true,
    blog: true,
    className: classes.card
  }, SectionBlogs_jsx(GridContainer["a" /* default */], null, SectionBlogs_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionBlogs_jsx(CardHeader["a" /* default */], {
    image: true,
    plain: true
  }, SectionBlogs_jsx("a", {
    href: "#pablito",
    onClick: e => e.preventDefault()
  }, SectionBlogs_jsx("img", {
    src: blog8["a" /* default */],
    alt: "..."
  })), SectionBlogs_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${blog8["a" /* default */]})`,
      opacity: "1"
    }
  }), SectionBlogs_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${blog8["a" /* default */]})`,
      opacity: "1"
    }
  }))), SectionBlogs_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 8,
    md: 8
  }, SectionBlogs_jsx(Success["a" /* default */], null, SectionBlogs_jsx("h6", {
    className: classes.cardCategory
  }, "STARTUPS")), SectionBlogs_jsx("h3", {
    className: classes.cardTitle
  }, SectionBlogs_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, "Lyft launching cross-platform service this week")), SectionBlogs_jsx("p", {
    className: classes.description
  }, "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Today, it\u2019s moving to a subscription model. Yet its own business model disruption is only part of the story \u2014 and\u2026", SectionBlogs_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, " ", "Read More", " ")), SectionBlogs_jsx("p", {
    className: classes.author
  }, "by", " ", SectionBlogs_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionBlogs_jsx("b", null, "Megan Rose")), " ", ", 2 days ago")))))))), SectionBlogs_jsx("div", {
    className: classes.blog
  }, SectionBlogs_jsx("div", {
    className: classes.container
  }, SectionBlogs_jsx(GridContainer["a" /* default */], null, SectionBlogs_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 8,
    md: 8,
    className: classes.mlAuto + " " + classes.mrAuto
  }, SectionBlogs_jsx("h2", {
    className: classes.title
  }, "Latest Blogposts 4"), SectionBlogs_jsx("br", null), SectionBlogs_jsx(Card["a" /* default */], {
    plain: true,
    blog: true,
    className: classes.card4
  }, SectionBlogs_jsx(CardHeader["a" /* default */], {
    image: true,
    plain: true
  }, SectionBlogs_jsx("a", {
    href: "#pablito",
    onClick: e => e.preventDefault()
  }, SectionBlogs_jsx("img", {
    src: bg5["default"],
    alt: "..."
  })), SectionBlogs_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${bg5["default"]})`,
      opacity: "1"
    }
  })), SectionBlogs_jsx(CardBody["a" /* default */], {
    plain: true
  }, SectionBlogs_jsx(Info["a" /* default */], null, SectionBlogs_jsx("h6", {
    className: classes.cardCategory
  }, "FASHION")), SectionBlogs_jsx("h3", {
    className: classes.cardTitle
  }, SectionBlogs_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, "Autodesk looks to future of 3D")), SectionBlogs_jsx("h5", {
    className: classes.description
  }, "Don", "'", "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out that it\u2019s the first album to go number 1 off of streaming..."), SectionBlogs_jsx(Button["a" /* default */], {
    round: true,
    color: "primary"
  }, "Read More"))), SectionBlogs_jsx(Card["a" /* default */], {
    plain: true,
    blog: true,
    className: classes.card4
  }, SectionBlogs_jsx(CardHeader["a" /* default */], {
    image: true,
    plain: true
  }, SectionBlogs_jsx("a", {
    href: "#pablito",
    onClick: e => e.preventDefault()
  }, SectionBlogs_jsx("img", {
    src: blog6["a" /* default */],
    alt: "..."
  })), SectionBlogs_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${blog6["a" /* default */]})`,
      opacity: "1"
    }
  })), SectionBlogs_jsx(CardBody["a" /* default */], {
    plain: true
  }, SectionBlogs_jsx(Success["a" /* default */], null, SectionBlogs_jsx("h6", {
    className: classes.cardCategory
  }, "LIFESTYLE")), SectionBlogs_jsx("h3", {
    className: classes.cardTitle
  }, SectionBlogs_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, "We will breathe clean air and exercise")), SectionBlogs_jsx("h5", {
    className: classes.description
  }, "Don", "'", "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out that it\u2019s the first album to go number 1 off of streaming..."), SectionBlogs_jsx(Button["a" /* default */], {
    round: true,
    color: "primary"
  }, "Read More"))))))));
}
// EXTERNAL MODULE: ./components/Card/CardAvatar.js + 1 modules
var CardAvatar = __webpack_require__("G2Vl");

// EXTERNAL MODULE: ./components/Card/CardFooter.js + 1 modules
var CardFooter = __webpack_require__("5LSk");

// EXTERNAL MODULE: ./components/Typography/Muted.js
var Muted = __webpack_require__("pL7r");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-tim-andrus/pages/sectionsSections/teamsStyle.js
var teamsStyle = __webpack_require__("WGBr");

// EXTERNAL MODULE: ./assets/img/bg7.jpg
var bg7 = __webpack_require__("l4Ax");

// EXTERNAL MODULE: ./assets/img/examples/city.jpg
var city = __webpack_require__("2weN");

// EXTERNAL MODULE: ./assets/img/faces/marc.jpg
var marc = __webpack_require__("Q6fj");

// EXTERNAL MODULE: ./assets/img/faces/christian.jpg
var christian = __webpack_require__("skcn");

// EXTERNAL MODULE: ./assets/img/faces/kendall.jpg
var kendall = __webpack_require__("Hak1");

// EXTERNAL MODULE: ./assets/img/faces/avatar.jpg
var avatar = __webpack_require__("ydEf");

// EXTERNAL MODULE: ./assets/img/examples/card-profile1.jpg
var card_profile1 = __webpack_require__("AG1V");

// CONCATENATED MODULE: ./assets/img/examples/card-profile2.jpg
/* harmony default export */ var card_profile2 = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NhcmQtcHJvZmlsZTIuanBnIjs=");
// EXTERNAL MODULE: ./assets/img/examples/card-profile4.jpg
var card_profile4 = __webpack_require__("xZn2");

// EXTERNAL MODULE: ./assets/img/faces/card-profile1-square.jpg
var card_profile1_square = __webpack_require__("CLSS");

// EXTERNAL MODULE: ./assets/img/faces/card-profile2-square.jpg
var card_profile2_square = __webpack_require__("TToL");

// EXTERNAL MODULE: ./assets/img/faces/card-profile4-square.jpg
var card_profile4_square = __webpack_require__("QkBZ");

// EXTERNAL MODULE: ./assets/img/faces/card-profile6-square.jpg
var card_profile6_square = __webpack_require__("OW/O");

// CONCATENATED MODULE: ./pages-sections/sections-page/SectionTeams.js
var SectionTeams_jsx = external_react_default.a.createElement;

function SectionTeams_extends() { SectionTeams_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SectionTeams_extends.apply(this, arguments); }

 // @material-ui/core components

 // @material-ui/icons
// import  from "@material-ui/icons/";
// core components
























const SectionTeams_useStyles = Object(styles_["makeStyles"])(teamsStyle["a" /* default */]);
function SectionTeams(_ref) {
  let rest = Object.assign({}, _ref);
  const classes = SectionTeams_useStyles();
  return SectionTeams_jsx("div", SectionTeams_extends({
    className: "cd-section"
  }, rest), SectionTeams_jsx("div", {
    className: classes.team
  }, SectionTeams_jsx("div", {
    className: classes.container
  }, SectionTeams_jsx(GridContainer["a" /* default */], null, SectionTeams_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 8,
    md: 8,
    className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
  }, SectionTeams_jsx("h2", {
    className: classes.title
  }, "My Awesome Team 1"), SectionTeams_jsx("h5", {
    className: classes.description
  }, "This is the paragraph where you can write more details about your team. Keep you user engaged by providing meaningful information."))), SectionTeams_jsx(GridContainer["a" /* default */], null, SectionTeams_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 3,
    md: 3
  }, SectionTeams_jsx(Card["a" /* default */], {
    profile: true,
    plain: true
  }, SectionTeams_jsx(CardAvatar["a" /* default */], {
    profile: true,
    plain: true
  }, SectionTeams_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionTeams_jsx("img", {
    src: marc["a" /* default */],
    alt: "...",
    className: classes.img
  }))), SectionTeams_jsx(CardBody["a" /* default */], null, SectionTeams_jsx("h4", {
    className: classes.cardTitle
  }, "Alec Thompson"), SectionTeams_jsx(Muted["a" /* default */], null, SectionTeams_jsx("h6", {
    className: classes.cardCategory
  }, "CEO / Co-Founder")), SectionTeams_jsx("p", {
    className: classes.description
  }, "And I love you like Kanye loves Kanye. I need to restart the human foundation.")), SectionTeams_jsx(CardFooter["a" /* default */], {
    profile: true,
    className: classes.justifyContent
  }, SectionTeams_jsx(Button["a" /* default */], {
    href: "#pablo",
    justIcon: true,
    simple: true,
    color: "twitter",
    className: classes.btn,
    onClick: e => e.preventDefault()
  }, SectionTeams_jsx("i", {
    className: "fab fa-twitter"
  })), SectionTeams_jsx(Button["a" /* default */], {
    href: "#pablo",
    justIcon: true,
    simple: true,
    color: "facebook",
    className: classes.btn,
    onClick: e => e.preventDefault()
  }, SectionTeams_jsx("i", {
    className: "fab fa-facebook"
  })), SectionTeams_jsx(Button["a" /* default */], {
    href: "#pablo",
    justIcon: true,
    simple: true,
    color: "google",
    className: classes.btn,
    onClick: e => e.preventDefault()
  }, SectionTeams_jsx("i", {
    className: "fab fa-google"
  }))))), SectionTeams_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 3,
    md: 3
  }, SectionTeams_jsx(Card["a" /* default */], {
    profile: true,
    plain: true
  }, SectionTeams_jsx(CardAvatar["a" /* default */], {
    profile: true,
    plain: true
  }, SectionTeams_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionTeams_jsx("img", {
    src: kendall["a" /* default */],
    alt: "...",
    className: classes.img
  }))), SectionTeams_jsx(CardBody["a" /* default */], null, SectionTeams_jsx("h4", {
    className: classes.cardTitle
  }, "Tania Andrew"), SectionTeams_jsx(Muted["a" /* default */], null, SectionTeams_jsx("h6", {
    className: classes.cardCategory
  }, "DESIGNER")), SectionTeams_jsx("p", {
    className: classes.description
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation. And I love you like Kanye loves Kanye.")), SectionTeams_jsx(CardFooter["a" /* default */], {
    profile: true,
    className: classes.justifyContent
  }, SectionTeams_jsx(Button["a" /* default */], {
    href: "#pablo",
    justIcon: true,
    simple: true,
    color: "twitter",
    className: classes.btn,
    onClick: e => e.preventDefault()
  }, SectionTeams_jsx("i", {
    className: "fab fa-twitter"
  })), SectionTeams_jsx(Button["a" /* default */], {
    href: "#pablo",
    justIcon: true,
    simple: true,
    color: "dribbble",
    className: classes.btn,
    onClick: e => e.preventDefault()
  }, SectionTeams_jsx("i", {
    className: "fab fa-dribbble"
  })), SectionTeams_jsx(Button["a" /* default */], {
    href: "#pablo",
    justIcon: true,
    simple: true,
    color: "linkedin",
    className: classes.btn,
    onClick: e => e.preventDefault()
  }, SectionTeams_jsx("i", {
    className: "fab fa-linkedin"
  }))))), SectionTeams_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 3,
    md: 3
  }, SectionTeams_jsx(Card["a" /* default */], {
    profile: true,
    plain: true
  }, SectionTeams_jsx(CardAvatar["a" /* default */], {
    profile: true,
    plain: true
  }, SectionTeams_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionTeams_jsx("img", {
    src: christian["a" /* default */],
    alt: "...",
    className: classes.img
  }))), SectionTeams_jsx(CardBody["a" /* default */], null, SectionTeams_jsx("h4", {
    className: classes.cardTitle
  }, "Christian Mike"), SectionTeams_jsx(Muted["a" /* default */], null, SectionTeams_jsx("h6", {
    className: classes.cardCategory
  }, "Web Developer")), SectionTeams_jsx("p", {
    className: classes.description
  }, "I love you like Kanye loves Kanye. Don", "'", "t be scared of the truth because we need to restart the human foundation.")), SectionTeams_jsx(CardFooter["a" /* default */], {
    profile: true,
    className: classes.justifyContent
  }, SectionTeams_jsx(Button["a" /* default */], {
    href: "#pablo",
    justIcon: true,
    simple: true,
    color: "facebook",
    className: classes.btn,
    onClick: e => e.preventDefault()
  }, SectionTeams_jsx("i", {
    className: "fab fa-facebook"
  })), SectionTeams_jsx(Button["a" /* default */], {
    href: "#pablo",
    justIcon: true,
    simple: true,
    color: "dribbble",
    className: classes.btn,
    onClick: e => e.preventDefault()
  }, SectionTeams_jsx("i", {
    className: "fab fa-dribbble"
  }))))), SectionTeams_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 3,
    md: 3
  }, SectionTeams_jsx(Card["a" /* default */], {
    profile: true,
    plain: true
  }, SectionTeams_jsx(CardAvatar["a" /* default */], {
    profile: true,
    plain: true
  }, SectionTeams_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionTeams_jsx("img", {
    src: avatar["a" /* default */],
    alt: "..."
  }))), SectionTeams_jsx(CardBody["a" /* default */], null, SectionTeams_jsx("h4", {
    className: classes.cardTitle
  }, "Rebecca Stormvile"), SectionTeams_jsx(Muted["a" /* default */], null, SectionTeams_jsx("h6", {
    className: classes.cardCategory
  }, "Web Developer")), SectionTeams_jsx("p", {
    className: classes.description
  }, "And I love you like Kanye loves Kanye. I really need to restart the human foundation.")), SectionTeams_jsx(CardFooter["a" /* default */], {
    profile: true,
    plain: true,
    className: classes.justifyContent
  }, SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true,
    color: "google",
    href: "#pablo",
    className: classes.btn,
    onClick: e => e.preventDefault()
  }, SectionTeams_jsx("i", {
    className: "fab fa-google"
  })), SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true,
    color: "twitter",
    href: "#pablo",
    className: classes.btn,
    onClick: e => e.preventDefault()
  }, SectionTeams_jsx("i", {
    className: "fab fa-twitter"
  })), SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true,
    color: "dribbble",
    href: "#pablo",
    className: classes.btn,
    onClick: e => e.preventDefault()
  }, SectionTeams_jsx("i", {
    className: "fab fa-dribbble"
  })))))))), SectionTeams_jsx("div", {
    className: classes.team
  }, SectionTeams_jsx("div", {
    className: classes.container
  }, SectionTeams_jsx(GridContainer["a" /* default */], null, SectionTeams_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 8,
    md: 8,
    className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
  }, SectionTeams_jsx("h2", {
    className: classes.title
  }, "The Executive Team 2"), SectionTeams_jsx("h5", {
    className: classes.description
  }, "This is the paragraph where you can write more details about your team. Keep you user engaged by providing meaningful information."))), SectionTeams_jsx(GridContainer["a" /* default */], null, SectionTeams_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionTeams_jsx(Card["a" /* default */], {
    plain: true,
    profile: true
  }, SectionTeams_jsx(CardHeader["a" /* default */], {
    image: true,
    plain: true
  }, SectionTeams_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionTeams_jsx("img", {
    src: card_profile1["a" /* default */],
    alt: "..."
  })), SectionTeams_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${card_profile1["a" /* default */]})`,
      opacity: "1"
    }
  })), SectionTeams_jsx(CardBody["a" /* default */], {
    plain: true
  }, SectionTeams_jsx("h4", {
    className: classes.cardTitle
  }, "Alec Thompson"), SectionTeams_jsx(Muted["a" /* default */], null, SectionTeams_jsx("h6", {
    className: classes.cardCategory
  }, "MANAGING PARTNER"))), SectionTeams_jsx(CardFooter["a" /* default */], {
    profile: true,
    plain: true,
    className: classes.justifyContent
  }, SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    round: true,
    color: "twitter"
  }, SectionTeams_jsx("i", {
    className: "fab fa-twitter"
  })), SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    round: true,
    color: "facebook"
  }, SectionTeams_jsx("i", {
    className: "fab fa-facebook-square"
  })), SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    round: true,
    color: "dribbble"
  }, SectionTeams_jsx("i", {
    className: "fab fa-dribbble"
  }))))), SectionTeams_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionTeams_jsx(Card["a" /* default */], {
    plain: true,
    profile: true
  }, SectionTeams_jsx(CardHeader["a" /* default */], {
    image: true,
    plain: true
  }, SectionTeams_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionTeams_jsx("img", {
    src: card_profile2,
    alt: "..."
  })), SectionTeams_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${card_profile2})`,
      opacity: "1"
    }
  })), SectionTeams_jsx(CardBody["a" /* default */], {
    plain: true
  }, SectionTeams_jsx("h4", {
    className: classes.cardTitle
  }, "George West"), SectionTeams_jsx(Muted["a" /* default */], null, SectionTeams_jsx("h6", {
    className: classes.cardCategory
  }, "BACKEND HACKER"))), SectionTeams_jsx(CardFooter["a" /* default */], {
    profile: true,
    plain: true,
    className: classes.justifyContent
  }, SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    round: true,
    color: "linkedin"
  }, SectionTeams_jsx("i", {
    className: "fab fa-linkedin-in"
  })), SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    round: true,
    color: "facebook"
  }, SectionTeams_jsx("i", {
    className: "fab fa-facebook-square"
  })), SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    round: true,
    color: "dribbble"
  }, SectionTeams_jsx("i", {
    className: "fab fa-dribbble"
  }))))), SectionTeams_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionTeams_jsx(Card["a" /* default */], {
    plain: true,
    profile: true
  }, SectionTeams_jsx(CardHeader["a" /* default */], {
    image: true,
    plain: true
  }, SectionTeams_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionTeams_jsx("img", {
    src: card_profile4["a" /* default */],
    alt: "..."
  })), SectionTeams_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${card_profile4["a" /* default */]})`,
      opacity: "1"
    }
  })), SectionTeams_jsx(CardBody["a" /* default */], {
    plain: true
  }, SectionTeams_jsx("h4", {
    className: classes.cardTitle
  }, "Gina Andrew"), SectionTeams_jsx(Muted["a" /* default */], null, SectionTeams_jsx("h6", {
    className: classes.cardCategory
  }, "PHOTOGRAPHER"))), SectionTeams_jsx(CardFooter["a" /* default */], {
    profile: true,
    plain: true,
    className: classes.justifyContent
  }, SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    round: true,
    color: "dribbble"
  }, SectionTeams_jsx("i", {
    className: "fab fa-dribbble"
  })), SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    round: true,
    color: "twitter"
  }, SectionTeams_jsx("i", {
    className: "fab fa-twitter"
  })))))))), SectionTeams_jsx("div", {
    className: classes.team
  }, SectionTeams_jsx("div", {
    className: classes.container
  }, SectionTeams_jsx(GridContainer["a" /* default */], null, SectionTeams_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 8,
    md: 8,
    className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
  }, SectionTeams_jsx("h2", {
    className: classes.title
  }, "The Executive Team 3"), SectionTeams_jsx("h5", {
    className: classes.description
  }, "This is the paragraph where you can write more details about your team. Keep you user engaged by providing meaningful information."))), SectionTeams_jsx(GridContainer["a" /* default */], null, SectionTeams_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, SectionTeams_jsx(Card["a" /* default */], {
    profile: true,
    plain: true,
    className: classes.card3
  }, SectionTeams_jsx(GridContainer["a" /* default */], null, SectionTeams_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 5,
    md: 5
  }, SectionTeams_jsx(CardHeader["a" /* default */], {
    image: true,
    plain: true
  }, SectionTeams_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionTeams_jsx("img", {
    src: card_profile1_square["a" /* default */],
    alt: "..."
  })), SectionTeams_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${card_profile1_square["a" /* default */]})`,
      opacity: "1"
    }
  }))), SectionTeams_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 7,
    md: 7
  }, SectionTeams_jsx(CardBody["a" /* default */], {
    plain: true
  }, SectionTeams_jsx("h4", {
    className: classes.cardTitle
  }, "Alec Thompson"), SectionTeams_jsx(Muted["a" /* default */], null, SectionTeams_jsx("h6", {
    className: classes.cardCategory
  }, "FOUNDER")), SectionTeams_jsx("p", {
    className: classes.description
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth...")), SectionTeams_jsx(CardFooter["a" /* default */], {
    profile: true,
    plain: true
  }, SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true,
    color: "twitter"
  }, SectionTeams_jsx("i", {
    className: "fab fa-twitter"
  })), SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true,
    color: "facebook"
  }, SectionTeams_jsx("i", {
    className: "fab fa-facebook-square"
  })), SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true,
    color: "google"
  }, SectionTeams_jsx("i", {
    className: "fab fa-google"
  }))))))), SectionTeams_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, SectionTeams_jsx(Card["a" /* default */], {
    profile: true,
    plain: true,
    className: classes.card3
  }, SectionTeams_jsx(GridContainer["a" /* default */], null, SectionTeams_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 5,
    md: 5
  }, SectionTeams_jsx(CardHeader["a" /* default */], {
    image: true,
    plain: true
  }, SectionTeams_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionTeams_jsx("img", {
    src: card_profile6_square["a" /* default */],
    alt: "..."
  })), SectionTeams_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${card_profile6_square["a" /* default */]})`,
      opacity: "1"
    }
  }))), SectionTeams_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 7,
    md: 7
  }, SectionTeams_jsx(CardBody["a" /* default */], {
    plain: true
  }, SectionTeams_jsx("h4", {
    className: classes.cardTitle
  }, "Kendall Andrew"), SectionTeams_jsx(Muted["a" /* default */], null, SectionTeams_jsx("h6", {
    className: classes.cardCategory
  }, "GRAPHIC DESIGNER")), SectionTeams_jsx("p", {
    className: classes.description
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth...")), SectionTeams_jsx(CardFooter["a" /* default */], {
    profile: true,
    plain: true
  }, SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true,
    color: "linkedin"
  }, SectionTeams_jsx("i", {
    className: "fab fa-linkedin-in"
  })), SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true,
    color: "facebook"
  }, SectionTeams_jsx("i", {
    className: "fab fa-facebook-square"
  })), SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true,
    color: "dribbble"
  }, SectionTeams_jsx("i", {
    className: "fab fa-dribbble"
  })), SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true,
    color: "google"
  }, SectionTeams_jsx("i", {
    className: "fab fa-google"
  }))))))), SectionTeams_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, SectionTeams_jsx(Card["a" /* default */], {
    profile: true,
    plain: true,
    className: classes.card3
  }, SectionTeams_jsx(GridContainer["a" /* default */], null, SectionTeams_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 5,
    md: 5
  }, SectionTeams_jsx(CardHeader["a" /* default */], {
    image: true,
    plain: true
  }, SectionTeams_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionTeams_jsx("img", {
    src: card_profile4_square["a" /* default */],
    alt: "..."
  })), SectionTeams_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${card_profile4_square["a" /* default */]})`,
      opacity: "1"
    }
  }))), SectionTeams_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 7,
    md: 7
  }, SectionTeams_jsx(CardBody["a" /* default */], {
    plain: true
  }, SectionTeams_jsx("h4", {
    className: classes.cardTitle
  }, "Gina Andrew"), SectionTeams_jsx(Muted["a" /* default */], null, SectionTeams_jsx("h6", {
    className: classes.cardCategory
  }, "WEB DESIGNER")), SectionTeams_jsx("p", {
    className: classes.description
  }, "I love you like Kanye loves Kanye. Don", "'", "t be scared of the truth.")), SectionTeams_jsx(CardFooter["a" /* default */], {
    profile: true,
    plain: true
  }, SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true,
    color: "youtube"
  }, SectionTeams_jsx("i", {
    className: "fab fa-youtube"
  })), SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true,
    color: "twitter"
  }, SectionTeams_jsx("i", {
    className: "fab fa-twitter"
  })), SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true,
    color: "instagram"
  }, SectionTeams_jsx("i", {
    className: "fab fa-instagram"
  }))))))), SectionTeams_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, SectionTeams_jsx(Card["a" /* default */], {
    profile: true,
    plain: true,
    className: classes.card3
  }, SectionTeams_jsx(GridContainer["a" /* default */], null, SectionTeams_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 5,
    md: 5
  }, SectionTeams_jsx(CardHeader["a" /* default */], {
    image: true,
    plain: true
  }, SectionTeams_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionTeams_jsx("img", {
    src: card_profile2_square["a" /* default */],
    alt: "..."
  })), SectionTeams_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${card_profile2_square["a" /* default */]})`,
      opacity: "1"
    }
  }))), SectionTeams_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 7,
    md: 7
  }, SectionTeams_jsx(CardBody["a" /* default */], {
    plain: true
  }, SectionTeams_jsx("h4", {
    className: classes.cardTitle
  }, "George West"), SectionTeams_jsx(Muted["a" /* default */], null, SectionTeams_jsx("h6", {
    className: classes.cardCategory
  }, "BACKEND HACKER")), SectionTeams_jsx("p", {
    className: classes.description
  }, "I love you like Kanye loves Kanye. Don", "'", "t be scared of the truth.")), SectionTeams_jsx(CardFooter["a" /* default */], {
    profile: true,
    plain: true
  }, SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true,
    color: "linkedin"
  }, SectionTeams_jsx("i", {
    className: "fab fa-linkedin-in"
  })), SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true,
    color: "facebook"
  }, SectionTeams_jsx("i", {
    className: "fab fa-facebook-square"
  })), SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true,
    color: "google"
  }, SectionTeams_jsx("i", {
    className: "fab fa-google"
  })))))))))), SectionTeams_jsx("div", {
    className: classes.team + " " + classes.section,
    style: {
      backgroundImage: `url(${bg7["a" /* default */]})`
    }
  }, SectionTeams_jsx("div", {
    className: classes.container
  }, SectionTeams_jsx(GridContainer["a" /* default */], null, SectionTeams_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 8,
    md: 8,
    className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
  }, SectionTeams_jsx("h2", {
    className: classes.title
  }, "The Executive Team 4"), SectionTeams_jsx("h5", {
    className: classes.descriptionWhite
  }, "This is the paragraph where you can write more details about your team. Keep you user engaged by providing meaningful information."))), SectionTeams_jsx(GridContainer["a" /* default */], null, SectionTeams_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionTeams_jsx(Card["a" /* default */], {
    profile: true
  }, SectionTeams_jsx(CardAvatar["a" /* default */], {
    profile: true
  }, SectionTeams_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionTeams_jsx("img", {
    src: card_profile1_square["a" /* default */],
    alt: "..."
  }))), SectionTeams_jsx(CardBody["a" /* default */], null, SectionTeams_jsx("h4", {
    className: classes.cardTitle
  }, "Alec Thompson"), SectionTeams_jsx(Muted["a" /* default */], null, SectionTeams_jsx("h6", {
    className: classes.cardCategory
  }, "CEO / CO-FOUNDER")), SectionTeams_jsx("p", {
    className: classes.description
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is...")), SectionTeams_jsx(CardFooter["a" /* default */], {
    profile: true,
    className: classes.justifyContent
  }, SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    round: true,
    color: "linkedin"
  }, SectionTeams_jsx("i", {
    className: "fab fa-linkedin-in"
  })), SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    round: true,
    color: "twitter"
  }, SectionTeams_jsx("i", {
    className: "fab fa-twitter"
  })), SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    round: true,
    color: "dribbble"
  }, SectionTeams_jsx("i", {
    className: "fab fa-dribbble"
  }))))), SectionTeams_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionTeams_jsx(Card["a" /* default */], {
    profile: true
  }, SectionTeams_jsx(CardAvatar["a" /* default */], {
    profile: true
  }, SectionTeams_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionTeams_jsx("img", {
    src: card_profile2_square["a" /* default */],
    alt: "..."
  }))), SectionTeams_jsx(CardBody["a" /* default */], null, SectionTeams_jsx("h4", {
    className: classes.cardTitle
  }, "George West"), SectionTeams_jsx(Muted["a" /* default */], null, SectionTeams_jsx("h6", {
    className: classes.cardCategory
  }, "BACKEND HACKER")), SectionTeams_jsx("p", {
    className: classes.description
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is...")), SectionTeams_jsx(CardFooter["a" /* default */], {
    profile: true,
    className: classes.justifyContent
  }, SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    round: true,
    color: "dribbble"
  }, SectionTeams_jsx("i", {
    className: "fab fa-dribbble"
  })), SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    round: true,
    color: "twitter"
  }, SectionTeams_jsx("i", {
    className: "fab fa-twitter"
  }))))), SectionTeams_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionTeams_jsx(Card["a" /* default */], {
    profile: true
  }, SectionTeams_jsx(CardAvatar["a" /* default */], {
    profile: true
  }, SectionTeams_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionTeams_jsx("img", {
    src: card_profile4_square["a" /* default */],
    alt: "..."
  }))), SectionTeams_jsx(CardBody["a" /* default */], null, SectionTeams_jsx("h4", {
    className: classes.cardTitle
  }, "Gina Andrew"), SectionTeams_jsx(Muted["a" /* default */], null, SectionTeams_jsx("h6", {
    className: classes.cardCategory
  }, "WEB DESIGNER")), SectionTeams_jsx("p", {
    className: classes.description
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is...")), SectionTeams_jsx(CardFooter["a" /* default */], {
    profile: true,
    className: classes.justifyContent
  }, SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    round: true,
    color: "dribbble"
  }, SectionTeams_jsx("i", {
    className: "fab fa-dribbble"
  })), SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    round: true,
    color: "twitter"
  }, SectionTeams_jsx("i", {
    className: "fab fa-twitter"
  })), SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    round: true,
    color: "pinterest"
  }, SectionTeams_jsx("i", {
    className: "fab fa-pinterest"
  })))))))), SectionTeams_jsx("div", {
    className: classes.team + " " + classes.section,
    style: {
      backgroundImage: `url(${city["default"]})`
    }
  }, SectionTeams_jsx("div", {
    className: classes.container
  }, SectionTeams_jsx(GridContainer["a" /* default */], null, SectionTeams_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 8,
    md: 8,
    className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
  }, SectionTeams_jsx("h2", {
    className: classes.title
  }, "The Executive Team 5"), SectionTeams_jsx("h5", {
    className: classes.descriptionWhite
  }, "This is the paragraph where you can write more details about your team. Keep you user engaged by providing meaningful information."))), SectionTeams_jsx(GridContainer["a" /* default */], null, SectionTeams_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, SectionTeams_jsx(Card["a" /* default */], {
    profile: true,
    plain: true,
    className: classes.card5
  }, SectionTeams_jsx(GridContainer["a" /* default */], null, SectionTeams_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 5,
    md: 5
  }, SectionTeams_jsx(CardHeader["a" /* default */], {
    image: true,
    plain: true
  }, SectionTeams_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionTeams_jsx("img", {
    src: card_profile1_square["a" /* default */],
    alt: "..."
  })))), SectionTeams_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 7,
    md: 7
  }, SectionTeams_jsx(CardBody["a" /* default */], {
    plain: true
  }, SectionTeams_jsx("h4", {
    className: classes.cardTitle
  }, "Alec Thompson"), SectionTeams_jsx(Muted["a" /* default */], null, SectionTeams_jsx("h6", {
    className: classes.cardCategory
  }, "FOUNDER")), SectionTeams_jsx("p", {
    className: classes.description
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth...")), SectionTeams_jsx(CardFooter["a" /* default */], {
    profile: true,
    plain: true
  }, SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true
  }, SectionTeams_jsx("i", {
    className: "fab fa-twitter"
  })), SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true
  }, SectionTeams_jsx("i", {
    className: "fab fa-facebook-square"
  })), SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true
  }, SectionTeams_jsx("i", {
    className: "fab fa-google"
  }))))))), SectionTeams_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, SectionTeams_jsx(Card["a" /* default */], {
    profile: true,
    plain: true,
    className: classes.card5
  }, SectionTeams_jsx(GridContainer["a" /* default */], null, SectionTeams_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 5,
    md: 5
  }, SectionTeams_jsx(CardHeader["a" /* default */], {
    image: true,
    plain: true
  }, SectionTeams_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionTeams_jsx("img", {
    src: card_profile6_square["a" /* default */],
    alt: "..."
  })))), SectionTeams_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 7,
    md: 7
  }, SectionTeams_jsx(CardBody["a" /* default */], {
    plain: true
  }, SectionTeams_jsx("h4", {
    className: classes.cardTitle
  }, "Kendall Andrew"), SectionTeams_jsx(Muted["a" /* default */], null, SectionTeams_jsx("h6", {
    className: classes.cardCategory
  }, "GRAPHIC DESIGNER")), SectionTeams_jsx("p", {
    className: classes.description
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth...")), SectionTeams_jsx(CardFooter["a" /* default */], {
    profile: true,
    plain: true
  }, SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true
  }, SectionTeams_jsx("i", {
    className: "fab fa-linkedin-in"
  })), SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true
  }, SectionTeams_jsx("i", {
    className: "fab fa-facebook-square"
  })), SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true
  }, SectionTeams_jsx("i", {
    className: "fab fa-dribbble"
  })), SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true
  }, SectionTeams_jsx("i", {
    className: "fab fa-google"
  }))))))), SectionTeams_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, SectionTeams_jsx(Card["a" /* default */], {
    profile: true,
    plain: true,
    className: classes.card5
  }, SectionTeams_jsx(GridContainer["a" /* default */], null, SectionTeams_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 5,
    md: 5
  }, SectionTeams_jsx(CardHeader["a" /* default */], {
    image: true,
    plain: true
  }, SectionTeams_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionTeams_jsx("img", {
    src: card_profile4_square["a" /* default */],
    alt: "..."
  })))), SectionTeams_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 7,
    md: 7
  }, SectionTeams_jsx(CardBody["a" /* default */], {
    plain: true
  }, SectionTeams_jsx("h4", {
    className: classes.cardTitle
  }, "Gina Andrew"), SectionTeams_jsx(Muted["a" /* default */], null, SectionTeams_jsx("h6", {
    className: classes.cardCategory
  }, "WEB DESIGNER")), SectionTeams_jsx("p", {
    className: classes.description
  }, "I love you like Kanye loves Kanye. Don", "'", "t be scared of the truth.")), SectionTeams_jsx(CardFooter["a" /* default */], {
    profile: true,
    plain: true
  }, SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true
  }, SectionTeams_jsx("i", {
    className: "fab fa-youtube"
  })), SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true
  }, SectionTeams_jsx("i", {
    className: "fab fa-twitter"
  })), SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true
  }, SectionTeams_jsx("i", {
    className: "fab fa-instagram"
  }))))))), SectionTeams_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, SectionTeams_jsx(Card["a" /* default */], {
    profile: true,
    plain: true,
    className: classes.card5
  }, SectionTeams_jsx(GridContainer["a" /* default */], null, SectionTeams_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 5,
    md: 5
  }, SectionTeams_jsx(CardHeader["a" /* default */], {
    image: true,
    plain: true
  }, SectionTeams_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionTeams_jsx("img", {
    src: card_profile2_square["a" /* default */],
    alt: "..."
  })))), SectionTeams_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 7,
    md: 7
  }, SectionTeams_jsx(CardBody["a" /* default */], {
    plain: true
  }, SectionTeams_jsx("h4", {
    className: classes.cardTitle
  }, "George West"), SectionTeams_jsx(Muted["a" /* default */], null, SectionTeams_jsx("h6", {
    className: classes.cardCategory
  }, "BACKEND HACKER")), SectionTeams_jsx("p", {
    className: classes.description
  }, "I love you like Kanye loves Kanye. Don", "'", "t be scared of the truth.")), SectionTeams_jsx(CardFooter["a" /* default */], {
    profile: true,
    plain: true
  }, SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true
  }, SectionTeams_jsx("i", {
    className: "fab fa-linkedin-in"
  })), SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true
  }, SectionTeams_jsx("i", {
    className: "fab fa-facebook-square"
  })), SectionTeams_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true
  }, SectionTeams_jsx("i", {
    className: "fab fa-google"
  })))))))))));
}
// EXTERNAL MODULE: external "@material-ui/core/Icon"
var Icon_ = __webpack_require__("7vM9");
var Icon_default = /*#__PURE__*/__webpack_require__.n(Icon_);

// EXTERNAL MODULE: external "@material-ui/icons/Build"
var Build_ = __webpack_require__("Ao/0");
var Build_default = /*#__PURE__*/__webpack_require__.n(Build_);

// EXTERNAL MODULE: external "@material-ui/icons/Subject"
var Subject_ = __webpack_require__("7+h0");
var Subject_default = /*#__PURE__*/__webpack_require__.n(Subject_);

// EXTERNAL MODULE: external "@material-ui/icons/Timeline"
var Timeline_ = __webpack_require__("jRhr");
var Timeline_default = /*#__PURE__*/__webpack_require__.n(Timeline_);

// EXTERNAL MODULE: external "@material-ui/icons/Group"
var Group_ = __webpack_require__("2BDn");
var Group_default = /*#__PURE__*/__webpack_require__.n(Group_);

// EXTERNAL MODULE: ./components/NavPills/NavPills.js + 1 modules
var NavPills = __webpack_require__("SuH/");

// EXTERNAL MODULE: ./components/Badge/Badge.js + 1 modules
var Badge = __webpack_require__("XY9v");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/pages/sectionsSections/projectsStyle.js
function projectsStyle_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function projectsStyle_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { projectsStyle_ownKeys(Object(source), true).forEach(function (key) { projectsStyle_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { projectsStyle_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function projectsStyle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const projectsSection = {
  container: nextjs_material_tim_andrus["h" /* container */],
  mlAuto: nextjs_material_tim_andrus["B" /* mlAuto */],
  mrAuto: nextjs_material_tim_andrus["C" /* mrAuto */],
  title: nextjs_material_tim_andrus["S" /* title */],
  description: nextjs_material_tim_andrus["n" /* description */],
  coloredShadow: nextjs_material_tim_andrus["g" /* coloredShadow */],
  cardTitle: nextjs_material_tim_andrus["f" /* cardTitle */],
  textCenter: {
    textAlign: "center"
  },
  projects: {
    padding: "80px 0"
  },
  tabSpace: {
    padding: "20px 0 50px 0px"
  },
  cardCategory: {
    color: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Z" /* whiteColor */]) + ", 0.7) !important",
    marginTop: "10px"
  },
  cardTitleWhite: projectsStyle_objectSpread({}, nextjs_material_tim_andrus["f" /* cardTitle */], {
    color: nextjs_material_tim_andrus["Z" /* whiteColor */] + "  !important",
    marginTop: "10px !important"
  }),
  cardDescription: {
    color: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Z" /* whiteColor */]) + ", 0.7) !important"
  },
  sectionSpace: {
    height: "70px",
    display: "block"
  },
  marginTop20: {
    marginTop: "20px"
  },
  card2: {
    textAlign: "center"
  },
  sectionDark: projectsStyle_objectSpread({}, nextjs_material_tim_andrus["N" /* sectionDark */], {
    backgroundSize: "550% 450%",
    "& $title, & $cardTitle": {
      color: nextjs_material_tim_andrus["Z" /* whiteColor */]
    },
    "& $cardCategory": {
      color: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Z" /* whiteColor */]) + ", 0.5) !important"
    },
    "& $cardDescription": {
      color: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Z" /* whiteColor */]) + ", 0.76) !important"
    }
  }),
  projects3: {
    "& $title": {
      marginBottom: "80px",
      marginTop: "5px"
    },
    "& h6": {
      marginBottom: "5px"
    }
  },
  card4: {
    marginTop: "0",
    marginBottom: "0",
    "& $cardTitle": {
      color: nextjs_material_tim_andrus["Z" /* whiteColor */]
    }
  },
  cardBody4: {
    paddingTop: "140px",
    paddingBottom: "140px"
  },
  info4: {
    padding: "0"
  },
  projects4: {
    "& hr": {
      margin: "70px auto",
      maxWidth: "970px"
    }
  }
};
/* harmony default export */ var projectsStyle = (projectsSection);
// EXTERNAL MODULE: ./assets/img/examples/card-blog3.jpg
var card_blog3 = __webpack_require__("9Pkz");

// CONCATENATED MODULE: ./assets/img/examples/card-project1.jpg
/* harmony default export */ var card_project1 = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NhcmQtcHJvamVjdDEuanBnIjs=");
// CONCATENATED MODULE: ./assets/img/examples/card-project2.jpg
/* harmony default export */ var card_project2 = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NhcmQtcHJvamVjdDIuanBnIjs=");
// CONCATENATED MODULE: ./assets/img/examples/card-project3.jpg
/* harmony default export */ var card_project3 = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NhcmQtcHJvamVjdDMuanBnIjs=");
// CONCATENATED MODULE: ./assets/img/examples/card-project4.jpg
/* harmony default export */ var card_project4 = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NhcmQtcHJvamVjdDQuanBnIjs=");
// CONCATENATED MODULE: ./assets/img/examples/card-project5.jpg
/* harmony default export */ var card_project5 = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NhcmQtcHJvamVjdDUuanBnIjs=");
// EXTERNAL MODULE: ./assets/img/examples/card-project6.jpg
var card_project6 = __webpack_require__("d+m7");

// CONCATENATED MODULE: ./pages-sections/sections-page/SectionProjects.js
var SectionProjects_jsx = external_react_default.a.createElement;
function SectionProjects_extends() { return SectionProjects_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, SectionProjects_extends.apply(null, arguments); }
/* eslint-disable */

// @material-ui/core components


// @material-ui/icons







// core components



















const SectionProjects_useStyles = Object(styles_["makeStyles"])(projectsStyle);
function SectionProjects(_ref) {
  let rest = Object.assign({}, _ref);
  const classes = SectionProjects_useStyles();
  return SectionProjects_jsx("div", SectionProjects_extends({
    className: "cd-section"
  }, rest), SectionProjects_jsx("div", {
    className: classes.projects
  }, SectionProjects_jsx("div", {
    className: classes.container
  }, SectionProjects_jsx(GridContainer["a" /* default */], null, SectionProjects_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 8,
    md: 8,
    className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
  }, SectionProjects_jsx("h2", {
    className: classes.title
  }, "Some of Our Awesome Products - 1"), SectionProjects_jsx(NavPills["a" /* default */], {
    alignCenter: true,
    color: "rose",
    tabs: [{
      tabButton: "All",
      tabContent: ""
    }, {
      tabButton: "Marketing",
      tabContent: ""
    }, {
      tabButton: "Development",
      tabContent: ""
    }, {
      tabButton: "Productivity",
      tabContent: ""
    }, {
      tabButton: "Web Design",
      tabContent: ""
    }]
  }), SectionProjects_jsx("div", {
    className: classes.tabSpace
  }))), SectionProjects_jsx(GridContainer["a" /* default */], null, SectionProjects_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, SectionProjects_jsx(Card["a" /* default */], {
    raised: true,
    background: true,
    style: {
      backgroundImage: `url(${office2["a" /* default */]})`
    }
  }, SectionProjects_jsx(CardBody["a" /* default */], {
    background: true
  }, SectionProjects_jsx("h6", {
    className: classes.cardCategory
  }, "PRODUCTIVITY"), SectionProjects_jsx("a", {
    href: "#pablito",
    onClick: e => e.preventDefault()
  }, SectionProjects_jsx("h3", {
    className: classes.cardTitleWhite
  }, "The Best Productivity Apps on Market")), SectionProjects_jsx("p", {
    className: classes.cardDescription
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is..."), SectionProjects_jsx(Button["a" /* default */], {
    round: true,
    color: "danger"
  }, SectionProjects_jsx(Icon_default.a, null, "content_copy"), " View App")))), SectionProjects_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, SectionProjects_jsx(Card["a" /* default */], {
    raised: true,
    background: true,
    style: {
      backgroundImage: `url(${card_blog3["a" /* default */]})`
    }
  }, SectionProjects_jsx(CardBody["a" /* default */], {
    background: true
  }, SectionProjects_jsx("h6", {
    className: classes.cardCategory
  }, "DESIGN"), SectionProjects_jsx("a", {
    href: "#pablito",
    onClick: e => e.preventDefault()
  }, SectionProjects_jsx("h3", {
    className: classes.cardTitleWhite
  }, "The Sculpture Where Details Matter")), SectionProjects_jsx("p", {
    className: classes.cardDescription
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is..."), SectionProjects_jsx(Button["a" /* default */], {
    round: true,
    color: "info"
  }, SectionProjects_jsx(Build_default.a, null), "View Project")))), SectionProjects_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 12
  }, SectionProjects_jsx(Card["a" /* default */], {
    raised: true,
    background: true,
    style: {
      backgroundImage: `url(${card_project6["a" /* default */]})`
    }
  }, SectionProjects_jsx(CardBody["a" /* default */], {
    background: true
  }, SectionProjects_jsx("h6", {
    className: classes.cardCategory
  }, "MARKETING"), SectionProjects_jsx("a", {
    href: "#pablito",
    onClick: e => e.preventDefault()
  }, SectionProjects_jsx("h3", {
    className: classes.cardTitleWhite
  }, "0 to 100.000 Customers in 6 months")), SectionProjects_jsx("p", {
    className: classes.cardDescription
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is..."), SectionProjects_jsx(Button["a" /* default */], {
    round: true,
    color: "warning"
  }, SectionProjects_jsx(Subject_default.a, null), " Case study"))))))), SectionProjects_jsx("div", {
    className: classes.projects
  }, SectionProjects_jsx("div", {
    className: classes.container
  }, SectionProjects_jsx(GridContainer["a" /* default */], null, SectionProjects_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 8,
    md: 8,
    className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
  }, SectionProjects_jsx(Muted["a" /* default */], null, SectionProjects_jsx("h6", null, "OUR WORK")), SectionProjects_jsx("h2", {
    className: classes.title
  }, "Some of Our Awesome Products - 2"), SectionProjects_jsx("h5", {
    className: classes.description
  }, "This is the paragraph where you can write more details about your projects. Keep you user engaged by providing meaningful information."), SectionProjects_jsx("div", {
    className: classes.sectionSpace
  }))), SectionProjects_jsx(GridContainer["a" /* default */], null, SectionProjects_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionProjects_jsx(Card["a" /* default */], {
    plain: true,
    className: classes.card2
  }, SectionProjects_jsx("a", {
    href: "https://www.nowsta.com",
    target: "_blank"
  }, SectionProjects_jsx(CardHeader["a" /* default */], {
    image: true,
    plain: true
  }, SectionProjects_jsx("img", {
    src: "https://s3.amazonaws.com/creativetim_bucket/products/217/original/opt_mk_nextjs_thumbnail.jpg?1525851474",
    alt: "..."
  }), SectionProjects_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: "url('https://s3.amazonaws.com/creativetim_bucket/products/217/original/opt_mk_nextjs_thumbnail.jpg?1525851474')",
      opacity: "1"
    }
  }))), SectionProjects_jsx(CardBody["a" /* default */], {
    plain: true
  }, SectionProjects_jsx("a", {
    href: "https://www.nowsta.com",
    target: "_blank"
  }, SectionProjects_jsx("h4", {
    className: classes.cardTitle
  }, "Timothy Andrus")), SectionProjects_jsx("h6", {
    className: classes.description
  }, "FREE UI KIT COMING SOON"), SectionProjects_jsx("p", {
    className: classes.description + " " + classes.marginTop20
  }, "It is a Free Material-UI Kit with a fresh, new design inspired by Google's material design. It", "'", "s a great pleasure to introduce to you the material concepts in an easy to use and beautiful set of components.")))), SectionProjects_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionProjects_jsx(Card["a" /* default */], {
    plain: true,
    className: classes.card2
  }, SectionProjects_jsx("a", {
    href: "https://www.nowsta.com",
    target: "_blank"
  }, SectionProjects_jsx(CardHeader["a" /* default */], {
    image: true,
    plain: true
  }, SectionProjects_jsx("img", {
    src: "https://s3.amazonaws.com/creativetim_bucket/products/66/thumb/opt_lbdp_react_thumbnail.jpg?1509466309",
    alt: "..."
  }), SectionProjects_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: "url('https://s3.amazonaws.com/creativetim_bucket/products/66/thumb/opt_lbdp_react_thumbnail.jpg?1509466309')",
      opacity: "1"
    }
  }))), SectionProjects_jsx(CardBody["a" /* default */], {
    plain: true
  }, SectionProjects_jsx("a", {
    href: "https://www.nowst.com",
    target: "_blank"
  }, SectionProjects_jsx("h4", {
    className: classes.cardTitle
  }, "Light Bootstrap Dashboard For React")), SectionProjects_jsx("h6", {
    className: classes.description
  }, "Premium Template"), SectionProjects_jsx("p", {
    className: classes.description + " " + classes.marginTop20
  }, "Light Bootstrap Dashboard For React is a Bootstrap 4 Admin Theme designed to look simple and beautiful. Forget about boring dashboards and grab yourself a copy to kickstart new project!")))), SectionProjects_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionProjects_jsx(Card["a" /* default */], {
    plain: true,
    className: classes.card2
  }, SectionProjects_jsx("a", {
    href: "https://www.nowst.com",
    target: "_blank"
  }, SectionProjects_jsx(CardHeader["a" /* default */], {
    image: true,
    plain: true
  }, SectionProjects_jsx("img", {
    src: "https://s3.amazonaws.com/creativetim_bucket/products/73/original/opt_nudp_react_thumbnail.jpg?1518533306",
    alt: "..."
  }), SectionProjects_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: "url('https://s3.amazonaws.com/creativetim_bucket/products/73/original/opt_nudp_react_thumbnail.jpg?1518533306')",
      opacity: "1"
    }
  }))), SectionProjects_jsx(CardBody["a" /* default */], {
    plain: true
  }, SectionProjects_jsx("a", {
    href: "https://www.nowsta.com",
    target: "_blank"
  }, SectionProjects_jsx("h4", {
    className: classes.cardTitle
  }, "Coming Soon UI Dashboard For React")), SectionProjects_jsx("h6", {
    className: classes.description
  }, "Premium Template"), SectionProjects_jsx("p", {
    className: classes.description + " " + classes.marginTop20
  }, "Now UI Dashboard React is an admin dashboard template designed by Invision and coded by Tim Andrus. It is built on top of Reactstrap, using Now UI Dashboard and it is fully responsive."))))))), SectionProjects_jsx("div", {
    className: classes.projects + " " + classes.sectionDark + " " + classes.projects3
  }, SectionProjects_jsx("div", {
    className: classes.container
  }, SectionProjects_jsx(GridContainer["a" /* default */], null, SectionProjects_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 8,
    md: 8,
    className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
  }, SectionProjects_jsx(Muted["a" /* default */], null, SectionProjects_jsx("h6", null, "OUR WORK")), SectionProjects_jsx("h2", {
    className: classes.title
  }, "Some of Our Awesome Products - 3"))), SectionProjects_jsx(GridContainer["a" /* default */], null, SectionProjects_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 5,
    md: 5,
    className: classes.mlAuto
  }, SectionProjects_jsx(Card["a" /* default */], {
    plain: true,
    className: classes.card2
  }, SectionProjects_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionProjects_jsx(CardHeader["a" /* default */], {
    plain: true,
    image: true
  }, SectionProjects_jsx("img", {
    src: card_project1,
    alt: "..."
  }))), SectionProjects_jsx(CardBody["a" /* default */], null, SectionProjects_jsx("h6", {
    className: classes.cardCategory
  }, "WEB DESIGN"), SectionProjects_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionProjects_jsx("h4", {
    className: classes.cardTitle
  }, "Famous Website Redesign")), SectionProjects_jsx("p", {
    className: classes.cardDescription
  }, "Don", "'", "t be scared of the truth because we need to restart the human foundation in truth.")))), SectionProjects_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 5,
    md: 5,
    className: classes.mrAuto
  }, SectionProjects_jsx(Card["a" /* default */], {
    plain: true,
    className: classes.card2
  }, SectionProjects_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionProjects_jsx(CardHeader["a" /* default */], {
    plain: true,
    image: true
  }, SectionProjects_jsx("img", {
    src: card_project2,
    alt: "..."
  }))), SectionProjects_jsx(CardBody["a" /* default */], null, SectionProjects_jsx("h6", {
    className: classes.cardCategory
  }, "PRODUCTIVITY TOOLS"), SectionProjects_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionProjects_jsx("h4", {
    className: classes.cardTitle
  }, "Beautiful Desktop for Designers")), SectionProjects_jsx("p", {
    className: classes.cardDescription
  }, "Don", "'", "t be scared of the truth because we need to restart the human foundation in truth.")))), SectionProjects_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 5,
    md: 5,
    className: classes.mlAuto
  }, SectionProjects_jsx(Card["a" /* default */], {
    plain: true,
    className: classes.card2
  }, SectionProjects_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionProjects_jsx(CardHeader["a" /* default */], {
    plain: true,
    image: true
  }, SectionProjects_jsx("img", {
    src: card_project3,
    alt: "..."
  }))), SectionProjects_jsx(CardBody["a" /* default */], null, SectionProjects_jsx("h6", {
    className: classes.cardCategory
  }, "ANDROID APP"), SectionProjects_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionProjects_jsx("h4", {
    className: classes.cardTitle
  }, "Analytics for Android")), SectionProjects_jsx("p", {
    className: classes.cardDescription
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth.")))), SectionProjects_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 5,
    md: 5,
    className: classes.mrAuto
  }, SectionProjects_jsx(Card["a" /* default */], {
    plain: true,
    className: classes.card2
  }, SectionProjects_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionProjects_jsx(CardHeader["a" /* default */], {
    plain: true,
    image: true
  }, SectionProjects_jsx("img", {
    src: card_project4,
    alt: "..."
  }))), SectionProjects_jsx(CardBody["a" /* default */], null, SectionProjects_jsx("h6", {
    className: classes.cardCategory
  }, "WEBSITE"), SectionProjects_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionProjects_jsx("h4", {
    className: classes.cardTitle
  }, "Behance Redesign")), SectionProjects_jsx("p", {
    className: classes.cardDescription
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth."))))))), SectionProjects_jsx("div", {
    className: classes.projects + " " + classes.projects4
  }, SectionProjects_jsx("div", {
    className: classes.container
  }, SectionProjects_jsx(GridContainer["a" /* default */], null, SectionProjects_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 8,
    md: 8,
    className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
  }, SectionProjects_jsx("h2", {
    className: classes.title
  }, "Some of Our Awesome Products - 4"), SectionProjects_jsx("h5", {
    className: classes.description
  }, "This is the paragraph where you can write more details about your projects. Keep you user engaged by providing meaningful information."), SectionProjects_jsx("div", {
    className: classes.sectionSpace
  }))), SectionProjects_jsx(GridContainer["a" /* default */], null, SectionProjects_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 5,
    md: 5,
    className: classes.mlAuto
  }, SectionProjects_jsx(Card["a" /* default */], {
    background: true,
    className: classes.card4,
    style: {
      backgroundImage: `url(${card_project2})`
    }
  }, SectionProjects_jsx(CardBody["a" /* default */], {
    background: true,
    className: classes.cardBody4
  }, SectionProjects_jsx(Badge["a" /* default */], {
    color: "rose"
  }, "Client: Apple"), SectionProjects_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault
  }, SectionProjects_jsx("h3", {
    className: classes.cardTitle
  }, "Beautiful Project"), SectionProjects_jsx("p", {
    className: classes.cardDescription
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth."))))), SectionProjects_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 5,
    md: 5,
    className: classes.mrAuto
  }, SectionProjects_jsx(InfoArea["a" /* default */], {
    className: classes.info4,
    title: "Graphic Design",
    description: "We've created the design of the website using modern Technologies like Sketch. It was a very interesting collaboration.",
    icon: FormatPaint_default.a,
    iconColor: "info"
  }), SectionProjects_jsx(InfoArea["a" /* default */], {
    className: classes.info4,
    title: "Fully Coded in HTML5",
    description: "We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub.",
    icon: Code_default.a,
    iconColor: "primary"
  }), SectionProjects_jsx(InfoArea["a" /* default */], {
    className: classes.info4,
    title: "CMS Admin Dashboard",
    description: "There is also a Fully Customizable CMS Admin Dashboard for this product.",
    icon: Dashboard_default.a,
    iconColor: "danger"
  }))), SectionProjects_jsx("hr", null), SectionProjects_jsx(GridContainer["a" /* default */], null, SectionProjects_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 5,
    md: 5,
    className: classes.mlAuto
  }, SectionProjects_jsx(InfoArea["a" /* default */], {
    className: classes.info4,
    title: "Marketing",
    description: "I've created the marketing campaign of the website. It was a very interesting collaboration.",
    icon: Timeline_default.a,
    iconColor: "rose"
  }), SectionProjects_jsx(InfoArea["a" /* default */], {
    className: classes.info4,
    title: "Fully Coded in HTML5",
    description: "I've developed the website with HTML5 and CSS3. The client has access to the code using GitHub.",
    icon: Code_default.a,
    iconColor: "success"
  }), SectionProjects_jsx(InfoArea["a" /* default */], {
    className: classes.info4,
    title: "Built Audience",
    description: "There is also a Fully Customizable CMS Admin Dashboard for this product.",
    icon: Group_default.a,
    iconColor: "info"
  })), SectionProjects_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 5,
    md: 5,
    className: classes.mrAuto
  }, SectionProjects_jsx(Card["a" /* default */], {
    background: true,
    className: classes.card4,
    style: {
      backgroundImage: `url(${card_project5})`
    }
  }, SectionProjects_jsx(CardBody["a" /* default */], {
    background: true,
    className: classes.cardBody4
  }, SectionProjects_jsx(Badge["a" /* default */], {
    color: "rose"
  }, "CLIENT: DJ KHALED"), SectionProjects_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault
  }, SectionProjects_jsx("h3", {
    className: classes.cardTitle
  }, "Another One"), SectionProjects_jsx("p", {
    className: classes.cardDescription
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth.")))))))));
}
// EXTERNAL MODULE: external "@material-ui/icons/Weekend"
var Weekend_ = __webpack_require__("+bV1");
var Weekend_default = /*#__PURE__*/__webpack_require__.n(Weekend_);

// EXTERNAL MODULE: external "@material-ui/icons/Home"
var Home_ = __webpack_require__("YZXy");
var Home_default = /*#__PURE__*/__webpack_require__.n(Home_);

// EXTERNAL MODULE: external "@material-ui/icons/Business"
var Business_ = __webpack_require__("XcKE");
var Business_default = /*#__PURE__*/__webpack_require__.n(Business_);

// EXTERNAL MODULE: external "@material-ui/icons/AccountBalance"
var AccountBalance_ = __webpack_require__("vhhE");
var AccountBalance_default = /*#__PURE__*/__webpack_require__.n(AccountBalance_);

// EXTERNAL MODULE: external "@material-ui/icons/Check"
var Check_ = __webpack_require__("9qvJ");
var Check_default = /*#__PURE__*/__webpack_require__.n(Check_);

// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__("j08L");
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);

// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/pages/sectionsSections/pricingStyle.js
function pricingStyle_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function pricingStyle_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { pricingStyle_ownKeys(Object(source), true).forEach(function (key) { pricingStyle_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { pricingStyle_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function pricingStyle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const pricingSection = {
  container: nextjs_material_tim_andrus["h" /* container */],
  mlAuto: nextjs_material_tim_andrus["B" /* mlAuto */],
  mrAuto: nextjs_material_tim_andrus["C" /* mrAuto */],
  title: nextjs_material_tim_andrus["S" /* title */],
  cardTitle: nextjs_material_tim_andrus["f" /* cardTitle */],
  description: nextjs_material_tim_andrus["n" /* description */],
  cardTitleWhite: pricingStyle_objectSpread({}, nextjs_material_tim_andrus["f" /* cardTitle */], {
    color: nextjs_material_tim_andrus["Z" /* whiteColor */] + "  !important"
  }),
  sectionGray: {
    background: nextjs_material_tim_andrus["s" /* grayColor */][14]
  },
  section: pricingStyle_objectSpread({}, nextjs_material_tim_andrus["M" /* section */], {}, nextjs_material_tim_andrus["N" /* sectionDark */], {
    position: "relative",
    "& $container": {
      position: "relative",
      zIndex: "2"
    },
    "& $description": {
      color: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Z" /* whiteColor */]) + ", 0.5)"
    },
    "& $cardCategory": {
      color: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Z" /* whiteColor */]) + ", 0.76)"
    },
    "& $title": {
      color: nextjs_material_tim_andrus["Z" /* whiteColor */],
      marginBottom: "10px"
    },
    "&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''",
      backgroundColor: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.7)"
    }
  }),
  pricing1: {
    "&$section:after": {
      backgroundColor: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.8)"
    }
  },
  pricing: {
    padding: "80px 0"
  },
  textCenter: {
    textAlign: "center"
  },
  sectionSpace: {
    height: "70px",
    display: "block"
  },
  cardCategory: pricingStyle_objectSpread({}, nextjs_material_tim_andrus["n" /* description */]),
  cardCategoryWhite: {
    color: nextjs_material_tim_andrus["Z" /* whiteColor */]
  },
  cardDescription: pricingStyle_objectSpread({}, nextjs_material_tim_andrus["n" /* description */]),
  justifyContentCenter: {
    WebkitBoxPack: "center !important",
    MsFlexPack: "center !important",
    justifyContent: "center !important"
  },
  icon: {
    color: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Z" /* whiteColor */]) + ", 0.76)",
    margin: "10px auto 0",
    width: "130px",
    height: "130px",
    border: "1px solid " + nextjs_material_tim_andrus["s" /* grayColor */][14],
    borderRadius: "50%",
    lineHeight: "174px",
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      fontSize: "55px",
      lineHeight: "55px"
    },
    "& svg": {
      width: "55px",
      height: "55px"
    }
  },
  iconWhite: {
    color: nextjs_material_tim_andrus["Z" /* whiteColor */]
  },
  iconRose: {
    color: nextjs_material_tim_andrus["K" /* roseColor */][0]
  },
  marginTop30: {
    marginTop: "30px"
  },
  marginBottom20: {
    marginBottom: "20px"
  },
  marginBottom30: {
    marginBottom: "30px"
  }
};
/* harmony default export */ var pricingStyle = (pricingSection);
// CONCATENATED MODULE: ./assets/img/bg11.jpg
/* harmony default export */ var bg11 = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2JnMTEuanBnIjs=");
// CONCATENATED MODULE: ./pages-sections/sections-page/SectionPricing.js
var SectionPricing_jsx = external_react_default.a.createElement;

function SectionPricing_extends() { SectionPricing_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SectionPricing_extends.apply(this, arguments); }

 // @material-ui/core components

 // @material-ui/icons






 // core components














const SectionPricing_useStyles = Object(styles_["makeStyles"])(pricingStyle);
function SectionPricing(_ref) {
  let rest = Object.assign({}, _ref);
  const classes = SectionPricing_useStyles();
  return SectionPricing_jsx("div", SectionPricing_extends({
    className: "cd-section"
  }, rest), SectionPricing_jsx("div", {
    className: classes.pricing + " " + classes.pricing1 + " " + classes.section,
    style: {
      backgroundImage: `url(${bg11})`
    }
  }, SectionPricing_jsx("div", {
    className: classes.container
  }, SectionPricing_jsx(GridContainer["a" /* default */], null, SectionPricing_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
  }, SectionPricing_jsx("h2", {
    className: classes.title
  }, "Pick the best plan for you"), SectionPricing_jsx("h5", {
    className: classes.description
  }, "You have Free Unlimited Updates and Premium Support on each package."), SectionPricing_jsx("div", {
    className: classes.sectionSpace
  }))), SectionPricing_jsx(GridContainer["a" /* default */], null, SectionPricing_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 3
  }, SectionPricing_jsx(Card["a" /* default */], {
    pricing: true,
    plain: true
  }, SectionPricing_jsx(CardBody["a" /* default */], {
    pricing: true,
    plain: true
  }, SectionPricing_jsx("h6", {
    className: classes.cardCategory + " " + classes.marginBottom20
  }, "Freelancer"), SectionPricing_jsx("div", {
    className: classes.icon
  }, SectionPricing_jsx(Weekend_default.a, {
    className: classes.iconWhite
  })), SectionPricing_jsx("h3", {
    className: classes.cardTitleWhite + " " + classes.marginTop30
  }, "FREE"), SectionPricing_jsx("p", {
    className: classes.cardCategory
  }, "This is good if your company size is between 2 and 10 Persons."), SectionPricing_jsx(Button["a" /* default */], {
    round: true,
    color: "white"
  }, "Choose plan")))), SectionPricing_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 3
  }, SectionPricing_jsx(Card["a" /* default */], {
    pricing: true,
    raised: true
  }, SectionPricing_jsx(CardBody["a" /* default */], {
    pricing: true
  }, SectionPricing_jsx("h6", {
    className: classes.cardDescription + " " + classes.marginBottom20
  }, "SMALL COMPANY"), SectionPricing_jsx("div", {
    className: classes.icon
  }, SectionPricing_jsx(Home_default.a, {
    className: classes.iconRose
  })), SectionPricing_jsx("h3", {
    className: classes.cardTitle + " " + classes.marginTop30
  }, "$29"), SectionPricing_jsx("p", {
    className: classes.cardDescription
  }, "This is good if your company size is between 2 and 10 Persons."), SectionPricing_jsx(Button["a" /* default */], {
    round: true,
    color: "rose"
  }, "Choose plan")))), SectionPricing_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 3
  }, SectionPricing_jsx(Card["a" /* default */], {
    pricing: true,
    plain: true
  }, SectionPricing_jsx(CardBody["a" /* default */], {
    pricing: true,
    plain: true
  }, SectionPricing_jsx("h6", {
    className: classes.cardCategory + " " + classes.marginBottom20
  }, "MEDIUM COMPANY"), SectionPricing_jsx("div", {
    className: classes.icon
  }, SectionPricing_jsx(Business_default.a, {
    className: classes.iconWhite
  })), SectionPricing_jsx("h3", {
    className: classes.cardTitleWhite + " " + classes.marginTop30
  }, "$69"), SectionPricing_jsx("p", {
    className: classes.cardCategory
  }, "This is good if your company size is between 11 and 99 Persons."), SectionPricing_jsx(Button["a" /* default */], {
    round: true,
    color: "white"
  }, "Choose plan")))), SectionPricing_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 3
  }, SectionPricing_jsx(Card["a" /* default */], {
    pricing: true,
    plain: true
  }, SectionPricing_jsx(CardBody["a" /* default */], {
    pricing: true,
    plain: true
  }, SectionPricing_jsx("h6", {
    className: classes.cardCategory + " " + classes.marginBottom20
  }, "ENTERPRISE"), SectionPricing_jsx("div", {
    className: classes.icon
  }, SectionPricing_jsx(AccountBalance_default.a, {
    className: classes.iconWhite
  })), SectionPricing_jsx("h3", {
    className: classes.cardTitleWhite + " " + classes.marginTop30
  }, "$159"), SectionPricing_jsx("p", {
    className: classes.cardCategory
  }, "This is good if your company size is 99+ persons."), SectionPricing_jsx(Button["a" /* default */], {
    round: true,
    color: "white"
  }, "Choose plan"))))))), SectionPricing_jsx("div", {
    className: classes.pricing
  }, SectionPricing_jsx("div", {
    className: classes.container
  }, SectionPricing_jsx(GridContainer["a" /* default */], null, SectionPricing_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
  }, SectionPricing_jsx("h2", {
    className: classes.title
  }, "Pick the best plan for you"), SectionPricing_jsx(NavPills["a" /* default */], {
    alignCenter: true,
    color: "rose",
    tabs: [{
      tabButton: "Monthly",
      tabContent: ""
    }, {
      tabButton: "Yearly",
      tabContent: ""
    }]
  }), SectionPricing_jsx("div", {
    className: classes.sectionSpace
  }))), SectionPricing_jsx(GridContainer["a" /* default */], null, SectionPricing_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionPricing_jsx(Card["a" /* default */], {
    pricing: true,
    plain: true
  }, SectionPricing_jsx(CardBody["a" /* default */], {
    pricing: true,
    plain: true
  }, SectionPricing_jsx("h6", {
    className: classes.cardCategory
  }, "FREE"), SectionPricing_jsx("h1", {
    className: classes.cardTitle
  }, SectionPricing_jsx("small", null, "$"), " 0 ", SectionPricing_jsx("small", null, "/mo")), SectionPricing_jsx("ul", null, SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "1"), " Project"), SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "5"), " Team Members"), SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "55"), " Personal Contacts"), SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "5.000"), " Messages"))), SectionPricing_jsx(CardFooter["a" /* default */], {
    pricing: true,
    className: classes.justifyContentCenter
  }, SectionPricing_jsx(Button["a" /* default */], {
    color: "rose",
    round: true
  }, "Get Started")))), SectionPricing_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionPricing_jsx(Card["a" /* default */], {
    pricing: true,
    raised: true,
    background: true,
    style: {
      backgroundImage: `url(${card_blog3["a" /* default */]})`
    }
  }, SectionPricing_jsx(CardBody["a" /* default */], {
    pricing: true,
    background: true
  }, SectionPricing_jsx("h6", {
    className: classes.cardCategoryWhite
  }, "PREMIUM"), SectionPricing_jsx("h1", {
    className: classes.cardTitleWhite
  }, SectionPricing_jsx("small", null, "$"), " 89 ", SectionPricing_jsx("small", null, "/mo")), SectionPricing_jsx("ul", null, SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "500"), " Projects"), SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "50"), " Team Members"), SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "125"), " Personal Contacts"), SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "15.000"), " Messages"))), SectionPricing_jsx(CardFooter["a" /* default */], {
    pricing: true,
    className: classes.justifyContentCenter
  }, SectionPricing_jsx(Button["a" /* default */], {
    color: "white",
    round: true
  }, "Get Started")))), SectionPricing_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionPricing_jsx(Card["a" /* default */], {
    pricing: true,
    plain: true
  }, SectionPricing_jsx(CardBody["a" /* default */], {
    pricing: true,
    plain: true
  }, SectionPricing_jsx("h6", {
    className: classes.cardCategory
  }, "PLATINUM"), SectionPricing_jsx("h1", {
    className: classes.cardTitle
  }, SectionPricing_jsx("small", null, "$"), " 199 ", SectionPricing_jsx("small", null, "/mo")), SectionPricing_jsx("ul", null, SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "1000"), " Projects"), SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "100"), " Team Members"), SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "550"), " Personal Contacts"), SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "50.000"), " Messages"))), SectionPricing_jsx(CardFooter["a" /* default */], {
    pricing: true,
    className: classes.justifyContentCenter
  }, SectionPricing_jsx(Button["a" /* default */], {
    color: "rose",
    round: true
  }, "Get Started"))))))), SectionPricing_jsx("div", {
    className: classes.pricing + " " + classes.section,
    style: {
      backgroundImage: `url(${city["default"]})`
    }
  }, SectionPricing_jsx("div", {
    className: classes.container
  }, SectionPricing_jsx(GridContainer["a" /* default */], null, SectionPricing_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
  }, SectionPricing_jsx("h2", {
    className: classes.title
  }, "Pick the best plan for you"), SectionPricing_jsx("h5", {
    className: classes.description
  }, "You have Free Unlimited Updates and Premium Support on each package."), SectionPricing_jsx("div", {
    className: classes.sectionSpace
  }))), SectionPricing_jsx(GridContainer["a" /* default */], null, SectionPricing_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4,
    className: classes.mlAuto
  }, SectionPricing_jsx(Card["a" /* default */], {
    pricing: true
  }, SectionPricing_jsx(CardBody["a" /* default */], {
    pricing: true
  }, SectionPricing_jsx("h6", {
    className: classes.cardDescription
  }, "FREE"), SectionPricing_jsx("h1", {
    className: classes.cardTitle
  }, SectionPricing_jsx("small", null, "$"), " 0 ", SectionPricing_jsx("small", null, "/mo")), SectionPricing_jsx("ul", null, SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "1"), " Project"), SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "5"), " Team Members"), SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "55"), " Personal Contacts"), SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "5.000"), " Messages"))), SectionPricing_jsx(CardFooter["a" /* default */], {
    pricing: true,
    className: classes.justifyContentCenter
  }, SectionPricing_jsx(Button["a" /* default */], {
    color: "primary",
    round: true
  }, "Get Started")))), SectionPricing_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4,
    className: classes.mrAuto
  }, SectionPricing_jsx(Card["a" /* default */], {
    pricing: true,
    color: "primary"
  }, SectionPricing_jsx(CardBody["a" /* default */], {
    pricing: true
  }, SectionPricing_jsx("h6", {
    className: classes.cardCategory + " " + classes.marginBottom30
  }, "PREMIUM"), SectionPricing_jsx("h1", {
    className: classes.cardTitleWhite
  }, SectionPricing_jsx("small", null, "$"), " 199 ", SectionPricing_jsx("small", null, "/mo")), SectionPricing_jsx("ul", null, SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "1000"), " Projects"), SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "100"), " Team Members"), SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "550"), " Personal Contacts"), SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "50.000"), " Messages"))), SectionPricing_jsx(CardFooter["a" /* default */], {
    pricing: true,
    className: classes.justifyContentCenter
  }, SectionPricing_jsx(Button["a" /* default */], {
    color: "white",
    round: true
  }, "Get Started"))))))), SectionPricing_jsx("div", {
    className: classes.pricing
  }, SectionPricing_jsx("div", {
    className: classes.container
  }, SectionPricing_jsx(GridContainer["a" /* default */], null, SectionPricing_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
  }, SectionPricing_jsx("h2", {
    className: classes.title
  }, "Pick the best plan for you"), SectionPricing_jsx("h5", {
    className: classes.description
  }, "You have Free Unlimited Updates and Premium Support on each package."), SectionPricing_jsx("div", {
    className: classes.sectionSpace
  }))), SectionPricing_jsx(GridContainer["a" /* default */], null, SectionPricing_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 3
  }, SectionPricing_jsx(Card["a" /* default */], {
    pricing: true,
    plain: true
  }, SectionPricing_jsx(CardBody["a" /* default */], {
    pricing: true,
    plain: true
  }, SectionPricing_jsx("h6", {
    className: classes.cardCategory
  }, "STARTUP"), SectionPricing_jsx("h1", {
    className: classes.cardTitle
  }, SectionPricing_jsx("small", null, "$"), " 0"), SectionPricing_jsx("ul", null, SectionPricing_jsx("li", null, SectionPricing_jsx(Success["a" /* default */], null, SectionPricing_jsx(Check_default.a, null)), " ", "Sharing Tools"), SectionPricing_jsx("li", null, SectionPricing_jsx(Danger["a" /* default */], null, SectionPricing_jsx(Close_default.a, null)), " ", "Design Tools"), SectionPricing_jsx("li", null, SectionPricing_jsx(Danger["a" /* default */], null, SectionPricing_jsx(Close_default.a, null)), " ", "Private Messages"), SectionPricing_jsx("li", null, SectionPricing_jsx(Danger["a" /* default */], null, SectionPricing_jsx(Close_default.a, null)), " ", "Personal Brand"))), SectionPricing_jsx(CardFooter["a" /* default */], {
    pricing: true,
    className: classes.justifyContentCenter
  }, SectionPricing_jsx(Button["a" /* default */], {
    color: "danger",
    round: true
  }, "Downgrade Plan")))), SectionPricing_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 3
  }, SectionPricing_jsx(Card["a" /* default */], {
    pricing: true,
    color: "success"
  }, SectionPricing_jsx(CardBody["a" /* default */], {
    pricing: true
  }, SectionPricing_jsx("h6", {
    className: classes.marginBottom30
  }, "SMALL COMPANY"), SectionPricing_jsx("h1", {
    className: classes.cardTitleWhite
  }, SectionPricing_jsx("small", null, "$"), " 89"), SectionPricing_jsx("ul", null, SectionPricing_jsx("li", null, SectionPricing_jsx(Check_default.a, null), " Sharing Tools"), SectionPricing_jsx("li", null, SectionPricing_jsx(Check_default.a, null), " Design Tools"), SectionPricing_jsx("li", null, SectionPricing_jsx(Close_default.a, null), " Private Messages"), SectionPricing_jsx("li", null, SectionPricing_jsx(Close_default.a, null), " Personal Brand"))), SectionPricing_jsx(CardFooter["a" /* default */], {
    pricing: true,
    className: classes.justifyContentCenter
  }, SectionPricing_jsx(Button["a" /* default */], {
    color: "white",
    round: true,
    disabled: true
  }, "Current Plan")))), SectionPricing_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 3
  }, SectionPricing_jsx(Card["a" /* default */], {
    pricing: true,
    plain: true
  }, SectionPricing_jsx(CardBody["a" /* default */], {
    pricing: true
  }, SectionPricing_jsx("h6", {
    className: classes.cardCategory
  }, "LARGE COMPANY"), SectionPricing_jsx("h1", {
    className: classes.cardTitle
  }, SectionPricing_jsx("small", null, "$"), " 189"), SectionPricing_jsx("ul", null, SectionPricing_jsx("li", null, SectionPricing_jsx(Success["a" /* default */], null, SectionPricing_jsx(Check_default.a, null)), " ", "Sharing Tools"), SectionPricing_jsx("li", null, SectionPricing_jsx(Success["a" /* default */], null, SectionPricing_jsx(Check_default.a, null)), " ", "Design Tools"), SectionPricing_jsx("li", null, SectionPricing_jsx(Success["a" /* default */], null, SectionPricing_jsx(Check_default.a, null)), " ", "Private Messages"), SectionPricing_jsx("li", null, SectionPricing_jsx(Danger["a" /* default */], null, SectionPricing_jsx(Close_default.a, null)), " ", "Personal Brand"))), SectionPricing_jsx(CardFooter["a" /* default */], {
    pricing: true,
    className: classes.justifyContentCenter
  }, SectionPricing_jsx(Button["a" /* default */], {
    color: "success",
    round: true
  }, "Upgrade Plan")))), SectionPricing_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 3
  }, SectionPricing_jsx(Card["a" /* default */], {
    pricing: true,
    plain: true
  }, SectionPricing_jsx(CardBody["a" /* default */], {
    pricing: true
  }, SectionPricing_jsx("h6", {
    className: classes.cardCategory
  }, "LARGE COMPANY"), SectionPricing_jsx("h1", {
    className: classes.cardTitle
  }, SectionPricing_jsx("small", null, "$"), " 189"), SectionPricing_jsx("ul", null, SectionPricing_jsx("li", null, SectionPricing_jsx(Success["a" /* default */], null, SectionPricing_jsx(Check_default.a, null)), " ", "Sharing Tools"), SectionPricing_jsx("li", null, SectionPricing_jsx(Success["a" /* default */], null, SectionPricing_jsx(Check_default.a, null)), " ", "Design Tools"), SectionPricing_jsx("li", null, SectionPricing_jsx(Success["a" /* default */], null, SectionPricing_jsx(Check_default.a, null)), " ", "Private Messages"), SectionPricing_jsx("li", null, SectionPricing_jsx(Success["a" /* default */], null, SectionPricing_jsx(Check_default.a, null)), " ", "Personal Brand"))), SectionPricing_jsx(CardFooter["a" /* default */], {
    pricing: true,
    className: classes.justifyContentCenter
  }, SectionPricing_jsx(Button["a" /* default */], {
    color: "success",
    round: true
  }, "Upgrade Plan"))))))), SectionPricing_jsx("div", {
    className: classes.pricing + " " + classes.sectionGray
  }, SectionPricing_jsx("div", {
    className: classes.container
  }, SectionPricing_jsx(GridContainer["a" /* default */], null, SectionPricing_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4,
    className: classes.mlAuto + " " + classes.mrAuto
  }, SectionPricing_jsx("h2", {
    className: classes.title
  }, "Choose a plan for your next project"), SectionPricing_jsx("p", {
    className: classes.description
  }, "You have Free Unlimited Updates and Premium Support on each package. You also have 20 days to request a refund if You", "'", "re not happy with your purchase."))), SectionPricing_jsx(GridContainer["a" /* default */], null, SectionPricing_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 7,
    md: 7,
    className: classes.mlAuto + " " + classes.mrAuto
  }, SectionPricing_jsx(NavPills["a" /* default */], {
    alignCenter: true,
    color: "primary",
    tabs: [{
      tabButton: "Personal",
      tabContent: SectionPricing_jsx(GridContainer["a" /* default */], null, SectionPricing_jsx(GridItem["a" /* default */], {
        xs: 12,
        sm: 6,
        md: 6
      }, SectionPricing_jsx(Card["a" /* default */], {
        pricing: true,
        raised: true
      }, SectionPricing_jsx(CardBody["a" /* default */], {
        pricing: true
      }, SectionPricing_jsx("h6", {
        className: classes.cardDescription
      }, "HTML PACKAGE"), SectionPricing_jsx("h1", {
        className: classes.cardTitle
      }, SectionPricing_jsx("small", null, "$"), " 0"), SectionPricing_jsx("ul", null, SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "1"), " Developer"), SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "99+"), " Components"), SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "HTML"), " Elements"), SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "14"), " Page Examples"))), SectionPricing_jsx(CardFooter["a" /* default */], {
        pricing: true,
        className: classes.justifyContentCenter
      }, SectionPricing_jsx(Button["a" /* default */], {
        color: "primary",
        round: true
      }, "FREE DOWNLOAD")))), SectionPricing_jsx(GridItem["a" /* default */], {
        xs: 12,
        sm: 6,
        md: 6
      }, SectionPricing_jsx(Card["a" /* default */], {
        pricing: true,
        plain: true
      }, SectionPricing_jsx(CardBody["a" /* default */], {
        pricing: true,
        plain: true
      }, SectionPricing_jsx("h6", {
        className: classes.cardDescription
      }, "HTML & SKETCH PACKAGE"), SectionPricing_jsx("h1", {
        className: classes.cardTitle
      }, SectionPricing_jsx("small", null, "$"), " 79"), SectionPricing_jsx("ul", null, SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "1"), " Developer"), SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "199+"), " Components"), SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "HTML & Sketch"), " Elements"), SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "22"), " Page Examples"))), SectionPricing_jsx(CardFooter["a" /* default */], {
        pricing: true,
        className: classes.justifyContentCenter
      }, SectionPricing_jsx(Button["a" /* default */], {
        color: "white",
        round: true
      }, "BUY NOW")))))
    }, {
      tabButton: "Commercial",
      tabContent: SectionPricing_jsx(GridContainer["a" /* default */], null, SectionPricing_jsx(GridItem["a" /* default */], {
        xs: 12,
        sm: 6,
        md: 6
      }, SectionPricing_jsx(Card["a" /* default */], {
        pricing: true,
        raised: true
      }, SectionPricing_jsx(CardBody["a" /* default */], {
        pricing: true
      }, SectionPricing_jsx("h6", {
        className: classes.cardDescription
      }, "HTML PACKAGE"), SectionPricing_jsx("h1", {
        className: classes.cardTitle
      }, SectionPricing_jsx("small", null, "$"), " 159"), SectionPricing_jsx("ul", null, SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "5+"), " Developers"), SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "199+"), " Components"), SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "HTML"), " Elements"), SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "24"), " Page Examples"))), SectionPricing_jsx(CardFooter["a" /* default */], {
        pricing: true,
        className: classes.justifyContentCenter
      }, SectionPricing_jsx(Button["a" /* default */], {
        color: "primary",
        round: true
      }, "BUY NOW")))), SectionPricing_jsx(GridItem["a" /* default */], {
        xs: 12,
        sm: 6,
        md: 6
      }, SectionPricing_jsx(Card["a" /* default */], {
        pricing: true,
        plain: true
      }, SectionPricing_jsx(CardBody["a" /* default */], {
        pricing: true,
        plain: true
      }, SectionPricing_jsx("h6", {
        className: classes.cardDescription
      }, "HTML & SKETCH PACKAGE"), SectionPricing_jsx("h1", {
        className: classes.cardTitle
      }, SectionPricing_jsx("small", null, "$"), " 299"), SectionPricing_jsx("ul", null, SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "10+"), " Developers"), SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "299+"), " Components"), SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "HTML & Sketch"), " Elements"), SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "45"), " Page Examples"))), SectionPricing_jsx(CardFooter["a" /* default */], {
        pricing: true,
        className: classes.justifyContentCenter
      }, SectionPricing_jsx(Button["a" /* default */], {
        color: "white",
        round: true
      }, "BUY NOW")))))
    }]
  }))))));
}
// EXTERNAL MODULE: external "@material-ui/icons/FormatQuote"
var FormatQuote_ = __webpack_require__("9pO5");
var FormatQuote_default = /*#__PURE__*/__webpack_require__.n(FormatQuote_);

// EXTERNAL MODULE: external "@material-ui/icons/Star"
var Star_ = __webpack_require__("IZOe");
var Star_default = /*#__PURE__*/__webpack_require__.n(Star_);

// EXTERNAL MODULE: ./components/Typography/Warning.js
var Warning = __webpack_require__("Lldq");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/pages/sectionsSections/testimonialsStyle.js
function testimonialsStyle_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function testimonialsStyle_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { testimonialsStyle_ownKeys(Object(source), true).forEach(function (key) { testimonialsStyle_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { testimonialsStyle_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function testimonialsStyle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const testimonialsSection = {
  container: nextjs_material_tim_andrus["h" /* container */],
  mlAuto: nextjs_material_tim_andrus["B" /* mlAuto */],
  mrAuto: nextjs_material_tim_andrus["C" /* mrAuto */],
  title: nextjs_material_tim_andrus["S" /* title */],
  description: nextjs_material_tim_andrus["n" /* description */],
  cardTitle: nextjs_material_tim_andrus["f" /* cardTitle */],
  sectionDark: testimonialsStyle_objectSpread({}, nextjs_material_tim_andrus["N" /* sectionDark */], {
    "& $cardDescription": {
      color: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Z" /* whiteColor */]) + ", 0.76)"
    },
    "& $cardTitle": {
      color: nextjs_material_tim_andrus["Z" /* whiteColor */]
    },
    backgroundSize: "550% 450%"
  }),
  cardDescription: testimonialsStyle_objectSpread({}, nextjs_material_tim_andrus["n" /* description */]),
  cardCategory: testimonialsStyle_objectSpread({}, nextjs_material_tim_andrus["n" /* description */]),
  sectionImage: testimonialsStyle_objectSpread({}, nextjs_material_tim_andrus["N" /* sectionDark */], {}, nextjs_material_tim_andrus["M" /* section */], {
    position: "relative",
    "& $container": {
      zIndex: "2",
      position: "relative"
    },
    "&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''",
      backgroundColor: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.7)"
    },
    "& $title": {
      color: nextjs_material_tim_andrus["Z" /* whiteColor */]
    },
    "& $description": {
      color: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Z" /* whiteColor */]) + ", 0.76)"
    }
  }),
  testimonials: {
    padding: "80px 0",
    "& $cardDescription": {
      fontStyle: "italic"
    }
  },
  textCenter: {
    textAlign: "center"
  },
  icon: {
    marginTop: "30px",
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      fontSize: "40px",
      lineHeight: "40px"
    },
    "& svg": {
      width: "40px",
      height: "40px"
    }
  },
  card1: {
    "& $cardDescription": {
      marginBottom: "50px",
      fontStyle: "italic"
    }
  },
  starIcons: {
    width: "24px",
    height: "24px"
  },
  testimonial2: {
    "& .slick-dots": {
      display: "none !important"
    }
  },
  card2: {
    maxWidth: "650px",
    margin: "60px auto",
    "& $cardDescription": {
      fontStyle: "italic"
    }
  }
};
/* harmony default export */ var testimonialsStyle = (testimonialsSection);
// CONCATENATED MODULE: ./pages-sections/sections-page/SectionTestimonials.js
var SectionTestimonials_jsx = external_react_default.a.createElement;

function SectionTestimonials_extends() { SectionTestimonials_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SectionTestimonials_extends.apply(this, arguments); }

 // react component for creating beautiful carousel

 // @material-ui/core components

 // @material-ui/icons


 // core components

















const SectionTestimonials_useStyles = Object(styles_["makeStyles"])(testimonialsStyle);
function SectionTestimonials(_ref) {
  let rest = Object.assign({}, _ref);
  const classes = SectionTestimonials_useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return SectionTestimonials_jsx("div", SectionTestimonials_extends({
    className: "cd-section"
  }, rest), SectionTestimonials_jsx("div", {
    className: classes.testimonials + " " + classes.sectionImage,
    style: {
      backgroundImage: `url(${dg2["a" /* default */]})`
    }
  }, SectionTestimonials_jsx("div", {
    className: classes.container
  }, SectionTestimonials_jsx(GridContainer["a" /* default */], null, SectionTestimonials_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
  }, SectionTestimonials_jsx("h2", {
    className: classes.title
  }, "My Clients Love Me"), SectionTestimonials_jsx("h5", {
    className: classes.description
  }, "You need more information? Check what other persons are saying about my product. They are very happy with their purchase."))), SectionTestimonials_jsx(GridContainer["a" /* default */], null, SectionTestimonials_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionTestimonials_jsx(Card["a" /* default */], {
    testimonial: true,
    className: classes.card1
  }, SectionTestimonials_jsx("div", {
    className: classes.icon
  }, SectionTestimonials_jsx(FormatQuote_default.a, null)), SectionTestimonials_jsx(CardBody["a" /* default */], null, SectionTestimonials_jsx("h5", {
    className: classes.cardDescription
  }, "Your products, all the kits that I have downloaded from your site and worked with are sooo cool! I love the color mixtures, cards... everything. Keep up the great work!")), SectionTestimonials_jsx(CardFooter["a" /* default */], {
    testimonial: true
  }, SectionTestimonials_jsx("h4", {
    className: classes.cardTitle
  }, "Alec Thompson"), SectionTestimonials_jsx("h6", {
    className: classes.cardCategory
  }, "@ALECTHOMPSON"), SectionTestimonials_jsx(CardAvatar["a" /* default */], {
    testimonial: true,
    testimonialFooter: true
  }, SectionTestimonials_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionTestimonials_jsx("img", {
    src: card_profile1_square["a" /* default */],
    alt: "..."
  })))))), SectionTestimonials_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionTestimonials_jsx(Card["a" /* default */], {
    testimonial: true,
    className: classes.card1
  }, SectionTestimonials_jsx("div", {
    className: classes.icon
  }, SectionTestimonials_jsx(FormatQuote_default.a, null)), SectionTestimonials_jsx(CardBody["a" /* default */], null, SectionTestimonials_jsx("h5", {
    className: classes.cardDescription
  }, '"', "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth. That", "'", "s why I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is not so attractive", '"')), SectionTestimonials_jsx(CardFooter["a" /* default */], {
    testimonial: true
  }, SectionTestimonials_jsx("h4", {
    className: classes.cardTitle
  }, "Gina Andrew"), SectionTestimonials_jsx("h6", {
    className: classes.cardCategory
  }, "@GINAANDREW"), SectionTestimonials_jsx(CardAvatar["a" /* default */], {
    testimonial: true,
    testimonialFooter: true
  }, SectionTestimonials_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionTestimonials_jsx("img", {
    src: card_profile4_square["a" /* default */],
    alt: "..."
  })))))), SectionTestimonials_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionTestimonials_jsx(Card["a" /* default */], {
    testimonial: true,
    className: classes.card1
  }, SectionTestimonials_jsx("div", {
    className: classes.icon
  }, SectionTestimonials_jsx(FormatQuote_default.a, null)), SectionTestimonials_jsx(CardBody["a" /* default */], null, SectionTestimonials_jsx("h5", {
    className: classes.cardDescription
  }, '"', "Your products, all the kits that I have downloaded from your site and worked with are sooo cool! I love the color mixtures, cards... everything. Keep up the great work!", '"')), SectionTestimonials_jsx(CardFooter["a" /* default */], {
    testimonial: true
  }, SectionTestimonials_jsx("h4", {
    className: classes.cardTitle
  }, "George West"), SectionTestimonials_jsx("h6", {
    className: classes.cardCategory
  }, "@GEORGEWEST"), SectionTestimonials_jsx(CardAvatar["a" /* default */], {
    testimonial: true,
    testimonialFooter: true
  }, SectionTestimonials_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionTestimonials_jsx("img", {
    src: card_profile2_square["a" /* default */],
    alt: "..."
  }))))))))), SectionTestimonials_jsx("div", {
    className: classes.testimonials + " " + classes.sectionDark + " " + classes.testimonial2
  }, SectionTestimonials_jsx("div", {
    className: classes.container
  }, SectionTestimonials_jsx(GridContainer["a" /* default */], null, SectionTestimonials_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 12
  }, SectionTestimonials_jsx(external_react_slick_default.a, settings, SectionTestimonials_jsx("div", null, SectionTestimonials_jsx(Card["a" /* default */], {
    testimonial: true,
    plain: true,
    className: classes.card2
  }, SectionTestimonials_jsx(CardAvatar["a" /* default */], {
    testimonial: true,
    plain: true
  }, SectionTestimonials_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionTestimonials_jsx("img", {
    src: kendall["a" /* default */],
    alt: "..."
  }))), SectionTestimonials_jsx(CardBody["a" /* default */], {
    plain: true
  }, SectionTestimonials_jsx("h5", {
    className: classes.cardDescription
  }, '"', "I speak yell scream directly at the old guard on behalf of the future. I gotta say at that time I\u2019d like to meet Kanye I speak yell scream directly at the old guard on behalf of the future. My brother Chance!!!", SectionTestimonials_jsx("br", null), "Thank you for letting me work on this masterpiece. One of my favorite people.", '"'), SectionTestimonials_jsx("h4", {
    className: classes.cardTitle
  }, "Kendall Thompson"), SectionTestimonials_jsx(Muted["a" /* default */], null, SectionTestimonials_jsx("h6", null, "CEO @ Marketing Digital Ltd."))), SectionTestimonials_jsx("div", null, SectionTestimonials_jsx(Warning["a" /* default */], null, SectionTestimonials_jsx(Star_default.a, {
    className: classes.starIcons
  })), SectionTestimonials_jsx(Warning["a" /* default */], null, SectionTestimonials_jsx(Star_default.a, {
    className: classes.starIcons
  })), SectionTestimonials_jsx(Warning["a" /* default */], null, SectionTestimonials_jsx(Star_default.a, {
    className: classes.starIcons
  })), SectionTestimonials_jsx(Warning["a" /* default */], null, SectionTestimonials_jsx(Star_default.a, {
    className: classes.starIcons
  })), SectionTestimonials_jsx(Warning["a" /* default */], null, SectionTestimonials_jsx(Star_default.a, {
    className: classes.starIcons
  }))))), SectionTestimonials_jsx("div", null, SectionTestimonials_jsx(Card["a" /* default */], {
    testimonial: true,
    plain: true,
    className: classes.card2
  }, SectionTestimonials_jsx(CardAvatar["a" /* default */], {
    testimonial: true,
    plain: true
  }, SectionTestimonials_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionTestimonials_jsx("img", {
    src: christian["a" /* default */],
    alt: "..."
  }))), SectionTestimonials_jsx(CardBody["a" /* default */], {
    plain: true
  }, SectionTestimonials_jsx("h5", {
    className: classes.cardDescription
  }, '"', "Thank you Anna for the invite thank you to the whole Vogue team Called I Miss the Old Kanye At the God", "'", "s last game Chop up the soul Kanye. I promise I will never let the people down. I want a better life for all!!! Pablo Pablo Pablo Pablo! Thank you Anna for the invite thank you to the whole Vogue team.", '"'), SectionTestimonials_jsx("h4", {
    className: classes.cardTitle
  }, "Christian Louboutin"), SectionTestimonials_jsx(Muted["a" /* default */], null, SectionTestimonials_jsx("h6", null, "Designer @ Louboutin & Co."))), SectionTestimonials_jsx("div", null, SectionTestimonials_jsx(Warning["a" /* default */], null, SectionTestimonials_jsx(Star_default.a, {
    className: classes.starIcons
  })), SectionTestimonials_jsx(Warning["a" /* default */], null, SectionTestimonials_jsx(Star_default.a, {
    className: classes.starIcons
  })), SectionTestimonials_jsx(Warning["a" /* default */], null, SectionTestimonials_jsx(Star_default.a, {
    className: classes.starIcons
  })), SectionTestimonials_jsx(Warning["a" /* default */], null, SectionTestimonials_jsx(Star_default.a, {
    className: classes.starIcons
  })))))))))), SectionTestimonials_jsx("div", {
    className: classes.testimonials
  }, SectionTestimonials_jsx("div", {
    className: classes.container
  }, SectionTestimonials_jsx(GridContainer["a" /* default */], null, SectionTestimonials_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
  }, SectionTestimonials_jsx("h2", {
    className: classes.title
  }, "What Clients Say"))), SectionTestimonials_jsx(GridContainer["a" /* default */], null, SectionTestimonials_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionTestimonials_jsx(Card["a" /* default */], {
    testimonial: true,
    plain: true
  }, SectionTestimonials_jsx(CardAvatar["a" /* default */], {
    testimonial: true,
    plain: true
  }, SectionTestimonials_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionTestimonials_jsx("img", {
    src: card_profile1_square["a" /* default */],
    alt: "..."
  }))), SectionTestimonials_jsx(CardBody["a" /* default */], {
    plain: true
  }, SectionTestimonials_jsx("h4", {
    className: classes.title
  }, "Mike Andrew"), SectionTestimonials_jsx(Muted["a" /* default */], null, SectionTestimonials_jsx("h6", null, "CEO @ MARKETING DIGITAL LTD.")), SectionTestimonials_jsx("h5", {
    className: classes.cardDescription
  }, '"', "I speak yell scream directly at the old guard on behalf of the future. I gotta say at that time I\u2019d like to meet Kanye I speak yell scream directly at the old guard on behalf of the future.", '"')))), SectionTestimonials_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionTestimonials_jsx(Card["a" /* default */], {
    testimonial: true,
    plain: true
  }, SectionTestimonials_jsx(CardAvatar["a" /* default */], {
    testimonial: true,
    plain: true
  }, SectionTestimonials_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionTestimonials_jsx("img", {
    src: card_profile4_square["a" /* default */],
    alt: "..."
  }))), SectionTestimonials_jsx(CardBody["a" /* default */], {
    plain: true
  }, SectionTestimonials_jsx("h4", {
    className: classes.title
  }, "Tina Thompson"), SectionTestimonials_jsx(Muted["a" /* default */], null, SectionTestimonials_jsx("h6", null, "MARKETING @ APPLE INC.")), SectionTestimonials_jsx("h5", {
    className: classes.cardDescription
  }, '"', "I promise I will never let the people down. I want a better life for all!!! Pablo Pablo Pablo Pablo! Thank you Anna for the invite thank you to the whole Vogue team It wasn\u2019t any Kanyes I love Rick Owens\u2019 bed design but the back is too high for the beams and angle of the ceiling", '"')))), SectionTestimonials_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionTestimonials_jsx(Card["a" /* default */], {
    testimonial: true,
    plain: true
  }, SectionTestimonials_jsx(CardAvatar["a" /* default */], {
    testimonial: true,
    plain: true
  }, SectionTestimonials_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionTestimonials_jsx("img", {
    src: card_profile6_square["a" /* default */],
    alt: "..."
  }))), SectionTestimonials_jsx(CardBody["a" /* default */], {
    plain: true
  }, SectionTestimonials_jsx("h4", {
    className: classes.title
  }, "Gina West"), SectionTestimonials_jsx(Muted["a" /* default */], null, SectionTestimonials_jsx("h6", null, "CFO @ APPLE INC.")), SectionTestimonials_jsx("h5", {
    className: classes.cardDescription
  }, '"', "I", "'", "ve been trying to figure out the bed design for the master bedroom at our Hidden Hills compound... Roy\xE8re doesn", "'", "t make a Polar bear bed but the Polar bear. This is a very nice testimonial about this company.", '"'))))))));
}
// EXTERNAL MODULE: external "react-google-maps"
var external_react_google_maps_ = __webpack_require__("9Tpg");

// EXTERNAL MODULE: external "@material-ui/core/Checkbox"
var Checkbox_ = __webpack_require__("r6Lb");
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox_);

// EXTERNAL MODULE: external "@material-ui/core/FormControlLabel"
var FormControlLabel_ = __webpack_require__("7s44");
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel_);

// EXTERNAL MODULE: external "@material-ui/icons/PinDrop"
var PinDrop_ = __webpack_require__("RVvK");
var PinDrop_default = /*#__PURE__*/__webpack_require__.n(PinDrop_);

// EXTERNAL MODULE: external "@material-ui/icons/Phone"
var Phone_ = __webpack_require__("lgrB");
var Phone_default = /*#__PURE__*/__webpack_require__.n(Phone_);

// EXTERNAL MODULE: ./assets/jss/nextjs-material-tim-andrus/customCheckboxRadioSwitchStyle.js
var customCheckboxRadioSwitchStyle = __webpack_require__("poL+");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/pages/sectionsSections/contactsStyle.js
function contactsStyle_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function contactsStyle_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { contactsStyle_ownKeys(Object(source), true).forEach(function (key) { contactsStyle_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { contactsStyle_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function contactsStyle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const contactsSection = contactsStyle_objectSpread({}, customCheckboxRadioSwitchStyle["a" /* default */], {
  container: nextjs_material_tim_andrus["h" /* container */],
  mlAuto: nextjs_material_tim_andrus["B" /* mlAuto */],
  title: nextjs_material_tim_andrus["S" /* title */],
  description: nextjs_material_tim_andrus["n" /* description */],
  cardTitle: nextjs_material_tim_andrus["f" /* cardTitle */],
  section: contactsStyle_objectSpread({}, nextjs_material_tim_andrus["N" /* sectionDark */], {}, nextjs_material_tim_andrus["M" /* section */], {
    position: "relative",
    "& $container": {
      zIndex: "2",
      position: "relative"
    },
    "&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''",
      backgroundColor: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.7)"
    },
    "& $title": {
      color: nextjs_material_tim_andrus["Z" /* whiteColor */]
    },
    "& $description": {
      color: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Z" /* whiteColor */]) + ", 0.76)"
    },
    "& $infoArea": {}
  }),
  contacts: {
    padding: "80px 0"
  },
  infoArea: {
    padding: "0",
    margin: "0",
    "& svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
      color: nextjs_material_tim_andrus["Z" /* whiteColor */]
    },
    "& h4": {
      marginTop: "20px",
      color: nextjs_material_tim_andrus["Z" /* whiteColor */]
    }
  },
  card1: {
    marginTop: "30px",
    "& $cardTitle": {
      marginBottom: "0.75rem !important",
      color: nextjs_material_tim_andrus["Z" /* whiteColor */]
    }
  },
  textCenter: {
    textAlign: "center"
  },
  justifyContentBetween: {
    WebkitBoxPack: "justify !important",
    MsFlexPack: "justify !important",
    justifyContent: "space-between !important"
  },
  pullRight: {
    float: "right"
  },
  card2: {
    "@media (min-width: 991px)": {
      margin: "80px 0 80px 150px"
    },
    maxWidth: "560px",
    float: "left",
    "& $cardTitle": {
      marginBottom: "0.75rem !important",
      color: nextjs_material_tim_andrus["Z" /* whiteColor */]
    }
  },
  map: {
    overflow: "hidden",
    width: "100%",
    height: "800px",
    position: "absolute"
  },
  contacts2: {
    padding: "0",
    height: "800px"
  },
  infoArea2: {
    padding: "0",
    margin: "0",
    "& h4": {
      fontSize: "1.0625rem",
      lineHeight: "1.55em"
    }
  }
});

/* harmony default export */ var contactsStyle = (contactsSection);
// CONCATENATED MODULE: ./pages-sections/sections-page/SectionContacts.js
var SectionContacts_jsx = external_react_default.a.createElement;

function SectionContacts_extends() { SectionContacts_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SectionContacts_extends.apply(this, arguments); }

 // react components used to create a google map

 // @material-ui/core components



 // @material-ui/icons



 // core components












const SectionContacts_useStyles = Object(styles_["makeStyles"])(contactsStyle);
const RegularMap = Object(external_react_google_maps_["withScriptjs"])(Object(external_react_google_maps_["withGoogleMap"])(() => SectionContacts_jsx(external_react_google_maps_["GoogleMap"], {
  defaultZoom: 14,
  defaultCenter: {
    lat: 44.43353,
    lng: 26.093928 - 0.025
  },
  defaultOptions: {
    scrollwheel: false,
    zoomControl: true,
    styles: [{
      featureType: "water",
      stylers: [{
        saturation: 43
      }, {
        lightness: -11
      }, {
        hue: "#0088ff"
      }]
    }, {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [{
        hue: "#ff0000"
      }, {
        saturation: -100
      }, {
        lightness: 99
      }]
    }, {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [{
        color: "#808080"
      }, {
        lightness: 54
      }]
    }, {
      featureType: "landscape.man_made",
      elementType: "geometry.fill",
      stylers: [{
        color: "#ece2d9"
      }]
    }, {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [{
        color: "#ccdca1"
      }]
    }, {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#767676"
      }]
    }, {
      featureType: "road",
      elementType: "labels.text.stroke",
      stylers: [{
        color: "#ffffff"
      }]
    }, {
      featureType: "poi",
      stylers: [{
        visibility: "off"
      }]
    }, {
      featureType: "landscape.natural",
      elementType: "geometry.fill",
      stylers: [{
        visibility: "on"
      }, {
        color: "#b8cb93"
      }]
    }, {
      featureType: "poi.park",
      stylers: [{
        visibility: "on"
      }]
    }, {
      featureType: "poi.sports_complex",
      stylers: [{
        visibility: "on"
      }]
    }, {
      featureType: "poi.medical",
      stylers: [{
        visibility: "on"
      }]
    }, {
      featureType: "poi.business",
      stylers: [{
        visibility: "simplified"
      }]
    }]
  }
}, SectionContacts_jsx(external_react_google_maps_["Marker"], {
  position: {
    lat: 44.43353,
    lng: 26.093928
  }
}))));
function SectionContacts(_ref) {
  let rest = Object.assign({}, _ref);
  const [checked, setChecked] = external_react_default.a.useState([]);

  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const classes = SectionContacts_useStyles();
  return SectionContacts_jsx("div", SectionContacts_extends({
    className: "cd-section"
  }, rest), SectionContacts_jsx("div", {
    className: classes.contacts + " " + classes.section,
    style: {
      backgroundImage: `url(${city["default"]})`
    }
  }, SectionContacts_jsx("div", {
    className: classes.container
  }, SectionContacts_jsx(GridContainer["a" /* default */], null, SectionContacts_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 5,
    md: 5
  }, SectionContacts_jsx("h2", {
    className: classes.title
  }, "Get in Touch"), SectionContacts_jsx("h5", {
    className: classes.description
  }, "You need more information? Check what other people are saying about my product. They are very happy with their purchase."), SectionContacts_jsx(InfoArea["a" /* default */], {
    className: classes.infoArea,
    title: "Find us at the office",
    description: SectionContacts_jsx("span", null, "Bld Mihail Kogalniceanu, nr. 8,", SectionContacts_jsx("br", null), " 7652 Bucharest,", SectionContacts_jsx("br", null), " Romania"),
    icon: PinDrop_default.a
  }), SectionContacts_jsx(InfoArea["a" /* default */], {
    className: classes.infoArea,
    title: "Give us a ring",
    description: SectionContacts_jsx("span", null, "Michael Jordan", SectionContacts_jsx("br", null), " +40 762 321 762", SectionContacts_jsx("br", null), " Mon - Fri, 8:00-22:00"),
    icon: Phone_default.a
  })), SectionContacts_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 5,
    md: 5,
    className: classes.mlAuto
  }, SectionContacts_jsx(Card["a" /* default */], {
    className: classes.card1
  }, SectionContacts_jsx("form", null, SectionContacts_jsx(CardHeader["a" /* default */], {
    contact: true,
    color: "primary",
    className: classes.textCenter
  }, SectionContacts_jsx("h4", {
    className: classes.cardTitle
  }, "Contact Us")), SectionContacts_jsx(CardBody["a" /* default */], null, SectionContacts_jsx(GridContainer["a" /* default */], null, SectionContacts_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, SectionContacts_jsx(CustomInput["a" /* default */], {
    labelText: "First Name",
    id: "first",
    formControlProps: {
      fullWidth: true
    }
  })), SectionContacts_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, SectionContacts_jsx(CustomInput["a" /* default */], {
    labelText: "Last Name",
    id: "last",
    formControlProps: {
      fullWidth: true
    }
  }))), SectionContacts_jsx(CustomInput["a" /* default */], {
    labelText: "Email Address",
    id: "email-address",
    formControlProps: {
      fullWidth: true
    }
  }), SectionContacts_jsx(CustomInput["a" /* default */], {
    labelText: "Your Message",
    id: "message",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      multiline: true,
      rows: 5
    }
  })), SectionContacts_jsx(CardFooter["a" /* default */], {
    className: classes.justifyContentBetween
  }, SectionContacts_jsx(FormControlLabel_default.a, {
    control: SectionContacts_jsx(Checkbox_default.a, {
      tabIndex: -1,
      onClick: () => handleToggle(1),
      checkedIcon: SectionContacts_jsx(Check_default.a, {
        className: classes.checkedIcon
      }),
      icon: SectionContacts_jsx(Check_default.a, {
        className: classes.uncheckedIcon
      }),
      classes: {
        checked: classes.checked,
        root: classes.checkRoot
      }
    }),
    classes: {
      label: classes.label
    },
    label: "I'm not a robot"
  }), SectionContacts_jsx(Button["a" /* default */], {
    color: "primary",
    className: classes.pullRight
  }, "Send Message")))))))), SectionContacts_jsx("div", {
    className: classes.contacts2
  }, SectionContacts_jsx("div", {
    className: classes.map
  }, SectionContacts_jsx(RegularMap, {
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCPj6C2uzInZWAq5c4yaRqIRZttjkybvy4",
    loadingElement: SectionContacts_jsx("div", {
      style: {
        height: `100%`
      }
    }),
    containerElement: SectionContacts_jsx("div", {
      style: {
        height: `100%`,
        borderRadius: "6px",
        overflow: "hidden"
      }
    }),
    mapElement: SectionContacts_jsx("div", {
      style: {
        height: `100%`
      }
    })
  })), SectionContacts_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, SectionContacts_jsx(Card["a" /* default */], {
    className: classes.card2
  }, SectionContacts_jsx("form", null, SectionContacts_jsx(CardHeader["a" /* default */], {
    contact: true,
    color: "rose",
    className: classes.textCenter
  }, SectionContacts_jsx("h4", {
    className: classes.cardTitle
  }, "Contact Us")), SectionContacts_jsx(CardBody["a" /* default */], null, SectionContacts_jsx(GridContainer["a" /* default */], null, SectionContacts_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, SectionContacts_jsx(InfoArea["a" /* default */], {
    className: classes.infoArea2,
    title: "Give us a ring",
    description: SectionContacts_jsx("span", null, "Michael Jordan", SectionContacts_jsx("br", null), " +40 762 321 762", SectionContacts_jsx("br", null), " Mon - Fri, 8:00-22:00"),
    icon: Phone_default.a,
    iconColor: "rose"
  })), SectionContacts_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, SectionContacts_jsx(InfoArea["a" /* default */], {
    className: classes.infoArea2,
    title: "Find us at the office",
    description: SectionContacts_jsx("span", null, "Bld Mihail Kogalniceanu, nr. 8,", SectionContacts_jsx("br", null), " 7652 Bucharest,", SectionContacts_jsx("br", null), " Romania"),
    icon: PinDrop_default.a,
    iconColor: "rose"
  }))), SectionContacts_jsx(GridContainer["a" /* default */], null, SectionContacts_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, SectionContacts_jsx(CustomInput["a" /* default */], {
    labelText: "Full Name",
    id: "first2",
    formControlProps: {
      fullWidth: true
    }
  })), SectionContacts_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, SectionContacts_jsx(CustomInput["a" /* default */], {
    labelText: "Email Address",
    id: "email-address2",
    formControlProps: {
      fullWidth: true
    }
  }))), SectionContacts_jsx(CustomInput["a" /* default */], {
    labelText: "Your Message",
    id: "message2",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      multiline: true,
      rows: 5
    }
  })), SectionContacts_jsx(CardFooter["a" /* default */], {
    className: classes.justifyContentBetween
  }, SectionContacts_jsx(FormControlLabel_default.a, {
    control: SectionContacts_jsx(Checkbox_default.a, {
      tabIndex: -1,
      onClick: () => handleToggle(2),
      checkedIcon: SectionContacts_jsx(Check_default.a, {
        className: classes.checkedIcon
      }),
      icon: SectionContacts_jsx(Check_default.a, {
        className: classes.uncheckedIcon
      }),
      classes: {
        checked: classes.checked,
        root: classes.checkRoot
      }
    }),
    classes: {
      label: classes.label
    },
    label: "I'm not a robot"
  }), SectionContacts_jsx(Button["a" /* default */], {
    color: "rose",
    className: classes.pullRight
  }, "Send Message")))))));
}
// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/pages/sectionsPageStyle.js
function sectionsPageStyle_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function sectionsPageStyle_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { sectionsPageStyle_ownKeys(Object(source), true).forEach(function (key) { sectionsPageStyle_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { sectionsPageStyle_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function sectionsPageStyle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const sectionsPageStyle = {
  main: sectionsPageStyle_objectSpread({}, nextjs_material_tim_andrus["z" /* main */])
};
/* harmony default export */ var pages_sectionsPageStyle = (sectionsPageStyle);
// CONCATENATED MODULE: ./pages/sections.js
var sections_jsx = external_react_default.a.createElement;

// @material-ui/core components

// @material-ui/icons
// core components


// sections of this Page









const sections_useStyles = Object(styles_["makeStyles"])(pages_sectionsPageStyle);
function SectionsPage() {
  external_react_default.a.useEffect(() => {
    var href = window.location.href.substring(window.location.href.lastIndexOf("#") + 1);
    if (window.location.href.lastIndexOf("#") > 0) {
      document.getElementById(href).scrollIntoView();
    }
    window.addEventListener("scroll", updateView);
    updateView();
    return function cleanup() {
      window.removeEventListener("scroll", updateView);
    };
  });
  const updateView = () => {
    var contentSections = document.getElementsByClassName("cd-section");
    var navigationItems = document.getElementById("cd-vertical-nav").getElementsByTagName("a");
    for (let i = 0; i < contentSections.length; i++) {
      var activeSection = parseInt(navigationItems[i].getAttribute("data-number"), 10) - 1;
      if (contentSections[i].offsetTop - window.innerHeight / 2 < window.pageYOffset && contentSections[i].offsetTop + contentSections[i].scrollHeight - window.innerHeight / 2 > window.pageYOffset) {
        navigationItems[activeSection].classList.add("is-selected");
      } else {
        navigationItems[activeSection].classList.remove("is-selected");
      }
    }
  };
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };
  const smoothScroll = target => {
    var targetScroll = document.getElementById(target);
    scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
  };
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;
    var animateScroll = function () {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };
  const classes = sections_useStyles();
  return sections_jsx("div", null, sections_jsx(Header["a" /* default */], {
    color: "info",
    brand: "Timothy Andrus",
    links: sections_jsx(HeaderLinks["a" /* default */], {
      dropdownHoverColor: "info"
    }),
    fixed: true
  }), sections_jsx("div", {
    className: classes.main
  }, sections_jsx(SectionHeaders, {
    id: "headers"
  }), sections_jsx(SectionFeatures, {
    id: "features"
  }), sections_jsx(SectionBlogs, {
    id: "blogs"
  }), sections_jsx(SectionTeams, {
    id: "teams"
  }), sections_jsx(SectionProjects, {
    id: "projects"
  }), sections_jsx(SectionPricing, {
    id: "pricing"
  }), sections_jsx(SectionTestimonials, {
    id: "testimonials"
  }), sections_jsx(SectionContacts, {
    id: "contacts"
  })), sections_jsx("nav", {
    id: "cd-vertical-nav"
  }, sections_jsx("ul", null, sections_jsx("li", null, sections_jsx("a", {
    href: "#headers",
    "data-number": "1",
    className: "is-selected",
    onClick: e => {
      var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        smoothScroll("headers");
      }
    }
  }, sections_jsx("span", {
    className: "cd-dot"
  }), sections_jsx("span", {
    className: "cd-label"
  }, "Headers"))), sections_jsx("li", null, sections_jsx("a", {
    href: "#features",
    "data-number": "2",
    className: "",
    onClick: e => {
      var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        smoothScroll("features");
      }
    }
  }, sections_jsx("span", {
    className: "cd-dot"
  }), sections_jsx("span", {
    className: "cd-label"
  }, "Features"))), sections_jsx("li", null, sections_jsx("a", {
    href: "#blogs",
    "data-number": "3",
    className: "",
    onClick: e => {
      var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        smoothScroll("blogs");
      }
    }
  }, sections_jsx("span", {
    className: "cd-dot"
  }), sections_jsx("span", {
    className: "cd-label"
  }, "Blogs"))), sections_jsx("li", null, sections_jsx("a", {
    href: "#teams",
    "data-number": "4",
    className: "",
    onClick: e => {
      var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        smoothScroll("teams");
      }
    }
  }, sections_jsx("span", {
    className: "cd-dot"
  }), sections_jsx("span", {
    className: "cd-label"
  }, "Teams"))), sections_jsx("li", null, sections_jsx("a", {
    href: "#projects",
    "data-number": "5",
    className: "",
    onClick: e => {
      var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        smoothScroll("projects");
      }
    }
  }, sections_jsx("span", {
    className: "cd-dot"
  }), sections_jsx("span", {
    className: "cd-label"
  }, "Projects"))), sections_jsx("li", null, sections_jsx("a", {
    href: "#pricing",
    "data-number": "6",
    className: "",
    onClick: e => {
      var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        smoothScroll("pricing");
      }
    }
  }, sections_jsx("span", {
    className: "cd-dot"
  }), sections_jsx("span", {
    className: "cd-label"
  }, "Pricing"))), sections_jsx("li", null, sections_jsx("a", {
    href: "#testimonials",
    "data-number": "7",
    className: "",
    onClick: e => {
      var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        smoothScroll("testimonials");
      }
    }
  }, sections_jsx("span", {
    className: "cd-dot"
  }), sections_jsx("span", {
    className: "cd-label"
  }, "Testimonials"))), sections_jsx("li", null, sections_jsx("a", {
    href: "#contacts",
    "data-number": "8",
    className: "",
    onClick: e => {
      var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        smoothScroll("contacts");
      }
    }
  }, sections_jsx("span", {
    className: "cd-dot"
  }), sections_jsx("span", {
    className: "cd-label"
  }, "Contact Us"))))));
}

/***/ }),

/***/ "4nWC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Assignment");

/***/ }),

/***/ "59xQ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AttachMoney");

/***/ }),

/***/ "5LSk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CardFooter; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/components/cardFooterStyle.js
const cardFooterStyle = {
  cardFooter: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
    padding: "0.9375rem 1.875rem",
    paddingTop: "0"
  },
  cardFooterProfile: {
    marginTop: "-15px"
  },
  cardFooterPlain: {
    paddingLeft: "5px",
    paddingRight: "5px",
    backgroundColor: "transparent"
  },
  cardFooterPricing: {
    zIndex: "2"
  },
  cardFooterTestimonial: {
    display: "block"
  }
};
/* harmony default export */ var components_cardFooterStyle = (cardFooterStyle);
// CONCATENATED MODULE: ./components/Card/CardFooter.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components
 // @material-ui/icons
// core components


const useStyles = Object(styles_["makeStyles"])(components_cardFooterStyle);
function CardFooter(props) {
  const {
    className,
    children,
    plain,
    profile,
    pricing,
    testimonial
  } = props,
        rest = _objectWithoutProperties(props, ["className", "children", "plain", "profile", "pricing", "testimonial"]);

  const classes = useStyles();
  const cardFooterClasses = external_classnames_default()({
    [classes.cardFooter]: true,
    [classes.cardFooterPlain]: plain,
    [classes.cardFooterProfile]: profile || testimonial,
    [classes.cardFooterPricing]: pricing,
    [classes.cardFooterTestimonial]: testimonial,
    [className]: className !== undefined
  });
  return __jsx("div", _extends({
    className: cardFooterClasses
  }, rest), children);
}

/***/ }),

/***/ "5MrK":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/GroupWork");

/***/ }),

/***/ "6Yxu":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

/***/ }),

/***/ "6orC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Danger; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pUqt");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // nodejs library to set properties for components

// @material-ui/core components
 // core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(assets_jss_nextjs_material_tim_andrus_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);
function Danger(props) {
  const {
    children
  } = props;
  const classes = useStyles();
  return __jsx("div", {
    className: classes.defaultFontStyle + " " + classes.dangerText
  }, children);
}

/***/ }),

/***/ "7+h0":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Subject");

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

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

/***/ "7s44":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "7vM9":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Icon");

/***/ }),

/***/ "86oe":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccessTime");

/***/ }),

/***/ "8E12":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderLinks; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("0LMq");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("c25J");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("7vM9");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Y8uC");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("P+fx");
/* harmony import */ var _material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("FQAE");
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_ViewDay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("hnsL");
/* harmony import */ var _material_ui_icons_ViewDay__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ViewDay__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Dns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("lZfH");
/* harmony import */ var _material_ui_icons_Dns__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dns__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Build__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("Ao/0");
/* harmony import */ var _material_ui_icons_Build__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Build__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("/sfI");
/* harmony import */ var _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_List__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("yFMe");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("4nWC");
/* harmony import */ var _material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("LVbA");
/* harmony import */ var _material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("HWfr");
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("yRI6");
/* harmony import */ var _material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_ViewCarousel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("+JH3");
/* harmony import */ var _material_ui_icons_ViewCarousel__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ViewCarousel__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_AccountBalance__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("vhhE");
/* harmony import */ var _material_ui_icons_AccountBalance__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountBalance__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_ArtTrack__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("4CLJ");
/* harmony import */ var _material_ui_icons_ArtTrack__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArtTrack__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_ViewQuilt__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("8jd/");
/* harmony import */ var _material_ui_icons_ViewQuilt__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ViewQuilt__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("cVmi");
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("Uo6P");
/* harmony import */ var _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("59xQ");
/* harmony import */ var _material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_icons_Store__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("+1zY");
/* harmony import */ var _material_ui_icons_Store__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Store__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("DME6");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("3ydN");
/* harmony import */ var _material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("g0r0");
/* harmony import */ var _material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _material_ui_icons_ShoppingBasket__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("JJVH");
/* harmony import */ var _material_ui_icons_ShoppingBasket__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingBasket__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _material_ui_icons_LineStyle__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("yDxe");
/* harmony import */ var _material_ui_icons_LineStyle__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LineStyle__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("Lu7A");
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var components_CustomDropdown_CustomDropdown_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("QOEo");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("Kg+a");
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_components_headerLinksStyle_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("96c8");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable */
 // nodejs library to set properties for components

// react components for routing our app without refresh
 // @material-ui/core components





 // @material-ui/icons

























 // core components




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_nextjs_material_tim_andrus_components_headerLinksStyle_js__WEBPACK_IMPORTED_MODULE_34__[/* default */ "a"]);
function HeaderLinks(props) {
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e, target) => {
    if (window.location.pathname === "/sections") {
      var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);

      if (isMobile) {// if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };

  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

    var animateScroll = function () {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  };

  var onClickSections = {};
  const {
    dropdownHoverColor
  } = props;
  const classes = useStyles();
  return __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.list + " " + classes.mlAuto
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.listItem
  }, __jsx(components_CustomDropdown_CustomDropdown_js__WEBPACK_IMPORTED_MODULE_32__[/* default */ "a"], {
    noLiPadding: true,
    navDropdown: true,
    hoverColor: dropdownHoverColor,
    buttonText: "Components",
    buttonProps: {
      className: classes.navLink,
      color: "transparent"
    },
    buttonIcon: _material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_7___default.a,
    dropdownList: [__jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/presentation"
    }, __jsx("a", {
      className: classes.dropdownLink
    }, __jsx(_material_ui_icons_LineStyle__WEBPACK_IMPORTED_MODULE_30___default.a, {
      className: classes.dropdownIcons
    }), " Presentation Page")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/components"
    }, __jsx("a", {
      className: classes.dropdownLink
    }, __jsx(_material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_28___default.a, {
      className: classes.dropdownIcons
    }), "All components")), __jsx("a", {
      href: "https://www.nowsta.com/",
      target: "_blank",
      className: classes.dropdownLink
    }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: classes.dropdownIcons
    }, "content_paste"), "Documentation")]
  })), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.listItem
  }, __jsx(components_CustomDropdown_CustomDropdown_js__WEBPACK_IMPORTED_MODULE_32__[/* default */ "a"], {
    noLiPadding: true,
    navDropdown: true,
    hoverColor: dropdownHoverColor,
    buttonText: "Sections",
    buttonProps: {
      className: classes.navLink,
      color: "transparent"
    },
    buttonIcon: _material_ui_icons_ViewDay__WEBPACK_IMPORTED_MODULE_9___default.a,
    dropdownList: [__jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/sections#headers"
    }, __jsx("a", {
      className: classes.dropdownLink,
      onClick: e => smoothScroll(e, "headers")
    }, __jsx(_material_ui_icons_Dns__WEBPACK_IMPORTED_MODULE_10___default.a, {
      className: classes.dropdownIcons
    }), " Headers")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/sections#features"
    }, __jsx("a", {
      className: classes.dropdownLink,
      onClick: e => smoothScroll(e, "features")
    }, __jsx(_material_ui_icons_Build__WEBPACK_IMPORTED_MODULE_11___default.a, {
      className: classes.dropdownIcons
    }), " Features")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/sections#blogs"
    }, __jsx("a", {
      className: classes.dropdownLink,
      onClick: e => smoothScroll(e, "blogs")
    }, __jsx(_material_ui_icons_List__WEBPACK_IMPORTED_MODULE_12___default.a, {
      className: classes.dropdownIcons
    }), " Blogs")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/sections#teams"
    }, __jsx("a", {
      className: classes.dropdownLink,
      onClick: e => smoothScroll(e, "teams")
    }, __jsx(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_13___default.a, {
      className: classes.dropdownIcons
    }), " Teams")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/sections#projects"
    }, __jsx("a", {
      className: classes.dropdownLink,
      onClick: e => smoothScroll(e, "projects")
    }, __jsx(_material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_14___default.a, {
      className: classes.dropdownIcons
    }), " Projects")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/sections#pricing"
    }, __jsx("a", {
      className: classes.dropdownLink,
      onClick: e => smoothScroll(e, "pricing")
    }, __jsx(_material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_15___default.a, {
      className: classes.dropdownIcons
    }), " Pricing")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/sections#testimonials"
    }, __jsx("a", {
      className: classes.dropdownLink,
      onClick: e => smoothScroll(e, "testimonials")
    }, __jsx(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_16___default.a, {
      className: classes.dropdownIcons
    }), " Testimonials")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/sections#contacts"
    }, __jsx("a", {
      className: classes.dropdownLink,
      onClick: e => smoothScroll(e, "contacts")
    }, __jsx(_material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_17___default.a, {
      className: classes.dropdownIcons
    }), " Contacts"))]
  })), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.listItem
  }, __jsx(components_CustomDropdown_CustomDropdown_js__WEBPACK_IMPORTED_MODULE_32__[/* default */ "a"], {
    noLiPadding: true,
    navDropdown: true,
    hoverColor: dropdownHoverColor,
    buttonText: "Examples",
    buttonProps: {
      className: classes.navLink,
      color: "transparent"
    },
    buttonIcon: _material_ui_icons_ViewCarousel__WEBPACK_IMPORTED_MODULE_18___default.a,
    dropdownList: [__jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/about-us"
    }, __jsx("a", {
      className: classes.dropdownLink
    }, __jsx(_material_ui_icons_AccountBalance__WEBPACK_IMPORTED_MODULE_19___default.a, {
      className: classes.dropdownIcons
    }), " About Us")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-post"
    }, __jsx("a", {
      className: classes.dropdownLink
    }, __jsx(_material_ui_icons_ArtTrack__WEBPACK_IMPORTED_MODULE_20___default.a, {
      className: classes.dropdownIcons
    }), " Blog Post")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-posts"
    }, __jsx("a", {
      className: classes.dropdownLink
    }, __jsx(_material_ui_icons_ViewQuilt__WEBPACK_IMPORTED_MODULE_21___default.a, {
      className: classes.dropdownIcons
    }), " Blog Posts")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contact-us"
    }, __jsx("a", {
      className: classes.dropdownLink
    }, __jsx(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_22___default.a, {
      className: classes.dropdownIcons
    }), " Contact Us")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/landing-page"
    }, __jsx("a", {
      className: classes.dropdownLink
    }, __jsx(_material_ui_icons_ViewDay__WEBPACK_IMPORTED_MODULE_9___default.a, {
      className: classes.dropdownIcons
    }), " Landing Page")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/login"
    }, __jsx("a", {
      className: classes.dropdownLink
    }, __jsx(_material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_23___default.a, {
      className: classes.dropdownIcons
    }), " Login Page")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/pricing"
    }, __jsx("a", {
      className: classes.dropdownLink
    }, __jsx(_material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_24___default.a, {
      className: classes.dropdownIcons
    }), " Pricing Page")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/shopping-cart"
    }, __jsx("a", {
      className: classes.dropdownLink
    }, __jsx(_material_ui_icons_ShoppingBasket__WEBPACK_IMPORTED_MODULE_29___default.a, {
      className: classes.dropdownIcons
    }), " Shopping Cart")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/ecommerce"
    }, __jsx("a", {
      className: classes.dropdownLink
    }, __jsx(_material_ui_icons_Store__WEBPACK_IMPORTED_MODULE_25___default.a, {
      className: classes.dropdownIcons
    }), " Ecommerce Page")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/product"
    }, __jsx("a", {
      className: classes.dropdownLink
    }, __jsx(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_8___default.a, {
      className: classes.dropdownIcons
    }), " Product Page")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/profile"
    }, __jsx("a", {
      className: classes.dropdownLink
    }, __jsx(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_26___default.a, {
      className: classes.dropdownIcons
    }), " Profile Page")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/signup"
    }, __jsx("a", {
      className: classes.dropdownLink
    }, __jsx(_material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_27___default.a, {
      className: classes.dropdownIcons
    }), " Signup Page")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/error-page"
    }, __jsx("a", {
      className: classes.dropdownLink
    }, __jsx(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_31___default.a, {
      className: classes.dropdownIcons
    }), " Error Page"))]
  })), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.listItem
  }, __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6___default.a, {
    mdDown: true
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_33__[/* default */ "a"], {
    href: "https://www.nowsta.com/product/nextjs-material-tim-andrus?ref=njsmkp-navbar",
    color: "white",
    target: "_blank",
    className: classes.navButton,
    round: true
  }, __jsx(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.icons
  }), " buy now")), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6___default.a, {
    mdUp: true
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_33__[/* default */ "a"], {
    href: "https://www.nowsta.com/product/nextjs-material-tim-andrus?ref=njsmkp-navbar",
    color: "info",
    target: "_blank",
    className: classes.navButton,
    round: true
  }, __jsx(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.icons
  }), " buy now"))));
}
HeaderLinks.defaultProps = {
  hoverColor: "primary"
};

/***/ }),

/***/ "8jd/":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ViewQuilt");

/***/ }),

/***/ "8x5e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Header; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/AppBar"
var AppBar_ = __webpack_require__("4151");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "@material-ui/core/Toolbar"
var Toolbar_ = __webpack_require__("Ms0O");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__("EmCc");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/Hidden"
var Hidden_ = __webpack_require__("Y8uC");
var Hidden_default = /*#__PURE__*/__webpack_require__.n(Hidden_);

// EXTERNAL MODULE: external "@material-ui/core/Drawer"
var Drawer_ = __webpack_require__("Q01v");
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_);

// EXTERNAL MODULE: external "@material-ui/icons/Menu"
var Menu_ = __webpack_require__("4D1s");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);

// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__("j08L");
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);

// EXTERNAL MODULE: ./assets/jss/nextjs-material-tim-andrus.js
var nextjs_material_tim_andrus = __webpack_require__("k7mW");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/components/headerStyle.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const headerStyle = theme => ({
  appBar: {
    display: "flex",
    border: "0",
    borderRadius: "3px",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: nextjs_material_tim_andrus["s" /* grayColor */][15],
    width: "100%",
    backgroundColor: nextjs_material_tim_andrus["Z" /* whiteColor */],
    boxShadow: "0 4px 18px 0px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.12), 0 7px 10px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.15)",
    transition: "all 150ms ease 0s",
    alignItems: "center",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    position: "relative"
  },
  absolute: {
    position: "absolute",
    top: "auto"
  },
  fixed: {
    position: "fixed"
  },
  container: _objectSpread({}, nextjs_material_tim_andrus["h" /* container */], {
    minHeight: "50px",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexWrap: "nowrap"
  }),
  title: {
    letterSpacing: "unset",
    "&,& a": _objectSpread({}, nextjs_material_tim_andrus["m" /* defaultFont */], {
      minWidth: "unset",
      lineHeight: "30px",
      fontSize: "18px",
      borderRadius: "3px",
      textTransform: "none",
      whiteSpace: "nowrap",
      color: "inherit",
      "&:hover,&:focus": {
        color: "inherit",
        background: "transparent"
      }
    })
  },
  appResponsive: {
    margin: "20px 10px",
    marginTop: "0px"
  },
  primary: {
    backgroundColor: nextjs_material_tim_andrus["G" /* primaryColor */][0],
    color: nextjs_material_tim_andrus["Z" /* whiteColor */],
    boxShadow: "0 4px 20px 0px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.14), 0 7px 12px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["G" /* primaryColor */][0]) + ", 0.46)"
  },
  info: {
    backgroundColor: nextjs_material_tim_andrus["w" /* infoColor */][0],
    color: nextjs_material_tim_andrus["Z" /* whiteColor */],
    boxShadow: "0 4px 20px 0px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.14), 0 7px 12px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["w" /* infoColor */][0]) + ", 0.46)"
  },
  success: {
    backgroundColor: nextjs_material_tim_andrus["R" /* successColor */][0],
    color: nextjs_material_tim_andrus["Z" /* whiteColor */],
    boxShadow: "0 4px 20px 0px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.14), 0 7px 12px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["R" /* successColor */][0]) + ", 0.46)"
  },
  warning: {
    backgroundColor: nextjs_material_tim_andrus["Y" /* warningColor */][0],
    color: nextjs_material_tim_andrus["Z" /* whiteColor */],
    boxShadow: "0 4px 20px 0px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.14), 0 7px 12px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Y" /* warningColor */][0]) + ", 0.46)"
  },
  danger: {
    backgroundColor: nextjs_material_tim_andrus["l" /* dangerColor */][0],
    color: nextjs_material_tim_andrus["Z" /* whiteColor */],
    boxShadow: "0 4px 20px 0px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.14), 0 7px 12px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["l" /* dangerColor */][0]) + ", 0.46)"
  },
  rose: {
    backgroundColor: nextjs_material_tim_andrus["K" /* roseColor */][0],
    color: nextjs_material_tim_andrus["Z" /* whiteColor */],
    boxShadow: "0 4px 20px 0px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.14), 0 7px 12px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["K" /* roseColor */][0]) + ", 0.46)"
  },
  transparent: {
    backgroundColor: "transparent !important",
    boxShadow: "none",
    paddingTop: "25px",
    color: nextjs_material_tim_andrus["Z" /* whiteColor */]
  },
  dark: {
    color: nextjs_material_tim_andrus["Z" /* whiteColor */],
    backgroundColor: nextjs_material_tim_andrus["s" /* grayColor */][9] + " !important",
    boxShadow: "0 4px 20px 0px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.14), 0 7px 12px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["s" /* grayColor */][9]) + ", 0.46)"
  },
  white: {
    border: "0",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: nextjs_material_tim_andrus["s" /* grayColor */][15],
    backgroundColor: nextjs_material_tim_andrus["Z" /* whiteColor */] + " !important",
    boxShadow: "0 4px 18px 0px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.12), 0 7px 10px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.15)"
  },
  drawerPaper: _objectSpread({
    border: "none",
    bottom: "0",
    transitionProperty: "top, bottom, width",
    transitionDuration: ".2s, .2s, .35s",
    transitionTimingFunction: "linear, linear, ease",
    width: nextjs_material_tim_andrus["o" /* drawerWidth */]
  }, nextjs_material_tim_andrus["c" /* boxShadow */], {
    position: "fixed",
    display: "block",
    top: "0",
    height: "100vh",
    right: "0",
    left: "auto",
    visibility: "visible",
    overflowY: "visible",
    borderTop: "none",
    textAlign: "left",
    paddingRight: "0px",
    paddingLeft: "0"
  }, nextjs_material_tim_andrus["T" /* transition */]),
  hidden: {
    width: "100%"
  },
  collapse: {
    [theme.breakpoints.up("md")]: {
      display: "flex !important",
      MsFlexPreferredSize: "auto",
      flexBasis: "auto"
    },
    WebkitBoxFlex: "1",
    MsFlexPositive: "1",
    flexGrow: "1",
    WebkitBoxAlign: "center",
    MsFlexAlign: "center",
    alignItems: "center"
  },
  closeButtonDrawer: {
    position: "absolute",
    right: "8px",
    top: "9px",
    zIndex: "1"
  }
});

/* harmony default export */ var components_headerStyle = (headerStyle);
// CONCATENATED MODULE: ./components/Header/Header.js
var __jsx = external_react_default.a.createElement;

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components






 // @material-ui/icons


 // core components


const useStyles = Object(styles_["makeStyles"])(components_headerStyle);
function Header(props) {
  const [mobileOpen, setMobileOpen] = external_react_default.a.useState(false);
  const classes = useStyles();
  external_react_default.a.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }

    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const headerColorChange = () => {
    const {
      color,
      changeColorOnScroll
    } = props;
    const windowsScrollTop = window.pageYOffset;

    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body.getElementsByTagName("header")[0].classList.remove(classes[color]);
      document.body.getElementsByTagName("header")[0].classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body.getElementsByTagName("header")[0].classList.add(classes[color]);
      document.body.getElementsByTagName("header")[0].classList.remove(classes[changeColorOnScroll.color]);
    }
  };

  const {
    color,
    links,
    brand,
    fixed,
    absolute
  } = props;
  const appBarClasses = external_classnames_default()({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed
  });
  return __jsx(AppBar_default.a, {
    className: appBarClasses
  }, __jsx(Toolbar_default.a, {
    className: classes.container
  }, __jsx(Button_default.a, {
    className: classes.title
  }, __jsx(link_default.a, {
    href: "/presentation"
  }, __jsx("a", null, brand))), __jsx(Hidden_default.a, {
    smDown: true,
    implementation: "css",
    className: classes.hidden
  }, __jsx("div", {
    className: classes.collapse
  }, links)), __jsx(Hidden_default.a, {
    mdUp: true
  }, __jsx(IconButton_default.a, {
    color: "inherit",
    "aria-label": "open drawer",
    onClick: handleDrawerToggle
  }, __jsx(Menu_default.a, null)))), __jsx(Hidden_default.a, {
    mdUp: true,
    implementation: "js"
  }, __jsx(Drawer_default.a, {
    variant: "temporary",
    anchor: "right",
    open: mobileOpen,
    classes: {
      paper: classes.drawerPaper
    },
    onClose: handleDrawerToggle
  }, __jsx(IconButton_default.a, {
    color: "inherit",
    "aria-label": "open drawer",
    onClick: handleDrawerToggle,
    className: classes.closeButtonDrawer
  }, __jsx(Close_default.a, null)), __jsx("div", {
    className: classes.appResponsive
  }, links))));
}
Header.defaultProp = {
  color: "white"
};

/***/ }),

/***/ "96c8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("k7mW");
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_tooltipsStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("evDE");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const headerLinksStyle = theme => _objectSpread({
  list: {
    [theme.breakpoints.up("md")]: {
      WebkitBoxAlign: "center",
      MsFlexAlign: "center",
      alignItems: "center",
      WebkitBoxOrient: "horizontal",
      WebkitBoxDirection: "normal",
      MsFlexDirection: "row",
      flexDirection: "row"
    },
    [theme.breakpoints.down("sm")]: {
      display: "block"
    },
    marginTop: "0px",
    display: "flex",
    paddingLeft: "0",
    marginBottom: "0",
    listStyle: "none",
    padding: "0"
  },
  listItem: {
    float: "left",
    color: "inherit",
    position: "relative",
    display: "block",
    width: "auto",
    margin: "0",
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      "& ul": {
        maxHeight: "300px",
        overflow: "scroll"
      },
      width: "100%",
      "&:not(:last-child)": {
        "&:after": {
          width: "calc(100% - 30px)",
          content: '""',
          display: "block",
          height: "1px",
          marginLeft: "15px",
          backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "s"][14]
        }
      }
    }
  },
  listItemText: {
    padding: "0 !important"
  },
  navLink: {
    color: "inherit",
    position: "relative",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: "inherit"
    },
    "& .fab,& .far,& .fal,& .fas,& .material-icons": {
      position: "relative",
      top: "2px",
      marginTop: "-4px",
      marginRight: "4px",
      marginBottom: "0px",
      fontSize: "1.25rem"
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start"
      }
    },
    "& svg": {
      marginRight: "3px",
      width: "20px",
      height: "20px"
    }
  },
  navLinkJustIcon: {
    "& .fab,& .far,& .fal,& .fas,& .material-icons": {
      marginRight: "0px"
    },
    "& svg": {
      marginRight: "0px"
    }
  },
  navButton: {
    position: "relative",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "5px",
      marginTop: "5px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start"
      }
    },
    "& $icons": {
      marginRight: "3px"
    }
  },
  notificationNavLink: {
    [theme.breakpoints.down("md")]: {
      top: "0",
      margin: "5px 15px"
    },
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* whiteColor */ "Z"],
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex"
  },
  registerNavLink: {
    [theme.breakpoints.down("md")]: {
      top: "0",
      margin: "5px 15px"
    },
    position: "relative",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex"
  },
  navLinkActive: {
    "&, &:hover, &:focus,&:active ": {
      color: "inherit",
      backgroundColor: "rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "t"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* whiteColor */ "Z"]) + ", 0.1)"
    }
  },
  icons: {
    width: "20px",
    height: "20px",
    marginRight: "14px"
  },
  dropdownIcons: {
    width: "24px",
    height: "24px",
    marginRight: "14px",
    opacity: "0.5",
    marginTop: "-4px",
    top: "1px",
    verticalAlign: "middle",
    fontSize: "24px",
    position: "relative"
  },
  socialIcons: {
    position: "relative",
    fontSize: "1.25rem",
    maxWidth: "24px"
  },
  dropdownLink: {
    "&,&:hover,&:focus": {
      color: "inherit",
      textDecoration: "none",
      display: "flex",
      padding: "0.75rem 1.25rem 0.75rem 0.75rem"
    }
  }
}, assets_jss_nextjs_material_tim_andrus_tooltipsStyle_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
  marginRight5: {
    marginRight: "5px"
  },
  collapse: {
    [theme.breakpoints.up("md")]: {
      display: "flex !important",
      MsFlexPreferredSize: "auto",
      flexBasis: "auto"
    },
    WebkitBoxFlex: "1",
    MsFlexPositive: "1",
    flexGrow: "1",
    WebkitBoxAlign: "center",
    MsFlexAlign: "center",
    alignItems: "center"
  },
  mlAuto: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* mlAuto */ "B"]
});

/* harmony default export */ __webpack_exports__["a"] = (headerLinksStyle);

/***/ }),

/***/ "9Pkz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NhcmQtYmxvZzMuanBnIjs=");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "9Tpg":
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),

/***/ "9pO5":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FormatQuote");

/***/ }),

/***/ "9qvJ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Check");

/***/ }),

/***/ "A2So":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Card; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-tim-andrus.js
var nextjs_material_tim_andrus = __webpack_require__("k7mW");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/components/cardStyle.js

const cardStyle = {
  card: {
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    color: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.87)",
    background: nextjs_material_tim_andrus["Z" /* whiteColor */],
    width: "100%",
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.12)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
    // some jss/css to make the cards look a bit better on Internet Explorer
    "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
      display: "inline-block !important"
    }
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none"
  },
  cardProfile: {
    marginTop: "30px",
    textAlign: "center"
  },
  cardBlog: {
    marginTop: "60px"
  },
  cardRaised: {
    boxShadow: "0 16px 38px -12px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.56), 0 4px 25px 0px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.2)"
  },
  cardBackground: {
    backgroundPosition: "50%",
    backgroundSize: "cover",
    textAlign: "center",
    color: nextjs_material_tim_andrus["Z" /* whiteColor */],
    "& h3": {
      color: nextjs_material_tim_andrus["Z" /* whiteColor */] + " !important"
    },
    "& p": {
      color: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Z" /* whiteColor */]) + ",0.7)!important"
    },
    "&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""',
      backgroundColor: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.56)",
      borderRadius: "6px"
    },
    "& small": {
      color: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Z" /* whiteColor */]) + ", 0.7) !important"
    }
  },
  cardPricing: {
    textAlign: "center",
    "&:after": {
      backgroundColor: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.7) !important"
    },
    "& ul": {
      listStyle: "none",
      padding: 0,
      maxWidth: "240px",
      margin: "10px auto"
    },
    "& ul li": {
      color: nextjs_material_tim_andrus["s" /* grayColor */][0],
      textAlign: "center",
      padding: "12px 0px",
      borderBottom: "1px solid rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["s" /* grayColor */][0]) + ",0.3)"
    },
    "& ul li:last-child": {
      border: 0
    },
    "& ul li b": {
      color: nextjs_material_tim_andrus["s" /* grayColor */][1]
    },
    "& h1": {
      marginTop: "30px"
    },
    "& h1 small": {
      display: "inline-flex",
      height: 0,
      fontSize: "18px"
    },
    "& h1 small:first-child": {
      position: "relative",
      top: "-17px",
      fontSize: "26px"
    },
    "& ul li svg,& ul li .fab,& ul li .fas,& ul li .far,& ul li .fal,& ul li .material-icons": {
      position: "relative",
      top: "7px"
    }
  },
  cardPricingColor: {
    "& ul li": {
      color: nextjs_material_tim_andrus["Z" /* whiteColor */],
      borderColor: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Z" /* whiteColor */]) + ",0.3)",
      "& b, & svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
        color: nextjs_material_tim_andrus["Z" /* whiteColor */],
        fontWeight: "700"
      }
    }
  },
  cardProduct: {
    marginTop: "30px"
  },
  primary: {
    background: "linear-gradient(60deg," + nextjs_material_tim_andrus["G" /* primaryColor */][1] + ", " + nextjs_material_tim_andrus["G" /* primaryColor */][2] + ")",
    "& h1 small": {
      color: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Z" /* whiteColor */]) + ", 0.8)"
    },
    color: nextjs_material_tim_andrus["Z" /* whiteColor */]
  },
  info: {
    background: "linear-gradient(60deg," + nextjs_material_tim_andrus["w" /* infoColor */][1] + "," + nextjs_material_tim_andrus["w" /* infoColor */][2] + ")",
    "& h1 small": {
      color: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Z" /* whiteColor */]) + ", 0.8)"
    },
    color: nextjs_material_tim_andrus["Z" /* whiteColor */]
  },
  success: {
    background: "linear-gradient(60deg," + nextjs_material_tim_andrus["R" /* successColor */][1] + "," + nextjs_material_tim_andrus["R" /* successColor */][2] + ")",
    "& h1 small": {
      color: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Z" /* whiteColor */]) + ", 0.8)"
    },
    color: nextjs_material_tim_andrus["Z" /* whiteColor */]
  },
  warning: {
    background: "linear-gradient(60deg," + nextjs_material_tim_andrus["Y" /* warningColor */][1] + "," + nextjs_material_tim_andrus["Y" /* warningColor */][2] + ")",
    "& h1 small": {
      color: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Z" /* whiteColor */]) + ", 0.8)"
    },
    color: nextjs_material_tim_andrus["Z" /* whiteColor */]
  },
  danger: {
    background: "linear-gradient(60deg," + nextjs_material_tim_andrus["l" /* dangerColor */][1] + "," + nextjs_material_tim_andrus["l" /* dangerColor */][2] + ")",
    "& h1 small": {
      color: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Z" /* whiteColor */]) + ", 0.8)"
    },
    color: nextjs_material_tim_andrus["Z" /* whiteColor */]
  },
  rose: {
    background: "linear-gradient(60deg," + nextjs_material_tim_andrus["K" /* roseColor */][1] + "," + nextjs_material_tim_andrus["K" /* roseColor */][2] + ")",
    "& h1 small": {
      color: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Z" /* whiteColor */]) + ", 0.8)"
    },
    color: nextjs_material_tim_andrus["Z" /* whiteColor */]
  }
};
/* harmony default export */ var components_cardStyle = (cardStyle);
// CONCATENATED MODULE: ./components/Card/Card.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components
 // @material-ui/icons
// core components


const useStyles = Object(styles_["makeStyles"])(components_cardStyle);
function Card(props) {
  const {
    className,
    children,
    plain,
    profile,
    blog,
    raised,
    background,
    pricing,
    color,
    product,
    testimonial
  } = props,
        rest = _objectWithoutProperties(props, ["className", "children", "plain", "profile", "blog", "raised", "background", "pricing", "color", "product", "testimonial"]);

  const classes = useStyles();
  const cardClasses = external_classnames_default()({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile || testimonial,
    [classes.cardBlog]: blog,
    [classes.cardRaised]: raised,
    [classes.cardBackground]: background,
    [classes.cardPricingColor]: pricing && color !== undefined || pricing && background !== undefined,
    [classes[color]]: color,
    [classes.cardPricing]: pricing,
    [classes.cardProduct]: product,
    [className]: className !== undefined
  });
  return __jsx("div", _extends({
    className: cardClasses
  }, rest), children);
}

/***/ }),

/***/ "AG1V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NhcmQtcHJvZmlsZTEuanBnIjs=");

/***/ }),

/***/ "AW/9":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Airplay");

/***/ }),

/***/ "Ao/0":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Build");

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "CLSS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NhcmQtcHJvZmlsZTEtc3F1YXJlLmpwZyI7");

/***/ }),

/***/ "DME6":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountCircle");

/***/ }),

/***/ "EAEr":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Share");

/***/ }),

/***/ "EmCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "FQAE":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ShoppingCart");

/***/ }),

/***/ "G2Vl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CardAvatar; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-tim-andrus.js
var nextjs_material_tim_andrus = __webpack_require__("k7mW");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/components/cardAvatarStyle.js

const cardAvatarStyle = {
  cardAvatar: {
    "&$cardAvatarProfile img,&$cardAvatarTestimonial img": {
      width: "100%",
      height: "auto"
    }
  },
  cardAvatarProfile: {
    maxWidth: "130px",
    maxHeight: "130px",
    margin: "-50px auto 0",
    borderRadius: "50%",
    overflow: "hidden",
    padding: "0",
    boxShadow: "0 16px 38px -12px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.56), 0 4px 25px 0px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.2)",
    "&$cardAvatarPlain": {
      marginTop: "0"
    }
  },
  cardAvatarPlain: {},
  cardAvatarTestimonial: {
    margin: "-50px auto 0",
    maxWidth: "100px",
    maxHeight: "100px",
    borderRadius: "50%",
    overflow: "hidden",
    padding: "0",
    boxShadow: "0 16px 38px -12px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.56), 0 4px 25px 0px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.2)",
    "&$cardAvatarPlain": {
      marginTop: "0"
    }
  },
  cardAvatarTestimonialFooter: {
    marginBottom: "-50px",
    marginTop: "10px"
  }
};
/* harmony default export */ var components_cardAvatarStyle = (cardAvatarStyle);
// CONCATENATED MODULE: ./components/Card/CardAvatar.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components
 // @material-ui/icons
// core components


const useStyles = Object(styles_["makeStyles"])(components_cardAvatarStyle);
function CardAvatar(props) {
  const {
    children,
    className,
    plain,
    profile,
    testimonial,
    testimonialFooter
  } = props,
        rest = _objectWithoutProperties(props, ["children", "className", "plain", "profile", "testimonial", "testimonialFooter"]);

  const classes = useStyles();
  const cardAvatarClasses = external_classnames_default()({
    [classes.cardAvatar]: true,
    [classes.cardAvatarProfile]: profile,
    [classes.cardAvatarPlain]: plain,
    [classes.cardAvatarTestimonial]: testimonial,
    [classes.cardAvatarTestimonialFooter]: testimonialFooter,
    [className]: className !== undefined
  });
  return __jsx("div", _extends({
    className: cardAvatarClasses
  }, rest), children);
}

/***/ }),

/***/ "GC5X":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Extension");

/***/ }),

/***/ "GCdX":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FormatPaint");

/***/ }),

/***/ "HWfr":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Chat");

/***/ }),

/***/ "Hak1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2tlbmRhbGwuanBnIjs=");

/***/ }),

/***/ "IZOe":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Star");

/***/ }),

/***/ "JJVH":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ShoppingBasket");

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "Kg+a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: ./assets/jss/nextjs-material-tim-andrus.js
var nextjs_material_tim_andrus = __webpack_require__("k7mW");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/components/buttonStyle.js

const buttonStyle = {
  button: {
    minHeight: "auto",
    minWidth: "auto",
    backgroundColor: nextjs_material_tim_andrus["s" /* grayColor */][0],
    color: nextjs_material_tim_andrus["Z" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["s" /* grayColor */][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["s" /* grayColor */][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["s" /* grayColor */][0]) + ", 0.12)",
    border: "none",
    borderRadius: "3px",
    position: "relative",
    padding: "12px 30px",
    margin: ".3125rem 1px",
    fontSize: "12px",
    fontWeight: "400",
    textTransform: "uppercase",
    letterSpacing: "0",
    willChange: "box-shadow, transform",
    transition: "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    lineHeight: "1.42857143",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    cursor: "pointer",
    "&:hover,&:focus": {
      color: nextjs_material_tim_andrus["Z" /* whiteColor */],
      backgroundColor: nextjs_material_tim_andrus["s" /* grayColor */][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["s" /* grayColor */][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["s" /* grayColor */][0]) + ", 0.2)"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      display: "inline-block",
      top: "0",
      marginTop: "-1em",
      marginBottom: "-1em",
      fontSize: "1.1rem",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "& svg": {
      position: "relative",
      display: "inline-block",
      top: "0",
      width: "18px",
      height: "18px",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "&$justIcon": {
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        marginTop: "0px",
        marginRight: "0px",
        position: "absolute",
        width: "100%",
        transform: "none",
        left: "0px",
        top: "0px",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px"
      }
    }
  },
  fullWidth: {
    width: "100%"
  },
  primary: {
    backgroundColor: nextjs_material_tim_andrus["G" /* primaryColor */][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["G" /* primaryColor */][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["G" /* primaryColor */][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["G" /* primaryColor */][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_tim_andrus["G" /* primaryColor */][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["G" /* primaryColor */][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["G" /* primaryColor */][0]) + ", 0.2)"
    }
  },
  secondary: {
    color: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ",.87)",
    backgroundColor: nextjs_material_tim_andrus["L" /* secondaryColor */][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["L" /* secondaryColor */][0]) + ",.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["L" /* secondaryColor */][0]) + ",.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["L" /* secondaryColor */][0]) + ",.12)",
    "&:hover,&:focus": {
      boxShdow: "0 14px 26px -12px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["L" /* secondaryColor */][0]) + ",.42), 0 4px 23px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ",.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["L" /* secondaryColor */][0]) + ",.2)",
      color: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ",.87)",
      backgroundColor: nextjs_material_tim_andrus["s" /* grayColor */][19]
    }
  },
  info: {
    backgroundColor: nextjs_material_tim_andrus["w" /* infoColor */][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["w" /* infoColor */][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["w" /* infoColor */][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["w" /* infoColor */][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_tim_andrus["w" /* infoColor */][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["w" /* infoColor */][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["w" /* infoColor */][0]) + ", 0.2)"
    }
  },
  success: {
    backgroundColor: nextjs_material_tim_andrus["R" /* successColor */][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["R" /* successColor */][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["R" /* successColor */][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["R" /* successColor */][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_tim_andrus["R" /* successColor */][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["R" /* successColor */][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["R" /* successColor */][0]) + ", 0.2)"
    }
  },
  warning: {
    backgroundColor: nextjs_material_tim_andrus["Y" /* warningColor */][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Y" /* warningColor */][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Y" /* warningColor */][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Y" /* warningColor */][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_tim_andrus["Y" /* warningColor */][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Y" /* warningColor */][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Y" /* warningColor */][0]) + ", 0.2)"
    }
  },
  danger: {
    backgroundColor: nextjs_material_tim_andrus["l" /* dangerColor */][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["l" /* dangerColor */][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["l" /* dangerColor */][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["l" /* dangerColor */][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_tim_andrus["l" /* dangerColor */][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["l" /* dangerColor */][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["l" /* dangerColor */][0]) + ", 0.2)"
    }
  },
  rose: {
    backgroundColor: nextjs_material_tim_andrus["K" /* roseColor */][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["K" /* roseColor */][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["K" /* roseColor */][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["K" /* roseColor */][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_tim_andrus["K" /* roseColor */][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["K" /* roseColor */][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["K" /* roseColor */][0]) + ", 0.2)"
    }
  },
  white: {
    "&,&:focus,&:hover": {
      backgroundColor: nextjs_material_tim_andrus["Z" /* whiteColor */],
      color: nextjs_material_tim_andrus["s" /* grayColor */][0]
    }
  },
  twitter: {
    backgroundColor: nextjs_material_tim_andrus["V" /* twitterColor */],
    color: nextjs_material_tim_andrus["Z" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["V" /* twitterColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["V" /* twitterColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["V" /* twitterColor */]) + ", 0.12)",
    "&:hover,&:focus,&:visited": {
      backgroundColor: nextjs_material_tim_andrus["V" /* twitterColor */],
      color: nextjs_material_tim_andrus["Z" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["V" /* twitterColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["V" /* twitterColor */]) + ", 0.2)"
    }
  },
  facebook: {
    backgroundColor: nextjs_material_tim_andrus["q" /* facebookColor */],
    color: nextjs_material_tim_andrus["Z" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["q" /* facebookColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["q" /* facebookColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["q" /* facebookColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_tim_andrus["q" /* facebookColor */],
      color: nextjs_material_tim_andrus["Z" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["q" /* facebookColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["q" /* facebookColor */]) + ", 0.2)"
    }
  },
  google: {
    backgroundColor: nextjs_material_tim_andrus["r" /* googleColor */],
    color: nextjs_material_tim_andrus["Z" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["r" /* googleColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["r" /* googleColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["r" /* googleColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_tim_andrus["r" /* googleColor */],
      color: nextjs_material_tim_andrus["Z" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["r" /* googleColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["r" /* googleColor */]) + ", 0.2)"
    }
  },
  linkedin: {
    backgroundColor: nextjs_material_tim_andrus["y" /* linkedinColor */],
    color: nextjs_material_tim_andrus["Z" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["y" /* linkedinColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["y" /* linkedinColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["y" /* linkedinColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_tim_andrus["y" /* linkedinColor */],
      color: nextjs_material_tim_andrus["Z" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["y" /* linkedinColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["y" /* linkedinColor */]) + ", 0.2)"
    }
  },
  pinterest: {
    backgroundColor: nextjs_material_tim_andrus["D" /* pinterestColor */],
    color: nextjs_material_tim_andrus["Z" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["D" /* pinterestColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["D" /* pinterestColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["D" /* pinterestColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_tim_andrus["D" /* pinterestColor */],
      color: nextjs_material_tim_andrus["Z" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["D" /* pinterestColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["D" /* pinterestColor */]) + ", 0.2)"
    }
  },
  youtube: {
    backgroundColor: nextjs_material_tim_andrus["ab" /* youtubeColor */],
    color: nextjs_material_tim_andrus["Z" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["ab" /* youtubeColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["ab" /* youtubeColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["ab" /* youtubeColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_tim_andrus["ab" /* youtubeColor */],
      color: nextjs_material_tim_andrus["Z" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["ab" /* youtubeColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["ab" /* youtubeColor */]) + ", 0.2)"
    }
  },
  tumblr: {
    backgroundColor: nextjs_material_tim_andrus["U" /* tumblrColor */],
    color: nextjs_material_tim_andrus["Z" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["U" /* tumblrColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["U" /* tumblrColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["U" /* tumblrColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_tim_andrus["U" /* tumblrColor */],
      color: nextjs_material_tim_andrus["Z" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["U" /* tumblrColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["U" /* tumblrColor */]) + ", 0.2)"
    }
  },
  github: {
    backgroundColor: nextjs_material_tim_andrus["s" /* grayColor */][8],
    color: nextjs_material_tim_andrus["Z" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["s" /* grayColor */][8]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["s" /* grayColor */][8]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["s" /* grayColor */][8]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_tim_andrus["s" /* grayColor */][8],
      color: nextjs_material_tim_andrus["Z" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["s" /* grayColor */][8]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["s" /* grayColor */][8]) + ", 0.2)"
    }
  },
  behance: {
    backgroundColor: nextjs_material_tim_andrus["a" /* behanceColor */],
    color: nextjs_material_tim_andrus["Z" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["a" /* behanceColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["a" /* behanceColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["a" /* behanceColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_tim_andrus["a" /* behanceColor */],
      color: nextjs_material_tim_andrus["Z" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["a" /* behanceColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["a" /* behanceColor */]) + ", 0.2)"
    }
  },
  dribbble: {
    backgroundColor: nextjs_material_tim_andrus["p" /* dribbbleColor */],
    color: nextjs_material_tim_andrus["Z" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["p" /* dribbbleColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["p" /* dribbbleColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["p" /* dribbbleColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_tim_andrus["p" /* dribbbleColor */],
      color: nextjs_material_tim_andrus["Z" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["p" /* dribbbleColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["p" /* dribbbleColor */]) + ", 0.2)"
    }
  },
  reddit: {
    backgroundColor: nextjs_material_tim_andrus["H" /* redditColor */],
    color: nextjs_material_tim_andrus["Z" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["H" /* redditColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["H" /* redditColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["H" /* redditColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_tim_andrus["H" /* redditColor */],
      color: nextjs_material_tim_andrus["Z" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["H" /* redditColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["H" /* redditColor */]) + ", 0.2)"
    }
  },
  instagram: {
    backgroundColor: nextjs_material_tim_andrus["x" /* instagramColor */],
    color: nextjs_material_tim_andrus["Z" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["x" /* instagramColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["x" /* instagramColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["x" /* instagramColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_tim_andrus["x" /* instagramColor */],
      color: nextjs_material_tim_andrus["Z" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["x" /* instagramColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["x" /* instagramColor */]) + ", 0.2)"
    }
  },
  simple: {
    "&,&:focus,&:hover": {
      color: nextjs_material_tim_andrus["Z" /* whiteColor */],
      background: "transparent",
      boxShadow: "none"
    },
    "&$primary": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_tim_andrus["G" /* primaryColor */][0]
      }
    },
    "&$info": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_tim_andrus["w" /* infoColor */][0]
      }
    },
    "&$success": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_tim_andrus["R" /* successColor */][0]
      }
    },
    "&$warning": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_tim_andrus["Y" /* warningColor */][0]
      }
    },
    "&$rose": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_tim_andrus["K" /* roseColor */][0]
      }
    },
    "&$danger": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_tim_andrus["l" /* dangerColor */][0]
      }
    },
    "&$twitter": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_tim_andrus["V" /* twitterColor */]
      }
    },
    "&$facebook": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_tim_andrus["q" /* facebookColor */]
      }
    },
    "&$google": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_tim_andrus["r" /* googleColor */]
      }
    },
    "&$linkedin": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_tim_andrus["y" /* linkedinColor */]
      }
    },
    "&$pinterest": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_tim_andrus["D" /* pinterestColor */]
      }
    },
    "&$youtube": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_tim_andrus["ab" /* youtubeColor */]
      }
    },
    "&$tumblr": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_tim_andrus["U" /* tumblrColor */]
      }
    },
    "&$github": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_tim_andrus["s" /* grayColor */][8]
      }
    },
    "&$behance": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_tim_andrus["a" /* behanceColor */]
      }
    },
    "&$dribbble": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_tim_andrus["p" /* dribbbleColor */]
      }
    },
    "&$reddit": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_tim_andrus["H" /* redditColor */]
      }
    },
    "&$instagram": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_tim_andrus["x" /* instagramColor */]
      }
    }
  },
  transparent: {
    "&,&:focus,&:hover": {
      color: "inherit",
      background: "transparent",
      boxShadow: "none"
    }
  },
  disabled: {
    opacity: "0.65",
    pointerEvents: "none"
  },
  lg: {
    "&$justIcon": {
      "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
        marginTop: "-4px"
      }
    },
    padding: "1.125rem 2.25rem",
    fontSize: "0.875rem",
    lineHeight: "1.333333",
    borderRadius: "0.2rem"
  },
  sm: {
    "&$justIcon": {
      "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
        marginTop: "1px"
      }
    },
    padding: "0.40625rem 1.25rem",
    fontSize: "0.6875rem",
    lineHeight: "1.5",
    borderRadius: "0.2rem"
  },
  round: {
    borderRadius: "30px"
  },
  block: {
    width: "100% !important"
  },
  link: {
    "&,&:hover,&:focus": {
      backgroundColor: "transparent",
      color: nextjs_material_tim_andrus["s" /* grayColor */][0],
      boxShadow: "none"
    }
  },
  justIcon: {
    paddingLeft: "12px",
    paddingRight: "12px",
    fontSize: "20px",
    height: "41px",
    minWidth: "41px",
    width: "41px",
    "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
      marginRight: "0px"
    },
    "&$lg": {
      height: "57px",
      minWidth: "57px",
      width: "57px",
      lineHeight: "56px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "32px",
        lineHeight: "56px"
      },
      "& svg": {
        width: "32px",
        height: "32px"
      }
    },
    "&$sm": {
      height: "30px",
      minWidth: "30px",
      width: "30px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "17px",
        lineHeight: "29px"
      },
      "& svg": {
        width: "17px",
        height: "17px"
      }
    }
  },
  fileButton: {// display: "inline-block"
  }
};
/* harmony default export */ var components_buttonStyle = (buttonStyle);
// CONCATENATED MODULE: ./components/CustomButtons/Button.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components



const useStyles = Object(styles_["makeStyles"])(components_buttonStyle);
const RegularButton = external_react_default.a.forwardRef((props, ref) => {
  const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    fileButton,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["color", "round", "children", "fullWidth", "disabled", "simple", "size", "block", "link", "justIcon", "fileButton", "className"]);

  const classes = useStyles();
  const btnClasses = external_classnames_default()({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [classes.fileButton]: fileButton,
    [className]: className
  });
  return __jsx(Button_default.a, _extends({}, rest, {
    ref: ref,
    className: btnClasses
  }), children);
});
/* harmony default export */ var Button = __webpack_exports__["a"] = (RegularButton);

/***/ }),

/***/ "LVbA":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MonetizationOn");

/***/ }),

/***/ "LiOz":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/WatchLater");

/***/ }),

/***/ "Lldq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Warning; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pUqt");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // nodejs library to set properties for components

// @material-ui/core components
 // core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(assets_jss_nextjs_material_tim_andrus_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);
function Warning(props) {
  const {
    children
  } = props;
  const classes = useStyles();
  return __jsx("div", {
    className: classes.defaultFontStyle + " " + classes.warningText
  }, children);
}

/***/ }),

/***/ "Lu7A":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Error");

/***/ }),

/***/ "M2SB":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VerifiedUser");

/***/ }),

/***/ "Ms0O":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "OL5M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2JnOS5qcGciOw==");

/***/ }),

/***/ "OW/O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NhcmQtcHJvZmlsZTYtc3F1YXJlLmpwZyI7");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "P+fx":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Apps");

/***/ }),

/***/ "Q01v":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "Q6fj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL21hcmMuanBnIjs=");

/***/ }),

/***/ "QOEo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CustomDropdown; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/MenuItem"
var MenuItem_ = __webpack_require__("x54t");
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);

// EXTERNAL MODULE: external "@material-ui/core/MenuList"
var MenuList_ = __webpack_require__("xmQw");
var MenuList_default = /*#__PURE__*/__webpack_require__.n(MenuList_);

// EXTERNAL MODULE: external "@material-ui/core/ClickAwayListener"
var ClickAwayListener_ = __webpack_require__("31Yn");
var ClickAwayListener_default = /*#__PURE__*/__webpack_require__.n(ClickAwayListener_);

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__("qt1I");
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: external "@material-ui/core/Grow"
var Grow_ = __webpack_require__("mf1M");
var Grow_default = /*#__PURE__*/__webpack_require__.n(Grow_);

// EXTERNAL MODULE: external "@material-ui/core/Divider"
var Divider_ = __webpack_require__("nybW");
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);

// EXTERNAL MODULE: external "@material-ui/core/Popper"
var Popper_ = __webpack_require__("jD8W");
var Popper_default = /*#__PURE__*/__webpack_require__.n(Popper_);

// EXTERNAL MODULE: ./components/CustomButtons/Button.js + 1 modules
var Button = __webpack_require__("Kg+a");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-tim-andrus.js
var nextjs_material_tim_andrus = __webpack_require__("k7mW");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/components/customDropdownStyle.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const customDropdownStyle = theme => ({
  popperClose: {
    pointerEvents: "none",
    display: "none !important"
  },
  popperNav: {
    [theme.breakpoints.down("sm")]: {
      "&, &$popperResponsive": {
        position: "static !important",
        left: "unset !important",
        top: "unset !important",
        transform: "none !important",
        willChange: "none !important",
        "& > div": {
          boxShadow: "none !important",
          marginLeft: "1.5rem",
          marginRight: "1.5rem",
          transition: "none !important",
          marginTop: "0px !important",
          marginBottom: "5px !important",
          padding: "0px !important"
        }
      }
    }
  },
  manager: {
    "& > div > button:first-child > span:first-child, & > div > a:first-child > span:first-child": {
      width: "100%"
    }
  },
  innerManager: {
    display: "block",
    "& > div > button,& > div > a": {
      margin: "0px !important",
      color: "inherit !important",
      padding: "10px 20px !important",
      "& > span:first-child": {
        width: "100%",
        justifyContent: "flex-start"
      }
    }
  },
  target: {
    "& > button:first-child > span:first-child, & > a:first-child > span:first-child": {
      display: "inline-block"
    },
    "& $caret": {
      marginLeft: "0px"
    }
  },
  dropdown: {
    borderRadius: "3px",
    border: "0",
    boxShadow: "0 2px 5px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.26)",
    top: "100%",
    zIndex: "1000",
    minWidth: "160px",
    padding: "5px 0",
    margin: "2px 0 0",
    fontSize: "14px",
    textAlign: "left",
    listStyle: "none",
    backgroundColor: nextjs_material_tim_andrus["Z" /* whiteColor */],
    backgroundClip: "padding-box"
  },
  menuList: {
    padding: "0"
  },
  popperResponsive: {
    zIndex: "1200",
    position: "absolute !important",
    [theme.breakpoints.down("sm")]: {
      zIndex: "1640",
      float: "none",
      width: "auto",
      marginTop: "0",
      backgroundColor: "transparent",
      border: "0",
      boxShadow: "none",
      color: "black"
    }
  },
  dropdownItem: _objectSpread({}, nextjs_material_tim_andrus["m" /* defaultFont */], {
    fontSize: "13px",
    padding: "10px 20px",
    margin: "0 5px",
    borderRadius: "2px",
    position: "relative",
    transition: "all 150ms linear",
    display: "block",
    clear: "both",
    fontWeight: "400",
    height: "100%",
    color: nextjs_material_tim_andrus["s" /* grayColor */][8],
    whiteSpace: "nowrap",
    minHeight: "unset"
  }),
  darkHover: {
    "&:hover": {
      boxShadow: "0 4px 20px 0px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.14), 0 7px 10px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["s" /* grayColor */][9]) + ", 0.4)",
      backgroundColor: nextjs_material_tim_andrus["s" /* grayColor */][9],
      color: nextjs_material_tim_andrus["Z" /* whiteColor */]
    }
  },
  primaryHover: {
    "&:hover": _objectSpread({
      backgroundColor: nextjs_material_tim_andrus["G" /* primaryColor */][0],
      color: nextjs_material_tim_andrus["Z" /* whiteColor */]
    }, nextjs_material_tim_andrus["E" /* primaryBoxShadow */])
  },
  infoHover: {
    "&:hover": _objectSpread({
      backgroundColor: nextjs_material_tim_andrus["w" /* infoColor */][0],
      color: nextjs_material_tim_andrus["Z" /* whiteColor */]
    }, nextjs_material_tim_andrus["u" /* infoBoxShadow */])
  },
  successHover: {
    "&:hover": _objectSpread({
      backgroundColor: nextjs_material_tim_andrus["R" /* successColor */][0],
      color: nextjs_material_tim_andrus["Z" /* whiteColor */]
    }, nextjs_material_tim_andrus["P" /* successBoxShadow */])
  },
  warningHover: {
    "&:hover": _objectSpread({
      backgroundColor: nextjs_material_tim_andrus["Y" /* warningColor */][0],
      color: nextjs_material_tim_andrus["Z" /* whiteColor */]
    }, nextjs_material_tim_andrus["W" /* warningBoxShadow */])
  },
  dangerHover: {
    "&:hover": _objectSpread({
      backgroundColor: nextjs_material_tim_andrus["l" /* dangerColor */][0],
      color: nextjs_material_tim_andrus["Z" /* whiteColor */]
    }, nextjs_material_tim_andrus["j" /* dangerBoxShadow */])
  },
  roseHover: {
    "&:hover": _objectSpread({
      backgroundColor: nextjs_material_tim_andrus["K" /* roseColor */][0],
      color: nextjs_material_tim_andrus["Z" /* whiteColor */]
    }, nextjs_material_tim_andrus["I" /* roseBoxShadow */])
  },
  dropdownItemRTL: {
    textAlign: "right"
  },
  dropdownDividerItem: {
    margin: "5px 0",
    backgroundColor: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.12)",
    height: "1px",
    overflow: "hidden"
  },
  buttonIcon: {
    width: "20px",
    height: "20px"
  },
  caret: {
    transition: "all 150ms ease-in",
    display: "inline-block",
    width: "0",
    height: "0",
    marginLeft: "4px",
    verticalAlign: "middle",
    borderTop: "4px solid",
    borderRight: "4px solid transparent",
    borderLeft: "4px solid transparent"
  },
  caretActive: {
    transform: "rotate(180deg)"
  },
  caretDropup: {
    transform: "rotate(180deg)"
  },
  caretRTL: {
    marginRight: "4px"
  },
  dropdownHeader: {
    display: "block",
    padding: "0.1875rem 1.25rem",
    fontSize: "0.75rem",
    lineHeight: "1.428571",
    color: nextjs_material_tim_andrus["s" /* grayColor */][10],
    whiteSpace: "nowrap",
    fontWeight: "inherit",
    marginTop: "10px",
    minHeight: "24px",
    "&:hover,&:focus": {
      backgroundColor: "transparent",
      cursor: "auto"
    }
  },
  noLiPadding: {
    padding: "0"
  }
});

/* harmony default export */ var components_customDropdownStyle = (customDropdownStyle);
// CONCATENATED MODULE: ./components/CustomDropdown/CustomDropdown.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components







 // core components



const useStyles = Object(styles_["makeStyles"])(components_customDropdownStyle);
function CustomDropdown(props) {
  const [anchorEl, setAnchorEl] = external_react_default.a.useState(null);

  const handleClick = event => {
    if (anchorEl && anchorEl.contains(event.target)) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = event => {
    if (anchorEl.contains(event.target)) {
      return;
    }

    setAnchorEl(null);
  };

  const handleCloseMenu = param => {
    setAnchorEl(null);

    if (props && props.onClick) {
      props.onClick(param);
    }
  };

  const {
    buttonText,
    buttonIcon,
    dropdownList,
    buttonProps,
    dropup,
    dropdownHeader,
    caret,
    hoverColor,
    dropPlacement,
    rtlActive,
    noLiPadding,
    innerDropDown,
    navDropdown
  } = props;
  const classes = useStyles();
  const caretClasses = external_classnames_default()({
    [classes.caret]: true,
    [classes.caretDropup]: dropup && !anchorEl,
    [classes.caretActive]: Boolean(anchorEl) && !dropup,
    [classes.caretRTL]: rtlActive
  });
  const dropdownItem = external_classnames_default()({
    [classes.dropdownItem]: true,
    [classes[hoverColor + "Hover"]]: true,
    [classes.noLiPadding]: noLiPadding,
    [classes.dropdownItemRTL]: rtlActive
  });

  const dropDownMenu = __jsx(MenuList_default.a, {
    role: "menu",
    className: classes.menuList
  }, dropdownHeader !== undefined ? __jsx(MenuItem_default.a, {
    onClick: () => handleCloseMenu(dropdownHeader),
    className: classes.dropdownHeader
  }, dropdownHeader) : null, dropdownList.map((prop, key) => {
    if (prop.divider) {
      return __jsx(Divider_default.a, {
        key: key,
        onClick: () => handleCloseMenu("divider"),
        className: classes.dropdownDividerItem
      });
    } else if (prop.props !== undefined && prop.props["data-ref"] === "multi") {
      return __jsx(MenuItem_default.a, {
        key: key,
        className: dropdownItem,
        style: {
          overflow: "visible",
          padding: 0
        }
      }, prop);
    }

    return __jsx(MenuItem_default.a, {
      key: key,
      onClick: () => handleCloseMenu(prop),
      className: dropdownItem
    }, prop);
  }));

  return __jsx("div", {
    className: innerDropDown ? classes.innerManager : classes.manager
  }, __jsx("div", {
    className: buttonText !== undefined ? "" : classes.target
  }, __jsx(Button["a" /* default */], _extends({
    "aria-label": "Notifications",
    "aria-owns": anchorEl ? "menu-list" : null,
    "aria-haspopup": "true"
  }, buttonProps, {
    onClick: handleClick
  }), buttonIcon !== undefined ? __jsx(props.buttonIcon, {
    className: classes.buttonIcon
  }) : null, buttonText !== undefined ? buttonText : null, caret ? __jsx("b", {
    className: caretClasses
  }) : null)), __jsx(Popper_default.a, {
    open: Boolean(anchorEl),
    anchorEl: anchorEl,
    transition: true,
    disablePortal: true,
    placement: dropPlacement,
    className: external_classnames_default()({
      [classes.popperClose]: !anchorEl,
      [classes.popperResponsive]: true,
      [classes.popperNav]: Boolean(anchorEl) && navDropdown
    })
  }, () => __jsx(Grow_default.a, {
    in: Boolean(anchorEl),
    id: "menu-list",
    style: dropup ? {
      transformOrigin: "0 100% 0"
    } : {
      transformOrigin: "0 0 0"
    }
  }, __jsx(Paper_default.a, {
    className: classes.dropdown
  }, innerDropDown ? dropDownMenu : __jsx(ClickAwayListener_default.a, {
    onClickAway: handleClose
  }, dropDownMenu)))));
}
CustomDropdown.defaultProps = {
  caret: true,
  dropup: false,
  hoverColor: "primary"
};

/***/ }),

/***/ "QkBZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NhcmQtcHJvZmlsZTQtc3F1YXJlLmpwZyI7");

/***/ }),

/***/ "QzC/":
/***/ (function(module, exports) {

module.exports = require("react-swipeable-views");

/***/ }),

/***/ "RVvK":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PinDrop");

/***/ }),

/***/ "SJC6":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

/***/ }),

/***/ "SuH/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ NavPills; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "react-swipeable-views"
var external_react_swipeable_views_ = __webpack_require__("QzC/");
var external_react_swipeable_views_default = /*#__PURE__*/__webpack_require__.n(external_react_swipeable_views_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/Tab"
var Tab_ = __webpack_require__("6Yxu");
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_);

// EXTERNAL MODULE: external "@material-ui/core/Tabs"
var Tabs_ = __webpack_require__("SJC6");
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs_);

// EXTERNAL MODULE: ./components/Grid/GridContainer.js
var GridContainer = __webpack_require__("mtPR");

// EXTERNAL MODULE: ./components/Grid/GridItem.js
var GridItem = __webpack_require__("i4t8");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-tim-andrus.js
var nextjs_material_tim_andrus = __webpack_require__("k7mW");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/components/navPillsStyle.js


const navPillsStyle = theme => ({
  root: {
    marginTop: "20px",
    paddingLeft: "0",
    marginBottom: "0",
    overflow: "visible !important"
  },
  flexContainer: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexWrap: "wrap"
    }
  },
  displayNone: {
    display: "none !important"
  },
  fixed: {
    overflow: "visible !important"
  },
  horizontalDisplay: {
    display: "block"
  },
  pills: {
    float: "left",
    position: "relative",
    display: "block",
    borderRadius: "30px",
    minWidth: "100px",
    textAlign: "center",
    transition: "all .3s",
    padding: "10px 15px",
    color: nextjs_material_tim_andrus["s" /* grayColor */][15],
    height: "auto",
    opacity: "1",
    maxWidth: "100%",
    margin: "0 5px",
    minHeight: "unset",
    lineHeight: "24px",
    textTransform: "uppercase",
    fontSize: "12px",
    fontWeight: "500"
  },
  pillsWithIcons: {
    borderRadius: "4px"
  },
  tabIcon: {
    width: "30px",
    height: "30px",
    display: "block",
    margin: "15px 0 !important"
  },
  horizontalPills: {
    width: "100%",
    float: "none !important",
    "& + button": {
      margin: "10px 0"
    }
  },
  contentWrapper: {
    marginTop: "20px",
    "& .react-swipeable-view-container > div > div": {
      paddingLeft: "15px",
      paddingRight: "15px"
    }
  },
  primary: {
    "&,&:hover": {
      color: nextjs_material_tim_andrus["Z" /* whiteColor */],
      backgroundColor: nextjs_material_tim_andrus["G" /* primaryColor */][0],
      boxShadow: "0 4px 20px 0px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.14), 0 7px 10px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["G" /* primaryColor */][0]) + ", 0.4)"
    }
  },
  info: {
    "&,&:hover": {
      color: nextjs_material_tim_andrus["Z" /* whiteColor */],
      backgroundColor: nextjs_material_tim_andrus["w" /* infoColor */][0],
      boxShadow: "0 4px 20px 0px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.14), 0 7px 10px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["R" /* successColor */][0]) + ", 0.4)"
    }
  },
  success: {
    "&,&:hover": {
      color: nextjs_material_tim_andrus["Z" /* whiteColor */],
      backgroundColor: nextjs_material_tim_andrus["R" /* successColor */][0],
      boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["R" /* successColor */][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["R" /* successColor */][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["R" /* successColor */][0]) + ", 0.12)"
    }
  },
  warning: {
    "&,&:hover": {
      color: nextjs_material_tim_andrus["Z" /* whiteColor */],
      backgroundColor: nextjs_material_tim_andrus["Y" /* warningColor */][0],
      boxShadow: "0 4px 20px 0px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.14), 0 7px 10px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Y" /* warningColor */][0]) + ", 0.4)"
    }
  },
  danger: {
    "&,&:hover": {
      color: nextjs_material_tim_andrus["Z" /* whiteColor */],
      backgroundColor: nextjs_material_tim_andrus["l" /* dangerColor */][0],
      boxShadow: "0 4px 20px 0px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.14), 0 7px 10px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Y" /* warningColor */][0]) + ", 0.4)"
    }
  },
  rose: {
    "&,&:hover": {
      color: nextjs_material_tim_andrus["Z" /* whiteColor */],
      backgroundColor: nextjs_material_tim_andrus["K" /* roseColor */][0],
      boxShadow: "0 4px 20px 0px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.14), 0 7px 10px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["K" /* roseColor */][0]) + ", 0.4)"
    }
  },
  alignCenter: {
    alignItems: "center",
    justifyContent: "center"
  },
  tabLabelContainer: {
    padding: "unset !important"
  }
});

/* harmony default export */ var components_navPillsStyle = (navPillsStyle);
// CONCATENATED MODULE: ./components/NavPills/NavPills.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components



 // core components




const useStyles = Object(styles_["makeStyles"])(components_navPillsStyle);
function NavPills(props) {
  const [active, setActive] = external_react_default.a.useState(props.active);

  const handleChange = (event, active) => {
    setActive(active);
  };

  const handleChangeIndex = index => {
    setActive(index);
  };

  const {
    tabs,
    direction,
    color,
    horizontal,
    alignCenter
  } = props;
  const classes = useStyles();
  const flexContainerClasses = external_classnames_default()({
    [classes.flexContainer]: true,
    [classes.horizontalDisplay]: horizontal !== undefined
  });

  const tabButtons = __jsx(Tabs_default.a, {
    classes: {
      root: classes.root,
      fixed: classes.fixed,
      flexContainer: flexContainerClasses,
      indicator: classes.displayNone
    },
    value: active,
    onChange: handleChange,
    centered: alignCenter
  }, tabs.map((prop, key) => {
    var icon = {};

    if (prop.tabIcon !== undefined) {
      icon["icon"] = __jsx(prop.tabIcon, {
        className: classes.tabIcon
      });
    }

    const pillsClasses = external_classnames_default()({
      [classes.pills]: true,
      [classes.horizontalPills]: horizontal !== undefined,
      [classes.pillsWithIcons]: prop.tabIcon !== undefined
    });
    return __jsx(Tab_default.a, _extends({
      label: prop.tabButton,
      key: key
    }, icon, {
      classes: {
        root: pillsClasses,
        label: classes.label,
        selected: classes[color]
      }
    }));
  }));

  const tabContent = __jsx("div", {
    className: classes.contentWrapper
  }, __jsx(external_react_swipeable_views_default.a, {
    axis: direction === "rtl" ? "x-reverse" : "x",
    index: active,
    onChangeIndex: handleChangeIndex
  }, tabs.map((prop, key) => {
    return __jsx("div", {
      className: classes.tabContent,
      key: key
    }, prop.tabContent);
  })));

  return horizontal !== undefined ? __jsx(GridContainer["a" /* default */], null, __jsx(GridItem["a" /* default */], horizontal.tabsGrid, tabButtons), __jsx(GridItem["a" /* default */], horizontal.contentGrid, tabContent)) : __jsx("div", null, tabButtons, tabContent);
}
NavPills.defaultProps = {
  active: 0,
  color: "primary"
};

/***/ }),

/***/ "TT5w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ InfoArea; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/Icon"
var Icon_ = __webpack_require__("7vM9");
var Icon_default = /*#__PURE__*/__webpack_require__.n(Icon_);

// EXTERNAL MODULE: ./assets/jss/nextjs-material-tim-andrus.js
var nextjs_material_tim_andrus = __webpack_require__("k7mW");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/components/infoStyle.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const infoStyle = {
  infoArea: {
    maxWidth: "360px",
    margin: "0 auto",
    padding: "70px 0 30px"
  },
  iconWrapper: {
    float: "left",
    marginTop: "24px",
    marginRight: "10px"
  },
  primary: {
    color: nextjs_material_tim_andrus["G" /* primaryColor */][0]
  },
  warning: {
    color: nextjs_material_tim_andrus["Y" /* warningColor */][0]
  },
  danger: {
    color: nextjs_material_tim_andrus["l" /* dangerColor */][0]
  },
  success: {
    color: nextjs_material_tim_andrus["R" /* successColor */][0]
  },
  info: {
    color: nextjs_material_tim_andrus["w" /* infoColor */][0]
  },
  rose: {
    color: nextjs_material_tim_andrus["K" /* roseColor */][0]
  },
  gray: {
    color: nextjs_material_tim_andrus["s" /* grayColor */][0]
  },
  icon: {
    width: "2.25rem",
    height: "2.25rem",
    fontSize: "2.25rem"
  },
  descriptionWrapper: {
    color: nextjs_material_tim_andrus["s" /* grayColor */][0],
    overflow: "hidden"
  },
  title: _objectSpread({}, nextjs_material_tim_andrus["S" /* title */], {
    margin: "1.75rem 0 0.875rem !important",
    minHeight: "unset"
  }),
  description: {
    color: nextjs_material_tim_andrus["s" /* grayColor */][0],
    overflow: "hidden",
    marginTop: "0px",
    "& p": {
      color: nextjs_material_tim_andrus["s" /* grayColor */][0],
      fontSize: "14px"
    }
  },
  iconWrapperVertical: {
    float: "none"
  },
  iconVertical: {
    width: "61px",
    height: "61px"
  }
};
/* harmony default export */ var components_infoStyle = (infoStyle);
// CONCATENATED MODULE: ./components/InfoArea/InfoArea.js
var __jsx = external_react_default.a.createElement;
 // nodejs library to set properties for components

// nodejs library that concatenates classes
 // @material-ui/core components




const useStyles = Object(styles_["makeStyles"])(components_infoStyle);
function InfoArea(props) {
  const {
    title,
    description,
    iconColor,
    vertical,
    className
  } = props;
  const classes = useStyles();
  const iconWrapper = external_classnames_default()({
    [classes.iconWrapper]: true,
    [classes[iconColor]]: true,
    [classes.iconWrapperVertical]: vertical
  });
  const iconClasses = external_classnames_default()({
    [classes.icon]: true,
    [classes.iconVertical]: vertical
  });
  const infoAreaClasses = external_classnames_default()({
    [classes.infoArea]: true,
    [className]: className !== undefined
  });
  let icon = null;

  switch (typeof props.icon) {
    case "string":
      icon = __jsx(Icon_default.a, {
        className: iconClasses
      }, props.icon);
      break;

    default:
      icon = __jsx(props.icon, {
        className: iconClasses
      });
      break;
  }

  return __jsx("div", {
    className: infoAreaClasses
  }, __jsx("div", {
    className: iconWrapper
  }, icon), __jsx("div", {
    className: classes.descriptionWrapper
  }, __jsx("h4", {
    className: classes.title
  }, title), __jsx("div", {
    className: classes.description
  }, description)));
}
InfoArea.defaultProps = {
  iconColor: "gray"
};

/***/ }),

/***/ "TToL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NhcmQtcHJvZmlsZTItc3F1YXJlLmpwZyI7");

/***/ }),

/***/ "Uivz":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/TrendingUp");

/***/ }),

/***/ "Uo6P":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Fingerprint");

/***/ }),

/***/ "UsYt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CardBody; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-tim-andrus.js
var nextjs_material_tim_andrus = __webpack_require__("k7mW");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/components/cardBodyStyle.js

const cardBodyStyle = {
  cardBody: {
    padding: "0.9375rem 1.875rem",
    flex: "1 1 auto",
    WebkitBoxFlex: "1"
  },
  cardBodyBackground: {
    position: "relative",
    zIndex: "2",
    minHeight: "280px",
    paddingTop: "40px",
    paddingBottom: "40px",
    maxWidth: "440px",
    margin: "0 auto"
  },
  cardBodyPlain: {
    paddingLeft: "5px",
    paddingRight: "5px"
  },
  cardBodyFormHorizontal: {
    paddingLeft: "15px",
    paddingRight: "15px",
    "& form": {
      margin: "0"
    }
  },
  cardPricing: {
    padding: "15px!important",
    margin: "0px!important"
  },
  cardSignup: {
    padding: "0px 30px 0px 30px"
  },
  cardBodyColor: {
    borderRadius: "6px",
    "& h1,& h2,& h3": {
      "& small": {
        color: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Z" /* whiteColor */]) + ", 0.8)"
      }
    }
  }
};
/* harmony default export */ var components_cardBodyStyle = (cardBodyStyle);
// CONCATENATED MODULE: ./components/Card/CardBody.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components
 // @material-ui/icons
// core components


const useStyles = Object(styles_["makeStyles"])(components_cardBodyStyle);
function CardBody(props) {
  const {
    className,
    children,
    background,
    plain,
    formHorizontal,
    pricing,
    signup,
    color
  } = props,
        rest = _objectWithoutProperties(props, ["className", "children", "background", "plain", "formHorizontal", "pricing", "signup", "color"]);

  const classes = useStyles();
  const cardBodyClasses = external_classnames_default()({
    [classes.cardBody]: true,
    [classes.cardBodyBackground]: background,
    [classes.cardBodyPlain]: plain,
    [classes.cardBodyFormHorizontal]: formHorizontal,
    [classes.cardPricing]: pricing,
    [classes.cardSignup]: signup,
    [classes.cardBodyColor]: color,
    [className]: className !== undefined
  });
  return __jsx("div", _extends({
    className: cardBodyClasses
  }, rest), children);
}

/***/ }),

/***/ "V8/P":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChildFriendly");

/***/ }),

/***/ "WGBr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("k7mW");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const teamsSection = {
  container: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* container */ "h"],
  title: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* title */ "S"],
  mlAuto: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* mlAuto */ "B"],
  mrAuto: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* mrAuto */ "C"],
  cardTitle: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* cardTitle */ "f"],
  coloredShadow: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* coloredShadow */ "g"],
  description: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* description */ "n"],
  descriptionWhite: _objectSpread({}, assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* description */ "n"]),
  textCenter: {
    textAlign: "center"
  },
  team: {
    padding: "80px 0",
    "& h5$description,& h5$descriptionWhite": {
      marginBottom: "80px"
    }
  },
  section: _objectSpread({}, assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* sectionDark */ "N"], {}, assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* section */ "M"], {
    position: "relative",
    "& $title": {
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* whiteColor */ "Z"]
    },
    "& $descriptionWhite": {
      color: "rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "t"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* whiteColor */ "Z"]) + ", 0.76)"
    },
    "& $container": {
      zIndex: "2",
      position: "relative"
    },
    "&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''",
      backgroundColor: "rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "t"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "b"]) + ", 0.7)"
    }
  }),
  justifyContent: {
    WebkitBoxPack: "center !important",
    MsFlexPack: "center !important",
    justifyContent: "center !important"
  },
  cardCategory: {
    marginTop: "10px"
  },
  btn: {
    marginTop: "0 !important"
  },
  card3: {
    textAlign: "left"
  },
  card5: {
    textAlign: "left",
    "& $cardTitle": {
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* whiteColor */ "Z"]
    },
    "& $description": {
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* whiteColor */ "Z"]
    }
  }
};
/* harmony default export */ __webpack_exports__["a"] = (teamsSection);

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "XY9v":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Badge; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-tim-andrus.js
var nextjs_material_tim_andrus = __webpack_require__("k7mW");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/components/badgeStyle.js

const badgeStyle = {
  badge: {
    marginRight: "3px",
    borderRadius: "12px",
    padding: "5px 12px",
    textTransform: "uppercase",
    fontSize: "10px",
    fontWeight: "500",
    lineHeight: "1",
    color: nextjs_material_tim_andrus["Z" /* whiteColor */],
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "baseline",
    display: "inline-block"
  },
  primary: {
    backgroundColor: nextjs_material_tim_andrus["G" /* primaryColor */][0]
  },
  warning: {
    backgroundColor: nextjs_material_tim_andrus["Y" /* warningColor */][0]
  },
  danger: {
    backgroundColor: nextjs_material_tim_andrus["l" /* dangerColor */][0]
  },
  success: {
    backgroundColor: nextjs_material_tim_andrus["R" /* successColor */][0]
  },
  info: {
    backgroundColor: nextjs_material_tim_andrus["w" /* infoColor */][0]
  },
  rose: {
    backgroundColor: nextjs_material_tim_andrus["K" /* roseColor */][0]
  },
  gray: {
    backgroundColor: nextjs_material_tim_andrus["s" /* grayColor */][7]
  }
};
/* harmony default export */ var components_badgeStyle = (badgeStyle);
// CONCATENATED MODULE: ./components/Badge/Badge.js
var __jsx = external_react_default.a.createElement;
 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components


const useStyles = Object(styles_["makeStyles"])(components_badgeStyle);
function Badge(props) {
  const {
    color,
    children,
    className
  } = props;
  const classes = useStyles();
  const badgeClasses = external_classnames_default()({
    [classes.badge]: true,
    [classes[color]]: true,
    [className]: className !== undefined
  });
  return __jsx("span", {
    className: badgeClasses
  }, children);
}
Badge.defaultProps = {
  color: "gray"
};

/***/ }),

/***/ "XcKE":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Business");

/***/ }),

/***/ "Y8uC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "YDgk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Jsb2c1LmpwZyI7");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YJKT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2RnMi5qcGciOw==");

/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "YZXy":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Home");

/***/ }),

/***/ "bySf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2JnNS5qcGciOw==");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "c25J":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

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

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "cVmi":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocationOn");

/***/ }),

/***/ "d+m7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NhcmQtcHJvamVjdDYuanBnIjs=");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
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

exports.default = mitt;

/***/ }),

/***/ "efrK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Jsb2c2LmpwZyI7");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
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
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
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
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
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
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
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

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "evDE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("k7mW");

const tooltipsStyle = {
  tooltip: {
    padding: "10px 15px",
    minWidth: "130px",
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* whiteColor */ "Z"],
    lineHeight: "1.7em",
    background: "rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "t"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "s"][15]) + ",0.9)",
    border: "none",
    borderRadius: "3px",
    boxShadow: "0 8px 10px 1px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "t"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "b"]) + ", 0.14), 0 3px 14px 2px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "t"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "b"]) + ", 0.12), 0 5px 5px -3px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "t"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "b"]) + ", 0.2)",
    maxWidth: "200px",
    textAlign: "center",
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    fontSize: "0.875em",
    fontStyle: "normal",
    fontWeight: "400",
    textShadow: "none",
    textTransform: "none",
    letterSpacing: "normal",
    wordBreak: "normal",
    wordSpacing: "normal",
    wordWrap: "normal",
    whiteSpace: "normal",
    lineBreak: "auto"
  }
};
/* harmony default export */ __webpack_exports__["a"] = (tooltipsStyle);

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
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

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


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

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "g0r0":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Layers");

/***/ }),

/***/ "g75V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Jsb2c3LmpwZyI7");

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "hnsL":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ViewDay");

/***/ }),

/***/ "hrAA":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Clear");

/***/ }),

/***/ "i4t8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JQ2V");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library to set properties for components

// @material-ui/core components


const styles = {
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px"
    /* flexBasis: "auto" */

  }
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(styles);
function GridItem(props) {
  const {
    children,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["children", "className"]);

  const classes = useStyles();
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
    item: true
  }, rest, {
    className: classes.grid + " " + className
  }), children);
}
GridItem.defaultProps = {
  className: ""
};

/***/ }),

/***/ "j08L":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "jD8W":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popper");

/***/ }),

/***/ "jRhr":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Timeline");

/***/ }),

/***/ "k7mW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return drawerWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return containerFluid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return boxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return defaultFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return primaryColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return secondaryColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return warningColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return dangerColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return successColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return infoColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return roseColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return grayColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return whiteColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return blackColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return twitterColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return facebookColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return googleColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return linkedinColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return pinterestColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ab", function() { return youtubeColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return tumblrColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return behanceColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return dribbbleColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return redditColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return instagramColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return primaryBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return infoBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return successBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return warningBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return dangerBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return roseBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return warningCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return successCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return dangerCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return infoCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return primaryCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return roseCardHeader; });
/* unused harmony export cardActions */
/* unused harmony export cardHeader */
/* unused harmony export defaultBoxShadow */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return cardTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return description; });
/* unused harmony export cardLink */
/* unused harmony export cardSubtitle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return main; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return mainRaised; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return section; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return sectionDark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return sectionDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return mlAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return mrAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return btnLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return coloredShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return hexToRgb; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const hexToRgb = input => {
  input = input + "";
  input = input.replace("#", "");
  let hexRegex = /[0-9A-Fa-f]/g;

  if (!hexRegex.test(input) || input.length !== 3 && input.length !== 6) {
    throw new Error("input is not a valid hex color.");
  }

  if (input.length === 3) {
    let first = input[0];
    let second = input[1];
    let last = input[2];
    input = first + first + second + second + last + last;
  }

  input = input.toUpperCase(input);
  let first = input[0] + input[1];
  let second = input[2] + input[3];
  let last = input[4] + input[5];
  return parseInt(first, 16) + ", " + parseInt(second, 16) + ", " + parseInt(last, 16);
};

const drawerWidth = 260;
const primaryColor = ["#9c27b0", "#ab47bc", "#8e24aa", "#af2cc5", "#e1bee7", "#ba68c8"];
const secondaryColor = ["#fafafa"];
const warningColor = ["#ff9800", "#ffa726", "#fb8c00", "#ffa21a", "#fcf8e3", "#faf2cc", "#ffe0b2", "#ffb74d"];
const dangerColor = ["#f44336", "#ef5350", "#e53935", "#f55a4e", "#f2dede", "#ebcccc", "ef9a9a", "#ef5350"];
const successColor = ["#4caf50", "#66bb6a", "#43a047", "#5cb860", "#dff0d8", "#d0e9c6", "#a5d6a7", "#66bb6a"];
const infoColor = ["#00acc1", "#26c6da", "#00acc1", "#00d3ee", "#d9edf7", "#c4e3f3", "#b2ebf2", "#4dd0e1"];
const roseColor = ["#e91e63", "#ec407a", "#d81b60", "#f8bbd0", "#f06292"];
const grayColor = ["#999", "#3C4858", "#eee", "#343434", "#585858", "#232323", "#ddd", "#6c757d", "#333", "#212121", "#777", "#D2D2D2", "#AAA", "#495057", "#e5e5e5", "#555", "#f9f9f9", "#ccc", "#444", "#f2f2f2", "#89229b", "#c0c1c2", "#9a9a9a", "#f5f5f5", "#505050", "#1f1f1f"];
const whiteColor = "#FFF";
const blackColor = "#000";
const twitterColor = "#55acee";
const facebookColor = "#3b5998";
const googleColor = "#dd4b39";
const linkedinColor = "#0976b4";
const pinterestColor = "#cc2127";
const youtubeColor = "#e52d27";
const tumblrColor = "#35465c";
const behanceColor = "#1769ff";
const dribbbleColor = "#ea4c89";
const redditColor = "#ff4500";
const instagramColor = "#125688";
const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};
const containerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%"
};

const container = _objectSpread({}, containerFluid, {
  "@media (min-width: 576px)": {
    maxWidth: "540px"
  },
  "@media (min-width: 768px)": {
    maxWidth: "720px"
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px"
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1140px"
  }
});

const card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
  borderRadius: "3px",
  color: "rgba(" + hexToRgb(blackColor) + ", 0.87)",
  background: whiteColor
};
const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em"
};
const boxShadow = {
  boxShadow: "0 10px 30px -12px rgba(" + hexToRgb(blackColor) + ", 0.42), 0 4px 25px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 8px 10px -5px rgba(" + hexToRgb(blackColor) + ", 0.2)"
};
const primaryBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(" + hexToRgb(primaryColor[0]) + ", 0.28), 0 4px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 7px 8px -5px rgba(" + hexToRgb(primaryColor[0]) + ", 0.2)"
};
const infoBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(" + hexToRgb(infoColor[0]) + ", 0.28), 0 4px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 7px 8px -5px rgba(" + hexToRgb(infoColor[0]) + ", 0.2)"
};
const successBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(" + hexToRgb(successColor[0]) + ", 0.28), 0 4px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 7px 8px -5px rgba(" + hexToRgb(successColor[0]) + ", 0.2)"
};
const warningBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(" + hexToRgb(warningColor[0]) + ", 0.28), 0 4px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 7px 8px -5px rgba(" + hexToRgb(warningColor[0]) + ", 0.2)"
};
const dangerBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(" + hexToRgb(dangerColor[0]) + ", 0.28), 0 4px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 7px 8px -5px rgba(" + hexToRgb(dangerColor[0]) + ", 0.2)"
};
const roseBoxShadow = {
  boxShadow: "0 4px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.14), 0 7px 10px -5px rgba(" + hexToRgb(roseColor[0]) + ", 0.4)"
};

const warningCardHeader = _objectSpread({
  color: whiteColor,
  background: "linear-gradient(60deg, " + warningColor[1] + ", " + warningColor[2] + ")"
}, warningBoxShadow);

const successCardHeader = _objectSpread({
  color: whiteColor,
  background: "linear-gradient(60deg, " + successColor[1] + ", " + successColor[2] + ")"
}, successBoxShadow);

const dangerCardHeader = _objectSpread({
  color: whiteColor,
  background: "linear-gradient(60deg, " + dangerColor[1] + ", " + dangerColor[2] + ")"
}, dangerBoxShadow);

const infoCardHeader = _objectSpread({
  color: whiteColor,
  background: "linear-gradient(60deg, " + infoColor[1] + ", " + infoColor[2] + ")"
}, infoBoxShadow);

const primaryCardHeader = _objectSpread({
  color: whiteColor,
  background: "linear-gradient(60deg, " + primaryColor[1] + ", " + primaryColor[2] + ")"
}, primaryBoxShadow);

const roseCardHeader = _objectSpread({
  color: whiteColor,
  background: "linear-gradient(60deg, " + roseColor[1] + ", " + roseColor[2] + ")"
}, roseBoxShadow);

const cardActions = _objectSpread({
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid  " + grayColor[2],
  height: "auto"
}, defaultFont);

const cardHeader = {
  margin: "-30px 15px 0",
  borderRadius: "3px",
  padding: "15px"
};
const defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow: "0 10px 20px -12px rgba(" + hexToRgb(blackColor) + ", 0.42), 0 3px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 8px 10px -5px rgba(" + hexToRgb(blackColor) + ", 0.2)",
  padding: "10px 0",
  transition: "all 150ms ease 0s"
};
const title = {
  color: grayColor[1],
  textDecoration: "none",
  fontWeight: "700",
  marginTop: "30px",
  marginBottom: "25px",
  minHeight: "32px",
  fontFamily: `"Roboto Slab", "Times New Roman", serif`
};
const cardTitle = {
  "&, & a": _objectSpread({}, title, {
    marginTop: ".625rem",
    marginBottom: "0.75rem",
    minHeight: "auto"
  })
};
const cardLink = {
  "& + $cardLink": {
    marginLeft: "1.25rem"
  }
};
const cardSubtitle = {
  marginBottom: "0",
  marginTop: "-.375rem"
};
const main = {
  background: whiteColor,
  position: "relative",
  zIndex: "3"
};
const mainRaised = {
  "@media (max-width: 576px)": {
    marginTop: "-30px"
  },
  "@media (max-width: 830px)": {
    marginLeft: "10px",
    marginRight: "10px"
  },
  margin: "-60px 30px 0px",
  borderRadius: "6px",
  boxShadow: "0 16px 24px 2px rgba(" + hexToRgb(blackColor) + ", 0.14), 0 6px 30px 5px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 8px 10px -5px rgba(" + hexToRgb(blackColor) + ", 0.2)"
};
const section = {
  backgroundPosition: "50%",
  backgroundSize: "cover"
};
const sectionDark = {
  backgroundColor: grayColor[3],
  background: "radial-gradient(ellipse at center," + grayColor[4] + " 0," + grayColor[5] + " 100%)"
};
const sectionDescription = {
  marginTop: "130px"
};
const description = {
  color: grayColor[0]
};
const mlAuto = {
  marginLeft: "auto"
};
const mrAuto = {
  marginRight: "auto"
};
const btnLink = {
  backgroundColor: "transparent",
  boxShdow: "none",
  marginTop: "5px",
  marginBottom: "5px"
};
const coloredShadow = {
  // some jss/css to make the cards look a bit better on Internet Explorer
  "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
    display: "none !important"
  },
  transform: "scale(0.94)",
  top: "12px",
  filter: "blur(12px)",
  position: "absolute",
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  zIndex: "-1",
  transition: "opacity .45s",
  opacity: "0"
};


/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "l4Ax":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2JnNy5qcGciOw==");

/***/ }),

/***/ "lN43":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2RnMS5qcGciOw==");

/***/ }),

/***/ "lWoh":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "lZfH":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Dns");

/***/ }),

/***/ "lgrB":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Phone");

/***/ }),

/***/ "mf1M":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grow");

/***/ }),

/***/ "mtPR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JQ2V");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library to set properties for components

// @material-ui/core components


const styles = {
  grid: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto"
  }
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(styles);
function GridContainer(props) {
  const {
    children,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["children", "className"]);

  const classes = useStyles();
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
    container: true
  }, rest, {
    className: classes.grid + " " + className
  }), children);
}
GridContainer.defaultProps = {
  className: ""
};

/***/ }),

/***/ "n9Bu":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Code");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

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
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
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


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "nybW":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "pL7r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Muted; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pUqt");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // nodejs library to set properties for components

// @material-ui/core components
 // core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(assets_jss_nextjs_material_tim_andrus_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);
function Muted(props) {
  const {
    children
  } = props;
  const classes = useStyles();
  return __jsx("div", {
    className: classes.defaultFontStyle + " " + classes.mutedText
  }, children);
}

/***/ }),

/***/ "pUqt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("k7mW");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const typographyStyle = {
  defaultFontStyle: _objectSpread({}, assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* defaultFont */ "m"], {
    fontSize: "14px"
  }),
  defaultHeaderMargins: {
    marginTop: "20px",
    marginBottom: "10px"
  },
  quote: {
    padding: "10px 20px",
    margin: "0 0 20px",
    fontSize: "1.25rem",
    borderLeft: "5px solid " + assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "s"][2]
  },
  quoteText: {
    margin: "0 0 10px",
    fontStyle: "italic"
  },
  quoteAuthor: {
    display: "block",
    fontSize: "80%",
    lineHeight: "1.42857143",
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "s"][10]
  },
  mutedText: {
    "&, & *": {
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "s"][7],
      display: "inline-block"
    }
  },
  primaryText: {
    "&, & *": {
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* primaryColor */ "G"][0],
      display: "inline-block"
    }
  },
  infoText: {
    "&, & *": {
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* infoColor */ "w"][0],
      display: "inline-block"
    }
  },
  successText: {
    "&, & *": {
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* successColor */ "R"][0],
      display: "inline-block"
    }
  },
  warningText: {
    "&, & *": {
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* warningColor */ "Y"][0],
      display: "inline-block"
    }
  },
  dangerText: {
    "&, & *": {
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* dangerColor */ "l"][0],
      display: "inline-block"
    }
  },
  roseText: {
    "&, & *": {
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* roseColor */ "K"][0],
      display: "inline-block"
    }
  },
  smallText: {
    fontSize: "65%",
    fontWeight: "400",
    lineHeight: "1",
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "s"][10]
  }
};
/* harmony default export */ __webpack_exports__["a"] = (typographyStyle);

/***/ }),

/***/ "poL+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("k7mW");

const customCheckboxRadioSwitch = {
  checkRoot: {
    padding: "14px",
    "&:hover": {
      backgroundColor: "unset !important"
    }
  },
  radioRoot: {
    padding: "16px",
    "&:hover": {
      backgroundColor: "unset !important"
    }
  },
  labelRoot: {
    marginLeft: "-14px"
  },
  checkboxAndRadio: {
    position: "relative",
    display: "block",
    marginTop: "10px",
    marginBottom: "10px"
  },
  checkboxAndRadioHorizontal: {
    position: "relative",
    display: "block",
    "&:first-child": {
      marginTop: "10px"
    },
    "&:not(:first-child)": {
      marginTop: "-14px"
    },
    marginTop: "0",
    marginBottom: "0"
  },
  checked: {
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* primaryColor */ "G"][0] + "!important"
  },
  checkedIcon: {
    width: "20px",
    height: "20px",
    border: "1px solid rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "t"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "b"]) + ", 0.84)",
    borderRadius: "3px"
  },
  uncheckedIcon: {
    width: "0px",
    height: "0px",
    padding: "9px",
    border: "1px solid rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "t"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "b"]) + ", .54)",
    borderRadius: "3px"
  },
  disabledCheckboxAndRadio: {
    "& $checkedIcon,& $uncheckedIcon,& $radioChecked,& $radioUnchecked": {
      borderColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "b"],
      opacity: "0.26",
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "b"]
    }
  },
  label: {
    cursor: "pointer",
    paddingLeft: "0",
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "s"][12],
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    display: "inline-flex",
    transition: "0.3s ease all",
    letterSpacing: "unset"
  },
  labelHorizontal: {
    color: "rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "t"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "b"]) + ", 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingTop: "39px",
    marginRight: "0",
    "@media (min-width: 992px)": {
      float: "right"
    }
  },
  labelHorizontalRadioCheckbox: {
    paddingTop: "22px"
  },
  labelLeftHorizontal: {
    color: "rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "t"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "b"]) + ", 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingTop: "22px",
    marginRight: "0"
  },
  labelError: {
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* dangerColor */ "l"][0]
  },
  radio: {
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* primaryColor */ "G"][0] + "!important"
  },
  radioChecked: {
    width: "16px",
    height: "16px",
    border: "1px solid " + assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* primaryColor */ "G"][0],
    borderRadius: "50%"
  },
  radioUnchecked: {
    width: "0px",
    height: "0px",
    padding: "7px",
    border: "1px solid rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "t"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "b"]) + ", .54)",
    borderRadius: "50%"
  },
  inlineChecks: {
    marginTop: "8px"
  },
  iconCheckbox: {
    height: "116px",
    width: "116px",
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "s"][0],
    "& > span:first-child": {
      borderWidth: "4px",
      borderStyle: "solid",
      borderColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "s"][17],
      textAlign: "center",
      verticalAlign: "middle",
      borderRadius: "50%",
      color: "inherit",
      margin: "0 auto 20px",
      transition: "all 0.2s"
    },
    "&:hover": {
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* roseColor */ "K"][0],
      "& > span:first-child": {
        borderColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* roseColor */ "K"][0]
      }
    }
  },
  iconCheckboxChecked: {
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* roseColor */ "K"][0],
    "& > span:first-child": {
      borderColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* roseColor */ "K"][0]
    }
  },
  iconCheckboxIcon: {
    fontSize: "40px",
    lineHeight: "111px"
  },
  switchBase: {
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* primaryColor */ "G"][0] + "!important"
  },
  switchIcon: {
    boxShadow: "0 1px 3px 1px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "t"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "b"]) + ", 0.4)",
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* whiteColor */ "Z"] + "  !important",
    border: "1px solid rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "t"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "b"]) + ", .54)"
  },
  switchIconChecked: {
    borderColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* primaryColor */ "G"][0],
    transform: "translateX(0px)!important"
  },
  switchBar: {
    width: "30px",
    height: "15px",
    backgroundColor: "rgb(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "t"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "s"][24]) + ")",
    borderRadius: "15px",
    opacity: "0.7!important"
  },
  switchChecked: {
    "& + $switchBar": {
      backgroundColor: "rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "t"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* primaryColor */ "G"][0]) + ", 1) !important"
    },
    "& $switchIcon": {
      borderColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* primaryColor */ "G"][0]
    }
  }
};
/* harmony default export */ __webpack_exports__["a"] = (customCheckboxRadioSwitch);

/***/ }),

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "r6Lb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),

/***/ "skcn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NocmlzdGlhbi5qcGciOw==");

/***/ }),

/***/ "tBFs":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),

/***/ "um8N":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CustomInput; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/FormControl"
var FormControl_ = __webpack_require__("lWoh");
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);

// EXTERNAL MODULE: external "@material-ui/core/InputLabel"
var InputLabel_ = __webpack_require__("zOcm");
var InputLabel_default = /*#__PURE__*/__webpack_require__.n(InputLabel_);

// EXTERNAL MODULE: external "@material-ui/core/Input"
var Input_ = __webpack_require__("tBFs");
var Input_default = /*#__PURE__*/__webpack_require__.n(Input_);

// EXTERNAL MODULE: external "@material-ui/icons/Clear"
var Clear_ = __webpack_require__("hrAA");
var Clear_default = /*#__PURE__*/__webpack_require__.n(Clear_);

// EXTERNAL MODULE: external "@material-ui/icons/Check"
var Check_ = __webpack_require__("9qvJ");
var Check_default = /*#__PURE__*/__webpack_require__.n(Check_);

// EXTERNAL MODULE: ./assets/jss/nextjs-material-tim-andrus.js
var nextjs_material_tim_andrus = __webpack_require__("k7mW");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/components/customInputStyle.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const customInputStyle = {
  disabled: {
    "&:before": {
      backgroundColor: "transparent !important"
    }
  },
  underline: {
    "&:hover:not($disabled):before,&:before": {
      borderBottomColor: nextjs_material_tim_andrus["s" /* grayColor */][11] + " !important",
      borderBottomWidth: "1px !important"
    },
    "&:after": {
      borderBottomColor: nextjs_material_tim_andrus["G" /* primaryColor */][0]
    }
  },
  underlineError: {
    "&:after": {
      borderBottomColor: nextjs_material_tim_andrus["l" /* dangerColor */][0]
    }
  },
  underlineSuccess: {
    "&:after": {
      borderBottomColor: nextjs_material_tim_andrus["R" /* successColor */][0]
    }
  },
  labelRoot: _objectSpread({}, nextjs_material_tim_andrus["m" /* defaultFont */], {
    color: nextjs_material_tim_andrus["s" /* grayColor */][12] + " !important",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "1.42857",
    top: "10px",
    letterSpacing: "unset",
    "& + $underline": {
      marginTop: "0px"
    }
  }),
  labelRootError: {
    color: nextjs_material_tim_andrus["l" /* dangerColor */][0] + " !important"
  },
  labelRootSuccess: {
    color: nextjs_material_tim_andrus["R" /* successColor */][0] + " !important"
  },
  feedback: {
    position: "absolute",
    bottom: "4px",
    right: "0",
    zIndex: "2",
    display: "block",
    width: "24px",
    height: "24px",
    textAlign: "center",
    pointerEvents: "none"
  },
  formControl: {
    margin: "0 0 17px 0",
    paddingTop: "27px",
    position: "relative",
    "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
      color: nextjs_material_tim_andrus["s" /* grayColor */][13]
    }
  },
  whiteUnderline: {
    "&:hover:not($disabled):before,&:before": {
      borderBottomColor: nextjs_material_tim_andrus["Z" /* whiteColor */]
    },
    "&:after": {
      borderBottomColor: nextjs_material_tim_andrus["Z" /* whiteColor */]
    }
  },
  input: {
    color: nextjs_material_tim_andrus["s" /* grayColor */][13],
    height: "unset",
    "&,&::placeholder": {
      fontSize: "14px",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: "400",
      lineHeight: "1.42857",
      opacity: "1"
    },
    "&::placeholder": {
      color: nextjs_material_tim_andrus["s" /* grayColor */][12]
    }
  },
  whiteInput: {
    "&,&::placeholder": {
      color: nextjs_material_tim_andrus["Z" /* whiteColor */],
      opacity: "1"
    }
  }
};
/* harmony default export */ var components_customInputStyle = (customInputStyle);
// CONCATENATED MODULE: ./components/CustomInput/CustomInput.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

 // nodejs library to set properties for components

// nodejs library that concatenates classes
 // @material-ui/core components




 // @material-ui/icons


 // core components


const useStyles = Object(styles_["makeStyles"])(components_customInputStyle);
function CustomInput(props) {
  const {
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    white,
    inputRootCustomClasses,
    success
  } = props;
  const classes = useStyles();
  const labelClasses = external_classnames_default()({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error
  });
  const underlineClasses = external_classnames_default()({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
    [classes.whiteUnderline]: white
  });
  const marginTop = external_classnames_default()({
    [inputRootCustomClasses]: inputRootCustomClasses !== undefined
  });
  const inputClasses = external_classnames_default()({
    [classes.input]: true,
    [classes.whiteInput]: white
  });
  var formControlClasses;

  if (formControlProps !== undefined) {
    formControlClasses = external_classnames_default()(formControlProps.className, classes.formControl);
  } else {
    formControlClasses = classes.formControl;
  }

  return __jsx(FormControl_default.a, _extends({}, formControlProps, {
    className: formControlClasses
  }), labelText !== undefined ? __jsx(InputLabel_default.a, _extends({
    className: classes.labelRoot + " " + labelClasses,
    htmlFor: id
  }, labelProps), labelText) : null, __jsx(Input_default.a, _extends({
    classes: {
      input: inputClasses,
      root: marginTop,
      disabled: classes.disabled,
      underline: underlineClasses
    },
    id: id
  }, inputProps)), error ? __jsx(Clear_default.a, {
    className: classes.feedback + " " + classes.labelRootError
  }) : success ? __jsx(Check_default.a, {
    className: classes.feedback + " " + classes.labelRootSuccess
  }) : null);
}

/***/ }),

/***/ "vFf/":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Dashboard");

/***/ }),

/***/ "vhhE":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountBalance");

/***/ }),

/***/ "vwaZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Info; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pUqt");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // nodejs library to set properties for components

// @material-ui/core components
 // core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(assets_jss_nextjs_material_tim_andrus_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);
function Info(props) {
  const {
    children
  } = props;
  const classes = useStyles();
  return __jsx("div", {
    className: classes.defaultFontStyle + " " + classes.infoText
  }, children);
}

/***/ }),

/***/ "vyXm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2RnMy5qcGciOw==");

/***/ }),

/***/ "x54t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "xZn2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NhcmQtcHJvZmlsZTQuanBnIjs=");

/***/ }),

/***/ "xmQw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuList");

/***/ }),

/***/ "y1WB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Jsb2c4LmpwZyI7");

/***/ }),

/***/ "y4SE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL29mZmljZTIuanBnIjs=");

/***/ }),

/***/ "yDxe":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LineStyle");

/***/ }),

/***/ "yFMe":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/People");

/***/ }),

/***/ "yRI6":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Call");

/***/ }),

/***/ "ydEf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2F2YXRhci5qcGciOw==");

/***/ }),

/***/ "zOcm":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ })

/******/ });