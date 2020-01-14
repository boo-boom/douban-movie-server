const Router = require("koa-router");
const router = new Router({
  prefix: "/v1"
});

router.get("/hello/:name", async ctx => {
  const name = ctx.params.name;
  // throw new Error("123123");
  // console.log(global.errs);
  ctx.response.body = `<h5>Hello, ${name}!</h5>`;
});

module.exports = router;
