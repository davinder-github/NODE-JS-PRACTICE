const http = require('http');
const fs = require('fs');


//  below function create server and callback is for handling the requests
const myServer = http.createServer((req, res) => {

    console.log('req is ',req.ip);
    console.log("new request recevied");
    const log = `${Date.now()} New Request received ${req.url}\n`;

    //  this below will also create file if not exist
    fs.appendFile('log.txt', log, (error) => {
        if (error) { console.log("error is ", error) };
    })

    //  agar hum query params bhi sath mein bhejenge /about ke sath toh voh below if condition me nhi jayega
    // but yahi agar express ke sath krte toh voh apne aap handle kr leta
    if(req.url=='/about'){
        res.end('hi this is about  page')
    }

    else{
        res.end('send data success')
    }
})

myServer.listen(8000, () => {
    console.log('server started');
})