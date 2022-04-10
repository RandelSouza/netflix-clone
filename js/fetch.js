// API Cards Yu Gi Oh Endpoint
const baseUrl = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

// Função para simplificar o comando de pegar o elemento HTML
const getElement = document.querySelector.bind(document);

const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
};

let cardById;
let varCards = [];

async function races(race1, race2, language) {
    Promise.all([
        fetch(baseUrl + `?${language}race=${race1}`, options),
        fetch(baseUrl + `?${language}race=${race2}`, options)
    ])
        .then(async ([res1, res2]) => { //async function
           await res1.json()
           .then(data => varCards.push(data));
           
           await res2.json()
           .then(data =>  varCards.push(data));

        })
        .catch(error => {
            console.log(error);
        });
}

async function requestYugiohCardsById(idCard) {
    await fetch(baseUrl + `?id=${idCard}`, options)
        .then(response => response.json()
            .then(data => {
                cardById = data;
            }))
        .catch(error => console.log(error));
}

async function requestYugiohCardByName(name, language) {
    await fetch(baseUrl + `?${language}name=${name}`, options)
        .then(response => response.json()
            .then(data => {
                cardsYugiOh = data;
            }))
        .catch(error => console.log(error));
}

async function requestYugiohCardsByRace(race, index, language, callback) {
    await fetch(baseUrl + `?${language}race=${race}`, options)
        .then(response => response.json()
            .then(data => {                
                varCards[index] = data;
                callback();
            }))
        .catch(error => console.log(error));
}

function createCardYuGiOh(index) {
    card = cardsYugiOh.data[index].card_images[0].image_url;
    return card;
}

function createCardYuGiOhTeste(index, arrayCards, retina=false) {
    card = arrayCards.data[index].card_images[0].image_url;
    return card;
}

let requestRace = async (race, index, language, callback) => {
    await requestYugiohCardsByRace(race, index, language, callback);
}
