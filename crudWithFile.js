const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "CrudwithFile");
const filePath = `${dirPath}/demofile.txt`;

fs.writeFileSync(filePath,"This is a file content")    // create the fie

fs.readFile(filePath, "utf8", (err, item) => {   //  reading  the file
   
  console.log("fileContent", item);
});

fs.appendFile(filePath, "add the content", (e) => {   //update the file 
  if (!e) {
    console.log("add  content");
  } else {
    console.log("error", e);
  }
});


fs.rename(filePath,`${dirPath}/demof.txt`,(e)=>{      // rename  the file 
    console.log("file",e)
})


fs.unlinkSync(`${dirPath}/demof.txt`)         // delete the file 