import "./index-4c5f9ec7.js";
function p(r) {
  try {
    if (r.split(".").length !== 3 || typeof r !== "string") return null;
    var e = r.split(".")[1];
    var n = "=".repeat((4 - (e.length % 4)) % 4);
    var o = e.replace("-", "+").replace("_", "/") + n;
    var a = decodeURIComponent(
        window
          .atob(o)
          .split("")
          .map(function (t) {
            return `%${(`00${t.charCodeAt(0).toString(16)}`).slice(-2)}`;
          })
          .join(""),
      );
    var i = JSON.parse(a);
    return i;
  } catch {
    return null;
  }
}
export { p as d };
