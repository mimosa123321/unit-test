var Main = require('./../src/js/main');
var assert = require('chai').assert;

describe('Main', function(){
    describe('#plus()', function(){
        it('should return the sum of 100 + 150', function(){
            var main = new Main();
            assert.equal(main.plus(100,150), 250);
        })
    });

    describe('#isAnObject()',function(){
        it('should return an object', function(){
            var main = new Main();
            var data = {name:'bear'};
            assert.isObject(main.isAnObject(data),'data is an abject');
        });
    });

    describe('#wordToArray()',function() {
        it('should return an array', function(){
            var main = new Main();
            assert.isArray(main.wordToArray('otter'),'it returns an array');
        });

        it('should return an array of the word "otter"', function(){
            var main = new Main();
            assert.deepEqual(main.wordToArray('otter'),['o','t','t','e','r']);
        });
    });

    describe('#isTypeRegexp()',function(){
        it('should return a reg exp',function(){
            var main = new Main();
            assert.typeOf(main.isTypeRegexp(/\s/),'regexp','we have a reg expression');
        });
    });

    describe('#isInstaceOfMain',function() {
        it('should show an instance of Main', function() {
            var main = new Main();
            assert.instanceOf(main,Main,'main is an instance of Main');

        });
    })
});