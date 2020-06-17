var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var mysql = require('mysql');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'hjhj0428',
  database: 'd3'
});

connection.connect(function (err) {   
  if (err) {     
    console.error('mysql connection error');     
    console.error(err);     
    throw err;   
  } 
});

// app.use('/', function(req,res){
//   const sql = 'SELECT * FROM replies';
//   connection.query(sql, (err, results, field)=>{
//     console.log(results);

//   })
// })

// app.get('/api/data', function (req,res) {
//   const sql = "SELECT * from replies" 
//   connection.query(sql , function (error, results, fields) {
//       if(error) console.log(error);
//       res.send(results);
//       // res.json({
//       //     success : true,
//       //     data : results
//       // })
      
//     }
//   );
// });

app.get('/api/data/like', function (req,res) {
  const sql = "SELECT * from replies ORDER BY like_num DESC" 
  connection.query(sql , function (error, results, fields) {
      if(error) console.log(error);
      res.send(results);
      // res.json({
      //     success : true,
      //     data : results
      // })
      
    }
  );
});

app.get('/api/data/reply', function (req,res) {
  const sql = "SELECT * from replies ORDER BY re_reply_num DESC" 
  connection.query(sql , function (error, results, fields) {
      if(error) console.log(error);
      res.send(results);
      // res.json({
      //     success : true,
      //     data : results
      // })
      
    }
  );
});

app.get('/api/data/like_rate', function (req,res) {
  const sql = "SELECT * from replies ORDER BY (like_num/like_num+hate_num) DESC" 
  connection.query(sql , function (error, results, fields) {
      if(error) console.log(error);
      res.send(results);
      // res.json({
      //     success : true,
      //     data : results
      // })
      
    }
  );
});

app.get('/api/data/sent', function (req,res) {
  const sql = "SELECT * from replies ORDER BY sentiment DESC" 
  connection.query(sql , function (error, results, fields) {
      if(error) console.log(error);
      res.send(results);
      // res.json({
      //     success : true,
      //     data : results
      // })
      
    }
  );
});

app.get('/api/data/node', function (req,res) {
  const sql = "select * from node_test where name in ('코로나19', '바이러스','원인', '복제', '고양이','백신','감염');" 
  connection.query(sql , function (error, results, fields) {
      if(error) console.log(error);
      res.send(results);
      // res.json({
      //     success : true,
      //     data : results
      // })
      
    }
  );
});

app.get('/api/data/link', function (req,res) {
  const sql = "select * from link_test where sid in ('483','526','866','1012','1155') and tid in ('483','526','866','1012','1155');" 
  connection.query(sql , function (error, results, fields) {
      if(error) console.log(error);
      res.send(results);
      
    }
  );
});


app.get('/api/data/user_info', function (req,res) {
  const sql = "select user_nick,user_profile_date,user_total_rp,user_response,"
  sql = sql + "user_sympathy,user_recent_write,user_recent_delete,user_recent_sympathy,"
  sql = sql + "user_recent_sympathy_rate,user_recent_delete_rate,"
  sql = sql + "user_history_neg,user_history_neu,user_history_pos,user_history_nan from users;" 
  connection.query(sql , function (error, results, fields) {
      if(error) console.log(error);
      res.send(results);
      
    }
  );
});


// app.get('/',function(req,res){
//   connection.query('S', function(error, results){
//     if(err){
//       console.log(err);
//       throw err;
//     }
//     res.status(200).send(results);
//   })
// })
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

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
