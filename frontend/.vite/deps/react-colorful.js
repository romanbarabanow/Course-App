import {
  require_react
} from "./chunk-FLAVOKRJ.js";
import {
  __toESM
} from "./chunk-AC2VUBZ6.js";

// node_modules/react-colorful/dist/index.mjs
var import_react = __toESM(require_react(), 1);
function u() {
  return (u = Object.assign || function(e2) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t2 = arguments[r2];
      for (var n2 in t2)
        Object.prototype.hasOwnProperty.call(t2, n2) && (e2[n2] = t2[n2]);
    }
    return e2;
  }).apply(this, arguments);
}
function c(e2, r2) {
  if (null == e2)
    return {};
  var t2, n2, o2 = {}, a2 = Object.keys(e2);
  for (n2 = 0; n2 < a2.length; n2++)
    r2.indexOf(t2 = a2[n2]) >= 0 || (o2[t2] = e2[t2]);
  return o2;
}
function i(e2) {
  var t2 = (0, import_react.useRef)(e2), n2 = (0, import_react.useRef)(function(e3) {
    t2.current && t2.current(e3);
  });
  return t2.current = e2, n2.current;
}
var s = function(e2, r2, t2) {
  return void 0 === r2 && (r2 = 0), void 0 === t2 && (t2 = 1), e2 > t2 ? t2 : e2 < r2 ? r2 : e2;
};
var f = function(e2) {
  return "touches" in e2;
};
var v = function(e2) {
  return e2 && e2.ownerDocument.defaultView || self;
};
var d = function(e2, r2, t2) {
  var n2 = e2.getBoundingClientRect(), o2 = f(r2) ? function(e3, r3) {
    for (var t3 = 0; t3 < e3.length; t3++)
      if (e3[t3].identifier === r3)
        return e3[t3];
    return e3[0];
  }(r2.touches, t2) : r2;
  return { left: s((o2.pageX - (n2.left + v(e2).pageXOffset)) / n2.width), top: s((o2.pageY - (n2.top + v(e2).pageYOffset)) / n2.height) };
};
var h = function(e2) {
  !f(e2) && e2.preventDefault();
};
var m = import_react.default.memo(function(o2) {
  var a2 = o2.onMove, l2 = o2.onKey, s2 = c(o2, ["onMove", "onKey"]), m2 = (0, import_react.useRef)(null), g2 = i(a2), p2 = i(l2), b2 = (0, import_react.useRef)(null), _2 = (0, import_react.useRef)(false), x2 = (0, import_react.useMemo)(function() {
    var e2 = function(e3) {
      h(e3), (f(e3) ? e3.touches.length > 0 : e3.buttons > 0) && m2.current ? g2(d(m2.current, e3, b2.current)) : t2(false);
    }, r2 = function() {
      return t2(false);
    };
    function t2(t3) {
      var n2 = _2.current, o3 = v(m2.current), a3 = t3 ? o3.addEventListener : o3.removeEventListener;
      a3(n2 ? "touchmove" : "mousemove", e2), a3(n2 ? "touchend" : "mouseup", r2);
    }
    return [function(e3) {
      var r3 = e3.nativeEvent, n2 = m2.current;
      if (n2 && (h(r3), !function(e4, r4) {
        return r4 && !f(e4);
      }(r3, _2.current) && n2)) {
        if (f(r3)) {
          _2.current = true;
          var o3 = r3.changedTouches || [];
          o3.length && (b2.current = o3[0].identifier);
        }
        n2.focus(), g2(d(n2, r3, b2.current)), t2(true);
      }
    }, function(e3) {
      var r3 = e3.which || e3.keyCode;
      r3 < 37 || r3 > 40 || (e3.preventDefault(), p2({ left: 39 === r3 ? 0.05 : 37 === r3 ? -0.05 : 0, top: 40 === r3 ? 0.05 : 38 === r3 ? -0.05 : 0 }));
    }, t2];
  }, [p2, g2]), C2 = x2[0], E2 = x2[1], H2 = x2[2];
  return (0, import_react.useEffect)(function() {
    return H2;
  }, [H2]), import_react.default.createElement("div", u({}, s2, { onTouchStart: C2, onMouseDown: C2, className: "react-colorful__interactive", ref: m2, onKeyDown: E2, tabIndex: 0, role: "slider" }));
});
var g = function(e2) {
  return e2.filter(Boolean).join(" ");
};
var p = function(r2) {
  var t2 = r2.color, n2 = r2.left, o2 = r2.top, a2 = void 0 === o2 ? 0.5 : o2, l2 = g(["react-colorful__pointer", r2.className]);
  return import_react.default.createElement("div", { className: l2, style: { top: 100 * a2 + "%", left: 100 * n2 + "%" } }, import_react.default.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t2 } }));
};
var b = function(e2, r2, t2) {
  return void 0 === r2 && (r2 = 0), void 0 === t2 && (t2 = Math.pow(10, r2)), Math.round(t2 * e2) / t2;
};
var _ = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) };
var x = function(e2) {
  return L(C(e2));
};
var C = function(e2) {
  return "#" === e2[0] && (e2 = e2.substring(1)), e2.length < 6 ? { r: parseInt(e2[0] + e2[0], 16), g: parseInt(e2[1] + e2[1], 16), b: parseInt(e2[2] + e2[2], 16), a: 4 === e2.length ? b(parseInt(e2[3] + e2[3], 16) / 255, 2) : 1 } : { r: parseInt(e2.substring(0, 2), 16), g: parseInt(e2.substring(2, 4), 16), b: parseInt(e2.substring(4, 6), 16), a: 8 === e2.length ? b(parseInt(e2.substring(6, 8), 16) / 255, 2) : 1 };
};
var E = function(e2, r2) {
  return void 0 === r2 && (r2 = "deg"), Number(e2) * (_[r2] || 1);
};
var H = function(e2) {
  var r2 = /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e2);
  return r2 ? N({ h: E(r2[1], r2[2]), s: Number(r2[3]), l: Number(r2[4]), a: void 0 === r2[5] ? 1 : Number(r2[5]) / (r2[6] ? 100 : 1) }) : { h: 0, s: 0, v: 0, a: 1 };
};
var M = H;
var N = function(e2) {
  var r2 = e2.s, t2 = e2.l;
  return { h: e2.h, s: (r2 *= (t2 < 50 ? t2 : 100 - t2) / 100) > 0 ? 2 * r2 / (t2 + r2) * 100 : 0, v: t2 + r2, a: e2.a };
};
var w = function(e2) {
  return K(I(e2));
};
var y = function(e2) {
  var r2 = e2.s, t2 = e2.v, n2 = e2.a, o2 = (200 - r2) * t2 / 100;
  return { h: b(e2.h), s: b(o2 > 0 && o2 < 200 ? r2 * t2 / 100 / (o2 <= 100 ? o2 : 200 - o2) * 100 : 0), l: b(o2 / 2), a: b(n2, 2) };
};
var q = function(e2) {
  var r2 = y(e2);
  return "hsl(" + r2.h + ", " + r2.s + "%, " + r2.l + "%)";
};
var k = function(e2) {
  var r2 = y(e2);
  return "hsla(" + r2.h + ", " + r2.s + "%, " + r2.l + "%, " + r2.a + ")";
};
var I = function(e2) {
  var r2 = e2.h, t2 = e2.s, n2 = e2.v, o2 = e2.a;
  r2 = r2 / 360 * 6, t2 /= 100, n2 /= 100;
  var a2 = Math.floor(r2), l2 = n2 * (1 - t2), u2 = n2 * (1 - (r2 - a2) * t2), c2 = n2 * (1 - (1 - r2 + a2) * t2), i2 = a2 % 6;
  return { r: b(255 * [n2, u2, l2, l2, c2, n2][i2]), g: b(255 * [c2, n2, n2, u2, l2, l2][i2]), b: b(255 * [l2, l2, c2, n2, n2, u2][i2]), a: b(o2, 2) };
};
var O = function(e2) {
  var r2 = /hsva?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e2);
  return r2 ? A({ h: E(r2[1], r2[2]), s: Number(r2[3]), v: Number(r2[4]), a: void 0 === r2[5] ? 1 : Number(r2[5]) / (r2[6] ? 100 : 1) }) : { h: 0, s: 0, v: 0, a: 1 };
};
var j = O;
var z = function(e2) {
  var r2 = /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e2);
  return r2 ? L({ r: Number(r2[1]) / (r2[2] ? 100 / 255 : 1), g: Number(r2[3]) / (r2[4] ? 100 / 255 : 1), b: Number(r2[5]) / (r2[6] ? 100 / 255 : 1), a: void 0 === r2[7] ? 1 : Number(r2[7]) / (r2[8] ? 100 : 1) }) : { h: 0, s: 0, v: 0, a: 1 };
};
var B = z;
var D = function(e2) {
  var r2 = e2.toString(16);
  return r2.length < 2 ? "0" + r2 : r2;
};
var K = function(e2) {
  var r2 = e2.r, t2 = e2.g, n2 = e2.b, o2 = e2.a, a2 = o2 < 1 ? D(b(255 * o2)) : "";
  return "#" + D(r2) + D(t2) + D(n2) + a2;
};
var L = function(e2) {
  var r2 = e2.r, t2 = e2.g, n2 = e2.b, o2 = e2.a, a2 = Math.max(r2, t2, n2), l2 = a2 - Math.min(r2, t2, n2), u2 = l2 ? a2 === r2 ? (t2 - n2) / l2 : a2 === t2 ? 2 + (n2 - r2) / l2 : 4 + (r2 - t2) / l2 : 0;
  return { h: b(60 * (u2 < 0 ? u2 + 6 : u2)), s: b(a2 ? l2 / a2 * 100 : 0), v: b(a2 / 255 * 100), a: o2 };
};
var A = function(e2) {
  return { h: b(e2.h), s: b(e2.s), v: b(e2.v), a: b(e2.a, 2) };
};
var S = import_react.default.memo(function(r2) {
  var t2 = r2.hue, n2 = r2.onChange, o2 = g(["react-colorful__hue", r2.className]);
  return import_react.default.createElement("div", { className: o2 }, import_react.default.createElement(m, { onMove: function(e2) {
    n2({ h: 360 * e2.left });
  }, onKey: function(e2) {
    n2({ h: s(t2 + 360 * e2.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": b(t2), "aria-valuemax": "360", "aria-valuemin": "0" }, import_react.default.createElement(p, { className: "react-colorful__hue-pointer", left: t2 / 360, color: q({ h: t2, s: 100, v: 100, a: 1 }) })));
});
var T = import_react.default.memo(function(r2) {
  var t2 = r2.hsva, n2 = r2.onChange, o2 = { backgroundColor: q({ h: t2.h, s: 100, v: 100, a: 1 }) };
  return import_react.default.createElement("div", { className: "react-colorful__saturation", style: o2 }, import_react.default.createElement(m, { onMove: function(e2) {
    n2({ s: 100 * e2.left, v: 100 - 100 * e2.top });
  }, onKey: function(e2) {
    n2({ s: s(t2.s + 100 * e2.left, 0, 100), v: s(t2.v - 100 * e2.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + b(t2.s) + "%, Brightness " + b(t2.v) + "%" }, import_react.default.createElement(p, { className: "react-colorful__saturation-pointer", top: 1 - t2.v / 100, left: t2.s / 100, color: q(t2) })));
});
var F = function(e2, r2) {
  if (e2 === r2)
    return true;
  for (var t2 in e2)
    if (e2[t2] !== r2[t2])
      return false;
  return true;
};
var P = function(e2, r2) {
  return e2.replace(/\s/g, "") === r2.replace(/\s/g, "");
};
var X = function(e2, r2) {
  return e2.toLowerCase() === r2.toLowerCase() || F(C(e2), C(r2));
};
function Y(e2, t2, l2) {
  var u2 = i(l2), c2 = (0, import_react.useState)(function() {
    return e2.toHsva(t2);
  }), s2 = c2[0], f2 = c2[1], v2 = (0, import_react.useRef)({ color: t2, hsva: s2 });
  (0, import_react.useEffect)(function() {
    if (!e2.equal(t2, v2.current.color)) {
      var r2 = e2.toHsva(t2);
      v2.current = { hsva: r2, color: t2 }, f2(r2);
    }
  }, [t2, e2]), (0, import_react.useEffect)(function() {
    var r2;
    F(s2, v2.current.hsva) || e2.equal(r2 = e2.fromHsva(s2), v2.current.color) || (v2.current = { hsva: s2, color: r2 }, u2(r2));
  }, [s2, e2, u2]);
  var d2 = (0, import_react.useCallback)(function(e3) {
    f2(function(r2) {
      return Object.assign({}, r2, e3);
    });
  }, []);
  return [s2, d2];
}
var R;
var V = "undefined" != typeof window ? import_react.useLayoutEffect : import_react.useEffect;
var $ = function() {
  return R || ("undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : void 0);
};
var G = function(e2) {
  R = e2;
};
var J = /* @__PURE__ */ new Map();
var Q = function(e2) {
  V(function() {
    var r2 = e2.current ? e2.current.ownerDocument : document;
    if (void 0 !== r2 && !J.has(r2)) {
      var t2 = r2.createElement("style");
      t2.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, J.set(r2, t2);
      var n2 = $();
      n2 && t2.setAttribute("nonce", n2), r2.head.appendChild(t2);
    }
  }, []);
};
var U = function(t2) {
  var n2 = t2.className, o2 = t2.colorModel, a2 = t2.color, l2 = void 0 === a2 ? o2.defaultColor : a2, i2 = t2.onChange, s2 = c(t2, ["className", "colorModel", "color", "onChange"]), f2 = (0, import_react.useRef)(null);
  Q(f2);
  var v2 = Y(o2, l2, i2), d2 = v2[0], h2 = v2[1], m2 = g(["react-colorful", n2]);
  return import_react.default.createElement("div", u({}, s2, { ref: f2, className: m2 }), import_react.default.createElement(T, { hsva: d2, onChange: h2 }), import_react.default.createElement(S, { hue: d2.h, onChange: h2, className: "react-colorful__last-control" }));
};
var W = { defaultColor: "000", toHsva: x, fromHsva: function(e2) {
  return w({ h: e2.h, s: e2.s, v: e2.v, a: 1 });
}, equal: X };
var Z = function(r2) {
  return import_react.default.createElement(U, u({}, r2, { colorModel: W }));
};
var ee = function(r2) {
  var t2 = r2.className, n2 = r2.hsva, o2 = r2.onChange, a2 = { backgroundImage: "linear-gradient(90deg, " + k(Object.assign({}, n2, { a: 0 })) + ", " + k(Object.assign({}, n2, { a: 1 })) + ")" }, l2 = g(["react-colorful__alpha", t2]), u2 = b(100 * n2.a);
  return import_react.default.createElement("div", { className: l2 }, import_react.default.createElement("div", { className: "react-colorful__alpha-gradient", style: a2 }), import_react.default.createElement(m, { onMove: function(e2) {
    o2({ a: e2.left });
  }, onKey: function(e2) {
    o2({ a: s(n2.a + e2.left) });
  }, "aria-label": "Alpha", "aria-valuetext": u2 + "%", "aria-valuenow": u2, "aria-valuemin": "0", "aria-valuemax": "100" }, import_react.default.createElement(p, { className: "react-colorful__alpha-pointer", left: n2.a, color: k(n2) })));
};
var re = function(t2) {
  var n2 = t2.className, o2 = t2.colorModel, a2 = t2.color, l2 = void 0 === a2 ? o2.defaultColor : a2, i2 = t2.onChange, s2 = c(t2, ["className", "colorModel", "color", "onChange"]), f2 = (0, import_react.useRef)(null);
  Q(f2);
  var v2 = Y(o2, l2, i2), d2 = v2[0], h2 = v2[1], m2 = g(["react-colorful", n2]);
  return import_react.default.createElement("div", u({}, s2, { ref: f2, className: m2 }), import_react.default.createElement(T, { hsva: d2, onChange: h2 }), import_react.default.createElement(S, { hue: d2.h, onChange: h2 }), import_react.default.createElement(ee, { hsva: d2, onChange: h2, className: "react-colorful__last-control" }));
};
var te = { defaultColor: "0001", toHsva: x, fromHsva: w, equal: X };
var ne = function(r2) {
  return import_react.default.createElement(re, u({}, r2, { colorModel: te }));
};
var oe = { defaultColor: { h: 0, s: 0, l: 0, a: 1 }, toHsva: N, fromHsva: y, equal: F };
var ae = function(r2) {
  return import_react.default.createElement(re, u({}, r2, { colorModel: oe }));
};
var le = { defaultColor: "hsla(0, 0%, 0%, 1)", toHsva: H, fromHsva: k, equal: P };
var ue = function(r2) {
  return import_react.default.createElement(re, u({}, r2, { colorModel: le }));
};
var ce = { defaultColor: { h: 0, s: 0, l: 0 }, toHsva: function(e2) {
  return N({ h: e2.h, s: e2.s, l: e2.l, a: 1 });
}, fromHsva: function(e2) {
  return { h: (r2 = y(e2)).h, s: r2.s, l: r2.l };
  var r2;
}, equal: F };
var ie = function(r2) {
  return import_react.default.createElement(U, u({}, r2, { colorModel: ce }));
};
var se = { defaultColor: "hsl(0, 0%, 0%)", toHsva: M, fromHsva: q, equal: P };
var fe = function(r2) {
  return import_react.default.createElement(U, u({}, r2, { colorModel: se }));
};
var ve = { defaultColor: { h: 0, s: 0, v: 0, a: 1 }, toHsva: function(e2) {
  return e2;
}, fromHsva: A, equal: F };
var de = function(r2) {
  return import_react.default.createElement(re, u({}, r2, { colorModel: ve }));
};
var he = { defaultColor: "hsva(0, 0%, 0%, 1)", toHsva: O, fromHsva: function(e2) {
  var r2 = A(e2);
  return "hsva(" + r2.h + ", " + r2.s + "%, " + r2.v + "%, " + r2.a + ")";
}, equal: P };
var me = function(r2) {
  return import_react.default.createElement(re, u({}, r2, { colorModel: he }));
};
var ge = { defaultColor: { h: 0, s: 0, v: 0 }, toHsva: function(e2) {
  return { h: e2.h, s: e2.s, v: e2.v, a: 1 };
}, fromHsva: function(e2) {
  var r2 = A(e2);
  return { h: r2.h, s: r2.s, v: r2.v };
}, equal: F };
var pe = function(r2) {
  return import_react.default.createElement(U, u({}, r2, { colorModel: ge }));
};
var be = { defaultColor: "hsv(0, 0%, 0%)", toHsva: j, fromHsva: function(e2) {
  var r2 = A(e2);
  return "hsv(" + r2.h + ", " + r2.s + "%, " + r2.v + "%)";
}, equal: P };
var _e = function(r2) {
  return import_react.default.createElement(U, u({}, r2, { colorModel: be }));
};
var xe = { defaultColor: { r: 0, g: 0, b: 0, a: 1 }, toHsva: L, fromHsva: I, equal: F };
var Ce = function(r2) {
  return import_react.default.createElement(re, u({}, r2, { colorModel: xe }));
};
var Ee = { defaultColor: "rgba(0, 0, 0, 1)", toHsva: z, fromHsva: function(e2) {
  var r2 = I(e2);
  return "rgba(" + r2.r + ", " + r2.g + ", " + r2.b + ", " + r2.a + ")";
}, equal: P };
var He = function(r2) {
  return import_react.default.createElement(re, u({}, r2, { colorModel: Ee }));
};
var Me = { defaultColor: { r: 0, g: 0, b: 0 }, toHsva: function(e2) {
  return L({ r: e2.r, g: e2.g, b: e2.b, a: 1 });
}, fromHsva: function(e2) {
  return { r: (r2 = I(e2)).r, g: r2.g, b: r2.b };
  var r2;
}, equal: F };
var Ne = function(r2) {
  return import_react.default.createElement(U, u({}, r2, { colorModel: Me }));
};
var we = { defaultColor: "rgb(0, 0, 0)", toHsva: B, fromHsva: function(e2) {
  var r2 = I(e2);
  return "rgb(" + r2.r + ", " + r2.g + ", " + r2.b + ")";
}, equal: P };
var ye = function(r2) {
  return import_react.default.createElement(U, u({}, r2, { colorModel: we }));
};
var qe = /^#?([0-9A-F]{3,8})$/i;
var ke = function(r2) {
  var t2 = r2.color, l2 = void 0 === t2 ? "" : t2, s2 = r2.onChange, f2 = r2.onBlur, v2 = r2.escape, d2 = r2.validate, h2 = r2.format, m2 = r2.process, g2 = c(r2, ["color", "onChange", "onBlur", "escape", "validate", "format", "process"]), p2 = (0, import_react.useState)(function() {
    return v2(l2);
  }), b2 = p2[0], _2 = p2[1], x2 = i(s2), C2 = i(f2), E2 = (0, import_react.useCallback)(function(e2) {
    var r3 = v2(e2.target.value);
    _2(r3), d2(r3) && x2(m2 ? m2(r3) : r3);
  }, [v2, m2, d2, x2]), H2 = (0, import_react.useCallback)(function(e2) {
    d2(e2.target.value) || _2(v2(l2)), C2(e2);
  }, [l2, v2, d2, C2]);
  return (0, import_react.useEffect)(function() {
    _2(v2(l2));
  }, [l2, v2]), import_react.default.createElement("input", u({}, g2, { value: h2 ? h2(b2) : b2, spellCheck: "false", onChange: E2, onBlur: H2 }));
};
var Ie = function(e2) {
  return "#" + e2;
};
var Oe = function(r2) {
  var t2 = r2.prefixed, n2 = r2.alpha, o2 = c(r2, ["prefixed", "alpha"]), l2 = (0, import_react.useCallback)(function(e2) {
    return e2.replace(/([^0-9A-F]+)/gi, "").substring(0, n2 ? 8 : 6);
  }, [n2]), i2 = (0, import_react.useCallback)(function(e2) {
    return function(e3, r3) {
      var t3 = qe.exec(e3), n3 = t3 ? t3[1].length : 0;
      return 3 === n3 || 6 === n3 || !!r3 && 4 === n3 || !!r3 && 8 === n3;
    }(e2, n2);
  }, [n2]);
  return import_react.default.createElement(ke, u({}, o2, { escape: l2, format: t2 ? Ie : void 0, process: Ie, validate: i2 }));
};
export {
  ne as HexAlphaColorPicker,
  Oe as HexColorInput,
  Z as HexColorPicker,
  ie as HslColorPicker,
  fe as HslStringColorPicker,
  ae as HslaColorPicker,
  ue as HslaStringColorPicker,
  pe as HsvColorPicker,
  _e as HsvStringColorPicker,
  de as HsvaColorPicker,
  me as HsvaStringColorPicker,
  Ne as RgbColorPicker,
  ye as RgbStringColorPicker,
  Ce as RgbaColorPicker,
  He as RgbaStringColorPicker,
  G as setNonce
};
//# sourceMappingURL=react-colorful.js.map
