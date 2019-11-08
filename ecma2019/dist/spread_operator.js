'use strict';

var a = [1, 2, 3];
var b = [4, 5, 6];

console.log(a);
console.log(b);

var c = [].concat(a, b);
console.log('[...a, ...b]');
console.log(c);

var f = function f(a, b, c) {
    console.log('a=' + a + ', b=' + b + ', c=' + c);
};

f.apply(undefined, a);