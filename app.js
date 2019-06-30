const koa = require("koa");
const app = new koa();

// add first middleware
app.use(ctx => {
  console.log(ctx);
  ctx.body = "Hello World";
});

// spinup server
app.listen(3000, () => console.log("Koa server is running", app));
