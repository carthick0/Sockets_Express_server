var socket = io();

let btn = document.getElementById('btn');
let inputMsg = document.getElementById('txtmsg');
let msgList = document.getElementById('msglist');

btn.onclick = function () {
    socket.emit('msg_send', {
        msg: inputMsg.value
    });
    inputMsg.value = ""; 
};

socket.on('msg_recevied', (data) => {
    let li = document.createElement('li');

    if (data.sender === socket.id) {
        li.innerText = "You: " + data.msg;
        li.style.color = 'blue';
    } else {
        li.innerText = "Stranger: " + data.msg;
        li.style.color = 'green';
    }

    msgList.appendChild(li);
});
