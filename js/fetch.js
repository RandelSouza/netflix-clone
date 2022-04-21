
const URL_YUGIOH = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

const OPTIONS = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
};

let varCards = [];
let cardMosterData;

async function races(race1, race2, language) {
    Promise.all([
        fetch(URL_YUGIOH + `?${language}race=${race1}`, OPTIONS),
        fetch(URL_YUGIOH + `?${language}race=${race2}`, OPTIONS)
    ])
        .then(async ([responseRace1, responseRace2]) => {
            await responseRace1.json()
                .then(data => varCards.push(data));

            await responseRace2.json()
                .then(data => varCards.push(data));

        })
        .catch(error => console.log(error));
}

async function requestYugiohCardByName(name, language, callback) {
    await fetch(URL_YUGIOH + `?${language}name=${name}`, OPTIONS)
        .then(response => response.json()
            .then(data => {
                cardMosterData = data;
                callback();
            }))
        .catch(error => console.log(error));
}

async function requestYugiohCardByFname(name, language, callback) {
    await fetch(URL_YUGIOH + `?${language}fname=${name}&&limit=1`, OPTIONS)
        .then(response => response.json()
            .then(data => {
                cardMosterData = data;
                callback();
            }))
        .catch(error => console.log(error));
}

async function requestYugiohCardsByRace(race, index, language, callback) {
    await fetch(URL_YUGIOH + `?${language}race=${race}`, OPTIONS)
        .then(response => response.json()
            .then(data => {
                varCards[index] = data;
                callback();
            }))
        .catch(error => console.log(error));
}

function createCardYuGiOh(index, arrayCards, retina=false) {
    card = arrayCards.data[index].card_images[0].image_url;
    return card;
}

let requestRace = async (race, index, language, callback) => {
    await requestYugiohCardsByRace(race, index, language, callback);
}
