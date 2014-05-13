/*globals beforeEach, describe, it, module, inject, expect */

describe('Polyfill : object.keys', function () {
    'use strict';

    it('should be defined', function () {
        expect(Object.keys).toBeDefined();
    });
});
