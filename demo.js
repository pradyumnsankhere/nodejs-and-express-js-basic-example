module.exports={
    x:10,
  y:20,
}
// express js 
 const express = require('express');
const path=require('path')
 const app = express();

 app.get('/', (req, res) => {
  console.log('query params',req.query)  // achive the query params 
  res.send('Hello  this a  home page ');

});

app.get('/about', (req, res) => {
  res.send(`
  <input type="text"/>
  <a href="/">Go to home page</a>
  `);
});

const publicpath=path.join(__dirname,'public')
app.use(express.static(publicpath))   

app.get('/demo1', (req, res) => {
   
  res.sendFile(`${publicpath}/demo1.html`);

});
app.get('*', (req, res) => {
   
  res.sendFile(`${publicpath}/pageNotFound.html`);

});

app.set("view engie","ejs")
app.get('/profile',(req,resp)=>{
   const users={
    name:'qqq',
    email:'q@gmail.com',

   }
   resp.render('profile',{users})
})

 app.listen(2000, () => {
  console.log('this  2000 port');
});

 
