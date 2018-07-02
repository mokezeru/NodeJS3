var fs = require('fs');

function readMyFile(url){
    var file = fs.readFileSync(__dirname + '/'+url);
    return file;
}

process.on('message', (url) => {
        var myFile = readMyFile(url);
        process.send(myFile.toString());
});


