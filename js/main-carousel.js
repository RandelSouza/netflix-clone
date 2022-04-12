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
let language = 'language=pt&'; // pt -> Portuguese, fr -> French, de -> German. it -> Italian
let itemsCarouselOne;
let raceCarouselOne = 'Aqua';
let raceCarouselTwo = 'Plant';
let textLanguage = 'pt';
const numberInitialCards = 5;
const spellOrTrapRace = ["Normal", "Field", "Equip", "Continuous", "Quick-Play", "Ritual", "Counter"];

carousel.on('initialize.owl.carousel', async () => races('Aqua', 'Plant', language));

$("#language ul li a").on('click', (event) => {
    // Mudando o valor da variavel language
    textLanguage = event.currentTarget.attributes[0].value;
    language = textLanguage != '' ? `language=${textLanguage}&` : '';

    // Atualizar carousel1 e carousel2 para a nova linguagem
    requestRace(raceCarouselOne, 0, language, () => {
        $('#carousel').trigger('replace.owl.carousel', () => { })
        .trigger('to.owl.carousel', [-1, 2000]);

        ["carousel"].forEach((carrousel, index) => generateInitialCards(carrousel, index, itemsCarouselOne));
    });

    requestRace(raceCarouselTwo, 1, language, () => {
        $('#carousel2').trigger('replace.owl.carousel', () => { })
        .trigger('to.owl.carousel', [-1, 2000]);

        ["carousel2"].forEach((carrousel, index = 1) => generateInitialCards(carrousel, index = 1, itemsCarouselTwo));
    });

    console.log(textLanguage)
    
    if(textLanguage === 'pt'){
        $("#language li a")[0].classList.add("active");
        $("#language li a")[1].classList.remove("active");
        changePageTextToPortuguese()

    }else{
        $("#language li a")[0].classList.remove("active");
        $("#language li a")[1].classList.add("active");
        changePageTextToEnglish();
    }
})

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
    console.log(idCard);
    
    if (idCard === 'search') {
        // Modal informações da carta
        $('#div-search-card').attr("hidden", false);
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

        img.src = '../img/card-backward.png';
        idCardInput.value = '';
        messageText.value = '';
        cardAttack.value = '';
        cardDefense.value = '';
        labelCardDefense.innerText =  textLanguage != '' ? 'Defesa:' : 'Defense:';
        cardType.value = '';
        cardCategory.value = '';
        cardLevel.value = '';
        cardAttribute.value = '';
        modalTitle.innerText= textLanguage != '' ? 'Nome: ': 'Name: ';
        $("#search-card")[0].value = '';

        // Modal preços
        let priceCardModal = document.getElementById('staticBackdrop2');

        let amazonPrice = priceCardModal.querySelector('#amazon-price');
        let cardmarketPrice = priceCardModal.querySelector('#cardmarket-price');
        let coolstuffincPrice = priceCardModal.querySelector('#coolstuffinc-price');
        let ebayPrice = priceCardModal.querySelector('#ebay-price');
        let tcgPlayerPrice = priceCardModal.querySelector('#tcgplayer-price');        
        
        console.log('Limpando preços...')
        amazonPrice.value = '';
        cardmarketPrice.value = '';
        coolstuffincPrice.value = '';
        ebayPrice.value = '';
        tcgPlayerPrice.value = '';

       
    } else {
        $('#div-search-card').attr("hidden", true);
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

        labelCardDefense.innerText = textLanguage != '' ? 'Defesa:' : 'Defense:';

        modalTitle.textContent = textLanguage != '' ? 'Nome: ' + cardMonster.name : 'Name: ' + cardMonster.name;
        idCardInput.value = cardMonster.id;

        let imageUrl = cardMonster.card_images[0].image_url;
        img.src = imageUrl !== undefined ? imageUrl : '../img/card-backward.png';

        messageText.value = cardMonster.desc !== undefined ? cardMonster.desc : ' ━ ';
        cardAttack.value = cardMonster.atk !== undefined ? cardMonster.atk : ' ━ ';

        cardDefense.value = cardMonster.def !== undefined ? cardMonster.def : ' ━ ';

        if (cardMonster.type == 'Link Monster') {
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
        let coolstuffinc = cardMonster.card_prices[0].coolstuffinc_price;
        let ebay = cardMonster.card_prices[0].ebay_price;
        let tcgPlayer = cardMonster.card_prices[0].tcgplayer_price;

        amazon = amazon.replace(".", ",");
        cardmarket = cardmarket.replace(".", ",");
        coolstuffinc = coolstuffinc.replace(".", ",");
        ebay = ebay.replace(".", ",");
        tcgPlayer = tcgPlayer.replace(".", ",");

        amazonPrice.value = amazon !== "0,00" ? '$ ' + amazon : ' ━ ';
        cardmarketPrice.value = cardmarket !== "0,00" ? '€ ' + cardmarket : ' ━ ';
        coolstuffincPrice.value = coolstuffinc !== "0,00" ? '$ ' + coolstuffinc : ' ━ ';
        ebayPrice.value = ebay !== "0,00" ? '$ ' + ebay : ' ━ ';
        tcgPlayerPrice.value = tcgPlayer !== "0,00" ? '$ ' + tcgPlayer : ' ━ ';
    }
})

addEventChangeClass(carousel, 'mouseover', '.item', 'test-blue', 'test-red');
addEventChangeClass(carousel, 'mouseout', '.item', 'test-red', 'test-blue');

$('#first .race').on('click', event => {
    let button = event.currentTarget;
    let race = button.getAttribute('data-race');
    raceCarouselOne = race;

    let newNumberInitialCards = race === 'Creator-God' ? 1 : numberInitialCards;

    requestRace(race, 0, language, () => {
        $('#carousel').trigger('replace.owl.carousel', () => { });
        ["carousel"].forEach((carrousel, index) => generateInitialCards(carrousel, index, newNumberInitialCards));
    });
});

$('#second .race').on('click', event => {
    let button = event.currentTarget;
    let race = button.getAttribute('data-race');
    raceCarouselTwo = race;

    requestRace(race, 1, language, () => {
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

const printVariableEventCallbackCarouselOne = (event) => {
    itemsCarouselOne     = event.item.count;  // Number of items
}

carousel.owlCarousel({
    dots: false,
    onLoadLazy: printVariableEventCallbackCarouselOne,
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



$("#btn-search").on('click', () => {
    let cardName = $("#search-card")[0].value;
   
    requestYugiohCardByName(cardName, language, () => {
        let cardMonster = cardMosterData.data[0];
        console.log(cardMonster);

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

        labelCardDefense.innerText = textLanguage != '' ? 'Defesa:' : 'Defense:';

        modalTitle.textContent = textLanguage != '' ? 'Nome: ' + cardMonster.name : 'Name: ' + cardMonster.name;
        idCardInput.value = cardMonster.id;

        let imageUrl = cardMonster.card_images[0].image_url;
        img.src = imageUrl !== undefined ? imageUrl : '../img/card-backward.png';

        messageText.value = cardMonster.desc !== undefined ? cardMonster.desc : ' ━ ';
        cardAttack.value = cardMonster.atk !== undefined ? cardMonster.atk : ' ━ ';

        cardDefense.value = cardMonster.def !== undefined ? cardMonster.def : ' ━ ';

        if (cardMonster.type == 'Link Monster') {
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
        let coolstuffinc = cardMonster.card_prices[0].coolstuffinc_price;
        let ebay = cardMonster.card_prices[0].ebay_price;
        let tcgPlayer = cardMonster.card_prices[0].tcgplayer_price;

        amazon = amazon.replace(".", ",");
        cardmarket = cardmarket.replace(".", ",");
        coolstuffinc = coolstuffinc.replace(".", ",");
        ebay = ebay.replace(".", ",");
        tcgPlayer = tcgPlayer.replace(".", ",");

        amazonPrice.value = amazon !== "0,00" ? '$ ' + amazon : ' ━ ';
        cardmarketPrice.value = cardmarket !== "0,00" ? '€ ' + cardmarket : ' ━ ';
        coolstuffincPrice.value = coolstuffinc !== "0,00" ? '$ ' + coolstuffinc : ' ━ ';
        ebayPrice.value = ebay !== "0,00" ? '$ ' + ebay : ' ━ ';
        tcgPlayerPrice.value = tcgPlayer !== "0,00" ? '$ ' + tcgPlayer : ' ━ ';

    });

    
});
