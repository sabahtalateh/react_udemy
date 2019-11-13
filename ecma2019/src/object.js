console.log('====OBJECTS====');

const x = 69;
const y = 96;
const f = () => {
    console.log("zozo");
};

const o = {
    x: x,
    y: y,
    draw: function () {
        console.log("zozo")
    },
    f,
};
console.log(o);
o.draw();

// То-же самое
const o1 = {
    x,
    y,
    draw() {
        console.log("zozo")
    },
    f,
};
console.log(o1);
o1.draw();
o1.f();

const prefix = 'pi';
const newObj = {
    [`${prefix}rog`]: 'smyasom',
    [`${prefix}zda`]: 'smehom',
};
console.log(newObj);

const defaults = {
    name: 'pipison',
    password: 'pipi',
    role: 'SUPER_ADMIN',
};

const superDed = {
    name: 'Ivan Kuzmich',
    password: '123',
    age: 98,
};

const newDed = Object.assign({}, defaults, superDed);
console.log(newDed);
const newDed1 = {...defaults, ...superDed};
console.log(newDed1);
