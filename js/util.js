const SPEED_TRANSITION_IN_MILLISECONDS = 1000; 

const eventClickNextButton = (carrousel, index, speed) => {
    $('#next' + (index + 1)).click(() => {
        generateNewCard(carrousel, index);
        $('#' + carrousel).trigger('next.owl.carousel', [speed]);
    });
}

const buttonRaceKeyIsValid = (key) => `${key}` !== "length" && `${key}` !== "prevObject";
const buttonRaceIsActive = (buttonsRace, key) => buttonsRace[`${key}`].classList.contains("active");

const removeButtonClassActive = (buttonsRace) => {
    let dropdownSpellOrTrap = $(".btn-group button");

    Object.entries(buttonsRace)
        .forEach(([key]) => {

            if (buttonRaceKeyIsValid(key)) {
                if (buttonRaceIsActive(buttonsRace, key)) {                                                     
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
    let dataSourceImg = 'data-src="'+ createCardYuGiOh(counts[index], varCards[index]) + '"';
    let imgBoxMovie = '<img '+classImgBoxMovie+' '+dataSourceImg+' alt="">';

    let cardElementClass = 'class="test-blue item box-movie animate__animated animate__flipInY"';
    let cardElement = ['<div '+cardElementClass+'> '+imgBoxMovie+' '+buttonSeeMore+'</div>'];

    return cardElement;
}

const addNewItemOwlCarousel = (carrousel, index, positionToMove=-5) => {
    $('#' + carrousel)       
        .trigger('add.owl.carousel', createElementCard(index))
        .trigger('to.owl.carousel', [positionToMove, SPEED_TRANSITION_IN_MILLISECONDS, true])
        .trigger('refresh.owl.carousel');
    counts[index]++;
};

const isAcceptGenerateNewCard = index => counts[index] < varCards[index].data.length;

const generateNewCard = (carrousel, index) => {    
    if (isAcceptGenerateNewCard(index)) {
        addNewItemOwlCarousel(carrousel, index);        
    }
}

const generateInitialCards = (carrousel, index, numberCards) => {
    counts[index] = 0;
    let positionToMove = -3;

    for (let cardIndex = 0; cardIndex < numberCards; cardIndex++) {   
        addNewItemOwlCarousel(carrousel, index, positionToMove);       
    }
}

const addEventChangeClass = ( { carousel, eventType, elementClass, oldClass, newClass } ) => {
    carousel.on(eventType, elementClass, event => {
        event.preventDefault();
    
        let elementDiv = event.currentTarget;
        elementDiv.classList.replace(oldClass, newClass);
    });    
}
