import { x as a, r, j as t, a as e, S as n } from "./index-4c5f9ec7.js";
import { S as i } from "./index-5cffe34f.js";
const f = () => {
  const s = a();
  return (
    r.useEffect(() => {
      s("/a/orders");
    }, []),
    t("div", {
      className: "flex w-full h-screen justify-center items-center bg-grey-5 text-grey-90",
      children: [e(i, { title: "Home" }), e(n, { variant: "secondary" })],
    })
  );
};
export { f as default };
