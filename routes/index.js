var express = require('express');
var router = express.Router();
const path = require('path');
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

const indexHtml = path.join(__dirname + '/../public', 'index.html');

const directoryPathKlubumuz = path.join("./public/Images", 'Klubumuz');
const directoryPathMadalyalar = path.join("./public/Images", 'Madalyalar');
const directoryPathSporcularimiz = path.join("./public/Images", 'Sporcularimiz');

const directoryPathKlubumuzVideo = path.join("./public/Videos", 'Klubumuz');
const directoryPathMadalyalarVideo = path.join("./public/Videos", 'Madalyalar');
const directoryPathSporcularimizVideo = path.join("./public/Videos", 'Sporcularimiz');
let TotalPackageCounter = 0;



/* GET /Images/Sporcularimiz */
router.get('/Images/Sporcularimiz', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    var Galeri = {};
    Galeri['Images'] = [];

    let counter = 1;
    //passsing directoryPath and callback function
    fs.readdir(directoryPathSporcularimiz, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        //listing all files using forEach
        files.forEach(function (file) {

            //* mysql ilgili yerleri okuma kodu buraya eklenecek */ 
            var data = {
                imageNumber: counter++,
                imageName: '/Images/Sporcularimiz/' + file,
            };
            Galeri['Images'].push(data);

        });
        console.log(Galeri);
        console.log("Package" + TotalPackageCounter++);
        res.json(Galeri);
    });


});

router.get('/Images/Klubumuz', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    var Galeri = {};
    Galeri['Images'] = [];

    let counter = 1;
    //passsing directoryPath and callback function
    fs.readdir(directoryPathKlubumuz, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        //listing all files using forEach
        files.forEach(function (file) {
            var data = {
                imageNumber: counter++,
                imageName: "/Images/Klubumuz/" + file,
            };
            Galeri['Images'].push(data);

        });
        console.log(Galeri);
        console.log("Package" + TotalPackageCounter++);
        res.json(Galeri);
    });

});

router.get('/Images/Madalyalar', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    var Galeri = {};
    Galeri['Images'] = [];

    let counter = 1;
    //passsing directoryPath and callback function
    fs.readdir(directoryPathMadalyalar, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        //listing all files using forEach
        files.forEach(function (file) {
            var data = {
                imageNumber: counter++,
                imageName: "/Images/Madalyalar/" + file,
            };
            Galeri['Images'].push(data);

        });
        console.log(Galeri);
        console.log("Package" + TotalPackageCounter++);
        res.json(Galeri);
    });

});

router.get('/Videos/Sporcularimiz', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    var Galeri = {};
    Galeri['Videos'] = [];

    let counter = 1;
    //passsing directoryPath and callback function
    fs.readdir(directoryPathSporcularimizVideo, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        //listing all files using forEach
        files.forEach(function (file) {

            //* mysql ilgili yerleri okuma kodu buraya eklenecek */ 
            var data = {
                videoNumber: counter++,
                videoName: '/Videos/Sporcularimiz/' + file,
            };
            Galeri['Videos'].push(data);

        });
        console.log(Galeri);
        console.log("Package" + TotalPackageCounter++);
        res.json(Galeri);
    });


});

router.get('/Videos/Klubumuz', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    var Galeri = {};
    Galeri['Videos'] = [];

    let counter = 1;
    //passsing directoryPath and callback function
    fs.readdir(directoryPathKlubumuzVideo, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        //listing all files using forEach
        files.forEach(function (file) {

            //* mysql ilgili yerleri okuma kodu buraya eklenecek */ 
            var data = {
                videoNumber: counter++,
                videoName: '/Videos/Sporcularimiz/' + file,
            };
            Galeri['Videos'].push(data);

        });
        console.log(Galeri);
        console.log("Package" + TotalPackageCounter++);
        res.json(Galeri);
    });


});

router.get('/Videos/Madalyalar', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    var Galeri = {};
    Galeri['Videos'] = [];

    let counter = 1;
    //passsing directoryPath and callback function
    fs.readdir(directoryPathMadalyalarVideo, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        //listing all files using forEach
        files.forEach(function (file) {

            //* mysql ilgili yerleri okuma kodu buraya eklenecek */ 
            var data = {
                videoNumber: counter++,
                videoName: '/Videos/Sporcularimiz/' + file,
            };
            Galeri['Videos'].push(data);

        });
        console.log(Galeri);
        console.log("Package" + TotalPackageCounter++);
        res.json(Galeri);
    });


});




router.get('/', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed


    res.sendFile(path.join(__dirname + '/../public', 'index.html'));


});

router.get('/AnaSayfa', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed

    res.sendFile(indexHtml);


});

router.get('/Haberler', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed

    res.sendFile(indexHtml);


});

router.get('/Hakkinda/Hakkimizda', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed    res.sendFile(indexHtml);
    res.sendFile(indexHtml);


})

router.get('/Hakkinda/Kurslarimiz', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed

    res.sendFile(indexHtml);


});

router.get('/Galeri/Madalyalar', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed

    res.sendFile(indexHtml);


});

router.get('/Galeri/Klubumuz', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed

    res.sendFile(indexHtml);


});

router.get('/Galeri/Sporcularimiz', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed

    res.sendFile(indexHtml);


});

router.get('/FarkliBilgiler', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed

    res.sendFile(indexHtml);


});

router.get('/OkculukHakkinda', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed

    res.sendFile(indexHtml);


});

router.get('/2.%20El%20Malzemeler', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed

    res.sendFile(indexHtml);


});

router.get('/Iletisim', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed

    res.sendFile(indexHtml);


});

router.get('/haberlerigetir', function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed

    let gaziokculukDB = new sqlite3.Database("./gaziokculuk.db", (err) => {
        if(err) {
            console.log(err.message);
        }
        console.log("Connected to database!");
    });

    console.log("PARAMS:"+req.query.yusuf+""+req.query.enes);

    let sql = `SELECT * FROM haberler`;
// ADD THIS CODE BELOW
gaziokculukDB.exec('PRAGMA foreign_keys = ON;', function(error)  {
    if (error){
        console.error("Pragma statement didn't work.")
    } else {
        console.log("Foreign Key Enforcement is on.")
    }
});

   gaziokculukDB.all(sql, [], (err, rows) => {
        if (err) {
            gaziokculukDB.close();
            return;
                }
        rows.forEach((row) => {
            console.log(rows);
        });
        return res.json(rows);
    });



    // close the database connection

    gaziokculukDB.close();

});

router.get('/haberekle', function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
 
    if(req.query.haber_basligi===undefined  || req.query.haber_icerigi === undefined || req.query.haber_tarihi === undefined || req.query.haber_foto_yolu === undefined)
    {
        res.json([
            {
                errorMessage:"Encountered undefined variables"
            }
        ]);

        return;
    }    

    let gaziokculukDB = new sqlite3.Database("./gaziokculuk.db", (err) => {
        if(err) {
            console.log(err.message);
            return;
        }
        console.log("Connected to database!");
    });
    
    let sql = `SELECT * FROM haberler`;
// ADD THIS CODE BELOW
gaziokculukDB.exec('PRAGMA foreign_keys = ON;', function(error)  {
    if (error){
        console.error("Pragma statement didn't work.")
        gaziokculukDB.close();
        return;
    } else {
        console.log("Foreign Key Enforcement is on.")
    }
});

    
    gaziokculukDB.run('insert into haberler (haber_basligi,haber_icerigi,haber_tarihi,haber_foto_yolu) values (?,?,?,?) ',
     [req.query.haber_basligi,req.query.haber_icerigi,req.query.haber_tarihi,req.query.haber_foto_yolu], (err) => {
        if(err) {
            gaziokculukDB.close();
            return console.log(err.message); 
        }
    })  

    gaziokculukDB.all(sql, [], (err, rows) => {
        if (err) {
            gaziokculukDB.close();
            return;
        }
        rows.forEach((row) => {
            console.log(rows);
        });
        return res.json(rows);
    });



    // close the database connection

    gaziokculukDB.close();

});

router.get('/haberguncelle', function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
 
    if(req.query.haber_id === undefined ||
        req.query.haber_basligi===undefined  || 
        req.query.haber_icerigi === undefined || req.query.haber_tarihi === undefined || req.query.haber_foto_yolu === undefined)
    {
        res.json([
            {
                errorMessage:"Encountered undefined variables"
            }
        ]);

        return;
    }    

    let gaziokculukDB = new sqlite3.Database("./gaziokculuk.db", (err) => {
        if(err) {
            console.log(err.message);
            return;
        }
        console.log("Connected to database!");
    });
      
    gaziokculukDB.run('update haberler set(haber_basligi,haber_icerigi,haber_tarihi,haber_foto_yolu) (?,?,?,?) where haber_id = '+req.query.haber_id+'',
     [req.query.haber_basligi,req.query.haber_icerigi,req.query.haber_tarihi,req.query.haber_foto_yolu], (err) => {
        if(err) {
            gaziokculukDB.close();
            return console.log(err.message); 
        }
    })  
    let sql = `SELECT * FROM haberler`;
    gaziokculukDB.all(sql, [], (err, rows) => {
        if (err) {
            gaziokculukDB.close();
            return;
        }
        rows.forEach((row) => {
            console.log(rows);
        });
        return res.json(rows);
    });
    gaziokculukDB.close();

});

router.get('/habersil', function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
 
    if(req.query.haber_id === undefined ||
        req.query.haber_basligi===undefined  || 
        req.query.haber_icerigi === undefined || req.query.haber_tarihi === undefined || req.query.haber_foto_yolu === undefined)
    {
        res.json([
            {
                errorMessage:"Encountered undefined variables"
            }
        ]);

        return;
    }    

    let gaziokculukDB = new sqlite3.Database("./gaziokculuk.db", (err) => {
        if(err) {
            console.log(err.message);
            return;
        }
        console.log("Connected to database!");
    });
    
    gaziokculukDB.run('delete from haberler where haber_id = '+req.query.haber_id+'', (err) => {
        if(err) {
            gaziokculukDB.close();
            return console.log(err.message); 
        }
    });

    let sql = `SELECT * FROM haberler`;
    gaziokculukDB.all(sql, [], (err, rows) => {
        if (err) {
            gaziokculukDB.close();
            return;
        }
        rows.forEach((row) => {
            console.log(rows);
        });
        return res.json(rows);
    });

    gaziokculukDB.close();

});

router.get('/malzemelerigetir', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed

    let gaziokculukDB = new sqlite3.Database("./gaziokculuk.db", (err) => {
        if(err) {
            console.log(err.message);
        }
        console.log("Connected to database!");
    });

    console.log("PARAMS:"+req.query.yusuf+""+req.query.enes);

    let sql = `SELECT * FROM malzemeler`;

    gaziokculukDB.all(sql, [], (err, rows) => {
        if (err) {
            gaziokculukDB.close();
            return;
        }
        rows.forEach((row) => {
            console.log(rows);
        });
        return res.json(rows);
    });



    // close the database connection

    gaziokculukDB.close();
});

router.get('/malzemeekle', function (req, res, next)
{
    if(req.query.malzeme_adi===undefined  || req.query.malzeme_fiyati === undefined || req.query.malzeme_ozellik === undefined || req.query.malzeme_foto_yolu === undefined)
    {
        res.json([
        {
            errorMessage:"Encountered undefined variables"
        }
    ]);
        return;
    }    

    let gaziokculukDB = new sqlite3.Database("./gaziokculuk.db", (err) => {
        if(err) {
            console.log(err.message);
        }
        console.log("Connected to database!");
    });
    
    let sql = `SELECT * FROM malzemeler`;
     gaziokculukDB.exec('PRAGMA foreign_keys = ON;', function(error)  {
      if (error){
        console.error("Pragma statement didn't work.")
        gaziokculukDB.close();
        return;
      } else {
        console.log("Foreign Key Enforcement is on.")
      }
     });

    gaziokculukDB.run('insert into malzemeler (malzeme_adi,malzeme_fiyati,malzeme_ozellik,malzeme_foto_yolu) values (?,?,?,?) ',
     [req.query.malzeme_adi,req.query.malzeme_fiyati,req.query.malzeme_ozellik,req.query.malzeme_foto_yolu], (err) => {
        if(err) {
            gaziokculukDB.close();
            return console.log(err.message); 
        }
    })  

    gaziokculukDB.all(sql, [], (err, rows) => {
        if (err) {
            gaziokculukDB.close();
            return;
        }
        rows.forEach((row) => {
            console.log(rows);
        });
        return res.json(rows);
    });



    // close the database connection

    gaziokculukDB.close();

});

router.get('/malzemeguncelle', function (req, res, next) {
    

    if( req.query.malzeme_id===undefined  ||
        req.query.malzeme_adi===undefined  
        || req.query.malzeme_fiyati === undefined || 
        req.query.malzeme_ozellik === undefined || 
        req.query.malzeme_foto_yolu === undefined)
    {
        res.json([
        {
            errorMessage:"Encountered undefined variables"
        }
    ]);
        return;
    }    

    let gaziokculukDB = new sqlite3.Database("./gaziokculuk.db", (err) => {
        if(err) {
            console.log(err.message);
        }
        console.log("Connected to database!");
    });
    

    gaziokculukDB.run('update malzemeler set (malzeme_adi,malzeme_fiyati,malzeme_ozellik,malzeme_foto_yolu) values (?,?,?,?) where malzeme_id = '+req.query.malzeme_id+'',
     [req.query.malzeme_adi,req.query.malzeme_fiyati,req.query.malzeme_ozellik,req.query.malzeme_foto_yolu], (err) => {
        if(err) {
            gaziokculukDB.close();
            return console.log(err.message); 
        }
    })  
    let sql = `SELECT * FROM malzemeler`;   

    gaziokculukDB.all(sql, [], (err, rows) => {
        if (err) {
            gaziokculukDB.close();
            return;
        }
        rows.forEach((row) => {
            console.log(rows);
        });
        return res.json(rows);
    });
    gaziokculukDB.close();

});

router.get('/malzemesil', function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
 
    if(req.query.haber_id === undefined ||
        req.query.haber_basligi===undefined  || 
        req.query.haber_icerigi === undefined || req.query.haber_tarihi === undefined || req.query.haber_foto_yolu === undefined)
    {
        res.json([
            {
                errorMessage:"Encountered undefined variables"
            }
        ]);

        return;
    }    

    let gaziokculukDB = new sqlite3.Database("./gaziokculuk.db", (err) => {
        if(err) {
            console.log(err.message);
            return;
        }
        console.log("Connected to database!");
    });
    
    gaziokculukDB.run('delete from malzemeler where malzeme_id = '+req.query.malzeme_id+'', (err) => {
        if(err) {
            gaziokculukDB.close();
            return console.log(err.message); 
        }
    });

    let sql = `SELECT * FROM malzemeler`;
    gaziokculukDB.all(sql, [], (err, rows) => {
        if (err) {
            gaziokculukDB.close();
            return;
        }
        rows.forEach((row) => {
            console.log(rows);
        });
        return res.json(rows);
    });

    gaziokculukDB.close();

});

router.get('/kurslarigetir', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed

    let gaziokculukDB = new sqlite3.Database("./gaziokculuk.db", (err) => {
        if(err) {
            console.log(err.message);
        }
        console.log("Connected to database!");
    });

    console.log("PARAMS:"+req.query.yusuf+""+req.query.enes);

    let sql = `SELECT * FROM kurslar`;

    gaziokculukDB.all(sql, [], (err, rows) => {
        if (err) {
            gaziokculukDB.close();
            return;
        }
        rows.forEach((row) => {
            console.log(rows);
        });
        return res.json(rows);
    });



    // close the database connection

    gaziokculukDB.close();
});

router.get('/kursekle', function (req, res, next)
{
    if(req.query.kurs_adi===undefined  || req.query.kurs_baslangic_saati === undefined
         || req.query.kurs_bitis_saati === undefined || req.query.kurs_gunleri === undefined
        || req.query.egitmen_adi === undefined)
    {
        res.json([
            {
                errorMessage:"Encountered undefined variables"
            }
        ]);
        return;
    }    

    let gaziokculukDB = new sqlite3.Database("./gaziokculuk.db", (err) => {
        if(err) {
            res.json(["An Error Occured", err]);
            console.log(err.message);
        }
        console.log("Connected to database!");
    });
    
     gaziokculukDB.exec('PRAGMA foreign_keys = ON;', function(error)  {
      if (error){
        console.error("Pragma statement didn't work.")
        gaziokculukDB.close();
        return;
      } else {
        console.log("Foreign Key Enforcement is on.")
      }
     });

    gaziokculukDB.run('insert into kurslar (kurs_adi,kurs_baslangic_saati,kurs_bitis_saati,kurs_gunleri,egitmen_adi) values (?,?,?,?) ',
     [req.query.kurs_adi,req.query.kurs_baslangic_saati,req.query.kurs_bitis_saati,req.query.kurs_gunleri,req.query.egitmen_adi], (err) => {
        if(err) {
            res.json(["An error occured",err]);
            gaziokculukDB.close();
            return;
        }
    })  

    let sql = `SELECT * FROM kurslar`;
    gaziokculukDB.all(sql, [], (err, rows) => {
        if (err) {
            gaziokculukDB.close();
            return;
        }
        rows.forEach((row) => {
            console.log(rows);
        });
        return res.json(rows);
    });



    // close the database connection

    gaziokculukDB.close();

});

module.exports = router;
