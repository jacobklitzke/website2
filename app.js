var express = require('express');
var app = express();

app.use('/views', express.static(__dirname + '/views/'));
app.use('/angular', express.static(__dirname + '/node_modules/angular/'));
app.use('/animate', express.static(__dirname + '/node_modules/angular-animate/'));
app.use('/aria', express.static(__dirname + '/node_modules/angular-aria/'));
app.use('/router', express.static(__dirname + '/node_modules/angular-route/'));
app.use('/controllers', express.static(__dirname + '/controllers/'));
app.use('/material', express.static(__dirname + '/node_modules/angular-material'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery'));
app.use('/fonts', express.static(__dirname + '/node_modules/font-awesome'));
app.use('/styles', express.static(__dirname + '/styles'));
app.use('/images', express.static(__dirname + '/images'));




app.get('/', function (req, res) {
  res.sendFile('./views/mainPage.html', { root: __dirname });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
