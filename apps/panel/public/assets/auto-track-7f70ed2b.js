import { k as m } from "./a-2203a1fa.js";
import "./index-4c5f9ec7.js";
import "./layout-68817c62.js";
import "./use-notification-246217ea.js";
import "./index-1a59a41d.js";
import "./error-messages-d2d0bb30.js";
import "./index.esm-69cd9074.js";
import "./index-5cffe34f.js";
import "./index-332a460f.js";
function d(t) {
  var r = t;
  return !!(r.ctrlKey || r.shiftKey || r.metaKey || (r.button && r.button === 1));
}
function b(t, r) {
  return !!(t.target === "_blank" && r);
}
function _(t, r, e, i) {
  var f = this;
  var u = [];
  return t
    ? (t instanceof Element ? (u = [t]) : "toArray" in t ? (u = t.toArray()) : (u = t),
      u.forEach(function (n) {
        n.addEventListener(
          "click",
          function (a) {
            var c;
            var o;
            var s = r instanceof Function ? r(n) : r;
            var v = e instanceof Function ? e(n) : e;
            var h =
                n.getAttribute("href") ||
                n.getAttributeNS("http://www.w3.org/1999/xlink", "href") ||
                n.getAttribute("xlink:href") ||
                ((c = n.getElementsByTagName("a")[0]) === null || c === void 0 ? void 0 : c.getAttribute("href"));
            var l = m(f.track(s, v, i ?? {}), (o = f.settings.timeout) !== null && o !== void 0 ? o : 500);
            !(b(n, h) ||d(a) ) &&
              h &&
              (a.preventDefault ? a.preventDefault() : (a.returnValue = !1),
              l
                .catch(console.error)
                .then(function () {
                  window.location.href = h;
                })
                .catch(console.error));
          },
          !1,
        );
      }),
      this)
    : this;
}
function D(t, r, e, i) {
  var f = this;
  if (!t) return this;
  t instanceof HTMLFormElement && (t = [t]);
  var u = t;
  return (
    u.forEach(function (n) {
      if (!(n instanceof Element)) throw new TypeError("Must pass HTMLElement to trackForm/trackSubmit.");
      var a = function (o) {
          var s;
          o.preventDefault ? o.preventDefault() : (o.returnValue = !1);
          var v = r instanceof Function ? r(n) : r;
          var h = e instanceof Function ? e(n) : e;
          var l = m(f.track(v, h, i ?? {}), (s = f.settings.timeout) !== null && s !== void 0 ? s : 500);
          l.catch(console.error)
            .then(function () {
              n.submit();
            })
            .catch(console.error);
        };
      var c = window.jQuery || window.Zepto;
      c ? c(n).submit(a) : n.addEventListener("submit", a, !1);
    }),
    this
  );
}
export { D as form, _ as link };
