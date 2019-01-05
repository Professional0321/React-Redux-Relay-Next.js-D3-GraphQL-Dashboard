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
/******/ 	__webpack_require__.p = "/_next/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 105);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var roles = {
  ANONYMOUS: "ANONYMOUS",
  // only the anonymous has this
  AUTHENTICATED: "AUTHENTICATED",
  // every one except the anonymous has this
  ADMIN: "ADMIN"
};
module.exports = {
  apiBase: "/api",
  graphqlBase: "/graphql",
  socketsBase: "/ws",
  roles: roles,
  oauthProviders: {
    FACEBOOK: "FACEBOOK",
    TWITTER: "TWITTER",
    GOOGLE: "GOOGLE"
  },
  pages: {
    "/": {
      page: "/",
      icon: "dashboard",
      menu: "MENU_DASHBOARD",
      title: "TITLE_DASHBOARD"
    },
    "/forms": {
      page: "/forms",
      icon: "forms",
      menu: "MENU_FORMS",
      title: "TITLE_FORMS"
    },
    "/charts": {
      page: "/charts",
      icon: "charts",
      menu: "MENU_CHARTS",
      title: "TITLE_CHARTS"
    },
    "/tables": {
      page: "/tables",
      icon: "tables",
      menu: "MENU_TABLES",
      title: "TITLE_TABLES"
    },
    "/maps": {
      page: "/maps",
      icon: "maps",
      menu: "MENU_MAPS",
      title: "TITLE_MAPS"
    },
    "/notifications": {
      page: "/notifications",
      icon: "notifications",
      menu: "MENU_NOTIFICATIONS",
      title: "TITLE_NOTIFICATIONS"
    },
    "/typography": {
      page: "/typography",
      icon: "typography",
      menu: "MENU_TYPOGRAPHY",
      title: "TITLE_TYPOGRAPHY"
    },
    "/icons": {
      page: "/icons",
      icon: "icons",
      menu: "MENU_ICONS",
      title: "TITLE_ICONS"
    },
    "/auth/profile": {
      page: "/auth/profile",
      title: "TITLE_PROFILE",
      roles: [roles.AUTHENTICATED]
    },
    "/auth/verify": {
      page: "/auth/verify",
      title: "TITLE_VERIFY_EMAIL"
    },
    "/auth/error": {
      page: "/auth/error",
      title: "TITLE_OAUTH_ERROR"
    },
    "/users": {
      page: "/users",
      icon: "users",
      menu: "MENU_USERS",
      title: "TITLE_USERS",
      roles: [roles.ADMIN]
    }
  },
  depts: {
    prod: "DASHBOARD_PRODUCTION_LABEL",
    rd: "DASHBOARD_RD_LABEL",
    purch: "DASHBOARD_PURCHASING_LABEL",
    market: "DASHBOARD_MARKETING_LABEL",
    hr: "DASHBOARD_HR_LABEL",
    acc: "DASHBOARD_ACCOUNTING_LABEL"
  },
  tableUrl: "https://jsonplaceholder.typicode.com/photos",
  messages: {
    HELLO: "HELLO",
    SET_STATUS: "SET_STATUS"
  },
  events: {
    FONTS_LOADED: "FONTS_LOADED"
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appSelectors = exports.appOperations = exports.appTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__(24));

var appTypes = _interopRequireWildcard(__webpack_require__(12));

exports.appTypes = appTypes;

var appOperations = _interopRequireWildcard(__webpack_require__(29));

exports.appOperations = appOperations;

var appSelectors = _interopRequireWildcard(__webpack_require__(42));

exports.appSelectors = appSelectors;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _reducers.default;
exports.default = _default;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authSelectors = exports.authOperations = exports.authTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__(33));

var authTypes = _interopRequireWildcard(__webpack_require__(13));

exports.authTypes = authTypes;

var authOperations = _interopRequireWildcard(__webpack_require__(34));

exports.authOperations = authOperations;

var authSelectors = _interopRequireWildcard(__webpack_require__(17));

exports.authSelectors = authSelectors;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _reducers.default;
exports.default = _default;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("redux-immutable");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SET_LOCALE = exports.SET_CONNECTED = exports.SET_STATUS_CODE = exports.STOP = exports.START = exports.INIT = exports.CREATE = void 0;
var CREATE = "app/app/CREATE";
exports.CREATE = CREATE;
var INIT = "app/app/INIT";
exports.INIT = INIT;
var START = "app/app/START";
exports.START = START;
var STOP = "app/app/STOP";
exports.STOP = STOP;
var SET_STATUS_CODE = "app/app/SET_STATUS_CODE";
exports.SET_STATUS_CODE = SET_STATUS_CODE;
var SET_CONNECTED = "app/app/SET_CONNECTED";
exports.SET_CONNECTED = SET_CONNECTED;
var SET_LOCALE = "app/app/SET_LOCALE";
exports.SET_LOCALE = SET_LOCALE;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SET_GOOGLE_MAPS_KEY = exports.SET_STATUS = exports.SET_CSRF = void 0;
var SET_CSRF = "app/auth/SET_CSRF";
exports.SET_CSRF = SET_CSRF;
var SET_STATUS = "app/auth/SET_STATUS";
exports.SET_STATUS = SET_STATUS;
var SET_GOOGLE_MAPS_KEY = "app/auth/SET_GOOGLE_MAPS_KEY";
exports.SET_GOOGLE_MAPS_KEY = SET_GOOGLE_MAPS_KEY;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("redux-form/immutable");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var moment = __webpack_require__(32); // Add locales:
//require("moment/locale/ru.js"); // en is already there


module.exports = moment;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserProviders = exports.getAllProviders = exports.getRoles = exports.getEmail = exports.getName = exports.isAdmin = exports.isAuthenticated = exports.getCsrf = void 0;

var _reselect = __webpack_require__(21);

var _constants = _interopRequireDefault(__webpack_require__(5));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getCsrf = function getCsrf(state) {
  return state.getIn(["auth", "csrf"]);
};

exports.getCsrf = getCsrf;

var isAuthenticated = function isAuthenticated(state) {
  return state.getIn(["auth", "isAuthenticated"]);
};
/* eslint-disable lodash/prefer-lodash-method */


exports.isAuthenticated = isAuthenticated;

var isAdmin = function isAdmin(state) {
  return state.getIn(["auth", "roles"]).includes(_constants.default.roles.ADMIN);
};
/* eslint-enable */


exports.isAdmin = isAdmin;

var getName = function getName(state) {
  return state.getIn(["auth", "name"]);
};

exports.getName = getName;

var getEmail = function getEmail(state) {
  return state.getIn(["auth", "email"]);
};

exports.getEmail = getEmail;
var getRoles = (0, _reselect.createSelector)(function (state) {
  return state.getIn(["auth", "roles"]);
}, function (roles) {
  return roles.toJS();
});
exports.getRoles = getRoles;
var getAllProviders = (0, _reselect.createSelector)(function (state) {
  return state.getIn(["auth", "providers"]);
}, function (providers) {
  return Array.from(providers.keys());
});
exports.getAllProviders = getAllProviders;
var getUserProviders = (0, _reselect.createSelector)(function (state) {
  return state.getIn(["auth", "providers"]);
}, function (providers) {
  return providers.toJS();
});
exports.getUserProviders = getUserProviders;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

function parse(source) {
  var messages = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _.keys(source)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;
      messages[key] = _.isArray(source[key]) ? source[key].join("") : source[key];
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return messages;
}

module.exports = {
  defaultLocale: "en",
  locales: ["en", "ru"],
  flags: {
    en: "US",
    ru: "RU"
  },
  names: {
    en: "English",
    ru: "Русский язык"
  },
  messages: {
    en: parse(__webpack_require__(25)),
    ru: parse(__webpack_require__(26))
  },
  getLocaleData: function getLocaleData() {
    return [__webpack_require__(27), __webpack_require__(28)];
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var constants = __webpack_require__(5);

module.exports = function isRouteAllowed(path) {
  var userRoles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var pageRoles = constants.pages[path] && constants.pages[path].roles;
  if (!pageRoles || pageRoles.length === 0) return true;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = pageRoles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var role = _step.value;
      if (!_.includes(userRoles, role)) return false;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return true;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _immutable = __webpack_require__(8);

var _reactIntl = __webpack_require__(6);

var _styles = __webpack_require__(3);

var _List = _interopRequireDefault(__webpack_require__(72));

var _ListItem = _interopRequireDefault(__webpack_require__(73));

var _ListItemIcon = _interopRequireDefault(__webpack_require__(53));

var _ListItemText = _interopRequireDefault(__webpack_require__(54));

var _InfoOutlined = _interopRequireDefault(__webpack_require__(74));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styles = function styles(theme) {
  return {
    errorList: {
      padding: 0
    },
    errorListItem: {
      paddingTop: "0.5rem",
      paddingLeft: "0.5rem",
      paddingRight: 0
    },
    error: {
      color: theme.palette.text.secondary
    }
  };
};

var Errors =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Errors, _React$PureComponent);

  function Errors() {
    _classCallCheck(this, Errors);

    return _possibleConstructorReturn(this, _getPrototypeOf(Errors).apply(this, arguments));
  }

  _createClass(Errors, [{
    key: "render",
    value: function render() {
      var _this = this;

      return _react.default.createElement(_List.default, {
        classes: {
          root: this.props.classes.errorList
        }
      },
      /* eslint-disable-line */
      this.props.errors.map(function (error, index) {
        return _react.default.createElement(_ListItem.default, {
          key: "error-".concat(index),
          classes: {
            root: _this.props.classes.errorListItem
          }
        }, _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_InfoOutlined.default, {
          className: _this.props.classes.error
        })), _react.default.createElement(_ListItemText.default, {
          classes: {
            primary: _this.props.classes.error
          },
          primary: _this.props.intl.formatMessage({
            id: error
          })
        }));
      }));
    }
  }]);

  return Errors;
}(_react.default.PureComponent);

var _default = (0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles)(Errors));

exports.default = _default;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("country-telephone-data");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reduxImmutable = __webpack_require__(11);

var types = _interopRequireWildcard(__webpack_require__(12));

var _locales = _interopRequireDefault(__webpack_require__(19));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* State Shape
Map({
  created: Number, // timestamp
  di: DiContainer,
  locale: String,
  statusCode: Number, // current HTTP status code
  isStarted: Boolean,
  isConnected: Boolean, // WebSocket
})
*/
var createdReducer = function createdReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.created)) return action.created;
      break;
  }

  return state;
};

var diReducer = function diReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.INIT:
      if (!_.isUndefined(action.di)) return action.di;
      break;
  }

  return state;
};

var localeReducer = function localeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _locales.default.defaultLocale;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_LOCALE:
      if (!_.isUndefined(action.locale)) return action.locale;
      break;
  }

  return state;
};

var statusCodeReducer = function statusCodeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_STATUS_CODE:
      if (_.isFinite(action.code) && action.code >= 200) return action.code;
      break;
  }

  return state;
};

var isStartedReducer = function isStartedReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.START:
      return true;

    case types.STOP:
      return false;
  }

  return state;
};

var isConnectedReducer = function isConnectedReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_CONNECTED:
      if (!_.isUndefined(action.isConnected)) return action.isConnected;
      break;
  }

  return state;
};

var reducer = (0, _reduxImmutable.combineReducers)({
  created: createdReducer,
  di: diReducer,
  locale: localeReducer,
  statusCode: statusCodeReducer,
  isStarted: isStartedReducer,
  isConnected: isConnectedReducer
});
var _default = reducer;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 25 */
/***/ (function(module) {

module.exports = {"MENU_DASHBOARD":"Dashboard","TITLE_DASHBOARD":"Dashboard","MENU_FORMS":"Forms","TITLE_FORMS":"Forms","MENU_CHARTS":"Charts","TITLE_CHARTS":"Charts","MENU_TABLES":"Tables","TITLE_TABLES":"Tables","MENU_MAPS":"Maps","TITLE_MAPS":"Maps","MENU_NOTIFICATIONS":"Notifications","TITLE_NOTIFICATIONS":"Notifications","MENU_TYPOGRAPHY":"Typography","TITLE_TYPOGRAPHY":"Typography","MENU_ICONS":"Icons","TITLE_ICONS":"Icons","MENU_USERS":"Users","TITLE_USERS":"Users","SIDEBAR_BENCHMARKS_LINK":"Benchmark Results","SIDEBAR_RESPONSIVENESS_LINK":"Responsiveness Test","HEADER_INBOX_LABEL":"Inbox","HEADER_PROFILE_LABEL":"Profile","USERS_LOGIN_COLUMN":"Login","USERS_ROLES_COLUMN":"Roles","USERS_CREATE_BUTTON":"Create User","USERS_EDIT_BUTTON":"Edit User","USERS_DELETE_BUTTON":"Delete Users","EDIT_USER_TITLE_CREATE":"Create user","EDIT_USER_TITLE_EDIT":"Edit user","EDIT_USER_NAME_LABEL":"Name","EDIT_USER_EMAIL_LABEL":"Email","EDIT_USER_PASSWORD_LABEL":"Password","EDIT_USER_ADMIN_LABEL":"Administrator","EDIT_USER_CANCEL":"Cancel","EDIT_USER_SUBMIT":"Submit","EDIT_USER_FAILED":"An error occured","DELETE_USER_TITLE":"Delete users","DELETE_USER_TEXT":"Delete selected users?","DELETE_USER_CANCEL":"Cancel","DELETE_USER_SUBMIT":"Delete","FORMS_MESSAGE_TITLE":"It's alive!","FORMS_MESSAGE_CONTENT":["The form example below is fully implemented, fields normalize and validate the input."," You can try to fill out and submit this form to see it in action."],"FORMS_SUCCESS_TITLE":"Congratulations!","FORMS_SUCCESS_TEXT":"The form is finished and ready to be submitted to the backend","FORMS_SUCCESS_SUBMIT":"OK","WIZARD_PREV_BUTTON":"Prev","WIZARD_NEXT_BUTTON":"Next","WIZARD_SUBMIT_BUTTON":"Done","WIZARD_ERROR_LABEL":"Please fill out this form","SHIPPING_STEP_TITLE":"Shipping","SHIPPING_STEP_DESCR":"Choose your shipping options","SHIPPING_FIRST_NAME_LABEL":"First name","SHIPPING_MIDDLE_NAME_LABEL":"Middle name (optional)","SHIPPING_LAST_NAME_LABEL":"Last name","SHIPPING_ADDRESS_LABEL":"Address","SHIPPING_CITY_LABEL":"City/town","SHIPPING_STATE_LABEL":"State/Province/Region (if required)","SHIPPING_CODE_LABEL":"ZIP/Postal code","SHIPPING_COUNTRY_LABEL":"Country","SHIPPING_PHONE_LABEL":"Phone number","SHIPPING_EMAIL_LABEL":"Email","SHIPPING_Q1":"What is a dog?","SHIPPING_Q2":"What kinds of dogs are there?","SHIPPING_Q3":"How do you acquire a dog?","BILLING_STEP_TITLE":"Billing","BILLING_STEP_DESCR":"Enter billing information","BILLING_CARD_NUMBER_LABEL":"Credit card number","BILLING_CARD_DATE_LABEL":"MM / YY","BILLING_CARD_SECRET_LABEL":"CVV2","BILLING_SAME_ADDRESS_LABEL":"Billing address is the same as shipping address","BILLING_Q1":"What is Lorem Ipsum?","BILLING_Q2":"When did they start using it?","CONFIRM_STEP_TITLE":"Confirm","CONFIRM_STEP_DESCR_SUCCESS":"The form is ready to be submitted","CONFIRM_STEP_DESCR_FAILURE":"The form is not completed yet","CONFIRM_SHIPPING_LABEL":"Shipping Information","CONFIRM_BILLING_LABEL":"Billing Information","CONFIRM_FIRST_NAME_LABEL":"First name:","CONFIRM_MIDDLE_NAME_LABEL":"Middle name:","CONFIRM_LAST_NAME_LABEL":"Last name:","CONFIRM_ADDRESS_LABEL":"Address:","CONFIRM_CITY_LABEL":"City/town:","CONFIRM_STATE_LABEL":"State/Province/Region:","CONFIRM_CODE_LABEL":"ZIP/Postal code:","CONFIRM_COUNTRY_LABEL":"Country:","CONFIRM_PHONE_LABEL":"Phone number:","CONFIRM_EMAIL_LABEL":"Email:","CONFIRM_CARD_NUMBER_LABEL":"Credit card number:","CONFIRM_CARD_DATE_LABEL":"Credit card expires:","APP_AUTH_TITLE":"Authentication","APP_AUTH_ANONYMOUS_BUTTON":"Anonymous","APP_AUTH_CREDENTIALS_LABEL":"Sign In using Credentials","APP_AUTH_NEW_USER_LABEL":"I don't have an account yet, please create one","APP_AUTH_EMAIL_LABEL":"Email","APP_AUTH_PASSWORD_LABEL":"Password","APP_AUTH_SERVICE_BUTTON":"Sign In with","APP_AUTH_SUBMIT":"Sign In","APP_AUTH_FAILED":"Invalid credentials","OPERATION_FAILED":"Operation failed","ERROR_FIELD_REQUIRED":"This field is required","ERROR_INVALID_PATTERN":"Please provide a valid value","ERROR_INVALID_EMAIL":"Please provide a valid email address","ERROR_INVALID_PHONE":"Please, provide a valid phone number","ERROR_INVALID_PHONE_COUNTRY":"This is not a valid phone number for this country","ERROR_INVALID_CREDIT_CARD_NUMBER":"Please, provide a valid credit card number","ERROR_INVALID_CREDIT_CARD_DATE":"Please, provide a valid credit card expiration date","ERROR_INVALID_CREDIT_CARD_SECRET":"Please, provide a valid credit card CVV2 code","ERROR_INVALID_PASSWORD":"Password should be at least 6 characters long","ERROR_MISMATCHED_PASSWORDS":"The two passwords typed do not match"};

/***/ }),
/* 26 */
/***/ (function(module) {

module.exports = {};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/en.js");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/ru.js");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = exports.init = exports.create = exports.gqlQuery = exports.stop = exports.setLocale = exports.setConnected = exports.setStatusCode = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(4));

var _isomorphicUnfetch = _interopRequireDefault(__webpack_require__(30));

var actions = _interopRequireWildcard(__webpack_require__(31));

var _auth = __webpack_require__(10);

var _constants = _interopRequireDefault(__webpack_require__(5));

var _injectt = _interopRequireDefault(__webpack_require__(36));

var _Storage = _interopRequireDefault(__webpack_require__(37));

var _Socket = _interopRequireDefault(__webpack_require__(38));

var _Cookie = _interopRequireDefault(__webpack_require__(41));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var setStatusCode = actions.setStatusCode;
exports.setStatusCode = setStatusCode;
var setConnected = actions.setConnected;
exports.setConnected = setConnected;
var setLocale = actions.setLocale;
exports.setLocale = setLocale;
var stop = actions.stop;
exports.stop = stop;

var fetchCsrf =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    var csrf, response;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            csrf = null;
            _context.prev = 1;
            _context.next = 4;
            return (0, _isomorphicUnfetch.default)(_constants.default.apiBase + "/csrf", {
              method: "GET",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              }
            });

          case 4:
            response = _context.sent;

            if (!(response.status !== 200)) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", null);

          case 7:
            _context.next = 9;
            return response.json();

          case 9:
            csrf = _context.sent.csrf;
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](1);
            console.error(_context.t0);

          case 15:
            return _context.abrupt("return", new Promise(function (resolve) {
              return setTimeout(function () {
                return resolve(csrf || fetchCsrf());
              }, 1000);
            }));

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 12]]);
  }));

  return function fetchCsrf() {
    return _ref.apply(this, arguments);
  };
}();

var gqlQuery = function gqlQuery(query, variables) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(dispatch, getState) {
        var csrf, response, data;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                csrf = _auth.authSelectors.getCsrf(getState());

                if (csrf) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 5;
                return fetchCsrf();

              case 5:
                csrf = _context2.sent;
                _context2.next = 8;
                return dispatch(_auth.authOperations.setCsrf({
                  csrf: csrf
                }));

              case 8:
                _context2.next = 10;
                return (0, _isomorphicUnfetch.default)(_constants.default.graphqlBase, {
                  method: "POST",
                  credentials: "include",
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "X-CSRF-Token": csrf
                  },
                  body: JSON.stringify({
                    query: query,
                    variables: variables
                  })
                });

              case 10:
                response = _context2.sent;

                if (!(response.status === 403)) {
                  _context2.next = 15;
                  break;
                }

                _context2.next = 14;
                return dispatch(_auth.authOperations.setCsrf({
                  csrf: null
                }));

              case 14:
                return _context2.abrupt("return", dispatch(gqlQuery(query, variables)));

              case 15:
                data = null;
                _context2.prev = 16;
                _context2.next = 19;
                return response.json();

              case 19:
                data = _context2.sent;
                _context2.next = 25;
                break;

              case 22:
                _context2.prev = 22;
                _context2.t0 = _context2["catch"](16);
                console.error(_context2.t0);

              case 25:
                if (!(response.status !== 200)) {
                  _context2.next = 27;
                  break;
                }

                throw new Error("GraphQL query failed [".concat(response.status, "]"), data);

              case 27:
                return _context2.abrupt("return", data);

              case 30:
                _context2.prev = 30;
                _context2.t1 = _context2["catch"](0);
                console.error(_context2.t1);
                throw _context2.t1;

              case 34:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 30], [16, 22]]);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};

exports.gqlQuery = gqlQuery;

var create = function create(_ref3) {
  var status = _ref3.status,
      googleMapsKey = _ref3.googleMapsKey;
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(dispatch) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return dispatch(actions.create());

              case 2:
                if (!status) {
                  _context3.next = 5;
                  break;
                }

                _context3.next = 5;
                return dispatch(_auth.authOperations.setStatus(status));

              case 5:
                if (!googleMapsKey) {
                  _context3.next = 8;
                  break;
                }

                _context3.next = 8;
                return dispatch(_auth.authOperations.setGoogleMapsKey(googleMapsKey));

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};

exports.create = create;

var init = function init() {
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(dispatch, getState) {
        var di;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                di = new _injectt.default();
                di.registerInstance(getState, "getState");
                di.registerInstance(dispatch, "dispatch");
                di.registerClass(_Storage.default);
                di.registerClass(_Socket.default);
                di.registerClass(_Cookie.default);
                return _context4.abrupt("return", dispatch(actions.init({
                  di: di
                })));

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4, _x5) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};

exports.init = init;
var fontsLoaded;

var start = function start() {
  if (!fontsLoaded) {
    fontsLoaded = new Promise(function (resolve) {
      if (window.__fontsLoaded) return resolve();
      window.addEventListener(_constants.default.events.FONTS_LOADED, resolve, {
        once: true
      });
      setTimeout(resolve, 5000);
    });
  }

  return (
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(dispatch) {
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return Promise.all([dispatch(_auth.authOperations.setStatus()), fontsLoaded]);

              case 2:
                return _context5.abrupt("return", dispatch(actions.start()));

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x6) {
        return _ref6.apply(this, arguments);
      };
    }()
  );
};

exports.start = start;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLocale = exports.setConnected = exports.setStatusCode = exports.stop = exports.start = exports.init = exports.create = void 0;

var _moment = _interopRequireDefault(__webpack_require__(16));

var types = _interopRequireWildcard(__webpack_require__(12));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var create = function create(data) {
  return _.assign({
    type: types.CREATE
  }, data);
};

exports.create = create;

var init = function init(data) {
  return _.assign({
    type: types.INIT
  }, data);
};

exports.init = init;

var start = function start() {
  return {
    type: types.START
  };
};

exports.start = start;

var stop = function stop() {
  return {
    type: types.STOP
  };
};

exports.stop = stop;

var setStatusCode = function setStatusCode(_ref) {
  var code = _ref.code;
  return {
    type: types.SET_STATUS_CODE,
    code: code
  };
};

exports.setStatusCode = setStatusCode;

var setConnected = function setConnected(_ref2) {
  var isConnected = _ref2.isConnected;
  return {
    type: types.SET_CONNECTED,
    isConnected: isConnected
  };
};

exports.setConnected = setConnected;

var setLocale = function setLocale(_ref3) {
  var locale = _ref3.locale;

  _moment.default.locale(locale);

  return {
    type: types.SET_LOCALE,
    locale: locale
  };
};

exports.setLocale = setLocale;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("moment-timezone");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _immutable = __webpack_require__(8);

var _reduxImmutable = __webpack_require__(11);

var types = _interopRequireWildcard(__webpack_require__(13));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* State Shape
Map({
  csrf: String,
  isAuthenticated: Boolean,
  name: String,
  email: String,
  isEmailVerified: Boolean,
  roles: List([String]),
  providers: Map({
    name: Booelan, // is linked
  }),
  googleMapsKey: null,
})
*/
var csrfReducer = function csrfReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_CSRF:
      if (!_.isUndefined(action.csrf)) return action.csrf;
      break;
  }

  return state;
};

var isAuthenticatedReducer = function isAuthenticatedReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_STATUS:
      if (!_.isUndefined(action.isAuthenticated)) return action.isAuthenticated;
      break;
  }

  return state;
};

var nameReducer = function nameReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Anonymous";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_STATUS:
      if (!_.isUndefined(action.name)) return action.name;
      break;
  }

  return state;
};

var emailReducer = function emailReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_STATUS:
      if (!_.isUndefined(action.email)) return action.email;
      break;
  }

  return state;
};

var isEmailVerifiedReducer = function isEmailVerifiedReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_STATUS:
      if (!_.isUndefined(action.isEmailVerified)) return action.isEmailVerified;
      break;
  }

  return state;
};

var rolesReducer = function rolesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.List)([]);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_STATUS:
      if (!_.isUndefined(action.roles)) return (0, _immutable.fromJS)(action.roles);
      break;
  }

  return state;
};

var providersReducer = function providersReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.Map)({});
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_STATUS:
      if (!_.isUndefined(action.providers)) return (0, _immutable.fromJS)(action.providers);
      break;
  }

  return state;
};

var googleMapsKeyReducer = function googleMapsKeyReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_GOOGLE_MAPS_KEY:
      if (!_.isUndefined(action.googleMapsKey)) return action.googleMapsKey;
      break;
  }

  return state;
};

var reducer = (0, _reduxImmutable.combineReducers)({
  csrf: csrfReducer,
  isAuthenticated: isAuthenticatedReducer,
  name: nameReducer,
  email: emailReducer,
  isEmailVerified: isEmailVerifiedReducer,
  roles: rolesReducer,
  providers: providersReducer,
  googleMapsKey: googleMapsKeyReducer
});
var _default = reducer;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteProfile = exports.unlinkProvider = exports.linkProvider = exports.updateProfile = exports.finishProfileVerification = exports.requestProfileVerification = exports.loadProfile = exports.signOut = exports.signUp = exports.signIn = exports.setStatus = exports.setCsrf = exports.setGoogleMapsKey = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(4));

var _moment = _interopRequireDefault(__webpack_require__(16));

var _router = _interopRequireDefault(__webpack_require__(18));

var _isRouteAllowed = _interopRequireDefault(__webpack_require__(20));

var actions = _interopRequireWildcard(__webpack_require__(35));

var selectors = _interopRequireWildcard(__webpack_require__(17));

var _app = __webpack_require__(9);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var setGoogleMapsKey = actions.setGoogleMapsKey;
exports.setGoogleMapsKey = setGoogleMapsKey;
var setCsrf = actions.setCsrf;
exports.setCsrf = setCsrf;

var fetchStatus = function fetchStatus() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(dispatch, getState) {
        var status, providers, providersQuery, response;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                status = null;
                _context.prev = 1;
                providers = selectors.getAllProviders(getState());
                providersQuery = "";

                if (providers && providers.length) {
                  providersQuery = "\n          providers {\n            ".concat(_.map(providers, function (item) {
                    return _.toLower(item);
                  }).join("\n"), "\n          }\n        ");
                }

                _context.next = 7;
                return dispatch(_app.appOperations.gqlQuery("\n        query {\n          status {\n            isAuthenticated\n            name\n            email\n            isEmailVerified\n            roles\n            ".concat(providersQuery, "\n          }\n        }\n      ")));

              case 7:
                response = _context.sent;
                status = response && _.get(response, "data.status", null);
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);
                console.error(_context.t0);

              case 14:
                if (!status) {
                  _context.next = 16;
                  break;
                }

                return _context.abrupt("return", status);

              case 16:
                return _context.abrupt("return", new Promise(function (resolve) {
                  return setTimeout(function () {
                    return resolve(fetchStatus());
                  }, 1000);
                }));

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 11]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

var setStatus = function setStatus(status) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(dispatch, getState) {
        var socket;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (true) {
                  _context2.next = 4;
                  break;
                }

                _context2.next = 3;
                return dispatch(fetchStatus());

              case 3:
                status = _context2.sent;

              case 4:
                if (true) {
                  _context2.next = 10;
                  break;
                }

                if ((0, _isRouteAllowed.default)(_router.default.pathname, status.roles)) {
                  _context2.next = 10;
                  break;
                }

                _context2.next = 8;
                return dispatch(_app.appOperations.stop());

              case 8:
                window.location.href = "/";
                return _context2.abrupt("return");

              case 10:
                if (status) {
                  _context2.next = 12;
                  break;
                }

                return _context2.abrupt("return");

              case 12:
                _context2.next = 14;
                return dispatch(actions.setStatus(status));

              case 14:
                socket = _app.appSelectors.getService(getState(), {
                  service: "socket"
                });

                if (socket) {
                  if (selectors.isAuthenticated(getState())) socket.connect();else socket.disconnect();
                }

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};

exports.setStatus = setStatus;

var signIn = function signIn(_ref3) {
  var email = _ref3.email,
      password = _ref3.password;
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(dispatch, getState) {
        var result, storage, response, errors, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, error;

        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                result = false;
                _context3.prev = 1;
                storage = _app.appSelectors.getService(getState(), {
                  service: "storage"
                });
                if (storage) storage.set("notAnonymous", true);
                _context3.next = 6;
                return dispatch(_app.appOperations.gqlQuery("\n          mutation ($email: String, $password: String) {\n            signIn(email: $email, password: $password) {\n              success\n            }\n          }\n        ", {
                  email: email,
                  password: password
                }));

              case 6:
                response = _context3.sent;

                if (!(response && _.get(response, "data.signIn.success", false))) {
                  _context3.next = 16;
                  break;
                }

                _context3.next = 10;
                return dispatch(setStatus());

              case 10:
                if (true) {
                  _context3.next = 13;
                  break;
                }

                _context3.next = 13;
                return window.__NEXT_PAGE_INIT({
                  store: window.__NEXT_REDUX_STORE__
                });

              case 13:
                return _context3.abrupt("return", true);

              case 16:
                result = {};
                errors = response && _.get(response, "errors", []);
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context3.prev = 21;

                for (_iterator = errors[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  error = _step.value;
                  if (error && error.code === "E_VALIDATION") _.merge(result, error.details);else result._error = (result._error || []).concat([error.message]);
                }

                _context3.next = 29;
                break;

              case 25:
                _context3.prev = 25;
                _context3.t0 = _context3["catch"](21);
                _didIteratorError = true;
                _iteratorError = _context3.t0;

              case 29:
                _context3.prev = 29;
                _context3.prev = 30;

                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }

              case 32:
                _context3.prev = 32;

                if (!_didIteratorError) {
                  _context3.next = 35;
                  break;
                }

                throw _iteratorError;

              case 35:
                return _context3.finish(32);

              case 36:
                return _context3.finish(29);

              case 37:
                if (!_.keys(result).length) result = {
                  _error: "APP_AUTH_FAILED"
                };

              case 38:
                _context3.next = 43;
                break;

              case 40:
                _context3.prev = 40;
                _context3.t1 = _context3["catch"](1);
                console.error(_context3.t1);

              case 43:
                return _context3.abrupt("return", result);

              case 44:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 40], [21, 25, 29, 37], [30,, 32, 36]]);
      }));

      return function (_x5, _x6) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};

exports.signIn = signIn;

var signUp = function signUp(_ref5) {
  var email = _ref5.email,
      password = _ref5.password;
  return (
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(dispatch) {
        var result, response, errors, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, error;

        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                result = false;
                _context4.prev = 1;
                _context4.next = 4;
                return dispatch(_app.appOperations.gqlQuery("\n          mutation ($email: String, $password: String) {\n            signUp(email: $email, password: $password) {\n              success\n            }\n          }\n        ", {
                  email: email,
                  password: password
                }));

              case 4:
                response = _context4.sent;

                if (!(response && _.get(response, "data.signUp.success", false))) {
                  _context4.next = 14;
                  break;
                }

                _context4.next = 8;
                return dispatch(setStatus());

              case 8:
                if (true) {
                  _context4.next = 11;
                  break;
                }

                _context4.next = 11;
                return window.__NEXT_PAGE_INIT({
                  store: window.__NEXT_REDUX_STORE__
                });

              case 11:
                return _context4.abrupt("return", true);

              case 14:
                result = {};
                errors = response && _.get(response, "errors", []);
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context4.prev = 19;

                for (_iterator2 = errors[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  error = _step2.value;
                  if (error && error.code === "E_VALIDATION") _.merge(result, error.details);else result._error = (result._error || []).concat([error.message]);
                }

                _context4.next = 27;
                break;

              case 23:
                _context4.prev = 23;
                _context4.t0 = _context4["catch"](19);
                _didIteratorError2 = true;
                _iteratorError2 = _context4.t0;

              case 27:
                _context4.prev = 27;
                _context4.prev = 28;

                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }

              case 30:
                _context4.prev = 30;

                if (!_didIteratorError2) {
                  _context4.next = 33;
                  break;
                }

                throw _iteratorError2;

              case 33:
                return _context4.finish(30);

              case 34:
                return _context4.finish(27);

              case 35:
                if (!_.keys(result).length) result = {
                  _error: "OPERATION_FAILED"
                };

              case 36:
                _context4.next = 41;
                break;

              case 38:
                _context4.prev = 38;
                _context4.t1 = _context4["catch"](1);
                console.error(_context4.t1);

              case 41:
                return _context4.abrupt("return", result);

              case 42:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 38], [19, 23, 27, 35], [28,, 30, 34]]);
      }));

      return function (_x7) {
        return _ref6.apply(this, arguments);
      };
    }()
  );
};

exports.signUp = signUp;

var signOut = function signOut() {
  return (
    /*#__PURE__*/
    function () {
      var _ref7 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(dispatch) {
        var result, response;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                result = false;
                _context5.prev = 1;
                _context5.next = 4;
                return dispatch(_app.appOperations.gqlQuery("\n          mutation {\n            signOut {\n              success\n            }\n          }\n        "));

              case 4:
                response = _context5.sent;
                result = response && _.get(response, "data.signOut.success") || false;

                if (!result) {
                  _context5.next = 9;
                  break;
                }

                _context5.next = 9;
                return dispatch(setStatus());

              case 9:
                _context5.next = 14;
                break;

              case 11:
                _context5.prev = 11;
                _context5.t0 = _context5["catch"](1);
                console.error(_context5.t0);

              case 14:
                return _context5.abrupt("return", result);

              case 15:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[1, 11]]);
      }));

      return function (_x8) {
        return _ref7.apply(this, arguments);
      };
    }()
  );
};

exports.signOut = signOut;

var loadProfile = function loadProfile(_ref8) {
  var onChange = _ref8.onChange;
  return (
    /*#__PURE__*/
    function () {
      var _ref9 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6(dispatch, getState) {
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return dispatch(setStatus());

              case 2:
                _context6.next = 4;
                return dispatch(onChange("email", selectors.getEmail(getState())));

              case 4:
                _context6.next = 6;
                return dispatch(onChange("name", selectors.getName(getState())));

              case 6:
                _context6.next = 8;
                return dispatch(onChange("isAdmin", selectors.isAdmin(getState()) ? "yes" : "no"));

              case 8:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x9, _x10) {
        return _ref9.apply(this, arguments);
      };
    }()
  );
};

exports.loadProfile = loadProfile;

var requestProfileVerification = function requestProfileVerification() {
  return (
    /*#__PURE__*/
    function () {
      var _ref10 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee7(dispatch) {
        var result, response;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                result = false;
                _context7.prev = 1;
                _context7.next = 4;
                return dispatch(_app.appOperations.gqlQuery("\n          mutation {\n            requestEmailVerification {\n              success\n            }\n          }\n        "));

              case 4:
                response = _context7.sent;
                result = response && _.get(response, "data.requestEmailVerification.success") || false;
                _context7.next = 11;
                break;

              case 8:
                _context7.prev = 8;
                _context7.t0 = _context7["catch"](1);
                console.error(_context7.t0);

              case 11:
                return _context7.abrupt("return", result);

              case 12:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[1, 8]]);
      }));

      return function (_x11) {
        return _ref10.apply(this, arguments);
      };
    }()
  );
};

exports.requestProfileVerification = requestProfileVerification;

var finishProfileVerification = function finishProfileVerification(_ref11) {
  var token = _ref11.token;
  return (
    /*#__PURE__*/
    function () {
      var _ref12 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee8(dispatch) {
        var result, response;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                result = false;
                _context8.prev = 1;
                _context8.next = 4;
                return dispatch(_app.appOperations.gqlQuery("\n          mutation ($token: String) {\n            verifyEmail(token: $token) {\n              success\n            }\n          }\n        ", {
                  token: token
                }));

              case 4:
                response = _context8.sent;
                result = response && _.get(response, "data.verifyEmail.success") || false;

                if (!result) {
                  _context8.next = 9;
                  break;
                }

                _context8.next = 9;
                return dispatch(setStatus());

              case 9:
                _context8.next = 14;
                break;

              case 11:
                _context8.prev = 11;
                _context8.t0 = _context8["catch"](1);
                console.error(_context8.t0);

              case 14:
                return _context8.abrupt("return", result);

              case 15:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[1, 11]]);
      }));

      return function (_x12) {
        return _ref12.apply(this, arguments);
      };
    }()
  );
};

exports.finishProfileVerification = finishProfileVerification;

var updateProfile = function updateProfile(_ref13) {
  var email = _ref13.email,
      name = _ref13.name,
      password = _ref13.password,
      onChange = _ref13.onChange;
  return (
    /*#__PURE__*/
    function () {
      var _ref14 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee9(dispatch) {
        var result, response, errors, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, error;

        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                result = false;
                _context9.prev = 1;
                _context9.next = 4;
                return dispatch(_app.appOperations.gqlQuery("\n          mutation ($email: String, $name: String, $password: String) {\n            updateProfile(email: $email, name: $name, password: $password) {\n              success\n            }\n          }\n        ", {
                  email: email,
                  name: name,
                  password: password
                }));

              case 4:
                response = _context9.sent;

                if (!(response && _.get(response, "data.updateProfile.success", false))) {
                  _context9.next = 11;
                  break;
                }

                _context9.next = 8;
                return dispatch(loadProfile(onChange));

              case 8:
                return _context9.abrupt("return", true);

              case 11:
                result = {};
                errors = response && _.get(response, "errors", []);
                _iteratorNormalCompletion3 = true;
                _didIteratorError3 = false;
                _iteratorError3 = undefined;
                _context9.prev = 16;

                for (_iterator3 = errors[Symbol.iterator](); !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  error = _step3.value;
                  if (error && error.code === "E_VALIDATION") _.merge(result, error.details);else result._error = (result._error || []).concat([error.message]);
                }

                _context9.next = 24;
                break;

              case 20:
                _context9.prev = 20;
                _context9.t0 = _context9["catch"](16);
                _didIteratorError3 = true;
                _iteratorError3 = _context9.t0;

              case 24:
                _context9.prev = 24;
                _context9.prev = 25;

                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                  _iterator3.return();
                }

              case 27:
                _context9.prev = 27;

                if (!_didIteratorError3) {
                  _context9.next = 30;
                  break;
                }

                throw _iteratorError3;

              case 30:
                return _context9.finish(27);

              case 31:
                return _context9.finish(24);

              case 32:
                if (!_.keys(result).length) result = {
                  _error: "OPERATION_FAILED"
                };

              case 33:
                _context9.next = 38;
                break;

              case 35:
                _context9.prev = 35;
                _context9.t1 = _context9["catch"](1);
                console.error(_context9.t1);

              case 38:
                return _context9.abrupt("return", result);

              case 39:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[1, 35], [16, 20, 24, 32], [25,, 27, 31]]);
      }));

      return function (_x13) {
        return _ref14.apply(this, arguments);
      };
    }()
  );
};

exports.updateProfile = updateProfile;

var linkProvider = function linkProvider(_ref15) {
  var provider = _ref15.provider;
  return (
    /*#__PURE__*/
    function () {
      var _ref16 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee10(dispatch) {
        var url, expires;
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                url = encodeURIComponent(window.location.pathname);
                expires = _moment.default.utc().add(1, "hour").format();
                _context10.next = 4;
                return dispatch(_app.appOperations.stop());

              case 4:
                document.cookie = "redirect=".concat(url, "; expires=").concat(expires, "; path=/");
                window.location.href = window.location.origin + "/api/oauth/" + _.lowerCase(provider);

              case 6:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      return function (_x14) {
        return _ref16.apply(this, arguments);
      };
    }()
  );
};

exports.linkProvider = linkProvider;

var unlinkProvider = function unlinkProvider(_ref17) {
  var provider = _ref17.provider;
  return (
    /*#__PURE__*/
    function () {
      var _ref18 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee11(dispatch) {
        var result, response;
        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                result = false;
                _context11.prev = 1;
                _context11.next = 4;
                return dispatch(_app.appOperations.gqlQuery("\n          mutation ($provider: String) {\n            unlinkProvider(provider: $provider) {\n              success\n            }\n          }\n        ", {
                  provider: provider
                }));

              case 4:
                response = _context11.sent;
                result = response && _.get(response, "data.unlinkProvider.success") || false;

                if (!result) {
                  _context11.next = 9;
                  break;
                }

                _context11.next = 9;
                return dispatch(setStatus());

              case 9:
                _context11.next = 14;
                break;

              case 11:
                _context11.prev = 11;
                _context11.t0 = _context11["catch"](1);
                console.error(_context11.t0);

              case 14:
                return _context11.abrupt("return", result);

              case 15:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this, [[1, 11]]);
      }));

      return function (_x15) {
        return _ref18.apply(this, arguments);
      };
    }()
  );
};

exports.unlinkProvider = unlinkProvider;

var deleteProfile = function deleteProfile() {
  return (
    /*#__PURE__*/
    function () {
      var _ref19 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee12(dispatch) {
        var result, response;
        return _regenerator.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                result = false;
                _context12.prev = 1;
                _context12.next = 4;
                return dispatch(_app.appOperations.gqlQuery("\n          mutation {\n            deleteProfile {\n              success\n            }\n          }\n        "));

              case 4:
                response = _context12.sent;
                result = response && _.get(response, "data.deleteProfile.success") || false;

                if (!result) {
                  _context12.next = 10;
                  break;
                }

                _context12.next = 9;
                return dispatch(_app.appOperations.stop());

              case 9:
                window.location.href = "/";

              case 10:
                _context12.next = 15;
                break;

              case 12:
                _context12.prev = 12;
                _context12.t0 = _context12["catch"](1);
                console.error(_context12.t0);

              case 15:
                return _context12.abrupt("return", result);

              case 16:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this, [[1, 12]]);
      }));

      return function (_x16) {
        return _ref19.apply(this, arguments);
      };
    }()
  );
};

exports.deleteProfile = deleteProfile;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setStatus = exports.setCsrf = exports.setGoogleMapsKey = void 0;

var types = _interopRequireWildcard(__webpack_require__(13));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var setGoogleMapsKey = function setGoogleMapsKey(_ref) {
  var googleMapskey = _ref.googleMapskey;
  return {
    type: types.SET_GOOGLE_MAPS_KEY,
    googleMapskey: googleMapskey
  };
};

exports.setGoogleMapsKey = setGoogleMapsKey;

var setCsrf = function setCsrf(_ref2) {
  var csrf = _ref2.csrf;
  return {
    type: types.SET_CSRF,
    csrf: csrf
  };
};

exports.setCsrf = setCsrf;

var setStatus = function setStatus(status) {
  return _objectSpread({
    type: types.SET_STATUS
  }, status);
};

exports.setStatus = setStatus;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("injectt");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Storage =
/*#__PURE__*/
function () {
  function Storage(getState, dispatch) {
    _classCallCheck(this, Storage);

    if (true) return;
    this.getState = getState;
    this.dispatch = dispatch;
  } // eslint-disable-next-line lodash/prefer-constant


  _createClass(Storage, [{
    key: "get",
    value: function get(key, defaultValue) {
      if (true) return;
      var value = localStorage.getItem(key);
      return value ? JSON.parse(value) : defaultValue;
    }
  }, {
    key: "set",
    value: function set(key, value) {
      if (true) return;
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      if (true) return;
      localStorage.removeItem(key);
    }
  }], [{
    key: "$provides",
    get: function get() {
      return "storage";
    } // eslint-disable-next-line lodash/prefer-constant

  }, {
    key: "$requires",
    get: function get() {
      return ["getState", "dispatch"];
    } // eslint-disable-next-line lodash/prefer-constant

  }, {
    key: "$lifecycle",
    get: function get() {
      return "singleton";
    }
  }]);

  return Storage;
}();

var _default = Storage;
exports.default = _default;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(4));

var _socket = _interopRequireDefault(__webpack_require__(39));

var _app = __webpack_require__(9);

var _auth = __webpack_require__(10);

var _constants = _interopRequireDefault(__webpack_require__(5));

var _package = _interopRequireDefault(__webpack_require__(40));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Socket =
/*#__PURE__*/
function () {
  function Socket(getState, dispatch) {
    _classCallCheck(this, Socket);

    if (true) return;
    this.getState = getState;
    this.dispatch = dispatch;
    this.socket = (0, _socket.default)({
      path: _constants.default.socketsBase,
      autoConnect: false
    });
    this.socket.on(_constants.default.messages.HELLO, this.onHello.bind(this));
    this.socket.on(_constants.default.messages.SET_STATUS, this.onSetStatus.bind(this));
    this.socket.on("disconnect", this.onDisconnect.bind(this));
  } // eslint-disable-next-line lodash/prefer-constant


  _createClass(Socket, [{
    key: "emit",
    value: function emit(message, data, cb) {
      if (true) return;
      if (false) {}
      this.socket.emit(message, data, cb && function (response) {
        try {
          return cb(response);
        } catch (error) {
          console.log(error);
        }
      });
    }
  }, {
    key: "connect",
    value: function connect() {
      if (true) return;
      if (!_app.appSelectors.isConnected(this.getState())) this.socket.connect();
      this.emit(_constants.default.messages.HELLO, {
        version: _package.default.version
      });
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      if (true) return;
      if (_app.appSelectors.isConnected(this.getState())) this.socket.disconnect();
    }
  }, {
    key: "onHello",
    value: function () {
      var _onHello = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(msg) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                if (false) {}

                if (!(msg.version !== _package.default.version)) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return this.dispatch(_app.appOperations.stop());

              case 5:
                return _context.abrupt("return", setTimeout(function () {
                  return window.location.reload();
                }, 3000));

              case 6:
                _context.next = 8;
                return this.dispatch(_app.appOperations.setConnected({
                  isConnected: true
                }));

              case 8:
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 10]]);
      }));

      function onHello(_x) {
        return _onHello.apply(this, arguments);
      }

      return onHello;
    }()
  }, {
    key: "onSetStatus",
    value: function () {
      var _onSetStatus = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(msg) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                if (false) {}

                _context2.next = 4;
                return this.dispatch(_auth.authOperations.setStatus(msg));

              case 4:
                _context2.next = 9;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                console.error(_context2.t0);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 6]]);
      }));

      function onSetStatus(_x2) {
        return _onSetStatus.apply(this, arguments);
      }

      return onSetStatus;
    }()
  }, {
    key: "onDisconnect",
    value: function () {
      var _onDisconnect = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3() {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                if (false) {}
                _context3.next = 4;
                return this.dispatch(_app.appOperations.setConnected({
                  isConnected: false
                }));

              case 4:
                _context3.next = 9;
                break;

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](0);
                console.error(_context3.t0);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 6]]);
      }));

      function onDisconnect() {
        return _onDisconnect.apply(this, arguments);
      }

      return onDisconnect;
    }()
  }], [{
    key: "$provides",
    get: function get() {
      return "socket";
    } // eslint-disable-next-line lodash/prefer-constant

  }, {
    key: "$requires",
    get: function get() {
      return ["getState", "dispatch"];
    } // eslint-disable-next-line lodash/prefer-constant

  }, {
    key: "$lifecycle",
    get: function get() {
      return "singleton";
    }
  }]);

  return Socket;
}();

var _default = Socket;
exports.default = _default;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),
/* 40 */
/***/ (function(module) {

module.exports = {"name":"next-dashboard","version":"0.1.0","private":true,"dependencies":{"@date-io/moment":"~0.0.2","@material-ui/core":"~3.7.1","@material-ui/icons":"~3.0.1","@zeit/next-bundle-analyzer":"~0.1.2","@zeit/next-css":"~1.0.1","base64util":"~2.0.0-f","bcrypt":"~3.0.3","body-parser":"~1.18.3","chance":"~1.0.18","classnames":"~2.2.6","compression":"~1.7.3","connect-mongo":"~2.0.3","cookie-parser":"~1.4.3","cors":"~2.8.5","country-telephone-data":"~0.6.0","csurf":"~1.9.0","debug":"~4.1.1","dotenv":"~6.2.0","express":"~4.16.4","express-graphql":"~0.7.1","express-session":"~1.15.6","fs-extra":"~7.0.1","graphql":"14.0.2","graphql-tools":"~4.0.3","http-status-codes":"~1.3.0","immutable":"~4.0.0-rc.12","injectt":"~0.1.6","intl":"~1.2.5","intl-locales-supported":"~1.0.0","intl-messageformat":"~2.2.0","isomorphic-unfetch":"~3.0.0","json-immutable":"~0.4.0","jss":"~9.8.7","jss-extend":"~6.2.0","lodash":"~4.17.11","lru-cache":"~5.1.1","material-ui-pickers":"~2.0.5","moment":"~2.23.0","moment-timezone":"~0.5.23","mongoose":"~5.4.1","morgan":"~1.9.1","next":"~7.0.2","next-compose-plugins":"~2.1.1","next-progressbar":"~1.0.0","nodemailer":"~4.7.0","null-loader":"~0.1.1","pako":"~1.0.7","passport":"~0.4.0","passport-facebook":"~2.1.1","passport-google-oauth":"~1.0.0","passport-twitter":"~1.0.4","raf":"~3.4.1","react":"~16.7.0","react-dom":"~16.7.0","react-flags":"~0.1.17","react-intl":"~2.7.2","react-jss":"~8.6.1","react-redux":"~6.0.0","react-swipeable-views":"~0.13.0","react-toastify":"~4.5.1","react-virtualized":"~9.21.0","redux":"~4.0.1","redux-devtools-extension":"~2.13.7","redux-form":"~8.1.0","redux-immutable":"~4.0.0","redux-thunk":"~2.3.0","reselect":"~4.0.0","serviceworker-webpack-plugin":"~1.0.1","sharp":"~0.21.1","socket.io":"~2.2.0","ssh2":"~0.6.1","svg-inline-loader":"~0.8.0","utf8":"~3.0.0","uuid":"~3.3.2","validator":"~10.10.0","webpack":"4.20.2"},"devDependencies":{"@babel/core":"7.0.0","babel-core":"7.0.0-bridge.0","babel-eslint":"~10.0.1","babel-jest":"~23.6.0","babel-plugin-lodash":"~3.3.4","css-mqpacker":"~7.0.0","enzyme":"~3.8.0","enzyme-adapter-react-16":"~1.7.1","eslint":"~5.11.1","eslint-plugin-lodash":"~5.1.0","eslint-plugin-react":"~7.11.1","jest":"~23.6.0","jsdom":"~13.1.0","jsdom-global":"~3.0.2","postcss-clean":"~1.1.0","postcss-loader":"~3.0.0","postcss-preset-env":"~6.5.0","postcss-url":"~8.0.0","prop-types":"~15.6.2","supertest":"~3.3.0","webfontloader":"~1.6.28"},"scripts":{"lint":"eslint . --max-warnings=0","test":"jest . --no-cache --forceExit","build":"node ./bin/prepare-build && env NODE_ENV=production TMPDIR=$PWD/.tmp next build","export":"env NODE_ENV=production TMPDIR=$PWD/.tmp next export","dev":"node ./bin/prepare-build && env NODE_ENV=development node ./bin/www","start":"env NODE_ENV=production node ./bin/www"}};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cookie =
/*#__PURE__*/
function () {
  function Cookie() {
    _classCallCheck(this, Cookie);
  }

  _createClass(Cookie, [{
    key: "get",
    value: function get(name) {
      if (true) return;
      var v = document.cookie.match("(^|;) ?" + encodeURIComponent(name) + "=([^;]*)(;|$)");
      return v ? decodeURIComponent(v[2]) : null;
    }
  }, {
    key: "set",
    value: function set(name, value) {
      var days = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 365;
      if (true) return;
      var d = new Date();
      d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
      document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + ";path=/;expires=" + d.toGMTString();
    }
  }, {
    key: "delete",
    value: function _delete(name) {
      if (true) return;
      this.set(encodeURIComponent(name), "", -1);
    }
  }], [{
    key: "$provides",
    // eslint-disable-next-line lodash/prefer-constant
    get: function get() {
      return "cookie";
    } // eslint-disable-next-line lodash/prefer-constant

  }, {
    key: "$requires",
    get: function get() {
      return [];
    } // eslint-disable-next-line lodash/prefer-constant

  }, {
    key: "$lifecycle",
    get: function get() {
      return "singleton";
    }
  }]);

  return Cookie;
}();

var _default = Cookie;
exports.default = _default;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isConnected = exports.isStarted = exports.getLocale = exports.getStatusCode = exports.getService = exports.getCreated = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var getCreated = function getCreated(state) {
  return state.getIn(["app", "created"]);
};

exports.getCreated = getCreated;

var getService = function getService(state, props) {
  var di = state.getIn(["app", "di"]);
  return di ? di.get.apply(di, [props.service].concat(_toConsumableArray(props.params || []))) : null;
};

exports.getService = getService;

var getStatusCode = function getStatusCode(state) {
  return state.getIn(["app", "statusCode"]);
};

exports.getStatusCode = getStatusCode;

var getLocale = function getLocale(state) {
  return state.getIn(["app", "locale"]);
};

exports.getLocale = getLocale;

var isStarted = function isStarted(state) {
  return state.getIn(["app", "isStarted"]);
};

exports.isStarted = isStarted;

var isConnected = function isConnected(state) {
  return state.getIn(["app", "isConnected"]);
};

exports.isConnected = isConnected;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormFieldsContext = exports.FormNameContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormNameContext = _react.default.createContext({});

exports.FormNameContext = FormNameContext;

var FormFieldsContext = _react.default.createContext({});

exports.FormFieldsContext = FormFieldsContext;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var validator = __webpack_require__(46);

var _require = __webpack_require__(23),
    allCountries = _require.allCountries,
    iso2Lookup = _require.iso2Lookup;
/**
 * Normalizer function for Redux Form
 * takes input like "rule1:param1:param2|rule2:param1:param2|..."
 *
 * trim                       remove white space from the beginning and the end of value
 * compact:spaces             replace multiple occurences of space in a row with a single space
 * remove:spaces              remove spaces
 * rows:size                  forces "size" number of rows (1 if size is omitted)
 * integer                    removes everything except digits
 * phone                      forces international phone phormat
 * email                      normalizes email
 * credit_card:number         normalizes credit card number
 * credit_card:date           normalizes credit card expiration date
 * credit_card:secret         normalizes credit card CVV2 code
 */


module.exports = function normalize(options, value, prevValue, allValues
/* prevAllValues */
) {
  var rules = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _.split(options, "|")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var rule = _step.value;

      var params = _.split(_.trim(rule), ":");

      var command = params.shift();
      rules[command] = params;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var result = _.isUndefined(value) ? "" : _.toString(value);
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = _.keys(rules)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _command = _step2.value;
      var i = void 0;
      var tmp = void 0;
      var search = void 0;
      var isLongBreak = void 0;

      switch (_command) {
        case "trim":
          // trims the input, no params
          tmp = [];
          isLongBreak = !!result.match(/\r\n/);
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = _.split(_.trim(result), /\r\n?|\n/g)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var line = _step3.value;
              tmp.push(_.trim(line));
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }

          result = tmp.join(isLongBreak ? "\r\n" : "\n");
          break;

        case "compact":
          // with "spaces" param compacts spaces into single space preserving new lines
          if (_.includes(rules[_command], "spaces")) {
            tmp = [];
            isLongBreak = !!result.match(/\r\n/);
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = _.split(result, /\r\n?|\n/g)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var _line = _step4.value;
                tmp.push(_.replace(_line, /\s+/g, " "));
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                  _iterator4.return();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }

            result = tmp.join(isLongBreak ? "\r\n" : "\n");
          }

          break;

        case "remove":
          // with "spaces" param removes spaces inside the line preveserving new lines
          if (_.includes(rules[_command], "spaces")) {
            tmp = [];
            isLongBreak = !!result.match(/\r\n/);
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
              for (var _iterator5 = _.split(result, /\r\n?|\n/g)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var _line2 = _step5.value;
                tmp.push(_.replace(_line2, /\s+/g, ""));
              }
            } catch (err) {
              _didIteratorError5 = true;
              _iteratorError5 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                  _iterator5.return();
                }
              } finally {
                if (_didIteratorError5) {
                  throw _iteratorError5;
                }
              }
            }

            result = tmp.join(isLongBreak ? "\r\n" : "\n");
          }

          break;

        case "rows":
          // first param is the number of rows in the result (defaults to 1)
          tmp = _.split(result, /\r\n?|\n/g);
          isLongBreak = !!result.match(/\r\n/);
          result = "";

          for (i = 0; i < tmp.length; i++) {
            if (i > 0 && i < (rules[_command].length ? parseInt(rules[_command][0]) : 1)) result += isLongBreak ? "\r\n" : "\n";
            result += tmp[i];
          }

          break;

        case "integer":
          result = _.replace(result, /[^0-9]+/g, "");
          break;

        case "phone":
          // converts input to internations phone number format
          // expect package 'country-telephone-data' and form field "country" to exist
          tmp = _.replace(result, /[^0-9]+/g, "");
          result = "";
          i = 0;
          search = allCountries && iso2Lookup && allCountries[iso2Lookup[allValues.get("country")]];

          if (search && search.dialCode && _.startsWith(tmp, search.dialCode)) {
            result += search.dialCode + (search.dialCode.length < tmp.length ? " " : "");
            i = search.dialCode.length;
          }

          for (; i < tmp.length; i++) {
            if (i === 5 || i === 8 || i === 10) result += " ";
            result += tmp[i];
          }

          if (result.length) result = "+" + result;
          break;

        case "email":
          // normalizes email
          result = validator.normalizeEmail(result);
          if (result === "@") result = "";
          break;

        case "credit_card":
          // normalizes credit card attribute set by first param ("number", "date" or "secret")
          switch (rules[_command].length && rules[_command][0]) {
            case "number":
              tmp = _.replace(result, /[^0-9]+/g, "");
              result = "";

              for (i = 0; i < tmp.length; i++) {
                if (i > 0 && !(i % 4)) result += " ";
                result += tmp[i];
              }

              break;

            case "date":
              tmp = _.replace(result, /[^0-9]+/g, "");
              result = tmp.slice(0, 2);

              if (tmp.length > 2) {
                result += " / ";
                result += tmp.slice(2);
              }

              break;

            case "secret":
              result = _.replace(result, /[^0-9]+/g, "");
              break;
          }

          break;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return result;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormHelperText");

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SET_AVG_TIME = exports.SET_CLIENTS = exports.SET_SALES = exports.SET_PROFIT = exports.SET_EMPLOYEES = exports.SET_COUNTRIES = void 0;
var SET_COUNTRIES = "app/dashboard/SET_COUNTRIES";
exports.SET_COUNTRIES = SET_COUNTRIES;
var SET_EMPLOYEES = "app/dashboard/SET_EMPLOYEES";
exports.SET_EMPLOYEES = SET_EMPLOYEES;
var SET_PROFIT = "app/dashboard/SET_PROFIT";
exports.SET_PROFIT = SET_PROFIT;
var SET_SALES = "app/dashboard/SET_SALES";
exports.SET_SALES = SET_SALES;
var SET_CLIENTS = "app/dashboard/SET_CLIENTS";
exports.SET_CLIENTS = SET_CLIENTS;
var SET_AVG_TIME = "app/dashboard/SET_AVG_TIME";
exports.SET_AVG_TIME = SET_AVG_TIME;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HIDE_EDIT_MODAL = exports.SHOW_EDIT_MODAL = exports.DESELECT_ALL = exports.SELECT_ALL = exports.SET_SELECTED = exports.SET_LIST = void 0;
var SET_LIST = "app/users/SET_LIST";
exports.SET_LIST = SET_LIST;
var SET_SELECTED = "app/users/SET_SELECTED";
exports.SET_SELECTED = SET_SELECTED;
var SELECT_ALL = "app/users/SELECT_ALL";
exports.SELECT_ALL = SELECT_ALL;
var DESELECT_ALL = "app/users/DESELECT_ALL";
exports.DESELECT_ALL = DESELECT_ALL;
var SHOW_EDIT_MODAL = "app/users/SHOW_EDIT_MODAL";
exports.SHOW_EDIT_MODAL = SHOW_EDIT_MODAL;
var HIDE_EDIT_MODAL = "app/users/HIDE_EDIT_MODAL";
exports.HIDE_EDIT_MODAL = HIDE_EDIT_MODAL;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(4));

var _react = _interopRequireDefault(__webpack_require__(0));

var _immutable = __webpack_require__(8);

var _reactRedux = __webpack_require__(14);

var _immutable2 = __webpack_require__(15);

var _reduxForm = __webpack_require__(67);

var _Context = __webpack_require__(44);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = function _default(FormComponent, mapStateToProps, mapDispatchToProps) {
  var withContext = function withContext(WrappedComponent) {
    return function WithFormContext(props) {
      return _react.default.createElement(_Context.FormNameContext.Provider, {
        value: FormComponent.formName
      }, _react.default.createElement(_Context.FormFieldsContext.Provider, {
        value: FormComponent.fields
      }, _react.default.createElement(WrappedComponent, props)));
    };
  };

  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var Form = _reactRedux.connect.apply(void 0, [function (state, props) {
    return _.assign(mapStateToProps ? mapStateToProps(state, props) : {}, {
      getValue: function getValue(field) {
        var values = (0, _immutable2.getFormValues)(FormComponent.formName)(state);
        return field ? values && values.get(field) : values || (0, _immutable.Map)();
      },
      getError: function getError(field) {
        var errors = (0, _immutable2.getFormAsyncErrors)(FormComponent.formName)(state);
        return field ? errors && errors.get(field) : errors || (0, _immutable.Map)();
      }
    });
  }, function (dispatch, props) {
    return _.assign(mapDispatchToProps ? mapDispatchToProps(dispatch, props) : {}, {
      dispatch: dispatch,
      updateValidation: function () {
        var _updateValidation = _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee(errors) {
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return dispatch((0, _reduxForm.startAsyncValidation)(FormComponent.formName));

                case 2:
                  _context.next = 4;
                  return dispatch((0, _reduxForm.stopAsyncValidation)(FormComponent.formName, errors));

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function updateValidation(_x) {
          return _updateValidation.apply(this, arguments);
        }

        return updateValidation;
      }()
    });
  }].concat(args))(withContext((0, _immutable2.reduxForm)({
    form: FormComponent.formName,
    destroyOnUnmount: false,
    pure: false,
    shouldAsyncValidate: function shouldAsyncValidate(_ref) {
      var trigger = _ref.trigger;
      return _.includes(["blur", "submit"], trigger);
    },
    onSubmit: FormComponent.onSubmit.bind(FormComponent),
    onSubmitFail: FormComponent.onSubmitFail.bind(FormComponent),
    onSubmitSuccess: FormComponent.onSubmitSuccess.bind(FormComponent),
    onChange: FormComponent.onChange.bind(FormComponent),
    asyncValidate: FormComponent.onValidate.bind(FormComponent)
  })(FormComponent)));

  Form.formName = FormComponent.formName;
  return Form;
};

exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContentText");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _reactIntl = __webpack_require__(6);

var _immutable = __webpack_require__(15);

var _Context = __webpack_require__(44);

var _normalize2 = _interopRequireDefault(__webpack_require__(45));

var _Text = _interopRequireDefault(__webpack_require__(70));

var _Select = _interopRequireDefault(__webpack_require__(75));

var _Checkbox = _interopRequireDefault(__webpack_require__(80));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var FormField =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(FormField, _React$PureComponent);

  function FormField() {
    _classCallCheck(this, FormField);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormField).apply(this, arguments));
  }

  _createClass(FormField, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          name = _this$props.name,
          type = _this$props.type,
          fieldProps = _objectWithoutProperties(_this$props, ["name", "type"]); // eslint-disable-line


      var Component;

      switch (this.props.type) {
        case "text":
        case "password":
        case "textarea":
          Component = _Text.default;
          break;

        case "select":
          Component = _Select.default;
          break;

        case "checkbox":
          Component = _Checkbox.default;
          break;
      }

      return _react.default.createElement(_Context.FormNameContext.Consumer, null, function (formName) {
        return _react.default.createElement(_Context.FormFieldsContext.Consumer, null, function (fields) {
          return _react.default.createElement(_immutable.Field, _extends({
            component: Component,
            fieldId: "input-".concat(formName, "-").concat(name),
            name: name,
            type: type,
            label: fields[name] && _this.props.intl.formatMessage({
              id: fields[name].label
            }),
            normalize: function normalize(value) {
              if (!fields[_this.props.name]) return value;
              var options = fields[_this.props.name].normalize;
              if (!options) return value;

              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }

              return _normalize2.default.apply(void 0, [options, value].concat(args));
            }
          }, fieldProps));
        });
      });
    }
  }]);

  return FormField;
}(_react.default.PureComponent);

var _default = (0, _reactIntl.injectIntl)(FormField);

exports.default = _default;

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dashboardSelectors = exports.dashboardOperations = exports.dashboardTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__(84));

var dashboardTypes = _interopRequireWildcard(__webpack_require__(49));

exports.dashboardTypes = dashboardTypes;

var dashboardOperations = _interopRequireWildcard(__webpack_require__(85));

exports.dashboardOperations = dashboardOperations;

var dashboardSelectors = _interopRequireWildcard(__webpack_require__(87));

exports.dashboardSelectors = dashboardSelectors;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _reducers.default;
exports.default = _default;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usersSelectors = exports.usersOperations = exports.usersTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__(88));

var usersTypes = _interopRequireWildcard(__webpack_require__(50));

exports.usersTypes = usersTypes;

var usersOperations = _interopRequireWildcard(__webpack_require__(89));

exports.usersOperations = usersOperations;

var usersSelectors = _interopRequireWildcard(__webpack_require__(65));

exports.usersSelectors = usersSelectors;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _reducers.default;
exports.default = _default;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEditModalData = exports.isEditModalOpen = exports.isAllDeselected = exports.isAllSelected = exports.getNumSelected = exports.getSelected = exports.getList = void 0;

var getList = function getList(state) {
  return state.getIn(["users", "list"]);
};

exports.getList = getList;

var getSelected = function getSelected(state) {
  return (// eslint-disable-next-line lodash/prefer-lodash-method
    state.getIn(["users", "list"]).filter(function (item) {
      return !!item.get("isSelected");
    })
  );
};

exports.getSelected = getSelected;

var getNumSelected = function getNumSelected(state) {
  return getSelected(state).size;
};

exports.getNumSelected = getNumSelected;

var isAllSelected = function isAllSelected(state) {
  return getList(state).size === getSelected(state).size;
};

exports.isAllSelected = isAllSelected;

var isAllDeselected = function isAllDeselected(state) {
  return getSelected(state).size === 0;
};

exports.isAllDeselected = isAllDeselected;

var isEditModalOpen = function isEditModalOpen(state) {
  return state.getIn(["users", "isEditModalOpen"]);
};

exports.isEditModalOpen = isEditModalOpen;

var getEditModalData = function getEditModalData(state) {
  var id = state.getIn(["users", "editModalUserId"]);
  if (!id) return null; // eslint-disable-next-line

  return state.getIn(["users", "list"]).find(function (item) {
    return item.get("id") === id;
  });
};

exports.getEditModalData = getEditModalData;

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(4));

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _immutable = __webpack_require__(15);

var _normalize = _interopRequireDefault(__webpack_require__(45));

var _validate2 = _interopRequireDefault(__webpack_require__(69));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FormComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormComponent, _React$Component);

  _createClass(FormComponent, null, [{
    key: "onSubmit",
    value: function onSubmit()
    /*values, dispatch, props*/
    {}
  }, {
    key: "onSubmitFail",
    value: function onSubmitFail(error, dispatch, submitError
    /*, props */
    ) {
      if (false) {}
    }
  }, {
    key: "onSubmitSuccess",
    value: function onSubmitSuccess(result
    /*, dispatch, props */
    ) {
      if (false) {}
    }
  }, {
    key: "onChange",
    value: function onChange(values, dispatch, props, prevValues) {
      // remove error status of the field changed
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _.keys(this.cachedErrors[this.formName] || {})[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var field = _step.value;

          if (values.get(field) !== prevValues.get(field)) {
            delete this.cachedErrors[this.formName][field];
            dispatch(props.clearAsyncError(field));
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "doValidate",
    value: function () {
      var _doValidate = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(values, dispatch, props, blurredField) {
        var transform,
            fields,
            _iteratorNormalCompletion2,
            _didIteratorError2,
            _iteratorError2,
            _iterator2,
            _step2,
            field,
            value,
            transformed,
            errors,
            _args = arguments;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                transform = _args.length > 4 && _args[4] !== undefined ? _args[4] : true;
                _context.prev = 1;
                // if blurred field is not set, validate all of them
                fields = blurredField ? _.isArray(blurredField) ? blurredField : [blurredField] : _.keys(this.fields);
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context.prev = 6;
                _iterator2 = fields[Symbol.iterator]();

              case 8:
                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                  _context.next = 24;
                  break;
                }

                field = _step2.value;
                value = values.get(field); // transform value first if requested

                if (!(transform && this.fields[field].transform)) {
                  _context.next = 17;
                  break;
                }

                transformed = (0, _normalize.default)(this.fields[field].transform, value, value, values, values);

                if (!(transformed !== value)) {
                  _context.next = 17;
                  break;
                }

                _context.next = 16;
                return dispatch(props.change(field, transformed));

              case 16:
                value = transformed;

              case 17:
                errors = []; // validate

                if (this.fields[field].validate) errors = (0, _validate2.default)(props, this.fields[field].validate, value, values); // cache result

                if (!this.cachedErrors[this.formName]) this.cachedErrors[this.formName] = {};
                if (errors.length) this.cachedErrors[this.formName][field] = errors;else delete this.cachedErrors[this.formName][field];

              case 21:
                _iteratorNormalCompletion2 = true;
                _context.next = 8;
                break;

              case 24:
                _context.next = 30;
                break;

              case 26:
                _context.prev = 26;
                _context.t0 = _context["catch"](6);
                _didIteratorError2 = true;
                _iteratorError2 = _context.t0;

              case 30:
                _context.prev = 30;
                _context.prev = 31;

                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }

              case 33:
                _context.prev = 33;

                if (!_didIteratorError2) {
                  _context.next = 36;
                  break;
                }

                throw _iteratorError2;

              case 36:
                return _context.finish(33);

              case 37:
                return _context.finish(30);

              case 38:
                _context.next = 43;
                break;

              case 40:
                _context.prev = 40;
                _context.t1 = _context["catch"](1);
                console.error(_context.t1);

              case 43:
                if (!_.keys(this.cachedErrors[this.formName] || {}).length) {
                  _context.next = 45;
                  break;
                }

                throw _.cloneDeep(this.cachedErrors[this.formName]);

              case 45:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 40], [6, 26, 30, 38], [31,, 33, 37]]);
      }));

      function doValidate(_x, _x2, _x3, _x4) {
        return _doValidate.apply(this, arguments);
      }

      return doValidate;
    }()
  }, {
    key: "onValidate",
    value: function () {
      var _onValidate = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2() {
        var _this2 = this;

        var _len,
            args,
            _key,
            _args2 = arguments;

        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                for (_len = _args2.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = _args2[_key];
                }

                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                  setTimeout(function () {
                    try {
                      resolve(_this2.doValidate.apply(_this2, args));
                    } catch (error) {
                      reject(error);
                    }
                  });
                }));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onValidate() {
        return _onValidate.apply(this, arguments);
      }

      return onValidate;
    }()
  }]);

  function FormComponent(props) {
    var _this;

    _classCallCheck(this, FormComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormComponent).call(this, props));
    _this.submit = _this.submit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(FormComponent, [{
    key: "validate",
    value: function () {
      var _validate = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3() {
        var errors;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.constructor.doValidate(this.props.getValue(), this.props.dispatch, this.props, undefined, false);

              case 3:
                _context3.next = 8;
                break;

              case 5:
                _context3.prev = 5;
                _context3.t0 = _context3["catch"](0);
                errors = _context3.t0;

              case 8:
                _context3.next = 10;
                return this.props.updateValidation(errors);

              case 10:
                return _context3.abrupt("return", errors ? errors : true);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 5]]);
      }));

      function validate() {
        return _validate.apply(this, arguments);
      }

      return validate;
    }()
  }, {
    key: "submit",
    value: function () {
      var _submit = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4() {
        var valid;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return this.validate();

              case 3:
                valid = _context4.sent;

                if (!(valid !== true)) {
                  _context4.next = 6;
                  break;
                }

                return _context4.abrupt("return", valid);

              case 6:
                _context4.next = 8;
                return this.props.handleSubmit();

              case 8:
                return _context4.abrupt("return", _context4.sent);

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](0);
                console.error(_context4.t0);

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 11]]);
      }));

      function submit() {
        return _submit.apply(this, arguments);
      }

      return submit;
    }() // eslint-disable-next-line

  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return FormComponent;
}(_react.default.Component);

_defineProperty(FormComponent, "formName", "baseForm");

_defineProperty(FormComponent, "fields", {
  /*
  fieldName: {
    normalize: 'rules', // happens on change
    transform: 'rules', // happens on blur
    validate: 'rules',  // happens on blur
    label: 'ID',        // translation ID
  },
   */
});

_defineProperty(FormComponent, "cachedErrors", {});

var _default = FormComponent;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var validator = __webpack_require__(46);

var _require = __webpack_require__(23),
    allCountries = _require.allCountries,
    iso2Lookup = _require.iso2Lookup;
/**
 * Validation function for Redux Form
 * takes input like "rule1:param1:param2|rule2:param1:param2|..."
 *
 * re:regexp:flags            value should match the regular expression "regexp", second param is flags
 *                            when ":" is needed in the regexp it should be escaped like this "\\:"
 * required                   value is required
 * required:otherField        value is required if otherField is not empty
 * phone                      value is a phone number
 * email                      value is an email
 * password:length            value is a password of "length" characters (6 if omitted)
 * credit_card:number         value is credit card number
 * credit_card:date           value is credit card expiration date
 * credit_card:secret         value is credit card CVV2 code
 * match:otherField           value should be the same as the value of otherField
 */


module.exports = function validate(props, options, value, allValues) {
  var rules = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _.split(options, "|")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var rule = _step.value;

      var params = _.split(_.trim(rule), ":");

      var _command = params.shift();

      if (_command !== "re") {
        rules[_command] = params;
      } else {
        rules[_command] = [];
        var line = params.join(":");
        var found = false;

        for (var i = 0; i < line.length; i++) {
          if (line[i] === ":" && (i > 0 || line[i - 1] !== "\\")) {
            rules[_command].push(line.slice(0, i));

            rules[_command] = rules[_command].concat(_.split(line.slice(i + 1), ":"));
            found = true;
            break;
          }
        }

        if (!found) rules[_command] = params;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  value = _.isUndefined(value) ? "" : _.toString(value);

  var commands = _.keys(rules);

  var errors = [];

  if (validator.isEmpty(value)) {
    // when string is empty only "required" command is triggered
    if (_.includes(commands, "required")) {
      // optional first param is the name of other field that should
      // be non-empty for this to be triggered, always triggered otherwise
      var failed = true;

      if (allValues && rules.required.length && rules.required[0]) {
        var other = allValues.get(rules.required[0]);
        if (!other || !other.length) failed = false;
      }

      if (failed) errors.push("ERROR_FIELD_REQUIRED");
    }
  } else {
    // all the other rules only apply to non-empty value
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = commands[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var command = _step2.value;
        var success = void 0;
        var tmp = void 0;
        var search = void 0;
        var normalized = void 0;

        switch (command) {
          case "re":
            tmp = new RegExp(rules[command][0], rules[command][1]);
            success = value.match(tmp);
            if (!success) errors.push("ERROR_INVALID_PATTERN");
            break;

          case "phone":
            // validate phone number in international format
            if (!validator.isEmpty(value)) {
              normalized = _.replace(value, /[^0-9]+/g, "");

              if (normalized.length !== 12) {
                errors.push("ERROR_INVALID_PHONE");
              } else {
                search = allCountries && iso2Lookup && allCountries[iso2Lookup[allValues.get("country")]];
                if (search && search.dialCode) success = _.startsWith(normalized, search.dialCode);else success = true;
                if (!success) errors.push("ERROR_INVALID_PHONE_COUNTRY");
              }
            }

            break;

          case "email":
            // validate email
            if (!validator.isEmpty(value) && !validator.isEmail(value)) errors.push("ERROR_INVALID_EMAIL");
            break;

          case "password":
            // validate password, first param is password length (6 by default)
            if (value.length < (rules[command].length && rules[command][0] || 6)) {
              errors.push("ERROR_INVALID_PASSWORD");
            }

            break;

          case "credit_card":
            // validate credit card attribute set by first param ("number", "date" or "secret")
            normalized = _.replace(value, /[^0-9]+/g, "");

            switch (rules[command].length && rules[command][0]) {
              case "number":
                if (normalized.length !== 16 || !validator.isCreditCard(normalized)) errors.push("ERROR_INVALID_CREDIT_CARD_NUMBER");
                break;

              case "date":
                if (normalized.length !== 4) {
                  errors.push("ERROR_INVALID_CREDIT_CARD_DATE");
                } else {
                  tmp = [parseInt(normalized.slice(0, 2)), parseInt(normalized.slice(2))];
                  if (tmp[0] < 1 || tmp[0] > 12 || tmp[1] < new Date().getFullYear() - 2000) errors.push("ERROR_INVALID_CREDIT_CARD_DATE");
                }

                break;

              case "secret":
                if (normalized.length !== 3) errors.push("ERROR_INVALID_CREDIT_CARD_SECRET");
                break;
            }

            break;

          case "match":
            // this rule is triggered when field set by first param has other value than this one
            tmp = rules[command].length && rules[command][0];
            if (tmp && allValues && allValues.get(tmp) !== value) errors.push("ERROR_MISMATCHED_VALUES");
            break;
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }

  return errors;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _styles = __webpack_require__(3);

var _TextField = _interopRequireDefault(__webpack_require__(71));

var _Errors = _interopRequireDefault(__webpack_require__(22));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var styles = function styles() {
  return {
    formHelper: {
      margin: 0
    }
  };
};

var MyText =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(MyText, _React$PureComponent);

  function MyText(props) {
    var _this;

    _classCallCheck(this, MyText);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MyText).call(this, props));
    _this.input = _react.default.createRef();
    _this.cachedValue = props.input.value;
    _this.cachedPosition = 0;
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleFocus = _this.handleFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleBlur = _this.handleBlur.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(MyText, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.input.current) {
        // fix cursor position on changing the value to the normalized variant
        var cur = this.props.input.value || "";
        var cached = this.cachedValue || "";

        if (this.cachedPosition !== cached.length) {
          var str = cached.substr(0, this.cachedPosition);
          var index = cur.indexOf(str);
          index = index === -1 ? this.cachedPosition : index + this.cachedPosition;
          var delta = cur.length - cached.length;
          if (delta > 0) index += delta;
          if (index <= cur.length) this.input.current.setSelectionRange(index, index);
        }
      }

      this.cachedValue = this.props.input.value;
    }
  }, {
    key: "handleChange",
    value: function handleChange(evt) {
      this.cachedPosition = evt.target.selectionEnd;
      this.cachedValue = evt.target.value;
      this.forceUpdate();
      return this.props.input.onChange(evt.target.value);
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(evt) {
      this.cachedPosition = evt.target.selectionEnd;
      this.forceUpdate();
      return this.props.input.onFocus(evt);
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(evt) {
      return this.props.input.onBlur(evt);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var errors = this.props.meta.error ? _react.default.createElement(_Errors.default, {
        errors: this.props.meta.error
      }) : null;
      return _react.default.createElement(_TextField.default, {
        className: this.props.className,
        autoComplete: "off",
        autoFocus: this.props.autoFocus,
        fullWidth: true,
        variant: this.props.variant || (this.props.type === "textarea" ? "outlined" : "standard"),
        type: this.props.type,
        multiline: this.props.type === "textarea",
        rows: this.props.rows,
        rowsMax: this.props.rows,
        value: this.props.input.value ? this.props.input.value.toString() : "",
        label: this.props.label,
        disabled: this.props.meta.submitting || this.props.disabled,
        error: !!errors,
        FormHelperTextProps: {
          component: errors ? "div" : undefined,
          classes: {
            root: this.props.classes.formHelper
          }
        },
        helperText: errors || undefined,
        onChange: this.handleChange,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        inputRef: this.input,
        inputProps: {
          id: this.props.fieldId,
          onKeyDown: function onKeyDown(evt) {
            if (_this2.props.onSubmit && evt.keyCode === 13) {
              evt.preventDefault();
              evt.stopPropagation();

              _this2.props.onSubmit();
            }
          }
        }
      });
    }
  }]);

  return MyText;
}(_react.default.PureComponent);

var _default = (0, _styles.withStyles)(styles)(MyText);

exports.default = _default;

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/InfoOutlined");

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _immutable = __webpack_require__(8);

var _styles = __webpack_require__(3);

var _Select = _interopRequireDefault(__webpack_require__(76));

var _FormControl = _interopRequireDefault(__webpack_require__(47));

var _FormHelperText = _interopRequireDefault(__webpack_require__(48));

var _MenuItem = _interopRequireDefault(__webpack_require__(52));

var _InputLabel = _interopRequireDefault(__webpack_require__(77));

var _FilledInput = _interopRequireDefault(__webpack_require__(78));

var _Input = _interopRequireDefault(__webpack_require__(79));

var _Errors = _interopRequireDefault(__webpack_require__(22));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var styles = function styles() {
  return {
    formHelper: {
      margin: 0
    }
  };
};

var MySelect =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(MySelect, _React$PureComponent);

  function MySelect(props) {
    var _this;

    _classCallCheck(this, MySelect);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MySelect).call(this, props));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleFocus = _this.handleFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleBlur = _this.handleBlur.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(MySelect, [{
    key: "handleChange",
    value: function handleChange(evt) {
      return this.props.input.onChange(evt.target.value);
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(evt) {
      return this.props.input.onFocus(evt);
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(evt) {
      return this.props.input.onBlur(evt);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var errors = this.props.meta.error ? _react.default.createElement(_FormHelperText.default, {
        component: "div",
        classes: {
          root: this.props.classes.formHelper
        }
      }, _react.default.createElement(_Errors.default, {
        errors: this.props.meta.error
      })) : null;
      var SelectInput = this.props.variant === "filled" ? _FilledInput.default : _Input.default;
      return _react.default.createElement(_FormControl.default, {
        className: this.props.className,
        variant: this.props.variant || "standard",
        fullWidth: true,
        error: !!errors
      }, _react.default.createElement(_InputLabel.default, {
        htmlFor: this.props.fieldId
      }, this.props.label), _react.default.createElement(_Select.default, {
        value: this.props.input.value || "",
        native: this.props.native,
        autoFocus: this.props.autoFocus,
        disabled: this.props.meta.submitting || this.props.disabled,
        onChange: this.handleChange,
        input: _react.default.createElement(SelectInput, {
          inputProps: {
            id: this.props.fieldId,
            onKeyDown: function onKeyDown(evt) {
              if (_this2.props.onSubmit && evt.keyCode === 13) {
                evt.preventDefault();
                evt.stopPropagation();

                _this2.props.onSubmit();
              }
            }
          }
        })
      }, !this.props.native && // eslint-disable-next-line lodash/prefer-lodash-method
      this.props.options.map(function (item, index) {
        return _react.default.createElement(_MenuItem.default, {
          key: "item-".concat(index),
          value: item.get("value")
        }, item.get("label"));
      }), !!this.props.native && // eslint-disable-next-line lodash/prefer-lodash-method
      this.props.options.map(function (item, index) {
        return _react.default.createElement("option", {
          key: "item-".concat(index),
          value: item.get("value")
        }, item.get("label"));
      })), errors);
    }
  }]);

  return MySelect;
}(_react.default.PureComponent);

var _default = (0, _styles.withStyles)(styles)(MySelect);

exports.default = _default;

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FilledInput");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _styles = __webpack_require__(3);

var _FormControl = _interopRequireDefault(__webpack_require__(47));

var _FormControlLabel = _interopRequireDefault(__webpack_require__(81));

var _FormHelperText = _interopRequireDefault(__webpack_require__(48));

var _Checkbox = _interopRequireDefault(__webpack_require__(62));

var _Errors = _interopRequireDefault(__webpack_require__(22));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var styles = function styles() {
  return {
    formHelper: {
      margin: 0
    },
    label: {
      marginLeft: 0
    }
  };
};

var MyCheckbox =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(MyCheckbox, _React$PureComponent);

  function MyCheckbox(props) {
    var _this;

    _classCallCheck(this, MyCheckbox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MyCheckbox).call(this, props));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleFocus = _this.handleFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleBlur = _this.handleBlur.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(MyCheckbox, [{
    key: "handleChange",
    value: function handleChange(evt, isChecked) {
      return this.props.input.onChange(isChecked);
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(evt) {
      return this.props.input.onFocus(evt);
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(evt) {
      return this.props.input.onBlur(evt);
    }
  }, {
    key: "render",
    value: function render() {
      var errors = this.props.meta.error ? _react.default.createElement(_FormHelperText.default, {
        component: "div",
        classes: {
          root: this.props.classes.formHelper
        }
      }, _react.default.createElement(_Errors.default, {
        errors: this.props.meta.error
      })) : null;
      return _react.default.createElement(_FormControl.default, {
        className: this.props.className,
        variant: this.props.variant || "standard",
        fullWidth: true,
        error: !!errors
      }, _react.default.createElement(_FormControlLabel.default, {
        classes: {
          root: this.props.classes.label
        },
        control: _react.default.createElement(_Checkbox.default, {
          id: this.props.fieldId,
          value: "on",
          autoFocus: this.props.autoFocus,
          checked: this.props.input.value,
          disabled: this.props.meta.submitting || this.props.disabled,
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          color: this.props.color || "primary"
        }),
        label: this.props.label
      }), errors);
    }
  }]);

  return MyCheckbox;
}(_react.default.PureComponent);

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(MyCheckbox);

exports.default = _default;

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),
/* 82 */,
/* 83 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/colorManipulator");

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _immutable = __webpack_require__(8);

var _reduxImmutable = __webpack_require__(11);

var types = _interopRequireWildcard(__webpack_require__(49));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* State Shape
Map({
  countries: List([]),
  employees: List([]),
  profit: List([]),
  sales: List([]),
  clients: List([]),
  avgTime: List([]),
})
*/
var countriesReducer = function countriesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.List)([]);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_COUNTRIES:
      if (!_.isUndefined(action.countries)) return (0, _immutable.fromJS)(action.countries);
      break;
  }

  return state;
};

var employeesReducer = function employeesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.List)([]);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_EMPLOYEES:
      if (!_.isUndefined(action.employees)) return (0, _immutable.fromJS)(action.employees);
      break;
  }

  return state;
};

var profitReducer = function profitReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.List)([]);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_PROFIT:
      if (!_.isUndefined(action.profit)) return (0, _immutable.fromJS)(action.profit);
      break;
  }

  return state;
};

var salesReducer = function salesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.List)([]);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_SALES:
      if (!_.isUndefined(action.sales)) return (0, _immutable.fromJS)(action.sales);
      break;
  }

  return state;
};

var clientsReducer = function clientsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.List)([]);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_CLIENTS:
      if (!_.isUndefined(action.clients)) return (0, _immutable.fromJS)(action.clients);
      break;
  }

  return state;
};

var avgTimeReducer = function avgTimeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.List)([]);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_AVG_TIME:
      if (!_.isUndefined(action.avgTime)) return (0, _immutable.fromJS)(action.avgTime);
      break;
  }

  return state;
};

var reducer = (0, _reduxImmutable.combineReducers)({
  countries: countriesReducer,
  employees: employeesReducer,
  profit: profitReducer,
  sales: salesReducer,
  clients: clientsReducer,
  avgTime: avgTimeReducer
});
var _default = reducer;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadAvgTime = exports.loadClients = exports.loadSales = exports.loadProfit = exports.loadEmployees = exports.loadCountries = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(4));

var actions = _interopRequireWildcard(__webpack_require__(86));

var _app = __webpack_require__(9);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var loadCountries = function loadCountries() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      req = _ref.req;

  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(dispatch) {
        var countries, response;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!req) {
                  _context.next = 6;
                  break;
                }

                _context.next = 3;
                return req.di.get("repository.dashboard").getCountries(req);

              case 3:
                countries = _context.sent;
                _context.next = 10;
                break;

              case 6:
                _context.next = 8;
                return dispatch(_app.appOperations.gqlQuery("\n          query {\n            countries {\n              code\n              name\n              callingCode\n            }\n          }\n        "));

              case 8:
                response = _context.sent;
                countries = response && _.get(response, "data.countries");

              case 10:
                _context.next = 12;
                return dispatch(actions.setCountries({
                  countries: countries
                }));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};

exports.loadCountries = loadCountries;

var loadEmployees = function loadEmployees() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      req = _ref3.req;

  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(dispatch) {
        var employees, response;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!req) {
                  _context2.next = 6;
                  break;
                }

                _context2.next = 3;
                return req.di.get("repository.dashboard").getEmployees(req);

              case 3:
                employees = _context2.sent;
                _context2.next = 10;
                break;

              case 6:
                _context2.next = 8;
                return dispatch(_app.appOperations.gqlQuery("\n          query {\n            employees {\n              id\n              checked\n              name\n              dept\n              title\n              country\n              salary\n            }\n          }\n        "));

              case 8:
                response = _context2.sent;
                employees = response && _.get(response, "data.employees");

              case 10:
                _context2.next = 12;
                return dispatch(actions.setEmployees({
                  employees: employees
                }));

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};

exports.loadEmployees = loadEmployees;

var loadProfit = function loadProfit() {
  var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      req = _ref5.req;

  return (
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(dispatch) {
        var profit, response;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!req) {
                  _context3.next = 6;
                  break;
                }

                _context3.next = 3;
                return req.di.get("repository.dashboard").getProfit(req);

              case 3:
                profit = _context3.sent;
                _context3.next = 10;
                break;

              case 6:
                _context3.next = 8;
                return dispatch(_app.appOperations.gqlQuery("\n          query {\n            profit {\n              date\n              revenues\n              expenses\n              profit\n            }\n          }\n        "));

              case 8:
                response = _context3.sent;
                profit = response && _.get(response, "data.profit");

              case 10:
                _context3.next = 12;
                return dispatch(actions.setProfit({
                  profit: profit
                }));

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref6.apply(this, arguments);
      };
    }()
  );
};

exports.loadProfit = loadProfit;

var loadSales = function loadSales() {
  var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      req = _ref7.req;

  return (
    /*#__PURE__*/
    function () {
      var _ref8 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(dispatch) {
        var sales, response;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!req) {
                  _context4.next = 6;
                  break;
                }

                _context4.next = 3;
                return req.di.get("repository.dashboard").getSales(req);

              case 3:
                sales = _context4.sent;
                _context4.next = 10;
                break;

              case 6:
                _context4.next = 8;
                return dispatch(_app.appOperations.gqlQuery("\n          query {\n            sales {\n              date\n              sales\n            }\n          }\n        "));

              case 8:
                response = _context4.sent;
                sales = response && _.get(response, "data.sales");

              case 10:
                _context4.next = 12;
                return dispatch(actions.setSales({
                  sales: sales
                }));

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref8.apply(this, arguments);
      };
    }()
  );
};

exports.loadSales = loadSales;

var loadClients = function loadClients() {
  var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      req = _ref9.req;

  return (
    /*#__PURE__*/
    function () {
      var _ref10 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(dispatch) {
        var clients, response;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!req) {
                  _context5.next = 6;
                  break;
                }

                _context5.next = 3;
                return req.di.get("repository.dashboard").getClients(req);

              case 3:
                clients = _context5.sent;
                _context5.next = 10;
                break;

              case 6:
                _context5.next = 8;
                return dispatch(_app.appOperations.gqlQuery("\n          query {\n            clients {\n              date\n              clients\n            }\n          }\n        "));

              case 8:
                response = _context5.sent;
                clients = response && _.get(response, "data.clients");

              case 10:
                _context5.next = 12;
                return dispatch(actions.setClients({
                  clients: clients
                }));

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x5) {
        return _ref10.apply(this, arguments);
      };
    }()
  );
};

exports.loadClients = loadClients;

var loadAvgTime = function loadAvgTime() {
  var _ref11 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      req = _ref11.req;

  return (
    /*#__PURE__*/
    function () {
      var _ref12 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6(dispatch) {
        var avgTime, response;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!req) {
                  _context6.next = 6;
                  break;
                }

                _context6.next = 3;
                return req.di.get("repository.dashboard").getAvgTime(req);

              case 3:
                avgTime = _context6.sent;
                _context6.next = 10;
                break;

              case 6:
                _context6.next = 8;
                return dispatch(_app.appOperations.gqlQuery("\n          query {\n            avgTime {\n              date\n              avgTime\n            }\n          }\n        "));

              case 8:
                response = _context6.sent;
                avgTime = response && _.get(response, "data.avgTime");

              case 10:
                _context6.next = 12;
                return dispatch(actions.setAvgTime({
                  avgTime: avgTime
                }));

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x6) {
        return _ref12.apply(this, arguments);
      };
    }()
  );
};

exports.loadAvgTime = loadAvgTime;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAvgTime = exports.setClients = exports.setSales = exports.setProfit = exports.setEmployees = exports.setCountries = void 0;

var types = _interopRequireWildcard(__webpack_require__(49));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var setCountries = function setCountries(_ref) {
  var countries = _ref.countries;
  return {
    type: types.SET_COUNTRIES,
    countries: countries
  };
};

exports.setCountries = setCountries;

var setEmployees = function setEmployees(_ref2) {
  var employees = _ref2.employees;
  return {
    type: types.SET_EMPLOYEES,
    employees: employees
  };
};

exports.setEmployees = setEmployees;

var setProfit = function setProfit(_ref3) {
  var profit = _ref3.profit;
  return {
    type: types.SET_PROFIT,
    profit: profit
  };
};

exports.setProfit = setProfit;

var setSales = function setSales(_ref4) {
  var sales = _ref4.sales;
  return {
    type: types.SET_SALES,
    sales: sales
  };
};

exports.setSales = setSales;

var setClients = function setClients(_ref5) {
  var clients = _ref5.clients;
  return {
    type: types.SET_CLIENTS,
    clients: clients
  };
};

exports.setClients = setClients;

var setAvgTime = function setAvgTime(_ref6) {
  var avgTime = _ref6.avgTime;
  return {
    type: types.SET_AVG_TIME,
    avgTime: avgTime
  };
};

exports.setAvgTime = setAvgTime;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAvgTime = exports.getClients = exports.getSales = exports.getProfit = exports.getEmployees = exports.getCountryOptions = exports.getCountries = void 0;

var _reselect = __webpack_require__(21);

var _immutable = __webpack_require__(8);

var getCountries = function getCountries(state) {
  return state.getIn(["dashboard", "employees"]);
};

exports.getCountries = getCountries;
var getCountryOptions = (0, _reselect.createSelector)(function (state) {
  return state.getIn(["dashboard", "countries"]);
}, function (countries) {
  return (// eslint-disable-next-line lodash/prefer-lodash-method
    countries.map(function (country) {
      return (0, _immutable.Map)({
        value: country.get("code"),
        label: country.get("name")
      });
    }).unshift((0, _immutable.Map)({
      value: "",
      label: ""
    }))
  );
});
exports.getCountryOptions = getCountryOptions;

var getEmployees = function getEmployees(state) {
  return state.getIn(["dashboard", "employees"]);
};

exports.getEmployees = getEmployees;

var getProfit = function getProfit(state, props) {
  return (// eslint-disable-next-line lodash/prefer-lodash-method
    state.getIn(["dashboard", "profit"]).map(function (item) {
      return item.set("name", props.intl.formatDate(new Date(item.get("date"), {
        weekday: "short"
      })));
    })
  );
};

exports.getProfit = getProfit;

var getSales = function getSales(state) {
  return state.getIn(["dashboard", "sales"]);
};

exports.getSales = getSales;

var getClients = function getClients(state) {
  return state.getIn(["dashboard", "clients"]);
};

exports.getClients = getClients;

var getAvgTime = function getAvgTime(state) {
  return state.getIn(["dashboard", "avgTime"]);
};

exports.getAvgTime = getAvgTime;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _immutable = __webpack_require__(8);

var _reduxImmutable = __webpack_require__(11);

var types = _interopRequireWildcard(__webpack_require__(50));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* State Shape
Map({
  list: List([
    Map({
      id: String,
      isSelected: Boolean,
      name: String,
      email: String,
      roles: [String],
    })
  ]),
  editModalUserId: String, // null when creating a new user
  isEditModalOpen: false,
})
*/
var listReducer = function listReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.List)([]);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_LIST:
      if (!_.isUndefined(action.list)) // eslint-disable-next-line lodash/prefer-lodash-method
        return (0, _immutable.fromJS)(action.list).map(function (item, index) {
          return item.set("isSelected", !!state.getIn([index, "isSelected"]));
        });
      break;

    case types.SET_SELECTED:
      if (!_.isUndefined(action.userId)) return state.withMutations(function (list) {
        // eslint-disable-next-line lodash/prefer-lodash-method
        var index = list.findIndex(function (item) {
          return item.get("id") === action.userId;
        });
        if (index !== -1) list.setIn([index, "isSelected"], !!action.isSelected);
      });
      break;

    case types.SELECT_ALL:
      // eslint-disable-next-line lodash/prefer-lodash-method
      return state.map(function (item) {
        return item.set("isSelected", true);
      });

    case types.DESELECT_ALL:
      // eslint-disable-next-line lodash/prefer-lodash-method
      return state.map(function (item) {
        return item.set("isSelected", false);
      });
  }

  return state;
};

var editModalUserIdReducer = function editModalUserIdReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SHOW_EDIT_MODAL:
      return action.userId || null;
  }

  return state;
};

var isEditModalOpenReducer = function isEditModalOpenReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SHOW_EDIT_MODAL:
      return true;

    case types.HIDE_EDIT_MODAL:
      return false;
  }

  return state;
};

var reducer = (0, _reduxImmutable.combineReducers)({
  list: listReducer,
  editModalUserId: editModalUserIdReducer,
  isEditModalOpen: isEditModalOpenReducer
});
var _default = reducer;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.edit = exports.create = exports.load = exports.editFirstSelected = exports.deselectAll = exports.selectAll = exports.setSelected = exports.hideEditModal = exports.showEditModal = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(4));

var actions = _interopRequireWildcard(__webpack_require__(90));

var selectors = _interopRequireWildcard(__webpack_require__(65));

var _app = __webpack_require__(9);

var _constants = _interopRequireDefault(__webpack_require__(5));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var showEditModal = actions.showEditModal;
exports.showEditModal = showEditModal;
var hideEditModal = actions.hideEditModal;
exports.hideEditModal = hideEditModal;
var setSelected = actions.setSelected;
exports.setSelected = setSelected;
var selectAll = actions.selectAll;
exports.selectAll = selectAll;
var deselectAll = actions.deselectAll;
exports.deselectAll = deselectAll;

var editFirstSelected = function editFirstSelected() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(dispatch, getState) {
        var selected;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                selected = selectors.getSelected(getState());

                if (!selected.size) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", dispatch(actions.showEditModal({
                  userId: selected.first().get("id")
                })));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

exports.editFirstSelected = editFirstSelected;

var load = function load() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      req = _ref2.req;

  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(dispatch) {
        var users, response;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!req) {
                  _context2.next = 6;
                  break;
                }

                _context2.next = 3;
                return req.di.get("repository.users").getUsers(req);

              case 3:
                users = _context2.sent;
                _context2.next = 10;
                break;

              case 6:
                _context2.next = 8;
                return dispatch(_app.appOperations.gqlQuery("\n          query {\n            users {\n              id\n              name\n              email\n              roles\n            }\n          }\n        "));

              case 8:
                response = _context2.sent;
                users = response && _.get(response, "data.users");

              case 10:
                _context2.next = 12;
                return dispatch(actions.setList({
                  list: users
                }));

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};

exports.load = load;

var create = function create(_ref4) {
  var name = _ref4.name,
      email = _ref4.email,
      password = _ref4.password,
      isAdmin = _ref4.isAdmin;
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(dispatch) {
        var result, response, errors, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, error;

        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                result = false;
                _context3.prev = 1;
                _context3.next = 4;
                return dispatch(_app.appOperations.gqlQuery("\n          mutation ($name: String, $email: String, $password: String, $roles: [UserRole]) {\n            createUser(name: $name, email: $email, password: $password, roles: $roles) {\n              success\n            }\n          }\n        ", {
                  name: name,
                  email: email,
                  password: password,
                  roles: _.compact([isAdmin && _constants.default.roles.ADMIN])
                }));

              case 4:
                response = _context3.sent;

                if (!(response && _.get(response, "data.createUser.success", false))) {
                  _context3.next = 11;
                  break;
                }

                _context3.next = 8;
                return dispatch(actions.hideEditModal());

              case 8:
                return _context3.abrupt("return", true);

              case 11:
                result = {};
                errors = response && _.get(response, "errors", []);
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context3.prev = 16;

                for (_iterator = errors[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  error = _step.value;
                  if (error && error.code === "E_VALIDATION") _.merge(result, error.details);else result._error = (result._error || []).concat([error.message]);
                }

                _context3.next = 24;
                break;

              case 20:
                _context3.prev = 20;
                _context3.t0 = _context3["catch"](16);
                _didIteratorError = true;
                _iteratorError = _context3.t0;

              case 24:
                _context3.prev = 24;
                _context3.prev = 25;

                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }

              case 27:
                _context3.prev = 27;

                if (!_didIteratorError) {
                  _context3.next = 30;
                  break;
                }

                throw _iteratorError;

              case 30:
                return _context3.finish(27);

              case 31:
                return _context3.finish(24);

              case 32:
                if (!_.keys(result).length) result = {
                  _error: "EDIT_USER_FAILED"
                };

              case 33:
                _context3.next = 38;
                break;

              case 35:
                _context3.prev = 35;
                _context3.t1 = _context3["catch"](1);
                console.error(_context3.t1);

              case 38:
                return _context3.abrupt("return", result);

              case 39:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 35], [16, 20, 24, 32], [25,, 27, 31]]);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};

exports.create = create;

var edit = function edit(_ref6) {
  var id = _ref6.id,
      name = _ref6.name,
      email = _ref6.email,
      password = _ref6.password,
      isAdmin = _ref6.isAdmin;
  return (
    /*#__PURE__*/
    function () {
      var _ref7 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(dispatch) {
        var result, response, errors, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, error;

        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                result = false;
                _context4.prev = 1;
                _context4.next = 4;
                return dispatch(_app.appOperations.gqlQuery("\n          mutation ($id: String, $name: String, $email: String, $password: String, $roles: [UserRole]) {\n            editUser(id: $id, name: $name, email: $email, password: $password, roles: $roles) {\n              success\n            }\n          }\n        ", {
                  id: id,
                  name: name,
                  email: email,
                  password: password,
                  roles: _.compact([isAdmin && _constants.default.roles.ADMIN])
                }));

              case 4:
                response = _context4.sent;

                if (!(response && _.get(response, "data.editUser.success", false))) {
                  _context4.next = 11;
                  break;
                }

                _context4.next = 8;
                return dispatch(actions.hideEditModal());

              case 8:
                return _context4.abrupt("return", true);

              case 11:
                result = {};
                errors = response && _.get(response, "errors", []);
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context4.prev = 16;

                for (_iterator2 = errors[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  error = _step2.value;
                  if (error && error.code === "E_VALIDATION") _.merge(result, error.details);else result._error = (result._error || []).concat([error.message]);
                }

                _context4.next = 24;
                break;

              case 20:
                _context4.prev = 20;
                _context4.t0 = _context4["catch"](16);
                _didIteratorError2 = true;
                _iteratorError2 = _context4.t0;

              case 24:
                _context4.prev = 24;
                _context4.prev = 25;

                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }

              case 27:
                _context4.prev = 27;

                if (!_didIteratorError2) {
                  _context4.next = 30;
                  break;
                }

                throw _iteratorError2;

              case 30:
                return _context4.finish(27);

              case 31:
                return _context4.finish(24);

              case 32:
                if (!_.keys(result).length) result = {
                  _error: "EDIT_USER_FAILED"
                };

              case 33:
                _context4.next = 38;
                break;

              case 35:
                _context4.prev = 35;
                _context4.t1 = _context4["catch"](1);
                console.error(_context4.t1);

              case 38:
                return _context4.abrupt("return", result);

              case 39:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 35], [16, 20, 24, 32], [25,, 27, 31]]);
      }));

      return function (_x5) {
        return _ref7.apply(this, arguments);
      };
    }()
  );
};

exports.edit = edit;

var remove = function remove(_ref8) {
  var id = _ref8.id;
  return (
    /*#__PURE__*/
    function () {
      var _ref9 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(dispatch) {
        var response;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return dispatch(_app.appOperations.gqlQuery("\n        mutation ($id: String) {\n          deleteUser(id: $id) {\n            success\n          }\n        }\n      ", {
                  id: id
                }));

              case 2:
                response = _context5.sent;
                return _context5.abrupt("return", response && _.get(response, "data.deleteUser.success") || false);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x6) {
        return _ref9.apply(this, arguments);
      };
    }()
  );
};

exports.remove = remove;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideEditModal = exports.showEditModal = exports.deselectAll = exports.selectAll = exports.setSelected = exports.setList = void 0;

var types = _interopRequireWildcard(__webpack_require__(50));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var setList = function setList(_ref) {
  var list = _ref.list;
  return {
    type: types.SET_LIST,
    list: list
  };
};

exports.setList = setList;

var setSelected = function setSelected(_ref2) {
  var userId = _ref2.userId,
      isSelected = _ref2.isSelected;
  return {
    type: types.SET_SELECTED,
    userId: userId,
    isSelected: isSelected
  };
};

exports.setSelected = setSelected;

var selectAll = function selectAll() {
  return {
    type: types.SELECT_ALL
  };
};

exports.selectAll = selectAll;

var deselectAll = function deselectAll() {
  return {
    type: types.DESELECT_ALL
  };
};

exports.deselectAll = deselectAll;

var showEditModal = function showEditModal() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      userId = _ref3.userId;

  return {
    type: types.SHOW_EDIT_MODAL,
    userId: userId
  };
};

exports.showEditModal = showEditModal;

var hideEditModal = function hideEditModal() {
  return {
    type: types.HIDE_EDIT_MODAL
  };
};

exports.hideEditModal = hideEditModal;

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),
/* 92 */,
/* 93 */,
/* 94 */
/***/ (function(module, exports) {

module.exports = require("jss");

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var material = __webpack_require__(112);

var daemon = __webpack_require__(113);

module.exports = {
  defaultTheme: "daemon",
  names: {
    daemon: "Daemon",
    material: "Material"
  },
  themes: {
    daemon: daemon,
    material: material
  }
};

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = require("pako");

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = require("utf8");

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = require("base64util");

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = require("json-immutable");

/***/ }),
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(106);


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(4));

var _react = _interopRequireDefault(__webpack_require__(0));

var _app = _interopRequireWildcard(__webpack_require__(107));

var _router = _interopRequireDefault(__webpack_require__(18));

var _reactRedux = __webpack_require__(14);

var _styles = __webpack_require__(3);

var _jss = __webpack_require__(94);

var _CssBaseline = _interopRequireDefault(__webpack_require__(108));

var _jssExtend = _interopRequireDefault(__webpack_require__(109));

var _JssProvider = _interopRequireDefault(__webpack_require__(110));

var _pageContext = _interopRequireDefault(__webpack_require__(111));

var _serialize = _interopRequireDefault(__webpack_require__(115));

var _deserialize = _interopRequireDefault(__webpack_require__(116));

var _store = _interopRequireDefault(__webpack_require__(117));

var _app2 = __webpack_require__(9);

var _auth = __webpack_require__(10);

var _constants = _interopRequireDefault(__webpack_require__(5));

var _isRouteAllowed = _interopRequireDefault(__webpack_require__(20));

var _IntlProvider = _interopRequireDefault(__webpack_require__(121));

var _DateProvider = _interopRequireDefault(__webpack_require__(123));

var _Layout = _interopRequireDefault(__webpack_require__(127));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Configure JSS
var jss = (0, _jss.create)({
  plugins: [].concat(_toConsumableArray((0, _styles.jssPreset)().plugins), [(0, _jssExtend.default)()])
});

var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  _createClass(MyApp, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var Component, ctx, _getStore, isCreated, store, req, res, err, query, statusCode, pageProps;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                _getStore = (0, _store.default)(), isCreated = _getStore.isCreated, store = _getStore.store;
                ctx.store = store;
                req = ctx.req, res = ctx.res, err = ctx.err, query = ctx.query;

                if (!isCreated) {
                  _context.next = 18;
                  break;
                }

                _context.t0 = store;
                _context.t1 = _app2.appOperations;
                _context.t2 = req && req.getAuthStatus;

                if (!_context.t2) {
                  _context.next = 12;
                  break;
                }

                _context.next = 11;
                return req.getAuthStatus();

              case 11:
                _context.t2 = _context.sent;

              case 12:
                _context.t3 = _context.t2;
                _context.t4 = query && query.googleMapsKey;
                _context.t5 = {
                  status: _context.t3,
                  googleMapsKey: _context.t4
                };
                _context.t6 = _context.t1.create.call(_context.t1, _context.t5);
                _context.next = 18;
                return _context.t0.dispatch.call(_context.t0, _context.t6);

              case 18:
                statusCode = res ? res.statusCode : err ? err.statusCode : null;
                if (!_.isFinite(statusCode) || statusCode < 200) statusCode = 200;

                if (!(_app2.appSelectors.getStatusCode(store.getState()) !== statusCode)) {
                  _context.next = 23;
                  break;
                }

                _context.next = 23;
                return store.dispatch(_app2.appOperations.setStatusCode({
                  code: statusCode
                }));

              case 23:
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 28;
                  break;
                }

                _context.next = 27;
                return Component.getInitialProps(ctx);

              case 27:
                pageProps = _context.sent;

              case 28:
                return _context.abrupt("return", {
                  pageProps: pageProps,
                  locale: query.locale,
                  theme: query.theme,
                  state: (0, _serialize.default)(store.getState())
                });

              case 29:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function MyApp(props) {
    var _this;

    _classCallCheck(this, MyApp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MyApp).call(this, props));

    var _getStore2 = (0, _store.default)((0, _deserialize.default)(props.state)),
        store = _getStore2.store;

    _this.store = store;
    store.dispatch(_app2.appOperations.init());
    var locale = props.locale;
    if (!locale) locale = _app2.appSelectors.getLocale(store.getState());
    store.dispatch(_app2.appOperations.setLocale({
      locale: locale
    }));
    _this.pageContext = (0, _pageContext.default)(props.theme);
    return _this;
  }

  _createClass(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (false) { var jssStyles; }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          router = _this$props.router,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var path = router.pathname;
      var title = _constants.default.pages[path] && _constants.default.pages[path].title;
      if (false) {}
      return _react.default.createElement(_app.Container, null, _react.default.createElement(_reactRedux.Provider, {
        store: this.store
      }, _react.default.createElement(_IntlProvider.default, null, _react.default.createElement(_DateProvider.default, null, _react.default.createElement(_JssProvider.default, {
        jss: jss,
        registry: this.pageContext.sheetsRegistry,
        generateClassName: this.pageContext.generateClassName
      }, _react.default.createElement(_styles.MuiThemeProvider, {
        theme: this.pageContext.theme,
        sheetsManager: this.pageContext.sheetsManager
      }, _react.default.createElement(_CssBaseline.default, null), _react.default.createElement(_Layout.default, {
        title: title
      }, _react.default.createElement(Component, _extends({}, pageProps, {
        pageContext: this.pageContext
      })))))))));
    }
  }]);

  return MyApp;
}(_app.default);

var _default = MyApp;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = require("jss-extend");

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = require("react-jss/lib/JssProvider");

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPageContext;

var _jss = __webpack_require__(94);

var _styles = __webpack_require__(3);

var _themes = _interopRequireDefault(__webpack_require__(95));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-underscore-dangle */
function createPageContext(themeName) {
  var theme = _themes.default.themes[themeName];
  if (!theme && _themes.default.themes[_themes.default.defaultTheme]) theme = _themes.default.themes[_themes.default.defaultTheme];
  if (!theme) theme = {};
  return {
    theme: (0, _styles.createMuiTheme)(theme),
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new _jss.SheetsRegistry(),
    // The standard class name generator.
    generateClassName: (0, _styles.createGenerateClassName)()
  };
}

function getPageContext(themeName) {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (true) {
    return createPageContext(themeName);
  } // Reuse context on the client-side.


  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext(themeName);
  }

  return global.__INIT_MATERIAL_UI__;
}

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var primary = "#95acbd";
var secondary = "#53dc7f";
var pageBackground = "#f0f4f8";
var normalBackground = "#f0f4f8";
var disabledBackground = "#e0e4e8";
var textNormal = "rgba(0, 42, 70, 0.87)";
var textDark = "rgba(0, 42, 70, 0.54)";
var textDisabled = "rgba(0, 42, 70, 0.38)";
var textContrast = "#fefefe";
var fontSize = 14;
module.exports = {
  name: "material",
  wallpaper: "/static/img/bg.jpg?v=3",
  palette: {
    primary: {
      main: primary,
      contrastText: textContrast
    },
    secondary: {
      main: secondary,
      contrastText: textContrast
    },
    background: {
      default: pageBackground,
      paper: "#ffffff"
    },
    text: {
      primary: textNormal,
      secondary: textDark,
      disabled: textDisabled,
      hint: textDisabled
    }
  },
  typography: {
    useNextVariants: true,
    fontSize: fontSize,
    fontFamily: ["Roboto", "sans-serif"].join(", ")
  },
  shape: {
    borderRadius: 5
  },
  sidebar: {
    width: 15,
    height: 11,
    background: "#053551",
    color: "#8d9fad",
    backgroundHover: "#008abd",
    colorHover: "#ffffff",
    backgroundSelected: "#0099d1",
    colorSelected: "#ffffff",
    backgroundSelectedHover: "#00b1f2",
    colorSelectedHover: "#ffffff"
  },
  main: {
    spacing: 24
  },
  overrides: {
    MuiTableRow: {
      root: {
        height: ["100%", "!important"]
      },
      head: {
        height: ["100%", "!important"]
      }
    },
    MuiTableHead: {
      root: {
        background: primary
      }
    },
    MuiTableCell: {
      root: {
        border: ["1px solid ".concat(pageBackground), "!important"],
        "&.odd": {
          background: "#ffffff"
        },
        "&.even": {
          background: "#e3e9f2"
        },
        "&.selected": {
          background: ["padding-box #a5d9f8", "!important"],
          "&:first-child": {
            borderLeft: ["1px solid transparent", "!important"]
          },
          "&:last-child": {
            borderRight: ["1px solid transparent", "!important"]
          },
          "&:not(.spaced-odd):not(.spaced-even)": {
            border: ["1px solid #a5d9f8", "!important"]
          }
        },
        "&.expanded": {
          border: ["1px solid transparent", "!important"]
        },
        "&.spaced-odd": {
          height: ["auto", "!important"],
          background: ["padding-box #ffffff", "!important"],
          borderTop: ["4px solid transparent", "!important"],
          borderRight: ["none", "!important"],
          borderBottom: ["4px solid transparent", "!important"],
          borderLeft: ["none", "!important"],
          "&:first-child": {
            borderLeft: ["1px solid transparent", "!important"],
            borderTopLeftRadius: [4, "!important"],
            borderBottomLeftRadius: [4, "!important"]
          },
          "&:last-child": {
            borderRight: ["1px solid transparent", "!important"],
            borderTopRightRadius: [4, "!important"],
            borderBottomRightRadius: [4, "!important"]
          },
          "&.selected": {
            background: ["padding-box #a5d9f8", "!important"]
          }
        },
        "&.spaced-even": {
          height: ["auto", "!important"],
          background: ["padding-box #e3e9f2", "!important"],
          borderTop: ["4px solid transparent", "!important"],
          borderRight: ["none", "!important"],
          borderBottom: ["4px solid transparent", "!important"],
          borderLeft: ["none", "!important"],
          "&:first-child": {
            borderLeft: ["1px solid transparent", "!important"],
            borderTopLeftRadius: [4, "!important"],
            borderBottomLeftRadius: [4, "!important"]
          },
          "&:last-child": {
            borderRight: ["1px solid transparent", "!important"],
            borderTopRightRadius: [3, "!important"],
            borderBottomRightRadius: [3, "!important"]
          },
          "&.selected": {
            background: ["padding-box #a5d9f8", "!important"]
          }
        }
      },
      head: {
        fontSize: fontSize,
        color: textContrast
      },
      body: {
        fontSize: fontSize
      }
    },
    MuiButton: {
      label: {
        height: "1em"
      },
      contained: {
        "&:not($containedPrimary):not($containedSecondary)": {
          background: [normalBackground, "!important"]
        }
      },
      disabled: {
        "&:not($containedPrimary):not($containedSecondary)": {
          background: [disabledBackground, "!important"],
          boxShadow: ["0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)", "!important"]
        }
      }
    },
    MuiFilledInput: {
      root: {
        background: ["#f9f9f9", "!important"],
        borderRadius: 4,
        "&:hover": {
          background: ["#ffffff", "!important"]
        }
      },
      focused: {
        background: ["#ffffff", "!important"]
      },
      underline: {
        "&:before": {
          borderBottom: ["none", "!important"]
        },
        "&:after": {
          borderBottom: ["none", "!important"]
        }
      }
    },
    MuiInputLabel: {
      root: {
        pointerEvents: "none",
        zIndex: 100
      }
    },
    MuiCheckbox: {
      checked: {
        color: ["#0092ff", "!important"]
      }
    },
    MuiListItemIcon: {
      root: {
        margin: [0, "!important"]
      }
    }
  }
};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(83),
    darken = _require.darken,
    lighten = _require.lighten,
    fade = _require.fade;

var _require2 = __webpack_require__(114),
    red = _require2.red,
    blueGrey = _require2.blueGrey;

var primary = "#707484";
var secondary = "#af441d";
var bgPage = "#000000";
var bgNormal = "#484e5e";
var textNormal = "rgba(255, 255, 255, 0.9)";
var textDark = "rgba(255, 255, 255, 0.6)";
var textDisabled = "rgba(255, 255, 255, 0.4)";
var textContrast = "#ffffff";
var textError = red[400];
var textInfo = blueGrey[400];
var fontSize = 14;
module.exports = {
  name: "daemon",
  wallpaper: "/static/img/bg.jpg?v=3",
  palette: {
    primary: {
      main: primary,
      contrastText: textContrast
    },
    secondary: {
      main: secondary,
      contrastText: textContrast
    },
    background: {
      default: bgPage,
      paper: bgNormal
    },
    text: {
      primary: textNormal,
      secondary: textDark,
      disabled: textDisabled,
      hint: textDisabled
    },
    error: {
      main: textError
    },
    divider: "rgba(255, 255, 255, 0.12)"
  },
  typography: {
    useNextVariants: true,
    fontSize: fontSize,
    fontFamily: ["Roboto", "sans-serif"].join(", ")
  },
  shape: {
    borderRadius: 3
  },
  sidebar: {
    computerWidth: 30,
    tabletWidth: 20,
    phoneWidth: 20,
    background: "linear-gradient(to bottom, #484e5e 0, #161920 80%, #161920 100%)",
    itemBackground: "transparent",
    itemBorder: "4px solid transparent",
    itemColor: textDark,
    itemHoverBackground: bgNormal,
    itemHoverColor: textNormal,
    itemHoverBorder: "4px solid ".concat(darken(secondary, 0.3)),
    itemSelectedBackground: lighten(bgNormal, 0.1),
    itemSelectedColor: textContrast,
    itemSelectedBorder: "4px solid ".concat(secondary),
    itemSelectedHoverBackground: lighten(bgNormal, 0.15),
    itemSelectedHoverColor: textContrast,
    itemSelectedHoverBorder: "4px solid ".concat(lighten(secondary, 0.05))
  },
  main: {
    background: "linear-gradient(to right, #484e5e 0, #484e5e 15%, #20252f 100%)",
    spacing: 24,
    error: {
      background: fade(textError, 0.65),
      color: "#ffffff",
      borderRadius: 3,
      padding: "1rem 2rem"
    },
    info: {
      background: fade(textInfo, 0.65),
      color: "#ffffff",
      borderRadius: 3,
      padding: "1rem 2rem"
    }
  },
  props: {
    MuiDialog: {
      scroll: "body"
    }
  },
  overrides: {
    MuiPaper: {
      root: {
        background: ["linear-gradient(to bottom right, ".concat(lighten(bgNormal, 0.2), " 0, ").concat(darken(bgNormal, 0.2), " 100%)"), "!important"]
      }
    },
    MuiTableRow: {
      root: {
        //height: ["100%", "!important"],
        height: [48, "!important"],
        "& th": {
          fontWeight: "bold"
        }
      }
    },
    MuiTableBody: {
      root: {
        "& tr:last-child th, & tr:last-child td": {
          borderBottom: "none"
        }
      }
    },
    MuiTableCell: {
      root: {
        borderBottom: "1px solid ".concat(textDisabled)
      },
      head: {
        fontSize: fontSize,
        color: textContrast
      },
      body: {
        fontSize: fontSize
      }
    },
    MuiButton: {
      root: {
        "&$disabled": {
          "&:not($containedPrimary):not($containedSecondary)": {
            background: [lighten(bgNormal, 0.05), "!important"],
            color: [textDisabled, "!important"]
          },
          "&$containedPrimary": {
            background: [darken(primary, 0.15), "!important"],
            color: [textDisabled, "!important"]
          },
          "&$containedSecondary": {
            background: [darken(secondary, 0.15), "!important"],
            color: [textDisabled, "!important"]
          }
        }
      }
    },
    MuiIconButton: {
      root: {
        "&$disabled": {
          "&:not($colorPrimary):not($colorSecondary)": {
            color: [textDisabled, "!important"]
          }
        }
      }
    },
    MuiInput: {
      root: {
        "&$underline": {
          "&:before": {
            borderBottom: "2px solid ".concat(textDark)
          },
          "&:after": {
            borderBottom: "2px solid ".concat(lighten(secondary, 0.1))
          }
        }
      }
    },
    MuiOutlinedInput: {
      root: {
        "& $notchedOutline": {
          borderWidth: [2, "!important"]
        },
        "&:not($disabled):not($error) $notchedOutline": {
          borderColor: [textDark, "!important"]
        },
        "&:not($disabled):not($error):hover:not($focused) $notchedOutline": {
          borderColor: [textContrast, "!important"]
        },
        "&:not($disabled):not($error)$focused $notchedOutline": {
          borderColor: [lighten(secondary, 0.1), "!important"]
        },
        "&$disabled $notchedOutline": {
          borderColor: [textDisabled, "!important"]
        }
      }
    },
    MuiFilledInput: {
      root: {
        background: [lighten(bgNormal, 0.1), "!important"],
        borderRadius: 4,
        "&:hover": {
          background: [lighten(bgNormal, 0.2), "!important"]
        },
        "&$focused": {
          background: [lighten(bgNormal, 0.2), "!important"],
          "&$error": {
            color: [textError, "!important"]
          }
        },
        "&$underline": {
          "&:before": {
            borderBottom: ["none", "!important"]
          },
          "&:after": {
            borderBottom: ["none", "!important"]
          }
        }
      }
    },
    MuiInputLabel: {
      root: {
        pointerEvents: "none",
        zIndex: 100,
        "&$focused": {
          color: [textContrast, "!important"],
          "&$error": {
            color: [textError, "!important"]
          }
        },
        "&$filled": {
          color: [textDark, "!important"],
          "&$error": {
            color: [textError, "!important"]
          }
        }
      }
    },
    MuiSwitch: {
      icon: {
        color: textDark
      }
    },
    MuiSelect: {
      icon: {
        color: textDark
      }
    },
    MuiListItemIcon: {
      root: {
        margin: [0, "!important"]
      }
    },
    MuiCheckbox: {
      root: {
        "&$checked": {
          color: [textNormal, "!important"]
        }
      }
    }
  }
};

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var pako = __webpack_require__(96);

var utf8 = __webpack_require__(97);

var _require = __webpack_require__(98),
    byteEncode = _require.byteEncode;

var _require2 = __webpack_require__(99),
    serialize = _require2.serialize;
/**
 * Sserialize Immutable state into BASE64 string
 */


module.exports = function (state) {
  if (!state) return "";
  state = state.setIn(["app", "di"], null);
  var json = serialize(state);
  var str = JSON.stringify(json, function (key, value) {
    return _.isString(value) ? utf8.encode(value) : value;
  });
  var output = byteEncode(pako.deflate(str, {
    to: "string"
  }));
  return output;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var pako = __webpack_require__(96);

var utf8 = __webpack_require__(97);

var _require = __webpack_require__(98),
    byteDecode = _require.byteDecode;

var _require2 = __webpack_require__(99),
    deserialize = _require2.deserialize;
/**
 * Deserialize BASE64 string into Immutable state
 */


module.exports = function (input) {
  if (!input) return undefined;
  var str = pako.inflate(byteDecode(input), {
    to: "string"
  });
  var json = JSON.parse(str, function (key, value) {
    return _.isString(value) ? utf8.decode(value) : value;
  });
  var state = deserialize(json);
  return state;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getStore;

var _redux = __webpack_require__(118);

var _reduxImmutable = __webpack_require__(11);

var _reduxDevtoolsExtension = __webpack_require__(119);

var _reduxThunk = _interopRequireDefault(__webpack_require__(120));

var _immutable = __webpack_require__(15);

var _app = _interopRequireDefault(__webpack_require__(9));

var _auth = _interopRequireDefault(__webpack_require__(10));

var _dashboard = _interopRequireDefault(__webpack_require__(63));

var _users = _interopRequireDefault(__webpack_require__(64));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _reduxImmutable.combineReducers)({
  form: _immutable.reducer,
  app: _app.default,
  auth: _auth.default,
  dashboard: _dashboard.default,
  users: _users.default
});
var middleware = (0, _redux.applyMiddleware)(_reduxThunk.default);
if (false) {}

var storeFactory = function storeFactory(initialState) {
  return (0, _redux.createStore)(rootReducer, initialState, middleware);
};

var __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__";

function getStore(initialState) {
  var store;
  var isCreated = false;

  if (true) {
    // Always make a new store if server,
    // otherwise state is shared between requests
    store = storeFactory(initialState);
    isCreated = true;
  } else {}

  return {
    store: store,
    isCreated: isCreated
  };
}

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(14);

var _app = __webpack_require__(9);

var _IntlProvider = _interopRequireDefault(__webpack_require__(122));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    locale: _app.appSelectors.getLocale(state),
    created: _app.appSelectors.getCreated(state)
  };
};

var IntlProvider = (0, _reactRedux.connect)(mapStateToProps, null, null, {
  pure: false
})(_IntlProvider.default);
var _default = IntlProvider;
exports.default = _default;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _reactIntl = __webpack_require__(6);

var _locales = _interopRequireDefault(__webpack_require__(19));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

_.forEach(_locales.default.getLocaleData(), function (data) {
  return (0, _reactIntl.addLocaleData)(data);
});

var Provider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Provider, _React$Component);

  function Provider() {
    _classCallCheck(this, Provider);

    return _possibleConstructorReturn(this, _getPrototypeOf(Provider).apply(this, arguments));
  }

  _createClass(Provider, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_reactIntl.IntlProvider, {
        key: this.props.locale,
        locale: this.props.locale,
        messages: _locales.default.messages[this.props.locale],
        initialNow: this.props.created
      }, this.props.children);
    }
  }]);

  return Provider;
}(_react.default.Component);

var _default = Provider;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(14);

var _app = __webpack_require__(9);

var _DateProvider = _interopRequireDefault(__webpack_require__(124));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    locale: _app.appSelectors.getLocale(state)
  };
};

var DateProvider = (0, _reactRedux.connect)(mapStateToProps, null, null, {
  pure: false
})(_DateProvider.default);
var _default = DateProvider;
exports.default = _default;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _materialUiPickers = __webpack_require__(125);

var _moment = _interopRequireDefault(__webpack_require__(126));

var _moment2 = _interopRequireDefault(__webpack_require__(16));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Provider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Provider, _React$Component);

  function Provider() {
    _classCallCheck(this, Provider);

    return _possibleConstructorReturn(this, _getPrototypeOf(Provider).apply(this, arguments));
  }

  _createClass(Provider, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_materialUiPickers.MuiPickersUtilsProvider, {
        utils: _moment.default,
        locale: this.props.locale,
        moment: _moment2.default
      }, this.props.children);
    }
  }]);

  return Provider;
}(_react.default.Component);

var _default = Provider;
exports.default = _default;

/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = require("material-ui-pickers");

/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = require("@date-io/moment");

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(14);

var _reactIntl = __webpack_require__(6);

var _router = __webpack_require__(18);

var _app = __webpack_require__(9);

var _auth = __webpack_require__(10);

var _Layout = _interopRequireDefault(__webpack_require__(128));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: _auth.authSelectors.isAuthenticated(state),
    isStarted: _app.appSelectors.isStarted(state) && (!_auth.authSelectors.isAuthenticated(state) || _app.appSelectors.isConnected(state)),
    isError: _app.appSelectors.getStatusCode(state) !== 200
  };
};

var Layout = (0, _router.withRouter)((0, _reactIntl.injectIntl)((0, _reactRedux.connect)(mapStateToProps, null, null, {
  pure: false
})(_Layout.default)));
var _default = Layout;
exports.default = _default;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _head = _interopRequireDefault(__webpack_require__(129));

var _reactIntl = __webpack_require__(6);

var _styles = __webpack_require__(3);

var _CircularProgress = _interopRequireDefault(__webpack_require__(130));

var _Hidden = _interopRequireDefault(__webpack_require__(66));

var _Drawer = _interopRequireDefault(__webpack_require__(131));

var _SwipeableDrawer = _interopRequireDefault(__webpack_require__(132));

var _Sidebar = _interopRequireDefault(__webpack_require__(133));

var _Header = _interopRequireDefault(__webpack_require__(145));

var _AppAuthModal = _interopRequireDefault(__webpack_require__(161));

__webpack_require__(168);

var _styledScroll = _interopRequireDefault(__webpack_require__(170));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  var _$merge, _main;

  return {
    "@global": {
      html: {
        fontSize: "".concat(theme.typography.fontSize, "px")
      },
      body: _.merge({
        fontFamily: theme.typography.fontFamily,
        background: theme.palette.background.default,
        color: theme.palette.text.primary
      }, (0, _styledScroll.default)(theme)),
      pre: {
        fontFamily: '"Roboto Mono", monospace'
      }
    },
    app: {
      position: "relative"
    },
    backdrop: {
      background: theme.palette.background.default,
      opacity: 0.8,
      zIndex: 10000,
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },
    spinner: {
      position: "fixed",
      width: 60,
      top: "50vh",
      left: "50vw",
      transform: "translate3d(-50%, -50%, 0)",
      color: theme.palette.primary.contrastText
    },
    sidebar: _.merge((_$merge = {
      background: [theme.sidebar.background, "!important"],
      border: "none",
      overflowX: "hidden",
      width: theme.sidebar.computerWidth * theme.spacing.unit
    }, _defineProperty(_$merge, theme.breakpoints.between("sm", "md"), {
      width: theme.sidebar.tabletWidth * theme.spacing.unit
    }), _defineProperty(_$merge, theme.breakpoints.down("xs"), {
      width: theme.sidebar.phoneWidth * theme.spacing.unit
    }), _$merge), (0, _styledScroll.default)(theme)),
    main: (_main = {
      background: [theme.main.background, "!important"],
      minHeight: "100vh",
      display: "flex",
      alignItems: "stretch",
      justifyContent: "stretch",
      marginLeft: theme.sidebar.computerWidth * theme.spacing.unit
    }, _defineProperty(_main, theme.breakpoints.between("sm", "md"), {
      marginLeft: theme.sidebar.tabletWidth * theme.spacing.unit
    }), _defineProperty(_main, theme.breakpoints.down("xs"), {
      marginLeft: 0
    }), _main),
    content: {
      boxShadow: "-2px -2px 8px rgba(0, 0, 0, 0.3)",
      zIndex: 1300,
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    anonymous: {
      background: theme.palette.background.paper,
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  };
};

var Layout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout(props) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Layout).call(this, props));
    _this.state = {
      isSidebarOpen: false
    };
    _this.handleSidebarToggle = _this.handleSidebarToggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSidebarClose = _this.handleSidebarClose.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Layout, [{
    key: "handleSidebarToggle",
    value: function handleSidebarToggle() {
      this.setState({
        isSidebarOpen: !this.state.isSidebarOpen
      });
    }
  }, {
    key: "handleSidebarClose",
    value: function handleSidebarClose() {
      if (this.state.isSidebarOpen) this.setState({
        isSidebarOpen: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "app"
      }, this.props.title && _react.default.createElement(_head.default, null, _react.default.createElement("title", null, this.props.intl.formatMessage({
        id: this.props.title
      }))), this.props.isAuthenticated && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Hidden.default, {
        implementation: "css",
        smUp: true
      }, _react.default.createElement(_SwipeableDrawer.default, {
        open: this.state.isSidebarOpen,
        onOpen: this.handleSidebarToggle,
        onClose: this.handleSidebarClose
      }, _react.default.createElement(_Sidebar.default, {
        onMenuClick: this.handleSidebarClose
      }))), _react.default.createElement(_Hidden.default, {
        implementation: "css",
        xsDown: true
      }, _react.default.createElement(_Drawer.default, {
        variant: "permanent",
        open: true,
        classes: {
          paper: this.props.classes.sidebar
        }
      }, _react.default.createElement(_Sidebar.default, {
        onMenuClick: this.handleSidebarClose
      }))), _react.default.createElement("div", {
        className: this.props.classes.main
      }, _react.default.createElement("main", {
        className: this.props.classes.content
      }, !this.props.isError && _react.default.createElement(_Header.default, null), this.props.children))), !this.props.isAuthenticated && _react.default.createElement("main", {
        className: this.props.classes.anonymous
      }, this.props.children), !this.props.isStarted && !this.props.isError && _react.default.createElement("div", {
        className: this.props.classes.backdrop
      }, _react.default.createElement("div", {
        className: this.props.classes.spinner
      }, _react.default.createElement(_CircularProgress.default, {
        color: "inherit",
        size: 60
      }))), _react.default.createElement(_AppAuthModal.default, null));
    }
  }]);

  return Layout;
}(_react.default.Component);

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(Layout);

exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SwipeableDrawer");

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(14);

var _router = __webpack_require__(18);

var _reactIntl = __webpack_require__(6);

var _Sidebar = _interopRequireDefault(__webpack_require__(134));

var _auth = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    roles: _auth.authSelectors.getRoles(state),
    name: _auth.authSelectors.getName(state) || _auth.authSelectors.getEmail(state) || "anonymous"
  };
};

var Sidebar = (0, _router.withRouter)((0, _reactIntl.injectIntl)((0, _reactRedux.connect)(mapStateToProps)(_Sidebar.default)));
var _default = Sidebar;
exports.default = _default;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _isRouteAllowed = _interopRequireDefault(__webpack_require__(20));

var _reactIntl = __webpack_require__(6);

var _styles = __webpack_require__(3);

var _Typography = _interopRequireDefault(__webpack_require__(51));

var _MenuList = _interopRequireDefault(__webpack_require__(135));

var _MenuItem = _interopRequireDefault(__webpack_require__(52));

var _ListItemIcon = _interopRequireDefault(__webpack_require__(53));

var _ListItemText = _interopRequireDefault(__webpack_require__(54));

var _Dashboard = _interopRequireDefault(__webpack_require__(136));

var _Ballot = _interopRequireDefault(__webpack_require__(137));

var _InsertChart = _interopRequireDefault(__webpack_require__(138));

var _TableChart = _interopRequireDefault(__webpack_require__(139));

var _Map = _interopRequireDefault(__webpack_require__(140));

var _SpeakerNotes = _interopRequireDefault(__webpack_require__(141));

var _BrightnessAuto = _interopRequireDefault(__webpack_require__(142));

var _Pets = _interopRequireDefault(__webpack_require__(143));

var _People = _interopRequireDefault(__webpack_require__(144));

var _constants = _interopRequireDefault(__webpack_require__(5));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styles = function styles(theme) {
  return {
    root: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "stretch"
    },
    grow: {
      flex: 1
    },
    link: {
      display: "block",
      margin: "1rem",
      textAlign: "center",
      color: theme.palette.text.secondary,
      textDecoration: "none",
      "&:hover": {
        color: theme.palette.secondary.main
      }
    },
    list: {
      padding: 0
    },
    avatar: {
      margin: "1rem 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& img": {
        borderRadius: theme.shape.borderRadius
      }
    },
    item: {
      background: [theme.sidebar.itemBackground, "!important"],
      color: [theme.sidebar.itemColor, "!important"],
      borderTop: ["none", "!important"],
      borderLeft: [theme.sidebar.itemBorder, "!important"],
      borderRight: ["none", "!important"],
      borderBottom: ["none", "!important"],
      justifyContent: "center",
      "& svg, & span": {
        color: [theme.sidebar.itemColor, "!important"]
      },
      "&:hover": {
        background: [theme.sidebar.itemHoverBackground, "!important"],
        color: [theme.sidebar.itemHoverColor, "!important"],
        borderTop: ["none", "!important"],
        borderLeft: [theme.sidebar.itemHoverBorder, "!important"],
        borderRight: ["none", "!important"],
        borderBottom: ["none", "!important"],
        "& svg, & span": {
          color: [theme.sidebar.itemHoverColor, "!important"]
        }
      }
    },
    itemSelected: {
      background: [theme.sidebar.itemSelectedBackground, "!important"],
      color: [theme.sidebar.itemSelectedColor, "!important"],
      borderTop: ["none", "!important"],
      borderLeft: [theme.sidebar.itemSelectedBorder, "!important"],
      borderRight: ["none", "!important"],
      borderBottom: ["none", "!important"],
      "& svg, & span": {
        color: [theme.sidebar.itemSelectedColor, "!important"]
      },
      "&:hover": {
        background: [theme.sidebar.itemSelectedHoverBackground, "!important"],
        color: [theme.sidebar.itemSelectedHoverColor, "!important"],
        borderTop: ["none", "!important"],
        borderLeft: [theme.sidebar.itemSelectedHoverBorder, "!important"],
        borderRight: ["none", "!important"],
        borderBottom: ["none", "!important"],
        "& svg, & span": {
          color: [theme.sidebar.itemSelectedHoverColor, "!important"]
        }
      }
    }
  };
};

var Sidebar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Sidebar, _React$Component);

  function Sidebar() {
    _classCallCheck(this, Sidebar);

    return _possibleConstructorReturn(this, _getPrototypeOf(Sidebar).apply(this, arguments));
  }

  _createClass(Sidebar, [{
    key: "handleMenuClick",
    value: function handleMenuClick(path) {
      this.props.router.push(path);
      this.props.onMenuClick();
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      return _react.default.createElement("div", {
        className: this.props.classes.avatar
      }, _react.default.createElement("img", {
        src: "".concat(_constants.default.apiBase, "/avatars/0")
      }), _react.default.createElement(_Typography.default, {
        variant: "subtitle1"
      }, this.props.name));
    }
  }, {
    key: "renderItem",
    value: function renderItem(path) {
      var _this = this;

      if (!path || !_constants.default.pages[path] || !(0, _isRouteAllowed.default)(path, this.props.roles)) {
        return null;
      }

      var _constants$pages$path = _constants.default.pages[path],
          icon = _constants$pages$path.icon,
          menu = _constants$pages$path.menu;
      if (!icon && !menu) return null;
      return _react.default.createElement(_MenuItem.default, {
        key: "page-".concat(path),
        classes: {
          root: this.props.classes.item,
          selected: this.props.classes.itemSelected
        },
        selected: this.props.router.pathname === path,
        onClick: function onClick() {
          return _this.handleMenuClick(path);
        }
      }, icon === "dashboard" && _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_Dashboard.default, null)), icon === "forms" && _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_Ballot.default, null)), icon === "charts" && _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_InsertChart.default, null)), icon === "tables" && _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_TableChart.default, null)), icon === "maps" && _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_Map.default, null)), icon === "notifications" && _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_SpeakerNotes.default, null)), icon === "typography" && _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_BrightnessAuto.default, null)), icon === "icons" && _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_Pets.default, null)), icon === "users" && _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_People.default, null)), !!menu && _react.default.createElement(_ListItemText.default, {
        primary: this.props.intl.formatMessage({
          id: menu
        })
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("div", {
        className: this.props.classes.root
      }, _react.default.createElement(_MenuList.default, {
        classes: {
          root: this.props.classes.list
        },
        subheader: this.renderHeader()
      }, _.map(_.keys(_constants.default.pages), function (path) {
        return _this2.renderItem(path);
      })), _react.default.createElement("div", {
        className: this.props.classes.grow
      }), _react.default.createElement("div", null, _react.default.createElement("a", {
        href: "javascript:void(0)",
        className: this.props.classes.link,
        onClick: function onClick() {
          return window.open("".concat(_constants.default.apiBase, "/redirect/benchmarks"));
        }
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "SIDEBAR_BENCHMARKS_LINK"
      })), _react.default.createElement("a", {
        href: "javascript:void(0)",
        className: this.props.classes.link,
        onClick: function onClick() {
          return window.open("".concat(_constants.default.apiBase, "/redirect/responsiveness"));
        }
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "SIDEBAR_RESPONSIVENESS_LINK"
      }))));
    }
  }]);

  return Sidebar;
}(_react.default.Component);

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(Sidebar);

exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 135 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuList");

/***/ }),
/* 136 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Dashboard");

/***/ }),
/* 137 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Ballot");

/***/ }),
/* 138 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/InsertChart");

/***/ }),
/* 139 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/TableChart");

/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Map");

/***/ }),
/* 141 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SpeakerNotes");

/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/BrightnessAuto");

/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Pets");

/***/ }),
/* 144 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/People");

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(14);

var _reactIntl = __webpack_require__(6);

var _Header = _interopRequireDefault(__webpack_require__(146));

var _app = __webpack_require__(9);

var _auth = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    cookie: _app.appSelectors.getService(state, {
      service: "cookie"
    }),
    locale: _app.appSelectors.getLocale(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSetLocale: function onSetLocale(locale) {
      return dispatch(_app.appOperations.setLocale({
        locale: locale
      }));
    },
    onSignOut: function onSignOut() {
      return dispatch(_auth.authOperations.signOut());
    }
  };
};

var Header = (0, _reactIntl.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Header.default));
var _default = Header;
exports.default = _default;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _reactIntl = __webpack_require__(6);

var _styles = __webpack_require__(3);

var _colorManipulator = __webpack_require__(83);

var _Hidden = _interopRequireDefault(__webpack_require__(66));

var _AppBar = _interopRequireDefault(__webpack_require__(147));

var _Toolbar = _interopRequireDefault(__webpack_require__(148));

var _Button = _interopRequireDefault(__webpack_require__(43));

var _IconButton = _interopRequireDefault(__webpack_require__(149));

var _InputBase = _interopRequireDefault(__webpack_require__(150));

var _Menu = _interopRequireDefault(__webpack_require__(151));

var _MenuItem = _interopRequireDefault(__webpack_require__(52));

var _ListItemIcon = _interopRequireDefault(__webpack_require__(53));

var _ListItemText = _interopRequireDefault(__webpack_require__(54));

var _ListItemAvatar = _interopRequireDefault(__webpack_require__(152));

var _Avatar = _interopRequireDefault(__webpack_require__(153));

var _Badge = _interopRequireDefault(__webpack_require__(154));

var _Search = _interopRequireDefault(__webpack_require__(155));

var _Mail = _interopRequireDefault(__webpack_require__(156));

var _AccountBox = _interopRequireDefault(__webpack_require__(157));

var _ColorLens = _interopRequireDefault(__webpack_require__(158));

var _PowerSettingsNew = _interopRequireDefault(__webpack_require__(159));

var _reactFlags = _interopRequireDefault(__webpack_require__(160));

var _locales = _interopRequireDefault(__webpack_require__(19));

var _themes = _interopRequireDefault(__webpack_require__(95));

var _moment = _interopRequireDefault(__webpack_require__(16));

var _constants = _interopRequireDefault(__webpack_require__(5));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  var _inputInput;

  return {
    spacer: {
      height: "1.5rem"
    },
    wrapper: {
      zIndex: 1400,
      position: "fixed",
      left: 0,
      right: 0,
      top: 0,
      height: 30
    },
    barContainer: {
      transition: "all 0.25s ease-in-out"
    },
    bar: {
      background: theme.palette.background.paper,
      boxShadow: "none"
    },
    barItem: {
      marginLeft: "0.5rem",
      marginRight: "0.5rem"
    },
    grow: {
      flexGrow: 1
    },
    search: _defineProperty({
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: (0, _colorManipulator.fade)(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.common.white, 0.25)
      },
      marginRight: theme.spacing.unit,
      marginLeft: theme.spacing.unit
    }, theme.breakpoints.down("md"), {
      flexGrow: 1
    }),
    searchIcon: _defineProperty({
      width: theme.spacing.unit * 5,
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }, theme.breakpoints.down("xs"), {
      display: "none"
    }),
    inputRoot: {
      color: "inherit",
      width: "100%"
    },
    inputInput: (_inputInput = {
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 5,
      transition: theme.transitions.create("width"),
      width: 300
    }, _defineProperty(_inputInput, theme.breakpoints.down("md"), {
      width: "100%"
    }), _defineProperty(_inputInput, theme.breakpoints.down("xs"), {
      paddingLeft: theme.spacing.unit
    }), _inputInput),
    menu: _defineProperty({
      width: "100%",
      maxWidth: theme.spacing.unit * 45,
      background: (0, _colorManipulator.lighten)(theme.palette.background.paper, 0.1),
      "& svg": {
        color: [theme.palette.primary.contrastText, "!important"]
      }
    }, theme.breakpoints.down("xs"), {
      width: "90%",
      maxWidth: "90%"
    }),
    menuItem: {
      height: "auto"
    },
    inboxAvatar: {
      width: 60,
      height: 60
    },
    inboxName: {
      fontSize: "120%"
    },
    inboxDate: {
      fontSize: "80%"
    },
    inboxPreview: {
      display: "inline",
      whiteSpace: "normal"
    }
  };
};

var Header =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Header, _React$PureComponent);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this, props));
    _this.state = {
      isWrapperHovered: false,
      isBarHovered: false,
      barHeight: 0,
      barWidth: 0,
      anchorInbox: null,
      anchorLocales: null,
      anchorThemes: null
    };
    _this.isDestroyed = false;
    _this.bar = _react.default.createRef();
    _this.handleWrapperMouseEnter = _this.handleWrapperMouseEnter.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleWrapperMouseLeave = _this.handleWrapperMouseLeave.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleWrapperClick = _this.handleWrapperClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleBarMouseEnter = _this.handleBarMouseEnter.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleBarMouseLeave = _this.handleBarMouseLeave.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleInboxOpen = _this.handleInboxOpen.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleLocalesOpen = _this.handleLocalesOpen.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleThemesOpen = _this.handleThemesOpen.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleMenuClose = _this.handleMenuClose.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSignOut = _this.handleSignOut.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.bar.current) {
        this.setState({
          barHeight: this.bar.current.offsetHeight,
          barWidth: this.bar.current.offsetWidth
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.bar.current && (this.state.barHeight !== this.bar.current.offsetHeight || this.state.barWidth !== this.bar.current.offsetWidth)) {
        this.setState({
          barHeight: this.bar.current.offsetHeight,
          barWidth: this.bar.current.offsetWidth
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isDestroyed = true;
    }
  }, {
    key: "handleWrapperMouseEnter",
    value: function handleWrapperMouseEnter() {
      if (!this.state.isWrapperHovered) this.setState({
        isWrapperHovered: true
      });
    }
  }, {
    key: "handleWrapperMouseLeave",
    value: function handleWrapperMouseLeave() {
      if (this.state.isWrapperHovered) this.setState({
        isWrapperHovered: false
      });
    }
  }, {
    key: "handleWrapperClick",
    value: function handleWrapperClick(event) {
      var _this2 = this;

      event.stopPropagation();
      if (!this.state.isWrapperHovered) this.setState({
        isWrapperHovered: true
      });

      var onWindowClick = function onWindowClick() {
        window.removeEventListener("click", onWindowClick);
        if (!_this2.isDestroyed && _this2.state.isWrapperHovered) _this2.setState({
          isWrapperHovered: false
        });
      };

      window.addEventListener("click", onWindowClick);
    }
  }, {
    key: "handleBarMouseEnter",
    value: function handleBarMouseEnter() {
      if (!this.state.isBarHovered) this.setState({
        isBarHovered: true
      });
    }
  }, {
    key: "handleBarMouseLeave",
    value: function handleBarMouseLeave() {
      if (this.state.isBarHovered) this.setState({
        isBarHovered: false
      });
    }
  }, {
    key: "handleInboxOpen",
    value: function handleInboxOpen(event) {
      this.setState({
        anchorInbox: event.currentTarget
      });
    }
  }, {
    key: "handleLocalesOpen",
    value: function handleLocalesOpen(event) {
      this.setState({
        anchorLocales: event.currentTarget
      });
    }
  }, {
    key: "handleLocaleSwitch",
    value: function handleLocaleSwitch(locale) {
      this.props.cookie.set("locale", locale);
      this.handleMenuClose();
      this.props.onSetLocale(locale);
    }
  }, {
    key: "handleThemesOpen",
    value: function handleThemesOpen(event) {
      this.setState({
        anchorThemes: event.currentTarget
      });
    }
  }, {
    key: "handleThemeSwitch",
    value: function handleThemeSwitch(theme) {
      this.props.cookie.set("theme", theme);
      this.handleMenuClose();
      window.location.reload(true);
    }
  }, {
    key: "handleMenuClose",
    value: function handleMenuClose() {
      this.setState({
        anchorInbox: null,
        anchorLocales: null,
        anchorThemes: null,
        isWrapperHovered: false,
        isBarHovered: false
      });
    }
  }, {
    key: "handleSignOut",
    value: function handleSignOut() {
      this.props.onSignOut();
    }
  }, {
    key: "renderInbox",
    value: function renderInbox() {
      return _react.default.createElement(_Menu.default, {
        classes: {
          paper: this.props.classes.menu
        },
        anchorEl: this.state.anchorInbox,
        anchorOrigin: {
          vertical: "top",
          horizontal: "left"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "left"
        },
        open: !!this.state.anchorInbox,
        onClose: this.handleMenuClose
      }, _react.default.createElement(_MenuItem.default, {
        className: this.props.classes.menuItem,
        onClick: this.handleMenuClose
      }, _react.default.createElement(_ListItemAvatar.default, null, _react.default.createElement(_Avatar.default, {
        className: this.props.classes.inboxAvatar,
        alt: "Mitch Stigall",
        src: "".concat(_constants.default.apiBase, "/avatars/1")
      })), _react.default.createElement(_ListItemText.default, {
        primary: _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
          className: this.props.classes.inboxName
        }, "Mitch Stigall"), _react.default.createElement("div", {
          className: this.props.classes.inboxDate
        }, this.props.intl.formatDate((0, _moment.default)("2030-03-21 09:31:40").toDate(), {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric"
        }))),
        secondary: _react.default.createElement("span", {
          className: this.props.classes.inboxPreview
        }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
      }), " "), _react.default.createElement(_MenuItem.default, {
        className: this.props.classes.menuItem,
        onClick: this.handleMenuClose
      }, _react.default.createElement(_ListItemAvatar.default, null, _react.default.createElement(_Avatar.default, {
        className: this.props.classes.inboxAvatar,
        alt: "Marie Wineinger",
        src: "".concat(_constants.default.apiBase, "/avatars/2")
      })), _react.default.createElement(_ListItemText.default, {
        primary: _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
          className: this.props.classes.inboxName
        }, "Marie Wineinger"), _react.default.createElement("div", {
          className: this.props.classes.inboxDate
        }, this.props.intl.formatDate((0, _moment.default)("2030-03-21 10:03:12").toDate(), {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric"
        }))),
        secondary: _react.default.createElement("span", {
          className: this.props.classes.inboxPreview
        }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
      }), " "), _react.default.createElement(_MenuItem.default, {
        className: this.props.classes.menuItem,
        onClick: this.handleMenuClose
      }, _react.default.createElement(_ListItemAvatar.default, null, _react.default.createElement(_Avatar.default, {
        className: this.props.classes.inboxAvatar,
        alt: "Ted Eriksson",
        src: "".concat(_constants.default.apiBase, "/avatars/3")
      })), _react.default.createElement(_ListItemText.default, {
        primary: _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
          className: this.props.classes.inboxName
        }, "Ted Eriksson"), _react.default.createElement("div", {
          className: this.props.classes.inboxDate
        }, this.props.intl.formatDate((0, _moment.default)("2030-03-21 10:27:42").toDate(), {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric"
        }))),
        secondary: _react.default.createElement("span", {
          className: this.props.classes.inboxPreview
        }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
      }), " "), _react.default.createElement(_MenuItem.default, {
        className: this.props.classes.menuItem,
        onClick: this.handleMenuClose
      }, _react.default.createElement(_ListItemAvatar.default, null, _react.default.createElement(_Avatar.default, {
        className: this.props.classes.inboxAvatar,
        alt: "Martin Murry",
        src: "".concat(_constants.default.apiBase, "/avatars/4")
      })), _react.default.createElement(_ListItemText.default, {
        primary: _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
          className: this.props.classes.inboxName
        }, "Martin Murry"), _react.default.createElement("div", {
          className: this.props.classes.inboxDate
        }, this.props.intl.formatDate((0, _moment.default)("2030-03-21 11:35:09").toDate(), {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric"
        }))),
        secondary: _react.default.createElement("span", {
          className: this.props.classes.inboxPreview
        }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
      }), " "));
    }
  }, {
    key: "renderLocales",
    value: function renderLocales() {
      var _this3 = this;

      return _react.default.createElement(_Menu.default, {
        classes: {
          paper: this.props.classes.menu
        },
        anchorEl: this.state.anchorLocales,
        anchorOrigin: {
          vertical: "top",
          horizontal: "left"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "left"
        },
        open: !!this.state.anchorLocales,
        onClose: this.handleMenuClose
      }, _.map(_locales.default.locales, function (locale) {
        return _react.default.createElement(_MenuItem.default, {
          key: "locale-".concat(locale),
          onClick: function onClick() {
            return _this3.handleLocaleSwitch(locale);
          }
        }, _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_reactFlags.default, {
          name: _locales.default.flags[locale],
          format: "png",
          pngSize: 24,
          basePath: "" + "/static/img/flags"
        })), _react.default.createElement(_ListItemText.default, null, _locales.default.names[locale]));
      }));
    }
  }, {
    key: "renderThemes",
    value: function renderThemes() {
      var _this4 = this;

      return _react.default.createElement(_Menu.default, {
        classes: {
          paper: this.props.classes.menu
        },
        anchorEl: this.state.anchorThemes,
        anchorOrigin: {
          vertical: "top",
          horizontal: "left"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "left"
        },
        open: !!this.state.anchorThemes,
        onClose: this.handleMenuClose
      }, _.map(_.keys(_themes.default.names), function (theme) {
        return _react.default.createElement(_MenuItem.default, {
          key: "theme-".concat(theme),
          onClick: function onClick() {
            return _this4.handleThemeSwitch(theme);
          }
        }, _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_ColorLens.default, null)), _react.default.createElement(_ListItemText.default, null, _themes.default.names[theme]));
      }));
    }
  }, {
    key: "renderShadow",
    value: function renderShadow() {
      var boundary = this.props.theme.sidebar.computerWidth * this.props.theme.spacing.unit;
      return _react.default.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: this.state.barWidth,
        height: "30"
      }, _react.default.createElement("defs", null, _react.default.createElement("clipPath", {
        id: "appBarClipLeft"
      }, _react.default.createElement("rect", {
        x: "0",
        y: "0",
        width: boundary,
        height: "30"
      })), _react.default.createElement("filter", {
        id: "appBarShadowLeft",
        x: "-10",
        y: "-10",
        width: this.state.barWidth + 20,
        height: "60"
      }, _react.default.createElement("feGaussianBlur", {
        in: "SourceAlpha",
        stdDeviation: "8"
      }), _react.default.createElement("feOffset", {
        dx: "0",
        dy: "2",
        result: "offsetblur"
      }), _react.default.createElement("feFlood", {
        floodColor: "rgba(0, 0, 0, 0.9)"
      }), _react.default.createElement("feComposite", {
        in2: "offsetblur",
        operator: "in"
      }), _react.default.createElement("feMerge", null, _react.default.createElement("feMergeNode", null), _react.default.createElement("feMergeNode", {
        in: "SourceGraphic"
      }))), _react.default.createElement("clipPath", {
        id: "appBarClipRight"
      }, _react.default.createElement("rect", {
        x: boundary,
        y: "0",
        width: this.state.barWidth - boundary,
        height: "30"
      })), _react.default.createElement("filter", {
        id: "appBarShadowRight",
        x: "-10",
        y: "-10",
        width: this.state.barWidth + 20,
        height: "60"
      }, _react.default.createElement("feGaussianBlur", {
        in: "SourceAlpha",
        stdDeviation: "4"
      }), _react.default.createElement("feOffset", {
        dx: "0",
        dy: "2",
        result: "offsetblur"
      }), _react.default.createElement("feFlood", {
        floodColor: "rgba(0, 0, 0, 0.5)"
      }), _react.default.createElement("feComposite", {
        in2: "offsetblur",
        operator: "in"
      }), _react.default.createElement("feMerge", null, _react.default.createElement("feMergeNode", null), _react.default.createElement("feMergeNode", {
        in: "SourceGraphic"
      })))), _react.default.createElement("g", {
        clipPath: "url(#appBarClipLeft)"
      }, _react.default.createElement("rect", {
        x: "-10",
        y: "-16",
        width: boundary + 20,
        height: "20",
        fill: this.props.theme.palette.secondary.main,
        filter: "url(#appBarShadowLeft)"
      })), _react.default.createElement("g", {
        clipPath: "url(#appBarClipRight)"
      }, _react.default.createElement("rect", {
        x: boundary - 10,
        y: "-16",
        width: this.state.barWidth - boundary + 20,
        height: "20",
        fill: this.props.theme.palette.secondary.main,
        filter: "url(#appBarShadowRight)"
      })));
    }
  }, {
    key: "renderBar",
    value: function renderBar(isPermanent) {
      var isVisible = isPermanent || this.state.isWrapperHovered || this.state.isBarHovered;
      return _react.default.createElement("div", {
        className: this.props.classes.barContainer,
        style: {
          transform: "translate3d(0, ".concat(isVisible ? "0" : "-".concat(this.state.barHeight ? this.state.barHeight - 2 + "px" : "100%"), ", 0)")
        }
      }, _react.default.createElement("div", {
        ref: this.bar
      }, _react.default.createElement(_AppBar.default, {
        className: this.props.classes.bar,
        elevation: 10,
        position: "static",
        color: isVisible ? "primary" : "secondary",
        onMouseEnter: this.handleBarMouseEnter,
        onMouseLeave: this.handleBarMouseLeave
      }, _react.default.createElement(_Toolbar.default, null, _react.default.createElement(_Hidden.default, {
        smDown: true
      }, _react.default.createElement(_Button.default, {
        color: "inherit",
        className: this.props.classes.barItem,
        onClick: this.handleInboxOpen
      }, _react.default.createElement(_Badge.default, {
        badgeContent: 4,
        color: "secondary"
      }, _react.default.createElement(_Mail.default, null)), "\xA0\xA0", _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "HEADER_INBOX_LABEL"
      })), _react.default.createElement(_Button.default, {
        color: "inherit",
        className: this.props.classes.barItem
      }, _react.default.createElement(_AccountBox.default, null), "\xA0\xA0", _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "HEADER_PROFILE_LABEL"
      })), _react.default.createElement(_Button.default, {
        color: "inherit",
        className: this.props.classes.barItem,
        onClick: this.handleLocalesOpen
      }, _react.default.createElement(_reactFlags.default, {
        name: _locales.default.flags[this.props.locale],
        format: "png",
        pngSize: 24,
        basePath: "" + "/static/img/flags"
      }), "\xA0\xA0", _.upperCase(this.props.locale)), _react.default.createElement(_Button.default, {
        color: "inherit",
        className: this.props.classes.barItem,
        onClick: this.handleThemesOpen
      }, _react.default.createElement(_ColorLens.default, null), "\xA0\xA0", _.upperFirst(this.props.theme.name))), _react.default.createElement(_Hidden.default, {
        mdUp: true
      }, _react.default.createElement(_IconButton.default, {
        color: "inherit",
        onClick: this.handleInboxOpen
      }, _react.default.createElement(_Badge.default, {
        badgeContent: 4,
        color: "secondary"
      }, _react.default.createElement(_Mail.default, null))), _react.default.createElement(_IconButton.default, {
        color: "inherit"
      }, _react.default.createElement(_AccountBox.default, null)), _react.default.createElement(_IconButton.default, {
        color: "inherit",
        onClick: this.handleLocalesOpen
      }, _react.default.createElement(_reactFlags.default, {
        name: _locales.default.flags[this.props.locale],
        format: "png",
        pngSize: 24,
        basePath: "" + "/static/img/flags"
      })), _react.default.createElement(_IconButton.default, {
        color: "inherit",
        onClick: this.handleThemesOpen
      }, _react.default.createElement(_ColorLens.default, null))), _react.default.createElement(_Hidden.default, {
        smDown: true
      }, _react.default.createElement("div", {
        className: this.props.classes.grow
      })), _react.default.createElement("div", {
        className: this.props.classes.search
      }, _react.default.createElement("div", {
        className: this.props.classes.searchIcon
      }, _react.default.createElement(_Search.default, null)), _react.default.createElement(_InputBase.default, {
        placeholder: "Search\u2026",
        classes: {
          root: this.props.classes.inputRoot,
          input: this.props.classes.inputInput
        }
      })), _react.default.createElement(_Hidden.default, {
        smDown: true
      }, _react.default.createElement("div", {
        className: this.props.classes.grow
      })), _react.default.createElement(_IconButton.default, {
        color: "inherit",
        onClick: this.handleSignOut
      }, _react.default.createElement(_PowerSettingsNew.default, null))), this.renderInbox(), this.renderLocales(), this.renderThemes())), !isPermanent && this.renderShadow());
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Hidden.default, {
        smUp: true,
        initialWidth: "lg"
      }, this.renderBar(true)), _react.default.createElement(_Hidden.default, {
        xsDown: true,
        initialWidth: "lg"
      }, _react.default.createElement("div", {
        className: this.props.classes.wrapper,
        onMouseEnter: this.handleWrapperMouseEnter,
        onMouseLeave: this.handleWrapperMouseLeave,
        onClick: this.handleWrapperClick
      }, this.renderBar(false))), _react.default.createElement("div", {
        className: this.props.classes.spacer
      }));
    }
  }]);

  return Header;
}(_react.default.PureComponent);

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(Header);

exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),
/* 149 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),
/* 150 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputBase");

/***/ }),
/* 151 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),
/* 152 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemAvatar");

/***/ }),
/* 153 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),
/* 154 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),
/* 155 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),
/* 156 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Mail");

/***/ }),
/* 157 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountBox");

/***/ }),
/* 158 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ColorLens");

/***/ }),
/* 159 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PowerSettingsNew");

/***/ }),
/* 160 */
/***/ (function(module, exports) {

module.exports = require("react-flags");

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactIntl = __webpack_require__(6);

var _app = __webpack_require__(9);

var _auth = __webpack_require__(10);

var _connectForm = _interopRequireDefault(__webpack_require__(55));

var _AppAuthModal = _interopRequireDefault(__webpack_require__(162));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isOpen: _app.appSelectors.isStarted(state) && _app.appSelectors.getStatusCode(state) === 200 && !_auth.authSelectors.isAuthenticated(state),
    providers: _auth.authSelectors.getAllProviders(state),
    cookie: _app.appSelectors.getService(state, {
      service: "cookie"
    })
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSignIn: function onSignIn(email, password) {
      return dispatch(_auth.authOperations.signIn({
        email: email,
        password: password
      }));
    },
    onSignUp: function onSignUp(email, password) {
      return dispatch(_auth.authOperations.signUp({
        email: email,
        password: password
      }));
    }
  };
};

var AppAuthModal = (0, _reactIntl.injectIntl)((0, _connectForm.default)(_AppAuthModal.default, mapStateToProps, mapDispatchToProps));
var _default = AppAuthModal;
exports.default = _default;

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(4));

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _reactIntl = __webpack_require__(6);

var _immutable = __webpack_require__(15);

var _styles = __webpack_require__(3);

var _Dialog = _interopRequireDefault(__webpack_require__(56));

var _DialogActions = _interopRequireDefault(__webpack_require__(57));

var _DialogContent = _interopRequireDefault(__webpack_require__(58));

var _DialogContentText = _interopRequireDefault(__webpack_require__(59));

var _DialogTitle = _interopRequireDefault(__webpack_require__(60));

var _Grid = _interopRequireDefault(__webpack_require__(7));

var _Button = _interopRequireDefault(__webpack_require__(43));

var _Paper = _interopRequireDefault(__webpack_require__(91));

var _Typography = _interopRequireDefault(__webpack_require__(51));

var _Hidden = _interopRequireDefault(__webpack_require__(66));

var _VisibilityOff = _interopRequireDefault(__webpack_require__(163));

var _Form2 = _interopRequireDefault(__webpack_require__(68));

var _Field = _interopRequireDefault(__webpack_require__(61));

var _constants = _interopRequireDefault(__webpack_require__(5));

var _facebook = _interopRequireDefault(__webpack_require__(164));

var _google = _interopRequireDefault(__webpack_require__(165));

var _twitter = _interopRequireDefault(__webpack_require__(166));

var _auth = _interopRequireDefault(__webpack_require__(167));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    error: theme.main.error,
    actions: {
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingBottom: "1rem"
    },
    credentialsPaper: {
      height: "100%",
      padding: "1rem 1rem 2rem"
    },
    credentialsLabel: {
      marginTop: "0.5rem",
      textAlign: "center"
    },
    anonymousButton: {
      width: "100%"
    },
    serviceLogo: {
      marginLeft: "0.5em",
      marginRight: "0.5em",
      verticalAlign: "middle",
      "& svg": {
        height: "1.8em",
        fill: "currentColor",
        verticalAlign: "middle"
      }
    },
    facebook: {
      width: "100%",
      color: theme.palette.primary.contrastText,
      background: ["#3b5998", "!important"],
      "&:hover": {
        background: ["#1b3978", "!important"]
      }
    },
    google: {
      width: "100%",
      color: theme.palette.primary.contrastText,
      background: ["#dd4b39", "!important"],
      "&:hover": {
        background: ["#bd2b19", "!important"]
      }
    },
    twitter: {
      width: "100%",
      color: theme.palette.primary.contrastText,
      background: ["#38A1F3", "!important"],
      "&:hover": {
        background: ["#1881d3", "!important"]
      }
    }
  };
};

var AppAuthModal =
/*#__PURE__*/
function (_Form) {
  _inherits(AppAuthModal, _Form);

  _createClass(AppAuthModal, null, [{
    key: "onSubmit",
    value: function () {
      var _onSubmit = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(values, dispatch, props) {
        var result;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!props.getValue("isNewUser")) {
                  _context.next = 6;
                  break;
                }

                _context.next = 3;
                return props.onSignUp(props.getValue("email"), props.getValue("password"));

              case 3:
                result = _context.sent;
                _context.next = 9;
                break;

              case 6:
                _context.next = 8;
                return props.onSignIn(props.getValue("email"), props.getValue("password"));

              case 8:
                result = _context.sent;

              case 9:
                if (!(result && _.isObject(result))) {
                  _context.next = 11;
                  break;
                }

                throw new _immutable.SubmissionError(result);

              case 11:
                return _context.abrupt("return", result);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onSubmit(_x, _x2, _x3) {
        return _onSubmit.apply(this, arguments);
      }

      return onSubmit;
    }()
  }, {
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var state = {};

      if (prevState.isOpen !== nextProps.isOpen) {
        nextProps.dispatch(nextProps.change("isNewUser", false));
        nextProps.dispatch(nextProps.change("password", ""));
        nextProps.dispatch(nextProps.clearAsyncError());
        nextProps.dispatch(nextProps.clearSubmitErrors());
        state.isOpen = nextProps.isOpen;
      }

      return _.keys(state).length ? state : null;
    }
  }]);

  function AppAuthModal(props) {
    var _this;

    _classCallCheck(this, AppAuthModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AppAuthModal).call(this, props));
    _this.state = {};
    _this.handleAnonymous = _this.handleAnonymous.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleProvider = _this.handleProvider.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(AppAuthModal, [{
    key: "handleAnonymous",
    value: function handleAnonymous() {
      this.props.onSignIn(null, null);
    }
  }, {
    key: "handleProvider",
    value: function handleProvider(provider) {
      this.props.cookie.set("redirect", window.location.pathname, 0.042);
      window.location.href = "".concat(_constants.default.apiBase, "/oauth/").concat(_.toLower(provider));
    }
  }, {
    key: "renderButton",
    value: function renderButton(provider) {
      var _this2 = this;

      provider = _.toLower(provider);
      return _react.default.createElement(_Button.default, {
        variant: "contained",
        color: "default",
        classes: {
          contained: this.props.classes[provider]
        },
        disabled: this.props.submitting || !_.includes(this.props.providers, provider),
        onClick: function onClick() {
          return _this2.handleProvider(provider);
        }
      }, _react.default.createElement(_Hidden.default, {
        xsDown: true
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "APP_AUTH_SERVICE_BUTTON"
      })), provider === "facebook" && _react.default.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: _facebook.default
        },
        className: this.props.classes.serviceLogo
      }), provider === "google" && _react.default.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: _google.default
        },
        className: this.props.classes.serviceLogo
      }), provider === "twitter" && _react.default.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: _twitter.default
        },
        className: this.props.classes.serviceLogo
      }), _.upperFirst(provider));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react.default.createElement(_Dialog.default, {
        maxWidth: "sm",
        open: this.props.isOpen,
        onClose: _.noop
      }, _react.default.createElement(_DialogTitle.default, null, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "APP_AUTH_TITLE"
      })), this.props.error && _react.default.createElement(_DialogContent.default, null, _.map(_.isArray(this.props.error) ? this.props.error : [this.props.error], function (error, index) {
        return _react.default.createElement(_DialogContentText.default, {
          key: "error-".concat(index),
          classes: {
            root: _this3.props.classes.error
          }
        }, _.isArray(error) ? _react.default.createElement(_reactIntl.FormattedMessage, {
          id: error[0],
          values: error[1]
        }) : _react.default.createElement(_reactIntl.FormattedMessage, {
          id: error
        }));
      })), _react.default.createElement(_DialogContent.default, null, _react.default.createElement(_Grid.default, {
        container: true,
        spacing: 16,
        justify: "space-evenly",
        component: "form",
        noValidate: true,
        autoComplete: "off",
        onSubmit: this.submit
      }, _react.default.createElement(_Grid.default, {
        container: true,
        spacing: 16,
        direction: "column",
        justify: "center",
        item: true,
        xs: 12,
        sm: 6
      }, _react.default.createElement(_Grid.default, {
        item: true
      }, _react.default.createElement(_Button.default, {
        variant: "contained",
        color: "secondary",
        className: this.props.classes.anonymousButton,
        disabled: this.props.submitting,
        onClick: this.handleAnonymous
      }, _react.default.createElement(_VisibilityOff.default, null), "\xA0\xA0", _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "APP_AUTH_ANONYMOUS_BUTTON"
      }))), _react.default.createElement(_Grid.default, {
        item: true
      }, this.renderButton(_constants.default.oauthProviders.FACEBOOK)), _react.default.createElement(_Grid.default, {
        item: true
      }, this.renderButton(_constants.default.oauthProviders.GOOGLE)), _react.default.createElement(_Grid.default, {
        item: true
      }, this.renderButton(_constants.default.oauthProviders.TWITTER))), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        sm: 6
      }, _react.default.createElement(_Paper.default, {
        className: this.props.classes.credentialsPaper
      }, _react.default.createElement(_Grid.default, {
        container: true,
        spacing: 8,
        direction: "column"
      }, _react.default.createElement(_Grid.default, {
        item: true
      }, _react.default.createElement(_Typography.default, {
        variant: "h5",
        className: this.props.classes.credentialsLabel
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "APP_AUTH_CREDENTIALS_LABEL"
      }))), _react.default.createElement(_Grid.default, {
        item: true
      }, _react.default.createElement(_Field.default, {
        name: "isNewUser",
        type: "checkbox",
        color: "default",
        onSubmit: this.submit
      })), _react.default.createElement(_Grid.default, {
        item: true
      }, _react.default.createElement(_Field.default, {
        name: "email",
        type: "text",
        onSubmit: this.submit
      })), _react.default.createElement(_Grid.default, {
        item: true
      }, _react.default.createElement(_Field.default, {
        name: "password",
        type: "password",
        onSubmit: this.submit
      }))))))), _react.default.createElement(_DialogActions.default, {
        classes: {
          root: this.props.classes.actions
        }
      }, _react.default.createElement(_Button.default, {
        variant: "contained",
        color: "secondary",
        disabled: this.props.submitting,
        onClick: this.submit
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "APP_AUTH_SUBMIT"
      }))));
    }
  }]);

  return AppAuthModal;
}(_Form2.default);

_defineProperty(AppAuthModal, "propTypes", _objectSpread({}, _Form2.default.propTypes, {
  intl: _reactIntl.intlShape,
  theme: _propTypes.default.object.isRequired,
  classes: _propTypes.default.object.isRequired,
  isOpen: _propTypes.default.bool.isRequired,
  providers: _propTypes.default.array.isRequired,
  cookie: _propTypes.default.object.isRequired,
  onSignIn: _propTypes.default.func.isRequired,
  onSignUp: _propTypes.default.func.isRequired
}));

_defineProperty(AppAuthModal, "formName", "signInForm");

_defineProperty(AppAuthModal, "fields", _auth.default);

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(AppAuthModal);

exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 163 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VisibilityOff");

/***/ }),
/* 164 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M19 3.998v3h-2a1 1 0 0 0-1 1v2h3v3h-3v7h-3v-7h-2v-3h2v-2.5a3.5 3.5 0 0 1 3.5-3.5H19zm1-2H4c-1.105 0-1.99.895-1.99 2l-.01 16c0 1.104.895 2 2 2h16c1.103 0 2-.896 2-2v-16a2 2 0 0 0-2-2z\"></path></svg>"

/***/ }),
/* 165 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M22 11h-2V9h-2v2h-2v2h2v2h2v-2h2v-2zm-13.869.143V13.2h3.504c-.175.857-1.051 2.571-3.504 2.571A3.771 3.771 0 0 1 4.365 12a3.771 3.771 0 0 1 3.766-3.771c1.227 0 2.015.514 2.453.942l1.664-1.542C11.198 6.6 9.796 6 8.131 6 4.715 6 2 8.657 2 12s2.715 6 6.131 6C11.635 18 14 15.6 14 12.171c0-.428 0-.685-.088-1.028h-5.78z\"></path></svg>"

/***/ }),
/* 166 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M22 5.894a8.304 8.304 0 0 1-2.357.636 4.064 4.064 0 0 0 1.804-2.235c-.792.463-1.67.8-2.605.98A4.128 4.128 0 0 0 15.847 4c-2.266 0-4.104 1.808-4.104 4.04 0 .316.037.624.107.92a11.711 11.711 0 0 1-8.458-4.22 3.972 3.972 0 0 0-.555 2.03c0 1.401.724 2.638 1.825 3.362a4.138 4.138 0 0 1-1.858-.505v.05c0 1.958 1.414 3.59 3.29 3.961a4.169 4.169 0 0 1-1.852.07c.522 1.604 2.037 2.772 3.833 2.804a8.315 8.315 0 0 1-5.096 1.73c-.331 0-.658-.02-.979-.057A11.748 11.748 0 0 0 8.29 20c7.547 0 11.674-6.155 11.674-11.493 0-.175-.004-.349-.011-.522A8.265 8.265 0 0 0 22 5.894z\"></path></svg>"

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * {
 *    fieldName: {
 *      label: 'translation key',
 *      normalize: 'rule1:param1:param2|rule2:param1:param2|...', // happens on change, optional
 *      transform: 'rule1:param1:param2|rule2:param1:param2|...', // happens on blur, optional
 *      validate: 'rule1:param1:param2|rule2:param1:param2|...',  // happens on blur, optional
 *    }
 * }
 *
 * Normalize and transfrom rules:
 * trim                       remove white space from the beginning and the end of value
 * compact:spaces             replace multiple occurences of space in a row with a single space
 * remove:spaces              remove spaces
 * rows:size                  forces "size" number of rows (1 if size is omitted)
 * integer                    removes everything except digits
 * phone                      forces international phone phormat
 * email                      normalizes email
 * credit_card:number         normalizes credit card number
 * credit_card:date           normalizes credit card expiration date
 * credit_card:secret         normalizes credit card CVV2 code
 *
 * Validation rules:
 * re:regexp:flags            value should match the regular expression "regexp", second param is flags
 *                            when ":" is needed in the regexp it should be escaped like this "\\:"
 * required                   value is required
 * required:otherField        value is required if otherField is not empty
 * phone                      value is a phone number
 * email                      value is an email
 * password:length            value is a password of "length" characters (6 if omitted)
 * credit_card:number         value is credit card number
 * credit_card:date           value is credit card expiration date
 * credit_card:secret         value is credit card CVV2 code
 * match:otherField           value should be the same as the value of otherField
 */
module.exports = {
  isNewUser: {
    label: "APP_AUTH_NEW_USER_LABEL"
  },
  email: {
    normalize: "rows:1|remove:spaces",
    transform: "trim",
    validate: "required|email",
    label: "APP_AUTH_EMAIL_LABEL"
  },
  password: {
    validate: "required|password",
    label: "APP_AUTH_PASSWORD_LABEL"
  }
};

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(169);

/***/ }),
/* 169 */
/***/ (function(module, exports) {



/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(theme) {
  return {
    "&::-webkit-scrollbar": {
      "-webkitAppearance": "none",
      width: "".concat(theme.spacing.unit, "px"),
      height: "".concat(theme.spacing.unit, "px")
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent"
    },
    "&::-webkit-scrollbar-thumb": {
      cursor: "pointer",
      borderRadius: theme.shape.borderRadius / 2,
      background: theme.palette.primary.main,
      transition: "color 0.2s ease"
    },
    "&::-webkit-scrollbar-thumb:window-inactive": {
      background: theme.palette.primary.main
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: theme.palette.primary.light
    }
  };
};

exports.default = _default;

/***/ })
/******/ ]);