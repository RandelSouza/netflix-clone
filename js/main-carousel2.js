
let carousel2 = $('#carousel2');
let itemsCarouselTwo;

const buttonPreviousTwo = '<button id="prev2" type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button>';
const buttonNextTwo = '<button id="next2" type="button" role="presentation" class="owl-next" id="next2"><span aria-label="Next">›</span></button>';

const getNumberItemsCarouselTwo = event => itemsCarouselTwo = event.item.count;

addEventChangeClass({
    carousel: carousel2,
    eventType: 'mouseover',
    elementClass: '.item',
    oldClass: 'test-blue',
    newClass: 'test-red'
});

addEventChangeClass({
    carousel: carousel2,
    eventType: 'mouseout',
    elementClass: '.item',
    oldClass: 'test-red',
    newClass: 'test-blue'
});

carousel2.owlCarousel({
    onLoadLazy: getNumberItemsCarouselTwo,
    stagePadding: 10,
    dots: false,
    nav: true,
    center: true,
    loop: true,
    lazyLoad: true,
    margin: 10,
    sliderTransition: 'ease-in',
    animateOut: 'fadeout',
    responsive: {
        600: { items: 4 }
    },
    navText: [buttonPreviousTwo, buttonNextTwo]
});

