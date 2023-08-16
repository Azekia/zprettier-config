import prettier_config from '../index.js'
import assert from 'assert'

describe('import', function () {
    it('prettier_config.tabWidth=4', function () {
        assert.strictEqual(prettier_config.tabWidth, 4);
    });
});



