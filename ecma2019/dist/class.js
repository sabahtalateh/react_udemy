'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animal = function () {
    function Animal(name, voice) {
        _classCallCheck(this, Animal);

        this.name = name;
        this.voice = voice;
        console.log(this);
    }

    _createClass(Animal, [{
        key: 'say',
        value: function say() {
            console.log(this.name + ' say ' + this.voice);
        }
    }]);

    return Animal;
}();

var Bird = function (_Animal) {
    _inherits(Bird, _Animal);

    function Bird(name, voice, yaico) {
        _classCallCheck(this, Bird);

        var _this = _possibleConstructorReturn(this, (Bird.__proto__ || Object.getPrototypeOf(Bird)).call(this, name, voice));

        _this.yaico = yaico;
        return _this;
    }

    _createClass(Bird, [{
        key: 'say',
        value: function say() {
            console.log('Bird ' + this.name + ' say ' + this.voice);
        }
    }, {
        key: 'fly',
        value: function fly() {
            console.log(this.name + ' flies');
        }
    }, {
        key: 'sidetNaYaico',
        value: function sidetNaYaico() {
            console.log(this.name + ' sel na ' + this.yaico + ' yaico');
        }
    }]);

    return Bird;
}(Animal);

var cat = new Animal('Petya', 'nyam nyam');
cat.say();

var bird = new Bird('Ilya', 'krya', 'zelenoe');
bird.say();
bird.fly();
bird.sidetNaYaico();