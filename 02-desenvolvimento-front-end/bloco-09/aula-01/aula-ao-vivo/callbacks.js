const db =[
    {
        id: 123,
        name: 'Xuxa',
        favoriteFood: 'algodão doce',
        greeting: 'Oi, galerinha!',
    },
    {
        id: 321,
        name: 'João Corsa',
        favoriteFood: 'churrasco',
        greeting: 'Salve!',
    },
    {
        id: 404,
        name: "Faustina O'Missing",
        favoriteFood: null,
        greeting: 'Oi.',
    },
];

let isDBHacked = false;

function hackTheDB() {
    isDBHacked = true;
}

function restartDB() {
    isDBHacked = false;
}

function createPresentationMessage(personName, callback) {
    setTimeout(() => {
        if(isDBHacked) {
            return callback(new Error('Explodiu'), null);
        }

        const queryResult = db.find(({name}) => name === personName);
        const { greeting, name, favoriteFood } = queryResult;
        const greetingString = `${greeting} Meu nome é ${name} e minha comida favorita é ${favoriteFood}`;

        callback(null, greetingString);
    }, 300);
}

// callback (err, result);

module.exports = {
    createPresentationMessage,
    hackTheDB,
    restartDB,
}