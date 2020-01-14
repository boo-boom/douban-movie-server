const Router = require("koa-router");
const requireDirectory = require("require-directory");

class InitManager {
  static initCore(app) {
    InitManager.app = app;
    InitManager.initLoadRouters();
    InitManager.loadHttpException();
  }

  static initLoadRouters() {
    const apiDirectory = `${process.cwd()}/src/api`;
    requireDirectory(module, apiDirectory, {
      visit: obj => {
        if (obj instanceof Router) {
          InitManager.app.use(obj.routes());
        }
      }
    });
  }

  static loadHttpException() {
    const errs = require("./httpException");
    global.errs = errs;
  }
}

module.exports = InitManager;
