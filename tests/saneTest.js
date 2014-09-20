var Differ = require('../lib/fs-dif');

var dir = '/Users/gabrieltesta/Downloads/sync/';

var fsDif = new Differ();

fsDif.beginWatch(dir);

fsDif.on('created', function(data){
  console.log(data);
});

fsDif.on('rename', function(data){
  console.log(data);
});

fsDif.on('moved', function(data){
  console.log(data);
});

fsDif.on('removed', function(data){
  console.log(data);
});