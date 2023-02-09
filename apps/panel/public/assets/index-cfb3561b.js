import { Z as a } from "./index-4c5f9ec7.js";
import { i as l } from "./is-plan-event-enabled-a83d33b8.js";
function c(r, u) {
  var i;
  var n;
  if (!(r && Object.keys(r))) return {};
  var o = r.integrations
      ? Object.keys(r.integrations).filter(function (e) {
          return r.integrations[e] === !1;
        })
      : [];
  var s = [];
  return (
    ((i = u.remotePlugins) !== null && i !== void 0 ? i : []).forEach(function (e) {
      o.forEach(function (t) {
        (e.name.includes(t) || t.includes(e.name)) && s.push(e.name);
      });
    }),
    ((n = u.remotePlugins) !== null && n !== void 0 ? n : []).reduce(function (e, t) {
      return (
        t.settings.subscriptions &&
          s.includes(t.name) &&
          t.settings.subscriptions.forEach(function (f) {
            return (e["".concat(t.name, " ").concat(f.partnerAction)] = !1);
          }),
        e
      );
    }, {})
  );
}
function m(r, u) {
  function i(n) {
    var o = r;
    var s = n.event.event;
    if (o && s) {
      var e = o[s];
      if (l(o, e)) {
        var t = c(e, u);
        n.updateEvent("integrations", a(a(a({}, n.event.integrations), e == null ? void 0 : e.integrations), t));
      } else return n.updateEvent("integrations", a(a({}, n.event.integrations), { All: !1, "Segment.io": !0 })), n;
    }
    return n;
  }
  return {
    name: "Schema Filter",
    version: "0.1.0",
    isLoaded: function () {
      return !0;
    },
    load: function () {
      return Promise.resolve();
    },
    type: "before",
    page: i,
    alias: i,
    track: i,
    identify: i,
    group: i,
  };
}
export { m as schemaFilter };
