const Koa = require("koa");
const koaBody = require("koa-body");
const app = new Koa();
const config = require("./config");
const InitManager = require("./src/core/init");
const catchError = require("./src/middleware/catchError");

app.use(catchError);
InitManager.initCore(app);

app.use(koaBody());
app.listen(config.port, () => {
  console.log(`This server is running at http://localhost:${config.port}`);
});
