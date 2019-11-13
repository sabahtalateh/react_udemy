'use strict';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var person = {
    name: "Ivan",
    age: 189,
    address: {
        street: 'Abrikosovaya',
        house: 19
    }
};
var n = person.name,
    a = person.age,
    _person$address = person.address,
    s = _person$address.street,
    _person$address$index = _person$address.index,
    i = _person$address$index === undefined ? '000009' : _person$address$index,
    _person$permission = person.permission;
_person$permission = _person$permission === undefined ? {} : _person$permission;
var _person$permission$ro = _person$permission.role,
    r = _person$permission$ro === undefined ? 'user' : _person$permission$ro;


console.log(n, a, s, i, r);

var hello = function hello() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === undefined ? 'Anon' : _ref$name,
        _ref$age = _ref.age,
        age = _ref$age === undefined ? 9000 : _ref$age,
        _ref$sex = _ref.sex,
        sex = _ref$sex === undefined ? true : _ref$sex;

    var end = void 0;
    if (sex) {
        end = 'ий';
    } else {
        end = 'яя';
    }
    console.log('\u041F\u0440\u0438\u0432\u0435\u0442 ' + age + '-\u043B\u0435\u0442\u043D' + end + ' \u043C\u0443\u0434\u0438\u043B\u0430 ' + name);
};
hello({
    name: 'Настя',
    age: 1,
    sex: false
});
hello();

var sounds = {
    zhopa: 'prrrr',
    nos: 'wzuh',
    puzo: 'bul\' bul\'',
    mashina: 'dir dir dir'
};

var nos = sounds.nos;

console.log(nos);

var zhopa = sounds.zhopa,
    other = _objectWithoutProperties(sounds, ['zhopa']);

console.log(zhopa);
console.log(other);