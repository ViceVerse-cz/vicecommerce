function J0(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n !== "string" && !Array.isArray(n)) {
      for (const i in n)
        if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(n, i);
          s && Object.defineProperty(e, i, s.get ? s : { enumerable: !0, get: () => n[i] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function () {
  const t = document.createElement("link").relList;
  if (t?.supports?.("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerpolicy && (s.referrerPolicy = i.referrerpolicy),
      i.crossorigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossorigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = r(i);
    fetch(i.href, s);
  }
})();
var e_ =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function id(e) {
  return e?.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function X0(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t === "function") {
    var r = function n() {
      if (this instanceof n) {
        var i = [null];
        i.push.apply(i, arguments);
        var s = Function.bind.apply(t, i);
        return new s();
      }
      return t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return (
    Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (n) {
      var i = Object.getOwnPropertyDescriptor(e, n);
      Object.defineProperty(
        r,
        n,
        i.get
          ? i
          : {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            },
      );
    }),
    r
  );
}
var E = {};
var Y0 = {
    get exports() {
      return E;
    },
    set exports(e) {
      E = e;
    },
  };
var te = {}; /**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ls = Symbol.for("react.element");
var Z0 = Symbol.for("react.portal");
var eS = Symbol.for("react.fragment");
var tS = Symbol.for("react.strict_mode");
var rS = Symbol.for("react.profiler");
var nS = Symbol.for("react.provider");
var iS = Symbol.for("react.context");
var sS = Symbol.for("react.forward_ref");
var oS = Symbol.for("react.suspense");
var aS = Symbol.for("react.memo");
var lS = Symbol.for("react.lazy");
var Nf = Symbol.iterator;
function uS(e) {
  return e === null || typeof e !== "object"
    ? null
    : ((e = (Nf && e[Nf]) || e["@@iterator"]), typeof e === "function" ? e : null);
}
var bm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  };
var km = Object.assign;
var Am = {};
function Ei(e, t, r) {
  (this.props = e), (this.context = t), (this.refs = Am), (this.updater = r || bm);
}
Ei.prototype.isReactComponent = {};
Ei.prototype.setState = function (e, t) {
  if (typeof e !== "object" && typeof e !== "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ei.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function _m() {}
_m.prototype = Ei.prototype;
function sd(e, t, r) {
  (this.props = e), (this.context = t), (this.refs = Am), (this.updater = r || bm);
}
var od = (sd.prototype = new _m());
od.constructor = sd;
km(od, Ei.prototype);
od.isPureReactComponent = !0;
var Ff = Array.isArray;
var Dm = Object.prototype.hasOwnProperty;
var ad = { current: null };
var Lm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Nm(e, t, r) {
  var n;
  var i = {};
  var s = null;
  var o = null;
  if (t != null)
    for (n in (t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (s = `${t.key}`), t))
      Dm.call(t, n) && !Lm.hasOwnProperty(n) && (i[n] = t[n]);
  var a = arguments.length - 2;
  if (a === 1) i.children = r;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e?.defaultProps) for (n in ((a = e.defaultProps), a)) i[n] === void 0 && (i[n] = a[n]);
  return { $$typeof: Ls, type: e, key: s, ref: o, props: i, _owner: ad.current };
}
function cS(e, t) {
  return { $$typeof: Ls, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ld(e) {
  return typeof e === "object" && e !== null && e.$$typeof === Ls;
}
function dS(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    `$${e.replace(/[=:]/g, function (r) {
      return t[r];
    })}`
  );
}
var Mf = /\/+/g;
function gl(e, t) {
  return typeof e === "object" && e !== null && e.key != null ? dS(`${e.key}`) : t.toString(36);
}
function To(e, t, r, n, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ls:
          case Z0:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = n === "" ? `.${gl(o, 0)}` : n),
      Ff(i)
        ? ((r = ""),
          e != null && (r = `${e.replace(Mf, "$&/")}/`),
          To(i, t, r, "", function (u) {
            return u;
          }))
        : i != null &&
          (ld(i) &&
            (i = cS(i, r + (!i.key || (o && o.key === i.key) ? "" : `${(`${i.key}`).replace(Mf, "$&/")}/`) + e)),
          t.push(i)),
      1
    );
  if (((o = 0), (n = n === "" ? "." : `${n}:`), Ff(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var l = n + gl(s, a);
      o += To(s, t, r, l, i);
    }
  else if (((l = uS(e)), typeof l === "function"))
    for (e = l.call(e), a = 0; !(s = e.next()).done; ) (s = s.value), (l = n + gl(s, a++)), (o += To(s, t, r, l, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        `Objects are not valid as a React child (found: ${(t === "[object Object]" ? `object with keys {${Object.keys(e).join(", ")}}` : t)}). If you meant to render a collection of children, use an array instead.`,
      ))
    );
  return o;
}
function Ys(e, t, r) {
  if (e == null) return e;
  var n = [];
  var i = 0;
  return (
    To(e, n, "", "", function (s) {
      return t.call(r, s, i++);
    }),
    n
  );
}
function fS(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = r));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var et = { current: null };
var xo = { transition: null };
var pS = { ReactCurrentDispatcher: et, ReactCurrentBatchConfig: xo, ReactCurrentOwner: ad };
te.Children = {
  map: Ys,
  forEach: function (e, t, r) {
    Ys(
      e,
      function () {
        t.apply(this, arguments);
      },
      r,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ys(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ys(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ld(e)) throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  },
};
te.Component = Ei;
te.Fragment = eS;
te.Profiler = rS;
te.PureComponent = sd;
te.StrictMode = tS;
te.Suspense = oS;
te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pS;
te.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(`React.cloneElement(...): The argument must be a React element, but you passed ${e}.`);
  var n = km({}, e.props);
  var i = e.key;
  var s = e.ref;
  var o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = ad.current)),
      t.key !== void 0 && (i = `${t.key}`),
      e.type?.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t) Dm.call(t, l) && !Lm.hasOwnProperty(l) && (n[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) n.children = r;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    n.children = a;
  }
  return { $$typeof: Ls, type: e.type, key: i, ref: s, props: n, _owner: o };
};
te.createContext = function (e) {
  return (
    (e = {
      $$typeof: iS,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: nS, _context: e }),
    (e.Consumer = e)
  );
};
te.createElement = Nm;
te.createFactory = function (e) {
  var t = Nm.bind(null, e);
  return (t.type = e), t;
};
te.createRef = function () {
  return { current: null };
};
te.forwardRef = function (e) {
  return { $$typeof: sS, render: e };
};
te.isValidElement = ld;
te.lazy = function (e) {
  return { $$typeof: lS, _payload: { _status: -1, _result: e }, _init: fS };
};
te.memo = function (e, t) {
  return { $$typeof: aS, type: e, compare: t === void 0 ? null : t };
};
te.startTransition = function (e) {
  var t = xo.transition;
  xo.transition = {};
  try {
    e();
  } finally {
    xo.transition = t;
  }
};
te.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
te.useCallback = function (e, t) {
  return et.current.useCallback(e, t);
};
te.useContext = function (e) {
  return et.current.useContext(e);
};
te.useDebugValue = function () {};
te.useDeferredValue = function (e) {
  return et.current.useDeferredValue(e);
};
te.useEffect = function (e, t) {
  return et.current.useEffect(e, t);
};
te.useId = function () {
  return et.current.useId();
};
te.useImperativeHandle = function (e, t, r) {
  return et.current.useImperativeHandle(e, t, r);
};
te.useInsertionEffect = function (e, t) {
  return et.current.useInsertionEffect(e, t);
};
te.useLayoutEffect = function (e, t) {
  return et.current.useLayoutEffect(e, t);
};
te.useMemo = function (e, t) {
  return et.current.useMemo(e, t);
};
te.useReducer = function (e, t, r) {
  return et.current.useReducer(e, t, r);
};
te.useRef = function (e) {
  return et.current.useRef(e);
};
te.useState = function (e) {
  return et.current.useState(e);
};
te.useSyncExternalStore = function (e, t, r) {
  return et.current.useSyncExternalStore(e, t, r);
};
te.useTransition = function () {
  return et.current.useTransition();
};
te.version = "18.2.0";
(function (e) {
  e.exports = te;
})(Y0);
const Re = id(E);
const Qo = J0({ __proto__: null, default: Re }, [E]);
var si = {};
var hS = {
    get exports() {
      return si;
    },
    set exports(e) {
      si = e;
    },
  };
var ht = {};
var Du = {};
var mS = {
    get exports() {
      return Du;
    },
    set exports(e) {
      Du = e;
    },
  };
var Fm = {}; /**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (e) {
  function t(I, Q) {
    var K = I.length;
    I.push(Q);
    e: while (0 < K) {
      var me = (K - 1) >>> 1;
      var Ce = I[me];
      if (0 < i(Ce, Q)) (I[me] = Q), (I[K] = Ce), (K = me);
      else break e;
    }
  }
  function r(I) {
    return I.length === 0 ? null : I[0];
  }
  function n(I) {
    if (I.length === 0) return null;
    var Q = I[0];
    var K = I.pop();
    if (K !== Q) {
      I[0] = K;
      e: for (var me = 0, Ce = I.length, Kr = Ce >>> 1; me < Kr; ) {
        var Zt = 2 * (me + 1) - 1;
        var ki = I[Zt];
        var er = Zt + 1;
        var It = I[er];
        if (0 > i(ki, K))
          er < Ce && 0 > i(It, ki) ? ((I[me] = It), (I[er] = K), (me = er)) : ((I[me] = ki), (I[Zt] = K), (me = Zt));
        else if (er < Ce && 0 > i(It, K)) (I[me] = It), (I[er] = K), (me = er);
        else break e;
      }
    }
    return Q;
  }
  function i(I, Q) {
    var K = I.sortIndex - Q.sortIndex;
    return K !== 0 ? K : I.id - Q.id;
  }
  if (typeof performance === "object" && typeof performance.now === "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date;
    var a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [];
  var u = [];
  var c = 1;
  var d = null;
  var f = 3;
  var v = !1;
  var g = !1;
  var m = !1;
  var w = typeof setTimeout === "function" ? setTimeout : null;
  var p = typeof clearTimeout === "function" ? clearTimeout : null;
  var h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(I) {
    for (var Q = r(u); Q !== null; ) {
      if (Q.callback === null) n(u);
      else if (Q.startTime <= I) n(u), (Q.sortIndex = Q.expirationTime), t(l, Q);
      else break;
      Q = r(u);
    }
  }
  function S(I) {
    if (((m = !1), y(I), !g))
      if (r(l) !== null) (g = !0), ue(x);
      else {
        var Q = r(u);
        Q !== null && xt(S, Q.startTime - I);
      }
  }
  function x(I, Q) {
    (g = !1), m && ((m = !1), p(O), (O = -1)), (v = !0);
    var K = f;
    try {
      for (y(Q), d = r(l); d !== null && (!(d.expirationTime > Q) || (I && !J())); ) {
        var me = d.callback;
        if (typeof me === "function") {
          (d.callback = null), (f = d.priorityLevel);
          var Ce = me(d.expirationTime <= Q);
          (Q = e.unstable_now()), typeof Ce === "function" ? (d.callback = Ce) : d === r(l) && n(l), y(Q);
        } else n(l);
        d = r(l);
      }
      if (d !== null) var Kr = !0;
      else {
        var Zt = r(u);
        Zt !== null && xt(S, Zt.startTime - Q), (Kr = !1);
      }
      return Kr;
    } finally {
      (d = null), (f = K), (v = !1);
    }
  }
  var b = !1;
  var L = null;
  var O = -1;
  var j = 5;
  var M = -1;
  function J() {
    return !(e.unstable_now() - M < j);
  }
  function de() {
    if (L !== null) {
      var I = e.unstable_now();
      M = I;
      var Q = !0;
      try {
        Q = L(!0, I);
      } finally {
        Q ? Se() : ((b = !1), (L = null));
      }
    } else b = !1;
  }
  var Se;
  if (typeof h === "function")
    Se = function () {
      h(de);
    };
  else if (typeof MessageChannel < "u") {
    var Fe = new MessageChannel();
    var at = Fe.port2;
    (Fe.port1.onmessage = de),
      (Se = function () {
        at.postMessage(null);
      });
  } else
    Se = function () {
      w(de, 0);
    };
  function ue(I) {
    (L = I), b || ((b = !0), Se());
  }
  function xt(I, Q) {
    O = w(function () {
      I(e.unstable_now());
    }, Q);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (I) {
      I.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || v || ((g = !0), ue(x));
    }),
    (e.unstable_forceFrameRate = function (I) {
      0 > I || 125 < I
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (j = 0 < I ? Math.floor(1e3 / I) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(l);
    }),
    (e.unstable_next = function (I) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var Q = 3;
          break;
        default:
          Q = f;
      }
      var K = f;
      f = Q;
      try {
        return I();
      } finally {
        f = K;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (I, Q) {
      switch (I) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          I = 3;
      }
      var K = f;
      f = I;
      try {
        return Q();
      } finally {
        f = K;
      }
    }),
    (e.unstable_scheduleCallback = function (I, Q, K) {
      var me = e.unstable_now();
      switch (
        (typeof K === "object" && K !== null
          ? ((K = K.delay), (K = typeof K === "number" && 0 < K ? me + K : me))
          : (K = me),
        I)
      ) {
        case 1:
          var Ce = -1;
          break;
        case 2:
          Ce = 250;
          break;
        case 5:
          Ce = 1073741823;
          break;
        case 4:
          Ce = 1e4;
          break;
        default:
          Ce = 5e3;
      }
      return (
        (Ce = K + Ce),
        (I = { id: c++, callback: Q, priorityLevel: I, startTime: K, expirationTime: Ce, sortIndex: -1 }),
        K > me
          ? ((I.sortIndex = K),
            t(u, I),
            r(l) === null && I === r(u) && (m ? (p(O), (O = -1)) : (m = !0), xt(S, K - me)))
          : ((I.sortIndex = Ce), t(l, I), g || v || ((g = !0), ue(x))),
        I
      );
    }),
    (e.unstable_shouldYield = J),
    (e.unstable_wrapCallback = function (I) {
      var Q = f;
      return function () {
        var K = f;
        f = Q;
        try {
          return I.apply(this, arguments);
        } finally {
          f = K;
        }
      };
    });
})(Fm);
(function (e) {
  e.exports = Fm;
})(mS); /**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mm = E;
var pt = Du;
function F(e) {
  for (var t = `https://reactjs.org/docs/error-decoder.html?invariant=${e}`, r = 1; r < arguments.length; r++)
    t += `&args[]=${encodeURIComponent(arguments[r])}`;
  return (
    `Minified React error #${e}; visit ${t} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
  );
}
var Im = new Set();
var cs = {};
function $n(e, t) {
  oi(e, t), oi(`${e}Capture`, t);
}
function oi(e, t) {
  for (cs[e] = t, e = 0; e < t.length; e++) Im.add(t[e]);
}
var dr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u");
var Lu = Object.prototype.hasOwnProperty;
var yS =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
var If = {};
var qf = {};
function vS(e) {
  return Lu.call(qf, e) ? !0 : Lu.call(If, e) ? !1 : yS.test(e) ? (qf[e] = !0) : ((If[e] = !0), !1);
}
function gS(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n
        ? !1
        : r !== null
        ? !r.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function SS(e, t, r, n) {
  if (t === null || typeof t > "u" || gS(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null)
    switch (r.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function tt(e, t, r, n, i, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = i),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var ze = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ze[e] = new tt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ze[t] = new tt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ze[e] = new tt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  ze[e] = new tt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ze[e] = new tt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ze[e] = new tt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ze[e] = new tt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ze[e] = new tt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ze[e] = new tt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ud = /[\-:]([a-z])/g;
function cd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ud, cd);
    ze[t] = new tt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
  var t = e.replace(ud, cd);
  ze[t] = new tt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ud, cd);
  ze[t] = new tt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ze[e] = new tt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ze.xlinkHref = new tt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  ze[e] = new tt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function dd(e, t, r, n) {
  var i = ze.hasOwnProperty(t) ? ze[t] : null;
  (i !== null
    ? i.type !== 0
    : n || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
    (SS(t, r, i, n) && (r = null),
    n || i === null
      ? vS(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, `${r}`))
      : i.mustUseProperty
      ? (e[i.propertyName] = r === null ? (i.type === 3 ? !1 : "") : r)
      : ((t = i.attributeName),
        (n = i.attributeNamespace),
        r === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (r = i === 3 || (i === 4 && r === !0) ? "" : `${r}`),
            n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var yr = Mm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
var Zs = Symbol.for("react.element");
var Mn = Symbol.for("react.portal");
var In = Symbol.for("react.fragment");
var fd = Symbol.for("react.strict_mode");
var Nu = Symbol.for("react.profiler");
var qm = Symbol.for("react.provider");
var Um = Symbol.for("react.context");
var pd = Symbol.for("react.forward_ref");
var Fu = Symbol.for("react.suspense");
var Mu = Symbol.for("react.suspense_list");
var hd = Symbol.for("react.memo");
var $r = Symbol.for("react.lazy");
var jm = Symbol.for("react.offscreen");
var Uf = Symbol.iterator;
function Di(e) {
  return e === null || typeof e !== "object"
    ? null
    : ((e = (Uf && e[Uf]) || e["@@iterator"]), typeof e === "function" ? e : null);
}
var ge = Object.assign;
var Sl;
function Hi(e) {
  if (Sl === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      Sl = (t?.[1]) || "";
    }
  return (
    `
${Sl}${e}`
  );
}
var El = !1;
function wl(e, t) {
  if (!e || El) return "";
  El = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect === "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var n = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          n = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        n = u;
      }
      e();
    }
  } catch (u) {
    if (u && n && typeof u.stack === "string") {
      for (
        var i = u.stack.split(`
`),
          s = n.stack.split(`
`),
          o = i.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];
      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
                var l =
                  `
${i[o].replace(" at new ", " at ")}`;
                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (El = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : "") ? Hi(e) : "";
}
function ES(e) {
  switch (e.tag) {
    case 5:
      return Hi(e.type);
    case 16:
      return Hi("Lazy");
    case 13:
      return Hi("Suspense");
    case 19:
      return Hi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = wl(e.type, !1)), e;
    case 11:
      return (e = wl(e.type.render, !1)), e;
    case 1:
      return (e = wl(e.type, !0)), e;
    default:
      return "";
  }
}
function Iu(e) {
  if (e == null) return null;
  if (typeof e === "function") return e.displayName || e.name || null;
  if (typeof e === "string") return e;
  switch (e) {
    case In:
      return "Fragment";
    case Mn:
      return "Portal";
    case Nu:
      return "Profiler";
    case fd:
      return "StrictMode";
    case Fu:
      return "Suspense";
    case Mu:
      return "SuspenseList";
  }
  if (typeof e === "object")
    switch (e.$$typeof) {
      case Um:
        return `${(e.displayName || "Context")}.Consumer`;
      case qm:
        return `${(e._context.displayName || "Context")}.Provider`;
      case pd:
        var t = e.render;
        return (
          (e = e.displayName),
          e || ((e = t.displayName || t.name || ""), (e = e !== "" ? `ForwardRef(${e})` : "ForwardRef")),
          e
        );
      case hd:
        return (t = e.displayName || null), t !== null ? t : Iu(e.type) || "Memo";
      case $r:
        (t = e._payload), (e = e._init);
        try {
          return Iu(e(t));
        } catch {}
    }
  return null;
}
function wS(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return `${(t.displayName || "Context")}.Consumer`;
    case 10:
      return `${(t._context.displayName || "Context")}.Provider`;
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? `ForwardRef(${e})` : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Iu(t);
    case 8:
      return t === fd ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t === "function") return t.displayName || t.name || null;
      if (typeof t === "string") return t;
  }
  return null;
}
function Ur(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Bm(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function PS(e) {
  var t = Bm(e) ? "checked" : "value";
  var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
  var n = `${e[t]}`;
  if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get === "function" && typeof r.set === "function") {
    var i = r.get;
    var s = r.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (n = `${o}`), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (o) {
          n = `${o}`;
        },
        stopTracking: function () {
          (e._valueTracker = null), e[t] = undefined;
        },
      }
    );
  }
}
function eo(e) {
  e._valueTracker || (e._valueTracker = PS(e));
}
function zm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue();
  var n = "";
  return e && (n = Bm(e) ? (e.checked ? "true" : "false") : e.value), (e = n), e !== r ? (t.setValue(e), !0) : !1;
}
function Vo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function qu(e, t) {
  var r = t.checked;
  return ge({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  });
}
function jf(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue;
  var n = t.checked != null ? t.checked : t.defaultChecked;
  (r = Ur(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
    });
}
function Gm(e, t) {
  (t = t.checked), t != null && dd(e, "checked", t, !1);
}
function Uu(e, t) {
  Gm(e, t);
  var r = Ur(t.value);
  var n = t.type;
  if (r != null)
    n === "number"
      ? ((r === 0 && e.value === "") || e.value !== r) && (e.value = `${r}`)
      : e.value !== `${r}` && (e.value = `${r}`);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ju(e, t.type, r) : t.hasOwnProperty("defaultValue") && ju(e, t.type, Ur(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Bf(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (!((n !== "submit" && n !== "reset") || (t.value !== void 0 && t.value !== null))) return;
    (t = `${e._wrapperState.initialValue}`), r || t === e.value || (e.value = t), (e.defaultValue = t);
  }
  (r = e.name),
    r !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== "" && (e.name = r);
}
function ju(e, t, r) {
  (t !== "number" || Vo(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = `${e._wrapperState.initialValue}`)
      : e.defaultValue !== `${r}` && (e.defaultValue = `${r}`));
}
var Wi = Array.isArray;
function Jn(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < r.length; i++) t[`$${r[i]}`] = !0;
    for (r = 0; r < e.length; r++)
      (i = t.hasOwnProperty(`$${e[r].value}`)),
        e[r].selected !== i && (e[r].selected = i),
        i && n && (e[r].defaultSelected = !0);
  } else {
    for (r = `${Ur(r)}`, t = null, i = 0; i < e.length; i++) {
      if (e[i].value === r) {
        (e[i].selected = !0), n && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Bu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(F(91));
  return ge({}, t, { value: void 0, defaultValue: void 0, children: `${e._wrapperState.initialValue}` });
}
function zf(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(F(92));
      if (Wi(r)) {
        if (1 < r.length) throw Error(F(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), (r = t);
  }
  e._wrapperState = { initialValue: Ur(r) };
}
function Hm(e, t) {
  var r = Ur(t.value);
  var n = Ur(t.defaultValue);
  r != null &&
    ((r = `${r}`),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = `${n}`);
}
function Gf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Wm(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function zu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Wm(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var to;
var Qm = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (
        to = to || document.createElement("div"),
          to.innerHTML = `<svg>${t.valueOf().toString()}</svg>`,
          t = to.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      while (t.firstChild) e.appendChild(t.firstChild);
    }
  });
function ds(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Xi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  };
var $S = ["Webkit", "ms", "Moz", "O"];
Object.keys(Xi).forEach(function (e) {
  $S.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Xi[t] = Xi[e]);
  });
});
function Vm(e, t, r) {
  return t == null || typeof t === "boolean" || t === ""
    ? ""
    : r || typeof t !== "number" || t === 0 || (Xi.hasOwnProperty(e) && Xi[e])
    ? (`${t}`).trim()
    : `${t}px`;
}
function Km(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0;
      var i = Vm(r, t[r], n);
      r === "float" && (r = "cssFloat"), n ? e.setProperty(r, i) : (e[r] = i);
    }
}
var OS = ge(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Gu(e, t) {
  if (t) {
    if (OS[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(F(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(F(60));
      if (typeof t.dangerouslySetInnerHTML !== "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(F(61));
    }
    if (t.style != null && typeof t.style !== "object") throw Error(F(62));
  }
}
function Hu(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is === "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Wu = null;
function md(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Qu = null;
var Xn = null;
var Yn = null;
function Hf(e) {
  if ((e = Ms(e))) {
    if (typeof Qu !== "function") throw Error(F(280));
    var t = e.stateNode;
    t && ((t = Ma(t)), Qu(e.stateNode, e.type, t));
  }
}
function Jm(e) {
  Xn ? (Yn ? Yn.push(e) : (Yn = [e])) : (Xn = e);
}
function Xm() {
  if (Xn) {
    var e = Xn;
    var t = Yn;
    if (((Yn = Xn = null), Hf(e), t)) for (e = 0; e < t.length; e++) Hf(t[e]);
  }
}
function Ym(e, t) {
  return e(t);
}
function Zm() {}
var Pl = !1;
function ey(e, t, r) {
  if (Pl) return e(t, r);
  Pl = !0;
  try {
    return Ym(e, t, r);
  } finally {
    (Pl = !1), (Xn !== null || Yn !== null) && (Zm(), Xm());
  }
}
function fs(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = Ma(r);
  if (n === null) return null;
  r = n[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (n = !n.disabled) ||
        ((e = e.type), (n = !(e === "button" || e === "input" || e === "select" || e === "textarea"))),
        (e = !n);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r !== "function") throw Error(F(231, t, typeof r));
  return r;
}
var Vu = !1;
if (dr)
  try {
    var Li = {};
    Object.defineProperty(Li, "passive", {
      get: function () {
        Vu = !0;
      },
    }),
      window.addEventListener("test", Li, Li),
      window.removeEventListener("test", Li, Li);
  } catch {
    Vu = !1;
  }
function CS(e, t, r, n, i, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (c) {
    this.onError(c);
  }
}
var Yi = !1;
var Ko = null;
var Jo = !1;
var Ku = null;
var TS = {
    onError: function (e) {
      (Yi = !0), (Ko = e);
    },
  };
function xS(e, t, r, n, i, s, o, a, l) {
  (Yi = !1), (Ko = null), CS.apply(TS, arguments);
}
function RS(e, t, r, n, i, s, o, a, l) {
  if ((xS.apply(this, arguments), Yi)) {
    if (Yi) {
      var u = Ko;
      (Yi = !1), (Ko = null);
    } else throw Error(F(198));
    Jo || ((Jo = !0), (Ku = u));
  }
}
function On(e) {
  var t = e;
  var r = e;
  if (e.alternate) while (t.return) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function ty(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
  }
  return null;
}
function Wf(e) {
  if (On(e) !== e) throw Error(F(188));
}
function bS(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = On(e)), t === null)) throw Error(F(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var i = r.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((n = i.return), n !== null)) {
        r = n;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === r) return Wf(i), e;
        if (s === n) return Wf(i), t;
        s = s.sibling;
      }
      throw Error(F(188));
    }
    if (r.return !== n.return) (r = i), (n = s);
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        if (a === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          if (a === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(F(189));
      }
    }
    if (r.alternate !== n) throw Error(F(190));
  }
  if (r.tag !== 3) throw Error(F(188));
  return r.stateNode.current === r ? e : t;
}
function ry(e) {
  return (e = bS(e)), e !== null ? ny(e) : null;
}
function ny(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ny(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var iy = pt.unstable_scheduleCallback;
var Qf = pt.unstable_cancelCallback;
var kS = pt.unstable_shouldYield;
var AS = pt.unstable_requestPaint;
var $e = pt.unstable_now;
var _S = pt.unstable_getCurrentPriorityLevel;
var yd = pt.unstable_ImmediatePriority;
var sy = pt.unstable_UserBlockingPriority;
var Xo = pt.unstable_NormalPriority;
var DS = pt.unstable_LowPriority;
var oy = pt.unstable_IdlePriority;
var Da = null;
var Vt = null;
function LS(e) {
  if (Vt && typeof Vt.onCommitFiberRoot === "function")
    try {
      Vt.onCommitFiberRoot(Da, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Lt = Math.clz32 ? Math.clz32 : MS;
var NS = Math.log;
var FS = Math.LN2;
function MS(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((NS(e) / FS) | 0)) | 0;
}
var ro = 64;
var no = 4194304;
function Qi(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Yo(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0;
  var i = e.suspendedLanes;
  var s = e.pingedLanes;
  var o = r & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (n = Qi(a)) : ((s &= o), s !== 0 && (n = Qi(s)));
  } else (o = r & ~i), o !== 0 ? (n = Qi(o)) : s !== 0 && (n = Qi(s));
  if (n === 0) return 0;
  if (t !== 0 && t !== n && !(t & i) && ((i = n & -n), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0)))
    return t;
  if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= n; 0 < t; ) (r = 31 - Lt(t)), (i = 1 << r), (n |= e[r]), (t &= ~i);
  return n;
}
function IS(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function qS(e, t) {
  for (var r = e.suspendedLanes, n = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
    var o = 31 - Lt(s);
    var a = 1 << o;
    var l = i[o];
    l === -1 ? (!(a & r) || a & n) && (i[o] = IS(a, t)) : l <= t && (e.expiredLanes |= a), (s &= ~a);
  }
}
function Ju(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function ay() {
  var e = ro;
  return (ro <<= 1), !(ro & 4194240) && (ro = 64), e;
}
function $l(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function Ns(e, t, r) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Lt(t)),
    (e[t] = r);
}
function US(e, t) {
  var r = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var i = 31 - Lt(r);
    var s = 1 << i;
    (t[i] = 0), (n[i] = -1), (e[i] = -1), (r &= ~s);
  }
}
function vd(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r; ) {
    var n = 31 - Lt(r);
    var i = 1 << n;
    (i & t) | (e[n] & t) && (e[n] |= t), (r &= ~i);
  }
}
var le = 0;
function ly(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var uy;
var gd;
var cy;
var dy;
var fy;
var Xu = !1;
var io = [];
var _r = null;
var Dr = null;
var Lr = null;
var ps = new Map();
var hs = new Map();
var xr = [];
var jS =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Vf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      _r = null;
      break;
    case "dragenter":
    case "dragleave":
      Dr = null;
      break;
    case "mouseover":
    case "mouseout":
      Lr = null;
      break;
    case "pointerover":
    case "pointerout":
      ps.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      hs.delete(t.pointerId);
  }
}
function Ni(e, t, r, n, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = { blockedOn: t, domEventName: r, eventSystemFlags: n, nativeEvent: s, targetContainers: [i] }),
      t !== null && ((t = Ms(t)), t !== null && gd(t)),
      e)
    : ((e.eventSystemFlags |= n), (t = e.targetContainers), i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function BS(e, t, r, n, i) {
  switch (t) {
    case "focusin":
      return (_r = Ni(_r, e, t, r, n, i)), !0;
    case "dragenter":
      return (Dr = Ni(Dr, e, t, r, n, i)), !0;
    case "mouseover":
      return (Lr = Ni(Lr, e, t, r, n, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return ps.set(s, Ni(ps.get(s) || null, e, t, r, n, i)), !0;
    case "gotpointercapture":
      return (s = i.pointerId), hs.set(s, Ni(hs.get(s) || null, e, t, r, n, i)), !0;
  }
  return !1;
}
function py(e) {
  var t = rn(e.target);
  if (t !== null) {
    var r = On(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = ty(r)), t !== null)) {
          (e.blockedOn = t),
            fy(e.priority, function () {
              cy(r);
            });
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ro(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Yu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      (Wu = n), r.target.dispatchEvent(n), (Wu = null);
    } else return (t = Ms(r)), t !== null && gd(t), (e.blockedOn = r), !1;
    t.shift();
  }
  return !0;
}
function Kf(e, t, r) {
  Ro(e) && r.delete(t);
}
function zS() {
  (Xu = !1),
    _r !== null && Ro(_r) && (_r = null),
    Dr !== null && Ro(Dr) && (Dr = null),
    Lr !== null && Ro(Lr) && (Lr = null),
    ps.forEach(Kf),
    hs.forEach(Kf);
}
function Fi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null), Xu || ((Xu = !0), pt.unstable_scheduleCallback(pt.unstable_NormalPriority, zS)));
}
function ms(e) {
  function t(i) {
    return Fi(i, e);
  }
  if (0 < io.length) {
    Fi(io[0], e);
    for (var r = 1; r < io.length; r++) {
      var n = io[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (
    _r !== null && Fi(_r, e), Dr !== null && Fi(Dr, e), Lr !== null && Fi(Lr, e), ps.forEach(t), hs.forEach(t), r = 0;
    r < xr.length;
    r++
  )
    (n = xr[r]), n.blockedOn === e && (n.blockedOn = null);
  while (0 < xr.length && ((r = xr[0]), r.blockedOn === null)) py(r), r.blockedOn === null && xr.shift();
}
var Zn = yr.ReactCurrentBatchConfig;
var Zo = !0;
function GS(e, t, r, n) {
  var i = le;
  var s = Zn.transition;
  Zn.transition = null;
  try {
    (le = 1), Sd(e, t, r, n);
  } finally {
    (le = i), (Zn.transition = s);
  }
}
function HS(e, t, r, n) {
  var i = le;
  var s = Zn.transition;
  Zn.transition = null;
  try {
    (le = 4), Sd(e, t, r, n);
  } finally {
    (le = i), (Zn.transition = s);
  }
}
function Sd(e, t, r, n) {
  if (Zo) {
    var i = Yu(e, t, r, n);
    if (i === null) Dl(e, t, n, ea, r), Vf(e, n);
    else if (BS(i, e, t, r, n)) n.stopPropagation();
    else if ((Vf(e, n), t & 4 && -1 < jS.indexOf(e))) {
      while (i !== null) {
        var s = Ms(i);
        if ((s !== null && uy(s), (s = Yu(e, t, r, n)), s === null && Dl(e, t, n, ea, r), s === i)) break;
        i = s;
      }
      i !== null && n.stopPropagation();
    } else Dl(e, t, n, null, r);
  }
}
var ea = null;
function Yu(e, t, r, n) {
  if (((ea = null), (e = md(n)), (e = rn(e)), e !== null))
    if (((t = On(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = ty(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ea = e), null;
}
function hy(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (_S()) {
        case yd:
          return 1;
        case sy:
          return 4;
        case Xo:
        case DS:
          return 16;
        case oy:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var br = null;
var Ed = null;
var bo = null;
function my() {
  if (bo) return bo;
  var e;
  var t = Ed;
  var r = t.length;
  var n;
  var i = "value" in br ? br.value : br.textContent;
  var s = i.length;
  for (e = 0; e < r && t[e] === i[e]; e++);
  var o = r - e;
  for (n = 1; n <= o && t[r - n] === i[s - n]; n++);
  return (bo = i.slice(e, 1 < n ? 1 - n : void 0));
}
function ko(e) {
  var t = e.keyCode;
  return (
    "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function so() {
  return !0;
}
function Jf() {
  return !1;
}
function mt(e) {
  function t(r, n, i, s, o) {
    (this._reactName = r),
      (this._targetInst = i),
      (this.type = n),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e) e.hasOwnProperty(a) && ((r = e[a]), (this[a] = r ? r(s) : s[a]));
    return (
      (this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? so : Jf),
      (this.isPropagationStopped = Jf),
      this
    );
  }
  return (
    ge(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault ? r.preventDefault() : typeof r.returnValue !== "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = so));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble !== "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = so));
      },
      persist: function () {},
      isPersistent: so,
    }),
    t
  );
}
var wi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  };
var wd = mt(wi);
var Fs = ge({}, wi, { view: 0, detail: 0 });
var WS = mt(Fs);
var Ol;
var Cl;
var Mi;
var La = ge({}, Fs, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Pd,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Mi &&
            (Mi && e.type === "mousemove"
              ? ((Ol = e.screenX - Mi.screenX), (Cl = e.screenY - Mi.screenY))
              : (Cl = Ol = 0),
            (Mi = e)),
          Ol);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Cl;
    },
  });
var Xf = mt(La);
var QS = ge({}, La, { dataTransfer: 0 });
var VS = mt(QS);
var KS = ge({}, Fs, { relatedTarget: 0 });
var Tl = mt(KS);
var JS = ge({}, wi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
var XS = mt(JS);
var YS = ge({}, wi, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  });
var ZS = mt(YS);
var e1 = ge({}, wi, { data: 0 });
var Yf = mt(e1);
var t1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  };
var r1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  };
var n1 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function i1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = n1[e]) ? !!t[e] : !1;
}
function Pd() {
  return i1;
}
var s1 = ge({}, Fs, {
    key: function (e) {
      if (e.key) {
        var t = t1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ko(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? r1[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Pd,
    charCode: function (e) {
      return e.type === "keypress" ? ko(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress" ? ko(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
  });
var o1 = mt(s1);
var a1 = ge({}, La, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  });
var Zf = mt(a1);
var l1 = ge({}, Fs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Pd,
  });
var u1 = mt(l1);
var c1 = ge({}, wi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
var d1 = mt(c1);
var f1 = ge({}, La, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  });
var p1 = mt(f1);
var h1 = [9, 13, 27, 32];
var $d = dr && "CompositionEvent" in window;
var Zi = null;
dr && "documentMode" in document && (Zi = document.documentMode);
var m1 = dr && "TextEvent" in window && !Zi;
var yy = dr && (!$d || (Zi && 8 < Zi && 11 >= Zi));
var ep = String.fromCharCode(32);
var tp = !1;
function vy(e, t) {
  switch (e) {
    case "keyup":
      return h1.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function gy(e) {
  return (e = e.detail), typeof e === "object" && "data" in e ? e.data : null;
}
var qn = !1;
function y1(e, t) {
  switch (e) {
    case "compositionend":
      return gy(t);
    case "keypress":
      return t.which !== 32 ? null : ((tp = !0), ep);
    case "textInput":
      return (e = t.data), e === ep && tp ? null : e;
    default:
      return null;
  }
}
function v1(e, t) {
  if (qn) return e === "compositionend" || (!$d && vy(e, t)) ? ((e = my()), (bo = Ed = br = null), (qn = !1), e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return yy && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var g1 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function rp(e) {
  var t = e?.nodeName?.toLowerCase();
  return t === "input" ? !!g1[e.type] : t === "textarea";
}
function Sy(e, t, r, n) {
  Jm(n),
    (t = ta(t, "onChange")),
    0 < t.length && ((r = new wd("onChange", "change", null, r, n)), e.push({ event: r, listeners: t }));
}
var es = null;
var ys = null;
function S1(e) {
  ky(e, 0);
}
function Na(e) {
  var t = Bn(e);
  if (zm(t)) return e;
}
function E1(e, t) {
  if (e === "change") return t;
}
var Ey = !1;
if (dr) {
  var xl;
  if (dr) {
    var Rl = "oninput" in document;
    if (!Rl) {
      var np = document.createElement("div");
      np.setAttribute("oninput", "return;"), (Rl = typeof np.oninput === "function");
    }
    xl = Rl;
  } else xl = !1;
  Ey = xl && (!document.documentMode || 9 < document.documentMode);
}
function ip() {
  es && (es.detachEvent("onpropertychange", wy), (ys = es = null));
}
function wy(e) {
  if (e.propertyName === "value" && Na(ys)) {
    var t = [];
    Sy(t, ys, e, md(e)), ey(S1, t);
  }
}
function w1(e, t, r) {
  e === "focusin" ? (ip(), (es = t), (ys = r), es.attachEvent("onpropertychange", wy)) : e === "focusout" && ip();
}
function P1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Na(ys);
}
function $1(e, t) {
  if (e === "click") return Na(t);
}
function O1(e, t) {
  if (e === "input" || e === "change") return Na(t);
}
function C1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Mt = typeof Object.is === "function" ? Object.is : C1;
function vs(e, t) {
  if (Mt(e, t)) return !0;
  if (typeof e !== "object" || e === null || typeof t !== "object" || t === null) return !1;
  var r = Object.keys(e);
  var n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var i = r[n];
    if (!(Lu.call(t, i) && Mt(e[i], t[i]))) return !1;
  }
  return !0;
}
function sp(e) {
  while (e?.firstChild) e = e.firstChild;
  return e;
}
function op(e, t) {
  var r = sp(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e };
      e = n;
    }
    e: {
      while (r) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = sp(r);
  }
}
function Py(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Py(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function $y() {
  for (var e = window, t = Vo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href === "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = Vo(e.document);
  }
  return t;
}
function Od(e) {
  var t = e?.nodeName?.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function T1(e) {
  var t = $y();
  var r = e.focusedElem;
  var n = e.selectionRange;
  if (t !== r && r && r.ownerDocument && Py(r.ownerDocument.documentElement, r)) {
    if (n !== null && Od(r)) {
      if (((t = n.start), (e = n.end), e === void 0 && (e = t), "selectionStart" in r))
        (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length));
      else if (((e = ((t = r.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection();
        var i = r.textContent.length;
        var s = Math.min(n.start, i);
        (n = n.end === void 0 ? s : Math.min(n.end, i)),
          !e.extend && s > n && ((i = n), (n = s), (s = i)),
          (i = op(r, s));
        var o = op(r, n);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > n ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus === "function" && r.focus(), r = 0; r < t.length; r++)
      (e = t[r]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var x1 = dr && "documentMode" in document && 11 >= document.documentMode;
var Un = null;
var Zu = null;
var ts = null;
var ec = !1;
function ap(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  ec ||
    Un == null ||
    Un !== Vo(n) ||
    ((n = Un),
    "selectionStart" in n && Od(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = ((n.ownerDocument?.defaultView) || window).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (ts && vs(ts, n)) ||
      ((ts = n),
      (n = ta(Zu, "onSelect")),
      0 < n.length &&
        ((t = new wd("onSelect", "select", null, t, r)), e.push({ event: t, listeners: n }), (t.target = Un))));
}
function oo(e, t) {
  var r = {};
  return (r[e.toLowerCase()] = t.toLowerCase()), (r[`Webkit${e}`] = `webkit${t}`), (r[`Moz${e}`] = `moz${t}`), r;
}
var jn = {
    animationend: oo("Animation", "AnimationEnd"),
    animationiteration: oo("Animation", "AnimationIteration"),
    animationstart: oo("Animation", "AnimationStart"),
    transitionend: oo("Transition", "TransitionEnd"),
  };
var bl = {};
var Oy = {};
dr &&
  ((Oy = document.createElement("div").style),
  "AnimationEvent" in window ||
    (jn.animationend.animation = undefined, jn.animationiteration.animation = undefined, jn.animationstart.animation = undefined),
  "TransitionEvent" in window || jn.transitionend.transition = undefined);
function Fa(e) {
  if (bl[e]) return bl[e];
  if (!jn[e]) return e;
  var t = jn[e];
  var r;
  for (r in t) if (t.hasOwnProperty(r) && r in Oy) return (bl[e] = t[r]);
  return e;
}
var Cy = Fa("animationend");
var Ty = Fa("animationiteration");
var xy = Fa("animationstart");
var Ry = Fa("transitionend");
var by = new Map();
var lp =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Hr(e, t) {
  by.set(e, t), $n(t, [e]);
}
for (var kl = 0; kl < lp.length; kl++) {
  var Al = lp[kl];
  var R1 = Al.toLowerCase();
  var b1 = Al[0].toUpperCase() + Al.slice(1);
  Hr(R1, `on${b1}`);
}
Hr(Cy, "onAnimationEnd");
Hr(Ty, "onAnimationIteration");
Hr(xy, "onAnimationStart");
Hr("dblclick", "onDoubleClick");
Hr("focusin", "onFocus");
Hr("focusout", "onBlur");
Hr(Ry, "onTransitionEnd");
oi("onMouseEnter", ["mouseout", "mouseover"]);
oi("onMouseLeave", ["mouseout", "mouseover"]);
oi("onPointerEnter", ["pointerout", "pointerover"]);
oi("onPointerLeave", ["pointerout", "pointerover"]);
$n("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
$n("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
$n("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
$n("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
$n("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
$n("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Vi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    );
var k1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Vi));
function up(e, t, r) {
  var n = e.type || "unknown-event";
  (e.currentTarget = r), RS(n, t, void 0, e), (e.currentTarget = null);
}
function ky(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    var i = n.event;
    n = n.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = n.length - 1; 0 <= o; o--) {
          var a = n[o];
          var l = a.instance;
          var u = a.currentTarget;
          if (((a = a.listener), l !== s && i.isPropagationStopped())) break e;
          up(i, a, u), (s = l);
        }
      else
        for (o = 0; o < n.length; o++) {
          if (
            ((a = n[o]), (l = a.instance), (u = a.currentTarget), (a = a.listener), l !== s && i.isPropagationStopped())
          )
            break e;
          up(i, a, u), (s = l);
        }
    }
  }
  if (Jo) throw ((e = Ku), (Jo = !1), (Ku = null), e);
}
function fe(e, t) {
  var r = t[sc];
  r === void 0 && (r = t[sc] = new Set());
  var n = `${e}__bubble`;
  r.has(n) || (Ay(t, e, 2, !1), r.add(n));
}
function _l(e, t, r) {
  var n = 0;
  t && (n |= 4), Ay(r, e, n, t);
}
var ao = `_reactListening${Math.random().toString(36).slice(2)}`;
function gs(e) {
  if (!e[ao]) {
    (e[ao] = !0),
      Im.forEach(function (r) {
        r !== "selectionchange" && (k1.has(r) || _l(r, !1, e), _l(r, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ao] || ((t[ao] = !0), _l("selectionchange", !1, t));
  }
}
function Ay(e, t, r, n) {
  switch (hy(t)) {
    case 1:
      var i = GS;
      break;
    case 4:
      i = HS;
      break;
    default:
      i = Sd;
  }
  (r = i.bind(null, t, r, e)),
    (i = void 0),
    !Vu || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (i = !0),
    n
      ? i !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: i })
        : e.addEventListener(t, r, !0)
      : i !== void 0
      ? e.addEventListener(t, r, { passive: i })
      : e.addEventListener(t, r, !1);
}
function Dl(e, t, r, n, i) {
  var s = n;
  if (!((t & 1) || (t & 2) ) && n !== null)
    e: for (;;) {
      if (n === null) return;
      var o = n.tag;
      if (o === 3 || o === 4) {
        var a = n.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (o === 4)
          for (o = n.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo), l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        while (a !== null) {
          if (((o = rn(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            n = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      n = n.return;
    }
  ey(function () {
    var u = s;
    var c = md(r);
    var d = [];
    e: {
      var f = by.get(e);
      if (f !== void 0) {
        var v = wd;
        var g = e;
        switch (e) {
          case "keypress":
            if (ko(r) === 0) break e;
          case "keydown":
          case "keyup":
            v = o1;
            break;
          case "focusin":
            (g = "focus"), (v = Tl);
            break;
          case "focusout":
            (g = "blur"), (v = Tl);
            break;
          case "beforeblur":
          case "afterblur":
            v = Tl;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Xf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = VS;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = u1;
            break;
          case Cy:
          case Ty:
          case xy:
            v = XS;
            break;
          case Ry:
            v = d1;
            break;
          case "scroll":
            v = WS;
            break;
          case "wheel":
            v = p1;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = ZS;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Zf;
        }
        var m = (t & 4) !== 0;
        var w = !m && e === "scroll";
        var p = m ? (f !== null ? `${f}Capture` : null) : f;
        m = [];
        for (var h = u, y; h !== null; ) {
          y = h;
          var S = y.stateNode;
          if (
            (y.tag === 5 && S !== null && ((y = S), p !== null && ((S = fs(h, p)), S != null && m.push(Ss(h, S, y)))),
            w)
          )
            break;
          h = h.return;
        }
        0 < m.length && ((f = new v(f, g, null, r, c)), d.push({ event: f, listeners: m }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          f && r !== Wu && (g = r.relatedTarget || r.fromElement) && (rn(g) || g[fr]))
        )
          break e;
        if (
          (v || f) &&
          ((f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window),
          v
            ? ((g = r.relatedTarget || r.toElement),
              (v = u),
              (g = g ? rn(g) : null),
              g !== null && ((w = On(g)), g !== w || (g.tag !== 5 && g.tag !== 6)) && (g = null))
            : ((v = null), (g = u)),
          v !== g)
        ) {
          if (
            ((m = Xf),
            (S = "onMouseLeave"),
            (p = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((m = Zf), (S = "onPointerLeave"), (p = "onPointerEnter"), (h = "pointer")),
            (w = v == null ? f : Bn(v)),
            (y = g == null ? f : Bn(g)),
            (f = new m(S, `${h}leave`, v, r, c)),
            (f.target = w),
            (f.relatedTarget = y),
            (S = null),
            rn(c) === u && ((m = new m(p, `${h}enter`, g, r, c)), (m.target = y), (m.relatedTarget = w), (S = m)),
            (w = S),
            v && g)
          )
            t: {
              for (m = v, p = g, h = 0, y = m; y; y = Rn(y)) h++;
              for (y = 0, S = p; S; S = Rn(S)) y++;
              while (0 < h - y) (m = Rn(m)), h--;
              while (0 < y - h) (p = Rn(p)), y--;
              while (h--) {
                if (m === p || (p !== null && m === p.alternate)) break t;
                (m = Rn(m)), (p = Rn(p));
              }
              m = null;
            }
          else m = null;
          v !== null && cp(d, f, v, m, !1), g !== null && w !== null && cp(d, w, g, m, !0);
        }
      }
      e: {
        if (
          ((f = u ? Bn(u) : window),
          (v = f.nodeName?.toLowerCase()),
          v === "select" || (v === "input" && f.type === "file"))
        )
          var x = E1;
        else if (rp(f))
          if (Ey) x = O1;
          else {
            x = P1;
            var b = w1;
          }
        else
          (v = f.nodeName) && v.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (x = $1);
        if (x && (x = x(e, u))) {
          Sy(d, x, r, c);
          break e;
        }
        b?.(e, f, u),
          e === "focusout" && (b = f._wrapperState) && b.controlled && f.type === "number" && ju(f, "number", f.value);
      }
      switch (((b = u ? Bn(u) : window), e)) {
        case "focusin":
          (rp(b) || b.contentEditable === "true") && ((Un = b), (Zu = u), (ts = null));
          break;
        case "focusout":
          ts = Zu = Un = null;
          break;
        case "mousedown":
          ec = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ec = !1), ap(d, r, c);
          break;
        case "selectionchange":
          if (x1) break;
        case "keydown":
        case "keyup":
          ap(d, r, c);
      }
      var L;
      if ($d)
        e: {
          switch (e) {
            case "compositionstart":
              var O = "onCompositionStart";
              break e;
            case "compositionend":
              O = "onCompositionEnd";
              break e;
            case "compositionupdate":
              O = "onCompositionUpdate";
              break e;
          }
          O = void 0;
        }
      else
        qn ? vy(e, r) && (O = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (O = "onCompositionStart");
      O &&
        (yy &&
          r.locale !== "ko" &&
          (qn || O !== "onCompositionStart"
            ? O === "onCompositionEnd" && qn && (L = my())
            : ((br = c), (Ed = "value" in br ? br.value : br.textContent), (qn = !0))),
        (b = ta(u, O)),
        0 < b.length &&
          ((O = new Yf(O, e, null, r, c)),
          d.push({ event: O, listeners: b }),
          L ? (O.data = L) : ((L = gy(r)), L !== null && (O.data = L)))),
        (L = m1 ? y1(e, r) : v1(e, r)) &&
          ((u = ta(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Yf("onBeforeInput", "beforeinput", null, r, c)),
            d.push({ event: c, listeners: u }),
            (c.data = L)));
    }
    ky(d, t);
  });
}
function Ss(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function ta(e, t) {
  for (var r = `${t}Capture`, n = []; e !== null; ) {
    var i = e;
    var s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s), (s = fs(e, r)), s != null && n.unshift(Ss(e, s, i)), (s = fs(e, t)), s != null && n.push(Ss(e, s, i))),
      (e = e.return);
  }
  return n;
}
function Rn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function cp(e, t, r, n, i) {
  for (var s = t._reactName, o = []; r !== null && r !== n; ) {
    var a = r;
    var l = a.alternate;
    var u = a.stateNode;
    if (l !== null && l === n) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = fs(r, s)), l != null && o.unshift(Ss(r, l, a)))
        : i || ((l = fs(r, s)), l != null && o.push(Ss(r, l, a)))),
      (r = r.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var A1 = /\r\n?/g;
var _1 = /\u0000|\uFFFD/g;
function dp(e) {
  return (typeof e === "string" ? e : `${e}`)
    .replace(
      A1,
      `
`,
    )
    .replace(_1, "");
}
function lo(e, t, r) {
  if (((t = dp(t)), dp(e) !== t && r)) throw Error(F(425));
}
function ra() {}
var tc = null;
var rc = null;
function nc(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children === "string" ||
    typeof t.children === "number" ||
    (typeof t.dangerouslySetInnerHTML === "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ic = typeof setTimeout === "function" ? setTimeout : void 0;
var D1 = typeof clearTimeout === "function" ? clearTimeout : void 0;
var fp = typeof Promise === "function" ? Promise : void 0;
var L1 =
    typeof queueMicrotask === "function"
      ? queueMicrotask
      : typeof fp < "u"
      ? function (e) {
          return fp.resolve(null).then(e).catch(N1);
        }
      : ic;
function N1(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ll(e, t) {
  var r = t;
  var n = 0;
  do {
    var i = r.nextSibling;
    if ((e.removeChild(r), i && i.nodeType === 8))
      if (((r = i.data), r === "/$")) {
        if (n === 0) {
          e.removeChild(i), ms(t);
          return;
        }
        n--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
    r = i;
  } while (r);
  ms(t);
}
function Nr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function pp(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Pi = Math.random().toString(36).slice(2);
var Ht = `__reactFiber$${Pi}`;
var Es = `__reactProps$${Pi}`;
var fr = `__reactContainer$${Pi}`;
var sc = `__reactEvents$${Pi}`;
var F1 = `__reactListeners$${Pi}`;
var M1 = `__reactHandles$${Pi}`;
function rn(e) {
  var t = e[Ht];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[fr] || r[Ht])) {
      if (((r = t.alternate), t.child !== null || (r?.child !== null)))
        for (e = pp(e); e !== null; ) {
          if ((r = e[Ht])) return r;
          e = pp(e);
        }
      return t;
    }
    (e = r), (r = e.parentNode);
  }
  return null;
}
function Ms(e) {
  return (e = e[Ht] || e[fr]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function Bn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(F(33));
}
function Ma(e) {
  return e[Es] || null;
}
var oc = [];
var zn = -1;
function Wr(e) {
  return { current: e };
}
function pe(e) {
  0 > zn || ((e.current = oc[zn]), (oc[zn] = null), zn--);
}
function ce(e, t) {
  zn++, (oc[zn] = e.current), (e.current = t);
}
var jr = {};
var Ke = Wr(jr);
var it = Wr(!1);
var fn = jr;
function ai(e, t) {
  var r = e.type.contextTypes;
  if (!r) return jr;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t) return n.__reactInternalMemoizedMaskedChildContext;
  var i = {};
  var s;
  for (s in r) i[s] = t[s];
  return (
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function st(e) {
  return (e = e.childContextTypes), e != null;
}
function na() {
  pe(it), pe(Ke);
}
function hp(e, t, r) {
  if (Ke.current !== jr) throw Error(F(168));
  ce(Ke, t), ce(it, r);
}
function _y(e, t, r) {
  var n = e.stateNode;
  if (((t = t.childContextTypes), typeof n.getChildContext !== "function")) return r;
  n = n.getChildContext();
  for (var i in n) if (!(i in t)) throw Error(F(108, wS(e) || "Unknown", i));
  return ge({}, r, n);
}
function ia(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || jr),
    (fn = Ke.current),
    ce(Ke, e),
    ce(it, it.current),
    !0
  );
}
function mp(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(F(169));
  r ? ((e = _y(e, t, fn)), (n.__reactInternalMemoizedMergedChildContext = e), pe(it), pe(Ke), ce(Ke, e)) : pe(it),
    ce(it, r);
}
var ir = null;
var Ia = !1;
var Nl = !1;
function Dy(e) {
  ir === null ? (ir = [e]) : ir.push(e);
}
function I1(e) {
  (Ia = !0), Dy(e);
}
function Qr() {
  if (!Nl && ir !== null) {
    Nl = !0;
    var e = 0;
    var t = le;
    try {
      var r = ir;
      for (le = 1; e < r.length; e++) {
        var n = r[e];
        do n = n(!0);
        while (n !== null);
      }
      (ir = null), (Ia = !1);
    } catch (i) {
      throw (ir !== null && (ir = ir.slice(e + 1)), iy(yd, Qr), i);
    } finally {
      (le = t), (Nl = !1);
    }
  }
  return null;
}
var Gn = [];
var Hn = 0;
var sa = null;
var oa = 0;
var gt = [];
var St = 0;
var pn = null;
var or = 1;
var ar = "";
function Xr(e, t) {
  (Gn[Hn++] = oa), (Gn[Hn++] = sa), (sa = e), (oa = t);
}
function Ly(e, t, r) {
  (gt[St++] = or), (gt[St++] = ar), (gt[St++] = pn), (pn = e);
  var n = or;
  e = ar;
  var i = 32 - Lt(n) - 1;
  (n &= ~(1 << i)), (r += 1);
  var s = 32 - Lt(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (n & ((1 << o) - 1)).toString(32)),
      (n >>= o),
      (i -= o),
      (or = (1 << (32 - Lt(t) + i)) | (r << i) | n),
      (ar = s + e);
  } else (or = (1 << s) | (r << i) | n), (ar = e);
}
function Cd(e) {
  e.return !== null && (Xr(e, 1), Ly(e, 1, 0));
}
function Td(e) {
  while (e === sa) (sa = Gn[--Hn]), (Gn[Hn] = null), (oa = Gn[--Hn]), (Gn[Hn] = null);
  while (e === pn)
    (pn = gt[--St]), (gt[St] = null), (ar = gt[--St]), (gt[St] = null), (or = gt[--St]), (gt[St] = null);
}
var dt = null;
var ct = null;
var he = !1;
var Dt = null;
function Ny(e, t) {
  var r = Et(5, null, null, 0);
  (r.elementType = "DELETED"),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
}
function yp(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (dt = e), (ct = Nr(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (dt = e), (ct = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = pn !== null ? { id: or, overflow: ar } : null),
            (e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }),
            (r = Et(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (dt = e),
            (ct = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ac(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function lc(e) {
  if (he) {
    var t = ct;
    if (t) {
      var r = t;
      if (!yp(e, t)) {
        if (ac(e)) throw Error(F(418));
        t = Nr(r.nextSibling);
        var n = dt;
        t && yp(e, t) ? Ny(n, r) : ((e.flags = (e.flags & -4097) | 2), (he = !1), (dt = e));
      }
    } else {
      if (ac(e)) throw Error(F(418));
      (e.flags = (e.flags & -4097) | 2), (he = !1), (dt = e);
    }
  }
}
function vp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  dt = e;
}
function uo(e) {
  if (e !== dt) return !1;
  if (!he) return vp(e), (he = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== "head" && t !== "body" && !nc(e.type, e.memoizedProps))),
    t && (t = ct))
  ) {
    if (ac(e)) throw (Fy(), Error(F(418)));
    while (t) Ny(e, t), (t = Nr(t.nextSibling));
  }
  if ((vp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(F(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              ct = Nr(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ct = null;
    }
  } else ct = dt ? Nr(e.stateNode.nextSibling) : null;
  return !0;
}
function Fy() {
  for (var e = ct; e; ) e = Nr(e.nextSibling);
}
function li() {
  (ct = dt = null), (he = !1);
}
function xd(e) {
  Dt === null ? (Dt = [e]) : Dt.push(e);
}
var q1 = yr.ReactCurrentBatchConfig;
function At(e, t) {
  if (e?.defaultProps) {
    (t = ge({}, t)), (e = e.defaultProps);
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
var aa = Wr(null);
var la = null;
var Wn = null;
var Rd = null;
function bd() {
  Rd = Wn = la = null;
}
function kd(e) {
  var t = aa.current;
  pe(aa), (e._currentValue = t);
}
function uc(e, t, r) {
  while (e !== null) {
    var n = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
        : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
      e === r)
    )
      break;
    e = e.return;
  }
}
function ei(e, t) {
  (la = e),
    (Rd = Wn = null),
    (e = e.dependencies),
    e?.firstContext !== null && (e.lanes & t && (nt = !0), (e.firstContext = null));
}
function Ot(e) {
  var t = e._currentValue;
  if (Rd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Wn === null)) {
      if (la === null) throw Error(F(308));
      (Wn = e), (la.dependencies = { lanes: 0, firstContext: e });
    } else Wn = Wn.next = e;
  return t;
}
var nn = null;
function Ad(e) {
  nn === null ? (nn = [e]) : nn.push(e);
}
function My(e, t, r, n) {
  var i = t.interleaved;
  return i === null ? ((r.next = r), Ad(t)) : ((r.next = i.next), (i.next = r)), (t.interleaved = r), pr(e, n);
}
function pr(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    (e.childLanes |= t), (r = e.alternate), r !== null && (r.childLanes |= t), (r = e), (e = e.return);
  return r.tag === 3 ? r.stateNode : null;
}
var Or = !1;
function _d(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Iy(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function lr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Fr(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (((n = n.shared), ie & 2)) {
    var i = n.pending;
    return i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (n.pending = t), pr(e, r);
  }
  return (
    (i = n.interleaved),
    i === null ? ((t.next = t), Ad(n)) : ((t.next = i.next), (i.next = t)),
    (n.interleaved = t),
    pr(e, r)
  );
}
function Ao(e, t, r) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), vd(e, r);
  }
}
function gp(e, t) {
  var r = e.updateQueue;
  var n = e.alternate;
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var i = null;
    var s = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var o = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (r = r.next);
      } while (r !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (r = { baseState: n.baseState, firstBaseUpdate: i, lastBaseUpdate: s, shared: n.shared, effects: n.effects }),
      (e.updateQueue = r);
    return;
  }
  (e = r.lastBaseUpdate), e === null ? (r.firstBaseUpdate = t) : (e.next = t), (r.lastBaseUpdate = t);
}
function ua(e, t, r, n) {
  var i = e.updateQueue;
  Or = !1;
  var s = i.firstBaseUpdate;
  var o = i.lastBaseUpdate;
  var a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a;
    var u = l.next;
    (l.next = null), o === null ? (s = u) : (o.next = u), (o = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== o && (a === null ? (c.firstBaseUpdate = u) : (a.next = u), (c.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var d = i.baseState;
    (o = 0), (c = u = l = null), (a = s);
    do {
      var f = a.lane;
      var v = a.eventTime;
      if ((n & f) === f) {
        c !== null &&
          (c = c.next = { eventTime: v, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });
        e: {
          var g = e;
          var m = a;
          switch (((f = t), (v = r), m.tag)) {
            case 1:
              if (((g = m.payload), typeof g === "function")) {
                d = g.call(v, d, f);
                break e;
              }
              d = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (((g = m.payload), (f = typeof g === "function" ? g.call(v, d, f) : g), f == null)) break e;
              d = ge({}, d, f);
              break e;
            case 2:
              Or = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64), (f = i.effects), f === null ? (i.effects = [a]) : f.push(a));
      } else
        (v = { eventTime: v, lane: f, tag: a.tag, payload: a.payload, callback: a.callback, next: null }),
          c === null ? ((u = c = v), (l = d)) : (c = c.next = v),
          (o |= f);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (f = a), (a = f.next), (f.next = null), (i.lastBaseUpdate = f), (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (l = d),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (mn |= o), (e.lanes = o), (e.memoizedState = d);
  }
}
function Sp(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t];
      var i = n.callback;
      if (i !== null) {
        if (((n.callback = null), (n = r), typeof i !== "function")) throw Error(F(191, i));
        i.call(n);
      }
    }
}
var qy = new Mm.Component().refs;
function cc(e, t, r, n) {
  (t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : ge({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r);
}
var qa = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? On(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var n = Ze();
    var i = Ir(e);
    var s = lr(n, i);
    (s.payload = t), r != null && (s.callback = r), (t = Fr(e, s, i)), t !== null && (Nt(t, e, i, n), Ao(t, e, i));
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var n = Ze();
    var i = Ir(e);
    var s = lr(n, i);
    (s.tag = 1),
      (s.payload = t),
      r != null && (s.callback = r),
      (t = Fr(e, s, i)),
      t !== null && (Nt(t, e, i, n), Ao(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = Ze();
    var n = Ir(e);
    var i = lr(r, n);
    (i.tag = 2), t != null && (i.callback = t), (t = Fr(e, i, n)), t !== null && (Nt(t, e, n, r), Ao(t, e, n));
  },
};
function Ep(e, t, r, n, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate === "function"
      ? e.shouldComponentUpdate(n, s, o)
      : t.prototype?.isPureReactComponent
      ? !(vs(r, n) && vs(i, s))
      : !0
  );
}
function Uy(e, t, r) {
  var n = !1;
  var i = jr;
  var s = t.contextType;
  return (
    typeof s === "object" && s !== null
      ? (s = Ot(s))
      : ((i = st(t) ? fn : Ke.current), (n = t.contextTypes), (s = (n = n != null) ? ai(e, i) : jr)),
    (t = new t(r, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = qa),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function wp(e, t, r, n) {
  (e = t.state),
    typeof t.componentWillReceiveProps === "function" && t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps === "function" && t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && qa.enqueueReplaceState(t, t.state, null);
}
function dc(e, t, r, n) {
  var i = e.stateNode;
  (i.props = r), (i.state = e.memoizedState), (i.refs = qy), _d(e);
  var s = t.contextType;
  typeof s === "object" && s !== null ? (i.context = Ot(s)) : ((s = st(t) ? fn : Ke.current), (i.context = ai(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s === "function" && (cc(e, t, s, r), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps === "function" ||
      typeof i.getSnapshotBeforeUpdate === "function" ||
      (typeof i.UNSAFE_componentWillMount !== "function" && typeof i.componentWillMount !== "function") ||
      ((t = i.state),
      typeof i.componentWillMount === "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount === "function" && i.UNSAFE_componentWillMount(),
      t !== i.state && qa.enqueueReplaceState(i, i.state, null),
      ua(e, r, i, n),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount === "function" && (e.flags |= 4194308);
}
function Ii(e, t, r) {
  if (((e = r.ref), e !== null && typeof e !== "function" && typeof e !== "object")) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(F(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(F(147, e));
      var i = n;
      var s = `${e}`;
      return t?.ref !== null && typeof t.ref === "function" && t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var a = i.refs;
            a === qy && (a = i.refs = {}), o === null ? a[s]  = undefined : (a[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e !== "string") throw Error(F(284));
    if (!r._owner) throw Error(F(290, e));
  }
  return e;
}
function co(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(F(31, e === "[object Object]" ? `object with keys {${Object.keys(t).join(", ")}}` : e)))
  );
}
function Pp(e) {
  var t = e._init;
  return t(e._payload);
}
function jy(e) {
  function t(p, h) {
    if (e) {
      var y = p.deletions;
      y === null ? ((p.deletions = [h]), (p.flags |= 16)) : y.push(h);
    }
  }
  function r(p, h) {
    if (!e) return null;
    while (h !== null) t(p, h), (h = h.sibling);
    return null;
  }
  function n(p, h) {
    for (p = new Map(); h !== null; ) h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling);
    return p;
  }
  function i(p, h) {
    return (p = qr(p, h)), (p.index = 0), (p.sibling = null), p;
  }
  function s(p, h, y) {
    return (
      (p.index = y),
      e
        ? ((y = p.alternate), y !== null ? ((y = y.index), y < h ? ((p.flags |= 2), h) : y) : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function o(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, h, y, S) {
    return h === null || h.tag !== 6 ? ((h = Bl(y, p.mode, S)), (h.return = p), h) : ((h = i(h, y)), (h.return = p), h);
  }
  function l(p, h, y, S) {
    var x = y.type;
    return x === In
      ? c(p, h, y.props.children, S, y.key)
      : h !== null &&
        (h.elementType === x || (typeof x === "object" && x !== null && x.$$typeof === $r && Pp(x) === h.type))
      ? ((S = i(h, y.props)), (S.ref = Ii(p, h, y)), (S.return = p), S)
      : ((S = Mo(y.type, y.key, y.props, null, p.mode, S)), (S.ref = Ii(p, h, y)), (S.return = p), S);
  }
  function u(p, h, y, S) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== y.containerInfo ||
      h.stateNode.implementation !== y.implementation
      ? ((h = zl(y, p.mode, S)), (h.return = p), h)
      : ((h = i(h, y.children || [])), (h.return = p), h);
  }
  function c(p, h, y, S, x) {
    return h === null || h.tag !== 7
      ? ((h = un(y, p.mode, S, x)), (h.return = p), h)
      : ((h = i(h, y)), (h.return = p), h);
  }
  function d(p, h, y) {
    if ((typeof h === "string" && h !== "") || typeof h === "number")
      return (h = Bl(`${h}`, p.mode, y)), (h.return = p), h;
    if (typeof h === "object" && h !== null) {
      switch (h.$$typeof) {
        case Zs:
          return (y = Mo(h.type, h.key, h.props, null, p.mode, y)), (y.ref = Ii(p, null, h)), (y.return = p), y;
        case Mn:
          return (h = zl(h, p.mode, y)), (h.return = p), h;
        case $r:
          var S = h._init;
          return d(p, S(h._payload), y);
      }
      if (Wi(h) || Di(h)) return (h = un(h, p.mode, y, null)), (h.return = p), h;
      co(p, h);
    }
    return null;
  }
  function f(p, h, y, S) {
    var x = h !== null ? h.key : null;
    if ((typeof y === "string" && y !== "") || typeof y === "number") return x !== null ? null : a(p, h, `${y}`, S);
    if (typeof y === "object" && y !== null) {
      switch (y.$$typeof) {
        case Zs:
          return y.key === x ? l(p, h, y, S) : null;
        case Mn:
          return y.key === x ? u(p, h, y, S) : null;
        case $r:
          return (x = y._init), f(p, h, x(y._payload), S);
      }
      if (Wi(y) || Di(y)) return x !== null ? null : c(p, h, y, S, null);
      co(p, y);
    }
    return null;
  }
  function v(p, h, y, S, x) {
    if ((typeof S === "string" && S !== "") || typeof S === "number") return (p = p.get(y) || null), a(h, p, `${S}`, x);
    if (typeof S === "object" && S !== null) {
      switch (S.$$typeof) {
        case Zs:
          return (p = p.get(S.key === null ? y : S.key) || null), l(h, p, S, x);
        case Mn:
          return (p = p.get(S.key === null ? y : S.key) || null), u(h, p, S, x);
        case $r:
          var b = S._init;
          return v(p, h, y, b(S._payload), x);
      }
      if (Wi(S) || Di(S)) return (p = p.get(y) || null), c(h, p, S, x, null);
      co(h, S);
    }
    return null;
  }
  function g(p, h, y, S) {
    for (var x = null, b = null, L = h, O = (h = 0), j = null; L !== null && O < y.length; O++) {
      L.index > O ? ((j = L), (L = null)) : (j = L.sibling);
      var M = f(p, L, y[O], S);
      if (M === null) {
        L === null && (L = j);
        break;
      }
      e && L && M.alternate === null && t(p, L),
        (h = s(M, h, O)),
        b === null ? (x = M) : (b.sibling = M),
        (b = M),
        (L = j);
    }
    if (O === y.length) return r(p, L), he && Xr(p, O), x;
    if (L === null) {
      for (; O < y.length; O++)
        (L = d(p, y[O], S)), L !== null && ((h = s(L, h, O)), b === null ? (x = L) : (b.sibling = L), (b = L));
      return he && Xr(p, O), x;
    }
    for (L = n(p, L); O < y.length; O++)
      (j = v(L, p, O, y[O], S)),
        j !== null &&
          (e && j.alternate !== null && L.delete(j.key === null ? O : j.key),
          (h = s(j, h, O)),
          b === null ? (x = j) : (b.sibling = j),
          (b = j));
    return (
      e &&
        L.forEach(function (J) {
          return t(p, J);
        }),
      he && Xr(p, O),
      x
    );
  }
  function m(p, h, y, S) {
    var x = Di(y);
    if (typeof x !== "function") throw Error(F(150));
    if (((y = x.call(y)), y == null)) throw Error(F(151));
    for (var b = (x = null), L = h, O = (h = 0), j = null, M = y.next(); L !== null && !M.done; O++, M = y.next()) {
      L.index > O ? ((j = L), (L = null)) : (j = L.sibling);
      var J = f(p, L, M.value, S);
      if (J === null) {
        L === null && (L = j);
        break;
      }
      e && L && J.alternate === null && t(p, L),
        (h = s(J, h, O)),
        b === null ? (x = J) : (b.sibling = J),
        (b = J),
        (L = j);
    }
    if (M.done) return r(p, L), he && Xr(p, O), x;
    if (L === null) {
      for (; !M.done; O++, M = y.next())
        (M = d(p, M.value, S)), M !== null && ((h = s(M, h, O)), b === null ? (x = M) : (b.sibling = M), (b = M));
      return he && Xr(p, O), x;
    }
    for (L = n(p, L); !M.done; O++, M = y.next())
      (M = v(L, p, O, M.value, S)),
        M !== null &&
          (e && M.alternate !== null && L.delete(M.key === null ? O : M.key),
          (h = s(M, h, O)),
          b === null ? (x = M) : (b.sibling = M),
          (b = M));
    return (
      e &&
        L.forEach(function (de) {
          return t(p, de);
        }),
      he && Xr(p, O),
      x
    );
  }
  function w(p, h, y, S) {
    if (
      (typeof y === "object" && y !== null && y.type === In && y.key === null && (y = y.props.children),
      typeof y === "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case Zs:
          e: {
            for (var x = y.key, b = h; b !== null; ) {
              if (b.key === x) {
                if (((x = y.type), x === In)) {
                  if (b.tag === 7) {
                    r(p, b.sibling), (h = i(b, y.props.children)), (h.return = p), (p = h);
                    break e;
                  }
                } else if (
                  b.elementType === x ||
                  (typeof x === "object" && x !== null && x.$$typeof === $r && Pp(x) === b.type)
                ) {
                  r(p, b.sibling), (h = i(b, y.props)), (h.ref = Ii(p, b, y)), (h.return = p), (p = h);
                  break e;
                }
                r(p, b);
                break;
              } else t(p, b);
              b = b.sibling;
            }
            y.type === In
              ? ((h = un(y.props.children, p.mode, S, y.key)), (h.return = p), (p = h))
              : ((S = Mo(y.type, y.key, y.props, null, p.mode, S)), (S.ref = Ii(p, h, y)), (S.return = p), (p = S));
          }
          return o(p);
        case Mn:
          e: {
            for (b = y.key; h !== null; ) {
              if (h.key === b)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === y.containerInfo &&
                  h.stateNode.implementation === y.implementation
                ) {
                  r(p, h.sibling), (h = i(h, y.children || [])), (h.return = p), (p = h);
                  break e;
                } else {
                  r(p, h);
                  break;
                }
              else t(p, h);
              h = h.sibling;
            }
            (h = zl(y, p.mode, S)), (h.return = p), (p = h);
          }
          return o(p);
        case $r:
          return (b = y._init), w(p, h, b(y._payload), S);
      }
      if (Wi(y)) return g(p, h, y, S);
      if (Di(y)) return m(p, h, y, S);
      co(p, y);
    }
    return (typeof y === "string" && y !== "") || typeof y === "number"
      ? ((y = `${y}`),
        h !== null && h.tag === 6
          ? (r(p, h.sibling), (h = i(h, y)), (h.return = p), (p = h))
          : (r(p, h), (h = Bl(y, p.mode, S)), (h.return = p), (p = h)),
        o(p))
      : r(p, h);
  }
  return w;
}
var ui = jy(!0);
var By = jy(!1);
var Is = {};
var Kt = Wr(Is);
var ws = Wr(Is);
var Ps = Wr(Is);
function sn(e) {
  if (e === Is) throw Error(F(174));
  return e;
}
function Dd(e, t) {
  switch ((ce(Ps, t), ce(ws, e), ce(Kt, Is), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : zu(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = zu(t, e));
  }
  pe(Kt), ce(Kt, t);
}
function ci() {
  pe(Kt), pe(ws), pe(Ps);
}
function zy(e) {
  sn(Ps.current);
  var t = sn(Kt.current);
  var r = zu(t, e.type);
  t !== r && (ce(ws, e), ce(Kt, r));
}
function Ld(e) {
  ws.current === e && (pe(Kt), pe(ws));
}
var ye = Wr(0);
function ca(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (r !== null && ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    while (t.sibling === null) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Fl = [];
function Nd() {
  for (var e = 0; e < Fl.length; e++) Fl[e]._workInProgressVersionPrimary = null;
  Fl.length = 0;
}
var _o = yr.ReactCurrentDispatcher;
var Ml = yr.ReactCurrentBatchConfig;
var hn = 0;
var ve = null;
var be = null;
var Le = null;
var da = !1;
var rs = !1;
var $s = 0;
var U1 = 0;
function We() {
  throw Error(F(321));
}
function Fd(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++) if (!Mt(e[r], t[r])) return !1;
  return !0;
}
function Md(e, t, r, n, i, s) {
  if (
    ((hn = s),
    (ve = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (_o.current = e === null || e.memoizedState === null ? G1 : H1),
    (e = r(n, i)),
    rs)
  ) {
    s = 0;
    do {
      if (((rs = !1), ($s = 0), 25 <= s)) throw Error(F(301));
      (s += 1), (Le = be = null), (t.updateQueue = null), (_o.current = W1), (e = r(n, i));
    } while (rs);
  }
  if (((_o.current = fa), (t = be?.next !== null), (hn = 0), (Le = be = ve = null), (da = !1), t))
    throw Error(F(300));
  return e;
}
function Id() {
  var e = $s !== 0;
  return ($s = 0), e;
}
function Bt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Le === null ? (ve.memoizedState = Le = e) : (Le = Le.next = e), Le;
}
function Ct() {
  if (be === null) {
    var e = ve.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = be.next;
  var t = Le === null ? ve.memoizedState : Le.next;
  if (t !== null) (Le = t), (be = e);
  else {
    if (e === null) throw Error(F(310));
    (be = e),
      (e = {
        memoizedState: be.memoizedState,
        baseState: be.baseState,
        baseQueue: be.baseQueue,
        queue: be.queue,
        next: null,
      }),
      Le === null ? (ve.memoizedState = Le = e) : (Le = Le.next = e);
  }
  return Le;
}
function Os(e, t) {
  return typeof t === "function" ? t(e) : t;
}
function Il(e) {
  var t = Ct();
  var r = t.queue;
  if (r === null) throw Error(F(311));
  r.lastRenderedReducer = e;
  var n = be;
  var i = n.baseQueue;
  var s = r.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (n.baseQueue = i = s), (r.pending = null);
  }
  if (i !== null) {
    (s = i.next), (n = n.baseState);
    var a = (o = null);
    var l = null;
    var u = s;
    do {
      var c = u.lane;
      if ((hn & c) === c)
        l !== null &&
          (l = l.next =
            { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }),
          (n = u.hasEagerState ? u.eagerState : e(n, u.action));
      else {
        var d = { lane: c, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
        l === null ? ((a = l = d), (o = n)) : (l = l.next = d), (ve.lanes |= c), (mn |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? (o = n) : (l.next = a),
      Mt(n, t.memoizedState) || (nt = !0),
      (t.memoizedState = n),
      (t.baseState = o),
      (t.baseQueue = l),
      (r.lastRenderedState = n);
  }
  if (((e = r.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (ve.lanes |= s), (mn |= s), (i = i.next);
    while (i !== e);
  } else i === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function ql(e) {
  var t = Ct();
  var r = t.queue;
  if (r === null) throw Error(F(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch;
  var i = r.pending;
  var s = t.memoizedState;
  if (i !== null) {
    r.pending = null;
    var o = (i = i.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== i);
    Mt(s, t.memoizedState) || (nt = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (r.lastRenderedState = s);
  }
  return [s, n];
}
function Gy() {}
function Hy(e, t) {
  var r = ve;
  var n = Ct();
  var i = t();
  var s = !Mt(n.memoizedState, i);
  if (
    (s && ((n.memoizedState = i), (nt = !0)),
    (n = n.queue),
    qd(Vy.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || s || (Le !== null && Le.memoizedState.tag & 1))
  ) {
    if (((r.flags |= 2048), Cs(9, Qy.bind(null, r, n, i, t), void 0, null), Ne === null)) throw Error(F(349));
    hn & 30 || Wy(r, t, i);
  }
  return i;
}
function Wy(e, t, r) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = ve.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (ve.updateQueue = t), (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
}
function Qy(e, t, r, n) {
  (t.value = r), (t.getSnapshot = n), Ky(t) && Jy(e);
}
function Vy(e, t, r) {
  return r(function () {
    Ky(t) && Jy(e);
  });
}
function Ky(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !Mt(e, r);
  } catch {
    return !0;
  }
}
function Jy(e) {
  var t = pr(e, 1);
  t !== null && Nt(t, e, 1, -1);
}
function $p(e) {
  var t = Bt();
  return (
    typeof e === "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Os, lastRenderedState: e }),
    (t.queue = e),
    (e = e.dispatch = z1.bind(null, ve, e)),
    [t.memoizedState, e]
  );
}
function Cs(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    (t = ve.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (ve.updateQueue = t), (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null ? (t.lastEffect = e.next = e) : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  );
}
function Xy() {
  return Ct().memoizedState;
}
function Do(e, t, r, n) {
  var i = Bt();
  (ve.flags |= e), (i.memoizedState = Cs(1 | t, r, void 0, n === void 0 ? null : n));
}
function Ua(e, t, r, n) {
  var i = Ct();
  n = n === void 0 ? null : n;
  var s = void 0;
  if (be !== null) {
    var o = be.memoizedState;
    if (((s = o.destroy), n !== null && Fd(n, o.deps))) {
      i.memoizedState = Cs(t, r, s, n);
      return;
    }
  }
  (ve.flags |= e), (i.memoizedState = Cs(1 | t, r, s, n));
}
function Op(e, t) {
  return Do(8390656, 8, e, t);
}
function qd(e, t) {
  return Ua(2048, 8, e, t);
}
function Yy(e, t) {
  return Ua(4, 2, e, t);
}
function Zy(e, t) {
  return Ua(4, 4, e, t);
}
function ev(e, t) {
  if (typeof t === "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function tv(e, t, r) {
  return (r = r != null ? r.concat([e]) : null), Ua(4, 4, ev.bind(null, t, e), r);
}
function Ud() {}
function rv(e, t) {
  var r = Ct();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Fd(t, n[1]) ? n[0] : ((r.memoizedState = [e, t]), e);
}
function nv(e, t) {
  var r = Ct();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Fd(t, n[1]) ? n[0] : ((e = e()), (r.memoizedState = [e, t]), e);
}
function iv(e, t, r) {
  return hn & 21
    ? (Mt(r, t) || ((r = ay()), (ve.lanes |= r), (mn |= r), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (nt = !0)), (e.memoizedState = r));
}
function j1(e, t) {
  var r = le;
  (le = r !== 0 && 4 > r ? r : 4), e(!0);
  var n = Ml.transition;
  Ml.transition = {};
  try {
    e(!1), t();
  } finally {
    (le = r), (Ml.transition = n);
  }
}
function sv() {
  return Ct().memoizedState;
}
function B1(e, t, r) {
  var n = Ir(e);
  if (((r = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }), ov(e))) av(t, r);
  else if (((r = My(e, t, r, n)), r !== null)) {
    var i = Ze();
    Nt(r, e, n, i), lv(r, t, n);
  }
}
function z1(e, t, r) {
  var n = Ir(e);
  var i = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (ov(e)) av(t, i);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && ((s = t.lastRenderedReducer), s !== null))
      try {
        var o = t.lastRenderedState;
        var a = s(o, r);
        if (((i.hasEagerState = !0), (i.eagerState = a), Mt(a, o))) {
          var l = t.interleaved;
          l === null ? ((i.next = i), Ad(t)) : ((i.next = l.next), (l.next = i)), (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (r = My(e, t, i, n)), r !== null && ((i = Ze()), Nt(r, e, n, i), lv(r, t, n));
  }
}
function ov(e) {
  var t = e.alternate;
  return e === ve || (t !== null && t === ve);
}
function av(e, t) {
  rs = da = !0;
  var r = e.pending;
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (e.pending = t);
}
function lv(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), vd(e, r);
  }
}
var fa = {
    readContext: Ot,
    useCallback: We,
    useContext: We,
    useEffect: We,
    useImperativeHandle: We,
    useInsertionEffect: We,
    useLayoutEffect: We,
    useMemo: We,
    useReducer: We,
    useRef: We,
    useState: We,
    useDebugValue: We,
    useDeferredValue: We,
    useTransition: We,
    useMutableSource: We,
    useSyncExternalStore: We,
    useId: We,
    unstable_isNewReconciler: !1,
  };
var G1 = {
    readContext: Ot,
    useCallback: function (e, t) {
      return (Bt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ot,
    useEffect: Op,
    useImperativeHandle: function (e, t, r) {
      return (r = r != null ? r.concat([e]) : null), Do(4194308, 4, ev.bind(null, t, e), r);
    },
    useLayoutEffect: function (e, t) {
      return Do(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Do(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = Bt();
      return (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, r) {
      var n = Bt();
      return (
        (t = r !== void 0 ? r(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (n.queue = e),
        (e = e.dispatch = B1.bind(null, ve, e)),
        [n.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Bt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: $p,
    useDebugValue: Ud,
    useDeferredValue: function (e) {
      return (Bt().memoizedState = e);
    },
    useTransition: function () {
      var e = $p(!1);
      var t = e[0];
      return (e = j1.bind(null, e[1])), (Bt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = ve;
      var i = Bt();
      if (he) {
        if (r === void 0) throw Error(F(407));
        r = r();
      } else {
        if (((r = t()), Ne === null)) throw Error(F(349));
        hn & 30 || Wy(n, t, r);
      }
      i.memoizedState = r;
      var s = { value: r, getSnapshot: t };
      return (
        (i.queue = s),
        Op(Vy.bind(null, n, s, e), [e]),
        (n.flags |= 2048),
        Cs(9, Qy.bind(null, n, s, r, t), void 0, null),
        r
      );
    },
    useId: function () {
      var e = Bt();
      var t = Ne.identifierPrefix;
      if (he) {
        var r = ar;
        var n = or;
        (r = (n & ~(1 << (32 - Lt(n) - 1))).toString(32) + r),
          (t = `:${t}R${r}`),
          (r = $s++),
          0 < r && (t += `H${r.toString(32)}`),
          (t += ":");
      } else (r = U1++), (t = `:${t}r${r.toString(32)}:`);
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  };
var H1 = {
    readContext: Ot,
    useCallback: rv,
    useContext: Ot,
    useEffect: qd,
    useImperativeHandle: tv,
    useInsertionEffect: Yy,
    useLayoutEffect: Zy,
    useMemo: nv,
    useReducer: Il,
    useRef: Xy,
    useState: function () {
      return Il(Os);
    },
    useDebugValue: Ud,
    useDeferredValue: function (e) {
      var t = Ct();
      return iv(t, be.memoizedState, e);
    },
    useTransition: function () {
      var e = Il(Os)[0];
      var t = Ct().memoizedState;
      return [e, t];
    },
    useMutableSource: Gy,
    useSyncExternalStore: Hy,
    useId: sv,
    unstable_isNewReconciler: !1,
  };
var W1 = {
    readContext: Ot,
    useCallback: rv,
    useContext: Ot,
    useEffect: qd,
    useImperativeHandle: tv,
    useInsertionEffect: Yy,
    useLayoutEffect: Zy,
    useMemo: nv,
    useReducer: ql,
    useRef: Xy,
    useState: function () {
      return ql(Os);
    },
    useDebugValue: Ud,
    useDeferredValue: function (e) {
      var t = Ct();
      return be === null ? (t.memoizedState = e) : iv(t, be.memoizedState, e);
    },
    useTransition: function () {
      var e = ql(Os)[0];
      var t = Ct().memoizedState;
      return [e, t];
    },
    useMutableSource: Gy,
    useSyncExternalStore: Hy,
    useId: sv,
    unstable_isNewReconciler: !1,
  };
function di(e, t) {
  try {
    var r = "";
    var n = t;
    do (r += ES(n)), (n = n.return);
    while (n);
    var i = r;
  } catch (s) {
    i =
      `
Error generating stack: ${s.message}
${s.stack}`;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Ul(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function fc(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var Q1 = typeof WeakMap === "function" ? WeakMap : Map;
function uv(e, t, r) {
  (r = lr(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var n = t.value;
  return (
    (r.callback = function () {
      ha || ((ha = !0), (Pc = n)), fc(e, t);
    }),
    r
  );
}
function cv(e, t, r) {
  (r = lr(-1, r)), (r.tag = 3);
  var n = e.type.getDerivedStateFromError;
  if (typeof n === "function") {
    var i = t.value;
    (r.payload = function () {
      return n(i);
    }),
      (r.callback = function () {
        fc(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch === "function" &&
      (r.callback = function () {
        fc(e, t), typeof n !== "function" && (Mr === null ? (Mr = new Set([this])) : Mr.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
      }),
    r
  );
}
function Cp(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new Q1();
    var i = new Set();
    n.set(t, i);
  } else (i = n.get(t)), i === void 0 && ((i = new Set()), n.set(t, i));
  i.has(r) || (i.add(r), (e = aE.bind(null, e, t, r)), t.then(e, e));
}
function Tp(e) {
  do {
    var t;
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function xp(e, t, r, n, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 && (r.alternate === null ? (r.tag = 17) : ((t = lr(-1, 1)), (t.tag = 2), Fr(r, t, 1))),
          (r.lanes |= 1)),
      e);
}
var V1 = yr.ReactCurrentOwner;
var nt = !1;
function Ye(e, t, r, n) {
  t.child = e === null ? By(t, null, r, n) : ui(t, e.child, r, n);
}
function Rp(e, t, r, n, i) {
  r = r.render;
  var s = t.ref;
  return (
    ei(t, i),
    (n = Md(e, t, r, n, s, i)),
    (r = Id()),
    e !== null && !nt
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), hr(e, t, i))
      : (he && r && Cd(t), (t.flags |= 1), Ye(e, t, n, i), t.child)
  );
}
function bp(e, t, r, n, i) {
  if (e === null) {
    var s = r.type;
    return typeof s === "function" &&
      !Vd(s) &&
      s.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), dv(e, t, s, n, i))
      : ((e = Mo(r.type, null, n, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (((r = r.compare), (r = r !== null ? r : vs), r(o, n) && e.ref === t.ref)) return hr(e, t, i);
  }
  return (t.flags |= 1), (e = qr(s, n)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function dv(e, t, r, n, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (vs(s, n) && e.ref === t.ref)
      if (((nt = !1), (t.pendingProps = n = s), (e.lanes & i) !== 0)) e.flags & 131072 && (nt = !0);
      else return (t.lanes = e.lanes), hr(e, t, i);
  }
  return pc(e, t, r, n, i);
}
function fv(e, t, r) {
  var n = t.pendingProps;
  var i = n.children;
  var s = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), ce(Vn, ut), (ut |= r);
    else {
      if (!(r & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          ce(Vn, ut),
          (ut |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = s !== null ? s.baseLanes : r),
        ce(Vn, ut),
        (ut |= n);
    }
  else s !== null ? ((n = s.baseLanes | r), (t.memoizedState = null)) : (n = r), ce(Vn, ut), (ut |= n);
  return Ye(e, t, i, r), t.child;
}
function pv(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function pc(e, t, r, n, i) {
  var s = st(r) ? fn : Ke.current;
  return (
    (s = ai(t, s)),
    ei(t, i),
    (r = Md(e, t, r, n, s, i)),
    (n = Id()),
    e !== null && !nt
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), hr(e, t, i))
      : (he && n && Cd(t), (t.flags |= 1), Ye(e, t, r, i), t.child)
  );
}
function kp(e, t, r, n, i) {
  if (st(r)) {
    var s = !0;
    ia(t);
  } else s = !1;
  if ((ei(t, i), t.stateNode === null)) Lo(e, t), Uy(t, r, n), dc(t, r, n, i), (n = !0);
  else if (e === null) {
    var o = t.stateNode;
    var a = t.memoizedProps;
    o.props = a;
    var l = o.context;
    var u = r.contextType;
    typeof u === "object" && u !== null ? (u = Ot(u)) : ((u = st(r) ? fn : Ke.current), (u = ai(t, u)));
    var c = r.getDerivedStateFromProps;
    var d = typeof c === "function" || typeof o.getSnapshotBeforeUpdate === "function";
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps !== "function" && typeof o.componentWillReceiveProps !== "function") ||
      ((a !== n || l !== u) && wp(t, o, n, u)),
      (Or = !1);
    var f = t.memoizedState;
    (o.state = f),
      ua(t, n, o, i),
      (l = t.memoizedState),
      a !== n || f !== l || it.current || Or
        ? (typeof c === "function" && (cc(t, r, c, n), (l = t.memoizedState)),
          (a = Or || Ep(t, r, a, n, f, l, u))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount !== "function" && typeof o.componentWillMount !== "function") ||
                (typeof o.componentWillMount === "function" && o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount === "function" && o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount === "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount === "function" && (t.flags |= 4194308),
              (t.memoizedProps = n),
              (t.memoizedState = l)),
          (o.props = n),
          (o.state = l),
          (o.context = u),
          (n = a))
        : (typeof o.componentDidMount === "function" && (t.flags |= 4194308), (n = !1));
  } else {
    (o = t.stateNode),
      Iy(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : At(t.type, a)),
      (o.props = u),
      (d = t.pendingProps),
      (f = o.context),
      (l = r.contextType),
      typeof l === "object" && l !== null ? (l = Ot(l)) : ((l = st(r) ? fn : Ke.current), (l = ai(t, l)));
    var v = r.getDerivedStateFromProps;
    (c = typeof v === "function" || typeof o.getSnapshotBeforeUpdate === "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps !== "function" && typeof o.componentWillReceiveProps !== "function") ||
      ((a !== d || f !== l) && wp(t, o, n, l)),
      (Or = !1),
      (f = t.memoizedState),
      (o.state = f),
      ua(t, n, o, i);
    var g = t.memoizedState;
    a !== d || f !== g || it.current || Or
      ? (typeof v === "function" && (cc(t, r, v, n), (g = t.memoizedState)),
        (u = Or || Ep(t, r, u, n, f, g, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate !== "function" && typeof o.componentWillUpdate !== "function") ||
              (typeof o.componentWillUpdate === "function" && o.componentWillUpdate(n, g, l),
              typeof o.UNSAFE_componentWillUpdate === "function" && o.UNSAFE_componentWillUpdate(n, g, l)),
            typeof o.componentDidUpdate === "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate === "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate !== "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate !== "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = g)),
        (o.props = n),
        (o.state = g),
        (o.context = l),
        (n = u))
      : (typeof o.componentDidUpdate !== "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate !== "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (n = !1));
  }
  return hc(e, t, r, n, s, i);
}
function hc(e, t, r, n, i, s) {
  pv(e, t);
  var o = (t.flags & 128) !== 0;
  if (!(n || o)) return i && mp(t, r, !1), hr(e, t, s);
  (n = t.stateNode), (V1.current = t);
  var a = o && typeof r.getDerivedStateFromError !== "function" ? null : n.render();
  return (
    (t.flags |= 1),
    e !== null && o ? ((t.child = ui(t, e.child, null, s)), (t.child = ui(t, null, a, s))) : Ye(e, t, a, s),
    (t.memoizedState = n.state),
    i && mp(t, r, !0),
    t.child
  );
}
function hv(e) {
  var t = e.stateNode;
  t.pendingContext ? hp(e, t.pendingContext, t.pendingContext !== t.context) : t.context && hp(e, t.context, !1),
    Dd(e, t.containerInfo);
}
function Ap(e, t, r, n, i) {
  return li(), xd(i), (t.flags |= 256), Ye(e, t, r, n), t.child;
}
var mc = { dehydrated: null, treeContext: null, retryLane: 0 };
function yc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function mv(e, t, r) {
  var n = t.pendingProps;
  var i = ye.current;
  var s = !1;
  var o = (t.flags & 128) !== 0;
  var a;
  if (
    ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a ? ((s = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1),
    ce(ye, i & 1),
    e === null)
  )
    return (
      lc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
        : ((o = n.children),
          (e = n.fallback),
          s
            ? ((n = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(n & 1) && s !== null ? ((s.childLanes = 0), (s.pendingProps = o)) : (s = za(o, n, 0, null)),
              (e = un(e, n, r, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = yc(r)),
              (t.memoizedState = mc),
              e)
            : jd(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null))) return K1(e, t, o, n, a, i, r);
  if (s) {
    (s = n.fallback), (o = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: "hidden", children: n.children };
    return (
      !(o & 1) && t.child !== i
        ? ((n = t.child), (n.childLanes = 0), (n.pendingProps = l), (t.deletions = null))
        : ((n = qr(i, l)), (n.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = qr(a, s)) : ((s = un(s, o, r, null)), (s.flags |= 2)),
      (s.return = t),
      (n.return = t),
      (n.sibling = s),
      (t.child = n),
      (n = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o = o === null ? yc(r) : { baseLanes: o.baseLanes | r, cachePool: null, transitions: o.transitions }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~r),
      (t.memoizedState = mc),
      n
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (n = qr(s, { mode: "visible", children: n.children })),
    !(t.mode & 1) && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null && ((r = t.deletions), r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = n),
    (t.memoizedState = null),
    n
  );
}
function jd(e, t) {
  return (t = za({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function fo(e, t, r, n) {
  return (
    n !== null && xd(n),
    ui(t, e.child, null, r),
    (e = jd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function K1(e, t, r, n, i, s, o) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (n = Ul(Error(F(422)))), fo(e, t, o, n))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = n.fallback),
        (i = t.mode),
        (n = za({ mode: "visible", children: n.children }, i, 0, null)),
        (s = un(s, i, o, null)),
        (s.flags |= 2),
        (n.return = t),
        (s.return = t),
        (n.sibling = s),
        (t.child = n),
        t.mode & 1 && ui(t, e.child, null, o),
        (t.child.memoizedState = yc(o)),
        (t.memoizedState = mc),
        s);
  if (!(t.mode & 1)) return fo(e, t, o, null);
  if (i.data === "$!") {
    if (((n = i.nextSibling?.dataset), n)) var a = n.dgst;
    return (n = a), (s = Error(F(419))), (n = Ul(s, n, void 0)), fo(e, t, o, n);
  }
  if (((a = (o & e.childLanes) !== 0), nt || a)) {
    if (((n = Ne), n !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (n.suspendedLanes | o) ? 0 : i),
        i !== 0 && i !== s.retryLane && ((s.retryLane = i), pr(e, i), Nt(n, e, i, -1));
    }
    return Qd(), (n = Ul(Error(F(421)))), fo(e, t, o, n);
  }
  return i.data === "$?"
    ? ((t.flags |= 128), (t.child = e.child), (t = lE.bind(null, e)), (i._reactRetry = t), null)
    : ((e = s.treeContext),
      (ct = Nr(i.nextSibling)),
      (dt = t),
      (he = !0),
      (Dt = null),
      e !== null && ((gt[St++] = or), (gt[St++] = ar), (gt[St++] = pn), (or = e.id), (ar = e.overflow), (pn = t)),
      (t = jd(t, n.children)),
      (t.flags |= 4096),
      t);
}
function _p(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), uc(e.return, t, r);
}
function jl(e, t, r, n, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: n, tail: r, tailMode: i })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = n),
      (s.tail = r),
      (s.tailMode = i));
}
function yv(e, t, r) {
  var n = t.pendingProps;
  var i = n.revealOrder;
  var s = n.tail;
  if ((Ye(e, t, n.children, r), (n = ye.current), n & 2)) (n = (n & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && _p(e, r, t);
        else if (e.tag === 19) _p(e, r, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        while (e.sibling === null) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    n &= 1;
  }
  if ((ce(ye, n), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (r = t.child, i = null; r !== null; )
          (e = r.alternate), e !== null && ca(e) === null && (i = r), (r = r.sibling);
        (r = i),
          r === null ? ((i = t.child), (t.child = null)) : ((i = r.sibling), (r.sibling = null)),
          jl(t, !1, i, r, s);
        break;
      case "backwards":
        for (r = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && ca(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = r), (r = i), (i = e);
        }
        jl(t, !0, r, null, s);
        break;
      case "together":
        jl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Lo(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function hr(e, t, r) {
  if ((e !== null && (t.dependencies = e.dependencies), (mn |= t.lanes), !(r & t.childLanes))) return null;
  if (e !== null && t.child !== e.child) throw Error(F(153));
  if (t.child !== null) {
    for (e = t.child, r = qr(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; )
      (e = e.sibling), (r = r.sibling = qr(e, e.pendingProps)), (r.return = t);
    r.sibling = null;
  }
  return t.child;
}
function J1(e, t, r) {
  switch (t.tag) {
    case 3:
      hv(t), li();
      break;
    case 5:
      zy(t);
      break;
    case 1:
      st(t.type) && ia(t);
      break;
    case 4:
      Dd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context;
      var i = t.memoizedProps.value;
      ce(aa, n._currentValue), (n._currentValue = i);
      break;
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (ce(ye, ye.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
          ? mv(e, t, r)
          : (ce(ye, ye.current & 1), (e = hr(e, t, r)), e !== null ? e.sibling : null);
      ce(ye, ye.current & 1);
      break;
    case 19:
      if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (n) return yv(e, t, r);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ce(ye, ye.current),
        n)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), fv(e, t, r);
  }
  return hr(e, t, r);
}
var vv;
var vc;
var gv;
var Sv;
vv = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === t) break;
    while (r.sibling === null) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
};
vc = function () {};
gv = function (e, t, r, n) {
  var i = e.memoizedProps;
  if (i !== n) {
    (e = t.stateNode), sn(Kt.current);
    var s = null;
    switch (r) {
      case "input":
        (i = qu(e, i)), (n = qu(e, n)), (s = []);
        break;
      case "select":
        (i = ge({}, i, { value: void 0 })), (n = ge({}, n, { value: void 0 })), (s = []);
        break;
      case "textarea":
        (i = Bu(e, i)), (n = Bu(e, n)), (s = []);
        break;
      default:
        typeof i.onClick !== "function" && typeof n.onClick === "function" && (e.onclick = ra);
    }
    Gu(r, n);
    var o;
    r = null;
    for (u in i)
      if (!n.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (o in a) a.hasOwnProperty(o) && (r || (r = {}), (r[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (cs.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
    for (u in n) {
      var l = n[u];
      if (((a = i != null ? i[u] : void 0), n.hasOwnProperty(u) && l !== a && (l != null || a != null)))
        if (u === "style")
          if (a) {
            for (o in a) !a.hasOwnProperty(o) || (l?.hasOwnProperty(o)) || (r || (r = {}), (r[o] = ""));
            for (o in l) l.hasOwnProperty(o) && a[o] !== l[o] && (r || (r = {}), (r[o] = l[o]));
          } else r || (s || (s = []), s.push(u, r)), (r = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(u, l))
            : u === "children"
            ? (typeof l !== "string" && typeof l !== "number") || (s = s || []).push(u, `${l}`)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (cs.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && fe("scroll", e), s || a === l || (s = []))
                : (s = s || []).push(u, l));
    }
    r && (s = s || []).push("style", r);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Sv = function (e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function qi(e, t) {
  if (!he)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; ) t.alternate !== null && (r = t), (t = t.sibling);
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = e.tail;
        for (var n = null; r !== null; ) r.alternate !== null && (n = r), (r = r.sibling);
        n === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (n.sibling = null);
    }
}
function Qe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child;
  var r = 0;
  var n = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (r |= i.lanes | i.childLanes),
        (n |= i.subtreeFlags & 14680064),
        (n |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (r |= i.lanes | i.childLanes), (n |= i.subtreeFlags), (n |= i.flags), (i.return = e), (i = i.sibling);
  return (e.subtreeFlags |= n), (e.childLanes = r), t;
}
function X1(e, t, r) {
  var n = t.pendingProps;
  switch ((Td(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Qe(t), null;
    case 1:
      return st(t.type) && na(), Qe(t), null;
    case 3:
      return (
        (n = t.stateNode),
        ci(),
        pe(it),
        pe(Ke),
        Nd(),
        n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (uo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Dt !== null && (Cc(Dt), (Dt = null)))),
        vc(e, t),
        Qe(t),
        null
      );
    case 5:
      Ld(t);
      var i = sn(Ps.current);
      if (((r = t.type), e !== null && t.stateNode != null))
        gv(e, t, r, n, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(F(166));
          return Qe(t), null;
        }
        if (((e = sn(Kt.current)), uo(t))) {
          (n = t.stateNode), (r = t.type);
          var s = t.memoizedProps;
          switch (((n[Ht] = t), (n[Es] = s), (e = (t.mode & 1) !== 0), r)) {
            case "dialog":
              fe("cancel", n), fe("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              fe("load", n);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Vi.length; i++) fe(Vi[i], n);
              break;
            case "source":
              fe("error", n);
              break;
            case "img":
            case "image":
            case "link":
              fe("error", n), fe("load", n);
              break;
            case "details":
              fe("toggle", n);
              break;
            case "input":
              jf(n, s), fe("invalid", n);
              break;
            case "select":
              (n._wrapperState = { wasMultiple: !!s.multiple }), fe("invalid", n);
              break;
            case "textarea":
              zf(n, s), fe("invalid", n);
          }
          Gu(r, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a === "string"
                  ? n.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 && lo(n.textContent, a, e), (i = ["children", a]))
                  : typeof a === "number" &&
                    n.textContent !== `${a}` &&
                    (s.suppressHydrationWarning !== !0 && lo(n.textContent, a, e), (i = ["children", `${a}`]))
                : cs.hasOwnProperty(o) && a != null && o === "onScroll" && fe("scroll", n);
            }
          switch (r) {
            case "input":
              eo(n), Bf(n, s, !0);
              break;
            case "textarea":
              eo(n), Gf(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick === "function" && (n.onclick = ra);
          }
          (n = i), (t.updateQueue = n), n !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Wm(r)),
            e === "http://www.w3.org/1999/xhtml"
              ? r === "script"
                ? ((e = o.createElement("div")), (e.innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                : typeof n.is === "string"
                ? (e = o.createElement(r, { is: n.is }))
                : ((e = o.createElement(r)),
                  r === "select" && ((o = e), n.multiple ? (o.multiple = !0) : n.size && (o.size = n.size)))
              : (e = o.createElementNS(e, r)),
            (e[Ht] = t),
            (e[Es] = n),
            vv(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Hu(r, n)), r)) {
              case "dialog":
                fe("cancel", e), fe("close", e), (i = n);
                break;
              case "iframe":
              case "object":
              case "embed":
                fe("load", e), (i = n);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Vi.length; i++) fe(Vi[i], e);
                i = n;
                break;
              case "source":
                fe("error", e), (i = n);
                break;
              case "img":
              case "image":
              case "link":
                fe("error", e), fe("load", e), (i = n);
                break;
              case "details":
                fe("toggle", e), (i = n);
                break;
              case "input":
                jf(e, n), (i = qu(e, n)), fe("invalid", e);
                break;
              case "option":
                i = n;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!n.multiple }), (i = ge({}, n, { value: void 0 })), fe("invalid", e);
                break;
              case "textarea":
                zf(e, n), (i = Bu(e, n)), fe("invalid", e);
                break;
              default:
                i = n;
            }
            Gu(r, i), (a = i);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === "style"
                  ? Km(e, l)
                  : s === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Qm(e, l))
                  : s === "children"
                  ? typeof l === "string"
                    ? (r !== "textarea" || l !== "") && ds(e, l)
                    : typeof l === "number" && ds(e, `${l}`)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (cs.hasOwnProperty(s)
                      ? l != null && s === "onScroll" && fe("scroll", e)
                      : l != null && dd(e, s, l, o));
              }
            switch (r) {
              case "input":
                eo(e), Bf(e, n, !1);
                break;
              case "textarea":
                eo(e), Gf(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", `${Ur(n.value)}`);
                break;
              case "select":
                (e.multiple = !!n.multiple),
                  (s = n.value),
                  s != null
                    ? Jn(e, !!n.multiple, s, !1)
                    : n.defaultValue != null && Jn(e, !!n.multiple, n.defaultValue, !0);
                break;
              default:
                typeof i.onClick === "function" && (e.onclick = ra);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Qe(t), null;
    case 6:
      if (e && t.stateNode != null) Sv(e, t, e.memoizedProps, n);
      else {
        if (typeof n !== "string" && t.stateNode === null) throw Error(F(166));
        if (((r = sn(Ps.current)), sn(Kt.current), uo(t))) {
          if (
            ((n = t.stateNode), (r = t.memoizedProps), (n[Ht] = t), (s = n.nodeValue !== r) && ((e = dt), e !== null))
          )
            switch (e.tag) {
              case 3:
                lo(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && lo(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)), (n[Ht] = t), (t.stateNode = n);
      }
      return Qe(t), null;
    case 13:
      if (
        (pe(ye), (n = t.memoizedState), e === null || (e.memoizedState?.dehydrated !== null))
      ) {
        if (he && ct !== null && t.mode & 1 && !(t.flags & 128)) Fy(), li(), (t.flags |= 98560), (s = !1);
        else if (((s = uo(t)), n?.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(F(318));
            if (((s = t.memoizedState), (s = s !== null ? s.dehydrated : null), !s)) throw Error(F(317));
            s[Ht] = t;
          } else li(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Qe(t), (s = !1);
        } else Dt !== null && (Cc(Dt), (Dt = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((n = n !== null),
          n !== (e?.memoizedState !== null) &&
            n &&
            ((t.child.flags |= 8192), t.mode & 1 && (e === null || ye.current & 1 ? ke === 0 && (ke = 3) : Qd())),
          t.updateQueue !== null && (t.flags |= 4),
          Qe(t),
          null);
    case 4:
      return ci(), vc(e, t), e === null && gs(t.stateNode.containerInfo), Qe(t), null;
    case 10:
      return kd(t.type._context), Qe(t), null;
    case 17:
      return st(t.type) && na(), Qe(t), null;
    case 19:
      if ((pe(ye), (s = t.memoizedState), s === null)) return Qe(t), null;
      if (((n = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (n) qi(s, !1);
        else {
          if (ke !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = ca(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    qi(s, !1),
                    n = o.updateQueue,
                    n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    n = r,
                    r = t.child;
                  r !== null;
                )
                  (s = r),
                    (e = n),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (r = r.sibling);
                return ce(ye, (ye.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null && $e() > fi && ((t.flags |= 128), (n = !0), qi(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!n)
          if (((e = ca(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              qi(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !he)
            )
              return Qe(t), null;
          } else
            2 * $e() - s.renderingStartTime > fi &&
              r !== 1073741824 &&
              ((t.flags |= 128), (n = !0), qi(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((r = s.last), r !== null ? (r.sibling = o) : (t.child = o), (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = $e()),
          (t.sibling = null),
          (r = ye.current),
          ce(ye, n ? (r & 1) | 2 : r & 1),
          t)
        : (Qe(t), null);
    case 22:
    case 23:
      return (
        Wd(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && t.mode & 1 ? ut & 1073741824 && (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Qe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(F(156, t.tag));
}
function Y1(e, t) {
  switch ((Td(t), t.tag)) {
    case 1:
      return st(t.type) && na(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 3:
      return (
        ci(), pe(it), pe(Ke), Nd(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ld(t), null;
    case 13:
      if ((pe(ye), (e = t.memoizedState), e?.dehydrated !== null)) {
        if (t.alternate === null) throw Error(F(340));
        li();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return pe(ye), null;
    case 4:
      return ci(), null;
    case 10:
      return kd(t.type._context), null;
    case 22:
    case 23:
      return Wd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var po = !1;
var Ve = !1;
var Z1 = typeof WeakSet === "function" ? WeakSet : Set;
var q = null;
function Qn(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r === "function")
      try {
        r(null);
      } catch (n) {
        we(e, t, n);
      }
    else r.current = null;
}
function gc(e, t, r) {
  try {
    r();
  } catch (n) {
    we(e, t, n);
  }
}
var Dp = !1;
function eE(e, t) {
  if (((tc = Zo), (e = $y()), Od(e))) {
    if ("selectionStart" in e) var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window;
        var n = r.getSelection?.();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var i = n.anchorOffset;
          var s = n.focusNode;
          n = n.focusOffset;
          try {
            r.nodeType, s.nodeType;
          } catch {
            r = null;
            break e;
          }
          var o = 0;
          var a = -1;
          var l = -1;
          var u = 0;
          var c = 0;
          var d = e;
          var f = null;
          t: for (;;) {
            for (
              var v;
              d !== r || (i !== 0 && d.nodeType !== 3) || (a = o + i),
                d !== s || (n !== 0 && d.nodeType !== 3) || (l = o + n),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (v = d.firstChild) !== null;
            )
              (f = d), (d = v);
            for (;;) {
              if (d === e) break t;
              if ((f === r && ++u === i && (a = o), f === s && ++c === n && (l = o), (v = d.nextSibling) !== null))
                break;
              (d = f), (f = d.parentNode);
            }
            d = v;
          }
          r = a === -1 || l === -1 ? null : { start: a, end: l };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (rc = { focusedElem: e, selectionRange: r }, Zo = !1, q = t; q !== null; )
    if (((t = q), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (q = e);
    else
      while (q !== null) {
        t = q;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var m = g.memoizedProps;
                  var w = g.memoizedState;
                  var p = t.stateNode;
                  var h = p.getSnapshotBeforeUpdate(t.elementType === t.type ? m : At(t.type, m), w);
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(F(163));
            }
        } catch (S) {
          we(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (q = e);
          break;
        }
        q = t.return;
      }
  return (g = Dp), (Dp = !1), g;
}
function ns(e, t, r) {
  var n = t.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var i = (n = n.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && gc(t, r, s);
      }
      i = i.next;
    } while (i !== n);
  }
}
function ja(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var r = (t = t.next);
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function Sc(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t === "function" ? t(e) : (t.current = e);
  }
}
function Ev(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ev(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode), t !== null && (t[Ht] = undefined, t[Es] = undefined, t[sc] = undefined, t[F1] = undefined, t[M1] = undefined)),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function wv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Lp(e) {
  e: for (;;) {
    while (e.sibling === null) {
      if (e.return === null || wv(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ec(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8 ? ((t = r.parentNode), t.insertBefore(e, r)) : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = ra));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Ec(e, t, r), e = e.sibling; e !== null; ) Ec(e, t, r), (e = e.sibling);
}
function wc(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6) (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && ((e = e.child), e !== null))
    for (wc(e, t, r), e = e.sibling; e !== null; ) wc(e, t, r), (e = e.sibling);
}
var qe = null;
var _t = !1;
function Er(e, t, r) {
  for (r = r.child; r !== null; ) Pv(e, t, r), (r = r.sibling);
}
function Pv(e, t, r) {
  if (Vt && typeof Vt.onCommitFiberUnmount === "function")
    try {
      Vt.onCommitFiberUnmount(Da, r);
    } catch {}
  switch (r.tag) {
    case 5:
      Ve || Qn(r, t);
    case 6:
      var n = qe;
      var i = _t;
      (qe = null),
        Er(e, t, r),
        (qe = n),
        (_t = i),
        qe !== null &&
          (_t
            ? ((e = qe), (r = r.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : qe.removeChild(r.stateNode));
      break;
    case 18:
      qe !== null &&
        (_t
          ? ((e = qe), (r = r.stateNode), e.nodeType === 8 ? Ll(e.parentNode, r) : e.nodeType === 1 && Ll(e, r), ms(e))
          : Ll(qe, r.stateNode));
      break;
    case 4:
      (n = qe), (i = _t), (qe = r.stateNode.containerInfo), (_t = !0), Er(e, t, r), (qe = n), (_t = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ve && ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))) {
        i = n = n.next;
        do {
          var s = i;
          var o = s.destroy;
          (s = s.tag), o !== void 0 && (s & 2 || s & 4) && gc(r, t, o), (i = i.next);
        } while (i !== n);
      }
      Er(e, t, r);
      break;
    case 1:
      if (!Ve && (Qn(r, t), (n = r.stateNode), typeof n.componentWillUnmount === "function"))
        try {
          (n.props = r.memoizedProps), (n.state = r.memoizedState), n.componentWillUnmount();
        } catch (a) {
          we(r, t, a);
        }
      Er(e, t, r);
      break;
    case 21:
      Er(e, t, r);
      break;
    case 22:
      r.mode & 1 ? ((Ve = (n = Ve) || r.memoizedState !== null), Er(e, t, r), (Ve = n)) : Er(e, t, r);
      break;
    default:
      Er(e, t, r);
  }
}
function Np(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new Z1()),
      t.forEach(function (n) {
        var i = uE.bind(null, e, n);
        r.has(n) || (r.add(n), n.then(i, i));
      });
  }
}
function kt(e, t) {
  var r = t.deletions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var i = r[n];
      try {
        var s = e;
        var o = t;
        var a = o;
        e: while (a !== null) {
          switch (a.tag) {
            case 5:
              (qe = a.stateNode), (_t = !1);
              break e;
            case 3:
              (qe = a.stateNode.containerInfo), (_t = !0);
              break e;
            case 4:
              (qe = a.stateNode.containerInfo), (_t = !0);
              break e;
          }
          a = a.return;
        }
        if (qe === null) throw Error(F(160));
        Pv(s, o, i), (qe = null), (_t = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        we(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) $v(t, e), (t = t.sibling);
}
function $v(e, t) {
  var r = e.alternate;
  var n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((kt(t, e), Ut(e), n & 4)) {
        try {
          ns(3, e, e.return), ja(3, e);
        } catch (m) {
          we(e, e.return, m);
        }
        try {
          ns(5, e, e.return);
        } catch (m) {
          we(e, e.return, m);
        }
      }
      break;
    case 1:
      kt(t, e), Ut(e), n & 512 && r !== null && Qn(r, r.return);
      break;
    case 5:
      if ((kt(t, e), Ut(e), n & 512 && r !== null && Qn(r, r.return), e.flags & 32)) {
        var i = e.stateNode;
        try {
          ds(i, "");
        } catch (m) {
          we(e, e.return, m);
        }
      }
      if (n & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps;
        var o = r !== null ? r.memoizedProps : s;
        var a = e.type;
        var l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && s.type === "radio" && s.name != null && Gm(i, s), Hu(a, o);
            var u = Hu(a, s);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o];
              var d = l[o + 1];
              c === "style"
                ? Km(i, d)
                : c === "dangerouslySetInnerHTML"
                ? Qm(i, d)
                : c === "children"
                ? ds(i, d)
                : dd(i, c, d, u);
            }
            switch (a) {
              case "input":
                Uu(i, s);
                break;
              case "textarea":
                Hm(i, s);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var v = s.value;
                v != null
                  ? Jn(i, !!s.multiple, v, !1)
                  : f !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Jn(i, !!s.multiple, s.defaultValue, !0)
                      : Jn(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[Es] = s;
          } catch (m) {
            we(e, e.return, m);
          }
      }
      break;
    case 6:
      if ((kt(t, e), Ut(e), n & 4)) {
        if (e.stateNode === null) throw Error(F(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (m) {
          we(e, e.return, m);
        }
      }
      break;
    case 3:
      if ((kt(t, e), Ut(e), n & 4 && r !== null && r.memoizedState.isDehydrated))
        try {
          ms(t.containerInfo);
        } catch (m) {
          we(e, e.return, m);
        }
      break;
    case 4:
      kt(t, e), Ut(e);
      break;
    case 13:
      kt(t, e),
        Ut(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s || (i.alternate?.memoizedState !== null) || (Gd = $e())),
        n & 4 && Np(e);
      break;
    case 22:
      if (
        ((c = r?.memoizedState !== null),
        e.mode & 1 ? ((Ve = (u = Ve) || c), kt(t, e), (Ve = u)) : kt(t, e),
        Ut(e),
        n & 8192)
      ) {
        if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !c && e.mode & 1))
          for (q = e, c = e.child; c !== null; ) {
            for (d = q = c; q !== null; ) {
              switch (((f = q), (v = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ns(4, f, f.return);
                  break;
                case 1:
                  Qn(f, f.return);
                  var g = f.stateNode;
                  if (typeof g.componentWillUnmount === "function") {
                    (n = f), (r = f.return);
                    try {
                      (t = n), (g.props = t.memoizedProps), (g.state = t.memoizedState), g.componentWillUnmount();
                    } catch (m) {
                      we(n, r, m);
                    }
                  }
                  break;
                case 5:
                  Qn(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Mp(d);
                    continue;
                  }
              }
              v !== null ? ((v.return = f), (q = v)) : Mp(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty === "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (o = l?.hasOwnProperty("display") ? l.display : null),
                      (a.style.display = Vm("display", o)));
              } catch (m) {
                we(e, e.return, m);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (m) {
                we(e, e.return, m);
              }
          } else if (((d.tag !== 22 && d.tag !== 23) || d.memoizedState === null || d === e) && d.child !== null) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          while (d.sibling === null) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      kt(t, e), Ut(e), n & 4 && Np(e);
      break;
    case 21:
      break;
    default:
      kt(t, e), Ut(e);
  }
}
function Ut(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (wv(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(F(160));
      }
      switch (n.tag) {
        case 5:
          var i = n.stateNode;
          n.flags & 32 && (ds(i, ""), (n.flags &= -33));
          var s = Lp(e);
          wc(e, s, i);
          break;
        case 3:
        case 4:
          var o = n.stateNode.containerInfo;
          var a = Lp(e);
          Ec(e, a, o);
          break;
        default:
          throw Error(F(161));
      }
    } catch (l) {
      we(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function tE(e, t, r) {
  (q = e), Ov(e);
}
function Ov(e, t, r) {
  for (var n = (e.mode & 1) !== 0; q !== null; ) {
    var i = q;
    var s = i.child;
    if (i.tag === 22 && n) {
      var o = i.memoizedState !== null || po;
      if (!o) {
        var a = i.alternate;
        var l = (a?.memoizedState !== null) || Ve;
        a = po;
        var u = Ve;
        if (((po = o), (Ve = l) && !u))
          for (q = i; q !== null; )
            (o = q),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null ? Ip(i) : l !== null ? ((l.return = o), (q = l)) : Ip(i);
        while (s !== null) (q = s), Ov(s), (s = s.sibling);
        (q = i), (po = a), (Ve = u);
      }
      Fp(e);
    } else i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (q = s)) : Fp(e);
  }
}
function Fp(e) {
  while (q !== null) {
    var t = q;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ve || ja(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !Ve)
                if (r === null) n.componentDidMount();
                else {
                  var i = t.elementType === t.type ? r.memoizedProps : At(t.type, r.memoizedProps);
                  n.componentDidUpdate(i, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate);
                }
              var s = t.updateQueue;
              s !== null && Sp(t, s, n);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                Sp(t, o, r);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (r === null && t.flags & 4) {
                r = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && r.focus();
                    break;
                  case "img":
                    l.src && (r.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && ms(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(F(163));
          }
        Ve || (t.flags & 512 && Sc(t));
      } catch (f) {
        we(t, t.return, f);
      }
    }
    if (t === e) {
      q = null;
      break;
    }
    if (((r = t.sibling), r !== null)) {
      (r.return = t.return), (q = r);
      break;
    }
    q = t.return;
  }
}
function Mp(e) {
  while (q !== null) {
    var t = q;
    if (t === e) {
      q = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      (r.return = t.return), (q = r);
      break;
    }
    q = t.return;
  }
}
function Ip(e) {
  while (q !== null) {
    var t = q;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            ja(4, t);
          } catch (l) {
            we(t, r, l);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount === "function") {
            var i = t.return;
            try {
              n.componentDidMount();
            } catch (l) {
              we(t, i, l);
            }
          }
          var s = t.return;
          try {
            Sc(t);
          } catch (l) {
            we(t, s, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Sc(t);
          } catch (l) {
            we(t, o, l);
          }
      }
    } catch (l) {
      we(t, t.return, l);
    }
    if (t === e) {
      q = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (q = a);
      break;
    }
    q = t.return;
  }
}
var rE = Math.ceil;
var pa = yr.ReactCurrentDispatcher;
var Bd = yr.ReactCurrentOwner;
var Pt = yr.ReactCurrentBatchConfig;
var ie = 0;
var Ne = null;
var xe = null;
var Be = 0;
var ut = 0;
var Vn = Wr(0);
var ke = 0;
var Ts = null;
var mn = 0;
var Ba = 0;
var zd = 0;
var is = null;
var rt = null;
var Gd = 0;
var fi = 1 / 0;
var rr = null;
var ha = !1;
var Pc = null;
var Mr = null;
var ho = !1;
var kr = null;
var ma = 0;
var ss = 0;
var $c = null;
var No = -1;
var Fo = 0;
function Ze() {
  return ie & 6 ? $e() : No !== -1 ? No : (No = $e());
}
function Ir(e) {
  return e.mode & 1
    ? ie & 2 && Be !== 0
      ? Be & -Be
      : q1.transition !== null
      ? (Fo === 0 && (Fo = ay()), Fo)
      : ((e = le), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : hy(e.type))), e)
    : 1;
}
function Nt(e, t, r, n) {
  if (50 < ss) throw ((ss = 0), ($c = null), Error(F(185)));
  Ns(e, r, n),
    (!(ie & 2) || e !== Ne) &&
      (e === Ne && (!(ie & 2) && (Ba |= r), ke === 4 && Rr(e, Be)),
      ot(e, n),
      r === 1 && ie === 0 && !(t.mode & 1) && ((fi = $e() + 500), Ia && Qr()));
}
function ot(e, t) {
  var r = e.callbackNode;
  qS(e, t);
  var n = Yo(e, e === Ne ? Be : 0);
  if (n === 0) r !== null && Qf(r), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && Qf(r), t === 1))
      e.tag === 0 ? I1(qp.bind(null, e)) : Dy(qp.bind(null, e)),
        L1(function () {
          !(ie & 6) && Qr();
        }),
        (r = null);
    else {
      switch (ly(n)) {
        case 1:
          r = yd;
          break;
        case 4:
          r = sy;
          break;
        case 16:
          r = Xo;
          break;
        case 536870912:
          r = oy;
          break;
        default:
          r = Xo;
      }
      r = _v(r, Cv.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = r);
  }
}
function Cv(e, t) {
  if (((No = -1), (Fo = 0), ie & 6)) throw Error(F(327));
  var r = e.callbackNode;
  if (ti() && e.callbackNode !== r) return null;
  var n = Yo(e, e === Ne ? Be : 0);
  if (n === 0) return null;
  if (n & 30 || n & e.expiredLanes || t) t = ya(e, n);
  else {
    t = n;
    var i = ie;
    ie |= 2;
    var s = xv();
    (Ne !== e || Be !== t) && ((rr = null), (fi = $e() + 500), ln(e, t));
    do
      try {
        sE();
        break;
      } catch (a) {
        Tv(e, a);
      }
    while (1);
    bd(), (pa.current = s), (ie = i), xe !== null ? (t = 0) : ((Ne = null), (Be = 0), (t = ke));
  }
  if (t !== 0) {
    if ((t === 2 && ((i = Ju(e)), i !== 0 && ((n = i), (t = Oc(e, i)))), t === 1))
      throw ((r = Ts), ln(e, 0), Rr(e, n), ot(e, $e()), r);
    if (t === 6) Rr(e, n);
    else {
      if (
        ((i = e.current.alternate),
        !((n & 30) ||nE(i) ) &&
          ((t = ya(e, n)), t === 2 && ((s = Ju(e)), s !== 0 && ((n = s), (t = Oc(e, s)))), t === 1))
      )
        throw ((r = Ts), ln(e, 0), Rr(e, n), ot(e, $e()), r);
      switch (((e.finishedWork = i), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(F(345));
        case 2:
          Yr(e, rt, rr);
          break;
        case 3:
          if ((Rr(e, n), (n & 130023424) === n && ((t = Gd + 500 - $e()), 10 < t))) {
            if (Yo(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & n) !== n)) {
              Ze(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = ic(Yr.bind(null, e, rt, rr), t);
            break;
          }
          Yr(e, rt, rr);
          break;
        case 4:
          if ((Rr(e, n), (n & 4194240) === n)) break;
          for (t = e.eventTimes, i = -1; 0 < n; ) {
            var o = 31 - Lt(n);
            (s = 1 << o), (o = t[o]), o > i && (i = o), (n &= ~s);
          }
          if (
            ((n = i),
            (n = $e() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                ? 480
                : 1080 > n
                ? 1080
                : 1920 > n
                ? 1920
                : 3e3 > n
                ? 3e3
                : 4320 > n
                ? 4320
                : 1960 * rE(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = ic(Yr.bind(null, e, rt, rr), n);
            break;
          }
          Yr(e, rt, rr);
          break;
        case 5:
          Yr(e, rt, rr);
          break;
        default:
          throw Error(F(329));
      }
    }
  }
  return ot(e, $e()), e.callbackNode === r ? Cv.bind(null, e) : null;
}
function Oc(e, t) {
  var r = is;
  return (
    e.current.memoizedState.isDehydrated && (ln(e, t).flags |= 256),
    (e = ya(e, t)),
    e !== 2 && ((t = rt), (rt = r), t !== null && Cc(t)),
    e
  );
}
function Cc(e) {
  rt === null ? (rt = e) : rt.push.apply(rt, e);
}
function nE(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var i = r[n];
          var s = i.getSnapshot;
          i = i.value;
          try {
            if (!Mt(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null)) (r.return = t), (t = r);
    else {
      if (t === e) break;
      while (t.sibling === null) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Rr(e, t) {
  for (t &= ~zd, t &= ~Ba, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var r = 31 - Lt(t);
    var n = 1 << r;
    (e[r] = -1), (t &= ~n);
  }
}
function qp(e) {
  if (ie & 6) throw Error(F(327));
  ti();
  var t = Yo(e, 0);
  if (!(t & 1)) return ot(e, $e()), null;
  var r = ya(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = Ju(e);
    n !== 0 && ((t = n), (r = Oc(e, n)));
  }
  if (r === 1) throw ((r = Ts), ln(e, 0), Rr(e, t), ot(e, $e()), r);
  if (r === 6) throw Error(F(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Yr(e, rt, rr), ot(e, $e()), null;
}
function Hd(e, t) {
  var r = ie;
  ie |= 1;
  try {
    return e(t);
  } finally {
    (ie = r), ie === 0 && ((fi = $e() + 500), Ia && Qr());
  }
}
function yn(e) {
  kr !== null && kr.tag === 0 && !(ie & 6) && ti();
  var t = ie;
  ie |= 1;
  var r = Pt.transition;
  var n = le;
  try {
    if (((Pt.transition = null), (le = 1), e)) return e();
  } finally {
    (le = n), (Pt.transition = r), (ie = t), !(ie & 6) && Qr();
  }
}
function Wd() {
  (ut = Vn.current), pe(Vn);
}
function ln(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), D1(r)), xe !== null))
    for (r = xe.return; r !== null; ) {
      var n = r;
      switch ((Td(n), n.tag)) {
        case 1:
          (n = n.type.childContextTypes), n != null && na();
          break;
        case 3:
          ci(), pe(it), pe(Ke), Nd();
          break;
        case 5:
          Ld(n);
          break;
        case 4:
          ci();
          break;
        case 13:
          pe(ye);
          break;
        case 19:
          pe(ye);
          break;
        case 10:
          kd(n.type._context);
          break;
        case 22:
        case 23:
          Wd();
      }
      r = r.return;
    }
  if (
    ((Ne = e),
    (xe = e = qr(e.current, null)),
    (Be = ut = t),
    (ke = 0),
    (Ts = null),
    (zd = Ba = mn = 0),
    (rt = is = null),
    nn !== null)
  ) {
    for (t = 0; t < nn.length; t++)
      if (((r = nn[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null;
        var i = n.next;
        var s = r.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (n.next = o);
        }
        r.pending = n;
      }
    nn = null;
  }
  return e;
}
function Tv(e, t) {
  do {
    var r = xe;
    try {
      if ((bd(), (_o.current = fa), da)) {
        for (var n = ve.memoizedState; n !== null; ) {
          var i = n.queue;
          i !== null && (i.pending = null), (n = n.next);
        }
        da = !1;
      }
      if (
        ((hn = 0), (Le = be = ve = null), (rs = !1), ($s = 0), (Bd.current = null), r === null || r.return === null)
      ) {
        (ke = 1), (Ts = t), (xe = null);
        break;
      }
      e: {
        var s = e;
        var o = r.return;
        var a = r;
        var l = t;
        if (((t = Be), (a.flags |= 32768), l !== null && typeof l === "object" && typeof l.then === "function")) {
          var u = l;
          var c = a;
          var d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue), (c.memoizedState = f.memoizedState), (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var v = Tp(o);
          if (v !== null) {
            (v.flags &= -257), xp(v, o, a, s, t), v.mode & 1 && Cp(s, u, t), (t = v), (l = u);
            var g = t.updateQueue;
            if (g === null) {
              var m = new Set();
              m.add(l), (t.updateQueue = m);
            } else g.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Cp(s, u, t), Qd();
              break e;
            }
            l = Error(F(426));
          }
        } else if (he && a.mode & 1) {
          var w = Tp(o);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256), xp(w, o, a, s, t), xd(di(l, a));
            break e;
          }
        }
        (s = l = di(l, a)), ke !== 4 && (ke = 2), is === null ? (is = [s]) : is.push(s), (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var p = uv(s, l, t);
              gp(s, p);
              break e;
            case 1:
              a = l;
              var h = s.type;
              var y = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof h.getDerivedStateFromError === "function" ||
                  (y !== null && typeof y.componentDidCatch === "function" && (Mr === null || !Mr.has(y))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var S = cv(s, a, t);
                gp(s, S);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      bv(r);
    } catch (x) {
      (t = x), xe === r && r !== null && (xe = r = r.return);
      continue;
    }
    break;
  } while (1);
}
function xv() {
  var e = pa.current;
  return (pa.current = fa), e === null ? fa : e;
}
function Qd() {
  (ke === 0 || ke === 3 || ke === 2) && (ke = 4), Ne === null || (!((mn & 268435455) || (Ba & 268435455))) || Rr(Ne, Be);
}
function ya(e, t) {
  var r = ie;
  ie |= 2;
  var n = xv();
  (Ne !== e || Be !== t) && ((rr = null), ln(e, t));
  do
    try {
      iE();
      break;
    } catch (i) {
      Tv(e, i);
    }
  while (1);
  if ((bd(), (ie = r), (pa.current = n), xe !== null)) throw Error(F(261));
  return (Ne = null), (Be = 0), ke;
}
function iE() {
  while (xe !== null) Rv(xe);
}
function sE() {
  while (xe !== null && !kS()) Rv(xe);
}
function Rv(e) {
  var t = Av(e.alternate, e, ut);
  (e.memoizedProps = e.pendingProps), t === null ? bv(e) : (xe = t), (Bd.current = null);
}
function bv(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((r = Y1(r, t)), r !== null)) {
        (r.flags &= 32767), (xe = r);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ke = 6), (xe = null);
        return;
      }
    } else if (((r = X1(r, t, ut)), r !== null)) {
      xe = r;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      xe = t;
      return;
    }
    xe = t = e;
  } while (t !== null);
  ke === 0 && (ke = 5);
}
function Yr(e, t, r) {
  var n = le;
  var i = Pt.transition;
  try {
    (Pt.transition = null), (le = 1), oE(e, t, r, n);
  } finally {
    (Pt.transition = i), (le = n);
  }
  return null;
}
function oE(e, t, r, n) {
  do ti();
  while (kr !== null);
  if (ie & 6) throw Error(F(327));
  r = e.finishedWork;
  var i = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current)) throw Error(F(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = r.lanes | r.childLanes;
  if (
    (US(e, s),
    e === Ne && ((xe = Ne = null), (Be = 0)),
    (!((r.subtreeFlags & 2064) || (r.flags & 2064))) ||
      ho ||
      ((ho = !0),
      _v(Xo, function () {
        return ti(), null;
      })),
    (s = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || s)
  ) {
    (s = Pt.transition), (Pt.transition = null);
    var o = le;
    le = 1;
    var a = ie;
    (ie |= 4),
      (Bd.current = null),
      eE(e, r),
      $v(r, e),
      T1(rc),
      (Zo = !!tc),
      (rc = tc = null),
      (e.current = r),
      tE(r),
      AS(),
      (ie = a),
      (le = o),
      (Pt.transition = s);
  } else e.current = r;
  if (
    (ho && ((ho = !1), (kr = e), (ma = i)),
    (s = e.pendingLanes),
    s === 0 && (Mr = null),
    LS(r.stateNode),
    ot(e, $e()),
    t !== null)
  )
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      (i = t[r]), n(i.value, { componentStack: i.stack, digest: i.digest });
  if (ha) throw ((ha = !1), (e = Pc), (Pc = null), e);
  return (
    ma & 1 && e.tag !== 0 && ti(),
    (s = e.pendingLanes),
    s & 1 ? (e === $c ? ss++ : ((ss = 0), ($c = e))) : (ss = 0),
    Qr(),
    null
  );
}
function ti() {
  if (kr !== null) {
    var e = ly(ma);
    var t = Pt.transition;
    var r = le;
    try {
      if (((Pt.transition = null), (le = 16 > e ? 16 : e), kr === null)) var n = !1;
      else {
        if (((e = kr), (kr = null), (ma = 0), ie & 6)) throw Error(F(331));
        var i = ie;
        for (ie |= 4, q = e.current; q !== null; ) {
          var s = q;
          var o = s.child;
          if (q.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (q = u; q !== null; ) {
                  var c = q;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ns(8, c, s);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (q = d);
                  else
                    while (q !== null) {
                      c = q;
                      var f = c.sibling;
                      var v = c.return;
                      if ((Ev(c), c === u)) {
                        q = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = v), (q = f);
                        break;
                      }
                      q = v;
                    }
                }
              }
              var g = s.alternate;
              if (g !== null) {
                var m = g.child;
                if (m !== null) {
                  g.child = null;
                  do {
                    var w = m.sibling;
                    (m.sibling = null), (m = w);
                  } while (m !== null);
                }
              }
              q = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (q = o);
          else
            e: while (q !== null) {
              if (((s = q), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ns(9, s, s.return);
                }
              var p = s.sibling;
              if (p !== null) {
                (p.return = s.return), (q = p);
                break e;
              }
              q = s.return;
            }
        }
        var h = e.current;
        for (q = h; q !== null; ) {
          o = q;
          var y = o.child;
          if (o.subtreeFlags & 2064 && y !== null) (y.return = o), (q = y);
          else
            e: for (o = h; q !== null; ) {
              if (((a = q), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ja(9, a);
                  }
                } catch (x) {
                  we(a, a.return, x);
                }
              if (a === o) {
                q = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), (q = S);
                break e;
              }
              q = a.return;
            }
        }
        if (((ie = i), Qr(), Vt && typeof Vt.onPostCommitFiberRoot === "function"))
          try {
            Vt.onPostCommitFiberRoot(Da, e);
          } catch {}
        n = !0;
      }
      return n;
    } finally {
      (le = r), (Pt.transition = t);
    }
  }
  return !1;
}
function Up(e, t, r) {
  (t = di(r, t)), (t = uv(e, t, 1)), (e = Fr(e, t, 1)), (t = Ze()), e !== null && (Ns(e, 1, t), ot(e, t));
}
function we(e, t, r) {
  if (e.tag === 3) Up(e, e, r);
  else
    while (t !== null) {
      if (t.tag === 3) {
        Up(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError === "function" ||
          (typeof n.componentDidCatch === "function" && (Mr === null || !Mr.has(n)))
        ) {
          (e = di(r, e)), (e = cv(t, e, 1)), (t = Fr(t, e, 1)), (e = Ze()), t !== null && (Ns(t, 1, e), ot(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function aE(e, t, r) {
  var n = e.pingCache;
  n?.delete(t),
    (t = Ze()),
    (e.pingedLanes |= e.suspendedLanes & r),
    Ne === e &&
      (Be & r) === r &&
      (ke === 4 || (ke === 3 && (Be & 130023424) === Be && 500 > $e() - Gd) ? ln(e, 0) : (zd |= r)),
    ot(e, t);
}
function kv(e, t) {
  t === 0 && (e.mode & 1 ? ((t = no), (no <<= 1), !(no & 130023424) && (no = 4194304)) : (t = 1));
  var r = Ze();
  (e = pr(e, t)), e !== null && (Ns(e, t, r), ot(e, r));
}
function lE(e) {
  var t = e.memoizedState;
  var r = 0;
  t !== null && (r = t.retryLane), kv(e, r);
}
function uE(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode;
      var i = e.memoizedState;
      i !== null && (r = i.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(F(314));
  }
  n?.delete(t), kv(e, r);
}
var Av;
Av = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || it.current) nt = !0;
    else {
      if (!((e.lanes & r) || (t.flags & 128))) return (nt = !1), J1(e, t, r);
      nt = !!(e.flags & 131072);
    }
  else (nt = !1), he && t.flags & 1048576 && Ly(t, oa, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type;
      Lo(e, t), (e = t.pendingProps);
      var i = ai(t, Ke.current);
      ei(t, r), (i = Md(null, t, n, e, i, r));
      var s = Id();
      return (
        (t.flags |= 1),
        typeof i === "object" && i !== null && typeof i.render === "function" && i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            st(n) ? ((s = !0), ia(t)) : (s = !1),
            (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
            _d(t),
            (i.updater = qa),
            (t.stateNode = i),
            (i._reactInternals = t),
            dc(t, n, e, r),
            (t = hc(null, t, n, !0, s, r)))
          : ((t.tag = 0), he && s && Cd(t), Ye(null, t, i, r), (t = t.child)),
        t
      );
    case 16:
      n = t.elementType;
      e: {
        switch (
          (Lo(e, t),
          (e = t.pendingProps),
          (i = n._init),
          (n = i(n._payload)),
          (t.type = n),
          (i = t.tag = dE(n)),
          (e = At(n, e)),
          i)
        ) {
          case 0:
            t = pc(null, t, n, e, r);
            break e;
          case 1:
            t = kp(null, t, n, e, r);
            break e;
          case 11:
            t = Rp(null, t, n, e, r);
            break e;
          case 14:
            t = bp(null, t, n, At(n.type, e), r);
            break e;
        }
        throw Error(F(306, n, ""));
      }
      return t;
    case 0:
      return (n = t.type), (i = t.pendingProps), (i = t.elementType === n ? i : At(n, i)), pc(e, t, n, i, r);
    case 1:
      return (n = t.type), (i = t.pendingProps), (i = t.elementType === n ? i : At(n, i)), kp(e, t, n, i, r);
    case 3:
      e: {
        if ((hv(t), e === null)) throw Error(F(387));
        (n = t.pendingProps), (s = t.memoizedState), (i = s.element), Iy(e, t), ua(t, n, null, r);
        var o = t.memoizedState;
        if (((n = o.element), s.isDehydrated))
          if (
            ((s = {
              element: n,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = di(Error(F(423)), t)), (t = Ap(e, t, n, r, i));
            break e;
          } else if (n !== i) {
            (i = di(Error(F(424)), t)), (t = Ap(e, t, n, r, i));
            break e;
          } else
            for (
              ct = Nr(t.stateNode.containerInfo.firstChild),
                dt = t,
                he = !0,
                Dt = null,
                r = By(t, null, n, r),
                t.child = r;
              r;
            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((li(), n === i)) {
            t = hr(e, t, r);
            break e;
          }
          Ye(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        zy(t),
        e === null && lc(t),
        (n = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        nc(n, i) ? (o = null) : s !== null && nc(n, s) && (t.flags |= 32),
        pv(e, t),
        Ye(e, t, o, r),
        t.child
      );
    case 6:
      return e === null && lc(t), null;
    case 13:
      return mv(e, t, r);
    case 4:
      return (
        Dd(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = ui(t, null, n, r)) : Ye(e, t, n, r),
        t.child
      );
    case 11:
      return (n = t.type), (i = t.pendingProps), (i = t.elementType === n ? i : At(n, i)), Rp(e, t, n, i, r);
    case 7:
      return Ye(e, t, t.pendingProps, r), t.child;
    case 8:
      return Ye(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return Ye(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          ce(aa, n._currentValue),
          (n._currentValue = o),
          s !== null)
        )
          if (Mt(s.value, o)) {
            if (s.children === i.children && !it.current) {
              t = hr(e, t, r);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === n) {
                    if (s.tag === 1) {
                      (l = lr(-1, r & -r)), (l.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? (l.next = l) : ((l.next = c.next), (c.next = l)), (u.pending = l);
                      }
                    }
                    (s.lanes |= r), (l = s.alternate), l !== null && (l.lanes |= r), uc(s.return, r, t), (a.lanes |= r);
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(F(341));
                (o.lanes |= r), (a = o.alternate), a !== null && (a.lanes |= r), uc(o, r, t), (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        Ye(e, t, i.children, r), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (n = t.pendingProps.children),
        ei(t, r),
        (i = Ot(i)),
        (n = n(i)),
        (t.flags |= 1),
        Ye(e, t, n, r),
        t.child
      );
    case 14:
      return (n = t.type), (i = At(n, t.pendingProps)), (i = At(n.type, i)), bp(e, t, n, i, r);
    case 15:
      return dv(e, t, t.type, t.pendingProps, r);
    case 17:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : At(n, i)),
        Lo(e, t),
        (t.tag = 1),
        st(n) ? ((e = !0), ia(t)) : (e = !1),
        ei(t, r),
        Uy(t, n, i),
        dc(t, n, i, r),
        hc(null, t, n, !0, e, r)
      );
    case 19:
      return yv(e, t, r);
    case 22:
      return fv(e, t, r);
  }
  throw Error(F(156, t.tag));
};
function _v(e, t) {
  return iy(e, t);
}
function cE(e, t, r, n) {
  (this.tag = e),
    (this.key = r),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Et(e, t, r, n) {
  return new cE(e, t, r, n);
}
function Vd(e) {
  return (e = e.prototype), !(!(e?.isReactComponent));
}
function dE(e) {
  if (typeof e === "function") return Vd(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === pd)) return 11;
    if (e === hd) return 14;
  }
  return 2;
}
function qr(e, t) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = Et(e.tag, t, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t), (r.type = e.type), (r.flags = 0), (r.subtreeFlags = 0), (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  );
}
function Mo(e, t, r, n, i, s) {
  var o = 2;
  if (((n = e), typeof e === "function")) Vd(e) && (o = 1);
  else if (typeof e === "string") o = 5;
  else
    e: switch (e) {
      case In:
        return un(r.children, i, s, t);
      case fd:
        (o = 8), (i |= 8);
        break;
      case Nu:
        return (e = Et(12, r, t, i | 2)), (e.elementType = Nu), (e.lanes = s), e;
      case Fu:
        return (e = Et(13, r, t, i)), (e.elementType = Fu), (e.lanes = s), e;
      case Mu:
        return (e = Et(19, r, t, i)), (e.elementType = Mu), (e.lanes = s), e;
      case jm:
        return za(r, i, s, t);
      default:
        if (typeof e === "object" && e !== null)
          switch (e.$$typeof) {
            case qm:
              o = 10;
              break e;
            case Um:
              o = 9;
              break e;
            case pd:
              o = 11;
              break e;
            case hd:
              o = 14;
              break e;
            case $r:
              (o = 16), (n = null);
              break e;
          }
        throw Error(F(130, e == null ? e : typeof e, ""));
    }
  return (t = Et(o, r, t, i)), (t.elementType = e), (t.type = n), (t.lanes = s), t;
}
function un(e, t, r, n) {
  return (e = Et(7, e, n, t)), (e.lanes = r), e;
}
function za(e, t, r, n) {
  return (e = Et(22, e, n, t)), (e.elementType = jm), (e.lanes = r), (e.stateNode = { isHidden: !1 }), e;
}
function Bl(e, t, r) {
  return (e = Et(6, e, null, t)), (e.lanes = r), e;
}
function zl(e, t, r) {
  return (
    (t = Et(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
    t
  );
}
function fE(e, t, r, n, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = $l(0)),
    (this.expirationTimes = $l(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = $l(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Kd(e, t, r, n, i, s, o, a, l) {
  return (
    (e = new fE(e, t, r, a, l)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Et(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    _d(s),
    e
  );
}
function pE(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Mn, key: n == null ? null : `${n}`, children: e, containerInfo: t, implementation: r };
}
function Dv(e) {
  if (!e) return jr;
  e = e._reactInternals;
  e: {
    if (On(e) !== e || e.tag !== 1) throw Error(F(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (st(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(F(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (st(r)) return _y(e, r, t);
  }
  return t;
}
function Lv(e, t, r, n, i, s, o, a, l) {
  return (
    (e = Kd(r, n, !0, e, i, s, o, a, l)),
    (e.context = Dv(null)),
    (r = e.current),
    (n = Ze()),
    (i = Ir(r)),
    (s = lr(n, i)),
    (s.callback = t ?? null),
    Fr(r, s, i),
    (e.current.lanes = i),
    Ns(e, i, n),
    ot(e, n),
    e
  );
}
function Ga(e, t, r, n) {
  var i = t.current;
  var s = Ze();
  var o = Ir(i);
  return (
    (r = Dv(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = lr(s, o)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = Fr(i, t, o)),
    e !== null && (Nt(e, i, o, s), Ao(e, i, o)),
    o
  );
}
function va(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function jp(e, t) {
  if (((e = e.memoizedState), e?.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function Jd(e, t) {
  jp(e, t), (e = e.alternate) && jp(e, t);
}
function hE() {
  return null;
}
var Nv =
  typeof reportError === "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Xd(e) {
  this._internalRoot = e;
}
Ha.prototype.render = Xd.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(F(409));
  Ga(e, t, null, null);
};
Ha.prototype.unmount = Xd.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    yn(function () {
      Ga(null, e, null, null);
    }),
      (t[fr] = null);
  }
};
function Ha(e) {
  this._internalRoot = e;
}
Ha.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = dy();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < xr.length && t !== 0 && t < xr[r].priority; r++);
    xr.splice(r, 0, e), r === 0 && py(e);
  }
};
function Yd(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Wa(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Bp() {}
function mE(e, t, r, n, i) {
  if (i) {
    if (typeof n === "function") {
      var s = n;
      n = function () {
        var u = va(o);
        s.call(u);
      };
    }
    var o = Lv(t, n, e, 0, null, !1, !1, "", Bp);
    return (e._reactRootContainer = o), (e[fr] = o.current), gs(e.nodeType === 8 ? e.parentNode : e), yn(), o;
  }
  while ((i = e.lastChild)) e.removeChild(i);
  if (typeof n === "function") {
    var a = n;
    n = function () {
      var u = va(l);
      a.call(u);
    };
  }
  var l = Kd(e, 0, !1, null, null, !1, !1, "", Bp);
  return (
    (e._reactRootContainer = l),
    (e[fr] = l.current),
    gs(e.nodeType === 8 ? e.parentNode : e),
    yn(function () {
      Ga(t, l, r, n);
    }),
    l
  );
}
function Qa(e, t, r, n, i) {
  var s = r._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i === "function") {
      var a = i;
      i = function () {
        var l = va(o);
        a.call(l);
      };
    }
    Ga(t, o, e, i);
  } else o = mE(r, t, e, i, n);
  return va(o);
}
uy = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = Qi(t.pendingLanes);
        r !== 0 && (vd(t, r | 1), ot(t, $e()), !(ie & 6) && ((fi = $e() + 500), Qr()));
      }
      break;
    case 13:
      yn(function () {
        var n = pr(e, 1);
        if (n !== null) {
          var i = Ze();
          Nt(n, e, 1, i);
        }
      }),
        Jd(e, 1);
  }
};
gd = function (e) {
  if (e.tag === 13) {
    var t = pr(e, 134217728);
    if (t !== null) {
      var r = Ze();
      Nt(t, e, 134217728, r);
    }
    Jd(e, 134217728);
  }
};
cy = function (e) {
  if (e.tag === 13) {
    var t = Ir(e);
    var r = pr(e, t);
    if (r !== null) {
      var n = Ze();
      Nt(r, e, t, n);
    }
    Jd(e, t);
  }
};
dy = function () {
  return le;
};
fy = function (e, t) {
  var r = le;
  try {
    return (le = e), t();
  } finally {
    le = r;
  }
};
Qu = function (e, t, r) {
  switch (t) {
    case "input":
      if ((Uu(e, r), (t = r.name), r.type === "radio" && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (
          r = r.querySelectorAll(`input[name=${JSON.stringify(`${t}`)}][type="radio"]`), t = 0;
          t < r.length;
          t++
        ) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var i = Ma(n);
            if (!i) throw Error(F(90));
            zm(n), Uu(n, i);
          }
        }
      }
      break;
    case "textarea":
      Hm(e, r);
      break;
    case "select":
      (t = r.value), t != null && Jn(e, !!r.multiple, t, !1);
  }
};
Ym = Hd;
Zm = yn;
var yE = { usingClientEntryPoint: !1, Events: [Ms, Bn, Ma, Jm, Xm, Hd] };
var Ui = { findFiberByHostInstance: rn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" };
var vE = {
    bundleType: Ui.bundleType,
    version: Ui.version,
    rendererPackageName: Ui.rendererPackageName,
    rendererConfig: Ui.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: yr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ry(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Ui.findFiberByHostInstance || hE,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var mo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!mo.isDisabled && mo.supportsFiber)
    try {
      (Da = mo.inject(vE)), (Vt = mo);
    } catch {}
}
ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yE;
ht.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Yd(t)) throw Error(F(200));
  return pE(e, t, null, r);
};
ht.createRoot = function (e, t) {
  if (!Yd(e)) throw Error(F(299));
  var r = !1;
  var n = "";
  var i = Nv;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Kd(e, 1, !1, null, null, r, !1, n, i)),
    (e[fr] = t.current),
    gs(e.nodeType === 8 ? e.parentNode : e),
    new Xd(t)
  );
};
ht.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render === "function" ? Error(F(188)) : ((e = Object.keys(e).join(",")), Error(F(268, e)));
  return (e = ry(t)), (e = e === null ? null : e.stateNode), e;
};
ht.flushSync = function (e) {
  return yn(e);
};
ht.hydrate = function (e, t, r) {
  if (!Wa(t)) throw Error(F(200));
  return Qa(null, e, t, !0, r);
};
ht.hydrateRoot = function (e, t, r) {
  if (!Yd(e)) throw Error(F(405));
  var n = (r?.hydratedSources) || null;
  var i = !1;
  var s = "";
  var o = Nv;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (i = !0),
      r.identifierPrefix !== void 0 && (s = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (o = r.onRecoverableError)),
    (t = Lv(t, null, e, 1, r ?? null, i, !1, s, o)),
    (e[fr] = t.current),
    gs(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      (r = n[e]),
        (i = r._getVersion),
        (i = i(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, i])
          : t.mutableSourceEagerHydrationData.push(r, i);
  return new Ha(t);
};
ht.render = function (e, t, r) {
  if (!Wa(t)) throw Error(F(200));
  return Qa(null, e, t, !1, r);
};
ht.unmountComponentAtNode = function (e) {
  if (!Wa(e)) throw Error(F(40));
  return e._reactRootContainer
    ? (yn(function () {
        Qa(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[fr] = null);
        });
      }),
      !0)
    : !1;
};
ht.unstable_batchedUpdates = Hd;
ht.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!Wa(r)) throw Error(F(200));
  if (e == null || e._reactInternals === void 0) throw Error(F(38));
  return Qa(e, t, r, !1, n);
};
ht.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  t(), (e.exports = ht);
})(hS);
const gE = id(si);
var Fv;
var zp = si;
(Fv = zp.createRoot), zp.hydrateRoot;
var Tc = {};
var SE = {
    get exports() {
      return Tc;
    },
    set exports(e) {
      Tc = e;
    },
  };
var ga = {};
var EE = {
    get exports() {
      return ga;
    },
    set exports(e) {
      ga = e;
    },
  };
var Mv = function (t, r) {
    return function () {
      for (var i = new Array(arguments.length), s = 0; s < i.length; s++) i[s] = arguments[s];
      return t.apply(r, i);
    };
  };
var wE = Mv;
var Cn = Object.prototype.toString;
function Zd(e) {
  return Cn.call(e) === "[object Array]";
}
function xc(e) {
  return typeof e > "u";
}
function PE(e) {
  return (
    e !== null &&
    !xc(e) &&
    e.constructor !== null &&
    !xc(e.constructor) &&
    typeof e.constructor.isBuffer === "function" &&
    e.constructor.isBuffer(e)
  );
}
function $E(e) {
  return Cn.call(e) === "[object ArrayBuffer]";
}
function OE(e) {
  return typeof FormData < "u" && e instanceof FormData;
}
function CE(e) {
  var t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e?.buffer && e.buffer instanceof ArrayBuffer),
    t
  );
}
function TE(e) {
  return typeof e === "string";
}
function xE(e) {
  return typeof e === "number";
}
function Iv(e) {
  return e !== null && typeof e === "object";
}
function Io(e) {
  if (Cn.call(e) !== "[object Object]") return !1;
  var t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
function RE(e) {
  return Cn.call(e) === "[object Date]";
}
function bE(e) {
  return Cn.call(e) === "[object File]";
}
function kE(e) {
  return Cn.call(e) === "[object Blob]";
}
function qv(e) {
  return Cn.call(e) === "[object Function]";
}
function AE(e) {
  return Iv(e) && qv(e.pipe);
}
function _E(e) {
  return typeof URLSearchParams < "u" && e instanceof URLSearchParams;
}
function DE(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function LE() {
  return typeof navigator < "u" &&
    (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")
    ? !1
    : typeof window < "u" && typeof document < "u";
}
function ef(e, t) {
  if (!(e === null || typeof e > "u"))
    if ((typeof e !== "object" && (e = [e]), Zd(e))) for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e);
    else for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e);
}
function Rc() {
  var e = {};
  function t(i, s) {
    Io(e[s]) && Io(i) ? (e[s] = Rc(e[s], i)) : Io(i) ? (e[s] = Rc({}, i)) : Zd(i) ? (e[s] = i.slice()) : (e[s] = i);
  }
  for (var r = 0, n = arguments.length; r < n; r++) ef(arguments[r], t);
  return e;
}
function NE(e, t, r) {
  return (
    ef(t, function (i, s) {
      r && typeof i === "function" ? (e[s] = wE(i, r)) : (e[s] = i);
    }),
    e
  );
}
function FE(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
var yt = {
    isArray: Zd,
    isArrayBuffer: $E,
    isBuffer: PE,
    isFormData: OE,
    isArrayBufferView: CE,
    isString: TE,
    isNumber: xE,
    isObject: Iv,
    isPlainObject: Io,
    isUndefined: xc,
    isDate: RE,
    isFile: bE,
    isBlob: kE,
    isFunction: qv,
    isStream: AE,
    isURLSearchParams: _E,
    isStandardBrowserEnv: LE,
    forEach: ef,
    merge: Rc,
    extend: NE,
    trim: DE,
    stripBOM: FE,
  };
var bn = yt;
function Gp(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
var Uv = function (t, r, n) {
    if (!r) return t;
    var i;
    if (n) i = n(r);
    else if (bn.isURLSearchParams(r)) i = r.toString();
    else {
      var s = [];
      bn.forEach(r, function (l, u) {
        l === null ||
          typeof l > "u" ||
          (bn.isArray(l) ? (u = `${u}[]`) : (l = [l]),
          bn.forEach(l, function (d) {
            bn.isDate(d) ? (d = d.toISOString()) : bn.isObject(d) && (d = JSON.stringify(d)),
              s.push(`${Gp(u)}=${Gp(d)}`);
          }));
      }),
        (i = s.join("&"));
    }
    if (i) {
      var o = t.indexOf("#");
      o !== -1 && (t = t.slice(0, o)), (t += (t.indexOf("?") === -1 ? "?" : "&") + i);
    }
    return t;
  };
var ME = yt;
function Va() {
  this.handlers = [];
}
Va.prototype.use = function (t, r, n) {
  return (
    this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null,
    }),
    this.handlers.length - 1
  );
};
Va.prototype.eject = function (t) {
  this.handlers[t] && (this.handlers[t] = null);
};
Va.prototype.forEach = function (t) {
  ME.forEach(this.handlers, function (n) {
    n !== null && t(n);
  });
};
var IE = Va;
var qE = yt;
var UE = function (t, r) {
    qE.forEach(t, function (i, s) {
      s !== r && s.toUpperCase() === r.toUpperCase() && ((t[r] = i), t[s] = undefined);
    });
  };
var jv = function (t, r, n, i, s) {
    return (
      (t.config = r),
      n && (t.code = n),
      (t.request = i),
      (t.response = s),
      (t.isAxiosError = !0),
      (t.toJSON = function () {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code,
          status: this.response?.status ? this.response.status : null,
        };
      }),
      t
    );
  };
var Gl;
var Hp;
function Bv() {
  if (Hp) return Gl;
  Hp = 1;
  var e = jv;
  return (
    (Gl = function (r, n, i, s, o) {
      var a = new Error(r);
      return e(a, n, i, s, o);
    }),
    Gl
  );
}
var Hl;
var Wp;
function jE() {
  if (Wp) return Hl;
  Wp = 1;
  var e = Bv();
  return (
    (Hl = function (r, n, i) {
      var s = i.config.validateStatus;
      !(i.status && s ) || s(i.status)
        ? r(i)
        : n(e(`Request failed with status code ${i.status}`, i.config, null, i.request, i));
    }),
    Hl
  );
}
var Wl;
var Qp;
function BE() {
  if (Qp) return Wl;
  Qp = 1;
  var e = yt;
  return (
    (Wl = e.isStandardBrowserEnv()
      ? (function () {
          return {
            write: function (n, i, s, o, a, l) {
              var u = [];
              u.push(`${n}=${encodeURIComponent(i)}`),
                e.isNumber(s) && u.push(`expires=${new Date(s).toGMTString()}`),
                e.isString(o) && u.push(`path=${o}`),
                e.isString(a) && u.push(`domain=${a}`),
                l === !0 && u.push("secure"),
                (document.cookie = u.join("; "));
            },
            read: function (n) {
              var i = document.cookie.match(new RegExp(`(^|;\\s*)(${n})=([^;]*)`));
              return i ? decodeURIComponent(i[3]) : null;
            },
            remove: function (n) {
              this.write(n, "", Date.now() - 864e5);
            },
          };
        })()
      : (function () {
          return {
            write: function () {},
            read: function () {
              return null;
            },
            remove: function () {},
          };
        })()),
    Wl
  );
}
var Ql;
var Vp;
function zE() {
  return (
    Vp ||
      ((Vp = 1),
      (Ql = function (t) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t);
      })),
    Ql
  );
}
var Vl;
var Kp;
function GE() {
  return (
    Kp ||
      ((Kp = 1),
      (Vl = function (t, r) {
        return r ? `${t.replace(/\/+$/, "")}/${r.replace(/^\/+/, "")}` : t;
      })),
    Vl
  );
}
var Kl;
var Jp;
function HE() {
  if (Jp) return Kl;
  Jp = 1;
  var e = zE();
  var t = GE();
  return (
    (Kl = function (n, i) {
      return n && !e(i) ? t(n, i) : i;
    }),
    Kl
  );
}
var Jl;
var Xp;
function WE() {
  if (Xp) return Jl;
  Xp = 1;
  var e = yt;
  var t = [
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ];
  return (
    (Jl = function (n) {
      var i = {};
      var s;
      var o;
      var a;
      return (
        n &&
          e.forEach(
            n.split(`
`),
            function (u) {
              if (
                ((a = u.indexOf(":")), (s = e.trim(u.substr(0, a)).toLowerCase()), (o = e.trim(u.substr(a + 1))), s)
              ) {
                if (i[s] && t.indexOf(s) >= 0) return;
                s === "set-cookie" ? (i[s] = (i[s] ? i[s] : []).concat([o])) : (i[s] = i[s] ? `${i[s]}, ${o}` : o);
              }
            },
          ),
        i
      );
    }),
    Jl
  );
}
var Xl;
var Yp;
function QE() {
  if (Yp) return Xl;
  Yp = 1;
  var e = yt;
  return (
    (Xl = e.isStandardBrowserEnv()
      ? (function () {
          var r = /(msie|trident)/i.test(navigator.userAgent);
          var n = document.createElement("a");
          var i;
          function s(o) {
            var a = o;
            return (
              r && (n.setAttribute("href", a), (a = n.href)),
              n.setAttribute("href", a),
              {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname: n.pathname.charAt(0) === "/" ? n.pathname : `/${n.pathname}`,
              }
            );
          }
          return (
            (i = s(window.location.href)),
            function (a) {
              var l = e.isString(a) ? s(a) : a;
              return l.protocol === i.protocol && l.host === i.host;
            }
          );
        })()
      : (function () {
          return function () {
            return !0;
          };
        })()),
    Xl
  );
}
var Yl;
var Zp;
function Ka() {
  if (Zp) return Yl;
  Zp = 1;
  function e(t) {
    this.message = t;
  }
  return (
    (e.prototype.toString = function () {
      return `Cancel${(this.message ? `: ${this.message}` : "")}`;
    }),
    (e.prototype.__CANCEL__ = !0),
    (Yl = e),
    Yl
  );
}
var Zl;
var eh;
function th() {
  if (eh) return Zl;
  eh = 1;
  var e = yt;
  var t = jE();
  var r = BE();
  var n = Uv;
  var i = HE();
  var s = WE();
  var o = QE();
  var a = Bv();
  var l = Ja();
  var u = Ka();
  return (
    (Zl = function (d) {
      return new Promise(function (v, g) {
        var m = d.data;
        var w = d.headers;
        var p = d.responseType;
        var h;
        function y() {
          d.cancelToken?.unsubscribe(h), d.signal?.removeEventListener("abort", h);
        }
        e.isFormData(m) && w["Content-Type"] = undefined;
        var S = new XMLHttpRequest();
        if (d.auth) {
          var x = d.auth.username || "";
          var b = d.auth.password ? unescape(encodeURIComponent(d.auth.password)) : "";
          w.Authorization = `Basic ${btoa(`${x}:${b}`)}`;
        }
        var L = i(d.baseURL, d.url);
        S.open(d.method.toUpperCase(), n(L, d.params, d.paramsSerializer), !0), (S.timeout = d.timeout);
        function O() {
          if (S) {
            var M = "getAllResponseHeaders" in S ? s(S.getAllResponseHeaders()) : null;
            var J = !p || p === "text" || p === "json" ? S.responseText : S.response;
            var de = { data: J, status: S.status, statusText: S.statusText, headers: M, config: d, request: S };
            t(
              function (Fe) {
                v(Fe), y();
              },
              function (Fe) {
                g(Fe), y();
              },
              de,
            ),
              (S = null);
          }
        }
        if (
          ("onloadend" in S
            ? (S.onloadend = O)
            : (S.onreadystatechange = function () {
                !S ||
                  S.readyState !== 4 ||
                  (S.status === 0 && !(S.responseURL && S.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(O);
              }),
          (S.onabort = function () {
            S && (g(a("Request aborted", d, "ECONNABORTED", S)), (S = null));
          }),
          (S.onerror = function () {
            g(a("Network Error", d, null, S)), (S = null);
          }),
          (S.ontimeout = function () {
            var J = d.timeout ? `timeout of ${d.timeout}ms exceeded` : "timeout exceeded";
            var de = d.transitional || l.transitional;
            d.timeoutErrorMessage && (J = d.timeoutErrorMessage),
              g(a(J, d, de.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", S)),
              (S = null);
          }),
          e.isStandardBrowserEnv())
        ) {
          var j = (d.withCredentials || o(L)) && d.xsrfCookieName ? r.read(d.xsrfCookieName) : void 0;
          j && (w[d.xsrfHeaderName] = j);
        }
        "setRequestHeader" in S &&
          e.forEach(w, function (J, de) {
            typeof m > "u" && de.toLowerCase() === "content-type" ? w[de]  = undefined : S.setRequestHeader(de, J);
          }),
          e.isUndefined(d.withCredentials) || (S.withCredentials = !!d.withCredentials),
          p && p !== "json" && (S.responseType = d.responseType),
          typeof d.onDownloadProgress === "function" && S.addEventListener("progress", d.onDownloadProgress),
          typeof d.onUploadProgress === "function" &&
            S.upload &&
            S.upload.addEventListener("progress", d.onUploadProgress),
          (d.cancelToken || d.signal) &&
            ((h = function (M) {
              S && (g(!M || (M?.type) ? new u("canceled") : M), S.abort(), (S = null));
            }),
            d.cancelToken?.subscribe(h),
            d.signal && (d.signal.aborted ? h() : d.signal.addEventListener("abort", h))),
          m || (m = null),
          S.send(m);
      });
    }),
    Zl
  );
}
var eu;
var rh;
function Ja() {
  if (rh) return eu;
  rh = 1;
  var e = yt;
  var t = UE;
  var r = jv;
  var n = { "Content-Type": "application/x-www-form-urlencoded" };
  function i(l, u) {
    !e.isUndefined(l) && e.isUndefined(l["Content-Type"]) && (l["Content-Type"] = u);
  }
  function s() {
    var l;
    return (
      (typeof XMLHttpRequest < "u" ||
        (typeof process < "u" && Object.prototype.toString.call(process) === "[object process]")) &&
        (l = th()),
      l
    );
  }
  function o(l, u, c) {
    if (e.isString(l))
      try {
        return (u || JSON.parse)(l), e.trim(l);
      } catch (d) {
        if (d.name !== "SyntaxError") throw d;
      }
    return (c || JSON.stringify)(l);
  }
  var a = {
    transitional: { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
    adapter: s(),
    transformRequest: [
      function (u, c) {
        return (
          t(c, "Accept"),
          t(c, "Content-Type"),
          e.isFormData(u) || e.isArrayBuffer(u) || e.isBuffer(u) || e.isStream(u) || e.isFile(u) || e.isBlob(u)
            ? u
            : e.isArrayBufferView(u)
            ? u.buffer
            : e.isURLSearchParams(u)
            ? (i(c, "application/x-www-form-urlencoded;charset=utf-8"), u.toString())
            : e.isObject(u) || (c && c["Content-Type"] === "application/json")
            ? (i(c, "application/json"), o(u))
            : u
        );
      },
    ],
    transformResponse: [
      function (u) {
        var c = this.transitional || a.transitional;
        var d = c?.silentJSONParsing;
        var f = c?.forcedJSONParsing;
        var v = !d && this.responseType === "json";
        if (v || (f && e.isString(u) && u.length))
          try {
            return JSON.parse(u);
          } catch (g) {
            if (v) throw g.name === "SyntaxError" ? r(g, this, "E_JSON_PARSE") : g;
          }
        return u;
      },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function (u) {
      return u >= 200 && u < 300;
    },
    headers: { common: { Accept: "application/json, text/plain, */*" } },
  };
  return (
    e.forEach(["delete", "get", "head"], function (u) {
      a.headers[u] = {};
    }),
    e.forEach(["post", "put", "patch"], function (u) {
      a.headers[u] = e.merge(n);
    }),
    (eu = a),
    eu
  );
}
var VE = yt;
var KE = Ja();
var JE = function (t, r, n) {
    var i = this || KE;
    return (
      VE.forEach(n, function (o) {
        t = o.call(i, t, r);
      }),
      t
    );
  };
var tu;
var nh;
function zv() {
  return (
    nh ||
      ((nh = 1),
      (tu = function (t) {
        return !!(t?.__CANCEL__);
      })),
    tu
  );
}
var ih = yt;
var ru = JE;
var XE = zv();
var YE = Ja();
var ZE = Ka();
function nu(e) {
  if ((e.cancelToken?.throwIfRequested(), e.signal?.aborted)) throw new ZE("canceled");
}
var ew = function (t) {
    nu(t),
      (t.headers = t.headers || {}),
      (t.data = ru.call(t, t.data, t.headers, t.transformRequest)),
      (t.headers = ih.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers)),
      ih.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (i) {
        t.headers[i] = undefined;
      });
    var r = t.adapter || YE.adapter;
    return r(t).then(
      function (i) {
        return nu(t), (i.data = ru.call(t, i.data, i.headers, t.transformResponse)), i;
      },
      function (i) {
        return (
          XE(i) ||
            (nu(t),
            i?.response &&
              (i.response.data = ru.call(t, i.response.data, i.response.headers, t.transformResponse))),
          Promise.reject(i)
        );
      },
    );
  };
var lt = yt;
var Gv = function (t, r) {
    r = r || {};
    var n = {};
    function i(c, d) {
      return lt.isPlainObject(c) && lt.isPlainObject(d)
        ? lt.merge(c, d)
        : lt.isPlainObject(d)
        ? lt.merge({}, d)
        : lt.isArray(d)
        ? d.slice()
        : d;
    }
    function s(c) {
      if (lt.isUndefined(r[c])) {
        if (!lt.isUndefined(t[c])) return i(void 0, t[c]);
      } else return i(t[c], r[c]);
    }
    function o(c) {
      if (!lt.isUndefined(r[c])) return i(void 0, r[c]);
    }
    function a(c) {
      if (lt.isUndefined(r[c])) {
        if (!lt.isUndefined(t[c])) return i(void 0, t[c]);
      } else return i(void 0, r[c]);
    }
    function l(c) {
      if (c in r) return i(t[c], r[c]);
      if (c in t) return i(void 0, t[c]);
    }
    var u = {
      url: o,
      method: o,
      data: o,
      baseURL: a,
      transformRequest: a,
      transformResponse: a,
      paramsSerializer: a,
      timeout: a,
      timeoutMessage: a,
      withCredentials: a,
      adapter: a,
      responseType: a,
      xsrfCookieName: a,
      xsrfHeaderName: a,
      onUploadProgress: a,
      onDownloadProgress: a,
      decompress: a,
      maxContentLength: a,
      maxBodyLength: a,
      transport: a,
      httpAgent: a,
      httpsAgent: a,
      cancelToken: a,
      socketPath: a,
      responseEncoding: a,
      validateStatus: l,
    };
    return (
      lt.forEach(Object.keys(t).concat(Object.keys(r)), function (d) {
        var f = u[d] || s;
        var v = f(d);
        (lt.isUndefined(v) && f !== l) || (n[d] = v);
      }),
      n
    );
  };
var iu;
var sh;
function Hv() {
  return sh || ((sh = 1), (iu = { version: "0.24.0" })), iu;
}
var tw = Hv().version;
var tf = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function (e, t) {
  tf[e] = function (n) {
    return typeof n === e || `a${(t < 1 ? "n " : " ")}${e}`;
  };
});
var oh = {};
tf.transitional = function (t, r, n) {
  function i(s, o) {
    return `[Axios v${tw}] Transitional option '${s}'${o}${(n ? `. ${n}` : "")}`;
  }
  return function (s, o, a) {
    if (t === !1) throw new Error(i(o, ` has been removed${(r ? ` in ${r}` : "")}`));
    return (
      r &&
        !oh[o] &&
        ((oh[o] = !0),
        console.warn(i(o, ` has been deprecated since v${r} and will be removed in the near future`))),
      t ? t(s, o, a) : !0
    );
  };
};
function rw(e, t, r) {
  if (typeof e !== "object") throw new TypeError("options must be an object");
  for (var n = Object.keys(e), i = n.length; i-- > 0; ) {
    var s = n[i];
    var o = t[s];
    if (o) {
      var a = e[s];
      var l = a === void 0 || o(a, s, e);
      if (l !== !0) throw new TypeError(`option ${s} must be ${l}`);
      continue;
    }
    if (r !== !0) throw Error(`Unknown option ${s}`);
  }
}
var nw = { assertOptions: rw, validators: tf };
var Wv = yt;
var iw = Uv;
var ah = IE;
var lh = ew;
var Xa = Gv;
var Qv = nw;
var kn = Qv.validators;
function qs(e) {
  (this.defaults = e), (this.interceptors = { request: new ah(), response: new ah() });
}
qs.prototype.request = function (t) {
  typeof t === "string" ? ((t = arguments[1] || {}), (t.url = arguments[0])) : (t = t || {}),
    (t = Xa(this.defaults, t)),
    t.method
      ? (t.method = t.method.toLowerCase())
      : this.defaults.method
      ? (t.method = this.defaults.method.toLowerCase())
      : (t.method = "get");
  var r = t.transitional;
  r !== void 0 &&
    Qv.assertOptions(
      r,
      {
        silentJSONParsing: kn.transitional(kn.boolean),
        forcedJSONParsing: kn.transitional(kn.boolean),
        clarifyTimeoutError: kn.transitional(kn.boolean),
      },
      !1,
    );
  var n = [];
  var i = !0;
  this.interceptors.request.forEach(function (f) {
    (typeof f.runWhen === "function" && f.runWhen(t) === !1) ||
      ((i = i && f.synchronous), n.unshift(f.fulfilled, f.rejected));
  });
  var s = [];
  this.interceptors.response.forEach(function (f) {
    s.push(f.fulfilled, f.rejected);
  });
  var o;
  if (!i) {
    var a = [lh, void 0];
    for (Array.prototype.unshift.apply(a, n), a = a.concat(s), o = Promise.resolve(t); a.length; )
      o = o.then(a.shift(), a.shift());
    return o;
  }
  for (var l = t; n.length; ) {
    var u = n.shift();
    var c = n.shift();
    try {
      l = u(l);
    } catch (d) {
      c(d);
      break;
    }
  }
  try {
    o = lh(l);
  } catch (d) {
    return Promise.reject(d);
  }
  while (s.length) o = o.then(s.shift(), s.shift());
  return o;
};
qs.prototype.getUri = function (t) {
  return (t = Xa(this.defaults, t)), iw(t.url, t.params, t.paramsSerializer).replace(/^\?/, "");
};
Wv.forEach(["delete", "get", "head", "options"], function (t) {
  qs.prototype[t] = function (r, n) {
    return this.request(Xa(n || {}, { method: t, url: r, data: n?.data }));
  };
});
Wv.forEach(["post", "put", "patch"], function (t) {
  qs.prototype[t] = function (r, n, i) {
    return this.request(Xa(i || {}, { method: t, url: r, data: n }));
  };
});
var sw = qs;
var su;
var uh;
function ow() {
  if (uh) return su;
  uh = 1;
  var e = Ka();
  function t(r) {
    if (typeof r !== "function") throw new TypeError("executor must be a function.");
    var n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    var i = this;
    this.promise.then(function (s) {
      if (i._listeners) {
        var o;
        var a = i._listeners.length;
        for (o = 0; o < a; o++) i._listeners[o](s);
        i._listeners = null;
      }
    }),
      (this.promise.then = function (s) {
        var o;
        var a = new Promise(function (l) {
            i.subscribe(l), (o = l);
          }).then(s);
        return (
          (a.cancel = function () {
            i.unsubscribe(o);
          }),
          a
        );
      }),
      r(function (o) {
        i.reason || ((i.reason = new e(o)), n(i.reason));
      });
  }
  return (
    (t.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }),
    (t.prototype.subscribe = function (n) {
      if (this.reason) {
        n(this.reason);
        return;
      }
      this._listeners ? this._listeners.push(n) : (this._listeners = [n]);
    }),
    (t.prototype.unsubscribe = function (n) {
      if (this._listeners) {
        var i = this._listeners.indexOf(n);
        i !== -1 && this._listeners.splice(i, 1);
      }
    }),
    (t.source = function () {
      var n;
      var i = new t(function (o) {
          n = o;
        });
      return { token: i, cancel: n };
    }),
    (su = t),
    su
  );
}
var ou;
var ch;
function aw() {
  return (
    ch ||
      ((ch = 1),
      (ou = function (t) {
        return function (n) {
          return t.apply(null, n);
        };
      })),
    ou
  );
}
var au;
var dh;
function lw() {
  return (
    dh ||
      ((dh = 1),
      (au = function (t) {
        return typeof t === "object" && t.isAxiosError === !0;
      })),
    au
  );
}
var fh = yt;
var uw = Mv;
var qo = sw;
var cw = Gv;
var dw = Ja();
function Vv(e) {
  var t = new qo(e);
  var r = uw(qo.prototype.request, t);
  return (
    fh.extend(r, qo.prototype, t),
    fh.extend(r, t),
    (r.create = function (i) {
      return Vv(cw(e, i));
    }),
    r
  );
}
var Xt = Vv(dw);
Xt.Axios = qo;
Xt.Cancel = Ka();
Xt.CancelToken = ow();
Xt.isCancel = zv();
Xt.VERSION = Hv().version;
Xt.all = function (t) {
  return Promise.all(t);
};
Xt.spread = aw();
Xt.isAxiosError = lw();
EE.exports = Xt;
ga.default = Xt;
(function (e) {
  e.exports = ga;
})(SE);
const Sa = id(Tc);
function fw(e) {
  return (e = e || Sa).interceptors.response.use(pw, hw);
}
function pw(e) {
  return e;
}
function ph(e) {
  var t = [];
  if (e)
    return Array.isArray(e)
      ? e
      : (typeof e === "object" &&
          Object.keys(e).forEach(function (r) {
            typeof r === "number" && (t[r] = e[r]);
          }),
        t);
}
function hw(e) {
  if (Sa.isCancel(e)) return Promise.reject(e);
  var t = Kv(e) || {};
  if (
    ((t.currentRetryAttempt = t.currentRetryAttempt || 0),
    (t.retry = typeof t.retry === "number" ? t.retry : 3),
    (t.retryDelay = typeof t.retryDelay === "number" ? t.retryDelay : 100),
    (t.instance = t.instance || Sa),
    (t.backoffType = t.backoffType || "exponential"),
    (t.httpMethodsToRetry = ph(t.httpMethodsToRetry) || ["GET", "HEAD", "PUT", "OPTIONS", "DELETE"]),
    (t.noResponseRetries = typeof t.noResponseRetries === "number" ? t.noResponseRetries : 2),
    (t.checkRetryAfter = typeof t.checkRetryAfter !== "boolean" || t.checkRetryAfter),
    (t.maxRetryAfter = typeof t.maxRetryAfter === "number" ? t.maxRetryAfter : 3e5),
    (t.statusCodesToRetry = ph(t.statusCodesToRetry) || [
      [100, 199],
      [429, 429],
      [500, 599],
    ]),
    (e.config = e.config || {}),
    (e.config.raxConfig = Object.assign({}, t)),
    !(t.shouldRetry || mw)(e))
  )
    return Promise.reject(e);
  var r = new Promise(function (i, s) {
      var o = 0;
      if (t.checkRetryAfter && e.response && e.response.headers["retry-after"]) {
        var a = (function (u) {
          var c = Number(u);
          if (!Number.isNaN(c)) return 1e3 * c;
          var d = Date.parse(u);
          return Number.isNaN(d) ? void 0 : d - Date.now();
        })(e.response.headers["retry-after"]);
        if (!(a && a > 0 && a <= t.maxRetryAfter)) return s(e);
        o = a;
      }
      e.config.raxConfig.currentRetryAttempt += 1;
      var l = e.config.raxConfig.currentRetryAttempt;
      o === 0 &&
        ((o =
          t.backoffType === "linear"
            ? 1e3 * l
            : t.backoffType === "static"
            ? t.retryDelay
            : ((Math.pow(2, l) - 1) / 2) * 1e3),
        typeof t.maxRetryDelay === "number" && (o = Math.min(o, t.maxRetryDelay))),
        setTimeout(i, o);
    });
  var n = t.onRetryAttempt ? Promise.resolve(t.onRetryAttempt(e)) : Promise.resolve();
  return Promise.resolve()
    .then(function () {
      return r;
    })
    .then(function () {
      return n;
    })
    .then(function () {
      return t.instance.request(e.config);
    });
}
function mw(e) {
  var t = e.config.raxConfig;
  if (
    !t ||
    t.retry === 0 ||
    (!e.response && (t.currentRetryAttempt || 0) >= t.noResponseRetries) ||
    !e.config.method ||
    t.httpMethodsToRetry.indexOf(e.config.method.toUpperCase()) < 0
  )
    return !1;
  if (e.response?.status) {
    for (var r = !1, n = 0, i = t.statusCodesToRetry; n < i.length; n += 1) {
      var s = i[n];
      var o = e.response.status;
      if (o >= s[0] && o <= s[1]) {
        r = !0;
        break;
      }
    }
    if (!r) return !1;
  }
  return (t.currentRetryAttempt = t.currentRetryAttempt || 0), !(t.currentRetryAttempt >= t.retry);
}
function Kv(e) {
  if (e?.config) return e.config.raxConfig;
}
let yo;
const yw = new Uint8Array(16);
function vw() {
  if (!yo && ((yo = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)), !yo))
    throw new Error(
      "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
    );
  return yo(yw);
}
const Me = [];
for (let e = 0; e < 256; ++e) Me.push((e + 256).toString(16).slice(1));
function gw(e, t = 0) {
  return (
    `${Me[e[t + 0]]}${Me[e[t + 1]]}${Me[e[t + 2]]}${Me[e[t + 3]]}-${Me[e[t + 4]]}${Me[e[t + 5]]}-${Me[e[t + 6]]}${Me[e[t + 7]]}-${Me[e[t + 8]]}${Me[e[t + 9]]}-${Me[e[t + 10]]}${Me[e[t + 11]]}${Me[e[t + 12]]}${Me[e[t + 13]]}${Me[e[t + 14]]}${Me[e[t + 15]]}`
  ).toLowerCase();
}
const Sw = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const hh = { randomUUID: Sw };
function Ew(e, t, r) {
  if (hh.randomUUID && !t && !e) return hh.randomUUID();
  e = e || {};
  const n = e.random || (e.rng || vw)();
  if (((n[6] = (n[6] & 15) | 64), (n[8] = (n[8] & 63) | 128), t)) {
    r = r || 0;
    for (let i = 0; i < 16; ++i) t[r + i] = n[i];
    return t;
  }
  return gw(n);
}
var ww = function () {
    if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") return !1;
    if (typeof Symbol.iterator === "symbol") return !0;
    var t = {};
    var r = Symbol("test");
    var n = Object(r);
    if (
      typeof r === "string" ||
      Object.prototype.toString.call(r) !== "[object Symbol]" ||
      Object.prototype.toString.call(n) !== "[object Symbol]"
    )
      return !1;
    var i = 42;
    t[r] = i;
    for (r in t) return !1;
    if (
      (typeof Object.keys === "function" && Object.keys(t).length !== 0) ||
      (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(t).length !== 0)
    )
      return !1;
    var s = Object.getOwnPropertySymbols(t);
    if (s.length !== 1 || s[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r)) return !1;
    if (typeof Object.getOwnPropertyDescriptor === "function") {
      var o = Object.getOwnPropertyDescriptor(t, r);
      if (o.value !== i || o.enumerable !== !0) return !1;
    }
    return !0;
  };
var mh = typeof Symbol < "u" && Symbol;
var Pw = ww;
var $w = function () {
    return typeof mh !== "function" ||
      typeof Symbol !== "function" ||
      typeof mh("foo") !== "symbol" ||
      typeof Symbol("bar") !== "symbol"
      ? !1
      : Pw();
  };
var Ow = "Function.prototype.bind called on incompatible ";
var lu = Array.prototype.slice;
var Cw = Object.prototype.toString;
var Tw = "[object Function]";
var xw = function (t) {
    var r = this;
    if (typeof r !== "function" || Cw.call(r) !== Tw) throw new TypeError(Ow + r);
    for (
      var n = lu.call(arguments, 1),
        i,
        s = function () {
          if (this instanceof i) {
            var c = r.apply(this, n.concat(lu.call(arguments)));
            return Object(c) === c ? c : this;
          } else return r.apply(t, n.concat(lu.call(arguments)));
        },
        o = Math.max(0, r.length - n.length),
        a = [],
        l = 0;
      l < o;
      l++
    )
      a.push(`$${l}`);
    if (
      ((i = Function("binder", `return function (${a.join(",")}){ return binder.apply(this,arguments); }`)(s)),
      r.prototype)
    ) {
      var u = function () {};
      (u.prototype = r.prototype), (i.prototype = new u()), (u.prototype = null);
    }
    return i;
  };
var Rw = xw;
var rf = Function.prototype.bind || Rw;
var bw = rf;
var kw = bw.call(Function.call, Object.prototype.hasOwnProperty);
var ee;
var pi = SyntaxError;
var Jv = Function;
var ri = TypeError;
var uu = function (e) {
    try {
      return Jv(`"use strict"; return (${e}).constructor;`)();
    } catch {}
  };
var cn = Object.getOwnPropertyDescriptor;
if (cn)
  try {
    cn({}, "");
  } catch {
    cn = null;
  }
var cu = function () {
    throw new ri();
  };
var Aw = cn
    ? (function () {
        try {
          return arguments.callee, cu;
        } catch {
          try {
            return cn(arguments, "callee").get;
          } catch {
            return cu;
          }
        }
      })()
    : cu;
var An = $w();
var zt =
    Object.getPrototypeOf ||
    function (e) {
      return e.__proto__;
    };
var Nn = {};
var _w = typeof Uint8Array > "u" ? ee : zt(Uint8Array);
var dn = {
    "%AggregateError%": typeof AggregateError > "u" ? ee : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? ee : ArrayBuffer,
    "%ArrayIteratorPrototype%": An ? zt([][Symbol.iterator]()) : ee,
    "%AsyncFromSyncIteratorPrototype%": ee,
    "%AsyncFunction%": Nn,
    "%AsyncGenerator%": Nn,
    "%AsyncGeneratorFunction%": Nn,
    "%AsyncIteratorPrototype%": Nn,
    "%Atomics%": typeof Atomics > "u" ? ee : Atomics,
    "%BigInt%": typeof BigInt > "u" ? ee : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? ee : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? ee : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? ee : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Error,
    "%eval%": eval,
    "%EvalError%": EvalError,
    "%Float32Array%": typeof Float32Array > "u" ? ee : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? ee : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? ee : FinalizationRegistry,
    "%Function%": Jv,
    "%GeneratorFunction%": Nn,
    "%Int8Array%": typeof Int8Array > "u" ? ee : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? ee : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? ee : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": An ? zt(zt([][Symbol.iterator]())) : ee,
    "%JSON%": typeof JSON === "object" ? JSON : ee,
    "%Map%": typeof Map > "u" ? ee : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !An ? ee : zt(new Map()[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? ee : Promise,
    "%Proxy%": typeof Proxy > "u" ? ee : Proxy,
    "%RangeError%": RangeError,
    "%ReferenceError%": ReferenceError,
    "%Reflect%": typeof Reflect > "u" ? ee : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? ee : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !An ? ee : zt(new Set()[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? ee : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": An ? zt(""[Symbol.iterator]()) : ee,
    "%Symbol%": An ? Symbol : ee,
    "%SyntaxError%": pi,
    "%ThrowTypeError%": Aw,
    "%TypedArray%": _w,
    "%TypeError%": ri,
    "%Uint8Array%": typeof Uint8Array > "u" ? ee : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? ee : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? ee : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? ee : Uint32Array,
    "%URIError%": URIError,
    "%WeakMap%": typeof WeakMap > "u" ? ee : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? ee : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? ee : WeakSet,
  };
try {
  null.error;
} catch (e) {
  var Dw = zt(zt(e));
  dn["%Error.prototype%"] = Dw;
}
var Lw = function e(t) {
    var r;
    if (t === "%AsyncFunction%") r = uu("async function () {}");
    else if (t === "%GeneratorFunction%") r = uu("function* () {}");
    else if (t === "%AsyncGeneratorFunction%") r = uu("async function* () {}");
    else if (t === "%AsyncGenerator%") {
      var n = e("%AsyncGeneratorFunction%");
      n && (r = n.prototype);
    } else if (t === "%AsyncIteratorPrototype%") {
      var i = e("%AsyncGenerator%");
      i && (r = zt(i.prototype));
    }
    return (dn[t] = r), r;
  };
var yh = {
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"],
  };
var Us = rf;
var Ea = kw;
var Nw = Us.call(Function.call, Array.prototype.concat);
var Fw = Us.call(Function.apply, Array.prototype.splice);
var vh = Us.call(Function.call, String.prototype.replace);
var wa = Us.call(Function.call, String.prototype.slice);
var Mw = Us.call(Function.call, RegExp.prototype.exec);
var Iw = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var qw = /\\(\\)?/g;
var Uw = function (t) {
    var r = wa(t, 0, 1);
    var n = wa(t, -1);
    if (r === "%" && n !== "%") throw new pi("invalid intrinsic syntax, expected closing `%`");
    if (n === "%" && r !== "%") throw new pi("invalid intrinsic syntax, expected opening `%`");
    var i = [];
    return (
      vh(t, Iw, function (s, o, a, l) {
        i[i.length] = a ? vh(l, qw, "$1") : o || s;
      }),
      i
    );
  };
var jw = function (t, r) {
    var n = t;
    var i;
    if ((Ea(yh, n) && ((i = yh[n]), (n = `%${i[0]}%`)), Ea(dn, n))) {
      var s = dn[n];
      if ((s === Nn && (s = Lw(n)), typeof s > "u" && !r))
        throw new ri(`intrinsic ${t} exists, but is not available. Please file an issue!`);
      return { alias: i, name: n, value: s };
    }
    throw new pi(`intrinsic ${t} does not exist!`);
  };
var nf = function (t, r) {
    if (typeof t !== "string" || t.length === 0) throw new ri("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof r !== "boolean") throw new ri('"allowMissing" argument must be a boolean');
    if (Mw(/^%?[^%]*%?$/, t) === null)
      throw new pi("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var n = Uw(t);
    var i = n.length > 0 ? n[0] : "";
    var s = jw(`%${i}%`, r);
    var o = s.name;
    var a = s.value;
    var l = !1;
    var u = s.alias;
    u && ((i = u[0]), Fw(n, Nw([0, 1], u)));
    for (var c = 1, d = !0; c < n.length; c += 1) {
      var f = n[c];
      var v = wa(f, 0, 1);
      var g = wa(f, -1);
      if ((v === '"' || v === "'" || v === "`" || g === '"' || g === "'" || g === "`") && v !== g)
        throw new pi("property names with quotes must have matching quotes");
      if (((f === "constructor" || !d) && (l = !0), (i += `.${f}`), (o = `%${i}%`), Ea(dn, o))) a = dn[o];
      else if (a != null) {
        if (!(f in a)) {
          if (!r) throw new ri(`base intrinsic for ${t} exists, but the property is not available.`);
          return;
        }
        if (cn && c + 1 >= n.length) {
          var m = cn(a, f);
          (d = !!m), d && "get" in m && !("originalValue" in m.get) ? (a = m.get) : (a = a[f]);
        } else (d = Ea(a, f)), (a = a[f]);
        d && !l && (dn[o] = a);
      }
    }
    return a;
  };
var bc = {};
var Bw = {
    get exports() {
      return bc;
    },
    set exports(e) {
      bc = e;
    },
  };
(function (e) {
  var t = rf;
  var r = nf;
  var n = r("%Function.prototype.apply%");
  var i = r("%Function.prototype.call%");
  var s = r("%Reflect.apply%", !0) || t.call(i, n);
  var o = r("%Object.getOwnPropertyDescriptor%", !0);
  var a = r("%Object.defineProperty%", !0);
  var l = r("%Math.max%");
  if (a)
    try {
      a({}, "a", { value: 1 });
    } catch {
      a = null;
    }
  e.exports = function (d) {
    var f = s(t, i, arguments);
    if (o && a) {
      var v = o(f, "length");
      v.configurable && a(f, "length", { value: 1 + l(0, d.length - (arguments.length - 1)) });
    }
    return f;
  };
  var u = function () {
    return s(t, n, arguments);
  };
  a ? a(e.exports, "apply", { value: u }) : (e.exports.apply = u);
})(Bw);
var Xv = nf;
var Yv = bc;
var zw = Yv(Xv("String.prototype.indexOf"));
var Gw = function (t, r) {
    var n = Xv(t, !!r);
    return typeof n === "function" && zw(t, ".prototype.") > -1 ? Yv(n) : n;
  };
const Hw = {};
const Ww = Object.freeze(Object.defineProperty({ __proto__: null, default: Hw }, Symbol.toStringTag, { value: "Module" }));
const Qw = X0(Ww);
var sf = typeof Map === "function" && Map.prototype;
var du = Object.getOwnPropertyDescriptor && sf ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
var Pa = sf && du && typeof du.get === "function" ? du.get : null;
var gh = sf && Map.prototype.forEach;
var of = typeof Set === "function" && Set.prototype;
var fu = Object.getOwnPropertyDescriptor && of ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
var $a = of && fu && typeof fu.get === "function" ? fu.get : null;
var Sh = of && Set.prototype.forEach;
var Vw = typeof WeakMap === "function" && WeakMap.prototype;
var os = Vw ? WeakMap.prototype.has : null;
var Kw = typeof WeakSet === "function" && WeakSet.prototype;
var as = Kw ? WeakSet.prototype.has : null;
var Jw = typeof WeakRef === "function" && WeakRef.prototype;
var Eh = Jw ? WeakRef.prototype.deref : null;
var Xw = Boolean.prototype.valueOf;
var Yw = Object.prototype.toString;
var Zw = Function.prototype.toString;
var eP = String.prototype.match;
var af = String.prototype.slice;
var Ar = String.prototype.replace;
var tP = String.prototype.toUpperCase;
var wh = String.prototype.toLowerCase;
var Zv = RegExp.prototype.test;
var Ph = Array.prototype.concat;
var Gt = Array.prototype.join;
var rP = Array.prototype.slice;
var $h = Math.floor;
var kc = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
var pu = Object.getOwnPropertySymbols;
var Ac = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
var hi = typeof Symbol === "function" && typeof Symbol.iterator === "object";
var Je =
    typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hi || "symbol")
      ? Symbol.toStringTag
      : null;
var eg = Object.prototype.propertyIsEnumerable;
var Oh =
    (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) ||
    ([].__proto__ === Array.prototype
      ? function (e) {
          return e.__proto__;
        }
      : null);
function Ch(e, t) {
  if (e === 1 / 0 || e === -1 / 0 || e !== e || (e && e > -1e3 && e < 1e3) || Zv.call(/e/, t)) return t;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e === "number") {
    var n = e < 0 ? -$h(-e) : $h(e);
    if (n !== e) {
      var i = String(n);
      var s = af.call(t, i.length + 1);
      return `${Ar.call(i, r, "$&_")}.${Ar.call(Ar.call(s, /([0-9]{3})/g, "$&_"), /_$/, "")}`;
    }
  }
  return Ar.call(t, r, "$&_");
}
var _c = Qw;
var Th = _c.custom;
var xh = rg(Th) ? Th : null;
var nP = function e(t, r, n, i) {
    var s = r || {};
    if (Cr(s, "quoteStyle") && s.quoteStyle !== "single" && s.quoteStyle !== "double")
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (
      Cr(s, "maxStringLength") &&
      (typeof s.maxStringLength === "number"
        ? s.maxStringLength < 0 && s.maxStringLength !== 1 / 0
        : s.maxStringLength !== null)
    )
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var o = Cr(s, "customInspect") ? s.customInspect : !0;
    if (typeof o !== "boolean" && o !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (
      Cr(s, "indent") &&
      s.indent !== null &&
      s.indent !== "	" &&
      !(parseInt(s.indent, 10) === s.indent && s.indent > 0)
    )
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (Cr(s, "numericSeparator") && typeof s.numericSeparator !== "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var a = s.numericSeparator;
    if (typeof t > "u") return "undefined";
    if (t === null) return "null";
    if (typeof t === "boolean") return t ? "true" : "false";
    if (typeof t === "string") return ig(t, s);
    if (typeof t === "number") {
      if (t === 0) return 1 / 0 / t > 0 ? "0" : "-0";
      var l = String(t);
      return a ? Ch(t, l) : l;
    }
    if (typeof t === "bigint") {
      var u = `${String(t)}n`;
      return a ? Ch(t, u) : u;
    }
    var c = typeof s.depth > "u" ? 5 : s.depth;
    if ((typeof n > "u" && (n = 0), n >= c && c > 0 && typeof t === "object")) return Dc(t) ? "[Array]" : "[Object]";
    var d = wP(s, n);
    if (typeof i > "u") i = [];
    else if (ng(i, t) >= 0) return "[Circular]";
    function f(Se, Fe, at) {
      if ((Fe && ((i = rP.call(i)), i.push(Fe)), at)) {
        var ue = { depth: s.depth };
        return Cr(s, "quoteStyle") && (ue.quoteStyle = s.quoteStyle), e(Se, ue, n + 1, i);
      }
      return e(Se, s, n + 1, i);
    }
    if (typeof t === "function" && !Rh(t)) {
      var v = fP(t);
      var g = vo(t, f);
      return (
        `[Function${(v ? `: ${v}` : " (anonymous)")}]${(g.length > 0 ? ` { ${Gt.call(g, ", ")} }` : "")}`
      );
    }
    if (rg(t)) {
      var m = hi ? Ar.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : Ac.call(t);
      return typeof t === "object" && !hi ? ji(m) : m;
    }
    if (gP(t)) {
      for (var w = `<${wh.call(String(t.nodeName))}`, p = t.attributes || [], h = 0; h < p.length; h++)
        w += ` ${p[h].name}=${tg(iP(p[h].value), "double", s)}`;
      return (
        (w += ">"),
        t.childNodes?.length && (w += "..."),
        (w += `</${wh.call(String(t.nodeName))}>`),
        w
      );
    }
    if (Dc(t)) {
      if (t.length === 0) return "[]";
      var y = vo(t, f);
      return d && !EP(y) ? `[${Lc(y, d)}]` : `[ ${Gt.call(y, ", ")} ]`;
    }
    if (oP(t)) {
      var S = vo(t, f);
      return !("cause" in Error.prototype) && "cause" in t && !eg.call(t, "cause")
        ? `{ [${String(t)}] ${Gt.call(Ph.call(`[cause]: ${f(t.cause)}`, S), ", ")} }`
        : S.length === 0
        ? `[${String(t)}]`
        : `{ [${String(t)}] ${Gt.call(S, ", ")} }`;
    }
    if (typeof t === "object" && o) {
      if (xh && typeof t[xh] === "function" && _c) return _c(t, { depth: c - n });
      if (o !== "symbol" && typeof t.inspect === "function") return t.inspect();
    }
    if (pP(t)) {
      var x = [];
      return (
        gh?.call(t, function (Se, Fe) {
            x.push(`${f(Fe, t, !0)} => ${f(Se, t)}`);
          }),
        bh("Map", Pa.call(t), x, d)
      );
    }
    if (yP(t)) {
      var b = [];
      return (
        Sh?.call(t, function (Se) {
            b.push(f(Se, t));
          }),
        bh("Set", $a.call(t), b, d)
      );
    }
    if (hP(t)) return hu("WeakMap");
    if (vP(t)) return hu("WeakSet");
    if (mP(t)) return hu("WeakRef");
    if (lP(t)) return ji(f(Number(t)));
    if (cP(t)) return ji(f(kc.call(t)));
    if (uP(t)) return ji(Xw.call(t));
    if (aP(t)) return ji(f(String(t)));
    if (!(sP(t) || Rh(t))) {
      var L = vo(t, f);
      var O = Oh ? Oh(t) === Object.prototype : t instanceof Object || t.constructor === Object;
      var j = t instanceof Object ? "" : "null prototype";
      var M = !O && Je && Object(t) === t && Je in t ? af.call(Vr(t), 8, -1) : j ? "Object" : "";
      var J = O || typeof t.constructor !== "function" ? "" : t.constructor.name ? `${t.constructor.name} ` : "";
      var de = J + (M || j ? `[${Gt.call(Ph.call([], M || [], j || []), ": ")}] ` : "");
      return L.length === 0 ? `${de}{}` : d ? `${de}{${Lc(L, d)}}` : `${de}{ ${Gt.call(L, ", ")} }`;
    }
    return String(t);
  };
function tg(e, t, r) {
  var n = (r.quoteStyle || t) === "double" ? '"' : "'";
  return n + e + n;
}
function iP(e) {
  return Ar.call(String(e), /"/g, "&quot;");
}
function Dc(e) {
  return Vr(e) === "[object Array]" && (!(Je && (typeof e === "object" && Je in e)));
}
function sP(e) {
  return Vr(e) === "[object Date]" && (!(Je && (typeof e === "object" && Je in e)));
}
function Rh(e) {
  return Vr(e) === "[object RegExp]" && (!(Je && (typeof e === "object" && Je in e)));
}
function oP(e) {
  return Vr(e) === "[object Error]" && (!(Je && (typeof e === "object" && Je in e)));
}
function aP(e) {
  return Vr(e) === "[object String]" && (!(Je && (typeof e === "object" && Je in e)));
}
function lP(e) {
  return Vr(e) === "[object Number]" && (!(Je && (typeof e === "object" && Je in e)));
}
function uP(e) {
  return Vr(e) === "[object Boolean]" && (!(Je && (typeof e === "object" && Je in e)));
}
function rg(e) {
  if (hi) return e && typeof e === "object" && e instanceof Symbol;
  if (typeof e === "symbol") return !0;
  if (!e || typeof e !== "object" || !Ac) return !1;
  try {
    return Ac.call(e), !0;
  } catch {}
  return !1;
}
function cP(e) {
  if (!e || typeof e !== "object" || !kc) return !1;
  try {
    return kc.call(e), !0;
  } catch {}
  return !1;
}
var dP =
  Object.prototype.hasOwnProperty ||
  function (e) {
    return e in this;
  };
function Cr(e, t) {
  return dP.call(e, t);
}
function Vr(e) {
  return Yw.call(e);
}
function fP(e) {
  if (e.name) return e.name;
  var t = eP.call(Zw.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function ng(e, t) {
  if (e.indexOf) return e.indexOf(t);
  for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
  return -1;
}
function pP(e) {
  if (!(Pa && e ) || typeof e !== "object") return !1;
  try {
    Pa.call(e);
    try {
      $a.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {}
  return !1;
}
function hP(e) {
  if (!(os && e ) || typeof e !== "object") return !1;
  try {
    os.call(e, os);
    try {
      as.call(e, as);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {}
  return !1;
}
function mP(e) {
  if (!(Eh && e ) || typeof e !== "object") return !1;
  try {
    return Eh.call(e), !0;
  } catch {}
  return !1;
}
function yP(e) {
  if (!($a && e ) || typeof e !== "object") return !1;
  try {
    $a.call(e);
    try {
      Pa.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {}
  return !1;
}
function vP(e) {
  if (!(as && e ) || typeof e !== "object") return !1;
  try {
    as.call(e, as);
    try {
      os.call(e, os);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {}
  return !1;
}
function gP(e) {
  return !e || typeof e !== "object"
    ? !1
    : typeof HTMLElement < "u" && e instanceof HTMLElement
    ? !0
    : typeof e.nodeName === "string" && typeof e.getAttribute === "function";
}
function ig(e, t) {
  if (e.length > t.maxStringLength) {
    var r = e.length - t.maxStringLength;
    var n = `... ${r} more character${(r > 1 ? "s" : "")}`;
    return ig(af.call(e, 0, t.maxStringLength), t) + n;
  }
  var i = Ar.call(Ar.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, SP);
  return tg(i, "single", t);
}
function SP(e) {
  var t = e.charCodeAt(0);
  var r = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[t];
  return r ? `\\${r}` : `\\x${(t < 16 ? "0" : "")}${tP.call(t.toString(16))}`;
}
function ji(e) {
  return `Object(${e})`;
}
function hu(e) {
  return `${e} { ? }`;
}
function bh(e, t, r, n) {
  var i = n ? Lc(r, n) : Gt.call(r, ", ");
  return `${e} (${t}) {${i}}`;
}
function EP(e) {
  for (var t = 0; t < e.length; t++)
    if (
      ng(
        e[t],
        `
`,
      ) >= 0
    )
      return !1;
  return !0;
}
function wP(e, t) {
  var r;
  if (e.indent === "	") r = "	";
  else if (typeof e.indent === "number" && e.indent > 0) r = Gt.call(Array(e.indent + 1), " ");
  else return null;
  return { base: r, prev: Gt.call(Array(t + 1), r) };
}
function Lc(e, t) {
  if (e.length === 0) return "";
  var r =
    `
${t.prev}${t.base}`;
  return (
    `${r}${Gt.call(e, `,${r}`)}
${t.prev}`
  );
}
function vo(e, t) {
  var r = Dc(e);
  var n = [];
  if (r) {
    n.length = e.length;
    for (var i = 0; i < e.length; i++) n[i] = Cr(e, i) ? t(e[i], e) : "";
  }
  var s = typeof pu === "function" ? pu(e) : [];
  var o;
  if (hi) {
    o = {};
    for (var a = 0; a < s.length; a++) o[`$${s[a]}`] = s[a];
  }
  for (var l in e)
    Cr(e, l) &&
      ((r && String(Number(l)) === l && l < e.length) ||
        (hi && o[`$${l}`] instanceof Symbol) ||
        (Zv.call(/[^\w$]/, l) ? n.push(`${t(l, e)}: ${t(e[l], e)}`) : n.push(`${l}: ${t(e[l], e)}`)));
  if (typeof pu === "function")
    for (var u = 0; u < s.length; u++) eg.call(e, s[u]) && n.push(`[${t(s[u])}]: ${t(e[s[u]], e)}`);
  return n;
}
var lf = nf;
var $i = Gw;
var PP = nP;
var $P = lf("%TypeError%");
var go = lf("%WeakMap%", !0);
var So = lf("%Map%", !0);
var OP = $i("WeakMap.prototype.get", !0);
var CP = $i("WeakMap.prototype.set", !0);
var TP = $i("WeakMap.prototype.has", !0);
var xP = $i("Map.prototype.get", !0);
var RP = $i("Map.prototype.set", !0);
var bP = $i("Map.prototype.has", !0);
var uf = function (e, t) {
    for (var r = e, n; (n = r.next) !== null; r = n)
      if (n.key === t) return (r.next = n.next), (n.next = e.next), (e.next = n), n;
  };
var kP = function (e, t) {
    var r = uf(e, t);
    return r?.value;
  };
var AP = function (e, t, r) {
    var n = uf(e, t);
    n ? (n.value = r) : (e.next = { key: t, next: e.next, value: r });
  };
var _P = function (e, t) {
    return !!uf(e, t);
  };
var DP = function () {
    var t;
    var r;
    var n;
    var i = {
        assert: function (s) {
          if (!i.has(s)) throw new $P(`Side channel does not contain ${PP(s)}`);
        },
        get: function (s) {
          if (go && s && (typeof s === "object" || typeof s === "function")) {
            if (t) return OP(t, s);
          } else if (So) {
            if (r) return xP(r, s);
          } else if (n) return kP(n, s);
        },
        has: function (s) {
          if (go && s && (typeof s === "object" || typeof s === "function")) {
            if (t) return TP(t, s);
          } else if (So) {
            if (r) return bP(r, s);
          } else if (n) return _P(n, s);
          return !1;
        },
        set: function (s, o) {
          go && s && (typeof s === "object" || typeof s === "function")
            ? (t || (t = new go()), CP(t, s, o))
            : So
            ? (r || (r = new So()), RP(r, s, o))
            : (n || (n = { key: {}, next: null }), AP(n, s, o));
        },
      };
    return i;
  };
var LP = String.prototype.replace;
var NP = /%20/g;
var mu = { RFC1738: "RFC1738", RFC3986: "RFC3986" };
var cf = {
    default: mu.RFC3986,
    formatters: {
      RFC1738: function (e) {
        return LP.call(e, NP, "+");
      },
      RFC3986: function (e) {
        return String(e);
      },
    },
    RFC1738: mu.RFC1738,
    RFC3986: mu.RFC3986,
  };
var FP = cf;
var yu = Object.prototype.hasOwnProperty;
var tn = Array.isArray;
var jt = (function () {
    for (var e = [], t = 0; t < 256; ++t) e.push(`%${((t < 16 ? "0" : "") + t.toString(16)).toUpperCase()}`);
    return e;
  })();
var MP = function (t) {
    while (t.length > 1) {
      var r = t.pop();
      var n = r.obj[r.prop];
      if (tn(n)) {
        for (var i = [], s = 0; s < n.length; ++s) typeof n[s] < "u" && i.push(n[s]);
        r.obj[r.prop] = i;
      }
    }
  };
var sg = function (t, r) {
    for (var n = r?.plainObjects ? Object.create(null) : {}, i = 0; i < t.length; ++i)
      typeof t[i] < "u" && (n[i] = t[i]);
    return n;
  };
var IP = function e(t, r, n) {
    if (!r) return t;
    if (typeof r !== "object") {
      if (tn(t)) t.push(r);
      else if (t && typeof t === "object")
        ((n && (n.plainObjects || n.allowPrototypes)) || !yu.call(Object.prototype, r)) && (t[r] = !0);
      else return [t, r];
      return t;
    }
    if (!t || typeof t !== "object") return [t].concat(r);
    var i = t;
    return (
      tn(t) && !tn(r) && (i = sg(t, n)),
      tn(t) && tn(r)
        ? (r.forEach(function (s, o) {
            if (yu.call(t, o)) {
              var a = t[o];
              a && typeof a === "object" && s && typeof s === "object" ? (t[o] = e(a, s, n)) : t.push(s);
            } else t[o] = s;
          }),
          t)
        : Object.keys(r).reduce(function (s, o) {
            var a = r[o];
            return yu.call(s, o) ? (s[o] = e(s[o], a, n)) : (s[o] = a), s;
          }, i)
    );
  };
var qP = function (t, r) {
    return Object.keys(r).reduce(function (n, i) {
      return (n[i] = r[i]), n;
    }, t);
  };
var UP = function (e, t, r) {
    var n = e.replace(/\+/g, " ");
    if (r === "iso-8859-1") return n.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(n);
    } catch {
      return n;
    }
  };
var jP = function (t, r, n, i, s) {
    if (t.length === 0) return t;
    var o = t;
    if (
      (typeof t === "symbol" ? (o = Symbol.prototype.toString.call(t)) : typeof t !== "string" && (o = String(t)),
      n === "iso-8859-1")
    )
      return escape(o).replace(/%u[0-9a-f]{4}/gi, function (c) {
        return `%26%23${parseInt(c.slice(2), 16)}%3B`;
      });
    for (var a = "", l = 0; l < o.length; ++l) {
      var u = o.charCodeAt(l);
      if (
        u === 45 ||
        u === 46 ||
        u === 95 ||
        u === 126 ||
        (u >= 48 && u <= 57) ||
        (u >= 65 && u <= 90) ||
        (u >= 97 && u <= 122) ||
        (s === FP.RFC1738 && (u === 40 || u === 41))
      ) {
        a += o.charAt(l);
        continue;
      }
      if (u < 128) {
        a = a + jt[u];
        continue;
      }
      if (u < 2048) {
        a = a + (jt[192 | (u >> 6)] + jt[128 | (u & 63)]);
        continue;
      }
      if (u < 55296 || u >= 57344) {
        a = a + (jt[224 | (u >> 12)] + jt[128 | ((u >> 6) & 63)] + jt[128 | (u & 63)]);
        continue;
      }
      (l += 1),
        (u = 65536 + (((u & 1023) << 10) | (o.charCodeAt(l) & 1023))),
        (a += jt[240 | (u >> 18)] + jt[128 | ((u >> 12) & 63)] + jt[128 | ((u >> 6) & 63)] + jt[128 | (u & 63)]);
    }
    return a;
  };
var BP = function (t) {
    for (var r = [{ obj: { o: t }, prop: "o" }], n = [], i = 0; i < r.length; ++i)
      for (var s = r[i], o = s.obj[s.prop], a = Object.keys(o), l = 0; l < a.length; ++l) {
        var u = a[l];
        var c = o[u];
        typeof c === "object" && c !== null && n.indexOf(c) === -1 && (r.push({ obj: o, prop: u }), n.push(c));
      }
    return MP(r), t;
  };
var zP = function (t) {
    return Object.prototype.toString.call(t) === "[object RegExp]";
  };
var GP = function (t) {
    return !t || typeof t !== "object" ? !1 : !!(t.constructor?.isBuffer?.(t));
  };
var HP = function (t, r) {
    return [].concat(t, r);
  };
var WP = function (t, r) {
    if (tn(t)) {
      for (var n = [], i = 0; i < t.length; i += 1) n.push(r(t[i]));
      return n;
    }
    return r(t);
  };
var og = {
    arrayToObject: sg,
    assign: qP,
    combine: HP,
    compact: BP,
    decode: UP,
    encode: jP,
    isBuffer: GP,
    isRegExp: zP,
    maybeMap: WP,
    merge: IP,
  };
var ag = DP;
var Nc = og;
var ls = cf;
var QP = Object.prototype.hasOwnProperty;
var kh = {
    brackets: function (t) {
      return `${t}[]`;
    },
    comma: "comma",
    indices: function (t, r) {
      return `${t}[${r}]`;
    },
    repeat: function (t) {
      return t;
    },
  };
var sr = Array.isArray;
var VP = String.prototype.split;
var KP = Array.prototype.push;
var lg = function (e, t) {
    KP.apply(e, sr(t) ? t : [t]);
  };
var JP = Date.prototype.toISOString;
var Ah = ls.default;
var Ie = {
    addQueryPrefix: !1,
    allowDots: !1,
    charset: "utf-8",
    charsetSentinel: !1,
    delimiter: "&",
    encode: !0,
    encoder: Nc.encode,
    encodeValuesOnly: !1,
    format: Ah,
    formatter: ls.formatters[Ah],
    indices: !1,
    serializeDate: function (t) {
      return JP.call(t);
    },
    skipNulls: !1,
    strictNullHandling: !1,
  };
var XP = function (t) {
    return (
      typeof t === "string" ||
      typeof t === "number" ||
      typeof t === "boolean" ||
      typeof t === "symbol" ||
      typeof t === "bigint"
    );
  };
var vu = {};
var YP = function e(t, r, n, i, s, o, a, l, u, c, d, f, v, g, m, w) {
    for (var p = t, h = w, y = 0, S = !1; (h = h.get(vu)) !== void 0 && !S; ) {
      var x = h.get(t);
      if (((y += 1), typeof x < "u")) {
        if (x === y) throw new RangeError("Cyclic object value");
        S = !0;
      }
      typeof h.get(vu) > "u" && (y = 0);
    }
    if (
      (typeof l === "function"
        ? (p = l(r, p))
        : p instanceof Date
        ? (p = d(p))
        : n === "comma" &&
          sr(p) &&
          (p = Nc.maybeMap(p, function (Q) {
            return Q instanceof Date ? d(Q) : Q;
          })),
      p === null)
    ) {
      if (s) return a && !g ? a(r, Ie.encoder, m, "key", f) : r;
      p = "";
    }
    if (XP(p) || Nc.isBuffer(p)) {
      if (a) {
        var b = g ? r : a(r, Ie.encoder, m, "key", f);
        if (n === "comma" && g) {
          for (var L = VP.call(String(p), ","), O = "", j = 0; j < L.length; ++j)
            O += (j === 0 ? "" : ",") + v(a(L[j], Ie.encoder, m, "value", f));
          return [`${v(b)}${(i && sr(p) && L.length === 1 ? "[]" : "")}=${O}`];
        }
        return [`${v(b)}=${v(a(p, Ie.encoder, m, "value", f))}`];
      }
      return [`${v(r)}=${v(String(p))}`];
    }
    var M = [];
    if (typeof p > "u") return M;
    var J;
    if (n === "comma" && sr(p)) J = [{ value: p.length > 0 ? p.join(",") || null : void 0 }];
    else if (sr(l)) J = l;
    else {
      var de = Object.keys(p);
      J = u ? de.sort(u) : de;
    }
    for (var Se = i && sr(p) && p.length === 1 ? `${r}[]` : r, Fe = 0; Fe < J.length; ++Fe) {
      var at = J[Fe];
      var ue = typeof at === "object" && typeof at.value < "u" ? at.value : p[at];
      if (!(o && ue === null)) {
        var xt = sr(p) ? (typeof n === "function" ? n(Se, at) : Se) : Se + (c ? `.${at}` : `[${at}]`);
        w.set(t, y);
        var I = ag();
        I.set(vu, w), lg(M, e(ue, xt, n, i, s, o, a, l, u, c, d, f, v, g, m, I));
      }
    }
    return M;
  };
var ZP = function (t) {
    if (!t) return Ie;
    if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder !== "function")
      throw new TypeError("Encoder has to be a function.");
    var r = t.charset || Ie.charset;
    if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var n = ls.default;
    if (typeof t.format < "u") {
      if (!QP.call(ls.formatters, t.format)) throw new TypeError("Unknown format option provided.");
      n = t.format;
    }
    var i = ls.formatters[n];
    var s = Ie.filter;
    return (
      (typeof t.filter === "function" || sr(t.filter)) && (s = t.filter),
      {
        addQueryPrefix: typeof t.addQueryPrefix === "boolean" ? t.addQueryPrefix : Ie.addQueryPrefix,
        allowDots: typeof t.allowDots > "u" ? Ie.allowDots : !!t.allowDots,
        charset: r,
        charsetSentinel: typeof t.charsetSentinel === "boolean" ? t.charsetSentinel : Ie.charsetSentinel,
        delimiter: typeof t.delimiter > "u" ? Ie.delimiter : t.delimiter,
        encode: typeof t.encode === "boolean" ? t.encode : Ie.encode,
        encoder: typeof t.encoder === "function" ? t.encoder : Ie.encoder,
        encodeValuesOnly: typeof t.encodeValuesOnly === "boolean" ? t.encodeValuesOnly : Ie.encodeValuesOnly,
        filter: s,
        format: n,
        formatter: i,
        serializeDate: typeof t.serializeDate === "function" ? t.serializeDate : Ie.serializeDate,
        skipNulls: typeof t.skipNulls === "boolean" ? t.skipNulls : Ie.skipNulls,
        sort: typeof t.sort === "function" ? t.sort : null,
        strictNullHandling: typeof t.strictNullHandling === "boolean" ? t.strictNullHandling : Ie.strictNullHandling,
      }
    );
  };
var e$ = function (e, t) {
    var r = e;
    var n = ZP(t);
    var i;
    var s;
    typeof n.filter === "function" ? ((s = n.filter), (r = s("", r))) : sr(n.filter) && ((s = n.filter), (i = s));
    var o = [];
    if (typeof r !== "object" || r === null) return "";
    var a;
    t && t.arrayFormat in kh
      ? (a = t.arrayFormat)
      : t && "indices" in t
      ? (a = t.indices ? "indices" : "repeat")
      : (a = "indices");
    var l = kh[a];
    if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip !== "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var u = l === "comma" && t && t.commaRoundTrip;
    i || (i = Object.keys(r)), n.sort && i.sort(n.sort);
    for (var c = ag(), d = 0; d < i.length; ++d) {
      var f = i[d];
      (n.skipNulls && r[f] === null) ||
        lg(
          o,
          YP(
            r[f],
            f,
            l,
            u,
            n.strictNullHandling,
            n.skipNulls,
            n.encode ? n.encoder : null,
            n.filter,
            n.sort,
            n.allowDots,
            n.serializeDate,
            n.format,
            n.formatter,
            n.encodeValuesOnly,
            n.charset,
            c,
          ),
        );
    }
    var v = o.join(n.delimiter);
    var g = n.addQueryPrefix === !0 ? "?" : "";
    return (
      n.charsetSentinel && (n.charset === "iso-8859-1" ? (g += "utf8=%26%2310003%3B&") : (g += "utf8=%E2%9C%93&")),
      v.length > 0 ? g + v : ""
    );
  };
var mi = og;
var Fc = Object.prototype.hasOwnProperty;
var t$ = Array.isArray;
var De = {
    allowDots: !1,
    allowPrototypes: !1,
    allowSparse: !1,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: !1,
    comma: !1,
    decoder: mi.decode,
    delimiter: "&",
    depth: 5,
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictNullHandling: !1,
  };
var r$ = function (e) {
    return e.replace(/&#(\d+);/g, function (t, r) {
      return String.fromCharCode(parseInt(r, 10));
    });
  };
var ug = function (e, t) {
    return e && typeof e === "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e;
  };
var n$ = "utf8=%26%2310003%3B";
var i$ = "utf8=%E2%9C%93";
var s$ = function (t, r) {
    var n = {};
    var i = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t;
    var s = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit;
    var o = i.split(r.delimiter, s);
    var a = -1;
    var l;
    var u = r.charset;
    if (r.charsetSentinel)
      for (l = 0; l < o.length; ++l)
        o[l].indexOf("utf8=") === 0 &&
          (o[l] === i$ ? (u = "utf-8") : o[l] === n$ && (u = "iso-8859-1"), (a = l), (l = o.length));
    for (l = 0; l < o.length; ++l)
      if (l !== a) {
        var c = o[l];
        var d = c.indexOf("]=");
        var f = d === -1 ? c.indexOf("=") : d + 1;
        var v;
        var g;
        f === -1
          ? ((v = r.decoder(c, De.decoder, u, "key")), (g = r.strictNullHandling ? null : ""))
          : ((v = r.decoder(c.slice(0, f), De.decoder, u, "key")),
            (g = mi.maybeMap(ug(c.slice(f + 1), r), function (m) {
              return r.decoder(m, De.decoder, u, "value");
            }))),
          g && r.interpretNumericEntities && u === "iso-8859-1" && (g = r$(g)),
          c.indexOf("[]=") > -1 && (g = t$(g) ? [g] : g),
          Fc.call(n, v) ? (n[v] = mi.combine(n[v], g)) : (n[v] = g);
      }
    return n;
  };
var o$ = function (e, t, r, n) {
    for (var i = n ? t : ug(t, r), s = e.length - 1; s >= 0; --s) {
      var o;
      var a = e[s];
      if (a === "[]" && r.parseArrays) o = [].concat(i);
      else {
        o = r.plainObjects ? Object.create(null) : {};
        var l = a.charAt(0) === "[" && a.charAt(a.length - 1) === "]" ? a.slice(1, -1) : a;
        var u = parseInt(l, 10);
        !r.parseArrays && l === ""
          ? (o = { 0: i })
          : !isNaN(u) && a !== l && String(u) === l && u >= 0 && r.parseArrays && u <= r.arrayLimit
          ? ((o = []), (o[u] = i))
          : l !== "__proto__" && (o[l] = i);
      }
      i = o;
    }
    return i;
  };
var a$ = function (t, r, n, i) {
    if (t) {
      var s = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t;
      var o = /(\[[^[\]]*])/;
      var a = /(\[[^[\]]*])/g;
      var l = n.depth > 0 && o.exec(s);
      var u = l ? s.slice(0, l.index) : s;
      var c = [];
      if (u) {
        if (!n.plainObjects && Fc.call(Object.prototype, u) && !n.allowPrototypes) return;
        c.push(u);
      }
      for (var d = 0; n.depth > 0 && (l = a.exec(s)) !== null && d < n.depth; ) {
        if (((d += 1), !n.plainObjects && Fc.call(Object.prototype, l[1].slice(1, -1)) && !n.allowPrototypes)) return;
        c.push(l[1]);
      }
      return l && c.push(`[${s.slice(l.index)}]`), o$(c, r, n, i);
    }
  };
var l$ = function (t) {
    if (!t) return De;
    if (t.decoder !== null && t.decoder !== void 0 && typeof t.decoder !== "function")
      throw new TypeError("Decoder has to be a function.");
    if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var r = typeof t.charset > "u" ? De.charset : t.charset;
    return {
      allowDots: typeof t.allowDots > "u" ? De.allowDots : !!t.allowDots,
      allowPrototypes: typeof t.allowPrototypes === "boolean" ? t.allowPrototypes : De.allowPrototypes,
      allowSparse: typeof t.allowSparse === "boolean" ? t.allowSparse : De.allowSparse,
      arrayLimit: typeof t.arrayLimit === "number" ? t.arrayLimit : De.arrayLimit,
      charset: r,
      charsetSentinel: typeof t.charsetSentinel === "boolean" ? t.charsetSentinel : De.charsetSentinel,
      comma: typeof t.comma === "boolean" ? t.comma : De.comma,
      decoder: typeof t.decoder === "function" ? t.decoder : De.decoder,
      delimiter: typeof t.delimiter === "string" || mi.isRegExp(t.delimiter) ? t.delimiter : De.delimiter,
      depth: typeof t.depth === "number" || t.depth === !1 ? +t.depth : De.depth,
      ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
      interpretNumericEntities:
        typeof t.interpretNumericEntities === "boolean" ? t.interpretNumericEntities : De.interpretNumericEntities,
      parameterLimit: typeof t.parameterLimit === "number" ? t.parameterLimit : De.parameterLimit,
      parseArrays: t.parseArrays !== !1,
      plainObjects: typeof t.plainObjects === "boolean" ? t.plainObjects : De.plainObjects,
      strictNullHandling: typeof t.strictNullHandling === "boolean" ? t.strictNullHandling : De.strictNullHandling,
    };
  };
var u$ = function (e, t) {
    var r = l$(t);
    if (e === "" || e === null || typeof e > "u") return r.plainObjects ? Object.create(null) : {};
    for (
      var n = typeof e === "string" ? s$(e, r) : e,
        i = r.plainObjects ? Object.create(null) : {},
        s = Object.keys(n),
        o = 0;
      o < s.length;
      ++o
    ) {
      var a = s[o];
      var l = a$(a, n[a], r, typeof e === "string");
      i = mi.merge(i, l, r);
    }
    return r.allowSparse === !0 ? i : mi.compact(i);
  };
var c$ = e$;
var d$ = u$;
var f$ = cf;
var B = { formats: f$, parse: d$, stringify: c$ };
var Oi = class extends Error {
    constructor() {
      super();
    }
    static factory(e) {
      switch (e) {
        case Fn.INVALID_REQUEST:
          return new p$();
        case Fn.AUTHENTICATION:
          return new m$();
        case Fn.API:
          return new h$();
        case Fn.PERMISSION:
          return new y$();
        case Fn.CONNECTION:
          return new v$();
      }
    }
  };
var Fn = ((e) => (
    (e[(e.INVALID_REQUEST = 0)] = "INVALID_REQUEST"),
    (e[(e.API = 1)] = "API"),
    (e[(e.AUTHENTICATION = 2)] = "AUTHENTICATION"),
    (e[(e.PERMISSION = 3)] = "PERMISSION"),
    (e[(e.CONNECTION = 4)] = "CONNECTION"),
    e
  ))(Fn || {});
var p$ = class extends Oi {};
var h$ = class extends Oi {};
var m$ = class extends Oi {};
var y$ = class extends Oi {};
var v$ = class extends Oi {};
var g$ = class {
    constructor() {
      this.publishableApiKey = null;
    }
    registerPublishableApiKey(t) {
      this.publishableApiKey = t;
    }
    getPublishableApiKey() {
      return this.publishableApiKey;
    }
  };
var cg = new g$();
var S$ = {
    "/admin/auth": "POST",
    "/admin/users/password-token": "POST",
    "/admin/users/reset-password": "POST",
    "/admin/invites/accept": "POST",
  };
var _h = { maxRetries: 0, baseUrl: "http://localhost:9000" };
var E$ = class {
    constructor(t) {
      (this.axiosClient = this.createClient({ ..._h, ...t })), (this.config = { ..._h, ...t });
    }
    shouldRetryCondition(t, r, n) {
      return r >= n
        ? !1
        : !t.response || t.response.status === 409 || (t.response.status > 500 && t.response.status <= 599);
    }
    normalizeHeaders(t) {
      return t && typeof t === "object"
        ? Object.keys(t).reduce((r, n) => ((r[this.normalizeHeader(n)] = t[n]), r), {})
        : t;
    }
    normalizeHeader(t) {
      return t
        .split("-")
        .map((r) => r.charAt(0).toUpperCase() + r.substr(1).toLowerCase())
        .join("-");
    }
    requiresAuthentication(t, r) {
      return t.startsWith("/admin") && S$[t] !== r;
    }
    setHeaders(t, r, n, i = {}) {
      let s = { Accept: "application/json", "Content-Type": "application/json" };
      this.config.apiKey &&
        this.requiresAuthentication(n, r) &&
        (s = { ...s, Authorization: `Bearer ${this.config.apiKey}` });
      let o = this.config.publishableApiKey || cg.getPublishableApiKey();
      return (
        o && (s["x-publishable-api-key"] = o),
        this.config.maxRetries > 0 && r === "POST" && (s["Idempotency-Key"] = Ew()),
        Object.assign({}, s, this.normalizeHeaders(t), i)
      );
    }
    createClient(t) {
      let r = Sa.create({ baseURL: t.baseUrl });
      return (
        fw(r),
        (r.defaults.raxConfig = {
          instance: r,
          retry: t.maxRetries,
          backoffType: "exponential",
          shouldRetry: (n) => {
            let i = Kv(n);
            return i ? this.shouldRetryCondition(n, i.currentRetryAttempt ?? 1, i.retry ?? 3) : !1;
          },
        }),
        r
      );
    }
    async request(t, r, n = {}, i = {}, s = {}) {
      let o = { method: t, withCredentials: !0, url: r, json: !0, headers: this.setHeaders(i, t, r, s) };
      ["POST", "DELETE"].includes(t) && (o.data = n);
      let { data: a, ...l } = await this.axiosClient(o);
      return { ...a, response: l };
    }
  };
var w$ = E$;
var G = class {
    constructor(t) {
      this.client = t;
    }
  };
var P$ = class extends G {
    getSession(t = {}) {
      let r = "/admin/auth";
      return this.client.request("GET", r, void 0, {}, t);
    }
    deleteSession(t = {}) {
      let r = "/admin/auth";
      return this.client.request("DELETE", r, void 0, {}, t);
    }
    createSession(t, r = {}) {
      let n = "/admin/auth";
      return this.client.request("POST", n, t, {}, r);
    }
  };
var $$ = P$;
function O$(e) {
  let t = (r) => {
    let n = {};
    return (
      Object.keys(r).reduce(
        (i, s) => (r[s] === null ? (i[s] = "null") : typeof r[s] === "object" ? (i[s] = t(r[s])) : (i[s] = r[s]), i),
        n,
      ),
      n
    );
  };
  return t(e);
}
var C$ = class extends G {
    create(e, t = {}) {
      let r = "/admin/batch-jobs";
      return this.client.request("POST", r, e, {}, t);
    }
    list(e, t = {}) {
      let r = "/admin/batch-jobs";
      return e && (r = `/admin/batch-jobs?${B.stringify(O$(e))}`), this.client.request("GET", r, void 0, {}, t);
    }
    cancel(e, t = {}) {
      let r = `/admin/batch-jobs/${e}/cancel`;
      return this.client.request("POST", r, void 0, {}, t);
    }
    confirm(e, t = {}) {
      let r = `/admin/batch-jobs/${e}/confirm`;
      return this.client.request("POST", r, void 0, {}, t);
    }
    retrieve(e, t = {}) {
      let r = `/admin/batch-jobs/${e}`;
      return this.client.request("GET", r, void 0, {}, t);
    }
  };
var T$ = C$;
var x$ = class extends G {
    create(t, r = {}) {
      let n = "/admin/collections";
      return this.client.request("POST", n, t, {}, r);
    }
    update(t, r, n = {}) {
      let i = `/admin/collections/${t}`;
      return this.client.request("POST", i, r, {}, n);
    }
    delete(t, r = {}) {
      let n = `/admin/collections/${t}`;
      return this.client.request("DELETE", n, void 0, {}, r);
    }
    retrieve(t, r = {}) {
      let n = `/admin/collections/${t}`;
      return this.client.request("GET", n, void 0, {}, r);
    }
    list(t, r = {}) {
      let n = "/admin/collections";
      return t && (n = `/admin/collections?${B.stringify(t)}`), this.client.request("GET", n, void 0, {}, r);
    }
    addProducts(t, r, n = {}) {
      let i = `/admin/collections/${t}/products/batch`;
      return this.client.request("POST", i, r, {}, n);
    }
    removeProducts(t, r, n = {}) {
      let i = `/admin/collections/${t}/products/batch`;
      return this.client.request("DELETE", i, r, {}, n);
    }
  };
var R$ = x$;
var b$ = class extends G {
    list(e, t = {}) {
      let r = "/admin/currencies";
      if (e) {
        let n = B.stringify(e);
        r += `?${n}`;
      }
      return this.client.request("GET", r, void 0, {}, t);
    }
    update(e, t, r = {}) {
      let n = `/admin/currencies/${e}`;
      return this.client.request("POST", n, t, {}, r);
    }
  };
var k$ = b$;
var A$ = class extends G {
    create(e, t = {}) {
      let r = "/admin/customer-groups";
      return this.client.request("POST", r, e, {}, t);
    }
    retrieve(e, t, r = {}) {
      let n = `/admin/customer-groups/${e}`;
      if (t) {
        let i = B.stringify(t);
        n += `?${i}`;
      }
      return this.client.request("GET", n, void 0, {}, r);
    }
    update(e, t, r = {}) {
      let n = `/admin/customer-groups/${e}`;
      return this.client.request("POST", n, t, {}, r);
    }
    delete(e, t = {}) {
      let r = `/admin/customer-groups/${e}`;
      return this.client.request("DELETE", r, void 0, {}, t);
    }
    list(e, t = {}) {
      let r = "/admin/customer-groups";
      return e && (r = `/admin/customer-groups?${B.stringify(e)}`), this.client.request("GET", r, void 0, {}, t);
    }
    addCustomers(e, t, r = {}) {
      let n = `/admin/customer-groups/${e}/customers/batch`;
      return this.client.request("POST", n, t, {}, r);
    }
    removeCustomers(e, t, r = {}) {
      let n = `/admin/customer-groups/${e}/customers/batch`;
      return this.client.request("DELETE", n, t, {}, r);
    }
    listCustomers(e, t, r = {}) {
      let n = `/admin/customer-groups/${e}/customers`;
      if (t) {
        let i = B.stringify(t);
        n += `?${i}`;
      }
      return this.client.request("GET", n, void 0, {}, r);
    }
  };
var _$ = A$;
var D$ = class extends G {
    create(e, t = {}) {
      let r = "/admin/customers";
      return this.client.request("POST", r, e, {}, t);
    }
    update(e, t, r = {}) {
      let n = `/admin/customers/${e}`;
      return this.client.request("POST", n, t, {}, r);
    }
    retrieve(e, t = {}) {
      let r = `/admin/customers/${e}`;
      return this.client.request("GET", r, void 0, {}, t);
    }
    list(e, t = {}) {
      let r = "/admin/customers";
      return e && (r = `/admin/customers?${B.stringify(e)}`), this.client.request("GET", r, void 0, {}, t);
    }
  };
var L$ = D$;
var N$ = class extends G {
    addRegion(e, t, r = {}) {
      let n = `/admin/discounts/${e}/regions/${t}`;
      return this.client.request("POST", n, void 0, {}, r);
    }
    create(e, t = {}) {
      let r = "/admin/discounts";
      return this.client.request("POST", r, e, {}, t);
    }
    update(e, t, r = {}) {
      let n = `/admin/discounts/${e}`;
      return this.client.request("POST", n, t, {}, r);
    }
    createDynamicCode(e, t, r = {}) {
      let n = `/admin/discounts/${e}/dynamic-codes`;
      return this.client.request("POST", n, t, {}, r);
    }
    delete(e, t = {}) {
      let r = `/admin/discounts/${e}`;
      return this.client.request("DELETE", r, void 0, {}, t);
    }
    deleteDynamicCode(e, t, r = {}) {
      let n = `/admin/discounts/${e}/dynamic-codes/${t}`;
      return this.client.request("DELETE", n, void 0, {}, r);
    }
    retrieve(e, t = {}) {
      let r = `/admin/discounts/${e}`;
      return this.client.request("GET", r, void 0, {}, t);
    }
    retrieveByCode(e, t = {}) {
      let r = `/admin/discounts/code/${e}`;
      return this.client.request("GET", r, void 0, {}, t);
    }
    list(e, t = {}) {
      let r = "/admin/discounts";
      if (e) {
        let n = B.stringify(e);
        r += `?${n}`;
      }
      return this.client.request("GET", r, void 0, {}, t);
    }
    removeRegion(e, t, r = {}) {
      let n = `/admin/discounts/${e}/regions/${t}`;
      return this.client.request("DELETE", n, void 0, {}, r);
    }
    createCondition(e, t, r = {}, n = {}) {
      let i = `/admin/discounts/${e}/conditions`;
      if (r) {
        let s = B.stringify(r);
        i += `?${s}`;
      }
      return this.client.request("POST", i, t, {}, n);
    }
    updateCondition(e, t, r, n = {}, i = {}) {
      let s = `/admin/discounts/${e}/conditions/${t}`;
      if (n) {
        let o = B.stringify(n);
        s += `?${o}`;
      }
      return this.client.request("POST", s, r, {}, i);
    }
    deleteCondition(e, t, r = {}) {
      let n = `/admin/discounts/${e}/conditions/${t}`;
      return this.client.request("DELETE", n, void 0, {}, r);
    }
    getCondition(e, t, r, n = {}) {
      let i = `/admin/discounts/${e}/conditions/${t}`;
      if (r) {
        let s = B.stringify(r);
        i += `?${s}`;
      }
      return this.client.request("GET", i, void 0, {}, n);
    }
    addConditionResourceBatch(e, t, r, n, i = {}) {
      let s = `/admin/discounts/${e}/conditions/${t}/batch`;
      if (n) {
        let o = B.stringify(n);
        s += `?${o}`;
      }
      return this.client.request("POST", s, r, {}, i);
    }
    deleteConditionResourceBatch(e, t, r, n = {}) {
      let i = `/admin/discounts/${e}/conditions/${t}/batch`;
      return this.client.request("DELETE", i, r, {}, n);
    }
  };
var F$ = N$;
var M$ = class extends G {
    create(e, t = {}) {
      let r = "/admin/draft-orders";
      return this.client.request("POST", r, e, {}, t);
    }
    addLineItem(e, t, r = {}) {
      let n = `/admin/draft-orders/${e}/line-items`;
      return this.client.request("POST", n, t, {}, r);
    }
    delete(e, t = {}) {
      let r = `/admin/draft-orders/${e}`;
      return this.client.request("DELETE", r, void 0, {}, t);
    }
    removeLineItem(e, t, r = {}) {
      let n = `/admin/draft-orders/${e}/line-items/${t}`;
      return this.client.request("DELETE", n, void 0, {}, r);
    }
    retrieve(e, t = {}) {
      let r = `/admin/draft-orders/${e}`;
      return this.client.request("GET", r, void 0, {}, t);
    }
    list(e, t = {}) {
      let r = "/admin/draft-orders";
      return e && (r = `/admin/draft-orders?${B.stringify(e)}`), this.client.request("GET", r, void 0, {}, t);
    }
    markPaid(e, t = {}) {
      let r = `/admin/draft-orders/${e}/pay`;
      return this.client.request("POST", r, {}, t);
    }
    update(e, t, r = {}) {
      let n = `/admin/draft-orders/${e}`;
      return this.client.request("POST", n, t, {}, r);
    }
    updateLineItem(e, t, r, n = {}) {
      let i = `/admin/draft-orders/${e}/line-items/${t}`;
      return this.client.request("POST", i, r, {}, n);
    }
  };
var I$ = M$;
var q$ = class extends G {
    create(e, t = {}) {
      let r = "/admin/gift-cards";
      return this.client.request("POST", r, e, {}, t);
    }
    update(e, t, r = {}) {
      let n = `/admin/gift-cards/${e}`;
      return this.client.request("POST", n, t, {}, r);
    }
    delete(e, t = {}) {
      let r = `/admin/gift-cards/${e}`;
      return this.client.request("DELETE", r, void 0, {}, t);
    }
    retrieve(e, t = {}) {
      let r = `/admin/gift-cards/${e}`;
      return this.client.request("GET", r, void 0, {}, t);
    }
    list(e, t = {}) {
      let r = "/admin/gift-cards/";
      return e && (r = `/admin/gift-cards?${B.stringify(e)}`), this.client.request("GET", r, void 0, {}, t);
    }
  };
var U$ = q$;
var j$ = class extends G {
    accept(t, r = {}) {
      let n = "/admin/invites/accept";
      return this.client.request("POST", n, t, {}, r);
    }
    create(t, r = {}) {
      let n = "/admin/invites";
      return this.client.request("POST", n, t, {}, r);
    }
    delete(t, r = {}) {
      let n = `/admin/invites/${t}`;
      return this.client.request("DELETE", n, void 0, {}, r);
    }
    list(t = {}) {
      let r = "/admin/invites";
      return this.client.request("GET", r, void 0, {}, t);
    }
    resend(t, r = {}) {
      let n = `/admin/invites/${t}`;
      return this.client.request("POST", n, void 0, {}, r);
    }
  };
var B$ = j$;
var z$ = class extends G {
    create(e, t = {}) {
      let r = "/admin/notes";
      return this.client.request("POST", r, e, {}, t);
    }
    update(e, t, r = {}) {
      let n = `/admin/notes/${e}`;
      return this.client.request("POST", n, t, {}, r);
    }
    delete(e, t = {}) {
      let r = `/admin/notes/${e}`;
      return this.client.request("DELETE", r, void 0, {}, t);
    }
    retrieve(e, t = {}) {
      let r = `/admin/notes/${e}`;
      return this.client.request("GET", r, void 0, {}, t);
    }
    list(e, t = {}) {
      let r = "/admin/notes/";
      return e && (r = `/admin/notes?${B.stringify(e)}`), this.client.request("GET", r, void 0, {}, t);
    }
  };
var G$ = z$;
var H$ = class extends G {
    list(t, r = {}) {
      let n = "/admin/notifications";
      return t && (n = `/admin/notifications?${B.stringify(t)}`), this.client.request("GET", n, void 0, {}, r);
    }
    resend(t, r, n = {}) {
      let i = `/admin/notifications/${t}/resend`;
      return this.client.request("POST", i, r, {}, n);
    }
  };
var W$ = H$;
var Q$ = class extends G {
    update(e, t, r = {}) {
      let n = `/admin/orders/${e}`;
      return this.client.request("POST", n, t, {}, r);
    }
    retrieve(e, t, r = {}) {
      let n = `/admin/orders/${e}`;
      if (t) {
        let i = B.stringify(t);
        n = `/admin/orders/${e}?${i}`;
      }
      return this.client.request("GET", n, void 0, {}, r);
    }
    list(e, t = {}) {
      let r = "/admin/orders";
      return e && (r = `/admin/orders?${B.stringify(e)}`), this.client.request("GET", r, void 0, {}, t);
    }
    complete(e, t = {}) {
      let r = `/admin/orders/${e}/complete`;
      return this.client.request("POST", r, void 0, {}, t);
    }
    capturePayment(e, t = {}) {
      let r = `/admin/orders/${e}/capture`;
      return this.client.request("POST", r, void 0, {}, t);
    }
    refundPayment(e, t, r = {}) {
      let n = `/admin/orders/${e}/refund`;
      return this.client.request("POST", n, t, {}, r);
    }
    createFulfillment(e, t, r = {}) {
      let n = `/admin/orders/${e}/fulfillment`;
      return this.client.request("POST", n, t, {}, r);
    }
    cancelFulfillment(e, t, r = {}) {
      let n = `/admin/orders/${e}/fulfillments/${t}/cancel`;
      return this.client.request("POST", n, void 0, {}, r);
    }
    cancelSwapFulfillment(e, t, r, n = {}) {
      let i = `/admin/orders/${e}/swaps/${t}/fulfillments/${r}/cancel`;
      return this.client.request("POST", i, void 0, {}, n);
    }
    cancelClaimFulfillment(e, t, r, n = {}) {
      let i = `/admin/orders/${e}/claims/${t}/fulfillments/${r}/cancel`;
      return this.client.request("POST", i, void 0, {}, n);
    }
    createShipment(e, t, r = {}) {
      let n = `/admin/orders/${e}/shipment`;
      return this.client.request("POST", n, t, {}, r);
    }
    requestReturn(e, t, r = {}) {
      let n = `/admin/orders/${e}/return`;
      return this.client.request("POST", n, t, {}, r);
    }
    cancel(e, t = {}) {
      let r = `/admin/orders/${e}/cancel`;
      return this.client.request("POST", r, void 0, {}, t);
    }
    addShippingMethod(e, t, r = {}) {
      let n = `/admin/orders/${e}/shipping-methods`;
      return this.client.request("POST", n, t, {}, r);
    }
    archive(e, t = {}) {
      let r = `/admin/orders/${e}/archive`;
      return this.client.request("POST", r, void 0, {}, t);
    }
    createSwap(e, t, r = {}) {
      let n = `/admin/orders/${e}/swaps`;
      return this.client.request("POST", n, t, {}, r);
    }
    cancelSwap(e, t, r = {}) {
      let n = `/admin/orders/${e}/swaps/${t}/cancel`;
      return this.client.request("POST", n, void 0, {}, r);
    }
    fulfillSwap(e, t, r, n = {}) {
      let i = `/admin/orders/${e}/swaps/${t}/fulfillments`;
      return this.client.request("POST", i, r, {}, n);
    }
    createSwapShipment(e, t, r, n = {}) {
      let i = `/admin/orders/${e}/swaps/${t}/shipments`;
      return this.client.request("POST", i, r, {}, n);
    }
    processSwapPayment(e, t, r = {}) {
      let n = `/admin/orders/${e}/swaps/${t}/process-payment`;
      return this.client.request("POST", n, void 0, {}, r);
    }
    createClaim(e, t, r = {}) {
      let n = `/admin/orders/${e}/claims`;
      return this.client.request("POST", n, t, {}, r);
    }
    cancelClaim(e, t, r = {}) {
      let n = `/admin/orders/${e}/claims/${t}/cancel`;
      return this.client.request("POST", n, void 0, {}, r);
    }
    updateClaim(e, t, r, n = {}) {
      let i = `/admin/orders/${e}/claims/${t}`;
      return this.client.request("POST", i, r, {}, n);
    }
    fulfillClaim(e, t, r, n = {}) {
      let i = `/admin/orders/${e}/claims/${t}/fulfillments`;
      return this.client.request("POST", i, r, {}, n);
    }
    createClaimShipment(e, t, r, n = {}) {
      let i = `/admin/orders/${e}/claims/${t}/shipments`;
      return this.client.request("POST", i, r, {}, n);
    }
  };
var V$ = Q$;
var K$ = class extends G {
    retrieve(t, r, n = {}) {
      let i = `/admin/order-edits/${t}`;
      if (r) {
        let s = B.stringify(r);
        i += `?${s}`;
      }
      return this.client.request("GET", i, void 0, {}, n);
    }
    list(t, r = {}) {
      let n = "/admin/order-edits";
      if (t) {
        let i = B.stringify(t);
        n += `?${i}`;
      }
      return this.client.request("GET", n, void 0, {}, r);
    }
    create(t, r = {}) {
      let n = "/admin/order-edits";
      return this.client.request("POST", n, t, {}, r);
    }
    update(t, r, n = {}) {
      let i = `/admin/order-edits/${t}`;
      return this.client.request("POST", i, r, {}, n);
    }
    delete(t, r = {}) {
      let n = `/admin/order-edits/${t}`;
      return this.client.request("DELETE", n, void 0, {}, r);
    }
    addLineItem(t, r, n = {}) {
      let i = `/admin/order-edits/${t}/items`;
      return this.client.request("POST", i, r, {}, n);
    }
    deleteItemChange(t, r, n = {}) {
      let i = `/admin/order-edits/${t}/changes/${r}`;
      return this.client.request("DELETE", i, void 0, {}, n);
    }
    requestConfirmation(t, r = {}) {
      let n = `/admin/order-edits/${t}/request`;
      return this.client.request("POST", n, void 0, {}, r);
    }
    cancel(t, r = {}) {
      let n = `/admin/order-edits/${t}/cancel`;
      return this.client.request("POST", n, void 0, {}, r);
    }
    confirm(t, r = {}) {
      let n = `/admin/order-edits/${t}/confirm`;
      return this.client.request("POST", n, void 0, {}, r);
    }
    updateLineItem(t, r, n, i = {}) {
      let s = `/admin/order-edits/${t}/items/${r}`;
      return this.client.request("POST", s, n, {}, i);
    }
    removeLineItem(t, r, n = {}) {
      let i = `/admin/order-edits/${t}/items/${r}`;
      return this.client.request("DELETE", i, void 0, {}, n);
    }
  };
var J$ = K$;
var X$ = class extends G {
    create(e, t = {}) {
      let r = "/admin/price-lists";
      return this.client.request("POST", r, e, {}, t);
    }
    update(e, t, r = {}) {
      let n = `/admin/price-lists/${e}`;
      return this.client.request("POST", n, t, {}, r);
    }
    delete(e, t = {}) {
      let r = `/admin/price-lists/${e}`;
      return this.client.request("DELETE", r, void 0, {}, t);
    }
    retrieve(e, t = {}) {
      let r = `/admin/price-lists/${e}`;
      return this.client.request("GET", r, void 0, {}, t);
    }
    list(e, t = {}) {
      let r = "/admin/price-lists/";
      return e && (r = `/admin/price-lists?${B.stringify(e)}`), this.client.request("GET", r, void 0, {}, t);
    }
    listProducts(e, t, r = {}) {
      let n = `/admin/price-lists/${e}/products`;
      if (t) {
        let i = B.stringify(t);
        n = `/admin/price-lists/${e}/products?${i}`;
      }
      return this.client.request("GET", n, void 0, {}, r);
    }
    addPrices(e, t, r = {}) {
      let n = `/admin/price-lists/${e}/prices/batch`;
      return this.client.request("POST", n, t, {}, r);
    }
    deletePrices(e, t, r = {}) {
      let n = `/admin/price-lists/${e}/prices/batch`;
      return this.client.request("DELETE", n, t, {}, r);
    }
    deleteProductPrices(e, t, r = {}) {
      let n = `/admin/price-lists/${e}/products/${t}/prices`;
      return this.client.request("DELETE", n, void 0, {}, r);
    }
    deleteVariantPrices(e, t, r = {}) {
      let n = `/admin/price-lists/${e}/variants/${t}/prices`;
      return this.client.request("DELETE", n, void 0, {}, r);
    }
  };
var Y$ = X$;
var Z$ = class extends G {
    list(t) {
      let r = "/admin/product-tags";
      return t && (r = `/admin/product-tags?${B.stringify(t)}`), this.client.request("GET", r);
    }
  };
var eO = Z$;
var tO = class extends G {
    list(e, t = {}) {
      let r = "/admin/product-types";
      if (e) {
        let n = B.stringify(e);
        r += `?${n}`;
      }
      return this.client.request("GET", r, void 0, {}, t);
    }
  };
var rO = tO;
var nO = class extends G {
    create(t, r = {}) {
      let n = "/admin/products/";
      return this.client.request("POST", n, t, {}, r);
    }
    retrieve(t, r = {}) {
      let n = `/admin/products/${t}`;
      return this.client.request("GET", n, void 0, {}, r);
    }
    update(t, r, n = {}) {
      let i = `/admin/products/${t}`;
      return this.client.request("POST", i, r, {}, n);
    }
    delete(t, r = {}) {
      let n = `/admin/products/${t}`;
      return this.client.request("DELETE", n, void 0, {}, r);
    }
    list(t, r = {}) {
      let n = "/admin/products";
      return t && (n = `/admin/products?${B.stringify(t)}`), this.client.request("GET", n, void 0, {}, r);
    }
    listTypes(t = {}) {
      let r = "/admin/products/types";
      return this.client.request("GET", r, void 0, {}, t);
    }
    listTags(t = {}) {
      let r = "/admin/products/tag-usage";
      return this.client.request("GET", r, void 0, {}, t);
    }
    setMetadata(t, r, n = {}) {
      let i = `/admin/products/${t}/metadata`;
      return this.client.request("POST", i, r, {}, n);
    }
    createVariant(t, r, n = {}) {
      let i = `/admin/products/${t}/variants`;
      return this.client.request("POST", i, r, {}, n);
    }
    updateVariant(t, r, n, i = {}) {
      let s = `/admin/products/${t}/variants/${r}`;
      return this.client.request("POST", s, n, {}, i);
    }
    deleteVariant(t, r, n = {}) {
      let i = `/admin/products/${t}/variants/${r}`;
      return this.client.request("DELETE", i, void 0, {}, n);
    }
    addOption(t, r, n = {}) {
      let i = `/admin/products/${t}/options`;
      return this.client.request("POST", i, r, {}, n);
    }
    updateOption(t, r, n, i = {}) {
      let s = `/admin/products/${t}/options/${r}`;
      return this.client.request("POST", s, n, {}, i);
    }
    deleteOption(t, r, n = {}) {
      let i = `/admin/products/${t}/options/${r}`;
      return this.client.request("DELETE", i, void 0, {}, n);
    }
  };
var iO = nO;
var sO = class extends G {
    retrieve(t, r, n = {}) {
      let i = `/admin/publishable-api-keys/${t}`;
      if (r) {
        let s = B.stringify(r);
        i += `?${s}`;
      }
      return this.client.request("GET", i, void 0, {}, n);
    }
    list(t, r = {}) {
      let n = "/admin/publishable-api-keys";
      if (t) {
        let i = B.stringify(t);
        n += `?${i}`;
      }
      return this.client.request("GET", n, void 0, {}, r);
    }
    create(t, r = {}) {
      let n = "/admin/publishable-api-keys";
      return this.client.request("POST", n, t, {}, r);
    }
    update(t, r, n = {}) {
      let i = `/admin/publishable-api-keys/${t}`;
      return this.client.request("POST", i, r, {}, n);
    }
    delete(t, r = {}) {
      let n = `/admin/publishable-api-keys/${t}`;
      return this.client.request("DELETE", n, void 0, {}, r);
    }
    revoke(t, r = {}) {
      let n = `/admin/publishable-api-keys/${t}/revoke`;
      return this.client.request("POST", n, {}, {}, r);
    }
    addSalesChannelsBatch(t, r, n = {}) {
      let i = `/admin/publishable-api-keys/${t}/sales-channels/batch`;
      return this.client.request("POST", i, r, {}, n);
    }
    deleteSalesChannelsBatch(t, r, n = {}) {
      let i = `/admin/publishable-api-keys/${t}/sales-channels/batch`;
      return this.client.request("DELETE", i, r, {}, n);
    }
    listSalesChannels(t, r, n = {}) {
      let i = `/admin/publishable-api-keys/${t}/sales-channels`;
      if (r) {
        let s = B.stringify(r);
        i += `?${s}`;
      }
      return this.client.request("GET", i, void 0, {}, n);
    }
  };
var oO = sO;
var aO = class extends G {
    create(e, t = {}) {
      let r = "/admin/regions";
      return this.client.request("POST", r, e, {}, t);
    }
    update(e, t, r = {}) {
      let n = `/admin/regions/${e}`;
      return this.client.request("POST", n, t, {}, r);
    }
    delete(e, t = {}) {
      let r = `/admin/regions/${e}`;
      return this.client.request("DELETE", r, void 0, {}, t);
    }
    retrieve(e, t = {}) {
      let r = `/admin/regions/${e}`;
      return this.client.request("GET", r, void 0, {}, t);
    }
    list(e, t = {}) {
      let r = "/admin/regions";
      return e && (r = `/admin/regions?${B.stringify(e)}`), this.client.request("GET", r, void 0, {}, t);
    }
    addCountry(e, t, r = {}) {
      let n = `/admin/regions/${e}/countries`;
      return this.client.request("POST", n, t, {}, r);
    }
    deleteCountry(e, t, r = {}) {
      let n = `/admin/regions/${e}/countries/${t}`;
      return this.client.request("DELETE", n, void 0, {}, r);
    }
    addFulfillmentProvider(e, t, r = {}) {
      let n = `/admin/regions/${e}/fulfillment-providers`;
      return this.client.request("POST", n, t, {}, r);
    }
    deleteFulfillmentProvider(e, t, r = {}) {
      let n = `/admin/regions/${e}/fulfillment-providers/${t}`;
      return this.client.request("DELETE", n, void 0, {}, r);
    }
    retrieveFulfillmentOptions(e, t = {}) {
      let r = `/admin/regions/${e}/fulfillment-options`;
      return this.client.request("GET", r, void 0, {}, t);
    }
    addPaymentProvider(e, t, r = {}) {
      let n = `/admin/regions/${e}/payment-providers`;
      return this.client.request("POST", n, t, {}, r);
    }
    deletePaymentProvider(e, t, r = {}) {
      let n = `/admin/regions/${e}/payment-providers/${t}`;
      return this.client.request("DELETE", n, void 0, {}, r);
    }
  };
var lO = aO;
var uO = class extends G {
    create(e, t = {}) {
      let r = "/admin/return-reasons";
      return this.client.request("POST", r, e, {}, t);
    }
    update(e, t, r = {}) {
      let n = `/admin/return-reasons/${e}`;
      return this.client.request("POST", n, t, {}, r);
    }
    delete(e, t = {}) {
      let r = `/admin/return-reasons/${e}`;
      return this.client.request("DELETE", r, void 0, {}, t);
    }
    retrieve(e, t = {}) {
      let r = `/admin/return-reasons/${e}`;
      return this.client.request("GET", r, void 0, {}, t);
    }
    list(e = {}) {
      let t = "/admin/return-reasons";
      return this.client.request("GET", t, void 0, {}, e);
    }
  };
var cO = uO;
var dO = class extends G {
    cancel(e, t = {}) {
      let r = `/admin/returns/${e}/cancel`;
      return this.client.request("POST", r, void 0, {}, t);
    }
    receive(e, t, r = {}) {
      let n = `/admin/returns/${e}/receive`;
      return this.client.request("POST", n, t, {}, r);
    }
    list(e, t = {}) {
      let r = "/admin/returns/";
      return e && (r = `/admin/returns?${B.stringify(e)}`), this.client.request("GET", r, void 0, {}, t);
    }
  };
var fO = dO;
var pO = class extends G {
    retrieve(t, r = {}) {
      let n = `/admin/sales-channels/${t}`;
      return this.client.request("GET", n, void 0, {}, r);
    }
    create(t, r = {}) {
      let n = "/admin/sales-channels";
      return this.client.request("POST", n, t, {}, r);
    }
    update(t, r, n = {}) {
      let i = `/admin/sales-channels/${t}`;
      return this.client.request("POST", i, r, {}, n);
    }
    list(t, r = {}) {
      let n = "/admin/sales-channels";
      if (t) {
        let i = B.stringify(t);
        n += `?${i}`;
      }
      return this.client.request("GET", n, void 0, {}, r);
    }
    delete(t, r = {}) {
      let n = `/admin/sales-channels/${t}`;
      return this.client.request("DELETE", n, void 0, {}, r);
    }
    removeProducts(t, r, n = {}) {
      let i = `/admin/sales-channels/${t}/products/batch`;
      return this.client.request("DELETE", i, r, {}, n);
    }
    addProducts(t, r, n = {}) {
      let i = `/admin/sales-channels/${t}/products/batch`;
      return this.client.request("POST", i, r, {}, n);
    }
    addLocation(t, r, n = {}) {
      let i = `/admin/sales-channels/${t}/stock-locations`;
      return this.client.request("POST", i, r, {}, n);
    }
    removeLocation(t, r, n = {}) {
      let i = `/admin/sales-channels/${t}/stock-locations`;
      return this.client.request("DELETE", i, r, {}, n);
    }
  };
var hO = pO;
var mO = class extends G {
    create(e, t = {}) {
      let r = "/admin/shipping-options";
      return this.client.request("POST", r, e, {}, t);
    }
    update(e, t, r = {}) {
      let n = `/admin/shipping-options/${e}`;
      return this.client.request("POST", n, t, {}, r);
    }
    delete(e, t = {}) {
      let r = `/admin/shipping-options/${e}`;
      return this.client.request("DELETE", r, void 0, {}, t);
    }
    retrieve(e, t = {}) {
      let r = `/admin/shipping-options/${e}`;
      return this.client.request("GET", r, void 0, {}, t);
    }
    list(e, t = {}) {
      let r = "/admin/shipping-options";
      return e && (r = `/admin/shipping-options?${B.stringify(e)}`), this.client.request("GET", r, void 0, {}, t);
    }
  };
var yO = mO;
var vO = class extends G {
    create(e, t = {}) {
      let r = "/admin/shipping-profiles/";
      return this.client.request("POST", r, e, {}, t);
    }
    update(e, t, r = {}) {
      let n = `/admin/shipping-profiles/${e}`;
      return this.client.request("POST", n, t, {}, r);
    }
    delete(e, t = {}) {
      let r = `/admin/shipping-profiles/${e}`;
      return this.client.request("DELETE", r, void 0, {}, t);
    }
    retrieve(e, t = {}) {
      let r = `/admin/shipping-profiles/${e}`;
      return this.client.request("GET", r, void 0, {}, t);
    }
    list(e = {}) {
      let t = "/admin/shipping-profiles/";
      return this.client.request("GET", t, void 0, {}, e);
    }
  };
var gO = vO;
var SO = class extends G {
    create(t, r = {}) {
      let n = "/admin/stock-locations";
      return this.client.request("POST", n, t, {}, r);
    }
    retrieve(t, r = {}) {
      let n = `/admin/stock-locations/${t}`;
      return this.client.request("GET", n, void 0, {}, r);
    }
    update(t, r, n = {}) {
      let i = `/admin/stock-locations/${t}`;
      return this.client.request("POST", i, r, {}, n);
    }
    delete(t, r = {}) {
      let n = `/admin/stock-locations/${t}`;
      return this.client.request("DELETE", n, void 0, {}, r);
    }
    list(t, r = {}) {
      let n = "/admin/stock-locations";
      if (t) {
        let i = B.stringify(t);
        n += `?${i}`;
      }
      return this.client.request("GET", n, void 0, {}, r);
    }
  };
var EO = SO;
var wO = class extends G {
    update(e, t = {}) {
      let r = "/admin/store/";
      return this.client.request("POST", r, e, {}, t);
    }
    addCurrency(e, t = {}) {
      let r = `/admin/store/${e}`;
      return this.client.request("POST", r, void 0, {}, t);
    }
    deleteCurrency(e, t = {}) {
      let r = `/admin/store/currencies/${e}`;
      return this.client.request("DELETE", r, void 0, {}, t);
    }
    retrieve(e = {}) {
      let t = "/admin/store/";
      return this.client.request("GET", t, void 0, {}, e);
    }
    listPaymentProviders(e = {}) {
      let t = "/admin/store/payment-providers";
      return this.client.request("GET", t, void 0, {}, e);
    }
    listTaxProviders(e = {}) {
      let t = "/admin/store/tax-providers";
      return this.client.request("GET", t, void 0, {}, e);
    }
  };
var PO = wO;
var $O = class extends G {
    retrieve(t, r = {}) {
      let n = `/admin/swaps/${t}`;
      return this.client.request("GET", n, void 0, {}, r);
    }
    list(t, r = {}) {
      let n = "/admin/swaps/";
      return t && (n = `/admin/swaps?${B.stringify(t)}`), this.client.request("GET", n, void 0, {}, r);
    }
  };
var OO = $O;
var CO = class extends G {
    retrieve(t, r, n = {}) {
      let i = `/admin/tax-rates/${t}`;
      if (r) {
        let s = B.stringify(r);
        i = `/admin/tax-rates/${t}?${s}`;
      }
      return this.client.request("GET", i, void 0, {}, n);
    }
    list(t, r = {}) {
      let n = "/admin/tax-rates";
      return t && (n = `/admin/tax-rates?${B.stringify(t)}`), this.client.request("GET", n, void 0, {}, r);
    }
    create(t, r, n = {}) {
      let i = "/admin/tax-rates";
      return r && (i = `/admin/tax-rates?${B.stringify(r)}`), this.client.request("POST", i, t, {}, n);
    }
    update(t, r, n, i = {}) {
      let s = `/admin/tax-rates/${t}`;
      if (n) {
        let o = B.stringify(n);
        s = `/admin/tax-rates/${t}?${o}`;
      }
      return this.client.request("POST", s, r, {}, i);
    }
    addProducts(t, r, n, i = {}) {
      let s = `/admin/tax-rates/${t}/products/batch`;
      if (n) {
        let o = B.stringify(n);
        s = `/admin/tax-rates/${t}/products/batch?${o}`;
      }
      return this.client.request("POST", s, r, {}, i);
    }
    addProductTypes(t, r, n, i = {}) {
      let s = `/admin/tax-rates/${t}/product-types/batch`;
      if (n) {
        let o = B.stringify(n);
        s = `/admin/tax-rates/${t}/product-types/batch?${o}`;
      }
      return this.client.request("POST", s, r, {}, i);
    }
    addShippingOptions(t, r, n, i = {}) {
      let s = `/admin/tax-rates/${t}/shipping-options/batch`;
      if (n) {
        let o = B.stringify(n);
        s = `/admin/tax-rates/${t}/shipping-options/batch?${o}`;
      }
      return this.client.request("POST", s, r, {}, i);
    }
    removeProducts(t, r, n, i = {}) {
      let s = `/admin/tax-rates/${t}/products/batch`;
      if (n) {
        let o = B.stringify(n);
        s = `/admin/tax-rates/${t}/products/batch?${o}`;
      }
      return this.client.request("DELETE", s, r, {}, i);
    }
    removeProductTypes(t, r, n, i = {}) {
      let s = `/admin/tax-rates/${t}/product-types/batch`;
      if (n) {
        let o = B.stringify(n);
        s = `/admin/tax-rates/${t}/product-types/batch?${o}`;
      }
      return this.client.request("DELETE", s, r, {}, i);
    }
    removeShippingOptions(t, r, n, i = {}) {
      let s = `/admin/tax-rates/${t}/shipping-options/batch`;
      if (n) {
        let o = B.stringify(n);
        s = `/admin/tax-rates/${t}/shipping-options/batch?${o}`;
      }
      return this.client.request("DELETE", s, r, {}, i);
    }
    delete(t, r = {}) {
      let n = `/admin/tax-rates/${t}`;
      return this.client.request("DELETE", n, void 0, {}, r);
    }
  };
var TO = CO;
var xO = class extends G {
    constructor() {
      super(...arguments), (this.headers = { "Content-Type": "multipart/form-data" });
    }
    create(e) {
      let t = "/admin/uploads";
      let r = this._createPayload(e);
      return this.client.request("POST", t, r, {}, this.headers);
    }
    createProtected(e) {
      let t = "/admin/uploads/protected";
      let r = this._createPayload(e);
      return this.client.request("POST", t, r, {}, this.headers);
    }
    delete(e, t = {}) {
      let r = "/admin/uploads";
      return this.client.request("DELETE", r, e, {}, t);
    }
    getPresignedDownloadUrl(e, t = {}) {
      let r = "/admin/uploads/download-url";
      return this.client.request("POST", r, e, {}, t);
    }
    _createPayload(e) {
      let t = new FormData();
      return Array.isArray(e) ? e.forEach((r) => t.append("files", r)) : t.append("files", e), t;
    }
  };
var RO = xO;
var bO = class extends G {
    sendResetPasswordToken(e, t = {}) {
      let r = "/admin/users/password-token";
      return this.client.request("POST", r, e, {}, t);
    }
    resetPassword(e, t = {}) {
      let r = "admin/users/reset-password";
      return this.client.request("POST", r, e, {}, t);
    }
    retrieve(e, t = {}) {
      let r = `/admin/users/${e}`;
      return this.client.request("GET", r, void 0, {}, t);
    }
    create(e, t = {}) {
      let r = "/admin/users";
      return this.client.request("POST", r, e, {}, t);
    }
    update(e, t, r = {}) {
      let n = `/admin/users/${e}`;
      return this.client.request("POST", n, t, {}, r);
    }
    delete(e, t = {}) {
      let r = `/admin/users/${e}`;
      return this.client.request("DELETE", r, void 0, {}, t);
    }
    list(e = {}) {
      let t = "/admin/users";
      return this.client.request("GET", t, void 0, {}, e);
    }
  };
var kO = bO;
var AO = class extends G {
    list(e, t = {}) {
      let r = "/admin/variants";
      return e && (r = `/admin/variants?${B.stringify(e)}`), this.client.request("GET", r, void 0, {}, t);
    }
    getInventory(e, t = {}) {
      let r = `/admin/variants/${e}/inventory`;
      return this.client.request("GET", r, void 0, {}, t);
    }
  };
var _O = AO;
var DO = class extends G {
    retrieve(e, t, r = {}) {
      let n = `/admin/payment-collections/${e}`;
      if (t) {
        let i = B.stringify(t);
        n += `?${i}`;
      }
      return this.client.request("GET", n, void 0, {}, r);
    }
    update(e, t, r = {}) {
      let n = `/admin/payment-collections/${e}`;
      return this.client.request("POST", n, t, {}, r);
    }
    delete(e, t = {}) {
      let r = `/admin/payment-collections/${e}`;
      return this.client.request("DELETE", r, void 0, {}, t);
    }
    markAsAuthorized(e, t = {}) {
      let r = `/admin/payment-collections/${e}/authorize`;
      return this.client.request("POST", r, void 0, {}, t);
    }
  };
var LO = DO;
var NO = class extends G {
    retrieve(t, r, n = {}) {
      let i = `/admin/payments/${t}`;
      if (r) {
        let s = B.stringify(r);
        i = `/admin/payments/${t}?${s}`;
      }
      return this.client.request("GET", i, void 0, {}, n);
    }
    capturePayment(t, r = {}) {
      let n = `/admin/payments/${t}/capture`;
      return this.client.request("POST", n, void 0, {}, r);
    }
    refundPayment(t, r, n = {}) {
      let i = `/admin/payments/${t}/refund`;
      return this.client.request("POST", i, r, {}, n);
    }
  };
var FO = NO;
var MO = class extends G {
    retrieve(e, t, r = {}) {
      let n = `/admin/product-categories/${e}`;
      if (t) {
        let i = B.stringify(t);
        n = `${n}?${i}`;
      }
      return this.client.request("GET", n, void 0, {}, r);
    }
    create(e, t = {}) {
      let r = "/admin/product-categories";
      return this.client.request("POST", r, e, {}, t);
    }
    update(e, t, r = {}) {
      let n = `/admin/product-categories/${e}`;
      return this.client.request("POST", n, t, {}, r);
    }
    list(e, t = {}) {
      let r = "/admin/product-categories";
      if (e) {
        let n = B.stringify(e);
        r += `?${n}`;
      }
      return this.client.request("GET", r, void 0, {}, t);
    }
    delete(e, t = {}) {
      let r = `/admin/product-categories/${e}`;
      return this.client.request("DELETE", r, void 0, {}, t);
    }
    removeProducts(e, t, r = {}) {
      let n = `/admin/product-categories/${e}/products/batch`;
      return this.client.request("DELETE", n, t, {}, r);
    }
    addProducts(e, t, r = {}) {
      let n = `/admin/product-categories/${e}/products/batch`;
      return this.client.request("POST", n, t, {}, r);
    }
  };
var IO = MO;
var qO = class extends G {
    constructor() {
      super(...arguments),
        (this.auth = new $$(this.client)),
        (this.batchJobs = new T$(this.client)),
        (this.customers = new L$(this.client)),
        (this.customerGroups = new _$(this.client)),
        (this.discounts = new F$(this.client)),
        (this.currencies = new k$(this.client)),
        (this.collections = new R$(this.client)),
        (this.draftOrders = new I$(this.client)),
        (this.giftCards = new U$(this.client)),
        (this.invites = new B$(this.client)),
        (this.notes = new G$(this.client)),
        (this.priceLists = new Y$(this.client)),
        (this.products = new iO(this.client)),
        (this.productTags = new eO(this.client)),
        (this.productTypes = new rO(this.client)),
        (this.users = new kO(this.client)),
        (this.returns = new fO(this.client)),
        (this.orders = new V$(this.client)),
        (this.orderEdits = new J$(this.client)),
        (this.publishableApiKeys = new oO(this.client)),
        (this.returnReasons = new cO(this.client)),
        (this.variants = new _O(this.client)),
        (this.salesChannels = new hO(this.client)),
        (this.swaps = new OO(this.client)),
        (this.shippingProfiles = new gO(this.client)),
        (this.stockLocations = new EO(this.client)),
        (this.store = new PO(this.client)),
        (this.shippingOptions = new yO(this.client)),
        (this.regions = new lO(this.client)),
        (this.notifications = new W$(this.client)),
        (this.taxRates = new TO(this.client)),
        (this.uploads = new RO(this.client)),
        (this.paymentCollections = new LO(this.client)),
        (this.payments = new FO(this.client)),
        (this.productCategories = new IO(this.client));
    }
  };
var UO = qO;
var jO = class extends G {
    authenticate(e, t = {}) {
      let r = "/store/auth";
      return this.client.request("POST", r, e, {}, t);
    }
    deleteSession(e = {}) {
      let t = "/store/auth";
      return this.client.request("DELETE", t, {}, {}, e);
    }
    getSession(e = {}) {
      let t = "/store/auth";
      return this.client.request("GET", t, void 0, {}, e);
    }
    exists(e, t = {}) {
      let r = `/store/auth/${e}`;
      return this.client.request("GET", r, void 0, {}, t);
    }
  };
var BO = jO;
var zO = class extends G {
    create(e, t, r = {}) {
      let n = `/store/carts/${e}/line-items`;
      return this.client.request("POST", n, t, {}, r);
    }
    update(e, t, r, n = {}) {
      let i = `/store/carts/${e}/line-items/${t}`;
      return this.client.request("POST", i, r, {}, n);
    }
    delete(e, t, r = {}) {
      let n = `/store/carts/${e}/line-items/${t}`;
      return this.client.request("DELETE", n, void 0, {}, r);
    }
  };
var GO = zO;
var HO = class extends G {
    constructor() {
      super(...arguments), (this.lineItems = new GO(this.client));
    }
    addShippingMethod(t, r, n = {}) {
      let i = `/store/carts/${t}/shipping-methods`;
      return this.client.request("POST", i, r, {}, n);
    }
    complete(t, r = {}) {
      let n = `/store/carts/${t}/complete`;
      return this.client.request("POST", n, void 0, {}, r);
    }
    create(t, r = {}) {
      let n = "/store/carts";
      return this.client.request("POST", n, t, {}, r);
    }
    createPaymentSessions(t, r = {}) {
      let n = `/store/carts/${t}/payment-sessions`;
      return this.client.request("POST", n, void 0, {}, r);
    }
    deleteDiscount(t, r, n = {}) {
      let i = `/store/carts/${t}/discounts/${r}`;
      return this.client.request("DELETE", i, void 0, {}, n);
    }
    deletePaymentSession(t, r, n = {}) {
      let i = `/store/carts/${t}/payment-sessions/${r}`;
      return this.client.request("DELETE", i, void 0, {}, n);
    }
    refreshPaymentSession(t, r, n = {}) {
      let i = `/store/carts/${t}/payment-sessions/${r}/refresh`;
      return this.client.request("POST", i, void 0, {}, n);
    }
    retrieve(t, r = {}) {
      let n = `/store/carts/${t}`;
      return this.client.request("GET", n, void 0, {}, r);
    }
    setPaymentSession(t, r, n = {}) {
      let i = `/store/carts/${t}/payment-session`;
      return this.client.request("POST", i, r, {}, n);
    }
    update(t, r, n = {}) {
      let i = `/store/carts/${t}`;
      return this.client.request("POST", i, r, {}, n);
    }
    updatePaymentSession(t, r, n, i = {}) {
      let s = `/store/carts/${t}/payment-sessions/${r}`;
      return this.client.request("POST", s, n, {}, i);
    }
  };
var WO = HO;
var QO = class extends G {
    retrieve(e, t = {}) {
      let r = `/store/collections/${e}`;
      return this.client.request("GET", r, void 0, {}, t);
    }
    list(e, t = {}) {
      let r = "/store/collections";
      return e && (r = `/store/collections?${B.stringify(e)}`), this.client.request("GET", r, void 0, {}, t);
    }
  };
var VO = QO;
var KO = class extends G {
    addAddress(e, t = {}) {
      let r = "/store/customers/me/addresses";
      return this.client.request("POST", r, e, {}, t);
    }
    deleteAddress(e, t = {}) {
      let r = `/store/customers/me/addresses/${e}`;
      return this.client.request("DELETE", r, void 0, {}, t);
    }
    updateAddress(e, t, r = {}) {
      let n = `/store/customers/me/addresses/${e}`;
      return this.client.request("POST", n, t, {}, r);
    }
  };
var JO = KO;
var XO = class extends G {
    list(e = {}) {
      let t = "/store/customers/me/payment-methods";
      return this.client.request("GET", t, void 0, {}, e);
    }
  };
var dg = XO;
var YO = class extends G {
    constructor() {
      super(...arguments), (this.paymentMethods = new dg(this.client)), (this.addresses = new JO(this.client));
    }
    create(e, t = {}) {
      let r = "/store/customers";
      return this.client.request("POST", r, e, {}, t);
    }
    retrieve(e = {}) {
      let t = "/store/customers/me";
      return this.client.request("GET", t, void 0, {}, e);
    }
    update(e, t = {}) {
      let r = "/store/customers/me";
      return this.client.request("POST", r, e, {}, t);
    }
    listOrders(e, t = {}) {
      let r = "/store/customers/me/orders";
      if (e) {
        let n = B.stringify(e);
        n && (r += `?${n}`);
      }
      return this.client.request("GET", r, void 0, {}, t);
    }
    resetPassword(e, t = {}) {
      let r = "/store/customers/password-reset";
      return this.client.request("POST", r, e, {}, t);
    }
    generatePasswordToken(e, t = {}) {
      let r = "/store/customers/password-token";
      return this.client.request("POST", r, e, {}, t);
    }
  };
var ZO = YO;
var eC = class extends G {
    retrieve(e, t = {}) {
      let r = `/store/gift-cards/${e}`;
      return this.client.request("GET", r, void 0, {}, t);
    }
  };
var tC = eC;
var rC = class extends G {
    retrieve(e, t = {}) {
      let r = `/store/order-edits/${e}`;
      return this.client.request("GET", r, void 0, {}, t);
    }
    decline(e, t, r = {}) {
      let n = `/store/order-edits/${e}/decline`;
      return this.client.request("POST", n, t, {}, r);
    }
    complete(e, t = {}) {
      let r = `/store/order-edits/${e}/complete`;
      return this.client.request("POST", r, void 0, {}, t);
    }
  };
var nC = rC;
var iC = class extends G {
    retrieve(e, t = {}) {
      let r = `/store/orders/${e}`;
      return this.client.request("GET", r, void 0, {}, t);
    }
    retrieveByCartId(e, t = {}) {
      let r = `/store/orders/cart/${e}`;
      return this.client.request("GET", r, void 0, {}, t);
    }
    lookupOrder(e, t = {}) {
      let r = "/store/orders?";
      return (r = `/store/orders?${B.stringify(e)}`), this.client.request("GET", r, e, {}, t);
    }
    requestCustomerOrders(e, t = {}) {
      let r = "/store/orders/batch/customer/token";
      return this.client.request("POST", r, e, {}, t);
    }
    confirmRequest(e, t = {}) {
      let r = "/store/orders/customer/confirm";
      return this.client.request("POST", r, e, {}, t);
    }
  };
var sC = iC;
var oC = class extends G {
    retrieve(e, t, r = {}) {
      let n = `/store/payment-collections/${e}`;
      if (t) {
        let i = B.stringify(t);
        n += `?${i}`;
      }
      return this.client.request("GET", n, void 0, {}, r);
    }
    authorizePaymentSession(e, t, r = {}) {
      let n = `/store/payment-collections/${e}/sessions/${t}/authorize`;
      return this.client.request("POST", n, void 0, {}, r);
    }
    authorizePaymentSessionsBatch(e, t, r = {}) {
      let n = `/store/payment-collections/${e}/sessions/batch/authorize`;
      return this.client.request("POST", n, t, {}, r);
    }
    managePaymentSessionsBatch(e, t, r = {}) {
      let n = `/store/payment-collections/${e}/sessions/batch`;
      return this.client.request("POST", n, t, {}, r);
    }
    managePaymentSession(e, t, r = {}) {
      let n = `/store/payment-collections/${e}/sessions`;
      return this.client.request("POST", n, t, {}, r);
    }
    refreshPaymentSession(e, t, r = {}) {
      let n = `/store/payment-collections/${e}/sessions/${t}`;
      return this.client.request("POST", n, void 0, {}, r);
    }
  };
var aC = oC;
var lC = class extends G {
    list(e, t = {}) {
      let r = "/store/product-tags";
      if (e) {
        let n = B.stringify(e);
        r += `?${n}`;
      }
      return this.client.request("GET", r, void 0, {}, t);
    }
  };
var uC = lC;
var cC = class extends G {
    list(e, t = {}) {
      let r = "/store/product-types";
      if (e) {
        let n = B.stringify(e);
        r += `?${n}`;
      }
      return this.client.request("GET", r, void 0, {}, t);
    }
  };
var dC = cC;
var fC = class extends G {
    retrieve(e, t = {}) {
      let r = `/store/variants/${e}`;
      return this.client.request("GET", r, void 0, {}, t);
    }
    list(e, t = {}) {
      let r = "/store/variants";
      if (e) {
        let n = B.stringify(e);
        r += `?${n}`;
      }
      return this.client.request("GET", r, void 0, {}, t);
    }
  };
var pC = fC;
var hC = class extends G {
    constructor() {
      super(...arguments), (this.variants = new pC(this.client));
    }
    retrieve(e, t = {}) {
      let r = `/store/products/${e}`;
      return this.client.request("GET", r, void 0, {}, t);
    }
    search(e, t = {}) {
      let r = "/store/products/search";
      return this.client.request("POST", r, e, {}, t);
    }
    list(e, t = {}) {
      let r = "/store/products";
      return e && (r = `/store/products?${B.stringify(e)}`), this.client.request("GET", r, void 0, {}, t);
    }
  };
var mC = hC;
var yC = class extends G {
    list(t = {}) {
      let r = "/store/regions";
      return this.client.request("GET", r, void 0, {}, t);
    }
    retrieve(t, r = {}) {
      let n = `/store/regions/${t}`;
      return this.client.request("GET", n, void 0, {}, r);
    }
  };
var vC = yC;
var gC = class extends G {
    retrieve(e, t = {}) {
      let r = `/store/return-reasons/${e}`;
      return this.client.request("GET", r, void 0, {}, t);
    }
    list(e = {}) {
      let t = "/store/return-reasons";
      return this.client.request("GET", t, void 0, {}, e);
    }
  };
var SC = gC;
var EC = class extends G {
    create(e, t = {}) {
      let r = "/store/returns";
      return this.client.request("POST", r, e, {}, t);
    }
  };
var wC = EC;
var PC = class extends G {
    listCartOptions(e, t = {}) {
      let r = `/store/shipping-options/${e}`;
      return this.client.request("GET", r, void 0, {}, t);
    }
    list(e, t = {}) {
      let r = "/store/shipping-options";
      return e && (r = `/store/shipping-options?${B.stringify(e)}`), this.client.request("GET", r, void 0, {}, t);
    }
  };
var $C = PC;
var OC = class extends G {
    create(e, t = {}) {
      let r = "/store/swaps";
      return this.client.request("POST", r, e, {}, t);
    }
    retrieveByCartId(e, t = {}) {
      let r = `/store/swaps/${e}`;
      return this.client.request("GET", r, void 0, {}, t);
    }
  };
var CC = OC;
var TC = class extends G {
    retrieve(e, t, r = {}) {
      let n = `/store/product-categories/${e}`;
      if (t) {
        let i = B.stringify(t);
        n = `${n}?${i}`;
      }
      return this.client.request("GET", n, void 0, {}, r);
    }
    list(e, t = {}) {
      let r = "/store/product-categories";
      if (e) {
        let n = B.stringify(e);
        r = `${r}?${n}`;
      }
      return this.client.request("GET", r, void 0, {}, t);
    }
  };
var xC = TC;
var RC = class {
    constructor(e) {
      (this.client = new w$(e)),
        (this.admin = new UO(this.client)),
        (this.auth = new BO(this.client)),
        (this.carts = new WO(this.client)),
        (this.customers = new ZO(this.client)),
        (this.errors = new Oi()),
        (this.orders = new sC(this.client)),
        (this.orderEdits = new nC(this.client)),
        (this.products = new mC(this.client)),
        (this.productTypes = new dC(this.client)),
        (this.regions = new vC(this.client)),
        (this.returnReasons = new SC(this.client)),
        (this.returns = new wC(this.client)),
        (this.shippingOptions = new $C(this.client)),
        (this.swaps = new CC(this.client)),
        (this.collections = new VO(this.client)),
        (this.giftCards = new tC(this.client)),
        (this.paymentMethods = new dg(this.client)),
        (this.paymentCollections = new aC(this.client)),
        (this.productTags = new uC(this.client)),
        (this.productCategories = new xC(this.client));
    }
    setPublishableKey(e) {
      cg.registerPublishableApiKey(e);
    }
  };
var bC = RC;
class Ci {
  constructor() {
    (this.listeners = []), (this.subscribe = this.subscribe.bind(this));
  }
  subscribe(t) {
    return (
      this.listeners.push(t),
      this.onSubscribe(),
      () => {
        (this.listeners = this.listeners.filter((r) => r !== t)), this.onUnsubscribe();
      }
    );
  }
  hasListeners() {
    return this.listeners.length > 0;
  }
  onSubscribe() {}
  onUnsubscribe() {}
}
const xs = typeof window > "u" || "Deno" in window;
function vt() {}
function kC(e, t) {
  return typeof e === "function" ? e(t) : e;
}
function Mc(e) {
  return typeof e === "number" && e >= 0 && e !== 1 / 0;
}
function fg(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Ki(e, t, r) {
  return js(e) ? (typeof t === "function" ? { ...r, queryKey: e, queryFn: t } : { ...t, queryKey: e }) : e;
}
function AC(e, t, r) {
  return js(e)
    ? typeof t === "function"
      ? { ...r, mutationKey: e, mutationFn: t }
      : { ...t, mutationKey: e }
    : typeof e === "function"
    ? { ...t, mutationFn: e }
    : { ...e };
}
function Tr(e, t, r) {
  return js(e) ? [{ ...t, queryKey: e }, r] : [e || {}, t];
}
function Dh(e, t) {
  const { type: r = "all", exact: n, fetchStatus: i, predicate: s, queryKey: o, stale: a } = e;
  if (js(o)) {
    if (n) {
      if (t.queryHash !== df(o, t.options)) return !1;
    } else if (!Oa(t.queryKey, o)) return !1;
  }
  if (r !== "all") {
    const l = t.isActive();
    if ((r === "active" && !l) || (r === "inactive" && l)) return !1;
  }
  return !(
    (typeof a === "boolean" && t.isStale() !== a) ||
    (typeof i < "u" && i !== t.state.fetchStatus) ||
    (s && !s(t))
  );
}
function Lh(e, t) {
  const { exact: r, fetching: n, predicate: i, mutationKey: s } = e;
  if (js(s)) {
    if (!t.options.mutationKey) return !1;
    if (r) {
      if (on(t.options.mutationKey) !== on(s)) return !1;
    } else if (!Oa(t.options.mutationKey, s)) return !1;
  }
  return !((typeof n === "boolean" && (t.state.status === "loading") !== n) || (i && !i(t)));
}
function df(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || on)(e);
}
function on(e) {
  return JSON.stringify(e, (t, r) =>
    qc(r)
      ? Object.keys(r)
          .sort()
          .reduce((n, i) => ((n[i] = r[i]), n), {})
      : r,
  );
}
function Oa(e, t) {
  return pg(e, t);
}
function pg(e, t) {
  return e === t
    ? !0
    : typeof e !== typeof t
    ? !1
    : e && t && typeof e === "object" && typeof t === "object"
    ? !Object.keys(t).some((r) => !pg(e[r], t[r]))
    : !1;
}
function hg(e, t) {
  if (e === t) return e;
  const r = Nh(e) && Nh(t);
  if (r || (qc(e) && qc(t))) {
    const n = r ? e.length : Object.keys(e).length;
    const i = r ? t : Object.keys(t);
    const s = i.length;
    const o = r ? [] : {};
    let a = 0;
    for (let l = 0; l < s; l++) {
      const u = r ? l : i[l];
      (o[u] = hg(e[u], t[u])), o[u] === e[u] && a++;
    }
    return n === s && a === n ? e : o;
  }
  return t;
}
function Ic(e, t) {
  if ((e && !t) || (t && !e)) return !1;
  for (const r in e) if (e[r] !== t[r]) return !1;
  return !0;
}
function Nh(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function qc(e) {
  if (!Fh(e)) return !1;
  const t = e.constructor;
  if (typeof t > "u") return !0;
  const r = t.prototype;
  return !(!(Fh(r) && r.hasOwnProperty("isPrototypeOf")));
}
function Fh(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function js(e) {
  return Array.isArray(e);
}
function mg(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Mh(e) {
  mg(0).then(e);
}
function _C() {
  if (typeof AbortController === "function") return new AbortController();
}
function Uc(e, t, r) {
  return r.isDataEqual?.(e, t)
    ? e
    : typeof r.structuralSharing === "function"
    ? r.structuralSharing(e, t)
    : r.structuralSharing !== !1
    ? hg(e, t)
    : t;
}
class DC extends Ci {
  constructor() {
    super(),
      (this.setup = (t) => {
        if (!xs && window.addEventListener) {
          const r = () => t();
          return (
            window.addEventListener("visibilitychange", r, !1),
            window.addEventListener("focus", r, !1),
            () => {
              window.removeEventListener("visibilitychange", r), window.removeEventListener("focus", r);
            }
          );
        }
      });
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var t;
      (t = this.cleanup) == null || t.call(this), (this.cleanup = void 0);
    }
  }
  setEventListener(t) {
    var r;
    (this.setup = t),
      (r = this.cleanup) == null || r.call(this),
      (this.cleanup = t((n) => {
        typeof n === "boolean" ? this.setFocused(n) : this.onFocus();
      }));
  }
  setFocused(t) {
    (this.focused = t), t && this.onFocus();
  }
  onFocus() {
    this.listeners.forEach((t) => {
      t();
    });
  }
  isFocused() {
    return typeof this.focused === "boolean"
      ? this.focused
      : typeof document > "u"
      ? !0
      : [void 0, "visible", "prerender"].includes(document.visibilityState);
  }
}
const Ca = new DC();
class LC extends Ci {
  constructor() {
    super(),
      (this.setup = (t) => {
        if (!xs && window.addEventListener) {
          const r = () => t();
          return (
            window.addEventListener("online", r, !1),
            window.addEventListener("offline", r, !1),
            () => {
              window.removeEventListener("online", r), window.removeEventListener("offline", r);
            }
          );
        }
      });
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var t;
      (t = this.cleanup) == null || t.call(this), (this.cleanup = void 0);
    }
  }
  setEventListener(t) {
    var r;
    (this.setup = t),
      (r = this.cleanup) == null || r.call(this),
      (this.cleanup = t((n) => {
        typeof n === "boolean" ? this.setOnline(n) : this.onOnline();
      }));
  }
  setOnline(t) {
    (this.online = t), t && this.onOnline();
  }
  onOnline() {
    this.listeners.forEach((t) => {
      t();
    });
  }
  isOnline() {
    return typeof this.online === "boolean"
      ? this.online
      : typeof navigator > "u" || typeof navigator.onLine > "u"
      ? !0
      : navigator.onLine;
  }
}
const Ta = new LC();
function NC(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Ya(e) {
  return (e ?? "online") === "online" ? Ta.isOnline() : !0;
}
class yg {
  constructor(t) {
    (this.revert = t == null ? void 0 : t.revert), (this.silent = t == null ? void 0 : t.silent);
  }
}
function Uo(e) {
  return e instanceof yg;
}
function vg(e) {
  let t = !1;
  let r = 0;
  let n = !1;
  let i;
  let s;
  let o;
  const a = new Promise((w, p) => {
      (s = w), (o = p);
    });
  const l = (w) => {
      n || (v(new yg(w)), e.abort == null || e.abort());
    };
  const u = () => {
      t = !0;
    };
  const c = () => {
      t = !1;
    };
  const d = () => !Ca.isFocused() || (e.networkMode !== "always" && !Ta.isOnline());
  const f = (w) => {
      n || ((n = !0), e.onSuccess == null || e.onSuccess(w), i == null || i(), s(w));
    };
  const v = (w) => {
      n || ((n = !0), e.onError == null || e.onError(w), i == null || i(), o(w));
    };
  const g = () =>
      new Promise((w) => {
        (i = (p) => {
          if (n || !d()) return w(p);
        }),
          e.onPause == null || e.onPause();
      }).then(() => {
        (i = void 0), n || e.onContinue == null || e.onContinue();
      });
  const m = () => {
      if (n) return;
      let w;
      try {
        w = e.fn();
      } catch (p) {
        w = Promise.reject(p);
      }
      Promise.resolve(w)
        .then(f)
        .catch((p) => {
          var h;
          var y;
          if (n) return;
          const S = (h = e.retry) != null ? h : 3;
          const x = (y = e.retryDelay) != null ? y : NC;
          const b = typeof x === "function" ? x(r, p) : x;
          const L = S === !0 || (typeof S === "number" && r < S) || (typeof S === "function" && S(r, p));
          if (t || !L) {
            v(p);
            return;
          }
          r++,
            e.onFail == null || e.onFail(r, p),
            mg(b)
              .then(() => {
                if (d()) return g();
              })
              .then(() => {
                t ? v(p) : m();
              });
        });
    };
  return (
    Ya(e.networkMode) ? m() : g().then(m),
    {
      promise: a,
      cancel: l,
      continue: () => {
        i == null || i();
      },
      cancelRetry: u,
      continueRetry: c,
    }
  );
}
const ff = console;
function FC() {
  let e = [];
  let t = 0;
  let r = (c) => {
      c();
    };
  let n = (c) => {
      c();
    };
  const i = (c) => {
      let d;
      t++;
      try {
        d = c();
      } finally {
        t--, t || a();
      }
      return d;
    };
  const s = (c) => {
      t
        ? e.push(c)
        : Mh(() => {
            r(c);
          });
    };
  const o = (c) => (...d) => {
      s(() => {
        c(...d);
      });
    };
  const a = () => {
      const c = e;
      (e = []),
        c.length &&
          Mh(() => {
            n(() => {
              c.forEach((d) => {
                r(d);
              });
            });
          });
    };
  return {
    batch: i,
    batchCalls: o,
    schedule: s,
    setNotifyFunction: (c) => {
      r = c;
    },
    setBatchNotifyFunction: (c) => {
      n = c;
    },
  };
}
const Pe = FC();
class gg {
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(),
      Mc(this.cacheTime) &&
        (this.gcTimeout = setTimeout(() => {
          this.optionalRemove();
        }, this.cacheTime));
  }
  updateCacheTime(t) {
    this.cacheTime = Math.max(this.cacheTime || 0, t ?? (xs ? 1 / 0 : 5 * 60 * 1e3));
  }
  clearGcTimeout() {
    this.gcTimeout && (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
  }
}
class MC extends gg {
  constructor(t) {
    super(),
      (this.abortSignalConsumed = !1),
      (this.defaultOptions = t.defaultOptions),
      this.setOptions(t.options),
      (this.observers = []),
      (this.cache = t.cache),
      (this.logger = t.logger || ff),
      (this.queryKey = t.queryKey),
      (this.queryHash = t.queryHash),
      (this.initialState = t.state || IC(this.options)),
      (this.state = this.initialState),
      this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  setOptions(t) {
    (this.options = { ...this.defaultOptions, ...t }), this.updateCacheTime(this.options.cacheTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && this.cache.remove(this);
  }
  setData(t, r) {
    const n = Uc(this.state.data, t, this.options);
    return (
      this.dispatch({
        data: n,
        type: "success",
        dataUpdatedAt: r == null ? void 0 : r.updatedAt,
        manual: r == null ? void 0 : r.manual,
      }),
      n
    );
  }
  setState(t, r) {
    this.dispatch({ type: "setState", state: t, setStateOptions: r });
  }
  cancel(t) {
    var r;
    const n = this.promise;
    return (r = this.retryer) == null || r.cancel(t), n ? n.then(vt).catch(vt) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(this.initialState);
  }
  isActive() {
    return this.observers.some((t) => t.options.enabled !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return (
      this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some((t) => t.getCurrentResult().isStale)
    );
  }
  isStaleByTime(t = 0) {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !fg(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var t;
    const r = this.observers.find((n) => n.shouldFetchOnWindowFocus());
    r?.refetch({ cancelRefetch: !1 }), (t = this.retryer) == null || t.continue();
  }
  onOnline() {
    var t;
    const r = this.observers.find((n) => n.shouldFetchOnReconnect());
    r?.refetch({ cancelRefetch: !1 }), (t = this.retryer) == null || t.continue();
  }
  addObserver(t) {
    this.observers.indexOf(t) === -1 &&
      (this.observers.push(t),
      this.clearGcTimeout(),
      this.cache.notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    this.observers.indexOf(t) !== -1 &&
      ((this.observers = this.observers.filter((r) => r !== t)),
      this.observers.length ||
        (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({ revert: !0 }) : this.retryer.cancelRetry()),
        this.scheduleGc()),
      this.cache.notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || this.dispatch({ type: "invalidate" });
  }
  fetch(t, r) {
    var n;
    var i;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.dataUpdatedAt && r != null && r.cancelRefetch) this.cancel({ silent: !0 });
      else if (this.promise) {
        var s;
        return (s = this.retryer) == null || s.continueRetry(), this.promise;
      }
    }
    if ((t && this.setOptions(t), !this.options.queryFn)) {
      const v = this.observers.find((g) => g.options.queryFn);
      v && this.setOptions(v.options);
    }
    Array.isArray(this.options.queryKey);
    const o = _C();
    const a = { queryKey: this.queryKey, pageParam: void 0, meta: this.meta };
    const l = (v) => {
        Object.defineProperty(v, "signal", {
          enumerable: !0,
          get: () => {
            if (o) return (this.abortSignalConsumed = !0), o.signal;
          },
        });
      };
    l(a);
    const u = () =>
        this.options.queryFn
          ? ((this.abortSignalConsumed = !1), this.options.queryFn(a))
          : Promise.reject("Missing queryFn");
    const c = { fetchOptions: r, options: this.options, queryKey: this.queryKey, state: this.state, fetchFn: u };
    if (
      (l(c),
      (n = this.options.behavior) == null || n.onFetch(c),
      (this.revertState = this.state),
      this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((i = c.fetchOptions) == null ? void 0 : i.meta))
    ) {
      var d;
      this.dispatch({ type: "fetch", meta: (d = c.fetchOptions) == null ? void 0 : d.meta });
    }
    const f = (v) => {
      if (((Uo(v) && v.silent) || this.dispatch({ type: "error", error: v }), !Uo(v))) {
        var g;
        var m;
        (g = (m = this.cache.config).onError) == null || g.call(m, v, this);
      }
      this.isFetchingOptimistic || this.scheduleGc(), (this.isFetchingOptimistic = !1);
    };
    return (
      (this.retryer = vg({
        fn: c.fetchFn,
        abort: o == null ? void 0 : o.abort.bind(o),
        onSuccess: (v) => {
          var g;
          var m;
          if (typeof v > "u") {
            f(new Error("undefined"));
            return;
          }
          this.setData(v),
            (g = (m = this.cache.config).onSuccess) == null || g.call(m, v, this),
            this.isFetchingOptimistic || this.scheduleGc(),
            (this.isFetchingOptimistic = !1);
        },
        onError: f,
        onFail: (v, g) => {
          this.dispatch({ type: "failed", failureCount: v, error: g });
        },
        onPause: () => {
          this.dispatch({ type: "pause" });
        },
        onContinue: () => {
          this.dispatch({ type: "continue" });
        },
        retry: c.options.retry,
        retryDelay: c.options.retryDelay,
        networkMode: c.options.networkMode,
      })),
      (this.promise = this.retryer.promise),
      this.promise
    );
  }
  dispatch(t) {
    const r = (n) => {
      var i;
      var s;
      switch (t.type) {
        case "failed":
          return { ...n, fetchFailureCount: t.failureCount, fetchFailureReason: t.error };
        case "pause":
          return { ...n, fetchStatus: "paused" };
        case "continue":
          return { ...n, fetchStatus: "fetching" };
        case "fetch":
          return {
            ...n,
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchMeta: (i = t.meta) != null ? i : null,
            fetchStatus: Ya(this.options.networkMode) ? "fetching" : "paused",
            ...(!n.dataUpdatedAt && { error: null, status: "loading" }),
          };
        case "success":
          return {
            ...n,
            data: t.data,
            dataUpdateCount: n.dataUpdateCount + 1,
            dataUpdatedAt: (s = t.dataUpdatedAt) != null ? s : Date.now(),
            error: null,
            isInvalidated: !1,
            status: "success",
            ...(!t.manual && { fetchStatus: "idle", fetchFailureCount: 0, fetchFailureReason: null }),
          };
        case "error":
          const o = t.error;
          return Uo(o) && o.revert && this.revertState
            ? { ...this.revertState }
            : {
                ...n,
                error: o,
                errorUpdateCount: n.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: n.fetchFailureCount + 1,
                fetchFailureReason: o,
                fetchStatus: "idle",
                status: "error",
              };
        case "invalidate":
          return { ...n, isInvalidated: !0 };
        case "setState":
          return { ...n, ...t.state };
      }
    };
    (this.state = r(this.state)),
      Pe.batch(() => {
        this.observers.forEach((n) => {
          n.onQueryUpdate(t);
        }),
          this.cache.notify({ query: this, type: "updated", action: t });
      });
  }
}
function IC(e) {
  const t = typeof e.initialData === "function" ? e.initialData() : e.initialData;
  const r = typeof t < "u";
  const n = r ? (typeof e.initialDataUpdatedAt === "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt) : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? n ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "loading",
    fetchStatus: "idle",
  };
}
class qC extends Ci {
  constructor(t) {
    super(), (this.config = t || {}), (this.queries = []), (this.queriesMap = {});
  }
  build(t, r, n) {
    var i;
    const s = r.queryKey;
    const o = (i = r.queryHash) != null ? i : df(s, r);
    let a = this.get(o);
    return (
      a ||
        ((a = new MC({
          cache: this,
          logger: t.getLogger(),
          queryKey: s,
          queryHash: o,
          options: t.defaultQueryOptions(r),
          state: n,
          defaultOptions: t.getQueryDefaults(s),
        })),
        this.add(a)),
      a
    );
  }
  add(t) {
    this.queriesMap[t.queryHash] ||
      ((this.queriesMap[t.queryHash] = t), this.queries.push(t), this.notify({ type: "added", query: t }));
  }
  remove(t) {
    const r = this.queriesMap[t.queryHash];
    r &&
      (t.destroy(),
      (this.queries = this.queries.filter((n) => n !== t)),
      r === t && this.queriesMap[t.queryHash] = undefined,
      this.notify({ type: "removed", query: t }));
  }
  clear() {
    Pe.batch(() => {
      this.queries.forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return this.queriesMap[t];
  }
  getAll() {
    return this.queries;
  }
  find(t, r) {
    const [n] = Tr(t, r);
    return typeof n.exact > "u" && (n.exact = !0), this.queries.find((i) => Dh(n, i));
  }
  findAll(t, r) {
    const [n] = Tr(t, r);
    return Object.keys(n).length > 0 ? this.queries.filter((i) => Dh(n, i)) : this.queries;
  }
  notify(t) {
    Pe.batch(() => {
      this.listeners.forEach((r) => {
        r(t);
      });
    });
  }
  onFocus() {
    Pe.batch(() => {
      this.queries.forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    Pe.batch(() => {
      this.queries.forEach((t) => {
        t.onOnline();
      });
    });
  }
}
class UC extends gg {
  constructor(t) {
    super(),
      (this.options = { ...t.defaultOptions, ...t.options }),
      (this.mutationId = t.mutationId),
      (this.mutationCache = t.mutationCache),
      (this.logger = t.logger || ff),
      (this.observers = []),
      (this.state = t.state || Sg()),
      this.updateCacheTime(this.options.cacheTime),
      this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  setState(t) {
    this.dispatch({ type: "setState", state: t });
  }
  addObserver(t) {
    this.observers.indexOf(t) === -1 &&
      (this.observers.push(t),
      this.clearGcTimeout(),
      this.mutationCache.notify({ type: "observerAdded", mutation: this, observer: t }));
  }
  removeObserver(t) {
    (this.observers = this.observers.filter((r) => r !== t)),
      this.scheduleGc(),
      this.mutationCache.notify({ type: "observerRemoved", mutation: this, observer: t });
  }
  optionalRemove() {
    this.observers.length || (this.state.status === "loading" ? this.scheduleGc() : this.mutationCache.remove(this));
  }
  continue() {
    return this.retryer ? (this.retryer.continue(), this.retryer.promise) : this.execute();
  }
  async execute() {
    const t = () => {
        var y;
        return (
          (this.retryer = vg({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(this.state.variables)
                : Promise.reject("No mutationFn found"),
            onFail: (S, x) => {
              this.dispatch({ type: "failed", failureCount: S, error: x });
            },
            onPause: () => {
              this.dispatch({ type: "pause" });
            },
            onContinue: () => {
              this.dispatch({ type: "continue" });
            },
            retry: (y = this.options.retry) != null ? y : 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
          })),
          this.retryer.promise
        );
      };
    const r = this.state.status === "loading";
    try {
      var n;
      var i;
      var s;
      var o;
      var a;
      var l;
      if (!r) {
        var u;
        var c;
        var d;
        var f;
        this.dispatch({ type: "loading", variables: this.options.variables }),
          await ((u = (c = this.mutationCache.config).onMutate) == null
            ? void 0
            : u.call(c, this.state.variables, this));
        const S = await ((d = (f = this.options).onMutate) == null ? void 0 : d.call(f, this.state.variables));
        S !== this.state.context && this.dispatch({ type: "loading", context: S, variables: this.state.variables });
      }
      const y = await t();
      return (
        await ((n = (i = this.mutationCache.config).onSuccess) == null
          ? void 0
          : n.call(i, y, this.state.variables, this.state.context, this)),
        await ((s = (o = this.options).onSuccess) == null
          ? void 0
          : s.call(o, y, this.state.variables, this.state.context)),
        await ((a = (l = this.options).onSettled) == null
          ? void 0
          : a.call(l, y, null, this.state.variables, this.state.context)),
        this.dispatch({ type: "success", data: y }),
        y
      );
    } catch (y) {
      try {
        var v;
        var g;
        var m;
        var w;
        var p;
        var h;
        throw (
          (await ((v = (g = this.mutationCache.config).onError) == null
            ? void 0
            : v.call(g, y, this.state.variables, this.state.context, this)),
          await ((m = (w = this.options).onError) == null
            ? void 0
            : m.call(w, y, this.state.variables, this.state.context)),
          await ((p = (h = this.options).onSettled) == null
            ? void 0
            : p.call(h, void 0, y, this.state.variables, this.state.context)),
          y)
        );
      } finally {
        this.dispatch({ type: "error", error: y });
      }
    }
  }
  dispatch(t) {
    const r = (n) => {
      switch (t.type) {
        case "failed":
          return { ...n, failureCount: t.failureCount, failureReason: t.error };
        case "pause":
          return { ...n, isPaused: !0 };
        case "continue":
          return { ...n, isPaused: !1 };
        case "loading":
          return {
            ...n,
            context: t.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: !Ya(this.options.networkMode),
            status: "loading",
            variables: t.variables,
          };
        case "success":
          return {
            ...n,
            data: t.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1,
          };
        case "error":
          return {
            ...n,
            data: void 0,
            error: t.error,
            failureCount: n.failureCount + 1,
            failureReason: t.error,
            isPaused: !1,
            status: "error",
          };
        case "setState":
          return { ...n, ...t.state };
      }
    };
    (this.state = r(this.state)),
      Pe.batch(() => {
        this.observers.forEach((n) => {
          n.onMutationUpdate(t);
        }),
          this.mutationCache.notify({ mutation: this, type: "updated", action: t });
      });
  }
}
function Sg() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
  };
}
class jC extends Ci {
  constructor(t) {
    super(), (this.config = t || {}), (this.mutations = []), (this.mutationId = 0);
  }
  build(t, r, n) {
    const i = new UC({
      mutationCache: this,
      logger: t.getLogger(),
      mutationId: ++this.mutationId,
      options: t.defaultMutationOptions(r),
      state: n,
      defaultOptions: r.mutationKey ? t.getMutationDefaults(r.mutationKey) : void 0,
    });
    return this.add(i), i;
  }
  add(t) {
    this.mutations.push(t), this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    (this.mutations = this.mutations.filter((r) => r !== t)), this.notify({ type: "removed", mutation: t });
  }
  clear() {
    Pe.batch(() => {
      this.mutations.forEach((t) => {
        this.remove(t);
      });
    });
  }
  getAll() {
    return this.mutations;
  }
  find(t) {
    return typeof t.exact > "u" && (t.exact = !0), this.mutations.find((r) => Lh(t, r));
  }
  findAll(t) {
    return this.mutations.filter((r) => Lh(t, r));
  }
  notify(t) {
    Pe.batch(() => {
      this.listeners.forEach((r) => {
        r(t);
      });
    });
  }
  resumePausedMutations() {
    const t = this.mutations.filter((r) => r.state.isPaused);
    return Pe.batch(() => t.reduce((r, n) => r.then(() => n.continue().catch(vt)), Promise.resolve()));
  }
}
function BC() {
  return {
    onFetch: (e) => {
      e.fetchFn = () => {
        var t;
        var r;
        var n;
        var i;
        var s;
        var o;
        const a = (t = e.fetchOptions) == null || (r = t.meta) == null ? void 0 : r.refetchPage;
        const l = (n = e.fetchOptions) == null || (i = n.meta) == null ? void 0 : i.fetchMore;
        const u = l == null ? void 0 : l.pageParam;
        const c = (l == null ? void 0 : l.direction) === "forward";
        const d = (l == null ? void 0 : l.direction) === "backward";
        const f = ((s = e.state.data) == null ? void 0 : s.pages) || [];
        const v = ((o = e.state.data) == null ? void 0 : o.pageParams) || [];
        let g = v;
        let m = !1;
        const w = (b) => {
            Object.defineProperty(b, "signal", {
              enumerable: !0,
              get: () => {
                var L;
                if ((L = e.signal) != null && L.aborted) m = !0;
                else {
                  var O;
                  (O = e.signal) == null ||
                    O.addEventListener("abort", () => {
                      m = !0;
                    });
                }
                return e.signal;
              },
            });
          };
        const p = e.options.queryFn || (() => Promise.reject("Missing queryFn"));
        const h = (b, L, O, j) => ((g = j ? [L, ...g] : [...g, L]), j ? [O, ...b] : [...b, O]);
        const y = (b, L, O, j) => {
            if (m) return Promise.reject("Cancelled");
            if (typeof O > "u" && !L && b.length) return Promise.resolve(b);
            const M = { queryKey: e.queryKey, pageParam: O, meta: e.options.meta };
            w(M);
            const J = p(M);
            return Promise.resolve(J).then((Se) => h(b, O, Se, j));
          };
        let S;
        if (!f.length) S = y([]);
        else if (c) {
          const b = typeof u < "u";
          const L = b ? u : Ih(e.options, f);
          S = y(f, b, L);
        } else if (d) {
          const b = typeof u < "u";
          const L = b ? u : zC(e.options, f);
          S = y(f, b, L, !0);
        } else {
          g = [];
          const b = typeof e.options.getNextPageParam > "u";
          S = (a && f[0] ? a(f[0], 0, f) : !0) ? y([], b, v[0]) : Promise.resolve(h([], v[0], f[0]));
          for (let O = 1; O < f.length; O++)
            S = S.then((j) => {
              if (a && f[O] ? a(f[O], O, f) : !0) {
                const J = b ? v[O] : Ih(e.options, j);
                return y(j, b, J);
              }
              return Promise.resolve(h(j, v[O], f[O]));
            });
        }
        return S.then((b) => ({ pages: b, pageParams: g }));
      };
    },
  };
}
function Ih(e, t) {
  return e.getNextPageParam == null ? void 0 : e.getNextPageParam(t[t.length - 1], t);
}
function zC(e, t) {
  return e.getPreviousPageParam == null ? void 0 : e.getPreviousPageParam(t[0], t);
}
class GC {
  constructor(t = {}) {
    (this.queryCache = t.queryCache || new qC()),
      (this.mutationCache = t.mutationCache || new jC()),
      (this.logger = t.logger || ff),
      (this.defaultOptions = t.defaultOptions || {}),
      (this.queryDefaults = []),
      (this.mutationDefaults = []),
      (this.mountCount = 0);
  }
  mount() {
    this.mountCount++,
      this.mountCount === 1 &&
        ((this.unsubscribeFocus = Ca.subscribe(() => {
          Ca.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus());
        })),
        (this.unsubscribeOnline = Ta.subscribe(() => {
          Ta.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline());
        })));
  }
  unmount() {
    var t;
    var r;
    this.mountCount--,
      this.mountCount === 0 &&
        ((t = this.unsubscribeFocus) == null || t.call(this),
        (this.unsubscribeFocus = void 0),
        (r = this.unsubscribeOnline) == null || r.call(this),
        (this.unsubscribeOnline = void 0));
  }
  isFetching(t, r) {
    const [n] = Tr(t, r);
    return (n.fetchStatus = "fetching"), this.queryCache.findAll(n).length;
  }
  isMutating(t) {
    return this.mutationCache.findAll({ ...t, fetching: !0 }).length;
  }
  getQueryData(t, r) {
    var n;
    return (n = this.queryCache.find(t, r)) == null ? void 0 : n.state.data;
  }
  ensureQueryData(t, r, n) {
    const i = Ki(t, r, n);
    const s = this.getQueryData(i.queryKey);
    return s ? Promise.resolve(s) : this.fetchQuery(i);
  }
  getQueriesData(t) {
    return this.getQueryCache()
      .findAll(t)
      .map(({ queryKey: r, state: n }) => {
        const i = n.data;
        return [r, i];
      });
  }
  setQueryData(t, r, n) {
    const i = this.queryCache.find(t);
    const s = i == null ? void 0 : i.state.data;
    const o = kC(r, s);
    if (typeof o > "u") return;
    const a = Ki(t);
    const l = this.defaultQueryOptions(a);
    return this.queryCache.build(this, l).setData(o, { ...n, manual: !0 });
  }
  setQueriesData(t, r, n) {
    return Pe.batch(() =>
      this.getQueryCache()
        .findAll(t)
        .map(({ queryKey: i }) => [i, this.setQueryData(i, r, n)]),
    );
  }
  getQueryState(t, r) {
    var n;
    return (n = this.queryCache.find(t, r)) == null ? void 0 : n.state;
  }
  removeQueries(t, r) {
    const [n] = Tr(t, r);
    const i = this.queryCache;
    Pe.batch(() => {
      i.findAll(n).forEach((s) => {
        i.remove(s);
      });
    });
  }
  resetQueries(t, r, n) {
    const [i, s] = Tr(t, r, n);
    const o = this.queryCache;
    const a = { type: "active", ...i };
    return Pe.batch(
      () => (
        o.findAll(i).forEach((l) => {
          l.reset();
        }),
        this.refetchQueries(a, s)
      ),
    );
  }
  cancelQueries(t, r, n) {
    const [i, s = {}] = Tr(t, r, n);
    typeof s.revert > "u" && (s.revert = !0);
    const o = Pe.batch(() => this.queryCache.findAll(i).map((a) => a.cancel(s)));
    return Promise.all(o).then(vt).catch(vt);
  }
  invalidateQueries(t, r, n) {
    const [i, s] = Tr(t, r, n);
    return Pe.batch(() => {
      var o;
      var a;
      if (
        (this.queryCache.findAll(i).forEach((u) => {
          u.invalidate();
        }),
        i.refetchType === "none")
      )
        return Promise.resolve();
      const l = { ...i, type: (o = (a = i.refetchType) != null ? a : i.type) != null ? o : "active" };
      return this.refetchQueries(l, s);
    });
  }
  refetchQueries(t, r, n) {
    const [i, s] = Tr(t, r, n);
    const o = Pe.batch(() =>
        this.queryCache
          .findAll(i)
          .filter((l) => !l.isDisabled())
          .map((l) => {
            var u;
            return l.fetch(void 0, {
              ...s,
              cancelRefetch: (u = s == null ? void 0 : s.cancelRefetch) != null ? u : !0,
              meta: { refetchPage: i.refetchPage },
            });
          }),
      );
    let a = Promise.all(o).then(vt);
    return (s?.throwOnError) || (a = a.catch(vt)), a;
  }
  fetchQuery(t, r, n) {
    const i = Ki(t, r, n);
    const s = this.defaultQueryOptions(i);
    typeof s.retry > "u" && (s.retry = !1);
    const o = this.queryCache.build(this, s);
    return o.isStaleByTime(s.staleTime) ? o.fetch(s) : Promise.resolve(o.state.data);
  }
  prefetchQuery(t, r, n) {
    return this.fetchQuery(t, r, n).then(vt).catch(vt);
  }
  fetchInfiniteQuery(t, r, n) {
    const i = Ki(t, r, n);
    return (i.behavior = BC()), this.fetchQuery(i);
  }
  prefetchInfiniteQuery(t, r, n) {
    return this.fetchInfiniteQuery(t, r, n).then(vt).catch(vt);
  }
  resumePausedMutations() {
    return this.mutationCache.resumePausedMutations();
  }
  getQueryCache() {
    return this.queryCache;
  }
  getMutationCache() {
    return this.mutationCache;
  }
  getLogger() {
    return this.logger;
  }
  getDefaultOptions() {
    return this.defaultOptions;
  }
  setDefaultOptions(t) {
    this.defaultOptions = t;
  }
  setQueryDefaults(t, r) {
    const n = this.queryDefaults.find((i) => on(t) === on(i.queryKey));
    n ? (n.defaultOptions = r) : this.queryDefaults.push({ queryKey: t, defaultOptions: r });
  }
  getQueryDefaults(t) {
    if (!t) return;
    const r = this.queryDefaults.find((n) => Oa(t, n.queryKey));
    return r == null ? void 0 : r.defaultOptions;
  }
  setMutationDefaults(t, r) {
    const n = this.mutationDefaults.find((i) => on(t) === on(i.mutationKey));
    n ? (n.defaultOptions = r) : this.mutationDefaults.push({ mutationKey: t, defaultOptions: r });
  }
  getMutationDefaults(t) {
    if (!t) return;
    const r = this.mutationDefaults.find((n) => Oa(t, n.mutationKey));
    return r == null ? void 0 : r.defaultOptions;
  }
  defaultQueryOptions(t) {
    if (t?._defaulted) return t;
    const r = {
      ...this.defaultOptions.queries,
      ...this.getQueryDefaults(t == null ? void 0 : t.queryKey),
      ...t,
      _defaulted: !0,
    };
    return (
      !r.queryHash && r.queryKey && (r.queryHash = df(r.queryKey, r)),
      typeof r.refetchOnReconnect > "u" && (r.refetchOnReconnect = r.networkMode !== "always"),
      typeof r.useErrorBoundary > "u" && (r.useErrorBoundary = !!r.suspense),
      r
    );
  }
  defaultMutationOptions(t) {
    return t?._defaulted
      ? t
      : {
          ...this.defaultOptions.mutations,
          ...this.getMutationDefaults(t == null ? void 0 : t.mutationKey),
          ...t,
          _defaulted: !0,
        };
  }
  clear() {
    this.queryCache.clear(), this.mutationCache.clear();
  }
}
class HC extends Ci {
  constructor(t, r) {
    super(),
      (this.client = t),
      (this.options = r),
      (this.trackedProps = new Set()),
      (this.selectError = null),
      this.bindMethods(),
      this.setOptions(r);
  }
  bindMethods() {
    (this.remove = this.remove.bind(this)), (this.refetch = this.refetch.bind(this));
  }
  onSubscribe() {
    this.listeners.length === 1 &&
      (this.currentQuery.addObserver(this),
      qh(this.currentQuery, this.options) && this.executeFetch(),
      this.updateTimers());
  }
  onUnsubscribe() {
    this.listeners.length || this.destroy();
  }
  shouldFetchOnReconnect() {
    return jc(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return jc(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    (this.listeners = []),
      this.clearStaleTimeout(),
      this.clearRefetchInterval(),
      this.currentQuery.removeObserver(this);
  }
  setOptions(t, r) {
    const n = this.options;
    const i = this.currentQuery;
    if (
      ((this.options = this.client.defaultQueryOptions(t)),
      Ic(n, this.options) ||
        this.client
          .getQueryCache()
          .notify({ type: "observerOptionsUpdated", query: this.currentQuery, observer: this }),
      typeof this.options.enabled < "u" && typeof this.options.enabled !== "boolean")
    )
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = n.queryKey), this.updateQuery();
    const s = this.hasListeners();
    s && Uh(this.currentQuery, i, this.options, n) && this.executeFetch(),
      this.updateResult(r),
      s &&
        (this.currentQuery !== i || this.options.enabled !== n.enabled || this.options.staleTime !== n.staleTime) &&
        this.updateStaleTimeout();
    const o = this.computeRefetchInterval();
    s &&
      (this.currentQuery !== i || this.options.enabled !== n.enabled || o !== this.currentRefetchInterval) &&
      this.updateRefetchInterval(o);
  }
  getOptimisticResult(t) {
    const r = this.client.getQueryCache().build(this.client, t);
    return this.createResult(r, t);
  }
  getCurrentResult() {
    return this.currentResult;
  }
  trackResult(t) {
    const r = {};
    return (
      Object.keys(t).forEach((n) => {
        Object.defineProperty(r, n, { configurable: !1, enumerable: !0, get: () => (this.trackedProps.add(n), t[n]) });
      }),
      r
    );
  }
  getCurrentQuery() {
    return this.currentQuery;
  }
  remove() {
    this.client.getQueryCache().remove(this.currentQuery);
  }
  refetch({ refetchPage: t, ...r } = {}) {
    return this.fetch({ ...r, meta: { refetchPage: t } });
  }
  fetchOptimistic(t) {
    const r = this.client.defaultQueryOptions(t);
    const n = this.client.getQueryCache().build(this.client, r);
    return (n.isFetchingOptimistic = !0), n.fetch().then(() => this.createResult(n, r));
  }
  fetch(t) {
    var r;
    return this.executeFetch({ ...t, cancelRefetch: (r = t.cancelRefetch) != null ? r : !0 }).then(
      () => (this.updateResult(), this.currentResult),
    );
  }
  executeFetch(t) {
    this.updateQuery();
    let r = this.currentQuery.fetch(this.options, t);
    return (t?.throwOnError) || (r = r.catch(vt)), r;
  }
  updateStaleTimeout() {
    if ((this.clearStaleTimeout(), xs || this.currentResult.isStale || !Mc(this.options.staleTime))) return;
    const r = fg(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
    this.staleTimeoutId = setTimeout(() => {
      this.currentResult.isStale || this.updateResult();
    }, r);
  }
  computeRefetchInterval() {
    var t;
    return typeof this.options.refetchInterval === "function"
      ? this.options.refetchInterval(this.currentResult.data, this.currentQuery)
      : (t = this.options.refetchInterval) != null
      ? t
      : !1;
  }
  updateRefetchInterval(t) {
    this.clearRefetchInterval(),
      (this.currentRefetchInterval = t),
      !(xs || this.options.enabled === !1 || !Mc(this.currentRefetchInterval) || this.currentRefetchInterval === 0) &&
        (this.refetchIntervalId = setInterval(() => {
          (this.options.refetchIntervalInBackground || Ca.isFocused()) && this.executeFetch();
        }, this.currentRefetchInterval));
  }
  updateTimers() {
    this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval());
  }
  clearStaleTimeout() {
    this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), (this.staleTimeoutId = void 0));
  }
  clearRefetchInterval() {
    this.refetchIntervalId && (clearInterval(this.refetchIntervalId), (this.refetchIntervalId = void 0));
  }
  createResult(t, r) {
    const n = this.currentQuery;
    const i = this.options;
    const s = this.currentResult;
    const o = this.currentResultState;
    const a = this.currentResultOptions;
    const l = t !== n;
    const u = l ? t.state : this.currentQueryInitialState;
    const c = l ? this.currentResult : this.previousQueryResult;
    const { state: d } = t;
    let { dataUpdatedAt: f, error: v, errorUpdatedAt: g, fetchStatus: m, status: w } = d;
    let p = !1;
    let h = !1;
    let y;
    if (r._optimisticResults) {
      const O = this.hasListeners();
      const j = !O && qh(t, r);
      const M = O && Uh(t, n, r, i);
      (j || M) && ((m = Ya(t.options.networkMode) ? "fetching" : "paused"), f || (w = "loading")),
        r._optimisticResults === "isRestoring" && (m = "idle");
    }
    if (r.keepPreviousData && !d.dataUpdatedAt && c != null && c.isSuccess && w !== "error")
      (y = c.data), (f = c.dataUpdatedAt), (w = c.status), (p = !0);
    else if (r.select && typeof d.data < "u")
      if (s && d.data === (o == null ? void 0 : o.data) && r.select === this.selectFn) y = this.selectResult;
      else
        try {
          (this.selectFn = r.select),
            (y = r.select(d.data)),
            (y = Uc(s == null ? void 0 : s.data, y, r)),
            (this.selectResult = y),
            (this.selectError = null);
        } catch (O) {
          this.selectError = O;
        }
    else y = d.data;
    if (typeof r.placeholderData < "u" && typeof y > "u" && w === "loading") {
      let O;
      if (s?.isPlaceholderData && r.placeholderData === (a == null ? void 0 : a.placeholderData))
        O = s.data;
      else if (
        ((O = typeof r.placeholderData === "function" ? r.placeholderData() : r.placeholderData),
        r.select && typeof O < "u")
      )
        try {
          (O = r.select(O)), (this.selectError = null);
        } catch (j) {
          this.selectError = j;
        }
      typeof O < "u" && ((w = "success"), (y = Uc(s == null ? void 0 : s.data, O, r)), (h = !0));
    }
    this.selectError && ((v = this.selectError), (y = this.selectResult), (g = Date.now()), (w = "error"));
    const S = m === "fetching";
    const x = w === "loading";
    const b = w === "error";
    return {
      status: w,
      fetchStatus: m,
      isLoading: x,
      isSuccess: w === "success",
      isError: b,
      isInitialLoading: x && S,
      data: y,
      dataUpdatedAt: f,
      error: v,
      errorUpdatedAt: g,
      failureCount: d.fetchFailureCount,
      failureReason: d.fetchFailureReason,
      errorUpdateCount: d.errorUpdateCount,
      isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
      isFetchedAfterMount: d.dataUpdateCount > u.dataUpdateCount || d.errorUpdateCount > u.errorUpdateCount,
      isFetching: S,
      isRefetching: S && !x,
      isLoadingError: b && d.dataUpdatedAt === 0,
      isPaused: m === "paused",
      isPlaceholderData: h,
      isPreviousData: p,
      isRefetchError: b && d.dataUpdatedAt !== 0,
      isStale: pf(t, r),
      refetch: this.refetch,
      remove: this.remove,
    };
  }
  updateResult(t) {
    const r = this.currentResult;
    const n = this.createResult(this.currentQuery, this.options);
    if (((this.currentResultState = this.currentQuery.state), (this.currentResultOptions = this.options), Ic(n, r)))
      return;
    this.currentResult = n;
    const i = { cache: !0 };
    const s = () => {
        if (!r) return !0;
        const { notifyOnChangeProps: o } = this.options;
        if (o === "all" || (!(o || this.trackedProps.size))) return !0;
        const a = new Set(o ?? this.trackedProps);
        return (
          this.options.useErrorBoundary && a.add("error"),
          Object.keys(this.currentResult).some((l) => {
            const u = l;
            return this.currentResult[u] !== r[u] && a.has(u);
          })
        );
      };
    (t == null ? void 0 : t.listeners) !== !1 && s() && (i.listeners = !0), this.notify({ ...i, ...t });
  }
  updateQuery() {
    const t = this.client.getQueryCache().build(this.client, this.options);
    if (t === this.currentQuery) return;
    const r = this.currentQuery;
    (this.currentQuery = t),
      (this.currentQueryInitialState = t.state),
      (this.previousQueryResult = this.currentResult),
      this.hasListeners() && (r == null || r.removeObserver(this), t.addObserver(this));
  }
  onQueryUpdate(t) {
    const r = {};
    t.type === "success" ? (r.onSuccess = !t.manual) : t.type === "error" && !Uo(t.error) && (r.onError = !0),
      this.updateResult(r),
      this.hasListeners() && this.updateTimers();
  }
  notify(t) {
    Pe.batch(() => {
      if (t.onSuccess) {
        var r;
        var n;
        var i;
        var s;
        (r = (n = this.options).onSuccess) == null || r.call(n, this.currentResult.data),
          (i = (s = this.options).onSettled) == null || i.call(s, this.currentResult.data, null);
      } else if (t.onError) {
        var o;
        var a;
        var l;
        var u;
        (o = (a = this.options).onError) == null || o.call(a, this.currentResult.error),
          (l = (u = this.options).onSettled) == null || l.call(u, void 0, this.currentResult.error);
      }
      t.listeners &&
        this.listeners.forEach((c) => {
          c(this.currentResult);
        }),
        t.cache && this.client.getQueryCache().notify({ query: this.currentQuery, type: "observerResultsUpdated" });
    });
  }
}
function WC(e, t) {
  return t.enabled !== !1 && !e.state.dataUpdatedAt && !(e.state.status === "error" && t.retryOnMount === !1);
}
function qh(e, t) {
  return WC(e, t) || (e.state.dataUpdatedAt > 0 && jc(e, t, t.refetchOnMount));
}
function jc(e, t, r) {
  if (t.enabled !== !1) {
    const n = typeof r === "function" ? r(e) : r;
    return n === "always" || (n !== !1 && pf(e, t));
  }
  return !1;
}
function Uh(e, t, r, n) {
  return r.enabled !== !1 && (e !== t || n.enabled === !1) && (!r.suspense || e.state.status !== "error") && pf(e, r);
}
function pf(e, t) {
  return e.isStaleByTime(t.staleTime);
}
let QC = class extends Ci {
  constructor(t, r) {
    super(), (this.client = t), this.setOptions(r), this.bindMethods(), this.updateResult();
  }
  bindMethods() {
    (this.mutate = this.mutate.bind(this)), (this.reset = this.reset.bind(this));
  }
  setOptions(t) {
    const r = this.options;
    (this.options = this.client.defaultMutationOptions(t)),
      Ic(r, this.options) ||
        this.client
          .getMutationCache()
          .notify({ type: "observerOptionsUpdated", mutation: this.currentMutation, observer: this });
  }
  onUnsubscribe() {
    if (!this.listeners.length) {
      var t;
      (t = this.currentMutation) == null || t.removeObserver(this);
    }
  }
  onMutationUpdate(t) {
    this.updateResult();
    const r = { listeners: !0 };
    t.type === "success" ? (r.onSuccess = !0) : t.type === "error" && (r.onError = !0), this.notify(r);
  }
  getCurrentResult() {
    return this.currentResult;
  }
  reset() {
    (this.currentMutation = void 0), this.updateResult(), this.notify({ listeners: !0 });
  }
  mutate(t, r) {
    return (
      (this.mutateOptions = r),
      this.currentMutation?.removeObserver(this),
      (this.currentMutation = this.client
        .getMutationCache()
        .build(this.client, { ...this.options, variables: typeof t < "u" ? t : this.options.variables })),
      this.currentMutation.addObserver(this),
      this.currentMutation.execute()
    );
  }
  updateResult() {
    const t = this.currentMutation ? this.currentMutation.state : Sg();
    const r = {
        ...t,
        isLoading: t.status === "loading",
        isSuccess: t.status === "success",
        isError: t.status === "error",
        isIdle: t.status === "idle",
        mutate: this.mutate,
        reset: this.reset,
      };
    this.currentResult = r;
  }
  notify(t) {
    Pe.batch(() => {
      if (this.mutateOptions && this.hasListeners()) {
        if (t.onSuccess) {
          var r;
          var n;
          var i;
          var s;
          (r = (n = this.mutateOptions).onSuccess) == null ||
            r.call(n, this.currentResult.data, this.currentResult.variables, this.currentResult.context),
            (i = (s = this.mutateOptions).onSettled) == null ||
              i.call(s, this.currentResult.data, null, this.currentResult.variables, this.currentResult.context);
        } else if (t.onError) {
          var o;
          var a;
          var l;
          var u;
          (o = (a = this.mutateOptions).onError) == null ||
            o.call(a, this.currentResult.error, this.currentResult.variables, this.currentResult.context),
            (l = (u = this.mutateOptions).onSettled) == null ||
              l.call(u, void 0, this.currentResult.error, this.currentResult.variables, this.currentResult.context);
        }
      }
      t.listeners &&
        this.listeners.forEach((c) => {
          c(this.currentResult);
        });
    });
  }
};
var Bc = {};
var VC = {
    get exports() {
      return Bc;
    },
    set exports(e) {
      Bc = e;
    },
  };
var Eg = {}; /**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yi = E;
function KC(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var JC = typeof Object.is === "function" ? Object.is : KC;
var XC = yi.useState;
var YC = yi.useEffect;
var ZC = yi.useLayoutEffect;
var eT = yi.useDebugValue;
function tT(e, t) {
  var r = t();
  var n = XC({ inst: { value: r, getSnapshot: t } });
  var i = n[0].inst;
  var s = n[1];
  return (
    ZC(
      function () {
        (i.value = r), (i.getSnapshot = t), gu(i) && s({ inst: i });
      },
      [e, r, t],
    ),
    YC(
      function () {
        return (
          gu(i) && s({ inst: i }),
          e(function () {
            gu(i) && s({ inst: i });
          })
        );
      },
      [e],
    ),
    eT(r),
    r
  );
}
function gu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !JC(e, r);
  } catch {
    return !0;
  }
}
function rT(e, t) {
  return t();
}
var nT = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? rT : tT;
Eg.useSyncExternalStore = yi.useSyncExternalStore !== void 0 ? yi.useSyncExternalStore : nT;
(function (e) {
  e.exports = Eg;
})(VC);
const wg = Bc.useSyncExternalStore;
var Rs = {};
var iT = {
    get exports() {
      return Rs;
    },
    set exports(e) {
      Rs = e;
    },
  };
var Za = {}; /**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sT = E;
var oT = Symbol.for("react.element");
var aT = Symbol.for("react.fragment");
var lT = Object.prototype.hasOwnProperty;
var uT = sT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
var cT = { key: !0, ref: !0, __self: !0, __source: !0 };
function Pg(e, t, r) {
  var n;
  var i = {};
  var s = null;
  var o = null;
  r !== void 0 && (s = `${r}`), t.key !== void 0 && (s = `${t.key}`), t.ref !== void 0 && (o = t.ref);
  for (n in t) lT.call(t, n) && !cT.hasOwnProperty(n) && (i[n] = t[n]);
  if (e?.defaultProps) for (n in ((t = e.defaultProps), t)) i[n] === void 0 && (i[n] = t[n]);
  return { $$typeof: oT, type: e, key: s, ref: o, props: i, _owner: uT.current };
}
Za.Fragment = aT;
Za.jsx = Pg;
Za.jsxs = Pg;
(function (e) {
  e.exports = Za;
})(iT);
const vn = Rs.Fragment;
const D = Rs.jsx;
const je = Rs.jsxs;
const jh = E.createContext(void 0);
const $g = E.createContext(!1);
function Og(e, t) {
  return (
    e ||
    (t && typeof window < "u"
      ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = jh), window.ReactQueryClientContext)
      : jh)
  );
}
const k = ({ context: e } = {}) => {
    const t = E.useContext(Og(e, E.useContext($g)));
    if (!t) throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  };
const dT = ({ client: e, children: t, context: r, contextSharing: n = !1 }) => {
    E.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    );
    const i = Og(r, n);
    return D($g.Provider, { value: !r && n, children: D(i.Provider, { value: e, children: t }) });
  };
const Cg = E.createContext(!1);
const fT = () => E.useContext(Cg);
Cg.Provider;
function pT() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e,
  };
}
const hT = E.createContext(pT());
const mT = () => E.useContext(hT);
function Tg(e, t) {
  return typeof e === "function" ? e(...t) : !!e;
}
const yT = (e, t) => {
    (e.suspense || e.useErrorBoundary) && (t.isReset() || (e.retryOnMount = !1));
  };
const vT = (e) => {
    E.useEffect(() => {
      e.clearReset();
    }, [e]);
  };
const gT = ({ result: e, errorResetBoundary: t, useErrorBoundary: r, query: n }) =>
    e.isError && !t.isReset() && !e.isFetching && Tg(r, [e.error, n]);
const ST = (e) => {
    e.suspense && typeof e.staleTime !== "number" && (e.staleTime = 1e3);
  };
const ET = (e, t) => e.isLoading && e.isFetching && !t;
const wT = (e, t, r) => (e == null ? void 0 : e.suspense) && ET(t, r);
const PT = (e, t, r) =>
    t
      .fetchOptimistic(e)
      .then(({ data: n }) => {
        e.onSuccess == null || e.onSuccess(n), e.onSettled == null || e.onSettled(n, null);
      })
      .catch((n) => {
        r.clearReset(), e.onError == null || e.onError(n), e.onSettled == null || e.onSettled(void 0, n);
      });
function $T(e, t) {
  const r = k({ context: e.context });
  const n = fT();
  const i = mT();
  const s = r.defaultQueryOptions(e);
  (s._optimisticResults = n ? "isRestoring" : "optimistic"),
    s.onError && (s.onError = Pe.batchCalls(s.onError)),
    s.onSuccess && (s.onSuccess = Pe.batchCalls(s.onSuccess)),
    s.onSettled && (s.onSettled = Pe.batchCalls(s.onSettled)),
    ST(s),
    yT(s, i),
    vT(i);
  const [o] = E.useState(() => new t(r, s));
  const a = o.getOptimisticResult(s);
  if (
    (wg(
      E.useCallback((l) => (n ? () => {} : o.subscribe(Pe.batchCalls(l))), [o, n]),
      () => o.getCurrentResult(),
      () => o.getCurrentResult(),
    ),
    E.useEffect(() => {
      o.setOptions(s, { listeners: !1 });
    }, [s, o]),
    wT(s, a, n))
  )
    throw PT(s, o, i);
  if (gT({ result: a, errorResetBoundary: i, useErrorBoundary: s.useErrorBoundary, query: o.getCurrentQuery() }))
    throw a.error;
  return s.notifyOnChangeProps ? a : o.trackResult(a);
}
function H(e, t, r) {
  const n = Ki(e, t, r);
  return $T(n, HC);
}
function A(e, t, r) {
  const n = AC(e, t, r);
  const i = k({ context: n.context });
  const [s] = E.useState(() => new QC(i, n));
  E.useEffect(() => {
    s.setOptions(n);
  }, [s, n]);
  const o = wg(
      E.useCallback((l) => s.subscribe(Pe.batchCalls(l)), [s]),
      () => s.getCurrentResult(),
      () => s.getCurrentResult(),
    );
  const a = E.useCallback(
      (l, u) => {
        s.mutate(l, u).catch(OT);
      },
      [s],
    );
  if (o.error && Tg(s.options.useErrorBoundary, [o.error])) throw o.error;
  return { ...o, mutate: a, mutateAsync: o.mutate };
}
function OT() {}
var xg = Re.createContext(null);
var P = () => {
    let e = Re.useContext(xg);
    if (!e) throw new Error("useMedusa must be used within a MedusaProvider");
    return e;
  };
var CT = ({ queryClientProviderProps: e, baseUrl: t, apiKey: r, publishableApiKey: n, children: i }) => {
    let s = new bC({ baseUrl: t, maxRetries: 0, apiKey: r, publishableApiKey: n });
    return Re.createElement(dT, { ...e }, Re.createElement(xg.Provider, { value: { client: s } }, i));
  };
var ae = (e) => {
    let t = {
      all: [e],
      lists: () => [...t.all, "list"],
      list: (r) => [...t.lists(), { query: r }],
      details: () => [...t.all, "detail"],
      detail: (r) => [...t.details(), r],
    };
    return t;
  };
Re.createContext(null);
var _ = (e, t, r) => ({
  ...r,
  onSuccess: (...n) => {
    if (r?.onSuccess) return r.onSuccess(...n);
    t !== void 0 &&
      t.forEach((i) => {
        e.invalidateQueries({ queryKey: i });
      });
  },
});
Re.createContext(null);
var TT = "admin_auth";
var Rg = ae(TT);
var $_ = (e) => {
    let { client: t } = P();
    let { data: r, ...n } = H(Rg.details(), () => t.admin.auth.getSession(), e);
    return { ...r, ...n };
  };
var O_ = (e) => {
    let { client: t } = P();
    let r = k();
    return A((n) => t.admin.auth.createSession(n), _(r, Rg.details(), e));
  };
var xT = "admin_batches";
var gn = ae(xT);
var C_ = (e, t) => {
    let { client: r } = P();
    let { data: n, ...i } = H(gn.list(e), () => r.admin.batchJobs.list(e), t);
    return { ...n, ...i };
  };
var T_ = (e, t) => {
    let { client: r } = P();
    let { data: n, ...i } = H(gn.detail(e), () => r.admin.batchJobs.retrieve(e), t);
    return { ...n, ...i };
  };
var x_ = (e) => {
    let { client: t } = P();
    let r = k();
    return A((n) => t.admin.batchJobs.create(n), _(r, gn.lists(), e));
  };
var R_ = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A(() => r.admin.batchJobs.cancel(e), _(n, [gn.lists(), gn.detail(e)], t));
  };
var b_ = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A(() => r.admin.batchJobs.confirm(e), _(n, [gn.lists(), gn.detail(e)], t));
  };
var RT = "admin_orders";
var se = {
    ...ae(RT),
    detailOrder(e, t) {
      return [...this.detail(e), { ...(t || {}) }];
    },
  };
var k_ = (e, t) => {
    let { client: r } = P();
    let { data: n, ...i } = H(se.list(e), () => r.admin.orders.list(e), t);
    return { ...n, ...i };
  };
var A_ = (e, t, r) => {
    let { client: n } = P();
    let { data: i, ...s } = H(se.detailOrder(e, t), () => n.admin.orders.retrieve(e, t), r);
    return { ...i, ...s };
  };
var __ = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A((i) => r.admin.orders.createClaim(e, i), _(n, se.detail(e), t));
  };
var D_ = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A((i) => r.admin.orders.cancelClaim(e, i), _(n, se.detail(e), t));
  };
var L_ = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A(({ claim_id: i, ...s }) => r.admin.orders.fulfillClaim(e, i, s), _(n, se.detail(e), t));
  };
var N_ = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A(
      ({ claim_id: i, fulfillment_id: s }) => r.admin.orders.cancelClaimFulfillment(e, i, s),
      _(n, se.detail(e), t),
    );
  };
var F_ = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A(({ claim_id: i, ...s }) => r.admin.orders.createClaimShipment(e, i, s), _(n, se.detail(e), t));
  };
var bT = "admin_collections";
var Sn = ae(bT);
var M_ = (e, t) => {
    let { client: r } = P();
    let { data: n, ...i } = H(Sn.list(e), () => r.admin.collections.list(e), t);
    return { ...n, ...i };
  };
var I_ = (e, t) => {
    let { client: r } = P();
    let { data: n, ...i } = H(Sn.detail(e), () => r.admin.collections.retrieve(e), t);
    return { ...n, ...i };
  };
var q_ = (e) => {
    let { client: t } = P();
    let r = k();
    return A((n) => t.admin.collections.create(n), _(r, Sn.lists(), e));
  };
var U_ = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A((i) => r.admin.collections.update(e, i), _(n, [Sn.lists(), Sn.detail(e)], t));
  };
var j_ = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A(() => r.admin.collections.delete(e), _(n, [Sn.lists(), Sn.detail(e)], t));
  };
var kT = "admin_currencies";
var zc = ae(kT);
var B_ = (e, t) => {
    let { client: r } = P();
    let { data: n, ...i } = H(zc.list(e), () => r.admin.currencies.list(e), t);
    return { ...n, ...i };
  };
var z_ = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A((i) => r.admin.currencies.update(e, i), _(n, [zc.lists(), zc.detail(e)], t));
  };
var AT = "admin_customer_groups";
var Tt = {
    ...ae(AT),
    detailCustomer(e, t) {
      return [...this.detail(e), "customers", { ...(t || {}) }];
    },
  };
var G_ = (e, t, r) => {
    let { client: n } = P();
    let { data: i, ...s } = H(Tt.detail(e), () => n.admin.customerGroups.retrieve(e, t), r);
    return { ...i, ...s };
  };
var H_ = (e, t) => {
    let { client: r } = P();
    let { data: n, ...i } = H(Tt.list(e), () => r.admin.customerGroups.list(e), t);
    return { ...n, ...i };
  };
var W_ = (e, t, r) => {
    let { client: n } = P();
    let { data: i, ...s } = H(Tt.detailCustomer(e, t), () => n.admin.customerGroups.listCustomers(e, t), r);
    return { ...i, ...s };
  };
var Q_ = (e) => {
    let { client: t } = P();
    let r = k();
    return A((n) => t.admin.customerGroups.create(n), _(r, Tt.lists(), e));
  };
var V_ = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A((i) => r.admin.customerGroups.update(e, i), _(n, [Tt.lists(), Tt.detail(e)], t));
  };
var K_ = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A(() => r.admin.customerGroups.delete(e), _(n, [Tt.lists(), Tt.detail(e)], t));
  };
var J_ = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A((i) => r.admin.customerGroups.addCustomers(e, i), _(n, [Tt.lists(), Tt.detailCustomer(e)], t));
  };
var X_ = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A((i) => r.admin.customerGroups.removeCustomers(e, i), _(n, [Tt.lists(), Tt.detailCustomer(e)], t));
  };
var _T = "admin_customers";
var vi = ae(_T);
var Y_ = (e, t) => {
    let { client: r } = P();
    let { data: n, ...i } = H(vi.list(e), () => r.admin.customers.list(e), t);
    return { ...n, ...i };
  };
var Z_ = (e, t) => {
    let { client: r } = P();
    let { data: n, ...i } = H(vi.detail(e), () => r.admin.customers.retrieve(e), t);
    return { ...n, ...i };
  };
var e2 = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A((i) => r.admin.customers.update(e, i), _(n, [vi.lists(), vi.detail(e)], t));
  };
var DT = "admin_discounts";
var Yt = {
    ...ae(DT),
    detailCondition(e, t) {
      return [...this.detail(e), "condition", { ...(t || {}) }];
    },
  };
var t2 = (e, t) => {
    let { client: r } = P();
    let { data: n, ...i } = H(Yt.list(e), () => r.admin.discounts.list(e), t);
    return { ...n, ...i };
  };
var r2 = (e, t, r) => {
    let { client: n } = P();
    let { data: i, ...s } = H(Yt.detail(e), () => n.admin.discounts.retrieve(e, t), r);
    return { ...i, ...s };
  };
var n2 = (e, t) => {
    let { client: r } = P();
    let { data: n, ...i } = H(Yt.detail(e), () => r.admin.discounts.retrieveByCode(e), t);
    return { ...n, ...i };
  };
var i2 = (e, t, r, n) => {
    let { client: i } = P();
    let { data: s, ...o } = H(Yt.detailCondition(t), () => i.admin.discounts.getCondition(e, t, r), n);
    return { ...s, ...o };
  };
var s2 = (e, t, r, n) => {
    let { client: i } = P();
    let s = k();
    return A((o) => i.admin.discounts.addConditionResourceBatch(e, t, o, r), _(s, Yt.detail(e), n));
  };
var o2 = (e, t, r) => {
    let { client: n } = P();
    let i = k();
    return A((s) => n.admin.discounts.deleteConditionResourceBatch(e, t, s), _(i, [Yt.detail(e)], r));
  };
var a2 = (e) => {
    let { client: t } = P();
    let r = k();
    return A((n) => t.admin.discounts.create(n), _(r, Yt.lists(), e));
  };
var l2 = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A((i) => r.admin.discounts.update(e, i), _(n, Yt.detail(e), t));
  };
var u2 = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A(() => r.admin.discounts.delete(e), _(n, Yt.lists(), t));
  };
var c2 = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A((i) => r.admin.discounts.deleteCondition(e, i), _(n, Yt.detail(e), t));
  };
var LT = "admin_draft_orders";
var Br = ae(LT);
var d2 = (e, t) => {
    let { client: r } = P();
    let { data: n, ...i } = H(Br.list(e), () => r.admin.draftOrders.list(e), t);
    return { ...n, ...i };
  };
var f2 = (e, t) => {
    let { client: r } = P();
    let { data: n, ...i } = H(Br.detail(e), () => r.admin.draftOrders.retrieve(e), t);
    return { ...n, ...i };
  };
var p2 = (e) => {
    let { client: t } = P();
    let r = k();
    return A((n) => t.admin.draftOrders.create(n), _(r, Br.lists(), e));
  };
var h2 = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A((i) => r.admin.draftOrders.update(e, i), _(n, [Br.detail(e), Br.lists()], t));
  };
var m2 = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A(() => r.admin.draftOrders.delete(e), _(n, [Br.detail(e), Br.lists()], t));
  };
var y2 = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A(() => r.admin.draftOrders.markPaid(e), _(n, Br.detail(e), t));
  };
var NT = "admin_gift_cards";
var bs = ae(NT);
var v2 = (e, t) => {
    let { client: r } = P();
    let { data: n, ...i } = H(bs.list(e), () => r.admin.giftCards.list(e), t);
    return { ...n, ...i };
  };
var g2 = (e, t) => {
    let { client: r } = P();
    let { data: n, ...i } = H(bs.detail(e), () => r.admin.giftCards.retrieve(e), t);
    return { ...n, ...i };
  };
var S2 = (e) => {
    let { client: t } = P();
    let r = k();
    return A((n) => t.admin.giftCards.create(n), _(r, bs.lists(), e));
  };
var E2 = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A((i) => r.admin.giftCards.update(e, i), _(n, [bs.lists(), bs.detail(e)], t));
  };
var FT = "admin_invites";
var bg = ae(FT);
var w2 = (e) => {
    let { client: t } = P();
    let r = k();
    return A((n) => t.admin.invites.accept(n), _(r, bg.lists(), e));
  };
var P2 = (e) => {
    let { client: t } = P();
    let r = k();
    return A((n) => t.admin.invites.create(n), _(r, bg.lists(), e));
  };
var MT = "admin_notes";
var xa = ae(MT);
var $2 = (e, t) => {
    let { client: r } = P();
    let { data: n, ...i } = H(xa.list(e), () => r.admin.notes.list(e), t);
    return { ...n, ...i };
  };
var O2 = (e) => {
    let { client: t } = P();
    let r = k();
    return A((n) => t.admin.notes.create(n), _(r, xa.lists(), e));
  };
var C2 = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A(() => r.admin.notes.delete(e), _(n, [xa.detail(e), xa.lists()], t));
  };
var IT = "admin_notifications";
var Gc = ae(IT);
var T2 = (e, t) => {
    let { client: r } = P();
    let { data: n, ...i } = H(Gc.list(e), () => r.admin.notifications.list(e), t);
    return { ...n, ...i };
  };
var x2 = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A((i) => r.admin.notifications.resend(e, i), _(n, [Gc.lists(), Gc.detail(e)], t));
  };
var R2 = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A((i) => r.admin.orders.update(e, i), _(n, [se.lists(), se.detail(e)], t));
  };
var b2 = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A(() => r.admin.orders.cancel(e), _(n, [se.lists(), se.detail(e)], t));
  };
var k2 = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A(() => r.admin.orders.capturePayment(e), _(n, [se.lists(), se.detail(e)], t));
  };
var A2 = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A((i) => r.admin.orders.refundPayment(e, i), _(n, [se.lists(), se.detail(e)], t));
  };
var _2 = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A((i) => r.admin.orders.createFulfillment(e, i), _(n, [se.lists(), se.detail(e)], t));
  };
var D2 = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A((i) => r.admin.orders.cancelFulfillment(e, i), _(n, [se.lists(), se.detail(e)], t));
  };
var L2 = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A((i) => r.admin.orders.createShipment(e, i), _(n, se.detail(e), t));
  };
var N2 = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A((i) => r.admin.orders.requestReturn(e, i), _(n, se.detail(e), t));
  };
var qT = "admin_order_edits";
var Oe = ae(qT);
var F2 = (e, t, r) => {
    let { client: n } = P();
    let { data: i, ...s } = H(Oe.detail(e), () => n.admin.orderEdits.retrieve(e, t), r);
    return { ...i, ...s };
  };
var M2 = (e, t) => {
    let { client: r } = P();
    let { data: n, ...i } = H(Oe.list(e), () => r.admin.orderEdits.list(e), t);
    return { ...n, ...i };
  };
var I2 = (e) => {
    let { client: t } = P();
    let r = k();
    return A((n) => t.admin.orderEdits.create(n), _(r, [Oe.lists(), se.details()], e));
  };
var q2 = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A(() => r.admin.orderEdits.delete(e), _(n, [Oe.detail(e), Oe.lists(), se.details()], t));
  };
var U2 = (e, t, r) => {
    let { client: n } = P();
    let i = k();
    return A(() => n.admin.orderEdits.deleteItemChange(e, t), _(i, [Oe.detail(e), Oe.lists()], r));
  };
var j2 = (e, t, r) => {
    let { client: n } = P();
    let i = k();
    return A((s) => n.admin.orderEdits.updateLineItem(e, t, s), _(i, [Oe.detail(e), Oe.lists()], r));
  };
var B2 = (e, t, r) => {
    let { client: n } = P();
    let i = k();
    return A(() => n.admin.orderEdits.removeLineItem(e, t), _(i, [Oe.detail(e), Oe.lists()], r));
  };
var z2 = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A((i) => r.admin.orderEdits.update(e, i), _(n, [Oe.lists(), Oe.detail(e), se.details()], t));
  };
var G2 = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A((i) => r.admin.orderEdits.addLineItem(e, i), _(n, [Oe.lists(), Oe.detail(e)], t));
  };
var H2 = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A(() => r.admin.orderEdits.requestConfirmation(e), _(n, [Oe.lists(), Oe.detail(e), se.details()], t));
  };
var W2 = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A(() => r.admin.orderEdits.cancel(e), _(n, [Oe.lists(), Oe.detail(e), se.details()], t));
  };
var Q2 = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A(() => r.admin.orderEdits.confirm(e), _(n, [Oe.lists(), Oe.detail(e), se.details()], t));
  };
var UT = "admin_price_lists";
var Ft = {
    ...ae(UT),
    detailProducts(e, t) {
      return [...this.detail(e), "products", { ...(t || {}) }];
    },
  };
var V2 = (e, t) => {
    let { client: r } = P();
    let { data: n, ...i } = H(Ft.list(e), () => r.admin.priceLists.list(e), t);
    return { ...n, ...i };
  };
var K2 = (e, t, r) => {
    let { client: n } = P();
    let { data: i, ...s } = H(Ft.detailProducts(e, t), () => n.admin.priceLists.listProducts(e, t), r);
    return { ...i, ...s };
  };
var J2 = (e, t) => {
    let { client: r } = P();
    let { data: n, ...i } = H(Ft.detail(e), () => r.admin.priceLists.retrieve(e), t);
    return { ...n, ...i };
  };
var jT = "admin_products";
var Ae = ae(jT);
var X2 = (e, t) => {
    let { client: r } = P();
    let { data: n, ...i } = H(Ae.list(e), () => r.admin.products.list(e), t);
    return { ...n, ...i };
  };
var Y2 = (e, t) => {
    let { client: r } = P();
    let { data: n, ...i } = H(Ae.detail(e), () => r.admin.products.retrieve(e), t);
    return { ...n, ...i };
  };
var Z2 = (e) => {
    let { client: t } = P();
    let r = k();
    return A((n) => t.admin.products.create(n), _(r, Ae.lists(), e));
  };
var eD = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A((i) => r.admin.products.update(e, i), _(n, [Ae.lists(), Ae.detail(e)], t));
  };
var tD = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A(() => r.admin.products.delete(e), _(n, [Ae.lists(), Ae.detail(e)], t));
  };
var rD = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A((i) => r.admin.products.createVariant(e, i), _(n, [Ae.lists(), Ae.detail(e)], t));
  };
var nD = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A(({ variant_id: i, ...s }) => r.admin.products.updateVariant(e, i, s), _(n, [Ae.lists(), Ae.detail(e)], t));
  };
var iD = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A((i) => r.admin.products.deleteVariant(e, i), _(n, [Ae.lists(), Ae.detail(e)], t));
  };
var sD = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A((i) => r.admin.products.addOption(e, i), _(n, Ae.detail(e), t));
  };
var oD = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A(({ option_id: i, ...s }) => r.admin.products.updateOption(e, i, s), _(n, Ae.detail(e), t));
  };
var aD = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A((i) => r.admin.products.deleteOption(e, i), _(n, Ae.detail(e), t));
  };
var BT = "admin_variants";
var zT = ae(BT);
var lD = (e, t) => {
    let { client: r } = P();
    let { data: n, ...i } = H(zT.list(e), () => r.admin.variants.list(e), t);
    return { ...n, ...i };
  };
var uD = (e) => {
    let { client: t } = P();
    let r = k();
    return A((n) => t.admin.priceLists.create(n), _(r, Ft.lists(), e));
  };
var cD = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A((i) => r.admin.priceLists.update(e, i), _(n, [Ft.detail(e), Ft.lists(), Ft.detailProducts(e)], t));
  };
var dD = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A(() => r.admin.priceLists.delete(e), _(n, [Ft.detail(e), Ft.lists()], t));
  };
var fD = (e, t, r) => {
    let { client: n } = P();
    let i = k();
    return A(() => n.admin.priceLists.deleteProductPrices(e, t), _(i, [Ft.detail(e), Ft.lists(), Ae.detail(t)], r));
  };
var GT = "admin_product_tags";
var HT = ae(GT);
var pD = (e, t) => {
    let { client: r } = P();
    let { data: n, ...i } = H(HT.list(e), () => r.admin.productTags.list(e), t);
    return { ...n, ...i };
  };
var WT = "admin_product_types";
var QT = ae(WT);
var hD = (e, t) => {
    let { client: r } = P();
    let { data: n, ...i } = H(QT.list(e), () => r.admin.productTypes.list(e), t);
    return { ...n, ...i };
  };
var VT = "admin_publishable_api_keys";
var $t = {
    ...ae(VT),
    detailSalesChannels(e, t) {
      return [...this.detail(e), "sales_channels", { ...(t || {}) }];
    },
  };
var mD = (e, t) => {
    let { client: r } = P();
    let { data: n, ...i } = H($t.list(e), () => r.admin.publishableApiKeys.list(e), t);
    return { ...n, ...i };
  };
var yD = (e, t, r) => {
    let { client: n } = P();
    let { data: i, ...s } = H($t.detailSalesChannels(e, t), () => n.admin.publishableApiKeys.listSalesChannels(e, t), r);
    return { ...i, ...s };
  };
var vD = (e) => {
    let { client: t } = P();
    let r = k();
    return A((n) => t.admin.publishableApiKeys.create(n), _(r, [$t.lists()], e));
  };
var gD = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A((i) => r.admin.publishableApiKeys.update(e, i), _(n, [$t.lists(), $t.detail(e), $t.details()], t));
  };
var SD = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A(() => r.admin.publishableApiKeys.delete(e), _(n, [$t.detail(e), $t.lists()], t));
  };
var ED = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A(() => r.admin.publishableApiKeys.revoke(e), _(n, [$t.lists(), $t.detail(e)], t));
  };
var wD = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A((i) => r.admin.publishableApiKeys.addSalesChannelsBatch(e, i), _(n, [$t.detailSalesChannels(e)], t));
  };
var PD = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A((i) => r.admin.publishableApiKeys.deleteSalesChannelsBatch(e, i), _(n, [$t.detailSalesChannels(e)], t));
  };
var KT = "admin_regions";
var zr = ae(KT);
var $D = (e, t) => {
    let { client: r } = P();
    let { data: n, ...i } = H(zr.list(e), () => r.admin.regions.list(e), t);
    return { ...n, ...i };
  };
var OD = (e, t) => {
    let { client: r } = P();
    let { data: n, ...i } = H(zr.detail(e), () => r.admin.regions.retrieve(e), t);
    return { ...n, ...i };
  };
var CD = (e, t) => {
    let { client: r } = P();
    let { data: n, ...i } = H(
        zr.detail(`${e}_fullfillment-options`),
        () => r.admin.regions.retrieveFulfillmentOptions(e),
        t,
      );
    return { ...n, ...i };
  };
var TD = (e) => {
    let { client: t } = P();
    let r = k();
    return A((n) => t.admin.regions.create(n), _(r, zr.lists(), e));
  };
var xD = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A((i) => r.admin.regions.update(e, i), _(n, [zr.lists(), zr.detail(e)], t));
  };
var RD = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A(() => r.admin.regions.delete(e), _(n, [zr.lists(), zr.detail(e)], t));
  };
var JT = "admin_return_reasons";
var gi = ae(JT);
var bD = (e) => {
    let { client: t } = P();
    let { data: r, ...n } = H(gi.lists(), () => t.admin.returnReasons.list(), e);
    return { ...r, ...n };
  };
var kD = (e) => {
    let { client: t } = P();
    let r = k();
    return A((n) => t.admin.returnReasons.create(n), _(r, gi.lists(), e));
  };
var AD = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A((i) => r.admin.returnReasons.update(e, i), _(n, [gi.detail(e), gi.lists()], t));
  };
var _D = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A(() => r.admin.returnReasons.delete(e), _(n, [gi.detail(e), gi.lists()], t));
  };
var XT = "admin_returns";
var Ra = ae(XT);
var DD = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A((i) => r.admin.returns.receive(e, i), _(n, [Ra.detail(e), Ra.list()], t));
  };
var LD = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A(() => r.admin.returns.cancel(e), _(n, [Ra.detail(e), Ra.list()], t));
  };
var YT = "admin_sales_channels";
var Jt = ae(YT);
var ND = (e, t) => {
    let { client: r } = P();
    let { data: n, ...i } = H(Jt.list(e), () => r.admin.salesChannels.list(e), t);
    return { ...n, ...i };
  };
var FD = (e) => {
    let { client: t } = P();
    let r = k();
    return A((n) => t.admin.salesChannels.create(n), _(r, [Jt.list()], e));
  };
var MD = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A((i) => r.admin.salesChannels.update(e, i), _(n, [Jt.lists(), Jt.detail(e)], t));
  };
var ID = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A(() => r.admin.salesChannels.delete(e), _(n, [Jt.lists(), Jt.detail(e)], t));
  };
var qD = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A(
      (i) => r.admin.salesChannels.removeProducts(e, i),
      _(n, [Jt.lists(), Jt.detail(e), Ae.list({ sales_channel_id: [e] })], t),
    );
  };
var UD = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A(
      (i) => r.admin.salesChannels.addProducts(e, i),
      _(n, [Jt.lists(), Jt.detail(e), Ae.list({ sales_channel_id: [e] })], t),
    );
  };
var ZT = "admin_shipping_options";
var En = ae(ZT);
var jD = (e, t) => {
    let { client: r } = P();
    let { data: n, ...i } = H(En.list(e), () => r.admin.shippingOptions.list(e), t);
    return { ...n, ...i };
  };
var BD = (e, t) => {
    let { client: r } = P();
    let { data: n, ...i } = H(En.detail(e), () => r.admin.shippingOptions.retrieve(e), t);
    return { ...n, ...i };
  };
var zD = (e) => {
    let { client: t } = P();
    let r = k();
    return A((n) => t.admin.shippingOptions.create(n), _(r, En.lists(), e));
  };
var GD = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A((i) => r.admin.shippingOptions.update(e, i), _(n, [En.lists(), En.detail(e)], t));
  };
var HD = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A(() => r.admin.shippingOptions.delete(e), _(n, [En.lists(), En.detail(e)], t));
  };
var ex = "admin_shippingProfiles";
var tx = ae(ex);
var WD = (e) => {
    let { client: t } = P();
    let { data: r, ...n } = H(tx.lists(), () => t.admin.shippingProfiles.list(), e);
    return { ...r, ...n };
  };
var rx = "admin_store";
var hf = ae(rx);
var QD = (e) => {
    let { client: t } = P();
    let { data: r, ...n } = H(hf.detail("tax_providers"), () => t.admin.store.listTaxProviders(), e);
    return { ...r, ...n };
  };
var nx = (e) => {
    let { client: t } = P();
    let { data: r, ...n } = H(hf.details(), () => t.admin.store.retrieve(), e);
    return { ...r, ...n };
  };
var VD = (e) => {
    let { client: t } = P();
    let r = k();
    return A((n) => t.admin.store.update(n), _(r, hf.details(), e));
  };
var ix = "admin_swaps";
var el = ae(ix);
var KD = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A((i) => r.admin.orders.createSwap(e, i), _(n, [se.detail(e), el.lists()], t));
  };
var JD = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A((i) => r.admin.orders.cancelSwap(e, i), _(n, [se.detail(e), el.lists()], t));
  };
var XD = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A(({ swap_id: i, ...s }) => r.admin.orders.fulfillSwap(e, i, s), _(n, [se.detail(e), el.lists()], t));
  };
var YD = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A(({ swap_id: i, ...s }) => r.admin.orders.createSwapShipment(e, i, s), _(n, se.detail(e), t));
  };
var ZD = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A(
      ({ swap_id: i, fulfillment_id: s }) => r.admin.orders.cancelSwapFulfillment(e, i, s),
      _(n, [se.detail(e), el.lists()], t),
    );
  };
var sx = "admin_tax_rates";
var wn = ae(sx);
var eL = (e, t) => {
    let { client: r } = P();
    let { data: n, ...i } = H(wn.list(e), () => r.admin.taxRates.list(e), t);
    return { ...n, ...i };
  };
var tL = (e, t, r) => {
    let { client: n } = P();
    let { data: i, ...s } = H(wn.detail(e), () => n.admin.taxRates.retrieve(e, t), r);
    return { ...i, ...s };
  };
var rL = (e) => {
    let { client: t } = P();
    let r = k();
    return A((n) => t.admin.taxRates.create(n), _(r, wn.lists(), e));
  };
var nL = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A((i) => r.admin.taxRates.update(e, i), _(n, [wn.lists(), wn.detail(e)], t));
  };
var iL = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A(() => r.admin.taxRates.delete(e), _(n, [wn.lists(), wn.detail(e)], t));
  };
var sL = (e) => {
    let { client: t } = P();
    let r = k();
    return A((n) => t.admin.uploads.create(n), _(r, void 0, e));
  };
var oL = (e) => {
    let { client: t } = P();
    let r = k();
    return A((n) => t.admin.uploads.createProtected(n), _(r, void 0, e));
  };
var aL = (e) => {
    let { client: t } = P();
    let r = k();
    return A((n) => t.admin.uploads.getPresignedDownloadUrl(n), _(r, void 0, e));
  };
var lL = (e) => {
    let { client: t } = P();
    let r = k();
    return A((n) => t.admin.uploads.delete(n), _(r, void 0, e));
  };
var ox = "admin_users";
var mf = ae(ox);
var uL = (e) => {
    let { client: t } = P();
    let { data: r, ...n } = H(mf.lists(), () => t.admin.users.list(), e);
    return { ...r, ...n };
  };
var cL = (e, t) => {
    let { client: r } = P();
    let { data: n, ...i } = H(mf.detail(e), () => r.admin.users.retrieve(e), t);
    return { ...n, ...i };
  };
var dL = (e, t) => {
    let { client: r } = P();
    let n = k();
    return A((i) => r.admin.users.update(e, i), _(n, [vi.lists(), vi.detail(e)], t));
  };
var fL = (e) => {
    let { client: t } = P();
    return A((r) => t.admin.users.resetPassword(r), e);
  };
var pL = (e) => {
    let { client: t } = P();
    return A((r) => t.admin.users.sendResetPasswordToken(r), e);
  };
function kg(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Ag } = Object.prototype;
const { getPrototypeOf: yf } = Object;
const vf = ((e) => (t) => {
    const r = Ag.call(t);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  })(Object.create(null));
const vr = (e) => ((e = e.toLowerCase()), (t) => vf(t) === e);
const tl = (e) => (t) => typeof t === e;
const { isArray: Ti } = Array;
const ks = tl("undefined");
function ax(e) {
  return (
    e !== null &&
    !ks(e) &&
    e.constructor !== null &&
    !ks(e.constructor) &&
    Gr(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const _g = vr("ArrayBuffer");
function lx(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView ? (t = ArrayBuffer.isView(e)) : (t = e?.buffer && _g(e.buffer)),
    t
  );
}
const ux = tl("string");
const Gr = tl("function");
const Dg = tl("number");
const gf = (e) => e !== null && typeof e === "object";
const cx = (e) => e === !0 || e === !1;
const jo = (e) => {
    if (vf(e) !== "object") return !1;
    const t = yf(e);
    return (
      (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  };
const dx = vr("Date");
const fx = vr("File");
const px = vr("Blob");
const hx = vr("FileList");
const mx = (e) => gf(e) && Gr(e.pipe);
const yx = (e) => {
    const t = "[object FormData]";
    return (
      e &&
      ((typeof FormData === "function" && e instanceof FormData) ||
        Ag.call(e) === t ||
        (Gr(e.toString) && e.toString() === t))
    );
  };
const vx = vr("URLSearchParams");
const gx = (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""));
function Bs(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let n;
  let i;
  if ((typeof e !== "object" && (e = [e]), Ti(e))) for (n = 0, i = e.length; n < i; n++) t.call(null, e[n], n, e);
  else {
    const s = r ? Object.getOwnPropertyNames(e) : Object.keys(e);
    const o = s.length;
    let a;
    for (n = 0; n < o; n++) (a = s[n]), t.call(null, e[a], a, e);
  }
}
function Lg(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length;
  let i;
  while (n-- > 0) if (((i = r[n]), t === i.toLowerCase())) return i;
  return null;
}
const Ng = (() =>
    typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)();
const Fg = (e) => !ks(e) && e !== Ng;
function Hc() {
  const { caseless: e } = (Fg(this) && this) || {};
  const t = {};
  const r = (n, i) => {
      const s = (e && Lg(t, i)) || i;
      jo(t[s]) && jo(n) ? (t[s] = Hc(t[s], n)) : jo(n) ? (t[s] = Hc({}, n)) : Ti(n) ? (t[s] = n.slice()) : (t[s] = n);
    };
  for (let n = 0, i = arguments.length; n < i; n++) arguments[n] && Bs(arguments[n], r);
  return t;
}
const Sx = (e, t, r, { allOwnKeys: n } = {}) => (
    Bs(
      t,
      (i, s) => {
        r && Gr(i) ? (e[s] = kg(i, r)) : (e[s] = i);
      },
      { allOwnKeys: n },
    ),
    e
  );
const Ex = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e);
const wx = (e, t, r, n) => {
    (e.prototype = Object.create(t.prototype, n)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      r && Object.assign(e.prototype, r);
  };
const Px = (e, t, r, n) => {
    let i;
    let s;
    let o;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), s = i.length; s-- > 0; )
        (o = i[s]), (!n || n(o, e, t)) && !a[o] && ((t[o] = e[o]), (a[o] = !0));
      e = r !== !1 && yf(e);
    } while (e && (!r || r(e, t)) && e !== Object.prototype);
    return t;
  };
const $x = (e, t, r) => {
    (e = String(e)), (r === void 0 || r > e.length) && (r = e.length), (r -= t.length);
    const n = e.indexOf(t, r);
    return n !== -1 && n === r;
  };
const Ox = (e) => {
    if (!e) return null;
    if (Ti(e)) return e;
    let t = e.length;
    if (!Dg(t)) return null;
    const r = new Array(t);
    while (t-- > 0) r[t] = e[t];
    return r;
  };
const Cx = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && yf(Uint8Array));
const Tx = (e, t) => {
    const n = (e?.[Symbol.iterator]).call(e);
    let i;
    while ((i = n.next()) && !i.done) {
      const s = i.value;
      t.call(e, s[0], s[1]);
    }
  };
const xx = (e, t) => {
    let r;
    const n = [];
    while ((r = e.exec(t)) !== null) n.push(r);
    return n;
  };
const Rx = vr("HTMLFormElement");
const bx = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (r, n, i) {
      return n.toUpperCase() + i;
    });
const Bh = (
    ({ hasOwnProperty: e }) =>
    (t, r) =>
      e.call(t, r)
  )(Object.prototype);
const kx = vr("RegExp");
const Mg = (e, t) => {
    const r = Object.getOwnPropertyDescriptors(e);
    const n = {};
    Bs(r, (i, s) => {
      t(i, s, e) !== !1 && (n[s] = i);
    }),
      Object.defineProperties(e, n);
  };
const Ax = (e) => {
    Mg(e, (t, r) => {
      if (Gr(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1) return !1;
      const n = e[r];
      if (Gr(n)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error(`Can not rewrite read-only method '${r}'`);
          });
      }
    });
  };
const _x = (e, t) => {
    const r = {};
    const n = (i) => {
        i.forEach((s) => {
          r[s] = !0;
        });
      };
    return Ti(e) ? n(e) : n(String(e).split(t)), r;
  };
const Dx = () => {};
const Lx = (e, t) => ((e = +e), Number.isFinite(e) ? e : t);
const Su = "abcdefghijklmnopqrstuvwxyz";
const zh = "0123456789";
const Ig = { DIGIT: zh, ALPHA: Su, ALPHA_DIGIT: Su + Su.toUpperCase() + zh };
const Nx = (e = 16, t = Ig.ALPHA_DIGIT) => {
    let r = "";
    const { length: n } = t;
    while (e--) r += t[(Math.random() * n) | 0];
    return r;
  };
function Fx(e) {
  return !!(e && Gr(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Mx = (e) => {
    const t = new Array(10);
    const r = (n, i) => {
        if (gf(n)) {
          if (t.indexOf(n) >= 0) return;
          if (!("toJSON" in n)) {
            t[i] = n;
            const s = Ti(n) ? [] : {};
            return (
              Bs(n, (o, a) => {
                const l = r(o, i + 1);
                !ks(l) && (s[a] = l);
              }),
              (t[i] = void 0),
              s
            );
          }
        }
        return n;
      };
    return r(e, 0);
  };
const R = {
    isArray: Ti,
    isArrayBuffer: _g,
    isBuffer: ax,
    isFormData: yx,
    isArrayBufferView: lx,
    isString: ux,
    isNumber: Dg,
    isBoolean: cx,
    isObject: gf,
    isPlainObject: jo,
    isUndefined: ks,
    isDate: dx,
    isFile: fx,
    isBlob: px,
    isRegExp: kx,
    isFunction: Gr,
    isStream: mx,
    isURLSearchParams: vx,
    isTypedArray: Cx,
    isFileList: hx,
    forEach: Bs,
    merge: Hc,
    extend: Sx,
    trim: gx,
    stripBOM: Ex,
    inherits: wx,
    toFlatObject: Px,
    kindOf: vf,
    kindOfTest: vr,
    endsWith: $x,
    toArray: Ox,
    forEachEntry: Tx,
    matchAll: xx,
    isHTMLForm: Rx,
    hasOwnProperty: Bh,
    hasOwnProp: Bh,
    reduceDescriptors: Mg,
    freezeMethods: Ax,
    toObjectSet: _x,
    toCamelCase: bx,
    noop: Dx,
    toFiniteNumber: Lx,
    findKey: Lg,
    global: Ng,
    isContextDefined: Fg,
    ALPHABET: Ig,
    generateString: Nx,
    isSpecCompliantForm: Fx,
    toJSONObject: Mx,
  };
function ne(e, t, r, n, i) {
  Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    r && (this.config = r),
    n && (this.request = n),
    i && (this.response = i);
}
R.inherits(ne, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: R.toJSONObject(this.config),
      code: this.code,
      status: this.response?.status ? this.response.status : null,
    };
  },
});
const qg = ne.prototype;
const Ug = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Ug[e] = { value: e };
});
Object.defineProperties(ne, Ug);
Object.defineProperty(qg, "isAxiosError", { value: !0 });
ne.from = (e, t, r, n, i, s) => {
  const o = Object.create(qg);
  return (
    R.toFlatObject(
      e,
      o,
      function (l) {
        return l !== Error.prototype;
      },
      (a) => a !== "isAxiosError",
    ),
    ne.call(o, e.message, t, r, n, i),
    (o.cause = e),
    (o.name = e.name),
    s && Object.assign(o, s),
    o
  );
};
const Ix = null;
function Wc(e) {
  return R.isPlainObject(e) || R.isArray(e);
}
function jg(e) {
  return R.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Gh(e, t, r) {
  return e
    ? e
        .concat(t)
        .map(function (i, s) {
          return (i = jg(i)), !r && s ? `[${i}]` : i;
        })
        .join(r ? "." : "")
    : t;
}
function qx(e) {
  return R.isArray(e) && !e.some(Wc);
}
const Ux = R.toFlatObject(R, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function rl(e, t, r) {
  if (!R.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (r = R.toFlatObject(r, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (m, w) {
      return !R.isUndefined(w[m]);
    }));
  const n = r.metaTokens;
  const i = r.visitor || c;
  const s = r.dots;
  const o = r.indexes;
  const l = (r.Blob || (typeof Blob < "u" && Blob)) && R.isSpecCompliantForm(t);
  if (!R.isFunction(i)) throw new TypeError("visitor must be a function");
  function u(g) {
    if (g === null) return "";
    if (R.isDate(g)) return g.toISOString();
    if (!l && R.isBlob(g)) throw new ne("Blob is not supported. Use a Buffer instead.");
    return R.isArrayBuffer(g) || R.isTypedArray(g)
      ? l && typeof Blob === "function"
        ? new Blob([g])
        : Buffer.from(g)
      : g;
  }
  function c(g, m, w) {
    let p = g;
    if (g && !w && typeof g === "object") {
      if (R.endsWith(m, "{}")) (m = n ? m : m.slice(0, -2)), (g = JSON.stringify(g));
      else if ((R.isArray(g) && qx(g)) || ((R.isFileList(g) || R.endsWith(m, "[]")) && (p = R.toArray(g))))
        return (
          (m = jg(m)),
          p.forEach(function (y, S) {
            !(R.isUndefined(y) || y === null) && t.append(o === !0 ? Gh([m], S, s) : o === null ? m : `${m}[]`, u(y));
          }),
          !1
        );
    }
    return Wc(g) ? !0 : (t.append(Gh(w, m, s), u(g)), !1);
  }
  const d = [];
  const f = Object.assign(Ux, { defaultVisitor: c, convertValue: u, isVisitable: Wc });
  function v(g, m) {
    if (!R.isUndefined(g)) {
      if (d.indexOf(g) !== -1) throw Error(`Circular reference detected in ${m.join(".")}`);
      d.push(g),
        R.forEach(g, function (p, h) {
          (!(R.isUndefined(p) || p === null) && i.call(t, p, R.isString(h) ? h.trim() : h, m, f)) === !0 &&
            v(p, m ? m.concat(h) : [h]);
        }),
        d.pop();
    }
  }
  if (!R.isObject(e)) throw new TypeError("data must be an object");
  return v(e), t;
}
function Hh(e) {
  const t = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (n) {
    return t[n];
  });
}
function Sf(e, t) {
  (this._pairs = []), e && rl(e, this, t);
}
const Bg = Sf.prototype;
Bg.append = function (t, r) {
  this._pairs.push([t, r]);
};
Bg.toString = function (t) {
  const r = t
    ? function (n) {
        return t.call(this, n, Hh);
      }
    : Hh;
  return this._pairs
    .map(function (i) {
      return `${r(i[0])}=${r(i[1])}`;
    }, "")
    .join("&");
};
function jx(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function zg(e, t, r) {
  if (!t) return e;
  const n = (r?.encode) || jx;
  const i = r?.serialize;
  let s;
  if ((i ? (s = i(t, r)) : (s = R.isURLSearchParams(t) ? t.toString() : new Sf(t, r).toString(n)), s)) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), (e += (e.indexOf("?") === -1 ? "?" : "&") + s);
  }
  return e;
}
class Bx {
  constructor() {
    this.handlers = [];
  }
  use(t, r, n) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: r,
        synchronous: n ? n.synchronous : !1,
        runWhen: n ? n.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    R.forEach(this.handlers, function (n) {
      n !== null && t(n);
    });
  }
}
const Wh = Bx;
const Gg = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 };
const zx = typeof URLSearchParams < "u" ? URLSearchParams : Sf;
const Gx = FormData;
const Hx = (() => {
    let e;
    return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS")
      ? !1
      : typeof window < "u" && typeof document < "u";
  })();
const Wx = (() =>
    typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts === "function")();
const Qt = {
    isBrowser: !0,
    classes: { URLSearchParams: zx, FormData: Gx, Blob },
    isStandardBrowserEnv: Hx,
    isStandardBrowserWebWorkerEnv: Wx,
    protocols: ["http", "https", "file", "blob", "url", "data"],
  };
function Qx(e, t) {
  return rl(
    e,
    new Qt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (r, n, i, s) {
          return Qt.isNode && R.isBuffer(r)
            ? (this.append(n, r.toString("base64")), !1)
            : s.defaultVisitor.apply(this, arguments);
        },
      },
      t,
    ),
  );
}
function Vx(e) {
  return R.matchAll(/\w+|\[(\w*)]/g, e).map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function Kx(e) {
  const t = {};
  const r = Object.keys(e);
  let n;
  const i = r.length;
  let s;
  for (n = 0; n < i; n++) (s = r[n]), (t[s] = e[s]);
  return t;
}
function Hg(e) {
  function t(r, n, i, s) {
    let o = r[s++];
    const a = Number.isFinite(+o);
    const l = s >= r.length;
    return (
      (o = !o && R.isArray(i) ? i.length : o),
      l
        ? (R.hasOwnProp(i, o) ? (i[o] = [i[o], n]) : (i[o] = n), !a)
        : ((!(i[o] && R.isObject(i[o]))) && (i[o] = []), t(r, n, i[o], s) && R.isArray(i[o]) && (i[o] = Kx(i[o])), !a)
    );
  }
  if (R.isFormData(e) && R.isFunction(e.entries)) {
    const r = {};
    return (
      R.forEachEntry(e, (n, i) => {
        t(Vx(n), i, r, 0);
      }),
      r
    );
  }
  return null;
}
const Jx = { "Content-Type": void 0 };
function Xx(e, t, r) {
  if (R.isString(e))
    try {
      return (t || JSON.parse)(e), R.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError") throw n;
    }
  return (r || JSON.stringify)(e);
}
const nl = {
  transitional: Gg,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, r) {
      const n = r.getContentType() || "";
      const i = n.indexOf("application/json") > -1;
      const s = R.isObject(t);
      if ((s && R.isHTMLForm(t) && (t = new FormData(t)), R.isFormData(t))) return i && i ? JSON.stringify(Hg(t)) : t;
      if (R.isArrayBuffer(t) || R.isBuffer(t) || R.isStream(t) || R.isFile(t) || R.isBlob(t)) return t;
      if (R.isArrayBufferView(t)) return t.buffer;
      if (R.isURLSearchParams(t))
        return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let a;
      if (s) {
        if (n.indexOf("application/x-www-form-urlencoded") > -1) return Qx(t, this.formSerializer).toString();
        if ((a = R.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
          const l = this.env?.FormData;
          return rl(a ? { "files[]": t } : t, l && new l(), this.formSerializer);
        }
      }
      return s || i ? (r.setContentType("application/json", !1), Xx(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const r = this.transitional || nl.transitional;
      const n = r?.forcedJSONParsing;
      const i = this.responseType === "json";
      if (t && R.isString(t) && ((n && !this.responseType) || i)) {
        const o = !(r?.silentJSONParsing) && i;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (o) throw a.name === "SyntaxError" ? ne.from(a, ne.ERR_BAD_RESPONSE, this, null, this.response) : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Qt.classes.FormData, Blob: Qt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*" } },
};
R.forEach(["delete", "get", "head"], function (t) {
  nl.headers[t] = {};
});
R.forEach(["post", "put", "patch"], function (t) {
  nl.headers[t] = R.merge(Jx);
});
const Ef = nl;
const Yx = R.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]);
const Zx = (e) => {
    const t = {};
    let r;
    let n;
    let i;
    return (
      e
          ?.split(`
`)
          .forEach(function (o) {
            (i = o.indexOf(":")),
              (r = o.substring(0, i).trim().toLowerCase()),
              (n = o.substring(i + 1).trim()),
              !(!r || (t[r] && Yx[r])) &&
                (r === "set-cookie" ? (t[r] ? t[r].push(n) : (t[r] = [n])) : (t[r] = t[r] ? `${t[r]}, ${n}` : n));
          }),
      t
    );
  };
const Qh = Symbol("internals");
function Bi(e) {
  return e && String(e).trim().toLowerCase();
}
function Bo(e) {
  return e === !1 || e == null ? e : R.isArray(e) ? e.map(Bo) : String(e);
}
function eR(e) {
  const t = Object.create(null);
  const r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  while ((n = r.exec(e))) t[n[1]] = n[2];
  return t;
}
function tR(e) {
  return /^[-_a-zA-Z]+$/.test(e.trim());
}
function Eu(e, t, r, n) {
  if (R.isFunction(n)) return n.call(this, t, r);
  if (R.isString(t)) {
    if (R.isString(n)) return t.indexOf(n) !== -1;
    if (R.isRegExp(n)) return n.test(t);
  }
}
function rR(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function nR(e, t) {
  const r = R.toCamelCase(` ${t}`);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function (i, s, o) {
        return this[n].call(this, t, i, s, o);
      },
      configurable: !0,
    });
  });
}
class il {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const i = this;
    function s(a, l, u) {
      const c = Bi(l);
      if (!c) throw new Error("header name must be a non-empty string");
      const d = R.findKey(i, c);
      (!d || i[d] === void 0 || u === !0 || (u === void 0 && i[d] !== !1)) && (i[d || l] = Bo(a));
    }
    const o = (a, l) => R.forEach(a, (u, c) => s(u, c, l));
    return (
      R.isPlainObject(t) || t instanceof this.constructor
        ? o(t, r)
        : R.isString(t) && (t = t.trim()) && !tR(t)
        ? o(Zx(t), r)
        : t != null && s(r, t, n),
      this
    );
  }
  get(t, r) {
    if (((t = Bi(t)), t)) {
      const n = R.findKey(this, t);
      if (n) {
        const i = this[n];
        if (!r) return i;
        if (r === !0) return eR(i);
        if (R.isFunction(r)) return r.call(this, i, n);
        if (R.isRegExp(r)) return r.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (((t = Bi(t)), t)) {
      const n = R.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Eu(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let i = !1;
    function s(o) {
      if (((o = Bi(o)), o)) {
        const a = R.findKey(n, o);
        a && (!r || Eu(n, n[a], a, r)) && (n[a] = undefined, (i = !0));
      }
    }
    return R.isArray(t) ? t.forEach(s) : s(t), i;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length;
    let i = !1;
    while (n--) {
      const s = r[n];
      (!t || Eu(this, this[s], s, t)) && (this[s] = undefined, (i = !0));
    }
    return i;
  }
  normalize(t) {
    const r = this;
    const n = {};
    return (
      R.forEach(this, (i, s) => {
        const o = R.findKey(n, s);
        if (o) {
          (r[o] = Bo(i)), r[s] = undefined;
          return;
        }
        const a = t ? rR(s) : String(s).trim();
        a !== s && r[s] = undefined, (r[a] = Bo(i)), (n[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = Object.create(null);
    return (
      R.forEach(this, (n, i) => {
        n != null && n !== !1 && (r[i] = t && R.isArray(n) ? n.join(", ") : n);
      }),
      r
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON())
      .map(([t, r]) => `${t}: ${r}`)
      .join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((i) => n.set(i)), n;
  }
  static accessor(t) {
    const n = (this[Qh] = this[Qh] = { accessors: {} }).accessors;
    const i = this.prototype;
    function s(o) {
      const a = Bi(o);
      n[a] || (nR(i, o), (n[a] = !0));
    }
    return R.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
il.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
R.freezeMethods(il.prototype);
R.freezeMethods(il);
const ur = il;
function wu(e, t) {
  const r = this || Ef;
  const n = t || r;
  const i = ur.from(n.headers);
  let s = n.data;
  return (
    R.forEach(e, function (a) {
      s = a.call(r, s, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    s
  );
}
function Wg(e) {
  return !!(e?.__CANCEL__);
}
function zs(e, t, r) {
  ne.call(this, e ?? "canceled", ne.ERR_CANCELED, t, r), (this.name = "CanceledError");
}
R.inherits(zs, ne, { __CANCEL__: !0 });
function iR(e, t, r) {
  const n = r.config.validateStatus;
  !(r.status && n ) || n(r.status)
    ? e(r)
    : t(
        new ne(
          `Request failed with status code ${r.status}`,
          [ne.ERR_BAD_REQUEST, ne.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
          r.config,
          r.request,
          r,
        ),
      );
}
const sR = Qt.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (r, n, i, s, o, a) {
          const l = [];
          l.push(`${r}=${encodeURIComponent(n)}`),
            R.isNumber(i) && l.push(`expires=${new Date(i).toGMTString()}`),
            R.isString(s) && l.push(`path=${s}`),
            R.isString(o) && l.push(`domain=${o}`),
            a === !0 && l.push("secure"),
            (document.cookie = l.join("; "));
        },
        read: function (r) {
          const n = document.cookie.match(new RegExp(`(^|;\\s*)(${r})=([^;]*)`));
          return n ? decodeURIComponent(n[3]) : null;
        },
        remove: function (r) {
          this.write(r, "", Date.now() - 864e5);
        },
      };
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
    })();
function oR(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function aR(e, t) {
  return t ? `${e.replace(/\/+$/, "")}/${t.replace(/^\/+/, "")}` : e;
}
function Qg(e, t) {
  return e && !oR(t) ? aR(e, t) : t;
}
const lR = Qt.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent);
      const r = document.createElement("a");
      let n;
      function i(s) {
        let o = s;
        return (
          t && (r.setAttribute("href", o), (o = r.href)),
          r.setAttribute("href", o),
          {
            href: r.href,
            protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
            host: r.host,
            search: r.search ? r.search.replace(/^\?/, "") : "",
            hash: r.hash ? r.hash.replace(/^#/, "") : "",
            hostname: r.hostname,
            port: r.port,
            pathname: r.pathname.charAt(0) === "/" ? r.pathname : `/${r.pathname}`,
          }
        );
      }
      return (
        (n = i(window.location.href)),
        function (o) {
          const a = R.isString(o) ? i(o) : o;
          return a.protocol === n.protocol && a.host === n.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function uR(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t?.[1]) || "";
}
function cR(e, t) {
  e = e || 10;
  const r = new Array(e);
  const n = new Array(e);
  let i = 0;
  let s = 0;
  let o;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const u = Date.now();
      const c = n[s];
      o || (o = u), (r[i] = l), (n[i] = u);
      let d = s;
      let f = 0;
      while (d !== i) (f += r[d++]), (d = d % e);
      if (((i = (i + 1) % e), i === s && (s = (s + 1) % e), u - o < t)) return;
      const v = c && u - c;
      return v ? Math.round((f * 1e3) / v) : void 0;
    }
  );
}
function Vh(e, t) {
  let r = 0;
  const n = cR(50, 250);
  return (i) => {
    const s = i.loaded;
    const o = i.lengthComputable ? i.total : void 0;
    const a = s - r;
    const l = n(a);
    const u = s <= o;
    r = s;
    const c = {
      loaded: s,
      total: o,
      progress: o ? s / o : void 0,
      bytes: a,
      rate: l || void 0,
      estimated: l && o && u ? (o - s) / l : void 0,
      event: i,
    };
    (c[t ? "download" : "upload"] = !0), e(c);
  };
}
const dR = typeof XMLHttpRequest < "u";
const fR =
    dR &&
    function (e) {
      return new Promise(function (r, n) {
        let i = e.data;
        const s = ur.from(e.headers).normalize();
        const o = e.responseType;
        let a;
        function l() {
          e.cancelToken?.unsubscribe(a), e.signal?.removeEventListener("abort", a);
        }
        R.isFormData(i) && (Qt.isStandardBrowserEnv || Qt.isStandardBrowserWebWorkerEnv) && s.setContentType(!1);
        let u = new XMLHttpRequest();
        if (e.auth) {
          const v = e.auth.username || "";
          const g = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
          s.set("Authorization", `Basic ${btoa(`${v}:${g}`)}`);
        }
        const c = Qg(e.baseURL, e.url);
        u.open(e.method.toUpperCase(), zg(c, e.params, e.paramsSerializer), !0), (u.timeout = e.timeout);
        function d() {
          if (!u) return;
          const v = ur.from("getAllResponseHeaders" in u && u.getAllResponseHeaders());
          const m = {
              data: !o || o === "text" || o === "json" ? u.responseText : u.response,
              status: u.status,
              statusText: u.statusText,
              headers: v,
              config: e,
              request: u,
            };
          iR(
            function (p) {
              r(p), l();
            },
            function (p) {
              n(p), l();
            },
            m,
          ),
            (u = null);
        }
        if (
          ("onloadend" in u
            ? (u.onloadend = d)
            : (u.onreadystatechange = function () {
                !u ||
                  u.readyState !== 4 ||
                  (u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(d);
              }),
          (u.onabort = function () {
            u && (n(new ne("Request aborted", ne.ECONNABORTED, e, u)), (u = null));
          }),
          (u.onerror = function () {
            n(new ne("Network Error", ne.ERR_NETWORK, e, u)), (u = null);
          }),
          (u.ontimeout = function () {
            let g = e.timeout ? `timeout of ${e.timeout}ms exceeded` : "timeout exceeded";
            const m = e.transitional || Gg;
            e.timeoutErrorMessage && (g = e.timeoutErrorMessage),
              n(new ne(g, m.clarifyTimeoutError ? ne.ETIMEDOUT : ne.ECONNABORTED, e, u)),
              (u = null);
          }),
          Qt.isStandardBrowserEnv)
        ) {
          const v = (e.withCredentials || lR(c)) && e.xsrfCookieName && sR.read(e.xsrfCookieName);
          v && s.set(e.xsrfHeaderName, v);
        }
        i === void 0 && s.setContentType(null),
          "setRequestHeader" in u &&
            R.forEach(s.toJSON(), function (g, m) {
              u.setRequestHeader(m, g);
            }),
          R.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials),
          o && o !== "json" && (u.responseType = e.responseType),
          typeof e.onDownloadProgress === "function" && u.addEventListener("progress", Vh(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress === "function" &&
            u.upload &&
            u.upload.addEventListener("progress", Vh(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((a = (v) => {
              u && (n(!v || v.type ? new zs(null, e, u) : v), u.abort(), (u = null));
            }),
            e.cancelToken?.subscribe(a),
            e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
        const f = uR(c);
        if (f && Qt.protocols.indexOf(f) === -1) {
          n(new ne(`Unsupported protocol ${f}:`, ne.ERR_BAD_REQUEST, e));
          return;
        }
        u.send(i || null);
      });
    };
const zo = { http: Ix, xhr: fR };
R.forEach(zo, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const pR = {
  getAdapter: (e) => {
    e = R.isArray(e) ? e : [e];
    const { length: t } = e;
    let r;
    let n;
    for (let i = 0; i < t && ((r = e[i]), !(n = R.isString(r) ? zo[r.toLowerCase()] : r)); i++);
    if (!n)
      throw n === !1
        ? new ne(`Adapter ${r} is not supported by the environment`, "ERR_NOT_SUPPORT")
        : new Error(R.hasOwnProp(zo, r) ? `Adapter '${r}' is not available in the build` : `Unknown adapter '${r}'`);
    if (!R.isFunction(n)) throw new TypeError("adapter is not a function");
    return n;
  },
  adapters: zo,
};
function Pu(e) {
  if ((e.cancelToken?.throwIfRequested(), e.signal?.aborted)) throw new zs(null, e);
}
function Kh(e) {
  return (
    Pu(e),
    (e.headers = ur.from(e.headers)),
    (e.data = wu.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    pR
      .getAdapter(e.adapter || Ef.adapter)(e)
      .then(
        function (n) {
          return Pu(e), (n.data = wu.call(e, e.transformResponse, n)), (n.headers = ur.from(n.headers)), n;
        },
        function (n) {
          return (
            Wg(n) ||
              (Pu(e),
              n?.response &&
                ((n.response.data = wu.call(e, e.transformResponse, n.response)),
                (n.response.headers = ur.from(n.response.headers)))),
            Promise.reject(n)
          );
        },
      )
  );
}
const Jh = (e) => (e instanceof ur ? e.toJSON() : e);
function Si(e, t) {
  t = t || {};
  const r = {};
  function n(u, c, d) {
    return R.isPlainObject(u) && R.isPlainObject(c)
      ? R.merge.call({ caseless: d }, u, c)
      : R.isPlainObject(c)
      ? R.merge({}, c)
      : R.isArray(c)
      ? c.slice()
      : c;
  }
  function i(u, c, d) {
    if (R.isUndefined(c)) {
      if (!R.isUndefined(u)) return n(void 0, u, d);
    } else return n(u, c, d);
  }
  function s(u, c) {
    if (!R.isUndefined(c)) return n(void 0, c);
  }
  function o(u, c) {
    if (R.isUndefined(c)) {
      if (!R.isUndefined(u)) return n(void 0, u);
    } else return n(void 0, c);
  }
  function a(u, c, d) {
    if (d in t) return n(u, c);
    if (d in e) return n(void 0, u);
  }
  const l = {
    url: s,
    method: s,
    data: s,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: a,
    headers: (u, c) => i(Jh(u), Jh(c), !0),
  };
  return (
    R.forEach(Object.keys(e).concat(Object.keys(t)), function (c) {
      const d = l[c] || i;
      const f = d(e[c], t[c], c);
      (R.isUndefined(f) && d !== a) || (r[c] = f);
    }),
    r
  );
}
const Vg = "1.3.2";
const wf = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  wf[e] = function (n) {
    return typeof n === e || `a${(t < 1 ? "n " : " ")}${e}`;
  };
});
const Xh = {};
wf.transitional = function (t, r, n) {
  function i(s, o) {
    return `[Axios v${Vg}] Transitional option '${s}'${o}${(n ? `. ${n}` : "")}`;
  }
  return (s, o, a) => {
    if (t === !1) throw new ne(i(o, ` has been removed${(r ? ` in ${r}` : "")}`), ne.ERR_DEPRECATED);
    return (
      r &&
        !Xh[o] &&
        ((Xh[o] = !0),
        console.warn(i(o, ` has been deprecated since v${r} and will be removed in the near future`))),
      t ? t(s, o, a) : !0
    );
  };
};
function hR(e, t, r) {
  if (typeof e !== "object") throw new ne("options must be an object", ne.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let i = n.length;
  while (i-- > 0) {
    const s = n[i];
    const o = t[s];
    if (o) {
      const a = e[s];
      const l = a === void 0 || o(a, s, e);
      if (l !== !0) throw new ne(`option ${s} must be ${l}`, ne.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0) throw new ne(`Unknown option ${s}`, ne.ERR_BAD_OPTION);
  }
}
const Qc = { assertOptions: hR, validators: wf };
const wr = Qc.validators;
class ba {
  constructor(t) {
    (this.defaults = t), (this.interceptors = { request: new Wh(), response: new Wh() });
  }
  request(t, r) {
    typeof t === "string" ? ((r = r || {}), (r.url = t)) : (r = t || {}), (r = Si(this.defaults, r));
    const { transitional: n, paramsSerializer: i, headers: s } = r;
    n !== void 0 &&
      Qc.assertOptions(
        n,
        {
          silentJSONParsing: wr.transitional(wr.boolean),
          forcedJSONParsing: wr.transitional(wr.boolean),
          clarifyTimeoutError: wr.transitional(wr.boolean),
        },
        !1,
      ),
      i !== void 0 && Qc.assertOptions(i, { encode: wr.function, serialize: wr.function }, !0),
      (r.method = (r.method || this.defaults.method || "get").toLowerCase());
    let o;
    (o = s && R.merge(s.common, s[r.method])),
      o &&
        R.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (g) => {
          s[g] = undefined;
        }),
      (r.headers = ur.concat(o, s));
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function (m) {
      (typeof m.runWhen === "function" && m.runWhen(r) === !1) ||
        ((l = l && m.synchronous), a.unshift(m.fulfilled, m.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (m) {
      u.push(m.fulfilled, m.rejected);
    });
    let c;
    let d = 0;
    let f;
    if (!l) {
      const g = [Kh.bind(this), void 0];
      for (g.unshift.apply(g, a), g.push.apply(g, u), f = g.length, c = Promise.resolve(r); d < f; )
        c = c.then(g[d++], g[d++]);
      return c;
    }
    f = a.length;
    let v = r;
    for (d = 0; d < f; ) {
      const g = a[d++];
      const m = a[d++];
      try {
        v = g(v);
      } catch (w) {
        m.call(this, w);
        break;
      }
    }
    try {
      c = Kh.call(this, v);
    } catch (g) {
      return Promise.reject(g);
    }
    for (d = 0, f = u.length; d < f; ) c = c.then(u[d++], u[d++]);
    return c;
  }
  getUri(t) {
    t = Si(this.defaults, t);
    const r = Qg(t.baseURL, t.url);
    return zg(r, t.params, t.paramsSerializer);
  }
}
R.forEach(["delete", "get", "head", "options"], function (t) {
  ba.prototype[t] = function (r, n) {
    return this.request(Si(n || {}, { method: t, url: r, data: n?.data }));
  };
});
R.forEach(["post", "put", "patch"], function (t) {
  function r(n) {
    return function (s, o, a) {
      return this.request(
        Si(a || {}, { method: t, headers: n ? { "Content-Type": "multipart/form-data" } : {}, url: s, data: o }),
      );
    };
  }
  (ba.prototype[t] = r()), (ba.prototype[`${t}Form`] = r(!0));
});
const Go = ba;
class Pf {
  constructor(t) {
    if (typeof t !== "function") throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function (s) {
      r = s;
    });
    const n = this;
    this.promise.then((i) => {
      if (!n._listeners) return;
      let s = n._listeners.length;
      while (s-- > 0) n._listeners[s](i);
      n._listeners = null;
    }),
      (this.promise.then = (i) => {
        let s;
        const o = new Promise((a) => {
          n.subscribe(a), (s = a);
        }).then(i);
        return (
          (o.cancel = function () {
            n.unsubscribe(s);
          }),
          o
        );
      }),
      t(function (s, o, a) {
        n.reason || ((n.reason = new zs(s, o, a)), r(n.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  static source() {
    let t;
    return {
      token: new Pf(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
}
const mR = Pf;
function yR(e) {
  return function (r) {
    return e.apply(null, r);
  };
}
function vR(e) {
  return R.isObject(e) && e.isAxiosError === !0;
}
const Vc = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Vc).forEach(([e, t]) => {
  Vc[t] = e;
});
const gR = Vc;
function Kg(e) {
  const t = new Go(e);
  const r = kg(Go.prototype.request, t);
  return (
    R.extend(r, Go.prototype, t, { allOwnKeys: !0 }),
    R.extend(r, t, null, { allOwnKeys: !0 }),
    (r.create = function (i) {
      return Kg(Si(e, i));
    }),
    r
  );
}
const _e = Kg(Ef);
_e.Axios = Go;
_e.CanceledError = zs;
_e.CancelToken = mR;
_e.isCancel = Wg;
_e.VERSION = Vg;
_e.toFormData = rl;
_e.AxiosError = ne;
_e.Cancel = _e.CanceledError;
_e.all = function (t) {
  return Promise.all(t);
};
_e.spread = yR;
_e.isAxiosError = vR;
_e.mergeConfig = Si;
_e.AxiosHeaders = ur;
_e.formToJSON = (e) => Hg(R.isHTMLForm(e) ? new FormData(e) : e);
_e.HttpStatusCode = gR;
_e.default = _e;
const SR = _e;
const Jg = "http://localhost:9000";
const ER = SR.create({ baseURL: Jg });
function C(e, t = "", r = {}) {
  return ER({ method: e, withCredentials: !0, url: t, data: r, json: !0 });
}
const Yh = (e) => Object.entries(e).reduce((t, [r, n]) => (n && (t[r] = n), t), {});
const Xg = (e, t = "") =>
    Object.entries(e)
      .map(([r, n]) => (typeof n === "object" ? Xg(n, r) : `${t ? `${t}[${r}]` : `${r}`}=${n}`))
      .join("&");
const Eo = {
    returnReasons: {
      retrieve(e) {
        const t = `/admin/return-reasons/${e}`;
        return C("GET", t);
      },
      list() {
        return C("GET", "/admin/return-reasons");
      },
      create(e) {
        return C("POST", "/admin/return-reasons", e);
      },
      update(e, t) {
        const r = `/admin/return-reasons/${e}`;
        return C("POST", r, t);
      },
      delete(e) {
        const t = `/admin/return-reasons/${e}`;
        return C("DELETE", t);
      },
    },
    apps: {
      authorize(e) {
        return C("POST", "/admin/apps/authorizations", e);
      },
      list() {
        return C("GET", "/admin/apps");
      },
    },
    auth: {
      session() {
        return C("GET", "/admin/auth");
      },
      authenticate(e) {
        return C("POST", "/admin/auth", e);
      },
      deauthenticate(e) {
        return C("DELETE", "/admin/auth");
      },
    },
    notifications: {
      list(e = {}) {
        const t = Object.keys(e)
            .map((n) => `${n}=${e[n]}`)
            .join("&");
        const r = `/admin/notifications${t && `?${t}`}`;
        return C("GET", r);
      },
      resend(e, t) {
        const r = `/admin/notifications/${e}/resend`;
        return C("POST", r, t);
      },
    },
    notes: {
      listByResource(e) {
        const t = `/admin/notes?resource_id=${e}`;
        return C("GET", t);
      },
      async create(e, t, r) {
        return C("POST", "/admin/notes/", { resource_id: e, resource_type: t, value: r });
      },
      update(e, t) {
        const r = `admin/notes/${e}`;
        return C("POST", r, { value: t });
      },
      delete(e) {
        const t = `admin/notes/${e}`;
        return C("DELETE", t);
      },
    },
    customers: {
      retrieve(e) {
        const t = `/admin/customers/${e}`;
        return C("GET", t);
      },
      list(e = "") {
        const t = `/admin/customers${e}`;
        return C("GET", t);
      },
      update(e, t) {
        const r = `admin/customers/${e}`;
        return C("POST", r, t);
      },
    },
    store: {
      retrieve() {
        return C("GET", "/admin/store");
      },
      update(e) {
        return C("POST", "/admin/store", e);
      },
      addCurrency(e) {
        const t = `/admin/store/currencies/${e}`;
        return C("POST", t);
      },
      removeCurrency(e) {
        const t = `/admin/store/currencies/${e}`;
        return C("DELETE", t);
      },
      listPaymentProviders() {
        return C("GET", "/admin/store/payment-providers");
      },
    },
    shippingProfiles: {
      list() {
        return C("GET", "/admin/shipping-profiles");
      },
      create(e) {
        return C("POST", "/admin/shipping-profiles", e);
      },
      retrieve(e) {
        const t = `/admin/shipping-profiles/${e}`;
        return C("GET", t);
      },
      update(e, t) {
        const r = `/admin/shipping-profiles/${e}`;
        return C("POST", r, t);
      },
    },
    giftCards: {
      create(e) {
        return C("POST", "/admin/gift-cards", e);
      },
      retrieve(e) {
        const t = `/admin/gift-cards/${e}`;
        return C("GET", t);
      },
      list(e = {}) {
        const t = Object.keys(e)
            .map((n) => `${n}=${e[n]}`)
            .join("&");
        const r = `/admin/gift-cards${t && `?${t}`}`;
        return C("GET", r);
      },
      update(e, t) {
        const r = `/admin/gift-cards/${e}`;
        return C("POST", r, t);
      },
      delete(e) {
        const t = `/admin/gift-cards/${e}`;
        return C("DELETE", t);
      },
    },
    variants: {
      list(e = {}) {
        const t = Object.keys(e)
            .map((n) => `${n}=${e[n]}`)
            .join("&");
        const r = `/admin/variants${t && `?${t}`}`;
        return C("GET", r);
      },
    },
    products: {
      create(e) {
        return C("POST", "/admin/products", e);
      },
      retrieve(e) {
        const t = `/admin/products/${e}`;
        return C("GET", t);
      },
      update(e, t) {
        const r = `/admin/products/${e}`;
        return C("POST", r, t);
      },
      delete(e) {
        const t = `/admin/products/${e}`;
        return C("DELETE", t);
      },
      list(e = {}) {
        const t = Object.keys(e)
            .map((n) => `${n}=${e[n]}`)
            .join("&");
        const r = `/admin/products${t && `?${t}`}`;
        return C("GET", r);
      },
      listTypes() {
        return C("GET", "/admin/products/types");
      },
      listTagsByUsage() {
        return C("GET", "/admin/products/tag-usage");
      },
      variants: {
        create(e, t) {
          const r = `/admin/products/${e}/variants`;
          return C("POST", r, t);
        },
        retrieve(e, t) {
          const r = `/admin/products/${e}/variants/${t}`;
          return C("GET", r);
        },
        update(e, t, r) {
          const n = `/admin/products/${e}/variants/${t}`;
          return C("POST", n, r);
        },
        delete(e, t) {
          const r = `/admin/products/${e}/variants/${t}`;
          return C("DELETE", r);
        },
        list(e) {
          const t = `/admin/products/${e}/variants`;
          return C("GET", t);
        },
      },
      options: {
        create(e, t) {
          const r = `/admin/products/${e}/options`;
          return C("POST", r, t);
        },
        delete(e, t) {
          const r = `/admin/products/${e}/options/${t}`;
          return C("DELETE", r);
        },
        update(e, t, r) {
          const n = `/admin/products/${e}/options/${t}`;
          return C("POST", n, r);
        },
      },
    },
    swaps: {
      retrieve(e) {
        const t = `/admin/swaps/${e}`;
        return C("GET", t);
      },
      update(e, t) {
        const r = `/admin/orders/${e}`;
        return C("POST", r, t);
      },
      list(e = {}) {
        const t = Object.keys(e)
            .map((n) => (e[n] === "" || e[n] === null ? null : `${n}=${e[n]}`))
            .filter((n) => !!n)
            .join("&");
        const r = `/admin/swaps${t && `?${t}`}`;
        return C("GET", r);
      },
    },
    returns: {
      list(e = {}) {
        const t = Yh(e);
        const r = Object.keys(t)
            .map((i) => `${i}=${e[i]}`)
            .filter((i) => !!i)
            .join("&");
        const n = `/admin/returns${r && `?${r}`}`;
        return C("GET", n);
      },
    },
    collections: {
      create(e) {
        return C("POST", "/admin/collections", e);
      },
      retrieve(e) {
        const t = `/admin/collections/${e}`;
        return C("GET", t);
      },
      list(e = {}) {
        return C("GET", "/admin/collections");
      },
      addProducts(e, t) {
        const r = `/admin/collections/${e}/products/batch`;
        return C("POST", r, t);
      },
      removeProducts(e, t) {
        const r = `/admin/collections/${e}/products/batch`;
        return C("DELETE", r, t);
      },
    },
    orders: {
      create(e) {
        return C("POST", "/admin/orders", e);
      },
      async receiveReturn(e, t) {
        var s;
        var o;
        var a;
        var l;
        var u;
        const r = `/admin/returns/${e}/receive`;
        const n = await C("POST", r, t);
        let i;
        return (
          (s = n.data.return) != null && s.order_id && (i = n.data.return.order_id),
          (a = (o = n.data.return) == null ? void 0 : o.swap) != null &&
            a.id &&
            (i = (u = (l = n.data.return) == null ? void 0 : l.swap) == null ? void 0 : u.order_id),
          this.retrieve(i)
        );
      },
      cancelReturn(e) {
        const t = `/admin/returns/${e}/cancel`;
        return C("POST", t);
      },
      retrieve(e, t = {}) {
        const r = Object.keys(t)
            .map((i) => (t[i] === "" || t[i] === null ? null : `${i}=${t[i]}`))
            .filter((i) => !!i)
            .join("&");
        const n = `/admin/orders/${e}${r && `?${r}`}`;
        return C("GET", n);
      },
      update(e, t) {
        const r = `/admin/orders/${e}`;
        return C("POST", r, t);
      },
      list(e = {}) {
        const t = Yh(e);
        const r = Object.keys(t)
            .map((i) => `${i}=${e[i]}`)
            .filter((i) => !!i)
            .join("&");
        const n = `/admin/orders${r && `?${r}`}`;
        return C("GET", n);
      },
      complete(e) {
        const t = `/admin/orders/${e}/complete`;
        return C("POST", t, {});
      },
      archive(e) {
        const t = `/admin/orders/${e}/archive`;
        return C("POST", t, {});
      },
      capturePayment(e) {
        const t = `/admin/orders/${e}/capture`;
        return C("POST", t, {});
      },
      createShipment(e, t) {
        const r = `/admin/orders/${e}/shipment`;
        return C("POST", r, t);
      },
      updateClaim(e, t, r) {
        const n = `/admin/orders/${e}/claims/${t}`;
        return C("POST", n, r);
      },
      createSwap(e, t) {
        const r = `/admin/orders/${e}/swaps`;
        return C("POST", r, t);
      },
      cancelSwap(e, t) {
        const r = `/admin/orders/${e}/swaps/${t}/cancel`;
        return C("POST", r);
      },
      createClaim(e, t) {
        const r = `/admin/orders/${e}/claims`;
        return C("POST", r, t);
      },
      cancelClaim(e, t) {
        const r = `/admin/orders/${e}/claims/${t}/cancel`;
        return C("POST", r);
      },
      fulfillClaim(e, t, r) {
        const n = `/admin/orders/${e}/claims/${t}/fulfillments`;
        return C("POST", n, r);
      },
      cancelClaimFulfillment(e, t, r) {
        const n = `/admin/orders/${e}/claims/${t}/fulfillments/${r}/cancel`;
        return C("POST", n);
      },
      createClaimShipment(e, t, r) {
        const n = `/admin/orders/${e}/claims/${t}/shipments`;
        return C("POST", n, r);
      },
      createSwapShipment(e, t, r) {
        const n = `/admin/orders/${e}/swaps/${t}/shipments`;
        return C("POST", n, r);
      },
      fulfillSwap(e, t, r) {
        const n = `/admin/orders/${e}/swaps/${t}/fulfillments`;
        return C("POST", n, r);
      },
      cancelSwapFulfillment(e, t, r) {
        const n = `/admin/orders/${e}/swaps/${t}/fulfillments/${r}/cancel`;
        return C("POST", n);
      },
      processSwapPayment(e, t) {
        const r = `/admin/orders/${e}/swaps/${t}/process-payment`;
        return C("POST", r);
      },
      createFulfillment(e, t) {
        const r = `/admin/orders/${e}/fulfillment`;
        return C("POST", r, t);
      },
      cancelFulfillment(e, t) {
        const r = `/admin/orders/${e}/fulfillments/${t}/cancel`;
        return C("POST", r);
      },
      refund(e, t) {
        const r = `/admin/orders/${e}/refund`;
        return C("POST", r, t);
      },
      requestReturn(e, t) {
        const r = `/admin/orders/${e}/return`;
        return C("POST", r, t);
      },
      cancel(e) {
        const t = `/admin/orders/${e}/cancel`;
        return C("POST", t, {});
      },
    },
    shippingOptions: {
      create(e) {
        return C("POST", "/admin/shipping-options", e);
      },
      retrieve(e) {
        const t = `/admin/shipping-options/${e}`;
        return C("POST", t);
      },
      delete(e) {
        const t = `/admin/shipping-options/${e}`;
        return C("DELETE", t);
      },
      list(e = {}) {
        const t = Object.keys(e)
            .map((n) => `${n}=${e[n]}`)
            .join("&");
        const r = `/admin/shipping-options${t && `?${t}`}`;
        return C("GET", r);
      },
      update(e, t) {
        const r = `/admin/shipping-options/${e}`;
        return C("POST", r, t);
      },
    },
    discounts: {
      create(e) {
        return C("POST", "/admin/discounts", e);
      },
      retrieve(e) {
        const t = `/admin/discounts/${e}`;
        return C("GET", t);
      },
      update(e, t) {
        const r = `/admin/discounts/${e}`;
        return C("POST", r, t);
      },
      delete(e) {
        const t = `/admin/discounts/${e}`;
        return C("DELETE", t);
      },
      list(e = {}) {
        const t = Xg(e);
        const r = `/admin/discounts${t && `?${t}`}`;
        return C("GET", r);
      },
      retrieveByCode(e) {
        const t = `/admin/discounts/code/${e}`;
        return C("GET", t);
      },
    },
    regions: {
      list() {
        return C("GET", "/admin/regions");
      },
      retrieve(e) {
        const t = `/admin/regions/${e}`;
        return C("GET", t);
      },
      create(e) {
        return C("POST", "/admin/regions", e);
      },
      update(e, t) {
        const r = `/admin/regions/${e}`;
        return C("POST", r, t);
      },
      delete(e) {
        const t = `/admin/regions/${e}`;
        return C("DELETE", t);
      },
      fulfillmentOptions: {
        list(e) {
          const t = `/admin/regions/${e}/fulfillment-options`;
          return C("GET", t);
        },
      },
    },
    uploads: {
      create(e) {
        const t = new FormData();
        for (const r of e) t.append("files", r);
        return C("POST", "/admin/uploads", t);
      },
    },
    draftOrders: {
      create(e) {
        return C("POST", "/admin/draft-orders", e);
      },
      addLineItem(e, t) {
        const r = `/admin/draft-orders/${e}/line-items`;
        return C("POST", r, t);
      },
      updateLineItem(e, t, r) {
        const n = `/admin/draft-orders/${e}/line-items/${t}`;
        return C("POST", n, r);
      },
      deleteLineItem(e, t) {
        const r = `/admin/draft-orders/${e}/line-items/${t}`;
        return C("DELETE", r);
      },
      retrieve(e) {
        const t = `/admin/draft-orders/${e}`;
        return C("GET", t);
      },
      delete(e) {
        const t = `/admin/draft-orders/${e}`;
        return C("DELETE", t);
      },
      update(e, t) {
        const r = `/admin/draft-orders/${e}`;
        return C("POST", r, t);
      },
      registerSystemPayment(e) {
        const t = `/admin/draft-orders/${e}/pay`;
        return C("POST", t);
      },
      list(e = {}) {
        const t = Object.keys(e)
            .map((n) => (e[n] === "" || e[n] === null ? null : `${n}=${e[n]}`))
            .filter((n) => !!n)
            .join("&");
        const r = `/admin/draft-orders${t && `?${t}`}`;
        return C("GET", r);
      },
    },
    invites: {
      create(e) {
        return C("POST", "/admin/invites", e);
      },
      resend(e) {
        const t = `/admin/invites/${e}/resend`;
        return C("POST", t);
      },
      delete(e) {
        const t = `/admin/invites/${e}`;
        return C("DELETE", t);
      },
      list() {
        return C("GET", "/admin/invites");
      },
      accept(e) {
        return C("POST", "/admin/invites/accept", e);
      },
    },
    users: {
      resetPasswordToken(e) {
        return C("POST", "/admin/users/password-token", e);
      },
      resetPassword(e) {
        return C("POST", "/admin/users/reset-password", e);
      },
      list() {
        return C("GET", "/admin/users");
      },
      retrieve(e) {
        const t = `/admin/users/${e}`;
        return C("GET", t);
      },
      update(e, t) {
        const r = `/admin/users/${e}`;
        return C("POST", r, t);
      },
      delete(e) {
        const t = `/admin/users/${e}`;
        return C("DELETE", t);
      },
    },
  };
const Yg = new GC({ defaultOptions: { queries: { refetchOnWindowFocus: !1, staleTime: 9e4, retry: 1 } } });
const $f = { isLoggedIn: !1, id: "", name: "", first_name: "", last_name: "", email: "" };
const Zg = Re.createContext($f);
const wR = (e, t) => {
    var r;
    var n;
    var i;
    var s;
    switch (t.type) {
      case "userAuthenticated":
        return {
          ...e,
          isLoggedIn: !0,
          id: t.payload.id,
          email: t.payload.email,
          first_name: (r = t.payload) == null ? void 0 : r.first_name,
          last_name: (n = t.payload) == null ? void 0 : n.last_name,
        };
      case "updateUser":
        return { ...e, ...t.payload };
      case "userLoggedOut":
        return $f;
      case "userLoggedIn":
        return {
          ...e,
          isLoggedIn: !0,
          id: t.payload.id,
          email: t.payload.email,
          first_name: (i = t.payload) == null ? void 0 : i.first_name,
          last_name: (s = t.payload) == null ? void 0 : s.last_name,
        };
      default:
        return e;
    }
  };
const PR = ({ children: e }) => {
    const [t, r] = E.useReducer(wR, $f);
    return D(Zg.Provider, {
      value: {
        ...t,
        session: () => Eo.auth.session().then(({ data: n }) => (r({ type: "userAuthenticated", payload: n.user }), n)),
        handleUpdateUser: (n, i) =>
          Eo.users.update(n, i).then(({ data: s }) => {
            Yg.invalidateQueries(mf.all), r({ type: "updateUser", payload: s.user });
          }),
        handleLogout: (n) => Eo.auth.deauthenticate(n).then(() => (r({ type: "userLoggedOut" }), null)),
        handleLogin: (n) =>
          Eo.auth.authenticate(n).then(({ data: i }) => (r({ type: "userLoggedIn", payload: i.user }), i)),
      },
      children: e,
    });
  };
const $R = { cache: {} };
const OR = Re.createContext($R);
const CR = ({ children: e }) => {
    const [t, r] = E.useState({});
    const n = (i, s) => {
        r({ ...t, [i]: s });
      };
    return D(OR.Provider, { value: { cache: t, setCache: n }, children: e });
  };
const TR = { onSearch: (e) => {}, setOnSearch: (e) => {}, onUnmount: () => {}, display: !1 };
const xR = Re.createContext(TR);
const RR = ({ children: e }) => {
    const [t, r] = E.useState(() => () => {});
    const [n, i] = E.useState(!1);
    const s = (a) => {
        a && (i(!0), r(() => a));
      };
    const o = () => () => i(!1);
    return D(xR.Provider, { value: { onSearch: t, setOnSearch: s, onUnmount: o, display: n }, children: e });
  };
const bR = "modulepreload";
const kR = function (e) {
    return `/${e}`;
  };
const Zh = {};
const xi = function (t, r, n) {
    if (!r || r.length === 0) return t();
    const i = document.getElementsByTagName("link");
    return Promise.all(
      r.map((s) => {
        if (((s = kR(s)), s in Zh)) return;
        Zh[s] = !0;
        const o = s.endsWith(".css");
        const a = o ? '[rel="stylesheet"]' : "";
        if (n)
          for (let c = i.length - 1; c >= 0; c--) {
            const d = i[c];
            if (d.href === s && (!o || d.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${s}"]${a}`)) return;
        const u = document.createElement("link");
        if (
          ((u.rel = o ? "stylesheet" : bR),
          o || ((u.as = "script"), (u.crossOrigin = "")),
          (u.href = s),
          document.head.appendChild(u),
          o)
        )
          return new Promise((c, d) => {
            u.addEventListener("load", c),
              u.addEventListener("error", () => d(new Error(`Unable to preload CSS for ${s}`)));
          });
      }),
    ).then(() => t());
  }; /**
 * @remix-run/router v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function oe() {
  return (
    (oe = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    oe.apply(this, arguments)
  );
}
var Te;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Te || (Te = {}));
const em = "popstate";
function AR(e) {
  e === void 0 && (e = {});
  function t(n, i) {
    let { pathname: s, search: o, hash: a } = n.location;
    return As(
      "",
      { pathname: s, search: o, hash: a },
      (i.state?.usr) || null,
      (i.state?.key) || "default",
    );
  }
  function r(n, i) {
    return typeof i === "string" ? i : mr(i);
  }
  return DR(t, r, null, e);
}
function Y(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function _R() {
  return Math.random().toString(36).substr(2, 8);
}
function tm(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function As(e, t, r, n) {
  return (
    r === void 0 && (r = null),
    oe({ pathname: typeof e === "string" ? e : e.pathname, search: "", hash: "" }, typeof t === "string" ? gr(t) : t, {
      state: r,
      key: (t?.key) || n || _R(),
    })
  );
}
function mr(e) {
  let { pathname: t = "/", search: r = "", hash: n = "" } = e;
  return (
    r && r !== "?" && (t += r.charAt(0) === "?" ? r : `?${r}`),
    n && n !== "#" && (t += n.charAt(0) === "#" ? n : `#${n}`),
    t
  );
}
function gr(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
    let n = e.indexOf("?");
    n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))), e && (t.pathname = e);
  }
  return t;
}
function DR(e, t, r, n) {
  n === void 0 && (n = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = n;
  let o = i.history;
  let a = Te.Pop;
  let l = null;
  let u = c();
  u == null && ((u = 0), o.replaceState(oe({}, o.state, { idx: u }), ""));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    a = Te.Pop;
    let w = c();
    let p = w == null ? null : w - u;
    (u = w), l?.({ action: a, location: m.location, delta: p });
  }
  function f(w, p) {
    a = Te.Push;
    let h = As(m.location, w, p);
    r?.(h, w), (u = c() + 1);
    let y = tm(h, u);
    let S = m.createHref(h);
    try {
      o.pushState(y, "", S);
    } catch {
      i.location.assign(S);
    }
    s && l && l({ action: a, location: m.location, delta: 1 });
  }
  function v(w, p) {
    a = Te.Replace;
    let h = As(m.location, w, p);
    r?.(h, w), (u = c());
    let y = tm(h, u);
    let S = m.createHref(h);
    o.replaceState(y, "", S), s && l && l({ action: a, location: m.location, delta: 0 });
  }
  function g(w) {
    let p = i.location.origin !== "null" ? i.location.origin : i.location.href;
    let h = typeof w === "string" ? w : mr(w);
    return Y(p, `No window.location.(origin|href) available to create URL for href: ${h}`), new URL(h, p);
  }
  let m = {
    get action() {
      return a;
    },
    get location() {
      return e(i, o);
    },
    listen(w) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(em, d),
        (l = w),
        () => {
          i.removeEventListener(em, d), (l = null);
        }
      );
    },
    createHref(w) {
      return t(i, w);
    },
    createURL: g,
    encodeLocation(w) {
      let p = g(w);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: f,
    replace: v,
    go(w) {
      return o.go(w);
    },
  };
  return m;
}
var Ue;
(function (e) {
  (e.data = "data"), (e.deferred = "deferred"), (e.redirect = "redirect"), (e.error = "error");
})(Ue || (Ue = {}));
function LR(e) {
  return e.index === !0;
}
function e0(e, t, r) {
  return (
    t === void 0 && (t = []),
    r === void 0 && (r = new Set()),
    e.map((n, i) => {
      let s = [...t, i];
      let o = typeof n.id === "string" ? n.id : s.join("-");
      return (
        Y(n.index !== !0 || !n.children, "Cannot specify children on an index route"),
        Y(
          !r.has(o),
          `Found a route id collision on id "${o}".  Route id's must be globally unique within Data Router usages`,
        ),
        r.add(o),
        LR(n) ? oe({}, n, { id: o }) : oe({}, n, { id: o, children: n.children ? e0(n.children, s, r) : void 0 })
      );
    })
  );
}
function Ji(e, t, r) {
  r === void 0 && (r = "/");
  let n = typeof t === "string" ? gr(t) : t;
  let i = n0(n.pathname || "/", r);
  if (i == null) return null;
  let s = t0(e);
  NR(s);
  let o = null;
  for (let a = 0; o == null && a < s.length; ++a) o = GR(s[a], QR(i));
  return o;
}
function t0(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = "");
  let i = (s, o, a) => {
    let l = {
      relativePath: a === void 0 ? s.path || "" : a,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s,
    };
    l.relativePath.startsWith("/") &&
      (Y(
        l.relativePath.startsWith(n),
        `Absolute route path "${l.relativePath}" nested under path ${(`"${n}" is not valid. An absolute child route path `)}must start with the combined path of all its parent routes.`,
      ),
      (l.relativePath = l.relativePath.slice(n.length)));
    let u = cr([n, l.relativePath]);
    let c = r.concat(l);
    s.children &&
      s.children.length > 0 &&
      (Y(
        s.index !== !0,
        `Index routes must not have child routes. Please remove ${(`all child routes from route path "${u}".`)}`,
      ),
      t0(s.children, t, c, u)),
      !(s.path == null && !s.index) && t.push({ path: u, score: BR(u, s.index), routesMeta: c });
  };
  return (
    e.forEach((s, o) => {
      var a;
      if (s.path === "" || !((a = s.path) != null && a.includes("?"))) i(s, o);
      else for (let l of r0(s.path)) i(s, o, l);
    }),
    t
  );
}
function r0(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t;
  let i = r.endsWith("?");
  let s = r.replace(/\?$/, "");
  if (n.length === 0) return i ? [s, ""] : [s];
  let o = r0(n.join("/"));
  let a = [];
  return (
    a.push(...o.map((l) => (l === "" ? s : [s, l].join("/")))),
    i && a.push(...o),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function NR(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : zR(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex),
        ),
  );
}
const FR = /^:\w+$/;
const MR = 3;
const IR = 2;
const qR = 1;
const UR = 10;
const jR = -2;
const rm = (e) => e === "*";
function BR(e, t) {
  let r = e.split("/");
  let n = r.length;
  return (
    r.some(rm) && (n += jR),
    t && (n += IR),
    r.filter((i) => !rm(i)).reduce((i, s) => i + (FR.test(s) ? MR : s === "" ? qR : UR), n)
  );
}
function zR(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, i) => n === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function GR(e, t) {
  let { routesMeta: r } = e;
  let n = {};
  let i = "/";
  let s = [];
  for (let o = 0; o < r.length; ++o) {
    let a = r[o];
    let l = o === r.length - 1;
    let u = i === "/" ? t : t.slice(i.length) || "/";
    let c = HR({ path: a.relativePath, caseSensitive: a.caseSensitive, end: l }, u);
    if (!c) return null;
    Object.assign(n, c.params);
    let d = a.route;
    s.push({ params: n, pathname: cr([i, c.pathname]), pathnameBase: XR(cr([i, c.pathnameBase])), route: d }),
      c.pathnameBase !== "/" && (i = cr([i, c.pathnameBase]));
  }
  return s;
}
function HR(e, t) {
  typeof e === "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = WR(e.path, e.caseSensitive, e.end);
  let i = t.match(r);
  if (!i) return null;
  let s = i[0];
  let o = s.replace(/(.)\/+$/, "$1");
  let a = i.slice(1);
  return {
    params: n.reduce((u, c, d) => {
      if (c === "*") {
        let f = a[d] || "";
        o = s.slice(0, s.length - f.length).replace(/(.)\/+$/, "$1");
      }
      return (u[c] = VR(a[d] || "", c)), u;
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: e,
  };
}
function WR(e, t, r) {
  t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    _s(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      `Route path "${e}" will be treated as if it were ${(`"${e.replace(/\*$/, "/*")}" because the \`*\` character must `)}always follow a \`/\` in the pattern. To get rid of this warning, ${(`please change the route path to "${e.replace(/\*$/, "/*")}".`)}`,
    );
  let n = [];
  let i =
      `^${e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (o, a) => (n.push(a), "/([^\\/]+)"))}`;
  return (
    e.endsWith("*")
      ? (n.push("*"), (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), n]
  );
}
function QR(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      _s(
        !1,
        `The URL path "${e}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ${(`encoding (${t}).`)}`,
      ),
      e
    );
  }
}
function VR(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (r) {
    return (
      _s(
        !1,
        `The value for the URL param "${t}" will not be decoded because${(` the string "${e}" is a malformed URL segment. This is probably`)}${(` due to a bad percent encoding (${r}).`)}`,
      ),
      e
    );
  }
}
function n0(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length;
  let n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
function _s(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function KR(e, t) {
  t === void 0 && (t = "/");
  let { pathname: r, search: n = "", hash: i = "" } = typeof e === "string" ? gr(e) : e;
  return { pathname: r ? (r.startsWith("/") ? r : JR(r, t)) : t, search: YR(n), hash: ZR(i) };
}
function JR(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? r.length > 1 && r.pop() : i !== "." && r.push(i);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function $u(e, t, r, n) {
  return (
    `Cannot include a '${e}' character in a manually specified ${(`\`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the `)}${("`to." + r + "` field. Alternatively you may provide the full path as ")}a string in <Link to="..."> and the router will parse it for you.`
  );
}
function sl(e) {
  return e.filter((t, r) => r === 0 || (t.route.path && t.route.path.length > 0));
}
function Of(e, t, r, n) {
  n === void 0 && (n = !1);
  let i;
  typeof e === "string"
    ? (i = gr(e))
    : ((i = oe({}, e)),
      Y(!(i.pathname?.includes("?")), $u("?", "pathname", "search", i)),
      Y(!(i.pathname?.includes("#")), $u("#", "pathname", "hash", i)),
      Y(!(i.search?.includes("#")), $u("#", "search", "hash", i)));
  let s = e === "" || i.pathname === "";
  let o = s ? "/" : i.pathname;
  let a;
  if (n || o == null) a = r;
  else {
    let d = t.length - 1;
    if (o.startsWith("..")) {
      let f = o.split("/");
      while (f[0] === "..") f.shift(), (d -= 1);
      i.pathname = f.join("/");
    }
    a = d >= 0 ? t[d] : "/";
  }
  let l = KR(i, a);
  let u = o && o !== "/" && o.endsWith("/");
  let c = (s || o === ".") && r.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const cr = (e) => e.join("/").replace(/\/\/+/g, "/");
const XR = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
const YR = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : `?${e}`);
const ZR = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : `#${e}`);
class nm extends Error {}
class eb {
  constructor(t, r) {
    (this.pendingKeysSet = new Set()),
      (this.subscribers = new Set()),
      (this.deferredKeys = []),
      Y(t && typeof t === "object" && !Array.isArray(t), "defer() only accepts plain objects");
    let n;
    (this.abortPromise = new Promise((s, o) => (n = o))), (this.controller = new AbortController());
    let i = () => n(new nm("Deferred data aborted"));
    (this.unlistenAbortSignal = () => this.controller.signal.removeEventListener("abort", i)),
      this.controller.signal.addEventListener("abort", i),
      (this.data = Object.entries(t).reduce((s, o) => {
        let [a, l] = o;
        return Object.assign(s, { [a]: this.trackPromise(a, l) });
      }, {})),
      this.done && this.unlistenAbortSignal(),
      (this.init = r);
  }
  trackPromise(t, r) {
    if (!(r instanceof Promise)) return r;
    this.deferredKeys.push(t), this.pendingKeysSet.add(t);
    let n = Promise.race([r, this.abortPromise]).then(
      (i) => this.onSettle(n, t, null, i),
      (i) => this.onSettle(n, t, i),
    );
    return n.catch(() => {}), Object.defineProperty(n, "_tracked", { get: () => !0 }), n;
  }
  onSettle(t, r, n, i) {
    return this.controller.signal.aborted && n instanceof nm
      ? (this.unlistenAbortSignal(), Object.defineProperty(t, "_error", { get: () => n }), Promise.reject(n))
      : (this.pendingKeysSet.delete(r),
        this.done && this.unlistenAbortSignal(),
        n
          ? (Object.defineProperty(t, "_error", { get: () => n }), this.emit(!1, r), Promise.reject(n))
          : (Object.defineProperty(t, "_data", { get: () => i }), this.emit(!1, r), i));
  }
  emit(t, r) {
    this.subscribers.forEach((n) => n(t, r));
  }
  subscribe(t) {
    return this.subscribers.add(t), () => this.subscribers.delete(t);
  }
  cancel() {
    this.controller.abort(), this.pendingKeysSet.forEach((t, r) => this.pendingKeysSet.delete(r)), this.emit(!0);
  }
  async resolveData(t) {
    let r = !1;
    if (!this.done) {
      let n = () => this.cancel();
      t.addEventListener("abort", n),
        (r = await new Promise((i) => {
          this.subscribe((s) => {
            t.removeEventListener("abort", n), (s || this.done) && i(s);
          });
        }));
    }
    return r;
  }
  get done() {
    return this.pendingKeysSet.size === 0;
  }
  get unwrappedData() {
    return (
      Y(this.data !== null && this.done, "Can only unwrap data on initialized and settled deferreds"),
      Object.entries(this.data).reduce((t, r) => {
        let [n, i] = r;
        return Object.assign(t, { [n]: rb(i) });
      }, {})
    );
  }
  get pendingKeys() {
    return Array.from(this.pendingKeysSet);
  }
}
function tb(e) {
  return e instanceof Promise && e._tracked === !0;
}
function rb(e) {
  if (!tb(e)) return e;
  if (e._error) throw e._error;
  return e._data;
}
class Cf {
  constructor(t, r, n, i) {
    i === void 0 && (i = !1),
      (this.status = t),
      (this.statusText = r || ""),
      (this.internal = i),
      n instanceof Error ? ((this.data = n.toString()), (this.error = n)) : (this.data = n);
  }
}
function i0(e) {
  return (
    e != null &&
    typeof e.status === "number" &&
    typeof e.statusText === "string" &&
    typeof e.internal === "boolean" &&
    "data" in e
  );
}
const s0 = ["post", "put", "patch", "delete"];
const nb = new Set(s0);
const ib = ["get", ...s0];
const sb = new Set(ib);
const ob = new Set([301, 302, 303, 307, 308]);
const ab = new Set([307, 308]);
const Ou = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  };
const lb = { state: "idle", data: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0 };
const im = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 };
const o0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
const a0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
const ub = !a0;
function cb(e) {
  Y(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let t = e0(e.routes);
  let r = null;
  let n = new Set();
  let i = null;
  let s = null;
  let o = null;
  let a = e.hydrationData != null;
  let l = Ji(t, e.history.location, e.basename);
  let u = null;
  if (l == null) {
    let $ = Pr(404, { pathname: e.history.location.pathname });
    let { matches: T, route: N } = cm(t);
    (l = T), (u = { [N.id]: $ });
  }
  let c = !l.some(($) => $.route.loader) || e.hydrationData != null;
  let d;
  let f = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: l,
      initialized: c,
      navigation: Ou,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData?.loaderData) || {},
      actionData: (e.hydrationData?.actionData) || null,
      errors: (e.hydrationData?.errors) || u,
      fetchers: new Map(),
      blockers: new Map(),
    };
  let v = Te.Pop;
  let g = !1;
  let m;
  let w = !1;
  let p = !1;
  let h = [];
  let y = [];
  let S = new Map();
  let x = 0;
  let b = -1;
  let L = new Map();
  let O = new Set();
  let j = new Map();
  let M = new Map();
  let J = new Map();
  let de = !1;
  function Se() {
    return (
      (r = e.history.listen(($) => {
        let { action: T, location: N, delta: z } = $;
        if (de) {
          de = !1;
          return;
        }
        _s(
          J.size === 0 || z != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let U = _f({ currentLocation: f.location, nextLocation: N, historyAction: T });
        if (U && z != null) {
          (de = !0),
            e.history.go(z * -1),
            Vs(U, {
              state: "blocked",
              location: N,
              proceed() {
                Vs(U, { state: "proceeding", proceed: void 0, reset: void 0, location: N }), e.history.go(z);
              },
              reset() {
                Ai(U), ue({ blockers: new Map(d.state.blockers) });
              },
            });
          return;
        }
        return K(T, N);
      })),
      f.initialized || K(Te.Pop, f.location),
      d
    );
  }
  function Fe() {
    r?.(), n.clear(), m?.abort(), f.fetchers.forEach(($, T) => pl(T)), f.blockers.forEach(($, T) => Ai(T));
  }
  function at($) {
    return n.add($), () => n.delete($);
  }
  function ue($) {
    (f = oe({}, f, $)), n.forEach((T) => T(f));
  }
  function xt($, T) {
    var N;
    var z;
    let U =
        f.actionData != null &&
        f.navigation.formMethod != null &&
        nr(f.navigation.formMethod) &&
        f.navigation.state === "loading" &&
        ((N = $.state) == null ? void 0 : N._isRedirect) !== !0;
    let X;
    T.actionData
      ? Object.keys(T.actionData).length > 0
        ? (X = T.actionData)
        : (X = null)
      : U
      ? (X = f.actionData)
      : (X = null);
    let V = T.loaderData ? um(f.loaderData, T.loaderData, T.matches || [], T.errors) : f.loaderData;
    for (let [W] of J) Ai(W);
    let Z =
      g === !0 ||
      (f.navigation.formMethod != null &&
        nr(f.navigation.formMethod) &&
        ((z = $.state) == null ? void 0 : z._isRedirect) !== !0);
    ue(
      oe({}, T, {
        actionData: X,
        loaderData: V,
        historyAction: v,
        location: $,
        initialized: !0,
        navigation: Ou,
        revalidation: "idle",
        restoreScrollPosition: Df($, T.matches || f.matches),
        preventScrollReset: Z,
        blockers: new Map(f.blockers),
      }),
    ),
      w ||
        v === Te.Pop ||
        (v === Te.Push ? e.history.push($, $.state) : v === Te.Replace && e.history.replace($, $.state)),
      (v = Te.Pop),
      (g = !1),
      (w = !1),
      (p = !1),
      (h = []),
      (y = []);
  }
  async function I($, T) {
    if (typeof $ === "number") {
      e.history.go($);
      return;
    }
    let { path: N, submission: z, error: U } = sm($, T);
    let X = f.location;
    let V = As(f.location, N, T?.state);
    V = oe({}, V, e.history.encodeLocation(V));
    let Z = T?.replace != null ? T.replace : void 0;
    let W = Te.Push;
    Z === !0
      ? (W = Te.Replace)
      : Z === !1 ||
        (z != null && nr(z.formMethod) && z.formAction === f.location.pathname + f.location.search && (W = Te.Replace));
    let Xe = T && "preventScrollReset" in T ? T.preventScrollReset === !0 : void 0;
    let re = _f({ currentLocation: X, nextLocation: V, historyAction: W });
    if (re) {
      Vs(re, {
        state: "blocked",
        location: V,
        proceed() {
          Vs(re, { state: "proceeding", proceed: void 0, reset: void 0, location: V }), I($, T);
        },
        reset() {
          Ai(re), ue({ blockers: new Map(f.blockers) });
        },
      });
      return;
    }
    return await K(W, V, { submission: z, pendingError: U, preventScrollReset: Xe, replace: T?.replace });
  }
  function Q() {
    if ((dl(), ue({ revalidation: "loading" }), f.navigation.state !== "submitting")) {
      if (f.navigation.state === "idle") {
        K(f.historyAction, f.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      K(v || f.historyAction, f.navigation.location, { overrideNavigation: f.navigation });
    }
  }
  async function K($, T, N) {
    m?.abort(),
      (m = null),
      (v = $),
      (w = (N?.startUninterruptedRevalidation) === !0),
      W0(f.location, f.matches),
      (g = (N?.preventScrollReset) === !0);
    let z = N?.overrideNavigation;
    let U = Ji(t, T, e.basename);
    if (!U) {
      let Ee = Pr(404, { pathname: T.pathname });
      let { matches: Rt, route: bt } = cm(t);
      hl(), xt(T, { matches: Rt, loaderData: {}, errors: { [bt.id]: Ee } });
      return;
    }
    if (mb(f.location, T) && !(N?.submission && nr(N.submission.formMethod))) {
      xt(T, { matches: U });
      return;
    }
    m = new AbortController();
    let X = Gi(e.history, T, m.signal, N?.submission);
    let V;
    let Z;
    if (N?.pendingError) Z = { [Kn(U).route.id]: N.pendingError };
    else if (N?.submission && nr(N.submission.formMethod)) {
      let Ee = await me(X, T, N.submission, U, { replace: N.replace });
      if (Ee.shortCircuited) return;
      (V = Ee.pendingActionData),
        (Z = Ee.pendingActionError),
        (z = oe({ state: "loading", location: T }, N.submission)),
        (X = new Request(X.url, { signal: X.signal }));
    }
    let {
      shortCircuited: W,
      loaderData: Xe,
      errors: re,
    } = await Ce(X, T, U, z, N?.submission, N?.replace, V, Z);
    W || ((m = null), xt(T, oe({ matches: U }, V ? { actionData: V } : {}, { loaderData: Xe, errors: re })));
  }
  async function me($, T, N, z, U) {
    dl();
    let X = oe({ state: "submitting", location: T }, N);
    ue({ navigation: X });
    let V;
    let Z = hm(z, T);
    if (!Z.route.action)
      V = { type: Ue.error, error: Pr(405, { method: $.method, pathname: T.pathname, routeId: Z.route.id }) };
    else if (((V = await zi("action", $, Z, z, d.basename)), $.signal.aborted)) return { shortCircuited: !0 };
    if (ni(V)) {
      let W;
      return (
        U?.replace != null ? (W = U.replace) : (W = V.location === f.location.pathname + f.location.search),
        await It(f, V, { submission: N, replace: W }),
        { shortCircuited: !0 }
      );
    }
    if (us(V)) {
      let W = Kn(z, Z.route.id);
      return (
        (U?.replace) !== !0 && (v = Te.Push),
        { pendingActionData: {}, pendingActionError: { [W.route.id]: V.error } }
      );
    }
    if (an(V)) throw Pr(400, { type: "defer-action" });
    return { pendingActionData: { [Z.route.id]: V.data } };
  }
  async function Ce($, T, N, z, U, X, V, Z) {
    let W = z;
    W ||
      (W = oe(
        {
          state: "loading",
          location: T,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        },
        U,
      ));
    let Xe =
        U ||
        (W.formMethod && W.formAction && W.formData && W.formEncType
          ? { formMethod: W.formMethod, formAction: W.formAction, formData: W.formData, formEncType: W.formEncType }
          : void 0);
    let [re, Ee] = om(e.history, f, N, Xe, T, p, h, y, V, Z, j);
    if (
      (hl((He) => !(N?.some((qt) => qt.route.id === He)) || (re?.some((qt) => qt.route.id === He))),
      re.length === 0 && Ee.length === 0)
    )
      return (
        xt(T, oe({ matches: N, loaderData: {}, errors: Z || null }, V ? { actionData: V } : {})), { shortCircuited: !0 }
      );
    if (!w) {
      Ee.forEach((qt) => {
        let Jr = f.fetchers.get(qt.key);
        let Xs = {
            state: "loading",
            data: Jr?.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            " _hasFetcherDoneAnything ": !0,
          };
        f.fetchers.set(qt.key, Xs);
      });
      let He = V || f.actionData;
      ue(
        oe(
          { navigation: W },
          He ? (Object.keys(He).length === 0 ? { actionData: null } : { actionData: He }) : {},
          Ee.length > 0 ? { fetchers: new Map(f.fetchers) } : {},
        ),
      );
    }
    (b = ++x), Ee.forEach((He) => S.set(He.key, m));
    let { results: Rt, loaderResults: bt, fetcherResults: _i } = await bf(f.matches, N, re, Ee, $);
    if ($.signal.aborted) return { shortCircuited: !0 };
    Ee.forEach((He) => S.delete(He.key));
    let Ks = dm(Rt);
    if (Ks) return await It(f, Ks, { replace: X }), { shortCircuited: !0 };
    let { loaderData: Js, errors: xn } = lm(f, N, re, bt, Z, Ee, _i, M);
    M.forEach((He, qt) => {
      He.subscribe((Jr) => {
        (Jr || He.done) && M.delete(qt);
      });
    }),
      z0();
    let ml = Af(b);
    return oe({ loaderData: Js, errors: xn }, ml || Ee.length > 0 ? { fetchers: new Map(f.fetchers) } : {});
  }
  function Kr($) {
    return f.fetchers.get($) || lb;
  }
  function Zt($, T, N, z) {
    if (ub)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    S.has($) && Qs($);
    let U = Ji(t, N, e.basename);
    if (!U) {
      fl($, T, Pr(404, { pathname: N }));
      return;
    }
    let { path: X, submission: V } = sm(N, z, !0);
    let Z = hm(U, X);
    if (((g = (z?.preventScrollReset) === !0), V && nr(V.formMethod))) {
      ki($, T, X, Z, U, V);
      return;
    }
    j.set($, { routeId: T, path: X, match: Z, matches: U }), er($, T, X, Z, U, V);
  }
  async function ki($, T, N, z, U, X) {
    if ((dl(), j.delete($), !z.route.action)) {
      let tr = Pr(405, { method: X.formMethod, pathname: N, routeId: T });
      fl($, T, tr);
      return;
    }
    let V = f.fetchers.get($);
    let Z = oe({ state: "submitting" }, X, { data: V?.data, " _hasFetcherDoneAnything ": !0 });
    f.fetchers.set($, Z), ue({ fetchers: new Map(f.fetchers) });
    let W = new AbortController();
    let Xe = Gi(e.history, N, W.signal, X);
    S.set($, W);
    let re = await zi("action", Xe, z, U, d.basename);
    if (Xe.signal.aborted) {
      S.get($) === W && S.delete($);
      return;
    }
    if (ni(re)) {
      S.delete($), O.add($);
      let tr = oe({ state: "loading" }, X, { data: void 0, " _hasFetcherDoneAnything ": !0 });
      return f.fetchers.set($, tr), ue({ fetchers: new Map(f.fetchers) }), It(f, re, { isFetchActionRedirect: !0 });
    }
    if (us(re)) {
      fl($, T, re.error);
      return;
    }
    if (an(re)) throw Pr(400, { type: "defer-action" });
    let Ee = f.navigation.location || f.location;
    let Rt = Gi(e.history, Ee, W.signal);
    let bt = f.navigation.state !== "idle" ? Ji(t, f.navigation.location, e.basename) : f.matches;
    Y(bt, "Didn't find any matches after fetcher action");
    let _i = ++x;
    L.set($, _i);
    let Ks = oe({ state: "loading", data: re.data }, X, { " _hasFetcherDoneAnything ": !0 });
    f.fetchers.set($, Ks);
    let [Js, xn] = om(e.history, f, bt, X, Ee, p, h, y, { [z.route.id]: re.data }, void 0, j);
    xn
      .filter((tr) => tr.key !== $)
      .forEach((tr) => {
        let vl = tr.key;
        let Lf = f.fetchers.get(vl);
        let K0 = {
            state: "loading",
            data: Lf?.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            " _hasFetcherDoneAnything ": !0,
          };
        f.fetchers.set(vl, K0), S.set(vl, W);
      }),
      ue({ fetchers: new Map(f.fetchers) });
    let { results: ml, loaderResults: He, fetcherResults: qt } = await bf(f.matches, bt, Js, xn, Rt);
    if (W.signal.aborted) return;
    L.delete($), S.delete($), xn.forEach((tr) => S.delete(tr.key));
    let Jr = dm(ml);
    if (Jr) return It(f, Jr);
    let { loaderData: Xs, errors: yl } = lm(f, f.matches, Js, He, void 0, xn, qt, M);
    let Q0 = {
        state: "idle",
        data: re.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        " _hasFetcherDoneAnything ": !0,
      };
    f.fetchers.set($, Q0);
    let V0 = Af(_i);
    f.navigation.state === "loading" && _i > b
      ? (Y(v, "Expected pending action"),
        m?.abort(),
        xt(f.navigation.location, { matches: bt, loaderData: Xs, errors: yl, fetchers: new Map(f.fetchers) }))
      : (ue(oe({ errors: yl, loaderData: um(f.loaderData, Xs, bt, yl) }, V0 ? { fetchers: new Map(f.fetchers) } : {})),
        (p = !1));
  }
  async function er($, T, N, z, U, X) {
    let V = f.fetchers.get($);
    let Z = oe({ state: "loading", formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0 }, X, {
        data: V?.data,
        " _hasFetcherDoneAnything ": !0,
      });
    f.fetchers.set($, Z), ue({ fetchers: new Map(f.fetchers) });
    let W = new AbortController();
    let Xe = Gi(e.history, N, W.signal);
    S.set($, W);
    let re = await zi("loader", Xe, z, U, d.basename);
    if ((an(re) && (re = (await d0(re, Xe.signal, !0)) || re), S.get($) === W && S.delete($), Xe.signal.aborted))
      return;
    if (ni(re)) {
      await It(f, re);
      return;
    }
    if (us(re)) {
      let Rt = Kn(f.matches, T);
      f.fetchers.delete($), ue({ fetchers: new Map(f.fetchers), errors: { [Rt.route.id]: re.error } });
      return;
    }
    Y(!an(re), "Unhandled fetcher deferred data");
    let Ee = {
      state: "idle",
      data: re.data,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      " _hasFetcherDoneAnything ": !0,
    };
    f.fetchers.set($, Ee), ue({ fetchers: new Map(f.fetchers) });
  }
  async function It($, T, N) {
    var z;
    let { submission: U, replace: X, isFetchActionRedirect: V } = N === void 0 ? {} : N;
    T.revalidate && (p = !0);
    let Z = As($.location, T.location, oe({ _isRedirect: !0 }, V ? { _isFetchActionRedirect: !0 } : {}));
    if (
      (Y(Z, "Expected a location on the redirect navigation"),
      o0.test(T.location) && a0 && typeof ((z = window) == null ? void 0 : z.location) < "u")
    ) {
      let bt = e.history.createURL(T.location).origin;
      if (window.location.origin !== bt) {
        X ? window.location.replace(T.location) : window.location.assign(T.location);
        return;
      }
    }
    m = null;
    let W = X === !0 ? Te.Replace : Te.Push;
    let { formMethod: Xe, formAction: re, formEncType: Ee, formData: Rt } = $.navigation;
    !U && Xe && re && Rt && Ee && (U = { formMethod: Xe, formAction: re, formEncType: Ee, formData: Rt }),
      ab.has(T.status) && U && nr(U.formMethod)
        ? await K(W, Z, { submission: oe({}, U, { formAction: T.location }), preventScrollReset: g })
        : await K(W, Z, {
            overrideNavigation: {
              state: "loading",
              location: Z,
              formMethod: U ? U.formMethod : void 0,
              formAction: U ? U.formAction : void 0,
              formEncType: U ? U.formEncType : void 0,
              formData: U ? U.formData : void 0,
            },
            preventScrollReset: g,
          });
  }
  async function bf($, T, N, z, U) {
    let X = await Promise.all([
        ...N.map((W) => zi("loader", U, W, T, d.basename)),
        ...z.map((W) => zi("loader", Gi(e.history, W.path, U.signal), W.match, W.matches, d.basename)),
      ]);
    let V = X.slice(0, N.length);
    let Z = X.slice(N.length);
    return (
      await Promise.all([
        fm($, N, V, U.signal, !1, f.loaderData),
        fm(
          $,
          z.map((W) => W.match),
          Z,
          U.signal,
          !0,
        ),
      ]),
      { results: X, loaderResults: V, fetcherResults: Z }
    );
  }
  function dl() {
    (p = !0),
      h.push(...hl()),
      j.forEach(($, T) => {
        S.has(T) && (y.push(T), Qs(T));
      });
  }
  function fl($, T, N) {
    let z = Kn(f.matches, T);
    pl($), ue({ errors: { [z.route.id]: N }, fetchers: new Map(f.fetchers) });
  }
  function pl($) {
    S.has($) && Qs($), j.delete($), L.delete($), O.delete($), f.fetchers.delete($);
  }
  function Qs($) {
    let T = S.get($);
    Y(T, `Expected fetch controller: ${$}`), T.abort(), S.delete($);
  }
  function kf($) {
    for (let T of $) {
      let z = {
        state: "idle",
        data: Kr(T).data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        " _hasFetcherDoneAnything ": !0,
      };
      f.fetchers.set(T, z);
    }
  }
  function z0() {
    let $ = [];
    for (let T of O) {
      let N = f.fetchers.get(T);
      Y(N, `Expected fetcher: ${T}`), N.state === "loading" && (O.delete(T), $.push(T));
    }
    kf($);
  }
  function Af($) {
    let T = [];
    for (let [N, z] of L)
      if (z < $) {
        let U = f.fetchers.get(N);
        Y(U, `Expected fetcher: ${N}`), U.state === "loading" && (Qs(N), L.delete(N), T.push(N));
      }
    return kf(T), T.length > 0;
  }
  function G0($, T) {
    let N = f.blockers.get($) || im;
    return J.get($) !== T && J.set($, T), N;
  }
  function Ai($) {
    f.blockers.delete($), J.delete($);
  }
  function Vs($, T) {
    let N = f.blockers.get($) || im;
    Y(
      (N.state === "unblocked" && T.state === "blocked") ||
        (N.state === "blocked" && T.state === "blocked") ||
        (N.state === "blocked" && T.state === "proceeding") ||
        (N.state === "blocked" && T.state === "unblocked") ||
        (N.state === "proceeding" && T.state === "unblocked"),
      `Invalid blocker state transition: ${N.state} -> ${T.state}`,
    ),
      f.blockers.set($, T),
      ue({ blockers: new Map(f.blockers) });
  }
  function _f($) {
    let { currentLocation: T, nextLocation: N, historyAction: z } = $;
    if (J.size === 0) return;
    J.size > 1 && _s(!1, "A router only supports one blocker at a time");
    let U = Array.from(J.entries());
    let [X, V] = U[U.length - 1];
    let Z = f.blockers.get(X);
    if (!(Z && Z.state === "proceeding") && V({ currentLocation: T, nextLocation: N, historyAction: z })) return X;
  }
  function hl($) {
    let T = [];
    return (
      M.forEach((N, z) => {
        (!$ || $(z)) && (N.cancel(), T.push(z), M.delete(z));
      }),
      T
    );
  }
  function H0($, T, N) {
    if (((i = $), (o = T), (s = N || ((z) => z.key)), !a && f.navigation === Ou)) {
      a = !0;
      let z = Df(f.location, f.matches);
      z != null && ue({ restoreScrollPosition: z });
    }
    return () => {
      (i = null), (o = null), (s = null);
    };
  }
  function W0($, T) {
    if (i && s && o) {
      let N = T.map((U) => pm(U, f.loaderData));
      let z = s($, N) || $.key;
      i[z] = o();
    }
  }
  function Df($, T) {
    if (i && s && o) {
      let N = T.map((X) => pm(X, f.loaderData));
      let z = s($, N) || $.key;
      let U = i[z];
      if (typeof U === "number") return U;
    }
    return null;
  }
  return (
    (d = {
      get basename() {
        return e.basename;
      },
      get state() {
        return f;
      },
      get routes() {
        return t;
      },
      initialize: Se,
      subscribe: at,
      enableScrollRestoration: H0,
      navigate: I,
      fetch: Zt,
      revalidate: Q,
      createHref: ($) => e.history.createHref($),
      encodeLocation: ($) => e.history.encodeLocation($),
      getFetcher: Kr,
      deleteFetcher: pl,
      dispose: Fe,
      getBlocker: G0,
      deleteBlocker: Ai,
      _internalFetchControllers: S,
      _internalActiveDeferreds: M,
    }),
    d
  );
}
function db(e) {
  return e != null && "formData" in e;
}
function sm(e, t, r) {
  r === void 0 && (r = !1);
  let n = typeof e === "string" ? e : mr(e);
  if (!(t && db(t))) return { path: n };
  if (t.formMethod && !vb(t.formMethod)) return { path: n, error: Pr(405, { method: t.formMethod }) };
  let i;
  if (
    t.formData &&
    ((i = {
      formMethod: t.formMethod || "get",
      formAction: c0(n),
      formEncType: (t?.formEncType) || "application/x-www-form-urlencoded",
      formData: t.formData,
    }),
    nr(i.formMethod))
  )
    return { path: n, submission: i };
  let s = gr(n);
  let o = u0(t.formData);
  return r && s.search && f0(s.search) && o.append("index", ""), (s.search = `?${o}`), { path: mr(s), submission: i };
}
function fb(e, t) {
  let r = e;
  if (t) {
    let n = e.findIndex((i) => i.route.id === t);
    n >= 0 && (r = e.slice(0, n));
  }
  return r;
}
function om(e, t, r, n, i, s, o, a, l, u, c) {
  let d = u ? Object.values(u)[0] : l ? Object.values(l)[0] : void 0;
  let f = e.createURL(t.location);
  let v = e.createURL(i);
  let g = s || f.toString() === v.toString() || f.search !== v.search;
  let m = u ? Object.keys(u)[0] : void 0;
  let p = fb(r, m).filter((y, S) => {
      if (y.route.loader == null) return !1;
      if (pb(t.loaderData, t.matches[S], y) || o.some((L) => L === y.route.id)) return !0;
      let x = t.matches[S];
      let b = y;
      return am(
        y,
        oe({ currentUrl: f, currentParams: x.params, nextUrl: v, nextParams: b.params }, n, {
          actionResult: d,
          defaultShouldRevalidate: g || l0(x, b),
        }),
      );
    });
  let h = [];
  return (
    c?.forEach((y, S) => {
        if (r.some((x) => x.route.id === y.routeId))
          a.includes(S)
            ? h.push(oe({ key: S }, y))
            : am(
                y.match,
                oe(
                  {
                    currentUrl: f,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: v,
                    nextParams: r[r.length - 1].params,
                  },
                  n,
                  { actionResult: d, defaultShouldRevalidate: g },
                ),
              ) && h.push(oe({ key: S }, y));
        else return;
      }),
    [p, h]
  );
}
function pb(e, t, r) {
  let n = !t || r.route.id !== t.route.id;
  let i = e[r.route.id] === void 0;
  return n || i;
}
function l0(e, t) {
  let r = e.route.path;
  return e.pathname !== t.pathname || (r?.endsWith("*") && e.params["*"] !== t.params["*"]);
}
function am(e, t) {
  if (e.route.shouldRevalidate) {
    let r = e.route.shouldRevalidate(t);
    if (typeof r === "boolean") return r;
  }
  return t.defaultShouldRevalidate;
}
async function zi(e, t, r, n, i, s, o, a) {
  i === void 0 && (i = "/"), s === void 0 && (s = !1), o === void 0 && (o = !1);
  let l;
  let u;
  let c;
  let d = new Promise((v, g) => (c = g));
  let f = () => c();
  t.signal.addEventListener("abort", f);
  try {
    let v = r.route[e];
    Y(v, `Could not find the ${e} to run on the "${r.route.id}" route`),
      (u = await Promise.race([v({ request: t, params: r.params, context: a }), d])),
      Y(
        u !== void 0,
        `You defined ${(e === "action" ? "an action" : "a loader")} for route ${(`"${r.route.id}\" but didn't return anything from your `${e}\` `)}function. Please return a value or \`null\`.`,
      );
  } catch (v) {
    (l = Ue.error), (u = v);
  } finally {
    t.signal.removeEventListener("abort", f);
  }
  if (yb(u)) {
    let v = u.status;
    if (ob.has(v)) {
      let w = u.headers.get("Location");
      if ((Y(w, "Redirects returned/thrown from loaders/actions must have a Location header"), o0.test(w))) {
        if (!s) {
          let p = new URL(t.url);
          let h = w.startsWith("//") ? new URL(p.protocol + w) : new URL(w);
          h.origin === p.origin && (w = h.pathname + h.search + h.hash);
        }
      } else {
        let p = n.slice(0, n.indexOf(r) + 1);
        let h = sl(p).map((S) => S.pathnameBase);
        let y = Of(w, h, new URL(t.url).pathname);
        if ((Y(mr(y), `Unable to resolve redirect location: ${w}`), i)) {
          let S = y.pathname;
          y.pathname = S === "/" ? i : cr([i, S]);
        }
        w = mr(y);
      }
      if (s) throw (u.headers.set("Location", w), u);
      return { type: Ue.redirect, status: v, location: w, revalidate: u.headers.get("X-Remix-Revalidate") !== null };
    }
    if (o) throw { type: l || Ue.data, response: u };
    let g;
    let m = u.headers.get("Content-Type");
    return (
      m && /\bapplication\/json\b/.test(m) ? (g = await u.json()) : (g = await u.text()),
      l === Ue.error
        ? { type: l, error: new Cf(v, u.statusText, g), headers: u.headers }
        : { type: Ue.data, data: g, statusCode: u.status, headers: u.headers }
    );
  }
  return l === Ue.error
    ? { type: l, error: u }
    : u instanceof eb
    ? { type: Ue.deferred, deferredData: u }
    : { type: Ue.data, data: u };
}
function Gi(e, t, r, n) {
  let i = e.createURL(c0(t)).toString();
  let s = { signal: r };
  if (n && nr(n.formMethod)) {
    let { formMethod: o, formEncType: a, formData: l } = n;
    (s.method = o.toUpperCase()), (s.body = a === "application/x-www-form-urlencoded" ? u0(l) : l);
  }
  return new Request(i, s);
}
function u0(e) {
  let t = new URLSearchParams();
  for (let [r, n] of e.entries()) t.append(r, n instanceof File ? n.name : n);
  return t;
}
function hb(e, t, r, n, i) {
  let s = {};
  let o = null;
  let a;
  let l = !1;
  let u = {};
  return (
    r.forEach((c, d) => {
      let f = t[d].route.id;
      if ((Y(!ni(c), "Cannot handle redirect results in processLoaderData"), us(c))) {
        let v = Kn(e, f);
        let g = c.error;
        n && ((g = Object.values(n)[0]), (n = void 0)),
          (o = o || {}),
          o[v.route.id] == null && (o[v.route.id] = g),
          (s[f] = void 0),
          l || ((l = !0), (a = i0(c.error) ? c.error.status : 500)),
          c.headers && (u[f] = c.headers);
      } else
        an(c) ? (i.set(f, c.deferredData), (s[f] = c.deferredData.data)) : (s[f] = c.data),
          c.statusCode != null && c.statusCode !== 200 && !l && (a = c.statusCode),
          c.headers && (u[f] = c.headers);
    }),
    n && ((o = n), (s[Object.keys(n)[0]] = void 0)),
    { loaderData: s, errors: o, statusCode: a || 200, loaderHeaders: u }
  );
}
function lm(e, t, r, n, i, s, o, a) {
  let { loaderData: l, errors: u } = hb(t, r, n, i, a);
  for (let c = 0; c < s.length; c++) {
    let { key: d, match: f } = s[c];
    Y(o !== void 0 && o[c] !== void 0, "Did not find corresponding fetcher result");
    let v = o[c];
    if (us(v)) {
      let g = Kn(e.matches, f.route.id);
      (u?.[g.route.id]) || (u = oe({}, u, { [g.route.id]: v.error })), e.fetchers.delete(d);
    } else if (ni(v)) Y(!1, "Unhandled fetcher revalidation redirect");
    else if (an(v)) Y(!1, "Unhandled fetcher deferred data");
    else {
      let g = {
        state: "idle",
        data: v.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        " _hasFetcherDoneAnything ": !0,
      };
      e.fetchers.set(d, g);
    }
  }
  return { loaderData: l, errors: u };
}
function um(e, t, r, n) {
  let i = oe({}, t);
  for (let s of r) {
    let o = s.route.id;
    if (
      (t.hasOwnProperty(o) ? t[o] !== void 0 && (i[o] = t[o]) : e[o] !== void 0 && (i[o] = e[o]),
      n?.hasOwnProperty(o))
    )
      break;
  }
  return i;
}
function Kn(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((n) => n.route.id === t) + 1) : [...e])
      .reverse()
      .find((n) => n.route.hasErrorBoundary === !0) || e[0]
  );
}
function cm(e) {
  let t = e.find((r) => r.index || !r.path || r.path === "/") || { id: "__shim-error-route__" };
  return { matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }], route: t };
}
function Pr(e, t) {
  let { pathname: r, routeId: n, method: i, type: s } = t === void 0 ? {} : t;
  let o = "Unknown Server Error";
  let a = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((o = "Bad Request"),
        i && r && n
          ? (a =
              `You made a ${i} request to "${r}" but ${(`did not provide a \`loader\` for route "${n}", `)}so there is no way to handle the request.`)
          : s === "defer-action" && (a = "defer() is not supported in actions"))
      : e === 403
      ? ((o = "Forbidden"), (a = `Route "${n}" does not match URL "${r}"`))
      : e === 404
      ? ((o = "Not Found"), (a = `No route matches URL "${r}"`))
      : e === 405 &&
        ((o = "Method Not Allowed"),
        i && r && n
          ? (a =
              `You made a ${i.toUpperCase()} request to "${r}" but ${(`did not provide an \`action\` for route "${n}", `)}so there is no way to handle the request.`)
          : i && (a = `Invalid request method "${i.toUpperCase()}"`)),
    new Cf(e || 500, o, new Error(a), !0)
  );
}
function dm(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t];
    if (ni(r)) return r;
  }
}
function c0(e) {
  let t = typeof e === "string" ? gr(e) : e;
  return mr(oe({}, t, { hash: "" }));
}
function mb(e, t) {
  return e.pathname === t.pathname && e.search === t.search && e.hash !== t.hash;
}
function an(e) {
  return e.type === Ue.deferred;
}
function us(e) {
  return e.type === Ue.error;
}
function ni(e) {
  return (e?.type) === Ue.redirect;
}
function yb(e) {
  return (
    e != null &&
    typeof e.status === "number" &&
    typeof e.statusText === "string" &&
    typeof e.headers === "object" &&
    typeof e.body < "u"
  );
}
function vb(e) {
  return sb.has(e);
}
function nr(e) {
  return nb.has(e);
}
async function fm(e, t, r, n, i, s) {
  for (let o = 0; o < r.length; o++) {
    let a = r[o];
    let l = t[o];
    let u = e.find((d) => d.route.id === l.route.id);
    let c = u != null && !l0(u, l) && (s?.[l.route.id]) !== void 0;
    an(a) &&
      (i || c) &&
      (await d0(a, n, i).then((d) => {
        d && (r[o] = d || r[o]);
      }));
  }
}
async function d0(e, t, r) {
  if ((r === void 0 && (r = !1), !(await e.deferredData.resolveData(t)))) {
    if (r)
      try {
        return { type: Ue.data, data: e.deferredData.unwrappedData };
      } catch (i) {
        return { type: Ue.error, error: i };
      }
    return { type: Ue.data, data: e.deferredData.data };
  }
}
function f0(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function pm(e, t) {
  let { route: r, pathname: n, params: i } = e;
  return { id: r.id, pathname: n, params: i, data: t[r.id], handle: r.handle };
}
function hm(e, t) {
  let r = typeof t === "string" ? gr(t).search : t.search;
  if (e[e.length - 1].route.index && f0(r || "")) return e[e.length - 1];
  let n = sl(e);
  return n[n.length - 1];
} /**
 * React Router v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ka() {
  return (
    (ka = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ka.apply(this, arguments)
  );
}
function gb(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const Sb = typeof Object.is === "function" ? Object.is : gb;
const { useState: Eb, useEffect: wb, useLayoutEffect: Pb, useDebugValue: $b } = Qo;
function Ob(e, t, r) {
  const n = t();
  const [{ inst: i }, s] = Eb({ inst: { value: n, getSnapshot: t } });
  return (
    Pb(() => {
      (i.value = n), (i.getSnapshot = t), Cu(i) && s({ inst: i });
    }, [e, n, t]),
    wb(
      () => (
        Cu(i) && s({ inst: i }),
        e(() => {
          Cu(i) && s({ inst: i });
        })
      ),
      [e],
    ),
    $b(n),
    n
  );
}
function Cu(e) {
  const t = e.getSnapshot;
  const r = e.value;
  try {
    const n = t();
    return !Sb(r, n);
  } catch {
    return !0;
  }
}
function Cb(e, t, r) {
  return t();
}
const Tb = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
const xb = !Tb;
const Rb = xb ? Cb : Ob;
const bb = "useSyncExternalStore" in Qo ? ((e) => e.useSyncExternalStore)(Qo) : Rb;
const Tf = E.createContext(null);
const ol = E.createContext(null);
const Gs = E.createContext(null);
const al = E.createContext(null);
const Tn = E.createContext({ outlet: null, matches: [] });
const p0 = E.createContext(null);
function kb(e, t) {
  let { relative: r } = t === void 0 ? {} : t;
  Hs() || Y(!1);
  let { basename: n, navigator: i } = E.useContext(Gs);
  let { hash: s, pathname: o, search: a } = xf(e, { relative: r });
  let l = o;
  return n !== "/" && (l = o === "/" ? n : cr([n, o])), i.createHref({ pathname: l, search: a, hash: s });
}
function Hs() {
  return E.useContext(al) != null;
}
function Ri() {
  return Hs() || Y(!1), E.useContext(al).location;
}
function h0() {
  Hs() || Y(!1);
  let { basename: e, navigator: t } = E.useContext(Gs);
  let { matches: r } = E.useContext(Tn);
  let { pathname: n } = Ri();
  let i = JSON.stringify(sl(r).map((a) => a.pathnameBase));
  let s = E.useRef(!1);
  return (
    E.useEffect(() => {
      s.current = !0;
    }),
    E.useCallback(
      function (a, l) {
        if ((l === void 0 && (l = {}), !s.current)) return;
        if (typeof a === "number") {
          t.go(a);
          return;
        }
        let u = Of(a, JSON.parse(i), n, l.relative === "path");
        e !== "/" && (u.pathname = u.pathname === "/" ? e : cr([e, u.pathname])),
          (l.replace ? t.replace : t.push)(u, l.state, l);
      },
      [e, t, i, n],
    )
  );
}
function hL() {
  let { matches: e } = E.useContext(Tn);
  let t = e[e.length - 1];
  return t ? t.params : {};
}
function xf(e, t) {
  let { relative: r } = t === void 0 ? {} : t;
  let { matches: n } = E.useContext(Tn);
  let { pathname: i } = Ri();
  let s = JSON.stringify(sl(n).map((o) => o.pathnameBase));
  return E.useMemo(() => Of(e, JSON.parse(s), i, r === "path"), [e, s, i, r]);
}
function Ab(e, t) {
  Hs() || Y(!1);
  let { navigator: r } = E.useContext(Gs);
  let n = E.useContext(ol);
  let { matches: i } = E.useContext(Tn);
  let s = i[i.length - 1];
  let o = s ? s.params : {};
  s?.pathname;
  let a = s ? s.pathnameBase : "/";
  s?.route;
  let l = Ri();
  let u;
  if (t) {
    var c;
    let m = typeof t === "string" ? gr(t) : t;
    a === "/" || ((c = m.pathname) != null && c.startsWith(a)) || Y(!1), (u = m);
  } else u = l;
  let d = u.pathname || "/";
  let f = a === "/" ? d : d.slice(a.length) || "/";
  let v = Ji(e, { pathname: f });
  let g = Nb(
      v?.map((m) =>
          Object.assign({}, m, {
            params: Object.assign({}, o, m.params),
            pathname: cr([a, r.encodeLocation ? r.encodeLocation(m.pathname).pathname : m.pathname]),
            pathnameBase:
              m.pathnameBase === "/"
                ? a
                : cr([a, r.encodeLocation ? r.encodeLocation(m.pathnameBase).pathname : m.pathnameBase]),
          }),
        ),
      i,
      n || void 0,
    );
  return t && g
    ? D(al.Provider, {
        value: {
          location: ka({ pathname: "/", search: "", hash: "", state: null, key: "default" }, u),
          navigationType: Te.Pop,
        },
        children: g,
      })
    : g;
}
function _b() {
  let e = qb();
  let t = i0(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e);
  let r = e instanceof Error ? e.stack : null;
  return je(vn, {
    children: [
      D("h2", { children: "Unexpected Application Error!" }),
      D("h3", { style: { fontStyle: "italic" }, children: t }),
      r ? D("pre", { style: { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" }, children: r }) : null,
      null,
    ],
  });
}
class Db extends E.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || r.error, location: r.location };
  }
  componentDidCatch(t, r) {
    console.error("React Router caught the following error during render", t, r);
  }
  render() {
    return this.state.error
      ? D(Tn.Provider, {
          value: this.props.routeContext,
          children: D(p0.Provider, { value: this.state.error, children: this.props.component }),
        })
      : this.props.children;
  }
}
function Lb(e) {
  let { routeContext: t, match: r, children: n } = e;
  let i = E.useContext(Tf);
  return (
    i?.static &&
      i.staticContext &&
      r.route.errorElement &&
      (i.staticContext._deepestRenderedBoundaryId = r.route.id),
    D(Tn.Provider, { value: t, children: n })
  );
}
function Nb(e, t, r) {
  if ((t === void 0 && (t = []), e == null))
    if (r?.errors) e = r.matches;
    else return null;
  let n = e;
  let i = r == null ? void 0 : r.errors;
  if (i != null) {
    let s = n.findIndex((o) => o.route.id && (i == null ? void 0 : i[o.route.id]));
    s >= 0 || Y(!1), (n = n.slice(0, Math.min(n.length, s + 1)));
  }
  return n.reduceRight((s, o, a) => {
    let l = o.route.id ? (i == null ? void 0 : i[o.route.id]) : null;
    let u = r ? o.route.errorElement || D(_b, {}) : null;
    let c = t.concat(n.slice(0, a + 1));
    let d = () =>
        D(Lb, {
          match: o,
          routeContext: { outlet: s, matches: c },
          children: l ? u : o.route.element !== void 0 ? o.route.element : s,
        });
    return r && (o.route.errorElement || a === 0)
      ? D(Db, {
          location: r.location,
          component: u,
          error: l,
          children: d(),
          routeContext: { outlet: null, matches: c },
        })
      : d();
  }, null);
}
var mm;
(function (e) {
  (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator");
})(mm || (mm = {}));
var Aa;
(function (e) {
  (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator");
})(Aa || (Aa = {}));
function Fb(e) {
  let t = E.useContext(ol);
  return t || Y(!1), t;
}
function Mb(e) {
  let t = E.useContext(Tn);
  return t || Y(!1), t;
}
function Ib(e) {
  let t = Mb();
  let r = t.matches[t.matches.length - 1];
  return r.route.id || Y(!1), r.route.id;
}
function qb() {
  var e;
  let t = E.useContext(p0);
  let r = Fb(Aa.UseRouteError);
  let n = Ib(Aa.UseRouteError);
  return t || ((e = r.errors) == null ? void 0 : e[n]);
}
function Ub(e) {
  let { fallbackElement: t, router: r } = e;
  let n = bb(
      r.subscribe,
      () => r.state,
      () => r.state,
    );
  let i = E.useMemo(
      () => ({
        createHref: r.createHref,
        encodeLocation: r.encodeLocation,
        go: (o) => r.navigate(o),
        push: (o, a, l) => r.navigate(o, { state: a, preventScrollReset: l == null ? void 0 : l.preventScrollReset }),
        replace: (o, a, l) =>
          r.navigate(o, { replace: !0, state: a, preventScrollReset: l == null ? void 0 : l.preventScrollReset }),
      }),
      [r],
    );
  let s = r.basename || "/";
  return D(vn, {
    children: D(Tf.Provider, {
      value: { router: r, navigator: i, static: !1, basename: s },
      children: D(ol.Provider, {
        value: n,
        children: D(jb, {
          basename: r.basename,
          location: r.state.location,
          navigationType: r.state.historyAction,
          navigator: i,
          children: r.state.initialized ? D(Bb, {}) : t,
        }),
      }),
    }),
  });
}
function Zr(e) {
  Y(!1);
}
function jb(e) {
  let {
    basename: t = "/",
    children: r = null,
    location: n,
    navigationType: i = Te.Pop,
    navigator: s,
    static: o = !1,
  } = e;
  Hs() && Y(!1);
  let a = t.replace(/^\/*/, "/");
  let l = E.useMemo(() => ({ basename: a, navigator: s, static: o }), [a, s, o]);
  typeof n === "string" && (n = gr(n));
  let { pathname: u = "/", search: c = "", hash: d = "", state: f = null, key: v = "default" } = n;
  let g = E.useMemo(() => {
      let m = n0(u, a);
      return m == null ? null : { pathname: m, search: c, hash: d, state: f, key: v };
    }, [a, u, c, d, f, v]);
  return g == null
    ? null
    : D(Gs.Provider, {
        value: l,
        children: D(al.Provider, { children: r, value: { location: g, navigationType: i } }),
      });
}
function Bb(e) {
  let { children: t, location: r } = e;
  let n = E.useContext(Tf);
  let i = n && !t ? n.router.routes : _a(t);
  return Ab(i, r);
}
var ym;
(function (e) {
  (e[(e.pending = 0)] = "pending"), (e[(e.success = 1)] = "success"), (e[(e.error = 2)] = "error");
})(ym || (ym = {}));
new Promise(() => {});
function _a(e, t) {
  t === void 0 && (t = []);
  let r = [];
  return (
    E.Children.forEach(e, (n, i) => {
      if (!E.isValidElement(n)) return;
      if (n.type === E.Fragment) {
        r.push.apply(r, _a(n.props.children, t));
        return;
      }
      n.type !== Zr && Y(!1), !(n.props.index && n.props.children ) || Y(!1);
      let s = [...t, i];
      let o = {
          id: n.props.id || s.join("-"),
          caseSensitive: n.props.caseSensitive,
          element: n.props.element,
          index: n.props.index,
          path: n.props.path,
          loader: n.props.loader,
          action: n.props.action,
          errorElement: n.props.errorElement,
          hasErrorBoundary: n.props.errorElement != null,
          shouldRevalidate: n.props.shouldRevalidate,
          handle: n.props.handle,
        };
      n.props.children && (o.children = _a(n.props.children, s)), r.push(o);
    }),
    r
  );
}
function m0(e) {
  return e.map((t) => {
    let r = ka({}, t);
    return (
      r.hasErrorBoundary == null && (r.hasErrorBoundary = r.errorElement != null),
      r.children && (r.children = m0(r.children)),
      r
    );
  });
} /**
 * React Router DOM v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Kc() {
  return (
    (Kc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Kc.apply(this, arguments)
  );
}
function y0(e, t) {
  if (e == null) return {};
  var r = {};
  var n = Object.keys(e);
  var i;
  var s;
  for (s = 0; s < n.length; s++) (i = n[s]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function zb(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Gb(e, t) {
  return e.button === 0 && (!t || t === "_self") && !zb(e);
}
function Jc(e) {
  return (
    e === void 0 && (e = ""),
    new URLSearchParams(
      typeof e === "string" || Array.isArray(e) || e instanceof URLSearchParams
        ? e
        : Object.keys(e).reduce((t, r) => {
            let n = e[r];
            return t.concat(Array.isArray(n) ? n.map((i) => [r, i]) : [[r, n]]);
          }, []),
    )
  );
}
function Hb(e, t) {
  let r = Jc(e);
  if (t)
    for (let n of t.keys())
      r.has(n) ||
        t.getAll(n).forEach((i) => {
          r.append(n, i);
        });
  return r;
}
const Wb = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"];
const Qb = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];
function Vb(e, t) {
  return cb({
    basename: t == null ? void 0 : t.basename,
    history: AR({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || Kb(),
    routes: m0(e),
  }).initialize();
}
function Kb() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t?.errors && (t = Kc({}, t, { errors: Jb(t.errors) })), t;
}
function Jb(e) {
  if (!e) return null;
  let t = Object.entries(e);
  let r = {};
  for (let [n, i] of t)
    if (i && i.__type === "RouteErrorResponse") r[n] = new Cf(i.status, i.statusText, i.data, i.internal === !0);
    else if (i && i.__type === "Error") {
      let s = new Error(i.message);
      (s.stack = ""), (r[n] = s);
    } else r[n] = i;
  return r;
}
const Xb = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
const Yb = E.forwardRef(function (t, r) {
    let {
        onClick: n,
        relative: i,
        reloadDocument: s,
        replace: o,
        state: a,
        target: l,
        to: u,
        preventScrollReset: c,
      } = t;
    let d = y0(t, Wb);
    let f;
    let v = !1;
    if (Xb && typeof u === "string" && /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(u)) {
      f = u;
      let p = new URL(window.location.href);
      let h = u.startsWith("//") ? new URL(p.protocol + u) : new URL(u);
      h.origin === p.origin ? (u = h.pathname + h.search + h.hash) : (v = !0);
    }
    let g = kb(u, { relative: i });
    let m = Zb(u, { replace: o, state: a, target: l, preventScrollReset: c, relative: i });
    function w(p) {
      n?.(p), p.defaultPrevented || m(p);
    }
    return D("a", { ...d, href: f || g, onClick: v || s ? n : w, ref: r, target: l });
  });
const mL = E.forwardRef(function (t, r) {
    let {
        "aria-current": n = "page",
        caseSensitive: i = !1,
        className: s = "",
        end: o = !1,
        style: a,
        to: l,
        children: u,
      } = t;
    let c = y0(t, Qb);
    let d = xf(l, { relative: c.relative });
    let f = Ri();
    let v = E.useContext(ol);
    let { navigator: g } = E.useContext(Gs);
    let m = g.encodeLocation ? g.encodeLocation(d).pathname : d.pathname;
    let w = f.pathname;
    let p = v?.navigation?.location ? v.navigation.location.pathname : null;
    i || ((w = w.toLowerCase()), (p = p ? p.toLowerCase() : null), (m = m.toLowerCase()));
    let h = w === m || (!o && w.startsWith(m) && w.charAt(m.length) === "/");
    let y = p != null && (p === m || (!o && p.startsWith(m) && p.charAt(m.length) === "/"));
    let S = h ? n : void 0;
    let x;
    typeof s === "function"
      ? (x = s({ isActive: h, isPending: y }))
      : (x = [s, h ? "active" : null, y ? "pending" : null].filter(Boolean).join(" "));
    let b = typeof a === "function" ? a({ isActive: h, isPending: y }) : a;
    return D(Yb, {
      ...c,
      "aria-current": S,
      className: x,
      ref: r,
      style: b,
      to: l,
      children: typeof u === "function" ? u({ isActive: h, isPending: y }) : u,
    });
  });
var vm;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"), (e.UseSubmitImpl = "useSubmitImpl"), (e.UseFetcher = "useFetcher");
})(vm || (vm = {}));
var gm;
(function (e) {
  (e.UseFetchers = "useFetchers"), (e.UseScrollRestoration = "useScrollRestoration");
})(gm || (gm = {}));
function Zb(e, t) {
  let { target: r, replace: n, state: i, preventScrollReset: s, relative: o } = t === void 0 ? {} : t;
  let a = h0();
  let l = Ri();
  let u = xf(e, { relative: o });
  return E.useCallback(
    (c) => {
      if (Gb(c, r)) {
        c.preventDefault();
        let d = n !== void 0 ? n : mr(l) === mr(u);
        a(e, { replace: d, state: i, preventScrollReset: s, relative: o });
      }
    },
    [l, a, u, n, i, r, e, s, o],
  );
}
function yL(e) {
  let t = E.useRef(Jc(e));
  let r = E.useRef(!1);
  let n = Ri();
  let i = E.useMemo(() => Hb(n.search, r.current ? null : t.current), [n.search]);
  let s = h0();
  let o = E.useCallback(
      (a, l) => {
        const u = Jc(typeof a === "function" ? a(i) : a);
        (r.current = !0), s(`?${u}`, l);
      },
      [s, i],
    );
  return [i, o];
}
function v0(e) {
  var t;
  var r;
  var n = "";
  if (typeof e === "string" || typeof e === "number") n += e;
  else if (typeof e === "object")
    if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (r = v0(e[t])) && (n && (n += " "), (n += r));
    else for (t in e) e[t] && (n && (n += " "), (n += t));
  return n;
}
function ft() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = v0(e)) && (n && (n += " "), (n += t));
  return n;
}
const g0 = ({ size: e = "large", variant: t = "primary" }) =>
    D("div", {
      className: ft(
        "flex items-center justify-center",
        { "h-[24px] w-[24px]": e === "large" },
        { "h-[20px] w-[20px]": e === "medium" },
        { "h-[16px] w-[16px]": e === "small" },
      ),
      children: D("div", {
        className: "flex items-center justify-center relative w-full h-full",
        children: D("div", {
          className: ft(
            "animate-ring border-2 h-4/5 w-4/5 rounded-circle border-transparent",
            { "border-t-grey-0": t === "primary" },
            { "border-t-violet-60": t === "secondary" },
          ),
        }),
      }),
    });
const ek = E.lazy(() =>
    xi(
      () => import("./404-c3663b9c.js"),
      [
        "assets/404-c3663b9c.js",
        "assets/index-5cffe34f.js",
        "assets/layout-68817c62.js",
        "assets/use-notification-246217ea.js",
        "assets/index-1a59a41d.js",
        "assets/error-messages-d2d0bb30.js",
        "assets/index.esm-69cd9074.js",
      ],
    ),
  );
const tk = E.lazy(() =>
    xi(
      () => import("./a-2203a1fa.js").then((e) => e.o),
      [
        "assets/a-2203a1fa.js",
        "assets/layout-68817c62.js",
        "assets/use-notification-246217ea.js",
        "assets/index-1a59a41d.js",
        "assets/error-messages-d2d0bb30.js",
        "assets/index.esm-69cd9074.js",
        "assets/index-5cffe34f.js",
        "assets/index-332a460f.js",
        "assets/a-fe9d2487.css",
      ],
    ),
  );
const rk = E.lazy(() => xi(() => import("./index-f13797e1.js"), ["assets/index-f13797e1.js", "assets/index-5cffe34f.js"]));
const nk = E.lazy(() =>
    xi(
      () => import("./invite-51e37a96.js"),
      [
        "assets/invite-51e37a96.js",
        "assets/index.esm-69cd9074.js",
        "assets/index.modern-947f1790.js",
        "assets/login-layout-963f7953.js",
        "assets/index-332a460f.js",
        "assets/index-5cffe34f.js",
        "assets/use-notification-246217ea.js",
        "assets/index-1a59a41d.js",
        "assets/error-messages-d2d0bb30.js",
      ],
    ),
  );
const ik = E.lazy(() =>
    xi(
      () => import("./login-cec2d16a.js"),
      [
        "assets/login-cec2d16a.js",
        "assets/index.esm-69cd9074.js",
        "assets/login-layout-963f7953.js",
        "assets/index-332a460f.js",
        "assets/index-1a59a41d.js",
        "assets/index-5cffe34f.js",
      ],
    ),
  );
const sk = E.lazy(() =>
    xi(
      () => import("./reset-password-293c92c3.js"),
      [
        "assets/reset-password-293c92c3.js",
        "assets/index.esm-69cd9074.js",
        "assets/index.modern-947f1790.js",
        "assets/login-layout-963f7953.js",
        "assets/index-332a460f.js",
        "assets/index-5cffe34f.js",
        "assets/error-messages-d2d0bb30.js",
      ],
    ),
  );
const ok = Vb(
    _a(
      je(vn, {
        children: [
          D(Zr, { path: "/", element: D(rk, {}) }),
          D(Zr, { path: "a/*", element: D(tk, {}) }),
          D(Zr, { path: "invite", element: D(nk, {}) }),
          D(Zr, { path: "login", element: D(ik, {}) }),
          D(Zr, { path: "reset-password", element: D(sk, {}) }),
          D(Zr, { path: "*", element: D(ek, {}) }),
        ],
      }),
    ),
  );
const ak = () =>
    D("div", {
      className: "flex w-full h-screen justify-center items-center bg-grey-5 text-grey-90",
      children: D(g0, { variant: "secondary" }),
    });
const lk = () => D(E.Suspense, { fallback: D(ak, {}), children: D(Ub, { router: ok }) });
const uk = {
    featureToggleList: {},
    isFeatureEnabled: function (e) {
      return !!this.featureToggleList[e];
    },
  };
const S0 = Re.createContext(uk);
const ck = ({ children: e }) => {
    const { isLoggedIn: t } = E.useContext(Zg);
    const [r, n] = E.useState([]);
    const { store: i, isFetching: s } = nx();
    E.useEffect(() => {
      var l;
      s || !i || !t || !((l = i.feature_flags) != null && l.length) || n(i.feature_flags);
    }, [s, i, t]);
    const o = r.reduce((l, u) => ({ ...l, [u.key]: u.value }), {});
    const a = (l) => !!o[l];
    return D(S0.Provider, { value: { isFeatureEnabled: a, featureToggleList: o }, children: e });
  };
const vL = () => {
    const e = E.useContext(S0);
    if (!e) throw new Error("useFeatureFlag must be used within a FeatureFlagProvider");
    return e;
  };
const Xc = Re.forwardRef(({ variant: e = "primary", size: t = "large", loading: r = !1, children: n, ...i }, s) => {
    const o = (u) => {
        !r && i.onClick && i.onClick(u);
      };
    const a = ft({
        ["btn-primary"]: e === "primary",
        ["btn-secondary"]: e === "secondary",
        ["btn-ghost"]: e === "ghost",
        ["btn-danger"]: e === "danger",
        ["btn-nuclear"]: e === "nuclear",
      });
    const l = ft({ ["btn-large"]: t === "large", ["btn-medium"]: t === "medium", ["btn-small"]: t === "small" });
    return D("button", {
      ...i,
      className: ft("btn", a, l, i.className),
      disabled: i.disabled || r,
      ref: s,
      onClick: o,
      children: r
        ? D(g0, { size: t, variant: "secondary" })
        : E.Children.map(n, (u, c) => D("span", { className: "mr-xsmall last:mr-0", children: u }, c)),
    });
  });
function Ge() {
  return (
    (Ge = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ge.apply(this, arguments)
  );
}
function ii(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function (i) {
    if ((e == null || e(i), r === !1 || !i.defaultPrevented)) return t == null ? void 0 : t(i);
  };
}
function dk(e, t) {
  typeof e === "function" ? e(t) : e != null && (e.current = t);
}
function E0(...e) {
  return (t) => e.forEach((r) => dk(r, t));
}
function Ws(...e) {
  return E.useCallback(E0(...e), e);
}
function fk(e, t = []) {
  let r = [];
  function n(s, o) {
    const a = E.createContext(o);
    const l = r.length;
    r = [...r, o];
    function u(d) {
      const { scope: f, children: v, ...g } = d;
      const m = (f == null ? void 0 : f[e][l]) || a;
      const w = E.useMemo(() => g, Object.values(g));
      return E.createElement(m.Provider, { value: w }, v);
    }
    function c(d, f) {
      const v = (f == null ? void 0 : f[e][l]) || a;
      const g = E.useContext(v);
      if (g) return g;
      if (o !== void 0) return o;
      throw new Error(`\`${d}\` must be used within \`${s}\``);
    }
    return (u.displayName = `${s}Provider`), [u, c];
  }
  const i = () => {
    const s = r.map((o) => E.createContext(o));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || s;
      return E.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return (i.scopeName = e), [n, pk(i, ...t)];
}
function pk(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((i) => ({ useScope: i(), scopeName: i.scopeName }));
    return function (s) {
      const o = n.reduce((a, { useScope: l, scopeName: u }) => {
        const d = l(s)[`__scope${u}`];
        return { ...a, ...d };
      }, {});
      return E.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
    };
  };
  return (r.scopeName = t.scopeName), r;
}
const Yc = globalThis == null ? void 0 : globalThis.document ? E.useLayoutEffect : () => {};
const hk = Qo["useId".toString()] || (() => {});
let mk = 0;
function Tu(e) {
  const [t, r] = E.useState(hk());
  return (
    Yc(() => {
      e || r((n) => n ?? String(mk++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
function Pn(e) {
  const t = E.useRef(e);
  return (
    E.useEffect(() => {
      t.current = e;
    }),
    E.useMemo(
      () => (...r) => {
        var n;
        return (n = t.current) === null || n === void 0 ? void 0 : n.call(t, ...r);
      },
      [],
    )
  );
}
function yk({ prop: e, defaultProp: t, onChange: r = () => {} }) {
  const [n, i] = vk({ defaultProp: t, onChange: r });
  const s = e !== void 0;
  const o = s ? e : n;
  const a = Pn(r);
  const l = E.useCallback(
      (u) => {
        if (s) {
          const d = typeof u === "function" ? u(e) : u;
          d !== e && a(d);
        } else i(u);
      },
      [s, e, i, a],
    );
  return [o, l];
}
function vk({ defaultProp: e, onChange: t }) {
  const r = E.useState(e);
  const [n] = r;
  const i = E.useRef(n);
  const s = Pn(t);
  return (
    E.useEffect(() => {
      i.current !== n && (s(n), (i.current = n));
    }, [n, i, s]),
    r
  );
}
const Rf = E.forwardRef((e, t) => {
  const { children: r, ...n } = e;
  const i = E.Children.toArray(r);
  const s = i.find(Sk);
  if (s) {
    const o = s.props.children;
    const a = i.map((l) =>
        l === s ? (E.Children.count(o) > 1 ? E.Children.only(null) : E.isValidElement(o) ? o.props.children : null) : l,
      );
    return E.createElement(Zc, Ge({}, n, { ref: t }), E.isValidElement(o) ? E.cloneElement(o, void 0, a) : null);
  }
  return E.createElement(Zc, Ge({}, n, { ref: t }), r);
});
Rf.displayName = "Slot";
const Zc = E.forwardRef((e, t) => {
  const { children: r, ...n } = e;
  return E.isValidElement(r)
    ? E.cloneElement(r, { ...Ek(n, r.props), ref: E0(t, r.ref) })
    : E.Children.count(r) > 1
    ? E.Children.only(null)
    : null;
});
Zc.displayName = "SlotClone";
const gk = ({ children: e }) => E.createElement(E.Fragment, null, e);
function Sk(e) {
  return E.isValidElement(e) && e.type === gk;
}
function Ek(e, t) {
  const r = { ...t };
  for (const n in t) {
    const i = e[n];
    const s = t[n];
    /^on[A-Z]/.test(n)
      ? i && s
        ? (r[n] = (...a) => {
            s(...a), i(...a);
          })
        : i && (r[n] = i)
      : n === "style"
      ? (r[n] = { ...i, ...s })
      : n === "className" && (r[n] = [i, s].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
const wk = ["a", "button", "div", "h2", "h3", "img", "label", "li", "nav", "ol", "p", "span", "svg", "ul"];
const bi = wk.reduce((e, t) => {
    const r = E.forwardRef((n, i) => {
      const { asChild: s, ...o } = n;
      const a = s ? Rf : t;
      return (
        E.useEffect(() => {
          window[Symbol.for("radix-ui")] = !0;
        }, []),
        E.createElement(a, Ge({}, o, { ref: i }))
      );
    });
    return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
  }, {});
function Pk(e, t) {
  e && si.flushSync(() => e.dispatchEvent(t));
}
function $k(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Pn(e);
  E.useEffect(() => {
    const n = (i) => {
      i.key === "Escape" && r(i);
    };
    return t.addEventListener("keydown", n), () => t.removeEventListener("keydown", n);
  }, [r, t]);
}
const ed = "dismissableLayer.update";
const Ok = "dismissableLayer.pointerDownOutside";
const Ck = "dismissableLayer.focusOutside";
let Sm;
const Tk = E.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  });
const xk = E.forwardRef((e, t) => {
    var r;
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: o,
        onInteractOutside: a,
        onDismiss: l,
        ...u
      } = e;
    const c = E.useContext(Tk);
    const [d, f] = E.useState(null);
    const v =
        (r = d == null ? void 0 : d.ownerDocument) !== null && r !== void 0
          ? r
          : globalThis == null
          ? void 0
          : globalThis.document;
    const [, g] = E.useState({});
    const m = Ws(t, (O) => f(O));
    const w = Array.from(c.layers);
    const [p] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1);
    const h = w.indexOf(p);
    const y = d ? w.indexOf(d) : -1;
    const S = c.layersWithOutsidePointerEventsDisabled.size > 0;
    const x = y >= h;
    const b = Rk((O) => {
        const j = O.target;
        const M = [...c.branches].some((J) => J.contains(j));
        !x || M || (s == null || s(O), a == null || a(O), O.defaultPrevented || l == null || l());
      }, v);
    const L = bk((O) => {
        const j = O.target;
        [...c.branches].some((J) => J.contains(j)) ||
          (o == null || o(O), a == null || a(O), O.defaultPrevented || l == null || l());
      }, v);
    return (
      $k((O) => {
        y === c.layers.size - 1 && (i == null || i(O), !O.defaultPrevented && l && (O.preventDefault(), l()));
      }, v),
      E.useEffect(() => {
        if (d)
          return (
            n &&
              (c.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Sm = v.body.style.pointerEvents), (v.body.style.pointerEvents = "none")),
              c.layersWithOutsidePointerEventsDisabled.add(d)),
            c.layers.add(d),
            Em(),
            () => {
              n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (v.body.style.pointerEvents = Sm);
            }
          );
      }, [d, v, n, c]),
      E.useEffect(
        () => () => {
          d && (c.layers.delete(d), c.layersWithOutsidePointerEventsDisabled.delete(d), Em());
        },
        [d, c],
      ),
      E.useEffect(() => {
        const O = () => g({});
        return document.addEventListener(ed, O), () => document.removeEventListener(ed, O);
      }, []),
      E.createElement(
        bi.div,
        Ge({}, u, {
          ref: m,
          style: { pointerEvents: S ? (x ? "auto" : "none") : void 0, ...e.style },
          onFocusCapture: ii(e.onFocusCapture, L.onFocusCapture),
          onBlurCapture: ii(e.onBlurCapture, L.onBlurCapture),
          onPointerDownCapture: ii(e.onPointerDownCapture, b.onPointerDownCapture),
        }),
      )
    );
  });
function Rk(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Pn(e);
  const n = E.useRef(!1);
  const i = E.useRef(() => {});
  return (
    E.useEffect(() => {
      const s = (a) => {
          if (a.target && !n.current) {
            let u = function () {
              w0(Ok, r, l, { discrete: !0 });
            };
            const l = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", i.current),
                (i.current = u),
                t.addEventListener("click", i.current, { once: !0 }))
              : u();
          }
          n.current = !1;
        };
      const o = window.setTimeout(() => {
          t.addEventListener("pointerdown", s);
        }, 0);
      return () => {
        window.clearTimeout(o), t.removeEventListener("pointerdown", s), t.removeEventListener("click", i.current);
      };
    }, [t, r]),
    { onPointerDownCapture: () => (n.current = !0) }
  );
}
function bk(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Pn(e);
  const n = E.useRef(!1);
  return (
    E.useEffect(() => {
      const i = (s) => {
        s.target && !n.current && w0(Ck, r, { originalEvent: s }, { discrete: !1 });
      };
      return t.addEventListener("focusin", i), () => t.removeEventListener("focusin", i);
    }, [t, r]),
    { onFocusCapture: () => (n.current = !0), onBlurCapture: () => (n.current = !1) }
  );
}
function Em() {
  const e = new CustomEvent(ed);
  document.dispatchEvent(e);
}
function w0(e, t, r, { discrete: n }) {
  const i = r.originalEvent.target;
  const s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && i.addEventListener(e, t, { once: !0 }), n ? Pk(i, s) : i.dispatchEvent(s);
}
const xu = "focusScope.autoFocusOnMount";
const Ru = "focusScope.autoFocusOnUnmount";
const wm = { bubbles: !1, cancelable: !0 };
const kk = E.forwardRef((e, t) => {
    const { loop: r = !1, trapped: n = !1, onMountAutoFocus: i, onUnmountAutoFocus: s, ...o } = e;
    const [a, l] = E.useState(null);
    const u = Pn(i);
    const c = Pn(s);
    const d = E.useRef(null);
    const f = Ws(t, (m) => l(m));
    const v = E.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    E.useEffect(() => {
      if (n) {
        let m = function (p) {
            if (v.paused || !a) return;
            const h = p.target;
            a.contains(h) ? (d.current = h) : en(d.current, { select: !0 });
          };
        let w = function (p) {
            v.paused || !a || a.contains(p.relatedTarget) || en(d.current, { select: !0 });
          };
        return (
          document.addEventListener("focusin", m),
          document.addEventListener("focusout", w),
          () => {
            document.removeEventListener("focusin", m), document.removeEventListener("focusout", w);
          }
        );
      }
    }, [n, a, v.paused]),
      E.useEffect(() => {
        if (a) {
          $m.add(v);
          const m = document.activeElement;
          if (!a.contains(m)) {
            const p = new CustomEvent(xu, wm);
            a.addEventListener(xu, u),
              a.dispatchEvent(p),
              p.defaultPrevented || (Ak(Fk(P0(a)), { select: !0 }), document.activeElement === m && en(a));
          }
          return () => {
            a.removeEventListener(xu, u),
              setTimeout(() => {
                const p = new CustomEvent(Ru, wm);
                a.addEventListener(Ru, c),
                  a.dispatchEvent(p),
                  p.defaultPrevented || en(m ?? document.body, { select: !0 }),
                  a.removeEventListener(Ru, c),
                  $m.remove(v);
              }, 0);
          };
        }
      }, [a, u, c, v]);
    const g = E.useCallback(
      (m) => {
        if ((!(r || n)) || v.paused) return;
        const w = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey;
        const p = document.activeElement;
        if (w && p) {
          const h = m.currentTarget;
          const [y, S] = _k(h);
          y && S
            ? !m.shiftKey && p === S
              ? (m.preventDefault(), r && en(y, { select: !0 }))
              : m.shiftKey && p === y && (m.preventDefault(), r && en(S, { select: !0 }))
            : p === h && m.preventDefault();
        }
      },
      [r, n, v.paused],
    );
    return E.createElement(bi.div, Ge({ tabIndex: -1 }, o, { ref: f, onKeyDown: g }));
  });
function Ak(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e) if ((en(n, { select: t }), document.activeElement !== r)) return;
}
function _k(e) {
  const t = P0(e);
  const r = Pm(t, e);
  const n = Pm(t.reverse(), e);
  return [r, n];
}
function P0(e) {
  const t = [];
  const r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (n) => {
        const i = n.tagName === "INPUT" && n.type === "hidden";
        return n.disabled || n.hidden || i
          ? NodeFilter.FILTER_SKIP
          : n.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  while (r.nextNode()) t.push(r.currentNode);
  return t;
}
function Pm(e, t) {
  for (const r of e) if (!Dk(r, { upTo: t })) return r;
}
function Dk(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  while (e) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Lk(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function en(e, { select: t = !1 } = {}) {
  if (e?.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && Lk(e) && t && e.select();
  }
}
const $m = Nk();
function Nk() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && (r == null || r.pause()), (e = Om(e, t)), e.unshift(t);
    },
    remove(t) {
      var r;
      (e = Om(e, t)), (r = e[0]) === null || r === void 0 || r.resume();
    },
  };
}
function Om(e, t) {
  const r = [...e];
  const n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function Fk(e) {
  return e.filter((t) => t.tagName !== "A");
}
const $0 = E.forwardRef((e, t) => {
  var r;
  const {
    container: n = globalThis == null || (r = globalThis.document) === null || r === void 0 ? void 0 : r.body,
    ...i
  } = e;
  return n ? gE.createPortal(E.createElement(bi.div, Ge({}, i, { ref: t })), n) : null;
});
function Mk(e, t) {
  return E.useReducer((r, n) => {
    const i = t[r][n];
    return i ?? r;
  }, e);
}
const ll = (e) => {
  const { present: t, children: r } = e;
  const n = Ik(t);
  const i = typeof r === "function" ? r({ present: n.isPresent }) : E.Children.only(r);
  const s = Ws(n.ref, i.ref);
  return typeof r === "function" || n.isPresent ? E.cloneElement(i, { ref: s }) : null;
};
ll.displayName = "Presence";
function Ik(e) {
  const [t, r] = E.useState();
  const n = E.useRef({});
  const i = E.useRef(e);
  const s = E.useRef("none");
  const o = e ? "mounted" : "unmounted";
  const [a, l] = Mk(o, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    E.useEffect(() => {
      const u = wo(n.current);
      s.current = a === "mounted" ? u : "none";
    }, [a]),
    Yc(() => {
      const u = n.current;
      const c = i.current;
      if (c !== e) {
        const f = s.current;
        const v = wo(u);
        e
          ? l("MOUNT")
          : v === "none" || (u == null ? void 0 : u.display) === "none"
          ? l("UNMOUNT")
          : l(c && f !== v ? "ANIMATION_OUT" : "UNMOUNT"),
          (i.current = e);
      }
    }, [e, l]),
    Yc(() => {
      if (t) {
        const u = (d) => {
            const v = wo(n.current).includes(d.animationName);
            d.target === t && v && si.flushSync(() => l("ANIMATION_END"));
          };
        const c = (d) => {
            d.target === t && (s.current = wo(n.current));
          };
        return (
          t.addEventListener("animationstart", c),
          t.addEventListener("animationcancel", u),
          t.addEventListener("animationend", u),
          () => {
            t.removeEventListener("animationstart", c),
              t.removeEventListener("animationcancel", u),
              t.removeEventListener("animationend", u);
          }
        );
      } else l("ANIMATION_END");
    }, [t, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: E.useCallback((u) => {
        u && (n.current = getComputedStyle(u)), r(u);
      }, []),
    }
  );
}
function wo(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let bu = 0;
function qk() {
  E.useEffect(() => {
    var e;
    var t;
    const r = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", (e = r[0]) !== null && e !== void 0 ? e : Cm()),
      document.body.insertAdjacentElement("beforeend", (t = r[1]) !== null && t !== void 0 ? t : Cm()),
      bu++,
      () => {
        bu === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), bu--;
      }
    );
  }, []);
}
function Cm() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none"),
    e
  );
}
var td = function (e, t) {
  return (
    (td =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (r, n) {
          r.__proto__ = n;
        }) ||
      function (r, n) {
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
      }),
    td(e, t)
  );
};
function gL(e, t) {
  if (typeof t !== "function" && t !== null)
    throw new TypeError(`Class extends value ${String(t)} is not a constructor or null`);
  td(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
var Wt = function () {
  return (
    (Wt =
      Object.assign ||
      function (t) {
        for (var r, n = 1, i = arguments.length; n < i; n++) {
          r = arguments[n];
          for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
        }
        return t;
      }),
    Wt.apply(this, arguments)
  );
};
function O0(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}
function SL(e, t, r, n) {
  function i(s) {
    return s instanceof r
      ? s
      : new r(function (o) {
          o(s);
        });
  }
  return new (r || (r = Promise))(function (s, o) {
    function a(c) {
      try {
        u(n.next(c));
      } catch (d) {
        o(d);
      }
    }
    function l(c) {
      try {
        u(n.throw(c));
      } catch (d) {
        o(d);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, l);
    }
    u((n = n.apply(e, t || [])).next());
  });
}
function EL(e, t) {
  var r = {
      label: 0,
      sent: function () {
        if (s[0] & 1) throw s[1];
        return s[1];
      },
      trys: [],
      ops: [],
    };
  var n;
  var i;
  var s;
  var o;
  return (
    (o = { next: a(0), throw: a(1), return: a(2) }),
    typeof Symbol === "function" &&
      (o[Symbol.iterator] = function () {
        return this;
      }),
    o
  );
  function a(u) {
    return function (c) {
      return l([u, c]);
    };
  }
  function l(u) {
    if (n) throw new TypeError("Generator is already executing.");
    while (o && ((o = 0), u[0] && (r = 0)), r)
      try {
        if (
          ((n = 1),
          i &&
            (s = u[0] & 2 ? i.return : u[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) &&
            !(s = s.call(i, u[1])).done)
        )
          return s;
        switch (((i = 0), s && (u = [u[0] & 2, s.value]), u[0])) {
          case 0:
          case 1:
            s = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, (i = u[1]), (u = [0]);
            continue;
          case 7:
            (u = r.ops.pop()), r.trys.pop();
            continue;
          default:
            if (((s = r.trys), !(s = s.length > 0 && s[s.length - 1]) && (u[0] === 6 || u[0] === 2))) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!s || (u[1] > s[0] && u[1] < s[3]))) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < s[1]) {
              (r.label = s[1]), (s = u);
              break;
            }
            if (s && r.label < s[2]) {
              (r.label = s[2]), r.ops.push(u);
              break;
            }
            s[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = t.call(e, r);
      } catch (c) {
        (u = [6, c]), (i = 0);
      } finally {
        n = s = 0;
      }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function Uk(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, s; n < i; n++)
      (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), (s[n] = t[n]));
  return e.concat(s || Array.prototype.slice.call(t));
}
var Ho = "right-scroll-bar-position";
var Wo = "width-before-scroll-bar";
var jk = "with-scroll-bars-hidden";
var Bk = "--removed-body-scroll-bar-size";
function zk(e, t) {
  return typeof e === "function" ? e(t) : e && (e.current = t), e;
}
function Gk(e, t) {
  var r = E.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var i = r.value;
          i !== n && ((r.value = n), r.callback(n, i));
        },
      },
    };
  })[0];
  return (r.callback = t), r.facade;
}
function Hk(e, t) {
  return Gk(t || null, function (r) {
    return e.forEach(function (n) {
      return zk(n, r);
    });
  });
}
function Wk(e) {
  return e;
}
function Qk(e, t) {
  t === void 0 && (t = Wk);
  var r = [];
  var n = !1;
  var i = {
      read: function () {
        if (n)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return r.length ? r[r.length - 1] : e;
      },
      useMedium: function (s) {
        var o = t(s, n);
        return (
          r.push(o),
          function () {
            r = r.filter(function (a) {
              return a !== o;
            });
          }
        );
      },
      assignSyncMedium: function (s) {
        for (n = !0; r.length; ) {
          var o = r;
          (r = []), o.forEach(s);
        }
        r = {
          push: function (a) {
            return s(a);
          },
          filter: function () {
            return r;
          },
        };
      },
      assignMedium: function (s) {
        n = !0;
        var o = [];
        if (r.length) {
          var a = r;
          (r = []), a.forEach(s), (o = r);
        }
        var l = function () {
            var c = o;
            (o = []), c.forEach(s);
          };
        var u = function () {
            return Promise.resolve().then(l);
          };
        u(),
          (r = {
            push: function (c) {
              o.push(c), u();
            },
            filter: function (c) {
              return (o = o.filter(c)), r;
            },
          });
      },
    };
  return i;
}
function Vk(e) {
  e === void 0 && (e = {});
  var t = Qk(null);
  return (t.options = Wt({ async: !0, ssr: !1 }, e)), t;
}
var C0 = function (e) {
  var t = e.sideCar;
  var r = O0(e, ["sideCar"]);
  if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n) throw new Error("Sidecar medium not found");
  return D(n, { ...Wt({}, r) });
};
C0.isSideCarExport = !0;
function Kk(e, t) {
  return e.useMedium(t), C0;
}
var T0 = Vk();
var ku = function () {};
var ul = E.forwardRef(function (e, t) {
    var r = E.useRef(null);
    var n = E.useState({ onScrollCapture: ku, onWheelCapture: ku, onTouchMoveCapture: ku });
    var i = n[0];
    var s = n[1];
    var o = e.forwardProps;
    var a = e.children;
    var l = e.className;
    var u = e.removeScrollBar;
    var c = e.enabled;
    var d = e.shards;
    var f = e.sideCar;
    var v = e.noIsolation;
    var g = e.inert;
    var m = e.allowPinchZoom;
    var w = e.as;
    var p = w === void 0 ? "div" : w;
    var h = O0(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
      ]);
    var y = f;
    var S = Hk([r, t]);
    var x = Wt(Wt({}, h), i);
    return je(vn, {
      children: [
        c &&
          D(y, {
            sideCar: T0,
            removeScrollBar: u,
            shards: d,
            noIsolation: v,
            inert: g,
            setCallbacks: s,
            allowPinchZoom: !!m,
            lockRef: r,
          }),
        o
          ? E.cloneElement(E.Children.only(a), Wt(Wt({}, x), { ref: S }))
          : D(p, { ...Wt({}, x, { className: l, ref: S }), children: a }),
      ],
    });
  });
ul.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
ul.classNames = { fullWidth: Wo, zeroRight: Ho };
var Jk = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function Xk() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Jk();
  return t && e.setAttribute("nonce", t), e;
}
function Yk(e, t) {
  e.styleSheet ? (e.styleSheet.cssText = t) : e.appendChild(document.createTextNode(t));
}
function Zk(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var eA = function () {
    var e = 0;
    var t = null;
    return {
      add: function (r) {
        e === 0 && (t = Xk()) && (Yk(t, r), Zk(t)), e++;
      },
      remove: function () {
        e--, !e && t && (t.parentNode?.removeChild(t), (t = null));
      },
    };
  };
var tA = function () {
    var e = eA();
    return function (t, r) {
      E.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && r],
      );
    };
  };
var x0 = function () {
    var e = tA();
    var t = function (r) {
        var n = r.styles;
        var i = r.dynamic;
        return e(n, i), null;
      };
    return t;
  };
var rA = { left: 0, top: 0, right: 0, gap: 0 };
var Au = function (e) {
    return parseInt(e || "", 10) || 0;
  };
var nA = function (e) {
    var t = window.getComputedStyle(document.body);
    var r = t[e === "padding" ? "paddingLeft" : "marginLeft"];
    var n = t[e === "padding" ? "paddingTop" : "marginTop"];
    var i = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Au(r), Au(n), Au(i)];
  };
var iA = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return rA;
    var t = nA(e);
    var r = document.documentElement.clientWidth;
    var n = window.innerWidth;
    return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, n - r + t[2] - t[0]) };
  };
var sA = x0();
var oA = function (e, t, r, n) {
    var i = e.left;
    var s = e.top;
    var o = e.right;
    var a = e.gap;
    return (
      r === void 0 && (r = "margin"),
      `
  .`
        .concat(
          jk,
          ` {
   overflow: hidden `,
        )
        .concat(
          n,
          `;
   padding-right: `,
        )
        .concat(a, "px ")
        .concat(
          n,
          `;
  }
  body {
    overflow: hidden `,
        )
        .concat(
          n,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            t && "position: relative ".concat(n, ";"),
            r === "margin" &&
              `
    padding-left: `
                .concat(
                  i,
                  `px;
    padding-top: `,
                )
                .concat(
                  s,
                  `px;
    padding-right: `,
                )
                .concat(
                  o,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(a, "px ")
                .concat(
                  n,
                  `;
    `,
                ),
            r === "padding" && "padding-right: ".concat(a, "px ").concat(n, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          Ho,
          ` {
    right: `,
        )
        .concat(a, "px ")
        .concat(
          n,
          `;
  }
  
  .`,
        )
        .concat(
          Wo,
          ` {
    margin-right: `,
        )
        .concat(a, "px ")
        .concat(
          n,
          `;
  }
  
  .`,
        )
        .concat(Ho, " .")
        .concat(
          Ho,
          ` {
    right: 0 `,
        )
        .concat(
          n,
          `;
  }
  
  .`,
        )
        .concat(Wo, " .")
        .concat(
          Wo,
          ` {
    margin-right: 0 `,
        )
        .concat(
          n,
          `;
  }
  
  body {
    `,
        )
        .concat(Bk, ": ")
        .concat(
          a,
          `px;
  }
`,
        )
    );
  };
var aA = function (e) {
    var t = e.noRelative;
    var r = e.noImportant;
    var n = e.gapMode;
    var i = n === void 0 ? "margin" : n;
    var s = E.useMemo(
        function () {
          return iA(i);
        },
        [i],
      );
    return D(sA, { styles: oA(s, !t, i, r ? "" : "!important") });
  };
var rd = !1;
if (typeof window < "u")
  try {
    var Po = Object.defineProperty({}, "passive", {
      get: function () {
        return (rd = !0), !0;
      },
    });
    window.addEventListener("test", Po, Po), window.removeEventListener("test", Po, Po);
  } catch {
    rd = !1;
  }
var _n = rd ? { passive: !1 } : !1;
var lA = function (e) {
    return e.tagName === "TEXTAREA";
  };
var R0 = function (e, t) {
    var r = window.getComputedStyle(e);
    return r[t] !== "hidden" && !(r.overflowY === r.overflowX && !lA(e) && r[t] === "visible");
  };
var uA = function (e) {
    return R0(e, "overflowY");
  };
var cA = function (e) {
    return R0(e, "overflowX");
  };
var Tm = function (e, t) {
    var r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var n = b0(e, r);
      if (n) {
        var i = k0(e, r);
        var s = i[1];
        var o = i[2];
        if (s > o) return !0;
      }
      r = r.parentNode;
    } while (r && r !== document.body);
    return !1;
  };
var dA = function (e) {
    var t = e.scrollTop;
    var r = e.scrollHeight;
    var n = e.clientHeight;
    return [t, r, n];
  };
var fA = function (e) {
    var t = e.scrollLeft;
    var r = e.scrollWidth;
    var n = e.clientWidth;
    return [t, r, n];
  };
var b0 = function (e, t) {
    return e === "v" ? uA(t) : cA(t);
  };
var k0 = function (e, t) {
    return e === "v" ? dA(t) : fA(t);
  };
var pA = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  };
var hA = function (e, t, r, n, i) {
    var s = pA(e, window.getComputedStyle(t).direction);
    var o = s * n;
    var a = r.target;
    var l = t.contains(a);
    var u = !1;
    var c = o > 0;
    var d = 0;
    var f = 0;
    do {
      var v = k0(e, a);
      var g = v[0];
      var m = v[1];
      var w = v[2];
      var p = m - w - s * g;
      (g || p) && b0(e, a) && ((d += p), (f += g)), (a = a.parentNode);
    } while ((!l && a !== document.body) || (l && (t.contains(a) || t === a)));
    return ((c && ((i && d === 0) || (!i && o > d))) || (!c && ((i && f === 0) || (!i && -o > f)))) && (u = !0), u;
  };
var $o = function (e) {
    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
  };
var xm = function (e) {
    return [e.deltaX, e.deltaY];
  };
var Rm = function (e) {
    return e && "current" in e ? e.current : e;
  };
var mA = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  };
var yA = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      );
  };
var vA = 0;
var Dn = [];
function gA(e) {
  var t = E.useRef([]);
  var r = E.useRef([0, 0]);
  var n = E.useRef();
  var i = E.useState(vA++)[0];
  var s = E.useState(function () {
      return x0();
    })[0];
  var o = E.useRef(e);
  E.useEffect(
    function () {
      o.current = e;
    },
    [e],
  ),
    E.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(i));
          var m = Uk([e.lockRef.current], (e.shards || []).map(Rm), !0).filter(Boolean);
          return (
            m.forEach(function (w) {
              return w.classList.add("allow-interactivity-".concat(i));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(i)),
                m.forEach(function (w) {
                  return w.classList.remove("allow-interactivity-".concat(i));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    );
  var a = E.useCallback(function (m, w) {
      if ("touches" in m && m.touches.length === 2) return !o.current.allowPinchZoom;
      var p = $o(m);
      var h = r.current;
      var y = "deltaX" in m ? m.deltaX : h[0] - p[0];
      var S = "deltaY" in m ? m.deltaY : h[1] - p[1];
      var x;
      var b = m.target;
      var L = Math.abs(y) > Math.abs(S) ? "h" : "v";
      if ("touches" in m && L === "h" && b.type === "range") return !1;
      var O = Tm(L, b);
      if (!O) return !0;
      if ((O ? (x = L) : ((x = L === "v" ? "h" : "v"), (O = Tm(L, b))), !O)) return !1;
      if ((!n.current && "changedTouches" in m && (y || S) && (n.current = x), !x)) return !0;
      var j = n.current || x;
      return hA(j, w, m, j === "h" ? y : S, !0);
    }, []);
  var l = E.useCallback(function (m) {
      var w = m;
      if (!(!Dn.length || Dn[Dn.length - 1] !== s)) {
        var p = "deltaY" in w ? xm(w) : $o(w);
        var h = t.current.filter(function (x) {
            return x.name === w.type && x.target === w.target && mA(x.delta, p);
          })[0];
        if (h?.should) {
          w.cancelable && w.preventDefault();
          return;
        }
        if (!h) {
          var y = (o.current.shards || [])
              .map(Rm)
              .filter(Boolean)
              .filter(function (x) {
                return x.contains(w.target);
              });
          var S = y.length > 0 ? a(w, y[0]) : !o.current.noIsolation;
          S && w.cancelable && w.preventDefault();
        }
      }
    }, []);
  var u = E.useCallback(function (m, w, p, h) {
      var y = { name: m, delta: w, target: p, should: h };
      t.current.push(y),
        setTimeout(function () {
          t.current = t.current.filter(function (S) {
            return S !== y;
          });
        }, 1);
    }, []);
  var c = E.useCallback(function (m) {
      (r.current = $o(m)), (n.current = void 0);
    }, []);
  var d = E.useCallback(function (m) {
      u(m.type, xm(m), m.target, a(m, e.lockRef.current));
    }, []);
  var f = E.useCallback(function (m) {
      u(m.type, $o(m), m.target, a(m, e.lockRef.current));
    }, []);
  E.useEffect(function () {
    return (
      Dn.push(s),
      e.setCallbacks({ onScrollCapture: d, onWheelCapture: d, onTouchMoveCapture: f }),
      document.addEventListener("wheel", l, _n),
      document.addEventListener("touchmove", l, _n),
      document.addEventListener("touchstart", c, _n),
      function () {
        (Dn = Dn.filter(function (m) {
          return m !== s;
        })),
          document.removeEventListener("wheel", l, _n),
          document.removeEventListener("touchmove", l, _n),
          document.removeEventListener("touchstart", c, _n);
      }
    );
  }, []);
  var v = e.removeScrollBar;
  var g = e.inert;
  return je(vn, { children: [g ? D(s, { styles: yA(i) }) : null, v ? D(aA, { gapMode: "margin" }) : null] });
}
const SA = Kk(T0, gA);
var A0 = E.forwardRef(function (e, t) {
  return D(ul, { ...Wt({}, e, { ref: t, sideCar: SA }) });
});
A0.classNames = ul.classNames;
const EA = A0;
var wA = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  };
var Ln = new WeakMap();
var Oo = new WeakMap();
var Co = {};
var _u = 0;
var _0 = function (e) {
    return e && (e.host || _0(e.parentNode));
  };
var PA = function (e, t) {
    return t
      .map(function (r) {
        if (e.contains(r)) return r;
        var n = _0(r);
        return n && e.contains(n)
          ? n
          : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
      })
      .filter(function (r) {
        return Boolean(r);
      });
  };
var $A = function (e, t, r, n) {
    var i = PA(t, Array.isArray(e) ? e : [e]);
    Co[r] || (Co[r] = new WeakMap());
    var s = Co[r];
    var o = [];
    var a = new Set();
    var l = new Set(i);
    var u = function (d) {
        !d || a.has(d) || (a.add(d), u(d.parentNode));
      };
    i.forEach(u);
    var c = function (d) {
      !d ||
        l.has(d) ||
        Array.prototype.forEach.call(d.children, function (f) {
          if (a.has(f)) c(f);
          else {
            var v = f.getAttribute(n);
            var g = v !== null && v !== "false";
            var m = (Ln.get(f) || 0) + 1;
            var w = (s.get(f) || 0) + 1;
            Ln.set(f, m),
              s.set(f, w),
              o.push(f),
              m === 1 && g && Oo.set(f, !0),
              w === 1 && f.setAttribute(r, "true"),
              g || f.setAttribute(n, "true");
          }
        });
    };
    return (
      c(t),
      a.clear(),
      _u++,
      function () {
        o.forEach(function (d) {
          var f = Ln.get(d) - 1;
          var v = s.get(d) - 1;
          Ln.set(d, f), s.set(d, v), f || (Oo.has(d) || d.removeAttribute(n), Oo.delete(d)), v || d.removeAttribute(r);
        }),
          _u--,
          _u || ((Ln = new WeakMap()), (Ln = new WeakMap()), (Oo = new WeakMap()), (Co = {}));
      }
    );
  };
var OA = function (e, t, r) {
    r === void 0 && (r = "data-aria-hidden");
    var n = Array.from(Array.isArray(e) ? e : [e]);
    var i = t || wA(e);
    return i
      ? (n.push.apply(n, Array.from(i.querySelectorAll("[aria-live]"))), $A(n, i, r, "aria-hidden"))
      : function () {
          return null;
        };
  };
const D0 = "Dialog";
const [L0, wL] = fk(D0);
const [CA, Sr] = L0(D0);
const TA = (e) => {
    const { __scopeDialog: t, children: r, open: n, defaultOpen: i, onOpenChange: s, modal: o = !0 } = e;
    const a = E.useRef(null);
    const l = E.useRef(null);
    const [u = !1, c] = yk({ prop: n, defaultProp: i, onChange: s });
    return E.createElement(
      CA,
      {
        scope: t,
        triggerRef: a,
        contentRef: l,
        contentId: Tu(),
        titleId: Tu(),
        descriptionId: Tu(),
        open: u,
        onOpenChange: c,
        onOpenToggle: E.useCallback(() => c((d) => !d), [c]),
        modal: o,
      },
      r,
    );
  };
const N0 = "DialogPortal";
const [xA, F0] = L0(N0, { forceMount: void 0 });
const RA = (e) => {
    const { __scopeDialog: t, forceMount: r, children: n, container: i } = e;
    const s = Sr(N0, t);
    return E.createElement(
      xA,
      { scope: t, forceMount: r },
      E.Children.map(n, (o) =>
        E.createElement(ll, { present: r || s.open }, E.createElement($0, { asChild: !0, container: i }, o)),
      ),
    );
  };
const nd = "DialogOverlay";
const bA = E.forwardRef((e, t) => {
    const r = F0(nd, e.__scopeDialog);
    const { forceMount: n = r.forceMount, ...i } = e;
    const s = Sr(nd, e.__scopeDialog);
    return s.modal ? E.createElement(ll, { present: n || s.open }, E.createElement(kA, Ge({}, i, { ref: t }))) : null;
  });
const kA = E.forwardRef((e, t) => {
    const { __scopeDialog: r, ...n } = e;
    const i = Sr(nd, r);
    return E.createElement(
      EA,
      { as: Rf, allowPinchZoom: !0, shards: [i.contentRef] },
      E.createElement(
        bi.div,
        Ge({ "data-state": I0(i.open) }, n, { ref: t, style: { pointerEvents: "auto", ...n.style } }),
      ),
    );
  });
const Ds = "DialogContent";
const AA = E.forwardRef((e, t) => {
    const r = F0(Ds, e.__scopeDialog);
    const { forceMount: n = r.forceMount, ...i } = e;
    const s = Sr(Ds, e.__scopeDialog);
    return E.createElement(
      ll,
      { present: n || s.open },
      s.modal ? E.createElement(_A, Ge({}, i, { ref: t })) : E.createElement(DA, Ge({}, i, { ref: t })),
    );
  });
const _A = E.forwardRef((e, t) => {
    const r = Sr(Ds, e.__scopeDialog);
    const n = E.useRef(null);
    const i = Ws(t, r.contentRef, n);
    return (
      E.useEffect(() => {
        const s = n.current;
        if (s) return OA(s);
      }, []),
      E.createElement(
        M0,
        Ge({}, e, {
          ref: i,
          trapFocus: r.open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: ii(e.onCloseAutoFocus, (s) => {
            var o;
            s.preventDefault(), (o = r.triggerRef.current) === null || o === void 0 || o.focus();
          }),
          onPointerDownOutside: ii(e.onPointerDownOutside, (s) => {
            const o = s.detail.originalEvent;
            const a = o.button === 0 && o.ctrlKey === !0;
            (o.button === 2 || a) && s.preventDefault();
          }),
          onFocusOutside: ii(e.onFocusOutside, (s) => s.preventDefault()),
        }),
      )
    );
  });
const DA = E.forwardRef((e, t) => {
    const r = Sr(Ds, e.__scopeDialog);
    const n = E.useRef(!1);
    return E.createElement(
      M0,
      Ge({}, e, {
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          var s;
          if (((s = e.onCloseAutoFocus) === null || s === void 0 || s.call(e, i), !i.defaultPrevented)) {
            var o;
            n.current || (o = r.triggerRef.current) === null || o === void 0 || o.focus(), i.preventDefault();
          }
          n.current = !1;
        },
        onInteractOutside: (i) => {
          var s;
          var o;
          (s = e.onInteractOutside) === null || s === void 0 || s.call(e, i), i.defaultPrevented || (n.current = !0);
          const a = i.target;
          ((o = r.triggerRef.current) === null || o === void 0 ? void 0 : o.contains(a)) && i.preventDefault();
        },
      }),
    );
  });
const M0 = E.forwardRef((e, t) => {
    const { __scopeDialog: r, trapFocus: n, onOpenAutoFocus: i, onCloseAutoFocus: s, ...o } = e;
    const a = Sr(Ds, r);
    const l = E.useRef(null);
    const u = Ws(t, l);
    return (
      qk(),
      E.createElement(
        E.Fragment,
        null,
        E.createElement(
          kk,
          { asChild: !0, loop: !0, trapped: n, onMountAutoFocus: i, onUnmountAutoFocus: s },
          E.createElement(
            xk,
            Ge(
              {
                role: "dialog",
                id: a.contentId,
                "aria-describedby": a.descriptionId,
                "aria-labelledby": a.titleId,
                "data-state": I0(a.open),
              },
              o,
              { ref: u, onDismiss: () => a.onOpenChange(!1) },
            ),
          ),
        ),
        !1,
      )
    );
  });
const LA = "DialogTitle";
const NA = E.forwardRef((e, t) => {
    const { __scopeDialog: r, ...n } = e;
    const i = Sr(LA, r);
    return E.createElement(bi.h2, Ge({ id: i.titleId }, n, { ref: t }));
  });
const FA = "DialogDescription";
const MA = E.forwardRef((e, t) => {
    const { __scopeDialog: r, ...n } = e;
    const i = Sr(FA, r);
    return E.createElement(bi.p, Ge({ id: i.descriptionId }, n, { ref: t }));
  });
function I0(e) {
  return e ? "open" : "closed";
}
const IA = TA;
const PL = RA;
const qA = bA;
const UA = AA;
const $L = NA;
const OL = MA;
const q0 = () => {
    const [e, t] = E.useState({ height: window.innerHeight, width: window.innerWidth });
    return (
      E.useEffect(() => {
        const r = () => {
          t({ height: window.innerHeight, width: window.innerWidth });
        };
        return (
          window.addEventListener("resize", r),
          () => {
            window.removeEventListener("resize", r);
          }
        );
      }, []),
      e
    );
  };
const jA = ({ size: e = "20", color: t = "currentColor", ...r }) =>
    je("svg", {
      width: e,
      height: e,
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...r,
      children: [
        D("path", { d: "M15 5L5 15", stroke: t, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        D("path", { d: "M5 5L15 15", stroke: t, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
      ],
    });
const cl = Re.createContext({ portalRef: void 0, isLargeModal: !0 });
const BA = ({ children: e }) =>
    D(qA, {
      className: "fixed bg-grey-90/40 z-50 grid top-0 left-0 right-0 bottom-0 place-items-center overflow-y-auto",
      children: e,
    });
const zA = ({ children: e }) => {
    const { height: t } = q0();
    const r = { maxHeight: t - 64 };
    return D(UA, { style: r, className: "bg-grey-0 min-w-modal rounded-rounded overflow-x-hidden", children: e });
  };
const wt = ({ open: e = !0, handleClose: t, isLargeModal: r = !0, children: n }) => {
    const i = Re.useRef(null);
    return D(IA, {
      open: e,
      onOpenChange: t,
      children: D($0, {
        ref: i,
        children: D(cl.Provider, {
          value: { portalRef: i, isLargeModal: r },
          children: D(BA, { children: D(zA, { children: n }) }),
        }),
      }),
    });
  };
wt.Body = ({ children: e, className: t, style: r }) => (
  Re.useContext(cl),
  D("div", {
    style: r,
    className: ft("inter-base-regular h-full", t),
    onClick: (n) => n.stopPropagation(),
    children: e,
  })
);
wt.Content = ({ children: e, className: t }) => {
  const { isLargeModal: r } = Re.useContext(cl);
  const { height: n } = q0();
  const i = { maxHeight: n - 90 - 141 };
  return D("div", {
    style: i,
    className: ft("px-7 pt-5 overflow-y-auto", { ["w-largeModal pb-7"]: r, ["pb-5"]: !r }, t),
    children: e,
  });
};
wt.Header = ({ handleClose: e = void 0, children: t }) =>
  je("div", {
    className: "pl-7 pt-3.5 pr-3.5 flex flex-col w-full",
    onClick: (r) => r.stopPropagation(),
    children: [
      D("div", {
        className: "pb-1 flex w-full justify-end",
        children:
          e && D("button", { onClick: e, className: "text-grey-50 cursor-pointer", children: D(jA, { size: 20 }) }),
      }),
      t,
    ],
  });
wt.Footer = ({ children: e, className: t }) => {
  const { isLargeModal: r } = Re.useContext(cl);
  return D("div", {
    onClick: (n) => n.stopPropagation(),
    className: ft("px-7 bottom-0 pb-5 flex w-full", { "border-t border-grey-20 pt-4": r }, t),
    children: e,
  });
};
const GA = ({ size: e = "20", color: t = "currentColor", ...r }) =>
    je("svg", {
      width: e,
      height: e,
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...r,
      children: [
        D("path", { d: "M3.75 10H16.875", stroke: t, strokeWidth: "1.5", strokeLinecap: "round" }),
        D("path", {
          d: "M8.125 5L3.125 10L8.125 15",
          stroke: t,
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      ],
    });
const U0 = { screens: [], push: (e) => {}, pop: () => {}, reset: () => {} };
const j0 = Re.createContext(U0);
const HA = (e, t) => {
    switch (t.type) {
      case 0:
        return { ...e, screens: [...e.screens, t.payload] };
      case 1:
        return { ...e, screens: e.screens.slice(0, -1) };
      case 2:
        return { ...e, screens: [] };
    }
  };
const WA = ({ children: e }) => {
    const [t, r] = E.useReducer(HA, U0);
    return D(j0.Provider, {
      value: {
        ...t,
        push: (n) => {
          r({ type: 0, payload: n });
        },
        pop: () => {
          r({ type: 1 });
        },
        reset: () => {
          r({ type: 2 });
        },
      },
      children: e,
    });
  };
const QA = ({ context: e, children: t, handleClose: r, open: n, isLargeModal: i = !0 }) => {
    const s = () => {
        e.reset(), r();
      };
    const o = e.screens[e.screens.length - 1];
    return je(wt, {
      open: n,
      isLargeModal: i,
      handleClose: s,
      children: [
        D(wt.Body, {
          className: ft("transition-transform translate-x-full flex flex-col justify-between duration-200", {
            "translate-x-0": typeof o < "u",
          }),
          children: o
            ? je(vn, {
                children: [
                  D(wt.Header, {
                    handleClose: s,
                    children: je("div", {
                      className: "flex items-center",
                      children: [
                        D(Xc, {
                          variant: "ghost",
                          size: "small",
                          className: "text-grey-50 w-8 h-8",
                          onClick: o.onBack,
                          children: D(GA, { size: 20 }),
                        }),
                        je("div", {
                          className: "flex items-center gap-x-2xsmall",
                          children: [
                            D("h2", { className: "inter-xlarge-semibold ml-5", children: o.title }),
                            o.subtitle &&
                              je("span", {
                                className: "inter-xlarge-regular text-grey-50",
                                children: ["(", o.subtitle, ")"],
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  o.view,
                ],
              })
            : D(vn, {}),
        }),
        D("div", {
          className: ft("transition-transform duration-200", { "-translate-x-full": typeof o < "u" }),
          children: D("div", {
            className: ft("transition-display", { "hidden opacity-0 delay-500": typeof o < "u" }),
            children: t,
          }),
        }),
      ],
    });
  };
const CL = () => {
    const e = E.useContext(j0);
    if (e === null) throw new Error("useLayeredModal must be used within a LayeredModalProvider");
    return e;
  };
const B0 = {
    currentStep: 0,
    nextStepEnabled: !0,
    enableNextPage: () => {},
    disableNextPage: () => {},
    goToNextPage: () => {},
    goToPreviousPage: () => {},
    submit: () => {},
    reset: () => {},
    setPage: (e) => {},
  };
const VA = Re.createContext(B0);
const KA = (e, t) => {
    switch (t.type) {
      case 0:
        return { ...e, nextStepEnabled: !0 };
      case 1:
        return { ...e, nextStepEnabled: !1 };
      case 2:
        return { ...e, currentStep: e.currentStep + 1 };
      case 3:
        return { ...e, currentStep: Math.max(0, e.currentStep - 1) };
      case 4:
        return { ...e, currentStep: t.payload > 0 ? t.payload : e.currentStep };
      case 5:
        return { ...e };
      case 6:
        return { ...e, currentStep: 0, nextStepEnabled: !0 };
    }
  };
const JA = ({ children: e }) => {
    const [t, r] = E.useReducer(KA, B0);
    return D(VA.Provider, {
      value: {
        ...t,
        enableNextPage: () => {
          r({ type: 0 });
        },
        disableNextPage: () => {
          r({ type: 1 });
        },
        goToNextPage: () => {
          r({ type: 2 });
        },
        goToPreviousPage: () => {
          r({ type: 3 });
        },
        submit: () => {
          r({ type: 5 });
        },
        setPage: (n) => {
          r({ type: 4, payload: n });
        },
        reset: () => {
          r({ type: 6 });
        },
      },
      children: e,
    });
  };
const TL = ({
    context: e,
    steps: t,
    layeredContext: r,
    title: n,
    onSubmit: i,
    lastScreenIsSummary: s = !1,
    handleClose: o,
    isLargeModal: a = !0,
  }) => {
    const l = () => {
        e.reset(), o();
      };
    const u = () => {
        i();
      };
    return je(XA, {
      layeredContext: r,
      isLargeModal: a,
      handleClose: l,
      children: [
        je(wt.Body, {
          className: ft("transition-transform flex flex-col justify-between duration-100 max-h-full"),
          children: [
            D(wt.Header, {
              handleClose: l,
              children: je("div", {
                className: "flex flex-col",
                children: [
                  D("h2", { className: "inter-xlarge-semibold", children: n }),
                  !s ||
                    (s &&
                      e.currentStep !== t.length - 1 &&
                      je("div", {
                        className: "flex items-center",
                        children: [
                          D("span", {
                            className: "text-grey-50 inter-small-regular w-[70px] mr-4",
                            children: `Step ${e.currentStep + 1} of ${t.length}`,
                          }),
                          t.map((c, d) =>
                            D(
                              "span",
                              {
                                className: ft(
                                  "w-2 h-2 rounded-full mr-3",
                                  { "bg-grey-20": d > e.currentStep, "bg-violet-60": e.currentStep >= d },
                                  { "outline-4 outline outline-violet-20": e.currentStep === d },
                                ),
                              },
                              d,
                            ),
                          ),
                        ],
                      })),
                ],
              }),
            }),
            D(wt.Content, { children: t[e.currentStep] }),
          ],
        }),
        D(wt.Footer, {
          children: je("div", {
            className: "flex justify-end w-full gap-x-xsmall",
            children: [
              D(Xc, {
                variant: "ghost",
                size: "small",
                disabled: e.currentStep === 0,
                onClick: () => e.goToPreviousPage(),
                className: "w-[112px]",
                children: "Back",
              }),
              D(Xc, {
                variant: "primary",
                size: "small",
                disabled: !e.nextStepEnabled,
                onClick: () => (e.currentStep === t.length - 1 ? u() : e.goToNextPage()),
                className: "w-[112px]",
                children: e.currentStep === t.length - 1 ? "Submit" : "Next",
              }),
            ],
          }),
        }),
      ],
    });
  };
const XA = ({ layeredContext: e, handleClose: t, isLargeModal: r = !0, children: n }) =>
    e
      ? D(QA, { context: e, handleClose: t, isLargeModal: r, children: n })
      : D(wt, { handleClose: t, isLargeModal: r, children: n });
const YA = ({ children: e }) =>
    D(CT, {
      baseUrl: Jg,
      queryClientProviderProps: { client: Yg },
      children: D(CR, {
        children: D(PR, {
          children: D(ck, { children: D(RR, { children: D(JA, { children: D(WA, { children: e }) }) }) }),
        }),
      }),
    });
const ZA = Fv(document.getElementById("root"));
ZA.render(D(Re.StrictMode, { children: D(YA, { children: D(lk, {}) }) }));
export {
  fk as $,
  Zg as A,
  Xc as B,
  Y_ as C,
  t2 as D,
  IA as E,
  vn as F,
  PL as G,
  qA as H,
  UA as I,
  jA as J,
  Ri as K,
  Yb as L,
  C_ as M,
  mL as N,
  R_ as O,
  lL as P,
  aL as Q,
  Re as R,
  g0 as S,
  T_ as T,
  $L as U,
  k_ as V,
  OL as W,
  gL as X,
  X2 as Y,
  Wt as Z,
  Ge as _,
  D as a,
  tD as a$,
  Uk as a0,
  SL as a1,
  EL as a2,
  O0 as a3,
  xi as a4,
  SR as a5,
  Jg as a6,
  vL as a7,
  H as a8,
  A as a9,
  Qo as aA,
  cl as aB,
  R2 as aC,
  Z_ as aD,
  e2 as aE,
  q0 as aF,
  gE as aG,
  a2 as aH,
  l2 as aI,
  u2 as aJ,
  j0 as aK,
  M_ as aL,
  pD as aM,
  hD as aN,
  QA as aO,
  s2 as aP,
  o2 as aQ,
  r2 as aR,
  i2 as aS,
  c2 as aT,
  $D as aU,
  g2 as aV,
  E2 as aW,
  eD as aX,
  rD as aY,
  iD as aZ,
  nD as a_,
  k as aa,
  $_ as ab,
  uL as ac,
  GA as ad,
  wt as ae,
  U_ as af,
  q_ as ag,
  Eo as ah,
  hL as ai,
  I_ as aj,
  j_ as ak,
  Bb as al,
  Zr as am,
  B as an,
  H_ as ao,
  Q_ as ap,
  V_ as aq,
  G_ as ar,
  W_ as as,
  J_ as at,
  X_ as au,
  K_ as av,
  Fv as aw,
  D2 as ax,
  ZD as ay,
  N_ as az,
  Ws as b,
  J2 as b$,
  v2 as b0,
  S2 as b1,
  Z2 as b2,
  S0 as b3,
  bD as b4,
  OD as b5,
  lD as b6,
  __ as b7,
  A_ as b8,
  jD as b9,
  H2 as bA,
  z2 as bB,
  L2 as bC,
  YD as bD,
  F_ as bE,
  k2 as bF,
  b2 as bG,
  x_ as bH,
  d2 as bI,
  BD as bJ,
  P as bK,
  VA as bL,
  n2 as bM,
  p2 as bN,
  TL as bO,
  f2 as bP,
  y2 as bQ,
  m2 as bR,
  h2 as bS,
  uD as bT,
  cD as bU,
  K2 as bV,
  dD as bW,
  CL as bX,
  sL as bY,
  b_ as bZ,
  fD as b_,
  N2 as ba,
  KD as bb,
  M2 as bc,
  $2 as bd,
  T2 as be,
  _2 as bf,
  XD as bg,
  L_ as bh,
  D_ as bi,
  JD as bj,
  LD as bk,
  DD as bl,
  cL as bm,
  C2 as bn,
  x2 as bo,
  F2 as bp,
  q2 as bq,
  W2 as br,
  Q2 as bs,
  A2 as bt,
  O2 as bu,
  G2 as bv,
  B2 as bw,
  j2 as bx,
  U2 as by,
  I2 as bz,
  e_ as c,
  V2 as c0,
  Y2 as c1,
  ND as c2,
  oD as c3,
  sD as c4,
  aD as c5,
  oL as c6,
  MD as c7,
  FD as c8,
  qD as c9,
  mD as cA,
  ED as cB,
  SD as cC,
  gD as cD,
  wD as cE,
  yD as cF,
  PD as cG,
  vD as cH,
  w2 as cI,
  O_ as cJ,
  pL as cK,
  fL as cL,
  X0 as cM,
  UD as ca,
  ID as cb,
  z_ as cc,
  hf as cd,
  VD as ce,
  B_ as cf,
  dL as cg,
  xD as ch,
  RD as ci,
  WD as cj,
  CD as ck,
  GD as cl,
  HD as cm,
  zD as cn,
  TD as co,
  kD as cp,
  _D as cq,
  AD as cr,
  nL as cs,
  tL as ct,
  rL as cu,
  QD as cv,
  iL as cw,
  eL as cx,
  yL as cy,
  P2 as cz,
  Rf as d,
  si as e,
  Yc as f,
  id as g,
  bi as h,
  Pn as i,
  je as j,
  Tu as k,
  ii as l,
  yk as m,
  ll as n,
  OA as o,
  qk as p,
  kk as q,
  E as r,
  xk as s,
  Pk as t,
  EA as u,
  E0 as v,
  ft as w,
  h0 as x,
  nx as y,
  gk as z,
};
