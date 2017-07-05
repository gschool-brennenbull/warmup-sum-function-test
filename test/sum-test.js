const sum = require('../sum.js');
const {expect,assert} = require('chai');

// Reference http://chaijs.com/ for questions

describe ('Sum', function() {

    it ('Should be a function', function() {
      assert.isFunction(sum, 'sum is not a function');
    });

    it('Should return 0 if no arguments are passed in.', function() {
      assert.equal(sum(),0);
    });

    it('Should return the sum of all numbers passed as arguments', function() {
      assert.equal(sum(1,10,2,23), 36);
      assert.equal(sum(0,-1,2,-4), -3);
      assert.equal(sum(3.2,4.5,5.3), 13);
    });

    it('Should return the sum of arrays passed as arguments', function(){
      assert.equal(sum([1,2,3,4,5]), 15);
      assert.equal(sum([1,3,6],[3,7]), 20);
    });

    it('Should return the sum of string integers passed as arguments', function () {
      assert.equal(sum('1','23','6'),30);
    });

    it('Should return the sum of mixed inputs if arguments can be converted into numbers, else return undefined', function() {
      assert.equal(sum([1,4],'5', -5), 5);
      assert.equal(sum('cat', 'dog'), undefined);
    })

});
