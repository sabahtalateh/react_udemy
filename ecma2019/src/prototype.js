const cat = {
    name: "Barsik",
    sound: "meow",
    say: function () {
        console.log(`${this.name} say ${this.sound}`)
    }
};

const dog = {
    name: "Bobik",
    sound: "gav",
    say: function () {
        console.log(`${this.name} say ${this.sound}`)
    }
};

cat.say();
dog.say();

console.log(cat);

function Animal(name, voice) {
    this.name = name;
    this.voice = voice;
}
Animal.prototype.say = function () {
    console.log(`${this.name} say ${this.voice}`);
};

const guineaPig = new Animal('Ivan', 'Daite mne vodochki');
guineaPig.say();

const zayac = new Animal('Konstantin', 'Ya ne uspevayu na avtobus.. nu i pohui');
zayac.say();
