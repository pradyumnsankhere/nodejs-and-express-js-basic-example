
 module.exports= reqfilter = (req, res, next) => {
    if (! req.query.age) {
      res.send("please provide  the age");
    } else if (req.query.age<18){
      
      res.send("please provide   the valid   age");
    }
    else{
      next();
    }
  
  };