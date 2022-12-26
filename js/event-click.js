
$("#btn-search").on('click', () => {
    let cardName = $("#search-card")[0].value;
   
    requestYugiohCardByName(cardName, language, () => {
        let cardMonster = cardMosterData.data[0];      

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

$('#first .race').on('click', event => {
    let button = event.currentTarget;
    let race = button.getAttribute('data-race');
    raceCarouselOne = race;

    let newNumberInitialCards = race === 'Creator-God' ? 1 : NUMBER_INITIAL_CARDS;

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
        ["carousel2"].forEach((carrousel, index = 1) => generateInitialCards(carrousel, index=1, NUMBER_INITIAL_CARDS));
    });
});

$("#language ul li a").on('click', (event) => {
    let index = 0;
     
    textLanguage = event.currentTarget.attributes[0].value;
    language = textLanguage != '' ? `language=${textLanguage}&` : '';

    requestRace(raceCarouselOne, 0, language, () => {
       
        $('#carousel').trigger('replace.owl.carousel', () => { })
        .trigger('to.owl.carousel', [-1, 2000]);

        ["carousel"].forEach((carrousel, index) => generateInitialCards(carrousel, index, itemsCarouselOne));

        $('#carousel').trigger('refresh.owl.carousel');
    });

    requestRace(raceCarouselTwo, 1, language, () => {
        $('#carousel2').trigger('replace.owl.carousel', () => { })
        .trigger('to.owl.carousel', [-1, 2000]);

        ["carousel2"].forEach((carrousel, index = 1) => generateInitialCards(carrousel, index=1, itemsCarouselTwo));
        $('#carousel').trigger('refresh.owl.carousel');
    });  
    
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

