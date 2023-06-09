import {
  clsx_m_exports,
  init_clsx_m
} from "./chunk-FU7RIYBS.js";
import {
  require_react_dom
} from "./chunk-PRK46SJB.js";
import {
  require_prop_types
} from "./chunk-LOWTVMD3.js";
import "./chunk-SUJZ3ZKE.js";
import {
  require_react
} from "./chunk-FLAVOKRJ.js";
import {
  __commonJS,
  __toCommonJS
} from "./chunk-AC2VUBZ6.js";

// node_modules/react-draggable/build/cjs/utils/shims.js
var require_shims = __commonJS({
  "node_modules/react-draggable/build/cjs/utils/shims.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.dontSetMe = dontSetMe;
    exports.findInArray = findInArray;
    exports.int = int;
    exports.isFunction = isFunction;
    exports.isNum = isNum;
    function findInArray(array, callback) {
      for (var i = 0, length = array.length; i < length; i++) {
        if (callback.apply(callback, [array[i], i, array]))
          return array[i];
      }
    }
    function isFunction(func) {
      return typeof func === "function" || Object.prototype.toString.call(func) === "[object Function]";
    }
    function isNum(num) {
      return typeof num === "number" && !isNaN(num);
    }
    function int(a) {
      return parseInt(a, 10);
    }
    function dontSetMe(props, propName, componentName) {
      if (props[propName]) {
        return new Error("Invalid prop ".concat(propName, " passed to ").concat(componentName, " - do not set this, set it on the child."));
      }
    }
  }
});

// node_modules/react-draggable/build/cjs/utils/getPrefix.js
var require_getPrefix = __commonJS({
  "node_modules/react-draggable/build/cjs/utils/getPrefix.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.browserPrefixToKey = browserPrefixToKey;
    exports.browserPrefixToStyle = browserPrefixToStyle;
    exports.default = void 0;
    exports.getPrefix = getPrefix;
    var prefixes = ["Moz", "Webkit", "O", "ms"];
    function getPrefix() {
      var _window$document, _window$document$docu;
      var prop = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
      if (typeof window === "undefined")
        return "";
      var style = (_window$document = window.document) === null || _window$document === void 0 ? void 0 : (_window$document$docu = _window$document.documentElement) === null || _window$document$docu === void 0 ? void 0 : _window$document$docu.style;
      if (!style)
        return "";
      if (prop in style)
        return "";
      for (var i = 0; i < prefixes.length; i++) {
        if (browserPrefixToKey(prop, prefixes[i]) in style)
          return prefixes[i];
      }
      return "";
    }
    function browserPrefixToKey(prop, prefix) {
      return prefix ? "".concat(prefix).concat(kebabToTitleCase(prop)) : prop;
    }
    function browserPrefixToStyle(prop, prefix) {
      return prefix ? "-".concat(prefix.toLowerCase(), "-").concat(prop) : prop;
    }
    function kebabToTitleCase(str) {
      var out = "";
      var shouldCapitalize = true;
      for (var i = 0; i < str.length; i++) {
        if (shouldCapitalize) {
          out += str[i].toUpperCase();
          shouldCapitalize = false;
        } else if (str[i] === "-") {
          shouldCapitalize = true;
        } else {
          out += str[i];
        }
      }
      return out;
    }
    var _default = getPrefix();
    exports.default = _default;
  }
});

// node_modules/react-draggable/build/cjs/utils/domFns.js
var require_domFns = __commonJS({
  "node_modules/react-draggable/build/cjs/utils/domFns.js"(exports) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.addClassName = addClassName;
    exports.addEvent = addEvent;
    exports.addUserSelectStyles = addUserSelectStyles;
    exports.createCSSTransform = createCSSTransform;
    exports.createSVGTransform = createSVGTransform;
    exports.getTouch = getTouch;
    exports.getTouchIdentifier = getTouchIdentifier;
    exports.getTranslation = getTranslation;
    exports.innerHeight = innerHeight;
    exports.innerWidth = innerWidth;
    exports.matchesSelector = matchesSelector;
    exports.matchesSelectorAndParentsTo = matchesSelectorAndParentsTo;
    exports.offsetXYFromParent = offsetXYFromParent;
    exports.outerHeight = outerHeight;
    exports.outerWidth = outerWidth;
    exports.removeClassName = removeClassName;
    exports.removeEvent = removeEvent;
    exports.removeUserSelectStyles = removeUserSelectStyles;
    var _shims = require_shims();
    var _getPrefix = _interopRequireWildcard(require_getPrefix());
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
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
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var matchesSelectorFunc = "";
    function matchesSelector(el, selector) {
      if (!matchesSelectorFunc) {
        matchesSelectorFunc = (0, _shims.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(method) {
          return (0, _shims.isFunction)(el[method]);
        });
      }
      if (!(0, _shims.isFunction)(el[matchesSelectorFunc]))
        return false;
      return el[matchesSelectorFunc](selector);
    }
    function matchesSelectorAndParentsTo(el, selector, baseNode) {
      var node = el;
      do {
        if (matchesSelector(node, selector))
          return true;
        if (node === baseNode)
          return false;
        node = node.parentNode;
      } while (node);
      return false;
    }
    function addEvent(el, event, handler, inputOptions) {
      if (!el)
        return;
      var options = _objectSpread({
        capture: true
      }, inputOptions);
      if (el.addEventListener) {
        el.addEventListener(event, handler, options);
      } else if (el.attachEvent) {
        el.attachEvent("on" + event, handler);
      } else {
        el["on" + event] = handler;
      }
    }
    function removeEvent(el, event, handler, inputOptions) {
      if (!el)
        return;
      var options = _objectSpread({
        capture: true
      }, inputOptions);
      if (el.removeEventListener) {
        el.removeEventListener(event, handler, options);
      } else if (el.detachEvent) {
        el.detachEvent("on" + event, handler);
      } else {
        el["on" + event] = null;
      }
    }
    function outerHeight(node) {
      var height = node.clientHeight;
      var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
      height += (0, _shims.int)(computedStyle.borderTopWidth);
      height += (0, _shims.int)(computedStyle.borderBottomWidth);
      return height;
    }
    function outerWidth(node) {
      var width = node.clientWidth;
      var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
      width += (0, _shims.int)(computedStyle.borderLeftWidth);
      width += (0, _shims.int)(computedStyle.borderRightWidth);
      return width;
    }
    function innerHeight(node) {
      var height = node.clientHeight;
      var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
      height -= (0, _shims.int)(computedStyle.paddingTop);
      height -= (0, _shims.int)(computedStyle.paddingBottom);
      return height;
    }
    function innerWidth(node) {
      var width = node.clientWidth;
      var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
      width -= (0, _shims.int)(computedStyle.paddingLeft);
      width -= (0, _shims.int)(computedStyle.paddingRight);
      return width;
    }
    function offsetXYFromParent(evt, offsetParent, scale) {
      var isBody = offsetParent === offsetParent.ownerDocument.body;
      var offsetParentRect = isBody ? {
        left: 0,
        top: 0
      } : offsetParent.getBoundingClientRect();
      var x = (evt.clientX + offsetParent.scrollLeft - offsetParentRect.left) / scale;
      var y = (evt.clientY + offsetParent.scrollTop - offsetParentRect.top) / scale;
      return {
        x,
        y
      };
    }
    function createCSSTransform(controlPos, positionOffset) {
      var translation = getTranslation(controlPos, positionOffset, "px");
      return _defineProperty({}, (0, _getPrefix.browserPrefixToKey)("transform", _getPrefix.default), translation);
    }
    function createSVGTransform(controlPos, positionOffset) {
      var translation = getTranslation(controlPos, positionOffset, "");
      return translation;
    }
    function getTranslation(_ref2, positionOffset, unitSuffix) {
      var x = _ref2.x, y = _ref2.y;
      var translation = "translate(".concat(x).concat(unitSuffix, ",").concat(y).concat(unitSuffix, ")");
      if (positionOffset) {
        var defaultX = "".concat(typeof positionOffset.x === "string" ? positionOffset.x : positionOffset.x + unitSuffix);
        var defaultY = "".concat(typeof positionOffset.y === "string" ? positionOffset.y : positionOffset.y + unitSuffix);
        translation = "translate(".concat(defaultX, ", ").concat(defaultY, ")") + translation;
      }
      return translation;
    }
    function getTouch(e, identifier) {
      return e.targetTouches && (0, _shims.findInArray)(e.targetTouches, function(t) {
        return identifier === t.identifier;
      }) || e.changedTouches && (0, _shims.findInArray)(e.changedTouches, function(t) {
        return identifier === t.identifier;
      });
    }
    function getTouchIdentifier(e) {
      if (e.targetTouches && e.targetTouches[0])
        return e.targetTouches[0].identifier;
      if (e.changedTouches && e.changedTouches[0])
        return e.changedTouches[0].identifier;
    }
    function addUserSelectStyles(doc) {
      if (!doc)
        return;
      var styleEl = doc.getElementById("react-draggable-style-el");
      if (!styleEl) {
        styleEl = doc.createElement("style");
        styleEl.type = "text/css";
        styleEl.id = "react-draggable-style-el";
        styleEl.innerHTML = ".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n";
        styleEl.innerHTML += ".react-draggable-transparent-selection *::selection {all: inherit;}\n";
        doc.getElementsByTagName("head")[0].appendChild(styleEl);
      }
      if (doc.body)
        addClassName(doc.body, "react-draggable-transparent-selection");
    }
    function removeUserSelectStyles(doc) {
      if (!doc)
        return;
      try {
        if (doc.body)
          removeClassName(doc.body, "react-draggable-transparent-selection");
        if (doc.selection) {
          doc.selection.empty();
        } else {
          var selection = (doc.defaultView || window).getSelection();
          if (selection && selection.type !== "Caret") {
            selection.removeAllRanges();
          }
        }
      } catch (e) {
      }
    }
    function addClassName(el, className) {
      if (el.classList) {
        el.classList.add(className);
      } else {
        if (!el.className.match(new RegExp("(?:^|\\s)".concat(className, "(?!\\S)")))) {
          el.className += " ".concat(className);
        }
      }
    }
    function removeClassName(el, className) {
      if (el.classList) {
        el.classList.remove(className);
      } else {
        el.className = el.className.replace(new RegExp("(?:^|\\s)".concat(className, "(?!\\S)"), "g"), "");
      }
    }
  }
});

// node_modules/react-draggable/build/cjs/utils/positionFns.js
var require_positionFns = __commonJS({
  "node_modules/react-draggable/build/cjs/utils/positionFns.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.canDragX = canDragX;
    exports.canDragY = canDragY;
    exports.createCoreData = createCoreData;
    exports.createDraggableData = createDraggableData;
    exports.getBoundPosition = getBoundPosition;
    exports.getControlPosition = getControlPosition;
    exports.snapToGrid = snapToGrid;
    var _shims = require_shims();
    var _domFns = require_domFns();
    function getBoundPosition(draggable, x, y) {
      if (!draggable.props.bounds)
        return [x, y];
      var bounds = draggable.props.bounds;
      bounds = typeof bounds === "string" ? bounds : cloneBounds(bounds);
      var node = findDOMNode(draggable);
      if (typeof bounds === "string") {
        var ownerDocument = node.ownerDocument;
        var ownerWindow = ownerDocument.defaultView;
        var boundNode;
        if (bounds === "parent") {
          boundNode = node.parentNode;
        } else {
          boundNode = ownerDocument.querySelector(bounds);
        }
        if (!(boundNode instanceof ownerWindow.HTMLElement)) {
          throw new Error('Bounds selector "' + bounds + '" could not find an element.');
        }
        var boundNodeEl = boundNode;
        var nodeStyle = ownerWindow.getComputedStyle(node);
        var boundNodeStyle = ownerWindow.getComputedStyle(boundNodeEl);
        bounds = {
          left: -node.offsetLeft + (0, _shims.int)(boundNodeStyle.paddingLeft) + (0, _shims.int)(nodeStyle.marginLeft),
          top: -node.offsetTop + (0, _shims.int)(boundNodeStyle.paddingTop) + (0, _shims.int)(nodeStyle.marginTop),
          right: (0, _domFns.innerWidth)(boundNodeEl) - (0, _domFns.outerWidth)(node) - node.offsetLeft + (0, _shims.int)(boundNodeStyle.paddingRight) - (0, _shims.int)(nodeStyle.marginRight),
          bottom: (0, _domFns.innerHeight)(boundNodeEl) - (0, _domFns.outerHeight)(node) - node.offsetTop + (0, _shims.int)(boundNodeStyle.paddingBottom) - (0, _shims.int)(nodeStyle.marginBottom)
        };
      }
      if ((0, _shims.isNum)(bounds.right))
        x = Math.min(x, bounds.right);
      if ((0, _shims.isNum)(bounds.bottom))
        y = Math.min(y, bounds.bottom);
      if ((0, _shims.isNum)(bounds.left))
        x = Math.max(x, bounds.left);
      if ((0, _shims.isNum)(bounds.top))
        y = Math.max(y, bounds.top);
      return [x, y];
    }
    function snapToGrid(grid, pendingX, pendingY) {
      var x = Math.round(pendingX / grid[0]) * grid[0];
      var y = Math.round(pendingY / grid[1]) * grid[1];
      return [x, y];
    }
    function canDragX(draggable) {
      return draggable.props.axis === "both" || draggable.props.axis === "x";
    }
    function canDragY(draggable) {
      return draggable.props.axis === "both" || draggable.props.axis === "y";
    }
    function getControlPosition(e, touchIdentifier, draggableCore) {
      var touchObj = typeof touchIdentifier === "number" ? (0, _domFns.getTouch)(e, touchIdentifier) : null;
      if (typeof touchIdentifier === "number" && !touchObj)
        return null;
      var node = findDOMNode(draggableCore);
      var offsetParent = draggableCore.props.offsetParent || node.offsetParent || node.ownerDocument.body;
      return (0, _domFns.offsetXYFromParent)(touchObj || e, offsetParent, draggableCore.props.scale);
    }
    function createCoreData(draggable, x, y) {
      var state = draggable.state;
      var isStart = !(0, _shims.isNum)(state.lastX);
      var node = findDOMNode(draggable);
      if (isStart) {
        return {
          node,
          deltaX: 0,
          deltaY: 0,
          lastX: x,
          lastY: y,
          x,
          y
        };
      } else {
        return {
          node,
          deltaX: x - state.lastX,
          deltaY: y - state.lastY,
          lastX: state.lastX,
          lastY: state.lastY,
          x,
          y
        };
      }
    }
    function createDraggableData(draggable, coreData) {
      var scale = draggable.props.scale;
      return {
        node: coreData.node,
        x: draggable.state.x + coreData.deltaX / scale,
        y: draggable.state.y + coreData.deltaY / scale,
        deltaX: coreData.deltaX / scale,
        deltaY: coreData.deltaY / scale,
        lastX: draggable.state.x,
        lastY: draggable.state.y
      };
    }
    function cloneBounds(bounds) {
      return {
        left: bounds.left,
        top: bounds.top,
        right: bounds.right,
        bottom: bounds.bottom
      };
    }
    function findDOMNode(draggable) {
      var node = draggable.findDOMNode();
      if (!node) {
        throw new Error("<DraggableCore>: Unmounted during event!");
      }
      return node;
    }
  }
});

// node_modules/react-draggable/build/cjs/utils/log.js
var require_log = __commonJS({
  "node_modules/react-draggable/build/cjs/utils/log.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = log;
    function log() {
      var _console;
      if (void 0)
        (_console = console).log.apply(_console, arguments);
    }
  }
});

// node_modules/react-draggable/build/cjs/DraggableCore.js
var require_DraggableCore = __commonJS({
  "node_modules/react-draggable/build/cjs/DraggableCore.js"(exports) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var React = _interopRequireWildcard(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _reactDom = _interopRequireDefault(require_react_dom());
    var _domFns = require_domFns();
    var _positionFns = require_positionFns();
    var _shims = require_shims();
    var _log = _interopRequireDefault(require_log());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
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
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function _iterableToArrayLimit(arr, i) {
      var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
      if (_i == null)
        return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _s, _e;
      try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i)
            break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null)
            _i["return"]();
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      Object.defineProperty(subClass, "prototype", { writable: false });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return _assertThisInitialized(self);
    }
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var eventsFor = {
      touch: {
        start: "touchstart",
        move: "touchmove",
        stop: "touchend"
      },
      mouse: {
        start: "mousedown",
        move: "mousemove",
        stop: "mouseup"
      }
    };
    var dragEventFor = eventsFor.mouse;
    var DraggableCore = function(_React$Component) {
      _inherits(DraggableCore2, _React$Component);
      var _super = _createSuper(DraggableCore2);
      function DraggableCore2() {
        var _this;
        _classCallCheck(this, DraggableCore2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "state", {
          dragging: false,
          // Used while dragging to determine deltas.
          lastX: NaN,
          lastY: NaN,
          touchIdentifier: null
        });
        _defineProperty(_assertThisInitialized(_this), "mounted", false);
        _defineProperty(_assertThisInitialized(_this), "handleDragStart", function(e) {
          _this.props.onMouseDown(e);
          if (!_this.props.allowAnyClick && typeof e.button === "number" && e.button !== 0)
            return false;
          var thisNode = _this.findDOMNode();
          if (!thisNode || !thisNode.ownerDocument || !thisNode.ownerDocument.body) {
            throw new Error("<DraggableCore> not mounted on DragStart!");
          }
          var ownerDocument = thisNode.ownerDocument;
          if (_this.props.disabled || !(e.target instanceof ownerDocument.defaultView.Node) || _this.props.handle && !(0, _domFns.matchesSelectorAndParentsTo)(e.target, _this.props.handle, thisNode) || _this.props.cancel && (0, _domFns.matchesSelectorAndParentsTo)(e.target, _this.props.cancel, thisNode)) {
            return;
          }
          if (e.type === "touchstart")
            e.preventDefault();
          var touchIdentifier = (0, _domFns.getTouchIdentifier)(e);
          _this.setState({
            touchIdentifier
          });
          var position = (0, _positionFns.getControlPosition)(e, touchIdentifier, _assertThisInitialized(_this));
          if (position == null)
            return;
          var x = position.x, y = position.y;
          var coreEvent = (0, _positionFns.createCoreData)(_assertThisInitialized(_this), x, y);
          (0, _log.default)("DraggableCore: handleDragStart: %j", coreEvent);
          (0, _log.default)("calling", _this.props.onStart);
          var shouldUpdate = _this.props.onStart(e, coreEvent);
          if (shouldUpdate === false || _this.mounted === false)
            return;
          if (_this.props.enableUserSelectHack)
            (0, _domFns.addUserSelectStyles)(ownerDocument);
          _this.setState({
            dragging: true,
            lastX: x,
            lastY: y
          });
          (0, _domFns.addEvent)(ownerDocument, dragEventFor.move, _this.handleDrag);
          (0, _domFns.addEvent)(ownerDocument, dragEventFor.stop, _this.handleDragStop);
        });
        _defineProperty(_assertThisInitialized(_this), "handleDrag", function(e) {
          var position = (0, _positionFns.getControlPosition)(e, _this.state.touchIdentifier, _assertThisInitialized(_this));
          if (position == null)
            return;
          var x = position.x, y = position.y;
          if (Array.isArray(_this.props.grid)) {
            var deltaX = x - _this.state.lastX, deltaY = y - _this.state.lastY;
            var _snapToGrid = (0, _positionFns.snapToGrid)(_this.props.grid, deltaX, deltaY);
            var _snapToGrid2 = _slicedToArray(_snapToGrid, 2);
            deltaX = _snapToGrid2[0];
            deltaY = _snapToGrid2[1];
            if (!deltaX && !deltaY)
              return;
            x = _this.state.lastX + deltaX, y = _this.state.lastY + deltaY;
          }
          var coreEvent = (0, _positionFns.createCoreData)(_assertThisInitialized(_this), x, y);
          (0, _log.default)("DraggableCore: handleDrag: %j", coreEvent);
          var shouldUpdate = _this.props.onDrag(e, coreEvent);
          if (shouldUpdate === false || _this.mounted === false) {
            try {
              _this.handleDragStop(new MouseEvent("mouseup"));
            } catch (err) {
              var event = document.createEvent("MouseEvents");
              event.initMouseEvent("mouseup", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
              _this.handleDragStop(event);
            }
            return;
          }
          _this.setState({
            lastX: x,
            lastY: y
          });
        });
        _defineProperty(_assertThisInitialized(_this), "handleDragStop", function(e) {
          if (!_this.state.dragging)
            return;
          var position = (0, _positionFns.getControlPosition)(e, _this.state.touchIdentifier, _assertThisInitialized(_this));
          if (position == null)
            return;
          var x = position.x, y = position.y;
          if (Array.isArray(_this.props.grid)) {
            var deltaX = x - _this.state.lastX || 0;
            var deltaY = y - _this.state.lastY || 0;
            var _snapToGrid3 = (0, _positionFns.snapToGrid)(_this.props.grid, deltaX, deltaY);
            var _snapToGrid4 = _slicedToArray(_snapToGrid3, 2);
            deltaX = _snapToGrid4[0];
            deltaY = _snapToGrid4[1];
            x = _this.state.lastX + deltaX, y = _this.state.lastY + deltaY;
          }
          var coreEvent = (0, _positionFns.createCoreData)(_assertThisInitialized(_this), x, y);
          var shouldContinue = _this.props.onStop(e, coreEvent);
          if (shouldContinue === false || _this.mounted === false)
            return false;
          var thisNode = _this.findDOMNode();
          if (thisNode) {
            if (_this.props.enableUserSelectHack)
              (0, _domFns.removeUserSelectStyles)(thisNode.ownerDocument);
          }
          (0, _log.default)("DraggableCore: handleDragStop: %j", coreEvent);
          _this.setState({
            dragging: false,
            lastX: NaN,
            lastY: NaN
          });
          if (thisNode) {
            (0, _log.default)("DraggableCore: Removing handlers");
            (0, _domFns.removeEvent)(thisNode.ownerDocument, dragEventFor.move, _this.handleDrag);
            (0, _domFns.removeEvent)(thisNode.ownerDocument, dragEventFor.stop, _this.handleDragStop);
          }
        });
        _defineProperty(_assertThisInitialized(_this), "onMouseDown", function(e) {
          dragEventFor = eventsFor.mouse;
          return _this.handleDragStart(e);
        });
        _defineProperty(_assertThisInitialized(_this), "onMouseUp", function(e) {
          dragEventFor = eventsFor.mouse;
          return _this.handleDragStop(e);
        });
        _defineProperty(_assertThisInitialized(_this), "onTouchStart", function(e) {
          dragEventFor = eventsFor.touch;
          return _this.handleDragStart(e);
        });
        _defineProperty(_assertThisInitialized(_this), "onTouchEnd", function(e) {
          dragEventFor = eventsFor.touch;
          return _this.handleDragStop(e);
        });
        return _this;
      }
      _createClass(DraggableCore2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.mounted = true;
          var thisNode = this.findDOMNode();
          if (thisNode) {
            (0, _domFns.addEvent)(thisNode, eventsFor.touch.start, this.onTouchStart, {
              passive: false
            });
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.mounted = false;
          var thisNode = this.findDOMNode();
          if (thisNode) {
            var ownerDocument = thisNode.ownerDocument;
            (0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.move, this.handleDrag);
            (0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.move, this.handleDrag);
            (0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.stop, this.handleDragStop);
            (0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.stop, this.handleDragStop);
            (0, _domFns.removeEvent)(thisNode, eventsFor.touch.start, this.onTouchStart, {
              passive: false
            });
            if (this.props.enableUserSelectHack)
              (0, _domFns.removeUserSelectStyles)(ownerDocument);
          }
        }
        // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
        // the underlying DOM node ourselves. See the README for more information.
      }, {
        key: "findDOMNode",
        value: function findDOMNode() {
          var _this$props, _this$props2, _this$props2$nodeRef;
          return (_this$props = this.props) !== null && _this$props !== void 0 && _this$props.nodeRef ? (_this$props2 = this.props) === null || _this$props2 === void 0 ? void 0 : (_this$props2$nodeRef = _this$props2.nodeRef) === null || _this$props2$nodeRef === void 0 ? void 0 : _this$props2$nodeRef.current : _reactDom.default.findDOMNode(this);
        }
      }, {
        key: "render",
        value: function render() {
          return React.cloneElement(React.Children.only(this.props.children), {
            // Note: mouseMove handler is attached to document so it will still function
            // when the user drags quickly and leaves the bounds of the element.
            onMouseDown: this.onMouseDown,
            onMouseUp: this.onMouseUp,
            // onTouchStart is added on `componentDidMount` so they can be added with
            // {passive: false}, which allows it to cancel. See
            // https://developers.google.com/web/updates/2017/01/scrolling-intervention
            onTouchEnd: this.onTouchEnd
          });
        }
      }]);
      return DraggableCore2;
    }(React.Component);
    exports.default = DraggableCore;
    _defineProperty(DraggableCore, "displayName", "DraggableCore");
    _defineProperty(DraggableCore, "propTypes", {
      /**
       * `allowAnyClick` allows dragging using any mouse button.
       * By default, we only accept the left button.
       *
       * Defaults to `false`.
       */
      allowAnyClick: _propTypes.default.bool,
      /**
       * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
       * with the exception of `onMouseDown`, will not fire.
       */
      disabled: _propTypes.default.bool,
      /**
       * By default, we add 'user-select:none' attributes to the document body
       * to prevent ugly text selection during drag. If this is causing problems
       * for your app, set this to `false`.
       */
      enableUserSelectHack: _propTypes.default.bool,
      /**
       * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
       * instead of using the parent node.
       */
      offsetParent: function offsetParent(props, propName) {
        if (props[propName] && props[propName].nodeType !== 1) {
          throw new Error("Draggable's offsetParent must be a DOM Node.");
        }
      },
      /**
       * `grid` specifies the x and y that dragging should snap to.
       */
      grid: _propTypes.default.arrayOf(_propTypes.default.number),
      /**
       * `handle` specifies a selector to be used as the handle that initiates drag.
       *
       * Example:
       *
       * ```jsx
       *   let App = React.createClass({
       *       render: function () {
       *         return (
       *            <Draggable handle=".handle">
       *              <div>
       *                  <div className="handle">Click me to drag</div>
       *                  <div>This is some other content</div>
       *              </div>
       *           </Draggable>
       *         );
       *       }
       *   });
       * ```
       */
      handle: _propTypes.default.string,
      /**
       * `cancel` specifies a selector to be used to prevent drag initialization.
       *
       * Example:
       *
       * ```jsx
       *   let App = React.createClass({
       *       render: function () {
       *           return(
       *               <Draggable cancel=".cancel">
       *                   <div>
       *                     <div className="cancel">You can't drag from here</div>
       *                     <div>Dragging here works fine</div>
       *                   </div>
       *               </Draggable>
       *           );
       *       }
       *   });
       * ```
       */
      cancel: _propTypes.default.string,
      /* If running in React Strict mode, ReactDOM.findDOMNode() is deprecated.
       * Unfortunately, in order for <Draggable> to work properly, we need raw access
       * to the underlying DOM node. If you want to avoid the warning, pass a `nodeRef`
       * as in this example:
       *
       * function MyComponent() {
       *   const nodeRef = React.useRef(null);
       *   return (
       *     <Draggable nodeRef={nodeRef}>
       *       <div ref={nodeRef}>Example Target</div>
       *     </Draggable>
       *   );
       * }
       *
       * This can be used for arbitrarily nested components, so long as the ref ends up
       * pointing to the actual child DOM node and not a custom component.
       */
      nodeRef: _propTypes.default.object,
      /**
       * Called when dragging starts.
       * If this function returns the boolean false, dragging will be canceled.
       */
      onStart: _propTypes.default.func,
      /**
       * Called while dragging.
       * If this function returns the boolean false, dragging will be canceled.
       */
      onDrag: _propTypes.default.func,
      /**
       * Called when dragging stops.
       * If this function returns the boolean false, the drag will remain active.
       */
      onStop: _propTypes.default.func,
      /**
       * A workaround option which can be passed if onMouseDown needs to be accessed,
       * since it'll always be blocked (as there is internal use of onMouseDown)
       */
      onMouseDown: _propTypes.default.func,
      /**
       * `scale`, if set, applies scaling while dragging an element
       */
      scale: _propTypes.default.number,
      /**
       * These properties should be defined on the child, not here.
       */
      className: _shims.dontSetMe,
      style: _shims.dontSetMe,
      transform: _shims.dontSetMe
    });
    _defineProperty(DraggableCore, "defaultProps", {
      allowAnyClick: false,
      // by default only accept left click
      disabled: false,
      enableUserSelectHack: true,
      onStart: function onStart() {
      },
      onDrag: function onDrag() {
      },
      onStop: function onStop() {
      },
      onMouseDown: function onMouseDown() {
      },
      scale: 1
    });
  }
});

// node_modules/react-draggable/build/cjs/Draggable.js
var require_Draggable = __commonJS({
  "node_modules/react-draggable/build/cjs/Draggable.js"(exports) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "DraggableCore", {
      enumerable: true,
      get: function get() {
        return _DraggableCore.default;
      }
    });
    exports.default = void 0;
    var React = _interopRequireWildcard(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _reactDom = _interopRequireDefault(require_react_dom());
    var _clsx2 = _interopRequireDefault((init_clsx_m(), __toCommonJS(clsx_m_exports)));
    var _domFns = require_domFns();
    var _positionFns = require_positionFns();
    var _shims = require_shims();
    var _DraggableCore = _interopRequireDefault(require_DraggableCore());
    var _log = _interopRequireDefault(require_log());
    var _excluded = ["axis", "bounds", "children", "defaultPosition", "defaultClassName", "defaultClassNameDragging", "defaultClassNameDragged", "position", "positionOffset", "scale"];
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
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
    function _extends() {
      _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    function _objectWithoutProperties(source, excluded) {
      if (source == null)
        return {};
      var target = _objectWithoutPropertiesLoose(source, excluded);
      var key, i;
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0)
            continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key))
            continue;
          target[key] = source[key];
        }
      }
      return target;
    }
    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function _iterableToArrayLimit(arr, i) {
      var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
      if (_i == null)
        return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _s, _e;
      try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i)
            break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null)
            _i["return"]();
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      Object.defineProperty(subClass, "prototype", { writable: false });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return _assertThisInitialized(self);
    }
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var Draggable = function(_React$Component) {
      _inherits(Draggable2, _React$Component);
      var _super = _createSuper(Draggable2);
      function Draggable2(props) {
        var _this;
        _classCallCheck(this, Draggable2);
        _this = _super.call(this, props);
        _defineProperty(_assertThisInitialized(_this), "onDragStart", function(e, coreData) {
          (0, _log.default)("Draggable: onDragStart: %j", coreData);
          var shouldStart = _this.props.onStart(e, (0, _positionFns.createDraggableData)(_assertThisInitialized(_this), coreData));
          if (shouldStart === false)
            return false;
          _this.setState({
            dragging: true,
            dragged: true
          });
        });
        _defineProperty(_assertThisInitialized(_this), "onDrag", function(e, coreData) {
          if (!_this.state.dragging)
            return false;
          (0, _log.default)("Draggable: onDrag: %j", coreData);
          var uiData = (0, _positionFns.createDraggableData)(_assertThisInitialized(_this), coreData);
          var newState = {
            x: uiData.x,
            y: uiData.y
          };
          if (_this.props.bounds) {
            var x = newState.x, y = newState.y;
            newState.x += _this.state.slackX;
            newState.y += _this.state.slackY;
            var _getBoundPosition = (0, _positionFns.getBoundPosition)(_assertThisInitialized(_this), newState.x, newState.y), _getBoundPosition2 = _slicedToArray(_getBoundPosition, 2), newStateX = _getBoundPosition2[0], newStateY = _getBoundPosition2[1];
            newState.x = newStateX;
            newState.y = newStateY;
            newState.slackX = _this.state.slackX + (x - newState.x);
            newState.slackY = _this.state.slackY + (y - newState.y);
            uiData.x = newState.x;
            uiData.y = newState.y;
            uiData.deltaX = newState.x - _this.state.x;
            uiData.deltaY = newState.y - _this.state.y;
          }
          var shouldUpdate = _this.props.onDrag(e, uiData);
          if (shouldUpdate === false)
            return false;
          _this.setState(newState);
        });
        _defineProperty(_assertThisInitialized(_this), "onDragStop", function(e, coreData) {
          if (!_this.state.dragging)
            return false;
          var shouldContinue = _this.props.onStop(e, (0, _positionFns.createDraggableData)(_assertThisInitialized(_this), coreData));
          if (shouldContinue === false)
            return false;
          (0, _log.default)("Draggable: onDragStop: %j", coreData);
          var newState = {
            dragging: false,
            slackX: 0,
            slackY: 0
          };
          var controlled = Boolean(_this.props.position);
          if (controlled) {
            var _this$props$position = _this.props.position, x = _this$props$position.x, y = _this$props$position.y;
            newState.x = x;
            newState.y = y;
          }
          _this.setState(newState);
        });
        _this.state = {
          // Whether or not we are currently dragging.
          dragging: false,
          // Whether or not we have been dragged before.
          dragged: false,
          // Current transform x and y.
          x: props.position ? props.position.x : props.defaultPosition.x,
          y: props.position ? props.position.y : props.defaultPosition.y,
          prevPropsPosition: _objectSpread({}, props.position),
          // Used for compensating for out-of-bounds drags
          slackX: 0,
          slackY: 0,
          // Can only determine if SVG after mounting
          isElementSVG: false
        };
        if (props.position && !(props.onDrag || props.onStop)) {
          console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
        }
        return _this;
      }
      _createClass(Draggable2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          if (typeof window.SVGElement !== "undefined" && this.findDOMNode() instanceof window.SVGElement) {
            this.setState({
              isElementSVG: true
            });
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.setState({
            dragging: false
          });
        }
        // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
        // the underlying DOM node ourselves. See the README for more information.
      }, {
        key: "findDOMNode",
        value: function findDOMNode() {
          var _this$props$nodeRef$c, _this$props, _this$props$nodeRef;
          return (_this$props$nodeRef$c = (_this$props = this.props) === null || _this$props === void 0 ? void 0 : (_this$props$nodeRef = _this$props.nodeRef) === null || _this$props$nodeRef === void 0 ? void 0 : _this$props$nodeRef.current) !== null && _this$props$nodeRef$c !== void 0 ? _this$props$nodeRef$c : _reactDom.default.findDOMNode(this);
        }
      }, {
        key: "render",
        value: function render() {
          var _clsx;
          var _this$props2 = this.props, axis = _this$props2.axis, bounds = _this$props2.bounds, children = _this$props2.children, defaultPosition = _this$props2.defaultPosition, defaultClassName = _this$props2.defaultClassName, defaultClassNameDragging = _this$props2.defaultClassNameDragging, defaultClassNameDragged = _this$props2.defaultClassNameDragged, position = _this$props2.position, positionOffset = _this$props2.positionOffset, scale = _this$props2.scale, draggableCoreProps = _objectWithoutProperties(_this$props2, _excluded);
          var style = {};
          var svgTransform = null;
          var controlled = Boolean(position);
          var draggable = !controlled || this.state.dragging;
          var validPosition = position || defaultPosition;
          var transformOpts = {
            // Set left if horizontal drag is enabled
            x: (0, _positionFns.canDragX)(this) && draggable ? this.state.x : validPosition.x,
            // Set top if vertical drag is enabled
            y: (0, _positionFns.canDragY)(this) && draggable ? this.state.y : validPosition.y
          };
          if (this.state.isElementSVG) {
            svgTransform = (0, _domFns.createSVGTransform)(transformOpts, positionOffset);
          } else {
            style = (0, _domFns.createCSSTransform)(transformOpts, positionOffset);
          }
          var className = (0, _clsx2.default)(children.props.className || "", defaultClassName, (_clsx = {}, _defineProperty(_clsx, defaultClassNameDragging, this.state.dragging), _defineProperty(_clsx, defaultClassNameDragged, this.state.dragged), _clsx));
          return React.createElement(_DraggableCore.default, _extends({}, draggableCoreProps, {
            onStart: this.onDragStart,
            onDrag: this.onDrag,
            onStop: this.onDragStop
          }), React.cloneElement(React.Children.only(children), {
            className,
            style: _objectSpread(_objectSpread({}, children.props.style), style),
            transform: svgTransform
          }));
        }
      }], [{
        key: "getDerivedStateFromProps",
        value: (
          // React 16.3+
          // Arity (props, state)
          function getDerivedStateFromProps(_ref, _ref2) {
            var position = _ref.position;
            var prevPropsPosition = _ref2.prevPropsPosition;
            if (position && (!prevPropsPosition || position.x !== prevPropsPosition.x || position.y !== prevPropsPosition.y)) {
              (0, _log.default)("Draggable: getDerivedStateFromProps %j", {
                position,
                prevPropsPosition
              });
              return {
                x: position.x,
                y: position.y,
                prevPropsPosition: _objectSpread({}, position)
              };
            }
            return null;
          }
        )
      }]);
      return Draggable2;
    }(React.Component);
    exports.default = Draggable;
    _defineProperty(Draggable, "displayName", "Draggable");
    _defineProperty(Draggable, "propTypes", _objectSpread(_objectSpread({}, _DraggableCore.default.propTypes), {}, {
      /**
       * `axis` determines which axis the draggable can move.
       *
       *  Note that all callbacks will still return data as normal. This only
       *  controls flushing to the DOM.
       *
       * 'both' allows movement horizontally and vertically.
       * 'x' limits movement to horizontal axis.
       * 'y' limits movement to vertical axis.
       * 'none' limits all movement.
       *
       * Defaults to 'both'.
       */
      axis: _propTypes.default.oneOf(["both", "x", "y", "none"]),
      /**
       * `bounds` determines the range of movement available to the element.
       * Available values are:
       *
       * 'parent' restricts movement within the Draggable's parent node.
       *
       * Alternatively, pass an object with the following properties, all of which are optional:
       *
       * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
       *
       * All values are in px.
       *
       * Example:
       *
       * ```jsx
       *   let App = React.createClass({
       *       render: function () {
       *         return (
       *            <Draggable bounds={{right: 300, bottom: 300}}>
       *              <div>Content</div>
       *           </Draggable>
       *         );
       *       }
       *   });
       * ```
       */
      bounds: _propTypes.default.oneOfType([_propTypes.default.shape({
        left: _propTypes.default.number,
        right: _propTypes.default.number,
        top: _propTypes.default.number,
        bottom: _propTypes.default.number
      }), _propTypes.default.string, _propTypes.default.oneOf([false])]),
      defaultClassName: _propTypes.default.string,
      defaultClassNameDragging: _propTypes.default.string,
      defaultClassNameDragged: _propTypes.default.string,
      /**
       * `defaultPosition` specifies the x and y that the dragged item should start at
       *
       * Example:
       *
       * ```jsx
       *      let App = React.createClass({
       *          render: function () {
       *              return (
       *                  <Draggable defaultPosition={{x: 25, y: 25}}>
       *                      <div>I start with transformX: 25px and transformY: 25px;</div>
       *                  </Draggable>
       *              );
       *          }
       *      });
       * ```
       */
      defaultPosition: _propTypes.default.shape({
        x: _propTypes.default.number,
        y: _propTypes.default.number
      }),
      positionOffset: _propTypes.default.shape({
        x: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
        y: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
      }),
      /**
       * `position`, if present, defines the current position of the element.
       *
       *  This is similar to how form elements in React work - if no `position` is supplied, the component
       *  is uncontrolled.
       *
       * Example:
       *
       * ```jsx
       *      let App = React.createClass({
       *          render: function () {
       *              return (
       *                  <Draggable position={{x: 25, y: 25}}>
       *                      <div>I start with transformX: 25px and transformY: 25px;</div>
       *                  </Draggable>
       *              );
       *          }
       *      });
       * ```
       */
      position: _propTypes.default.shape({
        x: _propTypes.default.number,
        y: _propTypes.default.number
      }),
      /**
       * These properties should be defined on the child, not here.
       */
      className: _shims.dontSetMe,
      style: _shims.dontSetMe,
      transform: _shims.dontSetMe
    }));
    _defineProperty(Draggable, "defaultProps", _objectSpread(_objectSpread({}, _DraggableCore.default.defaultProps), {}, {
      axis: "both",
      bounds: false,
      defaultClassName: "react-draggable",
      defaultClassNameDragging: "react-draggable-dragging",
      defaultClassNameDragged: "react-draggable-dragged",
      defaultPosition: {
        x: 0,
        y: 0
      },
      scale: 1
    }));
  }
});

// node_modules/react-draggable/build/cjs/cjs.js
var require_cjs = __commonJS({
  "node_modules/react-draggable/build/cjs/cjs.js"(exports, module) {
    var _require = require_Draggable();
    var Draggable = _require.default;
    var DraggableCore = _require.DraggableCore;
    module.exports = Draggable;
    module.exports.default = Draggable;
    module.exports.DraggableCore = DraggableCore;
  }
});
export default require_cjs();
//# sourceMappingURL=react-draggable.js.map
