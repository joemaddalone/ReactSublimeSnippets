var find = require('find');
var fs = require('fs');

var filename = process.cwd() + '/README.md'

fs.writeFile( filename, 'React Snippets' +
  '\n=================================\n'
);


find.file(/\.md$/, __dirname + '/../snippets', function(files) {
  if(files.length){
    files.forEach(function(file){
      fs.readFile(file, function(err, data){
          fs.appendFile( filename, data, function ( err ) {} );
        } );
    })
  }
})
