let carousel = $('#carousel');   // Pegando o primeiro carousel


let images = ['https://storage.googleapis.com/ygoprodeck.com/pics/56804361.jpg'
    , 'https://storage.googleapis.com/ygoprodeck.com/pics/1861630.jpg'
    , 'https://storage.googleapis.com/ygoprodeck.com/pics/50179591.jpg'
    , 'https://storage.googleapis.com/ygoprodeck.com/pics/67748760.jpg'
    , 'https://storage.googleapis.com/ygoprodeck.com/pics/28865322.jpg'
    , 'https://storage.googleapis.com/ygoprodeck.com/pics/2411269.jpg'
    , 'https://storage.googleapis.com/ygoprodeck.com/pics/87746184.jpg'
    , 'https://storage.googleapis.com/ygoprodeck.com/pics/25451383.jpg'
]

carousel.on('initialize.owl.carousel', async () => {
    requestRace('Quick-Play');
});

//carousel.on('initialize.owl.carousel', () => {
//    console.log('Iniciando o carousel');
//    $('#carousel').trigger('add.owl.carousel', ['<div class="item box-movie animate__animated animate__flipInY"> <img class="box-movie owl-lazy" data-src="../img/min1.jpg" alt=""></div>'])
//        .trigger('refresh.owl.carousel');
//    console.log('Finalizando o carousel')
//})


// Adicionar 5 cards depois da página estar completamente carregada.



window.onload = () => {
    // run in onload
    setTimeout(() => {
        for (let i = 0; i < 5; i++) {
            $('#carousel').trigger('add.owl.carousel', ['<div class="item box-movie"><img class="owl-lazy" data-src="' + createCardYuGiOh(i) + '" alt=""></div>'])
                .trigger('refresh.owl.carousel')
                .trigger('to.owl.carousel', [-3, 1000]);
        }
    
    }, 1000)
  }

//$(window).bind("load", function () {
//    for (let i = 0; i < 5; i++) {
//        $('#carousel').trigger('add.owl.carousel', ['<div class="item"><img class="owl-lazy" data-src="' + createCardYuGiOh(i) + '" alt=""></div>'])
//            .trigger('refresh.owl.carousel');
//    }

//});


//window.addEventListener("load", afterLoaded, false);
//function afterLoaded() {
//    for (let i = 0; i < 5; i++) {
//        $('#carousel').trigger('add.owl.carousel', ['<div class="item"><img class="owl-lazy" data-src="' + createCardYuGiOh(i) + '" alt=""></div>'])
//            .trigger('refresh.owl.carousel');
//    }

//}
//document.onreadystatechange = function () {
//    if (document.readyState === "complete") {
//        for (let i = 0; i < 5; i++) {
//            $('#carousel').trigger('add.owl.carousel', ['<div class="item"><img class="owl-lazy" data-src="' + createCardYuGiOh(i) + '" alt=""></div>'])
//                .trigger('refresh.owl.carousel');
//        }

//    }
//    else {
//        window.onload = function () {
//            requestRace('Aqua');
//        };
//    };
//}
//$(window).on('load', function () {

//    for (let i = 0; i < 5; i++) {
//        $('#carousel').trigger('add.owl.carousel', ['<div class="item"><img class="owl-lazy" data-src="' + createCardYuGiOh(i) + '" alt=""></div>'])
//            .trigger('refresh.owl.carousel');
//    }


//});

//carousel.on('initialize.owl.carousel', async () => {
// console.log(`Initialized is ${document.documentElement.scrollHeight}`);

// await requestYugiohCardsByRace('Winged Beast');
// console.log(cardsYugiOh);

//let items = $('.carousel-part-1');

// console.log(items);

// for (let i = 0; i < 7; i++) {
//     carousel.trigger('refresh.owl.carousel');
//      items[i].innerHTML = '<img class="box-movie owl-lazy" data-src="' +
//        cardsYugiOh.data[i].card_images[0].image_url + '" alt="' + cardsYugiOh.data[i].name + '">';
//}


// await new Promise(resolve => setTimeout(resolve, 2000))

// console.log(`Actual value is ${document.documentElement.scrollHeight}`)
//})

let count = 5;

$("#ver-mais").click(function (e) {
    e.preventDefault(); //-- prevent form submit

    if (count < cardsYugiOh.data.length) {
        $('#carousel').trigger('add.owl.carousel', ['<div class="item box-movie animate__animated animate__flipInY"><img class="box-movie owl-lazy" data-src="' + cardsYugiOh.data[count].card_images[0].image_url + '" alt=""></div>'])
            .trigger('refresh.owl.carousel');
        count++;
    }

});


$('#ver-mais').click(function () {
    carousel.trigger('next.owl.carousel', [500]);
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
    }
}).trigger('to.owl.carousel', [-3, 1000]);




/**
 * 1) Achar uma forma de inserir 5 elementos ao carousel após a inicialização. [x]
 * permitindo que as imagens sejam carregadas.
 *
 * 2) Testar o segundo carousel com imagem de outro-race.
 */