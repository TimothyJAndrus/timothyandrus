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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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

/***/ "+YD5":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LibraryBooks");

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

/***/ "0Jp5":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "0LMq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "0ezn":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Notifications");

/***/ }),

/***/ "0zb8":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/LinearProgress");

/***/ }),

/***/ "1gBk":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ "2BDn":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Group");

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

/***/ "30mr":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

/***/ }),

/***/ "31Yn":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ClickAwayListener");

/***/ }),

/***/ "3PpT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "3T+C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CustomTable; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/Table"
var Table_ = __webpack_require__("BjFw");
var Table_default = /*#__PURE__*/__webpack_require__.n(Table_);

// EXTERNAL MODULE: external "@material-ui/core/TableBody"
var TableBody_ = __webpack_require__("30mr");
var TableBody_default = /*#__PURE__*/__webpack_require__.n(TableBody_);

// EXTERNAL MODULE: external "@material-ui/core/TableCell"
var TableCell_ = __webpack_require__("Ai9N");
var TableCell_default = /*#__PURE__*/__webpack_require__.n(TableCell_);

// EXTERNAL MODULE: external "@material-ui/core/TableHead"
var TableHead_ = __webpack_require__("TWtx");
var TableHead_default = /*#__PURE__*/__webpack_require__.n(TableHead_);

// EXTERNAL MODULE: external "@material-ui/core/TableRow"
var TableRow_ = __webpack_require__("iDDF");
var TableRow_default = /*#__PURE__*/__webpack_require__.n(TableRow_);

// EXTERNAL MODULE: ./assets/jss/nextjs-material-tim-andrus.js
var nextjs_material_tim_andrus = __webpack_require__("k7mW");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/components/tableStyle.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const tableStyle = {
  warning: {
    color: nextjs_material_tim_andrus["Y" /* warningColor */][0]
  },
  primary: {
    color: nextjs_material_tim_andrus["G" /* primaryColor */][0]
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
  right: {
    textAlign: "right"
  },
  table: {
    marginBottom: "0",
    width: "100%",
    maxWidth: "100%",
    backgroundColor: "transparent",
    borderSpacing: "0",
    borderCollapse: "collapse",
    overflow: "auto",
    "& > tbody > tr, & > thead > tr": {
      height: "auto"
    }
  },
  tableShoppingHead: {
    fontSize: "0.75em !important",
    textTransform: "uppercase !important"
  },
  tableCell: _objectSpread({}, nextjs_material_tim_andrus["m" /* defaultFont */], {
    lineHeight: "1.5em",
    padding: "12px 8px!important",
    verticalAlign: "middle",
    fontSize: "0.875rem",
    borderBottom: "none",
    borderTop: "1px solid " + nextjs_material_tim_andrus["s" /* grayColor */][6],
    position: "relative",
    color: nextjs_material_tim_andrus["s" /* grayColor */][1]
  }),
  tableHeadCell: {
    fontSize: "1.063rem",
    borderBottomWidth: "1px",
    fontWeight: "300",
    color: nextjs_material_tim_andrus["s" /* grayColor */][15],
    borderTopWidth: "0 !important"
  },
  tableCellTotal: {
    fontWeight: "500",
    fontSize: "1.0625rem",
    paddingTop: "20px",
    textAlign: "right"
  },
  tableCellAmount: {
    fontSize: "26px",
    fontWeight: "300",
    marginTop: "5px",
    textAlign: "right"
  },
  tableResponsive: {
    minHeight: "0.1%",
    overflowX: "auto"
  },
  tableStripedRow: {
    backgroundColor: nextjs_material_tim_andrus["s" /* grayColor */][16]
  },
  tableRowHover: {
    "&:hover": {
      backgroundColor: nextjs_material_tim_andrus["s" /* grayColor */][23]
    }
  },
  warningRow: {
    backgroundColor: nextjs_material_tim_andrus["Y" /* warningColor */][4],
    "&:hover": {
      backgroundColor: nextjs_material_tim_andrus["Y" /* warningColor */][5]
    }
  },
  dangerRow: {
    backgroundColor: nextjs_material_tim_andrus["l" /* dangerColor */][4],
    "&:hover": {
      backgroundColor: nextjs_material_tim_andrus["l" /* dangerColor */][5]
    }
  },
  successRow: {
    backgroundColor: nextjs_material_tim_andrus["R" /* successColor */][4],
    "&:hover": {
      backgroundColor: nextjs_material_tim_andrus["R" /* successColor */][5]
    }
  },
  infoRow: {
    backgroundColor: nextjs_material_tim_andrus["w" /* infoColor */][4],
    "&:hover": {
      backgroundColor: nextjs_material_tim_andrus["w" /* infoColor */][5]
    }
  }
};
/* harmony default export */ var components_tableStyle = (tableStyle);
// CONCATENATED MODULE: ./components/Table/Table.js
var __jsx = external_react_default.a.createElement;


// @material-ui/core components







const useStyles = Object(styles_["makeStyles"])(components_tableStyle);
function CustomTable(props) {
  const {
    tableHead,
    tableData,
    tableHeaderColor,
    hover,
    colorsColls,
    coloredColls,
    customCellClasses,
    customClassesForCells,
    striped,
    tableShopping,
    customHeadCellClasses,
    customHeadClassesForCells
  } = props;
  const classes = useStyles();
  return __jsx("div", {
    className: classes.tableResponsive
  }, __jsx(Table_default.a, {
    className: classes.table
  }, tableHead !== undefined ? __jsx(TableHead_default.a, {
    className: classes[tableHeaderColor]
  }, __jsx(TableRow_default.a, {
    className: classes.tableRow
  }, tableHead.map((prop, key) => {
    const tableCellClasses = classes.tableHeadCell + " " + classes.tableCell + " " + external_classnames_default()({
      [customHeadCellClasses[customHeadClassesForCells.indexOf(key)]]: customHeadClassesForCells.indexOf(key) !== -1,
      [classes.tableShoppingHead]: tableShopping
    });
    return __jsx(TableCell_default.a, {
      className: tableCellClasses,
      key: key
    }, prop);
  }))) : null, __jsx(TableBody_default.a, null, tableData.map((prop, key) => {
    var rowColor = "";
    var rowColored = false;

    if (prop.color !== undefined) {
      rowColor = prop.color;
      rowColored = true;
      prop = prop.data;
    }

    const tableRowClasses = external_classnames_default()({
      [classes.tableRowHover]: hover,
      [classes[rowColor + "Row"]]: rowColored,
      [classes.tableStripedRow]: striped && key % 2 === 0
    });

    if (prop.total) {
      return __jsx(TableRow_default.a, {
        key: key,
        hover: hover,
        className: tableRowClasses
      }, __jsx(TableCell_default.a, {
        className: classes.tableCell,
        colSpan: prop.colspan
      }), __jsx(TableCell_default.a, {
        className: classes.tableCell + " " + classes.tableCellTotal
      }, "Total"), __jsx(TableCell_default.a, {
        className: classes.tableCell + " " + classes.tableCellAmount
      }, prop.amount), tableHead.length - (prop.colspan - 0 + 2) > 0 ? __jsx(TableCell_default.a, {
        className: classes.tableCell,
        colSpan: tableHead.length - (prop.colspan - 0 + 2)
      }) : null);
    }

    if (prop.purchase) {
      return __jsx(TableRow_default.a, {
        key: key,
        hover: hover,
        className: tableRowClasses
      }, __jsx(TableCell_default.a, {
        className: classes.tableCell,
        colSpan: prop.colspan
      }), __jsx(TableCell_default.a, {
        className: classes.tableCell + " " + classes.tableCellTotal
      }, "Total"), __jsx(TableCell_default.a, {
        className: classes.tableCell + " " + classes.tableCellAmount
      }, prop.amount), __jsx(TableCell_default.a, {
        className: classes.tableCell + " " + classes.right,
        colSpan: prop.col.colspan
      }, prop.col.text));
    }

    return __jsx(TableRow_default.a, {
      key: key,
      hover: hover,
      className: classes.tableRow + " " + tableRowClasses
    }, prop.map((prop, key) => {
      const tableCellClasses = classes.tableCell + " " + external_classnames_default()({
        [classes[colorsColls[coloredColls.indexOf(key)]]]: coloredColls.indexOf(key) !== -1,
        [customCellClasses[customClassesForCells.indexOf(key)]]: customClassesForCells.indexOf(key) !== -1
      });
      return __jsx(TableCell_default.a, {
        className: tableCellClasses,
        key: key
      }, prop);
    }));
  }))));
}
CustomTable.defaultProps = {
  tableHeaderColor: "gray",
  hover: false,
  colorsColls: [],
  coloredColls: [],
  striped: false,
  customCellClasses: [],
  customClassesForCells: [],
  customHeadCellClasses: [],
  customHeadClassesForCells: []
};

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

/***/ "4nWC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Assignment");

/***/ }),

/***/ "4rJZ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AttachFile");

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

/***/ "6Yxu":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

/***/ }),

/***/ "6ce9":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Reply");

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

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("F3SJ");


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

/***/ "Ai9N":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableCell");

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

/***/ "BOG7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NhcmQtcHJvZmlsZTUtc3F1YXJlLmpwZyI7");

/***/ }),

/***/ "BaT1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Clearfix; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // mterial-ui components


const styles = {
  clearfix: {
    "&:after,&:before": {
      display: "table",
      content: '" "'
    },
    "&:after": {
      clear: "both"
    }
  }
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(styles);
function Clearfix() {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.clearfix
  });
}

/***/ }),

/***/ "BjFw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Table");

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

/***/ "CUfL":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Radio");

/***/ }),

/***/ "DIuF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL25leHRqc19oZWFkZXIuanBnIjs=");

/***/ }),

/***/ "DME6":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountCircle");

/***/ }),

/***/ "DRgV":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanel");

/***/ }),

/***/ "EAEr":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Share");

/***/ }),

/***/ "EmCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "F3SJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Components; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__("0LMq");
var List_default = /*#__PURE__*/__webpack_require__.n(List_);

// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__("c25J");
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);

// EXTERNAL MODULE: external "@material-ui/icons/Favorite"
var Favorite_ = __webpack_require__("Fm7H");
var Favorite_default = /*#__PURE__*/__webpack_require__.n(Favorite_);

// EXTERNAL MODULE: ./components/Header/Header.js + 1 modules
var Header = __webpack_require__("8x5e");

// EXTERNAL MODULE: ./components/Footer/Footer.js + 1 modules
var Footer = __webpack_require__("HXcA");

// EXTERNAL MODULE: ./components/Grid/GridContainer.js
var GridContainer = __webpack_require__("mtPR");

// EXTERNAL MODULE: ./components/Grid/GridItem.js
var GridItem = __webpack_require__("i4t8");

// EXTERNAL MODULE: ./components/Parallax/Parallax.js + 1 modules
var Parallax = __webpack_require__("Z2Lm");

// EXTERNAL MODULE: ./components/Header/HeaderLinks.js
var HeaderLinks = __webpack_require__("8E12");

// EXTERNAL MODULE: external "nouislider"
var external_nouislider_ = __webpack_require__("Js1E");
var external_nouislider_default = /*#__PURE__*/__webpack_require__.n(external_nouislider_);

// EXTERNAL MODULE: external "react-tagsinput"
var external_react_tagsinput_ = __webpack_require__("PbyA");
var external_react_tagsinput_default = /*#__PURE__*/__webpack_require__.n(external_react_tagsinput_);

// EXTERNAL MODULE: external "@material-ui/core/InputAdornment"
var InputAdornment_ = __webpack_require__("lj8g");
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment_);

// EXTERNAL MODULE: external "@material-ui/core/FormControlLabel"
var FormControlLabel_ = __webpack_require__("7s44");
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel_);

// EXTERNAL MODULE: external "@material-ui/core/FormControl"
var FormControl_ = __webpack_require__("lWoh");
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);

// EXTERNAL MODULE: external "@material-ui/core/Checkbox"
var Checkbox_ = __webpack_require__("r6Lb");
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox_);

// EXTERNAL MODULE: external "@material-ui/core/Radio"
var Radio_ = __webpack_require__("CUfL");
var Radio_default = /*#__PURE__*/__webpack_require__.n(Radio_);

// EXTERNAL MODULE: external "@material-ui/core/Switch"
var Switch_ = __webpack_require__("lOiU");
var Switch_default = /*#__PURE__*/__webpack_require__.n(Switch_);

// EXTERNAL MODULE: external "@material-ui/core/Select"
var Select_ = __webpack_require__("OdWO");
var Select_default = /*#__PURE__*/__webpack_require__.n(Select_);

// EXTERNAL MODULE: external "@material-ui/core/MenuItem"
var MenuItem_ = __webpack_require__("x54t");
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);

// EXTERNAL MODULE: external "@material-ui/core/InputLabel"
var InputLabel_ = __webpack_require__("zOcm");
var InputLabel_default = /*#__PURE__*/__webpack_require__.n(InputLabel_);

// EXTERNAL MODULE: external "@material-ui/core/Hidden"
var Hidden_ = __webpack_require__("Y8uC");
var Hidden_default = /*#__PURE__*/__webpack_require__.n(Hidden_);

// EXTERNAL MODULE: external "@material-ui/icons/People"
var People_ = __webpack_require__("yFMe");
var People_default = /*#__PURE__*/__webpack_require__.n(People_);

// EXTERNAL MODULE: external "@material-ui/icons/Check"
var Check_ = __webpack_require__("9qvJ");
var Check_default = /*#__PURE__*/__webpack_require__.n(Check_);

// EXTERNAL MODULE: external "@material-ui/icons/FiberManualRecord"
var FiberManualRecord_ = __webpack_require__("IhOE");
var FiberManualRecord_default = /*#__PURE__*/__webpack_require__.n(FiberManualRecord_);

// EXTERNAL MODULE: ./components/CustomButtons/Button.js + 1 modules
var Button = __webpack_require__("Kg+a");

// EXTERNAL MODULE: ./components/CustomInput/CustomInput.js + 1 modules
var CustomInput = __webpack_require__("um8N");

// EXTERNAL MODULE: external "@material-ui/core/LinearProgress"
var LinearProgress_ = __webpack_require__("0zb8");
var LinearProgress_default = /*#__PURE__*/__webpack_require__.n(LinearProgress_);

// EXTERNAL MODULE: ./assets/jss/nextjs-material-tim-andrus.js
var nextjs_material_tim_andrus = __webpack_require__("k7mW");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/components/customLinearProgressStyle.js

const customLinearProgressStyle = {
  root: {
    height: "4px",
    marginBottom: "20px",
    overflow: "hidden"
  },
  bar: {
    height: "4px"
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
    backgroundColor: nextjs_material_tim_andrus["s" /* grayColor */][0]
  },
  primaryBackground: {
    background: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["G" /* primaryColor */][0]) + ", 0.2)"
  },
  warningBackground: {
    background: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Y" /* warningColor */][0]) + ", 0.2)"
  },
  dangerBackground: {
    background: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["l" /* dangerColor */][0]) + ", 0.2)"
  },
  successBackground: {
    background: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["R" /* successColor */][0]) + ", 0.2)"
  },
  infoBackground: {
    background: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["w" /* infoColor */][0]) + ", 0.2)"
  },
  roseBackground: {
    background: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["K" /* roseColor */][0]) + ", 0.2)"
  },
  grayBackground: {
    background: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["s" /* grayColor */][6]) + ", 0.2)"
  }
};
/* harmony default export */ var components_customLinearProgressStyle = (customLinearProgressStyle);
// CONCATENATED MODULE: ./components/CustomLinearProgress/CustomLinearProgress.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library to set properties for components

// @material-ui/core components



const useStyles = Object(styles_["makeStyles"])(components_customLinearProgressStyle);
function CustomLinearProgress(props) {
  const {
    color
  } = props,
        rest = _objectWithoutProperties(props, ["color"]);

  const classes = useStyles();
  return __jsx(LinearProgress_default.a, _extends({}, rest, {
    classes: {
      root: classes.root + " " + classes[color + "Background"],
      bar: classes.bar + " " + classes[color]
    }
  }));
}
CustomLinearProgress.defaultProps = {
  color: "gray"
};
// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/components/paginationStyle.js

const paginationStyle = {
  pagination: {
    display: "flex",
    paddingLeft: "0",
    listStyle: "none",
    borderRadius: "0.25rem"
  },
  paginationItem: {
    display: "inline"
  },
  paginationLink: {
    ":first-of-type": {
      marginleft: "0"
    },
    letterSpacing: "unset",
    border: "0",
    borderRadius: "30px !important",
    transition: "all .3s",
    padding: "0px 11px",
    margin: "0 3px",
    minWidth: "30px",
    height: "30px",
    minHeight: "auto",
    lineHeight: "30px",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    background: "transparent",
    position: "relative",
    float: "left",
    textDecoration: "none",
    boxSizing: "border-box",
    "&,&:hover,&:focus": {
      color: nextjs_material_tim_andrus["s" /* grayColor */][0]
    },
    "&:hover,&:focus": {
      zIndex: "3",
      backgroundColor: nextjs_material_tim_andrus["s" /* grayColor */][2],
      borderColor: nextjs_material_tim_andrus["s" /* grayColor */][6]
    },
    "&:hover": {
      cursor: "pointer"
    }
  },
  primary: {
    "&,&:hover,&:focus": {
      backgroundColor: nextjs_material_tim_andrus["G" /* primaryColor */][0],
      borderColor: nextjs_material_tim_andrus["G" /* primaryColor */][0],
      color: nextjs_material_tim_andrus["Z" /* whiteColor */],
      boxShadow: "0 4px 5px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["G" /* primaryColor */][0]) + ", 0.14), 0 1px 10px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["G" /* primaryColor */][0]) + ", 0.12), 0 2px 4px -1px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["G" /* primaryColor */][0]) + ", 0.2)"
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  info: {
    "&,&:hover,&:focus": {
      backgroundColor: nextjs_material_tim_andrus["w" /* infoColor */][0],
      borderColor: nextjs_material_tim_andrus["w" /* infoColor */][0],
      color: nextjs_material_tim_andrus["Z" /* whiteColor */],
      boxShadow: "0 4px 5px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["w" /* infoColor */][0]) + ", 0.14), 0 1px 10px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["w" /* infoColor */][0]) + ", 0.12), 0 2px 4px -1px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["w" /* infoColor */][0]) + ", 0.2)"
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  success: {
    "&,&:hover,&:focus": {
      backgroundColor: nextjs_material_tim_andrus["R" /* successColor */][0],
      borderColor: nextjs_material_tim_andrus["R" /* successColor */][0],
      color: nextjs_material_tim_andrus["Z" /* whiteColor */],
      boxShadow: "0 4px 5px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["R" /* successColor */][0]) + ", 0.14), 0 1px 10px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["R" /* successColor */][0]) + ", 0.12), 0 2px 4px -1px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["R" /* successColor */][0]) + ", 0.2)"
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  warning: {
    "&,&:hover,&:focus": {
      backgroundColor: nextjs_material_tim_andrus["Y" /* warningColor */][0],
      borderColor: nextjs_material_tim_andrus["Y" /* warningColor */][0],
      color: nextjs_material_tim_andrus["Z" /* whiteColor */],
      boxShadow: "0 4px 5px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Y" /* warningColor */][0]) + ", 0.14), 0 1px 10px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Y" /* warningColor */][0]) + ", 0.12), 0 2px 4px -1px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Y" /* warningColor */][0]) + ", 0.2)"
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  danger: {
    "&,&:hover,&:focus": {
      backgroundColor: nextjs_material_tim_andrus["l" /* dangerColor */][0],
      borderColor: nextjs_material_tim_andrus["l" /* dangerColor */][0],
      color: nextjs_material_tim_andrus["Z" /* whiteColor */],
      boxShadow: "0 4px 5px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["l" /* dangerColor */][0]) + ", 0.14), 0 1px 10px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["l" /* dangerColor */][0]) + ", 0.12), 0 2px 4px -1px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["l" /* dangerColor */][0]) + ", 0.2)"
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  disabled: {
    "&,&:hover,&:focus": {
      color: nextjs_material_tim_andrus["s" /* grayColor */][10],
      cursor: "not-allowed",
      backgroundColor: nextjs_material_tim_andrus["Z" /* whiteColor */],
      borderColor: nextjs_material_tim_andrus["s" /* grayColor */][6]
    }
  }
};
/* harmony default export */ var components_paginationStyle = (paginationStyle);
// CONCATENATED MODULE: ./components/Pagination/Pagination.js
var Pagination_jsx = external_react_default.a.createElement;
 // nodejs library to set properties for components

// nodejs library that concatenates classes
 // @material-ui/core components




const Pagination_useStyles = Object(styles_["makeStyles"])(components_paginationStyle);
function Pagination(props) {
  const {
    pages,
    color,
    className
  } = props;
  const classes = Pagination_useStyles();
  const paginationClasses = external_classnames_default()(classes.pagination, className);
  return Pagination_jsx("ul", {
    className: paginationClasses
  }, pages.map((prop, key) => {
    const paginationLink = external_classnames_default()({
      [classes.paginationLink]: true,
      [classes[color]]: prop.active,
      [classes.disabled]: prop.disabled
    });
    return Pagination_jsx("li", {
      className: classes.paginationItem,
      key: key
    }, prop.onClick !== undefined ? Pagination_jsx(Button_default.a, {
      onClick: prop.onClick,
      className: paginationLink,
      disabled: prop.disabled
    }, prop.text) : Pagination_jsx(Button_default.a, {
      onClick: () => alert("you've clicked " + prop.text),
      className: paginationLink,
      disabled: prop.disabled
    }, prop.text));
  }));
}
Pagination.defaultProps = {
  color: "primary"
};
// EXTERNAL MODULE: ./components/Badge/Badge.js + 1 modules
var Badge = __webpack_require__("XY9v");

// EXTERNAL MODULE: ./components/CustomDropdown/CustomDropdown.js + 1 modules
var CustomDropdown = __webpack_require__("QOEo");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-tim-andrus/customCheckboxRadioSwitchStyle.js
var customCheckboxRadioSwitchStyle = __webpack_require__("poL+");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-tim-andrus/customSelectStyle.js
var customSelectStyle = __webpack_require__("d3hG");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/pages/componentsSections/basicsStyle.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const basicsStyle = _objectSpread({
  mlAuto: nextjs_material_tim_andrus["B" /* mlAuto */],
  mrAuto: nextjs_material_tim_andrus["C" /* mrAuto */],
  container: nextjs_material_tim_andrus["h" /* container */]
}, customSelectStyle["a" /* default */], {}, customCheckboxRadioSwitchStyle["a" /* default */], {
  sections: {
    padding: "70px 0"
  },
  title: _objectSpread({}, nextjs_material_tim_andrus["S" /* title */], {
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }),
  space50: {
    height: "50px",
    display: "block"
  },
  space70: {
    height: "70px",
    display: "block"
  },
  icons: {
    width: "17px",
    height: "17px",
    color: nextjs_material_tim_andrus["Z" /* whiteColor */]
  }
});

/* harmony default export */ var componentsSections_basicsStyle = (basicsStyle);
// CONCATENATED MODULE: ./pages-sections/components/SectionBasics.js
var SectionBasics_jsx = external_react_default.a.createElement;
 // plugin that creates slider

 // react component plugin for creating beatiful tags on an input

 // @material-ui/core components











 // @material-ui/icons




 // core components










const SectionBasics_useStyles = Object(styles_["makeStyles"])(componentsSections_basicsStyle);
function SectionBasics() {
  const [checked, setChecked] = external_react_default.a.useState([24, 22]);
  const [selectedEnabled, setSelectedEnabled] = external_react_default.a.useState("b");
  const [checkedA, setCheckedA] = external_react_default.a.useState(true);
  const [checkedB, setCheckedB] = external_react_default.a.useState(false);
  const [simpleSelect, setSimpleSelect] = external_react_default.a.useState("");
  const [multipleSelect, setMultipleSelect] = external_react_default.a.useState([]);
  const [tags, setTags] = external_react_default.a.useState(["amsterdam", "washington", "sydney", "beijing"]);
  external_react_default.a.useEffect(() => {
    if (!document.getElementById("sliderRegular").classList.contains("noUi-target")) {
      external_nouislider_default.a.create(document.getElementById("sliderRegular"), {
        start: [40],
        connect: [true, false],
        step: 1,
        range: {
          min: 0,
          max: 100
        }
      });
    }

    if (!document.getElementById("sliderDouble").classList.contains("noUi-target")) {
      external_nouislider_default.a.create(document.getElementById("sliderDouble"), {
        start: [20, 60],
        connect: [false, true, false],
        step: 1,
        range: {
          min: 0,
          max: 100
        }
      });
    }

    return function cleanup() {};
  });

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

  const handleSimple = event => {
    setSimpleSelect(event.target.value);
  };

  const handleMultiple = event => {
    setMultipleSelect(event.target.value);
  };

  const handleTags = regularTags => {
    setTags(regularTags);
  };

  const classes = SectionBasics_useStyles();
  return SectionBasics_jsx("div", {
    className: classes.sections
  }, SectionBasics_jsx("div", {
    className: classes.container
  }, SectionBasics_jsx("div", {
    className: classes.title
  }, SectionBasics_jsx("h2", null, "Basic Elements")), SectionBasics_jsx("div", {
    id: "buttons",
    className: "cd-section"
  }, SectionBasics_jsx("div", {
    className: classes.title
  }, SectionBasics_jsx("h3", null, "Buttons", SectionBasics_jsx("br", null), SectionBasics_jsx("small", null, "Pick your style"))), SectionBasics_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, SectionBasics_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 8,
    md: 8
  }, SectionBasics_jsx(Button["a" /* default */], {
    color: "primary"
  }, "Default"), SectionBasics_jsx(Button["a" /* default */], {
    color: "primary",
    round: true
  }, "round"), SectionBasics_jsx(Button["a" /* default */], {
    color: "primary",
    round: true
  }, SectionBasics_jsx(Favorite_default.a, {
    className: classes.icons
  }), " with icon"), SectionBasics_jsx(Button["a" /* default */], {
    color: "primary",
    justIcon: true,
    round: true
  }, SectionBasics_jsx(Favorite_default.a, null)), SectionBasics_jsx(Button["a" /* default */], {
    color: "primary",
    simple: true
  }, "simple"))), SectionBasics_jsx("div", {
    className: classes.title
  }, SectionBasics_jsx("h3", null, SectionBasics_jsx("small", null, "Pick your size"))), SectionBasics_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, SectionBasics_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 8,
    md: 8
  }, SectionBasics_jsx(Button["a" /* default */], {
    color: "primary",
    size: "sm"
  }, "Small"), SectionBasics_jsx(Button["a" /* default */], {
    color: "primary"
  }, "Regular"), SectionBasics_jsx(Button["a" /* default */], {
    color: "primary",
    size: "lg"
  }, "Large"))), SectionBasics_jsx("div", {
    className: classes.title
  }, SectionBasics_jsx("h3", null, SectionBasics_jsx("small", null, "Pick your color"))), SectionBasics_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, SectionBasics_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 8,
    md: 8
  }, SectionBasics_jsx(Button["a" /* default */], null, "Default"), SectionBasics_jsx(Button["a" /* default */], {
    color: "primary"
  }, "Primary"), SectionBasics_jsx(Button["a" /* default */], {
    color: "info"
  }, "Info"), SectionBasics_jsx(Button["a" /* default */], {
    color: "success"
  }, "Success"), SectionBasics_jsx(Button["a" /* default */], {
    color: "warning"
  }, "Warning"), SectionBasics_jsx(Button["a" /* default */], {
    color: "danger"
  }, "Danger"), SectionBasics_jsx(Button["a" /* default */], {
    color: "rose"
  }, "Rose")))), SectionBasics_jsx("div", {
    className: classes.space50
  }), SectionBasics_jsx("div", {
    id: "social-buttons"
  }, SectionBasics_jsx("div", {
    className: classes.title
  }, SectionBasics_jsx("h3", null, "Social Buttons")), SectionBasics_jsx(GridContainer["a" /* default */], null, SectionBasics_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 3
  }, SectionBasics_jsx("h3", null, SectionBasics_jsx("small", null, "Default")), SectionBasics_jsx(Button["a" /* default */], {
    color: "twitter"
  }, SectionBasics_jsx("i", {
    className: "fab fa-twitter"
  }), " Connect with twitter"), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "facebook"
  }, SectionBasics_jsx("i", {
    className: "fab fa-facebook-square"
  }), " Share \xB7 2.2k"), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "instagram"
  }, SectionBasics_jsx("i", {
    className: "fab fa-instagram"
  }), " Follow on instagram"), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "google"
  }, SectionBasics_jsx("i", {
    className: "fab fa-google-plus-square"
  }), " Share on Google+"), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "linkedin"
  }, SectionBasics_jsx("i", {
    className: "fab fa-linkedin"
  }), " Connect with linkedin"), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "pinterest"
  }, SectionBasics_jsx("i", {
    className: "fab fa-pinterest"
  }), " Pint it \xB7 212"), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "youtube"
  }, SectionBasics_jsx("i", {
    className: "fab fa-youtube"
  }), " View on youtube"), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "tumblr"
  }, SectionBasics_jsx("i", {
    className: "fab fa-tumblr-square"
  }), " Repost"), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "github"
  }, SectionBasics_jsx("i", {
    className: "fab fa-github"
  }), " Connect with github"), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "behance"
  }, SectionBasics_jsx("i", {
    className: "fab fa-behance-square"
  }), " Follow us"), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "dribbble"
  }, SectionBasics_jsx("i", {
    className: "fab fa-dribbble"
  }), " Find us on dribbble"), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "reddit"
  }, SectionBasics_jsx("i", {
    className: "fab fa-reddit"
  }), " Repost \xB7 232")), SectionBasics_jsx(GridItem["a" /* default */], {
    xs: 6,
    sm: 3,
    md: 3,
    lg: 1
  }, SectionBasics_jsx("h3", null, SectionBasics_jsx("small", null, "\xA0")), SectionBasics_jsx(Button["a" /* default */], {
    color: "twitter",
    justIcon: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-twitter"
  })), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "facebook",
    justIcon: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-facebook-f"
  })), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "instagram",
    justIcon: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-instagram"
  })), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "google",
    justIcon: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-google"
  })), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "linkedin",
    justIcon: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-linkedin-in"
  })), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "pinterest",
    justIcon: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-pinterest"
  })), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "youtube",
    justIcon: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-youtube"
  })), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "tumblr",
    justIcon: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-tumblr"
  })), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "github",
    justIcon: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-github"
  })), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "behance",
    justIcon: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-behance"
  })), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "dribbble",
    justIcon: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-dribbble"
  })), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "reddit",
    justIcon: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-reddit"
  }))), SectionBasics_jsx(GridItem["a" /* default */], {
    xs: 6,
    sm: 2,
    md: 2,
    lg: 1
  }, SectionBasics_jsx("h3", null, SectionBasics_jsx("small", null, "\xA0")), SectionBasics_jsx(Button["a" /* default */], {
    color: "twitter",
    round: true,
    justIcon: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-twitter"
  })), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "facebook",
    round: true,
    justIcon: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-facebook-f"
  })), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "instagram",
    round: true,
    justIcon: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-instagram"
  })), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "google",
    round: true,
    justIcon: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-google"
  })), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "linkedin",
    round: true,
    justIcon: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-linkedin-in"
  })), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "pinterest",
    round: true,
    justIcon: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-pinterest"
  })), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "youtube",
    round: true,
    justIcon: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-youtube"
  })), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "tumblr",
    round: true,
    justIcon: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-tumblr"
  })), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "github",
    round: true,
    justIcon: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-github"
  })), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "behance",
    round: true,
    justIcon: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-behance"
  })), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "dribbble",
    round: true,
    justIcon: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-dribbble"
  })), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "reddit",
    round: true,
    justIcon: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-reddit"
  }))), SectionBasics_jsx(GridItem["a" /* default */], {
    xs: 4,
    sm: 3,
    md: 3,
    lg: 1
  }, SectionBasics_jsx("h3", null, SectionBasics_jsx("small", null, "Simple")), SectionBasics_jsx(Button["a" /* default */], {
    color: "twitter",
    round: true,
    justIcon: true,
    simple: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-twitter"
  })), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "facebook",
    round: true,
    justIcon: true,
    simple: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-facebook-f"
  })), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "instagram",
    round: true,
    justIcon: true,
    simple: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-instagram"
  })), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "google",
    round: true,
    justIcon: true,
    simple: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-google"
  })), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "linkedin",
    round: true,
    justIcon: true,
    simple: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-linkedin-in"
  })), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "pinterest",
    round: true,
    justIcon: true,
    simple: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-pinterest"
  })), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "youtube",
    round: true,
    justIcon: true,
    simple: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-youtube"
  })), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "tumblr",
    round: true,
    justIcon: true,
    simple: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-tumblr"
  })), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "github",
    round: true,
    justIcon: true,
    simple: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-github"
  })), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "behance",
    round: true,
    justIcon: true,
    simple: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-behance"
  })), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "dribbble",
    round: true,
    justIcon: true,
    simple: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-dribbble"
  })), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "reddit",
    round: true,
    justIcon: true,
    simple: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-reddit"
  }))), SectionBasics_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 3
  }, SectionBasics_jsx("h3", null, SectionBasics_jsx("small", null, "\xA0")), SectionBasics_jsx(Button["a" /* default */], {
    color: "twitter",
    simple: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-twitter"
  }), " Connect with twitter"), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "facebook",
    simple: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-facebook-square"
  }), " Share \xB7 2.2k"), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "instagram",
    simple: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-instagram"
  }), " Follow on instagram"), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "google",
    simple: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-google-plus-square"
  }), " Share on Google+"), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "linkedin",
    simple: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-linkedin"
  }), " Connect with linkedin"), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "pinterest",
    simple: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-pinterest"
  }), " Pint it \xB7 212"), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "youtube",
    simple: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-youtube"
  }), " View on youtube"), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "tumblr",
    simple: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-tumblr-square"
  }), " Repost"), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "github",
    simple: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-github"
  }), " Connect with github"), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "behance",
    simple: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-behance-square"
  }), " Follow us"), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "dribbble",
    simple: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-dribbble"
  }), " Find us on dribbble"), SectionBasics_jsx("br", null), SectionBasics_jsx(Button["a" /* default */], {
    color: "reddit",
    simple: true
  }, SectionBasics_jsx("i", {
    className: "fab fa-reddit"
  }), " Repost \xB7 232")))), SectionBasics_jsx("div", {
    className: classes.space50
  }), SectionBasics_jsx("div", {
    id: "inputs"
  }, SectionBasics_jsx("div", {
    className: classes.title
  }, SectionBasics_jsx("h3", null, "Inputs")), SectionBasics_jsx(GridContainer["a" /* default */], null, SectionBasics_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3
  }, SectionBasics_jsx(CustomInput["a" /* default */], {
    id: "regular",
    inputProps: {
      placeholder: "Regular"
    },
    formControlProps: {
      fullWidth: true
    }
  })), SectionBasics_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3
  }, SectionBasics_jsx(CustomInput["a" /* default */], {
    labelText: "With floating label",
    id: "float",
    formControlProps: {
      fullWidth: true
    }
  })), SectionBasics_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3
  }, SectionBasics_jsx(CustomInput["a" /* default */], {
    labelText: "Success input",
    id: "success",
    success: true,
    formControlProps: {
      fullWidth: true
    }
  })), SectionBasics_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3
  }, SectionBasics_jsx(CustomInput["a" /* default */], {
    labelText: "Error input",
    id: "error",
    error: true,
    formControlProps: {
      fullWidth: true
    }
  })), SectionBasics_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3
  }, SectionBasics_jsx(CustomInput["a" /* default */], {
    labelText: "With material Icons",
    id: "material",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      endAdornment: SectionBasics_jsx(InputAdornment_default.a, {
        position: "end"
      }, SectionBasics_jsx(People_default.a, null))
    }
  })), SectionBasics_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3
  }, SectionBasics_jsx(CustomInput["a" /* default */], {
    labelText: "With Font Awesome Icons",
    id: "font-awesome",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      endAdornment: SectionBasics_jsx(InputAdornment_default.a, {
        position: "end"
      }, SectionBasics_jsx("i", {
        className: "fas fa-users"
      }))
    }
  })))), SectionBasics_jsx("div", {
    className: classes.space70
  }), SectionBasics_jsx("div", {
    id: "checkRadios"
  }, SectionBasics_jsx(GridContainer["a" /* default */], null, SectionBasics_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3
  }, SectionBasics_jsx("div", {
    className: classes.title
  }, SectionBasics_jsx("h3", null, "Checkboxes")), SectionBasics_jsx("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
  }, SectionBasics_jsx(FormControlLabel_default.a, {
    control: SectionBasics_jsx(Checkbox_default.a, {
      tabIndex: -1,
      onClick: () => handleToggle(21),
      checkedIcon: SectionBasics_jsx(Check_default.a, {
        className: classes.checkedIcon
      }),
      icon: SectionBasics_jsx(Check_default.a, {
        className: classes.uncheckedIcon
      }),
      classes: {
        checked: classes.checked,
        root: classes.checkRoot
      }
    }),
    classes: {
      label: classes.label,
      root: classes.labelRoot
    },
    label: "Unchecked"
  })), SectionBasics_jsx("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
  }, SectionBasics_jsx(FormControlLabel_default.a, {
    control: SectionBasics_jsx(Checkbox_default.a, {
      tabIndex: -1,
      onClick: () => handleToggle(22),
      checked: checked.indexOf(22) !== -1 ? true : false,
      checkedIcon: SectionBasics_jsx(Check_default.a, {
        className: classes.checkedIcon
      }),
      icon: SectionBasics_jsx(Check_default.a, {
        className: classes.uncheckedIcon
      }),
      classes: {
        checked: classes.checked,
        root: classes.checkRoot
      }
    }),
    classes: {
      label: classes.label,
      root: classes.labelRoot
    },
    label: "Checked"
  })), SectionBasics_jsx("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
  }, SectionBasics_jsx(FormControlLabel_default.a, {
    disabled: true,
    control: SectionBasics_jsx(Checkbox_default.a, {
      tabIndex: -1,
      checkedIcon: SectionBasics_jsx(Check_default.a, {
        className: classes.checkedIcon
      }),
      icon: SectionBasics_jsx(Check_default.a, {
        className: classes.uncheckedIcon
      }),
      classes: {
        checked: classes.checked,
        root: classes.checkRoot
      }
    }),
    classes: {
      label: classes.label,
      disabled: classes.disabledCheckboxAndRadio,
      root: classes.labelRoot
    },
    label: "Disabled Unchecked"
  })), SectionBasics_jsx("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
  }, SectionBasics_jsx(FormControlLabel_default.a, {
    disabled: true,
    control: SectionBasics_jsx(Checkbox_default.a, {
      tabIndex: -1,
      checked: checked.indexOf(24) !== -1 ? true : false,
      checkedIcon: SectionBasics_jsx(Check_default.a, {
        className: classes.checkedIcon
      }),
      icon: SectionBasics_jsx(Check_default.a, {
        className: classes.uncheckedIcon
      }),
      classes: {
        checked: classes.checked,
        root: classes.checkRoot
      }
    }),
    classes: {
      label: classes.label,
      disabled: classes.disabledCheckboxAndRadio,
      root: classes.labelRoot
    },
    label: "Disabled Checked"
  }))), SectionBasics_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3
  }, SectionBasics_jsx("div", {
    className: classes.title
  }, SectionBasics_jsx("h3", null, "Radio Buttons")), SectionBasics_jsx("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
  }, SectionBasics_jsx(FormControlLabel_default.a, {
    control: SectionBasics_jsx(Radio_default.a, {
      checked: selectedEnabled === "a",
      onChange: () => setSelectedEnabled("a"),
      value: "a",
      name: "radio button enabled",
      "aria-label": "A",
      icon: SectionBasics_jsx(FiberManualRecord_default.a, {
        className: classes.radioUnchecked
      }),
      checkedIcon: SectionBasics_jsx(FiberManualRecord_default.a, {
        className: classes.radioChecked
      }),
      classes: {
        checked: classes.radio,
        root: classes.radioRoot
      }
    }),
    classes: {
      label: classes.label,
      root: classes.labelRoot
    },
    label: "First Radio"
  })), SectionBasics_jsx("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
  }, SectionBasics_jsx(FormControlLabel_default.a, {
    control: SectionBasics_jsx(Radio_default.a, {
      checked: selectedEnabled === "b",
      onChange: () => setSelectedEnabled("b"),
      value: "b",
      name: "radio button enabled",
      "aria-label": "B",
      icon: SectionBasics_jsx(FiberManualRecord_default.a, {
        className: classes.radioUnchecked
      }),
      checkedIcon: SectionBasics_jsx(FiberManualRecord_default.a, {
        className: classes.radioChecked
      }),
      classes: {
        checked: classes.radio,
        root: classes.radioRoot
      }
    }),
    classes: {
      label: classes.label,
      root: classes.labelRoot
    },
    label: "Second Radio"
  })), SectionBasics_jsx("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
  }, SectionBasics_jsx(FormControlLabel_default.a, {
    disabled: true,
    control: SectionBasics_jsx(Radio_default.a, {
      checked: false,
      value: "a",
      name: "radio button disabled",
      "aria-label": "B",
      icon: SectionBasics_jsx(FiberManualRecord_default.a, {
        className: classes.radioUnchecked
      }),
      checkedIcon: SectionBasics_jsx(FiberManualRecord_default.a, {
        className: classes.radioChecked
      }),
      classes: {
        checked: classes.radio,
        disabled: classes.disabledCheckboxAndRadio,
        root: classes.radioRoot
      }
    }),
    classes: {
      label: classes.label,
      root: classes.labelRoot
    },
    label: "Disabled Unchecked Radio"
  })), SectionBasics_jsx("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
  }, SectionBasics_jsx(FormControlLabel_default.a, {
    disabled: true,
    control: SectionBasics_jsx(Radio_default.a, {
      checked: true,
      value: "b",
      name: "radio button disabled",
      "aria-label": "B",
      icon: SectionBasics_jsx(FiberManualRecord_default.a, {
        className: classes.radioUnchecked
      }),
      checkedIcon: SectionBasics_jsx(FiberManualRecord_default.a, {
        className: classes.radioChecked
      }),
      classes: {
        checked: classes.radio,
        disabled: classes.disabledCheckboxAndRadio,
        root: classes.radioRoot
      }
    }),
    classes: {
      label: classes.label,
      root: classes.labelRoot
    },
    label: "Disabled Checked Radio"
  }))), SectionBasics_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3
  }, SectionBasics_jsx("div", {
    className: classes.title
  }, SectionBasics_jsx("h3", null, "Toggle Buttons")), SectionBasics_jsx("div", null, SectionBasics_jsx(FormControlLabel_default.a, {
    control: SectionBasics_jsx(Switch_default.a, {
      checked: checkedA,
      onChange: event => setCheckedA(event.target.checked),
      value: "checkedA",
      classes: {
        switchBase: classes.switchBase,
        checked: classes.switchChecked,
        thumb: classes.switchIcon,
        track: classes.switchBar
      }
    }),
    classes: {
      label: classes.label,
      root: classes.labelRoot
    },
    label: "Toggle is on"
  })), SectionBasics_jsx("div", null, SectionBasics_jsx(FormControlLabel_default.a, {
    control: SectionBasics_jsx(Switch_default.a, {
      checked: checkedB,
      onChange: event => setCheckedB(event.target.checked),
      value: "checkedB",
      classes: {
        switchBase: classes.switchBase,
        checked: classes.switchChecked,
        thumb: classes.switchIcon,
        track: classes.switchBar
      }
    }),
    classes: {
      label: classes.label,
      root: classes.labelRoot
    },
    label: "Toggle is off"
  }))))), SectionBasics_jsx("div", {
    className: classes.space70
  }), SectionBasics_jsx("div", {
    id: "select"
  }, SectionBasics_jsx(GridContainer["a" /* default */], null, SectionBasics_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, SectionBasics_jsx("div", {
    className: classes.title
  }, SectionBasics_jsx("h3", null, "Customizable Select")), SectionBasics_jsx(GridContainer["a" /* default */], null, SectionBasics_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 5
  }, SectionBasics_jsx(FormControl_default.a, {
    fullWidth: true,
    className: classes.selectFormControl
  }, SectionBasics_jsx(InputLabel_default.a, {
    htmlFor: "simple-select",
    className: classes.selectLabel
  }, "Single Select"), SectionBasics_jsx(Select_default.a, {
    MenuProps: {
      className: classes.selectMenu
    },
    classes: {
      select: classes.select
    },
    value: simpleSelect,
    onChange: handleSimple,
    inputProps: {
      name: "simpleSelect",
      id: "simple-select"
    }
  }, SectionBasics_jsx(MenuItem_default.a, {
    disabled: true,
    classes: {
      root: classes.selectMenuItem
    }
  }, "Single Select"), SectionBasics_jsx(MenuItem_default.a, {
    classes: {
      root: classes.selectMenuItem,
      selected: classes.selectMenuItemSelected
    },
    value: "2"
  }, "Paris"), SectionBasics_jsx(MenuItem_default.a, {
    classes: {
      root: classes.selectMenuItem,
      selected: classes.selectMenuItemSelected
    },
    value: "3"
  }, "Bucharest"), SectionBasics_jsx(MenuItem_default.a, {
    classes: {
      root: classes.selectMenuItem,
      selected: classes.selectMenuItemSelected
    },
    value: "4"
  }, "Rome")))), SectionBasics_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 5
  }, SectionBasics_jsx(FormControl_default.a, {
    fullWidth: true,
    className: classes.selectFormControl
  }, SectionBasics_jsx(InputLabel_default.a, {
    htmlFor: "multiple-select",
    className: classes.selectLabel
  }, "Multiple Select"), SectionBasics_jsx(Select_default.a, {
    multiple: true,
    value: multipleSelect,
    onChange: handleMultiple,
    MenuProps: {
      className: classes.selectMenu,
      classes: {
        paper: classes.selectPaper
      }
    },
    classes: {
      select: classes.select
    },
    inputProps: {
      name: "multipleSelect",
      id: "multiple-select"
    }
  }, SectionBasics_jsx(MenuItem_default.a, {
    disabled: true,
    classes: {
      root: classes.selectMenuItem
    }
  }, "Multiple Select"), SectionBasics_jsx(MenuItem_default.a, {
    classes: {
      root: classes.selectMenuItem,
      selected: classes.selectMenuItemSelectedMultiple
    },
    value: "2"
  }, "Paris"), SectionBasics_jsx(MenuItem_default.a, {
    classes: {
      root: classes.selectMenuItem,
      selected: classes.selectMenuItemSelectedMultiple
    },
    value: "3"
  }, "Bucharest"), SectionBasics_jsx(MenuItem_default.a, {
    classes: {
      root: classes.selectMenuItem,
      selected: classes.selectMenuItemSelectedMultiple
    },
    value: "4"
  }, "Rome")))))), SectionBasics_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 6
  }, SectionBasics_jsx("div", {
    className: classes.title
  }, SectionBasics_jsx("h3", null, "Dropdown & Dropup")), SectionBasics_jsx(GridContainer["a" /* default */], null, SectionBasics_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 8,
    lg: 6
  }, SectionBasics_jsx(CustomDropdown["a" /* default */], {
    dropdownHeader: "Dropdown header",
    buttonText: "Multilevel Dropdown",
    buttonProps: {
      round: true,
      block: true,
      color: "info"
    },
    dropPlacement: "bottom",
    dropdownList: ["Action", "Another action", "Something else here", {
      divider: true
    }, "Separated link", {
      divider: true
    }, "One more separated link", SectionBasics_jsx(CustomDropdown["a" /* default */], {
      "data-ref": "multi",
      key: 96586,
      innerDropDown: true,
      buttonText: "Submenu",
      buttonProps: {
        simple: true,
        block: true
      },
      dropPlacement: "right-start",
      dropdownList: ["Submenu action", "Submenu action", SectionBasics_jsx(CustomDropdown["a" /* default */], {
        "data-ref": "multi",
        key: 965816,
        innerDropDown: true,
        buttonText: "Second submenu",
        buttonProps: {
          simple: true
        },
        dropPlacement: "right-start",
        dropdownList: ["Submenu action 1", "Submenu action 2"]
      })]
    })]
  })), SectionBasics_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 8,
    lg: 6
  }, SectionBasics_jsx(CustomDropdown["a" /* default */], {
    dropup: true,
    dropPlacement: "top",
    dropdownHeader: "Dropup header",
    buttonText: "Dropup",
    buttonProps: {
      round: true,
      block: true,
      color: "info"
    },
    dropdownList: ["Action", "Another action", "Something else here", {
      divider: true
    }, "Separated link", {
      divider: true
    }, "One more separated link"]
  })), SectionBasics_jsx(GridItem["a" /* default */], {
    sm: 12,
    md: 8,
    lg: 6,
    className: classes.mlAuto + " " + classes.mrAuto
  }, SectionBasics_jsx(CustomDropdown["a" /* default */], {
    dropdownHeader: "Dropdown header",
    buttonText: "Dropdown",
    buttonProps: {
      round: true,
      block: true,
      color: "info"
    },
    dropPlacement: "bottom",
    dropdownList: ["Action", "Another action", "Sometjing else here", {
      divider: true
    }, "Separeted link"]
  })))))), SectionBasics_jsx("div", {
    className: classes.space70
  }), SectionBasics_jsx("div", {
    id: "textareaTags"
  }, SectionBasics_jsx(GridContainer["a" /* default */], null, SectionBasics_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, SectionBasics_jsx("div", {
    className: classes.title
  }, SectionBasics_jsx("h3", null, "Textarea")), SectionBasics_jsx(CustomInput["a" /* default */], {
    labelText: "You can write your text here...",
    id: "textarea-input",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      multiline: true,
      rows: 5
    }
  })), SectionBasics_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, SectionBasics_jsx("div", {
    className: classes.title
  }, SectionBasics_jsx("h3", null, "Tags")), SectionBasics_jsx(external_react_tagsinput_default.a, {
    value: tags,
    onChange: handleTags,
    tagProps: {
      className: "react-tagsinput-tag rose"
    }
  })))), SectionBasics_jsx("div", {
    id: "progress"
  }, SectionBasics_jsx(GridContainer["a" /* default */], null, SectionBasics_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, SectionBasics_jsx("div", {
    className: classes.title
  }, SectionBasics_jsx("h3", null, "Progress Bars")), SectionBasics_jsx(CustomLinearProgress, {
    variant: "determinate",
    color: "primary",
    value: 30
  }), SectionBasics_jsx(CustomLinearProgress, {
    variant: "determinate",
    color: "info",
    value: 60
  }), SectionBasics_jsx(CustomLinearProgress, {
    variant: "determinate",
    color: "success",
    value: 100,
    style: {
      width: "35%",
      display: "inline-block"
    }
  }), SectionBasics_jsx(CustomLinearProgress, {
    variant: "determinate",
    color: "warning",
    value: 100,
    style: {
      width: "20%",
      display: "inline-block"
    }
  }), SectionBasics_jsx(CustomLinearProgress, {
    variant: "determinate",
    color: "danger",
    value: 25,
    style: {
      width: "45%",
      display: "inline-block"
    }
  })), SectionBasics_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, SectionBasics_jsx("div", {
    className: classes.title
  }, SectionBasics_jsx("h3", null, "Pagination")), SectionBasics_jsx(Hidden_default.a, {
    smDown: true
  }, SectionBasics_jsx(Pagination, {
    pages: [{
      text: 1
    }, {
      disabled: true,
      text: "..."
    }, {
      text: 5
    }, {
      text: 6
    }, {
      active: true,
      text: 7
    }, {
      text: 8
    }, {
      text: 9
    }, {
      text: "..."
    }, {
      text: 12
    }]
  }), SectionBasics_jsx(Pagination, {
    pages: [{
      text: "PREV"
    }, {
      text: 1
    }, {
      text: 2
    }, {
      active: true,
      text: 3
    }, {
      text: 4
    }, {
      text: 5
    }, {
      text: "NEXT"
    }],
    color: "info"
  })), SectionBasics_jsx(Hidden_default.a, {
    smUp: true
  }, SectionBasics_jsx(Pagination, {
    pages: [{
      text: 1
    }, {
      disabled: true,
      text: "..."
    }, {
      text: 6
    }, {
      active: true,
      text: 7
    }, {
      text: 8
    }, {
      text: "..."
    }]
  }), SectionBasics_jsx(Pagination, {
    pages: [{
      text: 1
    }, {
      text: 2
    }, {
      active: true,
      text: 3
    }, {
      text: 4
    }, {
      text: 5
    }],
    color: "info"
  }))))), SectionBasics_jsx("div", {
    id: "sliders"
  }, SectionBasics_jsx(GridContainer["a" /* default */], null, SectionBasics_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, SectionBasics_jsx("div", {
    className: classes.title
  }, SectionBasics_jsx("h3", null, "Sliders")), SectionBasics_jsx("div", {
    id: "sliderRegular",
    className: "slider-primary"
  }), SectionBasics_jsx("br", null), SectionBasics_jsx("div", {
    id: "sliderDouble",
    className: "slider-info"
  })), SectionBasics_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, SectionBasics_jsx("div", {
    className: classes.title
  }, SectionBasics_jsx("h3", null, "Badges")), SectionBasics_jsx(Badge["a" /* default */], null, "default"), SectionBasics_jsx(Badge["a" /* default */], {
    color: "primary"
  }, "primary"), SectionBasics_jsx(Badge["a" /* default */], {
    color: "info"
  }, "info"), SectionBasics_jsx(Badge["a" /* default */], {
    color: "success"
  }, "success"), SectionBasics_jsx(Badge["a" /* default */], {
    color: "warning"
  }, "warning"), SectionBasics_jsx(Badge["a" /* default */], {
    color: "danger"
  }, "danger"), SectionBasics_jsx(Badge["a" /* default */], {
    color: "rose"
  }, "rose"))))));
}
// EXTERNAL MODULE: external "@material-ui/icons/Search"
var Search_ = __webpack_require__("iSPQ");
var Search_default = /*#__PURE__*/__webpack_require__.n(Search_);

// EXTERNAL MODULE: external "@material-ui/icons/Email"
var Email_ = __webpack_require__("OL+V");
var Email_default = /*#__PURE__*/__webpack_require__.n(Email_);

// EXTERNAL MODULE: external "@material-ui/icons/Face"
var Face_ = __webpack_require__("WpHN");
var Face_default = /*#__PURE__*/__webpack_require__.n(Face_);

// EXTERNAL MODULE: external "@material-ui/icons/Settings"
var Settings_ = __webpack_require__("XnMA");
var Settings_default = /*#__PURE__*/__webpack_require__.n(Settings_);

// EXTERNAL MODULE: external "@material-ui/icons/AccountCircle"
var AccountCircle_ = __webpack_require__("DME6");
var AccountCircle_default = /*#__PURE__*/__webpack_require__.n(AccountCircle_);

// EXTERNAL MODULE: external "@material-ui/icons/Explore"
var Explore_ = __webpack_require__("cWMY");
var Explore_default = /*#__PURE__*/__webpack_require__.n(Explore_);

// EXTERNAL MODULE: ./assets/jss/nextjs-material-tim-andrus/components/headerLinksStyle.js
var headerLinksStyle = __webpack_require__("96c8");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/pages/componentsSections/navbarsStyle.js
function navbarsStyle_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function navbarsStyle_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { navbarsStyle_ownKeys(Object(source), true).forEach(function (key) { navbarsStyle_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { navbarsStyle_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function navbarsStyle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const navbarsStyle = theme => navbarsStyle_objectSpread({
  container: nextjs_material_tim_andrus["h" /* container */]
}, Object(headerLinksStyle["a" /* default */])(theme), {
  section: {
    padding: "70px 0",
    paddingBottom: "0"
  },
  title: navbarsStyle_objectSpread({}, nextjs_material_tim_andrus["S" /* title */], {
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }),
  navbar: {
    marginBottom: "-20px",
    zIndex: "100",
    position: "relative",
    overflow: "hidden",
    "& header": {
      borderRadius: "0",
      zIndex: "unset"
    }
  },
  navigation: {
    backgroundPosition: "50%",
    backgroundSize: "cover",
    marginTop: "0",
    minHeight: "740px"
  },
  formControl: {
    [theme.breakpoints.down("md")]: {
      color: nextjs_material_tim_andrus["s" /* grayColor */][0],
      marginLeft: "20px !important"
    },
    margin: "0 !important",
    paddingTop: "7px",
    paddingBottom: "7px"
  },
  inputRootCustomClasses: {
    margin: "0!important"
  },
  searchIcon: {
    width: "20px",
    height: "20px",
    color: "inherit"
  },
  img: {
    width: "40px",
    height: "40px",
    borderRadius: "50%"
  },
  imageDropdownButton: {
    [theme.breakpoints.down("md")]: {
      top: "0",
      margin: "5px 15px"
    },
    padding: "0px",
    borderRadius: "50%",
    marginLeft: "5px"
  }
});

/* harmony default export */ var componentsSections_navbarsStyle = (navbarsStyle);
// CONCATENATED MODULE: ./assets/img/bg.jpg
/* harmony default export */ var bg = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2JnLmpwZyI7");
// EXTERNAL MODULE: ./assets/img/faces/avatar.jpg
var faces_avatar = __webpack_require__("ydEf");

// CONCATENATED MODULE: ./pages-sections/components/SectionNavbars.js
var SectionNavbars_jsx = external_react_default.a.createElement;
 // @material-ui/core components



 // @material-ui/icons






 // core components










const SectionNavbars_useStyles = Object(styles_["makeStyles"])(componentsSections_navbarsStyle);
function SectionNavbars() {
  const classes = SectionNavbars_useStyles();
  return SectionNavbars_jsx("div", {
    className: classes.section + " cd-section",
    id: "navigation"
  }, SectionNavbars_jsx("div", {
    className: classes.container
  }, SectionNavbars_jsx(GridContainer["a" /* default */], null, SectionNavbars_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, SectionNavbars_jsx("div", {
    className: classes.title
  }, SectionNavbars_jsx("h3", null, "Menu")), SectionNavbars_jsx(Header["a" /* default */], {
    brand: "Menu",
    color: "primary",
    links: SectionNavbars_jsx(List_default.a, {
      className: classes.list
    }, SectionNavbars_jsx(ListItem_default.a, {
      className: classes.listItem
    }, SectionNavbars_jsx(Button["a" /* default */], {
      href: "#pablo",
      className: classes.navLink + " " + classes.navLinkActive,
      onClick: e => e.preventDefault(),
      color: "transparent"
    }, "Link")), SectionNavbars_jsx(ListItem_default.a, {
      className: classes.listItem
    }, SectionNavbars_jsx(Button["a" /* default */], {
      href: "#pablo",
      className: classes.navLink,
      onClick: e => e.preventDefault(),
      color: "transparent"
    }, "Link")), SectionNavbars_jsx(ListItem_default.a, {
      className: classes.listItem
    }, SectionNavbars_jsx(CustomDropdown["a" /* default */], {
      buttonText: "Dropdown",
      dropdownHeader: "Dropdown Header",
      buttonProps: {
        className: classes.navLink,
        color: "transparent"
      },
      dropdownList: ["Action", "Another action", "Something else here", {
        divider: true
      }, "Separated link", {
        divider: true
      }, "One more separated link"]
    })))
  })), SectionNavbars_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, SectionNavbars_jsx("div", {
    className: classes.title
  }, SectionNavbars_jsx("h3", null, "Menu with Icons")), SectionNavbars_jsx(Header["a" /* default */], {
    brand: "Icons",
    color: "info",
    links: SectionNavbars_jsx(List_default.a, {
      className: classes.list + " " + classes.mlAuto
    }, SectionNavbars_jsx(ListItem_default.a, {
      className: classes.listItem
    }, SectionNavbars_jsx(Button["a" /* default */], {
      color: "transparent",
      className: classes.navLink
    }, SectionNavbars_jsx(Email_default.a, null))), SectionNavbars_jsx(ListItem_default.a, {
      className: classes.listItem
    }, SectionNavbars_jsx(Button["a" /* default */], {
      color: "transparent",
      className: classes.navLink
    }, SectionNavbars_jsx(Face_default.a, null))), SectionNavbars_jsx(ListItem_default.a, {
      className: classes.listItem
    }, SectionNavbars_jsx(CustomDropdown["a" /* default */], {
      left: true,
      dropdownHeader: "Dropdown Header",
      buttonIcon: Settings_default.a,
      buttonProps: {
        className: classes.navLink,
        color: "transparent"
      },
      dropdownList: ["Action", "Another action", "Something else here", {
        divider: true
      }, "Separated link", {
        divider: true
      }, "One more separated link"]
    })))
  }))), SectionNavbars_jsx("div", {
    className: classes.title
  }, SectionNavbars_jsx("h3", null, "Navigation"))), SectionNavbars_jsx("div", {
    id: "navbar",
    className: classes.navbar
  }, SectionNavbars_jsx("div", {
    className: classes.navigation,
    style: {
      backgroundImage: "url(" + bg + ")"
    }
  }, SectionNavbars_jsx(Header["a" /* default */], {
    brand: "Brand",
    color: "rose",
    links: SectionNavbars_jsx("div", {
      className: classes.collapse
    }, SectionNavbars_jsx(List_default.a, {
      className: classes.list + " " + classes.mrAuto
    }, SectionNavbars_jsx(ListItem_default.a, {
      className: classes.listItem
    }, SectionNavbars_jsx(Button["a" /* default */], {
      href: "#pablo",
      className: classes.navLink + " " + classes.navLinkActive,
      onClick: e => e.preventDefault(),
      color: "transparent"
    }, "Link")), SectionNavbars_jsx(ListItem_default.a, {
      className: classes.listItem
    }, SectionNavbars_jsx(Button["a" /* default */], {
      href: "#pablo",
      className: classes.navLink,
      onClick: e => e.preventDefault(),
      color: "transparent"
    }, "Link"))), SectionNavbars_jsx("div", {
      className: classes.mlAuto
    }, SectionNavbars_jsx(CustomInput["a" /* default */], {
      white: true,
      inputRootCustomClasses: classes.inputRootCustomClasses,
      formControlProps: {
        className: classes.formControl
      },
      inputProps: {
        placeholder: "Search",
        inputProps: {
          "aria-label": "Search",
          className: classes.searchInput
        }
      }
    }), SectionNavbars_jsx(Button["a" /* default */], {
      color: "white",
      justIcon: true,
      round: true
    }, SectionNavbars_jsx(Search_default.a, {
      className: classes.searchIcon
    }))))
  }), SectionNavbars_jsx(Header["a" /* default */], {
    brand: "Info Color",
    color: "info",
    links: SectionNavbars_jsx(List_default.a, {
      className: classes.list + " " + classes.mlAuto
    }, SectionNavbars_jsx(ListItem_default.a, {
      className: classes.listItem
    }, SectionNavbars_jsx(Button["a" /* default */], {
      href: "#pablo",
      className: classes.navLink + " " + classes.navLinkActive,
      onClick: e => e.preventDefault(),
      color: "transparent"
    }, "Discover")), SectionNavbars_jsx(ListItem_default.a, {
      className: classes.listItem
    }, SectionNavbars_jsx(Button["a" /* default */], {
      href: "#pablo",
      className: classes.navLink,
      onClick: e => e.preventDefault(),
      color: "transparent"
    }, "Profile")), SectionNavbars_jsx(ListItem_default.a, {
      className: classes.listItem
    }, SectionNavbars_jsx(Button["a" /* default */], {
      href: "#pablo",
      className: classes.navLink,
      onClick: e => e.preventDefault(),
      color: "transparent"
    }, "Settings")))
  }), SectionNavbars_jsx(Header["a" /* default */], {
    brand: "Primary Color",
    color: "primary",
    links: SectionNavbars_jsx(List_default.a, {
      className: classes.list + " " + classes.mlAuto
    }, SectionNavbars_jsx(ListItem_default.a, {
      className: classes.listItem
    }, SectionNavbars_jsx(Button["a" /* default */], {
      href: "#pablo",
      className: classes.navLink + " " + classes.navLinkActive,
      onClick: e => e.preventDefault(),
      color: "transparent"
    }, SectionNavbars_jsx(Explore_default.a, null), " Discover")), SectionNavbars_jsx(ListItem_default.a, {
      className: classes.listItem
    }, SectionNavbars_jsx(Button["a" /* default */], {
      href: "#pablo",
      className: classes.navLink,
      onClick: e => e.preventDefault(),
      color: "transparent"
    }, SectionNavbars_jsx(AccountCircle_default.a, null), " Profile")), SectionNavbars_jsx(ListItem_default.a, {
      className: classes.listItem
    }, SectionNavbars_jsx(Button["a" /* default */], {
      href: "#pablo",
      className: classes.navLink,
      onClick: e => e.preventDefault(),
      color: "transparent"
    }, SectionNavbars_jsx(Settings_default.a, null), " Settings")))
  }), SectionNavbars_jsx(Header["a" /* default */], {
    brand: "Navbar with notifications",
    color: "dark",
    links: SectionNavbars_jsx(List_default.a, {
      className: classes.list + " " + classes.mlAuto
    }, SectionNavbars_jsx(ListItem_default.a, {
      className: classes.listItem
    }, SectionNavbars_jsx(Button["a" /* default */], {
      href: "#pablo",
      className: classes.navLink,
      onClick: e => e.preventDefault(),
      color: "transparent"
    }, "Discover")), SectionNavbars_jsx(ListItem_default.a, {
      className: classes.listItem
    }, SectionNavbars_jsx(Button["a" /* default */], {
      href: "#pablo",
      className: classes.navLink,
      onClick: e => e.preventDefault(),
      color: "transparent"
    }, "Wishlist")), SectionNavbars_jsx(ListItem_default.a, {
      className: classes.listItem
    }, SectionNavbars_jsx(Button["a" /* default */], {
      href: "#pablo",
      className: classes.notificationNavLink,
      onClick: e => e.preventDefault(),
      color: "rose",
      justIcon: true,
      round: true
    }, SectionNavbars_jsx(Email_default.a, null))), SectionNavbars_jsx(ListItem_default.a, {
      className: classes.listItem
    }, SectionNavbars_jsx(CustomDropdown["a" /* default */], {
      left: true,
      caret: false,
      hoverColor: "dark",
      dropdownHeader: "Dropdown Header",
      buttonText: SectionNavbars_jsx("img", {
        src: faces_avatar["a" /* default */],
        className: classes.img,
        alt: "profile"
      }),
      buttonProps: {
        className: classes.navLink + " " + classes.imageDropdownButton,
        color: "transparent"
      },
      dropdownList: ["Me", "Settings and other stuff", "Sign out"]
    })))
  }), SectionNavbars_jsx(Header["a" /* default */], {
    brand: "Navbar with profile",
    links: SectionNavbars_jsx(List_default.a, {
      className: classes.list + " " + classes.mlAuto
    }, SectionNavbars_jsx(ListItem_default.a, {
      className: classes.listItem
    }, SectionNavbars_jsx(Button["a" /* default */], {
      href: "#pablo",
      className: classes.navLink,
      onClick: e => e.preventDefault(),
      color: "transparent"
    }, "Discover")), SectionNavbars_jsx(ListItem_default.a, {
      className: classes.listItem
    }, SectionNavbars_jsx(Button["a" /* default */], {
      href: "#pablo",
      className: classes.navLink,
      onClick: e => e.preventDefault(),
      color: "transparent"
    }, "Wishlist")), SectionNavbars_jsx(ListItem_default.a, {
      className: classes.listItem
    }, SectionNavbars_jsx(Button["a" /* default */], {
      href: "#pablo",
      className: classes.registerNavLink,
      onClick: e => e.preventDefault(),
      color: "rose",
      round: true
    }, "Register")))
  }), SectionNavbars_jsx(Header["a" /* default */], {
    brand: "Transparent",
    color: "transparent",
    links: SectionNavbars_jsx(List_default.a, {
      className: classes.list + " " + classes.mlAuto
    }, SectionNavbars_jsx(ListItem_default.a, {
      className: classes.listItem
    }, SectionNavbars_jsx(Button["a" /* default */], {
      color: "transparent",
      className: classes.navLink
    }, SectionNavbars_jsx("i", {
      className: classes.socialIcons + " " + classes.marginRight5 + " fab fa-twitter"
    }), " ", "Twitter")), SectionNavbars_jsx(ListItem_default.a, {
      className: classes.listItem
    }, SectionNavbars_jsx(Button["a" /* default */], {
      color: "transparent",
      className: classes.navLink
    }, SectionNavbars_jsx("i", {
      className: classes.socialIcons + " " + classes.marginRight5 + " fab fa-facebook"
    }), " ", "Facebook")), SectionNavbars_jsx(ListItem_default.a, {
      className: classes.listItem
    }, SectionNavbars_jsx(Button["a" /* default */], {
      color: "transparent",
      className: classes.navLink
    }, SectionNavbars_jsx("i", {
      className: classes.socialIcons + " " + classes.marginRight5 + " fab fa-instagram"
    }), " ", "Instagram")))
  }))));
}
// EXTERNAL MODULE: external "@material-ui/icons/Chat"
var Chat_ = __webpack_require__("HWfr");
var Chat_default = /*#__PURE__*/__webpack_require__.n(Chat_);

// EXTERNAL MODULE: external "@material-ui/icons/Build"
var Build_ = __webpack_require__("Ao/0");
var Build_default = /*#__PURE__*/__webpack_require__.n(Build_);

// EXTERNAL MODULE: external "@material-ui/core/Tabs"
var Tabs_ = __webpack_require__("SJC6");
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs_);

// EXTERNAL MODULE: external "@material-ui/core/Tab"
var Tab_ = __webpack_require__("6Yxu");
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_);

// EXTERNAL MODULE: ./components/Card/Card.js + 1 modules
var Card = __webpack_require__("A2So");

// EXTERNAL MODULE: ./components/Card/CardBody.js + 1 modules
var CardBody = __webpack_require__("UsYt");

// EXTERNAL MODULE: ./components/Card/CardHeader.js + 1 modules
var CardHeader = __webpack_require__("2zww");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/components/customTabsStyle.js
function customTabsStyle_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function customTabsStyle_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { customTabsStyle_ownKeys(Object(source), true).forEach(function (key) { customTabsStyle_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { customTabsStyle_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function customTabsStyle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const customTabsStyle = {
  cardTitle: customTabsStyle_objectSpread({}, nextjs_material_tim_andrus["m" /* defaultFont */], {
    float: "left",
    padding: "10px 10px 10px 0",
    lineHeight: "24px",
    fontSize: "14px",
    color: nextjs_material_tim_andrus["Z" /* whiteColor */]
  }),
  cardTitleRTL: {
    float: "right",
    padding: "10px 0px 10px 10px !important"
  },
  displayNone: {
    display: "none"
  },
  tabsContainer: {},
  tabsContainerRTL: {
    float: "right"
  },
  tabIcon: {
    width: "24px",
    height: "24px",
    marginRight: "4px"
  },
  customTabsRoot: {
    minHeight: "unset !important"
  },
  customTabSelected: {
    backgroundColor: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Z" /* whiteColor */]) + ", 0.2)",
    transition: "background-color .4s"
  },
  customTabRoot: {
    width: "auto",
    minWidth: "70px",
    borderRadius: "3px",
    opacity: "1",
    height: "auto",
    padding: "10px 15px",
    display: "block",
    minHeight: "unset",
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "24px"
  },
  customTabWrapper: {
    display: "inline-block",
    minHeight: "unset !important",
    minWidth: "unset !important",
    width: "unset !important",
    height: "unset !important",
    maxWidth: "unset !important",
    maxHeight: "unset !important",
    "& > svg": {
      verticalAlign: "middle",
      margin: "-1.55px 5px 0 0 !important"
    },
    "&,& *": {
      letterSpacing: "normal !important"
    }
  }
};
/* harmony default export */ var components_customTabsStyle = (customTabsStyle);
// CONCATENATED MODULE: ./components/CustomTabs/CustomTabs.js
var CustomTabs_jsx = external_react_default.a.createElement;

function CustomTabs_extends() { CustomTabs_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CustomTabs_extends.apply(this, arguments); }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components
 // import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/Card/CardContent";
// import CardHeader from "@material-ui/core/Card/CardHeader";


 // core components





const CustomTabs_useStyles = Object(styles_["makeStyles"])(components_customTabsStyle);
function CustomTabs(props) {
  const [value, setValue] = external_react_default.a.useState(0);

  const handleChange = (event, value) => {
    setValue(value);
  };

  const {
    headerColor,
    title,
    tabs,
    rtlActive,
    plainTabs
  } = props;
  const classes = CustomTabs_useStyles();
  const cardTitle = external_classnames_default()({
    [classes.cardTitle]: true,
    [classes.cardTitleRTL]: rtlActive
  });
  const tabsContainer = external_classnames_default()({
    [classes.tabsContainer]: true,
    [classes.tabsContainerRTL]: rtlActive
  });
  return CustomTabs_jsx(Card["a" /* default */], {
    plain: plainTabs
  }, CustomTabs_jsx(CardHeader["a" /* default */], {
    color: headerColor,
    plain: plainTabs
  }, title !== undefined ? CustomTabs_jsx("div", {
    className: cardTitle
  }, "title") : null, CustomTabs_jsx(Tabs_default.a, {
    classes: {
      root: classes.customTabsRoot,
      flexContainer: tabsContainer,
      indicator: classes.displayNone
    },
    value: value,
    onChange: handleChange,
    textColor: "inherit"
  }, tabs.map((prop, key) => {
    var icon = {};

    if (prop.tabIcon !== undefined) {
      icon = {
        icon: CustomTabs_jsx(prop.tabIcon, {
          className: classes.tabIcon
        })
      };
    } else {
      icon = {};
    }

    return CustomTabs_jsx(Tab_default.a, CustomTabs_extends({
      key: key,
      classes: {
        root: classes.customTabRoot,
        selected: classes.customTabSelected,
        wrapper: classes.customTabWrapper
      } // icon={<prop.tabIcon className={tabIcon} />}

    }, icon, {
      label: prop.tabName
    }));
  }))), CustomTabs_jsx(CardBody["a" /* default */], null, tabs.map((prop, key) => {
    if (key === value) {
      return CustomTabs_jsx("div", {
        key: key
      }, prop.tabContent);
    }

    return null;
  })));
}
CustomTabs.defaultProps = {
  headerColor: "purple"
};
// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/pages/componentsSections/tabsStyle.js

const tabsStyle = {
  section: {
    padding: "70px 0"
  },
  container: nextjs_material_tim_andrus["h" /* container */],
  textCenter: {
    textAlign: "center"
  }
};
/* harmony default export */ var componentsSections_tabsStyle = (tabsStyle);
// CONCATENATED MODULE: ./pages-sections/components/SectionTabs.js
var SectionTabs_jsx = external_react_default.a.createElement;
 // @material-ui/core components

 // @material-ui/icons



 // core components





const SectionTabs_useStyles = Object(styles_["makeStyles"])(componentsSections_tabsStyle);
function SectionTabs() {
  const classes = SectionTabs_useStyles();
  return SectionTabs_jsx("div", {
    className: classes.section
  }, SectionTabs_jsx("div", {
    className: classes.container
  }, SectionTabs_jsx("div", {
    id: "nav-tabs"
  }, SectionTabs_jsx("h3", null, "Navigation Tabs"), SectionTabs_jsx(GridContainer["a" /* default */], null, SectionTabs_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, SectionTabs_jsx("h3", null, SectionTabs_jsx("small", null, "Tabs with Icons on Card")), SectionTabs_jsx(CustomTabs, {
    headerColor: "primary",
    tabs: [{
      tabName: "Profile",
      tabIcon: Face_default.a,
      tabContent: SectionTabs_jsx("p", {
        className: classes.textCenter
      }, "I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it\u2019s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.")
    }, {
      tabName: "Messages",
      tabIcon: Chat_default.a,
      tabContent: SectionTabs_jsx("p", {
        className: classes.textCenter
      }, "I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.")
    }, {
      tabName: "Settings",
      tabIcon: Build_default.a,
      tabContent: SectionTabs_jsx("p", {
        className: classes.textCenter
      }, "think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it\u2019s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.")
    }]
  })), SectionTabs_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, SectionTabs_jsx("h3", null, SectionTabs_jsx("small", null, "Tabs on Plain Card")), SectionTabs_jsx(CustomTabs, {
    plainTabs: true,
    headerColor: "danger",
    tabs: [{
      tabName: "Home",
      tabContent: SectionTabs_jsx("p", {
        className: classes.textCenter
      }, "I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it\u2019s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.")
    }, {
      tabName: "Updates",
      tabContent: SectionTabs_jsx("p", {
        className: classes.textCenter
      }, "I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.")
    }, {
      tabName: "History",
      tabContent: SectionTabs_jsx("p", {
        className: classes.textCenter
      }, "think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it\u2019s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.")
    }]
  }))))));
}
// EXTERNAL MODULE: external "@material-ui/icons/Dashboard"
var Dashboard_ = __webpack_require__("vFf/");
var Dashboard_default = /*#__PURE__*/__webpack_require__.n(Dashboard_);

// EXTERNAL MODULE: external "@material-ui/icons/Schedule"
var Schedule_ = __webpack_require__("zuQh");
var Schedule_default = /*#__PURE__*/__webpack_require__.n(Schedule_);

// EXTERNAL MODULE: external "@material-ui/icons/List"
var icons_List_ = __webpack_require__("/sfI");
var icons_List_default = /*#__PURE__*/__webpack_require__.n(icons_List_);

// EXTERNAL MODULE: ./components/NavPills/NavPills.js + 1 modules
var NavPills = __webpack_require__("SuH/");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/pages/componentsSections/pillsStyle.js
function pillsStyle_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function pillsStyle_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { pillsStyle_ownKeys(Object(source), true).forEach(function (key) { pillsStyle_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { pillsStyle_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function pillsStyle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const pillsStyle = {
  section: {
    padding: "70px 0"
  },
  container: nextjs_material_tim_andrus["h" /* container */],
  title: pillsStyle_objectSpread({}, nextjs_material_tim_andrus["S" /* title */], {
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  })
};
/* harmony default export */ var componentsSections_pillsStyle = (pillsStyle);
// CONCATENATED MODULE: ./pages-sections/components/SectionPills.js
var SectionPills_jsx = external_react_default.a.createElement;
 // @material-ui/core components

 // @material-ui/icons



 // core components





const SectionPills_useStyles = Object(styles_["makeStyles"])(componentsSections_pillsStyle);
function SectionPills() {
  const classes = SectionPills_useStyles();
  return SectionPills_jsx("div", {
    className: classes.section
  }, SectionPills_jsx("div", {
    className: classes.container
  }, SectionPills_jsx("div", {
    id: "navigation-pills"
  }, SectionPills_jsx("div", {
    className: classes.title
  }, SectionPills_jsx("h3", null, "Navigation Pills")), SectionPills_jsx(GridContainer["a" /* default */], null, SectionPills_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 8,
    md: 6,
    lg: 6
  }, SectionPills_jsx("h3", null, SectionPills_jsx("small", null, "Horizontal tabs")), SectionPills_jsx(NavPills["a" /* default */], {
    color: "rose",
    tabs: [{
      tabButton: "Profile",
      tabContent: SectionPills_jsx("span", null, SectionPills_jsx("p", null, "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.", " "), SectionPills_jsx("br", null), SectionPills_jsx("p", null, "Dramatically visualize customer directed convergence without revolutionary ROI."))
    }, {
      tabButton: "Settings",
      tabContent: SectionPills_jsx("span", null, SectionPills_jsx("p", null, "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.", " "), SectionPills_jsx("br", null), SectionPills_jsx("p", null, "Dramatically maintain clicks-and-mortar solutions without functional solutions."))
    }, {
      tabButton: "Options",
      tabContent: SectionPills_jsx("span", null, SectionPills_jsx("p", null, "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.", " "), SectionPills_jsx("br", null), SectionPills_jsx("p", null, "Dynamically innovate resource-leveling customer service for state of the art customer service."))
    }]
  })), SectionPills_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 6,
    lg: 6
  }, SectionPills_jsx("h3", null, SectionPills_jsx("small", null, "Vertical tabs")), SectionPills_jsx(NavPills["a" /* default */], {
    horizontal: {
      tabsGrid: {
        xs: 12,
        sm: 4,
        md: 5
      },
      contentGrid: {
        xs: 12,
        sm: 8,
        md: 7
      }
    },
    color: "rose",
    tabs: [{
      tabButton: "Profile",
      tabContent: SectionPills_jsx("span", null, SectionPills_jsx("p", null, "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.", " "), SectionPills_jsx("br", null), SectionPills_jsx("p", null, "Dramatically visualize customer directed convergence without revolutionary ROI."))
    }, {
      tabButton: "Settings",
      tabContent: SectionPills_jsx("span", null, SectionPills_jsx("p", null, "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.", " "), SectionPills_jsx("br", null), SectionPills_jsx("p", null, "Dramatically maintain clicks-and-mortar solutions without functional solutions."))
    }, {
      tabButton: "Options",
      tabContent: SectionPills_jsx("span", null, SectionPills_jsx("p", null, "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.", " "), SectionPills_jsx("br", null), SectionPills_jsx("p", null, "Dynamically innovate resource-leveling customer service for state of the art customer service."))
    }]
  }))), SectionPills_jsx("div", {
    className: classes.title
  }, SectionPills_jsx("h3", null, SectionPills_jsx("small", null, "With Icons"))), SectionPills_jsx(GridContainer["a" /* default */], null, SectionPills_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 8,
    lg: 6
  }, SectionPills_jsx(NavPills["a" /* default */], {
    color: "primary",
    tabs: [{
      tabButton: "Dashboard",
      tabIcon: Dashboard_default.a,
      tabContent: SectionPills_jsx("span", null, SectionPills_jsx("p", null, "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."), SectionPills_jsx("br", null), SectionPills_jsx("p", null, "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."), SectionPills_jsx("br", null), SectionPills_jsx("p", null, "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."))
    }, {
      tabButton: "Schedule",
      tabIcon: Schedule_default.a,
      tabContent: SectionPills_jsx("span", null, SectionPills_jsx("p", null, "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas."), SectionPills_jsx("br", null), SectionPills_jsx("p", null, "Dramatically maintain clicks-and-mortar solutions without functional solutions. Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."))
    }, {
      tabButton: "Tasks",
      tabIcon: icons_List_default.a,
      tabContent: SectionPills_jsx("span", null, SectionPills_jsx("p", null, "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."), SectionPills_jsx("br", null), SectionPills_jsx("p", null, "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."), SectionPills_jsx("br", null), SectionPills_jsx("p", null, "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."))
    }]
  })), SectionPills_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 8,
    lg: 6
  }, SectionPills_jsx(NavPills["a" /* default */], {
    color: "primary",
    horizontal: {
      tabsGrid: {
        xs: 12,
        sm: 3,
        md: 4
      },
      contentGrid: {
        xs: 12,
        sm: 9,
        md: 8
      }
    },
    tabs: [{
      tabButton: "Dashboard",
      tabIcon: Dashboard_default.a,
      tabContent: SectionPills_jsx("span", null, SectionPills_jsx("p", null, "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."), SectionPills_jsx("br", null), SectionPills_jsx("p", null, "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."), SectionPills_jsx("br", null), SectionPills_jsx("p", null, "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."))
    }, {
      tabButton: "Schedule",
      tabIcon: Schedule_default.a,
      tabContent: SectionPills_jsx("span", null, SectionPills_jsx("p", null, "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas."), SectionPills_jsx("br", null), SectionPills_jsx("p", null, "Dramatically maintain clicks-and-mortar solutions without functional solutions. Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."))
    }]
  }))))));
}
// EXTERNAL MODULE: external "@material-ui/icons/Warning"
var Warning_ = __webpack_require__("MpJv");
var Warning_default = /*#__PURE__*/__webpack_require__.n(Warning_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__("rf6O");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: external "@material-ui/core/SnackbarContent"
var SnackbarContent_ = __webpack_require__("n1EF");
var SnackbarContent_default = /*#__PURE__*/__webpack_require__.n(SnackbarContent_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__("EmCc");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/core/Icon"
var Icon_ = __webpack_require__("7vM9");
var Icon_default = /*#__PURE__*/__webpack_require__.n(Icon_);

// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__("j08L");
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);

// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/components/snackbarContentStyle.js
function snackbarContentStyle_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function snackbarContentStyle_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { snackbarContentStyle_ownKeys(Object(source), true).forEach(function (key) { snackbarContentStyle_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { snackbarContentStyle_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function snackbarContentStyle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const snackbarContentStyle = {
  root: snackbarContentStyle_objectSpread({}, nextjs_material_tim_andrus["m" /* defaultFont */], {
    position: "relative",
    padding: "20px 15px",
    lineHeight: "20px",
    marginBottom: "20px",
    fontSize: "14px",
    backgroundColor: "white",
    color: nextjs_material_tim_andrus["s" /* grayColor */][15],
    borderRadius: "0px",
    maxWidth: "100%",
    minWidth: "auto",
    boxShadow: "0 12px 20px -10px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Z" /* whiteColor */]) + ", 0.28), 0 4px 20px 0px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.12), 0 7px 8px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Z" /* whiteColor */]) + ", 0.2)"
  }),
  info: snackbarContentStyle_objectSpread({
    backgroundColor: nextjs_material_tim_andrus["w" /* infoColor */][3],
    color: nextjs_material_tim_andrus["Z" /* whiteColor */]
  }, nextjs_material_tim_andrus["u" /* infoBoxShadow */]),
  success: snackbarContentStyle_objectSpread({
    backgroundColor: nextjs_material_tim_andrus["R" /* successColor */][3],
    color: nextjs_material_tim_andrus["Z" /* whiteColor */]
  }, nextjs_material_tim_andrus["P" /* successBoxShadow */]),
  warning: snackbarContentStyle_objectSpread({
    backgroundColor: nextjs_material_tim_andrus["Y" /* warningColor */][3],
    color: nextjs_material_tim_andrus["Z" /* whiteColor */]
  }, nextjs_material_tim_andrus["W" /* warningBoxShadow */]),
  danger: snackbarContentStyle_objectSpread({
    backgroundColor: nextjs_material_tim_andrus["l" /* dangerColor */][3],
    color: nextjs_material_tim_andrus["Z" /* whiteColor */]
  }, nextjs_material_tim_andrus["j" /* dangerBoxShadow */]),
  primary: snackbarContentStyle_objectSpread({
    backgroundColor: nextjs_material_tim_andrus["G" /* primaryColor */][3],
    color: nextjs_material_tim_andrus["Z" /* whiteColor */]
  }, nextjs_material_tim_andrus["E" /* primaryBoxShadow */]),
  message: {
    padding: "0",
    display: "block",
    maxWidth: "89%"
  },
  close: {
    width: "20px",
    height: "20px"
  },
  iconButton: {
    width: "24px",
    height: "24px",
    float: "right",
    fontSize: "1.5rem",
    fontWeight: "500",
    lineHeight: "1",
    position: "absolute",
    right: "-4px",
    top: "0",
    padding: "0"
  },
  icon: {
    display: "block",
    float: "left",
    marginRight: "1.071rem"
  },
  container: snackbarContentStyle_objectSpread({}, nextjs_material_tim_andrus["h" /* container */], {
    position: "relative"
  })
};
/* harmony default export */ var components_snackbarContentStyle = (snackbarContentStyle);
// CONCATENATED MODULE: ./components/Snackbar/SnackbarContent.js
var SnackbarContent_jsx = external_react_default.a.createElement;
 // nodejs library to set properties for components

 // @material-ui/core components




 // @material-ui/icons

 // core components


const SnackbarContent_useStyles = Object(styles_["makeStyles"])(components_snackbarContentStyle);
function SnackbarContent(props) {
  const {
    message,
    color,
    close,
    icon
  } = props;
  const classes = SnackbarContent_useStyles();
  var action = [];

  const closeAlert = () => {
    setAlert(null);
  };

  if (close !== undefined) {
    action = [SnackbarContent_jsx(IconButton_default.a, {
      className: classes.iconButton,
      key: "close",
      "aria-label": "Close",
      color: "inherit",
      onClick: closeAlert
    }, SnackbarContent_jsx(Close_default.a, {
      className: classes.close
    }))];
  }

  let snackIcon = null;

  switch (typeof icon) {
    case "object":
      snackIcon = SnackbarContent_jsx(props.icon, {
        className: classes.icon
      });
      break;

    case "string":
      snackIcon = SnackbarContent_jsx(Icon_default.a, {
        className: classes.icon
      }, props.icon);
      break;

    default:
      snackIcon = null;
      break;
  }

  const [alert, setAlert] = external_react_default.a.useState(SnackbarContent_jsx(SnackbarContent_default.a, {
    message: SnackbarContent_jsx("div", null, snackIcon, message, close !== undefined ? action : null),
    classes: {
      root: classes.root + " " + classes[color],
      message: classes.message + " " + classes.container
    }
  }));
  return alert;
}
SnackbarContent.propTypes = {
  message: external_prop_types_default.a.node.isRequired,
  color: external_prop_types_default.a.oneOf(["info", "success", "warning", "danger", "primary"]),
  close: external_prop_types_default.a.bool,
  icon: external_prop_types_default.a.oneOfType([external_prop_types_default.a.object, external_prop_types_default.a.string])
};
// EXTERNAL MODULE: ./components/Clearfix/Clearfix.js
var Clearfix = __webpack_require__("BaT1");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/pages/componentsSections/notificationsStyles.js
function notificationsStyles_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function notificationsStyles_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { notificationsStyles_ownKeys(Object(source), true).forEach(function (key) { notificationsStyles_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { notificationsStyles_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function notificationsStyles_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const notificationsStyles = {
  section: notificationsStyles_objectSpread({
    backgroundColor: nextjs_material_tim_andrus["Z" /* whiteColor */],
    display: "block",
    width: "100%",
    position: "relative",
    padding: "70px 0"
  }, nextjs_material_tim_andrus["M" /* section */]),
  title: notificationsStyles_objectSpread({}, nextjs_material_tim_andrus["S" /* title */], {
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }),
  space70: {
    height: "70px",
    display: "block"
  },
  container: nextjs_material_tim_andrus["h" /* container */]
};
/* harmony default export */ var componentsSections_notificationsStyles = (notificationsStyles);
// CONCATENATED MODULE: ./pages-sections/components/SectionNotifications.js
var SectionNotifications_jsx = external_react_default.a.createElement;
 // @material-ui/core components

 // @material-ui/icons


 // core components




const SectionNotifications_useStyles = Object(styles_["makeStyles"])(componentsSections_notificationsStyles);
function SectionNotifications() {
  const classes = SectionNotifications_useStyles();
  return SectionNotifications_jsx("div", {
    className: classes.section + " cd-section",
    id: "notifications"
  }, SectionNotifications_jsx("div", {
    className: classes.container
  }, SectionNotifications_jsx("div", {
    className: classes.space70
  }), SectionNotifications_jsx("div", {
    className: classes.title
  }, SectionNotifications_jsx("h3", null, "Notifications"))), SectionNotifications_jsx(SnackbarContent, {
    message: SectionNotifications_jsx("span", null, SectionNotifications_jsx("b", null, "INFO ALERT:"), " You", "'", "ve got some friends nearby, stop looking at your phone and find them..."),
    close: true,
    color: "info",
    icon: "info_outline"
  }), SectionNotifications_jsx(SnackbarContent, {
    message: SectionNotifications_jsx("span", null, SectionNotifications_jsx("b", null, "SUCCESS ALERT:"), " You", "'", "ve got some friends nearby, stop looking at your phone and find them..."),
    close: true,
    color: "success",
    icon: Check_default.a
  }), SectionNotifications_jsx(SnackbarContent, {
    message: SectionNotifications_jsx("span", null, SectionNotifications_jsx("b", null, "WARNING ALERT:"), " You", "'", "ve got some friends nearby, stop looking at your phone and find them..."),
    close: true,
    color: "warning",
    icon: Warning_default.a
  }), SectionNotifications_jsx(SnackbarContent, {
    message: SectionNotifications_jsx("span", null, SectionNotifications_jsx("b", null, "DANGER ALERT:"), " You", "'", "ve got some friends nearby, stop looking at your phone and find them..."),
    close: true,
    color: "danger",
    icon: "info_outline"
  }), SectionNotifications_jsx(Clearfix["a" /* default */], null));
}
// EXTERNAL MODULE: external "@material-ui/icons/Mail"
var Mail_ = __webpack_require__("Q6gG");
var Mail_default = /*#__PURE__*/__webpack_require__.n(Mail_);

// EXTERNAL MODULE: ./assets/img/bg7.jpg
var bg7 = __webpack_require__("l4Ax");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/pages/componentsSections/preFooter.js

const styles = {
  container: nextjs_material_tim_andrus["h" /* container */],
  title: nextjs_material_tim_andrus["S" /* title */],
  mrAuto: nextjs_material_tim_andrus["C" /* mrAuto */],
  mlAuto: nextjs_material_tim_andrus["B" /* mlAuto */],
  description: nextjs_material_tim_andrus["n" /* description */],
  card: {},
  cardBody: {
    padding: "15px",
    "& form": {
      marginBottom: "0"
    }
  },
  cardForm: {
    margin: "0 0 0 14px",
    padding: 0,
    top: 10
  },
  socialLine: {
    padding: ".9375rem 0px",
    "& $border": {
      borderRight: "1px solid rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ",0.12)"
    },
    "& $border:last-child": {
      border: 0
    }
  },
  textCenter: {
    textAlign: "center !important"
  },
  white: {
    backgroundColor: nextjs_material_tim_andrus["Z" /* whiteColor */]
  },
  dark: {
    background: "radial-gradient(ellipse at center," + nextjs_material_tim_andrus["s" /* grayColor */][4] + " 0," + nextjs_material_tim_andrus["s" /* grayColor */][5] + " 100%)",
    backgroundSize: "550% 450%",
    "& $border": {
      borderColor: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Z" /* whiteColor */]) + ",0.1)"
    }
  },
  bigIcons: {
    "& a": {
      margin: 0,
      width: "100% !important",
      paddingTop: "45px",
      paddingBottom: "45px"
    },
    "& button i.fab, & a i.fab": {
      fontSize: "25px !important",
      lineHeight: "90px !important"
    }
  },
  subscribeLine: {
    padding: "1.875rem 0px",
    "& $card": {
      marginTop: "30px"
    },
    "& form": {
      margin: "0px"
    },
    "& $formFix": {
      paddingTop: "0px"
    },
    "&$subscribeLineImage:after": {
      position: "absolute",
      zIndex: 1,
      width: "100%",
      height: "100%",
      display: "block",
      left: 0,
      top: 0,
      content: "''",
      backgroundColor: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ",0.66)"
    }
  },
  formFix: {},
  subscribeLineWhite: {
    backgroundColor: nextjs_material_tim_andrus["Z" /* whiteColor */],
    "& $subscribeButton": {
      top: "-6px"
    }
  },
  subscribeLineImage: {
    position: "relative",
    backgroundPosition: "top center",
    backgroundSize: "cover",
    "& $container": {
      zIndex: 2,
      position: "relative"
    },
    "& $title": {
      color: nextjs_material_tim_andrus["Z" /* whiteColor */]
    },
    "& $description": {
      color: nextjs_material_tim_andrus["s" /* grayColor */][0]
    }
  },
  subscribeButton: {},
  border: {}
};
/* harmony default export */ var preFooter = (styles);
// CONCATENATED MODULE: ./pages-sections/components/SectionPreFooter.js
var SectionPreFooter_jsx = external_react_default.a.createElement;
 // nodejs library that concatenates classes

 // core components






 // @material-ui/core components


 // @material-ui icons




const SectionPreFooter_useStyles = Object(styles_["makeStyles"])(preFooter);
function SectionPreFooter() {
  const classes = SectionPreFooter_useStyles();
  return SectionPreFooter_jsx("div", null, SectionPreFooter_jsx("div", {
    className: classes.container
  }, SectionPreFooter_jsx("div", {
    className: classes.title
  }, SectionPreFooter_jsx("h3", null, "Pre-Footer Areas"))), SectionPreFooter_jsx("div", {
    className: external_classnames_default()(classes.socialLine, classes.textCenter, classes.white)
  }, SectionPreFooter_jsx("div", {
    className: classes.container
  }, SectionPreFooter_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, SectionPreFooter_jsx(GridItem["a" /* default */], {
    md: 12
  }, SectionPreFooter_jsx("h4", {
    className: classes.title
  }, "Thank you for your support!")), SectionPreFooter_jsx(Button["a" /* default */], {
    color: "twitter",
    round: true,
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionPreFooter_jsx("i", {
    className: "fab fa-twitter"
  }), " Twitter \xB7 2.5K"), SectionPreFooter_jsx(Button["a" /* default */], {
    color: "facebook",
    round: true,
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionPreFooter_jsx("i", {
    className: "fab fa-facebook"
  }), " Facebook \xB7 3.2k"), SectionPreFooter_jsx(Button["a" /* default */], {
    color: "google",
    round: true,
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionPreFooter_jsx("i", {
    className: "fab fa-google-plus-g"
  }), " Google \xB7 1.2k"), SectionPreFooter_jsx(Button["a" /* default */], {
    color: "dribbble",
    round: true,
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionPreFooter_jsx("i", {
    className: "fab fa-dribbble"
  }), " Dribbble \xB7 1.8k")))), SectionPreFooter_jsx("br", null), SectionPreFooter_jsx("br", null), SectionPreFooter_jsx("div", {
    className: external_classnames_default()(classes.socialLine, classes.textCenter, classes.white, classes.bigIcons)
  }, SectionPreFooter_jsx("div", {
    className: classes.container
  }, SectionPreFooter_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, SectionPreFooter_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 2,
    md: 2,
    className: classes.border
  }, SectionPreFooter_jsx(Button["a" /* default */], {
    color: "twitter",
    justIcon: true,
    simple: true,
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionPreFooter_jsx("i", {
    className: "fab fa-twitter"
  }))), SectionPreFooter_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 2,
    md: 2,
    className: classes.border
  }, SectionPreFooter_jsx(Button["a" /* default */], {
    color: "facebook",
    justIcon: true,
    simple: true,
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionPreFooter_jsx("i", {
    className: "fab fa-facebook"
  }))), SectionPreFooter_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 2,
    md: 2,
    className: classes.border
  }, SectionPreFooter_jsx(Button["a" /* default */], {
    color: "google",
    justIcon: true,
    simple: true,
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionPreFooter_jsx("i", {
    className: "fab fa-google-plus-g"
  }))), SectionPreFooter_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 2,
    md: 2,
    className: classes.border
  }, SectionPreFooter_jsx(Button["a" /* default */], {
    color: "dribbble",
    justIcon: true,
    simple: true,
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionPreFooter_jsx("i", {
    className: "fab fa-dribbble"
  }))), SectionPreFooter_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 2,
    md: 2,
    className: classes.border
  }, SectionPreFooter_jsx(Button["a" /* default */], {
    color: "youtube",
    justIcon: true,
    simple: true,
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionPreFooter_jsx("i", {
    className: "fab fa-youtube"
  }))), SectionPreFooter_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 2,
    md: 2,
    className: classes.border
  }, SectionPreFooter_jsx(Button["a" /* default */], {
    color: "instagram",
    justIcon: true,
    simple: true,
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionPreFooter_jsx("i", {
    className: "fab fa-instagram"
  })))))), SectionPreFooter_jsx("br", null), SectionPreFooter_jsx("br", null), SectionPreFooter_jsx("div", {
    className: external_classnames_default()(classes.socialLine, classes.textCenter, classes.dark, classes.bigIcons)
  }, SectionPreFooter_jsx("div", {
    className: classes.container
  }, SectionPreFooter_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, SectionPreFooter_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 2,
    md: 2,
    className: classes.border
  }, SectionPreFooter_jsx(Button["a" /* default */], {
    color: "white",
    justIcon: true,
    simple: true,
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionPreFooter_jsx("i", {
    className: "fab fa-twitter"
  }))), SectionPreFooter_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 2,
    md: 2,
    className: classes.border
  }, SectionPreFooter_jsx(Button["a" /* default */], {
    color: "white",
    justIcon: true,
    simple: true,
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionPreFooter_jsx("i", {
    className: "fab fa-facebook"
  }))), SectionPreFooter_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 2,
    md: 2,
    className: classes.border
  }, SectionPreFooter_jsx(Button["a" /* default */], {
    color: "white",
    justIcon: true,
    simple: true,
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionPreFooter_jsx("i", {
    className: "fab fa-google-plus-g"
  }))), SectionPreFooter_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 2,
    md: 2,
    className: classes.border
  }, SectionPreFooter_jsx(Button["a" /* default */], {
    color: "white",
    justIcon: true,
    simple: true,
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionPreFooter_jsx("i", {
    className: "fab fa-dribbble"
  }))), SectionPreFooter_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 2,
    md: 2,
    className: classes.border
  }, SectionPreFooter_jsx(Button["a" /* default */], {
    color: "white",
    justIcon: true,
    simple: true,
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionPreFooter_jsx("i", {
    className: "fab fa-youtube"
  }))), SectionPreFooter_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 2,
    md: 2,
    className: classes.border
  }, SectionPreFooter_jsx(Button["a" /* default */], {
    color: "white",
    justIcon: true,
    simple: true,
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionPreFooter_jsx("i", {
    className: "fab fa-instagram"
  })))))), SectionPreFooter_jsx("br", null), SectionPreFooter_jsx("br", null), SectionPreFooter_jsx("div", {
    className: external_classnames_default()(classes.subscribeLine, classes.subscribeLineImage),
    style: {
      backgroundImage: `url(${bg7["a" /* default */]})`
    }
  }, SectionPreFooter_jsx("div", {
    className: classes.container
  }, SectionPreFooter_jsx(GridContainer["a" /* default */], null, SectionPreFooter_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    className: external_classnames_default()(classes.mlAuto, classes.mrAuto)
  }, SectionPreFooter_jsx("div", {
    className: classes.textCenter
  }, SectionPreFooter_jsx("h3", {
    className: classes.title
  }, "Subscribe to our Newsletter"), SectionPreFooter_jsx("p", {
    className: classes.description
  }, "Join my newsletter and get news in your inbox every week! We hate spam too, so no worries about this.")), SectionPreFooter_jsx(Card["a" /* default */], {
    raised: true,
    className: classes.card
  }, SectionPreFooter_jsx(CardBody["a" /* default */], {
    className: classes.cardBody
  }, SectionPreFooter_jsx("form", null, SectionPreFooter_jsx(GridContainer["a" /* default */], null, SectionPreFooter_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 8
  }, SectionPreFooter_jsx(CustomInput["a" /* default */], {
    id: "emailPreFooter",
    formControlProps: {
      fullWidth: true,
      className: classes.cardForm
    },
    inputProps: {
      startAdornment: SectionPreFooter_jsx(InputAdornment_default.a, {
        position: "start"
      }, SectionPreFooter_jsx(Mail_default.a, null)),
      placeholder: "Your Email..."
    }
  })), SectionPreFooter_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 4
  }, SectionPreFooter_jsx(Button["a" /* default */], {
    color: "primary",
    block: true,
    className: classes.subscribeButton
  }, "subscribe")))))))))), SectionPreFooter_jsx("br", null), SectionPreFooter_jsx("br", null), SectionPreFooter_jsx("div", {
    className: external_classnames_default()(classes.subscribeLine, classes.subscribeLineWhite)
  }, SectionPreFooter_jsx("div", {
    className: classes.container
  }, SectionPreFooter_jsx(GridContainer["a" /* default */], null, SectionPreFooter_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, SectionPreFooter_jsx("h3", {
    className: classes.title
  }, "Get Tips & Tricks every Week!"), SectionPreFooter_jsx("p", {
    className: classes.description
  }, "Join my newsletter and get news in your inbox every week! We hate spam too, so no worries about this.")), SectionPreFooter_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, SectionPreFooter_jsx(Card["a" /* default */], {
    plain: true
  }, SectionPreFooter_jsx(CardBody["a" /* default */], null, SectionPreFooter_jsx("form", null, SectionPreFooter_jsx(GridContainer["a" /* default */], null, SectionPreFooter_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 8
  }, SectionPreFooter_jsx(CustomInput["a" /* default */], {
    id: "emailPreFooter2",
    formControlProps: {
      fullWidth: true,
      className: classes.formFix
    },
    inputProps: {
      startAdornment: SectionPreFooter_jsx(InputAdornment_default.a, {
        position: "start"
      }, SectionPreFooter_jsx(Mail_default.a, null)),
      placeholder: "Your Email..."
    }
  })), SectionPreFooter_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 4
  }, SectionPreFooter_jsx(Button["a" /* default */], {
    color: "rose",
    round: true,
    block: true,
    className: classes.subscribeButton
  }, "subscribe")))))))))));
}
// EXTERNAL MODULE: ./assets/img/faces/card-profile6-square.jpg
var card_profile6_square = __webpack_require__("OW/O");

// EXTERNAL MODULE: ./assets/img/faces/christian.jpg
var christian = __webpack_require__("skcn");

// EXTERNAL MODULE: ./assets/img/faces/card-profile4-square.jpg
var card_profile4_square = __webpack_require__("QkBZ");

// EXTERNAL MODULE: ./assets/img/faces/card-profile1-square.jpg
var card_profile1_square = __webpack_require__("CLSS");

// EXTERNAL MODULE: ./assets/img/faces/marc.jpg
var marc = __webpack_require__("Q6fj");

// EXTERNAL MODULE: ./assets/img/faces/kendall.jpg
var kendall = __webpack_require__("Hak1");

// EXTERNAL MODULE: ./assets/img/faces/card-profile5-square.jpg
var card_profile5_square = __webpack_require__("BOG7");

// EXTERNAL MODULE: ./assets/img/faces/card-profile2-square.jpg
var card_profile2_square = __webpack_require__("TToL");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-tim-andrus/pages/componentsSections/footerStyle.js
var footerStyle = __webpack_require__("rmeN");

// CONCATENATED MODULE: ./pages-sections/components/SectionFooter.js
var SectionFooter_jsx = external_react_default.a.createElement;
/*eslint-disable*/

// nodejs library that concatenates classes

// @material-ui/core components



// @material-ui/icons


// core components














const SectionFooter_useStyles = Object(styles_["makeStyles"])(footerStyle["a" /* default */]);
function SectionFooter() {
  const classes = SectionFooter_useStyles();
  return SectionFooter_jsx("div", {
    className: classes.section
  }, SectionFooter_jsx("div", {
    className: classes.container
  }, SectionFooter_jsx("div", {
    className: classes.title
  }, SectionFooter_jsx("h3", null, "Footer Areas"))), SectionFooter_jsx("div", null, SectionFooter_jsx(Footer["a" /* default */], {
    theme: "white",
    content: SectionFooter_jsx("div", null, SectionFooter_jsx("div", {
      className: classes.left
    }, SectionFooter_jsx("a", {
      href: "https://www.nowsta.com",
      target: "_blank",
      className: classes.footerBrand
    }, "Timothy Andrus")), SectionFooter_jsx("div", {
      className: classes.pullCenter
    }, SectionFooter_jsx(List_default.a, {
      className: classes.list
    }, SectionFooter_jsx(ListItem_default.a, {
      className: classes.inlineBlock
    }, SectionFooter_jsx("a", {
      href: "https://www.nowsta.com",
      target: "_blank",
      className: classes.block
    }, "Tim Andrus")), SectionFooter_jsx(ListItem_default.a, {
      className: classes.inlineBlock
    }, SectionFooter_jsx("a", {
      href: "https://www.nowsta.com",
      target: "_blank",
      className: classes.block
    }, "About me")), SectionFooter_jsx(ListItem_default.a, {
      className: classes.inlineBlock
    }, SectionFooter_jsx("a", {
      href: "http://www.nowsta.com",
      className: classes.block
    }, "Blog")), SectionFooter_jsx(ListItem_default.a, {
      className: classes.inlineBlock
    }, SectionFooter_jsx("a", {
      href: "https://www.nowsta.com",
      target: "_blank",
      className: classes.block
    }, "Licenses")))), SectionFooter_jsx("div", {
      className: classes.rightLinks
    }, SectionFooter_jsx("ul", null, SectionFooter_jsx("li", null, SectionFooter_jsx(Button["a" /* default */], {
      href: "https://twitter.com/timothyjandrus",
      target: "_blank",
      color: "twitter",
      justIcon: true,
      simple: true
    }, SectionFooter_jsx("i", {
      className: "fab fa-twitter"
    }))), SectionFooter_jsx("li", null, SectionFooter_jsx(Button["a" /* default */], {
      href: "https://dribbble.com/timothyjandrus",
      target: "_blank",
      color: "dribbble",
      justIcon: true,
      simple: true
    }, SectionFooter_jsx("i", {
      className: "fab fa-dribbble"
    }))), SectionFooter_jsx("li", null, SectionFooter_jsx(Button["a" /* default */], {
      href: "https://instagram.com/timothyjandrus",
      target: "_blank",
      color: "google",
      justIcon: true,
      simple: true
    }, SectionFooter_jsx("i", {
      className: "fab fa-google-plus-g"
    }))))))
  }), SectionFooter_jsx("br", null), SectionFooter_jsx("br", null), SectionFooter_jsx(Footer["a" /* default */], {
    content: SectionFooter_jsx("div", null, SectionFooter_jsx("div", {
      className: classes.left
    }, SectionFooter_jsx(List_default.a, {
      className: classes.list
    }, SectionFooter_jsx(ListItem_default.a, {
      className: classes.inlineBlock
    }, SectionFooter_jsx("a", {
      href: "https://www.nowst.com",
      target: "_blank",
      className: classes.block
    }, "Tim Andrus")), SectionFooter_jsx(ListItem_default.a, {
      className: classes.inlineBlock
    }, SectionFooter_jsx("a", {
      href: "https://www.nowsta.com",
      target: "_blank",
      className: classes.block
    }, "About me")), SectionFooter_jsx(ListItem_default.a, {
      className: classes.inlineBlock
    }, SectionFooter_jsx("a", {
      href: "http://www.nowsta.com",
      className: classes.block
    }, "Blog")), SectionFooter_jsx(ListItem_default.a, {
      className: classes.inlineBlock
    }, SectionFooter_jsx("a", {
      href: "https://www.nowsta.com",
      target: "_blank",
      className: classes.block
    }, "Licenses")))), SectionFooter_jsx("div", {
      className: classes.right
    }, "\xA9 ", 1900 + new Date().getYear(), " , made with", " ", SectionFooter_jsx(Favorite_default.a, {
      className: classes.icon
    }), " by", " ", SectionFooter_jsx("a", {
      href: "https://www.nowsta.com",
      target: "_blank",
      className: classes.aClasses
    }, "Tim Andrus"), " ", "for a better web."))
  }), SectionFooter_jsx("br", null), SectionFooter_jsx("br", null), SectionFooter_jsx(Footer["a" /* default */], {
    theme: "dark",
    content: SectionFooter_jsx("div", null, SectionFooter_jsx("div", {
      className: classes.left
    }, SectionFooter_jsx("a", {
      href: "https://www.nowsta.com",
      target: "_blank",
      className: classes.footerBrand
    }, "Timothy Andrus")), SectionFooter_jsx("div", {
      className: classes.pullCenter
    }, SectionFooter_jsx(List_default.a, {
      className: classes.list
    }, SectionFooter_jsx(ListItem_default.a, {
      className: classes.inlineBlock
    }, SectionFooter_jsx("a", {
      href: "http://www.nowsta.com",
      target: "_blank",
      className: classes.block
    }, "Blog")), SectionFooter_jsx(ListItem_default.a, {
      className: classes.inlineBlock
    }, SectionFooter_jsx("a", {
      href: "https://www.nowsta.com",
      target: "_blank",
      className: classes.block
    }, "Presentation")), SectionFooter_jsx(ListItem_default.a, {
      className: classes.inlineBlock
    }, SectionFooter_jsx("a", {
      href: "#pablito",
      onClick: e => e.preventDefault(),
      className: classes.block
    }, "Discover")), SectionFooter_jsx(ListItem_default.a, {
      className: classes.inlineBlock
    }, SectionFooter_jsx("a", {
      href: "#pablito",
      onClick: e => e.preventDefault(),
      className: classes.block
    }, "Payment")), SectionFooter_jsx(ListItem_default.a, {
      className: classes.inlineBlock
    }, SectionFooter_jsx("a", {
      href: "https://www.nowsta.com",
      target: "_blank",
      className: classes.block
    }, "Contact us")))), SectionFooter_jsx("div", {
      className: classes.rightLinks
    }, SectionFooter_jsx("ul", null, SectionFooter_jsx("li", null, SectionFooter_jsx(Button["a" /* default */], {
      href: "https://twitter.com/timothyjandrus",
      target: "_blank",
      color: "white",
      justIcon: true,
      simple: true
    }, SectionFooter_jsx("i", {
      className: "fab fa-twitter"
    }))), SectionFooter_jsx("li", null, SectionFooter_jsx(Button["a" /* default */], {
      href: "https://dribbble.com/timothyjandrus",
      target: "_blank",
      color: "white",
      justIcon: true,
      simple: true
    }, SectionFooter_jsx("i", {
      className: "fab fa-dribbble"
    }))), SectionFooter_jsx("li", null, SectionFooter_jsx(Button["a" /* default */], {
      href: "https://instagram.com/timothyjandrus",
      target: "_blank",
      color: "white",
      justIcon: true,
      simple: true
    }, SectionFooter_jsx("i", {
      className: "fab fa-instagram"
    }))))))
  }), SectionFooter_jsx("br", null), SectionFooter_jsx("br", null), SectionFooter_jsx(Footer["a" /* default */], {
    theme: "dark",
    content: SectionFooter_jsx("div", null, SectionFooter_jsx("div", {
      className: classes.left
    }, SectionFooter_jsx(List_default.a, {
      className: classes.list
    }, SectionFooter_jsx(ListItem_default.a, {
      className: classes.inlineBlock
    }, SectionFooter_jsx("a", {
      href: "#pablo",
      className: classes.block,
      onClick: e => e.preventDefault()
    }, "Blog")), SectionFooter_jsx(ListItem_default.a, {
      className: classes.inlineBlock
    }, SectionFooter_jsx("a", {
      href: "#pablo",
      className: classes.block,
      onClick: e => e.preventDefault()
    }, "Presentation")), SectionFooter_jsx(ListItem_default.a, {
      className: classes.inlineBlock
    }, SectionFooter_jsx("a", {
      href: "#pablo",
      className: classes.block,
      onClick: e => e.preventDefault()
    }, "Discover")), SectionFooter_jsx(ListItem_default.a, {
      className: classes.inlineBlock
    }, SectionFooter_jsx("a", {
      href: "#pablo",
      className: classes.block,
      onClick: e => e.preventDefault()
    }, "Payment")), SectionFooter_jsx(ListItem_default.a, {
      className: classes.inlineBlock
    }, SectionFooter_jsx("a", {
      href: "#pablo",
      className: classes.block,
      onClick: e => e.preventDefault()
    }, "Contact Us")))), SectionFooter_jsx("div", {
      className: classes.right
    }, "Copyright \xA9 ", 1900 + new Date().getYear(), " ", SectionFooter_jsx("a", {
      href: "https://www.nowsta.com",
      target: "_blank",
      className: classes.aClasses
    }, "Tim Andrus"), " ", "All Rights Reserved."))
  }, SectionFooter_jsx(GridContainer["a" /* default */], null, SectionFooter_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionFooter_jsx("h5", null, "About Me"), SectionFooter_jsx("p", null, "Tim Andrus is a startup that creates design tools that make the web development process faster and easier.", " "), SectionFooter_jsx("p", null, "I love the web and care deeply for how users interact with a digital product. I power businesses and individuals to create better looking web projects around the world.", " ")), SectionFooter_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionFooter_jsx("h5", null, "Social Feed"), SectionFooter_jsx("div", {
    className: classes.socialFeed
  }, SectionFooter_jsx("div", null, SectionFooter_jsx("i", {
    className: "fab fa-twitter"
  }), SectionFooter_jsx("p", null, "How to handle ethical disagreements with your clients.")), SectionFooter_jsx("div", null, SectionFooter_jsx("i", {
    className: "fab fa-twitter"
  }), SectionFooter_jsx("p", null, "The tangible benefits of designing at 1x pixel density.")), SectionFooter_jsx("div", null, SectionFooter_jsx("i", {
    className: "fab fa-facebook-square"
  }), SectionFooter_jsx("p", null, "A collection of 25 stunning sites that you can use for inspiration.")))), SectionFooter_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionFooter_jsx("h5", null, "Instagram Feed"), SectionFooter_jsx("div", {
    className: classes.galleryFeed
  }, SectionFooter_jsx("img", {
    src: card_profile6_square["a" /* default */],
    className: external_classnames_default()(classes.img, classes.imgRaised, classes.imgRounded),
    alt: "..."
  }), SectionFooter_jsx("img", {
    src: christian["a" /* default */],
    className: external_classnames_default()(classes.img, classes.imgRaised, classes.imgRounded),
    alt: "..."
  }), SectionFooter_jsx("img", {
    src: card_profile4_square["a" /* default */],
    className: external_classnames_default()(classes.img, classes.imgRaised, classes.imgRounded),
    alt: "..."
  }), SectionFooter_jsx("img", {
    src: card_profile1_square["a" /* default */],
    className: external_classnames_default()(classes.img, classes.imgRaised, classes.imgRounded),
    alt: "..."
  }), SectionFooter_jsx("img", {
    src: marc["a" /* default */],
    className: external_classnames_default()(classes.img, classes.imgRaised, classes.imgRounded),
    alt: "..."
  }), SectionFooter_jsx("img", {
    src: kendall["a" /* default */],
    className: external_classnames_default()(classes.img, classes.imgRaised, classes.imgRounded),
    alt: "..."
  }), SectionFooter_jsx("img", {
    src: card_profile5_square["a" /* default */],
    className: external_classnames_default()(classes.img, classes.imgRaised, classes.imgRounded),
    alt: "..."
  }), SectionFooter_jsx("img", {
    src: card_profile2_square["a" /* default */],
    className: external_classnames_default()(classes.img, classes.imgRaised, classes.imgRounded),
    alt: "..."
  }))))), SectionFooter_jsx("br", null), SectionFooter_jsx("br", null), SectionFooter_jsx(Footer["a" /* default */], {
    theme: "white",
    content: SectionFooter_jsx("div", {
      className: external_classnames_default()(classes.pullCenter, classes.copyRight)
    }, "Copyright \xA9 ", 1900 + new Date().getYear(), " ", SectionFooter_jsx("a", {
      href: "https://www.nowsta.com",
      target: "_blank"
    }, "Tim Andrus"), " ", "All Rights Reserved.")
  }, SectionFooter_jsx("div", {
    className: classes.footer
  }, SectionFooter_jsx(GridContainer["a" /* default */], null, SectionFooter_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 2,
    md: 2
  }, SectionFooter_jsx("h5", null, "About Us"), SectionFooter_jsx("ul", {
    className: classes.linksVertical
  }, SectionFooter_jsx("li", null, SectionFooter_jsx("a", {
    href: "#pablo"
  }, "Blog")), SectionFooter_jsx("li", null, SectionFooter_jsx("a", {
    href: "#pablo"
  }, "About me")), SectionFooter_jsx("li", null, SectionFooter_jsx("a", {
    href: "#pablo"
  }, "Presentation")), SectionFooter_jsx("li", null, SectionFooter_jsx("a", {
    href: "#pablo"
  }, "Contact Us")))), SectionFooter_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 2,
    md: 2
  }, SectionFooter_jsx("h5", null, "Market"), SectionFooter_jsx("ul", {
    className: classes.linksVertical
  }, SectionFooter_jsx("li", null, SectionFooter_jsx("a", {
    href: "#pablo"
  }, "Sales FAQ")), SectionFooter_jsx("li", null, SectionFooter_jsx("a", {
    href: "#pablo"
  }, "How to register")), SectionFooter_jsx("li", null, SectionFooter_jsx("a", {
    href: "#pablo"
  }, "Sell goods")), SectionFooter_jsx("li", null, SectionFooter_jsx("a", {
    href: "#pablo"
  }, "Receive Payment")), SectionFooter_jsx("li", null, SectionFooter_jsx("a", {
    href: "#pablo"
  }, "Transactions issues")), SectionFooter_jsx("li", null, SectionFooter_jsx("a", {
    href: "#pablo"
  }, "Affiliates program")))), SectionFooter_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionFooter_jsx("h5", null, "Social Feed"), SectionFooter_jsx("div", {
    className: classes.socialFeed
  }, SectionFooter_jsx("div", null, SectionFooter_jsx("i", {
    className: "fab fa-twitter"
  }), SectionFooter_jsx("p", null, "How to handle ethical disagreements with your clients.")), SectionFooter_jsx("div", null, SectionFooter_jsx("i", {
    className: "fab fa-twitter"
  }), SectionFooter_jsx("p", null, "The tangible benefits of designing at 1x pixel density.")), SectionFooter_jsx("div", null, SectionFooter_jsx("i", {
    className: "fab fa-facebook-square"
  }), SectionFooter_jsx("p", null, "A collection of 25 stunning sites that you can use for inspiration.")))), SectionFooter_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionFooter_jsx("h5", null, "Follow Us"), SectionFooter_jsx("ul", {
    className: classes.socialButtons
  }, SectionFooter_jsx("li", null, SectionFooter_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true,
    href: "#pablo",
    color: "twitter"
  }, SectionFooter_jsx("i", {
    className: "fab fa-twitter"
  }))), SectionFooter_jsx("li", null, SectionFooter_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true,
    href: "#pablo",
    color: "facebook"
  }, SectionFooter_jsx("i", {
    className: "fab fa-facebook-square"
  }))), SectionFooter_jsx("li", null, SectionFooter_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true,
    href: "#pablo",
    color: "dribbble"
  }, SectionFooter_jsx("i", {
    className: "fab fa-dribbble"
  }))), SectionFooter_jsx("li", null, SectionFooter_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true,
    href: "#pablo",
    color: "google"
  }, SectionFooter_jsx("i", {
    className: "fab fa-google-plus-g"
  }))), SectionFooter_jsx("li", null, SectionFooter_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true,
    href: "#pablo",
    color: "instagram"
  }, SectionFooter_jsx("i", {
    className: "fab fa-instagram"
  })))), SectionFooter_jsx("h5", null, "Numbers Don", "'", "t Lie"), SectionFooter_jsx("h4", null, "14.521 ", SectionFooter_jsx("small", null, "Freelancers")), SectionFooter_jsx("h4", null, "1.423.183 ", SectionFooter_jsx("small", null, "Transactions")))))), SectionFooter_jsx("br", null), SectionFooter_jsx("br", null), SectionFooter_jsx(Footer["a" /* default */], {
    theme: "white",
    content: SectionFooter_jsx("div", null, SectionFooter_jsx("ul", {
      className: classes.socialButtons
    }, SectionFooter_jsx("li", null, SectionFooter_jsx(Button["a" /* default */], {
      justIcon: true,
      simple: true,
      href: "#pablo",
      color: "twitter"
    }, SectionFooter_jsx("i", {
      className: "fab fa-twitter"
    }))), SectionFooter_jsx("li", null, SectionFooter_jsx(Button["a" /* default */], {
      justIcon: true,
      simple: true,
      href: "#pablo",
      color: "facebook"
    }, SectionFooter_jsx("i", {
      className: "fab fa-facebook-square"
    }))), SectionFooter_jsx("li", null, SectionFooter_jsx(Button["a" /* default */], {
      justIcon: true,
      simple: true,
      href: "#pablo",
      color: "dribbble"
    }, SectionFooter_jsx("i", {
      className: "fab fa-dribbble"
    }))), SectionFooter_jsx("li", null, SectionFooter_jsx(Button["a" /* default */], {
      justIcon: true,
      simple: true,
      href: "#pablo",
      color: "google"
    }, SectionFooter_jsx("i", {
      className: "fab fa-google-plus-g"
    }))), SectionFooter_jsx("li", null, SectionFooter_jsx(Button["a" /* default */], {
      justIcon: true,
      simple: true,
      href: "#pablo",
      color: "youtube"
    }, SectionFooter_jsx("i", {
      className: "fab fa-youtube"
    })))), SectionFooter_jsx("div", {
      className: external_classnames_default()(classes.pullCenter, classes.copyRight)
    }, "Copyright \xA9 ", 1900 + new Date().getYear(), " ", SectionFooter_jsx("a", {
      href: "https://www.nowsta.com",
      target: "_blank"
    }, "Tim Andrus"), " ", "All Rights Reserved."))
  }, SectionFooter_jsx("div", {
    className: classes.footer
  }, SectionFooter_jsx(GridContainer["a" /* default */], null, SectionFooter_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 3,
    md: 3
  }, SectionFooter_jsx("a", {
    href: "#pablo"
  }, SectionFooter_jsx("h5", null, "Material Kit TIM")), SectionFooter_jsx("p", null, "Probably the best UI Kit in the world! We know you", "'", "ve been waiting for it, so don", "'", "t be shy!")), SectionFooter_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 2,
    md: 2
  }, SectionFooter_jsx("h5", null, "About"), SectionFooter_jsx("ul", {
    className: classes.linksVertical
  }, SectionFooter_jsx("li", null, SectionFooter_jsx("a", {
    href: "#pablo"
  }, "Blog")), SectionFooter_jsx("li", null, SectionFooter_jsx("a", {
    href: "#pablo"
  }, "About me")), SectionFooter_jsx("li", null, SectionFooter_jsx("a", {
    href: "#pablo"
  }, "Presentation")), SectionFooter_jsx("li", null, SectionFooter_jsx("a", {
    href: "#pablo"
  }, "Contact us")))), SectionFooter_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 2,
    md: 2
  }, SectionFooter_jsx("h5", null, "Market"), SectionFooter_jsx("ul", {
    className: classes.linksVertical
  }, SectionFooter_jsx("li", null, SectionFooter_jsx("a", {
    href: "#pablo"
  }, "Sales FAQ")), SectionFooter_jsx("li", null, SectionFooter_jsx("a", {
    href: "#pablo"
  }, "How to register")), SectionFooter_jsx("li", null, SectionFooter_jsx("a", {
    href: "#pablo"
  }, "Sell Goods")), SectionFooter_jsx("li", null, SectionFooter_jsx("a", {
    href: "#pablo"
  }, "Receive Payment")), SectionFooter_jsx("li", null, SectionFooter_jsx("a", {
    href: "#pablo"
  }, "Transactions Issues")))), SectionFooter_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 2,
    md: 2
  }, SectionFooter_jsx("h5", null, "Legal"), SectionFooter_jsx("ul", {
    className: classes.linksVertical
  }, SectionFooter_jsx("li", null, SectionFooter_jsx("a", {
    href: "#pablo"
  }, "Transactions FAQ")), SectionFooter_jsx("li", null, SectionFooter_jsx("a", {
    href: "#pablo"
  }, "Terms & conditions")), SectionFooter_jsx("li", null, SectionFooter_jsx("a", {
    href: "#pablo"
  }, "Licenses")))), SectionFooter_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 3,
    md: 3
  }, SectionFooter_jsx("h5", null, "Subscribe to Newsletter"), SectionFooter_jsx("p", null, "Join our newsletter and get news in your inbox every week! I hate spam too, so no worries about this."), SectionFooter_jsx("form", null, SectionFooter_jsx(CustomInput["a" /* default */], {
    id: "footeremail",
    formControlProps: {
      fullWidth: false,
      className: classes.customFormControl
    },
    inputProps: {
      placeholder: "Your Email..."
    }
  }), SectionFooter_jsx(Button["a" /* default */], {
    color: "primary",
    justIcon: true
  }, SectionFooter_jsx(Mail_default.a, null)))))))));
}
// EXTERNAL MODULE: ./assets/jss/nextjs-material-tim-andrus/components/typographyStyle.js
var typographyStyle = __webpack_require__("pUqt");

// CONCATENATED MODULE: ./components/Typography/Small.js
var Small_jsx = external_react_default.a.createElement;
 // nodejs library to set properties for components

// @material-ui/core components
 // core components


const Small_useStyles = Object(styles_["makeStyles"])(typographyStyle["a" /* default */]);
function Small(props) {
  const {
    children
  } = props;
  const classes = Small_useStyles();
  return Small_jsx("div", {
    className: classes.defaultFontStyle + " " + classes.smallText
  }, children);
}
// EXTERNAL MODULE: ./components/Typography/Danger.js
var Danger = __webpack_require__("6orC");

// EXTERNAL MODULE: ./components/Typography/Warning.js
var Warning = __webpack_require__("Lldq");

// EXTERNAL MODULE: ./components/Typography/Success.js
var Success = __webpack_require__("3uXk");

// EXTERNAL MODULE: ./components/Typography/Info.js
var Info = __webpack_require__("vwaZ");

// CONCATENATED MODULE: ./components/Typography/Primary.js
var Primary_jsx = external_react_default.a.createElement;
 // nodejs library to set properties for components

// @material-ui/core components
 // core components


const Primary_useStyles = Object(styles_["makeStyles"])(typographyStyle["a" /* default */]);
function Primary(props) {
  const {
    children
  } = props;
  const classes = Primary_useStyles();
  return Primary_jsx("div", {
    className: classes.defaultFontStyle + " " + classes.primaryText
  }, children);
}
// EXTERNAL MODULE: ./components/Typography/Muted.js
var Muted = __webpack_require__("pL7r");

// EXTERNAL MODULE: ./components/Typography/Quote.js
var Quote = __webpack_require__("aIa2");

// EXTERNAL MODULE: external "@material-ui/core/Tooltip"
var Tooltip_ = __webpack_require__("vF8F");
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);

// EXTERNAL MODULE: external "@material-ui/icons/Person"
var Person_ = __webpack_require__("Shq7");
var Person_default = /*#__PURE__*/__webpack_require__.n(Person_);

// EXTERNAL MODULE: external "@material-ui/icons/Edit"
var Edit_ = __webpack_require__("YkC2");
var Edit_default = /*#__PURE__*/__webpack_require__.n(Edit_);

// EXTERNAL MODULE: external "@material-ui/icons/Remove"
var Remove_ = __webpack_require__("VMnw");
var Remove_default = /*#__PURE__*/__webpack_require__.n(Remove_);

// EXTERNAL MODULE: external "@material-ui/icons/Add"
var Add_ = __webpack_require__("W/Kq");
var Add_default = /*#__PURE__*/__webpack_require__.n(Add_);

// EXTERNAL MODULE: external "@material-ui/icons/KeyboardArrowRight"
var KeyboardArrowRight_ = __webpack_require__("nd8x");
var KeyboardArrowRight_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowRight_);

// EXTERNAL MODULE: external "@material-ui/icons/Reply"
var Reply_ = __webpack_require__("6ce9");
var Reply_default = /*#__PURE__*/__webpack_require__.n(Reply_);

// EXTERNAL MODULE: ./components/Table/Table.js + 1 modules
var Table = __webpack_require__("3T+C");

// EXTERNAL MODULE: ./components/Media/Media.js + 1 modules
var Media = __webpack_require__("kMoN");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-tim-andrus/buttonGroupStyle.js
var buttonGroupStyle = __webpack_require__("YQNy");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-tim-andrus/tooltipsStyle.js
var tooltipsStyle = __webpack_require__("evDE");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/pages/componentsSections/contentAreas.js
function contentAreas_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function contentAreas_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { contentAreas_ownKeys(Object(source), true).forEach(function (key) { contentAreas_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { contentAreas_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function contentAreas_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const contentAreas = contentAreas_objectSpread({
  title: nextjs_material_tim_andrus["S" /* title */],
  mrAuto: nextjs_material_tim_andrus["C" /* mrAuto */],
  mlAuto: nextjs_material_tim_andrus["B" /* mlAuto */]
}, customCheckboxRadioSwitchStyle["a" /* default */], {}, buttonGroupStyle["a" /* default */], {}, tooltipsStyle["a" /* default */], {
  space50: {
    height: "50px",
    display: "block"
  },
  padding0: {
    padding: "0 !important"
  },
  imgContainer: {
    width: "120px",
    maxHeight: "160px",
    overflow: "hidden",
    display: "block",
    "& img": {
      width: "100%"
    }
  },
  description: {
    maxWidth: "150px"
  },
  tdName: {
    minWidth: "200px",
    fontWeight: "400",
    fontSize: "1.5em"
  },
  tdNameAnchor: {
    color: nextjs_material_tim_andrus["s" /* grayColor */][1]
  },
  tdNameSmall: {
    color: nextjs_material_tim_andrus["s" /* grayColor */][0],
    fontSize: "0.75em",
    fontWeight: "300"
  },
  tdNumber: {
    textAlign: "right",
    minWidth: "150px",
    fontWeight: "300",
    fontSize: "1.125em !important"
  },
  tdNumberSmall: {
    marginRight: "3px"
  },
  tdNumberAndButtonGroup: {
    lineHeight: "1 !important",
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      marginRight: "0"
    },
    "& svg": {
      marginRight: "0"
    }
  },
  customFont: {
    fontSize: "16px !important"
  },
  actionButton: {
    margin: "0px",
    padding: "5px"
  },
  textCenter: {
    textAlign: "center"
  },
  textRight: {
    textAlign: "right"
  },
  floatRight: {
    float: "right"
  },
  justifyContentCenter: {
    WebkitBoxPack: "center !important",
    MsFlexPack: "center !important",
    justifyContent: "center !important"
  },
  signInButton: {
    "& button": {
      marginRight: "5px"
    }
  }
});

/* harmony default export */ var componentsSections_contentAreas = (contentAreas);
// CONCATENATED MODULE: ./assets/img/placeholder.jpg
/* harmony default export */ var placeholder = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3BsYWNlaG9sZGVyLmpwZyI7");
// EXTERNAL MODULE: ./assets/img/product1.jpg
var product1 = __webpack_require__("QfSR");

// EXTERNAL MODULE: ./assets/img/product2.jpg
var product2 = __webpack_require__("I2om");

// EXTERNAL MODULE: ./assets/img/product3.jpg
var product3 = __webpack_require__("wcIh");

// CONCATENATED MODULE: ./pages-sections/components/SectionContentAreas.js
var SectionContentAreas_jsx = external_react_default.a.createElement;
 // @material-ui/core components



 // @material-ui/core icons









 // core components
















const SectionContentAreas_useStyles = Object(styles_["makeStyles"])(componentsSections_contentAreas);
function SectionContentAreas() {
  const [checked, setChecked] = external_react_default.a.useState([1, 3, 5]);

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

  const classes = SectionContentAreas_useStyles();
  const fillButtons = [{
    color: "info",
    icon: Person_default.a
  }, {
    color: "success",
    icon: Edit_default.a
  }, {
    color: "danger",
    icon: Close_default.a
  }].map((prop, key) => {
    return SectionContentAreas_jsx(Button["a" /* default */], {
      justIcon: true,
      size: "sm",
      color: prop.color,
      key: key
    }, SectionContentAreas_jsx(prop.icon, null));
  });
  const simpleButtons = [{
    color: "info",
    icon: Person_default.a
  }, {
    color: "success",
    icon: Edit_default.a
  }, {
    color: "danger",
    icon: Close_default.a
  }].map((prop, key) => {
    return SectionContentAreas_jsx(Button["a" /* default */], {
      simple: true,
      justIcon: true,
      size: "sm",
      color: prop.color,
      key: key
    }, SectionContentAreas_jsx(prop.icon, null));
  });
  const roundButtons = [{
    color: "info",
    icon: Person_default.a
  }, {
    color: "success",
    icon: Edit_default.a
  }, {
    color: "danger",
    icon: Close_default.a
  }].map((prop, key) => {
    return SectionContentAreas_jsx(Button["a" /* default */], {
      round: true,
      justIcon: true,
      size: "sm",
      color: prop.color,
      key: key
    }, SectionContentAreas_jsx(prop.icon, null));
  });
  return SectionContentAreas_jsx("div", {
    className: "cd-section",
    id: "contentAreas"
  }, SectionContentAreas_jsx("h2", null, "Content Areas"), SectionContentAreas_jsx("div", {
    id: "tables"
  }, SectionContentAreas_jsx("div", {
    className: classes.title
  }, SectionContentAreas_jsx("h3", null, "Tables")), SectionContentAreas_jsx(GridContainer["a" /* default */], null, SectionContentAreas_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 12
  }, SectionContentAreas_jsx("h4", null, "Simple Table")), SectionContentAreas_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 10,
    md: 8,
    className: classes.mrAuto + " " + classes.mlAuto
  }, SectionContentAreas_jsx("h4", null, SectionContentAreas_jsx("small", null, "Simple With Actions")), SectionContentAreas_jsx(Table["a" /* default */], {
    tableHead: ["#", "Name", "Job Position", "Since", "Salary", "Actions"],
    tableData: [["1", "Andrew Mike", "Develop", "2013", "$ 99,225", fillButtons], ["2", "John Doe", "Design", "2012", "$ 89,241", roundButtons], ["3", "Alex Mike", "Design", "2010", "$ 92,144", simpleButtons], ["4", "Mike Monday", "Marketing", "2013", "$ 49,990", roundButtons], ["5", "Paul Dickens", "Communication", "2015", "$ 69,201", fillButtons]],
    customCellClasses: [classes.textCenter, classes.textRight, classes.textRight],
    customClassesForCells: [0, 4, 5],
    customHeadCellClasses: [classes.textCenter, classes.textRight, classes.textRight],
    customHeadClassesForCells: [0, 4, 5]
  }), SectionContentAreas_jsx("h4", null, SectionContentAreas_jsx("small", null, "Striped With Checkboxes")), SectionContentAreas_jsx(Table["a" /* default */], {
    striped: true,
    tableHead: ["#", "", "Product Name", "Type", "Qty", "Price", "Amount"],
    tableData: [["1", SectionContentAreas_jsx(Checkbox_default.a, {
      key: 81267378,
      checked: checked.indexOf(1) !== -1,
      tabIndex: -1,
      onClick: () => handleToggle(1),
      checkedIcon: SectionContentAreas_jsx(Check_default.a, {
        className: classes.checkedIcon
      }),
      icon: SectionContentAreas_jsx(Check_default.a, {
        className: classes.uncheckedIcon
      }),
      classes: {
        checked: classes.checked,
        root: classes.checkRoot
      }
    }), "Moleskine Agenda", "Office", "25", "$ 49", "$ 1,225"], ["2", SectionContentAreas_jsx(Checkbox_default.a, {
      key: 81267378,
      checked: checked.indexOf(2) !== -1,
      tabIndex: -1,
      onClick: () => handleToggle(2),
      checkedIcon: SectionContentAreas_jsx(Check_default.a, {
        className: classes.checkedIcon
      }),
      icon: SectionContentAreas_jsx(Check_default.a, {
        className: classes.uncheckedIcon
      }),
      classes: {
        checked: classes.checked,
        root: classes.checkRoot
      }
    }), "Stabilo Pen", "Office", "30", "$ 10", "$ 300"], ["3", SectionContentAreas_jsx(Checkbox_default.a, {
      key: 564267512,
      checked: checked.indexOf(3) !== -1,
      tabIndex: -1,
      onClick: () => handleToggle(3),
      checkedIcon: SectionContentAreas_jsx(Check_default.a, {
        className: classes.checkedIcon
      }),
      icon: SectionContentAreas_jsx(Check_default.a, {
        className: classes.uncheckedIcon
      }),
      classes: {
        checked: classes.checked,
        root: classes.checkRoot
      }
    }), "A4 Paper Pack", "Office", "50", "$ 10.99", "$ 109"], ["4", SectionContentAreas_jsx(Checkbox_default.a, {
      key: 5642675122,
      checked: checked.indexOf(4) !== -1,
      tabIndex: -1,
      onClick: () => handleToggle(4),
      checkedIcon: SectionContentAreas_jsx(Check_default.a, {
        className: classes.checkedIcon
      }),
      icon: SectionContentAreas_jsx(Check_default.a, {
        className: classes.uncheckedIcon
      }),
      classes: {
        checked: classes.checked,
        root: classes.checkRoot
      }
    }), "Apple iPad", "Communication", "10", "$ 499.00", "$ 4,990"], ["5", SectionContentAreas_jsx(Checkbox_default.a, {
      key: 56426751223,
      checked: checked.indexOf(5) !== -1,
      tabIndex: -1,
      onClick: () => handleToggle(5),
      checkedIcon: SectionContentAreas_jsx(Check_default.a, {
        className: classes.checkedIcon
      }),
      icon: SectionContentAreas_jsx(Check_default.a, {
        className: classes.uncheckedIcon
      }),
      classes: {
        checked: classes.checked,
        root: classes.checkRoot
      }
    }), "Apple iPhone", "Communication", "10", "$ 599.00", "$ 5,999"], {
      total: true,
      colspan: "5",
      amount: SectionContentAreas_jsx("span", null, SectionContentAreas_jsx("small", null, "$"), "12,999")
    }],
    customCellClasses: [classes.textCenter, classes.padding0, classes.textRight, classes.textRight],
    customClassesForCells: [0, 1, 5, 6],
    customHeadCellClasses: [classes.textCenter, classes.textRight, classes.textRight],
    customHeadClassesForCells: [0, 5, 6]
  }))), SectionContentAreas_jsx(GridContainer["a" /* default */], null, SectionContentAreas_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 12
  }, SectionContentAreas_jsx("h4", null, "Shopping Cart Table")), SectionContentAreas_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 12
  }, SectionContentAreas_jsx(Table["a" /* default */], {
    tableHead: ["", "PRODUCT", "COLOR", "SIZE", "PRICE", "QTY", "AMOUNT", ""],
    tableData: [[SectionContentAreas_jsx("div", {
      className: classes.imgContainer,
      key: 875643
    }, SectionContentAreas_jsx("img", {
      src: product1["a" /* default */],
      alt: "...",
      className: classes.img
    })), SectionContentAreas_jsx("span", {
      key: 8756431
    }, SectionContentAreas_jsx("a", {
      href: "#jacket",
      className: classes.tdNameAnchor
    }, "Spring Jacket"), SectionContentAreas_jsx("br", null), SectionContentAreas_jsx("small", {
      className: classes.tdNameSmall
    }, "by Dolce&Gabbana")), "Red", "M", SectionContentAreas_jsx("span", {
      key: 8756432
    }, SectionContentAreas_jsx("small", {
      className: classes.tdNumberSmall
    }, "$"), " 549"), SectionContentAreas_jsx("span", {
      key: 8756435
    }, "1", ` `, SectionContentAreas_jsx("div", {
      className: classes.buttonGroup
    }, SectionContentAreas_jsx(Button["a" /* default */], {
      color: "info",
      size: "sm",
      round: true,
      className: classes.firstButton
    }, SectionContentAreas_jsx(Remove_default.a, null)), SectionContentAreas_jsx(Button["a" /* default */], {
      color: "info",
      size: "sm",
      round: true,
      className: classes.lastButton
    }, SectionContentAreas_jsx(Add_default.a, null)))), SectionContentAreas_jsx("span", {
      key: 87564312
    }, SectionContentAreas_jsx("small", {
      className: classes.tdNumberSmall
    }, "$"), " 549"), SectionContentAreas_jsx(Tooltip_default.a, {
      key: 8756431234,
      id: "close1",
      title: "Remove item",
      placement: "left",
      classes: {
        tooltip: classes.tooltip
      }
    }, SectionContentAreas_jsx(Button["a" /* default */], {
      link: true,
      className: classes.actionButton
    }, SectionContentAreas_jsx(Close_default.a, null)))], [SectionContentAreas_jsx("div", {
      className: classes.imgContainer,
      key: 875643
    }, SectionContentAreas_jsx("img", {
      src: product2["a" /* default */],
      alt: "...",
      className: classes.img
    })), SectionContentAreas_jsx("span", {
      key: 875643
    }, SectionContentAreas_jsx("a", {
      href: "#jacket",
      className: classes.tdNameAnchor
    }, "Short Pants", " "), SectionContentAreas_jsx("br", null), SectionContentAreas_jsx("small", {
      className: classes.tdNameSmall
    }, "by Gucci")), "Purple", "M", SectionContentAreas_jsx("span", {
      key: 875643
    }, SectionContentAreas_jsx("small", {
      className: classes.tdNumberSmall
    }, "$"), " 499"), SectionContentAreas_jsx("span", {
      key: 875643
    }, "2", ` `, SectionContentAreas_jsx("div", {
      className: classes.buttonGroup
    }, SectionContentAreas_jsx(Button["a" /* default */], {
      color: "info",
      size: "sm",
      round: true,
      className: classes.firstButton
    }, SectionContentAreas_jsx(Remove_default.a, null)), SectionContentAreas_jsx(Button["a" /* default */], {
      color: "info",
      size: "sm",
      round: true,
      className: classes.lastButton
    }, SectionContentAreas_jsx(Add_default.a, null)))), SectionContentAreas_jsx("span", {
      key: 875643
    }, SectionContentAreas_jsx("small", {
      className: classes.tdNumberSmall
    }, "$"), " 998"), SectionContentAreas_jsx(Tooltip_default.a, {
      key: 875643,
      id: "close2",
      title: "Remove item",
      placement: "left",
      classes: {
        tooltip: classes.tooltip
      }
    }, SectionContentAreas_jsx(Button["a" /* default */], {
      link: true,
      className: classes.actionButton
    }, SectionContentAreas_jsx(Close_default.a, null)))], [SectionContentAreas_jsx("div", {
      className: classes.imgContainer,
      key: 875643
    }, SectionContentAreas_jsx("img", {
      src: product3["a" /* default */],
      alt: "...",
      className: classes.img
    })), SectionContentAreas_jsx("span", {
      key: 875643
    }, SectionContentAreas_jsx("a", {
      href: "#jacket",
      className: classes.tdNameAnchor
    }, "Pencil Skirt"), SectionContentAreas_jsx("br", null), SectionContentAreas_jsx("small", {
      className: classes.tdNameSmall
    }, "by Valentino")), "White", "XL", SectionContentAreas_jsx("span", {
      key: 875643
    }, SectionContentAreas_jsx("small", {
      className: classes.tdNumberSmall
    }, "$"), " 799"), SectionContentAreas_jsx("span", {
      key: 875643
    }, "1", ` `, SectionContentAreas_jsx("div", {
      className: classes.buttonGroup
    }, SectionContentAreas_jsx(Button["a" /* default */], {
      color: "info",
      size: "sm",
      round: true,
      className: classes.firstButton
    }, SectionContentAreas_jsx(Remove_default.a, null)), SectionContentAreas_jsx(Button["a" /* default */], {
      color: "info",
      size: "sm",
      round: true,
      className: classes.lastButton
    }, SectionContentAreas_jsx(Add_default.a, null)))), SectionContentAreas_jsx("span", {
      key: 875643
    }, SectionContentAreas_jsx("small", {
      className: classes.tdNumberSmall
    }, "$"), " 799"), SectionContentAreas_jsx(Tooltip_default.a, {
      key: 875643,
      id: "close3",
      title: "Remove item",
      placement: "left",
      classes: {
        tooltip: classes.tooltip
      }
    }, SectionContentAreas_jsx(Button["a" /* default */], {
      link: true,
      className: classes.actionButton
    }, SectionContentAreas_jsx(Close_default.a, null)))], {
      purchase: true,
      colspan: "3",
      amount: SectionContentAreas_jsx("span", null, SectionContentAreas_jsx("small", null, "$"), "2,346"),
      col: {
        colspan: 3,
        text: SectionContentAreas_jsx(Button["a" /* default */], {
          color: "info",
          round: true
        }, "Complete Purchase ", SectionContentAreas_jsx(KeyboardArrowRight_default.a, null))
      }
    }],
    tableShopping: true,
    customHeadCellClasses: [classes.textCenter, classes.description, classes.description, classes.textCenter, classes.textRight, classes.textRight],
    customHeadClassesForCells: [0, 2, 3, 4, 5, 6],
    customCellClasses: [classes.tdName, classes.customFont, classes.customFont, classes.tdNumber + " " + classes.textCenter, classes.tdNumber + " " + classes.tdNumberAndButtonGroup, classes.tdNumber + " " + classes.textCenter],
    customClassesForCells: [1, 2, 3, 4, 5, 6]
  })))), SectionContentAreas_jsx("div", {
    className: classes.space50
  }), SectionContentAreas_jsx("div", {
    id: "comments"
  }, SectionContentAreas_jsx("div", {
    className: classes.title
  }, SectionContentAreas_jsx("h3", null, "Comments")), SectionContentAreas_jsx(GridContainer["a" /* default */], null, SectionContentAreas_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 8,
    md: 8,
    className: classes.mlAuto + " " + classes.mrAuto
  }, SectionContentAreas_jsx("div", null, SectionContentAreas_jsx("h3", {
    className: classes.title + " " + classes.textCenter
  }, "10 Comments"), SectionContentAreas_jsx(Media["a" /* default */], {
    avatar: faces_avatar["a" /* default */],
    title: SectionContentAreas_jsx("span", null, "Tina Andrew ", SectionContentAreas_jsx("small", null, "\xB7 7 minutes ago")),
    body: SectionContentAreas_jsx("span", null, SectionContentAreas_jsx("p", null, "Chance too good. God level bars. I", "'", "m so proud of @LifeOfDesiigner #1 song in the country. Panda! Don", "'", "t be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!"), SectionContentAreas_jsx("p", null, "All praises and blessings to the families of people who never gave up on dreams. Don", "'", "t forget, You", "'", "re Awesome!")),
    footer: SectionContentAreas_jsx("div", null, SectionContentAreas_jsx(Tooltip_default.a, {
      id: "tooltip-tina",
      title: "Reply to comment",
      placement: "top",
      classes: {
        tooltip: classes.tooltip
      }
    }, SectionContentAreas_jsx(Button["a" /* default */], {
      color: "primary",
      simple: true,
      className: classes.floatRight
    }, SectionContentAreas_jsx(Reply_default.a, null), " Reply")), SectionContentAreas_jsx(Button["a" /* default */], {
      color: "danger",
      simple: true,
      className: classes.floatRight
    }, SectionContentAreas_jsx(Favorite_default.a, null), " 243")),
    innerMedias: [SectionContentAreas_jsx(Media["a" /* default */], {
      key: Math.random() * Date.now(),
      avatar: kendall["a" /* default */],
      body: SectionContentAreas_jsx(CustomInput["a" /* default */], {
        id: "reply",
        formControlProps: {
          fullWidth: true
        },
        inputProps: {
          multiline: true,
          rows: 4,
          placeholder: " Write some nice stuff or nothing..."
        }
      }),
      footer: SectionContentAreas_jsx(Button["a" /* default */], {
        color: "primary",
        className: classes.floatRight
      }, SectionContentAreas_jsx(Reply_default.a, null), " Reply")
    })]
  }), SectionContentAreas_jsx(Media["a" /* default */], {
    avatar: marc["a" /* default */],
    title: SectionContentAreas_jsx("span", null, "John Camber ", SectionContentAreas_jsx("small", null, "\xB7 Yesterday")),
    body: SectionContentAreas_jsx("span", null, SectionContentAreas_jsx("p", null, "Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news."), SectionContentAreas_jsx("p", null, "Don", "'", "t forget, You", "'", "re Awesome!")),
    footer: SectionContentAreas_jsx("div", null, SectionContentAreas_jsx(Tooltip_default.a, {
      id: "tooltip-john",
      title: "Reply to comment",
      placement: "top",
      classes: {
        tooltip: classes.tooltip
      }
    }, SectionContentAreas_jsx(Button["a" /* default */], {
      color: "primary",
      simple: true,
      className: classes.floatRight
    }, SectionContentAreas_jsx(Reply_default.a, null), " Reply")), SectionContentAreas_jsx(Button["a" /* default */], {
      link: true,
      className: classes.floatRight
    }, SectionContentAreas_jsx(Favorite_default.a, null), " 25")),
    innerMedias: [SectionContentAreas_jsx(Media["a" /* default */], {
      key: Math.random() * Date.now(),
      avatar: faces_avatar["a" /* default */],
      title: SectionContentAreas_jsx("span", null, "Tina Andrew ", SectionContentAreas_jsx("small", null, "\xB7 2 Days Ago")),
      body: SectionContentAreas_jsx("span", null, SectionContentAreas_jsx("p", null, "Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news."), SectionContentAreas_jsx("p", null, "Don", "'", "t forget, You", "'", "re Awesome!")),
      footer: SectionContentAreas_jsx("div", null, SectionContentAreas_jsx(Tooltip_default.a, {
        id: "tooltip-tina2",
        title: "Reply to comment",
        placement: "top",
        classes: {
          tooltip: classes.tooltip
        }
      }, SectionContentAreas_jsx(Button["a" /* default */], {
        color: "primary",
        simple: true,
        className: classes.floatRight
      }, SectionContentAreas_jsx(Reply_default.a, null), " Reply")), SectionContentAreas_jsx(Button["a" /* default */], {
        simple: true,
        color: "danger",
        className: classes.floatRight
      }, SectionContentAreas_jsx(Favorite_default.a, null), " 243"))
    })]
  }), SectionContentAreas_jsx(Media["a" /* default */], {
    key: Math.random() * Date.now(),
    avatar: faces_avatar["a" /* default */],
    title: SectionContentAreas_jsx("span", null, "Rosa Thompson ", SectionContentAreas_jsx("small", null, "\xB7 2 Days Ago")),
    body: SectionContentAreas_jsx("span", null, SectionContentAreas_jsx("p", null, "Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news."), SectionContentAreas_jsx("p", null, "Don", "'", "t forget, You", "'", "re Awesome!")),
    footer: SectionContentAreas_jsx("div", null, SectionContentAreas_jsx(Tooltip_default.a, {
      id: "tooltip-tina2",
      title: "Reply to comment",
      placement: "top",
      classes: {
        tooltip: classes.tooltip
      }
    }, SectionContentAreas_jsx(Button["a" /* default */], {
      color: "primary",
      simple: true,
      className: classes.floatRight
    }, SectionContentAreas_jsx(Reply_default.a, null), " Reply")), SectionContentAreas_jsx(Button["a" /* default */], {
      simple: true,
      color: "danger",
      className: classes.floatRight
    }, SectionContentAreas_jsx(Favorite_default.a, null), " 243"))
  }), SectionContentAreas_jsx("div", null, SectionContentAreas_jsx(Pagination, {
    className: classes.textCenter + " " + classes.justifyContentCenter,
    pages: [{
      text: "«"
    }, {
      text: 1
    }, {
      text: 2
    }, {
      active: true,
      text: 3
    }, {
      text: 4
    }, {
      text: 5
    }, {
      text: "»"
    }],
    color: "primary"
  }))), SectionContentAreas_jsx("h3", {
    className: classes.textCenter
  }, "Post your comment ", SectionContentAreas_jsx("br", null), SectionContentAreas_jsx("small", null, "- Logged In User -")), SectionContentAreas_jsx(Media["a" /* default */], {
    avatar: faces_avatar["a" /* default */],
    body: SectionContentAreas_jsx(CustomInput["a" /* default */], {
      id: "logged",
      formControlProps: {
        fullWidth: true
      },
      inputProps: {
        multiline: true,
        rows: 6,
        placeholder: " Write some nice stuff or nothing..."
      }
    }),
    footer: SectionContentAreas_jsx(Button["a" /* default */], {
      color: "primary",
      className: classes.floatRight
    }, SectionContentAreas_jsx(Reply_default.a, null), " Reply")
  }), SectionContentAreas_jsx("h3", {
    className: classes.textCenter
  }, "Post your comment ", SectionContentAreas_jsx("br", null), SectionContentAreas_jsx("small", null, "- Not Logged In User -")), SectionContentAreas_jsx(Media["a" /* default */], {
    avatar: placeholder,
    body: SectionContentAreas_jsx("div", null, SectionContentAreas_jsx(GridContainer["a" /* default */], null, SectionContentAreas_jsx(GridItem["a" /* default */], {
      xs: 12,
      sm: 6,
      md: 6
    }, SectionContentAreas_jsx(CustomInput["a" /* default */], {
      id: "not-logged-name",
      formControlProps: {
        fullWidth: true
      },
      inputProps: {
        placeholder: "Your Name"
      }
    })), SectionContentAreas_jsx(GridItem["a" /* default */], {
      xs: 12,
      sm: 6,
      md: 6
    }, SectionContentAreas_jsx(CustomInput["a" /* default */], {
      id: "not-logged-email",
      formControlProps: {
        fullWidth: true
      },
      inputProps: {
        placeholder: "Your Email"
      }
    }))), SectionContentAreas_jsx(CustomInput["a" /* default */], {
      id: "not-logged-message",
      formControlProps: {
        fullWidth: true
      },
      inputProps: {
        multiline: true,
        rows: 6,
        placeholder: " Write some nice stuff or nothing..."
      }
    })),
    footer: SectionContentAreas_jsx("div", {
      className: classes.signInButton
    }, SectionContentAreas_jsx("h6", null, "SIGN IN WITH"), SectionContentAreas_jsx(Button["a" /* default */], {
      justIcon: true,
      round: true,
      color: "twitter"
    }, SectionContentAreas_jsx("i", {
      className: "fab fa-twitter"
    })), SectionContentAreas_jsx(Button["a" /* default */], {
      justIcon: true,
      round: true,
      color: "facebook"
    }, SectionContentAreas_jsx("i", {
      className: "fab fa-facebook-square"
    })), SectionContentAreas_jsx(Button["a" /* default */], {
      justIcon: true,
      round: true,
      color: "google"
    }, SectionContentAreas_jsx("i", {
      className: "fab fa-google-plus-square"
    })), SectionContentAreas_jsx(Button["a" /* default */], {
      color: "primary",
      className: classes.floatRight
    }, "Post comment"))
  })))));
}
// EXTERNAL MODULE: ./assets/jss/nextjs-material-tim-andrus/imagesStyles.js
var imagesStyles = __webpack_require__("oD+/");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/pages/componentsSections/typographyStyle.js
function typographyStyle_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function typographyStyle_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { typographyStyle_ownKeys(Object(source), true).forEach(function (key) { typographyStyle_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { typographyStyle_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function typographyStyle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const typographyStyle_typographyStyle = typographyStyle_objectSpread({
  section: {
    padding: "70px 0"
  },
  container: nextjs_material_tim_andrus["h" /* container */],
  space50: {
    height: "50px",
    display: "block"
  },
  title: typographyStyle_objectSpread({}, nextjs_material_tim_andrus["S" /* title */], {
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }),
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative",
    width: "100%"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: nextjs_material_tim_andrus["s" /* grayColor */][21],
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  marginLeft: {
    marginLeft: "auto !important"
  }
}, imagesStyles["a" /* default */]);

/* harmony default export */ var componentsSections_typographyStyle = (typographyStyle_typographyStyle);
// CONCATENATED MODULE: ./pages-sections/components/SectionTypography.js
var SectionTypography_jsx = external_react_default.a.createElement;
 // @material-ui/core components

 // @material-ui/icons
// core components














const SectionTypography_useStyles = Object(styles_["makeStyles"])(componentsSections_typographyStyle);
function SectionTypography() {
  const classes = SectionTypography_useStyles();
  return SectionTypography_jsx("div", {
    className: classes.section
  }, SectionTypography_jsx("div", {
    className: classes.container
  }, SectionTypography_jsx("div", {
    id: "typography",
    className: "cd-section"
  }, SectionTypography_jsx("div", {
    className: classes.title
  }, SectionTypography_jsx("h2", null, "Typography")), SectionTypography_jsx(GridContainer["a" /* default */], null, SectionTypography_jsx("div", {
    className: classes.typo
  }, SectionTypography_jsx("div", {
    className: classes.note
  }, "Header 1"), SectionTypography_jsx("h1", null, "The Life of Material Kit")), SectionTypography_jsx("div", {
    className: classes.typo
  }, SectionTypography_jsx("div", {
    className: classes.note
  }, "Header 2"), SectionTypography_jsx("h2", null, "The Life of Material Kit")), SectionTypography_jsx("div", {
    className: classes.typo
  }, SectionTypography_jsx("div", {
    className: classes.note
  }, "Header 3"), SectionTypography_jsx("h3", null, "The Life of Material Kit")), SectionTypography_jsx("div", {
    className: classes.typo
  }, SectionTypography_jsx("div", {
    className: classes.note
  }, "Header 4"), SectionTypography_jsx("h4", null, "The Life of Material Kit")), SectionTypography_jsx("div", {
    className: classes.typo
  }, SectionTypography_jsx("div", {
    className: classes.note
  }, "Header 5"), SectionTypography_jsx("h5", null, "The Life of Material Kit")), SectionTypography_jsx("div", {
    className: classes.typo
  }, SectionTypography_jsx("div", {
    className: classes.note
  }, "Header 6"), SectionTypography_jsx("h6", null, "The Life of Material Kit")), SectionTypography_jsx("div", {
    className: classes.typo
  }, SectionTypography_jsx("div", {
    className: classes.note
  }, "Header 1"), SectionTypography_jsx("h1", {
    className: classes.title
  }, "The Life of Material Kit")), SectionTypography_jsx("div", {
    className: classes.typo
  }, SectionTypography_jsx("div", {
    className: classes.note
  }, "Header 2"), SectionTypography_jsx("h2", {
    className: classes.title
  }, "The Life of Material Kit")), SectionTypography_jsx("div", {
    className: classes.typo
  }, SectionTypography_jsx("div", {
    className: classes.note
  }, "Header 3"), SectionTypography_jsx("h3", {
    className: classes.title
  }, "The Life of Material Kit")), SectionTypography_jsx("div", {
    className: classes.typo
  }, SectionTypography_jsx("div", {
    className: classes.note
  }, "Header 4"), SectionTypography_jsx("h4", {
    className: classes.title
  }, "The Life of Material Kit")), SectionTypography_jsx("div", {
    className: classes.typo
  }, SectionTypography_jsx("div", {
    className: classes.note
  }, "Paragraph"), SectionTypography_jsx("p", null, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.")), SectionTypography_jsx("div", {
    className: classes.typo
  }, SectionTypography_jsx("div", {
    className: classes.note
  }, "Quote"), SectionTypography_jsx(Quote["a" /* default */], {
    text: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.",
    author: " Kanye West, Musician"
  })), SectionTypography_jsx("div", {
    className: classes.typo
  }, SectionTypography_jsx("div", {
    className: classes.note
  }, "Muted Text"), SectionTypography_jsx(Muted["a" /* default */], null, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...")), SectionTypography_jsx("div", {
    className: classes.typo
  }, SectionTypography_jsx("div", {
    className: classes.note
  }, "Primary Text"), SectionTypography_jsx(Primary, null, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...")), SectionTypography_jsx("div", {
    className: classes.typo
  }, SectionTypography_jsx("div", {
    className: classes.note
  }, "Info Text"), SectionTypography_jsx(Info["a" /* default */], null, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...")), SectionTypography_jsx("div", {
    className: classes.typo
  }, SectionTypography_jsx("div", {
    className: classes.note
  }, "Success Text"), SectionTypography_jsx(Success["a" /* default */], null, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...")), SectionTypography_jsx("div", {
    className: classes.typo
  }, SectionTypography_jsx("div", {
    className: classes.note
  }, "Warning Text"), SectionTypography_jsx(Warning["a" /* default */], null, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...")), SectionTypography_jsx("div", {
    className: classes.typo
  }, SectionTypography_jsx("div", {
    className: classes.note
  }, "Danger Text"), SectionTypography_jsx(Danger["a" /* default */], null, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...")), SectionTypography_jsx("div", {
    className: classes.typo
  }, SectionTypography_jsx("div", {
    className: classes.note
  }, "Small Tag"), SectionTypography_jsx("h2", null, "Header with small subtitle", SectionTypography_jsx("br", null), SectionTypography_jsx(Small, null, "Use ", '"', "Small", '"', " tag for the headers"))))), SectionTypography_jsx("div", {
    className: classes.space50
  }), SectionTypography_jsx("div", {
    id: "images"
  }, SectionTypography_jsx("div", {
    className: classes.title
  }, SectionTypography_jsx("h2", null, "Images")), SectionTypography_jsx("br", null), SectionTypography_jsx(GridContainer["a" /* default */], null, SectionTypography_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 2
  }, SectionTypography_jsx("h4", null, "Rounded Image"), SectionTypography_jsx("img", {
    src: faces_avatar["a" /* default */],
    alt: "...",
    className: classes.imgRounded + " " + classes.imgFluid
  })), SectionTypography_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 2,
    className: classes.marginLeft
  }, SectionTypography_jsx("h4", null, "Circle Image"), SectionTypography_jsx("img", {
    src: faces_avatar["a" /* default */],
    alt: "...",
    className: classes.imgRoundedCircle + " " + classes.imgFluid
  })), SectionTypography_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 2,
    className: classes.marginLeft
  }, SectionTypography_jsx("h4", null, "Rounded Raised"), SectionTypography_jsx("img", {
    src: faces_avatar["a" /* default */],
    alt: "...",
    className: classes.imgRaised + " " + classes.imgRounded + " " + classes.imgFluid
  })), SectionTypography_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 2,
    className: classes.marginLeft
  }, SectionTypography_jsx("h4", null, "Circle Raised"), SectionTypography_jsx("img", {
    src: faces_avatar["a" /* default */],
    alt: "...",
    className: classes.imgRaised + " " + classes.imgRoundedCircle + " " + classes.imgFluid
  }))), SectionTypography_jsx(GridContainer["a" /* default */], null)), SectionTypography_jsx("div", {
    className: classes.space50
  }), SectionTypography_jsx(SectionContentAreas, null)));
}
// EXTERNAL MODULE: external "@material-ui/icons/Share"
var Share_ = __webpack_require__("EAEr");
var Share_default = /*#__PURE__*/__webpack_require__.n(Share_);

// EXTERNAL MODULE: external "@material-ui/icons/ChatBubble"
var ChatBubble_ = __webpack_require__("obQk");
var ChatBubble_default = /*#__PURE__*/__webpack_require__.n(ChatBubble_);

// EXTERNAL MODULE: external "@material-ui/icons/TrendingUp"
var TrendingUp_ = __webpack_require__("Uivz");
var TrendingUp_default = /*#__PURE__*/__webpack_require__.n(TrendingUp_);

// EXTERNAL MODULE: external "@material-ui/icons/Subject"
var Subject_ = __webpack_require__("7+h0");
var Subject_default = /*#__PURE__*/__webpack_require__.n(Subject_);

// EXTERNAL MODULE: external "@material-ui/icons/WatchLater"
var WatchLater_ = __webpack_require__("LiOz");
var WatchLater_default = /*#__PURE__*/__webpack_require__.n(WatchLater_);

// EXTERNAL MODULE: external "@material-ui/icons/Business"
var Business_ = __webpack_require__("XcKE");
var Business_default = /*#__PURE__*/__webpack_require__.n(Business_);

// EXTERNAL MODULE: external "@material-ui/icons/Delete"
var Delete_ = __webpack_require__("ng1p");
var Delete_default = /*#__PURE__*/__webpack_require__.n(Delete_);

// EXTERNAL MODULE: external "@material-ui/icons/Bookmark"
var Bookmark_ = __webpack_require__("dR5g");
var Bookmark_default = /*#__PURE__*/__webpack_require__.n(Bookmark_);

// EXTERNAL MODULE: external "@material-ui/icons/Refresh"
var Refresh_ = __webpack_require__("uQSa");
var Refresh_default = /*#__PURE__*/__webpack_require__.n(Refresh_);

// EXTERNAL MODULE: external "@material-ui/icons/Receipt"
var Receipt_ = __webpack_require__("RxNr");
var Receipt_default = /*#__PURE__*/__webpack_require__.n(Receipt_);

// EXTERNAL MODULE: ./components/Card/CardFooter.js + 1 modules
var CardFooter = __webpack_require__("5LSk");

// EXTERNAL MODULE: ./components/Card/CardAvatar.js + 1 modules
var CardAvatar = __webpack_require__("G2Vl");

// CONCATENATED MODULE: ./components/Typography/Rose.js
var Rose_jsx = external_react_default.a.createElement;
 // nodejs library to set properties for components

// @material-ui/core components
 // core components


const Rose_useStyles = Object(styles_["makeStyles"])(typographyStyle["a" /* default */]);
function Rose(props) {
  const {
    children
  } = props;
  const classes = Rose_useStyles();
  return Rose_jsx("div", {
    className: classes.defaultFontStyle + " " + classes.roseText
  }, children);
}
// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/rotatingCards.js

const style = {
  rotatingCardContainer: {
    perspective: "800px",
    "& $cardRotate $back": {
      transform: "rotateY(180deg)",
      zIndex: "5",
      textAlign: "center",
      width: "100%",
      height: "100%"
    },
    "&:not($manualRotate):hover $cardRotate": {
      transform: "rotateY(180deg)"
    },
    "&$manualRotate$activateRotate $cardRotate": {
      transform: "rotateY(180deg)"
    },
    "& $cardRotate $front": {
      zIndex: "2",
      position: "relative"
    },
    "& $cardRotate $front, & $cardRotate $back": {
      backfaceVisibility: "hidden",
      boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.12), 0 1px 5px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.2)",
      position: "absolute",
      backgroundColor: nextjs_material_tim_andrus["Z" /* whiteColor */],
      borderRadius: "6px",
      top: "0",
      left: "0",
      WebkitBoxPack: "center",
      MsFlexPack: "center",
      justifyContent: "center",
      MsFlexLinePack: "center",
      alignContent: "center",
      display: "flex",
      WebkitBoxOrient: "vertical",
      WebkitBoxDirection: "normal",
      flexDirection: "column"
    }
  },
  activateRotate: {},
  manualRotate: {},
  cardRotate: {
    transition: "all 0.8s cubic-bezier(0.34, 1.45, 0.7, 1)",
    transformStyle: "preserve-3d",
    position: "relative",
    background: "transparent"
  },
  front: {},
  back: {},
  wrapperBackground: {
    backgroundPosition: "50%",
    backgroundSize: "cover",
    textAlign: "center",
    "&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''",
      backgroundColor: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.56)",
      borderRadius: "6px"
    }
  },
  cardBodyRotate: {
    WebkitBoxPack: "center",
    MsFlexPack: "center",
    justifyContent: "center",
    MsFlexLinePack: "center",
    alignContent: "center",
    display: "flex",
    WebkitBoxOrient: "vertical",
    WebkitBoxDirection: "normal",
    flexDirection: "column"
  },
  wrapperPrimary: {
    background: "linear-gradient(60deg," + nextjs_material_tim_andrus["G" /* primaryColor */][1] + "," + nextjs_material_tim_andrus["G" /* primaryColor */][2] + ")",
    "& h1 small": {
      color: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Z" /* whiteColor */]) + ", 0.8)"
    },
    color: nextjs_material_tim_andrus["Z" /* whiteColor */]
  },
  wrapperInfo: {
    background: "linear-gradient(60deg," + nextjs_material_tim_andrus["w" /* infoColor */][1] + "," + nextjs_material_tim_andrus["w" /* infoColor */][2] + ")",
    color: nextjs_material_tim_andrus["Z" /* whiteColor */]
  },
  wrapperSuccess: {
    background: "linear-gradient(60deg," + nextjs_material_tim_andrus["R" /* successColor */][1] + "," + nextjs_material_tim_andrus["R" /* successColor */][2] + ")",
    color: nextjs_material_tim_andrus["Z" /* whiteColor */]
  },
  wrapperWarning: {
    background: "linear-gradient(60deg," + nextjs_material_tim_andrus["Y" /* warningColor */][1] + "," + nextjs_material_tim_andrus["Y" /* warningColor */][2] + ")",
    color: nextjs_material_tim_andrus["Z" /* whiteColor */]
  },
  wrapperDanger: {
    background: "linear-gradient(60deg," + nextjs_material_tim_andrus["l" /* dangerColor */][1] + "," + nextjs_material_tim_andrus["l" /* dangerColor */][2] + ")",
    color: nextjs_material_tim_andrus["Z" /* whiteColor */]
  },
  wrapperRose: {
    background: "linear-gradient(60deg," + nextjs_material_tim_andrus["K" /* roseColor */][1] + "," + nextjs_material_tim_andrus["K" /* roseColor */][2] + ")",
    color: nextjs_material_tim_andrus["Z" /* whiteColor */]
  }
};
/* harmony default export */ var rotatingCards = (style);
// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/pages/componentsSections/sectionCards.js
function sectionCards_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function sectionCards_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { sectionCards_ownKeys(Object(source), true).forEach(function (key) { sectionCards_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { sectionCards_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function sectionCards_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const sectionCards_styles = sectionCards_objectSpread({
  container: nextjs_material_tim_andrus["h" /* container */],
  coloredShadow: nextjs_material_tim_andrus["g" /* coloredShadow */],
  title: nextjs_material_tim_andrus["S" /* title */],
  mlAuto: nextjs_material_tim_andrus["B" /* mlAuto */],
  cardTitle: nextjs_material_tim_andrus["f" /* cardTitle */]
}, imagesStyles["a" /* default */], {}, rotatingCards, {
  sectionGray: {
    background: nextjs_material_tim_andrus["s" /* grayColor */][14]
  },
  sectionWhite: {
    background: nextjs_material_tim_andrus["Z" /* whiteColor */]
  },
  cardTitleAbsolute: sectionCards_objectSpread({}, nextjs_material_tim_andrus["f" /* cardTitle */], {
    position: "absolute !important",
    bottom: "15px !important",
    left: "15px !important",
    color: nextjs_material_tim_andrus["Z" /* whiteColor */] + " !important",
    fontSize: "1.125rem !important",
    textShadow: "0 2px 5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["s" /* grayColor */][9]) + ", 0.5) !important"
  }),
  cardTitleWhite: {
    "&, & a": sectionCards_objectSpread({}, nextjs_material_tim_andrus["S" /* title */], {
      marginTop: ".625rem",
      marginBottom: "0",
      minHeight: "auto",
      color: nextjs_material_tim_andrus["Z" /* whiteColor */] + " !important"
    })
  },
  cardCategory: {
    marginTop: "10px",
    "& svg": {
      position: "relative",
      top: "8px"
    }
  },
  cardCategorySocial: {
    marginTop: "10px",
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      fontSize: "22px",
      position: "relative",
      marginTop: "-4px",
      top: "2px",
      marginRight: "5px"
    },
    "& svg": {
      position: "relative",
      top: "5px"
    }
  },
  cardCategorySocialWhite: {
    marginTop: "10px",
    color: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Z" /* whiteColor */]) + ", 0.8)",
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      fontSize: "22px",
      position: "relative",
      marginTop: "-4px",
      top: "2px",
      marginRight: "5px"
    },
    "& svg": {
      position: "relative",
      top: "5px"
    }
  },
  cardCategoryWhite: {
    marginTop: "10px",
    color: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Z" /* whiteColor */]) + ", 0.7)"
  },
  cardCategoryFullWhite: {
    marginTop: "10px",
    color: nextjs_material_tim_andrus["Z" /* whiteColor */]
  },
  cardDescription: sectionCards_objectSpread({}, nextjs_material_tim_andrus["n" /* description */]),
  cardDescriptionWhite: {
    color: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Z" /* whiteColor */]) + ", 0.8)"
  },
  author: {
    display: "inline-flex",
    "& a": {
      color: nextjs_material_tim_andrus["s" /* grayColor */][1]
    }
  },
  authorWhite: {
    display: "inline-flex",
    "& a": {
      color: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Z" /* whiteColor */]) + ", 0.8)"
    }
  },
  avatar: {
    width: "30px",
    height: "30px",
    overflow: "hidden",
    borderRadius: "50%",
    marginRight: "5px"
  },
  statsWhite: {
    color: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Z" /* whiteColor */]) + ", 0.8)",
    display: "inline-flex",
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      top: "3px",
      marginRight: "3px",
      marginLeft: "3px",
      fontSize: "18px",
      lineHeight: "18px"
    },
    "& svg": {
      position: "relative",
      top: "3px",
      marginRight: "3px",
      marginLeft: "3px",
      width: "18px",
      height: "18px"
    }
  },
  stats: {
    color: nextjs_material_tim_andrus["s" /* grayColor */][0],
    display: "flex",
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      top: "3px",
      marginRight: "3px",
      marginLeft: "3px",
      fontSize: "18px",
      lineHeight: "18px"
    },
    "& svg": {
      position: "relative",
      top: "3px",
      marginRight: "3px",
      marginLeft: "3px",
      width: "18px",
      height: "18px"
    }
  },
  justifyContentCenter: {
    WebkitBoxPack: "center !important",
    MsFlexPack: "center !important",
    justifyContent: "center !important"
  },
  iconWrapper: {
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
  iconWrapperColor: {
    borderColor: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Z" /* whiteColor */]) + ", 0.25)"
  },
  iconWhite: {
    color: nextjs_material_tim_andrus["Z" /* whiteColor */]
  },
  iconRose: {
    color: nextjs_material_tim_andrus["K" /* roseColor */][0]
  },
  iconInfo: {
    color: nextjs_material_tim_andrus["w" /* infoColor */][0]
  },
  marginTop30: {
    marginTop: "30px"
  },
  textCenter: {
    textAlign: "center"
  },
  marginBottom20: {
    marginBottom: "20px"
  }
});

/* harmony default export */ var sectionCards = (sectionCards_styles);
// CONCATENATED MODULE: ./assets/img/examples/card-blog1.jpg
/* harmony default export */ var card_blog1 = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NhcmQtYmxvZzEuanBnIjs=");
// CONCATENATED MODULE: ./assets/img/examples/card-blog2.jpg
/* harmony default export */ var card_blog2 = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NhcmQtYmxvZzIuanBnIjs=");
// EXTERNAL MODULE: ./assets/img/examples/card-blog3.jpg
var card_blog3 = __webpack_require__("9Pkz");

// CONCATENATED MODULE: ./assets/img/examples/card-blog5.jpg
/* harmony default export */ var card_blog5 = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NhcmQtYmxvZzUuanBnIjs=");
// CONCATENATED MODULE: ./assets/img/examples/card-blog6.jpg
/* harmony default export */ var card_blog6 = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NhcmQtYmxvZzYuanBnIjs=");
// EXTERNAL MODULE: ./assets/img/examples/card-profile1.jpg
var card_profile1 = __webpack_require__("AG1V");

// EXTERNAL MODULE: ./assets/img/examples/card-profile4.jpg
var card_profile4 = __webpack_require__("xZn2");

// EXTERNAL MODULE: ./assets/img/examples/blog1.jpg
var blog1 = __webpack_require__("k3mB");

// EXTERNAL MODULE: ./assets/img/examples/blog5.jpg
var blog5 = __webpack_require__("YDgk");

// EXTERNAL MODULE: ./assets/img/examples/blog6.jpg
var blog6 = __webpack_require__("efrK");

// EXTERNAL MODULE: ./assets/img/examples/blog8.jpg
var blog8 = __webpack_require__("y1WB");

// EXTERNAL MODULE: ./assets/img/examples/office1.jpg
var office1 = __webpack_require__("vWjG");

// EXTERNAL MODULE: ./assets/img/examples/color1.jpg
var color1 = __webpack_require__("SDfx");

// EXTERNAL MODULE: ./assets/img/examples/color2.jpg
var color2 = __webpack_require__("dg73");

// EXTERNAL MODULE: ./assets/img/examples/color3.jpg
var color3 = __webpack_require__("p1B7");

// CONCATENATED MODULE: ./pages-sections/components/SectionCards.js
var SectionCards_jsx = external_react_default.a.createElement;
 // @material-ui/core components


 // @material-ui/icons















 // core components

































const SectionCards_useStyles = Object(styles_["makeStyles"])(sectionCards);
function SectionCards() {
  const [activeRotate1, setActiveRotate1] = external_react_default.a.useState("");
  const [activeRotate2, setActiveRotate2] = external_react_default.a.useState("");
  const [activeRotate3, setActiveRotate3] = external_react_default.a.useState("");
  const classes = SectionCards_useStyles();
  external_react_default.a.useEffect(() => {
    if (window) {
      window.addEventListener("resize", addStylesForRotatingCards);
    }

    addStylesForRotatingCards();
    return function cleanup() {
      if (window) {
        window.removeEventListener("resize", addStylesForRotatingCards);
      }
    };
  });

  const addStylesForRotatingCards = () => {
    var rotatingCards = document.getElementsByClassName(classes.cardRotate);

    for (let i = 0; i < rotatingCards.length; i++) {
      var rotatingCard = rotatingCards[i];
      var cardFront = rotatingCard.getElementsByClassName(classes.front)[0];
      var cardBack = rotatingCard.getElementsByClassName(classes.back)[0];
      cardFront.style.height = "unset";
      cardFront.style.width = "unset";
      cardBack.style.height = "unset";
      cardBack.style.width = "unset";
      var rotatingWrapper = rotatingCard.parentElement;
      var cardWidth = rotatingCard.parentElement.offsetWidth;
      var cardHeight = rotatingCard.children[0].children[0].offsetHeight;
      rotatingWrapper.style.height = cardHeight + "px";
      rotatingWrapper.style["margin-bottom"] = 30 + "px";
      cardFront.style.height = "unset";
      cardFront.style.width = "unset";
      cardBack.style.height = "unset";
      cardBack.style.width = "unset";
      cardFront.style.height = cardHeight + 35 + "px";
      cardFront.style.width = cardWidth + "px";
      cardBack.style.height = cardHeight + 35 + "px";
      cardBack.style.width = cardWidth + "px";
    }
  };

  return SectionCards_jsx("div", {
    className: "cd-section",
    id: "cards"
  }, SectionCards_jsx("div", {
    className: classes.sectionGray
  }, SectionCards_jsx("div", null, SectionCards_jsx("div", null, SectionCards_jsx("div", {
    className: classes.container
  }, SectionCards_jsx("div", {
    className: classes.title
  }, SectionCards_jsx("h2", null, "Cards"), SectionCards_jsx("h3", null, "Blog Cards")), SectionCards_jsx(GridContainer["a" /* default */], null, SectionCards_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 4
  }, SectionCards_jsx(Card["a" /* default */], {
    blog: true
  }, SectionCards_jsx(CardHeader["a" /* default */], {
    image: true
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionCards_jsx("img", {
    src: card_blog1,
    alt: "..."
  }), SectionCards_jsx("div", {
    className: classes.cardTitleAbsolute
  }, "This Summer Will be Awesome")), SectionCards_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${card_blog1})`,
      opacity: "1"
    }
  })), SectionCards_jsx(CardBody["a" /* default */], null, SectionCards_jsx(Info["a" /* default */], null, SectionCards_jsx("h6", {
    className: classes.cardCategory
  }, "FASHION")), SectionCards_jsx("div", {
    className: classes.cardDescription
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is..."))), SectionCards_jsx(Card["a" /* default */], {
    color: "info"
  }, SectionCards_jsx(CardBody["a" /* default */], {
    color: true
  }, SectionCards_jsx("h5", {
    className: classes.cardCategorySocialWhite
  }, SectionCards_jsx("i", {
    className: "fab fa-twitter"
  }), "Twitter"), SectionCards_jsx("h4", {
    className: classes.cardTitleWhite
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, '"', "You Don", "'", "t Have to Sacrifice Joy to Build a Fabulous Business and Life", '"'))), SectionCards_jsx(CardFooter["a" /* default */], null, SectionCards_jsx("div", {
    className: classes.authorWhite
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionCards_jsx("img", {
    src: faces_avatar["a" /* default */],
    alt: "...",
    className: classes.imgRaised + " " + classes.avatar
  }), SectionCards_jsx("span", null, "Tania Andrew"))), SectionCards_jsx("div", {
    className: classes.statsWhite + " " + classes.mlAuto
  }, SectionCards_jsx(Favorite_default.a, null), "2.4K \xB7", SectionCards_jsx(Share_default.a, null), "45")))), SectionCards_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 4
  }, SectionCards_jsx(Card["a" /* default */], null, SectionCards_jsx(CardBody["a" /* default */], null, SectionCards_jsx(Danger["a" /* default */], null, SectionCards_jsx("h6", {
    className: classes.cardCategory
  }, SectionCards_jsx(TrendingUp_default.a, null), " TRENDING")), SectionCards_jsx("h4", {
    className: classes.cardTitle
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, "To Grow Your Business Start Focusing on Your Employees"))), SectionCards_jsx(CardFooter["a" /* default */], null, SectionCards_jsx("div", {
    className: classes.author
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionCards_jsx("img", {
    src: christian["a" /* default */],
    alt: "...",
    className: classes.imgRaised + " " + classes.avatar
  }), SectionCards_jsx("span", null, "Lord Alex"))), SectionCards_jsx("div", {
    className: classes.stats + " " + classes.mlAuto
  }, SectionCards_jsx(Favorite_default.a, null), "345 \xB7", SectionCards_jsx(ChatBubble_default.a, null), "45"))), SectionCards_jsx(Card["a" /* default */], {
    blog: true
  }, SectionCards_jsx(CardHeader["a" /* default */], {
    image: true
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionCards_jsx("img", {
    src: card_blog2,
    alt: "..."
  })), SectionCards_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${card_blog2})`,
      opacity: "1"
    }
  })), SectionCards_jsx(CardBody["a" /* default */], null, SectionCards_jsx(Success["a" /* default */], null, SectionCards_jsx("h6", {
    className: classes.cardCategory
  }, "Legal")), SectionCards_jsx("h4", {
    className: classes.cardTitle
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, "5 Common Legal Mistakes That Can Trip-Up Your Startup")), SectionCards_jsx("p", {
    className: classes.cardDescription
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is...")), SectionCards_jsx(CardFooter["a" /* default */], null, SectionCards_jsx("div", {
    className: classes.author
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionCards_jsx("img", {
    src: marc["a" /* default */],
    alt: "...",
    className: classes.imgRaised + " " + classes.avatar
  }), SectionCards_jsx("span", null, "Mike John"))), SectionCards_jsx("div", {
    className: classes.stats + " " + classes.mlAuto
  }, SectionCards_jsx(Schedule_default.a, null), "5 min read")))), SectionCards_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 4
  }, SectionCards_jsx(Card["a" /* default */], {
    blog: true
  }, SectionCards_jsx(CardHeader["a" /* default */], {
    image: true
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionCards_jsx("img", {
    src: blog8["a" /* default */],
    alt: "..."
  })), SectionCards_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${blog8["a" /* default */]})`,
      opacity: "1"
    }
  })), SectionCards_jsx(CardBody["a" /* default */], null, SectionCards_jsx(Danger["a" /* default */], null, SectionCards_jsx("h6", {
    className: classes.cardCategory
  }, SectionCards_jsx(TrendingUp_default.a, null), " TRENDING")), SectionCards_jsx("h4", {
    className: classes.cardTitle
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, "To Grow Your Business Start Focusing on Your Employees"))), SectionCards_jsx(CardFooter["a" /* default */], null, SectionCards_jsx("div", {
    className: classes.author
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionCards_jsx("img", {
    src: marc["a" /* default */],
    alt: "...",
    className: classes.imgRaised + " " + classes.avatar
  }), SectionCards_jsx("span", null, "Mike John"))), SectionCards_jsx("div", {
    className: classes.stats + " " + classes.mlAuto
  }, SectionCards_jsx(Schedule_default.a, null), "5 min read"))), SectionCards_jsx(Card["a" /* default */], {
    color: "success"
  }, SectionCards_jsx(CardBody["a" /* default */], {
    color: true
  }, SectionCards_jsx("h5", {
    className: classes.cardCategorySocialWhite
  }, SectionCards_jsx("i", {
    className: "far fa-newspaper"
  }), "TechCrunch"), SectionCards_jsx("h4", {
    className: classes.cardTitleWhite
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, '"', "Focus on Your Employees", '"')), SectionCards_jsx("p", {
    className: classes.cardDescriptionWhite
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is..."), SectionCards_jsx("div", {
    className: classes.stats + " " + classes.justifyContentCenter
  }, SectionCards_jsx(Button["a" /* default */], {
    color: "white",
    round: true
  }, "Read Article")))))))), SectionCards_jsx("div", null, SectionCards_jsx("div", {
    className: classes.container
  }, SectionCards_jsx("div", {
    className: classes.title
  }, SectionCards_jsx("h3", null, "Profile Cards")), SectionCards_jsx(GridContainer["a" /* default */], null, SectionCards_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionCards_jsx(Card["a" /* default */], {
    profile: true
  }, SectionCards_jsx(CardHeader["a" /* default */], {
    image: true
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionCards_jsx("img", {
    src: card_profile4["a" /* default */],
    alt: "..."
  }), SectionCards_jsx("div", {
    className: classes.cardTitleAbsolute
  }, "Tania Andrew")), SectionCards_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${card_profile4["a" /* default */]})`,
      opacity: "1"
    }
  })), SectionCards_jsx(CardBody["a" /* default */], null, SectionCards_jsx(Info["a" /* default */], null, SectionCards_jsx("h6", {
    className: classes.cardCategory
  }, "WEB DESIGNER")), SectionCards_jsx("p", {
    className: classes.cardDescription
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is...")), SectionCards_jsx(CardFooter["a" /* default */], {
    profile: true,
    className: classes.justifyContentCenter
  }, SectionCards_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true,
    color: "twitter"
  }, SectionCards_jsx("i", {
    className: "fab fa-twitter"
  })), SectionCards_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true,
    color: "dribbble"
  }, SectionCards_jsx("i", {
    className: "fab fa-dribbble"
  })), SectionCards_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true,
    color: "instagram"
  }, SectionCards_jsx("i", {
    className: "fab fa-instagram"
  }))))), SectionCards_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionCards_jsx(Card["a" /* default */], {
    profile: true
  }, SectionCards_jsx(CardHeader["a" /* default */], {
    image: true
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionCards_jsx("img", {
    src: card_profile1["a" /* default */],
    alt: "..."
  })), SectionCards_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${card_profile1["a" /* default */]})`,
      opacity: "1"
    }
  })), SectionCards_jsx(CardBody["a" /* default */], null, SectionCards_jsx("h4", {
    className: classes.cardTitle
  }, "Alec Thompson"), SectionCards_jsx("h6", {
    className: classes.cardCategory + " " + classes.cardDescription
  }, "CEO / CO-FOUNDER")), SectionCards_jsx(CardFooter["a" /* default */], {
    profile: true,
    className: classes.justifyContentCenter
  }, SectionCards_jsx(Button["a" /* default */], {
    justIcon: true,
    round: true,
    color: "twitter"
  }, SectionCards_jsx("i", {
    className: "fab fa-twitter"
  })), SectionCards_jsx(Button["a" /* default */], {
    justIcon: true,
    round: true,
    color: "facebook"
  }, SectionCards_jsx("i", {
    className: "fab fa-facebook"
  })), SectionCards_jsx(Button["a" /* default */], {
    justIcon: true,
    round: true,
    color: "google"
  }, SectionCards_jsx("i", {
    className: "fab fa-google"
  }))))), SectionCards_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionCards_jsx(Card["a" /* default */], {
    profile: true
  }, SectionCards_jsx(CardAvatar["a" /* default */], {
    profile: true
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionCards_jsx("img", {
    src: marc["a" /* default */],
    alt: "..."
  }))), SectionCards_jsx(CardBody["a" /* default */], null, SectionCards_jsx("h6", {
    className: classes.cardCategory + " " + classes.cardDescription
  }, "CEO / CO-FOUNDER"), SectionCards_jsx("h4", {
    className: classes.cardTitle
  }, "Alec Thompson"), SectionCards_jsx("p", {
    className: classes.cardDescription
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is..."), SectionCards_jsx(Button["a" /* default */], {
    round: true,
    color: "info"
  }, "Follow"))))))), SectionCards_jsx("div", null, SectionCards_jsx("div", {
    className: classes.container
  }, SectionCards_jsx("div", {
    className: classes.title
  }, SectionCards_jsx("h3", null, "Full Background Cards")), SectionCards_jsx(GridContainer["a" /* default */], null, SectionCards_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, SectionCards_jsx(Card["a" /* default */], {
    background: true,
    style: {
      backgroundImage: `url(${office1["a" /* default */]})`
    }
  }, SectionCards_jsx(CardBody["a" /* default */], {
    background: true
  }, SectionCards_jsx("h6", {
    className: classes.cardCategoryWhite
  }, "PRODUCTIVITY APPS"), SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionCards_jsx("h3", {
    className: classes.cardTitleWhite
  }, "The Best Productivity Apps on Market")), SectionCards_jsx("p", {
    className: classes.cardDescriptionWhite
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is..."), SectionCards_jsx(Button["a" /* default */], {
    simple: true,
    color: "white"
  }, SectionCards_jsx(Subject_default.a, null), " Read Article"), SectionCards_jsx(Button["a" /* default */], {
    simple: true,
    color: "white"
  }, SectionCards_jsx(WatchLater_default.a, null), " Watch Later")))), SectionCards_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, SectionCards_jsx(Card["a" /* default */], {
    background: true,
    style: {
      backgroundImage: `url(${card_blog3["a" /* default */]})`
    }
  }, SectionCards_jsx(CardBody["a" /* default */], {
    background: true
  }, SectionCards_jsx("h6", {
    className: classes.cardCategoryWhite
  }, "MATERIALS"), SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionCards_jsx("h3", {
    className: classes.cardTitleWhite
  }, "The Sculpture Where Details Matter")), SectionCards_jsx("p", {
    className: classes.cardDescriptionWhite
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is..."), SectionCards_jsx(Button["a" /* default */], {
    round: true,
    color: "danger"
  }, SectionCards_jsx(Subject_default.a, null), " Read Article"))))))), SectionCards_jsx("div", null, SectionCards_jsx("div", {
    className: classes.container
  }, SectionCards_jsx("div", {
    className: classes.title
  }, SectionCards_jsx("h3", null, "Pricing Cards")), SectionCards_jsx(GridContainer["a" /* default */], null, SectionCards_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 3
  }, SectionCards_jsx(Card["a" /* default */], {
    pricing: true
  }, SectionCards_jsx(CardBody["a" /* default */], {
    pricing: true
  }, SectionCards_jsx("h6", {
    className: classes.cardCategory + " " + classes.cardDescription + " " + classes.marginBottom20
  }, "SMALL COMPANY"), SectionCards_jsx("div", {
    className: classes.iconWrapper
  }, SectionCards_jsx(People_default.a, {
    className: classes.iconInfo
  })), SectionCards_jsx("h3", {
    className: classes.cardTitle + " " + classes.marginTop30
  }, "$29"), SectionCards_jsx("p", {
    className: classes.cardDescription
  }, "This is good if your company size is between 2 and 10 Persons."), SectionCards_jsx(Button["a" /* default */], {
    round: true,
    color: "info"
  }, "Choose plan")))), SectionCards_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 3
  }, SectionCards_jsx(Card["a" /* default */], {
    pricing: true,
    color: "primary"
  }, SectionCards_jsx(CardBody["a" /* default */], {
    pricing: true
  }, SectionCards_jsx("div", {
    className: classes.iconWrapper + " " + classes.iconWrapperColor
  }, SectionCards_jsx(Business_default.a, {
    className: classes.iconWhite
  })), SectionCards_jsx("h3", {
    className: classes.cardTitleWhite + " " + classes.marginTop30
  }, "$69"), SectionCards_jsx("p", {
    className: classes.cardDescriptionWhite
  }, "This is good if your company size is between 11 and 99 Persons."), SectionCards_jsx(Button["a" /* default */], {
    round: true,
    color: "white"
  }, "Choose plan")))), SectionCards_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 3
  }, SectionCards_jsx(Card["a" /* default */], {
    pricing: true,
    background: true,
    style: {
      backgroundImage: `url(${card_blog3["a" /* default */]})`
    }
  }, SectionCards_jsx(CardBody["a" /* default */], {
    pricing: true,
    background: true
  }, SectionCards_jsx("h6", {
    className: classes.cardCategoryFullWhite
  }, "PREMIUM"), SectionCards_jsx("h1", {
    className: classes.cardTitleWhite
  }, SectionCards_jsx("small", null, "$"), "89"), SectionCards_jsx("ul", null, SectionCards_jsx("li", null, SectionCards_jsx("b", null, "100"), " Projects"), SectionCards_jsx("li", null, SectionCards_jsx("b", null, "5"), " Team Members"), SectionCards_jsx("li", null, SectionCards_jsx("b", null, "55"), " Personal Contacts"), SectionCards_jsx("li", null, SectionCards_jsx("b", null, "5.000"), " Messages")), SectionCards_jsx(Button["a" /* default */], {
    color: "danger"
  }, "Get Started")))), SectionCards_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 3
  }, SectionCards_jsx(Card["a" /* default */], {
    pricing: true
  }, SectionCards_jsx(CardBody["a" /* default */], {
    pricing: true
  }, SectionCards_jsx(Success["a" /* default */], null, SectionCards_jsx("h6", {
    className: classes.cardCategory
  }, "PLATINUM")), SectionCards_jsx("h1", {
    className: classes.cardTitle
  }, SectionCards_jsx("small", null, "$"), "89"), SectionCards_jsx("ul", null, SectionCards_jsx("li", null, SectionCards_jsx(Success["a" /* default */], null, SectionCards_jsx(Check_default.a, null)), " ", "Sharing Tools"), SectionCards_jsx("li", null, SectionCards_jsx(Success["a" /* default */], null, SectionCards_jsx(Check_default.a, null)), " ", "Design Tools"), SectionCards_jsx("li", null, SectionCards_jsx(Danger["a" /* default */], null, SectionCards_jsx(Close_default.a, null)), " ", "Private Messages"), SectionCards_jsx("li", null, SectionCards_jsx(Danger["a" /* default */], null, SectionCards_jsx(Close_default.a, null)), " ", "Personal Brand")), SectionCards_jsx(Button["a" /* default */], {
    color: "primary",
    round: true
  }, "Get Started")))))))), SectionCards_jsx("div", {
    id: "morphingCards",
    className: "cd-section"
  }, SectionCards_jsx("div", {
    className: classes.container
  }, SectionCards_jsx("div", {
    className: classes.title
  }, SectionCards_jsx("h2", null, "Morphing Cards"), SectionCards_jsx("h3", null, "Rotating Cards")), SectionCards_jsx(GridContainer["a" /* default */], null, SectionCards_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 4
  }, SectionCards_jsx("div", {
    className: classes.rotatingCardContainer
  }, SectionCards_jsx(Card["a" /* default */], {
    background: true,
    className: classes.cardRotate
  }, SectionCards_jsx("div", {
    className: classes.front + " " + classes.wrapperBackground,
    style: {
      backgroundImage: `url(${card_blog5})`
    }
  }, SectionCards_jsx(CardBody["a" /* default */], {
    background: true,
    className: classes.cardBodyRotate
  }, SectionCards_jsx("h6", {
    className: classes.cardCategoryWhite
  }, "Full Background Card"), SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionCards_jsx("h3", {
    className: classes.cardTitleWhite
  }, "This Background Card Will Rotate on Hover")), SectionCards_jsx("p", {
    className: classes.cardDescriptionWhite
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is..."))), SectionCards_jsx("div", {
    className: classes.back + " " + classes.wrapperBackground,
    style: {
      backgroundImage: `url(${card_blog5})`
    }
  }, SectionCards_jsx(CardBody["a" /* default */], {
    background: true,
    className: classes.cardBodyRotate
  }, SectionCards_jsx("h5", {
    className: classes.cardTitleWhite
  }, "Manage Post"), SectionCards_jsx("p", {
    className: classes.cardDescriptionWhite
  }, "As an Admin, you have shortcuts to edit, view or delete the posts."), SectionCards_jsx("div", {
    className: classes.textCenter
  }, SectionCards_jsx(Button["a" /* default */], {
    round: true,
    justIcon: true,
    color: "info"
  }, SectionCards_jsx(Subject_default.a, null)), SectionCards_jsx(Button["a" /* default */], {
    round: true,
    justIcon: true,
    color: "success"
  }, SectionCards_jsx(Icon_default.a, null, "mode_edit")), SectionCards_jsx(Button["a" /* default */], {
    round: true,
    justIcon: true,
    color: "danger"
  }, SectionCards_jsx(Delete_default.a, null)))))))), SectionCards_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 4
  }, SectionCards_jsx("div", {
    className: classes.rotatingCardContainer
  }, SectionCards_jsx(Card["a" /* default */], {
    className: classes.cardRotate
  }, SectionCards_jsx("div", {
    className: classes.front
  }, SectionCards_jsx(CardBody["a" /* default */], {
    className: classes.cardBodyRotate
  }, SectionCards_jsx(Success["a" /* default */], null, SectionCards_jsx("h5", {
    className: classes.cardCategorySocial
  }, SectionCards_jsx("i", {
    className: "far fa-newspaper"
  }), "TechCrunch")), SectionCards_jsx("h4", {
    className: classes.cardTitle
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, "This Card is Doing a Full Rotation on Hover...")), SectionCards_jsx("p", {
    className: classes.cardDescription
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is..."))), SectionCards_jsx("div", {
    className: classes.back
  }, SectionCards_jsx(CardBody["a" /* default */], {
    className: classes.cardBodyRotate
  }, SectionCards_jsx("h5", {
    className: classes.cardTitle
  }, "Do more..."), SectionCards_jsx("p", {
    className: classes.cardDescription
  }, "You can read this article or share it with your friends and family on different networks..."), SectionCards_jsx("div", {
    className: classes.textCenter
  }, SectionCards_jsx(Button["a" /* default */], {
    round: true,
    color: "rose"
  }, SectionCards_jsx(Subject_default.a, null), " Read"), SectionCards_jsx(Button["a" /* default */], {
    round: true,
    justIcon: true,
    color: "twitter"
  }, SectionCards_jsx("i", {
    className: "fab fa-twitter"
  })), SectionCards_jsx(Button["a" /* default */], {
    round: true,
    justIcon: true,
    color: "dribbble"
  }, SectionCards_jsx("i", {
    className: "fab fa-dribbble"
  })), SectionCards_jsx(Button["a" /* default */], {
    round: true,
    justIcon: true,
    color: "facebook"
  }, SectionCards_jsx("i", {
    className: "fab fa-facebook"
  })))))))), SectionCards_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 4
  }, SectionCards_jsx("div", {
    className: classes.rotatingCardContainer
  }, SectionCards_jsx(Card["a" /* default */], {
    color: "rose",
    className: classes.cardRotate
  }, SectionCards_jsx("div", {
    className: classes.front + " " + classes.wrapperRose
  }, SectionCards_jsx(CardBody["a" /* default */], {
    color: true,
    className: classes.cardBodyRotate
  }, SectionCards_jsx("h5", {
    className: classes.cardCategorySocialWhite
  }, SectionCards_jsx("i", {
    className: "fab fa-dribbble"
  }), " Dribbble"), SectionCards_jsx("h4", {
    className: classes.cardTitleWhite
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, '"', "Dribbble just acquired Crew, a very interesting startup...", '"')), SectionCards_jsx("p", {
    className: classes.cardDescriptionWhite
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is...")), SectionCards_jsx(CardFooter["a" /* default */], null, SectionCards_jsx("div", {
    className: classes.authorWhite
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionCards_jsx("img", {
    src: faces_avatar["a" /* default */],
    alt: "...",
    className: classes.imgRaised + " " + classes.avatar
  }), SectionCards_jsx("span", null, "Tania Andrew"))), SectionCards_jsx("div", {
    className: classes.statsWhite + " " + classes.mlAuto
  }, SectionCards_jsx(Favorite_default.a, null), "2.4K \xB7", SectionCards_jsx(Share_default.a, null), "45"))), SectionCards_jsx("div", {
    className: classes.back + " " + classes.wrapperRose
  }, SectionCards_jsx(CardBody["a" /* default */], {
    className: classes.cardBodyRotate
  }, SectionCards_jsx("h5", {
    className: classes.cardCategorySocialWhite
  }, SectionCards_jsx("i", {
    className: "fab fa-dribbble"
  }), " Dribbble"), SectionCards_jsx("h4", {
    className: classes.cardTitleWhite
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, '"', "Dribbble just acquired Crew, a very interesting startup...", '"')), SectionCards_jsx("div", null, SectionCards_jsx(Button["a" /* default */], {
    round: true,
    color: "white"
  }, SectionCards_jsx(Subject_default.a, null), " Read"), SectionCards_jsx(Button["a" /* default */], {
    simple: true,
    color: "white"
  }, SectionCards_jsx(Bookmark_default.a, null), " Bookmark")))))))), SectionCards_jsx("div", {
    className: classes.title
  }, SectionCards_jsx("h3", null, "Manual Rotating Cards")), SectionCards_jsx(GridContainer["a" /* default */], null, SectionCards_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 4
  }, SectionCards_jsx("div", {
    className: classes.rotatingCardContainer + " " + classes.manualRotate + " " + activeRotate1
  }, SectionCards_jsx(Card["a" /* default */], {
    className: classes.cardRotate
  }, SectionCards_jsx("div", {
    className: classes.front
  }, SectionCards_jsx(CardBody["a" /* default */], {
    className: classes.cardBodyRotate
  }, SectionCards_jsx(Success["a" /* default */], null, SectionCards_jsx("h5", {
    className: classes.cardCategorySocial
  }, SectionCards_jsx("i", {
    className: "far fa-newspaper"
  }), " Manual Rotating Card")), SectionCards_jsx("h4", {
    className: classes.cardTitle
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, '"', "This card is doing a full rotation, click on the rotate button", '"')), SectionCards_jsx("p", {
    className: classes.cardDescription
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is..."), SectionCards_jsx("div", {
    className: classes.textCenter
  }, SectionCards_jsx(Button["a" /* default */], {
    round: true,
    color: "success",
    onClick: () => setActiveRotate1(classes.activateRotate)
  }, SectionCards_jsx(Refresh_default.a, null), " Rotate")))), SectionCards_jsx("div", {
    className: classes.back
  }, SectionCards_jsx(CardBody["a" /* default */], {
    className: classes.cardBodyRotate
  }, SectionCards_jsx("h5", {
    className: classes.cardTitle
  }, "Do more..."), SectionCards_jsx("p", {
    className: classes.cardDescription
  }, "You can read this article or share it with your friends and family on different networks..."), SectionCards_jsx("div", {
    className: classes.textCenter
  }, SectionCards_jsx(Button["a" /* default */], {
    round: true,
    color: "rose"
  }, SectionCards_jsx(Subject_default.a, null), " Read"), SectionCards_jsx(Button["a" /* default */], {
    round: true,
    justIcon: true,
    color: "twitter"
  }, SectionCards_jsx("i", {
    className: "fab fa-twitter"
  })), SectionCards_jsx(Button["a" /* default */], {
    round: true,
    justIcon: true,
    color: "dribbble"
  }, SectionCards_jsx("i", {
    className: "fab fa-dribbble"
  })), SectionCards_jsx(Button["a" /* default */], {
    round: true,
    justIcon: true,
    color: "facebook"
  }, SectionCards_jsx("i", {
    className: "fab fa-facebook"
  }))), SectionCards_jsx("br", null), SectionCards_jsx(Button["a" /* default */], {
    link: true,
    onClick: () => setActiveRotate1("")
  }, SectionCards_jsx(Refresh_default.a, null), " Back...")))))), SectionCards_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 4
  }, SectionCards_jsx("div", {
    className: classes.rotatingCardContainer + " " + classes.manualRotate + " " + activeRotate2
  }, SectionCards_jsx(Card["a" /* default */], {
    className: classes.cardRotate
  }, SectionCards_jsx("div", {
    className: classes.front + " " + classes.wrapperBackground,
    style: {
      backgroundImage: `url(${card_blog6})`
    }
  }, SectionCards_jsx(CardBody["a" /* default */], {
    background: true,
    className: classes.cardBodyRotate
  }, SectionCards_jsx("h6", {
    className: classes.cardCategoryWhite
  }, "Full Background Card"), SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionCards_jsx("h3", {
    className: classes.cardTitleWhite
  }, "This card is doing a full rotation, click on the rotate button")), SectionCards_jsx("p", {
    className: classes.cardDescriptionWhite
  }, "Don", "'", "t be scared of the truth because I need to restart the human..."), SectionCards_jsx("div", {
    className: classes.textCenter
  }, SectionCards_jsx(Button["a" /* default */], {
    round: true,
    color: "danger",
    onClick: () => setActiveRotate2(classes.activateRotate)
  }, SectionCards_jsx(Refresh_default.a, null), " Rotate")))), SectionCards_jsx("div", {
    className: classes.back + " " + classes.wrapperBackground,
    style: {
      backgroundImage: `url(${card_blog6})`
    }
  }, SectionCards_jsx(CardBody["a" /* default */], {
    background: true,
    className: classes.cardBodyRotate
  }, SectionCards_jsx("h5", {
    className: classes.cardTitleWhite
  }, "Manage Post"), SectionCards_jsx("p", {
    className: classes.cardDescriptionWhite
  }, "As an Admin, you have shortcuts to edit, view or delete the posts."), SectionCards_jsx("div", {
    className: classes.textCenter
  }, SectionCards_jsx(Button["a" /* default */], {
    round: true,
    justIcon: true,
    color: "info"
  }, SectionCards_jsx(Subject_default.a, null)), SectionCards_jsx(Button["a" /* default */], {
    round: true,
    justIcon: true,
    color: "success"
  }, SectionCards_jsx(Icon_default.a, null, "mode_edit")), SectionCards_jsx(Button["a" /* default */], {
    round: true,
    justIcon: true,
    color: "danger"
  }, SectionCards_jsx(Delete_default.a, null)), SectionCards_jsx("br", null), SectionCards_jsx("br", null), SectionCards_jsx(Button["a" /* default */], {
    round: true,
    color: "danger",
    onClick: () => setActiveRotate2("")
  }, SectionCards_jsx(Refresh_default.a, null), " Back..."))))))), SectionCards_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 4
  }, SectionCards_jsx("div", {
    className: classes.rotatingCardContainer + " " + classes.manualRotate + " " + activeRotate3
  }, SectionCards_jsx(Card["a" /* default */], {
    className: classes.cardRotate
  }, SectionCards_jsx("div", {
    className: classes.front + " " + classes.wrapperWarning
  }, SectionCards_jsx(CardBody["a" /* default */], {
    className: classes.cardBodyRotate
  }, SectionCards_jsx("h5", {
    className: classes.cardCategorySocialWhite
  }, SectionCards_jsx(Receipt_default.a, null), " Manual Rotating Card"), SectionCards_jsx("h4", {
    className: classes.cardTitleWhite
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, '"', "This card is doing a full rotation, click on the rotate button", '"')), SectionCards_jsx("p", {
    className: classes.cardDescriptionWhite
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is..."), SectionCards_jsx("div", {
    className: classes.textCenter
  }, SectionCards_jsx(Button["a" /* default */], {
    round: true,
    color: "white",
    onClick: () => setActiveRotate3(classes.activateRotate)
  }, SectionCards_jsx(Refresh_default.a, null), " Rotate")))), SectionCards_jsx("div", {
    className: classes.back + " " + classes.wrapperWarning
  }, SectionCards_jsx(CardBody["a" /* default */], {
    className: classes.cardBodyRotate
  }, SectionCards_jsx("h5", {
    className: classes.cardTitleWhite
  }, "Do more..."), SectionCards_jsx("p", {
    className: classes.cardDescriptionWhite
  }, "You can read this article or share it with your friends and family on different networks..."), SectionCards_jsx("div", {
    className: classes.textCenter
  }, SectionCards_jsx(Button["a" /* default */], {
    round: true,
    color: "white"
  }, SectionCards_jsx(Subject_default.a, null), " Read"), SectionCards_jsx(Button["a" /* default */], {
    round: true,
    justIcon: true,
    color: "white"
  }, SectionCards_jsx("i", {
    className: "fab fa-twitter"
  })), SectionCards_jsx(Button["a" /* default */], {
    round: true,
    justIcon: true,
    color: "white"
  }, SectionCards_jsx("i", {
    className: "fab fa-dribbble"
  })), SectionCards_jsx(Button["a" /* default */], {
    round: true,
    justIcon: true,
    color: "white"
  }, SectionCards_jsx("i", {
    className: "fab fa-facebook"
  })), SectionCards_jsx("br", null), SectionCards_jsx("br", null), SectionCards_jsx(Button["a" /* default */], {
    round: true,
    color: "white",
    onClick: () => setActiveRotate3("")
  }, SectionCards_jsx(Refresh_default.a, null), " Rotate")))))))))), SectionCards_jsx("div", {
    className: classes.container
  }, SectionCards_jsx(GridContainer["a" /* default */], null, SectionCards_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 7,
    md: 7
  }, SectionCards_jsx("div", {
    className: classes.title
  }, SectionCards_jsx("h2", null, "Dynamic Shadows\u2122"), SectionCards_jsx("h4", null, "Material Kit Tim is coming with the famous colored shadows. That means each image from the cards is getting an unique color shadow. You don", "'", "t have to do anything to activate them, just enjoy the new look of your website."), SectionCards_jsx("br", null)))), SectionCards_jsx(GridContainer["a" /* default */], null, SectionCards_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionCards_jsx(Card["a" /* default */], {
    blog: true
  }, SectionCards_jsx(CardHeader["a" /* default */], {
    image: true
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionCards_jsx("img", {
    src: color1["a" /* default */],
    alt: "..."
  })), SectionCards_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${color1["a" /* default */]})`,
      opacity: "1"
    }
  })), SectionCards_jsx(CardBody["a" /* default */], null, SectionCards_jsx(Warning["a" /* default */], null, SectionCards_jsx("h6", {
    className: classes.cardCategory
  }, "DYNAMIC SHADOWS")), SectionCards_jsx("h4", {
    className: classes.cardTitle
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, "The image from this card is getting a yellow shadow"))))), SectionCards_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionCards_jsx(Card["a" /* default */], {
    blog: true
  }, SectionCards_jsx(CardHeader["a" /* default */], {
    image: true
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionCards_jsx("img", {
    src: color2["a" /* default */],
    alt: "..."
  })), SectionCards_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${color2["a" /* default */]})`,
      opacity: "1"
    }
  })), SectionCards_jsx(CardBody["a" /* default */], null, SectionCards_jsx(Rose, null, SectionCards_jsx("h6", {
    className: classes.cardCategory
  }, "DYNAMIC SHADOWS")), SectionCards_jsx("h4", {
    className: classes.cardTitle
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, "The image from this card is getting a pink shadow"))))), SectionCards_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionCards_jsx(Card["a" /* default */], {
    blog: true
  }, SectionCards_jsx(CardHeader["a" /* default */], {
    image: true
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionCards_jsx("img", {
    src: color3["a" /* default */],
    alt: "..."
  })), SectionCards_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${color3["a" /* default */]})`,
      opacity: "1"
    }
  })), SectionCards_jsx(CardBody["a" /* default */], null, SectionCards_jsx(Info["a" /* default */], null, SectionCards_jsx("h6", {
    className: classes.cardCategory
  }, "DYNAMIC SHADOWS")), SectionCards_jsx("h4", {
    className: classes.cardTitle
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, "The image from this card is getting a blue shadow")))))))), SectionCards_jsx("div", {
    className: classes.sectionWhite
  }, SectionCards_jsx("div", null, SectionCards_jsx("div", {
    className: classes.container
  }, SectionCards_jsx("div", {
    className: classes.title
  }, SectionCards_jsx("h3", null, "Plain Card")), SectionCards_jsx(GridContainer["a" /* default */], null, SectionCards_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 4
  }, SectionCards_jsx(Card["a" /* default */], {
    blog: true,
    plain: true
  }, SectionCards_jsx(CardHeader["a" /* default */], {
    image: true,
    plain: true
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionCards_jsx("img", {
    src: blog5["a" /* default */],
    alt: "..."
  }), SectionCards_jsx("div", {
    className: classes.cardTitleAbsolute
  }, "This Summer Will be Awesome")), SectionCards_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${blog5["a" /* default */]})`,
      opacity: "1"
    }
  })), SectionCards_jsx(CardBody["a" /* default */], {
    plain: true
  }, SectionCards_jsx(Info["a" /* default */], null, SectionCards_jsx("h6", {
    className: classes.cardCategory
  }, "FASHION")), SectionCards_jsx("div", {
    className: classes.cardDescription
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is..."))), SectionCards_jsx(Card["a" /* default */], {
    color: "info"
  }, SectionCards_jsx(CardBody["a" /* default */], {
    color: true
  }, SectionCards_jsx("h5", {
    className: classes.cardCategorySocialWhite
  }, SectionCards_jsx("i", {
    className: "fab fa-twitter"
  }), "Twitter"), SectionCards_jsx("h4", {
    className: classes.cardTitleWhite
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, '"', "You Don", "'", "t Have to Sacrifice Joy to Build a Fabulous Business and Life", '"'))), SectionCards_jsx(CardFooter["a" /* default */], null, SectionCards_jsx("div", {
    className: classes.authorWhite
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionCards_jsx("img", {
    src: faces_avatar["a" /* default */],
    alt: "...",
    className: classes.imgRaised + " " + classes.avatar
  }), SectionCards_jsx("span", null, "Tania Andrew"))), SectionCards_jsx("div", {
    className: classes.statsWhite + " " + classes.mlAuto
  }, SectionCards_jsx(Favorite_default.a, null), "2.4K \xB7", SectionCards_jsx(Share_default.a, null), "45")))), SectionCards_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 4
  }, SectionCards_jsx(Card["a" /* default */], {
    blog: true,
    plain: true
  }, SectionCards_jsx(CardHeader["a" /* default */], {
    image: true,
    plain: true
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionCards_jsx("img", {
    src: blog1["a" /* default */],
    alt: "..."
  })), SectionCards_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${blog1["a" /* default */]})`,
      opacity: "1"
    }
  })), SectionCards_jsx(CardBody["a" /* default */], {
    plain: true
  }, SectionCards_jsx(Success["a" /* default */], null, SectionCards_jsx("h6", {
    className: classes.cardCategory
  }, "Legal")), SectionCards_jsx("h4", {
    className: classes.cardTitle
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, "5 Common Legal Mistakes That Can Trip-Up Your Startup")), SectionCards_jsx("p", {
    className: classes.cardDescription
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is...")), SectionCards_jsx(CardFooter["a" /* default */], {
    plain: true
  }, SectionCards_jsx("div", {
    className: classes.author
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionCards_jsx("img", {
    src: marc["a" /* default */],
    alt: "...",
    className: classes.imgRaised + " " + classes.avatar
  }), SectionCards_jsx("span", null, "Mike John"))), SectionCards_jsx("div", {
    className: classes.stats + " " + classes.mlAuto
  }, SectionCards_jsx(Schedule_default.a, null), "5 min read")))), SectionCards_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 4
  }, SectionCards_jsx(Card["a" /* default */], {
    blog: true,
    plain: true
  }, SectionCards_jsx(CardHeader["a" /* default */], {
    image: true,
    plain: true
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionCards_jsx("img", {
    src: blog6["a" /* default */],
    alt: "..."
  })), SectionCards_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${blog6["a" /* default */]})`,
      opacity: "1"
    }
  })), SectionCards_jsx(CardBody["a" /* default */], {
    plain: true
  }, SectionCards_jsx(Danger["a" /* default */], null, SectionCards_jsx("h6", {
    className: classes.cardCategory
  }, SectionCards_jsx(TrendingUp_default.a, null), " TRENDING")), SectionCards_jsx("h4", {
    className: classes.cardTitle
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, "To Grow Your Business Start Focusing on Your Employees"))), SectionCards_jsx(CardFooter["a" /* default */], {
    plain: true
  }, SectionCards_jsx("div", {
    className: classes.author
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionCards_jsx("img", {
    src: marc["a" /* default */],
    alt: "...",
    className: classes.imgRaised + " " + classes.avatar
  }), SectionCards_jsx("span", null, "Mike John"))), SectionCards_jsx("div", {
    className: classes.stats + " " + classes.mlAuto
  }, SectionCards_jsx(Schedule_default.a, null), "5 min read"))), SectionCards_jsx(Card["a" /* default */], {
    color: "danger"
  }, SectionCards_jsx(CardBody["a" /* default */], {
    color: true
  }, SectionCards_jsx("h5", {
    className: classes.cardCategorySocialWhite
  }, SectionCards_jsx("i", {
    className: "far fa-newspaper"
  }), " The Next Web"), SectionCards_jsx("h4", {
    className: classes.cardTitleWhite
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, '"', "Focus on Your Employees", '"')), SectionCards_jsx("p", {
    className: classes.cardDescriptionWhite
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is..."), SectionCards_jsx("div", {
    className: classes.stats + " " + classes.justifyContentCenter
  }, SectionCards_jsx(Button["a" /* default */], {
    color: "white",
    round: true
  }, "Read Article")))))))), SectionCards_jsx("div", null, SectionCards_jsx("div", {
    className: classes.container
  }, SectionCards_jsx(GridContainer["a" /* default */], null, SectionCards_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionCards_jsx(Card["a" /* default */], {
    profile: true,
    plain: true
  }, SectionCards_jsx(CardHeader["a" /* default */], {
    image: true,
    plain: true
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionCards_jsx("img", {
    src: card_profile4["a" /* default */],
    alt: "..."
  }), SectionCards_jsx("div", {
    className: classes.cardTitleAbsolute
  }, "Tania Andrew")), SectionCards_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${card_profile4["a" /* default */]})`,
      opacity: "1"
    }
  })), SectionCards_jsx(CardBody["a" /* default */], {
    plain: true
  }, SectionCards_jsx(Info["a" /* default */], null, SectionCards_jsx("h6", {
    className: classes.cardCategory
  }, "WEB DESIGNER")), SectionCards_jsx("p", {
    className: classes.cardDescription
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is...")), SectionCards_jsx(CardFooter["a" /* default */], {
    profile: true,
    plain: true,
    className: classes.justifyContentCenter
  }, SectionCards_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true,
    color: "twitter"
  }, SectionCards_jsx("i", {
    className: "fab fa-twitter"
  })), SectionCards_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true,
    color: "dribbble"
  }, SectionCards_jsx("i", {
    className: "fab fa-dribbble"
  })), SectionCards_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true,
    color: "instagram"
  }, SectionCards_jsx("i", {
    className: "fab fa-instagram"
  }))))), SectionCards_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionCards_jsx(Card["a" /* default */], {
    profile: true,
    plain: true
  }, SectionCards_jsx(CardHeader["a" /* default */], {
    image: true,
    plain: true
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionCards_jsx("img", {
    src: card_profile1["a" /* default */],
    alt: "..."
  })), SectionCards_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${card_profile1["a" /* default */]})`,
      opacity: "1"
    }
  })), SectionCards_jsx(CardBody["a" /* default */], {
    plain: true
  }, SectionCards_jsx("h4", {
    className: classes.cardTitle
  }, "Alec Thompson"), SectionCards_jsx("h6", {
    className: classes.cardCategory + " " + classes.cardDescription
  }, "CEO / CO-FOUNDER")), SectionCards_jsx(CardFooter["a" /* default */], {
    profile: true,
    plain: true,
    className: classes.justifyContentCenter
  }, SectionCards_jsx(Button["a" /* default */], {
    justIcon: true,
    round: true,
    color: "twitter"
  }, SectionCards_jsx("i", {
    className: "fab fa-twitter"
  })), SectionCards_jsx(Button["a" /* default */], {
    justIcon: true,
    round: true,
    color: "facebook"
  }, SectionCards_jsx("i", {
    className: "fab fa-facebook"
  })), SectionCards_jsx(Button["a" /* default */], {
    justIcon: true,
    round: true,
    color: "google"
  }, SectionCards_jsx("i", {
    className: "fab fa-google"
  }))))), SectionCards_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, SectionCards_jsx(Card["a" /* default */], {
    profile: true,
    plain: true
  }, SectionCards_jsx(CardAvatar["a" /* default */], {
    profile: true,
    plain: true
  }, SectionCards_jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, SectionCards_jsx("img", {
    src: marc["a" /* default */],
    alt: "..."
  }))), SectionCards_jsx(CardBody["a" /* default */], {
    plain: true
  }, SectionCards_jsx("h6", {
    className: classes.cardCategory + " " + classes.cardDescription
  }, "CEO / CO-FOUNDER"), SectionCards_jsx("h4", {
    className: classes.cardTitle
  }, "Alec Thompson"), SectionCards_jsx("p", {
    className: classes.cardDescription
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is..."), SectionCards_jsx(Button["a" /* default */], {
    round: true,
    color: "info"
  }, "Follow")))))))));
}
// EXTERNAL MODULE: external "react-datetime"
var external_react_datetime_ = __webpack_require__("TxAV");
var external_react_datetime_default = /*#__PURE__*/__webpack_require__.n(external_react_datetime_);

// EXTERNAL MODULE: external "@material-ui/core/Slide"
var Slide_ = __webpack_require__("mz+e");
var Slide_default = /*#__PURE__*/__webpack_require__.n(Slide_);

// EXTERNAL MODULE: external "@material-ui/core/Dialog"
var Dialog_ = __webpack_require__("fEgT");
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_);

// EXTERNAL MODULE: external "@material-ui/core/DialogTitle"
var DialogTitle_ = __webpack_require__("0Jp5");
var DialogTitle_default = /*#__PURE__*/__webpack_require__.n(DialogTitle_);

// EXTERNAL MODULE: external "@material-ui/core/DialogContent"
var DialogContent_ = __webpack_require__("iTUb");
var DialogContent_default = /*#__PURE__*/__webpack_require__.n(DialogContent_);

// EXTERNAL MODULE: external "@material-ui/core/DialogActions"
var DialogActions_ = __webpack_require__("1gBk");
var DialogActions_default = /*#__PURE__*/__webpack_require__.n(DialogActions_);

// EXTERNAL MODULE: external "@material-ui/core/Popover"
var Popover_ = __webpack_require__("fA+V");
var Popover_default = /*#__PURE__*/__webpack_require__.n(Popover_);

// EXTERNAL MODULE: external "@material-ui/icons/LibraryBooks"
var LibraryBooks_ = __webpack_require__("+YD5");
var LibraryBooks_default = /*#__PURE__*/__webpack_require__.n(LibraryBooks_);

// EXTERNAL MODULE: external "@material-ui/icons/Notifications"
var Notifications_ = __webpack_require__("0ezn");
var Notifications_default = /*#__PURE__*/__webpack_require__.n(Notifications_);

// EXTERNAL MODULE: external "@material-ui/icons/Assignment"
var Assignment_ = __webpack_require__("4nWC");
var Assignment_default = /*#__PURE__*/__webpack_require__.n(Assignment_);

// EXTERNAL MODULE: external "@material-ui/icons/Timeline"
var Timeline_ = __webpack_require__("jRhr");
var Timeline_default = /*#__PURE__*/__webpack_require__.n(Timeline_);

// EXTERNAL MODULE: external "@material-ui/icons/Code"
var Code_ = __webpack_require__("n9Bu");
var Code_default = /*#__PURE__*/__webpack_require__.n(Code_);

// EXTERNAL MODULE: external "@material-ui/icons/Group"
var Group_ = __webpack_require__("2BDn");
var Group_default = /*#__PURE__*/__webpack_require__.n(Group_);

// EXTERNAL MODULE: external "@material-ui/icons/AttachFile"
var AttachFile_ = __webpack_require__("4rJZ");
var AttachFile_default = /*#__PURE__*/__webpack_require__.n(AttachFile_);

// EXTERNAL MODULE: external "@material-ui/icons/Layers"
var Layers_ = __webpack_require__("g0r0");
var Layers_default = /*#__PURE__*/__webpack_require__.n(Layers_);

// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/components/instructionStyle.js
const instructionStyle = {
  instruction: {},
  picture: {},
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "6px",
    display: "block",
    maxWidth: "100%"
  }
};
/* harmony default export */ var components_instructionStyle = (instructionStyle);
// CONCATENATED MODULE: ./components/Instruction/Instruction.js
var Instruction_jsx = external_react_default.a.createElement;

 // @material-ui/core components

 // core components




const Instruction_useStyles = Object(styles_["makeStyles"])(components_instructionStyle);
function Instruction(props) {
  const {
    title,
    text,
    image,
    className,
    imageClassName,
    imageAlt
  } = props;
  const classes = Instruction_useStyles();
  const instructionClasses = external_classnames_default()({
    [classes.instruction]: true,
    [className]: className !== undefined
  });
  const pictureClasses = external_classnames_default()({
    [classes.picture]: true,
    [imageClassName]: imageClassName !== undefined
  });
  return Instruction_jsx("div", {
    className: instructionClasses
  }, Instruction_jsx(GridContainer["a" /* default */], null, Instruction_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 8
  }, Instruction_jsx("strong", null, title), Instruction_jsx("p", null, text)), Instruction_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 4
  }, Instruction_jsx("div", {
    className: pictureClasses
  }, Instruction_jsx("img", {
    src: image,
    alt: imageAlt,
    className: classes.image
  })))));
}
Instruction.defaultProps = {
  imageAlt: "..."
};
// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/components/customFileInputStyle.js
const customFileInputStyle = {
  inputFile: {
    opacity: "0",
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: "-1"
  },
  inputFileWrapper: {
    "& button svg": {
      color: "inherit"
    }
  }
};
/* harmony default export */ var components_customFileInputStyle = (customFileInputStyle);
// CONCATENATED MODULE: ./components/CustomFileInput/CustomFileInput.js
var CustomFileInput_jsx = external_react_default.a.createElement;

function CustomFileInput_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CustomFileInput_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CustomFileInput_ownKeys(Object(source), true).forEach(function (key) { CustomFileInput_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CustomFileInput_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CustomFileInput_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // used for making the prop types of this component

// @material-ui/core components
 // core components




const CustomFileInput_useStyles = Object(styles_["makeStyles"])(components_customFileInputStyle);
function CustomFileInput(props) {
  const [fileNames, setFileNames] = external_react_default.a.useState(""); // eslint-disable-next-line

  const [files, setFiles] = external_react_default.a.useState(null);
  let hiddenFile = external_react_default.a.createRef();

  const onFocus = e => {
    hiddenFile.current.click(e);
  }; // eslint-disable-next-line


  const handleSubmit = e => {
    e.preventDefault(); // files is the file/image uploaded
    // in this function you can save the image (files) on form submit
    // you have to call it yourself
  };

  const addFile = e => {
    let fileNames = "";
    let files = e.target.files;

    for (let i = 0; i < e.target.files.length; i++) {
      fileNames = fileNames + e.target.files[i].name;

      if (props.multiple && i !== e.target.files.length - 1) {
        fileNames = fileNames + ", ";
      }
    }

    setFiles(files);
    setFileNames(fileNames);
  };

  const {
    id,
    endButton,
    startButton,
    inputProps,
    formControlProps,
    multiple
  } = props;
  const classes = CustomFileInput_useStyles();

  if (inputProps && inputProps.type && inputProps.type === "file") {
    inputProps.type = "text";
  }

  let buttonStart;
  let buttonEnd;

  if (startButton) {
    buttonStart = CustomFileInput_jsx(Button["a" /* default */], startButton.buttonProps, startButton.icon !== undefined ? startButton.icon : null, startButton.text !== undefined ? startButton.text : null);
  }

  if (endButton) {
    buttonEnd = CustomFileInput_jsx(Button["a" /* default */], endButton.buttonProps, endButton.icon !== undefined ? endButton.icon : null, endButton.text !== undefined ? endButton.text : null);
  }

  return CustomFileInput_jsx("div", {
    className: classes.inputFileWrapper
  }, CustomFileInput_jsx("input", {
    type: "file",
    className: classes.inputFile,
    multiple: multiple,
    ref: hiddenFile,
    onChange: addFile
  }), CustomFileInput_jsx(CustomInput["a" /* default */], {
    id: id,
    formControlProps: CustomFileInput_objectSpread({}, formControlProps),
    inputProps: CustomFileInput_objectSpread({}, inputProps, {
      onClick: onFocus,
      value: fileNames,
      endAdornment: buttonEnd,
      startAdornment: buttonStart
    })
  }));
}
CustomFileInput.defaultProps = {
  multiple: false
};
// EXTERNAL MODULE: ./components/InfoArea/InfoArea.js + 1 modules
var InfoArea = __webpack_require__("TT5w");

// EXTERNAL MODULE: ./components/Accordion/Accordion.js + 1 modules
var Accordion = __webpack_require__("N/Uj");

// CONCATENATED MODULE: ./assets/img/image_placeholder.jpg
/* harmony default export */ var image_placeholder = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ltYWdlX3BsYWNlaG9sZGVyLmpwZyI7");
// CONCATENATED MODULE: ./components/CustomUpload/ImageUpload.js
var ImageUpload_jsx = external_react_default.a.createElement;

function ImageUpload_extends() { ImageUpload_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ImageUpload_extends.apply(this, arguments); }

 // used for making the prop types of this component

// core components



function ImageUpload(props) {
  const [file, setFile] = external_react_default.a.useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = external_react_default.a.useState(props.avatar ? placeholder : image_placeholder);
  let fileInput = external_react_default.a.createRef();

  const handleImageChange = e => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setFile(file);
      setImagePreviewUrl(reader.result);
    };

    reader.readAsDataURL(file);
  }; // eslint-disable-next-line


  const handleSubmit = e => {
    e.preventDefault(); // file is the file/image uploaded
    // in this function you can save the image (file) on form submit
    // you have to call it yourself
  };

  const handleClick = () => {
    fileInput.current.click();
  };

  const handleRemove = () => {
    setFile(null);
    setImagePreviewUrl(props.avatar ? placeholder : image_placeholder);
    fileInput.current.value = null;
  };

  let {
    avatar,
    addButtonProps,
    changeButtonProps,
    removeButtonProps
  } = props;
  return ImageUpload_jsx("div", {
    className: "fileinput text-center"
  }, ImageUpload_jsx("input", {
    type: "file",
    onChange: handleImageChange,
    ref: fileInput
  }), ImageUpload_jsx("div", {
    className: "thumbnail" + (avatar ? " img-circle" : "")
  }, ImageUpload_jsx("img", {
    src: imagePreviewUrl,
    alt: "..."
  })), ImageUpload_jsx("div", null, file === null ? ImageUpload_jsx(Button["a" /* default */], ImageUpload_extends({}, addButtonProps, {
    onClick: () => handleClick()
  }), avatar ? "Add Photo" : "Select image") : ImageUpload_jsx("span", null, ImageUpload_jsx(Button["a" /* default */], ImageUpload_extends({}, changeButtonProps, {
    onClick: () => handleClick()
  }), "Change"), avatar ? ImageUpload_jsx("br", null) : null, ImageUpload_jsx(Button["a" /* default */], ImageUpload_extends({}, removeButtonProps, {
    onClick: () => handleRemove()
  }), ImageUpload_jsx("i", {
    className: "fas fa-times"
  }), " Remove"))));
}
// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/modalStyle.js


const modalStyle = theme => ({
  modalRoot: {
    overflow: "auto",
    display: "block"
  },
  modal: {
    [theme.breakpoints.up("sm")]: {
      maxWidth: "500px",
      margin: "auto"
    },
    borderRadius: "6px",
    overflow: "visible",
    maxHeight: "unset",
    width: "100%",
    marginTop: "130px !important"
  },
  modalHeader: {
    borderBottom: "none",
    paddingTop: "24px",
    paddingRight: "24px",
    paddingBottom: "0",
    paddingLeft: "24px",
    minHeight: "16.43px"
  },
  modalTitle: {
    margin: "0",
    lineHeight: "1.5"
  },
  modalCloseButton: {
    "&, &:hover": {
      color: nextjs_material_tim_andrus["s" /* grayColor */][0]
    },
    "&:hover": {
      opacity: "1"
    },
    cursor: "pointer",
    padding: "1rem",
    margin: "-1rem -1rem -1rem auto",
    backgroundColor: "transparent",
    border: "0",
    WebkitAppearance: "none",
    float: "right",
    fontSize: "1.5rem",
    fontWeight: "500",
    lineHeight: "1",
    textShadow: "0 1px 0 " + nextjs_material_tim_andrus["Z" /* whiteColor */],
    opacity: ".5"
  },
  modalClose: {
    width: "16px",
    height: "16px"
  },
  modalBody: {
    paddingTop: "24px",
    paddingRight: "24px",
    paddingBottom: "16px",
    paddingLeft: "24px",
    position: "relative",
    overflow: "visible"
  },
  modalFooter: {
    padding: "15px",
    textAlign: "right",
    paddingTop: "0",
    margin: "0"
  },
  modalFooterCenter: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  instructionNoticeModal: {
    marginBottom: "25px"
  },
  imageNoticeModal: {
    maxWidth: "150px"
  },
  modalLarge: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "800px"
    }
  },
  modalSmall: {
    [theme.breakpoints.up("sm")]: {
      width: "300px",
      margin: "auto"
    },
    margin: "0 auto"
  },
  modalSmallBody: {
    marginTop: "20px"
  },
  modalSmallFooterFirstButton: {
    margin: "0",
    paddingLeft: "16px",
    paddingRight: "16px",
    width: "auto"
  },
  modalSmallFooterSecondButton: {
    marginBottom: "0",
    marginLeft: "5px"
  },
  modalLogin: {
    maxWidth: "360px",
    overflowY: "visible",
    width: "100%",
    "& $modalCloseButton": {
      color: nextjs_material_tim_andrus["Z" /* whiteColor */],
      top: "-10px",
      right: "10px",
      textShadow: "none",
      position: "relative"
    },
    "& $modalHeader": {
      borderBottom: "none",
      paddingTop: "24px",
      paddingRight: "24px",
      paddingBottom: "0",
      paddingLeft: "24px"
    },
    "& $modalBody": {
      paddingBottom: "0",
      paddingTop: "0"
    },
    "& $modalFooter": {
      paddingBottom: "0",
      paddingTop: "0"
    }
  },
  modalLoginCard: {
    marginBottom: "0",
    margin: "0",
    "& $modalHeader": {
      paddingTop: "0"
    }
  },
  modalSignup: {
    maxWidth: "900px",
    width: "100%",
    "& $modalHeader": {
      paddingTop: "0"
    },
    "& $modalTitle": {
      textAlign: "center",
      width: "100%",
      marginTop: "0.625rem"
    },
    "& $modalBody": {
      paddingBottom: "0",
      paddingTop: "0"
    }
  },
  modalSignupCard: {
    padding: "40px 0",
    margin: "0"
  }
});

/* harmony default export */ var nextjs_material_tim_andrus_modalStyle = (modalStyle);
// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/popoverStyles.js

const popoverStyles = {
  popover: {
    padding: "0",
    boxShadow: "0 16px 24px 2px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.14), 0 6px 30px 5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.2)",
    lineHeight: "1.5em",
    background: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["s" /* grayColor */][15]) + ",0.9)",
    border: "none",
    borderRadius: "3px",
    display: "block",
    maxWidth: "276px",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontStyle: "normal",
    fontWeight: "400",
    textAlign: "start",
    textDecoration: "none",
    textShadow: "none",
    textTransform: "none",
    letterSpacing: "normal",
    wordBreak: "normal",
    wordSpacing: "normal",
    whiteSpace: "normal",
    lineBreak: "auto",
    fontSize: "0.875rem",
    wordWrap: "break-word"
  },
  popoverBottom: {
    marginTop: "5px"
  },
  popoverHeader: {
    border: "none",
    padding: "15px 15px 5px",
    fontSize: "1.125rem",
    margin: "0",
    color: nextjs_material_tim_andrus["Z" /* whiteColor */],
    borderTopLeftRadius: "calc(0.3rem - 1px)",
    borderTopRightRadius: "calc(0.3rem - 1px)"
  },
  popoverBody: {
    padding: "10px 15px 15px",
    lineHeight: "1.4",
    color: nextjs_material_tim_andrus["Z" /* whiteColor */]
  }
};
/* harmony default export */ var nextjs_material_tim_andrus_popoverStyles = (popoverStyles);
// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/pages/componentsSections/javascriptStyles.js
function javascriptStyles_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function javascriptStyles_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { javascriptStyles_ownKeys(Object(source), true).forEach(function (key) { javascriptStyles_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { javascriptStyles_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function javascriptStyles_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const javascriptStyles = theme => javascriptStyles_objectSpread({
  container: nextjs_material_tim_andrus["h" /* container */],
  description: nextjs_material_tim_andrus["n" /* description */],
  cardTitle: nextjs_material_tim_andrus["f" /* cardTitle */],
  mlAuto: nextjs_material_tim_andrus["B" /* mlAuto */],
  mrAuto: nextjs_material_tim_andrus["C" /* mrAuto */]
}, tooltipsStyle["a" /* default */], {}, nextjs_material_tim_andrus_popoverStyles, {}, nextjs_material_tim_andrus_modalStyle(theme), {}, customCheckboxRadioSwitchStyle["a" /* default */], {
  section: {
    padding: "70px 0 0"
  },
  title: javascriptStyles_objectSpread({}, nextjs_material_tim_andrus["S" /* title */], {
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }),
  icon: {
    width: "24px",
    height: "24px",
    color: nextjs_material_tim_andrus["s" /* grayColor */][13]
  },
  label: {
    color: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    transition: "0.3s ease all",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingLeft: "0"
  },
  textCenter: {
    textAlign: "center"
  },
  cardTitleWhite: javascriptStyles_objectSpread({}, nextjs_material_tim_andrus["f" /* cardTitle */], {
    color: nextjs_material_tim_andrus["Z" /* whiteColor */] + "  !important"
  }),
  socialLine: {
    marginTop: "1rem",
    textAlign: "center",
    padding: "0"
  },
  socialLineButton: {
    "&, &:hover": {
      color: nextjs_material_tim_andrus["Z" /* whiteColor */]
    },
    marginLeft: "5px",
    marginRight: "5px"
  },
  cardLoginHeader: {
    marginTop: "-40px",
    padding: "20px 0",
    width: "100%",
    marginBottom: "15px"
  },
  cardLoginBody: {
    paddingTop: "0",
    paddingBottom: "0"
  },
  justifyContentCenter: {
    WebkitBoxPack: "center !important",
    MsFlexPack: "center !important",
    justifyContent: "center !important"
  },
  infoArea: {
    padding: "0px 0px 20px !important"
  },
  space50: {
    height: "50px",
    display: "block"
  }
});

/* harmony default export */ var componentsSections_javascriptStyles = (javascriptStyles);
// EXTERNAL MODULE: ./assets/img/dg1.jpg
var dg1 = __webpack_require__("lN43");

// EXTERNAL MODULE: ./assets/img/dg2.jpg
var dg2 = __webpack_require__("YJKT");

// CONCATENATED MODULE: ./pages-sections/components/SectionJavascript.js
var SectionJavascript_jsx = external_react_default.a.createElement;

function SectionJavascript_extends() { SectionJavascript_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SectionJavascript_extends.apply(this, arguments); }

/*eslint-disable*/
 // react plugin for creating date-time-picker

 // @material-ui/core components














 // @material-ui/icons














 // core components
















const SectionJavascript_useStyles = Object(styles_["makeStyles"])(componentsSections_javascriptStyles);
const SectionJavascript_Transition = external_react_default.a.forwardRef(function Transition(props, ref) {
  return SectionJavascript_jsx(Slide_default.a, SectionJavascript_extends({
    direction: "down",
    ref: ref
  }, props));
});
SectionJavascript_Transition.displayName = "Transition";
function SectionJavascript() {
  const [anchorElLeft, setAnchorElLeft] = external_react_default.a.useState(null);
  const [anchorElTop, setAnchorElTop] = external_react_default.a.useState(null);
  const [anchorElBottom, setAnchorElBottom] = external_react_default.a.useState(null);
  const [anchorElRight, setAnchorElRight] = external_react_default.a.useState(null);
  const [checked, setChecked] = external_react_default.a.useState([]);
  const [classicModal, setClassicModal] = external_react_default.a.useState(false);
  const [noticeModal, setNoticeModal] = external_react_default.a.useState(false);
  const [smallModal, setSmallModal] = external_react_default.a.useState(false);
  const [loginModal, setLoginModal] = external_react_default.a.useState(false);
  const [signupModal, setSignupModal] = external_react_default.a.useState(false);

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

  const classes = SectionJavascript_useStyles();
  return SectionJavascript_jsx("div", {
    className: classes.section + " cd-section",
    id: "javascriptComponents"
  }, SectionJavascript_jsx("div", {
    className: classes.container
  }, SectionJavascript_jsx("div", {
    className: classes.title
  }, SectionJavascript_jsx("h2", null, "Javascript components")), SectionJavascript_jsx(GridContainer["a" /* default */], null, SectionJavascript_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, SectionJavascript_jsx("div", {
    className: classes.title
  }, SectionJavascript_jsx("h3", null, "Modal")), SectionJavascript_jsx(GridContainer["a" /* default */], null, SectionJavascript_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 4
  }, SectionJavascript_jsx(Button["a" /* default */], {
    block: true,
    round: true,
    onClick: () => setClassicModal(true)
  }, SectionJavascript_jsx(LibraryBooks_default.a, null), "Classic"), SectionJavascript_jsx(Dialog_default.a, {
    classes: {
      root: classes.modalRoot,
      paper: classes.modal
    },
    open: classicModal,
    TransitionComponent: SectionJavascript_Transition,
    keepMounted: true,
    onClose: () => setClassicModal(false),
    "aria-labelledby": "classic-modal-slide-title",
    "aria-describedby": "classic-modal-slide-description"
  }, SectionJavascript_jsx(DialogTitle_default.a, {
    id: "classic-modal-slide-title",
    disableTypography: true,
    className: classes.modalHeader
  }, SectionJavascript_jsx(Button["a" /* default */], {
    simple: true,
    className: classes.modalCloseButton,
    key: "close",
    "aria-label": "Close",
    onClick: () => setClassicModal(false)
  }, " ", SectionJavascript_jsx(Close_default.a, {
    className: classes.modalClose
  })), SectionJavascript_jsx("h4", {
    className: classes.modalTitle
  }, "Modal title")), SectionJavascript_jsx(DialogContent_default.a, {
    id: "classic-modal-slide-description",
    className: classes.modalBody
  }, SectionJavascript_jsx("p", null, "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.")), SectionJavascript_jsx(DialogActions_default.a, {
    className: classes.modalFooter
  }, SectionJavascript_jsx(Button["a" /* default */], {
    link: true
  }, "Nice Button"), SectionJavascript_jsx(Button["a" /* default */], {
    onClick: () => setClassicModal(false),
    color: "danger",
    simple: true
  }, "Close")))), SectionJavascript_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 4
  }, SectionJavascript_jsx(Button["a" /* default */], {
    block: true,
    round: true,
    onClick: () => setNoticeModal(true)
  }, SectionJavascript_jsx(Icon_default.a, null, "info_outline"), " Notice"), SectionJavascript_jsx(Dialog_default.a, {
    classes: {
      root: classes.modalRoot,
      paper: classes.modal
    },
    open: noticeModal,
    TransitionComponent: SectionJavascript_Transition,
    keepMounted: true,
    onClose: () => setNoticeModal(false),
    "aria-labelledby": "notice-modal-slide-title",
    "aria-describedby": "notice-modal-slide-description"
  }, SectionJavascript_jsx(DialogTitle_default.a, {
    id: "notice-modal-slide-title",
    disableTypography: true,
    className: classes.modalHeader
  }, SectionJavascript_jsx(Button["a" /* default */], {
    simple: true,
    className: classes.modalCloseButton,
    key: "close",
    "aria-label": "Close",
    onClick: () => setNoticeModal(false)
  }, " ", SectionJavascript_jsx(Close_default.a, {
    className: classes.modalClose
  })), SectionJavascript_jsx("h4", {
    className: classes.modalTitle
  }, "How Do You Become an Affiliate?")), SectionJavascript_jsx(DialogContent_default.a, {
    id: "notice-modal-slide-description",
    className: classes.modalBody
  }, SectionJavascript_jsx(Instruction, {
    title: "1. Register",
    text: SectionJavascript_jsx("span", null, "The first step is to create an account at", " ", SectionJavascript_jsx("a", {
      href: "https://www.nowsta.com",
      target: "_blank"
    }, "Tim Andrus"), ". You can choose a social network or go for the classic version, whatever works best for you."),
    image: dg1["a" /* default */],
    className: classes.instructionNoticeModal,
    imageClassName: classes.imageNoticeModal
  }), SectionJavascript_jsx(Instruction, {
    title: "2. Apply",
    text: SectionJavascript_jsx("span", null, "The first step is to create an account at", " ", SectionJavascript_jsx("a", {
      href: "https://www.nowsta.com",
      target: "_blank"
    }, "Tim Andrus"), ". You can choose a social network or go for the classic version, whatever works best for you."),
    image: dg2["a" /* default */],
    className: classes.instructionNoticeModal,
    imageClassName: classes.imageNoticeModal
  }), SectionJavascript_jsx("p", null, "If you have more questions, don", "'", "t hesitate to contact me or send me a tweet @timothyjandrus. I", "'", "re here to help!")), SectionJavascript_jsx(DialogActions_default.a, {
    className: classes.modalFooter + " " + classes.modalFooterCenter
  }, SectionJavascript_jsx(Button["a" /* default */], {
    onClick: () => setNoticeModal(false),
    color: "info",
    round: true
  }, "Sounds Good")))), SectionJavascript_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 4
  }, SectionJavascript_jsx(Button["a" /* default */], {
    block: true,
    round: true,
    onClick: () => setSmallModal(true)
  }, SectionJavascript_jsx(Notifications_default.a, null), " Small Alert"), SectionJavascript_jsx(Dialog_default.a, {
    classes: {
      root: classes.modalRoot,
      paper: classes.modal + " " + classes.modalSmall
    },
    open: smallModal,
    TransitionComponent: SectionJavascript_Transition,
    keepMounted: true,
    onClose: () => setSmallModal(false),
    "aria-labelledby": "small-modal-slide-title",
    "aria-describedby": "small-modal-slide-description"
  }, SectionJavascript_jsx(DialogTitle_default.a, {
    id: "small-modal-slide-title",
    disableTypography: true,
    className: classes.modalHeader
  }, SectionJavascript_jsx(Button["a" /* default */], {
    simple: true,
    className: classes.modalCloseButton,
    key: "close",
    "aria-label": "Close",
    onClick: () => setSmallModal(false)
  }, " ", SectionJavascript_jsx(Close_default.a, {
    className: classes.modalClose
  }))), SectionJavascript_jsx(DialogContent_default.a, {
    id: "small-modal-slide-description",
    className: classes.modalBody + " " + classes.modalSmallBody
  }, SectionJavascript_jsx("h5", null, "Are you sure you want to do this?")), SectionJavascript_jsx(DialogActions_default.a, {
    className: classes.modalFooter + " " + classes.modalFooterCenter
  }, SectionJavascript_jsx(Button["a" /* default */], {
    onClick: () => setSmallModal(false),
    link: true,
    className: classes.modalSmallFooterFirstButton
  }, "Never Mind"), SectionJavascript_jsx(Button["a" /* default */], {
    onClick: () => setSmallModal(false),
    color: "success",
    simple: true,
    className: classes.modalSmallFooterFirstButton + " " + classes.modalSmallFooterSecondButton
  }, "Yes"))))), SectionJavascript_jsx(GridContainer["a" /* default */], null, SectionJavascript_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 6
  }, SectionJavascript_jsx(Button["a" /* default */], {
    block: true,
    round: true,
    onClick: () => setLoginModal(true)
  }, SectionJavascript_jsx(AccountCircle_default.a, null), " Login"), SectionJavascript_jsx(Dialog_default.a, {
    classes: {
      root: classes.modalRoot,
      paper: classes.modal + " " + classes.modalLogin
    },
    open: loginModal,
    TransitionComponent: SectionJavascript_Transition,
    keepMounted: true,
    onClose: () => setLoginModal(false),
    "aria-labelledby": "login-modal-slide-title",
    "aria-describedby": "login-modal-slide-description"
  }, SectionJavascript_jsx(Card["a" /* default */], {
    plain: true,
    className: classes.modalLoginCard
  }, SectionJavascript_jsx(DialogTitle_default.a, {
    id: "login-modal-slide-title",
    disableTypography: true,
    className: classes.modalHeader
  }, SectionJavascript_jsx(CardHeader["a" /* default */], {
    plain: true,
    color: "primary",
    className: classes.textCenter + " " + classes.cardLoginHeader
  }, SectionJavascript_jsx(Button["a" /* default */], {
    simple: true,
    className: classes.modalCloseButton,
    key: "close",
    "aria-label": "Close",
    onClick: () => setLoginModal(false)
  }, " ", SectionJavascript_jsx(Close_default.a, {
    className: classes.modalClose
  })), SectionJavascript_jsx("h5", {
    className: classes.cardTitleWhite
  }, "Log in"), SectionJavascript_jsx("div", {
    className: classes.socialLine
  }, SectionJavascript_jsx(Button["a" /* default */], {
    justIcon: true,
    link: true,
    className: classes.socialLineButton
  }, SectionJavascript_jsx("i", {
    className: "fab fa-facebook-square"
  })), SectionJavascript_jsx(Button["a" /* default */], {
    justIcon: true,
    link: true,
    className: classes.socialLineButton
  }, SectionJavascript_jsx("i", {
    className: "fab fa-twitter"
  })), SectionJavascript_jsx(Button["a" /* default */], {
    justIcon: true,
    link: true,
    className: classes.socialLineButton
  }, SectionJavascript_jsx("i", {
    className: "fab fa-google-plus-g"
  }))))), SectionJavascript_jsx(DialogContent_default.a, {
    id: "login-modal-slide-description",
    className: classes.modalBody
  }, SectionJavascript_jsx("form", null, SectionJavascript_jsx("p", {
    className: classes.description + " " + classes.textCenter
  }, "Or Be Classical"), SectionJavascript_jsx(CardBody["a" /* default */], {
    className: classes.cardLoginBody
  }, SectionJavascript_jsx(CustomInput["a" /* default */], {
    id: "login-modal-first",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      startAdornment: SectionJavascript_jsx(InputAdornment_default.a, {
        position: "start"
      }, SectionJavascript_jsx(Face_default.a, {
        className: classes.icon
      })),
      placeholder: "First Name..."
    }
  }), SectionJavascript_jsx(CustomInput["a" /* default */], {
    id: "login-modal-email",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      startAdornment: SectionJavascript_jsx(InputAdornment_default.a, {
        position: "start"
      }, SectionJavascript_jsx(Mail_default.a, {
        className: classes.icon
      })),
      placeholder: "Email..."
    }
  }), SectionJavascript_jsx(CustomInput["a" /* default */], {
    id: "login-modal-pass",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      startAdornment: SectionJavascript_jsx(InputAdornment_default.a, {
        position: "start"
      }, SectionJavascript_jsx(Icon_default.a, {
        className: classes.icon
      }, "lock_outline")),
      placeholder: "Password..."
    }
  })))), SectionJavascript_jsx(DialogActions_default.a, {
    className: classes.modalFooter + " " + classes.justifyContentCenter
  }, SectionJavascript_jsx(Button["a" /* default */], {
    color: "primary",
    simple: true,
    size: "lg"
  }, "Get started"))))), SectionJavascript_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 6
  }, SectionJavascript_jsx(Button["a" /* default */], {
    block: true,
    round: true,
    onClick: () => setSignupModal(true)
  }, SectionJavascript_jsx(Assignment_default.a, null), " Signup"), SectionJavascript_jsx(Dialog_default.a, {
    classes: {
      root: classes.modalRoot,
      paper: classes.modal + " " + classes.modalSignup
    },
    open: signupModal,
    TransitionComponent: SectionJavascript_Transition,
    keepMounted: true,
    onClose: () => setSignupModal(false),
    "aria-labelledby": "signup-modal-slide-title",
    "aria-describedby": "signup-modal-slide-description"
  }, SectionJavascript_jsx(Card["a" /* default */], {
    plain: true,
    className: classes.modalSignupCard
  }, SectionJavascript_jsx(DialogTitle_default.a, {
    id: "signup-modal-slide-title",
    disableTypography: true,
    className: classes.modalHeader
  }, SectionJavascript_jsx(Button["a" /* default */], {
    simple: true,
    className: classes.modalCloseButton,
    key: "close",
    "aria-label": "Close",
    onClick: () => setSignupModal(false)
  }, " ", SectionJavascript_jsx(Close_default.a, {
    className: classes.modalClose
  })), SectionJavascript_jsx("h3", {
    className: classes.cardTitle + " " + classes.modalTitle
  }, "Register")), SectionJavascript_jsx(DialogContent_default.a, {
    id: "signup-modal-slide-description",
    className: classes.modalBody
  }, SectionJavascript_jsx(GridContainer["a" /* default */], null, SectionJavascript_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 5,
    md: 5,
    className: classes.mlAuto
  }, SectionJavascript_jsx(InfoArea["a" /* default */], {
    className: classes.infoArea,
    title: "Marketing",
    description: SectionJavascript_jsx("p", null, "We", "'", "ve created the marketing campaign of the website. It was a very interesting collaboration."),
    icon: Timeline_default.a,
    iconColor: "rose"
  }), SectionJavascript_jsx(InfoArea["a" /* default */], {
    className: classes.infoArea,
    title: "Fully Coded in HTML5",
    description: SectionJavascript_jsx("p", null, "We", "'", "ve developed the website with HTML5 and CSS3. The client has access to the code using GitHub."),
    icon: Code_default.a,
    iconColor: "primary"
  }), SectionJavascript_jsx(InfoArea["a" /* default */], {
    className: classes.infoArea,
    title: "Built Audience",
    description: SectionJavascript_jsx("p", null, "There is also a Fully Customizable CMS Admin Dashboard for this product."),
    icon: Group_default.a,
    iconColor: "info"
  })), SectionJavascript_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 5,
    md: 5,
    className: classes.mrAuto
  }, SectionJavascript_jsx("div", {
    className: classes.textCenter
  }, SectionJavascript_jsx(Button["a" /* default */], {
    justIcon: true,
    round: true,
    color: "twitter"
  }, SectionJavascript_jsx("i", {
    className: "fab fa-twitter"
  })), ` `, SectionJavascript_jsx(Button["a" /* default */], {
    justIcon: true,
    round: true,
    color: "dribbble"
  }, SectionJavascript_jsx("i", {
    className: "fab fa-dribbble"
  })), ` `, SectionJavascript_jsx(Button["a" /* default */], {
    justIcon: true,
    round: true,
    color: "facebook"
  }, SectionJavascript_jsx("i", {
    className: "fab fa-facebook-f"
  })), ` `, SectionJavascript_jsx("h4", {
    className: classes.socialTitle
  }, "or be classical")), SectionJavascript_jsx("form", {
    className: classes.form
  }, SectionJavascript_jsx(CustomInput["a" /* default */], {
    formControlProps: {
      fullWidth: true,
      className: classes.customFormControlClasses
    },
    inputProps: {
      startAdornment: SectionJavascript_jsx(InputAdornment_default.a, {
        position: "start",
        className: classes.inputAdornment
      }, SectionJavascript_jsx(Face_default.a, {
        className: classes.inputAdornmentIcon
      })),
      placeholder: "First Name..."
    }
  }), SectionJavascript_jsx(CustomInput["a" /* default */], {
    formControlProps: {
      fullWidth: true,
      className: classes.customFormControlClasses
    },
    inputProps: {
      startAdornment: SectionJavascript_jsx(InputAdornment_default.a, {
        position: "start",
        className: classes.inputAdornment
      }, SectionJavascript_jsx(Email_default.a, {
        className: classes.inputAdornmentIcon
      })),
      placeholder: "Email..."
    }
  }), SectionJavascript_jsx(CustomInput["a" /* default */], {
    formControlProps: {
      fullWidth: true,
      className: classes.customFormControlClasses
    },
    inputProps: {
      startAdornment: SectionJavascript_jsx(InputAdornment_default.a, {
        position: "start",
        className: classes.inputAdornment
      }, SectionJavascript_jsx(Icon_default.a, {
        className: classes.inputAdornmentIcon
      }, "lock_outline")),
      placeholder: "Password..."
    }
  }), SectionJavascript_jsx(FormControlLabel_default.a, {
    classes: {
      label: classes.label
    },
    control: SectionJavascript_jsx(Checkbox_default.a, {
      tabIndex: -1,
      onClick: () => handleToggle(1),
      checkedIcon: SectionJavascript_jsx(Check_default.a, {
        className: classes.checkedIcon
      }),
      icon: SectionJavascript_jsx(Check_default.a, {
        className: classes.uncheckedIcon
      }),
      classes: {
        checked: classes.checked,
        root: classes.checkRoot
      }
    }),
    label: SectionJavascript_jsx("span", null, "I agree to the", " ", SectionJavascript_jsx("a", {
      href: "#pablo"
    }, "terms and conditions"), ".")
  }), SectionJavascript_jsx("div", {
    className: classes.textCenter
  }, SectionJavascript_jsx(Button["a" /* default */], {
    round: true,
    color: "primary"
  }, "Get started")))))))))), SectionJavascript_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 12
  }, SectionJavascript_jsx("div", {
    className: classes.title
  }, SectionJavascript_jsx("h3", null, "Datetime Picker")), SectionJavascript_jsx(GridContainer["a" /* default */], null, SectionJavascript_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, SectionJavascript_jsx(InputLabel_default.a, {
    className: classes.label
  }, "Datetime Picker"), SectionJavascript_jsx("br", null), SectionJavascript_jsx(FormControl_default.a, {
    fullWidth: true
  }, SectionJavascript_jsx(external_react_datetime_default.a, {
    inputProps: {
      placeholder: "Datetime Picker Here"
    }
  })), SectionJavascript_jsx(InputLabel_default.a, {
    className: classes.label
  }, "Date Picker"), SectionJavascript_jsx("br", null), SectionJavascript_jsx(FormControl_default.a, {
    fullWidth: true
  }, SectionJavascript_jsx(external_react_datetime_default.a, {
    timeFormat: false,
    inputProps: {
      placeholder: "Date Picker Here"
    }
  })), SectionJavascript_jsx(InputLabel_default.a, {
    className: classes.label
  }, "Time Picker"), SectionJavascript_jsx("br", null), SectionJavascript_jsx(FormControl_default.a, {
    fullWidth: true
  }, SectionJavascript_jsx(external_react_datetime_default.a, {
    dateFormat: false,
    inputProps: {
      placeholder: "Time Picker Here"
    }
  })))))), SectionJavascript_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6
  }, SectionJavascript_jsx("div", {
    className: classes.title
  }, SectionJavascript_jsx("h3", null, "Popovers")), SectionJavascript_jsx(Button["a" /* default */], {
    onClick: event => setAnchorElLeft(event.currentTarget)
  }, "On left"), SectionJavascript_jsx(Popover_default.a, {
    classes: {
      paper: classes.popover
    },
    open: Boolean(anchorElLeft),
    anchorEl: anchorElLeft,
    onClose: () => setAnchorElLeft(null),
    anchorOrigin: {
      vertical: "center",
      horizontal: "left"
    },
    transformOrigin: {
      vertical: "center",
      horizontal: "right"
    }
  }, SectionJavascript_jsx("h3", {
    className: classes.popoverHeader
  }, "Popover on left"), SectionJavascript_jsx("div", {
    className: classes.popoverBody
  }, "Here will be some very useful information about his popover. Here will be some very useful information about his popover.")), SectionJavascript_jsx(Button["a" /* default */], {
    onClick: event => setAnchorElTop(event.currentTarget)
  }, "On top"), SectionJavascript_jsx(Popover_default.a, {
    classes: {
      paper: classes.popover
    },
    open: Boolean(anchorElTop),
    anchorEl: anchorElTop,
    onClose: () => setAnchorElTop(null),
    anchorOrigin: {
      vertical: "top",
      horizontal: "center"
    },
    transformOrigin: {
      vertical: "bottom",
      horizontal: "center"
    }
  }, SectionJavascript_jsx("h3", {
    className: classes.popoverHeader
  }, "Popover on top"), SectionJavascript_jsx("div", {
    className: classes.popoverBody
  }, "Here will be some very useful information about his popover.")), SectionJavascript_jsx(Button["a" /* default */], {
    onClick: event => setAnchorElBottom(event.currentTarget)
  }, "On bottom"), SectionJavascript_jsx(Popover_default.a, {
    classes: {
      paper: classes.popover
    },
    open: Boolean(anchorElBottom),
    anchorEl: anchorElBottom,
    onClose: () => setAnchorElBottom(null),
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "center"
    }
  }, SectionJavascript_jsx("h3", {
    className: classes.popoverHeader
  }, "Popover on bottom"), SectionJavascript_jsx("div", {
    className: classes.popoverBody
  }, "Here will be some very useful information about his popover.")), SectionJavascript_jsx(Button["a" /* default */], {
    onClick: event => setAnchorElRight(event.currentTarget)
  }, "On right"), SectionJavascript_jsx(Popover_default.a, {
    classes: {
      paper: classes.popover
    },
    open: Boolean(anchorElRight),
    anchorEl: anchorElRight,
    onClose: () => setAnchorElRight(null),
    anchorOrigin: {
      vertical: "center",
      horizontal: "right"
    },
    transformOrigin: {
      vertical: "center",
      horizontal: "left"
    }
  }, SectionJavascript_jsx("h3", {
    className: classes.popoverHeader
  }, "Popover on right"), SectionJavascript_jsx("div", {
    className: classes.popoverBody
  }, "Here will be some very useful information about his popover.")), SectionJavascript_jsx("br", null), SectionJavascript_jsx("br", null), SectionJavascript_jsx("div", {
    className: classes.title
  }, SectionJavascript_jsx("h3", null, "Tooltips")), SectionJavascript_jsx(Tooltip_default.a, {
    id: "tooltip-left",
    title: "Tooltip on left",
    placement: "left",
    classes: {
      tooltip: classes.tooltip
    }
  }, SectionJavascript_jsx(Button["a" /* default */], null, "On left")), SectionJavascript_jsx(Tooltip_default.a, {
    id: "tooltip-top",
    title: "Tooltip on top",
    placement: "top",
    classes: {
      tooltip: classes.tooltip
    }
  }, SectionJavascript_jsx(Button["a" /* default */], null, "On top")), SectionJavascript_jsx(Tooltip_default.a, {
    id: "tooltip-bottom",
    title: "Tooltip on bottom",
    placement: "bottom",
    classes: {
      tooltip: classes.tooltip
    }
  }, SectionJavascript_jsx(Button["a" /* default */], null, "On bottom")), SectionJavascript_jsx(Tooltip_default.a, {
    id: "tooltip-right",
    title: "Tooltip on right",
    placement: "right",
    classes: {
      tooltip: classes.tooltip
    }
  }, SectionJavascript_jsx(Button["a" /* default */], null, "On right")))), SectionJavascript_jsx("div", {
    id: "collapse"
  }, SectionJavascript_jsx("div", {
    className: classes.title
  }, SectionJavascript_jsx("h3", null, "Collapse")), SectionJavascript_jsx(GridContainer["a" /* default */], null, SectionJavascript_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 8,
    md: 8
  }, SectionJavascript_jsx(Accordion["a" /* default */], {
    active: 0,
    activeColor: "rose",
    collapses: [{
      title: "Collapsible group Item #1",
      content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
    }, {
      title: "Collapsible group Item #2",
      content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
    }, {
      title: "Collapsible group Item #3",
      content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
    }]
  })))), SectionJavascript_jsx("div", {
    className: classes.space50
  }), SectionJavascript_jsx("div", {
    id: "file-uploader"
  }, SectionJavascript_jsx("div", {
    className: classes.title
  }, SectionJavascript_jsx("h3", null, "File Uploader")), SectionJavascript_jsx(GridContainer["a" /* default */], null, SectionJavascript_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 5,
    md: 5
  }, SectionJavascript_jsx("h4", null, "Regular Image"), SectionJavascript_jsx(ImageUpload, {
    addButtonProps: {
      round: true
    },
    changeButtonProps: {
      round: true
    },
    removeButtonProps: {
      round: true,
      color: "danger"
    }
  })), SectionJavascript_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 3,
    md: 3
  }, SectionJavascript_jsx("h4", null, "Avatar"), SectionJavascript_jsx(ImageUpload, {
    avatar: true,
    addButtonProps: {
      round: true
    },
    changeButtonProps: {
      round: true
    },
    removeButtonProps: {
      round: true,
      color: "danger"
    }
  })), SectionJavascript_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 3,
    md: 3
  }, SectionJavascript_jsx("h4", null, "Simple Material Input"), SectionJavascript_jsx(CustomFileInput, {
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      placeholder: "Simple chooser..."
    }
  }), SectionJavascript_jsx(CustomFileInput, {
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      placeholder: "Single File..."
    },
    endButton: {
      buttonProps: {
        round: true,
        color: "primary",
        justIcon: true,
        fileButton: true
      },
      icon: SectionJavascript_jsx(AttachFile_default.a, null)
    }
  }), SectionJavascript_jsx(CustomFileInput, {
    multiple: true,
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      placeholder: "Multiple File..."
    },
    endButton: {
      buttonProps: {
        round: true,
        color: "info",
        justIcon: true,
        fileButton: true
      },
      icon: SectionJavascript_jsx(Layers_default.a, null)
    }
  })))), SectionJavascript_jsx("div", {
    className: classes.title
  }, SectionJavascript_jsx("h3", null, "Carousel"))));
}
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// EXTERNAL MODULE: external "@material-ui/icons/LocationOn"
var LocationOn_ = __webpack_require__("cVmi");
var LocationOn_default = /*#__PURE__*/__webpack_require__.n(LocationOn_);

// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/pages/componentsSections/carouselStyle.js

const carouselStyle = {
  section: {
    padding: "70px 0"
  },
  container: nextjs_material_tim_andrus["h" /* container */],
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important"
  }
};
/* harmony default export */ var componentsSections_carouselStyle = (carouselStyle);
// EXTERNAL MODULE: ./assets/img/bg2.jpg
var bg2 = __webpack_require__("pC0U");

// CONCATENATED MODULE: ./assets/img/bg3.jpg
/* harmony default export */ var bg3 = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2JnMy5qcGciOw==");
// CONCATENATED MODULE: ./pages-sections/components/SectionCarousel.js
var SectionCarousel_jsx = external_react_default.a.createElement;
 // react component for creating beautiful carousel

 // @material-ui/core components

 // @material-ui/icons

 // core components








const SectionCarousel_useStyles = Object(styles_["makeStyles"])(componentsSections_carouselStyle);
function SectionCarousel() {
  const classes = SectionCarousel_useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return SectionCarousel_jsx("div", {
    className: classes.section,
    id: "carousel"
  }, SectionCarousel_jsx("div", {
    className: classes.container
  }, SectionCarousel_jsx(GridContainer["a" /* default */], null, SectionCarousel_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 10,
    md: 8,
    className: classes.marginAuto
  }, SectionCarousel_jsx(Card["a" /* default */], null, SectionCarousel_jsx(external_react_slick_default.a, settings, SectionCarousel_jsx("div", null, SectionCarousel_jsx("img", {
    src: bg,
    alt: "First slide",
    className: "slick-image"
  }), SectionCarousel_jsx("div", {
    className: "slick-caption"
  }, SectionCarousel_jsx("h4", null, SectionCarousel_jsx(LocationOn_default.a, {
    className: "slick-icons"
  }), "Yellowstone National Park, United States"))), SectionCarousel_jsx("div", null, SectionCarousel_jsx("img", {
    src: bg2["default"],
    alt: "Second slide",
    className: "slick-image"
  }), SectionCarousel_jsx("div", {
    className: "slick-caption"
  }, SectionCarousel_jsx("h4", null, SectionCarousel_jsx(LocationOn_default.a, {
    className: "slick-icons"
  }), "Somewhere Beyond, United States"))), SectionCarousel_jsx("div", null, SectionCarousel_jsx("img", {
    src: bg3,
    alt: "Third slide",
    className: "slick-image"
  }), SectionCarousel_jsx("div", {
    className: "slick-caption"
  }, SectionCarousel_jsx("h4", null, SectionCarousel_jsx(LocationOn_default.a, {
    className: "slick-icons"
  }), "Yellowstone National Park, United States")))))))));
}
// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/pages/componentsStyle.js
function componentsStyle_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function componentsStyle_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { componentsStyle_ownKeys(Object(source), true).forEach(function (key) { componentsStyle_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { componentsStyle_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function componentsStyle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const componentsStyle = {
  main: nextjs_material_tim_andrus["z" /* main */],
  mainRaised: nextjs_material_tim_andrus["A" /* mainRaised */],
  parallax: {
    height: "90vh",
    overflow: "hidden",
    backgroundPosition: "center top"
  },
  container: componentsStyle_objectSpread({}, nextjs_material_tim_andrus["h" /* container */], {
    zIndex: "2",
    position: "relative"
  }),
  brand: {
    color: nextjs_material_tim_andrus["Z" /* whiteColor */],
    textAlign: "center",
    "& h1": {
      fontSize: "4.2rem",
      fontWeight: "600",
      display: "inline-block",
      position: "relative"
    },
    "& h3": {
      fontSize: "1.313rem",
      maxWidth: "500px",
      margin: "10px auto 0"
    }
  },
  title: componentsStyle_objectSpread({}, nextjs_material_tim_andrus["S" /* title */], {
    color: nextjs_material_tim_andrus["Z" /* whiteColor */] + "  !important"
  }),
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  },
  proBadge: {
    position: "absolute",
    fontSize: "22px",
    textTransform: "uppercase",
    fontWeight: "bold",
    right: "-90px",
    top: "-3px",
    padding: "10px 18px",
    backgroundColor: nextjs_material_tim_andrus["Z" /* whiteColor */],
    borderRadius: "3px",
    color: nextjs_material_tim_andrus["s" /* grayColor */][18],
    lineHeight: "22px",
    boxShadow: "0px 5px 5px -2px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["s" /* grayColor */][25]) + ",0.4)"
  },
  section: componentsStyle_objectSpread({}, nextjs_material_tim_andrus["M" /* section */], {
    padding: "70px 0px"
  }),
  sectionGray: {
    background: nextjs_material_tim_andrus["s" /* grayColor */][14]
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right"
  },
  icon: {
    width: "18px",
    height: "18px",
    top: "3px",
    position: "relative"
  }
};
/* harmony default export */ var pages_componentsStyle = (componentsStyle);
// CONCATENATED MODULE: ./pages/components.js
var components_jsx = external_react_default.a.createElement;
/*eslint-disable*/

// nodejs library that concatenates classes

// @material-ui/core components



// @material-ui/icons

// core components






// sections for this page












const components_useStyles = Object(styles_["makeStyles"])(pages_componentsStyle);
function Components() {
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
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };
  const updateView = () => {
    var contentSections = document.getElementsByClassName("cd-section");
    var navigationItems = document.getElementById("cd-vertical-nav").getElementsByTagName("a");
    for (let i = 0; i < contentSections.length; i++) {
      var activeSection = parseInt(navigationItems[i].getAttribute("data-number"), 10) - 1;
      if (contentSections[i].offsetTop - window.innerHeight / 2 + document.getElementById("main-panel").offsetTop < window.pageYOffset && contentSections[i].offsetTop + contentSections[i].scrollHeight - window.innerHeight / 2 + document.getElementById("main-panel").offsetTop > window.pageYOffset) {
        navigationItems[activeSection].classList.add("is-selected");
      } else {
        navigationItems[activeSection].classList.remove("is-selected");
      }
    }
  };
  const smoothScroll = target => {
    var targetScroll = document.getElementById(target);
    scrollTo(document.documentElement, targetScroll.offsetTop, 900);
  };
  const scrollTo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start + document.getElementById("main-panel").offsetTop,
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
  const classes = components_useStyles();
  return components_jsx("div", null, components_jsx(Header["a" /* default */], {
    brand: "Timothy Andrus",
    links: components_jsx(HeaderLinks["a" /* default */], {
      dropdownHoverColor: "info"
    }),
    fixed: true,
    color: "transparent",
    changeColorOnScroll: {
      height: 400,
      color: "info"
    }
  }), components_jsx(Parallax["a" /* default */], {
    image: __webpack_require__("DIuF"),
    className: classes.parallax
  }, components_jsx("div", {
    className: classes.container
  }, components_jsx(GridContainer["a" /* default */], null, components_jsx(GridItem["a" /* default */], null, components_jsx("div", {
    className: classes.brand
  }, components_jsx("h1", null, "Leadership during the Storm", " "), components_jsx("h3", {
    className: classes.title
  }, "Timothy Andrus")))))), components_jsx("div", {
    className: external_classnames_default()(classes.main, classes.mainRaised),
    id: "main-panel"
  }, components_jsx(SectionBasics, null), components_jsx(SectionNavbars, null), components_jsx(SectionTabs, null), components_jsx(SectionPills, null), components_jsx(SectionNotifications, null), components_jsx("div", {
    className: external_classnames_default()(classes.section, classes.sectionGray, "cd-section"),
    id: "footers"
  }, components_jsx(SectionPreFooter, null), components_jsx(SectionFooter, null)), components_jsx(SectionTypography, null), components_jsx(SectionCards, null), components_jsx(SectionJavascript, null), components_jsx(SectionCarousel, null)), components_jsx("nav", {
    id: "cd-vertical-nav"
  }, components_jsx("ul", null, components_jsx("li", null, components_jsx("a", {
    href: "#buttons",
    "data-number": "1",
    className: "",
    onClick: e => {
      e.preventDefault();
      smoothScroll("buttons");
    }
  }, components_jsx("span", {
    className: "cd-dot"
  }), components_jsx("span", {
    className: "cd-label"
  }, "Basic Elements"))), components_jsx("li", null, components_jsx("a", {
    href: "#navigation",
    "data-number": "2",
    className: "",
    onClick: e => {
      e.preventDefault();
      smoothScroll("navigation");
    }
  }, components_jsx("span", {
    className: "cd-dot"
  }), components_jsx("span", {
    className: "cd-label"
  }, "Navigation"))), components_jsx("li", null, components_jsx("a", {
    href: "#notifications",
    "data-number": "3",
    className: "",
    onClick: e => {
      e.preventDefault();
      smoothScroll("notifications");
    }
  }, components_jsx("span", {
    className: "cd-dot"
  }), components_jsx("span", {
    className: "cd-label"
  }, "Notifications"))), components_jsx("li", null, components_jsx("a", {
    href: "#footers",
    "data-number": "4",
    className: "",
    onClick: e => {
      e.preventDefault();
      smoothScroll("footers");
    }
  }, components_jsx("span", {
    className: "cd-dot"
  }), components_jsx("span", {
    className: "cd-label"
  }, "Footers"))), components_jsx("li", null, components_jsx("a", {
    href: "#typography",
    "data-number": "5",
    className: "",
    onClick: e => {
      e.preventDefault();
      smoothScroll("typography");
    }
  }, components_jsx("span", {
    className: "cd-dot"
  }), components_jsx("span", {
    className: "cd-label"
  }, "Typography"))), components_jsx("li", null, components_jsx("a", {
    href: "#contentAreas",
    "data-number": "6",
    className: "",
    onClick: e => {
      e.preventDefault();
      smoothScroll("contentAreas");
    }
  }, components_jsx("span", {
    className: "cd-dot"
  }), components_jsx("span", {
    className: "cd-label"
  }, "Content Areas"))), components_jsx("li", null, components_jsx("a", {
    href: "#cards",
    "data-number": "7",
    className: "",
    onClick: e => {
      e.preventDefault();
      smoothScroll("cards");
    }
  }, components_jsx("span", {
    className: "cd-dot"
  }), components_jsx("span", {
    className: "cd-label"
  }, "Cards"))), components_jsx("li", null, components_jsx("a", {
    href: "#morphingCards",
    "data-number": "8",
    className: "",
    onClick: e => {
      e.preventDefault();
      smoothScroll("morphingCards");
    }
  }, components_jsx("span", {
    className: "cd-dot"
  }), components_jsx("span", {
    className: "cd-label"
  }, "Morphing Cards"))), components_jsx("li", null, components_jsx("a", {
    href: "#pablo",
    "data-number": "9",
    className: "",
    onClick: e => {
      e.preventDefault();
      smoothScroll("javascriptComponents");
    }
  }, components_jsx("span", {
    className: "cd-dot"
  }), components_jsx("span", {
    className: "cd-label"
  }, "Javascript"))))), components_jsx(Footer["a" /* default */], {
    content: components_jsx("div", null, components_jsx("div", {
      className: classes.left
    }, components_jsx(List_default.a, {
      className: classes.list
    }, components_jsx(ListItem_default.a, {
      className: classes.inlineBlock
    }, components_jsx("a", {
      href: "https://www.nowsta.com/",
      target: "_blank",
      className: classes.block
    }, "Tim Andrus")), components_jsx(ListItem_default.a, {
      className: classes.inlineBlock
    }, components_jsx("a", {
      href: "https://www.nowsta.com/",
      target: "_blank",
      className: classes.block
    }, "About me")), components_jsx(ListItem_default.a, {
      className: classes.inlineBlock
    }, components_jsx("a", {
      href: "http://www.nowsta.com",
      className: classes.block
    }, "Blog")), components_jsx(ListItem_default.a, {
      className: classes.inlineBlock
    }, components_jsx("a", {
      href: "https://www.nowsta.com",
      target: "_blank",
      className: classes.block
    }, "Licenses")))), components_jsx("div", {
      className: classes.right
    }, "\xA9 ", 1900 + new Date().getYear(), " , made with", " ", components_jsx(Favorite_default.a, {
      className: classes.icon
    }), " by", " ", components_jsx("a", {
      href: "https://www.nowsta.com",
      target: "_blank"
    }, "Tim Andrus"), " ", "for a better web."))
  }));
}

/***/ }),

/***/ "FQAE":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ShoppingCart");

/***/ }),

/***/ "Fm7H":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Favorite");

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

/***/ "HWfr":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Chat");

/***/ }),

/***/ "HXcA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Footer; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__("0LMq");

// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__("c25J");

// EXTERNAL MODULE: external "@material-ui/icons/Favorite"
var Favorite_ = __webpack_require__("Fm7H");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-tim-andrus.js
var nextjs_material_tim_andrus = __webpack_require__("k7mW");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/components/footerStyle.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const footerStyle = {
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right"
  },
  rightLinks: {
    float: "right!important",
    "& ul": {
      marginBottom: 0,
      marginTop: 10,
      padding: 0,
      listStyle: "none",
      height: 38,
      "& li": {
        display: "inline-block"
      }
    },
    "& i": {
      fontSize: "20px"
    }
  },
  footer: {
    padding: "0.9375rem 0",
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "relative",
    "& ul": {
      marginBottom: "0",
      padding: 0,
      listStyle: "none"
    }
  },
  big: {
    padding: "1.875rem 0",
    "& h5, & h4": {
      fontWeight: 700,
      fontFamily: "Roboto Slab,Times New Roman,serif",
      marginBottom: "15px"
    },
    "& p": {
      color: nextjs_material_tim_andrus["s" /* grayColor */][0]
    }
  },
  content: {
    textAlign: "left"
  },
  a: {
    color: nextjs_material_tim_andrus["G" /* primaryColor */][0],
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  dark: {
    background: "radial-gradient(ellipse at center," + nextjs_material_tim_andrus["s" /* grayColor */][4] + " 0," + nextjs_material_tim_andrus["s" /* grayColor */][5] + " 100%)",
    backgroundSize: "550% 450%",
    color: nextjs_material_tim_andrus["Z" /* whiteColor */],
    "& p": {
      color: nextjs_material_tim_andrus["s" /* grayColor */][0]
    },
    "& i": {
      color: nextjs_material_tim_andrus["Z" /* whiteColor */]
    },
    "& a": {
      color: nextjs_material_tim_andrus["Z" /* whiteColor */],
      opacity: ".86",
      "&:visited": {
        color: nextjs_material_tim_andrus["Z" /* whiteColor */]
      },
      "&:focus, &:hover": {
        opacity: 1
      }
    },
    "& hr": {
      borderColor: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Z" /* whiteColor */]) + ",0.2)"
    },
    "& $btnTwitter, & $btnDribbble, & $btnInstagram": {
      color: nextjs_material_tim_andrus["Z" /* whiteColor */]
    }
  },
  white: {
    backgroundColor: nextjs_material_tim_andrus["Z" /* whiteColor */],
    color: nextjs_material_tim_andrus["s" /* grayColor */][1],
    textDecoration: "none",
    "& a": {
      "&:visited": {
        color: nextjs_material_tim_andrus["s" /* grayColor */][1]
      },
      "&:hover, &:focus": {
        color: nextjs_material_tim_andrus["s" /* grayColor */][20]
      }
    }
  },
  container: nextjs_material_tim_andrus["h" /* container */],
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px"
  },
  iconSocial: {
    width: "41px",
    height: "41px",
    fontSize: "24px",
    minWidth: "41px",
    padding: 0,
    overflow: "hidden",
    position: "relative"
  },
  btnTwitter: _objectSpread({}, nextjs_material_tim_andrus["d" /* btnLink */], {
    color: nextjs_material_tim_andrus["V" /* twitterColor */]
  }),
  btnDribbble: _objectSpread({}, nextjs_material_tim_andrus["d" /* btnLink */], {
    color: nextjs_material_tim_andrus["p" /* dribbbleColor */]
  }),
  btnInstagram: _objectSpread({}, nextjs_material_tim_andrus["d" /* btnLink */], {
    color: nextjs_material_tim_andrus["x" /* instagramColor */]
  }),
  footerBrand: {
    height: "50px",
    padding: "15px 15px",
    fontSize: "18px",
    lineHeight: "50px",
    marginLeft: "-15px",
    color: nextjs_material_tim_andrus["s" /* grayColor */][1],
    textDecoration: "none",
    fontWeight: 700,
    fontFamily: "Roboto Slab,Times New Roman,serif"
  },
  pullCenter: {
    display: "inline-block",
    float: "none"
  },
  clearFix: {
    clear: "both"
  }
};
/* harmony default export */ var components_footerStyle = (footerStyle);
// CONCATENATED MODULE: ./components/Footer/Footer.js
var __jsx = external_react_default.a.createElement;

/* eslint-disable */
 // nodejs library to set properties for components

// nodejs library that concatenates classes
 // @material-ui/core components



 // @material-ui/icons



const useStyles = Object(styles_["makeStyles"])(components_footerStyle);
function Footer(props) {
  const {
    children,
    content,
    theme,
    big,
    className
  } = props;
  const classes = useStyles();
  const themeType = theme === "transparent" || theme == undefined ? false : true;
  const footerClasses = external_classnames_default()({
    [classes.footer]: true,
    [classes[theme]]: themeType,
    [classes.big]: big || children !== undefined,
    [className]: className !== undefined
  });
  const aClasses = external_classnames_default()({
    [classes.a]: true
  });
  return __jsx("footer", {
    className: footerClasses
  }, __jsx("div", {
    className: classes.container
  }, children !== undefined ? __jsx("div", null, __jsx("div", {
    className: classes.content
  }, children), __jsx("hr", null)) : " ", content, __jsx("div", {
    className: classes.clearFix
  })));
}

/***/ }),

/***/ "Hak1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2tlbmRhbGwuanBnIjs=");

/***/ }),

/***/ "Hd3h":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanelSummary");

/***/ }),

/***/ "I2om":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Byb2R1Y3QyLmpwZyI7");

/***/ }),

/***/ "IhOE":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FiberManualRecord");

/***/ }),

/***/ "JJVH":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ShoppingBasket");

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "Js1E":
/***/ (function(module, exports) {

module.exports = require("nouislider");

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

/***/ "MpJv":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Warning");

/***/ }),

/***/ "Ms0O":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "N/Uj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Accordion; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/ExpansionPanel"
var ExpansionPanel_ = __webpack_require__("DRgV");
var ExpansionPanel_default = /*#__PURE__*/__webpack_require__.n(ExpansionPanel_);

// EXTERNAL MODULE: external "@material-ui/core/ExpansionPanelSummary"
var ExpansionPanelSummary_ = __webpack_require__("Hd3h");
var ExpansionPanelSummary_default = /*#__PURE__*/__webpack_require__.n(ExpansionPanelSummary_);

// EXTERNAL MODULE: external "@material-ui/core/ExpansionPanelDetails"
var ExpansionPanelDetails_ = __webpack_require__("h1YJ");
var ExpansionPanelDetails_default = /*#__PURE__*/__webpack_require__.n(ExpansionPanelDetails_);

// EXTERNAL MODULE: external "@material-ui/icons/ExpandMore"
var ExpandMore_ = __webpack_require__("3PpT");
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_);

// EXTERNAL MODULE: ./assets/jss/nextjs-material-tim-andrus.js
var nextjs_material_tim_andrus = __webpack_require__("k7mW");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/components/accordionStyle.js


const accordionStyle = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: "20px"
  },
  expansionPanel: {
    boxShadow: "none",
    "&:before": {
      display: "none !important"
    }
  },
  expansionPanelExpanded: {
    margin: "0 !important"
  },
  expansionPanelSummary: {
    minHeight: "auto !important",
    backgroundColor: "transparent",
    borderBottom: "1px solid " + nextjs_material_tim_andrus["s" /* grayColor */][6],
    padding: "25px 10px 5px 0px",
    borderTopLeftRadius: "3px",
    borderTopRightRadius: "3px",
    color: nextjs_material_tim_andrus["s" /* grayColor */][1]
  },
  primaryExpansionPanelSummary: {
    "&:hover": {
      color: nextjs_material_tim_andrus["G" /* primaryColor */][0]
    }
  },
  secondaryExpansionPanelSummary: {
    "&:hover": {
      color: nextjs_material_tim_andrus["L" /* secondaryColor */][0]
    }
  },
  warningExpansionPanelSummary: {
    "&:hover": {
      color: nextjs_material_tim_andrus["Y" /* warningColor */][0]
    }
  },
  dangerExpansionPanelSummary: {
    "&:hover": {
      color: nextjs_material_tim_andrus["l" /* dangerColor */][0]
    }
  },
  successExpansionPanelSummary: {
    "&:hover": {
      color: nextjs_material_tim_andrus["R" /* successColor */][0]
    }
  },
  infoExpansionPanelSummary: {
    "&:hover": {
      color: nextjs_material_tim_andrus["w" /* infoColor */][0]
    }
  },
  roseExpansionPanelSummary: {
    "&:hover": {
      color: nextjs_material_tim_andrus["K" /* roseColor */][0]
    }
  },
  expansionPanelSummaryExpaned: {
    "& $expansionPanelSummaryExpandIcon": {
      [theme.breakpoints.up("md")]: {
        top: "auto !important"
      },
      transform: "rotate(180deg)",
      [theme.breakpoints.down("sm")]: {
        top: "10px !important"
      },
      // some jss/css to make the cards look a bit better on Internet Explorer
      "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
        display: "inline-block !important",
        top: "10px !important"
      }
    }
  },
  primaryExpansionPanelSummaryExpaned: {
    color: nextjs_material_tim_andrus["G" /* primaryColor */][0]
  },
  secondaryExpansionPanelSummaryExpaned: {
    color: nextjs_material_tim_andrus["L" /* secondaryColor */][0]
  },
  warningExpansionPanelSummaryExpaned: {
    color: nextjs_material_tim_andrus["Y" /* warningColor */][0]
  },
  dangerExpansionPanelSummaryExpaned: {
    color: nextjs_material_tim_andrus["l" /* dangerColor */][0]
  },
  successExpansionPanelSummaryExpaned: {
    color: nextjs_material_tim_andrus["R" /* successColor */][0]
  },
  infoExpansionPanelSummaryExpaned: {
    color: nextjs_material_tim_andrus["w" /* infoColor */][0]
  },
  roseExpansionPanelSummaryExpaned: {
    color: nextjs_material_tim_andrus["K" /* roseColor */][0]
  },
  expansionPanelSummaryContent: {
    margin: "0 !important"
  },
  expansionPanelSummaryExpandIcon: {
    [theme.breakpoints.up("md")]: {
      top: "auto !important"
    },
    transform: "rotate(0deg)",
    color: "inherit",
    right: "10px",
    position: "absolute",
    [theme.breakpoints.down("sm")]: {
      top: "10px !important"
    },
    // some jss/css to make the cards look a bit better on Internet Explorer
    "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
      display: "inline-block !important"
    }
  },
  expansionPanelSummaryExpandIconExpanded: {},
  title: {
    fontSize: "15px",
    fontWeight: "bolder",
    marginTop: "0",
    marginBottom: "0",
    color: "inherit"
  },
  expansionPanelDetails: {
    display: "block",
    padding: "15px 0px 5px",
    fontSize: ".875rem"
  }
});

/* harmony default export */ var components_accordionStyle = (accordionStyle);
// CONCATENATED MODULE: ./components/Accordion/Accordion.js
var __jsx = external_react_default.a.createElement;
 // nodejs library to set properties for components

// @material-ui/core components



 // @material-ui/icons



const useStyles = Object(styles_["makeStyles"])(components_accordionStyle);
function Accordion(props) {
  const [active, setActive] = external_react_default.a.useState(props.active.length === undefined ? [props.active] : props.active);
  const [single] = external_react_default.a.useState(props.active.length === undefined ? true : false);

  const handleChange = panel => () => {
    let newArray;

    if (single) {
      if (active[0] === panel) {
        newArray = [];
      } else {
        newArray = [panel];
      }
    } else {
      if (active.indexOf(panel) === -1) {
        newArray = [...active, panel];
      } else {
        newArray = [...active];
        newArray.splice(active.indexOf(panel), 1);
      }
    }

    setActive(newArray);
  };

  const {
    collapses,
    activeColor
  } = props;
  const classes = useStyles();
  return __jsx("div", {
    className: classes.root
  }, collapses.map((prop, key) => {
    return __jsx(ExpansionPanel_default.a, {
      expanded: active === key || active.indexOf(key) !== -1,
      onChange: handleChange(key),
      key: key,
      classes: {
        root: classes.expansionPanel,
        expanded: classes.expansionPanelExpanded
      }
    }, __jsx(ExpansionPanelSummary_default.a, {
      expandIcon: __jsx(ExpandMore_default.a, null),
      classes: {
        root: `${classes.expansionPanelSummary} ${classes[activeColor + "ExpansionPanelSummary"]}`,
        expanded: `${classes.expansionPanelSummaryExpaned} ${classes[activeColor + "ExpansionPanelSummaryExpaned"]}`,
        content: classes.expansionPanelSummaryContent,
        expandIcon: classes.expansionPanelSummaryExpandIcon
      }
    }, __jsx("h4", {
      className: classes.title
    }, prop.title)), __jsx(ExpansionPanelDetails_default.a, {
      className: classes.expansionPanelDetails
    }, prop.content));
  }));
}
Accordion.defaultProps = {
  active: -1,
  activeColor: "primary"
};

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "OL+V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Email");

/***/ }),

/***/ "OW/O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NhcmQtcHJvZmlsZTYtc3F1YXJlLmpwZyI7");

/***/ }),

/***/ "OdWO":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "P+fx":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Apps");

/***/ }),

/***/ "PbyA":
/***/ (function(module, exports) {

module.exports = require("react-tagsinput");

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

/***/ "Q6gG":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Mail");

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

/***/ "QfSR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Byb2R1Y3QxLmpwZyI7");

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

/***/ "RxNr":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Receipt");

/***/ }),

/***/ "SDfx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NvbG9yMS5qcGciOw==");

/***/ }),

/***/ "SJC6":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

/***/ }),

/***/ "Shq7":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Person");

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

/***/ "TWtx":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableHead");

/***/ }),

/***/ "TxAV":
/***/ (function(module, exports) {

module.exports = require("react-datetime");

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

/***/ "VMnw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Remove");

/***/ }),

/***/ "W/Kq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Add");

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "WpHN":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Face");

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

/***/ "XnMA":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Settings");

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

/***/ "YQNy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const buttonGroupStyle = {
  buttonGroup: {
    position: "relative",
    margin: "10px 1px",
    display: "inline-flex",
    verticalAlign: "middle"
  },
  firstButton: {
    borderTopRightRadius: "0",
    borderBottomRightRadius: "0",
    margin: "0",
    position: "relative",
    float: "left",
    "&:hover": {
      zIndex: "2"
    }
  },
  middleButton: {
    borderRadius: "0",
    margin: "0",
    position: "relative",
    float: "left",
    "&:hover": {
      zIndex: "2"
    }
  },
  lastButton: {
    borderTopLeftRadius: "0",
    borderBottomLeftRadius: "0",
    margin: "0",
    "&:hover": {
      zIndex: "2"
    }
  }
};
/* harmony default export */ __webpack_exports__["a"] = (buttonGroupStyle);

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

/***/ "YkC2":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Edit");

/***/ }),

/***/ "Z2Lm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Parallax; });

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

// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/components/parallaxStyle.js

const parallaxStyle = {
  parallax: {
    height: "100vh",
    maxHeight: "1600px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "50%",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center"
  },
  filter: {},
  primaryColor: {
    "&:before": {
      background: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.5)"
    },
    "&:after": {
      background: "linear-gradient(60deg,rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["G" /* primaryColor */][4]) + ",.56),rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["G" /* primaryColor */][5]) + ",.95))"
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
  roseColor: {
    "&:before": {
      background: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.5)"
    },
    "&:after": {
      background: "linear-gradient(60deg,rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["K" /* roseColor */][3]) + ",.56),rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["K" /* roseColor */][4]) + ",.95))"
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
  darkColor: {
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
  infoColor: {
    "&:before": {
      background: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.5)"
    },
    "&:after": {
      background: "linear-gradient(60deg,rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["w" /* infoColor */][6]) + ",.56),rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["w" /* infoColor */][7]) + ",.95))"
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
  successColor: {
    "&:before": {
      background: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.5)"
    },
    "&:after": {
      background: "linear-gradient(60deg,rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["R" /* successColor */][6]) + ",.56),rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["R" /* successColor */][7]) + ",.95))"
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
  warningColor: {
    "&:before": {
      background: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.5)"
    },
    "&:after": {
      background: "linear-gradient(60deg,rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Y" /* warningColor */][6]) + ",.56),rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["Y" /* warningColor */][7]) + ",.95))"
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
  dangerColor: {
    "&:before": {
      background: "rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.5)"
    },
    "&:after": {
      background: "linear-gradient(60deg,rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["l" /* dangerColor */][6]) + ",.56),rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["l" /* dangerColor */][7]) + ",.95))"
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
  small: {
    height: "65vh",
    minHeight: "65vh",
    maxHeight: "650px"
  }
};
/* harmony default export */ var components_parallaxStyle = (parallaxStyle);
// CONCATENATED MODULE: ./components/Parallax/Parallax.js
var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components
 // core components


const useStyles = Object(styles_["makeStyles"])(components_parallaxStyle);
function Parallax(props) {
  let windowScrollTop = 0;
  const [transform, setTransform] = external_react_default.a.useState("translate3d(0," + windowScrollTop + "px,0)");
  external_react_default.a.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform);
    }

    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
      }
    };
  });

  const resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3;
    setTransform("translate3d(0," + windowScrollTop + "px,0)");
  };

  const {
    filter,
    className,
    children,
    style,
    image,
    small
  } = props;
  const classes = useStyles();
  const parallaxClasses = external_classnames_default()({
    [classes.parallax]: true,
    [classes[filter + "Color"]]: filter !== undefined,
    [classes.small]: small,
    [className]: className !== undefined
  });
  return __jsx("div", {
    className: parallaxClasses,
    style: _objectSpread({}, style, {
      backgroundImage: "url(" + image + ")",
      transform: transform
    })
  }, children);
}

/***/ }),

/***/ "aIa2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Quote; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("pUqt");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components
 // core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_nextjs_material_tim_andrus_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
function Quote(props) {
  const {
    text,
    author,
    authorClassName,
    textClassName
  } = props;
  const classes = useStyles();
  const quoteClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.defaultFontStyle, classes.quote);
  const quoteTextClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    [classes.quoteText]: true,
    [textClassName]: textClassName !== undefined
  });
  const quoteAuthorClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    [classes.quoteAuthor]: true,
    [authorClassName]: authorClassName !== undefined
  });
  return __jsx("blockquote", {
    className: quoteClasses
  }, __jsx("p", {
    className: quoteTextClasses
  }, text), __jsx("small", {
    className: quoteAuthorClasses
  }, author));
}

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

/***/ "cWMY":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Explore");

/***/ }),

/***/ "d3hG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("k7mW");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const customSelectStyle = {
  select: {
    padding: "12px 0 7px",
    fontSize: ".75rem",
    fontWeight: "400",
    lineHeight: "1.42857",
    textDecoration: "none",
    textTransform: "uppercase",
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "s"][1],
    letterSpacing: "0",
    "&:focus": {
      backgroundColor: "transparent"
    },
    "&[aria-owns] + input + svg": {
      transform: "rotate(180deg)"
    },
    "& + input + svg": {
      transition: "all 300ms linear"
    }
  },
  selectFormControl: {
    margin: "10px 1px 10px 0px !important",
    "& > div": {
      "&:before": {
        borderBottomWidth: "1px !important",
        borderBottomColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "s"][11] + " !important"
      },
      "&:after": {
        borderBottomColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* primaryColor */ "G"][0] + "!important"
      }
    }
  },
  selectLabel: {
    fontSize: "12px",
    textTransform: "uppercase",
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "s"][1] + " !important",
    top: "8px"
  },
  selectMenu: {
    "& > div > ul": {
      border: "0",
      padding: "5px 0",
      margin: "0",
      boxShadow: "none",
      minWidth: "100%",
      borderRadius: "4px",
      boxSizing: "border-box",
      display: "block",
      fontSize: "14px",
      textAlign: "left",
      listStyle: "none",
      backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* whiteColor */ "Z"],
      backgroundClip: "padding-box"
    },
    "& $selectPaper $selectMenuItemSelectedMultiple": {
      backgroundColor: "inherit"
    }
  },
  selectMenuItem: {
    fontSize: "13px",
    padding: "10px 20px",
    margin: "0 5px",
    borderRadius: "2px",
    transition: "all 150ms linear",
    display: "block",
    clear: "both",
    fontWeight: "400",
    lineHeight: "2",
    whiteSpace: "nowrap",
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "s"][8],
    paddingRight: "30px",
    "&:hover": _objectSpread({
      backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* primaryColor */ "G"][0],
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* whiteColor */ "Z"]
    }, assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* primaryBoxShadow */ "E"])
  },
  selectMenuItemSelected: {
    backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* primaryColor */ "G"][0] + "!important",
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* whiteColor */ "Z"]
  },
  selectMenuItemSelectedMultiple: {
    "&:hover": _objectSpread({
      backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* primaryColor */ "G"][0] + "!important",
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* whiteColor */ "Z"]
    }, assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* primaryBoxShadow */ "E"], {
      "&:after": {
        color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* whiteColor */ "Z"]
      }
    }),
    "&:after": {
      top: "16px",
      right: "12px",
      width: "12px",
      height: "5px",
      borderLeft: "2px solid currentColor",
      transform: "rotate(-45deg)",
      opacity: "1",
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "s"][1],
      position: "absolute",
      content: "''",
      borderBottom: "2px solid currentColor",
      transition: "opacity 90ms cubic-bezier(0,0,.2,.1)"
    }
  },
  selectPaper: {
    boxSizing: "borderBox",
    borderRadius: "4px",
    padding: "0",
    minWidth: "100%",
    display: "block",
    border: "0",
    boxShadow: "0 2px 5px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "t"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "b"]) + ", 0.26)",
    backgroundClip: "padding-box",
    margin: "2px 0 0",
    fontSize: "14px",
    textAlign: "left",
    listStyle: "none",
    backgroundColor: "transparent",
    maxHeight: "266px"
  }
};
/* harmony default export */ __webpack_exports__["a"] = (customSelectStyle);

/***/ }),

/***/ "dR5g":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Bookmark");

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

/***/ "dg73":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NvbG9yMi5qcGciOw==");

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

/***/ "fA+V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popover");

/***/ }),

/***/ "fEgT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

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

/***/ "h1YJ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanelDetails");

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

/***/ "iDDF":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableRow");

/***/ }),

/***/ "iSPQ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "iTUb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

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

/***/ "k3mB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Jsb2cxLmpwZyI7");

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

/***/ "kMoN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Media; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-tim-andrus.js
var nextjs_material_tim_andrus = __webpack_require__("k7mW");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-tim-andrus/components/mediaStyle.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const mediaStyle = theme => ({
  media: {
    [theme.breakpoints.down("md")]: {
      display: "block"
    },
    display: "flex",
    WebkitBoxAlign: "start",
    alignItems: "flex-start",
    "& p": {
      color: nextjs_material_tim_andrus["s" /* grayColor */][0],
      fontSize: "1rem",
      lineHeight: "1.6em"
    },
    "& $media $mediaBody": {
      paddingRight: "0px"
    }
  },
  mediaLink: {
    padding: "10px",
    float: "left !important"
  },
  mediaAvatar: {
    margin: "0 auto",
    width: "64px",
    height: "64px",
    overflow: "hidden",
    borderRadius: "50%",
    marginRight: "15px",
    boxShadow: "0 6px 10px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.14), 0 1px 18px 0 rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.12), 0 3px 5px -1px rgba(" + Object(nextjs_material_tim_andrus["t" /* hexToRgb */])(nextjs_material_tim_andrus["b" /* blackColor */]) + ", 0.2)",
    "& img": {
      width: "100%"
    }
  },
  mediaBody: {
    paddingRight: "10px",
    WebkitBoxFlex: "1",
    flex: "1"
  },
  mediaHeading: _objectSpread({}, nextjs_material_tim_andrus["S" /* title */], {
    marginTop: "10px",
    marginBottom: "10px",
    "& small": {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
    }
  }),
  mediaFooter: {
    "& button, & a": {
      marginBottom: "20px"
    },
    "&:after": {
      display: "table",
      content: '" "',
      clear: "both"
    }
  }
});

/* harmony default export */ var components_mediaStyle = (mediaStyle);
// CONCATENATED MODULE: ./components/Media/Media.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library to set properties for components

// @material-ui/core components
 // @material-ui/icons
// core components


const useStyles = Object(styles_["makeStyles"])(components_mediaStyle);
function Media(props) {
  const {
    avatarLink,
    avatar,
    avatarAlt,
    title,
    body,
    footer,
    innerMedias
  } = props,
        rest = _objectWithoutProperties(props, ["avatarLink", "avatar", "avatarAlt", "title", "body", "footer", "innerMedias"]);

  const classes = useStyles();
  return __jsx("div", _extends({}, rest, {
    className: classes.media
  }), __jsx("a", {
    href: avatarLink,
    className: classes.mediaLink
  }, __jsx("div", {
    className: classes.mediaAvatar
  }, __jsx("img", {
    src: avatar,
    alt: avatarAlt
  }))), __jsx("div", {
    className: classes.mediaBody
  }, title !== undefined ? __jsx("h4", {
    className: classes.mediaHeading
  }, title) : null, body, __jsx("div", {
    className: classes.mediaFooter
  }, footer), innerMedias !== undefined ? innerMedias.map(prop => {
    return prop;
  }) : null));
}
Media.defaultProps = {
  avatarLink: "#pablo",
  avatarAlt: "..."
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

/***/ "lOiU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Switch");

/***/ }),

/***/ "lWoh":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "lZfH":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Dns");

/***/ }),

/***/ "lj8g":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputAdornment");

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

/***/ "mz+e":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Slide");

/***/ }),

/***/ "n1EF":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SnackbarContent");

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

/***/ "nd8x":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/KeyboardArrowRight");

/***/ }),

/***/ "ng1p":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

/***/ }),

/***/ "nybW":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "oD+/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("k7mW");

const imagesStyles = {
  imgFluid: {
    maxWidth: "100%",
    height: "auto"
  },
  imgRounded: {
    borderRadius: "6px !important"
  },
  imgRoundedCircle: {
    borderRadius: "50% !important"
  },
  imgRaised: {
    boxShadow: "0 5px 15px -8px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "t"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "b"]) + ", 0.24), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "t"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "b"]) + ", 0.2)"
  },
  imgGallery: {
    width: "100%",
    marginBottom: "2.142rem"
  },
  imgCardTop: {
    width: "100%",
    borderTopLeftRadius: "calc(.25rem - 1px)",
    borderTopRightRadius: "calc(.25rem - 1px)"
  },
  imgCardBottom: {
    width: "100%",
    borderBottomLeftRadius: "calc(.25rem - 1px)",
    borderBottomRightRadius: "calc(.25rem - 1px)"
  },
  imgCard: {
    width: "100%",
    borderRadius: "calc(.25rem - 1px)"
  },
  imgCardOverlay: {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    padding: "1.25rem"
  }
};
/* harmony default export */ __webpack_exports__["a"] = (imagesStyles);

/***/ }),

/***/ "obQk":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChatBubble");

/***/ }),

/***/ "p1B7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NvbG9yMy5qcGciOw==");

/***/ }),

/***/ "pC0U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2JnMi5qcGciOw==");

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

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "rmeN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("k7mW");
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_imagesStyles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oD+/");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const style = _objectSpread({}, assets_jss_nextjs_material_tim_andrus_imagesStyles_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
  container: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* container */ "h"],
  title: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* title */ "S"],
  description: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* description */ "n"],
  section: _objectSpread({}, assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* section */ "M"], {
    padding: "70px 0px"
  }),
  socialFeed: {
    "& p": {
      display: "table-cell",
      verticalAlign: "top",
      overflow: "hidden",
      paddingBottom: "10px",
      maxWidth: 300
    },
    "& i": {
      fontSize: "20px",
      display: "table-cell",
      paddingRight: "10px"
    }
  },
  img: {
    width: "20%",
    marginRight: "5%",
    marginBottom: "5%",
    float: "left"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right"
  },
  aClass: {
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  footerBrand: {
    height: "50px",
    padding: "15px 15px",
    fontSize: "18px",
    lineHeight: "50px",
    marginLeft: "-15px",
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "s"][1],
    textDecoration: "none",
    fontWeight: 700,
    fontFamily: "Roboto Slab,Times New Roman,serif"
  },
  pullCenter: {
    display: "inline-block",
    float: "none"
  },
  rightLinks: {
    float: "right!important",
    "& ul": {
      marginBottom: 0,
      padding: 0,
      listStyle: "none",
      "& li": {
        display: "inline-block"
      },
      "& a": {
        display: "block"
      }
    },
    "& i": {
      fontSize: "20px"
    }
  },
  linksVertical: {
    "& li": {
      display: "block !important",
      marginLeft: "-5px",
      marginRight: "-5px",
      "& a": {
        padding: "5px !important"
      }
    }
  },
  footer: {
    "& ul li": {
      display: "inline-block"
    },
    "& h4, & h5": {
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "s"][1],
      textDecoration: "none"
    },
    "& ul:not($socialButtons) li a": {
      color: "inherit",
      padding: "0.9375rem",
      fontWeight: "500",
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "3px",
      textDecoration: "none",
      position: "relative",
      display: "block"
    },
    "& small": {
      fontSize: "75%",
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "s"][10]
    },
    "& $pullCenter": {
      display: "inline-block",
      float: "none"
    }
  },
  iconSocial: {
    width: "41px",
    height: "41px",
    fontSize: "24px",
    minWidth: "41px",
    padding: 0,
    overflow: "hidden",
    position: "relative"
  },
  copyRight: {
    padding: "15px 0px"
  },
  socialButtons: {
    "& li": {
      display: "inline-block"
    }
  },
  btnTwitter: _objectSpread({}, assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* btnLink */ "d"], {
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* twitterColor */ "V"]
  }),
  btnDribbble: _objectSpread({}, assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* btnLink */ "d"], {
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* dribbbleColor */ "p"]
  }),
  btnInstagram: _objectSpread({}, assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* btnLink */ "d"], {
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__[/* instagramColor */ "x"]
  }),
  icon: {
    top: "3px",
    width: "18px",
    height: "18px",
    position: "relative"
  },
  customFormControl: {
    paddingTop: "14px"
  }
});

/* harmony default export */ __webpack_exports__["a"] = (style);

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

/***/ "uQSa":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Refresh");

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

/***/ "vF8F":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tooltip");

/***/ }),

/***/ "vFf/":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Dashboard");

/***/ }),

/***/ "vWjG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL29mZmljZTEuanBnIjs=");

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

/***/ "wcIh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Byb2R1Y3QzLmpwZyI7");

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

/***/ }),

/***/ "zuQh":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Schedule");

/***/ })

/******/ });