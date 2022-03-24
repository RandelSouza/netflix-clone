// Inicialização de variavéis
let carousel = $('#carousel');
let buttonsNext;
let load = false;
let count = 5;
let count2 = 5;
let nexts;
let carousels = ['carousel', 'carousel2'];
let counts = [count, count2];
const numberInitialCards = 5;

carousel.on('initialize.owl.carousel', async () => races('Aqua', 'Plant') );

// Adicionar 5 cards depois da página estar completamente carregada.
window.onload = () => {
    // run in onload
    setTimeout(() => {
        carousels.forEach( (carrousel, index) => generateInitialCards(carrousel, index, numberInitialCards));
    }, 2000);
}

$('#assistir-agora').click(() => {
    // Mostrar modal com as opções do site
})

const generateInitialCards = (carrousel, index, numberCards) => {
    let speedTransitionCard = 100;

    for (let cardIndex = 0; cardIndex < numberCards; cardIndex++) {      
        let cardElement = ['<div class="item test-blue box-movie"><img class="owl-lazy" data-src="'
                            + createCardYuGiOhTeste(cardIndex, varCards[index]) + '" data-src-retina="' 
                            + '" alt=""> <a href="#" class="btn"><img src="../img/olho-visualizar-2.png">Ver mais...</a></div>']

        $('#' + carrousel) .trigger('add.owl.carousel', cardElement)
                           .trigger('refresh.owl.carousel')
                           .trigger('to.owl.carousel', [-4, 2000]);        
    }

    eventClickNextButton(carrousel, index, speedTransitionCard);
   
}

const eventClickNextButton = (carrousel, index, speed) => {
    $('#next' + (index + 1)).click( ()  => {
        generateNewCard(carrousel, index);
        $('#' + carrousel).trigger('next.owl.carousel', [speed]);        
    });
}

const generateNewCard = (carrousel, index) => {
   
    if (counts[index] < varCards[index].data.length) {
        let cardElement = ['<div class="test-blue item box-movie animate__animated animate__flipInY"><img class="box-movie owl-lazy" data-src="' 
                        + createCardYuGiOhTeste(counts[index], varCards[index]) + '" alt=""><a href="#" class="btn"><img src="../img/olho-visualizar-2.png">Ver mais...</a></div>']

        $('#' + carrousel)
            .trigger('to.owl.carousel', [-4, 500])
            .trigger('add.owl.carousel', cardElement)
            .trigger('refresh.owl.carousel');
        counts[index]++;
    }
}

carousel.owlCarousel({
    dots: false, autoplay: false,
    nav: true,   center: true,
    loop: true,  lazyLoad: true,
    margin: 10,
    sliderTransition: 'ease-in',
    responsive: {
        600: { items: 4 }
    },
    navText: ['<button id="prev1" type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button>'
        , '<button id="next1" type="button" role="presentation" class="owl-next" id="next2"><span aria-label="Next">›</span></button>']
}).trigger('to.owl.carousel', [-3, 1000]);


carousel.on('click', '.item', event => {
    event.preventDefault();
    let button = document.createElement('button');
    let elementDiv =  event.currentTarget;
  
    //elementDiv.appendChild(button)
    console.log(elementDiv.classList);
    console.log('carousel on click item', event.currentTarget)
    
    //$(this).find('.test-red:first').addClass('active');
});

carousel.on('mouseover', '.item', event => {
    event.preventDefault();
    
    console.log('carousel on click item', event.currentTarget)

    let elementDiv =  event.currentTarget;

    console.log(elementDiv.classList);
    elementDiv.classList.replace('test-blue', 'test-red');
    
    
    //$(this).find('.test-red:first').addClass('active');
});

carousel.on('mouseout', '.item', event => {
    event.preventDefault();  
    console.log('carousel on click item', event.currentTarget )

    let elementDiv =  event.currentTarget;

    console.log('on mouse out');
    elementDiv.classList.replace('test-red', 'test-blue');
   
    
    //$(this).find('.test-red:first').addClass('active');
});

