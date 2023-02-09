import { r as c, j as k, a as u, w as _, J as F } from "./index-4c5f9ec7.js";
import { C as Z } from "./index-1a59a41d.js";
let B = { data: "" };
let U = (e) =>
    typeof window === "object"
      ? (
          (e ? e.querySelector("#_goober") : window._goober) ||
          Object.assign((e || document.head).appendChild(document.createElement("style")), {
            innerHTML: " ",
            id: "_goober",
          })
        ).firstChild
      : e || B;
let V = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g;
let X = /\/\*[^]*?\*\/| {2}+/g;
let T = /\n+/g;
let x = (e, t) => {
    let r = "";
    let s = "";
    let o = "";
    for (let a in e) {
      let n = e[a];
      a[0] === "@"
        ? a[1] === "i"
          ? (r = `${a} ${n};`)
          : (s += a[1] === "f" ? x(n, a) : `${a}{${x(n, a[1] === "k" ? "" : t)}}`)
        : typeof n === "object"
        ? (s += x(
            n,
            t
              ? t.replace(/([^,])+/g, (i) =>
                  a.replace(/(^:.*)|([^,])+/g, (l) => (/&/.test(l) ? l.replace(/&/g, i) : i ? `${i} ${l}` : l)),
                )
              : a,
          ))
        : n != null &&
          ((a = /^--/.test(a) ? a : a.replace(/[A-Z]/g, "-$&").toLowerCase()),
          (o += x.p ? x.p(a, n) : `${a}:${n};`));
    }
    return r + (t && o ? `${t}{${o}}` : o) + s;
  };
let y = {};
let P = (e) => {
    if (typeof e === "object") {
      let t = "";
      for (let r in e) t += r + P(e[r]);
      return t;
    }
    return e;
  };
let J = (e, t, r, s, o) => {
    let a = P(e);
    let n =
        y[a] ||
        (y[a] = ((l) => {
          let d = 0;
          let p = 11;
          while (d < l.length) p = (101 * p + l.charCodeAt(d++)) >>> 0;
          return `go${p}`;
        })(a));
    if (!y[n]) {
      let l =
        a !== e
          ? e
          : ((d) => {
              let p;
              let h;
              let f = [{}];
              while ((p = V.exec(d.replace(X, ""))))
                p[4]
                  ? f.shift()
                  : p[3]
                  ? ((h = p[3].replace(T, " ").trim()), f.unshift((f[0][h] = f[0][h] || {})))
                  : (f[0][p[1]] = p[2].replace(T, " ").trim());
              return f[0];
            })(e);
      y[n] = x(o ? { [`@keyframes ${n}`]: l } : l, r ? "" : `.${n}`);
    }
    let i = r && y.g ? y.g : null;
    return (
      r && (y.g = y[n]),
      ((l, d, p, h) => {
        h ? (d.data = d.data.replace(h, l)) : d.data.indexOf(l) === -1 && (d.data = p ? l + d.data : d.data + l);
      })(y[n], t, s, i),
      n
    );
  };
let R = (e, t, r) =>
    e.reduce((s, o, a) => {
      let n = t[a];
      if (n?.call) {
        let i = n(r);
        let l = (i?.props?.className) || (/^go/.test(i) && i);
        n = l ? `.${l}` : i && typeof i === "object" ? (i.props ? "" : x(i, "")) : i === !1 ? "" : i;
      }
      return s + o + (n ?? "");
    }, "");
function M(e) {
  let t = this || {};
  let r = e.call ? e(t.p) : e;
  return J(
    r.unshift
      ? r.raw
        ? R(r, [].slice.call(arguments, 1), t.p)
        : r.reduce((s, o) => Object.assign(s, o?.call ? o(t.p) : o), {})
      : r,
    U(t.target),
    t.g,
    t.o,
    t.k,
  );
}
let H;
let A;
let z;
M.bind({ g: 1 });
let b = M.bind({ k: 1 });
function Y(e, t, r, s) {
  (x.p = t), (H = e), (A = r), (z = s);
}
function v(e, t) {
  let r = this || {};
  return function () {
    let s = arguments;
    function o(a, n) {
      let i = Object.assign({}, a);
      let l = i.className || o.className;
      (r.p = Object.assign({ theme: A?.() }, i)),
        (r.o = / *go\d+/.test(l)),
        (i.className = M.apply(r, s) + (l ? ` ${l}` : "")),
        t && (i.ref = n);
      let d = e;
      return e[0] && ((d = i.as || e), i.as = undefined), z && d[0] && z(i), H(d, i);
    }
    return t ? t(o) : o;
  };
}
var q = (e) => typeof e === "function";
var I = (e, t) => (q(e) ? e(t) : e);
var G = (() => {
    let e = 0;
    return () => (++e).toString();
  })();
var S = (() => {
    let e;
    return () => {
      if (e === void 0 && typeof window < "u") {
        let t = matchMedia("(prefers-reduced-motion: reduce)");
        e = !t || t.matches;
      }
      return e;
    };
  })();
var Q = 20;
var N = new Map();
var K = 1e3;
var W = (e) => {
    if (N.has(e)) return;
    let t = setTimeout(() => {
      N.delete(e), w({ type: 4, toastId: e });
    }, K);
    N.set(e, t);
  };
var ee = (e) => {
    let t = N.get(e);
    t && clearTimeout(t);
  };
var D = (e, t) => {
    switch (t.type) {
      case 0:
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, Q) };
      case 1:
        return (
          t.toast.id && ee(t.toast.id),
          { ...e, toasts: e.toasts.map((a) => (a.id === t.toast.id ? { ...a, ...t.toast } : a)) }
        );
      case 2:
        let { toast: r } = t;
        return e.toasts.find((a) => a.id === r.id) ? D(e, { type: 1, toast: r }) : D(e, { type: 0, toast: r });
      case 3:
        let { toastId: s } = t;
        return (
          s
            ? W(s)
            : e.toasts.forEach((a) => {
                W(a.id);
              }),
          { ...e, toasts: e.toasts.map((a) => (a.id === s || s === void 0 ? { ...a, visible: !1 } : a)) }
        );
      case 4:
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((a) => a.id !== t.toastId) };
      case 5:
        return { ...e, pausedAt: t.time };
      case 6:
        let o = t.time - (e.pausedAt || 0);
        return { ...e, pausedAt: void 0, toasts: e.toasts.map((a) => ({ ...a, pauseDuration: a.pauseDuration + o })) };
    }
  };
var L = [];
var $ = { toasts: [], pausedAt: void 0 };
var w = (e) => {
    ($ = D($, e)),
      L.forEach((t) => {
        t($);
      });
  };
var te = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 };
var re = (e = {}) => {
    let [t, r] = c.useState($);
    c.useEffect(
      () => (
        L.push(r),
        () => {
          let o = L.indexOf(r);
          o > -1 && L.splice(o, 1);
        }
      ),
      [t],
    );
    let s = t.toasts.map((o) => {
      var a;
      var n;
      return {
        ...e,
        ...e[o.type],
        ...o,
        duration:
          o.duration ||
          ((a = e[o.type]) == null ? void 0 : a.duration) ||
          (e == null ? void 0 : e.duration) ||
          te[o.type],
        style: { ...e.style, ...((n = e[o.type]) == null ? void 0 : n.style), ...o.style },
      };
    });
    return { ...t, toasts: s };
  };
var ae = (e, t = "blank", r) => ({
    createdAt: Date.now(),
    visible: !0,
    type: t,
    ariaProps: { role: "status", "aria-live": "polite" },
    message: e,
    pauseDuration: 0,
    ...r,
    id: (r == null ? void 0 : r.id) || G(),
  });
var E = (e) => (t, r) => {
    let s = ae(t, e, r);
    return w({ type: 2, toast: s }), s.id;
  };
var m = (e, t) => E("blank")(e, t);
m.error = E("error");
m.success = E("success");
m.loading = E("loading");
m.custom = E("custom");
m.dismiss = (e) => {
  w({ type: 3, toastId: e });
};
m.remove = (e) => w({ type: 4, toastId: e });
m.promise = (e, t, r) => {
  let s = m.loading(t.loading, { ...r, ...(r == null ? void 0 : r.loading) });
  return (
    e
      .then((o) => (m.success(I(t.success, o), { id: s, ...r, ...(r == null ? void 0 : r.success) }), o))
      .catch((o) => {
        m.error(I(t.error, o), { id: s, ...r, ...(r == null ? void 0 : r.error) });
      }),
    e
  );
};
var se = (e, t) => {
    w({ type: 1, toast: { id: e, height: t } });
  };
var oe = () => {
    w({ type: 5, time: Date.now() });
  };
var ie = (e) => {
    let { toasts: t, pausedAt: r } = re(e);
    c.useEffect(() => {
      if (r) return;
      let a = Date.now();
      let n = t.map((i) => {
          if (i.duration === 1 / 0) return;
          let l = (i.duration || 0) + i.pauseDuration - (a - i.createdAt);
          if (l < 0) {
            i.visible && m.dismiss(i.id);
            return;
          }
          return setTimeout(() => m.dismiss(i.id), l);
        });
      return () => {
        n.forEach((i) => i && clearTimeout(i));
      };
    }, [t, r]);
    let s = c.useCallback(() => {
        r && w({ type: 6, time: Date.now() });
      }, [r]);
    let o = c.useCallback(
        (a, n) => {
          let { reverseOrder: i = !1, gutter: l = 8, defaultPosition: d } = n || {};
          let p = t.filter((g) => (g.position || d) === (a.position || d) && g.height);
          let h = p.findIndex((g) => g.id === a.id);
          let f = p.filter((g, O) => O < h && g.visible).length;
          return p
            .filter((g) => g.visible)
            .slice(...(i ? [f + 1] : [0, f]))
            .reduce((g, O) => g + (O.height || 0) + l, 0);
        },
        [t],
      );
    return { toasts: t, handlers: { updateHeight: se, startPause: oe, endPause: s, calculateOffset: o } };
  };
var ne = b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`;
var le = b`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`;
var de = b`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`;
var ce = v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ne} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${le} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${de} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`;
var ue = b`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
var pe = v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${ue} 1s linear infinite;
`;
var me = b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`;
var fe = b`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`;
var he = v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${me} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${fe} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`;
var ge = v("div")`
  position: absolute;
`;
var ye = v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`;
var be = b`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`;
var xe = v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${be} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`;
var ve = ({ toast: e }) => {
    let { icon: t, type: r, iconTheme: s } = e;
    return t !== void 0
      ? typeof t === "string"
        ? c.createElement(xe, null, t)
        : t
      : r === "blank"
      ? null
      : c.createElement(
          ye,
          null,
          c.createElement(pe, { ...s }),
          r !== "loading" &&
            c.createElement(ge, null, r === "error" ? c.createElement(ce, { ...s }) : c.createElement(he, { ...s })),
        );
  };
var we = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`;
var ke = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`;
var Ce = "0%{opacity:0;} 100%{opacity:1;}";
var Ee = "0%{opacity:1;} 100%{opacity:0;}";
var je = v("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`;
var Ne = v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`;
var Le = (e, t) => {
    let r = e.includes("top") ? 1 : -1;
    let [s, o] = S() ? [Ce, Ee] : [we(r), ke(r)];
    return {
      animation: t
        ? `${b(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${b(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
  };
var $e = c.memo(({ toast: e, position: t, style: r, children: s }) => {
    let o = e.height ? Le(e.position || t || "top-center", e.visible) : { opacity: 0 };
    let a = c.createElement(ve, { toast: e });
    let n = c.createElement(Ne, { ...e.ariaProps }, I(e.message, e));
    return c.createElement(
      je,
      { className: e.className, style: { ...o, ...r, ...e.style } },
      typeof s === "function" ? s({ icon: a, message: n }) : c.createElement(c.Fragment, null, a, n),
    );
  });
Y(c.createElement);
var Ie = ({ id: e, className: t, style: r, onHeightUpdate: s, children: o }) => {
    let a = c.useCallback(
      (n) => {
        if (n) {
          let i = () => {
            let l = n.getBoundingClientRect().height;
            s(e, l);
          };
          i(), new MutationObserver(i).observe(n, { subtree: !0, childList: !0, characterData: !0 });
        }
      },
      [e, s],
    );
    return c.createElement("div", { ref: a, className: t, style: r }, o);
  };
var Me = (e, t) => {
    let r = e.includes("top");
    let s = r ? { top: 0 } : { bottom: 0 };
    let o = e.includes("center")
        ? { justifyContent: "center" }
        : e.includes("right")
        ? { justifyContent: "flex-end" }
        : {};
    return {
      left: 0,
      right: 0,
      display: "flex",
      position: "absolute",
      transition: S() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
      transform: `translateY(${t * (r ? 1 : -1)}px)`,
      ...s,
      ...o,
    };
  };
var Oe = M`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;
var j = 16;
var _e = ({
    reverseOrder: e,
    position: t = "top-center",
    toastOptions: r,
    gutter: s,
    children: o,
    containerStyle: a,
    containerClassName: n,
  }) => {
    let { toasts: i, handlers: l } = ie(r);
    return c.createElement(
      "div",
      {
        style: { position: "fixed", zIndex: 9999, top: j, left: j, right: j, bottom: j, pointerEvents: "none", ...a },
        className: n,
        onMouseEnter: l.startPause,
        onMouseLeave: l.endPause,
      },
      i.map((d) => {
        let p = d.position || t;
        let h = l.calculateOffset(d, { reverseOrder: e, gutter: s, defaultPosition: t });
        let f = Me(p, h);
        return c.createElement(
          Ie,
          { id: d.id, key: d.id, onHeightUpdate: l.updateHeight, className: d.visible ? Oe : "", style: f },
          d.type === "custom" ? I(d.message, d) : o ? o(d) : c.createElement($e, { toast: d, position: p }),
        );
      }),
    );
  };
var Fe = m;
const Ae = ({ size: e = "20", color: t = "currentColor", ...r }) =>
    k("svg", {
      width: e,
      height: e,
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...r,
      children: [
        u("path", {
          d: "M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z",
          stroke: t,
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        u("path", {
          d: "M10 6.66669V10",
          stroke: t,
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        u("path", {
          d: "M10 13.3333H10.0088",
          stroke: t,
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      ],
    });
const ze = ({ size: e = "16", color: t = "currentColor", ...r }) =>
    k("svg", {
      width: e,
      height: e,
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...r,
      children: [
        u("path", {
          d: "M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z",
          stroke: t,
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        u("path", {
          d: "M8 10.6667V8",
          stroke: t,
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        u("path", {
          d: "M8 5.33331H8.0075",
          stroke: t,
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      ],
    });
const De = ({ size: e = "24px", color: t = "currentColor", ...r }) =>
    k("svg", {
      width: e,
      height: e,
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...r,
      children: [
        u("path", {
          d: "M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z",
          stroke: t,
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        u("path", {
          d: "M12.5 7.5L7.5 12.5",
          stroke: t,
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        u("path", {
          d: "M7.5 7.5L12.5 12.5",
          stroke: t,
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      ],
    });
const Te = ({ children: e, visible: t, className: r, ...s }) =>
    u("div", {
      className: _(
        "flex items-start bg-grey-90 p-base border rounded-rounded shadow-toaster mb-xsmall last:mb-0",
        { "animate-enter": t },
        { "animate-leave": !t },
        r,
      ),
      ...s,
      children: e,
    });
const We = ({ toast: e, type: t, title: r, message: s }) => {
    const o = () => {
      m.dismiss(e.id);
    };
    return k(Te, {
      visible: e.visible,
      className: "w-[380px]",
      children: [
        u("div", { children: Pe(t) }),
        k("div", {
          className: "flex flex-col ml-small mr-base gap-y-2xsmall flex-grow text-white",
          children: [
            u("span", { className: "inter-small-semibold", children: r }),
            u("span", { className: "inter-small-regular text-grey-20", children: s }),
          ],
        }),
        k("div", {
          children: [
            u("button", { onClick: o, children: u(F, { size: C, className: "text-grey-40" }) }),
            u("span", { className: "sr-only", children: "Close" }),
          ],
        }),
      ],
    });
  };
const C = 20;
function Pe(e) {
  switch (e) {
    case "success":
      return u(Z, { size: C, className: "text-emerald-40" });
    case "warning":
      return u(Ae, { size: C, className: "text-orange-40" });
    case "error":
      return u(De, { size: C, className: "text-rose-40" });
    default:
      return u(ze, { size: C, className: "text-grey-40" });
  }
}
const Ze = () => (e, t, r) => {
  m.custom((s) => u(We, { toast: s, type: r, title: e, message: t }), { position: "top-right", duration: 3e3 });
};
export { Ae as A, ze as I, Te as T, De as X, Fe as _, _e as a, m as n, Ze as u };
