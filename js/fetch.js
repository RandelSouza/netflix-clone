// API Cards Yu Gi Oh Endpoint
const baseUrl = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

// Função para simplificar o comando de pegar o elemento HTML
const getElement = document.querySelector.bind(document);

let cardsYugiOh;
let cardById;

// Talvez seja necessário
async function requestYugiohCardsById(idCard) {
    await fetch(baseUrl + `?id=${idCard}`)
        .then((response) => response.json())
        .then((data) => {
            cardById = data;
        })
        .catch((error) => console.log(error));
}


async function requestYugiohCards(name) {
    await fetch(baseUrl + `?name=${name}`)
        .then((response) => response.json())
        .then((data) => {
            cardsYugiOh = data;
        })
        .catch((error) => console.log(error));
}


async function requestYugiohCardsByRace(race) {
    await fetch(baseUrl + `?race=${race}`)
        .then((response) => response.json())
        .then((data) => {
            cardsYugiOh = data;
        })
        .catch((error) => console.log(error));
}

// As funções de requisição acima podem ser refatoradas para serem mais dinamicas
// Ou não dependendo do proposito delas
// é interresante pensar bem nessa organização.

// Função responsavel por montar o HTML exibido na pagina
function createCardYuGiOh(index) {
    card = cardsYugiOh.data[index].card_images[0].image_url;
    return card;
}

async function startApp() {

    await requestYugiohCards('Blue-Eyes White Dragon');
    getElement('.one').src = createCardYuGiOh();

    await requestYugiohCards('Tornado Dragon');
    getElement('.two').src = createCardYuGiOh();

    await requestYugiohCards("Dark Magician");
    getElement('.three').src = createCardYuGiOh();

    await requestYugiohCards('Blue-Eyes White Dragon');
    getElement('.four').src = createCardYuGiOh();

    await requestYugiohCards('Tornado Dragon');
    getElement('.five').src = createCardYuGiOh();

    await requestYugiohCards("Dark Magician");
    getElement('.six').src = createCardYuGiOh();

    getElement('.description').innerHTML = cardsYugiOh.data[0].desc;
    getElement('.title').innerHTML = cardsYugiOh.data[0].name
}

async function testeGetById(){
    await requestYugiohCardsById(2);
    console.log(cardById);
}

let requestRace = async (race) => {
    await requestYugiohCardsByRace(race);
}
