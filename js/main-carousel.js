let carousel = $('#carousel');      // Pegando o primeiro carousel
let buttonsNext;
let load = false;
let count = 5;
let count2 = 5;
let nexts;
let carousels = ['carousel', 'carousel2'];
let counts = [count, count2];

carousel.on('initialize.owl.carousel', async () => {
    // requestRace('Plant');
    races('Aqua', 'Plant');
});

// Adicionar 5 cards depois da página estar completamente carregada.
window.onload = () => {
    // run in onload
    setTimeout(() => {

        for (let k = 0; k < carousels.length; k++) {
            for (let i = 0; i < 5; i++) {
                $('#' + carousels[k])
                    .trigger('add.owl.carousel', ['<div class="item box-movie"><img class="owl-lazy" data-src="' + createCardYuGiOhTeste(i, varCards[k]) + '" alt=""></div>'])
                    .trigger('refresh.owl.carousel')
                    .trigger('to.owl.carousel', [-4, 2000]);
            }

            ///$('#carousel2')
            //     .trigger('add.owl.carousel', ['<div class="item box-movie"><img class="owl-lazy" data-src="' + createCardYuGiOhTeste(i, cardsYugiOh2) + '" alt=""></div>'])
            //    .trigger('refresh.owl.carousel')
            //   .trigger('to.owl.carousel', [-4, 1000]);


            $('#next' + (k + 1)).click(function (e) {
                e.preventDefault(); //-- prevent form submit

                if (counts[k] < varCards[k].data.length) {

                    $('#' + carousels[k])
                        .trigger('to.owl.carousel', [-4, 500])
                        .trigger('add.owl.carousel', ['<div class="item box-movie animate__animated animate__flipInY"><img class="box-movie owl-lazy" data-src="' + createCardYuGiOhTeste(counts[k], varCards[k]) + '" alt=""></div>'])
                        .trigger('refresh.owl.carousel');
                    counts[k]++;
                }

            });


            $('#next' + (k + 1)).click(function () {
                $('#' + carousels[k]).trigger('next.owl.carousel', [1000])
            })
        }



        //$('#next2').click(function (e) {
        //   e.preventDefault(); //-- prevent form submit

        //  if (count + "2" < cardsYugiOh2.data.length) {

        //       $('#carousel2')
        //           .trigger('to.owl.carousel', [-4, 500])
        //           .trigger('add.owl.carousel', ['<div class="item box-movie animate__animated animate__flipInY"><img class="box-movie owl-lazy" data-src="' + createCardYuGiOhTeste(count2, cardsYugiOh2) + '" alt=""></div>'])
        //           .trigger('refresh.owl.carousel');
        //       count2++;
        //   }

        //});



        // $('#next2').click(function () {
        //     carousel2.trigger('next.owl.carousel', [1000])
        //  })


    }, 1000);
}



$('#assistir-agora').click(function () {
})

carousel.owlCarousel({
    dots: false,
    nav: true,
    center: true,
    loop: true,
    lazyLoad: true,
    margin: 10,
    sliderTransition: 'ease-in',
    responsive: {
        600: {
            items: 4
        }
    },
    navText: ['<button id="prev1" type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button>'
        , '<button id="next1" type="button" role="presentation" class="owl-next" id="next2"><span aria-label="Next">›</span></button>']
}).trigger('to.owl.carousel', [-3, 1000]);


/**
 * 1) Achar uma forma de inserir 5 elementos ao carousel após a inicialização. [x]
 * permitindo que as imagens sejam carregadas.
 *
 * 2) Testar o segundo carousel com imagem de outro race.
 */