
let carousel2 = $('#carousel2'); // Pegando o segundo carousel


carousel2.on('initialize.owl.carousel', async () => {
    console.log(`Initialized is ${document.documentElement.scrollHeight}`)

    let items = $('.carousel-part-2');

    for (let i = 0; i < items.length; i++) {
        //items[i].innerHTML = '<img class="box-movie one owl-lazy" data-src="'+images[i]+'" alt="miniatura ">';
    }

    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(`Actual value is ${document.documentElement.scrollHeight}`)
})


$('#assistir-agora').click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    //carousel2.trigger('prev.owl.carousel', [300]);

})

const printVariableEventCallback = (event) => {
    // Provided by the core
    var element   = event.target;         // DOM element, in this example .owl-carousel
    var name      = event.type;           // Name of the event, in this example dragged
    var namespace = event.namespace;      // Namespace of the event, in this example owl.carousel
    var items     = event.item.count;     // Number of items
    var item      = event.item.index;     // Position of the current item
    // Provided by the navigation plugin
    var pages     = event.page.count;     // Number of pages
    var page      = event.page.index;     // Position of the current page
    var size      = event.page.size;      // Number of items per page

    console.log('element =' + element,
                'name =' + name, 
                'namespace =' + namespace,
                'items =' + items,
                'item =' + item,
                'pages =' + pages,
                'page =' + page,
                'size =' + size)
}

carousel2.owlCarousel({
    onLoadLazy: printVariableEventCallback,
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

carousel2.on('click', '.item', event => {
    event.preventDefault();
    console.log('carousel on click item', event.currentTarget)

    let elementDiv =  event.currentTarget;

    console.log(elementDiv.classList);
    elementDiv.classList.replace('test-blue', 'test-red');
    
    //$(this).find('.test-red:first').addClass('active');
});

carousel2.on('mouseover', '.item', event => {
    event.preventDefault();
    console.log('carousel on click item', event.currentTarget)

    let elementDiv =  event.currentTarget;

    console.log(elementDiv.classList);
    elementDiv.classList.replace('test-blue', 'test-red');
    
    //$(this).find('.test-red:first').addClass('active');
});

carousel2.on('mouseout', '.item', event => {
    event.preventDefault();  
    console.log('carousel on click item', event.currentTarget)

    let elementDiv =  event.currentTarget;

    console.log('on mouse out');
    elementDiv.classList.replace('test-red', 'test-blue');
   
    
    //$(this).find('.test-red:first').addClass('active');
});
