class Animal {
    constructor(name, voice) {
        this.name = name;
        this.voice = voice;
        console.log(this)
    }

    say() {
        console.log(`${this.name} say ${this.voice}`)
    }
}

class Bird extends Animal {
    constructor(name, voice, yaico){
        super(name, voice);
        this.yaico = yaico;
    }

    say() {
        console.log(`Bird ${this.name} say ${this.voice}`);
    }

    fly() {
        console.log(`${this.name} flies`);
    }

    sidetNaYaico() {
        console.log(`${this.name} sel na ${this.yaico} yaico`)
    }
}

const cat = new Animal('Petya', 'nyam nyam');
cat.say();

const bird = new Bird('Ilya', 'krya', 'zelenoe');
bird.say();
bird.fly();
bird.sidetNaYaico();
