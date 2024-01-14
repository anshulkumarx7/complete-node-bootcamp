const http=require('http');
const url=require('url');
const fs=require('fs');
const slugify=require('slugify');
const replaceTemplate=require('./modules/replaceTemplate');


const data=fs.readFileSync('./dev-data/data.json','utf-8');
const dataObj=JSON.parse(data);

const tempOverview=fs.readFileSync('./templates/template-overview.html');
const tempCard=fs.readFileSync('./templates/template-card.html');
const tempProduct=fs.readFileSync('./templates/template-product.html');

const slugs=dataObj.map(element=>slugify(element.productName,{lower:true}));
console.log(slugs);

const server=http.createServer((req,res)=>{
    // console.log(req.url);
    // const pathname=req.url;
    const {query,pathname}=url.parse(req.url,true);
    if(pathname =='/' || pathname=='/overview'){
        res.writeHead(200,{'content-type':'text/html'})
        const cardHtml=dataObj.map(el=>replaceTemplate(tempCard,el));
        let tempString=String(tempOverview);
        const output = tempString.replace(/{%PRODUCT_CARDS%}/g,cardHtml);
        res.end(output);
    }
    else if(pathname=='/product'){
        res.writeHead(200,{'content-type':'text/html'})
        const product=dataObj[query.id];
        // console.log(query.id);
        const output=replaceTemplate(tempProduct,product);
        res.end(output);
    }
    else if(pathname=='/api'){
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