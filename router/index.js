const KoaRouter = require("koa-router");
const router = new KoaRouter();

const list = require("../api/list");

router.get("/", (ctx, next) => {
  console.log("index router");
  ctx.body = "Hello World";
  next();
});

router.get("/list/:id", async (ctx, next) => {
  const id = ctx.params.id;
  console.log(`call /list/${id} endpoint`);
  try {
    ctx.body = await list.get(id);
  } catch (error) {
    errorHandler(ctx, "api list by id", error);
  }
  next();
});

router.get("/list", async (ctx, next) => {
  console.log("call /list endpoint");
  try {
    ctx.body = await list.get();
  } catch (error) {
    errorHandler(ctx, "api list", error);
  }
  next();
});

function errorHandler(ctx, context, error) {
  console.error(`Error context: "${context}"`);
  const { status, error: msg } = error;
  ctx.throw(status, msg, error);
}

module.exports = router;
