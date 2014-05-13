if (!Object.keys) {
    Object.keys = (function () {
        'use strict';

        return function (obj) {
            var keys = [],
                key;

            if (obj !== Object(obj)) {
                throw new TypeError('Invalid object');
            }

            for (key in obj) {
                if (obj.hasOwnProperty(key)) {
                    keys[keys.length] = key;
                }
            }
            return keys;
        };
    }());
}