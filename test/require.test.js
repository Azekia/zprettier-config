var assert = require ('assert')
var prettier_config = require('../index.js')


describe('require', function () {
    it('prettier_config.tabWidth=4', function () {
        assert.strictEqual(prettier_config.tabWidth, 4);
    });
});


