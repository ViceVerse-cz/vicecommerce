import { r as te, R as H, a as U } from "./index-4c5f9ec7.js";
var m = {};
var re = {
    get exports() {
      return m;
    },
    set exports(t) {
      m = t;
    },
  };
var ne = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var oe = ne;
var ae = oe;
function z() {}
function V() {}
V.resetWarningCache = z;
var ie = function () {
  function t(r, o, a, s, i, c) {
    if (c !== ae) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  t.isRequired = t;
  function e() {
    return t;
  }
  var n = {
    array: t,
    bigint: t,
    bool: t,
    func: t,
    number: t,
    object: t,
    string: t,
    symbol: t,
    any: t,
    arrayOf: e,
    element: t,
    elementType: t,
    instanceOf: e,
    node: t,
    objectOf: e,
    oneOf: e,
    oneOfType: e,
    shape: e,
    exact: e,
    checkPropTypes: V,
    resetWarningCache: z,
  };
  return (n.PropTypes = n), n;
};
re.exports = ie();
function ce(t) {
  return t && typeof t === "object" && "default" in t ? t.default : t;
}
var X = te;
var ue = ce(X);
function q(t, e, n) {
  return (
    e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t
  );
}
function se(t, e) {
  (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e);
}
var fe = !!(typeof window < "u" && window.document && window.document.createElement);
function le(t, e, n) {
  if (typeof t !== "function") throw new Error("Expected reducePropsToState to be a function.");
  if (typeof e !== "function") throw new Error("Expected handleStateChangeOnClient to be a function.");
  if (typeof n < "u" && typeof n !== "function")
    throw new Error("Expected mapStateOnServer to either be undefined or a function.");
  function r(o) {
    return o.displayName || o.name || "Component";
  }
  return function (a) {
    if (typeof a !== "function") throw new Error("Expected WrappedComponent to be a React component.");
    var s = [];
    var i;
    function c() {
      (i = t(
        s.map(function (f) {
          return f.props;
        }),
      )),
        u.canUseDOM ? e(i) : n && (i = n(i));
    }
    var u = (function (f) {
      se(p, f);
      function p() {
        return f.apply(this, arguments) || this;
      }
      (p.peek = function () {
        return i;
      }),
        (p.rewind = function () {
          if (p.canUseDOM)
            throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
          var y = i;
          return (i = void 0), (s = []), y;
        });
      var d = p.prototype;
      return (
        (d.UNSAFE_componentWillMount = function () {
          s.push(this), c();
        }),
        (d.componentDidUpdate = function () {
          c();
        }),
        (d.componentWillUnmount = function () {
          var y = s.indexOf(this);
          s.splice(y, 1), c();
        }),
        (d.render = function () {
          return ue.createElement(a, this.props);
        }),
        p
      );
    })(X.PureComponent);
    return q(u, "displayName", `SideEffect(${r(a)})`), q(u, "canUseDOM", fe), u;
  };
}
var pe = le;
var de = typeof Element < "u";
var Te = typeof Map === "function";
var me = typeof Set === "function";
var he = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
function L(t, e) {
  if (t === e) return !0;
  if (t && e && typeof t === "object" && typeof e === "object") {
    if (t.constructor !== e.constructor) return !1;
    var n;
    var r;
    var o;
    if (Array.isArray(t)) {
      if (((n = t.length), n !== e.length)) return !1;
      for (r = n; r-- !== 0; ) if (!L(t[r], e[r])) return !1;
      return !0;
    }
    var a;
    if (Te && t instanceof Map && e instanceof Map) {
      if (t.size !== e.size) return !1;
      for (a = t.entries(); !(r = a.next()).done; ) if (!e.has(r.value[0])) return !1;
      for (a = t.entries(); !(r = a.next()).done; ) if (!L(r.value[1], e.get(r.value[0]))) return !1;
      return !0;
    }
    if (me && t instanceof Set && e instanceof Set) {
      if (t.size !== e.size) return !1;
      for (a = t.entries(); !(r = a.next()).done; ) if (!e.has(r.value[0])) return !1;
      return !0;
    }
    if (he && ArrayBuffer.isView(t) && ArrayBuffer.isView(e)) {
      if (((n = t.length), n !== e.length)) return !1;
      for (r = n; r-- !== 0; ) if (t[r] !== e[r]) return !1;
      return !0;
    }
    if (t.constructor === RegExp) return t.source === e.source && t.flags === e.flags;
    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === e.valueOf();
    if (t.toString !== Object.prototype.toString) return t.toString() === e.toString();
    if (((o = Object.keys(t)), (n = o.length), n !== Object.keys(e).length)) return !1;
    for (r = n; r-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(e, o[r])) return !1;
    if (de && t instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (!(((o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") && t.$$typeof) || L(t[o[r]], e[o[r]]))) return !1;
    return !0;
  }
  return t !== t && e !== e;
}
var ve = function (e, n) {
  try {
    return L(e, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
}; /*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Y = Object.getOwnPropertySymbols;
var ye = Object.prototype.hasOwnProperty;
var ge = Object.prototype.propertyIsEnumerable;
function Ee(t) {
  if (t == null) throw new TypeError("Object.assign cannot be called with null or undefined");
  return Object(t);
}
function Ae() {
  try {
    if (!Object.assign) return !1;
    var t = new String("abc");
    if (((t[5] = "de"), Object.getOwnPropertyNames(t)[0] === "5")) return !1;
    for (var e = {}, n = 0; n < 10; n++) e[`_${String.fromCharCode(n)}`] = n;
    var r = Object.getOwnPropertyNames(e).map(function (a) {
      return e[a];
    });
    if (r.join("") !== "0123456789") return !1;
    var o = {};
    return (
      "abcdefghijklmnopqrst".split("").forEach(function (a) {
        o[a] = a;
      }),
      Object.keys(Object.assign({}, o)).join("") === "abcdefghijklmnopqrst"
    );
  } catch {
    return !1;
  }
}
var be = Ae()
    ? Object.assign
    : function (t, e) {
        for (var n, r = Ee(t), o, a = 1; a < arguments.length; a++) {
          n = Object(arguments[a]);
          for (var s in n) ye.call(n, s) && (r[s] = n[s]);
          if (Y) {
            o = Y(n);
            for (var i = 0; i < o.length; i++) ge.call(n, o[i]) && (r[o[i]] = n[o[i]]);
          }
        }
        return r;
      };
var S = { BODY: "bodyAttributes", HTML: "htmlAttributes", TITLE: "titleAttributes" };
var l = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title",
  };
Object.keys(l).map(function (t) {
  return l[t];
});
var h = {
    CHARSET: "charset",
    CSS_TEXT: "cssText",
    HREF: "href",
    HTTPEQUIV: "http-equiv",
    INNER_HTML: "innerHTML",
    ITEM_PROP: "itemprop",
    NAME: "name",
    PROPERTY: "property",
    REL: "rel",
    SRC: "src",
    TARGET: "target",
  };
var j = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex",
  };
var I = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate",
  };
var Oe = Object.keys(j).reduce(function (t, e) {
    return (t[j[e]] = e), t;
  }, {});
var Se = [l.NOSCRIPT, l.SCRIPT, l.STYLE];
var g = "data-react-helmet";
var Ce =
    typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t && typeof Symbol === "function" && t.constructor === Symbol && t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        };
var Pe = function (t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  };
var we = (function () {
    function t(e, n) {
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o);
      }
    }
    return function (e, n, r) {
      return n && t(e.prototype, n), r && t(e, r), e;
    };
  })();
var v =
    Object.assign ||
    function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
      }
      return t;
    };
var Re = function (t, e) {
    if (typeof e !== "function" && e !== null)
      throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`);
    (t.prototype = Object.create(e?.prototype, {
      constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
    })),
      e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
  };
var $ = function (t, e) {
    var n = {};
    for (var r in t) e.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
    return n;
  };
var _e = function (t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e === "object" || typeof e === "function") ? e : t;
  };
var x = function (e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return n === !1
      ? String(e)
      : String(e)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#x27;");
  };
var Ie = function (e) {
    var n = P(e, l.TITLE);
    var r = P(e, I.TITLE_TEMPLATE);
    if (r && n)
      return r.replace(/%s/g, function () {
        return Array.isArray(n) ? n.join("") : n;
      });
    var o = P(e, I.DEFAULT_TITLE);
    return n || o || void 0;
  };
var Le = function (e) {
    return P(e, I.ON_CHANGE_CLIENT_STATE) || function () {};
  };
var M = function (e, n) {
    return n
      .filter(function (r) {
        return typeof r[e] < "u";
      })
      .map(function (r) {
        return r[e];
      })
      .reduce(function (r, o) {
        return v({}, r, o);
      }, {});
  };
var je = function (e, n) {
    return n
      .filter(function (r) {
        return typeof r[l.BASE] < "u";
      })
      .map(function (r) {
        return r[l.BASE];
      })
      .reverse()
      .reduce(function (r, o) {
        if (!r.length)
          for (var a = Object.keys(o), s = 0; s < a.length; s++) {
            var i = a[s];
            var c = i.toLowerCase();
            if (e.indexOf(c) !== -1 && o[c]) return r.concat(o);
          }
        return r;
      }, []);
  };
var R = function (e, n, r) {
    var o = {};
    return r
      .filter(function (a) {
        return Array.isArray(a[e])
          ? !0
          : (typeof a[e] < "u" &&
              xe(`Helmet: ${e} should be of type "Array". Instead found type "${Ce(a[e])}"`),
            !1);
      })
      .map(function (a) {
        return a[e];
      })
      .reverse()
      .reduce(function (a, s) {
        var i = {};
        s.filter(function (d) {
          for (var T = void 0, y = Object.keys(d), E = 0; E < y.length; E++) {
            var A = y[E];
            var b = A.toLowerCase();
            n.indexOf(b) !== -1 &&
              !(T === h.REL && d[T].toLowerCase() === "canonical") &&
              !(b === h.REL && d[b].toLowerCase() === "stylesheet") &&
              (T = b),
              n.indexOf(A) !== -1 && (A === h.INNER_HTML || A === h.CSS_TEXT || A === h.ITEM_PROP) && (T = A);
          }
          if (!(T && d[T])) return !1;
          var w = d[T].toLowerCase();
          return o[T] || (o[T] = {}), i[T] || (i[T] = {}), o[T][w] ? !1 : ((i[T][w] = !0), !0);
        })
          .reverse()
          .forEach(function (d) {
            return a.push(d);
          });
        for (var c = Object.keys(i), u = 0; u < c.length; u++) {
          var f = c[u];
          var p = be({}, o[f], i[f]);
          o[f] = p;
        }
        return a;
      }, [])
      .reverse();
  };
var P = function (e, n) {
    for (var r = e.length - 1; r >= 0; r--) {
      var o = e[r];
      if (o.hasOwnProperty(n)) return o[n];
    }
    return null;
  };
var Me = function (e) {
    return {
      baseTag: je([h.HREF, h.TARGET], e),
      bodyAttributes: M(S.BODY, e),
      defer: P(e, I.DEFER),
      encode: P(e, I.ENCODE_SPECIAL_CHARACTERS),
      htmlAttributes: M(S.HTML, e),
      linkTags: R(l.LINK, [h.REL, h.HREF], e),
      metaTags: R(l.META, [h.NAME, h.CHARSET, h.HTTPEQUIV, h.PROPERTY, h.ITEM_PROP], e),
      noscriptTags: R(l.NOSCRIPT, [h.INNER_HTML], e),
      onChangeClientState: Le(e),
      scriptTags: R(l.SCRIPT, [h.SRC, h.INNER_HTML], e),
      styleTags: R(l.STYLE, [h.CSS_TEXT], e),
      title: Ie(e),
      titleAttributes: M(S.TITLE, e),
    };
  };
var F = (function () {
    var t = Date.now();
    return function (e) {
      var n = Date.now();
      n - t > 16
        ? ((t = n), e(n))
        : setTimeout(function () {
            F(e);
          }, 0);
    };
  })();
var G = function (e) {
    return clearTimeout(e);
  };
var Ne =
    typeof window < "u"
      ? (window.requestAnimationFrame?.bind(window)) ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        F
      : global.requestAnimationFrame || F;
var He =
    typeof window < "u"
      ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || G
      : global.cancelAnimationFrame || G;
var xe = function (e) {
    return console && typeof console.warn === "function" && console.warn(e);
  };
var _ = null;
var Fe = function (e) {
    _ && He(_),
      e.defer
        ? (_ = Ne(function () {
            W(e, function () {
              _ = null;
            });
          }))
        : (W(e), (_ = null));
  };
var W = function (e, n) {
    var r = e.baseTag;
    var o = e.bodyAttributes;
    var a = e.htmlAttributes;
    var s = e.linkTags;
    var i = e.metaTags;
    var c = e.noscriptTags;
    var u = e.onChangeClientState;
    var f = e.scriptTags;
    var p = e.styleTags;
    var d = e.title;
    var T = e.titleAttributes;
    D(l.BODY, o), D(l.HTML, a), De(d, T);
    var y = {
        baseTag: C(l.BASE, r),
        linkTags: C(l.LINK, s),
        metaTags: C(l.META, i),
        noscriptTags: C(l.NOSCRIPT, c),
        scriptTags: C(l.SCRIPT, f),
        styleTags: C(l.STYLE, p),
      };
    var E = {};
    var A = {};
    Object.keys(y).forEach(function (b) {
      var w = y[b];
      var B = w.newTags;
      var ee = w.oldTags;
      B.length && (E[b] = B), ee.length && (A[b] = y[b].oldTags);
    }),
      n?.(),
      u(e, E, A);
  };
var Q = function (e) {
    return Array.isArray(e) ? e.join("") : e;
  };
var De = function (e, n) {
    typeof e < "u" && document.title !== e && (document.title = Q(e)), D(l.TITLE, n);
  };
var D = function (e, n) {
    var r = document.getElementsByTagName(e)[0];
    if (r) {
      for (
        var o = r.getAttribute(g), a = o ? o.split(",") : [], s = [].concat(a), i = Object.keys(n), c = 0;
        c < i.length;
        c++
      ) {
        var u = i[c];
        var f = n[u] || "";
        r.getAttribute(u) !== f && r.setAttribute(u, f), a.indexOf(u) === -1 && a.push(u);
        var p = s.indexOf(u);
        p !== -1 && s.splice(p, 1);
      }
      for (var d = s.length - 1; d >= 0; d--) r.removeAttribute(s[d]);
      a.length === s.length
        ? r.removeAttribute(g)
        : r.getAttribute(g) !== i.join(",") && r.setAttribute(g, i.join(","));
    }
  };
var C = function (e, n) {
    var r = document.head || document.querySelector(l.HEAD);
    var o = r.querySelectorAll(`${e}[${g}]`);
    var a = Array.prototype.slice.call(o);
    var s = [];
    var i = void 0;
    return (
      n?.length &&
        n.forEach(function (c) {
          var u = document.createElement(e);
          for (var f in c)
            if (c.hasOwnProperty(f))
              if (f === h.INNER_HTML) u.innerHTML = c.innerHTML;
              else if (f === h.CSS_TEXT)
                u.styleSheet ? (u.styleSheet.cssText = c.cssText) : u.appendChild(document.createTextNode(c.cssText));
              else {
                var p = typeof c[f] > "u" ? "" : c[f];
                u.setAttribute(f, p);
              }
          u.setAttribute(g, "true"),
            a.some(function (d, T) {
              return (i = T), u.isEqualNode(d);
            })
              ? a.splice(i, 1)
              : s.push(u);
        }),
      a.forEach(function (c) {
        return c.parentNode.removeChild(c);
      }),
      s.forEach(function (c) {
        return r.appendChild(c);
      }),
      { oldTags: a, newTags: s }
    );
  };
var J = function (e) {
    return Object.keys(e).reduce(function (n, r) {
      var o = typeof e[r] < "u" ? `${r}="${e[r]}"` : `${r}`;
      return n ? `${n} ${o}` : o;
    }, "");
  };
var ke = function (e, n, r, o) {
    var a = J(r);
    var s = Q(n);
    return a
      ? `<${e} ${g}="true" ${a}>${x(s, o)}</${e}>`
      : `<${e} ${g}="true">${x(s, o)}</${e}>`;
  };
var Ue = function (e, n, r) {
    return n.reduce(function (o, a) {
      var s = Object.keys(a)
          .filter(function (u) {
            return !(u === h.INNER_HTML || u === h.CSS_TEXT);
          })
          .reduce(function (u, f) {
            var p = typeof a[f] > "u" ? f : `${f}="${x(a[f], r)}"`;
            return u ? `${u} ${p}` : p;
          }, "");
      var i = a.innerHTML || a.cssText || "";
      var c = Se.indexOf(e) === -1;
      return `${o}<${e} ${g}="true" ${s}${(c ? "/>" : `>${i}</${e}>`)}`;
    }, "");
  };
var Z = function (e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Object.keys(e).reduce(function (r, o) {
      return (r[j[o] || o] = e[o]), r;
    }, n);
  };
var Be = function (e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Object.keys(e).reduce(function (r, o) {
      return (r[Oe[o] || o] = e[o]), r;
    }, n);
  };
var qe = function (e, n, r) {
    var o;
    var a = ((o = { key: n }), (o[g] = !0), o);
    var s = Z(r, a);
    return [U(l.TITLE, { ...s, children: n })];
  };
var Ye = function (e, n) {
    return n.map(function (r, o) {
      var a;
      var s = ((a = { key: o }), (a[g] = !0), a);
      return (
        Object.keys(r).forEach(function (i) {
          var c = j[i] || i;
          if (c === h.INNER_HTML || c === h.CSS_TEXT) {
            var u = r.innerHTML || r.cssText;
            s.dangerouslySetInnerHTML = { __html: u };
          } else s[c] = r[i];
        }),
        H.createElement(e, s)
      );
    });
  };
var O = function (e, n, r) {
    switch (e) {
      case l.TITLE:
        return {
          toComponent: function () {
            return qe(e, n.title, n.titleAttributes);
          },
          toString: function () {
            return ke(e, n.title, n.titleAttributes, r);
          },
        };
      case S.BODY:
      case S.HTML:
        return {
          toComponent: function () {
            return Z(n);
          },
          toString: function () {
            return J(n);
          },
        };
      default:
        return {
          toComponent: function () {
            return Ye(e, n);
          },
          toString: function () {
            return Ue(e, n, r);
          },
        };
    }
  };
var K = function (e) {
    var n = e.baseTag;
    var r = e.bodyAttributes;
    var o = e.encode;
    var a = e.htmlAttributes;
    var s = e.linkTags;
    var i = e.metaTags;
    var c = e.noscriptTags;
    var u = e.scriptTags;
    var f = e.styleTags;
    var p = e.title;
    var d = p === void 0 ? "" : p;
    var T = e.titleAttributes;
    return {
      base: O(l.BASE, n, o),
      bodyAttributes: O(S.BODY, r, o),
      htmlAttributes: O(S.HTML, a, o),
      link: O(l.LINK, s, o),
      meta: O(l.META, i, o),
      noscript: O(l.NOSCRIPT, c, o),
      script: O(l.SCRIPT, u, o),
      style: O(l.STYLE, f, o),
      title: O(l.TITLE, { title: d, titleAttributes: T }, o),
    };
  };
var $e = function (e) {
    var n;
    var r;
    return (
      (r = n =
        (function (o) {
          Re(a, o);
          function a() {
            return Pe(this, a), _e(this, o.apply(this, arguments));
          }
          return (
            (a.prototype.shouldComponentUpdate = function (i) {
              return !ve(this.props, i);
            }),
            (a.prototype.mapNestedChildrenToProps = function (i, c) {
              if (!c) return null;
              switch (i.type) {
                case l.SCRIPT:
                case l.NOSCRIPT:
                  return { innerHTML: c };
                case l.STYLE:
                  return { cssText: c };
              }
              throw new Error(
                `<${i.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`,
              );
            }),
            (a.prototype.flattenArrayTypeChildren = function (i) {
              var c;
              var u = i.child;
              var f = i.arrayTypeChildren;
              var p = i.newChildProps;
              var d = i.nestedChildren;
              return v(
                {},
                f,
                ((c = {}),
                (c[u.type] = [].concat(f[u.type] || [], [v({}, p, this.mapNestedChildrenToProps(u, d))])),
                c),
              );
            }),
            (a.prototype.mapObjectTypeChildren = function (i) {
              var c;
              var u;
              var f = i.child;
              var p = i.newProps;
              var d = i.newChildProps;
              var T = i.nestedChildren;
              switch (f.type) {
                case l.TITLE:
                  return v({}, p, ((c = {}), (c[f.type] = T), (c.titleAttributes = v({}, d)), c));
                case l.BODY:
                  return v({}, p, { bodyAttributes: v({}, d) });
                case l.HTML:
                  return v({}, p, { htmlAttributes: v({}, d) });
              }
              return v({}, p, ((u = {}), (u[f.type] = v({}, d)), u));
            }),
            (a.prototype.mapArrayTypeChildrenToProps = function (i, c) {
              var u = v({}, c);
              return (
                Object.keys(i).forEach(function (f) {
                  var p;
                  u = v({}, u, ((p = {}), (p[f] = i[f]), p));
                }),
                u
              );
            }),
            (a.prototype.warnOnInvalidChildren = function (i, c) {
              return !0;
            }),
            (a.prototype.mapChildrenToProps = function (i, c) {
              var u = this;
              var f = {};
              return (
                H.Children.forEach(i, function (p) {
                  if ((p?.props)) {
                    var d = p.props;
                    var T = d.children;
                    var y = $(d, ["children"]);
                    var E = Be(y);
                    switch ((u.warnOnInvalidChildren(p, T), p.type)) {
                      case l.LINK:
                      case l.META:
                      case l.NOSCRIPT:
                      case l.SCRIPT:
                      case l.STYLE:
                        f = u.flattenArrayTypeChildren({
                          child: p,
                          arrayTypeChildren: f,
                          newChildProps: E,
                          nestedChildren: T,
                        });
                        break;
                      default:
                        c = u.mapObjectTypeChildren({ child: p, newProps: c, newChildProps: E, nestedChildren: T });
                        break;
                    }
                  }
                }),
                (c = this.mapArrayTypeChildrenToProps(f, c)),
                c
              );
            }),
            (a.prototype.render = function () {
              var i = this.props;
              var c = i.children;
              var u = $(i, ["children"]);
              var f = v({}, u);
              return c && (f = this.mapChildrenToProps(c, f)), U(e, { ...f });
            }),
            we(a, null, [
              {
                key: "canUseDOM",
                set: function (i) {
                  e.canUseDOM = i;
                },
              },
            ]),
            a
          );
        })(H.Component)),
      (n.propTypes = {
        base: m.object,
        bodyAttributes: m.object,
        children: m.oneOfType([m.arrayOf(m.node), m.node]),
        defaultTitle: m.string,
        defer: m.bool,
        encodeSpecialCharacters: m.bool,
        htmlAttributes: m.object,
        link: m.arrayOf(m.object),
        meta: m.arrayOf(m.object),
        noscript: m.arrayOf(m.object),
        onChangeClientState: m.func,
        script: m.arrayOf(m.object),
        style: m.arrayOf(m.object),
        title: m.string,
        titleAttributes: m.object,
        titleTemplate: m.string,
      }),
      (n.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
      (n.peek = e.peek),
      (n.rewind = function () {
        var o = e.rewind();
        return (
          o ||
            (o = K({
              baseTag: [],
              bodyAttributes: {},
              encodeSpecialCharacters: !0,
              htmlAttributes: {},
              linkTags: [],
              metaTags: [],
              noscriptTags: [],
              scriptTags: [],
              styleTags: [],
              title: "",
              titleAttributes: {},
            })),
          o
        );
      }),
      r
    );
  };
var Ge = function () {
    return null;
  };
var We = pe(Me, Fe, K)(Ge);
var k = $e(We);
k.renderStatic = k.rewind;
const N = { siteMetadata: { title: "Admin", description: "The best ecommerce software.", author: "@medusajs" } };
function ze({ description: t, lang: e, meta: n, title: r }) {
  const o = t || N.siteMetadata.description;
  return U(k, {
    htmlAttributes: { lang: e },
    title: r,
    titleTemplate: `%s ${N.siteMetadata.title}`,
    meta: [
      { name: "description", content: o },
      { property: "og:title", content: r },
      { property: "og:description", content: o },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:creator", content: N.siteMetadata.author },
      { name: "twitter:title", content: r },
      { name: "twitter:description", content: o },
    ].concat(n),
  });
}
ze.defaultProps = { lang: "en", meta: [], description: "" };
export { ze as S, ve as r };
