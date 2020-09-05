var express = require('express');
var router = express.Router();
const path = require('path');
const fs = require('fs');

const directoryPathKlubumuz = path.join('../Material-ui-template-modification/public/Images', 'Klubumuz');
const directoryPathMadalyalar = path.join('../Material-ui-template-modification/public/Images', 'Madalyalar');
const directoryPathSporcularimiz = path.join('../Material-ui-template-modification/public/Images', 'Sporcularimiz');

let TotalPackageCounter = 0;

/* GET home page. */
router.get('/Images/Sporcularimiz', function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
var Galeri= {};
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
        imageNumber:counter++,
        imageName:'/Images/Sporcularimiz/'+file,
        };
        Galeri['Images'].push(data);

    });
console.log(Galeri); 
console.log("Package"+TotalPackageCounter++);
res.json(Galeri);
});
  

});

router.get('/Images/Klubumuz',function(req,res,next)
{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
var Galeri= {};
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
        imageNumber:counter++,
        imageName:"/Images/Klubumuz/"+file,
        };
        Galeri['Images'].push(data);

    });
console.log(Galeri); 
console.log("Package"+TotalPackageCounter++);
res.json(Galeri);
});

});
module.exports = router;
