var socket=io();

let btn=document.getElementById('btn');

let inputMsg=document.getElementById('txtmsg');

let msgList=document.getElementById('msglist');

btn.onclick=function exec(){
    socket.emit('msg_send',{
        msg:inputMsg.value
    });
}

socket.on('msg_recevied',(data)=>{
    let limsg=document.createElement('li');
    limsg.innerText=data.msg;
    msgList.appendChild(limsg)
})