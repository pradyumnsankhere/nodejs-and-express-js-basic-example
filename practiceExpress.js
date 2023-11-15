//Middle ware  basic example 
const express = require("express");
const app = express();

const reqfilter = (req, res, next) => {
  if (! req.query.age) {
    res.send("please provide  the age");
  } else if (req.query.age<18){
    
    res.send("please provide   the valid   age");
  }
  else{
    next();
  }

};
app.use(reqfilter);    //application route they conditon work all routes
app.get("/", (req, res) => {
  res.send("Hello, this is the home page");
});

app.get("/users", (req, res) => {
  res.send("This is the users page");
});

app.listen(2000, () => {
  console.log("Listening on port 2000");
});
