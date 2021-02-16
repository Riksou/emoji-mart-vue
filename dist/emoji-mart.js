(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["EmojiMart"] = factory();
	else
		root["EmojiMart"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Emoji.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Emoji.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_shared_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/shared-props */ "./src/utils/shared-props.js");
/* harmony import */ var _utils_emoji_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/emoji-data */ "./src/utils/emoji-data.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _utils_shared_props__WEBPACK_IMPORTED_MODULE_1__["EmojiProps"], {
    data: {
      type: Object,
      required: true
    }
  }),
  computed: {
    view: function view() {
      return new _utils_emoji_data__WEBPACK_IMPORTED_MODULE_2__["EmojiView"](this.emojiObject, this.skin, this.set, this.native, this.fallback, this.tooltip, this.size);
    },
    sanitizedData: function sanitizedData() {
      return this.emojiObject._sanitized;
    },
    title: function title() {
      return this.tooltip ? this.emojiObject.short_name : null;
    },
    emojiObject: function emojiObject() {
      if (typeof this.emoji == 'string') {
        return this.data.findEmoji(this.emoji);
      } else {
        return this.emoji;
      }
    }
  },
  created: function created() {},
  methods: {
    onClick: function onClick() {
      this.$emit('click', this.emojiObject);
    },
    onMouseEnter: function onMouseEnter() {
      this.$emit('mouseenter', this.emojiObject);
    },
    onMouseLeave: function onMouseLeave() {
      this.$emit('mouseleave', this.emojiObject);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Picker.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Picker.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vendor_raf_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vendor/raf-polyfill */ "./src/vendor/raf-polyfill.js");
/* harmony import */ var _vendor_raf_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendor_raf_polyfill__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/store */ "./src/utils/store.js");
/* harmony import */ var _utils_frequently__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/frequently */ "./src/utils/frequently.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
/* harmony import */ var _utils_shared_props__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/shared-props */ "./src/utils/shared-props.js");
/* harmony import */ var _anchors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./anchors */ "./src/components/anchors.vue");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./category */ "./src/components/category.vue");
/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./preview */ "./src/components/preview.vue");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search */ "./src/components/search.vue");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









var I18N = {
  search: 'Search',
  notfound: 'No Emoji Found',
  categories: {
    search: 'Search Results',
    recent: 'Frequently Used',
    smileys: 'Smileys & Emotions',
    people: 'People & Body',
    nature: 'Animals & Nature',
    foods: 'Food & Drink',
    activity: 'Activity',
    places: 'Travel & Places',
    objects: 'Objects',
    symbols: 'Symbols',
    flags: 'Flags',
    custom: 'Custom'
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  props: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, _utils_shared_props__WEBPACK_IMPORTED_MODULE_6__["PickerProps"], {
    data: {
      type: Object,
      required: true
    }
  }),
  data: function data() {
    return {
      activeSkin: this.skin || _utils_store__WEBPACK_IMPORTED_MODULE_3__["default"].get('skin') || this.defaultSkin,
      activeCategory: null,
      previewEmoji: null,
      searchEmojis: null
    };
  },
  computed: {
    customStyles: function customStyles() {
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({
        width: this.calculateWidth + 'px'
      }, this.pickerStyles);
    },
    emojiProps: function emojiProps() {
      return {
        native: this.native,
        skin: this.activeSkin,
        set: this.set,
        emojiTooltip: this.emojiTooltip,
        emojiSize: this.emojiSize,
        onEnter: this.onEmojiEnter.bind(this),
        onLeave: this.onEmojiLeave.bind(this),
        onClick: this.onEmojiClick.bind(this)
      };
    },
    skinProps: function skinProps() {
      return {
        skin: this.activeSkin
      };
    },
    calculateWidth: function calculateWidth() {
      return this.perLine * (this.emojiSize + 12) + 12 + 2 + Object(_utils__WEBPACK_IMPORTED_MODULE_5__["measureScrollbar"])();
    },
    filteredCategories: function filteredCategories() {
      return this.categories.filter(function (category) {
        var hasEmojis = category.emojis.length > 0;
        return hasEmojis;
      });
    },
    mergedI18n: function mergedI18n() {
      return Object.freeze(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["deepMerge"])(I18N, this.i18n));
    },
    idleEmoji: function idleEmoji() {
      try {
        return this.data.emoji(this.emoji);
      } catch (e) {
        console.error('Default preview emoji `' + this.emoji + '` is not available, check the Picker `emoji` property');
        console.error(e);
        return this.data.firstEmoji();
      }
    }
  },
  created: function created() {
    var _this$categories;

    this.categories = [];
    console.log(this.data.categories());

    (_this$categories = this.categories).push.apply(_this$categories, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this.data.categories()));

    this.categories = this.categories.filter(function (category) {
      return category.emojis.length > 0;
    });
    this.categories[0].first = true;
    Object.freeze(this.categories);
    this.activeCategory = this.categories[0];
    this.skipScrollUpdate = false;
  },
  methods: {
    onScroll: function onScroll() {
      if (this.infiniteScroll && !this.waitingForPaint) {
        this.waitingForPaint = true;
        window.requestAnimationFrame(this.onScrollPaint.bind(this));
      }
    },
    onScrollPaint: function onScrollPaint() {
      this.waitingForPaint = false;
      var scrollTop = this.$refs.scroll.scrollTop;
      var activeCategory = this.filteredCategories[0];

      for (var i = 0, l = this.filteredCategories.length; i < l; i++) {
        var category = this.filteredCategories[i];
        var component = this.getCategoryComponent(i); // The `-50` offset switches active category (selected in the
        // anchors bar) a bit eariler, before it actually reaches the top.

        if (component && component.$el.offsetTop - 50 > scrollTop) {
          break;
        }

        activeCategory = category;
      }

      this.activeCategory = activeCategory;
    },
    onAnchorClick: function onAnchorClick(category) {
      var _this = this;

      if (this.searchEmojis) {
        // No categories are shown when search is active.
        return;
      }

      var i = this.filteredCategories.indexOf(category);
      var component = this.getCategoryComponent(i);

      var scrollToComponent = function scrollToComponent() {
        if (component) {
          var top = component.$el.offsetTop;

          if (category.first) {
            top = 0;
          }

          _this.$refs.scroll.scrollTop = top;
        }
      };

      if (this.infiniteScroll) {
        scrollToComponent();
      } else {
        this.activeCategory = this.filteredCategories[i];
      }
    },
    onSearch: function onSearch(value) {
      var emojis = this.data.search(value, this.maxSearchResults);
      this.searchEmojis = emojis;
    },
    onEmojiEnter: function onEmojiEnter(emoji) {
      this.previewEmoji = emoji;
    },
    onEmojiLeave: function onEmojiLeave(emoji) {
      this.previewEmoji = null;
    },
    onEmojiClick: function onEmojiClick(emoji) {
      this.$emit('select', emoji);
      _utils_frequently__WEBPACK_IMPORTED_MODULE_4__["default"].add(emoji);
    },
    onSkinChange: function onSkinChange(skin) {
      this.activeSkin = skin;
      _utils_store__WEBPACK_IMPORTED_MODULE_3__["default"].update({
        skin: skin
      });
      this.$emit('skin-change', skin);
    },
    getCategoryComponent: function getCategoryComponent(index) {
      var component = this.$refs['categories_' + index];

      if (component && '0' in component) {
        // Vue 2 has $refs under v-for as an array.
        return component['0'];
      } // Vue 3 does not support $refs as array.


      return component;
    }
  },
  components: {
    Anchors: _anchors__WEBPACK_IMPORTED_MODULE_7__["default"],
    Category: _category__WEBPACK_IMPORTED_MODULE_8__["default"],
    Preview: _preview__WEBPACK_IMPORTED_MODULE_9__["default"],
    Search: _search__WEBPACK_IMPORTED_MODULE_10__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/anchors.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/anchors.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _svgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../svgs */ "./src/svgs/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    i18n: {
      type: Object,
      required: true
    },
    color: {
      type: String
    },
    categories: {
      type: Array,
      required: true
    },
    activeCategory: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  created: function created() {
    this.svgs = _svgs__WEBPACK_IMPORTED_MODULE_0__["default"];
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/category.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/category.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_emoji_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/emoji-data */ "./src/utils/emoji-data.js");
/* harmony import */ var _Emoji__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Emoji */ "./src/components/Emoji.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    data: {
      type: Object,
      required: true
    },
    i18n: {
      type: Object,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    emojis: {
      type: Array
    },
    emojiProps: {
      type: Object,
      required: true
    }
  },
  computed: {
    isVisible: function isVisible() {
      return !!this.emojis;
    },
    isSearch: function isSearch() {
      return this.name == 'Search';
    },
    hasResults: function hasResults() {
      return this.emojis.length > 0;
    },
    emojiObjects: function emojiObjects() {
      var _this = this;

      return this.emojis.map(function (emoji) {
        var emojiObject = emoji;
        var emojiView = new _utils_emoji_data__WEBPACK_IMPORTED_MODULE_0__["EmojiView"](emoji, _this.emojiProps.skin, _this.emojiProps.set, _this.emojiProps.native, _this.emojiProps.fallback, _this.emojiProps.emojiTooltip, _this.emojiProps.emojiSize);
        return {
          emojiObject: emojiObject,
          emojiView: emojiView
        };
      });
    }
  },
  components: {
    Emoji: _Emoji__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/preview.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/preview.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Emoji__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Emoji */ "./src/components/Emoji.vue");
/* harmony import */ var _skins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skins */ "./src/components/skins.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    data: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    emoji: {
      type: [String, Object]
    },
    idleEmoji: {
      type: [String, Object],
      required: true
    },
    showSkinTones: {
      type: Boolean,
      default: true
    },
    emojiProps: {
      type: Object,
      required: true
    },
    skinProps: {
      type: Object,
      required: true
    },
    onSkinChange: {
      type: Function,
      required: true
    }
  },
  computed: {
    emojiData: function emojiData() {
      if (this.emoji) {
        return this.emoji;
      } else {
        return {};
      }
    },
    emojiShortNames: function emojiShortNames() {
      return this.emojiData.short_names;
    },
    emojiEmoticons: function emojiEmoticons() {
      return this.emojiData.emoticons;
    }
  },
  components: {
    Emoji: _Emoji__WEBPACK_IMPORTED_MODULE_0__["default"],
    Skins: _skins__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/search.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/search.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    data: {
      type: Object,
      required: true
    },
    i18n: {
      type: Object,
      required: true
    },
    autoFocus: {
      type: Boolean,
      default: false
    },
    onSearch: {
      type: Function,
      required: true
    }
  },
  data: function data() {
    return {
      value: ''
    };
  },
  computed: {
    emojiIndex: function emojiIndex() {
      return this.data;
    }
  },
  watch: {
    value: function value() {
      this.$emit('search', this.value);
    }
  },
  methods: {
    clear: function clear() {
      this.value = '';
    }
  },
  mounted: function mounted() {
    var $input = this.$el.querySelector('input');

    if (this.autoFocus) {
      $input.focus();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/skins.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/skins.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    skin: {
      type: Number,
      required: true
    }
  },
  data: function data() {
    return {
      opened: false
    };
  },
  methods: {
    onClick: function onClick(skinTone) {
      if (this.opened) {
        if (skinTone != this.skin) {
          this.$emit('change', skinTone);
        }
      }

      this.opened = !this.opened;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Emoji.vue?vue&type=template&id=534ad946&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Emoji.vue?vue&type=template&id=534ad946& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.view.canRender
    ? _c(
        "span",
        {
          staticClass: "emoji-mart-emoji",
          attrs: { title: _vm.view.title, "data-title": _vm.title },
          on: {
            mouseenter: _vm.onMouseEnter,
            mouseleave: _vm.onMouseLeave,
            click: _vm.onClick
          }
        },
        [
          _c("span", { class: _vm.view.cssClass, style: _vm.view.cssStyle }, [
            _vm._v(_vm._s(_vm.view.content))
          ])
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Picker.vue?vue&type=template&id=d16e9084&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Picker.vue?vue&type=template&id=d16e9084& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "emoji-mart emoji-mart-static", style: _vm.customStyles },
    [
      _vm.showCategories
        ? _c(
            "div",
            { staticClass: "emoji-mart-bar emoji-mart-bar-anchors" },
            [
              _c("anchors", {
                attrs: {
                  data: _vm.data,
                  i18n: _vm.mergedI18n,
                  color: _vm.color,
                  categories: _vm.categories,
                  "active-category": _vm.activeCategory
                },
                on: { click: _vm.onAnchorClick }
              })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm._t(
        "searchTemplate",
        [
          _vm.showSearch
            ? _c("search", {
                ref: "search",
                attrs: {
                  data: _vm.data,
                  i18n: _vm.mergedI18n,
                  "auto-focus": _vm.autoFocus,
                  "on-search": _vm.onSearch
                },
                on: { search: _vm.onSearch }
              })
            : _vm._e()
        ],
        {
          data: _vm.data,
          i18n: _vm.i18n,
          autoFocus: _vm.autoFocus,
          onSearch: _vm.onSearch
        }
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          ref: "scroll",
          staticClass: "emoji-mart-scroll",
          on: { scroll: _vm.onScroll }
        },
        [
          _c("category", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.searchEmojis,
                expression: "searchEmojis"
              }
            ],
            attrs: {
              data: _vm.data,
              i18n: _vm.mergedI18n,
              id: "search",
              name: "Search",
              emojis: _vm.searchEmojis,
              "emoji-props": _vm.emojiProps
            }
          }),
          _vm._v(" "),
          _vm._l(_vm.filteredCategories, function(category, idx) {
            return _c("category", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value:
                    !_vm.searchEmojis &&
                    (_vm.infiniteScroll || category == _vm.activeCategory),
                  expression:
                    "!searchEmojis && (infiniteScroll || category == activeCategory)"
                }
              ],
              key: category.id,
              ref: "categories_" + idx,
              refInFor: true,
              attrs: {
                data: _vm.data,
                i18n: _vm.mergedI18n,
                id: category.id,
                name: category.name,
                emojis: category.emojis,
                "emoji-props": _vm.emojiProps
              }
            })
          })
        ],
        2
      ),
      _vm._v(" "),
      _vm._t(
        "previewTemplate",
        [
          _vm.showPreview
            ? _c(
                "div",
                { staticClass: "emoji-mart-bar emoji-mart-bar-preview" },
                [
                  _c("preview", {
                    attrs: {
                      data: _vm.data,
                      title: _vm.title,
                      emoji: _vm.previewEmoji,
                      "idle-emoji": _vm.idleEmoji,
                      "show-skin-tones": _vm.showSkinTones,
                      "emoji-props": _vm.emojiProps,
                      "skin-props": _vm.skinProps,
                      "on-skin-change": _vm.onSkinChange
                    }
                  })
                ],
                1
              )
            : _vm._e()
        ],
        {
          data: _vm.data,
          title: _vm.title,
          emoji: _vm.previewEmoji,
          idleEmoji: _vm.idleEmoji,
          showSkinTones: _vm.showSkinTones,
          emojiProps: _vm.emojiProps,
          skinProps: _vm.skinProps,
          onSkinChange: _vm.onSkinChange
        }
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/anchors.vue?vue&type=template&id=51188104&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/anchors.vue?vue&type=template&id=51188104& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "emoji-mart-anchors" },
    _vm._l(_vm.categories, function(category) {
      return _c(
        "span",
        {
          key: category.id,
          class: {
            "emoji-mart-anchor": true,
            "emoji-mart-anchor-selected": category.id == _vm.activeCategory.id
          },
          style: {
            color: category.id == _vm.activeCategory.id ? _vm.color : ""
          },
          attrs: { "data-title": _vm.i18n.categories[category.id] },
          on: {
            click: function($event) {
              return _vm.$emit("click", category)
            }
          }
        },
        [
          _c("div", { domProps: { innerHTML: _vm._s(_vm.svgs[category.id]) } }),
          _vm._v(" "),
          _c("span", {
            staticClass: "emoji-mart-anchor-bar",
            style: { backgroundColor: _vm.color }
          })
        ]
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/category.vue?vue&type=template&id=376cda0e&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/category.vue?vue&type=template&id=376cda0e& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.isVisible && (_vm.isSearch || _vm.hasResults)
    ? _c(
        "div",
        {
          class: {
            "emoji-mart-category": true,
            "emoji-mart-no-results": !_vm.hasResults
          }
        },
        [
          _c("div", { staticClass: "emoji-mart-category-label" }, [
            _c("span", [_vm._v(_vm._s(_vm.i18n.categories[_vm.id]))])
          ]),
          _vm._v(" "),
          _vm._l(_vm.emojiObjects, function(ref) {
            var emojiObject = ref.emojiObject
            var emojiView = ref.emojiView
            return [
              emojiView.canRender
                ? _c(
                    "span",
                    {
                      staticClass: "emoji-mart-emoji",
                      attrs: {
                        "data-title": emojiObject.short_name,
                        title: emojiView.title
                      },
                      on: {
                        mouseenter: function($event) {
                          _vm.emojiProps.onEnter(emojiView.getEmoji())
                        },
                        mouseleave: function($event) {
                          _vm.emojiProps.onLeave(emojiView.getEmoji())
                        },
                        click: function($event) {
                          _vm.emojiProps.onClick(emojiView.getEmoji())
                        }
                      }
                    },
                    [
                      _c(
                        "span",
                        {
                          class: emojiView.cssClass,
                          style: emojiView.cssStyle
                        },
                        [_vm._v(_vm._s(emojiView.content))]
                      )
                    ]
                  )
                : _vm._e()
            ]
          }),
          _vm._v(" "),
          !_vm.hasResults
            ? _c(
                "div",
                [
                  _c("emoji", {
                    attrs: {
                      data: _vm.data,
                      emoji: "sleuth_or_spy",
                      native: _vm.emojiProps.native,
                      skin: _vm.emojiProps.skin,
                      set: _vm.emojiProps.set
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "emoji-mart-no-results-label" }, [
                    _vm._v(_vm._s(_vm.i18n.notfound))
                  ])
                ],
                1
              )
            : _vm._e()
        ],
        2
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/preview.vue?vue&type=template&id=35056c30&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/preview.vue?vue&type=template&id=35056c30& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "emoji-mart-preview" },
    [
      _vm.emoji
        ? [
            _c(
              "div",
              { staticClass: "emoji-mart-preview-emoji" },
              [
                _c("emoji", {
                  attrs: {
                    data: _vm.data,
                    emoji: _vm.emoji,
                    native: _vm.emojiProps.native,
                    skin: _vm.emojiProps.skin,
                    set: _vm.emojiProps.set
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "emoji-mart-preview-data" }, [
              _c("div", { staticClass: "emoji-mart-preview-name" }, [
                _vm._v(_vm._s(_vm.emoji.name))
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "emoji-mart-preview-shortnames" },
                _vm._l(_vm.emojiShortNames, function(shortName) {
                  return _c(
                    "span",
                    {
                      key: shortName,
                      staticClass: "emoji-mart-preview-shortname"
                    },
                    [_vm._v(":" + _vm._s(shortName) + ":")]
                  )
                }),
                0
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "emoji-mart-preview-emoticons" },
                _vm._l(_vm.emojiEmoticons, function(emoticon) {
                  return _c(
                    "span",
                    {
                      key: emoticon,
                      staticClass: "emoji-mart-preview-emoticon"
                    },
                    [_vm._v(_vm._s(emoticon))]
                  )
                }),
                0
              )
            ])
          ]
        : [
            _c(
              "div",
              { staticClass: "emoji-mart-preview-emoji" },
              [
                _c("emoji", {
                  attrs: {
                    data: _vm.data,
                    emoji: _vm.idleEmoji,
                    native: _vm.emojiProps.native,
                    skin: _vm.emojiProps.skin,
                    set: _vm.emojiProps.set
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "emoji-mart-preview-data" }, [
              _c("span", { staticClass: "emoji-mart-title-label" }, [
                _vm._v(_vm._s(_vm.title))
              ])
            ]),
            _vm._v(" "),
            _vm.showSkinTones
              ? _c(
                  "div",
                  { staticClass: "emoji-mart-preview-skins" },
                  [
                    _c("skins", {
                      attrs: { skin: _vm.skinProps.skin },
                      on: {
                        change: function($event) {
                          return _vm.onSkinChange($event)
                        }
                      }
                    })
                  ],
                  1
                )
              : _vm._e()
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/search.vue?vue&type=template&id=4ad41bb8&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/search.vue?vue&type=template&id=4ad41bb8& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "emoji-mart-search" }, [
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.value,
          expression: "value"
        }
      ],
      attrs: { type: "text", placeholder: _vm.i18n.search },
      domProps: { value: _vm.value },
      on: {
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.value = $event.target.value
        }
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/skins.vue?vue&type=template&id=1c614894&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/skins.vue?vue&type=template&id=1c614894& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: {
        "emoji-mart-skin-swatches": true,
        "emoji-mart-skin-swatches-opened": _vm.opened
      }
    },
    _vm._l(6, function(skinTone) {
      return _c(
        "span",
        {
          key: skinTone,
          class: {
            "emoji-mart-skin-swatch": true,
            "emoji-mart-skin-swatch-selected": _vm.skin == skinTone
          }
        },
        [
          _c("span", {
            class: "emoji-mart-skin emoji-mart-skin-tone-" + skinTone,
            on: {
              click: function($event) {
                return _vm.onClick(skinTone)
              }
            }
          })
        ]
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./src/components/Emoji.vue":
/*!**********************************!*\
  !*** ./src/components/Emoji.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Emoji_vue_vue_type_template_id_534ad946___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Emoji.vue?vue&type=template&id=534ad946& */ "./src/components/Emoji.vue?vue&type=template&id=534ad946&");
/* harmony import */ var _Emoji_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Emoji.vue?vue&type=script&lang=js& */ "./src/components/Emoji.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Emoji_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Emoji_vue_vue_type_template_id_534ad946___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Emoji_vue_vue_type_template_id_534ad946___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Emoji.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Emoji.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/components/Emoji.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Emoji_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--0!../../node_modules/vue-loader/lib??vue-loader-options!./Emoji.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Emoji.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Emoji_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Emoji.vue?vue&type=template&id=534ad946&":
/*!*****************************************************************!*\
  !*** ./src/components/Emoji.vue?vue&type=template&id=534ad946& ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Emoji_vue_vue_type_template_id_534ad946___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Emoji.vue?vue&type=template&id=534ad946& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Emoji.vue?vue&type=template&id=534ad946&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Emoji_vue_vue_type_template_id_534ad946___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Emoji_vue_vue_type_template_id_534ad946___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Picker.vue":
/*!***********************************!*\
  !*** ./src/components/Picker.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Picker_vue_vue_type_template_id_d16e9084___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Picker.vue?vue&type=template&id=d16e9084& */ "./src/components/Picker.vue?vue&type=template&id=d16e9084&");
/* harmony import */ var _Picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Picker.vue?vue&type=script&lang=js& */ "./src/components/Picker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Picker_vue_vue_type_template_id_d16e9084___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Picker_vue_vue_type_template_id_d16e9084___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Picker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Picker.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/components/Picker.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--0!../../node_modules/vue-loader/lib??vue-loader-options!./Picker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Picker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Picker.vue?vue&type=template&id=d16e9084&":
/*!******************************************************************!*\
  !*** ./src/components/Picker.vue?vue&type=template&id=d16e9084& ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Picker_vue_vue_type_template_id_d16e9084___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Picker.vue?vue&type=template&id=d16e9084& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Picker.vue?vue&type=template&id=d16e9084&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Picker_vue_vue_type_template_id_d16e9084___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Picker_vue_vue_type_template_id_d16e9084___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/anchors.vue":
/*!************************************!*\
  !*** ./src/components/anchors.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _anchors_vue_vue_type_template_id_51188104___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anchors.vue?vue&type=template&id=51188104& */ "./src/components/anchors.vue?vue&type=template&id=51188104&");
/* harmony import */ var _anchors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./anchors.vue?vue&type=script&lang=js& */ "./src/components/anchors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _anchors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _anchors_vue_vue_type_template_id_51188104___WEBPACK_IMPORTED_MODULE_0__["render"],
  _anchors_vue_vue_type_template_id_51188104___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/anchors.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/anchors.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/components/anchors.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_anchors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--0!../../node_modules/vue-loader/lib??vue-loader-options!./anchors.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/anchors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_anchors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/anchors.vue?vue&type=template&id=51188104&":
/*!*******************************************************************!*\
  !*** ./src/components/anchors.vue?vue&type=template&id=51188104& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_anchors_vue_vue_type_template_id_51188104___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./anchors.vue?vue&type=template&id=51188104& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/anchors.vue?vue&type=template&id=51188104&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_anchors_vue_vue_type_template_id_51188104___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_anchors_vue_vue_type_template_id_51188104___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/category.vue":
/*!*************************************!*\
  !*** ./src/components/category.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _category_vue_vue_type_template_id_376cda0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.vue?vue&type=template&id=376cda0e& */ "./src/components/category.vue?vue&type=template&id=376cda0e&");
/* harmony import */ var _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.vue?vue&type=script&lang=js& */ "./src/components/category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _category_vue_vue_type_template_id_376cda0e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _category_vue_vue_type_template_id_376cda0e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/category.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/category.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/components/category.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--0!../../node_modules/vue-loader/lib??vue-loader-options!./category.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/category.vue?vue&type=template&id=376cda0e&":
/*!********************************************************************!*\
  !*** ./src/components/category.vue?vue&type=template&id=376cda0e& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_376cda0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./category.vue?vue&type=template&id=376cda0e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/category.vue?vue&type=template&id=376cda0e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_376cda0e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_376cda0e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: Anchors, Category, Preview, Search, Skins, Emoji, Picker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _anchors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anchors */ "./src/components/anchors.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Anchors", function() { return _anchors__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category */ "./src/components/category.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return _category__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preview */ "./src/components/preview.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Preview", function() { return _preview__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search */ "./src/components/search.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _search__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _skins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skins */ "./src/components/skins.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Skins", function() { return _skins__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Emoji__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Emoji */ "./src/components/Emoji.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Emoji", function() { return _Emoji__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Picker */ "./src/components/Picker.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return _Picker__WEBPACK_IMPORTED_MODULE_6__["default"]; });









/***/ }),

/***/ "./src/components/preview.vue":
/*!************************************!*\
  !*** ./src/components/preview.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _preview_vue_vue_type_template_id_35056c30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preview.vue?vue&type=template&id=35056c30& */ "./src/components/preview.vue?vue&type=template&id=35056c30&");
/* harmony import */ var _preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preview.vue?vue&type=script&lang=js& */ "./src/components/preview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _preview_vue_vue_type_template_id_35056c30___WEBPACK_IMPORTED_MODULE_0__["render"],
  _preview_vue_vue_type_template_id_35056c30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/preview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/preview.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/components/preview.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--0!../../node_modules/vue-loader/lib??vue-loader-options!./preview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/preview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/preview.vue?vue&type=template&id=35056c30&":
/*!*******************************************************************!*\
  !*** ./src/components/preview.vue?vue&type=template&id=35056c30& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_template_id_35056c30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./preview.vue?vue&type=template&id=35056c30& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/preview.vue?vue&type=template&id=35056c30&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_template_id_35056c30___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_template_id_35056c30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/search.vue":
/*!***********************************!*\
  !*** ./src/components/search.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_vue_vue_type_template_id_4ad41bb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.vue?vue&type=template&id=4ad41bb8& */ "./src/components/search.vue?vue&type=template&id=4ad41bb8&");
/* harmony import */ var _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.vue?vue&type=script&lang=js& */ "./src/components/search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _search_vue_vue_type_template_id_4ad41bb8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _search_vue_vue_type_template_id_4ad41bb8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/search.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/components/search.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--0!../../node_modules/vue-loader/lib??vue-loader-options!./search.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/search.vue?vue&type=template&id=4ad41bb8&":
/*!******************************************************************!*\
  !*** ./src/components/search.vue?vue&type=template&id=4ad41bb8& ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_4ad41bb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./search.vue?vue&type=template&id=4ad41bb8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/search.vue?vue&type=template&id=4ad41bb8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_4ad41bb8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_4ad41bb8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/skins.vue":
/*!**********************************!*\
  !*** ./src/components/skins.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _skins_vue_vue_type_template_id_1c614894___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skins.vue?vue&type=template&id=1c614894& */ "./src/components/skins.vue?vue&type=template&id=1c614894&");
/* harmony import */ var _skins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skins.vue?vue&type=script&lang=js& */ "./src/components/skins.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _skins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _skins_vue_vue_type_template_id_1c614894___WEBPACK_IMPORTED_MODULE_0__["render"],
  _skins_vue_vue_type_template_id_1c614894___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/skins.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/skins.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/components/skins.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_skins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--0!../../node_modules/vue-loader/lib??vue-loader-options!./skins.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/skins.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_skins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/skins.vue?vue&type=template&id=1c614894&":
/*!*****************************************************************!*\
  !*** ./src/components/skins.vue?vue&type=template&id=1c614894& ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_skins_vue_vue_type_template_id_1c614894___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./skins.vue?vue&type=template&id=1c614894& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/skins.vue?vue&type=template&id=1c614894&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_skins_vue_vue_type_template_id_1c614894___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_skins_vue_vue_type_template_id_1c614894___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Picker, Emoji, Anchors, Preview, Search, Category, Skins, EmojiIndex, EmojiView, EmojiData, sanitize, uncompress, store, frequently */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/store */ "./src/utils/store.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "store", function() { return _utils_store__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/data */ "./src/utils/data.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uncompress", function() { return _utils_data__WEBPACK_IMPORTED_MODULE_1__["uncompress"]; });

/* harmony import */ var _utils_frequently__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/frequently */ "./src/utils/frequently.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "frequently", function() { return _utils_frequently__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/components/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["Picker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Emoji", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["Emoji"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Anchors", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["Anchors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Preview", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["Preview"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["Search"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["Category"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Skins", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["Skins"]; });

/* harmony import */ var _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/emoji-data */ "./src/utils/emoji-data.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmojiIndex", function() { return _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__["EmojiIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmojiView", function() { return _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__["EmojiView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmojiData", function() { return _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__["EmojiData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sanitize", function() { return _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__["sanitize"]; });








/***/ }),

/***/ "./src/polyfills/stringFromCodePoint.js":
/*!**********************************************!*\
  !*** ./src/polyfills/stringFromCodePoint.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _String = String;
/* harmony default export */ __webpack_exports__["default"] = (_String.fromCodePoint || function stringFromCodePoint() {
  var MAX_SIZE = 0x4000;
  var codeUnits = [];
  var highSurrogate;
  var lowSurrogate;
  var index = -1;
  var length = arguments.length;

  if (!length) {
    return '';
  }

  var result = '';

  while (++index < length) {
    var codePoint = Number(arguments[index]);

    if (!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
    codePoint < 0 || // not a valid Unicode code point
    codePoint > 0x10ffff || // not a valid Unicode code point
    Math.floor(codePoint) != codePoint // not an integer
    ) {
        throw RangeError('Invalid code point: ' + codePoint);
      }

    if (codePoint <= 0xffff) {
      // BMP code point
      codeUnits.push(codePoint);
    } else {
      // Astral code point; split in surrogate halves
      // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      codePoint -= 0x10000;
      highSurrogate = (codePoint >> 10) + 0xd800;
      lowSurrogate = codePoint % 0x400 + 0xdc00;
      codeUnits.push(highSurrogate, lowSurrogate);
    }

    if (index + 1 === length || codeUnits.length > MAX_SIZE) {
      result += String.fromCharCode.apply(null, codeUnits);
      codeUnits.length = 0;
    }
  }

  return result;
});

/***/ }),

/***/ "./src/svgs/index.js":
/*!***************************!*\
  !*** ./src/svgs/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var SVGs = {
  activity: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113\"/></svg>",
  custom: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><g transform=\"translate(2.000000, 1.000000)\"><rect id=\"Rectangle\" x=\"8\" y=\"0\" width=\"3\" height=\"21\" rx=\"1.5\"></rect><rect id=\"Rectangle\" transform=\"translate(9.843, 10.549) rotate(60) translate(-9.843, -10.549) \" x=\"8.343\" y=\"0.049\" width=\"3\" height=\"21\" rx=\"1.5\"></rect><rect id=\"Rectangle\" transform=\"translate(9.843, 10.549) rotate(-60) translate(-9.843, -10.549) \" x=\"8.343\" y=\"0.049\" width=\"3\" height=\"21\" rx=\"1.5\"></rect></g></svg>",
  flags: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z\"/></svg>",
  foods: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9\"/></svg>",
  nature: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8\"/><path d=\"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235\"/></svg>",
  objects: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z\"/><path d=\"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789\"/></svg>",
  smileys: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10\"/><path d=\"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0\"/></svg>",
  people: "<svg xmlns:svg=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\" viewBox=\"0 0 24 24\"> <path id=\"path3814\" d=\"m 3.3591089,21.17726 c 0.172036,0.09385 4.265994,2.29837 8.8144451,2.29837 4.927767,0 8.670894,-2.211883 8.82782,-2.306019 0.113079,-0.06785 0.182268,-0.190051 0.182267,-0.321923 0,-3.03119 -0.929494,-5.804936 -2.617196,-7.810712 -1.180603,-1.403134 -2.661918,-2.359516 -4.295699,-2.799791 4.699118,-2.236258 3.102306,-9.28617162 -2.097191,-9.28617162 -5.1994978,0 -6.7963103,7.04991362 -2.097192,9.28617162 -1.6337821,0.440275 -3.1150971,1.396798 -4.2956991,2.799791 -1.687703,2.005776 -2.617196,4.779522 -2.617196,7.810712 1.2e-6,0.137378 0.075039,0.263785 0.195641,0.329572 z M 8.0439319,5.8308783 C 8.0439309,2.151521 12.492107,0.30955811 15.093491,2.9109411 17.694874,5.5123241 15.852911,9.9605006 12.173554,9.9605 9.8938991,9.9579135 8.0465186,8.1105332 8.0439319,5.8308783 Z m -1.688782,7.6894977 c 1.524535,-1.811449 3.5906601,-2.809035 5.8184041,-2.809035 2.227744,0 4.293869,0.997586 5.818404,2.809035 1.533639,1.822571 2.395932,4.339858 2.439152,7.108301 -0.803352,0.434877 -4.141636,2.096112 -8.257556,2.096112 -3.8062921,0 -7.3910861,-1.671043 -8.2573681,-2.104981 0.04505,-2.765017 0.906968,-5.278785 2.438964,-7.099432 z\" /> <path id=\"path3816\" d=\"M 12.173828 0.38867188 C 9.3198513 0.38867187 7.3770988 2.3672285 6.8652344 4.6308594 C 6.4218608 6.5916015 7.1153562 8.7676117 8.9648438 10.126953 C 7.6141249 10.677376 6.3550511 11.480944 5.3496094 12.675781 C 3.5629317 14.799185 2.6015625 17.701475 2.6015625 20.847656 C 2.6015654 21.189861 2.7894276 21.508002 3.0898438 21.671875 C 3.3044068 21.788925 7.4436239 24.039062 12.173828 24.039062 C 17.269918 24.039062 21.083568 21.776786 21.291016 21.652344 C 21.57281 21.483266 21.746097 21.176282 21.746094 20.847656 C 21.746094 17.701475 20.78277 14.799185 18.996094 12.675781 C 17.990455 11.480591 16.733818 10.675362 15.382812 10.125 C 17.231132 8.7655552 17.925675 6.5910701 17.482422 4.6308594 C 16.970557 2.3672285 15.027805 0.38867188 12.173828 0.38867188 z M 12.792969 2.3007812 C 13.466253 2.4161792 14.125113 2.7383941 14.695312 3.3085938 C 15.835712 4.4489931 15.985604 5.9473549 15.46875 7.1953125 C 14.951896 8.4432701 13.786828 9.3984378 12.173828 9.3984375 C 10.197719 9.3961954 8.607711 7.806187 8.6054688 5.8300781 C 8.6054683 4.2170785 9.5606362 3.0520102 10.808594 2.5351562 C 11.432573 2.2767293 12.119685 2.1853833 12.792969 2.3007812 z M 12.173828 11.273438 C 14.233647 11.273438 16.133674 12.185084 17.5625 13.882812 C 18.93069 15.508765 19.698347 17.776969 19.808594 20.283203 C 18.807395 20.800235 15.886157 22.162109 12.173828 22.162109 C 8.7614632 22.162109 5.6245754 20.787069 4.5390625 20.265625 C 4.6525896 17.766717 5.4203315 15.504791 6.7851562 13.882812 C 8.2139827 12.185084 10.11401 11.273438 12.173828 11.273438 z \" /> </svg>",
  places: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5\"/><path d=\"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z\"/></svg>",
  recent: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z\"/><path d=\"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10\"/></svg>",
  symbols: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76\"/></svg>"
};
/* harmony default export */ __webpack_exports__["default"] = (SVGs);

/***/ }),

/***/ "./src/utils/data.js":
/*!***************************!*\
  !*** ./src/utils/data.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var mapping = {
  name: 'a',
  unified: 'b',
  non_qualified: 'c',
  has_img_apple: 'd',
  has_img_google: 'e',
  has_img_twitter: 'f',
  has_img_facebook: 'h',
  keywords: 'j',
  sheet: 'k',
  emoticons: 'l',
  text: 'm',
  short_names: 'n',
  added_in: 'o'
};

var buildSearch = function buildSearch(emoji) {
  var search = [];

  var addToSearch = function addToSearch(strings, split) {
    if (!strings) {
      return;
    }

    ;
    (Array.isArray(strings) ? strings : [strings]).forEach(function (string) {
      ;
      (split ? string.split(/[-|_|\s]+/) : [string]).forEach(function (s) {
        s = s.toLowerCase();

        if (search.indexOf(s) == -1) {
          search.push(s);
        }
      });
    });
  };

  addToSearch(emoji.short_names, true);
  addToSearch(emoji.name, true);
  addToSearch(emoji.keywords, false);
  addToSearch(emoji.emoticons, false);
  return search.join(',');
};

var compress = function compress(emoji) {
  emoji.short_names = emoji.short_names.filter(function (short_name) {
    return short_name !== emoji.short_name;
  });
  delete emoji.short_name;
  emoji.sheet = [emoji.sheet_x, emoji.sheet_y];
  delete emoji.sheet_x;
  delete emoji.sheet_y;
  emoji.added_in = parseInt(emoji.added_in);

  if (emoji.added_in === 6) {
    delete emoji.added_in;
  }

  for (var key in mapping) {
    emoji[mapping[key]] = emoji[key];
    delete emoji[key];
  }

  for (var _key in emoji) {
    var value = emoji[_key];

    if (Array.isArray(value) && !value.length) {
      delete emoji[_key];
    } else if (typeof value === 'string' && !value.length) {
      delete emoji[_key];
    } else if (value === null) {
      delete emoji[_key];
    }
  }
};

function deepFreeze(object) {
  // Retrieve the property names defined on object
  var propNames = Object.getOwnPropertyNames(object); // Freeze properties before freezing self

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = propNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var name = _step.value;
      var value = object[name];
      object[name] = value && _typeof(value) === 'object' ? deepFreeze(value) : value;
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

  return Object.freeze(object);
}

var uncompress = function uncompress(data) {
  if (!data.compressed) {
    return data;
  }

  data.compressed = false;

  for (var id in data.emojis) {
    var emoji = data.emojis[id];

    for (var key in mapping) {
      emoji[key] = emoji[mapping[key]];
      delete emoji[mapping[key]];
    }

    if (!emoji.short_names) emoji.short_names = [];
    emoji.short_names.unshift(id);
    emoji.sheet_x = emoji.sheet[0];
    emoji.sheet_y = emoji.sheet[1];
    delete emoji.sheet;
    if (!emoji.text) emoji.text = '';
    if (!emoji.added_in) emoji.added_in = 6;
    emoji.added_in = emoji.added_in.toFixed(1);
    emoji.search = buildSearch(emoji);
  }

  data = deepFreeze(data);
  return data;
};

module.exports = {
  buildSearch: buildSearch,
  compress: compress,
  uncompress: uncompress
};

/***/ }),

/***/ "./src/utils/emoji-data.js":
/*!*********************************!*\
  !*** ./src/utils/emoji-data.js ***!
  \*********************************/
/*! exports provided: EmojiIndex, EmojiData, EmojiView, sanitize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiIndex", function() { return EmojiIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiData", function() { return EmojiData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiView", function() { return EmojiView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitize", function() { return sanitize; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/utils/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./src/utils/data.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _frequently__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./frequently */ "./src/utils/frequently.js");





var SHEET_COLUMNS = 56;
var COLONS_REGEX = /^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/; // Skin tones

var SKINS = ['1F3FA', '1F3FB', '1F3FC', '1F3FD', '1F3FE', '1F3FF'];
/**
 * Emoji data structure:
 * {
 *    "compressed": false,
 *    "aliases": {
 *      collision: "boom"
 *      cooking: "fried_egg"
 *      envelope: "email"
 *      face_with_finger_covering_closed_lips: "shushing_face"
 *      ...
 *    },
 *    "categories": [ {
 *      id: "people",
 *      name: "Smileys & Emotion",
 *      emojis: [ "grinning", "grin", "joy", ... ]
 *    }, {
 *      id: "nature",
 *      name: "Animals & Nature",
 *      emojis: [ "monkey_face", "money", "gorilla", ... ]
 *    },
 *    ...
 *    ],
 *    "emojis": [
 *      smiley: {
 *        added_in: "6.0",
 *        emoticons: ["=)", "=-)"],
 *        has_img_apple: true,
 *        has_img_facebook: true,
 *        has_img_google: true,
 *        has_img_twitter: true,
 *        keywords: ["face", "happy", "joy", "haha", ":D", ":)", "smile", "funny"],
 *        name: "Smiling Face with Open Mouth",
 *        non_qualified: undefined,
 *        search: "smiley,smiling,face,with,open,mouth,happy,joy,haha,:d,:),smile,funny,=),=-)",
 *        sheet_x: 30,
 *        sheet_y: 27,
 *        short_names: ["smiley"],
 *        text: ":)",
 *        unified: "1F603",
 *      }, {
 *      +1: {    // emoji with skin_variations
 *          ..., // all the regular fields are present
 *          name: "Thumbs Up Sign",
 *          short_names: (2) ["+1", "thumbsup"],
 *          skin_variations: {
 *            1F3FB:             // each variation has additional set of fields:
 *              added_in: "8.0",
 *              has_img_apple: true,
 *              has_img_facebook: true,
 *              has_img_google: true,
 *              has_img_twitter: true,
 *              image: "1f44d-1f3fb.png",
 *              non_qualified: null,
 *              sheet_x: 14,
 *              sheet_y: 50,
 *              unified: "1F44D-1F3FB",
 *            1F3FB: {…},
 *            1F3FC: {…},
 *            1F3FD: {…},
 *            1F3FE: {…},
 *            1F3FF: {…}
 *            },
 *          ...
 *      },
 *      a: {  // emoji with non_qualified field set
 *        added_in: "6.0",
 *        emoticons: undefined,
 *        has_img_apple: true,
 *        ...
 *        non_qualified: "1F170",
 *        unified: "1F170-FE0F",
 *     },
 *     ...
 *   ]
 * }
 */

/**
 * Wraps raw jason emoji data, serves as data source for
 * emoji picker components.
 *
 * Usage:
 *
 *   import data from '../data/all.json'
 *   let index = new EmojiIndex(data)
 *
 */

var EmojiIndex =
/*#__PURE__*/
function () {
  /**
   * Constructor.
   *
   * @param {object} data - Raw json data, see the structure above.
   * @param {object} options - additional options, as an object:
   * @param {Function} emojisToShowFilter - optional, function to filter out
   *   some emojis, function(emoji) { return true|false }
   *   where `emoji` is an raw emoji object, see data.emojis above.
   * @param {Array} include - optional, a list of category ids to include.
   * @param {Array} exclude - optional, a list of category ids to exclude.
   * @param {Array} custom - optional, a list custom emojis, each emoji is
   *   an object, see data.emojis above for examples.
   */
  function EmojiIndex(data) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        emojisToShowFilter = _ref.emojisToShowFilter,
        include = _ref.include,
        exclude = _ref.exclude,
        custom = _ref.custom,
        recent = _ref.recent,
        _ref$recentLength = _ref.recentLength,
        recentLength = _ref$recentLength === void 0 ? 20 : _ref$recentLength;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EmojiIndex);

    this._data = Object(_data__WEBPACK_IMPORTED_MODULE_3__["uncompress"])(data); // Callback to exclude specific emojis

    this._emojisFilter = emojisToShowFilter || null; // Categories to include / exclude

    this._include = include || null;
    this._exclude = exclude || null; // Custom emojis

    this._custom = custom || []; // Recent emojis
    // TODO: make parameter configurable

    this._recent = recent || _frequently__WEBPACK_IMPORTED_MODULE_4__["default"].get(recentLength);
    this._emojis = {};
    this._nativeEmojis = {};
    this._emoticons = {};
    this._categories = [];
    this._recentCategory = {
      id: 'recent',
      name: 'Recent',
      emojis: []
    };
    this._customCategory = {
      id: 'custom',
      name: 'Custom',
      emojis: []
    };
    this._searchIndex = {};
    this.buildIndex();
    Object.freeze(this);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EmojiIndex, [{
    key: "buildIndex",
    value: function buildIndex() {
      var _this = this;

      var allCategories = this._data.categories;
      var customIndex = -1;
      var recentIndex = -1;

      if (this._include) {
        // Getting the 'custom' category index
        customIndex = this._include.indexOf('custom'); // Getting the 'recent' category index

        recentIndex = this._include.indexOf('recent'); // Remove categories that are not in the include list.

        allCategories = allCategories.filter(function (item) {
          return _this._include.includes(item.id);
        }); // Sort categories according to the include list.

        allCategories = allCategories.sort(function (a, b) {
          var indexA = _this._include.indexOf(a.id);

          var indexB = _this._include.indexOf(b.id);

          if (indexA < indexB) {
            return -1;
          }

          if (indexA > indexB) {
            return 1;
          }

          return 0;
        });
      }

      allCategories.forEach(function (categoryData) {
        if (!_this.isCategoryNeeded(categoryData.id)) {
          return;
        }

        var category = {
          id: categoryData.id,
          name: categoryData.name,
          emojis: []
        };
        categoryData.emojis.forEach(function (emojiId) {
          var emoji = _this.addEmoji(emojiId);

          if (emoji) {
            category.emojis.push(emoji);
          }
        });

        if (category.emojis.length) {
          _this._categories.push(category);
        }
      });

      if (this.isCategoryNeeded('recent')) {
        if (this._recent.length) {
          this._recent.map(function (id) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = _this._customCategory.emojis[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var customEmoji = _step.value;

                if (customEmoji.id === id) {
                  _this._recentCategory.emojis.push(customEmoji);

                  return;
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

            if (_this.hasEmoji(id)) {
              _this._recentCategory.emojis.push(_this.emoji(id));
            }

            return;
          });
        }
      }

      if (this.isCategoryNeeded('custom')) {
        if (this._custom.length > 0) {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = this._custom[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var customEmoji = _step2.value;
              this.addCustomEmoji(customEmoji);
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
      } // This allows us to order the 'recent' and 'custom' as we want


      if (this.isCategoryNeeded('recent') && this.isCategoryNeeded('custom')) {
        if (recentIndex < customIndex) {
          // Push the recent category to it's index if defined
          this.addCategory(this._recentCategory, recentIndex); // Push the custom category to it's index if defined

          this.addCategory(this._customCategory, customIndex);
        } else {
          // Push the custom category to it's index if defined
          this.addCategory(this._customCategory, customIndex); // Push the recent category to it's index if defined

          this.addCategory(this._recentCategory, recentIndex);
        }
      } else if (this.isCategoryNeeded('recent')) {
        // Push the recent category to it's index if defined
        this.addCategory(this._recentCategory, recentIndex);
      } else if (this.isCategoryNeeded('custom')) {
        // Push the custom category to it's index if defined
        this.addCategory(this._customCategory, customIndex);
      }
    }
    /**
     * Find the emoji from the string
     */

  }, {
    key: "findEmoji",
    value: function findEmoji(emoji, skin) {
      // 1. Parse as :emoji_name:skin-tone-xx:
      var matches = emoji.match(COLONS_REGEX);

      if (matches) {
        emoji = matches[1];

        if (matches[2]) {
          skin = parseInt(matches[2], 10);
        }
      } // 2. Check if the specified emoji is an alias


      if (this._data.aliases.hasOwnProperty(emoji)) {
        emoji = this._data.aliases[emoji];
      } // 3. Check if we have the specified emoji


      if (this._emojis.hasOwnProperty(emoji)) {
        var emojiObject = this._emojis[emoji];

        if (skin) {
          return emojiObject.getSkin(skin);
        }

        return emojiObject;
      } // 4. Check if we have the specified native emoji


      if (this._nativeEmojis.hasOwnProperty(emoji)) {
        return this._nativeEmojis[emoji];
      }

      return null;
    }
  }, {
    key: "categories",
    value: function categories() {
      return this._categories;
    }
  }, {
    key: "emoji",
    value: function emoji(emojiId) {
      if (this._data.aliases.hasOwnProperty(emojiId)) {
        emojiId = this._data.aliases[emojiId];
      }

      var emoji = this._emojis[emojiId];

      if (!emoji) {
        throw new Error('Can not find emoji by id: ' + emojiId);
      }

      return emoji;
    }
  }, {
    key: "firstEmoji",
    value: function firstEmoji() {
      var emoji = this._emojis[Object.keys(this._emojis)[0]];

      if (!emoji) {
        throw new Error('Can not get first emoji');
      }

      return emoji;
    }
  }, {
    key: "hasEmoji",
    value: function hasEmoji(emojiId) {
      if (this._data.aliases.hasOwnProperty(emojiId)) {
        emojiId = this._data.aliases[emojiId];
      }

      if (this._emojis[emojiId]) {
        return true;
      }

      return false;
    }
  }, {
    key: "nativeEmoji",
    value: function nativeEmoji(unicodeEmoji) {
      if (this._nativeEmojis.hasOwnProperty(unicodeEmoji)) {
        return this._nativeEmojis[unicodeEmoji];
      }

      return null;
    }
  }, {
    key: "search",
    value: function search(value, maxResults) {
      var _this2 = this;

      maxResults || (maxResults = 75);

      if (!value.length) {
        return null;
      }

      if (value == '-' || value == '-1') {
        return [this.emoji('-1')];
      }

      var values = value.toLowerCase().split(/[\s|,|\-|_]+/);
      var allResults = [];

      if (values.length > 2) {
        values = [values[0], values[1]];
      }

      allResults = values.map(function (value) {
        // Start searchin in the global list of emojis
        var emojis = _this2._emojis;
        var currentIndex = _this2._searchIndex;
        var length = 0;

        for (var charIndex = 0; charIndex < value.length; charIndex++) {
          var char = value[charIndex];
          length++;
          currentIndex[char] || (currentIndex[char] = {});
          currentIndex = currentIndex[char];

          if (!currentIndex.results) {
            (function () {
              var scores = {};
              currentIndex.results = [];
              currentIndex.emojis = {};

              for (var emojiId in emojis) {
                var emoji = emojis[emojiId]; // search is a comma-separated string with words, related
                // to the emoji, for example:
                // search: "smiley,smiling,face,joy,haha,:d,:),smile,funny,=),=-)",

                var search = emoji._data.search;
                var sub = value.substr(0, length);
                var subIndex = search.indexOf(sub);

                if (subIndex != -1) {
                  var score = subIndex + 1;
                  if (sub == emojiId) score = 0;
                  currentIndex.results.push(emoji);
                  currentIndex.emojis[emojiId] = emoji;
                  scores[emojiId] = score;
                }
              }

              currentIndex.results.sort(function (a, b) {
                var aScore = scores[a.id],
                    bScore = scores[b.id];
                return aScore - bScore;
              });
            })();
          } // continue search in the reduced set of emojis


          emojis = currentIndex.emojis;
        }

        return currentIndex.results; // The "filter" call removes undefined values from allResults
        // array, for example, if we have "test " (with trailing space),
        // we will get "[Array, undefined]" for allResults and after
        // the "filter" call it will turn into "[Array]"
      }).filter(function (a) {
        return a;
      });
      var results = null;

      if (allResults.length > 1) {
        results = _index__WEBPACK_IMPORTED_MODULE_2__["intersect"].apply(null, allResults);
      } else if (allResults.length) {
        results = allResults[0];
      } else {
        results = [];
      }

      if (results && results.length > maxResults) {
        results = results.slice(0, maxResults);
      }

      return results;
    }
  }, {
    key: "addCustomEmoji",
    value: function addCustomEmoji(customEmoji) {
      var emojiData = Object.assign({}, customEmoji, {
        id: customEmoji.short_names[0],
        custom: true
      });

      if (!emojiData.search) {
        emojiData.search = Object(_data__WEBPACK_IMPORTED_MODULE_3__["buildSearch"])(emojiData);
      }

      var emoji = new EmojiData(emojiData);
      this._emojis[emoji.id] = emoji;

      this._customCategory.emojis.push(emoji);

      return emoji;
    }
  }, {
    key: "addEmoji",
    value: function addEmoji(emojiId) {
      var _this3 = this;

      // We expect the correct emoji id that is present in the emojis data.
      var data = this._data.emojis[emojiId];

      if (!this.isEmojiNeeded(data)) {
        return false;
      }

      var emoji = new EmojiData(data);
      this._emojis[emojiId] = emoji;

      if (emoji.native) {
        this._nativeEmojis[emoji.native] = emoji;
      }

      if (emoji._skins) {
        for (var idx in emoji._skins) {
          var skin = emoji._skins[idx];

          if (skin.native) {
            this._nativeEmojis[skin.native] = skin;
          }
        }
      }

      if (emoji.emoticons) {
        emoji.emoticons.forEach(function (emoticon) {
          if (_this3._emoticons[emoticon]) {
            return;
          }

          _this3._emoticons[emoticon] = emojiId;
        });
      }

      return emoji;
    }
  }, {
    key: "addCategory",
    value: function addCategory(category, index) {
      if (category.emojis.length) {
        if (index !== -1) {
          this._categories.splice(index, 0, category);
        } else {
          this._categories.push(category);
        }
      }
    }
    /**
     * Check if we need to include given category.
     *
     * @param {string} category_id - The category id.
     * @return {boolean} - Whether to include the emoji.
     */

  }, {
    key: "isCategoryNeeded",
    value: function isCategoryNeeded(category_id) {
      var isIncluded = this._include && this._include.length ? this._include.indexOf(category_id) > -1 : true;
      var isExcluded = this._exclude && this._exclude.length ? this._exclude.indexOf(category_id) > -1 : false;

      if (!isIncluded || isExcluded) {
        return false;
      }

      return true;
    }
    /**
     * Check if we need to include given emoji.
     *
     * @param {object} emoji - The raw emoji object.
     * @return {boolean} - Whether to include the emoji.
     */

  }, {
    key: "isEmojiNeeded",
    value: function isEmojiNeeded(emoji) {
      if (this._emojisFilter) {
        return this._emojisFilter(emoji);
      }

      return true;
    }
  }]);

  return EmojiIndex;
}();
var EmojiData =
/*#__PURE__*/
function () {
  function EmojiData(data) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EmojiData);

    this._data = Object.assign({}, data);
    this._skins = null;

    if (this._data.skin_variations) {
      this._skins = [];

      for (var skinIdx in SKINS) {
        var skinKey = SKINS[skinIdx];
        var variationData = this._data.skin_variations[skinKey];
        var skinData = Object.assign({}, data);

        for (var k in variationData) {
          skinData[k] = variationData[k];
        }

        delete skinData.skin_variations;
        skinData['skin_tone'] = parseInt(skinIdx) + 1;

        this._skins.push(new EmojiData(skinData));
      }
    }

    this._sanitized = sanitize(this._data);

    for (var key in this._sanitized) {
      this[key] = this._sanitized[key];
    }

    this.short_names = this._data.short_names;
    this.short_name = this._data.short_names[0];
    Object.freeze(this);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EmojiData, [{
    key: "getSkin",
    value: function getSkin(skinIdx) {
      if (skinIdx && skinIdx != 'native' && this._skins) {
        return this._skins[skinIdx - 1];
      }

      return this;
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      var multiply = 100 / SHEET_COLUMNS,
          x = Math.round(multiply * this._data.sheet_x * 100) / 100,
          y = Math.round(multiply * this._data.sheet_y * 100) / 100;
      return "".concat(x, "% ").concat(y, "%");
    }
  }]);

  return EmojiData;
}();
var EmojiView =
/*#__PURE__*/
function () {
  /**
   * emoji - Emoji to display
   * set - string, emoji set name
   * native - boolean, whether to render native emoji
   * fallback - fallback function to render missing emoji, optional
   * emojiTooltip - wether we need to show the emoji tooltip, optional
   * emojiSize - emoji size in pixels, optional
   */
  function EmojiView(emoji, skin, set, native, fallback, emojiTooltip, emojiSize) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EmojiView);

    this._emoji = emoji;
    this._native = native;
    this._skin = skin;
    this._set = set;
    this._fallback = fallback;
    this.canRender = this._canRender();
    this.cssClass = this._cssClass();
    this.cssStyle = this._cssStyle(emojiSize);
    this.content = this._content();
    this.title = emojiTooltip === true ? emoji.short_name : null;
    Object.freeze(this);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EmojiView, [{
    key: "getEmoji",
    value: function getEmoji() {
      return this._emoji.getSkin(this._skin);
    }
  }, {
    key: "_canRender",
    value: function _canRender() {
      return this._isCustom() || this._isNative() || this._hasEmoji() || this._fallback;
    }
  }, {
    key: "_cssClass",
    value: function _cssClass() {
      return ['emoji-set-' + this._set, 'emoji-type-' + this._emojiType()];
    }
  }, {
    key: "_cssStyle",
    value: function _cssStyle(emojiSize) {
      var cssStyle = {};

      if (this._isCustom()) {
        cssStyle = {
          backgroundImage: 'url(' + this.getEmoji()._data.imageUrl + ')',
          backgroundSize: '100%',
          width: emojiSize + 'px',
          height: emojiSize + 'px'
        };
      } else if (this._hasEmoji() && !this._isNative()) {
        cssStyle = {
          backgroundPosition: this.getEmoji().getPosition()
        };
      }

      if (emojiSize) {
        if (this._isNative()) {
          // Set font-size for native emoji.
          cssStyle = Object.assign(cssStyle, {
            // font-size is used for native emoji which we need
            // to scale with 0.8 factor to have them look approximately
            // the same size as image-based emojl.
            fontSize: Math.round(emojiSize * 0.8 * 10) / 10 + 'px'
          });
        } else {
          // Set width/height for image emoji.
          cssStyle = Object.assign(cssStyle, {
            width: emojiSize + 'px',
            height: emojiSize + 'px'
          });
        }
      }

      return cssStyle;
    }
  }, {
    key: "_content",
    value: function _content() {
      if (this._isCustom()) {
        return '';
      }

      if (this._isNative()) {
        return this.getEmoji().native;
      }

      if (this._hasEmoji()) {
        return '';
      }

      return this._fallback ? this._fallback(this.getEmoji()) : null;
    }
  }, {
    key: "_isNative",
    value: function _isNative() {
      return this._native;
    }
  }, {
    key: "_isCustom",
    value: function _isCustom() {
      return this.getEmoji().custom;
    }
  }, {
    key: "_hasEmoji",
    value: function _hasEmoji() {
      if (!this.getEmoji()._data) {
        // Return false if we have no data.
        return false;
      }

      var hasImage = this.getEmoji()._data['has_img_' + this._set];

      if (hasImage === undefined) {
        // If there is no has_img_xxx in the data, we are working with
        // specific data file, like facebook.json, so we assume all
        // emojis are available (the :set setting for picker should
        // match the data file).
        return true;
      } // Otherwise, we are using all.json and can switch between different
      // sets - in this case the `has_img_{set_name}` is a boolean that
      // indicates if there is such image or not for a given set.


      return hasImage;
    }
  }, {
    key: "_emojiType",
    value: function _emojiType() {
      if (this._isCustom()) {
        return 'custom';
      }

      if (this._isNative()) {
        return 'native';
      }

      if (this._hasEmoji()) {
        return 'image';
      }

      return 'fallback';
    }
  }]);

  return EmojiView;
}();
function sanitize(emoji) {
  var name = emoji.name,
      short_names = emoji.short_names,
      skin_tone = emoji.skin_tone,
      skin_variations = emoji.skin_variations,
      emoticons = emoji.emoticons,
      unified = emoji.unified,
      custom = emoji.custom,
      imageUrl = emoji.imageUrl,
      id = emoji.id || short_names[0],
      colons = ":".concat(id, ":");

  if (custom) {
    return {
      id: id,
      name: name,
      colons: colons,
      emoticons: emoticons,
      custom: custom,
      imageUrl: imageUrl
    };
  }

  if (skin_tone) {
    colons += ":skin-tone-".concat(skin_tone, ":");
  }

  return {
    id: id,
    name: name,
    colons: colons,
    emoticons: emoticons,
    unified: unified.toLowerCase(),
    skin: skin_tone || (skin_variations ? 1 : null),
    native: Object(_index__WEBPACK_IMPORTED_MODULE_2__["unifiedToNative"])(unified)
  };
}

/***/ }),

/***/ "./src/utils/frequently.js":
/*!*********************************!*\
  !*** ./src/utils/frequently.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/utils/store.js");

var DEFAULTS = ['+1', 'grinning', 'kissing_heart', 'heart_eyes', 'laughing', 'stuck_out_tongue_winking_eye', 'sweat_smile', 'joy', 'scream', 'disappointed', 'unamused', 'weary', 'sob', 'sunglasses', 'heart', 'poop'];
var frequently, initialized;
var defaults = {};

function init() {
  initialized = true;
  frequently = _store__WEBPACK_IMPORTED_MODULE_0__["default"].get('frequently');
}

function add(emoji) {
  if (!initialized) init();
  var id = emoji.id;
  frequently || (frequently = defaults);
  frequently[id] || (frequently[id] = 0);
  frequently[id] += 1;
  _store__WEBPACK_IMPORTED_MODULE_0__["default"].set('last', id);
  _store__WEBPACK_IMPORTED_MODULE_0__["default"].set('frequently', frequently);
}

function get(maxNumber) {
  if (!initialized) init();

  if (!frequently) {
    defaults = {};
    var result = [];
    var defaultLength = Math.min(maxNumber, DEFAULTS.length);

    for (var i = 0; i < defaultLength; i++) {
      defaults[DEFAULTS[i]] = defaultLength - i;
      result.push(DEFAULTS[i]);
    }

    return result;
  }

  var quantity = maxNumber;
  var frequentlyKeys = [];

  for (var key in frequently) {
    if (frequently.hasOwnProperty(key)) {
      frequentlyKeys.push(key);
    }
  }

  var sorted = frequentlyKeys.sort(function (a, b) {
    return frequently[a] - frequently[b];
  }).reverse();
  var sliced = sorted.slice(0, quantity);
  var last = _store__WEBPACK_IMPORTED_MODULE_0__["default"].get('last');

  if (last && sliced.indexOf(last) == -1) {
    sliced.pop();
    sliced.push(last);
  }

  return sliced;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  add: add,
  get: get
});

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: uniq, intersect, deepMerge, unifiedToNative, measureScrollbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniq", function() { return uniq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersect", function() { return intersect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepMerge", function() { return deepMerge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unifiedToNative", function() { return unifiedToNative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "measureScrollbar", function() { return measureScrollbar; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _polyfills_stringFromCodePoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfills/stringFromCodePoint */ "./src/polyfills/stringFromCodePoint.js");



function unifiedToNative(unified) {
  var unicodes = unified.split('-'),
      codePoints = unicodes.map(function (u) {
    return "0x".concat(u);
  });
  return _polyfills_stringFromCodePoint__WEBPACK_IMPORTED_MODULE_1__["default"].apply(null, codePoints);
}

function uniq(arr) {
  return arr.reduce(function (acc, item) {
    if (acc.indexOf(item) === -1) {
      acc.push(item);
    }

    return acc;
  }, []);
}

function intersect(a, b) {
  var uniqA = uniq(a);
  var uniqB = uniq(b);
  return uniqA.filter(function (item) {
    return uniqB.indexOf(item) >= 0;
  });
}

function deepMerge(a, b) {
  var o = {};

  for (var key in a) {
    var originalValue = a[key],
        value = originalValue;

    if (b.hasOwnProperty(key)) {
      value = b[key];
    }

    if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value) === 'object') {
      value = deepMerge(originalValue, value);
    }

    o[key] = value;
  }

  return o;
} // https://github.com/sonicdoe/measure-scrollbar


function measureScrollbar() {
  if (typeof document == 'undefined') return 0;
  var div = document.createElement('div');
  div.style.width = '100px';
  div.style.height = '100px';
  div.style.overflow = 'scroll';
  div.style.position = 'absolute';
  div.style.top = '-9999px';
  document.body.appendChild(div);
  var scrollbarWidth = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);
  return scrollbarWidth;
}



/***/ }),

/***/ "./src/utils/shared-props.js":
/*!***********************************!*\
  !*** ./src/utils/shared-props.js ***!
  \***********************************/
/*! exports provided: EmojiProps, PickerProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiProps", function() { return EmojiProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickerProps", function() { return PickerProps; });
var EmojiProps = {
  native: {
    type: Boolean,
    default: false
  },
  tooltip: {
    type: Boolean,
    default: false
  },
  fallback: {
    type: Function
  },
  skin: {
    type: Number,
    default: 1
  },
  set: {
    type: String,
    default: 'apple'
  },
  emoji: {
    type: [String, Object],
    required: true
  },
  size: {
    type: Number,
    default: null
  }
};
var PickerProps = {
  perLine: {
    type: Number,
    default: 9
  },
  maxSearchResults: {
    type: Number,
    default: 75
  },
  emojiSize: {
    type: Number,
    default: 24
  },
  title: {
    type: String,
    default: 'Emoji Mart™'
  },
  emoji: {
    type: String,
    default: 'department_store'
  },
  color: {
    type: String,
    default: '#ae65c5'
  },
  set: {
    type: String,
    default: 'apple'
  },
  skin: {
    type: Number,
    default: null
  },
  defaultSkin: {
    type: Number,
    default: 1
  },
  native: {
    type: Boolean,
    default: false
  },
  emojiTooltip: {
    type: Boolean,
    default: false
  },
  autoFocus: {
    type: Boolean,
    default: false
  },
  i18n: {
    type: Object,
    default: function _default() {
      return {};
    }
  },
  showPreview: {
    type: Boolean,
    default: true
  },
  showSearch: {
    type: Boolean,
    default: true
  },
  showCategories: {
    type: Boolean,
    default: true
  },
  showSkinTones: {
    type: Boolean,
    default: true
  },
  infiniteScroll: {
    type: Boolean,
    default: true
  },
  pickerStyles: {
    type: Object,
    default: function _default() {
      return {};
    }
  }
};


/***/ }),

/***/ "./src/utils/store.js":
/*!****************************!*\
  !*** ./src/utils/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var NAMESPACE = 'emoji-mart';
var _JSON = JSON;
var isLocalStorageSupported = typeof window !== 'undefined' && 'localStorage' in window;
var getter;
var setter;

function setHandlers(handlers) {
  handlers || (handlers = {});
  getter = handlers.getter;
  setter = handlers.setter;
}

function setNamespace(namespace) {
  NAMESPACE = namespace;
}

function update(state) {
  for (var key in state) {
    var value = state[key];
    set(key, value);
  }
}

function set(key, value) {
  if (setter) {
    setter(key, value);
  } else {
    if (!isLocalStorageSupported) return;

    try {
      window.localStorage["".concat(NAMESPACE, ".").concat(key)] = _JSON.stringify(value);
    } catch (e) {}
  }
}

function get(key) {
  if (getter) {
    return getter(key);
  } else {
    if (!isLocalStorageSupported) return;

    try {
      var value = window.localStorage["".concat(NAMESPACE, ".").concat(key)];
    } catch (e) {
      return;
    }

    if (value) {
      return JSON.parse(value);
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  update: update,
  set: set,
  get: get,
  setNamespace: setNamespace,
  setHandlers: setHandlers
});

/***/ }),

/***/ "./src/vendor/raf-polyfill.js":
/*!************************************!*\
  !*** ./src/vendor/raf-polyfill.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
// MIT license
var isWindowAvailable = typeof window !== 'undefined';
isWindowAvailable && function () {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];

  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = window.setTimeout(function () {
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };
  if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
    clearTimeout(id);
  };
}();

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FbW9qaU1hcnQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0Vtb2ppTWFydC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvc3JjL2NvbXBvbmVudHMvRW1vamkudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC9zcmMvY29tcG9uZW50cy9QaWNrZXIudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC9zcmMvY29tcG9uZW50cy9hbmNob3JzLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnkudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC9zcmMvY29tcG9uZW50cy9wcmV2aWV3LnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvc3JjL2NvbXBvbmVudHMvc2VhcmNoLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvc3JjL2NvbXBvbmVudHMvc2tpbnMudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL0Vtb2ppLnZ1ZT8wNTQ1Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL1BpY2tlci52dWU/YzNkNyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9hbmNob3JzLnZ1ZT8zNGRhIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2NhdGVnb3J5LnZ1ZT80MjRhIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3ByZXZpZXcudnVlP2Y3MTgiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLnZ1ZT8yZDJiIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NraW5zLnZ1ZT9jMzQ5Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvRW1vamkudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL0Vtb2ppLnZ1ZT83YTM4Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL0Vtb2ppLnZ1ZT85NGFkIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL1BpY2tlci52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvUGlja2VyLnZ1ZT9jODI3Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL1BpY2tlci52dWU/ZjBmMiIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9hbmNob3JzLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9hbmNob3JzLnZ1ZT9hY2NhIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2FuY2hvcnMudnVlPzFiOTgiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnkudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2NhdGVnb3J5LnZ1ZT8yMzk1Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2NhdGVnb3J5LnZ1ZT83M2I1Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3ByZXZpZXcudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3ByZXZpZXcudnVlPzIzYTkiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvcHJldmlldy52dWU/ZTM1OSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9zZWFyY2gudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NlYXJjaC52dWU/MTNmMSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9zZWFyY2gudnVlP2U1ODYiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2tpbnMudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NraW5zLnZ1ZT9kN2M0Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NraW5zLnZ1ZT85OTVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvcG9seWZpbGxzL3N0cmluZ0Zyb21Db2RlUG9pbnQuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3N2Z3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2RhdGEuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2Vtb2ppLWRhdGEuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2ZyZXF1ZW50bHkuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy91dGlscy9zaGFyZWQtcHJvcHMuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL3N0b3JlLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy92ZW5kb3IvcmFmLXBvbHlmaWxsLmpzIl0sIm5hbWVzIjpbIl9TdHJpbmciLCJTdHJpbmciLCJmcm9tQ29kZVBvaW50Iiwic3RyaW5nRnJvbUNvZGVQb2ludCIsIk1BWF9TSVpFIiwiY29kZVVuaXRzIiwiaGlnaFN1cnJvZ2F0ZSIsImxvd1N1cnJvZ2F0ZSIsImluZGV4IiwibGVuZ3RoIiwiYXJndW1lbnRzIiwicmVzdWx0IiwiY29kZVBvaW50IiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJNYXRoIiwiZmxvb3IiLCJSYW5nZUVycm9yIiwicHVzaCIsImZyb21DaGFyQ29kZSIsImFwcGx5IiwiU1ZHcyIsImFjdGl2aXR5IiwiY3VzdG9tIiwiZmxhZ3MiLCJmb29kcyIsIm5hdHVyZSIsIm9iamVjdHMiLCJzbWlsZXlzIiwicGVvcGxlIiwicGxhY2VzIiwicmVjZW50Iiwic3ltYm9scyIsIm1hcHBpbmciLCJuYW1lIiwidW5pZmllZCIsIm5vbl9xdWFsaWZpZWQiLCJoYXNfaW1nX2FwcGxlIiwiaGFzX2ltZ19nb29nbGUiLCJoYXNfaW1nX3R3aXR0ZXIiLCJoYXNfaW1nX2ZhY2Vib29rIiwia2V5d29yZHMiLCJzaGVldCIsImVtb3RpY29ucyIsInRleHQiLCJzaG9ydF9uYW1lcyIsImFkZGVkX2luIiwiYnVpbGRTZWFyY2giLCJlbW9qaSIsInNlYXJjaCIsImFkZFRvU2VhcmNoIiwic3RyaW5ncyIsInNwbGl0IiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsInN0cmluZyIsInMiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJqb2luIiwiY29tcHJlc3MiLCJmaWx0ZXIiLCJzaG9ydF9uYW1lIiwic2hlZXRfeCIsInNoZWV0X3kiLCJwYXJzZUludCIsImtleSIsInZhbHVlIiwiZGVlcEZyZWV6ZSIsIm9iamVjdCIsInByb3BOYW1lcyIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJmcmVlemUiLCJ1bmNvbXByZXNzIiwiZGF0YSIsImNvbXByZXNzZWQiLCJpZCIsImVtb2ppcyIsInVuc2hpZnQiLCJ0b0ZpeGVkIiwibW9kdWxlIiwiZXhwb3J0cyIsIlNIRUVUX0NPTFVNTlMiLCJDT0xPTlNfUkVHRVgiLCJTS0lOUyIsIkVtb2ppSW5kZXgiLCJlbW9qaXNUb1Nob3dGaWx0ZXIiLCJpbmNsdWRlIiwiZXhjbHVkZSIsInJlY2VudExlbmd0aCIsIl9kYXRhIiwiX2Vtb2ppc0ZpbHRlciIsIl9pbmNsdWRlIiwiX2V4Y2x1ZGUiLCJfY3VzdG9tIiwiX3JlY2VudCIsImZyZXF1ZW50bHkiLCJnZXQiLCJfZW1vamlzIiwiX25hdGl2ZUVtb2ppcyIsIl9lbW90aWNvbnMiLCJfY2F0ZWdvcmllcyIsIl9yZWNlbnRDYXRlZ29yeSIsIl9jdXN0b21DYXRlZ29yeSIsIl9zZWFyY2hJbmRleCIsImJ1aWxkSW5kZXgiLCJhbGxDYXRlZ29yaWVzIiwiY2F0ZWdvcmllcyIsImN1c3RvbUluZGV4IiwicmVjZW50SW5kZXgiLCJpdGVtIiwiaW5jbHVkZXMiLCJzb3J0IiwiYSIsImIiLCJpbmRleEEiLCJpbmRleEIiLCJjYXRlZ29yeURhdGEiLCJpc0NhdGVnb3J5TmVlZGVkIiwiY2F0ZWdvcnkiLCJlbW9qaUlkIiwiYWRkRW1vamkiLCJtYXAiLCJjdXN0b21FbW9qaSIsImhhc0Vtb2ppIiwiYWRkQ3VzdG9tRW1vamkiLCJhZGRDYXRlZ29yeSIsInNraW4iLCJtYXRjaGVzIiwibWF0Y2giLCJhbGlhc2VzIiwiaGFzT3duUHJvcGVydHkiLCJlbW9qaU9iamVjdCIsImdldFNraW4iLCJFcnJvciIsImtleXMiLCJ1bmljb2RlRW1vamkiLCJtYXhSZXN1bHRzIiwidmFsdWVzIiwiYWxsUmVzdWx0cyIsImN1cnJlbnRJbmRleCIsImNoYXJJbmRleCIsImNoYXIiLCJyZXN1bHRzIiwic2NvcmVzIiwic3ViIiwic3Vic3RyIiwic3ViSW5kZXgiLCJzY29yZSIsImFTY29yZSIsImJTY29yZSIsImludGVyc2VjdCIsInNsaWNlIiwiZW1vamlEYXRhIiwiYXNzaWduIiwiRW1vamlEYXRhIiwiaXNFbW9qaU5lZWRlZCIsIm5hdGl2ZSIsIl9za2lucyIsImlkeCIsImVtb3RpY29uIiwic3BsaWNlIiwiY2F0ZWdvcnlfaWQiLCJpc0luY2x1ZGVkIiwiaXNFeGNsdWRlZCIsInNraW5fdmFyaWF0aW9ucyIsInNraW5JZHgiLCJza2luS2V5IiwidmFyaWF0aW9uRGF0YSIsInNraW5EYXRhIiwiayIsIl9zYW5pdGl6ZWQiLCJzYW5pdGl6ZSIsIm11bHRpcGx5IiwieCIsInJvdW5kIiwieSIsIkVtb2ppVmlldyIsInNldCIsImZhbGxiYWNrIiwiZW1vamlUb29sdGlwIiwiZW1vamlTaXplIiwiX2Vtb2ppIiwiX25hdGl2ZSIsIl9za2luIiwiX3NldCIsIl9mYWxsYmFjayIsImNhblJlbmRlciIsIl9jYW5SZW5kZXIiLCJjc3NDbGFzcyIsIl9jc3NDbGFzcyIsImNzc1N0eWxlIiwiX2Nzc1N0eWxlIiwiY29udGVudCIsIl9jb250ZW50IiwidGl0bGUiLCJfaXNDdXN0b20iLCJfaXNOYXRpdmUiLCJfaGFzRW1vamkiLCJfZW1vamlUeXBlIiwiYmFja2dyb3VuZEltYWdlIiwiZ2V0RW1vamkiLCJpbWFnZVVybCIsImJhY2tncm91bmRTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsImZvbnRTaXplIiwiaGFzSW1hZ2UiLCJ1bmRlZmluZWQiLCJza2luX3RvbmUiLCJjb2xvbnMiLCJ1bmlmaWVkVG9OYXRpdmUiLCJERUZBVUxUUyIsImluaXRpYWxpemVkIiwiZGVmYXVsdHMiLCJpbml0Iiwic3RvcmUiLCJhZGQiLCJtYXhOdW1iZXIiLCJkZWZhdWx0TGVuZ3RoIiwibWluIiwiaSIsInF1YW50aXR5IiwiZnJlcXVlbnRseUtleXMiLCJzb3J0ZWQiLCJyZXZlcnNlIiwic2xpY2VkIiwibGFzdCIsInBvcCIsInVuaWNvZGVzIiwiY29kZVBvaW50cyIsInUiLCJ1bmlxIiwiYXJyIiwicmVkdWNlIiwiYWNjIiwidW5pcUEiLCJ1bmlxQiIsImRlZXBNZXJnZSIsIm8iLCJvcmlnaW5hbFZhbHVlIiwibWVhc3VyZVNjcm9sbGJhciIsImRvY3VtZW50IiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwib3ZlcmZsb3ciLCJwb3NpdGlvbiIsInRvcCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNjcm9sbGJhcldpZHRoIiwib2Zmc2V0V2lkdGgiLCJjbGllbnRXaWR0aCIsInJlbW92ZUNoaWxkIiwiRW1vamlQcm9wcyIsInR5cGUiLCJCb29sZWFuIiwiZGVmYXVsdCIsInRvb2x0aXAiLCJGdW5jdGlvbiIsInJlcXVpcmVkIiwic2l6ZSIsIlBpY2tlclByb3BzIiwicGVyTGluZSIsIm1heFNlYXJjaFJlc3VsdHMiLCJjb2xvciIsImRlZmF1bHRTa2luIiwiYXV0b0ZvY3VzIiwiaTE4biIsInNob3dQcmV2aWV3Iiwic2hvd1NlYXJjaCIsInNob3dDYXRlZ29yaWVzIiwic2hvd1NraW5Ub25lcyIsImluZmluaXRlU2Nyb2xsIiwicGlja2VyU3R5bGVzIiwiTkFNRVNQQUNFIiwiX0pTT04iLCJKU09OIiwiaXNMb2NhbFN0b3JhZ2VTdXBwb3J0ZWQiLCJ3aW5kb3ciLCJnZXR0ZXIiLCJzZXR0ZXIiLCJzZXRIYW5kbGVycyIsImhhbmRsZXJzIiwic2V0TmFtZXNwYWNlIiwibmFtZXNwYWNlIiwidXBkYXRlIiwic3RhdGUiLCJsb2NhbFN0b3JhZ2UiLCJzdHJpbmdpZnkiLCJlIiwicGFyc2UiLCJpc1dpbmRvd0F2YWlsYWJsZSIsImxhc3RUaW1lIiwidmVuZG9ycyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiY2FsbGJhY2siLCJlbGVtZW50IiwiY3VyclRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsInRpbWVUb0NhbGwiLCJtYXgiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVB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bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRW1vamlNYXJ0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkVtb2ppTWFydFwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnIyW2ldID0gYXJyW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBhcnIyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkOyIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuL2RlZmluZVByb3BlcnR5XCIpO1xuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcblxuICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFNwcmVhZDsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWRcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7IiwiZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2YyKG9iaik7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mMihTeW1ib2wuaXRlcmF0b3IpID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiPHRlbXBsYXRlPlxyXG4gIDxzcGFuXHJcbiAgICB2LWlmPVwidmlldy5jYW5SZW5kZXJcIlxyXG4gICAgOnRpdGxlPVwidmlldy50aXRsZVwiXHJcbiAgICA6ZGF0YS10aXRsZT1cInRpdGxlXCJcclxuICAgIGNsYXNzPVwiZW1vamktbWFydC1lbW9qaVwiXHJcbiAgICBAbW91c2VlbnRlcj1cIm9uTW91c2VFbnRlclwiXHJcbiAgICBAbW91c2VsZWF2ZT1cIm9uTW91c2VMZWF2ZVwiXHJcbiAgICBAY2xpY2s9XCJvbkNsaWNrXCJcclxuICA+XHJcbiAgICA8c3BhbiA6Y2xhc3M9XCJ2aWV3LmNzc0NsYXNzXCIgOnN0eWxlPVwidmlldy5jc3NTdHlsZVwiPnt7XHJcbiAgICAgIHZpZXcuY29udGVudFxyXG4gICAgfX08L3NwYW4+XHJcbiAgPC9zcGFuPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHsgRW1vamlQcm9wcyB9IGZyb20gJy4uL3V0aWxzL3NoYXJlZC1wcm9wcydcclxuaW1wb3J0IHsgRW1vamlWaWV3IH0gZnJvbSAnLi4vdXRpbHMvZW1vamktZGF0YSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczoge1xyXG4gICAgLi4uRW1vamlQcm9wcyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgdmlldygpIHtcclxuICAgICAgcmV0dXJuIG5ldyBFbW9qaVZpZXcoXHJcbiAgICAgICAgdGhpcy5lbW9qaU9iamVjdCxcclxuICAgICAgICB0aGlzLnNraW4sXHJcbiAgICAgICAgdGhpcy5zZXQsXHJcbiAgICAgICAgdGhpcy5uYXRpdmUsXHJcbiAgICAgICAgdGhpcy5mYWxsYmFjayxcclxuICAgICAgICB0aGlzLnRvb2x0aXAsXHJcbiAgICAgICAgdGhpcy5zaXplLFxyXG4gICAgICApXHJcbiAgICB9LFxyXG4gICAgc2FuaXRpemVkRGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZW1vamlPYmplY3QuX3Nhbml0aXplZFxyXG4gICAgfSxcclxuICAgIHRpdGxlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy50b29sdGlwID8gdGhpcy5lbW9qaU9iamVjdC5zaG9ydF9uYW1lIDogbnVsbFxyXG4gICAgfSxcclxuICAgIGVtb2ppT2JqZWN0KCkge1xyXG4gICAgICBpZiAodHlwZW9mIHRoaXMuZW1vamkgPT0gJ3N0cmluZycpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmZpbmRFbW9qaSh0aGlzLmVtb2ppKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVtb2ppXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSxcclxuICBjcmVhdGVkKCkge30sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgb25DbGljaygpIHtcclxuICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCB0aGlzLmVtb2ppT2JqZWN0KVxyXG4gICAgfSxcclxuICAgIG9uTW91c2VFbnRlcigpIHtcclxuICAgICAgdGhpcy4kZW1pdCgnbW91c2VlbnRlcicsIHRoaXMuZW1vamlPYmplY3QpXHJcbiAgICB9LFxyXG4gICAgb25Nb3VzZUxlYXZlKCkge1xyXG4gICAgICB0aGlzLiRlbWl0KCdtb3VzZWxlYXZlJywgdGhpcy5lbW9qaU9iamVjdClcclxuICAgIH0sXHJcbiAgfSxcclxufVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0IGVtb2ppLW1hcnQtc3RhdGljXCIgOnN0eWxlPVwiY3VzdG9tU3R5bGVzXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1iYXIgZW1vamktbWFydC1iYXItYW5jaG9yc1wiIHYtaWY9XCJzaG93Q2F0ZWdvcmllc1wiPlxyXG4gICAgICA8YW5jaG9yc1xyXG4gICAgICAgIDpkYXRhPVwiZGF0YVwiXHJcbiAgICAgICAgOmkxOG49XCJtZXJnZWRJMThuXCJcclxuICAgICAgICA6Y29sb3I9XCJjb2xvclwiXHJcbiAgICAgICAgOmNhdGVnb3JpZXM9XCJjYXRlZ29yaWVzXCJcclxuICAgICAgICA6YWN0aXZlLWNhdGVnb3J5PVwiYWN0aXZlQ2F0ZWdvcnlcIlxyXG4gICAgICAgIEBjbGljaz1cIm9uQW5jaG9yQ2xpY2tcIlxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPHNsb3RcclxuICAgICAgbmFtZT1cInNlYXJjaFRlbXBsYXRlXCJcclxuICAgICAgOmRhdGE9XCJkYXRhXCJcclxuICAgICAgOmkxOG49XCJpMThuXCJcclxuICAgICAgOmF1dG8tZm9jdXM9XCJhdXRvRm9jdXNcIlxyXG4gICAgICA6b24tc2VhcmNoPVwib25TZWFyY2hcIlxyXG4gICAgPlxyXG4gICAgICA8c2VhcmNoXHJcbiAgICAgICAgdi1pZj1cInNob3dTZWFyY2hcIlxyXG4gICAgICAgIHJlZj1cInNlYXJjaFwiXHJcbiAgICAgICAgOmRhdGE9XCJkYXRhXCJcclxuICAgICAgICA6aTE4bj1cIm1lcmdlZEkxOG5cIlxyXG4gICAgICAgIDphdXRvLWZvY3VzPVwiYXV0b0ZvY3VzXCJcclxuICAgICAgICA6b24tc2VhcmNoPVwib25TZWFyY2hcIlxyXG4gICAgICAgIEBzZWFyY2g9XCJvblNlYXJjaFwiXHJcbiAgICAgIC8+XHJcbiAgICA8L3Nsb3Q+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtc2Nyb2xsXCIgcmVmPVwic2Nyb2xsXCIgQHNjcm9sbD1cIm9uU2Nyb2xsXCI+XHJcbiAgICAgIDxjYXRlZ29yeVxyXG4gICAgICAgIHYtc2hvdz1cInNlYXJjaEVtb2ppc1wiXHJcbiAgICAgICAgOmRhdGE9XCJkYXRhXCJcclxuICAgICAgICA6aTE4bj1cIm1lcmdlZEkxOG5cIlxyXG4gICAgICAgIGlkPVwic2VhcmNoXCJcclxuICAgICAgICBuYW1lPVwiU2VhcmNoXCJcclxuICAgICAgICA6ZW1vamlzPVwic2VhcmNoRW1vamlzXCJcclxuICAgICAgICA6ZW1vamktcHJvcHM9XCJlbW9qaVByb3BzXCJcclxuICAgICAgLz5cclxuICAgICAgPGNhdGVnb3J5XHJcbiAgICAgICAgdi1mb3I9XCIoY2F0ZWdvcnksIGlkeCkgaW4gZmlsdGVyZWRDYXRlZ29yaWVzXCJcclxuICAgICAgICB2LXNob3c9XCIhc2VhcmNoRW1vamlzICYmIChpbmZpbml0ZVNjcm9sbCB8fCBjYXRlZ29yeSA9PSBhY3RpdmVDYXRlZ29yeSlcIlxyXG4gICAgICAgIDpyZWY9XCInY2F0ZWdvcmllc18nICsgaWR4XCJcclxuICAgICAgICA6a2V5PVwiY2F0ZWdvcnkuaWRcIlxyXG4gICAgICAgIDpkYXRhPVwiZGF0YVwiXHJcbiAgICAgICAgOmkxOG49XCJtZXJnZWRJMThuXCJcclxuICAgICAgICA6aWQ9XCJjYXRlZ29yeS5pZFwiXHJcbiAgICAgICAgOm5hbWU9XCJjYXRlZ29yeS5uYW1lXCJcclxuICAgICAgICA6ZW1vamlzPVwiY2F0ZWdvcnkuZW1vamlzXCJcclxuICAgICAgICA6ZW1vamktcHJvcHM9XCJlbW9qaVByb3BzXCJcclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxzbG90XHJcbiAgICAgIG5hbWU9XCJwcmV2aWV3VGVtcGxhdGVcIlxyXG4gICAgICA6ZGF0YT1cImRhdGFcIlxyXG4gICAgICA6dGl0bGU9XCJ0aXRsZVwiXHJcbiAgICAgIDplbW9qaT1cInByZXZpZXdFbW9qaVwiXHJcbiAgICAgIDppZGxlLWVtb2ppPVwiaWRsZUVtb2ppXCJcclxuICAgICAgOnNob3ctc2tpbi10b25lcz1cInNob3dTa2luVG9uZXNcIlxyXG4gICAgICA6ZW1vamktcHJvcHM9XCJlbW9qaVByb3BzXCJcclxuICAgICAgOnNraW4tcHJvcHM9XCJza2luUHJvcHNcIlxyXG4gICAgICA6b24tc2tpbi1jaGFuZ2U9XCJvblNraW5DaGFuZ2VcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1iYXIgZW1vamktbWFydC1iYXItcHJldmlld1wiIHYtaWY9XCJzaG93UHJldmlld1wiPlxyXG4gICAgICAgIDxwcmV2aWV3XHJcbiAgICAgICAgICA6ZGF0YT1cImRhdGFcIlxyXG4gICAgICAgICAgOnRpdGxlPVwidGl0bGVcIlxyXG4gICAgICAgICAgOmVtb2ppPVwicHJldmlld0Vtb2ppXCJcclxuICAgICAgICAgIDppZGxlLWVtb2ppPVwiaWRsZUVtb2ppXCJcclxuICAgICAgICAgIDpzaG93LXNraW4tdG9uZXM9XCJzaG93U2tpblRvbmVzXCJcclxuICAgICAgICAgIDplbW9qaS1wcm9wcz1cImVtb2ppUHJvcHNcIlxyXG4gICAgICAgICAgOnNraW4tcHJvcHM9XCJza2luUHJvcHNcIlxyXG4gICAgICAgICAgOm9uLXNraW4tY2hhbmdlPVwib25Ta2luQ2hhbmdlXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2xvdD5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCAnLi4vdmVuZG9yL3JhZi1wb2x5ZmlsbCdcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3V0aWxzL3N0b3JlJ1xyXG5pbXBvcnQgZnJlcXVlbnRseSBmcm9tICcuLi91dGlscy9mcmVxdWVudGx5J1xyXG5pbXBvcnQgeyBkZWVwTWVyZ2UsIG1lYXN1cmVTY3JvbGxiYXIgfSBmcm9tICcuLi91dGlscydcclxuaW1wb3J0IHsgUGlja2VyUHJvcHMgfSBmcm9tICcuLi91dGlscy9zaGFyZWQtcHJvcHMnXHJcbmltcG9ydCBBbmNob3JzIGZyb20gJy4vYW5jaG9ycydcclxuaW1wb3J0IENhdGVnb3J5IGZyb20gJy4vY2F0ZWdvcnknXHJcbmltcG9ydCBQcmV2aWV3IGZyb20gJy4vcHJldmlldydcclxuaW1wb3J0IFNlYXJjaCBmcm9tICcuL3NlYXJjaCdcclxuXHJcbmNvbnN0IEkxOE4gPSB7XHJcbiAgc2VhcmNoOiAnU2VhcmNoJyxcclxuICBub3Rmb3VuZDogJ05vIEVtb2ppIEZvdW5kJyxcclxuICBjYXRlZ29yaWVzOiB7XHJcbiAgICBzZWFyY2g6ICdTZWFyY2ggUmVzdWx0cycsXHJcbiAgICByZWNlbnQ6ICdGcmVxdWVudGx5IFVzZWQnLFxyXG4gICAgc21pbGV5czogJ1NtaWxleXMgJiBFbW90aW9ucycsXHJcbiAgICBwZW9wbGU6ICdQZW9wbGUgJiBCb2R5JyxcclxuICAgIG5hdHVyZTogJ0FuaW1hbHMgJiBOYXR1cmUnLFxyXG4gICAgZm9vZHM6ICdGb29kICYgRHJpbmsnLFxyXG4gICAgYWN0aXZpdHk6ICdBY3Rpdml0eScsXHJcbiAgICBwbGFjZXM6ICdUcmF2ZWwgJiBQbGFjZXMnLFxyXG4gICAgb2JqZWN0czogJ09iamVjdHMnLFxyXG4gICAgc3ltYm9sczogJ1N5bWJvbHMnLFxyXG4gICAgZmxhZ3M6ICdGbGFncycsXHJcbiAgICBjdXN0b206ICdDdXN0b20nLFxyXG4gIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczoge1xyXG4gICAgLi4uUGlja2VyUHJvcHMsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGFjdGl2ZVNraW46IHRoaXMuc2tpbiB8fCBzdG9yZS5nZXQoJ3NraW4nKSB8fCB0aGlzLmRlZmF1bHRTa2luLFxyXG4gICAgICBhY3RpdmVDYXRlZ29yeTogbnVsbCxcclxuICAgICAgcHJldmlld0Vtb2ppOiBudWxsLFxyXG4gICAgICBzZWFyY2hFbW9qaXM6IG51bGwsXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgY3VzdG9tU3R5bGVzKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHdpZHRoOiB0aGlzLmNhbGN1bGF0ZVdpZHRoICsgJ3B4JyxcclxuICAgICAgICAuLi50aGlzLnBpY2tlclN0eWxlcyxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGVtb2ppUHJvcHMoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbmF0aXZlOiB0aGlzLm5hdGl2ZSxcclxuICAgICAgICBza2luOiB0aGlzLmFjdGl2ZVNraW4sXHJcbiAgICAgICAgc2V0OiB0aGlzLnNldCxcclxuICAgICAgICBlbW9qaVRvb2x0aXA6IHRoaXMuZW1vamlUb29sdGlwLFxyXG4gICAgICAgIGVtb2ppU2l6ZTogdGhpcy5lbW9qaVNpemUsXHJcbiAgICAgICAgb25FbnRlcjogdGhpcy5vbkVtb2ppRW50ZXIuYmluZCh0aGlzKSxcclxuICAgICAgICBvbkxlYXZlOiB0aGlzLm9uRW1vamlMZWF2ZS5iaW5kKHRoaXMpLFxyXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMub25FbW9qaUNsaWNrLmJpbmQodGhpcyksXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBza2luUHJvcHMoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc2tpbjogdGhpcy5hY3RpdmVTa2luLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY2FsY3VsYXRlV2lkdGgoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnBlckxpbmUgKiAodGhpcy5lbW9qaVNpemUgKyAxMikgKyAxMiArIDIgKyBtZWFzdXJlU2Nyb2xsYmFyKClcclxuICAgIH0sXHJcbiAgICBmaWx0ZXJlZENhdGVnb3JpZXMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNhdGVnb3JpZXMuZmlsdGVyKChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAgIGxldCBoYXNFbW9qaXMgPSBjYXRlZ29yeS5lbW9qaXMubGVuZ3RoID4gMFxyXG4gICAgICAgIHJldHVybiBoYXNFbW9qaXNcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBtZXJnZWRJMThuKCkge1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZShkZWVwTWVyZ2UoSTE4TiwgdGhpcy5pMThuKSlcclxuICAgIH0sXHJcbiAgICBpZGxlRW1vamkoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5lbW9qaSh0aGlzLmVtb2ppKVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICAgICdEZWZhdWx0IHByZXZpZXcgZW1vamkgYCcgK1xyXG4gICAgICAgICAgICB0aGlzLmVtb2ppICtcclxuICAgICAgICAgICAgJ2AgaXMgbm90IGF2YWlsYWJsZSwgY2hlY2sgdGhlIFBpY2tlciBgZW1vamlgIHByb3BlcnR5JyxcclxuICAgICAgICApXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlKVxyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuZmlyc3RFbW9qaSgpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSxcclxuICBjcmVhdGVkKCkge1xyXG4gICAgdGhpcy5jYXRlZ29yaWVzID0gW11cclxuICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YS5jYXRlZ29yaWVzKCkpXHJcbiAgICB0aGlzLmNhdGVnb3JpZXMucHVzaCguLi50aGlzLmRhdGEuY2F0ZWdvcmllcygpKVxyXG4gICAgdGhpcy5jYXRlZ29yaWVzID0gdGhpcy5jYXRlZ29yaWVzLmZpbHRlcigoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgcmV0dXJuIGNhdGVnb3J5LmVtb2ppcy5sZW5ndGggPiAwXHJcbiAgICB9KVxyXG4gICAgdGhpcy5jYXRlZ29yaWVzWzBdLmZpcnN0ID0gdHJ1ZVxyXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzLmNhdGVnb3JpZXMpXHJcbiAgICB0aGlzLmFjdGl2ZUNhdGVnb3J5ID0gdGhpcy5jYXRlZ29yaWVzWzBdXHJcbiAgICB0aGlzLnNraXBTY3JvbGxVcGRhdGUgPSBmYWxzZVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgb25TY3JvbGwoKSB7XHJcbiAgICAgIGlmICh0aGlzLmluZmluaXRlU2Nyb2xsICYmICF0aGlzLndhaXRpbmdGb3JQYWludCkge1xyXG4gICAgICAgIHRoaXMud2FpdGluZ0ZvclBhaW50ID0gdHJ1ZVxyXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5vblNjcm9sbFBhaW50LmJpbmQodGhpcykpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvblNjcm9sbFBhaW50KCkge1xyXG4gICAgICB0aGlzLndhaXRpbmdGb3JQYWludCA9IGZhbHNlXHJcbiAgICAgIGxldCBzY3JvbGxUb3AgPSB0aGlzLiRyZWZzLnNjcm9sbC5zY3JvbGxUb3BcclxuICAgICAgbGV0IGFjdGl2ZUNhdGVnb3J5ID0gdGhpcy5maWx0ZXJlZENhdGVnb3JpZXNbMF1cclxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBsZXQgY2F0ZWdvcnkgPSB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllc1tpXVxyXG4gICAgICAgIGxldCBjb21wb25lbnQgPSB0aGlzLmdldENhdGVnb3J5Q29tcG9uZW50KGkpXHJcbiAgICAgICAgLy8gVGhlIGAtNTBgIG9mZnNldCBzd2l0Y2hlcyBhY3RpdmUgY2F0ZWdvcnkgKHNlbGVjdGVkIGluIHRoZVxyXG4gICAgICAgIC8vIGFuY2hvcnMgYmFyKSBhIGJpdCBlYXJpbGVyLCBiZWZvcmUgaXQgYWN0dWFsbHkgcmVhY2hlcyB0aGUgdG9wLlxyXG4gICAgICAgIGlmIChjb21wb25lbnQgJiYgY29tcG9uZW50LiRlbC5vZmZzZXRUb3AgLSA1MCA+IHNjcm9sbFRvcCkge1xyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgICAgYWN0aXZlQ2F0ZWdvcnkgPSBjYXRlZ29yeVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSBhY3RpdmVDYXRlZ29yeVxyXG4gICAgfSxcclxuICAgIG9uQW5jaG9yQ2xpY2soY2F0ZWdvcnkpIHtcclxuICAgICAgaWYgKHRoaXMuc2VhcmNoRW1vamlzKSB7XHJcbiAgICAgICAgLy8gTm8gY2F0ZWdvcmllcyBhcmUgc2hvd24gd2hlbiBzZWFyY2ggaXMgYWN0aXZlLlxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGxldCBpID0gdGhpcy5maWx0ZXJlZENhdGVnb3JpZXMuaW5kZXhPZihjYXRlZ29yeSlcclxuICAgICAgbGV0IGNvbXBvbmVudCA9IHRoaXMuZ2V0Q2F0ZWdvcnlDb21wb25lbnQoaSlcclxuICAgICAgbGV0IHNjcm9sbFRvQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChjb21wb25lbnQpIHtcclxuICAgICAgICAgIGxldCB0b3AgPSBjb21wb25lbnQuJGVsLm9mZnNldFRvcFxyXG4gICAgICAgICAgaWYgKGNhdGVnb3J5LmZpcnN0KSB7XHJcbiAgICAgICAgICAgIHRvcCA9IDBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuJHJlZnMuc2Nyb2xsLnNjcm9sbFRvcCA9IHRvcFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5pbmZpbml0ZVNjcm9sbCkge1xyXG4gICAgICAgIHNjcm9sbFRvQ29tcG9uZW50KClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZUNhdGVnb3J5ID0gdGhpcy5maWx0ZXJlZENhdGVnb3JpZXNbaV1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uU2VhcmNoKHZhbHVlKSB7XHJcbiAgICAgIGxldCBlbW9qaXMgPSB0aGlzLmRhdGEuc2VhcmNoKHZhbHVlLCB0aGlzLm1heFNlYXJjaFJlc3VsdHMpXHJcbiAgICAgIHRoaXMuc2VhcmNoRW1vamlzID0gZW1vamlzXHJcbiAgICB9LFxyXG4gICAgb25FbW9qaUVudGVyKGVtb2ppKSB7XHJcbiAgICAgIHRoaXMucHJldmlld0Vtb2ppID0gZW1vamlcclxuICAgIH0sXHJcbiAgICBvbkVtb2ppTGVhdmUoZW1vamkpIHtcclxuICAgICAgdGhpcy5wcmV2aWV3RW1vamkgPSBudWxsXHJcbiAgICB9LFxyXG4gICAgb25FbW9qaUNsaWNrKGVtb2ppKSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ3NlbGVjdCcsIGVtb2ppKVxyXG4gICAgICBmcmVxdWVudGx5LmFkZChlbW9qaSlcclxuICAgIH0sXHJcbiAgICBvblNraW5DaGFuZ2Uoc2tpbikge1xyXG4gICAgICB0aGlzLmFjdGl2ZVNraW4gPSBza2luXHJcbiAgICAgIHN0b3JlLnVwZGF0ZSh7IHNraW4gfSlcclxuXHJcbiAgICAgIHRoaXMuJGVtaXQoJ3NraW4tY2hhbmdlJywgc2tpbilcclxuICAgIH0sXHJcbiAgICBnZXRDYXRlZ29yeUNvbXBvbmVudChpbmRleCkge1xyXG4gICAgICBsZXQgY29tcG9uZW50ID0gdGhpcy4kcmVmc1snY2F0ZWdvcmllc18nICsgaW5kZXhdXHJcbiAgICAgIGlmIChjb21wb25lbnQgJiYgJzAnIGluIGNvbXBvbmVudCkge1xyXG4gICAgICAgIC8vIFZ1ZSAyIGhhcyAkcmVmcyB1bmRlciB2LWZvciBhcyBhbiBhcnJheS5cclxuICAgICAgICByZXR1cm4gY29tcG9uZW50WycwJ11cclxuICAgICAgfVxyXG4gICAgICAvLyBWdWUgMyBkb2VzIG5vdCBzdXBwb3J0ICRyZWZzIGFzIGFycmF5LlxyXG4gICAgICByZXR1cm4gY29tcG9uZW50XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgQW5jaG9ycyxcclxuICAgIENhdGVnb3J5LFxyXG4gICAgUHJldmlldyxcclxuICAgIFNlYXJjaCxcclxuICB9LFxyXG59XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcblxyXG48ZGl2IGNsYXNzPVwiZW1vamktbWFydC1hbmNob3JzXCI+XHJcbiAgPHNwYW5cclxuICAgIHYtZm9yPVwiY2F0ZWdvcnkgaW4gY2F0ZWdvcmllc1wiXHJcbiAgICA6a2V5PVwiY2F0ZWdvcnkuaWRcIlxyXG4gICAgOmNsYXNzPVwieyAnZW1vamktbWFydC1hbmNob3InOiB0cnVlLCAnZW1vamktbWFydC1hbmNob3Itc2VsZWN0ZWQnOiBjYXRlZ29yeS5pZCA9PSBhY3RpdmVDYXRlZ29yeS5pZCB9XCJcclxuICAgIDpzdHlsZT1cInsgJ2NvbG9yJzogKGNhdGVnb3J5LmlkID09IGFjdGl2ZUNhdGVnb3J5LmlkID8gY29sb3IgOiAnJykgfVwiXHJcbiAgICA6ZGF0YS10aXRsZT1cImkxOG4uY2F0ZWdvcmllc1tjYXRlZ29yeS5pZF1cIlxyXG4gICAgQGNsaWNrPVwiJGVtaXQoJ2NsaWNrJywgY2F0ZWdvcnkpXCI+XHJcbiAgICA8ZGl2IHYtaHRtbD1cInN2Z3NbY2F0ZWdvcnkuaWRdXCIvPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJlbW9qaS1tYXJ0LWFuY2hvci1iYXJcIiA6c3R5bGU9XCJ7IGJhY2tncm91bmRDb2xvcjogY29sb3IgfVwiPjwvc3Bhbj5cclxuICA8L3NwYW4+XHJcbjwvZGl2PlxyXG5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG5pbXBvcnQgc3ZncyBmcm9tICcuLi9zdmdzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByb3BzOiB7XHJcbiAgICBpMThuOiB7XHJcbiAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBjb2xvcjoge1xyXG4gICAgICB0eXBlOiBTdHJpbmdcclxuICAgIH0sXHJcbiAgICBjYXRlZ29yaWVzOiB7XHJcbiAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGFjdGl2ZUNhdGVnb3J5OiB7XHJcbiAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgZGVmYXVsdCgpIHtcclxuICAgICAgICByZXR1cm4ge31cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY3JlYXRlZCgpIHtcclxuICAgIHRoaXMuc3ZncyA9IHN2Z3NcclxuICB9XHJcbn1cclxuXHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcblxyXG48ZGl2IDpjbGFzcz1cInsgJ2Vtb2ppLW1hcnQtY2F0ZWdvcnknOiB0cnVlLCAnZW1vamktbWFydC1uby1yZXN1bHRzJzogIWhhc1Jlc3VsdHMgfVwiIHYtaWY9XCJpc1Zpc2libGUgJiYgKGlzU2VhcmNoIHx8IGhhc1Jlc3VsdHMpXCI+XHJcbiAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtY2F0ZWdvcnktbGFiZWxcIj5cclxuICAgIDxzcGFuPnt7IGkxOG4uY2F0ZWdvcmllc1tpZF0gfX08L3NwYW4+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDx0ZW1wbGF0ZSB2LWZvcj1cInsgZW1vamlPYmplY3QsIGVtb2ppVmlld30gaW4gZW1vamlPYmplY3RzXCI+XHJcbiAgICA8c3BhblxyXG4gICAgICB2LWlmPVwiZW1vamlWaWV3LmNhblJlbmRlclwiXHJcbiAgICAgIDpkYXRhLXRpdGxlPVwiZW1vamlPYmplY3Quc2hvcnRfbmFtZVwiXHJcbiAgICAgIDp0aXRsZT1cImVtb2ppVmlldy50aXRsZVwiXHJcbiAgICAgIGNsYXNzPVwiZW1vamktbWFydC1lbW9qaVwiXHJcbiAgICAgIEBtb3VzZWVudGVyPVwiZW1vamlQcm9wcy5vbkVudGVyKGVtb2ppVmlldy5nZXRFbW9qaSgpKVwiXHJcbiAgICAgIEBtb3VzZWxlYXZlPVwiZW1vamlQcm9wcy5vbkxlYXZlKGVtb2ppVmlldy5nZXRFbW9qaSgpKVwiXHJcbiAgICAgIEBjbGljaz1cImVtb2ppUHJvcHMub25DbGljayhlbW9qaVZpZXcuZ2V0RW1vamkoKSlcIj5cclxuICAgICAgPHNwYW4gIDpjbGFzcz1cImVtb2ppVmlldy5jc3NDbGFzc1wiIDpzdHlsZT1cImVtb2ppVmlldy5jc3NTdHlsZVwiPnt7ZW1vamlWaWV3LmNvbnRlbnR9fTwvc3Bhbj5cclxuICAgIDwvc3Bhbj5cclxuICA8L3RlbXBsYXRlPlxyXG5cclxuICA8ZGl2IHYtaWY9XCIhaGFzUmVzdWx0c1wiPlxyXG4gICAgPGVtb2ppXHJcbiAgICAgIDpkYXRhPVwiZGF0YVwiXHJcbiAgICAgIGVtb2ppPVwic2xldXRoX29yX3NweVwiXHJcbiAgICAgIDpuYXRpdmU9XCJlbW9qaVByb3BzLm5hdGl2ZVwiXHJcbiAgICAgIDpza2luPVwiZW1vamlQcm9wcy5za2luXCJcclxuICAgICAgOnNldD1cImVtb2ppUHJvcHMuc2V0XCJcclxuICAgIC8+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1uby1yZXN1bHRzLWxhYmVsXCI+e3sgaTE4bi5ub3Rmb3VuZCB9fTwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuaW1wb3J0IHsgRW1vamlWaWV3IH0gZnJvbSAnLi4vdXRpbHMvZW1vamktZGF0YSdcclxuaW1wb3J0IEVtb2ppIGZyb20gJy4vRW1vamknXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByb3BzOiB7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBpMThuOiB7XHJcbiAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBpZDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgbmFtZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZW1vamlzOiB7XHJcbiAgICAgIHR5cGU6IEFycmF5XHJcbiAgICB9LFxyXG4gICAgZW1vamlQcm9wczoge1xyXG4gICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgaXNWaXNpYmxlKCkge1xyXG4gICAgICByZXR1cm4gISF0aGlzLmVtb2ppc1xyXG4gICAgfSxcclxuICAgIGlzU2VhcmNoKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5uYW1lID09ICdTZWFyY2gnXHJcbiAgICB9LFxyXG4gICAgaGFzUmVzdWx0cygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZW1vamlzLmxlbmd0aCA+IDBcclxuICAgIH0sXHJcbiAgICBlbW9qaU9iamVjdHMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmVtb2ppcy5tYXAoKGVtb2ppKSA9PiB7XHJcbiAgICAgICAgICBsZXQgZW1vamlPYmplY3QgPSBlbW9qaVxyXG4gICAgICAgICAgbGV0IGVtb2ppVmlldyA9IG5ldyBFbW9qaVZpZXcoXHJcbiAgICAgICAgICAgIGVtb2ppLFxyXG4gICAgICAgICAgICB0aGlzLmVtb2ppUHJvcHMuc2tpbixcclxuICAgICAgICAgICAgdGhpcy5lbW9qaVByb3BzLnNldCxcclxuICAgICAgICAgICAgdGhpcy5lbW9qaVByb3BzLm5hdGl2ZSxcclxuICAgICAgICAgICAgdGhpcy5lbW9qaVByb3BzLmZhbGxiYWNrLFxyXG4gICAgICAgICAgICB0aGlzLmVtb2ppUHJvcHMuZW1vamlUb29sdGlwLFxyXG4gICAgICAgICAgICB0aGlzLmVtb2ppUHJvcHMuZW1vamlTaXplLFxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgcmV0dXJuIHsgZW1vamlPYmplY3QsIGVtb2ppVmlldyB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBFbW9qaVxyXG4gIH1cclxufVxyXG5cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuXHJcbjxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXdcIj5cclxuICA8dGVtcGxhdGUgdi1pZj1cImVtb2ppXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vamlcIj5cclxuICAgICAgICA8ZW1vamlcclxuICAgICAgICAgIDpkYXRhPVwiZGF0YVwiXHJcbiAgICAgICAgICA6ZW1vamk9XCJlbW9qaVwiXHJcbiAgICAgICAgICA6bmF0aXZlPVwiZW1vamlQcm9wcy5uYXRpdmVcIlxyXG4gICAgICAgICAgOnNraW49XCJlbW9qaVByb3BzLnNraW5cIlxyXG4gICAgICAgICAgOnNldD1cImVtb2ppUHJvcHMuc2V0XCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZGF0YVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctbmFtZVwiPnt7IGVtb2ppLm5hbWUgfX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LXNob3J0bmFtZXNcIj5cclxuICAgICAgICAgIDxzcGFuIHYtZm9yPVwic2hvcnROYW1lIGluIGVtb2ppU2hvcnROYW1lc1wiIDprZXk9XCJzaG9ydE5hbWVcIiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1zaG9ydG5hbWVcIj46e3sgc2hvcnROYW1lIH19Ojwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWVtb3RpY29uc1wiPlxyXG4gICAgICAgICAgPHNwYW4gdi1mb3I9XCJlbW90aWNvbiBpbiBlbW9qaUVtb3RpY29uc1wiIDprZXk9XCJlbW90aWNvblwiIGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWVtb3RpY29uXCI+e3sgZW1vdGljb24gfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gIDwvdGVtcGxhdGU+XHJcblxyXG4gIDx0ZW1wbGF0ZSB2LWVsc2U+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWVtb2ppXCI+XHJcbiAgICAgIDxlbW9qaVxyXG4gICAgICAgIDpkYXRhPVwiZGF0YVwiXHJcbiAgICAgICAgOmVtb2ppPVwiaWRsZUVtb2ppXCJcclxuICAgICAgICA6bmF0aXZlPVwiZW1vamlQcm9wcy5uYXRpdmVcIlxyXG4gICAgICAgIDpza2luPVwiZW1vamlQcm9wcy5za2luXCJcclxuICAgICAgICA6c2V0PVwiZW1vamlQcm9wcy5zZXRcIlxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1kYXRhXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZW1vamktbWFydC10aXRsZS1sYWJlbFwiPnt7IHRpdGxlIH19PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiB2LWlmPVwic2hvd1NraW5Ub25lc1wiIGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LXNraW5zXCI+XHJcbiAgICAgIDxza2lucyA6c2tpbj1cInNraW5Qcm9wcy5za2luXCIgQGNoYW5nZT1cIm9uU2tpbkNoYW5nZSgkZXZlbnQpXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gIDwvdGVtcGxhdGU+XHJcbjwvZGl2PlxyXG5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG5pbXBvcnQgRW1vamkgZnJvbSAnLi9FbW9qaSdcclxuaW1wb3J0IFNraW5zIGZyb20gJy4vc2tpbnMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBlbW9qaToge1xyXG4gICAgICB0eXBlOiBbU3RyaW5nLCBPYmplY3RdXHJcbiAgICB9LFxyXG4gICAgaWRsZUVtb2ppOiB7XHJcbiAgICAgIHR5cGU6IFtTdHJpbmcsIE9iamVjdF0sXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgc2hvd1NraW5Ub25lczoge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICBkZWZhdWx0OiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZW1vamlQcm9wczoge1xyXG4gICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgc2tpblByb3BzOiB7XHJcbiAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBvblNraW5DaGFuZ2U6IHtcclxuICAgICAgdHlwZTogRnVuY3Rpb24sXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgZW1vamlEYXRhKCkge1xyXG4gICAgICBpZiAodGhpcy5lbW9qaSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVtb2ppXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHt9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBlbW9qaVNob3J0TmFtZXMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmVtb2ppRGF0YS5zaG9ydF9uYW1lc1xyXG4gICAgfSxcclxuICAgIGVtb2ppRW1vdGljb25zKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5lbW9qaURhdGEuZW1vdGljb25zXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBFbW9qaSxcclxuICAgIFNraW5zXHJcbiAgfVxyXG59XHJcblxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXNlYXJjaFwiPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgOnBsYWNlaG9sZGVyPVwiaTE4bi5zZWFyY2hcIiB2LW1vZGVsPVwidmFsdWVcIj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGkxOG46IHtcclxuICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGF1dG9Gb2N1czoge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICBkZWZhdWx0OiBmYWxzZVxyXG4gICAgfSxcclxuICAgIG9uU2VhcmNoOiB7XHJcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHZhbHVlOiAnJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGVtb2ppSW5kZXgoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRhdGFcclxuICAgIH1cclxuICB9LFxyXG4gIHdhdGNoOiB7XHJcbiAgICB2YWx1ZSgpIHtcclxuICAgICAgdGhpcy4kZW1pdCgnc2VhcmNoJywgdGhpcy52YWx1ZSlcclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGNsZWFyKCkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gJydcclxuICAgIH1cclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICBsZXQgJGlucHV0ID0gdGhpcy4kZWwucXVlcnlTZWxlY3RvcignaW5wdXQnKVxyXG5cclxuICAgIGlmICh0aGlzLmF1dG9Gb2N1cykge1xyXG4gICAgICAkaW5wdXQuZm9jdXMoKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuXHJcbjxkaXYgOmNsYXNzPVwieyAnZW1vamktbWFydC1za2luLXN3YXRjaGVzJzogdHJ1ZSwgJ2Vtb2ppLW1hcnQtc2tpbi1zd2F0Y2hlcy1vcGVuZWQnOiBvcGVuZWQgfVwiPlxyXG4gIDxzcGFuIHYtZm9yPVwic2tpblRvbmUgaW4gNlwiIDprZXk9XCJza2luVG9uZVwiIDpjbGFzcz1cInsgJ2Vtb2ppLW1hcnQtc2tpbi1zd2F0Y2gnOiB0cnVlLCAnZW1vamktbWFydC1za2luLXN3YXRjaC1zZWxlY3RlZCc6IHNraW4gPT0gc2tpblRvbmUgfVwiPlxyXG4gICAgPHNwYW4gOmNsYXNzPVwiJ2Vtb2ppLW1hcnQtc2tpbiBlbW9qaS1tYXJ0LXNraW4tdG9uZS0nICsgc2tpblRvbmVcIiBAY2xpY2s9XCJvbkNsaWNrKHNraW5Ub25lKVwiPjwvc3Bhbj5cclxuICA8L3NwYW4+XHJcbjwvZGl2PlxyXG5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IHtcclxuICAgIHNraW46IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG9wZW5lZDogZmFsc2VcclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG9uQ2xpY2soc2tpblRvbmUpIHtcclxuICAgICAgaWYgKHRoaXMub3BlbmVkKSB7XHJcbiAgICAgICAgaWYgKHNraW5Ub25lICE9IHRoaXMuc2tpbikge1xyXG4gICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgc2tpblRvbmUpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLm9wZW5lZCA9ICF0aGlzLm9wZW5lZFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuPC9zY3JpcHQ+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLnZpZXcuY2FuUmVuZGVyXG4gICAgPyBfYyhcbiAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LWVtb2ppXCIsXG4gICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IF92bS52aWV3LnRpdGxlLCBcImRhdGEtdGl0bGVcIjogX3ZtLnRpdGxlIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIG1vdXNlZW50ZXI6IF92bS5vbk1vdXNlRW50ZXIsXG4gICAgICAgICAgICBtb3VzZWxlYXZlOiBfdm0ub25Nb3VzZUxlYXZlLFxuICAgICAgICAgICAgY2xpY2s6IF92bS5vbkNsaWNrXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgY2xhc3M6IF92bS52aWV3LmNzc0NsYXNzLCBzdHlsZTogX3ZtLnZpZXcuY3NzU3R5bGUgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udmlldy5jb250ZW50KSlcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQgZW1vamktbWFydC1zdGF0aWNcIiwgc3R5bGU6IF92bS5jdXN0b21TdHlsZXMgfSxcbiAgICBbXG4gICAgICBfdm0uc2hvd0NhdGVnb3JpZXNcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtYmFyIGVtb2ppLW1hcnQtYmFyLWFuY2hvcnNcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImFuY2hvcnNcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgIGkxOG46IF92bS5tZXJnZWRJMThuLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IF92bS5jb2xvcixcbiAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IF92bS5jYXRlZ29yaWVzLFxuICAgICAgICAgICAgICAgICAgXCJhY3RpdmUtY2F0ZWdvcnlcIjogX3ZtLmFjdGl2ZUNhdGVnb3J5XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9uQW5jaG9yQ2xpY2sgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl90KFxuICAgICAgICBcInNlYXJjaFRlbXBsYXRlXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uc2hvd1NlYXJjaFxuICAgICAgICAgICAgPyBfYyhcInNlYXJjaFwiLCB7XG4gICAgICAgICAgICAgICAgcmVmOiBcInNlYXJjaFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgIGkxOG46IF92bS5tZXJnZWRJMThuLFxuICAgICAgICAgICAgICAgICAgXCJhdXRvLWZvY3VzXCI6IF92bS5hdXRvRm9jdXMsXG4gICAgICAgICAgICAgICAgICBcIm9uLXNlYXJjaFwiOiBfdm0ub25TZWFyY2hcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHNlYXJjaDogX3ZtLm9uU2VhcmNoIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAge1xuICAgICAgICAgIGRhdGE6IF92bS5kYXRhLFxuICAgICAgICAgIGkxOG46IF92bS5pMThuLFxuICAgICAgICAgIGF1dG9Gb2N1czogX3ZtLmF1dG9Gb2N1cyxcbiAgICAgICAgICBvblNlYXJjaDogX3ZtLm9uU2VhcmNoXG4gICAgICAgIH1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IFwic2Nyb2xsXCIsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1zY3JvbGxcIixcbiAgICAgICAgICBvbjogeyBzY3JvbGw6IF92bS5vblNjcm9sbCB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImNhdGVnb3J5XCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2hFbW9qaXMsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2hFbW9qaXNcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgICAgIGkxOG46IF92bS5tZXJnZWRJMThuLFxuICAgICAgICAgICAgICBpZDogXCJzZWFyY2hcIixcbiAgICAgICAgICAgICAgbmFtZTogXCJTZWFyY2hcIixcbiAgICAgICAgICAgICAgZW1vamlzOiBfdm0uc2VhcmNoRW1vamlzLFxuICAgICAgICAgICAgICBcImVtb2ppLXByb3BzXCI6IF92bS5lbW9qaVByb3BzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX2woX3ZtLmZpbHRlcmVkQ2F0ZWdvcmllcywgZnVuY3Rpb24oY2F0ZWdvcnksIGlkeCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFwiY2F0ZWdvcnlcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgICFfdm0uc2VhcmNoRW1vamlzICYmXG4gICAgICAgICAgICAgICAgICAgIChfdm0uaW5maW5pdGVTY3JvbGwgfHwgY2F0ZWdvcnkgPT0gX3ZtLmFjdGl2ZUNhdGVnb3J5KSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgIFwiIXNlYXJjaEVtb2ppcyAmJiAoaW5maW5pdGVTY3JvbGwgfHwgY2F0ZWdvcnkgPT0gYWN0aXZlQ2F0ZWdvcnkpXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGtleTogY2F0ZWdvcnkuaWQsXG4gICAgICAgICAgICAgIHJlZjogXCJjYXRlZ29yaWVzX1wiICsgaWR4LFxuICAgICAgICAgICAgICByZWZJbkZvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICBpMThuOiBfdm0ubWVyZ2VkSTE4bixcbiAgICAgICAgICAgICAgICBpZDogY2F0ZWdvcnkuaWQsXG4gICAgICAgICAgICAgICAgbmFtZTogY2F0ZWdvcnkubmFtZSxcbiAgICAgICAgICAgICAgICBlbW9qaXM6IGNhdGVnb3J5LmVtb2ppcyxcbiAgICAgICAgICAgICAgICBcImVtb2ppLXByb3BzXCI6IF92bS5lbW9qaVByb3BzXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX3QoXG4gICAgICAgIFwicHJldmlld1RlbXBsYXRlXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uc2hvd1ByZXZpZXdcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtYmFyIGVtb2ppLW1hcnQtYmFyLXByZXZpZXdcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwicHJldmlld1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF92bS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICBlbW9qaTogX3ZtLnByZXZpZXdFbW9qaSxcbiAgICAgICAgICAgICAgICAgICAgICBcImlkbGUtZW1vamlcIjogX3ZtLmlkbGVFbW9qaSxcbiAgICAgICAgICAgICAgICAgICAgICBcInNob3ctc2tpbi10b25lc1wiOiBfdm0uc2hvd1NraW5Ub25lcyxcbiAgICAgICAgICAgICAgICAgICAgICBcImVtb2ppLXByb3BzXCI6IF92bS5lbW9qaVByb3BzLFxuICAgICAgICAgICAgICAgICAgICAgIFwic2tpbi1wcm9wc1wiOiBfdm0uc2tpblByb3BzLFxuICAgICAgICAgICAgICAgICAgICAgIFwib24tc2tpbi1jaGFuZ2VcIjogX3ZtLm9uU2tpbkNoYW5nZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIHtcbiAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICB0aXRsZTogX3ZtLnRpdGxlLFxuICAgICAgICAgIGVtb2ppOiBfdm0ucHJldmlld0Vtb2ppLFxuICAgICAgICAgIGlkbGVFbW9qaTogX3ZtLmlkbGVFbW9qaSxcbiAgICAgICAgICBzaG93U2tpblRvbmVzOiBfdm0uc2hvd1NraW5Ub25lcyxcbiAgICAgICAgICBlbW9qaVByb3BzOiBfdm0uZW1vamlQcm9wcyxcbiAgICAgICAgICBza2luUHJvcHM6IF92bS5za2luUHJvcHMsXG4gICAgICAgICAgb25Ta2luQ2hhbmdlOiBfdm0ub25Ta2luQ2hhbmdlXG4gICAgICAgIH1cbiAgICAgIClcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtYW5jaG9yc1wiIH0sXG4gICAgX3ZtLl9sKF92bS5jYXRlZ29yaWVzLCBmdW5jdGlvbihjYXRlZ29yeSkge1xuICAgICAgcmV0dXJuIF9jKFxuICAgICAgICBcInNwYW5cIixcbiAgICAgICAge1xuICAgICAgICAgIGtleTogY2F0ZWdvcnkuaWQsXG4gICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgIFwiZW1vamktbWFydC1hbmNob3JcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZW1vamktbWFydC1hbmNob3Itc2VsZWN0ZWRcIjogY2F0ZWdvcnkuaWQgPT0gX3ZtLmFjdGl2ZUNhdGVnb3J5LmlkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgY29sb3I6IGNhdGVnb3J5LmlkID09IF92bS5hY3RpdmVDYXRlZ29yeS5pZCA/IF92bS5jb2xvciA6IFwiXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS10aXRsZVwiOiBfdm0uaTE4bi5jYXRlZ29yaWVzW2NhdGVnb3J5LmlkXSB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJjbGlja1wiLCBjYXRlZ29yeSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5zdmdzW2NhdGVnb3J5LmlkXSkgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LWFuY2hvci1iYXJcIixcbiAgICAgICAgICAgIHN0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogX3ZtLmNvbG9yIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdXG4gICAgICApXG4gICAgfSksXG4gICAgMFxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uaXNWaXNpYmxlICYmIChfdm0uaXNTZWFyY2ggfHwgX3ZtLmhhc1Jlc3VsdHMpXG4gICAgPyBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICBcImVtb2ppLW1hcnQtY2F0ZWdvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZW1vamktbWFydC1uby1yZXN1bHRzXCI6ICFfdm0uaGFzUmVzdWx0c1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1jYXRlZ29yeS1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaTE4bi5jYXRlZ29yaWVzW192bS5pZF0pKV0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX2woX3ZtLmVtb2ppT2JqZWN0cywgZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICB2YXIgZW1vamlPYmplY3QgPSByZWYuZW1vamlPYmplY3RcbiAgICAgICAgICAgIHZhciBlbW9qaVZpZXcgPSByZWYuZW1vamlWaWV3XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICBlbW9qaVZpZXcuY2FuUmVuZGVyXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LWVtb2ppXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS10aXRsZVwiOiBlbW9qaU9iamVjdC5zaG9ydF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGVtb2ppVmlldy50aXRsZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlZW50ZXI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZW1vamlQcm9wcy5vbkVudGVyKGVtb2ppVmlldy5nZXRFbW9qaSgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlbGVhdmU6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZW1vamlQcm9wcy5vbkxlYXZlKGVtb2ppVmlldy5nZXRFbW9qaSgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVtb2ppUHJvcHMub25DbGljayhlbW9qaVZpZXcuZ2V0RW1vamkoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogZW1vamlWaWV3LmNzc0NsYXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogZW1vamlWaWV3LmNzc1N0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoZW1vamlWaWV3LmNvbnRlbnQpKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAhX3ZtLmhhc1Jlc3VsdHNcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImVtb2ppXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICBlbW9qaTogXCJzbGV1dGhfb3Jfc3B5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlOiBfdm0uZW1vamlQcm9wcy5uYXRpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgc2tpbjogX3ZtLmVtb2ppUHJvcHMuc2tpbixcbiAgICAgICAgICAgICAgICAgICAgICBzZXQ6IF92bS5lbW9qaVByb3BzLnNldFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtbm8tcmVzdWx0cy1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaTE4bi5ub3Rmb3VuZCkpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3XCIgfSxcbiAgICBbXG4gICAgICBfdm0uZW1vamlcbiAgICAgICAgPyBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vamlcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJlbW9qaVwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgZW1vamk6IF92bS5lbW9qaSxcbiAgICAgICAgICAgICAgICAgICAgbmF0aXZlOiBfdm0uZW1vamlQcm9wcy5uYXRpdmUsXG4gICAgICAgICAgICAgICAgICAgIHNraW46IF92bS5lbW9qaVByb3BzLnNraW4sXG4gICAgICAgICAgICAgICAgICAgIHNldDogX3ZtLmVtb2ppUHJvcHMuc2V0XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtcHJldmlldy1kYXRhXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtcHJldmlldy1uYW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVtb2ppLm5hbWUpKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtcHJldmlldy1zaG9ydG5hbWVzXCIgfSxcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmVtb2ppU2hvcnROYW1lcywgZnVuY3Rpb24oc2hvcnROYW1lKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBzaG9ydE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LXNob3J0bmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCI6XCIgKyBfdm0uX3Moc2hvcnROYW1lKSArIFwiOlwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vdGljb25zXCIgfSxcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmVtb2ppRW1vdGljb25zLCBmdW5jdGlvbihlbW90aWNvbikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogZW1vdGljb24sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LWVtb3RpY29uXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoZW1vdGljb24pKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXVxuICAgICAgICA6IFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtcHJldmlldy1lbW9qaVwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImVtb2ppXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBlbW9qaTogX3ZtLmlkbGVFbW9qaSxcbiAgICAgICAgICAgICAgICAgICAgbmF0aXZlOiBfdm0uZW1vamlQcm9wcy5uYXRpdmUsXG4gICAgICAgICAgICAgICAgICAgIHNraW46IF92bS5lbW9qaVByb3BzLnNraW4sXG4gICAgICAgICAgICAgICAgICAgIHNldDogX3ZtLmVtb2ppUHJvcHMuc2V0XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtcHJldmlldy1kYXRhXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXRpdGxlLWxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5zaG93U2tpblRvbmVzXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctc2tpbnNcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNraW5zXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBza2luOiBfdm0uc2tpblByb3BzLnNraW4gfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vblNraW5DaGFuZ2UoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgXVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtc2VhcmNoXCIgfSwgW1xuICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgIHZhbHVlOiBfdm0udmFsdWUsXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJ2YWx1ZVwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IF92bS5pMThuLnNlYXJjaCB9LFxuICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS52YWx1ZSB9LFxuICAgICAgb246IHtcbiAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIF92bS52YWx1ZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgIFwiZW1vamktbWFydC1za2luLXN3YXRjaGVzXCI6IHRydWUsXG4gICAgICAgIFwiZW1vamktbWFydC1za2luLXN3YXRjaGVzLW9wZW5lZFwiOiBfdm0ub3BlbmVkXG4gICAgICB9XG4gICAgfSxcbiAgICBfdm0uX2woNiwgZnVuY3Rpb24oc2tpblRvbmUpIHtcbiAgICAgIHJldHVybiBfYyhcbiAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IHNraW5Ub25lLFxuICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICBcImVtb2ppLW1hcnQtc2tpbi1zd2F0Y2hcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZW1vamktbWFydC1za2luLXN3YXRjaC1zZWxlY3RlZFwiOiBfdm0uc2tpbiA9PSBza2luVG9uZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICBjbGFzczogXCJlbW9qaS1tYXJ0LXNraW4gZW1vamktbWFydC1za2luLXRvbmUtXCIgKyBza2luVG9uZSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uQ2xpY2soc2tpblRvbmUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdXG4gICAgICApXG4gICAgfSksXG4gICAgMFxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkgeyBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCB0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRW1vamkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUzNGFkOTQ2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Vtb2ppLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRW1vamkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyaWtzZFxcXFxEb2N1bWVudHNcXFxcUmlrc1xcXFxXZWIgZGV2ZWxvcG1lbnRcXFxcZW1vamktbWFydC12dWVcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzUzNGFkOTQ2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzUzNGFkOTQ2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9FbW9qaS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTM0YWQ5NDYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTM0YWQ5NDYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL0Vtb2ppLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Vtb2ppLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRW1vamkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Vtb2ppLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MzRhZDk0NiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUGlja2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kMTZlOTA4NCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QaWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9QaWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyaWtzZFxcXFxEb2N1bWVudHNcXFxcUmlrc1xcXFxXZWIgZGV2ZWxvcG1lbnRcXFxcZW1vamktbWFydC12dWVcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2QxNmU5MDg0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2QxNmU5MDg0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9QaWNrZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQxNmU5MDg0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2QxNmU5MDg0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9QaWNrZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGlja2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGlja2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QaWNrZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQxNmU5MDg0JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9hbmNob3JzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MTE4ODEwNCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9hbmNob3JzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vYW5jaG9ycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJpa3NkXFxcXERvY3VtZW50c1xcXFxSaWtzXFxcXFdlYiBkZXZlbG9wbWVudFxcXFxlbW9qaS1tYXJ0LXZ1ZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTExODgxMDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTExODgxMDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxMTg4MTA0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzUxMTg4MTA0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9hbmNob3JzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hbmNob3JzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hbmNob3JzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MTE4ODEwNCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM3NmNkYTBlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyaWtzZFxcXFxEb2N1bWVudHNcXFxcUmlrc1xcXFxXZWIgZGV2ZWxvcG1lbnRcXFxcZW1vamktbWFydC12dWVcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzM3NmNkYTBlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzM3NmNkYTBlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mzc2Y2RhMGUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzc2Y2RhMGUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL2NhdGVnb3J5LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNzZjZGEwZSZcIiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQW5jaG9ycyB9IGZyb20gJy4vYW5jaG9ycydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXRlZ29yeSB9IGZyb20gJy4vY2F0ZWdvcnknXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJldmlldyB9IGZyb20gJy4vcHJldmlldydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWFyY2ggfSBmcm9tICcuL3NlYXJjaCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTa2lucyB9IGZyb20gJy4vc2tpbnMnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRW1vamkgfSBmcm9tICcuL0Vtb2ppJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFBpY2tlciB9IGZyb20gJy4vUGlja2VyJ1xyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM1MDU2YzMwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9wcmV2aWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccmlrc2RcXFxcRG9jdW1lbnRzXFxcXFJpa3NcXFxcV2ViIGRldmVsb3BtZW50XFxcXGVtb2ppLW1hcnQtdnVlXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczNTA1NmMzMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczNTA1NmMzMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcHJldmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzUwNTZjMzAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzUwNTZjMzAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL3ByZXZpZXcudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcHJldmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM1MDU2YzMwJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhZDQxYmI4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJpa3NkXFxcXERvY3VtZW50c1xcXFxSaWtzXFxcXFdlYiBkZXZlbG9wbWVudFxcXFxlbW9qaS1tYXJ0LXZ1ZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNGFkNDFiYjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNGFkNDFiYjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3NlYXJjaC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGFkNDFiYjgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGFkNDFiYjgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL3NlYXJjaC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NlYXJjaC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGFkNDFiYjgmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3NraW5zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYzYxNDg5NCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9za2lucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NraW5zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccmlrc2RcXFxcRG9jdW1lbnRzXFxcXFJpa3NcXFxcV2ViIGRldmVsb3BtZW50XFxcXGVtb2ppLW1hcnQtdnVlXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxYzYxNDg5NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxYzYxNDg5NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc2tpbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjNjE0ODk0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFjNjE0ODk0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9za2lucy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9za2lucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NraW5zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9za2lucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWM2MTQ4OTQmXCIiLCJpbXBvcnQgc3RvcmUgZnJvbSAnLi91dGlscy9zdG9yZSdcclxuaW1wb3J0IHsgdW5jb21wcmVzcyB9IGZyb20gJy4vdXRpbHMvZGF0YSdcclxuaW1wb3J0IGZyZXF1ZW50bHkgZnJvbSAnLi91dGlscy9mcmVxdWVudGx5J1xyXG5cclxuZXhwb3J0IHtcclxuICBQaWNrZXIsXHJcbiAgRW1vamksXHJcbiAgQW5jaG9ycyxcclxuICBQcmV2aWV3LFxyXG4gIFNlYXJjaCxcclxuICBDYXRlZ29yeSxcclxuICBTa2lucyxcclxufSBmcm9tICcuL2NvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgeyBFbW9qaUluZGV4LCBFbW9qaVZpZXcsIEVtb2ppRGF0YSwgc2FuaXRpemUgfSBmcm9tICcuL3V0aWxzL2Vtb2ppLWRhdGEnXHJcbmV4cG9ydCB7IHVuY29tcHJlc3MsIHN0b3JlLCBmcmVxdWVudGx5IH1cclxuIiwiY29uc3QgX1N0cmluZyA9IFN0cmluZ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX1N0cmluZy5mcm9tQ29kZVBvaW50IHx8XHJcbiAgZnVuY3Rpb24gc3RyaW5nRnJvbUNvZGVQb2ludCgpIHtcclxuICAgIHZhciBNQVhfU0laRSA9IDB4NDAwMFxyXG4gICAgdmFyIGNvZGVVbml0cyA9IFtdXHJcbiAgICB2YXIgaGlnaFN1cnJvZ2F0ZVxyXG4gICAgdmFyIGxvd1N1cnJvZ2F0ZVxyXG4gICAgdmFyIGluZGV4ID0gLTFcclxuICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoXHJcbiAgICBpZiAoIWxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gJydcclxuICAgIH1cclxuICAgIHZhciByZXN1bHQgPSAnJ1xyXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcclxuICAgICAgdmFyIGNvZGVQb2ludCA9IE51bWJlcihhcmd1bWVudHNbaW5kZXhdKVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIWlzRmluaXRlKGNvZGVQb2ludCkgfHwgLy8gYE5hTmAsIGArSW5maW5pdHlgLCBvciBgLUluZmluaXR5YFxyXG4gICAgICAgIGNvZGVQb2ludCA8IDAgfHwgLy8gbm90IGEgdmFsaWQgVW5pY29kZSBjb2RlIHBvaW50XHJcbiAgICAgICAgY29kZVBvaW50ID4gMHgxMGZmZmYgfHwgLy8gbm90IGEgdmFsaWQgVW5pY29kZSBjb2RlIHBvaW50XHJcbiAgICAgICAgTWF0aC5mbG9vcihjb2RlUG9pbnQpICE9IGNvZGVQb2ludCAvLyBub3QgYW4gaW50ZWdlclxyXG4gICAgICApIHtcclxuICAgICAgICB0aHJvdyBSYW5nZUVycm9yKCdJbnZhbGlkIGNvZGUgcG9pbnQ6ICcgKyBjb2RlUG9pbnQpXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvZGVQb2ludCA8PSAweGZmZmYpIHtcclxuICAgICAgICAvLyBCTVAgY29kZSBwb2ludFxyXG4gICAgICAgIGNvZGVVbml0cy5wdXNoKGNvZGVQb2ludClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBBc3RyYWwgY29kZSBwb2ludDsgc3BsaXQgaW4gc3Vycm9nYXRlIGhhbHZlc1xyXG4gICAgICAgIC8vIGh0dHA6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtZW5jb2Rpbmcjc3Vycm9nYXRlLWZvcm11bGFlXHJcbiAgICAgICAgY29kZVBvaW50IC09IDB4MTAwMDBcclxuICAgICAgICBoaWdoU3Vycm9nYXRlID0gKGNvZGVQb2ludCA+PiAxMCkgKyAweGQ4MDBcclxuICAgICAgICBsb3dTdXJyb2dhdGUgPSAoY29kZVBvaW50ICUgMHg0MDApICsgMHhkYzAwXHJcbiAgICAgICAgY29kZVVuaXRzLnB1c2goaGlnaFN1cnJvZ2F0ZSwgbG93U3Vycm9nYXRlKVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChpbmRleCArIDEgPT09IGxlbmd0aCB8fCBjb2RlVW5pdHMubGVuZ3RoID4gTUFYX1NJWkUpIHtcclxuICAgICAgICByZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBjb2RlVW5pdHMpXHJcbiAgICAgICAgY29kZVVuaXRzLmxlbmd0aCA9IDBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG4gIH1cclxuIiwiY29uc3QgU1ZHcyA9IHtcclxuICBhY3Rpdml0eTogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTEyIDBDNS4zNzMgMCAwIDUuMzcyIDAgMTJjMCA2LjYyNyA1LjM3MyAxMiAxMiAxMiA2LjYyOCAwIDEyLTUuMzczIDEyLTEyIDAtNi42MjgtNS4zNzItMTItMTItMTJtOS45NDkgMTFIMTcuMDVjLjIyNC0yLjUyNyAxLjIzMi00Ljc3MyAxLjk2OC02LjExM0E5Ljk2NiA5Ljk2NiAwIDAgMSAyMS45NDkgMTFNMTMgMTFWMi4wNTFhOS45NDUgOS45NDUgMCAwIDEgNC40MzIgMS41NjRjLS44NTggMS40OTEtMi4xNTYgNC4yMi0yLjM5MiA3LjM4NUgxM3ptLTIgMEg4Ljk2MWMtLjIzOC0zLjE2NS0xLjUzNi01Ljg5NC0yLjM5My03LjM4NUE5Ljk1IDkuOTUgMCAwIDEgMTEgMi4wNTFWMTF6bTAgMnY4Ljk0OWE5LjkzNyA5LjkzNyAwIDAgMS00LjQzMi0xLjU2NGMuODU3LTEuNDkyIDIuMTU1LTQuMjIxIDIuMzkzLTcuMzg1SDExem00LjA0IDBjLjIzNiAzLjE2NCAxLjUzNCA1Ljg5MyAyLjM5MiA3LjM4NUE5LjkyIDkuOTIgMCAwIDEgMTMgMjEuOTQ5VjEzaDIuMDR6TTQuOTgyIDQuODg3QzUuNzE4IDYuMjI3IDYuNzI2IDguNDczIDYuOTUxIDExaC00LjlhOS45NzcgOS45NzcgMCAwIDEgMi45MzEtNi4xMTNNMi4wNTEgMTNoNC45Yy0uMjI2IDIuNTI3LTEuMjMzIDQuNzcxLTEuOTY5IDYuMTEzQTkuOTcyIDkuOTcyIDAgMCAxIDIuMDUxIDEzbTE2Ljk2NyA2LjExM2MtLjczNS0xLjM0Mi0xLjc0NC0zLjU4Ni0xLjk2OC02LjExM2g0Ljg5OWE5Ljk2MSA5Ljk2MSAwIDAgMS0yLjkzMSA2LjExM1wiLz48L3N2Zz5gLFxyXG5cclxuICBjdXN0b206IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDIuMDAwMDAwLCAxLjAwMDAwMClcIj48cmVjdCBpZD1cIlJlY3RhbmdsZVwiIHg9XCI4XCIgeT1cIjBcIiB3aWR0aD1cIjNcIiBoZWlnaHQ9XCIyMVwiIHJ4PVwiMS41XCI+PC9yZWN0PjxyZWN0IGlkPVwiUmVjdGFuZ2xlXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDkuODQzLCAxMC41NDkpIHJvdGF0ZSg2MCkgdHJhbnNsYXRlKC05Ljg0MywgLTEwLjU0OSkgXCIgeD1cIjguMzQzXCIgeT1cIjAuMDQ5XCIgd2lkdGg9XCIzXCIgaGVpZ2h0PVwiMjFcIiByeD1cIjEuNVwiPjwvcmVjdD48cmVjdCBpZD1cIlJlY3RhbmdsZVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5Ljg0MywgMTAuNTQ5KSByb3RhdGUoLTYwKSB0cmFuc2xhdGUoLTkuODQzLCAtMTAuNTQ5KSBcIiB4PVwiOC4zNDNcIiB5PVwiMC4wNDlcIiB3aWR0aD1cIjNcIiBoZWlnaHQ9XCIyMVwiIHJ4PVwiMS41XCI+PC9yZWN0PjwvZz48L3N2Zz5gLFxyXG5cclxuICBmbGFnczogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTAgMGw2LjA4NCAyNEg4TDEuOTE2IDB6TTIxIDVoLTRsLTEtNEg0bDMgMTJoM2wxIDRoMTNMMjEgNXpNNi41NjMgM2g3Ljg3NWwyIDhIOC41NjNsLTItOHptOC44MzIgMTBsLTIuODU2IDEuOTA0TDEyLjA2MyAxM2gzLjMzMnpNMTkgMTNsLTEuNS02aDEuOTM4bDIgOEgxNmwzLTJ6XCIvPjwvc3ZnPmAsXHJcblxyXG4gIGZvb2RzOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMTcgNC45NzhjLTEuODM4IDAtMi44NzYuMzk2LTMuNjguOTM0LjUxMy0xLjE3MiAxLjc2OC0yLjkzNCA0LjY4LTIuOTM0YTEgMSAwIDAgMCAwLTJjLTIuOTIxIDAtNC42MjkgMS4zNjUtNS41NDcgMi41MTItLjA2NC4wNzgtLjExOS4xNjItLjE4LjI0NEMxMS43MyAxLjgzOCAxMC43OTguMDIzIDkuMjA3LjAyMyA4LjU3OS4wMjIgNy44NS4zMDYgNyAuOTc4IDUuMDI3IDIuNTQgNS4zMjkgMy45MDIgNi40OTIgNC45OTkgMy42MDkgNS4yMjIgMCA3LjM1MiAwIDEyLjk2OWMwIDQuNTgyIDQuOTYxIDExLjAwOSA5IDExLjAwOSAxLjk3NSAwIDIuMzcxLS40ODYgMy0xIC42MjkuNTE0IDEuMDI1IDEgMyAxIDQuMDM5IDAgOS02LjQxOCA5LTExIDAtNS45NTMtNC4wNTUtOC03LThNOC4yNDIgMi41NDZjLjY0MS0uNTA4Ljk0My0uNTIzLjk2NS0uNTIzLjQyNi4xNjkuOTc1IDEuNDA1IDEuMzU3IDMuMDU1LTEuNTI3LS42MjktMi43NDEtMS4zNTItMi45OC0xLjg0Ni4wNTktLjExMi4yNDEtLjM1Ni42NTgtLjY4Nk0xNSAyMS45NzhjLTEuMDggMC0xLjIxLS4xMDktMS41NTktLjQwMmwtLjE3Ni0uMTQ2Yy0uMzY3LS4zMDItLjgxNi0uNDUyLTEuMjY2LS40NTJzLS44OTguMTUtMS4yNjYuNDUybC0uMTc2LjE0NmMtLjM0Ny4yOTItLjQ3Ny40MDItMS41NTcuNDAyLTIuODEzIDAtNy01LjM4OS03LTkuMDA5IDAtNS44MjMgNC40ODgtNS45OTEgNS01Ljk5MSAxLjkzOSAwIDIuNDg0LjQ3MSAzLjM4NyAxLjI1MWwuMzIzLjI3NmExLjk5NSAxLjk5NSAwIDAgMCAyLjU4IDBsLjMyMy0uMjc2Yy45MDItLjc4IDEuNDQ3LTEuMjUxIDMuMzg3LTEuMjUxLjUxMiAwIDUgLjE2OCA1IDYgMCAzLjYxNy00LjE4NyA5LTcgOVwiLz48L3N2Zz5gLFxyXG5cclxuICBuYXR1cmU6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0xNS41IDhhMS41IDEuNSAwIDEgMCAuMDAxIDMuMDAxQTEuNSAxLjUgMCAwIDAgMTUuNSA4TTguNSA4YTEuNSAxLjUgMCAxIDAgLjAwMSAzLjAwMUExLjUgMS41IDAgMCAwIDguNSA4XCIvPjxwYXRoIGQ9XCJNMTguOTMzIDBoLS4wMjdjLS45NyAwLTIuMTM4Ljc4Ny0zLjAxOCAxLjQ5Ny0xLjI3NC0uMzc0LTIuNjEyLS41MS0zLjg4Ny0uNTEtMS4yODUgMC0yLjYxNi4xMzMtMy44NzQuNTE3QzcuMjQ1Ljc5IDYuMDY5IDAgNS4wOTMgMGgtLjAyN0MzLjM1MiAwIC4wNyAyLjY3LjAwMiA3LjAyNmMtLjAzOSAyLjQ3OS4yNzYgNC4yMzggMS4wNCA1LjAxMy4yNTQuMjU4Ljg4Mi42NzcgMS4yOTUuODgyLjE5MSAzLjE3Ny45MjIgNS4yMzggMi41MzYgNi4zOC44OTcuNjM3IDIuMTg3Ljk0OSAzLjIgMS4xMDJDOC4wNCAyMC42IDggMjAuNzk1IDggMjFjMCAxLjc3MyAyLjM1IDMgNCAzIDEuNjQ4IDAgNC0xLjIyNyA0LTMgMC0uMjAxLS4wMzgtLjM5My0uMDcyLS41ODYgMi41NzMtLjM4NSA1LjQzNS0xLjg3NyA1LjkyNS03LjU4Ny4zOTYtLjIyLjg4Ny0uNTY4IDEuMTA0LS43ODguNzYzLS43NzQgMS4wNzktMi41MzQgMS4wNC01LjAxM0MyMy45MjkgMi42NyAyMC42NDYgMCAxOC45MzMgME0zLjIyMyA5LjEzNWMtLjIzNy4yODEtLjgzNyAxLjE1NS0uODg0IDEuMjM4LS4xNS0uNDEtLjM2OC0xLjM0OS0uMzM3LTMuMjkxLjA1MS0zLjI4MSAyLjQ3OC00Ljk3MiAzLjA5MS01LjAzMS4yNTYuMDE1LjczMS4yNyAxLjI2NS42NDYtMS4xMSAxLjE3MS0yLjI3NSAyLjkxNS0yLjM1MiA1LjEyNS0uMTMzLjU0Ni0uMzk4Ljg1OC0uNzgzIDEuMzEzTTEyIDIyYy0uOTAxIDAtMS45NTQtLjY5My0yLTEgMC0uNjU0LjQ3NS0xLjIzNiAxLTEuNjAyVjIwYTEgMSAwIDEgMCAyIDB2LS42MDJjLjUyNC4zNjUgMSAuOTQ3IDEgMS42MDItLjA0Ni4zMDctMS4wOTkgMS0yIDFtMy0zLjQ4di4wMmE0Ljc1MiA0Ljc1MiAwIDAgMC0xLjI2Mi0xLjAyYzEuMDkyLS41MTYgMi4yMzktMS4zMzQgMi4yMzktMi4yMTcgMC0xLjg0Mi0xLjc4MS0yLjE5NS0zLjk3Ny0yLjE5NS0yLjE5NiAwLTMuOTc4LjM1NC0zLjk3OCAyLjE5NSAwIC44ODMgMS4xNDggMS43MDEgMi4yMzggMi4yMTdBNC44IDQuOCAwIDAgMCA5IDE4LjUzOXYtLjAyNWMtMS0uMDc2LTIuMTgyLS4yODEtMi45NzMtLjg0Mi0xLjMwMS0uOTItMS44MzgtMy4wNDUtMS44NTMtNi40NzhsLjAyMy0uMDQxYy40OTYtLjgyNiAxLjQ5LTEuNDUgMS44MDQtMy4xMDIgMC0yLjA0NyAxLjM1Ny0zLjYzMSAyLjM2Mi00LjUyMkM5LjM3IDMuMTc4IDEwLjU1NSAzIDExLjk0OCAzYzEuNDQ3IDAgMi42ODUuMTkyIDMuNzMzLjU3IDEgLjkgMi4zMTYgMi40NjUgMi4zMTYgNC40OC4zMTMgMS42NTEgMS4zMDcgMi4yNzUgMS44MDMgMy4xMDIuMDM1LjA1OC4wNjguMTE3LjEwMi4xNzgtLjA1OSA1Ljk2Ny0xLjk0OSA3LjAxLTQuOTAyIDcuMTltNi42MjgtOC4yMDJjLS4wMzctLjA2NS0uMDc0LS4xMy0uMTEzLS4xOTVhNy41ODcgNy41ODcgMCAwIDAtLjczOS0uOTg3Yy0uMzg1LS40NTUtLjY0OC0uNzY4LS43ODItMS4zMTMtLjA3Ni0yLjIwOS0xLjI0MS0zLjk1NC0yLjM1My01LjEyNC41MzEtLjM3NiAxLjAwNC0uNjMgMS4yNjEtLjY0Ny42MzYuMDcxIDMuMDQ0IDEuNzY0IDMuMDk2IDUuMDMxLjAyNyAxLjgxLS4zNDcgMy4yMTgtLjM3IDMuMjM1XCIvPjwvc3ZnPmAsXHJcblxyXG4gIG9iamVjdHM6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0xMiAwYTkgOSAwIDAgMC01IDE2LjQ4MlYyMXMyLjAzNSAzIDUgMyA1LTMgNS0zdi00LjUxOEE5IDkgMCAwIDAgMTIgMHptMCAyYzMuODYgMCA3IDMuMTQxIDcgN3MtMy4xNCA3LTcgNy03LTMuMTQxLTctNyAzLjE0LTcgNy03ek05IDE3LjQ3N2MuOTQuMzMyIDEuOTQ2LjUyMyAzIC41MjNzMi4wNi0uMTkgMy0uNTIzdi44MzRjLS45MS40MzYtMS45MjUuNjg5LTMgLjY4OWE2LjkyNCA2LjkyNCAwIDAgMS0zLS42OXYtLjgzM3ptLjIzNiAzLjA3QTguODU0IDguODU0IDAgMCAwIDEyIDIxYy45NjUgMCAxLjg4OC0uMTY3IDIuNzU4LS40NTFDMTQuMTU1IDIxLjE3MyAxMy4xNTMgMjIgMTIgMjJjLTEuMTAyIDAtMi4xMTctLjc4OS0yLjc2NC0xLjQ1M3pcIi8+PHBhdGggZD1cIk0xNC43NDUgMTIuNDQ5aC0uMDA0Yy0uODUyLS4wMjQtMS4xODgtLjg1OC0xLjU3Ny0xLjgyNC0uNDIxLTEuMDYxLS43MDMtMS41NjEtMS4xODItMS41NjZoLS4wMDljLS40ODEgMC0uNzgzLjQ5Ny0xLjIzNSAxLjUzNy0uNDM2Ljk4Mi0uODAxIDEuODExLTEuNjM2IDEuNzkxbC0uMjc2LS4wNDNjLS41NjUtLjE3MS0uODUzLS42OTEtMS4yODQtMS43OTQtLjEyNS0uMzEzLS4yMDItLjYzMi0uMjctLjkxMy0uMDUxLS4yMTMtLjEyNy0uNTMtLjE5NS0uNjM0QzcuMDY3IDkuMDA0IDcuMDM5IDkgNi45OSA5QTEgMSAwIDAgMSA3IDdoLjAxYzEuNjYyLjAxNyAyLjAxNSAxLjM3MyAyLjE5OCAyLjEzNC40ODYtLjk4MSAxLjMwNC0yLjA1OCAyLjc5Ny0yLjA3NSAxLjUzMS4wMTggMi4yOCAxLjE1MyAyLjczMSAyLjE0MWwuMDAyLS4wMDhDMTQuOTQ0IDguNDI0IDE1LjMyNyA3IDE2Ljk3OSA3aC4wMzJBMSAxIDAgMSAxIDE3IDloLS4wMTFjLS4xNDkuMDc2LS4yNTYuNDc0LS4zMTkuNzA5YTYuNDg0IDYuNDg0IDAgMCAxLS4zMTEuOTUxYy0uNDI5Ljk3My0uNzkgMS43ODktMS42MTQgMS43ODlcIi8+PC9zdmc+YCxcclxuXHJcbiAgc21pbGV5czogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTEyIDBDNS4zNzMgMCAwIDUuMzczIDAgMTJzNS4zNzMgMTIgMTIgMTIgMTItNS4zNzMgMTItMTJTMTguNjI3IDAgMTIgMG0wIDIyQzYuNDg2IDIyIDIgMTcuNTE0IDIgMTJTNi40ODYgMiAxMiAyczEwIDQuNDg2IDEwIDEwLTQuNDg2IDEwLTEwIDEwXCIvPjxwYXRoIGQ9XCJNOCA3YTIgMiAwIDEgMC0uMDAxIDMuOTk5QTIgMiAwIDAgMCA4IDdNMTYgN2EyIDIgMCAxIDAtLjAwMSAzLjk5OUEyIDIgMCAwIDAgMTYgN00xNS4yMzIgMTVjLS42OTMgMS4xOTUtMS44NyAyLTMuMzQ5IDItMS40NzcgMC0yLjY1NS0uODA1LTMuMzQ3LTJIMTVtMy0ySDZhNiA2IDAgMSAwIDEyIDBcIi8+PC9zdmc+YCxcclxuXHJcbiAgcGVvcGxlOiBgPHN2ZyB4bWxuczpzdmc9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD1cIjI0XCIgd2lkdGg9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj4gPHBhdGggaWQ9XCJwYXRoMzgxNFwiIGQ9XCJtIDMuMzU5MTA4OSwyMS4xNzcyNiBjIDAuMTcyMDM2LDAuMDkzODUgNC4yNjU5OTQsMi4yOTgzNyA4LjgxNDQ0NTEsMi4yOTgzNyA0LjkyNzc2NywwIDguNjcwODk0LC0yLjIxMTg4MyA4LjgyNzgyLC0yLjMwNjAxOSAwLjExMzA3OSwtMC4wNjc4NSAwLjE4MjI2OCwtMC4xOTAwNTEgMC4xODIyNjcsLTAuMzIxOTIzIDAsLTMuMDMxMTkgLTAuOTI5NDk0LC01LjgwNDkzNiAtMi42MTcxOTYsLTcuODEwNzEyIC0xLjE4MDYwMywtMS40MDMxMzQgLTIuNjYxOTE4LC0yLjM1OTUxNiAtNC4yOTU2OTksLTIuNzk5NzkxIDQuNjk5MTE4LC0yLjIzNjI1OCAzLjEwMjMwNiwtOS4yODYxNzE2MiAtMi4wOTcxOTEsLTkuMjg2MTcxNjIgLTUuMTk5NDk3OCwwIC02Ljc5NjMxMDMsNy4wNDk5MTM2MiAtMi4wOTcxOTIsOS4yODYxNzE2MiAtMS42MzM3ODIxLDAuNDQwMjc1IC0zLjExNTA5NzEsMS4zOTY3OTggLTQuMjk1Njk5MSwyLjc5OTc5MSAtMS42ODc3MDMsMi4wMDU3NzYgLTIuNjE3MTk2LDQuNzc5NTIyIC0yLjYxNzE5Niw3LjgxMDcxMiAxLjJlLTYsMC4xMzczNzggMC4wNzUwMzksMC4yNjM3ODUgMC4xOTU2NDEsMC4zMjk1NzIgeiBNIDguMDQzOTMxOSw1LjgzMDg3ODMgQyA4LjA0MzkzMDksMi4xNTE1MjEgMTIuNDkyMTA3LDAuMzA5NTU4MTEgMTUuMDkzNDkxLDIuOTEwOTQxMSAxNy42OTQ4NzQsNS41MTIzMjQxIDE1Ljg1MjkxMSw5Ljk2MDUwMDYgMTIuMTczNTU0LDkuOTYwNSA5Ljg5Mzg5OTEsOS45NTc5MTM1IDguMDQ2NTE4Niw4LjExMDUzMzIgOC4wNDM5MzE5LDUuODMwODc4MyBaIG0gLTEuNjg4NzgyLDcuNjg5NDk3NyBjIDEuNTI0NTM1LC0xLjgxMTQ0OSAzLjU5MDY2MDEsLTIuODA5MDM1IDUuODE4NDA0MSwtMi44MDkwMzUgMi4yMjc3NDQsMCA0LjI5Mzg2OSwwLjk5NzU4NiA1LjgxODQwNCwyLjgwOTAzNSAxLjUzMzYzOSwxLjgyMjU3MSAyLjM5NTkzMiw0LjMzOTg1OCAyLjQzOTE1Miw3LjEwODMwMSAtMC44MDMzNTIsMC40MzQ4NzcgLTQuMTQxNjM2LDIuMDk2MTEyIC04LjI1NzU1NiwyLjA5NjExMiAtMy44MDYyOTIxLDAgLTcuMzkxMDg2MSwtMS42NzEwNDMgLTguMjU3MzY4MSwtMi4xMDQ5ODEgMC4wNDUwNSwtMi43NjUwMTcgMC45MDY5NjgsLTUuMjc4Nzg1IDIuNDM4OTY0LC03LjA5OTQzMiB6XCIgLz4gPHBhdGggaWQ9XCJwYXRoMzgxNlwiIGQ9XCJNIDEyLjE3MzgyOCAwLjM4ODY3MTg4IEMgOS4zMTk4NTEzIDAuMzg4NjcxODcgNy4zNzcwOTg4IDIuMzY3MjI4NSA2Ljg2NTIzNDQgNC42MzA4NTk0IEMgNi40MjE4NjA4IDYuNTkxNjAxNSA3LjExNTM1NjIgOC43Njc2MTE3IDguOTY0ODQzOCAxMC4xMjY5NTMgQyA3LjYxNDEyNDkgMTAuNjc3Mzc2IDYuMzU1MDUxMSAxMS40ODA5NDQgNS4zNDk2MDk0IDEyLjY3NTc4MSBDIDMuNTYyOTMxNyAxNC43OTkxODUgMi42MDE1NjI1IDE3LjcwMTQ3NSAyLjYwMTU2MjUgMjAuODQ3NjU2IEMgMi42MDE1NjU0IDIxLjE4OTg2MSAyLjc4OTQyNzYgMjEuNTA4MDAyIDMuMDg5ODQzOCAyMS42NzE4NzUgQyAzLjMwNDQwNjggMjEuNzg4OTI1IDcuNDQzNjIzOSAyNC4wMzkwNjIgMTIuMTczODI4IDI0LjAzOTA2MiBDIDE3LjI2OTkxOCAyNC4wMzkwNjIgMjEuMDgzNTY4IDIxLjc3Njc4NiAyMS4yOTEwMTYgMjEuNjUyMzQ0IEMgMjEuNTcyODEgMjEuNDgzMjY2IDIxLjc0NjA5NyAyMS4xNzYyODIgMjEuNzQ2MDk0IDIwLjg0NzY1NiBDIDIxLjc0NjA5NCAxNy43MDE0NzUgMjAuNzgyNzcgMTQuNzk5MTg1IDE4Ljk5NjA5NCAxMi42NzU3ODEgQyAxNy45OTA0NTUgMTEuNDgwNTkxIDE2LjczMzgxOCAxMC42NzUzNjIgMTUuMzgyODEyIDEwLjEyNSBDIDE3LjIzMTEzMiA4Ljc2NTU1NTIgMTcuOTI1Njc1IDYuNTkxMDcwMSAxNy40ODI0MjIgNC42MzA4NTk0IEMgMTYuOTcwNTU3IDIuMzY3MjI4NSAxNS4wMjc4MDUgMC4zODg2NzE4OCAxMi4xNzM4MjggMC4zODg2NzE4OCB6IE0gMTIuNzkyOTY5IDIuMzAwNzgxMiBDIDEzLjQ2NjI1MyAyLjQxNjE3OTIgMTQuMTI1MTEzIDIuNzM4Mzk0MSAxNC42OTUzMTIgMy4zMDg1OTM4IEMgMTUuODM1NzEyIDQuNDQ4OTkzMSAxNS45ODU2MDQgNS45NDczNTQ5IDE1LjQ2ODc1IDcuMTk1MzEyNSBDIDE0Ljk1MTg5NiA4LjQ0MzI3MDEgMTMuNzg2ODI4IDkuMzk4NDM3OCAxMi4xNzM4MjggOS4zOTg0Mzc1IEMgMTAuMTk3NzE5IDkuMzk2MTk1NCA4LjYwNzcxMSA3LjgwNjE4NyA4LjYwNTQ2ODggNS44MzAwNzgxIEMgOC42MDU0NjgzIDQuMjE3MDc4NSA5LjU2MDYzNjIgMy4wNTIwMTAyIDEwLjgwODU5NCAyLjUzNTE1NjIgQyAxMS40MzI1NzMgMi4yNzY3MjkzIDEyLjExOTY4NSAyLjE4NTM4MzMgMTIuNzkyOTY5IDIuMzAwNzgxMiB6IE0gMTIuMTczODI4IDExLjI3MzQzOCBDIDE0LjIzMzY0NyAxMS4yNzM0MzggMTYuMTMzNjc0IDEyLjE4NTA4NCAxNy41NjI1IDEzLjg4MjgxMiBDIDE4LjkzMDY5IDE1LjUwODc2NSAxOS42OTgzNDcgMTcuNzc2OTY5IDE5LjgwODU5NCAyMC4yODMyMDMgQyAxOC44MDczOTUgMjAuODAwMjM1IDE1Ljg4NjE1NyAyMi4xNjIxMDkgMTIuMTczODI4IDIyLjE2MjEwOSBDIDguNzYxNDYzMiAyMi4xNjIxMDkgNS42MjQ1NzU0IDIwLjc4NzA2OSA0LjUzOTA2MjUgMjAuMjY1NjI1IEMgNC42NTI1ODk2IDE3Ljc2NjcxNyA1LjQyMDMzMTUgMTUuNTA0NzkxIDYuNzg1MTU2MiAxMy44ODI4MTIgQyA4LjIxMzk4MjcgMTIuMTg1MDg0IDEwLjExNDAxIDExLjI3MzQzOCAxMi4xNzM4MjggMTEuMjczNDM4IHogXCIgLz4gPC9zdmc+YCxcclxuXHJcbiAgcGxhY2VzOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNNi41IDEyQzUuMTIyIDEyIDQgMTMuMTIxIDQgMTQuNVM1LjEyMiAxNyA2LjUgMTcgOSAxNS44NzkgOSAxNC41IDcuODc4IDEyIDYuNSAxMm0wIDNjLS4yNzUgMC0uNS0uMjI1LS41LS41cy4yMjUtLjUuNS0uNS41LjIyNS41LjUtLjIyNS41LS41LjVNMTcuNSAxMmMtMS4zNzggMC0yLjUgMS4xMjEtMi41IDIuNXMxLjEyMiAyLjUgMi41IDIuNSAyLjUtMS4xMjEgMi41LTIuNS0xLjEyMi0yLjUtMi41LTIuNW0wIDNjLS4yNzUgMC0uNS0uMjI1LS41LS41cy4yMjUtLjUuNS0uNS41LjIyNS41LjUtLjIyNS41LS41LjVcIi8+PHBhdGggZD1cIk0yMi40ODIgOS40OTRsLTEuMDM5LS4zNDZMMjEuNCA5aC42Yy41NTIgMCAxLS40MzkgMS0uOTkyIDAtLjAwNi0uMDAzLS4wMDgtLjAwMy0uMDA4SDIzYzAtMS0uODg5LTItMS45ODQtMmgtLjY0MmwtLjczMS0xLjcxN0MxOS4yNjIgMy4wMTIgMTguMDkxIDIgMTYuNzY0IDJINy4yMzZDNS45MDkgMiA0LjczOCAzLjAxMiA0LjM1NyA0LjI4M0wzLjYyNiA2aC0uNjQyQzEuODg5IDYgMSA3IDEgOGguMDAzUzEgOC4wMDIgMSA4LjAwOEMxIDguNTYxIDEuNDQ4IDkgMiA5aC42bC0uMDQzLjE0OC0xLjAzOS4zNDZhMi4wMDEgMi4wMDEgMCAwIDAtMS4zNTkgMi4wOTdsLjc1MSA3LjUwOGExIDEgMCAwIDAgLjk5NC45MDFIM3YxYzAgMS4xMDMuODk2IDIgMiAyaDJjMS4xMDQgMCAyLS44OTcgMi0ydi0xaDZ2MWMwIDEuMTAzLjg5NiAyIDIgMmgyYzEuMTA0IDAgMi0uODk3IDItMnYtMWgxLjA5NmEuOTk5Ljk5OSAwIDAgMCAuOTk0LS45MDFsLjc1MS03LjUwOGEyLjAwMSAyLjAwMSAwIDAgMC0xLjM1OS0yLjA5N002LjI3MyA0Ljg1N0M2LjQwMiA0LjQzIDYuNzg4IDQgNy4yMzYgNGg5LjUyN2MuNDQ4IDAgLjgzNC40My45NjMuODU3TDE5LjMxMyA5SDQuNjg4bDEuNTg1LTQuMTQzek03IDIxSDV2LTFoMnYxem0xMiAwaC0ydi0xaDJ2MXptMi4xODktM0gyLjgxMWwtLjY2Mi02LjYwN0wzIDExaDE4bC44NTIuMzkzTDIxLjE4OSAxOHpcIi8+PC9zdmc+YCxcclxuXHJcbiAgcmVjZW50OiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMTMgNGgtMmwtLjAwMSA3SDl2MmgydjJoMnYtMmg0di0yaC00elwiLz48cGF0aCBkPVwiTTEyIDBDNS4zNzMgMCAwIDUuMzczIDAgMTJzNS4zNzMgMTIgMTIgMTIgMTItNS4zNzMgMTItMTJTMTguNjI3IDAgMTIgMG0wIDIyQzYuNDg2IDIyIDIgMTcuNTE0IDIgMTJTNi40ODYgMiAxMiAyczEwIDQuNDg2IDEwIDEwLTQuNDg2IDEwLTEwIDEwXCIvPjwvc3ZnPmAsXHJcblxyXG4gIHN5bWJvbHM6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0wIDBoMTF2Mkgwek00IDExaDNWNmg0VjRIMHYyaDR6TTE1LjUgMTdjMS4zODEgMCAyLjUtMS4xMTYgMi41LTIuNDkzcy0xLjExOS0yLjQ5My0yLjUtMi40OTNTMTMgMTMuMTMgMTMgMTQuNTA3IDE0LjExOSAxNyAxNS41IDE3bTAtMi45ODZjLjI3NiAwIC41LjIyMi41LjQ5MyAwIC4yNzItLjIyNC40OTMtLjUuNDkzcy0uNS0uMjIxLS41LS40OTMuMjI0LS40OTMuNS0uNDkzTTIxLjUgMTkuMDE0Yy0xLjM4MSAwLTIuNSAxLjExNi0yLjUgMi40OTNTMjAuMTE5IDI0IDIxLjUgMjRzMi41LTEuMTE2IDIuNS0yLjQ5My0xLjExOS0yLjQ5My0yLjUtMi40OTNtMCAyLjk4NmEuNDk3LjQ5NyAwIDAgMS0uNS0uNDkzYzAtLjI3MS4yMjQtLjQ5My41LS40OTNzLjUuMjIyLjUuNDkzYS40OTcuNDk3IDAgMCAxLS41LjQ5M00yMiAxM2wtOSA5IDEuNTEzIDEuNSA4Ljk5LTkuMDA5ek0xNyAxMWMyLjIwOSAwIDQtMS4xMTkgNC0yLjVWMnMuOTg1LS4xNjEgMS40OTguOTQ5QzIzLjAxIDQuMDU1IDIzIDYgMjMgNnMxLTEuMTE5IDEtMy4xMzVDMjQtLjAyIDIxIDAgMjEgMGgtMnY2LjM0N0E1Ljg1MyA1Ljg1MyAwIDAgMCAxNyA2Yy0yLjIwOSAwLTQgMS4xMTktNCAyLjVzMS43OTEgMi41IDQgMi41TTEwLjI5NyAyMC40ODJsLTEuNDc1LTEuNTg1YTQ3LjU0IDQ3LjU0IDAgMCAxLTEuNDQyIDEuMTI5Yy0uMzA3LS4yODgtLjk4OS0xLjAxNi0yLjA0NS0yLjE4My45MDItLjgzNiAxLjQ3OS0xLjQ2NiAxLjcyOS0xLjg5MnMuMzc2LS44NzEuMzc2LTEuMzM2YzAtLjU5Mi0uMjczLTEuMTc4LS44MTgtMS43NTktLjU0Ni0uNTgxLTEuMzI5LS44NzEtMi4zNDktLjg3MS0xLjAwOCAwLTEuNzkuMjkzLTIuMzQ0Ljg3OS0uNTU2LjU4Ny0uODMyIDEuMTgxLS44MzIgMS43ODQgMCAuODEzLjQxOSAxLjc0OCAxLjI1NiAyLjgwNS0uODQ3LjYxNC0xLjQ0NCAxLjIwOC0xLjc5NCAxLjc4NGEzLjQ2NSAzLjQ2NSAwIDAgMC0uNTIzIDEuODMzYzAgLjg1Ny4zMDggMS41Ni45MjQgMi4xMDcuNjE2LjU0OSAxLjQyMy44MjMgMi40Mi44MjMgMS4xNzMgMCAyLjQ0NC0uMzc5IDMuODEzLTEuMTM3TDguMjM1IDI0aDIuODE5bC0yLjA5LTIuMzgzIDEuMzMzLTEuMTM1em0tNi43MzYtNi4zODlhMS4wMiAxLjAyIDAgMCAxIC43My0uMjg2Yy4zMSAwIC41NTkuMDg1Ljc0Ny4yNTRhLjg0OS44NDkgMCAwIDEgLjI4My42NTljMCAuNTE4LS40MTkgMS4xMTItMS4yNTcgMS43ODQtLjUzNi0uNjUxLS44MDUtMS4yMzEtLjgwNS0xLjc0MmEuOTAxLjkwMSAwIDAgMSAuMzAyLS42NjlNMy43NCAyMmMtLjQyNyAwLS43NzgtLjExNi0xLjA1Ny0uMzQ5LS4yNzktLjIzMi0uNDE4LS40ODctLjQxOC0uNzY2IDAtLjU5NC41MDktMS4yODggMS41MjctMi4wODMuOTY4IDEuMTM0IDEuNzE3IDEuOTQ2IDIuMjQ4IDIuNDM4LS45MjEuNTA3LTEuNjg2Ljc2LTIuMy43NlwiLz48L3N2Zz5gLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTVkdzXHJcbiIsImNvbnN0IG1hcHBpbmcgPSB7XHJcbiAgbmFtZTogJ2EnLFxyXG4gIHVuaWZpZWQ6ICdiJyxcclxuICBub25fcXVhbGlmaWVkOiAnYycsXHJcbiAgaGFzX2ltZ19hcHBsZTogJ2QnLFxyXG4gIGhhc19pbWdfZ29vZ2xlOiAnZScsXHJcbiAgaGFzX2ltZ190d2l0dGVyOiAnZicsXHJcbiAgaGFzX2ltZ19mYWNlYm9vazogJ2gnLFxyXG4gIGtleXdvcmRzOiAnaicsXHJcbiAgc2hlZXQ6ICdrJyxcclxuICBlbW90aWNvbnM6ICdsJyxcclxuICB0ZXh0OiAnbScsXHJcbiAgc2hvcnRfbmFtZXM6ICduJyxcclxuICBhZGRlZF9pbjogJ28nLFxyXG59XHJcblxyXG5jb25zdCBidWlsZFNlYXJjaCA9IChlbW9qaSkgPT4ge1xyXG4gIGNvbnN0IHNlYXJjaCA9IFtdXHJcblxyXG4gIHZhciBhZGRUb1NlYXJjaCA9IChzdHJpbmdzLCBzcGxpdCkgPT4ge1xyXG4gICAgaWYgKCFzdHJpbmdzKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIDsoQXJyYXkuaXNBcnJheShzdHJpbmdzKSA/IHN0cmluZ3MgOiBbc3RyaW5nc10pLmZvckVhY2goKHN0cmluZykgPT4ge1xyXG4gICAgICA7KHNwbGl0ID8gc3RyaW5nLnNwbGl0KC9bLXxffFxcc10rLykgOiBbc3RyaW5nXSkuZm9yRWFjaCgocykgPT4ge1xyXG4gICAgICAgIHMgPSBzLnRvTG93ZXJDYXNlKClcclxuXHJcbiAgICAgICAgaWYgKHNlYXJjaC5pbmRleE9mKHMpID09IC0xKSB7XHJcbiAgICAgICAgICBzZWFyY2gucHVzaChzKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBhZGRUb1NlYXJjaChlbW9qaS5zaG9ydF9uYW1lcywgdHJ1ZSlcclxuICBhZGRUb1NlYXJjaChlbW9qaS5uYW1lLCB0cnVlKVxyXG4gIGFkZFRvU2VhcmNoKGVtb2ppLmtleXdvcmRzLCBmYWxzZSlcclxuICBhZGRUb1NlYXJjaChlbW9qaS5lbW90aWNvbnMsIGZhbHNlKVxyXG5cclxuICByZXR1cm4gc2VhcmNoLmpvaW4oJywnKVxyXG59XHJcblxyXG5jb25zdCBjb21wcmVzcyA9IChlbW9qaSkgPT4ge1xyXG4gIGVtb2ppLnNob3J0X25hbWVzID0gZW1vamkuc2hvcnRfbmFtZXMuZmlsdGVyKChzaG9ydF9uYW1lKSA9PiB7XHJcbiAgICByZXR1cm4gc2hvcnRfbmFtZSAhPT0gZW1vamkuc2hvcnRfbmFtZVxyXG4gIH0pXHJcbiAgZGVsZXRlIGVtb2ppLnNob3J0X25hbWVcclxuXHJcbiAgZW1vamkuc2hlZXQgPSBbZW1vamkuc2hlZXRfeCwgZW1vamkuc2hlZXRfeV1cclxuICBkZWxldGUgZW1vamkuc2hlZXRfeFxyXG4gIGRlbGV0ZSBlbW9qaS5zaGVldF95XHJcblxyXG4gIGVtb2ppLmFkZGVkX2luID0gcGFyc2VJbnQoZW1vamkuYWRkZWRfaW4pXHJcbiAgaWYgKGVtb2ppLmFkZGVkX2luID09PSA2KSB7XHJcbiAgICBkZWxldGUgZW1vamkuYWRkZWRfaW5cclxuICB9XHJcblxyXG4gIGZvciAobGV0IGtleSBpbiBtYXBwaW5nKSB7XHJcbiAgICBlbW9qaVttYXBwaW5nW2tleV1dID0gZW1vamlba2V5XVxyXG4gICAgZGVsZXRlIGVtb2ppW2tleV1cclxuICB9XHJcblxyXG4gIGZvciAobGV0IGtleSBpbiBlbW9qaSkge1xyXG4gICAgbGV0IHZhbHVlID0gZW1vamlba2V5XVxyXG5cclxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiAhdmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgIGRlbGV0ZSBlbW9qaVtrZXldXHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgIXZhbHVlLmxlbmd0aCkge1xyXG4gICAgICBkZWxldGUgZW1vamlba2V5XVxyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICBkZWxldGUgZW1vamlba2V5XVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGVlcEZyZWV6ZShvYmplY3QpIHtcclxuICAvLyBSZXRyaWV2ZSB0aGUgcHJvcGVydHkgbmFtZXMgZGVmaW5lZCBvbiBvYmplY3RcclxuICB2YXIgcHJvcE5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqZWN0KVxyXG5cclxuICAvLyBGcmVlemUgcHJvcGVydGllcyBiZWZvcmUgZnJlZXppbmcgc2VsZlxyXG4gIGZvciAobGV0IG5hbWUgb2YgcHJvcE5hbWVzKSB7XHJcbiAgICBsZXQgdmFsdWUgPSBvYmplY3RbbmFtZV1cclxuICAgIG9iamVjdFtuYW1lXSA9XHJcbiAgICAgIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyBkZWVwRnJlZXplKHZhbHVlKSA6IHZhbHVlXHJcbiAgfVxyXG4gIHJldHVybiBPYmplY3QuZnJlZXplKG9iamVjdClcclxufVxyXG5cclxuY29uc3QgdW5jb21wcmVzcyA9IChkYXRhKSA9PiB7XHJcbiAgaWYgKCFkYXRhLmNvbXByZXNzZWQpIHtcclxuICAgIHJldHVybiBkYXRhXHJcbiAgfVxyXG4gIGRhdGEuY29tcHJlc3NlZCA9IGZhbHNlXHJcblxyXG4gIGZvciAobGV0IGlkIGluIGRhdGEuZW1vamlzKSB7XHJcbiAgICBsZXQgZW1vamkgPSBkYXRhLmVtb2ppc1tpZF1cclxuXHJcbiAgICBmb3IgKGxldCBrZXkgaW4gbWFwcGluZykge1xyXG4gICAgICBlbW9qaVtrZXldID0gZW1vamlbbWFwcGluZ1trZXldXVxyXG4gICAgICBkZWxldGUgZW1vamlbbWFwcGluZ1trZXldXVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghZW1vamkuc2hvcnRfbmFtZXMpIGVtb2ppLnNob3J0X25hbWVzID0gW11cclxuICAgIGVtb2ppLnNob3J0X25hbWVzLnVuc2hpZnQoaWQpXHJcblxyXG4gICAgZW1vamkuc2hlZXRfeCA9IGVtb2ppLnNoZWV0WzBdXHJcbiAgICBlbW9qaS5zaGVldF95ID0gZW1vamkuc2hlZXRbMV1cclxuICAgIGRlbGV0ZSBlbW9qaS5zaGVldFxyXG5cclxuICAgIGlmICghZW1vamkudGV4dCkgZW1vamkudGV4dCA9ICcnXHJcblxyXG4gICAgaWYgKCFlbW9qaS5hZGRlZF9pbikgZW1vamkuYWRkZWRfaW4gPSA2XHJcbiAgICBlbW9qaS5hZGRlZF9pbiA9IGVtb2ppLmFkZGVkX2luLnRvRml4ZWQoMSlcclxuXHJcbiAgICBlbW9qaS5zZWFyY2ggPSBidWlsZFNlYXJjaChlbW9qaSlcclxuICB9XHJcbiAgZGF0YSA9IGRlZXBGcmVlemUoZGF0YSlcclxuICByZXR1cm4gZGF0YVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHsgYnVpbGRTZWFyY2gsIGNvbXByZXNzLCB1bmNvbXByZXNzIH1cclxuIiwiaW1wb3J0IHsgaW50ZXJzZWN0LCB1bmlmaWVkVG9OYXRpdmUgfSBmcm9tICcuL2luZGV4J1xyXG5pbXBvcnQgeyB1bmNvbXByZXNzLCBidWlsZFNlYXJjaCB9IGZyb20gJy4vZGF0YSdcclxuaW1wb3J0IGZyZXF1ZW50bHkgZnJvbSAnLi9mcmVxdWVudGx5J1xyXG5cclxuY29uc3QgU0hFRVRfQ09MVU1OUyA9IDU2XHJcbmNvbnN0IENPTE9OU19SRUdFWCA9IC9eKD86XFw6KFteXFw6XSspXFw6KSg/OlxcOnNraW4tdG9uZS0oXFxkKVxcOik/JC9cclxuLy8gU2tpbiB0b25lc1xyXG5jb25zdCBTS0lOUyA9IFsnMUYzRkEnLCAnMUYzRkInLCAnMUYzRkMnLCAnMUYzRkQnLCAnMUYzRkUnLCAnMUYzRkYnXVxyXG5cclxuLyoqXHJcbiAqIEVtb2ppIGRhdGEgc3RydWN0dXJlOlxyXG4gKiB7XHJcbiAqICAgIFwiY29tcHJlc3NlZFwiOiBmYWxzZSxcclxuICogICAgXCJhbGlhc2VzXCI6IHtcclxuICogICAgICBjb2xsaXNpb246IFwiYm9vbVwiXHJcbiAqICAgICAgY29va2luZzogXCJmcmllZF9lZ2dcIlxyXG4gKiAgICAgIGVudmVsb3BlOiBcImVtYWlsXCJcclxuICogICAgICBmYWNlX3dpdGhfZmluZ2VyX2NvdmVyaW5nX2Nsb3NlZF9saXBzOiBcInNodXNoaW5nX2ZhY2VcIlxyXG4gKiAgICAgIC4uLlxyXG4gKiAgICB9LFxyXG4gKiAgICBcImNhdGVnb3JpZXNcIjogWyB7XHJcbiAqICAgICAgaWQ6IFwicGVvcGxlXCIsXHJcbiAqICAgICAgbmFtZTogXCJTbWlsZXlzICYgRW1vdGlvblwiLFxyXG4gKiAgICAgIGVtb2ppczogWyBcImdyaW5uaW5nXCIsIFwiZ3JpblwiLCBcImpveVwiLCAuLi4gXVxyXG4gKiAgICB9LCB7XHJcbiAqICAgICAgaWQ6IFwibmF0dXJlXCIsXHJcbiAqICAgICAgbmFtZTogXCJBbmltYWxzICYgTmF0dXJlXCIsXHJcbiAqICAgICAgZW1vamlzOiBbIFwibW9ua2V5X2ZhY2VcIiwgXCJtb25leVwiLCBcImdvcmlsbGFcIiwgLi4uIF1cclxuICogICAgfSxcclxuICogICAgLi4uXHJcbiAqICAgIF0sXHJcbiAqICAgIFwiZW1vamlzXCI6IFtcclxuICogICAgICBzbWlsZXk6IHtcclxuICogICAgICAgIGFkZGVkX2luOiBcIjYuMFwiLFxyXG4gKiAgICAgICAgZW1vdGljb25zOiBbXCI9KVwiLCBcIj0tKVwiXSxcclxuICogICAgICAgIGhhc19pbWdfYXBwbGU6IHRydWUsXHJcbiAqICAgICAgICBoYXNfaW1nX2ZhY2Vib29rOiB0cnVlLFxyXG4gKiAgICAgICAgaGFzX2ltZ19nb29nbGU6IHRydWUsXHJcbiAqICAgICAgICBoYXNfaW1nX3R3aXR0ZXI6IHRydWUsXHJcbiAqICAgICAgICBrZXl3b3JkczogW1wiZmFjZVwiLCBcImhhcHB5XCIsIFwiam95XCIsIFwiaGFoYVwiLCBcIjpEXCIsIFwiOilcIiwgXCJzbWlsZVwiLCBcImZ1bm55XCJdLFxyXG4gKiAgICAgICAgbmFtZTogXCJTbWlsaW5nIEZhY2Ugd2l0aCBPcGVuIE1vdXRoXCIsXHJcbiAqICAgICAgICBub25fcXVhbGlmaWVkOiB1bmRlZmluZWQsXHJcbiAqICAgICAgICBzZWFyY2g6IFwic21pbGV5LHNtaWxpbmcsZmFjZSx3aXRoLG9wZW4sbW91dGgsaGFwcHksam95LGhhaGEsOmQsOiksc21pbGUsZnVubnksPSksPS0pXCIsXHJcbiAqICAgICAgICBzaGVldF94OiAzMCxcclxuICogICAgICAgIHNoZWV0X3k6IDI3LFxyXG4gKiAgICAgICAgc2hvcnRfbmFtZXM6IFtcInNtaWxleVwiXSxcclxuICogICAgICAgIHRleHQ6IFwiOilcIixcclxuICogICAgICAgIHVuaWZpZWQ6IFwiMUY2MDNcIixcclxuICogICAgICB9LCB7XHJcbiAqICAgICAgKzE6IHsgICAgLy8gZW1vamkgd2l0aCBza2luX3ZhcmlhdGlvbnNcclxuICogICAgICAgICAgLi4uLCAvLyBhbGwgdGhlIHJlZ3VsYXIgZmllbGRzIGFyZSBwcmVzZW50XHJcbiAqICAgICAgICAgIG5hbWU6IFwiVGh1bWJzIFVwIFNpZ25cIixcclxuICogICAgICAgICAgc2hvcnRfbmFtZXM6ICgyKSBbXCIrMVwiLCBcInRodW1ic3VwXCJdLFxyXG4gKiAgICAgICAgICBza2luX3ZhcmlhdGlvbnM6IHtcclxuICogICAgICAgICAgICAxRjNGQjogICAgICAgICAgICAgLy8gZWFjaCB2YXJpYXRpb24gaGFzIGFkZGl0aW9uYWwgc2V0IG9mIGZpZWxkczpcclxuICogICAgICAgICAgICAgIGFkZGVkX2luOiBcIjguMFwiLFxyXG4gKiAgICAgICAgICAgICAgaGFzX2ltZ19hcHBsZTogdHJ1ZSxcclxuICogICAgICAgICAgICAgIGhhc19pbWdfZmFjZWJvb2s6IHRydWUsXHJcbiAqICAgICAgICAgICAgICBoYXNfaW1nX2dvb2dsZTogdHJ1ZSxcclxuICogICAgICAgICAgICAgIGhhc19pbWdfdHdpdHRlcjogdHJ1ZSxcclxuICogICAgICAgICAgICAgIGltYWdlOiBcIjFmNDRkLTFmM2ZiLnBuZ1wiLFxyXG4gKiAgICAgICAgICAgICAgbm9uX3F1YWxpZmllZDogbnVsbCxcclxuICogICAgICAgICAgICAgIHNoZWV0X3g6IDE0LFxyXG4gKiAgICAgICAgICAgICAgc2hlZXRfeTogNTAsXHJcbiAqICAgICAgICAgICAgICB1bmlmaWVkOiBcIjFGNDRELTFGM0ZCXCIsXHJcbiAqICAgICAgICAgICAgMUYzRkI6IHvigKZ9LFxyXG4gKiAgICAgICAgICAgIDFGM0ZDOiB74oCmfSxcclxuICogICAgICAgICAgICAxRjNGRDoge+KApn0sXHJcbiAqICAgICAgICAgICAgMUYzRkU6IHvigKZ9LFxyXG4gKiAgICAgICAgICAgIDFGM0ZGOiB74oCmfVxyXG4gKiAgICAgICAgICAgIH0sXHJcbiAqICAgICAgICAgIC4uLlxyXG4gKiAgICAgIH0sXHJcbiAqICAgICAgYTogeyAgLy8gZW1vamkgd2l0aCBub25fcXVhbGlmaWVkIGZpZWxkIHNldFxyXG4gKiAgICAgICAgYWRkZWRfaW46IFwiNi4wXCIsXHJcbiAqICAgICAgICBlbW90aWNvbnM6IHVuZGVmaW5lZCxcclxuICogICAgICAgIGhhc19pbWdfYXBwbGU6IHRydWUsXHJcbiAqICAgICAgICAuLi5cclxuICogICAgICAgIG5vbl9xdWFsaWZpZWQ6IFwiMUYxNzBcIixcclxuICogICAgICAgIHVuaWZpZWQ6IFwiMUYxNzAtRkUwRlwiLFxyXG4gKiAgICAgfSxcclxuICogICAgIC4uLlxyXG4gKiAgIF1cclxuICogfVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBXcmFwcyByYXcgamFzb24gZW1vamkgZGF0YSwgc2VydmVzIGFzIGRhdGEgc291cmNlIGZvclxyXG4gKiBlbW9qaSBwaWNrZXIgY29tcG9uZW50cy5cclxuICpcclxuICogVXNhZ2U6XHJcbiAqXHJcbiAqICAgaW1wb3J0IGRhdGEgZnJvbSAnLi4vZGF0YS9hbGwuanNvbidcclxuICogICBsZXQgaW5kZXggPSBuZXcgRW1vamlJbmRleChkYXRhKVxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEVtb2ppSW5kZXgge1xyXG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdG9yLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBSYXcganNvbiBkYXRhLCBzZWUgdGhlIHN0cnVjdHVyZSBhYm92ZS5cclxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIGFkZGl0aW9uYWwgb3B0aW9ucywgYXMgYW4gb2JqZWN0OlxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGVtb2ppc1RvU2hvd0ZpbHRlciAtIG9wdGlvbmFsLCBmdW5jdGlvbiB0byBmaWx0ZXIgb3V0XHJcbiAgICogICBzb21lIGVtb2ppcywgZnVuY3Rpb24oZW1vamkpIHsgcmV0dXJuIHRydWV8ZmFsc2UgfVxyXG4gICAqICAgd2hlcmUgYGVtb2ppYCBpcyBhbiByYXcgZW1vamkgb2JqZWN0LCBzZWUgZGF0YS5lbW9qaXMgYWJvdmUuXHJcbiAgICogQHBhcmFtIHtBcnJheX0gaW5jbHVkZSAtIG9wdGlvbmFsLCBhIGxpc3Qgb2YgY2F0ZWdvcnkgaWRzIHRvIGluY2x1ZGUuXHJcbiAgICogQHBhcmFtIHtBcnJheX0gZXhjbHVkZSAtIG9wdGlvbmFsLCBhIGxpc3Qgb2YgY2F0ZWdvcnkgaWRzIHRvIGV4Y2x1ZGUuXHJcbiAgICogQHBhcmFtIHtBcnJheX0gY3VzdG9tIC0gb3B0aW9uYWwsIGEgbGlzdCBjdXN0b20gZW1vamlzLCBlYWNoIGVtb2ppIGlzXHJcbiAgICogICBhbiBvYmplY3QsIHNlZSBkYXRhLmVtb2ppcyBhYm92ZSBmb3IgZXhhbXBsZXMuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBkYXRhLFxyXG4gICAge1xyXG4gICAgICBlbW9qaXNUb1Nob3dGaWx0ZXIsXHJcbiAgICAgIGluY2x1ZGUsXHJcbiAgICAgIGV4Y2x1ZGUsXHJcbiAgICAgIGN1c3RvbSxcclxuICAgICAgcmVjZW50LFxyXG4gICAgICByZWNlbnRMZW5ndGggPSAyMCxcclxuICAgIH0gPSB7fSxcclxuICApIHtcclxuICAgIHRoaXMuX2RhdGEgPSB1bmNvbXByZXNzKGRhdGEpXHJcbiAgICAvLyBDYWxsYmFjayB0byBleGNsdWRlIHNwZWNpZmljIGVtb2ppc1xyXG4gICAgdGhpcy5fZW1vamlzRmlsdGVyID0gZW1vamlzVG9TaG93RmlsdGVyIHx8IG51bGxcclxuICAgIC8vIENhdGVnb3JpZXMgdG8gaW5jbHVkZSAvIGV4Y2x1ZGVcclxuICAgIHRoaXMuX2luY2x1ZGUgPSBpbmNsdWRlIHx8IG51bGxcclxuICAgIHRoaXMuX2V4Y2x1ZGUgPSBleGNsdWRlIHx8IG51bGxcclxuICAgIC8vIEN1c3RvbSBlbW9qaXNcclxuICAgIHRoaXMuX2N1c3RvbSA9IGN1c3RvbSB8fCBbXVxyXG4gICAgLy8gUmVjZW50IGVtb2ppc1xyXG4gICAgLy8gVE9ETzogbWFrZSBwYXJhbWV0ZXIgY29uZmlndXJhYmxlXHJcbiAgICB0aGlzLl9yZWNlbnQgPSByZWNlbnQgfHwgZnJlcXVlbnRseS5nZXQocmVjZW50TGVuZ3RoKVxyXG5cclxuICAgIHRoaXMuX2Vtb2ppcyA9IHt9XHJcbiAgICB0aGlzLl9uYXRpdmVFbW9qaXMgPSB7fVxyXG4gICAgdGhpcy5fZW1vdGljb25zID0ge31cclxuXHJcbiAgICB0aGlzLl9jYXRlZ29yaWVzID0gW11cclxuICAgIHRoaXMuX3JlY2VudENhdGVnb3J5ID0geyBpZDogJ3JlY2VudCcsIG5hbWU6ICdSZWNlbnQnLCBlbW9qaXM6IFtdIH1cclxuICAgIHRoaXMuX2N1c3RvbUNhdGVnb3J5ID0geyBpZDogJ2N1c3RvbScsIG5hbWU6ICdDdXN0b20nLCBlbW9qaXM6IFtdIH1cclxuICAgIHRoaXMuX3NlYXJjaEluZGV4ID0ge31cclxuICAgIHRoaXMuYnVpbGRJbmRleCgpXHJcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpXHJcbiAgfVxyXG5cclxuICBidWlsZEluZGV4KCkge1xyXG4gICAgbGV0IGFsbENhdGVnb3JpZXMgPSB0aGlzLl9kYXRhLmNhdGVnb3JpZXNcclxuICAgIGxldCBjdXN0b21JbmRleCA9IC0xXHJcbiAgICBsZXQgcmVjZW50SW5kZXggPSAtMVxyXG5cclxuICAgIGlmICh0aGlzLl9pbmNsdWRlKSB7XHJcbiAgICAgIC8vIEdldHRpbmcgdGhlICdjdXN0b20nIGNhdGVnb3J5IGluZGV4XHJcbiAgICAgIGN1c3RvbUluZGV4ID0gdGhpcy5faW5jbHVkZS5pbmRleE9mKCdjdXN0b20nKVxyXG4gICAgICAvLyBHZXR0aW5nIHRoZSAncmVjZW50JyBjYXRlZ29yeSBpbmRleFxyXG4gICAgICByZWNlbnRJbmRleCA9IHRoaXMuX2luY2x1ZGUuaW5kZXhPZigncmVjZW50JylcclxuICAgICAgLy8gUmVtb3ZlIGNhdGVnb3JpZXMgdGhhdCBhcmUgbm90IGluIHRoZSBpbmNsdWRlIGxpc3QuXHJcbiAgICAgIGFsbENhdGVnb3JpZXMgPSBhbGxDYXRlZ29yaWVzLmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbmNsdWRlLmluY2x1ZGVzKGl0ZW0uaWQpXHJcbiAgICAgIH0pXHJcbiAgICAgIC8vIFNvcnQgY2F0ZWdvcmllcyBhY2NvcmRpbmcgdG8gdGhlIGluY2x1ZGUgbGlzdC5cclxuICAgICAgYWxsQ2F0ZWdvcmllcyA9IGFsbENhdGVnb3JpZXMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluZGV4QSA9IHRoaXMuX2luY2x1ZGUuaW5kZXhPZihhLmlkKVxyXG4gICAgICAgIGNvbnN0IGluZGV4QiA9IHRoaXMuX2luY2x1ZGUuaW5kZXhPZihiLmlkKVxyXG4gICAgICAgIGlmIChpbmRleEEgPCBpbmRleEIpIHtcclxuICAgICAgICAgIHJldHVybiAtMVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5kZXhBID4gaW5kZXhCKSB7XHJcbiAgICAgICAgICByZXR1cm4gMVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGFsbENhdGVnb3JpZXMuZm9yRWFjaCgoY2F0ZWdvcnlEYXRhKSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5pc0NhdGVnb3J5TmVlZGVkKGNhdGVnb3J5RGF0YS5pZCkpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBsZXQgY2F0ZWdvcnkgPSB7XHJcbiAgICAgICAgaWQ6IGNhdGVnb3J5RGF0YS5pZCxcclxuICAgICAgICBuYW1lOiBjYXRlZ29yeURhdGEubmFtZSxcclxuICAgICAgICBlbW9qaXM6IFtdLFxyXG4gICAgICB9XHJcbiAgICAgIGNhdGVnb3J5RGF0YS5lbW9qaXMuZm9yRWFjaCgoZW1vamlJZCkgPT4ge1xyXG4gICAgICAgIGxldCBlbW9qaSA9IHRoaXMuYWRkRW1vamkoZW1vamlJZClcclxuICAgICAgICBpZiAoZW1vamkpIHtcclxuICAgICAgICAgIGNhdGVnb3J5LmVtb2ppcy5wdXNoKGVtb2ppKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgaWYgKGNhdGVnb3J5LmVtb2ppcy5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLl9jYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgaWYgKHRoaXMuaXNDYXRlZ29yeU5lZWRlZCgncmVjZW50JykpIHtcclxuICAgICAgaWYgKHRoaXMuX3JlY2VudC5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLl9yZWNlbnQubWFwKChpZCkgPT4ge1xyXG4gICAgICAgICAgZm9yIChsZXQgY3VzdG9tRW1vamkgb2YgdGhpcy5fY3VzdG9tQ2F0ZWdvcnkuZW1vamlzKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXN0b21FbW9qaS5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgICB0aGlzLl9yZWNlbnRDYXRlZ29yeS5lbW9qaXMucHVzaChjdXN0b21FbW9qaSlcclxuICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHRoaXMuaGFzRW1vamkoaWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlY2VudENhdGVnb3J5LmVtb2ppcy5wdXNoKHRoaXMuZW1vamkoaWQpKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmlzQ2F0ZWdvcnlOZWVkZWQoJ2N1c3RvbScpKSB7XHJcbiAgICAgIGlmICh0aGlzLl9jdXN0b20ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZvciAobGV0IGN1c3RvbUVtb2ppIG9mIHRoaXMuX2N1c3RvbSkge1xyXG4gICAgICAgICAgdGhpcy5hZGRDdXN0b21FbW9qaShjdXN0b21FbW9qaSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGlzIGFsbG93cyB1cyB0byBvcmRlciB0aGUgJ3JlY2VudCcgYW5kICdjdXN0b20nIGFzIHdlIHdhbnRcclxuICAgIGlmICh0aGlzLmlzQ2F0ZWdvcnlOZWVkZWQoJ3JlY2VudCcpICYmIHRoaXMuaXNDYXRlZ29yeU5lZWRlZCgnY3VzdG9tJykpIHtcclxuICAgICAgaWYgKHJlY2VudEluZGV4IDwgY3VzdG9tSW5kZXgpIHtcclxuICAgICAgICAvLyBQdXNoIHRoZSByZWNlbnQgY2F0ZWdvcnkgdG8gaXQncyBpbmRleCBpZiBkZWZpbmVkXHJcbiAgICAgICAgdGhpcy5hZGRDYXRlZ29yeSh0aGlzLl9yZWNlbnRDYXRlZ29yeSwgcmVjZW50SW5kZXgpXHJcbiAgICAgICAgLy8gUHVzaCB0aGUgY3VzdG9tIGNhdGVnb3J5IHRvIGl0J3MgaW5kZXggaWYgZGVmaW5lZFxyXG4gICAgICAgIHRoaXMuYWRkQ2F0ZWdvcnkodGhpcy5fY3VzdG9tQ2F0ZWdvcnksIGN1c3RvbUluZGV4KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFB1c2ggdGhlIGN1c3RvbSBjYXRlZ29yeSB0byBpdCdzIGluZGV4IGlmIGRlZmluZWRcclxuICAgICAgICB0aGlzLmFkZENhdGVnb3J5KHRoaXMuX2N1c3RvbUNhdGVnb3J5LCBjdXN0b21JbmRleClcclxuICAgICAgICAvLyBQdXNoIHRoZSByZWNlbnQgY2F0ZWdvcnkgdG8gaXQncyBpbmRleCBpZiBkZWZpbmVkXHJcbiAgICAgICAgdGhpcy5hZGRDYXRlZ29yeSh0aGlzLl9yZWNlbnRDYXRlZ29yeSwgcmVjZW50SW5kZXgpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5pc0NhdGVnb3J5TmVlZGVkKCdyZWNlbnQnKSkge1xyXG4gICAgICAvLyBQdXNoIHRoZSByZWNlbnQgY2F0ZWdvcnkgdG8gaXQncyBpbmRleCBpZiBkZWZpbmVkXHJcbiAgICAgIHRoaXMuYWRkQ2F0ZWdvcnkodGhpcy5fcmVjZW50Q2F0ZWdvcnksIHJlY2VudEluZGV4KVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmlzQ2F0ZWdvcnlOZWVkZWQoJ2N1c3RvbScpKSB7XHJcbiAgICAgIC8vIFB1c2ggdGhlIGN1c3RvbSBjYXRlZ29yeSB0byBpdCdzIGluZGV4IGlmIGRlZmluZWRcclxuICAgICAgdGhpcy5hZGRDYXRlZ29yeSh0aGlzLl9jdXN0b21DYXRlZ29yeSwgY3VzdG9tSW5kZXgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGaW5kIHRoZSBlbW9qaSBmcm9tIHRoZSBzdHJpbmdcclxuICAgKi9cclxuICBmaW5kRW1vamkoZW1vamksIHNraW4pIHtcclxuICAgIC8vIDEuIFBhcnNlIGFzIDplbW9qaV9uYW1lOnNraW4tdG9uZS14eDpcclxuICAgIGxldCBtYXRjaGVzID0gZW1vamkubWF0Y2goQ09MT05TX1JFR0VYKVxyXG5cclxuICAgIGlmIChtYXRjaGVzKSB7XHJcbiAgICAgIGVtb2ppID0gbWF0Y2hlc1sxXVxyXG4gICAgICBpZiAobWF0Y2hlc1syXSkge1xyXG4gICAgICAgIHNraW4gPSBwYXJzZUludChtYXRjaGVzWzJdLCAxMClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIDIuIENoZWNrIGlmIHRoZSBzcGVjaWZpZWQgZW1vamkgaXMgYW4gYWxpYXNcclxuICAgIGlmICh0aGlzLl9kYXRhLmFsaWFzZXMuaGFzT3duUHJvcGVydHkoZW1vamkpKSB7XHJcbiAgICAgIGVtb2ppID0gdGhpcy5fZGF0YS5hbGlhc2VzW2Vtb2ppXVxyXG4gICAgfVxyXG5cclxuICAgIC8vIDMuIENoZWNrIGlmIHdlIGhhdmUgdGhlIHNwZWNpZmllZCBlbW9qaVxyXG4gICAgaWYgKHRoaXMuX2Vtb2ppcy5oYXNPd25Qcm9wZXJ0eShlbW9qaSkpIHtcclxuICAgICAgbGV0IGVtb2ppT2JqZWN0ID0gdGhpcy5fZW1vamlzW2Vtb2ppXVxyXG4gICAgICBpZiAoc2tpbikge1xyXG4gICAgICAgIHJldHVybiBlbW9qaU9iamVjdC5nZXRTa2luKHNraW4pXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGVtb2ppT2JqZWN0XHJcbiAgICB9XHJcblxyXG4gICAgLy8gNC4gQ2hlY2sgaWYgd2UgaGF2ZSB0aGUgc3BlY2lmaWVkIG5hdGl2ZSBlbW9qaVxyXG4gICAgaWYgKHRoaXMuX25hdGl2ZUVtb2ppcy5oYXNPd25Qcm9wZXJ0eShlbW9qaSkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX25hdGl2ZUVtb2ppc1tlbW9qaV1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICBjYXRlZ29yaWVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NhdGVnb3JpZXNcclxuICB9XHJcblxyXG4gIGVtb2ppKGVtb2ppSWQpIHtcclxuICAgIGlmICh0aGlzLl9kYXRhLmFsaWFzZXMuaGFzT3duUHJvcGVydHkoZW1vamlJZCkpIHtcclxuICAgICAgZW1vamlJZCA9IHRoaXMuX2RhdGEuYWxpYXNlc1tlbW9qaUlkXVxyXG4gICAgfVxyXG4gICAgbGV0IGVtb2ppID0gdGhpcy5fZW1vamlzW2Vtb2ppSWRdXHJcbiAgICBpZiAoIWVtb2ppKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG5vdCBmaW5kIGVtb2ppIGJ5IGlkOiAnICsgZW1vamlJZClcclxuICAgIH1cclxuICAgIHJldHVybiBlbW9qaVxyXG4gIH1cclxuXHJcbiAgZmlyc3RFbW9qaSgpIHtcclxuICAgIGxldCBlbW9qaSA9IHRoaXMuX2Vtb2ppc1tPYmplY3Qua2V5cyh0aGlzLl9lbW9qaXMpWzBdXVxyXG4gICAgaWYgKCFlbW9qaSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBub3QgZ2V0IGZpcnN0IGVtb2ppJylcclxuICAgIH1cclxuICAgIHJldHVybiBlbW9qaVxyXG4gIH1cclxuXHJcbiAgaGFzRW1vamkoZW1vamlJZCkge1xyXG4gICAgaWYgKHRoaXMuX2RhdGEuYWxpYXNlcy5oYXNPd25Qcm9wZXJ0eShlbW9qaUlkKSkge1xyXG4gICAgICBlbW9qaUlkID0gdGhpcy5fZGF0YS5hbGlhc2VzW2Vtb2ppSWRdXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fZW1vamlzW2Vtb2ppSWRdKSB7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIG5hdGl2ZUVtb2ppKHVuaWNvZGVFbW9qaSkge1xyXG4gICAgaWYgKHRoaXMuX25hdGl2ZUVtb2ppcy5oYXNPd25Qcm9wZXJ0eSh1bmljb2RlRW1vamkpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9uYXRpdmVFbW9qaXNbdW5pY29kZUVtb2ppXVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcblxyXG4gIHNlYXJjaCh2YWx1ZSwgbWF4UmVzdWx0cykge1xyXG4gICAgbWF4UmVzdWx0cyB8fCAobWF4UmVzdWx0cyA9IDc1KVxyXG4gICAgaWYgKCF2YWx1ZS5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZSA9PSAnLScgfHwgdmFsdWUgPT0gJy0xJykge1xyXG4gICAgICByZXR1cm4gW3RoaXMuZW1vamkoJy0xJyldXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHZhbHVlcyA9IHZhbHVlLnRvTG93ZXJDYXNlKCkuc3BsaXQoL1tcXHN8LHxcXC18X10rLylcclxuICAgIGxldCBhbGxSZXN1bHRzID0gW11cclxuXHJcbiAgICBpZiAodmFsdWVzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgdmFsdWVzID0gW3ZhbHVlc1swXSwgdmFsdWVzWzFdXVxyXG4gICAgfVxyXG5cclxuICAgIGFsbFJlc3VsdHMgPSB2YWx1ZXNcclxuICAgICAgLm1hcCgodmFsdWUpID0+IHtcclxuICAgICAgICAvLyBTdGFydCBzZWFyY2hpbiBpbiB0aGUgZ2xvYmFsIGxpc3Qgb2YgZW1vamlzXHJcbiAgICAgICAgbGV0IGVtb2ppcyA9IHRoaXMuX2Vtb2ppc1xyXG4gICAgICAgIGxldCBjdXJyZW50SW5kZXggPSB0aGlzLl9zZWFyY2hJbmRleFxyXG4gICAgICAgIGxldCBsZW5ndGggPSAwXHJcblxyXG4gICAgICAgIGZvciAobGV0IGNoYXJJbmRleCA9IDA7IGNoYXJJbmRleCA8IHZhbHVlLmxlbmd0aDsgY2hhckluZGV4KyspIHtcclxuICAgICAgICAgIGNvbnN0IGNoYXIgPSB2YWx1ZVtjaGFySW5kZXhdXHJcbiAgICAgICAgICBsZW5ndGgrK1xyXG5cclxuICAgICAgICAgIGN1cnJlbnRJbmRleFtjaGFyXSB8fCAoY3VycmVudEluZGV4W2NoYXJdID0ge30pXHJcbiAgICAgICAgICBjdXJyZW50SW5kZXggPSBjdXJyZW50SW5kZXhbY2hhcl1cclxuXHJcbiAgICAgICAgICBpZiAoIWN1cnJlbnRJbmRleC5yZXN1bHRzKSB7XHJcbiAgICAgICAgICAgIGxldCBzY29yZXMgPSB7fVxyXG4gICAgICAgICAgICBjdXJyZW50SW5kZXgucmVzdWx0cyA9IFtdXHJcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleC5lbW9qaXMgPSB7fVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgZW1vamlJZCBpbiBlbW9qaXMpIHtcclxuICAgICAgICAgICAgICBsZXQgZW1vamkgPSBlbW9qaXNbZW1vamlJZF1cclxuICAgICAgICAgICAgICAvLyBzZWFyY2ggaXMgYSBjb21tYS1zZXBhcmF0ZWQgc3RyaW5nIHdpdGggd29yZHMsIHJlbGF0ZWRcclxuICAgICAgICAgICAgICAvLyB0byB0aGUgZW1vamksIGZvciBleGFtcGxlOlxyXG4gICAgICAgICAgICAgIC8vIHNlYXJjaDogXCJzbWlsZXksc21pbGluZyxmYWNlLGpveSxoYWhhLDpkLDopLHNtaWxlLGZ1bm55LD0pLD0tKVwiLFxyXG4gICAgICAgICAgICAgIGxldCBzZWFyY2ggPSBlbW9qaS5fZGF0YS5zZWFyY2hcclxuICAgICAgICAgICAgICBsZXQgc3ViID0gdmFsdWUuc3Vic3RyKDAsIGxlbmd0aClcclxuICAgICAgICAgICAgICBsZXQgc3ViSW5kZXggPSBzZWFyY2guaW5kZXhPZihzdWIpXHJcbiAgICAgICAgICAgICAgaWYgKHN1YkluZGV4ICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2NvcmUgPSBzdWJJbmRleCArIDFcclxuICAgICAgICAgICAgICAgIGlmIChzdWIgPT0gZW1vamlJZCkgc2NvcmUgPSAwXHJcblxyXG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4LnJlc3VsdHMucHVzaChlbW9qaSlcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleC5lbW9qaXNbZW1vamlJZF0gPSBlbW9qaVxyXG5cclxuICAgICAgICAgICAgICAgIHNjb3Jlc1tlbW9qaUlkXSA9IHNjb3JlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleC5yZXN1bHRzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICB2YXIgYVNjb3JlID0gc2NvcmVzW2EuaWRdLFxyXG4gICAgICAgICAgICAgICAgYlNjb3JlID0gc2NvcmVzW2IuaWRdXHJcbiAgICAgICAgICAgICAgcmV0dXJuIGFTY29yZSAtIGJTY29yZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIGNvbnRpbnVlIHNlYXJjaCBpbiB0aGUgcmVkdWNlZCBzZXQgb2YgZW1vamlzXHJcbiAgICAgICAgICBlbW9qaXMgPSBjdXJyZW50SW5kZXguZW1vamlzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjdXJyZW50SW5kZXgucmVzdWx0c1xyXG4gICAgICAgIC8vIFRoZSBcImZpbHRlclwiIGNhbGwgcmVtb3ZlcyB1bmRlZmluZWQgdmFsdWVzIGZyb20gYWxsUmVzdWx0c1xyXG4gICAgICAgIC8vIGFycmF5LCBmb3IgZXhhbXBsZSwgaWYgd2UgaGF2ZSBcInRlc3QgXCIgKHdpdGggdHJhaWxpbmcgc3BhY2UpLFxyXG4gICAgICAgIC8vIHdlIHdpbGwgZ2V0IFwiW0FycmF5LCB1bmRlZmluZWRdXCIgZm9yIGFsbFJlc3VsdHMgYW5kIGFmdGVyXHJcbiAgICAgICAgLy8gdGhlIFwiZmlsdGVyXCIgY2FsbCBpdCB3aWxsIHR1cm4gaW50byBcIltBcnJheV1cIlxyXG4gICAgICB9KVxyXG4gICAgICAuZmlsdGVyKChhKSA9PiBhKVxyXG5cclxuICAgIHZhciByZXN1bHRzID0gbnVsbFxyXG4gICAgaWYgKGFsbFJlc3VsdHMubGVuZ3RoID4gMSkge1xyXG4gICAgICByZXN1bHRzID0gaW50ZXJzZWN0LmFwcGx5KG51bGwsIGFsbFJlc3VsdHMpXHJcbiAgICB9IGVsc2UgaWYgKGFsbFJlc3VsdHMubGVuZ3RoKSB7XHJcbiAgICAgIHJlc3VsdHMgPSBhbGxSZXN1bHRzWzBdXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXN1bHRzID0gW11cclxuICAgIH1cclxuICAgIGlmIChyZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gbWF4UmVzdWx0cykge1xyXG4gICAgICByZXN1bHRzID0gcmVzdWx0cy5zbGljZSgwLCBtYXhSZXN1bHRzKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdHNcclxuICB9XHJcblxyXG4gIGFkZEN1c3RvbUVtb2ppKGN1c3RvbUVtb2ppKSB7XHJcbiAgICBsZXQgZW1vamlEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgY3VzdG9tRW1vamksIHtcclxuICAgICAgaWQ6IGN1c3RvbUVtb2ppLnNob3J0X25hbWVzWzBdLFxyXG4gICAgICBjdXN0b206IHRydWUsXHJcbiAgICB9KVxyXG4gICAgaWYgKCFlbW9qaURhdGEuc2VhcmNoKSB7XHJcbiAgICAgIGVtb2ppRGF0YS5zZWFyY2ggPSBidWlsZFNlYXJjaChlbW9qaURhdGEpXHJcbiAgICB9XHJcbiAgICBsZXQgZW1vamkgPSBuZXcgRW1vamlEYXRhKGVtb2ppRGF0YSlcclxuICAgIHRoaXMuX2Vtb2ppc1tlbW9qaS5pZF0gPSBlbW9qaVxyXG4gICAgdGhpcy5fY3VzdG9tQ2F0ZWdvcnkuZW1vamlzLnB1c2goZW1vamkpXHJcbiAgICByZXR1cm4gZW1vamlcclxuICB9XHJcblxyXG4gIGFkZEVtb2ppKGVtb2ppSWQpIHtcclxuICAgIC8vIFdlIGV4cGVjdCB0aGUgY29ycmVjdCBlbW9qaSBpZCB0aGF0IGlzIHByZXNlbnQgaW4gdGhlIGVtb2ppcyBkYXRhLlxyXG4gICAgbGV0IGRhdGEgPSB0aGlzLl9kYXRhLmVtb2ppc1tlbW9qaUlkXVxyXG5cclxuICAgIGlmICghdGhpcy5pc0Vtb2ppTmVlZGVkKGRhdGEpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBlbW9qaSA9IG5ldyBFbW9qaURhdGEoZGF0YSlcclxuICAgIHRoaXMuX2Vtb2ppc1tlbW9qaUlkXSA9IGVtb2ppXHJcbiAgICBpZiAoZW1vamkubmF0aXZlKSB7XHJcbiAgICAgIHRoaXMuX25hdGl2ZUVtb2ppc1tlbW9qaS5uYXRpdmVdID0gZW1vamlcclxuICAgIH1cclxuICAgIGlmIChlbW9qaS5fc2tpbnMpIHtcclxuICAgICAgZm9yIChsZXQgaWR4IGluIGVtb2ppLl9za2lucykge1xyXG4gICAgICAgIGxldCBza2luID0gZW1vamkuX3NraW5zW2lkeF1cclxuICAgICAgICBpZiAoc2tpbi5uYXRpdmUpIHtcclxuICAgICAgICAgIHRoaXMuX25hdGl2ZUVtb2ppc1tza2luLm5hdGl2ZV0gPSBza2luXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVtb2ppLmVtb3RpY29ucykge1xyXG4gICAgICBlbW9qaS5lbW90aWNvbnMuZm9yRWFjaCgoZW1vdGljb24pID0+IHtcclxuICAgICAgICBpZiAodGhpcy5fZW1vdGljb25zW2Vtb3RpY29uXSkge1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2Vtb3RpY29uc1tlbW90aWNvbl0gPSBlbW9qaUlkXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZW1vamlcclxuICB9XHJcblxyXG4gIGFkZENhdGVnb3J5KGNhdGVnb3J5LCBpbmRleCkge1xyXG4gICAgaWYgKGNhdGVnb3J5LmVtb2ppcy5sZW5ndGgpIHtcclxuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgIHRoaXMuX2NhdGVnb3JpZXMuc3BsaWNlKGluZGV4LCAwLCBjYXRlZ29yeSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9jYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIHdlIG5lZWQgdG8gaW5jbHVkZSBnaXZlbiBjYXRlZ29yeS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjYXRlZ29yeV9pZCAtIFRoZSBjYXRlZ29yeSBpZC5cclxuICAgKiBAcmV0dXJuIHtib29sZWFufSAtIFdoZXRoZXIgdG8gaW5jbHVkZSB0aGUgZW1vamkuXHJcbiAgICovXHJcbiAgaXNDYXRlZ29yeU5lZWRlZChjYXRlZ29yeV9pZCkge1xyXG4gICAgbGV0IGlzSW5jbHVkZWQgPVxyXG4gICAgICB0aGlzLl9pbmNsdWRlICYmIHRoaXMuX2luY2x1ZGUubGVuZ3RoXHJcbiAgICAgICAgPyB0aGlzLl9pbmNsdWRlLmluZGV4T2YoY2F0ZWdvcnlfaWQpID4gLTFcclxuICAgICAgICA6IHRydWVcclxuICAgIGxldCBpc0V4Y2x1ZGVkID1cclxuICAgICAgdGhpcy5fZXhjbHVkZSAmJiB0aGlzLl9leGNsdWRlLmxlbmd0aFxyXG4gICAgICAgID8gdGhpcy5fZXhjbHVkZS5pbmRleE9mKGNhdGVnb3J5X2lkKSA+IC0xXHJcbiAgICAgICAgOiBmYWxzZVxyXG4gICAgaWYgKCFpc0luY2x1ZGVkIHx8IGlzRXhjbHVkZWQpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgd2UgbmVlZCB0byBpbmNsdWRlIGdpdmVuIGVtb2ppLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IGVtb2ppIC0gVGhlIHJhdyBlbW9qaSBvYmplY3QuXHJcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gLSBXaGV0aGVyIHRvIGluY2x1ZGUgdGhlIGVtb2ppLlxyXG4gICAqL1xyXG4gIGlzRW1vamlOZWVkZWQoZW1vamkpIHtcclxuICAgIGlmICh0aGlzLl9lbW9qaXNGaWx0ZXIpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2Vtb2ppc0ZpbHRlcihlbW9qaSlcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRW1vamlEYXRhIHtcclxuICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICB0aGlzLl9kYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSlcclxuICAgIHRoaXMuX3NraW5zID0gbnVsbFxyXG4gICAgaWYgKHRoaXMuX2RhdGEuc2tpbl92YXJpYXRpb25zKSB7XHJcbiAgICAgIHRoaXMuX3NraW5zID0gW11cclxuICAgICAgZm9yICh2YXIgc2tpbklkeCBpbiBTS0lOUykge1xyXG4gICAgICAgIGxldCBza2luS2V5ID0gU0tJTlNbc2tpbklkeF1cclxuICAgICAgICBsZXQgdmFyaWF0aW9uRGF0YSA9IHRoaXMuX2RhdGEuc2tpbl92YXJpYXRpb25zW3NraW5LZXldXHJcbiAgICAgICAgbGV0IHNraW5EYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSlcclxuICAgICAgICBmb3IgKGxldCBrIGluIHZhcmlhdGlvbkRhdGEpIHtcclxuICAgICAgICAgIHNraW5EYXRhW2tdID0gdmFyaWF0aW9uRGF0YVtrXVxyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxldGUgc2tpbkRhdGEuc2tpbl92YXJpYXRpb25zXHJcbiAgICAgICAgc2tpbkRhdGFbJ3NraW5fdG9uZSddID0gcGFyc2VJbnQoc2tpbklkeCkgKyAxXHJcbiAgICAgICAgdGhpcy5fc2tpbnMucHVzaChuZXcgRW1vamlEYXRhKHNraW5EYXRhKSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5fc2FuaXRpemVkID0gc2FuaXRpemUodGhpcy5fZGF0YSlcclxuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLl9zYW5pdGl6ZWQpIHtcclxuICAgICAgdGhpc1trZXldID0gdGhpcy5fc2FuaXRpemVkW2tleV1cclxuICAgIH1cclxuICAgIHRoaXMuc2hvcnRfbmFtZXMgPSB0aGlzLl9kYXRhLnNob3J0X25hbWVzXHJcbiAgICB0aGlzLnNob3J0X25hbWUgPSB0aGlzLl9kYXRhLnNob3J0X25hbWVzWzBdXHJcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpXHJcbiAgfVxyXG5cclxuICBnZXRTa2luKHNraW5JZHgpIHtcclxuICAgIGlmIChza2luSWR4ICYmIHNraW5JZHggIT0gJ25hdGl2ZScgJiYgdGhpcy5fc2tpbnMpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3NraW5zW3NraW5JZHggLSAxXVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcblxyXG4gIGdldFBvc2l0aW9uKCkge1xyXG4gICAgbGV0IG11bHRpcGx5ID0gMTAwIC8gU0hFRVRfQ09MVU1OUyxcclxuICAgICAgeCA9IE1hdGgucm91bmQobXVsdGlwbHkgKiB0aGlzLl9kYXRhLnNoZWV0X3ggKiAxMDApIC8gMTAwLFxyXG4gICAgICB5ID0gTWF0aC5yb3VuZChtdWx0aXBseSAqIHRoaXMuX2RhdGEuc2hlZXRfeSAqIDEwMCkgLyAxMDBcclxuICAgIHJldHVybiBgJHt4fSUgJHt5fSVgXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRW1vamlWaWV3IHtcclxuICAvKipcclxuICAgKiBlbW9qaSAtIEVtb2ppIHRvIGRpc3BsYXlcclxuICAgKiBzZXQgLSBzdHJpbmcsIGVtb2ppIHNldCBuYW1lXHJcbiAgICogbmF0aXZlIC0gYm9vbGVhbiwgd2hldGhlciB0byByZW5kZXIgbmF0aXZlIGVtb2ppXHJcbiAgICogZmFsbGJhY2sgLSBmYWxsYmFjayBmdW5jdGlvbiB0byByZW5kZXIgbWlzc2luZyBlbW9qaSwgb3B0aW9uYWxcclxuICAgKiBlbW9qaVRvb2x0aXAgLSB3ZXRoZXIgd2UgbmVlZCB0byBzaG93IHRoZSBlbW9qaSB0b29sdGlwLCBvcHRpb25hbFxyXG4gICAqIGVtb2ppU2l6ZSAtIGVtb2ppIHNpemUgaW4gcGl4ZWxzLCBvcHRpb25hbFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVtb2ppLCBza2luLCBzZXQsIG5hdGl2ZSwgZmFsbGJhY2ssIGVtb2ppVG9vbHRpcCwgZW1vamlTaXplKSB7XHJcbiAgICB0aGlzLl9lbW9qaSA9IGVtb2ppXHJcbiAgICB0aGlzLl9uYXRpdmUgPSBuYXRpdmVcclxuICAgIHRoaXMuX3NraW4gPSBza2luXHJcbiAgICB0aGlzLl9zZXQgPSBzZXRcclxuICAgIHRoaXMuX2ZhbGxiYWNrID0gZmFsbGJhY2tcclxuXHJcbiAgICB0aGlzLmNhblJlbmRlciA9IHRoaXMuX2NhblJlbmRlcigpXHJcbiAgICB0aGlzLmNzc0NsYXNzID0gdGhpcy5fY3NzQ2xhc3MoKVxyXG4gICAgdGhpcy5jc3NTdHlsZSA9IHRoaXMuX2Nzc1N0eWxlKGVtb2ppU2l6ZSlcclxuICAgIHRoaXMuY29udGVudCA9IHRoaXMuX2NvbnRlbnQoKVxyXG4gICAgdGhpcy50aXRsZSA9IGVtb2ppVG9vbHRpcCA9PT0gdHJ1ZSA/IGVtb2ppLnNob3J0X25hbWUgOiBudWxsXHJcblxyXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKVxyXG4gIH1cclxuXHJcbiAgZ2V0RW1vamkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZW1vamkuZ2V0U2tpbih0aGlzLl9za2luKVxyXG4gIH1cclxuXHJcbiAgX2NhblJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMuX2lzQ3VzdG9tKCkgfHwgdGhpcy5faXNOYXRpdmUoKSB8fCB0aGlzLl9oYXNFbW9qaSgpIHx8IHRoaXMuX2ZhbGxiYWNrXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBfY3NzQ2xhc3MoKSB7XHJcbiAgICByZXR1cm4gWydlbW9qaS1zZXQtJyArIHRoaXMuX3NldCwgJ2Vtb2ppLXR5cGUtJyArIHRoaXMuX2Vtb2ppVHlwZSgpXVxyXG4gIH1cclxuXHJcbiAgX2Nzc1N0eWxlKGVtb2ppU2l6ZSkge1xyXG4gICAgbGV0IGNzc1N0eWxlID0ge31cclxuICAgIGlmICh0aGlzLl9pc0N1c3RvbSgpKSB7XHJcbiAgICAgIGNzc1N0eWxlID0ge1xyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybCgnICsgdGhpcy5nZXRFbW9qaSgpLl9kYXRhLmltYWdlVXJsICsgJyknLFxyXG4gICAgICAgIGJhY2tncm91bmRTaXplOiAnMTAwJScsXHJcbiAgICAgICAgd2lkdGg6IGVtb2ppU2l6ZSArICdweCcsXHJcbiAgICAgICAgaGVpZ2h0OiBlbW9qaVNpemUgKyAncHgnLFxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2hhc0Vtb2ppKCkgJiYgIXRoaXMuX2lzTmF0aXZlKCkpIHtcclxuICAgICAgY3NzU3R5bGUgPSB7XHJcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiB0aGlzLmdldEVtb2ppKCkuZ2V0UG9zaXRpb24oKSxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGVtb2ppU2l6ZSkge1xyXG4gICAgICBpZiAodGhpcy5faXNOYXRpdmUoKSkge1xyXG4gICAgICAgIC8vIFNldCBmb250LXNpemUgZm9yIG5hdGl2ZSBlbW9qaS5cclxuICAgICAgICBjc3NTdHlsZSA9IE9iamVjdC5hc3NpZ24oY3NzU3R5bGUsIHtcclxuICAgICAgICAgIC8vIGZvbnQtc2l6ZSBpcyB1c2VkIGZvciBuYXRpdmUgZW1vamkgd2hpY2ggd2UgbmVlZFxyXG4gICAgICAgICAgLy8gdG8gc2NhbGUgd2l0aCAwLjggZmFjdG9yIHRvIGhhdmUgdGhlbSBsb29rIGFwcHJveGltYXRlbHlcclxuICAgICAgICAgIC8vIHRoZSBzYW1lIHNpemUgYXMgaW1hZ2UtYmFzZWQgZW1vamwuXHJcbiAgICAgICAgICBmb250U2l6ZTogTWF0aC5yb3VuZChlbW9qaVNpemUgKiAwLjggKiAxMCkgLyAxMCArICdweCcsXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBTZXQgd2lkdGgvaGVpZ2h0IGZvciBpbWFnZSBlbW9qaS5cclxuICAgICAgICBjc3NTdHlsZSA9IE9iamVjdC5hc3NpZ24oY3NzU3R5bGUsIHtcclxuICAgICAgICAgIHdpZHRoOiBlbW9qaVNpemUgKyAncHgnLFxyXG4gICAgICAgICAgaGVpZ2h0OiBlbW9qaVNpemUgKyAncHgnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjc3NTdHlsZVxyXG4gIH1cclxuXHJcbiAgX2NvbnRlbnQoKSB7XHJcbiAgICBpZiAodGhpcy5faXNDdXN0b20oKSkge1xyXG4gICAgICByZXR1cm4gJydcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9pc05hdGl2ZSgpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldEVtb2ppKCkubmF0aXZlXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5faGFzRW1vamkoKSkge1xyXG4gICAgICByZXR1cm4gJydcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9mYWxsYmFjayA/IHRoaXMuX2ZhbGxiYWNrKHRoaXMuZ2V0RW1vamkoKSkgOiBudWxsXHJcbiAgfVxyXG5cclxuICBfaXNOYXRpdmUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmF0aXZlXHJcbiAgfVxyXG5cclxuICBfaXNDdXN0b20oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRFbW9qaSgpLmN1c3RvbVxyXG4gIH1cclxuXHJcbiAgX2hhc0Vtb2ppKCkge1xyXG4gICAgaWYgKCF0aGlzLmdldEVtb2ppKCkuX2RhdGEpIHtcclxuICAgICAgLy8gUmV0dXJuIGZhbHNlIGlmIHdlIGhhdmUgbm8gZGF0YS5cclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYXNJbWFnZSA9IHRoaXMuZ2V0RW1vamkoKS5fZGF0YVsnaGFzX2ltZ18nICsgdGhpcy5fc2V0XVxyXG4gICAgaWYgKGhhc0ltYWdlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gaGFzX2ltZ194eHggaW4gdGhlIGRhdGEsIHdlIGFyZSB3b3JraW5nIHdpdGhcclxuICAgICAgLy8gc3BlY2lmaWMgZGF0YSBmaWxlLCBsaWtlIGZhY2Vib29rLmpzb24sIHNvIHdlIGFzc3VtZSBhbGxcclxuICAgICAgLy8gZW1vamlzIGFyZSBhdmFpbGFibGUgKHRoZSA6c2V0IHNldHRpbmcgZm9yIHBpY2tlciBzaG91bGRcclxuICAgICAgLy8gbWF0Y2ggdGhlIGRhdGEgZmlsZSkuXHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICAvLyBPdGhlcndpc2UsIHdlIGFyZSB1c2luZyBhbGwuanNvbiBhbmQgY2FuIHN3aXRjaCBiZXR3ZWVuIGRpZmZlcmVudFxyXG4gICAgLy8gc2V0cyAtIGluIHRoaXMgY2FzZSB0aGUgYGhhc19pbWdfe3NldF9uYW1lfWAgaXMgYSBib29sZWFuIHRoYXRcclxuICAgIC8vIGluZGljYXRlcyBpZiB0aGVyZSBpcyBzdWNoIGltYWdlIG9yIG5vdCBmb3IgYSBnaXZlbiBzZXQuXHJcbiAgICByZXR1cm4gaGFzSW1hZ2VcclxuICB9XHJcblxyXG4gIF9lbW9qaVR5cGUoKSB7XHJcbiAgICBpZiAodGhpcy5faXNDdXN0b20oKSkge1xyXG4gICAgICByZXR1cm4gJ2N1c3RvbSdcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9pc05hdGl2ZSgpKSB7XHJcbiAgICAgIHJldHVybiAnbmF0aXZlJ1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX2hhc0Vtb2ppKCkpIHtcclxuICAgICAgcmV0dXJuICdpbWFnZSdcclxuICAgIH1cclxuICAgIHJldHVybiAnZmFsbGJhY2snXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemUoZW1vamkpIHtcclxuICB2YXIge1xyXG4gICAgICBuYW1lLFxyXG4gICAgICBzaG9ydF9uYW1lcyxcclxuICAgICAgc2tpbl90b25lLFxyXG4gICAgICBza2luX3ZhcmlhdGlvbnMsXHJcbiAgICAgIGVtb3RpY29ucyxcclxuICAgICAgdW5pZmllZCxcclxuICAgICAgY3VzdG9tLFxyXG4gICAgICBpbWFnZVVybCxcclxuICAgIH0gPSBlbW9qaSxcclxuICAgIGlkID0gZW1vamkuaWQgfHwgc2hvcnRfbmFtZXNbMF0sXHJcbiAgICBjb2xvbnMgPSBgOiR7aWR9OmBcclxuXHJcbiAgaWYgKGN1c3RvbSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQsXHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIGNvbG9ucyxcclxuICAgICAgZW1vdGljb25zLFxyXG4gICAgICBjdXN0b20sXHJcbiAgICAgIGltYWdlVXJsLFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHNraW5fdG9uZSkge1xyXG4gICAgY29sb25zICs9IGA6c2tpbi10b25lLSR7c2tpbl90b25lfTpgXHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaWQsXHJcbiAgICBuYW1lLFxyXG4gICAgY29sb25zLFxyXG4gICAgZW1vdGljb25zLFxyXG4gICAgdW5pZmllZDogdW5pZmllZC50b0xvd2VyQ2FzZSgpLFxyXG4gICAgc2tpbjogc2tpbl90b25lIHx8IChza2luX3ZhcmlhdGlvbnMgPyAxIDogbnVsbCksXHJcbiAgICBuYXRpdmU6IHVuaWZpZWRUb05hdGl2ZSh1bmlmaWVkKSxcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnXHJcblxyXG5jb25zdCBERUZBVUxUUyA9IFtcclxuICAnKzEnLFxyXG4gICdncmlubmluZycsXHJcbiAgJ2tpc3NpbmdfaGVhcnQnLFxyXG4gICdoZWFydF9leWVzJyxcclxuICAnbGF1Z2hpbmcnLFxyXG4gICdzdHVja19vdXRfdG9uZ3VlX3dpbmtpbmdfZXllJyxcclxuICAnc3dlYXRfc21pbGUnLFxyXG4gICdqb3knLFxyXG4gICdzY3JlYW0nLFxyXG4gICdkaXNhcHBvaW50ZWQnLFxyXG4gICd1bmFtdXNlZCcsXHJcbiAgJ3dlYXJ5JyxcclxuICAnc29iJyxcclxuICAnc3VuZ2xhc3NlcycsXHJcbiAgJ2hlYXJ0JyxcclxuICAncG9vcCcsXHJcbl1cclxuXHJcbmxldCBmcmVxdWVudGx5LCBpbml0aWFsaXplZFxyXG5sZXQgZGVmYXVsdHMgPSB7fVxyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICBpbml0aWFsaXplZCA9IHRydWVcclxuICBmcmVxdWVudGx5ID0gc3RvcmUuZ2V0KCdmcmVxdWVudGx5JylcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkKGVtb2ppKSB7XHJcbiAgaWYgKCFpbml0aWFsaXplZCkgaW5pdCgpXHJcbiAgdmFyIHsgaWQgfSA9IGVtb2ppXHJcblxyXG4gIGZyZXF1ZW50bHkgfHwgKGZyZXF1ZW50bHkgPSBkZWZhdWx0cylcclxuICBmcmVxdWVudGx5W2lkXSB8fCAoZnJlcXVlbnRseVtpZF0gPSAwKVxyXG4gIGZyZXF1ZW50bHlbaWRdICs9IDFcclxuXHJcbiAgc3RvcmUuc2V0KCdsYXN0JywgaWQpXHJcbiAgc3RvcmUuc2V0KCdmcmVxdWVudGx5JywgZnJlcXVlbnRseSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0KG1heE51bWJlcikge1xyXG4gIGlmICghaW5pdGlhbGl6ZWQpIGluaXQoKVxyXG4gIGlmICghZnJlcXVlbnRseSkge1xyXG4gICAgZGVmYXVsdHMgPSB7fVxyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IFtdXHJcblxyXG4gICAgbGV0IGRlZmF1bHRMZW5ndGggPSBNYXRoLm1pbihtYXhOdW1iZXIsIERFRkFVTFRTLmxlbmd0aClcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVmYXVsdExlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGRlZmF1bHRzW0RFRkFVTFRTW2ldXSA9IGRlZmF1bHRMZW5ndGggLSBpXHJcbiAgICAgIHJlc3VsdC5wdXNoKERFRkFVTFRTW2ldKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHRcclxuICB9XHJcblxyXG4gIGNvbnN0IHF1YW50aXR5ID0gbWF4TnVtYmVyXHJcbiAgY29uc3QgZnJlcXVlbnRseUtleXMgPSBbXVxyXG5cclxuICBmb3IgKGxldCBrZXkgaW4gZnJlcXVlbnRseSkge1xyXG4gICAgaWYgKGZyZXF1ZW50bHkuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICBmcmVxdWVudGx5S2V5cy5wdXNoKGtleSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHNvcnRlZCA9IGZyZXF1ZW50bHlLZXlzXHJcbiAgICAuc29ydCgoYSwgYikgPT4gZnJlcXVlbnRseVthXSAtIGZyZXF1ZW50bHlbYl0pXHJcbiAgICAucmV2ZXJzZSgpXHJcbiAgY29uc3Qgc2xpY2VkID0gc29ydGVkLnNsaWNlKDAsIHF1YW50aXR5KVxyXG5cclxuICBjb25zdCBsYXN0ID0gc3RvcmUuZ2V0KCdsYXN0JylcclxuXHJcbiAgaWYgKGxhc3QgJiYgc2xpY2VkLmluZGV4T2YobGFzdCkgPT0gLTEpIHtcclxuICAgIHNsaWNlZC5wb3AoKVxyXG4gICAgc2xpY2VkLnB1c2gobGFzdClcclxuICB9XHJcblxyXG4gIHJldHVybiBzbGljZWRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgeyBhZGQsIGdldCB9XHJcbiIsImltcG9ydCBzdHJpbmdGcm9tQ29kZVBvaW50IGZyb20gJy4uL3BvbHlmaWxscy9zdHJpbmdGcm9tQ29kZVBvaW50J1xyXG5cclxuZnVuY3Rpb24gdW5pZmllZFRvTmF0aXZlKHVuaWZpZWQpIHtcclxuICB2YXIgdW5pY29kZXMgPSB1bmlmaWVkLnNwbGl0KCctJyksXHJcbiAgICBjb2RlUG9pbnRzID0gdW5pY29kZXMubWFwKCh1KSA9PiBgMHgke3V9YClcclxuXHJcbiAgcmV0dXJuIHN0cmluZ0Zyb21Db2RlUG9pbnQuYXBwbHkobnVsbCwgY29kZVBvaW50cylcclxufVxyXG5cclxuZnVuY3Rpb24gdW5pcShhcnIpIHtcclxuICByZXR1cm4gYXJyLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiB7XHJcbiAgICBpZiAoYWNjLmluZGV4T2YoaXRlbSkgPT09IC0xKSB7XHJcbiAgICAgIGFjYy5wdXNoKGl0ZW0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWNjXHJcbiAgfSwgW10pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGludGVyc2VjdChhLCBiKSB7XHJcbiAgY29uc3QgdW5pcUEgPSB1bmlxKGEpXHJcbiAgY29uc3QgdW5pcUIgPSB1bmlxKGIpXHJcblxyXG4gIHJldHVybiB1bmlxQS5maWx0ZXIoKGl0ZW0pID0+IHVuaXFCLmluZGV4T2YoaXRlbSkgPj0gMClcclxufVxyXG5cclxuZnVuY3Rpb24gZGVlcE1lcmdlKGEsIGIpIHtcclxuICB2YXIgbyA9IHt9XHJcblxyXG4gIGZvciAobGV0IGtleSBpbiBhKSB7XHJcbiAgICBsZXQgb3JpZ2luYWxWYWx1ZSA9IGFba2V5XSxcclxuICAgICAgdmFsdWUgPSBvcmlnaW5hbFZhbHVlXHJcblxyXG4gICAgaWYgKGIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICB2YWx1ZSA9IGJba2V5XVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIHZhbHVlID0gZGVlcE1lcmdlKG9yaWdpbmFsVmFsdWUsIHZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIG9ba2V5XSA9IHZhbHVlXHJcbiAgfVxyXG5cclxuICByZXR1cm4gb1xyXG59XHJcblxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vc29uaWNkb2UvbWVhc3VyZS1zY3JvbGxiYXJcclxuZnVuY3Rpb24gbWVhc3VyZVNjcm9sbGJhcigpIHtcclxuICBpZiAodHlwZW9mIGRvY3VtZW50ID09ICd1bmRlZmluZWQnKSByZXR1cm4gMFxyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblxyXG4gIGRpdi5zdHlsZS53aWR0aCA9ICcxMDBweCdcclxuICBkaXYuc3R5bGUuaGVpZ2h0ID0gJzEwMHB4J1xyXG4gIGRpdi5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnXHJcbiAgZGl2LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xyXG4gIGRpdi5zdHlsZS50b3AgPSAnLTk5OTlweCdcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpXHJcbiAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSBkaXYub2Zmc2V0V2lkdGggLSBkaXYuY2xpZW50V2lkdGhcclxuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRpdilcclxuXHJcbiAgcmV0dXJuIHNjcm9sbGJhcldpZHRoXHJcbn1cclxuXHJcbmV4cG9ydCB7IHVuaXEsIGludGVyc2VjdCwgZGVlcE1lcmdlLCB1bmlmaWVkVG9OYXRpdmUsIG1lYXN1cmVTY3JvbGxiYXIgfVxyXG4iLCJjb25zdCBFbW9qaVByb3BzID0ge1xyXG4gIG5hdGl2ZToge1xyXG4gICAgdHlwZTogQm9vbGVhbixcclxuICAgIGRlZmF1bHQ6IGZhbHNlLFxyXG4gIH0sXHJcbiAgdG9vbHRpcDoge1xyXG4gICAgdHlwZTogQm9vbGVhbixcclxuICAgIGRlZmF1bHQ6IGZhbHNlLFxyXG4gIH0sXHJcbiAgZmFsbGJhY2s6IHtcclxuICAgIHR5cGU6IEZ1bmN0aW9uLFxyXG4gIH0sXHJcbiAgc2tpbjoge1xyXG4gICAgdHlwZTogTnVtYmVyLFxyXG4gICAgZGVmYXVsdDogMSxcclxuICB9LFxyXG4gIHNldDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgZGVmYXVsdDogJ2FwcGxlJyxcclxuICB9LFxyXG4gIGVtb2ppOiB7XHJcbiAgICB0eXBlOiBbU3RyaW5nLCBPYmplY3RdLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgfSxcclxuICBzaXplOiB7XHJcbiAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICBkZWZhdWx0OiBudWxsLFxyXG4gIH0sXHJcbn1cclxuXHJcbmNvbnN0IFBpY2tlclByb3BzID0ge1xyXG4gIHBlckxpbmU6IHtcclxuICAgIHR5cGU6IE51bWJlcixcclxuICAgIGRlZmF1bHQ6IDksXHJcbiAgfSxcclxuICBtYXhTZWFyY2hSZXN1bHRzOiB7XHJcbiAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICBkZWZhdWx0OiA3NSxcclxuICB9LFxyXG4gIGVtb2ppU2l6ZToge1xyXG4gICAgdHlwZTogTnVtYmVyLFxyXG4gICAgZGVmYXVsdDogMjQsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgZGVmYXVsdDogJ0Vtb2ppIE1hcnTihKInLFxyXG4gIH0sXHJcbiAgZW1vamk6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIGRlZmF1bHQ6ICdkZXBhcnRtZW50X3N0b3JlJyxcclxuICB9LFxyXG4gIGNvbG9yOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICBkZWZhdWx0OiAnI2FlNjVjNScsXHJcbiAgfSxcclxuICBzZXQ6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIGRlZmF1bHQ6ICdhcHBsZScsXHJcbiAgfSxcclxuICBza2luOiB7XHJcbiAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICBkZWZhdWx0OiBudWxsLFxyXG4gIH0sXHJcbiAgZGVmYXVsdFNraW46IHtcclxuICAgIHR5cGU6IE51bWJlcixcclxuICAgIGRlZmF1bHQ6IDEsXHJcbiAgfSxcclxuICBuYXRpdmU6IHtcclxuICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICBkZWZhdWx0OiBmYWxzZSxcclxuICB9LFxyXG4gIGVtb2ppVG9vbHRpcDoge1xyXG4gICAgdHlwZTogQm9vbGVhbixcclxuICAgIGRlZmF1bHQ6IGZhbHNlLFxyXG4gIH0sXHJcbiAgYXV0b0ZvY3VzOiB7XHJcbiAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgZGVmYXVsdDogZmFsc2UsXHJcbiAgfSxcclxuICBpMThuOiB7XHJcbiAgICB0eXBlOiBPYmplY3QsXHJcbiAgICBkZWZhdWx0KCkge1xyXG4gICAgICByZXR1cm4ge31cclxuICAgIH0sXHJcbiAgfSxcclxuICBzaG93UHJldmlldzoge1xyXG4gICAgdHlwZTogQm9vbGVhbixcclxuICAgIGRlZmF1bHQ6IHRydWUsXHJcbiAgfSxcclxuICBzaG93U2VhcmNoOiB7XHJcbiAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgZGVmYXVsdDogdHJ1ZSxcclxuICB9LFxyXG4gIHNob3dDYXRlZ29yaWVzOiB7XHJcbiAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgZGVmYXVsdDogdHJ1ZSxcclxuICB9LFxyXG4gIHNob3dTa2luVG9uZXM6IHtcclxuICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICBkZWZhdWx0OiB0cnVlLFxyXG4gIH0sXHJcbiAgaW5maW5pdGVTY3JvbGw6IHtcclxuICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICBkZWZhdWx0OiB0cnVlLFxyXG4gIH0sXHJcbiAgcGlja2VyU3R5bGVzOiB7XHJcbiAgICB0eXBlOiBPYmplY3QsXHJcbiAgICBkZWZhdWx0KCkge1xyXG4gICAgICByZXR1cm4ge31cclxuICAgIH0sXHJcbiAgfSxcclxufVxyXG5cclxuZXhwb3J0IHsgRW1vamlQcm9wcywgUGlja2VyUHJvcHMgfVxyXG4iLCJ2YXIgTkFNRVNQQUNFID0gJ2Vtb2ppLW1hcnQnXHJcblxyXG5jb25zdCBfSlNPTiA9IEpTT05cclxuXHJcbnZhciBpc0xvY2FsU3RvcmFnZVN1cHBvcnRlZCA9XHJcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2xvY2FsU3RvcmFnZScgaW4gd2luZG93XHJcblxyXG5sZXQgZ2V0dGVyXHJcbmxldCBzZXR0ZXJcclxuXHJcbmZ1bmN0aW9uIHNldEhhbmRsZXJzKGhhbmRsZXJzKSB7XHJcbiAgaGFuZGxlcnMgfHwgKGhhbmRsZXJzID0ge30pXHJcblxyXG4gIGdldHRlciA9IGhhbmRsZXJzLmdldHRlclxyXG4gIHNldHRlciA9IGhhbmRsZXJzLnNldHRlclxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXROYW1lc3BhY2UobmFtZXNwYWNlKSB7XHJcbiAgTkFNRVNQQUNFID0gbmFtZXNwYWNlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZShzdGF0ZSkge1xyXG4gIGZvciAobGV0IGtleSBpbiBzdGF0ZSkge1xyXG4gICAgbGV0IHZhbHVlID0gc3RhdGVba2V5XVxyXG4gICAgc2V0KGtleSwgdmFsdWUpXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xyXG4gIGlmIChzZXR0ZXIpIHtcclxuICAgIHNldHRlcihrZXksIHZhbHVlKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoIWlzTG9jYWxTdG9yYWdlU3VwcG9ydGVkKSByZXR1cm5cclxuICAgIHRyeSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2VbYCR7TkFNRVNQQUNFfS4ke2tleX1gXSA9IF9KU09OLnN0cmluZ2lmeSh2YWx1ZSlcclxuICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXQoa2V5KSB7XHJcbiAgaWYgKGdldHRlcikge1xyXG4gICAgcmV0dXJuIGdldHRlcihrZXkpXHJcbiAgfSBlbHNlIHtcclxuICAgIGlmICghaXNMb2NhbFN0b3JhZ2VTdXBwb3J0ZWQpIHJldHVyblxyXG4gICAgdHJ5IHtcclxuICAgICAgdmFyIHZhbHVlID0gd2luZG93LmxvY2FsU3RvcmFnZVtgJHtOQU1FU1BBQ0V9LiR7a2V5fWBdXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gSlNPTi5wYXJzZSh2YWx1ZSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHsgdXBkYXRlLCBzZXQsIGdldCwgc2V0TmFtZXNwYWNlLCBzZXRIYW5kbGVycyB9XHJcbiIsIi8vIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXHJcbi8vIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcclxuXHJcbi8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcclxuXHJcbi8vIE1JVCBsaWNlbnNlXHJcblxyXG52YXIgaXNXaW5kb3dBdmFpbGFibGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xyXG5cclxuaXNXaW5kb3dBdmFpbGFibGUgJiZcclxuICAoZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgbGFzdFRpbWUgPSAwXHJcbiAgICB2YXIgdmVuZG9ycyA9IFsnbXMnLCAnbW96JywgJ3dlYmtpdCcsICdvJ11cclxuXHJcbiAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK3gpIHtcclxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9XHJcbiAgICAgICAgd2luZG93W3ZlbmRvcnNbeF0gKyAnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ11cclxuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID1cclxuICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSArICdDYW5jZWxBbmltYXRpb25GcmFtZSddIHx8XHJcbiAgICAgICAgd2luZG93W3ZlbmRvcnNbeF0gKyAnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ11cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpXHJcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihjYWxsYmFjaywgZWxlbWVudCkge1xyXG4gICAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXHJcbiAgICAgICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSlcclxuICAgICAgICB2YXIgaWQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbClcclxuICAgICAgICB9LCB0aW1lVG9DYWxsKVxyXG5cclxuICAgICAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbFxyXG4gICAgICAgIHJldHVybiBpZFxyXG4gICAgICB9XHJcblxyXG4gICAgaWYgKCF3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpXHJcbiAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGlkKSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KGlkKVxyXG4gICAgICB9XHJcbiAgfSkoKVxyXG4iXSwic291cmNlUm9vdCI6IiJ9