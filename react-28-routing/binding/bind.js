const animal = {
    species: 'antelope',
    age: 75,
    speed: 'medium',

    run: function () {
        console.log(`The ${this.species} runs well for being ${this.age} years old`);
    },

    roar: () => console.log(`the ${this.species} roars loudly`),
};

const bird = {
    species: 'swan',
    age: 107,
    speed: 'slow',
};

// const action = animal.run.bind(bird);
animal.roar();


const carActions = {
    honk(volume) {
        console.log(`The ${this.model} honks ${volume}.`);
    },

    beep() {
        console.log(`Beep beep`);
    },

    vroom(volume, annoyance) {
        console.log(`When the ${this.model} goes zooming by ${volume}, all the neighbors mutter '${annoyance}'`)
    },
};

const noise = carActions.vroom.bind({ model: 'Sonata' }, 'loudly');

noise('gosh');


