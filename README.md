# douban-movie-server

node获取豆瓣电影信息

## 接口参数验证

`rules` 内的条件请参照 `validator`

在 `ctx.send` 前调用

```js
const Validator = require("../../core/validator");
new Validator([
    {
      field: name,          // 参数字段
      isOptional: true,     // 是否必传，默认 true
      errMsg: "自定义错误信息",
      rules: [{ type: "isInt", param: { min: 120 } }],       // 验证条件
      custom() {
          // 自定义验证，必须return true/false
          // 优先验证 rules
          return true;
      }
    }
]);
```
