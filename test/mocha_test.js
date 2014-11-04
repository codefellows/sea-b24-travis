var expect = require('chai').expect;
var index = require('../index');

describe('my index file', function() {
  it('should give a hello world', function() {
    expect(index()).to.eql('hello world');
  });
});
