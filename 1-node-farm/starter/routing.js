const http=require('http');
const url=require('url');
const fs=require('fs');

const data=fs.readFileSync('./dev-data/data.json','utf-8');
const dataObj=JSON.parse(data);

const server=http.createServer((req,res)=>{
    // console.log(req.url);
    const pathName=req.url;
    if(pathName =='/' || pathName=='/overview'){
        res.end('This is overview');
    }
    else if(pathName=='/product'){
        res.end('This is product');
    }
    else if(pathName=='/api'){
        // fs.readFile('./dev-data/data.json','utf-8',(err,data)=>{
        //     const productData=JSON.parse(data);
        //     res.writeHead(200,{'content-type':'text/json'});
        //     res.end(data);
        // })
        res.writeHead(200,{'content-type':'text/json'});
        res.end(data);

    }
    else{
        res.writeHead(404,{
            'content-type':'text/html',
            'my-own-header':'hello-world'
        })
        res.end('<h1>Page Not Found</h1>');
    }
})
server.listen(8000,'127.0.0.1',()=>{
    console.log('Listening on port 8000');
});