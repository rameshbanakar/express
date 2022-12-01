const express = require("express");
const app = express();
const router = express.Router();

router.use((req, res, next) => {
  console.log("time:-", Date.now());
  next();
});
router.use(
  (req, res, next) => {
    console.log("Request URL:-", req.originalUrl);
    next();
  },
  (req, res, next) => {
    console.log("Request Method:-", req.method);
    next();
  }
);
router.get("/", (req, res) => {
  res.send("welcome");
});
app.use("/", router);
app.listen(process.env.port || "5000");
