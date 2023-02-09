import { a as Ne, R as V } from "./index-4c5f9ec7.js";
const Jr = ({ size: e = "48", ...i }) => {
  const r = +e * 0.9375;
  return Ne("svg", {
    width: r,
    height: e,
    viewBox: "0 0 45 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...i,
    children: Ne("path", {
      d: "M38.8535 7.79156L28.0165 1.5383C24.4707 -0.512767 20.1259 -0.512767 16.5802 1.5383L5.69318 7.79156C2.19737 9.84263 0 13.6446 0 17.6967V30.2533C0 34.3554 2.19737 38.1073 5.69318 40.1584L16.5302 46.4617C20.076 48.5128 24.4208 48.5128 27.9665 46.4617L38.8036 40.1584C42.3493 38.1073 44.4967 34.3554 44.4967 30.2533V17.6967C44.5966 13.6446 42.3992 9.84263 38.8535 7.79156ZM22.2733 35.1558C16.1307 35.1558 11.1367 30.1532 11.1367 24C11.1367 17.8468 16.1307 12.8442 22.2733 12.8442C28.416 12.8442 33.4599 17.8468 33.4599 24C33.4599 30.1532 28.4659 35.1558 22.2733 35.1558Z",
      fill: "#8B5CF6",
    }),
  });
};
var ye = (e) => e.type === "checkbox";
var ie = (e) => e instanceof Date;
var I = (e) => e == null;
const ar = (e) => typeof e === "object";
var U = (e) => !(I(e) || Array.isArray(e) ) && ar(e) && !ie(e);
var ur = (e) => (U(e) && e.target ? (ye(e.target) ? e.target.checked : e.target.value) : e);
var Or = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e;
var lr = (e, i) => e.has(Or(i));
var ue = (e) => (Array.isArray(e) ? e.filter(Boolean) : []);
var C = (e) => e === void 0;
var c = (e, i, r) => {
    if (!(i && U(e))) return r;
    const n = ue(i.split(/[,[\].]+?/)).reduce((s, l) => (I(s) ? s : s[l]), e);
    return C(n) || n === e ? (C(e[i]) ? r : e[i]) : n;
  };
const he = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" };
const K = { onBlur: "onBlur", onChange: "onChange", onSubmit: "onSubmit", onTouched: "onTouched", all: "all" };
const Y = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  };
const or = V.createContext(null);
const Ve = () => V.useContext(or);
const Qr = (e) => {
    const { children: i, ...r } = e;
    return Ne(or.Provider, { value: r, children: i });
  };
var cr = (e, i, r, n = !0) => {
    const s = { defaultValues: i._defaultValues };
    for (const l in e)
      Object.defineProperty(s, l, {
        get: () => {
          const d = l;
          return i._proxyFormState[d] !== K.all && (i._proxyFormState[d] = !n || K.all), r && (r[d] = !0), e[d];
        },
      });
    return s;
  };
var q = (e) => U(e) && !Object.keys(e).length;
var fr = (e, i, r, n) => {
    r(e);
    const { name: s, ...l } = e;
    return q(l) || Object.keys(l).length >= Object.keys(i).length || Object.keys(l).find((d) => i[d] === (!n || K.all));
  };
var $ = (e) => (Array.isArray(e) ? e : [e]);
var dr = (e, i, r) =>
    r && i ? e === i : !(e && i ) || e === i || $(e).some((n) => n && (n.startsWith(i) || i.startsWith(n)));
function be(e) {
  const i = V.useRef(e);
  (i.current = e),
    V.useEffect(() => {
      const r = !e.disabled && i.current.subject.subscribe({ next: i.current.next });
      return () => {
        r?.unsubscribe();
      };
    }, [e.disabled]);
}
function Rr(e) {
  const i = Ve();
  const { control: r = i.control, disabled: n, name: s, exact: l } = e || {};
  const [d, g] = V.useState(r._formState);
  const m = V.useRef(!0);
  const v = V.useRef({
      isDirty: !1,
      isLoading: !1,
      dirtyFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    });
  const D = V.useRef(s);
  return (
    (D.current = s),
    be({
      disabled: n,
      next: (O) =>
        m.current && dr(D.current, O.name, l) && fr(O, v.current, r._updateFormState) && g({ ...r._formState, ...O }),
      subject: r._subjects.state,
    }),
    V.useEffect(() => {
      m.current = !0;
      const O = r._proxyFormState.isDirty && r._getDirty();
      return (
        O !== r._formState.isDirty && r._subjects.state.next({ isDirty: O }),
        v.current.isValid && r._updateValid(!0),
        () => {
          m.current = !1;
        }
      );
    }, [r]),
    cr(d, r, v.current, !1)
  );
}
var Q = (e) => typeof e === "string";
var yr = (e, i, r, n, s) =>
    Q(e)
      ? (n && i.watch.add(e), c(r, e, s))
      : Array.isArray(e)
      ? e.map((l) => (n && i.watch.add(l), c(r, l)))
      : (n && (i.watchAll = !0), r);
var Tr = (e) => {
    const i = e.constructor?.prototype;
    return U(i) && i.hasOwnProperty("isPrototypeOf");
  };
var We = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function W(e) {
  let i;
  const r = Array.isArray(e);
  if (e instanceof Date) i = new Date(e);
  else if (e instanceof Set) i = new Set(e);
  else if (!(We && (e instanceof Blob || e instanceof FileList)) && (r || U(e)))
    if (((i = r ? [] : {}), !(Array.isArray(e) || Tr(e)))) i = e;
    else for (const n in e) i[n] = W(e[n]);
  else return e;
  return i;
}
function Ur(e) {
  const i = Ve();
  const { control: r = i.control, name: n, defaultValue: s, disabled: l, exact: d } = e || {};
  const g = V.useRef(n);
  (g.current = n),
    be({
      disabled: l,
      subject: r._subjects.watch,
      next: (D) => {
        dr(g.current, D.name, d) && v(W(yr(g.current, r._names, D.values || r._formValues, !1, s)));
      },
    });
  const [m, v] = V.useState(r._getWatch(n, s));
  return V.useEffect(() => r._removeUnmounted()), m;
}
function Mr(e) {
  const i = Ve();
  const { name: r, control: n = i.control, shouldUnregister: s } = e;
  const l = lr(n._names.array, r);
  const d = Ur({
      control: n,
      name: r,
      defaultValue: c(n._formValues, r, c(n._defaultValues, r, e.defaultValue)),
      exact: !0,
    });
  const g = Rr({ control: n, name: r });
  const m = V.useRef(n.register(r, { ...e.rules, value: d }));
  return (
    V.useEffect(() => {
      const v = (D, O) => {
        const F = c(n._fields, D);
        F && (F._f.mount = O);
      };
      return (
        v(r, !0),
        () => {
          const D = n._options.shouldUnregister || s;
          (l ? D && !n._stateFlags.action : D) ? n.unregister(r) : v(r, !1);
        }
      );
    }, [r, n, l, s]),
    {
      field: {
        name: r,
        value: d,
        onChange: V.useCallback((v) => m.current.onChange({ target: { value: ur(v), name: r }, type: he.CHANGE }), [r]),
        onBlur: V.useCallback(
          () => m.current.onBlur({ target: { value: c(n._formValues, r), name: r }, type: he.BLUR }),
          [r, n],
        ),
        ref: (v) => {
          const D = c(n._fields, r);
          D &&
            v &&
            (D._f.ref = {
              focus: () => v.focus(),
              select: () => v.select(),
              setCustomValidity: (O) => v.setCustomValidity(O),
              reportValidity: () => v.reportValidity(),
            });
        },
      },
      formState: g,
      fieldState: Object.defineProperties(
        {},
        {
          invalid: { enumerable: !0, get: () => !!c(g.errors, r) },
          isDirty: { enumerable: !0, get: () => !!c(g.dirtyFields, r) },
          isTouched: { enumerable: !0, get: () => !!c(g.touchedFields, r) },
          error: { enumerable: !0, get: () => c(g.errors, r) },
        },
      ),
    }
  );
}
const Xr = (e) => e.render(Mr(e));
var Br = (e, i, r, n, s) => (i ? { ...r[e], types: { ...(r[e]?.types ? r[e].types : {}), [n]: s || !0 } } : {});
var $e = (e) => /^\w*$/.test(e);
var gr = (e) => ue(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function k(e, i, r) {
  let n = -1;
  const s = $e(i) ? [i] : gr(i);
  const l = s.length;
  const d = l - 1;
  while (++n < l) {
    const g = s[n];
    let m = r;
    if (n !== d) {
      const v = e[g];
      m = U(v) || Array.isArray(v) ? v : isNaN(+s[n + 1]) ? {} : [];
    }
    (e[g] = m), (e = e[g]);
  }
  return e;
}
const _e = (e, i, r) => {
  for (const n of r || Object.keys(e)) {
    const s = c(e, n);
    if (s) {
      const { _f: l, ...d } = s;
      if (l && i(l.name)) {
        if (l.ref.focus) {
          l.ref.focus();
          break;
        } else if (l.refs?.[0].focus) {
          l.refs[0].focus();
          break;
        }
      } else U(d) && _e(d, i);
    }
  }
};
var z = () => {
    const e = typeof performance > "u" ? Date.now() : performance.now() * 1e3;
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (i) => {
      const r = ((Math.random() * 16 + e) % 16) | 0;
      return (i === "x" ? r : (r & 3) | 8).toString(16);
    });
  };
var De = (e, i, r = {}) =>
    r.shouldFocus || C(r.shouldFocus) ? r.focusName || `${e}.${C(r.focusIndex) ? i : r.focusIndex}.` : "";
var Pe = (e) => ({
    isOnSubmit: !e || e === K.onSubmit,
    isOnBlur: e === K.onBlur,
    isOnChange: e === K.onChange,
    isOnAll: e === K.all,
    isOnTouch: e === K.onTouched,
  });
var je = (e, i, r) =>
    !r &&
    (i.watchAll || i.watch.has(e) || [...i.watch].some((n) => e.startsWith(n) && /^\.\w+/.test(e.slice(n.length))));
var hr = (e, i, r) => {
    const n = ue(c(e, r));
    return k(n, "root", i[r]), k(e, r, n), e;
  };
var ne = (e) => typeof e === "boolean";
var He = (e) => e.type === "file";
var ae = (e) => typeof e === "function";
var ve = (e) => {
    if (!We) return !1;
    const i = e ? e.ownerDocument : 0;
    return e instanceof (i?.defaultView ? i.defaultView.HTMLElement : HTMLElement);
  };
var ge = (e) => Q(e) || V.isValidElement(e);
var Ke = (e) => e.type === "radio";
var Ae = (e) => e instanceof RegExp;
const er = { value: !1, isValid: !1 };
const rr = { value: !0, isValid: !0 };
var _r = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const i = e.filter((r) => r?.checked && !r.disabled).map((r) => r.value);
      return { value: i, isValid: !!i.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !C(e[0].attributes.value)
        ? C(e[0].value) || e[0].value === ""
          ? rr
          : { value: e[0].value, isValid: !0 }
        : rr
      : er;
  }
  return er;
};
const tr = { isValid: !1, value: null };
var vr = (e) =>
  Array.isArray(e) ? e.reduce((i, r) => (r?.checked && !r.disabled ? { isValid: !0, value: r.value } : i), tr) : tr;
function sr(e, i, r = "validate") {
  if (ge(e) || (Array.isArray(e) && e.every(ge)) || (ne(e) && !e)) return { type: r, message: ge(e) ? e : "", ref: i };
}
var se = (e) => (U(e) && !Ae(e) ? e : { value: e, message: "" });
var qe = async (e, i, r, n, s) => {
    const {
        ref: l,
        refs: d,
        required: g,
        maxLength: m,
        minLength: v,
        min: D,
        max: O,
        pattern: F,
        validate: b,
        name: N,
        valueAsNumber: le,
        mount: te,
        disabled: oe,
      } = e._f;
    const x = c(i, N);
    if (!te || oe) return {};
    const j = d ? d[0] : l;
    const Z = (S) => {
        n && j.reportValidity && (j.setCustomValidity(ne(S) ? "" : S || ""), j.reportValidity());
      };
    const y = {};
    const A = Ke(l);
    const p = ye(l);
    const R = A || p;
    const B =
        ((le || He(l)) && C(l.value) && C(x)) ||
        (ve(l) && l.value === "") ||
        x === "" ||
        (Array.isArray(x) && !x.length);
    const G = Br.bind(null, N, r, y);
    const X = (S, w, L, P = Y.maxLength, H = Y.minLength) => {
        const J = S ? w : L;
        y[N] = { type: S ? P : H, message: J, ref: l, ...G(S ? P : H, J) };
      };
    if (
      s
        ? !(Array.isArray(x) && x.length)
        : g && ((!R && (B || I(x))) || (ne(x) && !x) || (p && !_r(d).isValid) || (A && !vr(d).isValid))
    ) {
      const { value: S, message: w } = ge(g) ? { value: !!g, message: g } : se(g);
      if (S && ((y[N] = { type: Y.required, message: w, ref: j, ...G(Y.required, w) }), !r)) return Z(w), y;
    }
    if (!B && (!(I(D) && I(O)))) {
      let S;
      let w;
      const L = se(O);
      const P = se(D);
      if (!(I(x) || isNaN(x))) {
        const H = l.valueAsNumber || (x && +x);
        I(L.value) || (S = H > L.value), I(P.value) || (w = H < P.value);
      } else {
        const H = l.valueAsDate || new Date(x);
        const J = (fe) => new Date(`${new Date().toDateString()} ${fe}`);
        const ee = l.type === "time";
        const ce = l.type === "week";
        Q(L.value) && x && (S = ee ? J(x) > J(L.value) : ce ? x > L.value : H > new Date(L.value)),
          Q(P.value) && x && (w = ee ? J(x) < J(P.value) : ce ? x < P.value : H < new Date(P.value));
      }
      if ((S || w) && (X(!!S, L.message, P.message, Y.max, Y.min), !r)) return Z(y[N].message), y;
    }
    if ((m || v) && !B && (Q(x) || (s && Array.isArray(x)))) {
      const S = se(m);
      const w = se(v);
      const L = !I(S.value) && x.length > S.value;
      const P = !I(w.value) && x.length < w.value;
      if ((L || P) && (X(L, S.message, w.message), !r)) return Z(y[N].message), y;
    }
    if (F && !B && Q(x)) {
      const { value: S, message: w } = se(F);
      if (Ae(S) && !x.match(S) && ((y[N] = { type: Y.pattern, message: w, ref: l, ...G(Y.pattern, w) }), !r))
        return Z(w), y;
    }
    if (b) {
      if (ae(b)) {
        const S = await b(x, i);
        const w = sr(S, j);
        if (w && ((y[N] = { ...w, ...G(Y.validate, w.message) }), !r)) return Z(w.message), y;
      } else if (U(b)) {
        let S = {};
        for (const w in b) {
          if (!(q(S) || r)) break;
          const L = sr(await b[w](x, i), j, w);
          L && ((S = { ...L, ...G(w, L.message) }), Z(L.message), r && (y[N] = S));
        }
        if (!q(S) && ((y[N] = { ref: j, ...S }), !r)) return y;
      }
    }
    return Z(!0), y;
  };
function ke(e, i) {
  return [...e, ...$(i)];
}
var Ce = (e) => (Array.isArray(e) ? e.map(() => {}) : void 0);
function Ee(e, i, r) {
  return [...e.slice(0, i), ...$(r), ...e.slice(i)];
}
var Le = (e, i, r) => (Array.isArray(e) ? (C(e[r]) && (e[r] = void 0), e.splice(r, 0, e.splice(i, 1)[0]), e) : []);
function Oe(e, i) {
  return [...$(i), ...$(e)];
}
function Ir(e, i) {
  let r = 0;
  const n = [...e];
  for (const s of i) n.splice(s - r, 1), r++;
  return ue(n).length ? n : [];
}
var Re = (e, i) =>
    C(i)
      ? []
      : Ir(
          e,
          $(i).sort((r, n) => r - n),
        );
var Te = (e, i, r) => {
    e[i] = [e[r], (e[r] = e[i])][0];
  };
function Nr(e, i) {
  const r = i.slice(0, -1).length;
  let n = 0;
  while (n < r) e = C(e) ? n++ : e[i[n++]];
  return e;
}
function Pr(e) {
  for (const i in e) if (!C(e[i])) return !1;
  return !0;
}
function M(e, i) {
  const r = Array.isArray(i) ? i : $e(i) ? [i] : gr(i);
  const n = r.length === 1 ? e : Nr(e, r);
  const s = r.length - 1;
  const l = r[s];
  return n && n[l] = undefined, s !== 0 && ((U(n) && q(n)) || (Array.isArray(n) && Pr(n))) && M(e, r.slice(0, -1)), e;
}
var ir = (e, i, r) => ((e[i] = r), e);
function Yr(e) {
  const i = Ve();
  const { control: r = i.control, name: n, keyName: s = "id", shouldUnregister: l } = e;
  const [d, g] = V.useState(r._getFieldArray(n));
  const m = V.useRef(r._getFieldArray(n).map(z));
  const v = V.useRef(d);
  const D = V.useRef(n);
  const O = V.useRef(!1);
  (D.current = n),
    (v.current = d),
    r._names.array.add(n),
    e.rules && r.register(n, e.rules),
    be({
      next: ({ values: y, name: A }) => {
        if (A === D.current || !A) {
          const p = c(y, D.current);
          Array.isArray(p) && (g(p), (m.current = p.map(z)));
        }
      },
      subject: r._subjects.array,
    });
  const F = V.useCallback(
      (y) => {
        (O.current = !0), r._updateFieldArray(n, y);
      },
      [r, n],
    );
  const b = (y, A) => {
      const p = $(W(y));
      const R = ke(r._getFieldArray(n), p);
      (r._names.focus = De(n, R.length - 1, A)),
        (m.current = ke(m.current, p.map(z))),
        F(R),
        g(R),
        r._updateFieldArray(n, R, ke, { argA: Ce(y) });
    };
  const N = (y, A) => {
      const p = $(W(y));
      const R = Oe(r._getFieldArray(n), p);
      (r._names.focus = De(n, 0, A)),
        (m.current = Oe(m.current, p.map(z))),
        F(R),
        g(R),
        r._updateFieldArray(n, R, Oe, { argA: Ce(y) });
    };
  const le = (y) => {
      const A = Re(r._getFieldArray(n), y);
      (m.current = Re(m.current, y)), F(A), g(A), r._updateFieldArray(n, A, Re, { argA: y });
    };
  const te = (y, A, p) => {
      const R = $(W(A));
      const B = Ee(r._getFieldArray(n), y, R);
      (r._names.focus = De(n, y, p)),
        (m.current = Ee(m.current, y, R.map(z))),
        F(B),
        g(B),
        r._updateFieldArray(n, B, Ee, { argA: y, argB: Ce(A) });
    };
  const oe = (y, A) => {
      const p = r._getFieldArray(n);
      Te(p, y, A), Te(m.current, y, A), F(p), g(p), r._updateFieldArray(n, p, Te, { argA: y, argB: A }, !1);
    };
  const x = (y, A) => {
      const p = r._getFieldArray(n);
      Le(p, y, A), Le(m.current, y, A), F(p), g(p), r._updateFieldArray(n, p, Le, { argA: y, argB: A }, !1);
    };
  const j = (y, A) => {
      const p = W(A);
      const R = ir(r._getFieldArray(n), y, p);
      (m.current = [...R].map((B, G) => (!B || G === y ? z() : m.current[G]))),
        F(R),
        g([...R]),
        r._updateFieldArray(n, R, ir, { argA: y, argB: p }, !0, !1);
    };
  const Z = (y) => {
      const A = $(W(y));
      (m.current = A.map(z)), F([...A]), g([...A]), r._updateFieldArray(n, [...A], (p) => p, {}, !0, !1);
    };
  return (
    V.useEffect(() => {
      if (
        ((r._stateFlags.action = !1),
        je(n, r._names) && r._subjects.state.next({}),
        O.current && (!Pe(r._options.mode).isOnSubmit || r._formState.isSubmitted))
      )
        if (r._options.resolver)
          r._executeSchema([n]).then((y) => {
            const A = c(y.errors, n);
            const p = c(r._formState.errors, n);
            (p ? !A && p.type : A?.type) &&
              (A ? k(r._formState.errors, n, A) : M(r._formState.errors, n),
              r._subjects.state.next({ errors: r._formState.errors }));
          });
        else {
          const y = c(r._fields, n);
          y?._f &&
            qe(y, r._formValues, r._options.criteriaMode === K.all, r._options.shouldUseNativeValidation, !0).then(
              (A) => !q(A) && r._subjects.state.next({ errors: hr(r._formState.errors, A, n) }),
            );
        }
      r._subjects.watch.next({ name: n, values: r._formValues }),
        r._names.focus && _e(r._fields, (y) => !!y && y.startsWith(r._names.focus || "")),
        (r._names.focus = ""),
        r._updateValid();
    }, [d, n, r]),
    V.useEffect(
      () => (
        !c(r._formValues, n) && r._updateFieldArray(n),
        () => {
          (r._options.shouldUnregister || l) && r.unregister(n);
        }
      ),
      [n, r, s, l],
    ),
    {
      swap: V.useCallback(oe, [F, n, r]),
      move: V.useCallback(x, [F, n, r]),
      prepend: V.useCallback(N, [F, n, r]),
      append: V.useCallback(b, [F, n, r]),
      remove: V.useCallback(le, [F, n, r]),
      insert: V.useCallback(te, [F, n, r]),
      update: V.useCallback(j, [F, n, r]),
      replace: V.useCallback(Z, [F, n, r]),
      fields: V.useMemo(() => d.map((y, A) => ({ ...y, [s]: m.current[A] || z() })), [d, s]),
    }
  );
}
function Ue() {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (s) => {
      for (const l of e) l.next(s);
    },
    subscribe: (s) => (
      e.push(s),
      {
        unsubscribe: () => {
          e = e.filter((l) => l !== s);
        },
      }
    ),
    unsubscribe: () => {
      e = [];
    },
  };
}
var me = (e) => I(e) || !ar(e);
function re(e, i) {
  if (me(e) || me(i)) return e === i;
  if (ie(e) && ie(i)) return e.getTime() === i.getTime();
  const r = Object.keys(e);
  const n = Object.keys(i);
  if (r.length !== n.length) return !1;
  for (const s of r) {
    const l = e[s];
    if (!n.includes(s)) return !1;
    if (s !== "ref") {
      const d = i[s];
      if ((ie(l) && ie(d)) || (U(l) && U(d)) || (Array.isArray(l) && Array.isArray(d)) ? !re(l, d) : l !== d) return !1;
    }
  }
  return !0;
}
var Ar = (e) => e.type === "select-multiple";
var jr = (e) => Ke(e) || ye(e);
var Me = (e) => ve(e) && e.isConnected;
var mr = (e) => {
    for (const i in e) if (ae(e[i])) return !0;
    return !1;
  };
function Fe(e, i = {}) {
  const r = Array.isArray(e);
  if (U(e) || r)
    for (const n in e)
      Array.isArray(e[n]) || (U(e[n]) && !mr(e[n]))
        ? ((i[n] = Array.isArray(e[n]) ? [] : {}), Fe(e[n], i[n]))
        : I(e[n]) || (i[n] = !0);
  return i;
}
function Fr(e, i, r) {
  const n = Array.isArray(e);
  if (U(e) || n)
    for (const s in e)
      Array.isArray(e[s]) || (U(e[s]) && !mr(e[s]))
        ? C(i) || me(r[s])
          ? (r[s] = Array.isArray(e[s]) ? Fe(e[s], []) : { ...Fe(e[s]) })
          : Fr(e[s], I(i) ? {} : i[s], r[s])
        : re(e[s], i[s])
        ? r[s] = undefined
        : (r[s] = !0);
  return r;
}
var Be = (e, i) => Fr(e, i, Fe(i));
var Vr = (e, { valueAsNumber: i, valueAsDate: r, setValueAs: n }) =>
    C(e) ? e : i ? (e === "" ? NaN : e && +e) : r && Q(e) ? new Date(e) : n ? n(e) : e;
function Ie(e) {
  const i = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : i.disabled))
    return He(i)
      ? i.files
      : Ke(i)
      ? vr(e.refs).value
      : Ar(i)
      ? [...i.selectedOptions].map(({ value: r }) => r)
      : ye(i)
      ? _r(e.refs).value
      : Vr(C(i.value) ? e.ref.value : i.value, e);
}
var qr = (e, i, r, n) => {
    const s = {};
    for (const l of e) {
      const d = c(i, l);
      d && k(s, l, d._f);
    }
    return { criteriaMode: r, names: [...e], fields: s, shouldUseNativeValidation: n };
  };
var de = (e) => (C(e) ? e : Ae(e) ? e.source : U(e) ? (Ae(e.value) ? e.value.source : e.value) : e);
var Wr = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function nr(e, i, r) {
  const n = c(e, r);
  if (n || $e(r)) return { error: n, name: r };
  const s = r.split(".");
  while (s.length) {
    const l = s.join(".");
    const d = c(i, l);
    const g = c(e, l);
    if (d && !Array.isArray(d) && r !== l) return { name: r };
    if (g?.type) return { name: l, error: g };
    s.pop();
  }
  return { name: r };
}
var $r = (e, i, r, n, s) =>
    s.isOnAll
      ? !1
      : !r && s.isOnTouch
      ? !(i || e)
      : (r ? n.isOnBlur : s.isOnBlur)
      ? !e
      : (r ? n.isOnChange : s.isOnChange)
      ? e
      : !0;
var Hr = (e, i) => !ue(c(e, i)).length && M(e, i);
const Kr = { mode: K.onSubmit, reValidateMode: K.onChange, shouldFocusError: !0 };
function Zr(e = {}, i) {
  let r = { ...Kr, ...e };
  const n = e.resetOptions?.keepDirtyValues;
  let s = {
      submitCount: 0,
      isDirty: !1,
      isLoading: !0,
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      errors: {},
    };
  let l = {};
  let d = U(r.defaultValues) || U(r.values) ? W(r.defaultValues || r.values) || {} : {};
  let g = r.shouldUnregister ? {} : W(d);
  let m = { action: !1, mount: !1, watch: !1 };
  let v = { mount: new Set(), unMount: new Set(), array: new Set(), watch: new Set() };
  let D;
  let O = 0;
  const F = { isDirty: !1, dirtyFields: !1, touchedFields: !1, isValidating: !1, isValid: !1, errors: !1 };
  const b = { watch: Ue(), array: Ue(), state: Ue() };
  const N = Pe(r.mode);
  const le = Pe(r.reValidateMode);
  const te = r.criteriaMode === K.all;
  const oe = (t) => (a) => {
      clearTimeout(O), (O = window.setTimeout(t, a));
    };
  const x = async (t) => {
      if (F.isValid || t) {
        const a = r.resolver ? q((await B()).errors) : await X(l, !0);
        a !== s.isValid && b.state.next({ isValid: a });
      }
    };
  const j = (t) => F.isValidating && b.state.next({ isValidating: t });
  const Z = (t, a = [], u, f, h = !0, o = !0) => {
      if (f && u) {
        if (((m.action = !0), o && Array.isArray(c(l, t)))) {
          const _ = u(c(l, t), f.argA, f.argB);
          h && k(l, t, _);
        }
        if (o && Array.isArray(c(s.errors, t))) {
          const _ = u(c(s.errors, t), f.argA, f.argB);
          h && k(s.errors, t, _), Hr(s.errors, t);
        }
        if (F.touchedFields && o && Array.isArray(c(s.touchedFields, t))) {
          const _ = u(c(s.touchedFields, t), f.argA, f.argB);
          h && k(s.touchedFields, t, _);
        }
        F.dirtyFields && (s.dirtyFields = Be(d, g)),
          b.state.next({ name: t, isDirty: w(t, a), dirtyFields: s.dirtyFields, errors: s.errors, isValid: s.isValid });
      } else k(g, t, a);
    };
  const y = (t, a) => {
      k(s.errors, t, a), b.state.next({ errors: s.errors });
    };
  const A = (t, a, u, f) => {
      const h = c(l, t);
      if (h) {
        const o = c(g, t, C(u) ? c(d, t) : u);
        C(o) || (f?.defaultChecked) || a ? k(g, t, a ? o : Ie(h._f)) : H(t, o), m.mount && x();
      }
    };
  const p = (t, a, u, f, h) => {
      let o = !1;
      let _ = !1;
      const T = { name: t };
      if (!u || f) {
        F.isDirty && ((_ = s.isDirty), (s.isDirty = T.isDirty = w()), (o = _ !== T.isDirty));
        const E = re(c(d, t), a);
        (_ = c(s.dirtyFields, t)),
          E ? M(s.dirtyFields, t) : k(s.dirtyFields, t, !0),
          (T.dirtyFields = s.dirtyFields),
          (o = o || (F.dirtyFields && _ !== !E));
      }
      if (u) {
        const E = c(s.touchedFields, t);
        E || (k(s.touchedFields, t, u), (T.touchedFields = s.touchedFields), (o = o || (F.touchedFields && E !== u)));
      }
      return o && h && b.state.next(T), o ? T : {};
    };
  const R = (t, a, u, f) => {
      const h = c(s.errors, t);
      const o = F.isValid && ne(a) && s.isValid !== a;
      if (
        (e.delayError && u
          ? ((D = oe(() => y(t, u))), D(e.delayError))
          : (clearTimeout(O), (D = null), u ? k(s.errors, t, u) : M(s.errors, t)),
        (u ? !re(h, u) : h) || !q(f) || o)
      ) {
        const _ = { ...f, ...(o && ne(a) ? { isValid: a } : {}), errors: s.errors, name: t };
        (s = { ...s, ..._ }), b.state.next(_);
      }
      j(!1);
    };
  const B = async (t) => await r.resolver(g, r.context, qr(t || v.mount, l, r.criteriaMode, r.shouldUseNativeValidation));
  const G = async (t) => {
      const { errors: a } = await B();
      if (t)
        for (const u of t) {
          const f = c(a, u);
          f ? k(s.errors, u, f) : M(s.errors, u);
        }
      else s.errors = a;
      return a;
    };
  const X = async (t, a, u = { valid: !0 }) => {
      for (const f in t) {
        const h = t[f];
        if (h) {
          const { _f: o, ..._ } = h;
          if (o) {
            const T = v.array.has(o.name);
            const E = await qe(h, g, te, r.shouldUseNativeValidation, T);
            if (E[o.name] && ((u.valid = !1), a)) break;
            !a && (c(E, o.name) ? (T ? hr(s.errors, E, o.name) : k(s.errors, o.name, E[o.name])) : M(s.errors, o.name));
          }
          _ && (await X(_, a, u));
        }
      }
      return u.valid;
    };
  const S = () => {
      for (const t of v.unMount) {
        const a = c(l, t);
        a && (a._f.refs ? a._f.refs.every((u) => !Me(u)) : !Me(a._f.ref)) && xe(t);
      }
      v.unMount = new Set();
    };
  const w = (t, a) => (t && a && k(g, t, a), !re(Ze(), d));
  const L = (t, a, u) => yr(t, v, { ...(m.mount ? g : C(a) ? d : Q(t) ? { [t]: a } : a) }, u, a);
  const P = (t) => ue(c(m.mount ? g : d, t, e.shouldUnregister ? c(d, t, []) : []));
  const H = (t, a, u = {}) => {
      const f = c(l, t);
      let h = a;
      if (f) {
        const o = f._f;
        o &&
          (!o.disabled && k(g, t, Vr(a, o)),
          (h = ve(o.ref) && I(a) ? "" : a),
          Ar(o.ref)
            ? [...o.ref.options].forEach((_) => (_.selected = h.includes(_.value)))
            : o.refs
            ? ye(o.ref)
              ? o.refs.length > 1
                ? o.refs.forEach(
                    (_) =>
                      (!(_.defaultChecked && _.disabled)) &&
                      (_.checked = Array.isArray(h) ? !!h.find((T) => T === _.value) : h === _.value),
                  )
                : o.refs[0] && (o.refs[0].checked = !!h)
              : o.refs.forEach((_) => (_.checked = _.value === h))
            : He(o.ref)
            ? (o.ref.value = "")
            : ((o.ref.value = h), o.ref.type || b.watch.next({ name: t })));
      }
      (u.shouldDirty || u.shouldTouch) && p(t, h, u.shouldTouch, u.shouldDirty, !0), u.shouldValidate && fe(t);
    };
  const J = (t, a, u) => {
      for (const f in a) {
        const h = a[f];
        const o = `${t}.${f}`;
        const _ = c(l, o);
        (v.array.has(t) || !me(h) || (_ && !_._f)) && !ie(h) ? J(o, h, u) : H(o, h, u);
      }
    };
  const ee = (t, a, u = {}) => {
      const f = c(l, t);
      const h = v.array.has(t);
      const o = W(a);
      k(g, t, o),
        h
          ? (b.array.next({ name: t, values: g }),
            (F.isDirty || F.dirtyFields) &&
              u.shouldDirty &&
              b.state.next({ name: t, dirtyFields: Be(d, g), isDirty: w(t, o) }))
          : f && !f._f && !I(o)
          ? J(t, o, u)
          : H(t, o, u),
        je(t, v) && b.state.next({}),
        b.watch.next({ name: t }),
        !m.mount && i();
    };
  const ce = async (t) => {
      const a = t.target;
      let u = a.name;
      const f = c(l, u);
      const h = () => (a.type ? Ie(f._f) : ur(t));
      if (f) {
        let o;
        let _;
        const T = h();
        const E = t.type === he.BLUR || t.type === he.FOCUS_OUT;
        const Cr =
            (!(((Wr(f._f) || r.resolver ) || c(s.errors, u) ) || f._f.deps)) ||
            $r(E, c(s.touchedFields, u), s.isSubmitted, le, N);
        const we = je(u, v, E);
        k(g, u, T), E ? (f._f.onBlur?.(t), D?.(0)) : f._f.onChange?.(t);
        const Se = p(u, T, E, !1);
        const Er = !q(Se) || we;
        if ((!E && b.watch.next({ name: u, type: t.type }), Cr))
          return F.isValid && x(), Er && b.state.next({ name: u, ...(we ? {} : Se) });
        if ((!E && we && b.state.next({}), j(!0), r.resolver)) {
          const { errors: Ye } = await B([u]);
          const Lr = nr(s.errors, l, u);
          const ze = nr(Ye, l, Lr.name || u);
          (o = ze.error), (u = ze.name), (_ = q(Ye));
        } else
          (o = (await qe(f, g, te, r.shouldUseNativeValidation))[u]), o ? (_ = !1) : F.isValid && (_ = await X(l, !0));
        f._f.deps && fe(f._f.deps), R(u, _, o, Se);
      }
    };
  const fe = async (t, a = {}) => {
      let u;
      let f;
      const h = $(t);
      if ((j(!0), r.resolver)) {
        const o = await G(C(t) ? t : h);
        (u = q(o)), (f = t ? !h.some((_) => c(o, _)) : u);
      } else
        t
          ? ((f = (
              await Promise.all(
                h.map(async (o) => {
                  const _ = c(l, o);
                  return await X(_?._f ? { [o]: _ } : _);
                }),
              )
            ).every(Boolean)),
            !(!(f || s.isValid)) && x())
          : (f = u = await X(l));
      return (
        b.state.next({
          ...(!Q(t) || (F.isValid && u !== s.isValid) ? {} : { name: t }),
          ...(r.resolver || !t ? { isValid: u } : {}),
          errors: s.errors,
          isValidating: !1,
        }),
        a.shouldFocus && !f && _e(l, (o) => o && c(s.errors, o), t ? h : v.mount),
        f
      );
    };
  const Ze = (t) => {
      const a = { ...d, ...(m.mount ? g : {}) };
      return C(t) ? a : Q(t) ? c(a, t) : t.map((u) => c(a, u));
    };
  const Ge = (t, a) => ({
      invalid: !!c((a || s).errors, t),
      isDirty: !!c((a || s).dirtyFields, t),
      isTouched: !!c((a || s).touchedFields, t),
      error: c((a || s).errors, t),
    });
  const br = (t) => {
      t && $(t).forEach((a) => M(s.errors, a)), b.state.next({ errors: t ? s.errors : {} });
    };
  const xr = (t, a, u) => {
      const f = c(l, t, { _f: {} })._f?.ref;
      k(s.errors, t, { ...a, ref: f }),
        b.state.next({ name: t, errors: s.errors, isValid: !1 }),
        u?.shouldFocus && f && f.focus && f.focus();
    };
  const pr = (t, a) => (ae(t) ? b.watch.subscribe({ next: (u) => t(L(void 0, a), u) }) : L(t, a, !0));
  const xe = (t, a = {}) => {
      for (const u of t ? $(t) : v.mount)
        v.mount.delete(u),
          v.array.delete(u),
          c(l, u) &&
            (a.keepValue || (M(l, u), M(g, u)),
            !a.keepError && M(s.errors, u),
            !a.keepDirty && M(s.dirtyFields, u),
            !a.keepTouched && M(s.touchedFields, u),
            !(r.shouldUnregister || a.keepDefaultValue ) && M(d, u));
      b.watch.next({}), b.state.next({ ...s, ...(a.keepDirty ? { isDirty: w() } : {}) }), !a.keepIsValid && x();
    };
  const pe = (t, a = {}) => {
      let u = c(l, t);
      const f = ne(a.disabled);
      return (
        k(l, t, { ...(u || {}), _f: { ...(u?._f ? u._f : { ref: { name: t } }), name: t, mount: !0, ...a } }),
        v.mount.add(t),
        u ? f && k(g, t, a.disabled ? void 0 : c(g, t, Ie(u._f))) : A(t, !0, a.value),
        {
          ...(f ? { disabled: a.disabled } : {}),
          ...(r.shouldUseNativeValidation
            ? {
                required: !!a.required,
                min: de(a.min),
                max: de(a.max),
                minLength: de(a.minLength),
                maxLength: de(a.maxLength),
                pattern: de(a.pattern),
              }
            : {}),
          name: t,
          onChange: ce,
          onBlur: ce,
          ref: (h) => {
            if (h) {
              pe(t, a), (u = c(l, t));
              const o = (C(h.value) && h.querySelectorAll && h.querySelectorAll("input,select,textarea")[0]) || h;
              const _ = jr(o);
              const T = u._f.refs || [];
              if (_ ? T.find((E) => E === o) : o === u._f.ref) return;
              k(l, t, {
                _f: {
                  ...u._f,
                  ...(_
                    ? {
                        refs: [...T.filter(Me), o, ...(Array.isArray(c(d, t)) ? [{}] : [])],
                        ref: { type: o.type, name: t },
                      }
                    : { ref: o }),
                },
              }),
                A(t, !1, void 0, o);
            } else
              (u = c(l, t, {})),
                u._f && (u._f.mount = !1),
                (r.shouldUnregister || a.shouldUnregister) && !(lr(v.array, t) && m.action) && v.unMount.add(t);
          },
        }
      );
    };
  const Je = () => r.shouldFocusError && _e(l, (t) => t && c(s.errors, t), v.mount);
  const wr = (t, a) => async (u) => {
      u && (u.preventDefault?.(), u.persist?.());
      let f = W(g);
      if ((b.state.next({ isSubmitting: !0 }), r.resolver)) {
        const { errors: h, values: o } = await B();
        (s.errors = h), (f = o);
      } else await X(l);
      M(s.errors, "root"),
        q(s.errors) ? (b.state.next({ errors: {} }), await t(f, u)) : (a && (await a({ ...s.errors }, u)), Je()),
        b.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: q(s.errors),
          submitCount: s.submitCount + 1,
          errors: s.errors,
        });
    };
  const Sr = (t, a = {}) => {
      c(l, t) &&
        (C(a.defaultValue) ? ee(t, c(d, t)) : (ee(t, a.defaultValue), k(d, t, a.defaultValue)),
        a.keepTouched || M(s.touchedFields, t),
        a.keepDirty || (M(s.dirtyFields, t), (s.isDirty = a.defaultValue ? w(t, c(d, t)) : w())),
        a.keepError || (M(s.errors, t), F.isValid && x()),
        b.state.next({ ...s }));
    };
  const Qe = (t, a = {}) => {
      const u = t || d;
      const f = W(u);
      const h = t && !q(t) ? f : d;
      if ((a.keepDefaultValues || (d = u), !a.keepValues)) {
        if (a.keepDirtyValues || n) for (const o of v.mount) c(s.dirtyFields, o) ? k(h, o, c(g, o)) : ee(o, c(h, o));
        else {
          if (We && C(t))
            for (const o of v.mount) {
              const _ = c(l, o);
              if (_?._f) {
                const T = Array.isArray(_._f.refs) ? _._f.refs[0] : _._f.ref;
                if (ve(T)) {
                  const E = T.closest("form");
                  if (E) {
                    E.reset();
                    break;
                  }
                }
              }
            }
          l = {};
        }
        (g = e.shouldUnregister ? (a.keepDefaultValues ? W(d) : {}) : f),
          b.array.next({ values: h }),
          b.watch.next({ values: h });
      }
      (v = { mount: new Set(), unMount: new Set(), array: new Set(), watch: new Set(), watchAll: !1, focus: "" }),
        !m.mount && i(),
        (m.mount = !F.isValid || !!a.keepIsValid),
        (m.watch = !!e.shouldUnregister),
        b.state.next({
          submitCount: a.keepSubmitCount ? s.submitCount : 0,
          isDirty: a.keepDirty || a.keepDirtyValues ? s.isDirty : !!(a.keepDefaultValues && !re(t, d)),
          isSubmitted: a.keepIsSubmitted ? s.isSubmitted : !1,
          dirtyFields: a.keepDirty || a.keepDirtyValues ? s.dirtyFields : a.keepDefaultValues && t ? Be(d, t) : {},
          touchedFields: a.keepTouched ? s.touchedFields : {},
          errors: a.keepErrors ? s.errors : {},
          isSubmitting: !1,
          isSubmitSuccessful: !1,
        });
    };
  const Xe = (t, a) => Qe(ae(t) ? t(g) : t, a);
  const Dr = (t, a = {}) => {
      const u = c(l, t);
      const f = u?._f;
      if (f) {
        const h = f.refs ? f.refs[0] : f.ref;
        h.focus && (h.focus(), a.shouldSelect && h.select());
      }
    };
  const kr = (t) => {
      s = { ...s, ...t };
    };
  return (
    ae(r.defaultValues) &&
      r.defaultValues().then((t) => {
        Xe(t, r.resetOptions), b.state.next({ isLoading: !1 });
      }),
    {
      control: {
        register: pe,
        unregister: xe,
        getFieldState: Ge,
        _executeSchema: B,
        _focusError: Je,
        _getWatch: L,
        _getDirty: w,
        _updateValid: x,
        _removeUnmounted: S,
        _updateFieldArray: Z,
        _getFieldArray: P,
        _reset: Qe,
        _updateFormState: kr,
        _subjects: b,
        _proxyFormState: F,
        get _fields() {
          return l;
        },
        get _formValues() {
          return g;
        },
        get _stateFlags() {
          return m;
        },
        set _stateFlags(t) {
          m = t;
        },
        get _defaultValues() {
          return d;
        },
        get _names() {
          return v;
        },
        set _names(t) {
          v = t;
        },
        get _formState() {
          return s;
        },
        set _formState(t) {
          s = t;
        },
        get _options() {
          return r;
        },
        set _options(t) {
          r = { ...r, ...t };
        },
      },
      trigger: fe,
      register: pe,
      handleSubmit: wr,
      watch: pr,
      setValue: ee,
      getValues: Ze,
      reset: Xe,
      resetField: Sr,
      clearErrors: br,
      unregister: xe,
      setError: xr,
      setFocus: Dr,
      getFieldState: Ge,
    }
  );
}
function zr(e = {}) {
  const i = V.useRef();
  const [r, n] = V.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: !0,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      errors: {},
      defaultValues: ae(e.defaultValues) ? void 0 : e.defaultValues,
    });
  i.current || (i.current = { ...Zr(e, () => n((l) => ({ ...l }))), formState: r });
  const s = i.current.control;
  return (
    (s._options = e),
    be({
      subject: s._subjects.state,
      next: (l) => {
        fr(l, s._proxyFormState, s._updateFormState, !0) && n({ ...s._formState });
      },
    }),
    V.useEffect(() => {
      s._stateFlags.mount || (s._updateValid(), (s._stateFlags.mount = !0)),
        s._stateFlags.watch && ((s._stateFlags.watch = !1), s._subjects.state.next({})),
        s._removeUnmounted();
    }),
    V.useEffect(() => {
      e.values && !re(e.values, s._defaultValues) && s._reset(e.values, s._options.resetOptions);
    }, [e.values, s]),
    V.useEffect(() => {
      r.submitCount && s._focusError();
    }, [s, r.submitCount]),
    (i.current.formState = cr(r, s)),
    i.current
  );
}
export { Xr as C, Qr as F, Jr as M, Ur as a, zr as b, Yr as c, c as g, Ve as u };
