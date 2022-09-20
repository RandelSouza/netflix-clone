
let exampleModal = document.getElementById('staticBackdrop');

exampleModal.addEventListener('show.bs.modal', (event) => {    
    let button = event.relatedTarget;   
    let idCard = button.getAttribute('data-id');
    let indexArray = button.getAttribute('data-array-index');
    
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

        img.src = './img/card-backward.png';
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