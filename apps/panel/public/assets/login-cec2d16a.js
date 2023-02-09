import { r, x as h, cJ as f, a as e, j as s, B as b, cK as y, F as v, w as N } from "./index-4c5f9ec7.js";
import { b as x, M as S } from "./index.esm-69cd9074.js";
import { S as u, L as w } from "./login-layout-963f7953.js";
import { C as k } from "./index-1a59a41d.js";
import { S as C } from "./index-5cffe34f.js";
import "./index-332a460f.js";
const E = ({ toResetPassword: t }) => {
    const [a, l] = r.useState(!1);
    const { register: n, handleSubmit: i, reset: m } = x();
    const c = h();
    const o = f();
    return e("form", {
      onSubmit: i((d) => {
        o.mutate(d, {
          onSuccess: () => {
            c("/a/orders");
          },
          onError: () => {
            l(!0), m();
          },
        });
      }),
      children: s("div", {
        className: "flex flex-col items-center",
        children: [
          e("span", { className: "inter-2xlarge-semibold mt-4 text-grey-90", children: "Vítejte zpět!" }),
          e("span", { className: "inter-base-regular text-grey-50 mt-2", children: "Je skvělé vás vidět 👋🏼" }),
          e("span", {
            className: "inter-base-regular text-grey-50 mb-xlarge",
            children: "Přihlaste se ke svému účtu níže",
          }),
          e(u, { placeholder: "Email...", ...n("email", { required: !0 }), autoComplete: "email" }),
          e(u, {
            placeholder: "Heslo...",
            type: "password",
            ...n("password", { required: !0 }),
            autoComplete: "current-password",
          }),
          a &&
            e("span", {
              className: "text-rose-50 w-full mt-2 inter-small-regular",
              children: "Tyto údaje nejsou správné!",
            }),
          e(b, {
            className: "rounded-rounded mt-4 w-[320px] inter-base-regular",
            variant: "primary",
            size: "large",
            type: "submit",
            loading: o.isLoading,
            children: "Pokračovat",
          }),
          e("span", {
            className: "inter-small-regular text-grey-50 mt-8 cursor-pointer",
            onClick: t,
            children: "Změnit heslo",
          }),
        ],
      }),
    });
  };
const j = /^\S+@\S+$/i;
const L = ({ goBack: t }) => {
    const [a, l] = r.useState(!1);
    const [n, i] = r.useState(!1);
    const [m, c] = r.useState(!1);
    const { register: o, handleSubmit: p } = x();
    const d = y();
    return e("form", {
      onSubmit: p((g) => {
        if (!j.test(g.email)) {
          i(!0);
          return;
        }
        i(!1),
          l(!1),
          d.mutate(
            { email: g.email },
            {
              onSuccess: () => {
                c(!0);
              },
              onError: () => {
                l(!0);
              },
            },
          );
      }),
      children: s("div", {
        className: "flex flex-col items-center",
        children: [
          e("span", { className: "inter-2xlarge-semibold mt-base text-grey-90", children: "Reset your password" }),
          s("span", {
            className: "inter-base-regular text-grey-50 mt-xsmall text-center",
            children: [
              "Enter your email address below, and we'll send you",
              e("br", {}),
              "instructions on how to reset your password.",
            ],
          }),
          m
            ? s("div", {
                className: "text-violet-60 rounded-rounded bg-violet-10 p-base flex gap-x-small mt-large",
                children: [
                  e("div", { children: e(k, { size: 20 }) }),
                  s("div", {
                    className: "flex flex-col gap-y-2xsmall",
                    children: [
                      e("span", { className: "inter-small-semibold", children: "Succesfully sent you an email" }),
                      e("span", {
                        className: "inter-small-regular",
                        children:
                          "We've sent you an email which you can use to reset your password. Check your spam folder if you haven't received it after a few minutes.",
                      }),
                    ],
                  }),
                ],
              })
            : s(v, {
                children: [
                  e(u, {
                    placeholder: "lebron@james.com...",
                    ...o("email", { required: !0 }),
                    className: "mb-0 mt-xlarge",
                  }),
                  a &&
                    e("div", {
                      className: "mt-xsmall w-[318px]",
                      children: e("span", {
                        className: "inter-small-regular text-rose-50 text-left",
                        children: "We can't find a user with that email address",
                      }),
                    }),
                  n &&
                    e("div", {
                      className: "mt-xsmall w-[318px]",
                      children: e("span", {
                        className: "inter-small-regular text-rose-50 text-left",
                        children: "Not a valid email address",
                      }),
                    }),
                  e("button", {
                    className:
                      "text-grey-0 w-[320px] h-[48px] border rounded-rounded mt-4 bg-violet-50 inter-base-regular py-3 px-4",
                    type: "submit",
                    children: "Send reset instructions",
                  }),
                ],
              }),
          e("span", {
            className: "inter-small-regular text-grey-50 mt-8 cursor-pointer",
            onClick: t,
            children: "Go back to sign in",
          }),
        ],
      }),
    });
  };
const F = () => {
    const [t, a] = r.useState(!1);
    return s(w, {
      children: [
        e(C, { title: "Login" }),
        e("div", {
          className: "flex h-full w-full items-center justify-center",
          children: e("div", {
            className: N(
              "flex min-h-[600px] w-[640px] bg-grey-0 rounded-rounded justify-center transition-['min-height'] duration-300",
              { "min-h-[480px]": t },
            ),
            children: s("div", {
              className: "flex flex-col pt-12 w-full px-[120px] items-center",
              children: [e(S, {}), t ? e(L, { goBack: () => a(!1) }) : e(E, { toResetPassword: () => a(!0) })],
            }),
          }),
        }),
      ],
    });
  };
export { F as default };
