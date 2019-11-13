"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

console.log("====ARRAY DESTRUCT====");
var arr = [1, 2, 3];
var a = arr[0],
    b = arr[1],
    c = arr[2],
    _arr$ = arr[3],
    d = _arr$ === undefined ? 10000000000 : _arr$;


console.log(a, b, c, d);

var sounds = {
    petooh: "kukareku",
    mish: "pipipi",
    fish: "bool bool",
    bober: "...",
    zmeya: "shhhh",
    slon: "uuuuu",
    popeg: "ti durachok",
    chelovek: "zdorova ya vadik",
    homyak: "pipipi"
};

var res1 = Object.entries(sounds);
console.log(res1);

var res2 = res1.filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        value = _ref2[1];

    return value === 'pipipi';
});
console.log(res2);

var res3 = res2.map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 1),
        key = _ref4[0];

    return key;
});
console.log(res3);

// То же самое что строки 19-26
var res = Object.entries(sounds).filter(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        value = _ref6[1];

    return value === 'pipipi';
}).map(function (_ref7) {
    var _ref8 = _slicedToArray(_ref7, 1),
        key = _ref8[0];

    return key;
});

console.log(res);

var shape = {
    type: 'sphere',
    center: {
        p1: [0, 0],
        p2: [10, 15]
    }
};

var _shape$center = shape.center,
    _shape$center$p = _slicedToArray(_shape$center.p1, 2),
    p1x = _shape$center$p[0],
    p1y = _shape$center$p[1],
    _shape$center$p2 = _slicedToArray(_shape$center.p2, 2),
    p2x = _shape$center$p2[0],
    p2y = _shape$center$p2[1];

console.log(p1x, p2x, p1y, p2y);