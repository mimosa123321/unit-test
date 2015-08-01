var webdriver = require('selenium-webdriver'),
    test = require('selenium-webdriver/testing'),
    assert = require('assert'),
    async = require('async');

/*test.describe('Browser', function () {
    test.it('should have a browser', function () {
        assert.ok(driver);
    });
});*/

test.describe('test index.html', function () {
    test.it('should have mimosa text', function (complete) {
        this.timeout(10000);

        var driver = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.chrome()).
            build();
        var mimosaText;

        async.waterfall([
            function (done) {
                console.log('step1');
                driver.get('http://localhost/unitTest/build/index.html').then(done);
            },
            function (done) {
                console.log('step2');
                mimosaText = driver.findElement(webdriver.By.id('mimoText'));
                mimosaText.getAttribute('innerHTML').then(function(value) {
                    assert.equal(value, 'mimosa');
                    driver.quit();
                    complete();
                });
            }
        ], complete);

    });
});
