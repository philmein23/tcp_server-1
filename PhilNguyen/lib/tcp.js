'use strict';
const net = require('net');
const fs = require('fs');

let date = new Date();
let timeNow = date.getTime();
let writeFile;

const server = module.exports = net.createServer((socket) => {
  writeFile = fs.createWriteStream(__dirname + '/' + timeNow + '.txt');
  socket.pipe(writeFile);
  socket.on('data', () => {
    socket.end();
  });
});

server.listen(3000, () => {
  process.stdout.write('server up on 3000\n');
});
