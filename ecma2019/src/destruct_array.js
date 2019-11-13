console.log("====ARRAY DESTRUCT====")
let arr = [1, 2, 3];
let [a, b, c, d = 10000000000] = arr;

console.log(a, b, c, d);

const sounds = {
    petooh: "kukareku",
    mish: "pipipi",
    fish: "bool bool",
    bober: "...",
    zmeya: "shhhh",
    slon: "uuuuu",
    popeg: "ti durachok",
    chelovek: "zdorova ya vadik",
    homyak: "pipipi",
};

let res1 = Object.entries(sounds);
console.log(res1);

let res2 = res1.filter(([, value]) => value === 'pipipi');
console.log(res2);

let res3 = res2.map(([key,]) => key);
console.log(res3);

// То же самое что строки 19-26
let res = Object.entries(sounds)
    .filter(([, value]) => value === 'pipipi')
    .map(([key,]) => key);

console.log(res);

const shape = {
    type: 'sphere',
    center: {
        p1: [0, 0],
        p2: [10, 15],
    }
};

const {
    center: {
        p1: [p1x, p1y],
        p2: [p2x, p2y],
    }
} = shape;

console.log(p1x, p2x, p1y, p2y);


