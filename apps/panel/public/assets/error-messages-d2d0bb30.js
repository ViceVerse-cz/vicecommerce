const t = (s) => {
  var a;
  var g;
  let e = (g = (a = s == null ? void 0 : s.response) == null ? void 0 : a.data) == null ? void 0 : g.message;
  return e[0].message && (e = e[0].message), e || (e = "Something went wrong, Please try again."), e;
};
export { t as g };
