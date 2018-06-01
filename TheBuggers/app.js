var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cookieParser = require('cookie-parser')
var cors = require('cors')
var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');
var jwt = require('jwt-express');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(jwt.init('secret'));
app.use(express.static(path.join(__dirname, 'public')));



  /*var user = {
    is_admin : true,
    first : "simone",
    last: "da re"
  };
  var jwt = res.jwt({
      admin: user.is_admin,
      name: user.first + ' ' + user.last
  });
  console.log("Creating: " + JSON.stringify(jwt));
  */
  app.post('/posts', function(req, res) {
    console.log("CIAOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
    res.json({lol : true})
  })
  app.post('/login', function(req, res) {
    /*var user = {
      is_admin : true,
      first : "simone",
      last: "da re"
    };
    var jwt = res.jwt({
        admin: user.is_admin,
        name: user.first + ' ' + user.last
    });
    console.log("Creating: " + JSON.stringify(jwt));
    res.send(jwt.token);*/
  
    //Prova generale per login -- START
    let email = req.body.email;
    let password = req.body.password;
  
    let hash = bcrypt.hashSync(password, 10);
    console.log("Hash: " + hash);
    
    login.loginClient(email, password, res);
    res.send("ciao");
    //email: prova
    //password hash: f36a1756634f1e6665ec124d5d9c8b79ee8a971ddd2cdeadde5ee7ab4ae791cc
    // -- END
  // res.send(jwt.token);
});


app.get('/protected', jwt.require('admin'), function(req, res) {
  res.send("OK")
});
app.use('/api/v1', apiRouter);
app.use('*', indexRouter);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
