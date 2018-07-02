const {fork} = require('child_process');
const http = require('http');
const{Subject} = require('rxjs');
const subject = new Subject();
const url = require('url');


function displayText(reqres){
    let urlo = url.parse(reqres.req.url, true);
    if(urlo.pathname === "/"){
        const childProcess = fork('child.js');
        childProcess.send(urlo.query.url);
        childProcess.on('message', (response)=>{
            reqres.res.end(`${response}`);
        });
    }
}

subject.subscribe(displayText);

http.createServer((req, res) =>{
    subject.next({req : req, res : res});
}).listen(4000, console.log('Server is running at port 4000'));


// http.createServer(function (req, res) {
//     console.log('Request Received!');
   
//     var queryData = url.parse(req.url, true).query;
//     var myUrl = queryData.url;
//     res.writeHead(200, {'Content-Type': 'text/plain' });
    
//     var child = fork('child.js');
//     child.send(myUrl);
    
//     child.on('message', (file) => {
//         res.end(file);
//     });

// }).listen(4000, '127.0.0.1');