
let carousel2 = $('#carousel2'); // Pegando o segundo carousel
let itemsCarouselTwo;

const printVariableEventCallbackCarouselTwo = (event) => {
    // Provided by the core
    var element   = event.target;         // DOM element, in this example .owl-carousel
    var name      = event.type;           // Name of the event, in this example dragged
    var namespace = event.namespace;      // Namespace of the event, in this example owl.carousel
    itemsCarouselTwo     = event.item.count;     // Number of items
    var item      = event.item.index;     // Position of the current item
    // Provided by the navigation plugin
    var pages     = event.page.count;     // Number of pages
    var page      = event.page.index;     // Position of the current page
    var size      = event.page.size;      // Number of items per page

}

addEventChangeClass(carousel2, 'mouseover', '.item', 'test-blue', 'test-red');
addEventChangeClass(carousel2, 'mouseout', '.item', 'test-red', 'test-blue');

carousel2.owlCarousel({
    onLoadLazy: printVariableEventCallbackCarouselTwo,
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
        600: {
            items: 4
        }
    },
    navText: ['<button id="prev2" type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button>'
             ,'<button id="next2" type="button" role="presentation" class="owl-next" id="next2"><span aria-label="Next">›</span></button>']
});

