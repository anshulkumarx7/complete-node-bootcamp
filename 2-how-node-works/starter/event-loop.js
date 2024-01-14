const fs = require('fs');
const crypto=require('crypto');
setTimeout(() => console.log("Timer 1 Finished"), 0);
setImmediate(() => console.log("Immediate 1 Finished"));
const start=Date.now();
// process.env.UV_THREADPOOL_SIZE=2;
//for setting thread pool
fs.readFile('test-file.txt', () => {
    console.log('I/O Finished');

    console.log("---------------------------------");
    setTimeout(() => console.log("Timer 2 Finished"), 0);
    setTimeout(() => console.log("Timer 3 Finished"), 2000);
    setImmediate(() => console.log("Immediate 2 Finished"));

    process.nextTick(()=>{
        console.log("Process.nextTick");
    })

    crypto.pbkdf2("password","salt",100000,1024,"sha512",()=>{
        console.log(Date.now()-start,"Paasword encrypted");
    })
    crypto.pbkdf2("password","salt",100000,1024,"sha512",()=>{
        console.log(Date.now()-start,"Paasword encrypted");
    })
    crypto.pbkdf2("password","salt",100000,1024,"sha512",()=>{
        console.log(Date.now()-start,"Paasword encrypted");
    })
    crypto.pbkdf2("password","salt",100000,1024,"sha512",()=>{
        console.log(Date.now()-start,"Paasword encrypted");
    })
});


console.log('Hello from top level code');
