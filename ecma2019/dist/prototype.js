"use strict";

var cat = {
    name: "Barsik",
    sound: "meow",
    say: function say() {
        console.log(undefined.name + " say " + undefined.sound);
    }
};

var dog = {
    name: "Bobik",
    sound: "gav",
    say: function say() {
        console.log(undefined.name + " say " + undefined.sound);
    }
};

cat.say();