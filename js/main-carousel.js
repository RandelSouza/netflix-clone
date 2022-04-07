// Inicialização de variavéis
let carousel = $('#carousel');
let buttonsNext;
let load = false;
let count = 0;
let count2 = 0;
let nexts;
let carousels = ['carousel', 'carousel2'];
let counts = [count, count2];
let speedTransitionCard = 100;
const numberInitialCards = 5;
const spellOrTrapRace = ["Normal", "Field", "Equip", "Continuous", "Quick-Play", "Ritual", "Counter"];

carousel.on('initialize.owl.carousel', async () => races('Aqua', 'Plant'));

// Adicionar 5 cards depois da página estar completamente carregada.
window.onload = () => {
    // run in onload
    setTimeout(() => {
        carousels.forEach((carrousel, index) => generateInitialCards(carrousel, index, numberInitialCards));
        eventClickNextButton(carousels[0], 0, speedTransitionCard);
        eventClickNextButton(carousels[1], 1, speedTransitionCard);
    }, 2000);
}

let exampleModal = document.getElementById('staticBackdrop');

exampleModal.addEventListener('show.bs.modal', (event) => {
    // Button that triggered the modal
    let button = event.relatedTarget;
    // Extract info from data-bs-* attributes
    let idCard = button.getAttribute('data-id');
    let indexArray = button.getAttribute('data-array-index');   
    // If necessary, you could initiate an AJAX request here
    // and then do the updating in a callback.
    //
    // Update the modal's content.

    let cardMonster = varCards[indexArray].data.find(card => card.id == idCard);

    let modalTitle = exampleModal.querySelector('.modal-title');
    let idCardInput = exampleModal.querySelector('#id-card');
    let img = exampleModal.querySelector('.card-img-top');
    let messageText = exampleModal.querySelector('#message-text');
    let cardAttack = exampleModal.querySelector('#card-attack');
    let cardDefense = exampleModal.querySelector('#card-defense');
    let labelCardDefense = exampleModal.querySelector('#label-card-defense');
    let cardType = exampleModal.querySelector('#card-type');
    let cardCategory = exampleModal.querySelector('#card-category');
    let cardLevel = exampleModal.querySelector('#card-level');
    let cardAttribute = exampleModal.querySelector('#card-attribute');   
  
    labelCardDefense.innerText = 'Defesa';
    
    modalTitle.textContent = 'Nome: ' + cardMonster.name;
    idCardInput.value = cardMonster.id;

    let imageUrl = cardMonster.card_images[0].image_url;
    img.src = imageUrl !== undefined ? imageUrl : '../img/card-backward.png';

    messageText.value = cardMonster.desc !== undefined ? cardMonster.desc : ' ━ ';
    cardAttack.value = cardMonster.atk !== undefined ? cardMonster.atk : ' ━ ';
   
    cardDefense.value = cardMonster.def !== undefined ? cardMonster.def : ' ━ ';
       
    if(cardMonster.type == 'Link Monster'){        
        cardDefense.value = cardMonster.linkval;   
        labelCardDefense.innerText = 'Link';     
    }

    cardType.value = cardMonster.type !== undefined ? cardMonster.type : ' ━ ';
    cardCategory.value = cardMonster.race !== undefined ? cardMonster.race : ' ━ ';
    cardLevel.value = cardMonster.level !== undefined ? cardMonster.level + ' ★ ' : ' ━ ';
    cardAttribute.value = cardMonster.attribute !== undefined ? cardMonster.attribute : ' ━ ';

     // Prices Card
     let priceCardModal = document.getElementById('staticBackdrop2');

     let amazonPrice = priceCardModal.querySelector('#amazon-price');
     let cardmarketPrice = priceCardModal.querySelector('#cardmarket-price');
     let coolstuffincPrice = priceCardModal.querySelector('#coolstuffinc-price');
     let ebayPrice = priceCardModal.querySelector('#ebay-price');
     let tcgPlayerPrice = priceCardModal.querySelector('#tcgplayer-price');

     let amazon = cardMonster.card_prices[0].amazon_price;
     let cardmarket = cardMonster.card_prices[0].cardmarket_price;
     let coolstuffinc =  cardMonster.card_prices[0].coolstuffinc_price;
     let ebay =  cardMonster.card_prices[0].ebay_price;
     let tcgPlayer =  cardMonster.card_prices[0].tcgplayer_price;
     
     amazon = amazon.replace(".", ",");
     cardmarket = cardmarket.replace(".", ",");
     coolstuffinc = coolstuffinc.replace(".", ",");
     ebay = ebay.replace(".", ",");
     tcgPlayer = tcgPlayer.replace(".", ",");

     amazonPrice.value = amazon !== "0,00" ? '$ ' + amazon : ' ━ ';
     cardmarketPrice.value  = cardmarket !== "0,00" ? '€ ' + cardmarket : ' ━ ';
     coolstuffincPrice.value  = coolstuffinc !== "0,00" ? '$ ' + coolstuffinc : ' ━ ';
     ebayPrice.value  = ebay !== "0,00" ? '$ ' + ebay : ' ━ ';
     tcgPlayerPrice.value  = tcgPlayer !== "0,00" ? '$ ' + tcgPlayer : ' ━ ';

})

addEventChangeClass(carousel, 'mouseover', '.item', 'test-blue', 'test-red');
addEventChangeClass(carousel, 'mouseout', '.item', 'test-red', 'test-blue');

$('#first .race').on('click', event => {
    let button = event.currentTarget;
    let race = button.getAttribute('data-race');

    let newNumberInitialCards = race === 'Creator-God' ? 1 : numberInitialCards;

    requestRace(race, 0, () => {
        $('#carousel').trigger('replace.owl.carousel', () => { });
        ["carousel"].forEach((carrousel, index) => generateInitialCards(carrousel, index, newNumberInitialCards));
    });
});

$('#second .race').on('click', event => {
    let button = event.currentTarget;
    let race = button.getAttribute('data-race');

    requestRace(race, 1, () => {
        $('#carousel2').trigger('replace.owl.carousel', () => { });
        ["carousel2"].forEach((carrousel, index = 1) => generateInitialCards(carrousel, index = 1, numberInitialCards));
    });
});


let firstSpans = $("#first span");
let firstRaces = $("#first .race");
addButtonClassActive(firstSpans, firstRaces);

let secondSpans = $("#second span");
let secondRaces = $("#second .race");
addButtonClassActive(secondSpans, secondRaces);

$("#second span").click((event) => {
    let button = event.currentTarget;
    let buttonsRace = $("#second .race");

    removeButtonClassActive(buttonsRace);
    button.classList.add("active");
});

carousel.owlCarousel({
    dots: false,
    autoplay: false,
    nav: true,
    center: true,
    loop: true,
    lazyLoad: true,
    margin: 10,
    sliderTransition: 'ease-in',
    responsive: {
        600: {
            items: 4
        }
    },
    navText: ['<button id="prev1" type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button>'
        , '<button id="next1" type="button" role="presentation" class="owl-next" id="next2"><span aria-label="Next">›</span></button>']
}).trigger('to.owl.carousel', [-3, 1000]);
