import { R as g, r, j as o, w as d, a as e } from "./index-4c5f9ec7.js";
import { L as b, a as y, E as v } from "./index-332a460f.js";
const F = g.forwardRef(
    ({ placeholder: a, name: l, key: u, required: N, onChange: f, onFocus: m, className: h, type: s, ...t }, x) => {
      const i = r.useRef(null);
      const [n, p] = r.useState(!1);
      const [w, c] = r.useState(s);
      return (
        r.useEffect(() => {
          s === "password" && n && c("text"), s === "password" && !n && c("password");
        }, [s, n]),
        r.useImperativeHandle(x, () => i.current),
        o("div", {
          className: d(
            "w-[320px] h-[48px] mb-xsmall last:mb-0 border rounded-rounded overflow-hidden",
            "bg-grey-5 inter-base-regular placeholder:text-grey-40",
            "focus-within:shadow-input focus-within:border-violet-60",
            "flex items-center",
            { "pointer-events-none focus-within:shadow-none focus-within:border-none text-grey-40": t.readOnly },
            h,
          ),
          children: [
            t.readOnly && e(b, { size: 16, className: "text-grey-40 ml-base" }),
            e(
              "input",
              {
                className: d(
                  "outline-none outline-0 remove-number-spinner leading-base bg-transparent w-full py-3 px-4",
                  { "pl-xsmall": t.readOnly },
                ),
                ref: i,
                name: l,
                placeholder: a || "Placeholder",
                onChange: f,
                onFocus: m,
                type: w,
                ...t,
              },
              u || l,
            ),
            s === "password" &&
              e("button", {
                type: "button",
                onClick: () => p(!n),
                className: "text-grey-40 px-4 focus:outline-none focus:text-violet-60",
                children: n ? e(y, {}) : e(v, {}),
              }),
          ],
        })
      );
    },
  );
const L = ({ children: a }) =>
    e("div", {
      className: "min-h-screen flex flex-col",
      children: e("div", {
        className: "grid grid-cols-1 grid-rows-1 min-h-screen",
        children: o("div", {
          className: "flex flex-col items-center",
          style: { background: "linear-gradient(73.29deg, #7C53FF 0%, #F796FF 100%)" },
          children: [
            a,
            o("div", {
              className: "text-grey-0 inter-base-regular pb-12",
              children: [
                "© Medusa Commerce ",
                e("span", { children: "·" }),
                " ",
                e("a", {
                  style: { color: "inherit", textDecoration: "none" },
                  href: "mailto:hello@medusajs.com",
                  children: "Contact",
                }),
              ],
            }),
          ],
        }),
      }),
    });
export { L, F as S };
