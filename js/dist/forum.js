module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/common/AjaxDriver.js":
/*!**********************************!*\
  !*** ./src/common/AjaxDriver.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AjaxDriver; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/DiscussionPage */ "flarum/components/DiscussionPage");
/* harmony import */ var flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UpdateDriver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UpdateDriver */ "./src/common/UpdateDriver.js");




var AjaxDriver =
/*#__PURE__*/
function (_UpdateDriver) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AjaxDriver, _UpdateDriver);

  function AjaxDriver() {
    return _UpdateDriver.apply(this, arguments) || this;
  }

  var _proto = AjaxDriver.prototype;

  _proto.init = function init() {
    this.setTimeout();

    _UpdateDriver.prototype.init.call(this);
  };

  _proto.check = function check() {
    var _this = this;

    var filter = {
      since: this.lastTime,
      models: {
        'notifications': 'all',
        'discussions': 'all',
        'users': 'all'
      }
    };
    if (app.current instanceof flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1___default.a && app.current.discussion) filter.models['posts'] = {
      'discussions': [app.current.discussion.id()]
    };
    app.request({
      method: 'POST',
      url: app.forum.attribute('apiUrl') + '/ajax-diff',
      data: filter
    }).then(function (data) {
      _this.updated(data);

      _this.setTimeout();
    });
  };

  _proto.setTimeout = function (_setTimeout) {
    function setTimeout() {
      return _setTimeout.apply(this, arguments);
    }

    setTimeout.toString = function () {
      return _setTimeout.toString();
    };

    return setTimeout;
  }(function () {
    this.lastTime = new Date();
    setTimeout(this.check.bind(this), 15000);
  });

  return AjaxDriver;
}(_UpdateDriver__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./src/common/UpdateDriver.js":
/*!************************************!*\
  !*** ./src/common/UpdateDriver.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UpdateDriver; });
var UpdateDriver =
/*#__PURE__*/
function () {
  function UpdateDriver() {
    this.init();
  }

  var _proto = UpdateDriver.prototype;

  _proto.init = function init() {};

  _proto.updated = function updated(diff) {
    if (this.updateHandler && typeof this.updateHandler === 'function') {
      this.updateHandler(diff);
    }
  };

  return UpdateDriver;
}();



/***/ }),

/***/ "./src/common/Updater.js":
/*!*******************************!*\
  !*** ./src/common/Updater.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Updater; });
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/models/User */ "flarum/models/User");
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_models_User__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UpdateDriver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UpdateDriver */ "./src/common/UpdateDriver.js");





var Updater =
/*#__PURE__*/
function () {
  function Updater(driver) {
    if (!(driver instanceof _UpdateDriver__WEBPACK_IMPORTED_MODULE_3__["default"])) {
      throw new Error('driver must be type UpdateDriver');
    }

    this.driver = driver;
    this.driver.updateHandler = this.onUpdate; //User.prototype.isOnline = Model.attribute('isOnline');
  }

  var _proto = Updater.prototype;

  _proto.onUpdate = function onUpdate(diff) {
    var changed = false; // Update current user's notifications

    if (flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.session.user && diff.notifications) {
      var count = diff.notifications.filter(function (n) {
        return n.userId == flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.session.user.id();
      }).length;
      flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.session.user.pushAttributes({
        unreadNotificationCount: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.session.user.unreadNotificationCount() + count,
        newNotificationCount: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.session.user.newNotificationCount() + count
      });
      changed = true;
    } //On index page
    //Update reply counts and recent replies of visible discussions
    //Alert user of new discussions
    //On discussion page
    //Alert user of new replies
    // Update online/offline status of other users


    if (diff.users) {
      if (diff.users.loggedIn) {
        for (var _iterator = diff.users.loggedIn, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var diff_user = _ref;
          console.log(diff_user);
        }
      }
    }

    if (changed) m.redraw();
  };

  return Updater;
}();



/***/ }),

/***/ "./src/common/setupAjaxUpdater.js":
/*!****************************************!*\
  !*** ./src/common/setupAjaxUpdater.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setupAjaxUpdater; });
/* harmony import */ var _common_Updater__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Updater */ "./src/common/Updater.js");
/* harmony import */ var _common_AjaxDriver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/AjaxDriver */ "./src/common/AjaxDriver.js");


function setupAjaxUpdater() {
  var driver = new _common_AjaxDriver__WEBPACK_IMPORTED_MODULE_1__["default"]();
  app.updater = new _common_Updater__WEBPACK_IMPORTED_MODULE_0__["default"](driver);
}

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_setupAjaxUpdater__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/setupAjaxUpdater */ "./src/common/setupAjaxUpdater.js");
/* harmony import */ var flarum_utils_liveHumanTimes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/utils/liveHumanTimes */ "flarum/utils/liveHumanTimes");
/* harmony import */ var flarum_utils_liveHumanTimes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_liveHumanTimes__WEBPACK_IMPORTED_MODULE_1__);


app.initializers.add('ajax', function (app) {
  Object(_common_setupAjaxUpdater__WEBPACK_IMPORTED_MODULE_0__["default"])();
  flarum_utils_liveHumanTimes__WEBPACK_IMPORTED_MODULE_1___default()();
});

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/DiscussionPage":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionPage']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DiscussionPage'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/models/User":
/*!****************************************************!*\
  !*** external "flarum.core.compat['models/User']" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['models/User'];

/***/ }),

/***/ "flarum/utils/liveHumanTimes":
/*!*************************************************************!*\
  !*** external "flarum.core.compat['utils/liveHumanTimes']" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/liveHumanTimes'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map