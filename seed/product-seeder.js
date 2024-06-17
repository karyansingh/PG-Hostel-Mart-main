var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');
// var pro= new Product() so by doing this we store 1 product of SCHEMA "Product" in variable pro....but here we have 
//done the same thing in array so that we can use loop.
var products = [
    new Product({
        imagePath: 'https://m.media-amazon.com/images/I/81m7+0PN91L._AC_UL480_FMwebp_QL65_.jpg',
        title: 'Mattress(gadda)',
        description: 'Matress size (3*6)',
        price: 2000
    }),
    new Product({
        imagePath: 'https://images-eu.ssl-images-amazon.com/images/I/31RNAv2xUfS._AC._SR180,230.jpg',
        title: 'Bucket',
        description: 'Pink Bucket',
        price: 30
    }),
    new Product({
        imagePath: 'https://m.media-amazon.com/images/I/61-Th9Ai7-L._AC_UL480_FMwebp_QL65_.jpg',
        title: 'Pillow',
        description: 'Soft Pillow',
        price: 200
    }),
    new Product({
        imagePath: 'https://m.media-amazon.com/images/I/A1nCnic-0aL._AC_UL480_FMwebp_QL65_.jpg',
        title: 'Bed Sheet',
        description: 'Red Bed sheet',
        price: 300
    }),
    new Product({
        imagePath: 'https://m.media-amazon.com/images/I/81VWZ43nCfL._AC_UY327_FMwebp_QL65_.jpg',
        title: 'Bed Table',
        description: 'Bed Table size 2*1',
        price: 200
    }),
    new Product({
        imagePath: 'https://m.media-amazon.com/images/I/31jToSG0DAL._AC_UL480_FMwebp_QL65_.jpg',
        title: 'Water Jug',
        description: 'Pink jug',
        price: 50
    }),
    new Product({
        imagePath: 'https://m.media-amazon.com/images/I/71MIJWtfCoL._AC_UY327_FMwebp_QL65_.jpg',
        title: 'Ethernet Cable',
        description: 'Ethernet Cable 10 meter',
        price: 200
    }),
    new Product({
        imagePath: 'https://m.media-amazon.com/images/I/519RgXY+lRL._AC_UY327_FMwebp_QL65_.jpg',
        title: 'Extension Board',
        description: '5 pin Extension Board',
        price: 300
    }),
    new Product({
        imagePath: 'https://m.media-amazon.com/images/I/61IehkFJc1L._AC_UL480_FMwebp_QL65_.jpg',
        title: 'Hand Wash',
        description: 'Dettol Hand Wash 200ml',
        price: 60
    }),
    new Product({
        imagePath: 'https://m.media-amazon.com/images/I/81ICko5lbaL._AC_UL480_FMwebp_QL65_.jpg',
        title: 'Door Mat',
        description: 'Green Door Mat',
        price: 150
    }),
    new Product({
        imagePath: 'https://m.media-amazon.com/images/I/716eE0DwjYL._AC_UL480_FMwebp_QL65_.jpg',
        title: 'Cloth Clip',
        description: '50 pieces',
        price: 50
    }),
    new Product({
        imagePath: 'https://m.media-amazon.com/images/I/51Cy+J49vJL._AC_UL480_FMwebp_QL65_.jpg',
        title: 'Cloth Rope',
        description: '10 meter',
        price: 20
    })
];
//array of product name is products
var done = 0;
//looping is done over all products but as we know that node is a-synchronous so when we save a particular product 
//in database named shopping ...but till it is getting saved ....till then it may disconnect the sercer so when 
//our counter become equal to the length of items then only disconnect elese never disconnect.
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done == products.length)
            exit();
    });
}

function exit() {
    mongoose.disconnect();
}