"use strict";

console.log("====REST PARAMETERS====");
var print = function print(a, b) {
    for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        rest[_key - 2] = arguments[_key];
    }

    console.log(a, b, rest);
};

print();
print(1);
print(1, 2);
print(1, 2, 3);
print(1, 2, 3, 4);