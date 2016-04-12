'use strict';
const expect = require('chai').expect;
const server = require(__dirname + '/../lib/tcp');
const request = require('superagent');


describe('tcp request', () => {
  let logstringbefore = '';
  let logstringafter = '';

  before((done) => {
    fs.readFile(__dirname + '/lib/1460489940428.txt', (err, data) {
      logstringbefore = data;
      done();
    });
  });

  it('should all request to a log file', (done) => {
    request.get('http://localhost:3000').end((err, res) => {
      expect(true).to.equal(false);
      done();
    });
  });
});
