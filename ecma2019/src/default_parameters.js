console.log("====DEFAULT PARAMETERS====");
let hello = (name = 'User') => {
    console.log(`Hello ${name}`)
};
hello();

let makeSound = (animal = {
    name: 'Barsik',
    sound: 'meow',
}) => {
    console.log(`${animal.name} say ${animal.sound}`);
};
makeSound();
makeSound({name: 'Zhopa', sound: 'ptrrrrr'});

let printNumbers = (a, b = 2, c) => {
    console.log(`a = ${a}, b = ${b}, c = ${c}`)
};
printNumbers();
printNumbers(1);
printNumbers(1, 2);
printNumbers(1, 2, 3);
printNumbers(1, undefined, 3);
printNumbers(100, 200, 300);
printNumbers('I', undefined, 'ג');


