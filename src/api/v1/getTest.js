const Router = require("koa-router");
const router = new Router({
  prefix: "/v1"
});
const Validator = require("../../core/validator");

router.get("/hello/:name", async ctx => {
  const name = ctx.params.id;
  new Validator([
    {
      field: name,
      isOptional: false,
      rules: [{ type: "isInt", param: { min: 120 } }]
    }
  ]);
  ctx.body = {
    key: name
  };
});

module.exports = router;
