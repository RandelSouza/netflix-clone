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
let language = 'language=pt&';
let itemsCarouselOne;
let raceCarouselOne = 'Aqua';
let raceCarouselTwo = 'Plant';
let textLanguage = 'pt';

const buttonPreviousOne = '<button id="prev1" type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button>';
const buttonNextOne = '<button id="next1" type="button" role="presentation" class="owl-next" id="next2"><span aria-label="Next">›</span></button>';

const NUMBER_INITIAL_CARDS = 5;
const spellOrTrapRace = ["Normal", "Field", "Equip", "Continuous", "Quick-Play", "Ritual", "Counter"];
const getNumberItemsCarouselOne = event =>  itemsCarouselOne  = event.item.count;

carousel.on('initialize.owl.carousel', async () => races('Aqua', 'Plant', language));

// Adicionar 5 cards depois da página estar completamente carregada.
window.onload = () => {
    setTimeout(() => {
        carousels.forEach((carrousel, index) => generateInitialCards(carrousel, index, NUMBER_INITIAL_CARDS));
        eventClickNextButton(carousels[0], 0, speedTransitionCard);
        eventClickNextButton(carousels[1], 1, speedTransitionCard);
    }, 2000);
}

let firstSpans = $("#first span");
let firstRaces = $("#first .race");

addButtonClassActive(firstSpans, firstRaces);

addEventChangeClass({
    carousel,
    eventType: 'mouseover',
    elementClass: '.item',
    oldClass: 'test-blue',
    newClass: 'test-red'
});

addEventChangeClass({
    carousel,
    eventType: 'mouseout',
    elementClass: '.item',
    oldClass: 'test-red',
    newClass: 'test-blue'
});

carousel.owlCarousel({
    dots: false,
    onLoadLazy: getNumberItemsCarouselOne,
    autoplay: false,
    nav: true,
    center: true,
    loop: true,
    lazyLoad: true,
    margin: 10,
    sliderTransition: 'ease-in',
    responsive: {
        600: { items: 4 }
    },
    navText: [buttonPreviousOne, buttonNextOne]
}).trigger('to.owl.carousel', [-3, 1000]);

