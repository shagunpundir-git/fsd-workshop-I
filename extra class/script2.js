const http=require("http");
const server=http.createServer((req,res)=>{
    res.writeHead(200,{
        "content-type" :'text/plaintext',
        "server" :'node.js',
    })
    res.end("hello world");

});
port=3005;
server.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})