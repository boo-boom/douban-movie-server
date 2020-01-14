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
      isOptional: true,
      errMsg: "自定义错误信息",
      rules: [{ type: "isInt", param: { min: 12 } }],
      custom() {
        return true;
      }
    }
  ]);
  ctx.body = {
    key: name
  };
});

module.exports = router;
