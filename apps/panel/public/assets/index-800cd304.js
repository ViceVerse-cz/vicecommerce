import { n as y } from "./a-2203a1fa.js";
import "./index-4c5f9ec7.js";
import "./layout-68817c62.js";
import "./use-notification-246217ea.js";
import "./index-1a59a41d.js";
import "./error-messages-d2d0bb30.js";
import "./index.esm-69cd9074.js";
import "./index-5cffe34f.js";
import "./index-332a460f.js";
function u(a, e) {
  return Object.keys(e).reduce(function (i, t) {
    if (t.startsWith(a)) {
      var r = t.substr(a.length);
      i[r] = e[t];
    }
    return i;
  }, {});
}
function E(a, e) {
  var i = document.createElement("a");
  i.href = e;
  var t = i.search.slice(1);
  var r = t.split("&").reduce(function (n, l) {
      var o = l.split("=");
      var A = o[0];
      var h = o[1];
      return (n[A] = y(h)), n;
    }, {});
  var s = [];
  var _ = r.ajs_uid;
  var p = r.ajs_event;
  var v = r.ajs_aid;
  if (v) {
    var d = Array.isArray(r.ajs_aid) ? r.ajs_aid[0] : r.ajs_aid;
    a.setAnonymousId(d);
  }
  if (_) {
    var j = Array.isArray(r.ajs_uid) ? r.ajs_uid[0] : r.ajs_uid;
    var m = u("ajs_trait_", r);
    s.push(a.identify(j, m));
  }
  if (p) {
    var f = Array.isArray(r.ajs_event) ? r.ajs_event[0] : r.ajs_event;
    var c = u("ajs_prop_", r);
    s.push(a.track(f, c));
  }
  return Promise.all(s);
}
export { E as queryString };
