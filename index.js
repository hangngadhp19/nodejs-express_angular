
//console.log("Hello word!!!");

/*
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
*/

/*
var path = require('path');
var express = require('express');
var serveStatic = require('serve-static');
var app = express();

app.use(serveStatic(path.join(__dirname, 'public')));

//Tạo port để lắng nghe request từ client gọi lên.
app.listen(3000,function(){
    console.log('Node-server running...')
});

app.get('/', function(request, response){
  response.redirect('/src/index.html');
});
*/

//Tạo port để lắng nghe request từ client gọi lên.
var path = require('path');
var express = require('express');
var serveStatic = require('serve-static');
var app = express();

app.use(serveStatic(path.join(__dirname, 'public')));

app.listen(3000,function(){
    console.log('Node server running @ http://localhost:3000')
});

var listUsers = [{id: 1, name: 'Nguyễn Văn A'}, {id: 2, name: 'Hoàng Thị B'}, {id: 3, name: 'Phan Huy C'}];

app.get('/', function(request, response){
  response.redirect('/src/index.html');
});

app.get('/api/getName/:userId', function(request, response){
  var userId = request.params.userId;
  var user = listUsers.find(u => u.id == userId)
  if(user)
    response.send(user.name);
  else
    response.send('User not found!!!')
});

