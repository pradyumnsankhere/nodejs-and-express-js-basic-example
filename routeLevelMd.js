// Route level Middle ware  example
const express = require("express");
const app = express();
const reqfilter = require("./middleWare");
const route = express.Router();

route.use(reqfilter);
app.get("/", (req, res) => {
  res.send("Hello, this is the home page");
});

route.get("/users", (req, res) => {
  res.send("This is the users page");
});
app.get("/about", (req, res) => {
  res.send("This is the  about page");
});

app.use("/", route);
app.listen(2000, () => {
  console.log("Listening on port 2000");
});
