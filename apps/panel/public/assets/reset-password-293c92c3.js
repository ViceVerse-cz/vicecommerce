import { x as S, K as v, an as E, r as l, cL as P, j as o, a as e, F as j, B as k } from "./index-4c5f9ec7.js";
import { b as C, M as F } from "./index.esm-69cd9074.js";
import { d as L } from "./index.modern-947f1790.js";
import { L as M, S as n } from "./login-layout-963f7953.js";
import { S as R } from "./index-5cffe34f.js";
import { g as _ } from "./error-messages-d2d0bb30.js";
import "./index-332a460f.js";
const K = () => {
  const p = S();
  const f = v();
  const s = E.parse(f.search.substring(1));
  let a = null;
  if (s?.token)
    try {
      a = L(s.token);
    } catch {
      a = null;
    }
  const [w, i] = l.useState(!1);
  const [g, d] = l.useState(null);
  const [h, m] = l.useState(!1);
  const c = (a == null ? void 0 : a.email) || (s == null ? void 0 : s.email) || "";
  const { register: u, handleSubmit: x, formState: r } = C({ defaultValues: { password: "", repeat_password: "" } });
  const y = P();
  const b = (t) => {
      if ((i(!1), d(null), t.password !== t.repeat_password)) {
        i(!0);
        return;
      }
      y.mutate(
        { token: s.token, password: t.password, email: c },
        {
          onSuccess: () => {
            p("/login");
          },
          onError: (N) => {
            d(_(N));
          },
        },
      );
    };
  return (
    l.useEffect(() => {
      r.dirtyFields.password && r.dirtyFields.repeat_password ? m(!0) : m(!1);
    }, [r]),
    o(M, {
      children: [
        e(R, { title: "Reset Password" }),
        e("div", {
          className: "flex h-full w-full items-center justify-center",
          children: e("div", {
            className: "flex min-h-[540px] bg-grey-0 rounded-rounded justify-center",
            children: o("form", {
              className: "flex flex-col py-12 w-full px-[120px] items-center",
              onSubmit: x(b),
              children: [
                e(F, {}),
                a
                  ? o(j, {
                      children: [
                        e("span", {
                          className: "inter-2xlarge-semibold mt-4 text-grey-90",
                          children: "Reset your password",
                        }),
                        e("span", {
                          className: "inter-base-regular text-grey-50 mt-2 mb-xlarge",
                          children: "Choose a new password below 👇🏼",
                        }),
                        e(n, { placeholder: "Email", name: "first_name", value: c, readOnly: !0 }),
                        e(n, {
                          placeholder: "Password",
                          type: "password",
                          ...u("password", { required: !0 }),
                          autoComplete: "new-password",
                        }),
                        e(n, {
                          placeholder: "Confirm password",
                          type: "password",
                          ...u("repeat_password", { required: !0 }),
                          autoComplete: "new-password",
                          className: "mb-0",
                        }),
                        g &&
                          e("span", {
                            className: "text-rose-50 w-full mt-xsmall inter-small-regular",
                            children: "The two passwords are not the same",
                          }),
                        w &&
                          e("span", {
                            className: "text-rose-50 w-full mt-xsmall inter-small-regular",
                            children: "The two passwords are not the same",
                          }),
                        e(k, {
                          variant: "primary",
                          size: "large",
                          type: "submit",
                          className: "w-full mt-base rounded-rounded",
                          loading: r.isSubmitting,
                          disabled: !h,
                          children: "Reset Password",
                        }),
                      ],
                    })
                  : o("div", {
                      className: "h-full flex flex-col gap-y-2 text-center items-center justify-center",
                      children: [
                        e("span", {
                          className: "inter-large-semibold text-grey-90",
                          children: "You reset link is invalid",
                        }),
                        e("span", {
                          className: "inter-base-regular text-grey-50 mt-2",
                          children: "Please try resetting your password again",
                        }),
                      ],
                    }),
              ],
            }),
          }),
        }),
      ],
    })
  );
};
export { K as default };
