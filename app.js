var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sqlite3 = require('sqlite3').verbose();
var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/',express.static(path.join(__dirname, 'public')));
app.use('/Galeri/',express.static(path.join(__dirname, 'public')))
app.use('/Hakkinda/',express.static(path.join(__dirname, 'public')))
app.use('/Magaza/',express.static(path.join(__dirname, 'public')))
app.use('/', indexRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

let gaziokculukDB = new sqlite3.Database("./gaziokculuk.db", (err) => {
  if(err) {
      console.log(err.message);
  }
  console.log("Connected to database!");
});
dbSchema = "create table if not exists haberler(haber_id INTEGER NOT NULL PRIMARY KEY, haber_basligi nvarchar(255), haber_icerigi nvarchar(1000), haber_tarihi date, haber_foto_yolu nvarchar(255));"+

" create table if not exists malzemeler(malzeme_id INTEGER NOT NULL PRIMARY KEY, malzeme_adi nvarchar(255), malzeme_fiyati varchar(100), malzeme_ozellik nvarchar(255), malzeme_foto_yolu nvarchar(255));"+

" create table if not exists sifirmalzemeler(malzeme_id INTEGER NOT NULL PRIMARY KEY, malzeme_adi nvarchar(255),"+
"malzeme_fiyati varchar(100), malzeme_ozellik nvarchar(255), malzeme_foto_yolu nvarchar(255));"+

" create table if not exists kurslar(kurs_id INTEGER NOT NULL PRIMARY KEY, kurs_adi nvarchar(255), kurs_baslangic_saati nvarchar(255),"+
"kurs_bitis_saati nvarchar(255), kurs_gunleri nvarchar(255), egitmen_adi nvarchar(255));"+

" create table if not exists okculukhakkinda(baslik_id INTEGER NOT NULL PRIMARY KEY, baslik_adi nvarchar(255), baslik_icerigi nvarchar(255), baslik_tarihi date, baslik_foto_adi nvarchar(255));"+

" create table if not exists hakkinda(hakkinda_id INTEGER NOT NULL PRIMARY KEY, biz_kimiz nvarchar(255), tarihce nvarchar(255), misyonumuz nvarchar(255), vizyonumuz nvarchar(255));"+

 " create table if not exists iletisim(iletisim_id INTEGER NOT NULL PRIMARY KEY, telefon1 nvarchar(255), telefon2 nvarchar(255), adres nvarchar(255), mail nvarchar(255), facebook nvarchar(255), twitter nvarchar(255), instagram nvarchar(255), youtube nvarchar(255));"+

 " insert into iletisim (telefon1,telefon2,adres,mail,facebook,twitter,instagram,youtube) values ('telefon1','telefon2','adres','mail','facebook','twitter','instagram','youtube');"+
 
 " insert into hakkinda (biz_kimiz,tarihce,misyonumuz,vizyonumuz) values ('biz kimiz','tarihce','misyonumuz','vizyonumuz');"
;
gaziokculukDB.exec(dbSchema, function(err){
  if (err) {
      console.log(err)
  }
});
gaziokculukDB.close();





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
