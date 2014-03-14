var EasyZip = require('easy-zip').EasyZip;
var zip = new EasyZip();
zip.zipFolder('snippets',function(){
    zip.writeToFile('ReactSnippets.sublime-package');
});