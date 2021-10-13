
let carousel2 = $('#carousel2'); // Pegando o segundo carousel


let images2 = [ 'https://storage.googleapis.com/ygoprodeck.com/pics/33656832.jpg'
              ,'https://storage.googleapis.com/ygoprodeck.com/pics/28776350.jpg'
              ,'https://storage.googleapis.com/ygoprodeck.com/pics/65301952.jpg'
              ,'https://storage.googleapis.com/ygoprodeck.com/pics/31975743.jpg'
              ,'https://storage.googleapis.com/ygoprodeck.com/pics/56132807.jpg'
              ,'https://storage.googleapis.com/ygoprodeck.com/pics/30603688.jpg'
              ,'https://storage.googleapis.com/ygoprodeck.com/pics/9156135.jpg'
              ,'https://storage.googleapis.com/ygoprodeck.com/pics/8396952.jpg'
]

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
    }
});