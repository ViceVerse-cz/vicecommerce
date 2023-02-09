import { j as f, a as n, K as C, an as N, r as w, cI as L, x as z, F as _, B as k, L as M } from "./index-4c5f9ec7.js";
import { b as S, M as F } from "./index.esm-69cd9074.js";
import { d as j } from "./index.modern-947f1790.js";
import { L as E, S as v } from "./login-layout-963f7953.js";
import { S as I } from "./index-5cffe34f.js";
import { u as T } from "./use-notification-246217ea.js";
import { g as q } from "./error-messages-d2d0bb30.js";
import "./index-332a460f.js";
import "./index-1a59a41d.js";
function A(r) {
  var e = {
    target: "confetti-holder",
    max: 80,
    size: 1,
    animate: !0,
    respawn: !0,
    props: ["circle", "square", "triangle", "line"],
    colors: [
      [165, 104, 246],
      [230, 61, 135],
      [0, 199, 228],
      [253, 214, 126],
    ],
    clock: 25,
    interval: null,
    rotate: !1,
    start_from_edge: !1,
    width: window.innerWidth,
    height: window.innerHeight,
  };
  if (
    (r &&
      (r.target && (e.target = r.target),
      r.max && (e.max = r.max),
      r.size && (e.size = r.size),
      r.animate !== void 0 && r.animate !== null && (e.animate = r.animate),
      r.respawn !== void 0 && r.respawn !== null && (e.respawn = r.respawn),
      r.props && (e.props = r.props),
      r.colors && (e.colors = r.colors),
      r.clock && (e.clock = r.clock),
      r.start_from_edge !== void 0 && r.start_from_edge !== null && (e.start_from_edge = r.start_from_edge),
      r.width && (e.width = r.width),
      r.height && (e.height = r.height),
      r.rotate !== void 0 && r.rotate !== null && (e.rotate = r.rotate)),
    typeof e.target !== "object" && typeof e.target !== "string")
  )
    throw new TypeError("The target parameter should be a node or string");
  if (
    (typeof e.target === "object" && (e.target === null || !(e.target instanceof HTMLCanvasElement))) ||
    (typeof e.target === "string" &&
      (document.getElementById(e.target) === null || !(document.getElementById(e.target) instanceof HTMLCanvasElement)))
  )
    throw new ReferenceError("The target element does not exist or is not a canvas element");
  var l = typeof e.target === "object" ? e.target : document.getElementById(e.target);
  var a = l.getContext("2d");
  var c = [];
  function d(t, s) {
    t || (t = 1);
    var u = Math.random() * t;
    return s ? Math.floor(u) : u;
  }
  var p = e.props.reduce(function (t, s) {
    return t + (s.weight || 1);
  }, 0);
  function b() {
    for (var t = Math.random() * p, s = 0; s < e.props.length; ++s) {
      var u = e.props[s].weight || 1;
      if (t < u) return s;
      t -= u;
    }
  }
  function x() {
    var t = e.props[b()];
    var s = {
        prop: t.type ? t.type : t,
        x: d(e.width),
        y: e.start_from_edge ? (e.clock >= 0 ? -10 : parseFloat(e.height) + 10) : d(e.height),
        src: t.src,
        radius: d(4) + 1,
        size: t.size,
        rotate: e.rotate,
        line: Math.floor(d(65) - 30),
        angles: [d(10, !0) + 2, d(10, !0) + 2, d(10, !0) + 2, d(10, !0) + 2],
        color: e.colors[d(e.colors.length, !0)],
        rotation: (d(360, !0) * Math.PI) / 180,
        speed: d(e.clock / 7) + e.clock / 30,
      };
    return s;
  }
  function h(t) {
    if (t) {
      var s = t.radius <= 3 ? 0.4 : 0.8;
      switch (((a.fillStyle = a.strokeStyle = `rgba(${t.color}, ${s})`), a.beginPath(), t.prop)) {
        case "circle": {
          a.moveTo(t.x, t.y), a.arc(t.x, t.y, t.radius * e.size, 0, Math.PI * 2, !0), a.fill();
          break;
        }
        case "triangle": {
          a.moveTo(t.x, t.y),
            a.lineTo(t.x + t.angles[0] * e.size, t.y + t.angles[1] * e.size),
            a.lineTo(t.x + t.angles[2] * e.size, t.y + t.angles[3] * e.size),
            a.closePath(),
            a.fill();
          break;
        }
        case "line": {
          a.moveTo(t.x, t.y),
            a.lineTo(t.x + t.line * e.size, t.y + t.radius * 5),
            (a.lineWidth = 2 * e.size),
            a.stroke();
          break;
        }
        case "square": {
          a.save(),
            a.translate(t.x + 15, t.y + 5),
            a.rotate(t.rotation),
            a.fillRect(-15 * e.size, -5 * e.size, 15 * e.size, 5 * e.size),
            a.restore();
          break;
        }
        case "svg": {
          a.save();
          var u = new window.Image();
          u.src = t.src;
          var o = t.size || 15;
          a.translate(t.x + o / 2, t.y + o / 2),
            t.rotate && a.rotate(t.rotation),
            a.drawImage(u, -(o / 2) * e.size, -(o / 2) * e.size, o * e.size, o * e.size),
            a.restore();
          break;
        }
      }
    }
  }
  var y = function () {
      (e.animate = !1),
        clearInterval(e.interval),
        requestAnimationFrame(function () {
          a.clearRect(0, 0, l.width, l.height);
          var t = l.width;
          (l.width = 1), (l.width = t);
        });
    };
  var g = function () {
      (l.width = e.width), (l.height = e.height), (c = []);
      for (var t = 0; t < e.max; t++) c.push(x());
      function s() {
        a.clearRect(0, 0, e.width, e.height);
        for (var o in c) h(c[o]);
        u(), e.animate && requestAnimationFrame(s);
      }
      function u() {
        for (var o = 0; o < e.max; o++) {
          var i = c[o];
          i &&
            (e.animate && (i.y += i.speed),
            i.rotate && (i.rotation += i.speed / 35),
            ((i.speed >= 0 && i.y > e.height) || (i.speed < 0 && i.y < 0)) &&
              (e.respawn
                ? ((c[o] = i), (c[o].x = d(e.width, !0)), (c[o].y = i.speed >= 0 ? -10 : parseFloat(e.height)))
                : (c[o] = void 0)));
        }
        c.every(function (m) {
          return m === void 0;
        }) && y();
      }
      return requestAnimationFrame(s);
    };
  return { render: g, clear: y };
}
const P = ({ size: r = "24", color: e = "currentColor", ...l }) => {
    const a = +r * 2;
    return f("svg", {
      width: a,
      height: r,
      viewBox: "0 0 40 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...l,
      children: [
        n("path", { d: "M4 9H36", stroke: e, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        n("path", {
          d: "M31 5L36 9L31 13",
          stroke: e,
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      ],
    });
  };
const B = ({ size: r = "96", color: e = "currentColor", ...l }) =>
    f("svg", {
      width: r,
      height: r,
      viewBox: "0 0 96 96",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...l,
      children: [
        n("path", {
          d: "M75.6103 20.9859L57.5892 10.5638C51.6929 7.14539 44.4678 7.14539 38.5715 10.5638L20.4673 20.9859C14.6541 24.4044 11 30.741 11 37.4945V58.4221C11 65.259 14.6541 71.5122 20.4673 74.9307L38.4884 85.4362C44.3848 88.8546 51.6098 88.8546 57.5061 85.4362L75.5273 74.9307C81.4236 71.5122 84.9946 65.259 84.9946 58.4221V37.4945C85.1607 30.741 81.5066 24.4044 75.6103 20.9859ZM48.0388 66.593C37.8241 66.593 29.5194 58.2553 29.5194 48C29.5194 37.7447 37.8241 29.407 48.0388 29.407C58.2535 29.407 66.6413 37.7447 66.6413 48C66.6413 58.2553 58.3366 66.593 48.0388 66.593Z",
          fill: "url(#paint0_linear_2823_15237)",
        }),
        n("defs", {
          children: f("linearGradient", {
            id: "paint0_linear_2823_15237",
            x1: "11",
            y1: "88",
            x2: "100.328",
            y2: "63.1913",
            gradientUnits: "userSpaceOnUse",
            children: [n("stop", { stopColor: "#7C53FF" }), n("stop", { offset: "1", stopColor: "#F796FF" })],
          }),
        }),
      ],
    });
const D = () => {
    const r = C();
    const e = N.parse(r.search.substring(1));
    const [l, a] = w.useState(!1);
    let c = null;
    if (e?.token)
      try {
        c = j(e.token);
      } catch {
        c = null;
      }
    const [d, p] = w.useState(!1);
    const [b, x] = w.useState(!1);
    w.useEffect(() => {
      const i = {
          target: "confetti-canvas",
          start_from_edge: !0,
          size: 3,
          clock: 25,
          colors: [
            [251, 146, 60],
            [167, 139, 250],
            [251, 146, 60],
            [96, 165, 250],
            [45, 212, 191],
            [250, 204, 21],
            [232, 121, 249],
          ],
          max: 26,
        };
      const m = new A(i);
      return m.render(), () => m.clear();
    }, []);
    const {
        register: h,
        handleSubmit: y,
        formState: g,
      } = S({ defaultValues: { first_name: "", last_name: "", password: "", repeat_password: "" } });
    const t = L();
    const s = z();
    const u = T();
    const o = (i) => {
        if ((p(!1), i.password !== i.repeat_password)) {
          p(!0);
          return;
        }
        t.mutate(
          { token: e.token, user: { first_name: i.first_name, last_name: i.last_name, password: i.password } },
          {
            onSuccess: () => {
              s("/login");
            },
            onError: (m) => {
              u("Error", q(m), "error");
            },
          },
        );
      };
    return (
      w.useEffect(() => {
        g.dirtyFields.password && g.dirtyFields.repeat_password && g.dirtyFields.first_name && g.dirtyFields.last_name
          ? x(!0)
          : x(!1);
      }, [g]),
      n(_, {
        children: l
          ? f(E, {
              children: [
                n(I, { title: "Create Account" }),
                n("div", {
                  className: "flex h-full w-full items-center justify-center",
                  children: n("div", {
                    className: "flex min-h-[600px] bg-grey-0 rounded-rounded justify-center",
                    children: f("form", {
                      className: "flex flex-col py-12 w-full px-[120px] items-center",
                      onSubmit: y(o),
                      children: [
                        n(F, {}),
                        c
                          ? f(_, {
                              children: [
                                n("span", {
                                  className: "inter-2xlarge-semibold mt-4 text-grey-90",
                                  children: "Welcome to the team!",
                                }),
                                n("span", {
                                  className: "inter-base-regular text-grey-50 mt-2 mb-large",
                                  children: "Create your account below👇🏼",
                                }),
                                n(v, {
                                  placeholder: "First name",
                                  ...h("first_name", { required: !0 }),
                                  autoComplete: "given-name",
                                }),
                                n(v, {
                                  placeholder: "Last name",
                                  ...h("last_name", { required: !0 }),
                                  autoComplete: "family-name",
                                }),
                                n(v, {
                                  placeholder: "Password",
                                  type: "password",
                                  ...h("password", { required: !0 }),
                                  autoComplete: "new-password",
                                }),
                                n(v, {
                                  placeholder: "Repeat password",
                                  type: "password",
                                  ...h("repeat_password", { required: !0 }),
                                  autoComplete: "new-password",
                                }),
                                d &&
                                  n("span", {
                                    className: "text-rose-50 w-full mt-2 inter-small-regular",
                                    children: "The two passwords are not the same",
                                  }),
                                n(k, {
                                  variant: "primary",
                                  size: "large",
                                  type: "submit",
                                  className: "w-full mt-base",
                                  loading: g.isSubmitting,
                                  disabled: !b,
                                  children: "Create account",
                                }),
                                n(M, {
                                  to: "/login",
                                  className: "inter-small-regular text-grey-50 mt-large",
                                  children: "Already signed up? Log in",
                                }),
                              ],
                            })
                          : f("div", {
                              className: "h-full flex flex-col gap-y-2 text-center items-center justify-center",
                              children: [
                                n("span", {
                                  className: "inter-large-semibold text-grey-90",
                                  children: "You signup link is invalid",
                                }),
                                n("span", {
                                  className: "inter-base-regular mt-2 text-grey-50",
                                  children: "Contact your administrator to obtain a valid signup link",
                                }),
                              ],
                            }),
                      ],
                    }),
                  }),
                }),
              ],
            })
          : f("div", {
              className: "bg-grey-90 h-screen w-full overflow-hidden",
              children: [
                f("div", {
                  className:
                    "z-10 flex-grow flex flex-col items-center justify-center h-full absolute inset-0 max-w-[1080px] mx-auto",
                  children: [
                    n(B, { className: "mb-3xlarge" }),
                    f("div", {
                      className: "flex flex-col items-center max-w-3xl text-center",
                      children: [
                        n("h1", {
                          className: "inter-3xlarge-semibold text-grey-0 mb-base",
                          children: "You have been invited to join the team",
                        }),
                        n("p", {
                          className: "inter-xlarge-regular text-grey-50",
                          children:
                            "You can now join the Medusa Store team. Sign up below and get started with your Medusa Admin account right away.",
                        }),
                      ],
                    }),
                    n("div", {
                      className: "mt-4xlarge",
                      children: f(k, {
                        size: "large",
                        variant: "primary",
                        className: "w-[280px]",
                        onClick: () => a(!0),
                        children: ["Sign up", n(P, { size: 20, className: "pt-1" })],
                      }),
                    }),
                  ],
                }),
                n("canvas", { id: "confetti-canvas" }),
              ],
            }),
      })
    );
  };
export { D as default };
