const fs=require('fs');

//  this below will create a new file with text inside that this is a new file
fs.writeFileSync('./test.txt','this is a new file');

// this below will override the previous file text
// fs.writeFileSync('./test.txt','this is a new file 2');


//  SYNC AND ASYNC mein ye diff hai ki async mein callback manga jata hai 



// async file writting
fs.writeFile('./test_async.txt','this is a new file',(error=>{}));

const result=fs.readFileSync('./test.txt','utf-8'); // agar utf-8 encoding nhi dege toh alag format mein data aayega
console.log("result sync is ",result);

//  async file reading
fs.readFile('./test.txt','utf-8',(error,result)=>{
    console.log("result of async reading is ",result);
})


//  append text to file
fs.appendFileSync('./test.txt',new Date().getDate().toLocaleString()); // jitnin date hogi ye vo append kr dega


fs.appendFile('./test.txt','aysnc code append',(error)=>{}); // jitnin date hogi ye vo append kr dega


fs.cpSync('./test.txt','./copy.txt'); // creating copy 

// fs.unlinkSync('./copy.txt'); // deleting file 