var express = require('express');
var router = express.Router();
const path = require('path');
const fs = require('fs');

const directoryPathRoot = path.join('../Material-ui-template-modification', 'build');
const indexHtml =   path.join(__dirname+'/../public', 'index.html');

const directoryPathKlubumuz = path.join("./public/Images", 'Klubumuz');
const directoryPathMadalyalar = path.join("./public/Images", 'Madalyalar');
const directoryPathSporcularimiz = path.join("./public/Images", 'Sporcularimiz');
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






router.get('/', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed


    res.sendFile(path.join(__dirname+'/../public', 'index.html'));
    

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

module.exports = router;
