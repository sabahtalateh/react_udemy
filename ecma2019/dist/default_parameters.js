'use strict';

console.log("====DEFAULT PARAMETERS====");
var hello = function hello() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'User';

    console.log('Hello ' + name);
};
hello();

var makeSound = function makeSound() {
    var animal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        name: 'Barsik',
        sound: 'meow'
    };

    console.log(animal.name + ' say ' + animal.sound);
};
makeSound();
makeSound({ name: 'Zhopa', sound: 'ptrrrrr' });

var printNumbers = function printNumbers(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var c = arguments[2];

    console.log('a = ' + a + ', b = ' + b + ', c = ' + c);
};
printNumbers();
printNumbers(1);
printNumbers(1, 2);
printNumbers(1, 2, 3);
printNumbers(1, undefined, 3);
printNumbers(100, 200, 300);
printNumbers('I', undefined, 'ג');