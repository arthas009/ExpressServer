var express = require('express');
var router = express.Router();
const path = require('path');
const fs = require('fs');

const directoryPathRoot = path.join('../Material-ui-template-modification', 'build');
const directoryPathKlubumuz = path.join('../Material-ui-template-modification/public/Images', 'Klubumuz');
const directoryPathMadalyalar = path.join('../Material-ui-template-modification/public/Images', 'Madalyalar');
const directoryPathSporcularimiz = path.join('../Material-ui-template-modification/public/Images', 'Sporcularimiz');

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


    res.sendFile(path.join(__dirname, 'index.html'));
    

});

router.get('/Haberler', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
   
    res.sendFile(path.join(__dirname, '../../Material-ui-template-modification/build', 'index.html'));
    

});

router.get('/Hakkinda/Hakkimizda', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
   
    res.sendFile(path.join(__dirname, 'index.html'));
    

});

router.get('/Hakkinda/Kurslar', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
   
    res.sendFile(path.join(__dirname, 'index.html'));
    

});

router.get('/Galeri/Madalyalar', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
   
    res.sendFile(path.join(__dirname, 'index.html'));
    

});

router.get('/Galeri/Klubumuz', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
   
    res.sendFile(path.join(__dirname, '../public_html', 'index.html'));
    

});

router.get('/Galeri/Sporcularimiz', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
   
    res.sendFile(path.join(__dirname, 'index.html'));
    

});

router.get('/FarkliBilgiler', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
   
    res.sendFile(path.join(__dirname, 'index.html'));
    

});

router.get('/OkculukHakkinda', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
   
    res.sendFile(path.join(__dirname, 'index.html'));
    

});

router.get('/2.%20El%20Malzemeler', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
   
    res.sendFile(path.join(__dirname, '../public_html', 'index.html'));
    

});

router.get('/Iletisim', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
   
    res.sendFile(path.join(__dirname, 'index.html'));
    

});

module.exports = router;
