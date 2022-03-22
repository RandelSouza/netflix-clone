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

async function races(race1, race2) {
    Promise.all([
        fetch(baseUrl + `?race=${race1}`, options),
        fetch(baseUrl + `?race=${race2}`, options)
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

// Talvez seja necessário
async function requestYugiohCardsById(idCard) {
    await fetch(baseUrl + `?id=${idCard}`, options)
        .then(response => response.json()
            .then(data => {
                cardById = data;
            }))
        .catch(error => console.log(error));
}

async function requestYugiohCards(name) {
    await fetch(baseUrl + `?name=${name}`, options)
        .then(response => response.json()
            .then(data => {
                cardsYugiOh = data;
            }))
        .catch(error => console.log(error));
}

async function requestYugiohCardsByRace(race) {
    await fetch(baseUrl + `?race=${race}`, options)
        .then(response => response.json()
            .then(data => {
                cardsYugiOh = data;
            }))
        .catch(error => console.log(error));
}

// As funções de requisição acima podem ser refatoradas para serem mais dinamicas
// Ou não dependendo do proposito delas
// é interresante pensar bem nessa organização.

// Função responsavel por montar o HTML exibido na pagina
function createCardYuGiOh(index) {
    card = cardsYugiOh.data[index].card_images[0].image_url;
    return card;
}

function createCardYuGiOhTeste(index, arrayCards, retina=false) {
    card = arrayCards.data[index].card_images[0].image_url;
    return card;
}

async function testeGetById() {
    await requestYugiohCardsById(2);
    console.log(cardById);
}

let requestRace = async (race) => {
    await requestYugiohCardsByRace(race);
}
