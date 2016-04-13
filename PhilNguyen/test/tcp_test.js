'use strict';
const expect = require('chai').expect;
require(__dirname + '/../lib/tcp');
const net = require('net');
const fs = require('fs');

describe('tcp request', () => {
  it('should all request to a log file', (done) => {
    var client = net.connect({ port: 3000 }, () => {
      client.write('testing, testing');
    });

    client.on('data', (data) => {
      var fileContents = fs.readFileSync(__dirname + '/../lib/' + data.toString());
      expect(fileContents.toString()).to.eql('testing, testing');
      done();
    });
  });
});
