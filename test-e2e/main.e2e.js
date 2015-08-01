expect = (chai && chai.expect);
assert = (chai && chai.assert);

describe('test index.html', function() {
    it('should have initialized Main', function() {
        assert.ok(main);
    });
    it('should have mimosa text', function() {
        var mimoElement = document.querySelector('#mimoText');
        assert.equal(mimoElement.innerHTML, 'mimosa');
    });
});