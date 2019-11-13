'use strict';

console.log("====ARROW FUNCTIONS====");
var strings = ['1', '2', '3', '100'];

// let toInt = function (x) {
//     return parseInt(x);
// };

// Arrow-function
var toInt = function toInt(x) {
    return parseInt(x);
};

var toIntShort = function toIntShort(x) {
    return parseInt(x);
};

var numbers = strings.map(function (x) {
    return parseInt(x);
});

console.log(numbers);

var parent = {
    children: ['Ivan', 'Piska'],

    printChild: function printChild(name) {
        console.log('Hello ' + name);
    },
    printChildren: function printChildren() {
        var _this = this;

        this.children.map(function (name) {
            _this.printChild(name);
        });
    }
};

parent.printChildren();

// Найти наибольшее нечётное число
var strings2 = ['1', '2', '3', '100', '4', '6'];
console.log(strings2);
// Делаем из строк числа
// O  O  O  O
// |  |  |  |
// X  X  X  X
var nums = strings2.map(function (x) {
    return parseInt(x);
});
console.log(nums);
// выбрать чётные
// O  O  O  O
// |  |  |  |
// O     O
var evens = nums.filter(function (x) {
    return x % 2 === 0;
});
console.log(evens);
// найти наибольшее
// O  O  O  O
// |  |  |  |
// \  \  /  /
//  \  \/  /
//    \\ /
//    [  ]
if (0 === evens.length) {
    console.log("No even elements");
} else {
    var sum = evens.reduce(function (a, b) {
        console.log(a, b);
        return a + b;
    }, 0);
    console.log("sum is " + sum);

    var mul = evens.reduce(function (a, b) {
        console.log(a, b);
        return a * b;
    }, 1);
    console.log("mul is " + mul);

    var id = evens.reduce(function (a, b) {
        a.push(b);
        return a;
    }, []);
    console.log(id);

    var myMax = function myMax(acc, elem) {
        var newAccum = Math.max(acc, elem);
        return newAccum;
    };
    var max = evens.reduce(myMax, evens[0]);
    console.log(max);
}