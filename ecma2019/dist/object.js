"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _newObj;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

console.log('====OBJECTS====');

var x = 69;
var y = 96;
var f = function f() {
    console.log("zozo");
};

var o = {
    x: x,
    y: y,
    draw: function draw() {
        console.log("zozo");
    },
    f: f
};
console.log(o);
o.draw();

// То-же самое
var o1 = {
    x: x,
    y: y,
    draw: function draw() {
        console.log("zozo");
    },

    f: f
};
console.log(o1);
o1.draw();
o1.f();

var prefix = 'pi';
var newObj = (_newObj = {}, _defineProperty(_newObj, prefix + "rog", 'smyasom'), _defineProperty(_newObj, prefix + "zda", 'smehom'), _newObj);
console.log(newObj);

var defaults = {
    name: 'pipison',
    password: 'pipi',
    role: 'SUPER_ADMIN'
};

var superDed = {
    name: 'Ivan Kuzmich',
    password: '123',
    age: 98
};

var newDed = Object.assign({}, defaults, superDed);
console.log(newDed);
var newDed1 = _extends({}, defaults, superDed);
console.log(newDed1);