// API Cards Yu Gi Oh Endpoint
const baseUrl = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

// Função para simplificar o comando de pegar o elemento HTML
const getElement = document.querySelector.bind(document);

let cardsYugiOh;

async function requestYugiohCards(url, name) {
  await fetch(baseUrl + `?name=${name}`)
    .then((response) => response.json())
    .then((data) => {
      cardsYugiOh = data;
    })
    .catch((error) => console.log(error));
}

// Função responsavel por montar o HTML exibido na pagina
function createCardYuGiOh() {
  card = cardsYugiOh.data[0].card_images[0].image_url;
  return card;
}

async function startApp() {
  await requestYugiohCards(baseUrl, 'Blue-Eyes White Dragon');
  getElement('.one').src = createCardYuGiOh();

  await requestYugiohCards(baseUrl, 'Tornado Dragon');
  getElement('.two').src = createCardYuGiOh();

  await requestYugiohCards(baseUrl, "Dark Magician");
  getElement('.three').src = createCardYuGiOh();

  await requestYugiohCards(baseUrl, "Ancient Brain");
  getElement('.four').src = createCardYuGiOh();
  
  await requestYugiohCards(baseUrl, "Armored Zombie");
  getElement('.five').src = createCardYuGiOh();

  await requestYugiohCards(baseUrl, "Barrel Dragon");
  getElement('.six').src = createCardYuGiOh();

  getElement('.description').innerHTML = cardsYugiOh.data[0].desc;
  getElement('.title').innerHTML = cardsYugiOh.data[0].name
}

window.onloadstart = startApp();