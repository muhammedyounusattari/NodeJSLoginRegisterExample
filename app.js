var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })



app.get('/',function(request,response){
    response.send("<h1>Hello World</h1>")
});
app.get('/login.html',function(request,response){
   // response.send('<h1>Login</h1>');
    console.log(__dirname);
    response.sendFile(__dirname+"/"+"login.html");
});

app.get('/register.html',function(request,response){
    response.sendFile(__dirname+"/"+"register.html");
})

app.post('/loginUser',urlencodedParser,function(request,response){

       console.log(request.body);
       var uname = request.body.uname;
       var pwd = request.body.pwd;
       if(uname==pwd)
            response.sendFile(__dirname+"/"+"success.html");
       else
           response.sendFile(__dirname+"/"+"error.html");

});



app.listen('8080');