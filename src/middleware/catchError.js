const { HttpException } = require("../core/httpException");

const catchError = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    const isHttpException = error instanceof HttpException;
    const isDev = process.env.NODE_ENV === "development";
    if (isDev && !isHttpException) {
      throw error;
    }
    if (isHttpException) {
      ctx.body = {
        errorCode: error.errorCode,
        msg: error.msg,
        requestUrl: `${ctx.method} ${ctx.path}`
      };
      ctx.status = error.code;
    } else {
      ctx.body = {
        errorCode: 999,
        msg: "服务器内部错误",
        requestUrl: `${ctx.method} ${ctx.path}`
      };
      ctx.status = 500;
    }
  }
};

module.exports = catchError;
