const eventClickNextButton = (carrousel, index, speed) => {
    $('#next' + (index + 1)).click(() => {
        generateNewCard(carrousel, index);
        $('#' + carrousel).trigger('next.owl.carousel', [speed]);
    });
}

const removeButtonClassActive = (buttonsRace) => {
    let isActive = false;
    let dropdownSpellOrTrap = $(".btn-group button");

    Object.entries(buttonsRace)
        .forEach(([key]) => {

            if (`${key}` !== "length" && `${key}` !== "prevObject") {
                isActive = buttonsRace[`${key}`].classList.contains("active");
            
                if (isActive) {                                                     
                    dropdownSpellOrTrap[0].classList.remove("active");
                    buttonsRace[`${key}`].classList.remove("active");                                                           
                }                                                               
            }
        }
    );
};

const addButtonClassActive = (elementSpans, elementButtons) => {
    elementSpans.click((event) => {
        let button = event.currentTarget;
        let buttonsRace = elementButtons;
        let dropdownSpellOrTrap = $(".btn-group button");

        removeButtonClassActive(buttonsRace);

        let race = button.getAttribute('data-race');

        let raceCompared = spellOrTrapRace.find(raceItem => race == raceItem);

        if (raceCompared != undefined) {
            dropdownSpellOrTrap[0].classList.add("active");
            button.classList.add("active");
        }

        button.classList.add("active");
    });
}

const createElementCard = (index) => {
    let dataArrayIndex = 'data-array-index="' + index + '" data-id="' + varCards[index].data[counts[index]].id + '"';
    let dataBsTarget = 'data-bs-target="#staticBackdrop"';
    let dataBsToggle = ' data-bs-toggle="modal"';
    let classElement = 'class="btn rounded-pill" id="button-more"';
    let img = '<img src="./img/olho-visualizar-2.png">';
    let buttonSeeMore = '<a href="#" '+dataBsToggle+' '+dataBsTarget+' '+dataArrayIndex+' '+classElement+'>VER MAIS...'+img+'</a>';
    

    let classImgBoxMovie = 'class="box-movie owl-lazy"';
    let dataSourceImg = 'data-src="'+ createCardYuGiOhTeste(counts[index], varCards[index]) + '"';
    let imgBoxMovie = '<img '+classImgBoxMovie+' '+dataSourceImg+' alt="">';

    cardElementClass = 'class="test-blue item box-movie animate__animated animate__flipInY"';
    let cardElement = ['<div '+cardElementClass+'> '+imgBoxMovie+' '+buttonSeeMore+'</div>'];

    return cardElement;
}

const generateNewCard = (carrousel, index) => {

    if (counts[index] < varCards[index].data.length) {

        $('#' + carrousel)
            .trigger('to.owl.carousel', [-4, 2000])
            .trigger('add.owl.carousel', createElementCard(index))
            .trigger('refresh.owl.carousel');
        counts[index]++;
    }
}

const generateInitialCards = (carrousel, index, numberCards) => {
    counts[index] = 0;

    for (let cardIndex = 0; cardIndex < numberCards; cardIndex++) {
        let cardImage = '<img class="owl-lazy" data-src="'
            + createCardYuGiOhTeste(cardIndex, varCards[index])
            + '" data-src-retina="'
            + '" alt="">';

        let linkButton = ' <a type="button" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop" data-array-index="' + index + '" data-id="' + varCards[index].data[counts[index]].id + '" class="btn rounded-pill" id="button-more">VER MAIS...<img src="./img/olho-visualizar-2.png"></a>';

        let cardElement = ['<div  class="item test-blue box-movie">' + cardImage + linkButton + '</div>']

        $('#' + carrousel).trigger('add.owl.carousel', cardElement)
            .trigger('refresh.owl.carousel')
            .trigger('to.owl.carousel', [-4, 2000]);

        counts[index]++;
    }
}

const addEventChangeClass = (carousel, eventType, elementClass, oldClass, newClass) => {
    carousel.on(eventType, elementClass, event => {
        event.preventDefault();
    
        let elementDiv = event.currentTarget;
        elementDiv.classList.replace(oldClass, newClass);
    });
    
}
