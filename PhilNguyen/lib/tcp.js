'use strict';
const net = require('net');
const fs = require('fs');

let timeNow = new Date().getTime();
let writeFile;

net.createServer((socket) => {
  writeFile = fs.createWriteStream(__dirname + '/' + timeNow.toString());
  socket.pipe(writeFile);
  socket.on('data', () => {
    socket.end(timeNow.toString());
  });
}).listen(3000, () => {
  process.stdout.write('server up on 3000\n');
});
