const Koa = require("koa");
const app = new Koa();

const KoaBody = require("koa-body");
const router = require("./router/index");

// add Body Parser
app.use(KoaBody());
// apply routes
app.use(router.routes());
app.use(router.allowedMethods());

// add middleware
app.use((ctx, next) => {
  console.log(
    "=========== middleware REQ Headers ===========\n",
    ctx.req.headers
  );
  next();
});

// Error handler
app.on("error", err => {
  console.error(
    "\n=========== KOA server error ===========\n",
    err,
    "\n========================================"
  );
});

// spinup server
app.listen(3000, () => console.log("Koa server is running", app));
