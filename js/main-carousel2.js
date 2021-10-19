
let carousel2 = $('#carousel2'); // Pegando o segundo carousel



carousel2.on('initialize.owl.carousel', async () => {
    console.log(`Initialized is ${document.documentElement.scrollHeight}`)

    let items = $('.carousel-part-2');

    for (let i = 0; i < items.length; i++) {
        items[i].innerHTML = '<img class="box-movie one owl-lazy" data-src="'+images[i]+'" alt="miniatura ">';
    }

    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(`Actual value is ${document.documentElement.scrollHeight}`)
})


$('#assistir-agora').click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    carousel2.trigger('prev.owl.carousel', [300]);

})

carousel2.owlCarousel({
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