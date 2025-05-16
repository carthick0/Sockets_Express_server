const express=require('express')
const app=express();
const http=require('http');
const socketio=require('socket.io')
const server=http.createServer(app)
const io=socketio(server);


app.use('/',express.static(__dirname +'/public'));



io.on('connection', (socket) => {
    console.log('a user connected',socket.id);


   socket.on('msg_send',(data)=>{
    console.log(data);
    io.emit('msg_recevied',data);
   })
 });
  
server.listen(3000,()=>{
    console.log("Server is up..")
})