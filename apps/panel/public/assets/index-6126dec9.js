import { a1 as c, a2 as f, a0 as w, Z as g } from "./index-4c5f9ec7.js";
import {
  l as I,
  g as k,
  u as N,
  i as S,
  C as P,
  a as A,
  b as y,
  c as E,
  m as L,
  p as M,
  P as R,
  e as F,
  f as B,
  h as Q,
  j as W,
} from "./a-2203a1fa.js";
import { i as G } from "./is-plan-event-enabled-a83d33b8.js";
import "./layout-68817c62.js";
import "./use-notification-246217ea.js";
import "./index-1a59a41d.js";
import "./error-messages-d2d0bb30.js";
import "./index.esm-69cd9074.js";
import "./index-5cffe34f.js";
import "./index-332a460f.js";
function z(n) {
  return Object.prototype.toString.call(n).slice(8, -1).toLowerCase() === "object";
}
function j(n) {
  return n.toLowerCase().replace(".", "").replace(/\s+/g, "-");
}
function C(n, t) {
  return t === void 0 && (t = !1), t ? btoa(n).replace(/=/g, "") : void 0;
}
function T(n) {
  return ("Integration" in n ? n.Integration : n).prototype.name;
}
function U(n, t, i) {
  var r;
  var a;
  try {
    var e = (
      (a =
        (r = window == null ? void 0 : window.performance) === null || r === void 0
          ? void 0
          : r.getEntriesByName(n, "resource")) !== null && a !== void 0
        ? a
        : []
    )[0];
    e &&
      t.stats.gauge("legacy_destination_time", Math.round(e.duration), w([i], e.duration < 100 ? ["cached"] : [], !0));
  } catch {}
}
function V(n, t, i) {
  var r;
  if ("Integration" in n) {
    var a = {
      user: function () {
        return i.user();
      },
      addIntegration: function () {},
    };
    n(a), (r = n.Integration);
  } else r = n;
  var e = new r(t);
  return (e.analytics = i), e;
}
function Z(n, t, i, r) {
  return c(this, void 0, void 0, function () {
    var a;
    var e;
    var s;
    var u;
    var o;
    var d;
    return f(this, function (v) {
      switch (v.label) {
        case 0:
          (a = j(t)),
            (e = C(a, r)),
            (s = k()),
            (u = ""
              .concat(s, "/integrations/")
              .concat(e ?? a, "/")
              .concat(i, "/")
              .concat(e ?? a, ".dynamic.js.gz")),
            (v.label = 1);
        case 1:
          return v.trys.push([1, 3,  undefined, 4]), [4, I(u)];
        case 2:
          return v.sent(), U(u, n, t), [3, 4];
        case 3:
          throw ((o = v.sent()), n.stats.gauge("legacy_destination_time", -1, ["plugin:".concat(t), "failed"]), o);
        case 4:
          return (
            (d = window["".concat(a, "Deps")]),
            [
              4,
              Promise.all(
                d.map(function (h) {
                  return I(`${s}${h}.gz`);
                }),
              ),
            ]
          );
        case 5:
          return v.sent(), window["".concat(a, "Loader")](), [2, window["".concat(a, "Integration")]];
      }
    });
  });
}
function H(n, t, i) {
  return c(this, void 0, void 0, function () {
    var r;
    var a;
    var e;
    var s;
    return f(this, function (u) {
      return (
        (r = k()),
        (a = j(n)),
        (e = C(n, i)),
        (s = ""
          .concat(r, "/integrations/")
          .concat(e ?? a, "/")
          .concat(t, "/")
          .concat(e ?? a, ".dynamic.js.gz")),
        [2, N(s)]
      );
    });
  });
}
function J(n) {
  var t;
  var i;
  var r;
  var a;
  return (a =
    (i = (t = n == null ? void 0 : n.versionSettings) === null || t === void 0 ? void 0 : t.override) !== null &&
    i !== void 0
      ? i
      : (r = n == null ? void 0 : n.versionSettings) === null || r === void 0
      ? void 0
      : r.version) !== null && a !== void 0
    ? a
    : "latest";
}
var K = function (n, t) {
    var i;
    var r = t.type;
    var a = t.bundlingStatus;
    var e = t.versionSettings;
    var s =
        a !== "unbundled" &&
        (r === "browser" ||
          ((i = e == null ? void 0 : e.componentTypes) === null || i === void 0 ? void 0 : i.includes("browser")));
    return !n.startsWith("Segment") && n !== "Iterable" && s;
  };
var X = function (n, t) {
    var i = t.All === !1 && t[n] === void 0;
    return t[n] === !1 || i;
  };
function Y(n, t) {
  return c(this, void 0, void 0, function () {
    var i;
    var r = this;
    return f(this, function (a) {
      switch (a.label) {
        case 0:
          return (
            (i = []),
            S()
              ? [2, t]
              : [
                  4,
                  M(
                    function () {
                      return t.length > 0 && Q();
                    },
                    function () {
                      return c(r, void 0, void 0, function () {
                        var e;
                        var s;
                        var u;
                        return f(this, function (o) {
                          switch (o.label) {
                            case 0:
                              return (e = t.pop()), e ? [4, B(e, n)] : [2];
                            case 1:
                              return (s = o.sent()), (u = s instanceof W), u || i.push(e), [2];
                          }
                        });
                      });
                    },
                  ),
                ]
          );
        case 1:
          return (
            a.sent(),
            i.map(function (e) {
              return t.pushWithBackoff(e);
            }),
            [2, t]
          );
      }
    });
  });
}
var $ = (function () {
  function n(t, i, r, a, e) {
    r === void 0 && (r = {}),
      (this.options = {}),
      (this.type = "destination"),
      (this.middleware = []),
      (this._ready = !1),
      (this._initialized = !1),
      (this.flushing = !1),
      (this.name = t),
      (this.version = i),
      (this.settings = g({}, r)),
      (this.disableAutoISOConversion = a.disableAutoISOConversion || !1),
      (this.integrationSource = e),
      this.settings.type && this.settings.type === "browser" && this.settings.type = undefined,
      (this.options = a),
      (this.buffer = a.disableClientPersistence ? new R(4, []) : new F(4, "dest-".concat(t))),
      this.scheduleFlush();
  }
  return (
    (n.prototype.isLoaded = function () {
      return this._ready;
    }),
    (n.prototype.ready = function () {
      var t;
      return (t = this.onReady) !== null && t !== void 0 ? t : Promise.resolve();
    }),
    (n.prototype.load = function (t, i) {
      var r;
      return c(this, void 0, void 0, function () {
        var a;
        var e;
        var s = this;
        return f(this, function (u) {
          switch (u.label) {
            case 0:
              return this._ready || this.onReady !== void 0
                ? [2]
                : (r = this.integrationSource) !== null && r !== void 0
                ? ((e = r), [3, 3])
                : [3, 1];
            case 1:
              return [4, Z(t, this.name, this.version, this.options.obfuscate)];
            case 2:
              (e = u.sent()), (u.label = 3);
            case 3:
              (a = e),
                (this.integration = V(a, this.settings, i)),
                (this.onReady = new Promise(function (o) {
                  var d = function () {
                    (s._ready = !0), o(!0);
                  };
                  s.integration.once("ready", d);
                })),
                (this.onInitialize = new Promise(function (o) {
                  var d = function () {
                    (s._initialized = !0), o(!0);
                  };
                  s.integration.on("initialize", d);
                }));
              try {
                t.stats.increment("analytics_js.integration.invoke", 1, [
                  "method:initialize",
                  "integration_name:".concat(this.name),
                ]),
                  this.integration.initialize();
              } catch (o) {
                throw (
                  (t.stats.increment("analytics_js.integration.invoke.error", 1, [
                    "method:initialize",
                    "integration_name:".concat(this.name),
                  ]),
                  o)
                );
              }
              return [2];
          }
        });
      });
    }),
    (n.prototype.unload = function (t, i) {
      return H(this.name, this.version, this.options.obfuscate);
    }),
    (n.prototype.addMiddleware = function () {
      for (var t, i = [], r = 0; r < arguments.length; r++) i[r] = arguments[r];
      this.middleware = (t = this.middleware).concat.apply(t, i);
    }),
    (n.prototype.shouldBuffer = function (t) {
      return t.event.type !== "page" && (S() || this._ready === !1 || this._initialized === !1);
    }),
    (n.prototype.send = function (t, i, r) {
      var a;
      var e;
      return c(this, void 0, void 0, function () {
        var s;
        var u;
        var o;
        var d;
        var v;
        var h;
        return f(this, function (p) {
          switch (p.label) {
            case 0:
              if (this.shouldBuffer(t)) return this.buffer.push(t), this.scheduleFlush(), [2, t];
              if (
                ((s =
                  (e = (a = this.options) === null || a === void 0 ? void 0 : a.plan) === null || e === void 0
                    ? void 0
                    : e.track),
                (u = t.event.event),
                s && u && this.name !== "Segment.io")
              ) {
                if (((o = s[u]), G(s, o)))
                  t.updateEvent("integrations", g(g({}, t.event.integrations), o == null ? void 0 : o.integrations));
                else
                  return (
                    t.updateEvent("integrations", g(g({}, t.event.integrations), { All: !1, "Segment.io": !0 })),
                    t.cancel(
                      new P({
                        retry: !1,
                        reason: "Event ".concat(u, " disabled for integration ").concat(this.name, " in tracking plan"),
                        type: "Dropped by plan",
                      }),
                    ),
                    [2, t]
                  );
                if (o?.enabled && (o == null ? void 0 : o.integrations[this.name]) === !1)
                  return (
                    t.cancel(
                      new P({
                        retry: !1,
                        reason: "Event ".concat(u, " disabled for integration ").concat(this.name, " in tracking plan"),
                        type: "Dropped by plan",
                      }),
                    ),
                    [2, t]
                  );
              }
              return [4, A(this.name, t.event, this.middleware)];
            case 1:
              if (((d = p.sent()), d === null)) return [2, t];
              (v = new i(d, { traverse: !this.disableAutoISOConversion })),
                t.stats.increment("analytics_js.integration.invoke", 1, [
                  "method:".concat(r),
                  "integration_name:".concat(this.name),
                ]),
                (p.label = 2);
            case 2:
              return (
                p.trys.push([2, 5,  undefined, 6]),
                this.integration ? [4, this.integration.invoke.call(this.integration, r, v)] : [3, 4]
              );
            case 3:
              p.sent(), (p.label = 4);
            case 4:
              return [3, 6];
            case 5:
              throw (
                ((h = p.sent()),
                t.stats.increment("analytics_js.integration.invoke.error", 1, [
                  "method:".concat(r),
                  "integration_name:".concat(this.name),
                ]),
                h)
              );
            case 6:
              return [2, t];
          }
        });
      });
    }),
    (n.prototype.track = function (t) {
      return c(this, void 0, void 0, function () {
        return f(this, function (i) {
          return [2, this.send(t, y.Track, "track")];
        });
      });
    }),
    (n.prototype.page = function (t) {
      var i;
      return c(this, void 0, void 0, function () {
        var r = this;
        return f(this, function (a) {
          return (
            !((i = this.integration) === null || i === void 0) &&
              i._assumesPageview &&
              !this._initialized &&
              this.integration.initialize(),
            [
              2,
              this.onInitialize.then(function () {
                return r.send(t, y.Page, "page");
              }),
            ]
          );
        });
      });
    }),
    (n.prototype.identify = function (t) {
      return c(this, void 0, void 0, function () {
        return f(this, function (i) {
          return [2, this.send(t, y.Identify, "identify")];
        });
      });
    }),
    (n.prototype.alias = function (t) {
      return c(this, void 0, void 0, function () {
        return f(this, function (i) {
          return [2, this.send(t, y.Alias, "alias")];
        });
      });
    }),
    (n.prototype.group = function (t) {
      return c(this, void 0, void 0, function () {
        return f(this, function (i) {
          return [2, this.send(t, y.Group, "group")];
        });
      });
    }),
    (n.prototype.scheduleFlush = function () {
      var t = this;
      this.flushing ||
        setTimeout(function () {
          return c(t, void 0, void 0, function () {
            var i;
            return f(this, function (r) {
              switch (r.label) {
                case 0:
                  return (this.flushing = !0), (i = this), [4, Y(this, this.buffer)];
                case 1:
                  return (i.buffer = r.sent()), (this.flushing = !1), this.buffer.todo > 0 && this.scheduleFlush(), [2];
              }
            });
          });
        }, Math.random() * 5e3);
    }),
    n
  );
})();
function ut(n, t, i, r, a) {
  var e;
  var s;
  if ((t === void 0 && (t = {}), i === void 0 && (i = {}), E())) return [];
  n.plan && ((i = i ?? {}), (i.plan = n.plan));
  var u =
      (s = (e = n.middlewareSettings) === null || e === void 0 ? void 0 : e.routingRules) !== null && s !== void 0
        ? s
        : [];
  var o = n.integrations;
  var d = i.integrations;
  var v = L(n, i ?? {});
  var h =
      a == null
        ? void 0
        : a.reduce(function (l, b) {
            var m;
            return g(g({}, l), ((m = {}), (m[T(b)] = b), m));
          }, {});
  var p = new Set(
      w(
        w(
          [],
          Object.keys(o).filter(function (l) {
            return K(l, o[l]);
          }),
          !0,
        ),
        Object.keys(h || {}).filter(function (l) {
          return z(o[l]) || z(d == null ? void 0 : d[l]);
        }),
        !0,
      ),
    );
  return Array.from(p)
    .filter(function (l) {
      return !X(l, t);
    })
    .map(function (l) {
      var b = o[l];
      var m = J(b);
      var _ = new $(l, m, v[l], i, h == null ? void 0 : h[l]);
      var O = u.filter(function (D) {
          return D.destinationName === l;
        });
      return O.length > 0 && r && _.addMiddleware(r), _;
    });
}
export { $ as LegacyDestination, ut as ajsDestinations };
