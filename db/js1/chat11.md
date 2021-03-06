# 一對一聊天 （命令列介面）

* 一對一聊天下載： [chat11.zip](chat11.zip)
* 多人聊天室下載： [chatroom.zip](chatroom.zip)

## 執行畫面

![](chat11.png)

## server 端

檔案: ChatServer.js

```javascript
var net = require('net');
var readline = require('readline').createInterface(process.stdin, process.stdout);

var server = net.createServer();

server.on('connection', function(sock) {
  console.log(sock.remoteAddress +':'+ sock.remotePort+' 連進來了');

  readline.setPrompt('');
  readline.prompt();

  readline.on('line', function(line) {
    sock.write(line);
    readline.prompt();
  });
  
  sock.on('data', function(data) {
    console.log('收到:' + sock.remoteAddress + ': ' + data);
  });
});

server.listen(5757);
console.log('server 啟動');

```

關於 readline 的用法請參考：  <https://nodejs.org/api/readline.html>

## client 端

檔案: ChatClient.js

```javascript
var net = require('net');
var readline = require('readline').createInterface(process.stdin, process.stdout);

var client = new net.Socket();

readline.on('line', function(line) {
  client.write(line);
  readline.prompt();
});
  
client.connect(5757, '127.0.0.1', function() {
  console.log('連接 ' + client.remoteAddress + ':' + client.remotePort);
  readline.setPrompt('');
  readline.prompt();
});

client.on('data', function(data) {
    console.log('收到:' + data);
});
```