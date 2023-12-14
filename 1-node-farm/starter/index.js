// Can run this in terminal by node index.js 
// const greeting="Hello World";
// console.log(greeting);

//Blocking or Synchronous way -lineas are excuted one after another.
// const fs=require('fs');
// const textIn=fs.readFileSync('./txt/input.txt','utf-8');
// console.log(textIn);

// const textOut=`This is text which will written:${textIn}.\nCreated on:${Date.now()}`;
// fs.writeFileSync('./txt/output.txt',textOut);
// console.log("Content successfully written to output.txt");


// Non-Blocking or Asynchrous -Process runs on background till it runs another process
// starts running .

// const fs=require('fs');
// fs.readFile('./txt/start.txt','utf-8',(err,data)=>{
//     console.log(data);
//     console.log("File read done");
// })
// console.log("File reading");

//CallbackHell - is a concept the data depends upon previous one and here process run
// in background can create a problem.
// Solutions -promises and async and await.
const fs=require('fs');
fs.readFile('./txt/start.txt','utf-8',(err,data1)=>{
    if(err) return console.log("Error");
    fs.readFile(`./txt/${data1}.txt`,'utf-8',(err,data2)=>{
        console.log(data2);
        fs.readFile('./txt/append.txt','utf-8',(err,data3)=>{
            console.log(data3);
            fs.writeFile('./txt/final.txt',`${data2}\n${data3}`,err=>{
                console.log('File Written');
            })
        })
    })
})
console.log("File reading");