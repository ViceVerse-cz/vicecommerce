import { a1 as n, a2 as a, a4 as o } from "./index-4c5f9ec7.js";
function u(i) {
  return n(this, void 0, void 0, function () {
    var t;
    return a(this, function (e) {
      switch (e.label) {
        case 0:
          return [
            4,
            o(
              () => import("./index.umd-26b70e12.js").then((r) => r.i),
              ["assets/index.umd-26b70e12.js", "assets/index-4c5f9ec7.js", "assets/index-dd652260.css"],
            ),
          ];
        case 1:
          return (t = e.sent()), (i._plugins = t), [2];
      }
    });
  });
}
export { u as loadLegacyVideoPlugins };
