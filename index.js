var express=require('express');
var router=require('./router/router');
var bodyParser=require('body-parser');
var app=express();

app.set('port',process.env.PORT||3000);
app.set('views',__dirname+'/views');
app.set('view engine','jade');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));

app.use('/',router);

app.listen(app.get('port'),function(){
    console.log('Express started on http://localhost/:'+app.get('port')+';press Ctrl-C to terminate.');
});