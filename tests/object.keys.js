/*globals beforeEach, describe, it, module, inject, expect */

describe('Polyfill : object.keys', function () {
    'use strict';

    it('should be defined', function () {
        expect(Object.keys).toBeDefined();
    });

    it('should return undefined after changing return type', function () {
        expect(!Object.keys({})[0]).toBeTruthy();
        expect(!Object.keys({a : 0})[4]).toBeTruthy();
        expect(!Object.keys({a : 0, b : 0})[4]).toBeTruthy();
        expect(!Object.keys({a : 0, b : 0, c : 0})[4]).toBeTruthy();
        expect(!Object.keys({a : 0, b : 0, c : 0, d : 0})[4]).toBeTruthy();
    });

    it('should return the correct length', function () {
        expect(Object.keys({}).length).toBe([].length);
        expect(Object.keys({}).length).toBe(0);
        expect(Object.keys({a : 0}).length).toBe(1);
        expect(Object.keys({a : 0, b : 0}).length).toBe(2);
        expect(Object.keys({a : 0, b : 0, c : 0}).length).toBe(3);
        expect(Object.keys({a : 0, b : 0, c : 0, d : 0}).length).toBe(4);
    });

    it('should return the correct key', function () {
        expect(Object.keys({a : 0})[0]).toBe('a');
        expect(Object.keys({a : 0, b : 0})[0]).toBe('a');
        expect(Object.keys({a : 0, b : 0, c : 0})[0]).toBe('a');
        expect(Object.keys({a : 0, b : 0, c : 0, d : 0})[0]).toBe('a');
    });
});
