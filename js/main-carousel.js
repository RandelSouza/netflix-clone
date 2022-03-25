// Inicialização de variavéis
let carousel = $('#carousel');
let buttonsNext;
let load = false;
let count = 0;
let count2 = 0;
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
        let cardImage =   '<img class="owl-lazy" data-src="'
                            + createCardYuGiOhTeste(cardIndex, varCards[index])
                            + '" data-src-retina="' 
                            + '" alt="">';

        let linkButton = ' <a type="button" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop" data-array-index="'+index+'" data-id="'+varCards[index].data[counts[index]].id+'" class="btn rounded-pill" id="button-more">VER MAIS...<img src="./img/olho-visualizar-2.png"></a>';

        let cardElement = ['<div  class="item test-blue box-movie">'+ cardImage + linkButton+'</div>']

        $('#' + carrousel).trigger('add.owl.carousel', cardElement)
                          .trigger('refresh.owl.carousel')
                          .trigger('to.owl.carousel', [-4, 2000]); 

        counts[index]++;     
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
                        + createCardYuGiOhTeste(counts[index], varCards[index]) + '" alt=""><a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop" data-array-index="'+index+'" data-id="'+varCards[index].data[counts[index]].id+'" class="btn rounded-pill" id="button-more">VER MAIS...<img src="./img/olho-visualizar-2.png"></a></div>']

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


//carousel.on('click', '#button-more', event => {
//    event.preventDefault();  
    //let elementDiv =  event.currentTarget;
  
    //elementDiv.appendChild(button)
    //console.log(elementDiv.classList);
    //console.log(elementDiv.getAttribute("data-id"));
    //console.log('carousel on click item', event.currentTarget)   
    
    //$(this).find('.test-red:first').addClass('active');
//});

var exampleModal = document.getElementById('staticBackdrop')
exampleModal.addEventListener('show.bs.modal', (event) => {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var idCard = button.getAttribute('data-id')
  var indexArray = button.getAttribute('data-array-index')
  console.log(idCard, indexArray);
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.

  let cardMonster =varCards[indexArray].data.find(card => card.id == idCard);

  let modalTitle = exampleModal.querySelector('.modal-title')
  let modalBodyInput = exampleModal.querySelector('.modal-body input')
  let img = exampleModal.querySelector('.card-img-top')
  let messageText = exampleModal.querySelector('#message-text');
  let cardAttack = exampleModal.querySelector('#card-attack');
  let cardDefense = exampleModal.querySelector('#card-defense');
  let cardType = exampleModal.querySelector('#card-type');
  let cardCategory = exampleModal.querySelector('#card-category');
  let cardLevel = exampleModal.querySelector('#card-level');
  let cardAttribute = exampleModal.querySelector('#card-attribute');
  
  console.log(cardMonster)

  modalTitle.textContent = 'Nome: ' + cardMonster.name;
  modalBodyInput.value = cardMonster.id;

  let imageUrl = cardMonster.card_images[0].image_url;
  img.src = imageUrl !== undefined ?  imageUrl : '../img/card-backward.png';

  messageText.value = cardMonster.desc !== undefined ? cardMonster.desc : ' ━ ';
  cardAttack.value = cardMonster.atk !== undefined ? cardMonster.atk  : ' ━ ';
  cardDefense.value = cardMonster.def !== undefined ? cardMonster.def : ' ━ ';
  cardType.value = cardMonster.type !== undefined ? cardMonster.type : ' ━ ';
  cardCategory.value = cardMonster.race  !== undefined ? cardMonster.race : ' ━ ';
  cardLevel.value = cardMonster.level !== undefined ? cardMonster.level + ' ★ ' : ' ━ ';
  cardAttribute.value = cardMonster.attribute !== undefined ? cardMonster.attribute : ' ━ ';
  
  //cardTitle.innerHTML = cardMonster.name;

})

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

