//  Uncomment if using Node
var chai = require('chai');//
var assert = chai.assert;

describe('Array', function() { // es5
  it('should start empty', function() {
    var arr = [];

    assert.equal(arr.length, 0);
  });
});

describe('Array', () => {      // es6
  it('should start empty', () => {
    var arr = [];

    assert.equal(arr.length, 0);
  });
});
