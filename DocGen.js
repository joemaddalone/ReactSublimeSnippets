var x2js = require('xml2js'),
		fs=require('fs');

var walk = function(dir, done) {
  var results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    var i = 0;
    (function next() {
      var file = list[i++];
      if (!file) return done(null, results);
      file = dir + '/' + file;
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function(err, res) {
            results = results.concat(res);
            next();
          });
        } else {
          results.push(file);
          next();
        }
      });
    })();
  });
};
fs.writeFile('README.md',"React Snippets for Sublime Text" + 
	"\n=================================\n---------------------\n" + 
	"Trigger | Result\n" + 
	":------- | :-------\n"
)
var parser = new x2js.Parser();
walk('snippets', function(err, results) {
  if (err) throw err;
  results.map(function(file,i){
  	fs.readFile(file, "utf-8", function (err, data) {
        parser.parseString(data, function(err,data){
					fs.appendFile('README.md', 
						'**' + data.snippet.tabTrigger + '** | ' + 
						data.snippet.description + "\n", 
						function (err) {});
        	
			});
    });
  })
});