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
  __commonJS
} from "./chunk-AC2VUBZ6.js";

// node_modules/react-connect-elements/dist/react-connect-elements.js
var require_react_connect_elements = __commonJS({
  "node_modules/react-connect-elements/dist/react-connect-elements.js"(exports, module) {
    function _interopDefault(e) {
      return e && "object" == typeof e && "default" in e ? e.default : e;
    }
    var ReactDOM = _interopDefault(require_react_dom());
    var PropTypes = _interopDefault(require_prop_types());
    var React = require_react();
    var React__default = _interopDefault(React);
    var Portal = function(e) {
      var t = e.children, r = e.query;
      return ReactDOM.createPortal(t, document.querySelector(r));
    };
    Portal.propTypes = { children: PropTypes.node.isRequired, query: PropTypes.string }, Portal.defaultProps = { query: "body" };
    var signum = function(e) {
      return e < 0 ? -1 : 1;
    };
    var absolute = function(e) {
      return e < 0 ? -e : e;
    };
    var drawPath = function(e, t, r, n, o, c) {
      var i = parseFloat(t.getAttribute("stroke-width"));
      e.getAttribute("height") < c && e.setAttribute("height", c), e.getAttribute("width") < r + i && e.setAttribute("width", r + i), e.getAttribute("width") < o + i && e.setAttribute("width", o + i);
      var u = 0.15 * (o - r), a = 0.15 * (c - n), l = a < absolute(u) ? a : absolute(u), s = 0, p = 1;
      r > o && (s = 1, p = 0), t.setAttribute("d", "M" + r + " " + n + " V" + (n + l) + " A" + l + " " + l + " 0 0 " + s + " " + (r + l * signum(u)) + " " + (n + 2 * l) + " H" + (o - l * signum(u)) + " A" + l + " " + l + " 0 0 " + p + " " + o + " " + (n + 3 * l) + " V" + c);
    };
    var connectElements = function(e, t, r, n, o) {
      if (n.getBoundingClientRect().top > o.getBoundingClientRect().top) {
        var c = n;
        n = o, o = c;
      }
      var i = e.getBoundingClientRect().top, u = e.getBoundingClientRect().left, a = n.getBoundingClientRect(), l = o.getBoundingClientRect(), s = a.left + 0.5 * a.width - u, p = a.top + a.height - i, f = l.left + 0.5 * l.width - u, d = l.top - i;
      drawPath(t, r, s, p, f, d);
    };
    var _createClass = function() {
      function e(e2, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e2, n.key, n);
        }
      }
      return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    }();
    function _classCallCheck(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(e, t) {
      if (!e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    function _inherits(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: false, writable: true, configurable: true } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    var ReactConnectElements = function(e) {
      function t() {
        var e2, r, n;
        _classCallCheck(this, t);
        for (var o = arguments.length, c = Array(o), i = 0; i < o; i++)
          c[i] = arguments[i];
        return r = n = _possibleConstructorReturn(this, (e2 = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e2, [this].concat(c))), n.state = { querySelector: "body" }, n.checkSelector = function() {
          document.querySelector(n.props.selector) && n.setState({ querySelector: n.props.selector }, function() {
            return n.connectAll();
          });
        }, n.connectAll = function() {
          n.props.elements.map(function(e3, t2) {
            var r2 = document.querySelector(e3.from), o2 = document.querySelector(e3.to), c2 = document.querySelector("#path" + (t2 + 1));
            return connectElements(n.svgContainer, n.svg, c2, r2, o2);
          });
        }, _possibleConstructorReturn(n, r);
      }
      return _inherits(t, React.PureComponent), _createClass(t, [{ key: "componentDidMount", value: function() {
        this.checkSelector();
      } }, { key: "render", value: function() {
        var e2 = this, t2 = this.props, r = t2.elements, n = t2.overlay, o = t2.strokeWidth, c = t2.color;
        return this.state.querySelector && React__default.createElement(Portal, { query: this.state.querySelector }, React__default.createElement("div", { id: "react-connect-elements-container", style: { zIndex: n, position: "absolute" }, ref: function(t3) {
          e2.svgContainer = t3;
        } }, React__default.createElement("svg", { width: "0", height: "0", ref: function(t3) {
          e2.svg = t3;
        } }, r.map(function(e3, t3) {
          return React__default.createElement("path", { key: e3.from + "-" + e3.to, id: "path" + (t3 + 1), d: "M0 0", stroke: e3.color || c, fill: "none", strokeWidth: o + "px" });
        }))));
      } }]), t;
    }();
    ReactConnectElements.propTypes = { elements: PropTypes.array.isRequired, overlay: PropTypes.number, selector: PropTypes.string.isRequired, strokeWidth: PropTypes.number, color: PropTypes.string }, ReactConnectElements.defaultProps = { overlay: 0, strokeWidth: 5, color: "#666" }, module.exports = ReactConnectElements;
  }
});
export default require_react_connect_elements();
//# sourceMappingURL=react-connect-elements.js.map
