import * as bodyParser from "body-parser";
import * as express from "express";
import * as path from "path";

// controllers
import WebController from "./controller/WebController";

// express
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "5mb"
  })
);

// static file
app.use(
  `/assets/:version`,
  express.static(path.join(__dirname, "../public"), {
    maxAge: process.env.NODE_ENV === "production" ? 1000 * 60 * 60 * 24 : 0
  })
);
app.use(
  express.static(path.join(__dirname, "../assets"), {
    maxAge: process.env.NODE_ENV === "production" ? 1000 * 60 * 60 * 24 : 0
  })
);

// router
app.use(WebController);

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "4000";
app.listen(parseInt(PORT, 10), HOST, () => {
  console.log(`Listen on http://${HOST}:${PORT}`);
});

export default app;
