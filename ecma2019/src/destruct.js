let person = {
    name: "Ivan",
    age: 189,
    address: {
        street: 'Abrikosovaya',
        house: 19,
    }
};
const {
    name: n,
    age: a,
    address: {
        street: s,
        index: i = '000009',
    },
    permission: {
        role: r = 'user',
    } = {},
} = person;

console.log(n, a, s, i, r);

const hello = ({
   name = 'Anon',
   age = 9000,
   sex = true,
} = {}) => {
    let end;
    if (sex) {
        end = 'ий';
    } else {
        end = 'яя';
    }
    console.log(`Привет ${age}-летн${end} мудила ${name}`);
};
hello({
    name: 'Настя',
    age: 1,
    sex: false
});
hello();

let sounds = {
    zhopa: 'prrrr',
    nos: 'wzuh',
    puzo: 'bul\' bul\'',
    mashina: 'dir dir dir'
};

let { nos } = sounds;
console.log(nos);

let { zhopa, ...other } = sounds;
console.log(zhopa);
console.log(other);

