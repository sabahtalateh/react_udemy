let strings = ['1', '2', '3', '100'];

// let toInt = function (x) {
//     return parseInt(x);
// };

// Arrow-function
let toInt = (x) => {
    return parseInt(x)
};

let toIntShort = (x) => parseInt(x);

let numbers = strings.map(x => parseInt(x));

console.log(numbers);

let parent = {
    children: ['Ivan', 'Piska'],

    printChild(name) {
        console.log(`Hello ${name}`);
    },

    printChildren() {
        this.children.map((name) => {
            this.printChild(name);
        })
    },
};

parent.printChildren();

// Найти наибольшее нечётное число
let strings2 = ['1', '2', '3', '100'];
console.log(strings2);
// Делаем из строк числа
// O  O  O  O
// |  |  |  |
// X  X  X  X
let nums = strings2.map(x => parseInt(x));
console.log(nums);
// выбрать чётные
// O  O  O  O
// |  |  |  |
// O     O
let evens = nums.filter(x => x % 2 === 0);
console.log(evens);
// найти наибольшее
// O  O  O  O
// |  |  |  |
// \  \  /  /
//  \  \/  /
//    \\ /
//    [  ]
if (0 === evens.length) {
    console.log("No even elements")
} else {
    let max = evens.reduce((a, b) => Math.max(a, b), evens[0]);
    console.log(max);
}
