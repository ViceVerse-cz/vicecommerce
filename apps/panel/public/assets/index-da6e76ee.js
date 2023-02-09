import { a1 as f, a2 as v } from "./index-4c5f9ec7.js";
import { c as b, g as M, l as N } from "./a-2203a1fa.js";
import "./layout-68817c62.js";
import "./use-notification-246217ea.js";
import "./index-1a59a41d.js";
import "./error-messages-d2d0bb30.js";
import "./index.esm-69cd9074.js";
import "./index-5cffe34f.js";
import "./index-332a460f.js";
function L(o, w, h) {
  var i;
  return f(this, void 0, void 0, function () {
    var s;
    var c;
    var l;
    var d;
    var a;
    var g = this;
    return v(this, function (m) {
      switch (m.label) {
        case 0:
          return b()
            ? [2, []]
            : ((s = M()),
              (c = (i = w.enabledMiddleware) !== null && i !== void 0 ? i : {}),
              (l = Object.entries(c)
                .filter(function (r) {
                  r[0];
                  var e = r[1];
                  return e;
                })
                .map(function (r) {
                  var e = r[0];
                  return e;
                })),
              (d = l.map(function (r) {
                return f(g, void 0, void 0, function () {
                  var e;
                  var n;
                  var u;
                  var p;
                  return v(this, function (t) {
                    switch (t.label) {
                      case 0:
                        (e = r.replace("@segment/", "")),
                          (n = e),
                          h && (n = btoa(e).replace(/=/g, "")),
                          (u = "".concat(s, "/middleware/").concat(n, "/latest/").concat(n, ".js.gz")),
                          (t.label = 1);
                      case 1:
                        return t.trys.push([1, 3,  undefined, 4]), [4, N(u)];
                      case 2:
                        return t.sent(), [2, window["".concat(e, "Middleware")]];
                      case 3:
                        return (p = t.sent()), o.log("error", p), o.stats.increment("failed_remote_middleware"), [3, 4];
                      case 4:
                        return [2];
                    }
                  });
                });
              })),
              [4, Promise.all(d)]);
        case 1:
          return (a = m.sent()), (a = a.filter(Boolean)), [2, a];
      }
    });
  });
}
export { L as remoteMiddlewares };
