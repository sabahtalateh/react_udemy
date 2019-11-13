let a = [1, 2, 3];
let b = [4, 5, 6];

console.log(a);
console.log(b);

let c = [...a, ...b];
console.log('[...a, ...b]');
console.log(c);

let f = (a, b, c) => {
    console.log(`a=${a}, b=${b}, c=${c}`);
};

f(...a);
