var Differ = require('../lib/fs-dif');

//osx: '/Users/gabrieltesta/Downloads/sync/'
//win32: 'C:/Users/gtesta/Downloads/syncTest'
var dir = '/Users/gabrieltesta/Downloads/sync/';

var fsDif = new Differ({dirToWatch: dir});

fsDif.on('ready', function(){

  fsDif.beginWatch();

  fsDif.on('created', function(data){
    console.log('created', data);
  });

  fsDif.on('renamed', function(data){
    console.log('renamed',data);
  });

  fsDif.on('moved', function(data){
    console.log('moved',data);
  });

  fsDif.on('removed', function(data){
    console.log('removed',data);
  });
});
