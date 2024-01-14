const Eventemitter =require('events');
const http=require('http');
// const myEmitter=new Eventemitter();

class Sales extends Eventemitter{
    constructor(){
        super()
    }
}
const myEmitter=new Sales();

myEmitter.on('newSale',()=>{
    console.log("There is a new sale in Gupta's store");
})

myEmitter.on('newSale',()=>{
    console.log("SALE SALE SALE SALE");
})
myEmitter.on('newSale',(stock)=>{
    console.log(`There is only ${stock} stock left for sale`);
})
myEmitter.emit('newSale',9);




///////////////////////////////

const server=http.createServer();

server.on('request',(req,res)=>{
    console.log('Request received');
    console.log(req.url);
    res.end("request received");
})
server.on('request',(req,res)=>{
    console.log('Another Request received');
})
server.on('close',(req,res)=>{
    console.log('Closed');
})

server.listen(8000,'127.0.0.1',()=>{
    console.log("Waiting for requests....");
})