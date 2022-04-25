
const changePageTextToEnglish = () => {
    $("#titleOne")[0].innerText = 'List of game cards!';
    $("#descriptionOne")[0].innerText = 'The manga and anime series Yu-Gi-Oh! introduces the collectible card game originally created by Kazuki Takahashi, developed and published by Konami. The game began production in 1998, and today it is played all over the world.';
    $("#more-information")[0].innerText = 'MORE INFORMATION';
    $("#language-options")[0].innerText = 'Language';
   
    $("#category-label")[0].innerText = 'Category:';
    $("#identifier-label")[0].innerText = 'Identifier:';
    $("#level-label")[0].innerText = 'Level:';
    $("#description-label")[0].innerText = 'Description:';
    $("#attribute-label")[0].innerText = 'Attribute:';
    $("#attack-label")[0].innerText = 'Attack:';
    $("#type-label")[0].innerText = 'Type:';
    $("#label-card-defense")[0].innerText = 'Defense:';
    $("#staticBackdrop-btn-close")[0].innerText = 'CLOSE';
    $("#staticBackdrop-btn-prices")[0].innerText = 'PRICES';
    $("#price-card-title")[0].innerText = 'Price in Dollar / Euro'; 
    $("#staticBackdrop2-btn-close")[0].innerText = 'CLOSE';
    $("#search")[0].innerText = 'SEARCH CARD';
    $("#btn-search")[0].innerText = 'SEARCH BY EXACT NAME';
    $("#search-card").attr("placeholder", "Example: Slifer the Sky Dragon");
   

    // Alterando texto dentro dos dropdowns
    $("#language li a")[0].innerText = 'Portuguese';
    $("#language li a")[1].innerText = 'English';

    // Modal mais informações
    $("#titile-staticBackdrop3")[0].innerText = 'Cards game';
    $("#staticBackdrop3-p-1")[0].innerText = 'test...';

    let textStaticBackdrop3p1 = 'The manga and anime series Yu-Gi-Oh! introduces the original trading card game created by <span class="fw-bold">Kazuki Takahashi</span>, developed and published by <span class="fw-bold">Konami</span>. The game began production in 1998, and today it is played all over the world. The game has some differences as to the fictional one, as it served to adapt to the plot. Takahashi began making the cards in 1996. As of August 2008, TV Tokyo reported that the series\' card game has sold over 18 million cards worldwide. On June 9, 2009, on its 10th anniversary, it was added to <span class="fst-italic">Guinness World Records</span> as the most successful card game, having sold over 22 billion and medium of cards around the world since the beginning of its manufacture. As of March 31, 2011, Konami has sold over 25 million cards worldwide since 1999. The game continues to gain popularity as it is played all over the world, primarily in Japan, North America, Europe and Australia, and has been expanded with new rules and additions as the franchise grows.';
    $("#staticBackdrop3-p-1")[0].innerHTML = textStaticBackdrop3p1;

    let textStaticBackdrop3p2 = 'The card game - whose original name is <span class="fst-italic">Yu-Gi-Oh! Trading Card Game</span> (<span class="fst-italic"></span>遊☆戯☆王 オフィシャカードゲーム in Japanese, Yū☆Gi☆Ō '+
    'turadingu Kādo Gēmu rōmaji, abbreviated as TCG</span>) - is based on monster battles and effects selection and '+
    'traps in a duel between 2 opponents, each having 8000 Life Points (<span class="fst-italic">Life Points</span>) and using Decks '+
    '(decks) of 40 to 60 cards. The loser is the one who has his life points reduced to zero, or who has no more cards to draw.';
    
    $("#staticBackdrop3-p-2")[0].innerHTML = textStaticBackdrop3p2;

    let textStaticBackdrop3l11 = '<span class="fw-bold">Traditional</span> In this dueling format, almost every card from the first set (<span class="fst-italic">Legend of Blue-Eyes '+
    'Dragon</span>) to the most recent are allowed to play - except cards "banned" as per a periodic list '+
    '(formerly semiannual or quarterly, now without a fixed period) published by Konami. Usually, people who '+
    'play in this format use <span class="fst-italic">decks</span> from <span class="fst-italic">First Turn Kill</span> (where there is no chance for the opponent to play if the player\'s strategy <span class="fst-italic">Deck</span> '+
    'succeeds), <span class="fst-italic">One ​​Turn Kill</span> (where the opponent is reduced to 0 life in the same turn) and <span class="fst-italic">decks< /span> with '+
    'limited and restricted cards.';

    $("#staticBackdrop3-l1-1")[0].innerHTML = textStaticBackdrop3l11;

    let textStaticBackdrop3l12 = '<span class="fw-bold">Advanced</span> In this format, more widely used in tournaments, there is a greater limitation of the cards allowed for use '+
    '(some cards are limited to 2 or 1 by <span class="fst-italic">Deck</span>). Because of this, decks based on the control of '+
    'game by interrupting the opponent\'s charges (or "field control") or removing cards.';

    $("#staticBackdrop3-l1-2")[0].innerHTML = textStaticBackdrop3l12;
   
    let textStaticBackdropp3p3 = 'The most well-known and busy championships are Yu-Gi-Oh! <span class="fst-italic">World Championship</span> and Yu-Gi-Oh! <span class="fst-italic">Championship Series</span>, or '+
    'YCS, but there are other types of championships, such as the "<span class="fst-italic">Pegasus League</span>" (with its own rules and varying for each tournament), '+
    '<span class="fst-italic">Sneak Peek</span>" (<span class="fst-italic">Decks</span> tournaments assembled with the latest collection),"<span class=" fst-italic">Dragon Duel</span>" (with children up to 12 years old), <span class="fst-italic">World '+
    'Championship Qualifier</span>; or WCQ, Yu-Gi-Oh! Day and <span class="fst-italic">Ultimate Duelist Series</span>, or UDS.';

    $("#staticBackdrop3-p-3")[0].innerHTML = textStaticBackdropp3p3;

    $("#titile-staticBackdrop3-2")[0].innerText = 'Others games';

    $("#staticBackdrop3-p-4")[0].innerText = 'Several other games were adapted from the original manga:';

    let textStaticBackdrop3l13 = '<span class="fst-italic">Capsule Monster Chess</span> (Capmon) — Collectible miniatures game.';
    $("#staticBackdrop3-l1-3")[0].innerHTML = textStaticBackdrop3l13;
 
    let textStaticBackdrop3l14 = '<span class="fst-italic">Monster World</span> — An RPG chess game.';
    $("#staticBackdrop3-l1-4")[0].innerHTML = textStaticBackdrop3l14;

    let textStaticBackdrop3l15 = '<span class="fst-italic">Dungeon Dice Monsters</span> (DDM), known in the manga as <span class="fst-italic">Dragons Dice & Dungeons</span> (DDD) — A game of board whose '+
    'squares are created with D6 dice faces. It was released as a real card game, but the game is not popular and '+
    'new figures are no longer released.';
    $("#staticBackdrop3-l1-5")[0].innerHTML = textStaticBackdrop3l15;

    $("#staticBackdrop3-l1-6")[0].innerHTML = '<span class="fst-italic">Duel Links</span> - Card game for IOS, Android and Microsoft.';

    $("#staticBackdrop3-p-5")[0].innerHTML = 'Source: <a target="_blank" href="https://pt.wikipedia.org/wiki/Yu-Gi-Oh!#:~:text=6%20Liga%C3%A7%C3%B5es%20external- ,Hist%C3%B3ria,%E6%AD%A6%E8%97%A4%E5%8F%8C%E5%85%AD%20Mut%C5%8D%20Sugoroku).">Wikipedia</a>, a free encyclopedia.';
    $("#staticBackdrop3-to-go-back")[0].innerText = 'Go To Back';

    // Modal gameplays
    $("#title-gameplays")[0].innerText = 'Yu-gi-oh gameplay!';
    
    $("#title-gameplays-1")[0].innerText = 'Playing yu-gi-oh on youtube!';

    $("#gameplays-description-1")[0].innerText = 'YouTuber: Renan Sparrow | Game: Master Duel';
    $("#gameplays-description-2")[0].innerText = 'YouTuber: Fiaspo | Game: YU-GI-OH DUEL LINKS';
    $("#gameplays-description-3")[0].innerText = 'Channel: Dysphoric Entertainment | Game: Yu-Gi-Oh! The Duelists of the Roses (PS2) ';
    $("#staticBackdrop4-go-back")[0].innerText = "Go To Back";
};

const changePageTextToPortuguese = () => {
    $("#titleOne")[0].innerText = 'LISTA DE CARTAS DO JOGO!';
    $("#descriptionOne")[0].innerText = 'A série de mangá e anime Yu-Gi-Oh! introduz o jogo de cartas colecionáveis originalmente criado por Kazuki Takahashi, desenvolvido e publicado pela Konami. O jogo começou a ser produzido em 1998, e hoje é jogado no mundo inteiro.';
    $("#more-information")[0].innerText = 'MAIS INFORMAÇÕES';
    $("#language-options")[0].innerText = 'Idioma';
    $("#category-label")[0].innerText = 'Categoria:';
    $("#identifier-label")[0].innerText = 'Identificador:';
    $("#level-label")[0].innerText = 'Nível:';
    $("#description-label")[0].innerText = 'Descrição:';
    $("#attribute-label")[0].innerText = 'Atributo:';
    $("#attack-label")[0].innerText = 'Ataque:';
    $("#type-label")[0].innerText = 'Tipo:';
    $("#label-card-defense")[0].innerText = 'Defesa:';
    $("#staticBackdrop-btn-close")[0].innerText = 'FECHAR';
    $("#staticBackdrop-btn-prices")[0].innerText = 'PREÇOS';
    $("#price-card-title")[0].innerText = 'Preço em Dolar / Euro'; 
    $("#staticBackdrop2-btn-close")[0].innerText = 'FECHAR';
    $("#search")[0].innerText = 'PESQUISAR CARTA';
    $("#btn-search")[0].innerText = 'PESQUISAR PELO NOME EXATO';
    $("#search-card").attr("placeholder", "Exemplo: Slifer, o Dragão Celeste");
    
    // Alterando texto dentro dos dropdowns
    $("#language li a")[0].innerText = 'Português';
    $("#language li a")[1].innerText = 'Inglês';

    // Modal mais informações
    $("#titile-staticBackdrop3")[0].innerText = 'Jogo de cartas';

    let textStaticBackdrop3p1 = 'A série de mangá e anime Yu-Gi-Oh! introduz o jogo de cartas colecionáveis original criado por <span class="fw-bold">Kazuki Takahashi</span>, '+
    'desenvolvido e publicado pela <span class="fw-bold">Konami</span>. O jogo começou a ser produzido em 1998, e hoje é jogado no mundo inteiro. O'+
    'jogo possui algumas diferenças quanto ao fictício, pois este servia para se adequar ao enredo. Takahashi começou a'+
    'fazer as cartas em 1996. Em agosto de 2008, a TV Tokyo relatou que o jogo de cartas da série já vendeu mais de 18'+
    'milhões de cartas em todo o mundo. Em 9 de junho de 2009, em seu aniversário de 10 anos, foi adicionado ao'+
    '<span class="fst-italic">Guinness World Records</span> como o jogo de cartas mais bem sucedido, tendo vendido mais de 22 bilhões e meio de cartas ao'+
    'redor do mundo desde o início de sua fabricação. Em 31 de março de 2011, a Konami já vendeu mais de 25 milhões'+
    'de cartões em todo o mundo desde 1999. O jogo continua a ganhar popularidade, já que é jogado em todo o mundo,'+
    'principalmente no Japão, América do Norte, Europa e Austrália, e foi ampliado com novas regras e adições conforme a'+
    'franquia cresce.';

    $("#staticBackdrop3-p-1")[0].innerHTML = textStaticBackdrop3p1;

    let textStaticBackdrop3p2 = 'O jogo de cartas - cujo nome original é <span class="fst-italic">Yu-Gi-Oh! Trading Card Game</span> (<span class="fst-italic"></span>遊☆戯☆王 オフィシャルカードゲーム em japonês, Yū☆Gi☆Ō '+
    'turadingu Kādo Gēmu em rōmaji, abreviado como TCG</span>)  - é baseado em batalhas de monstros e ativação de efeitos bônus e' +
    'armadilhas num duelo entre 2 oponentes, cada um possuindo 8000 LPs (<span class="fst-italic">Life Points</span>, ou Pontos de Vida) e usando Decks'+
    '(baralhos) de 40 a 60 cartas. O perdedor é aquele que tem seus pontos de vida reduzidos à zero, ou quem não tiver mais cartas para puxar.';
    
    $("#staticBackdrop3-p-2")[0].innerHTML = textStaticBackdrop3p2;

    let textStaticBackdrop3l11 = '<span class="fw-bold">Tradicional</span> Neste formato de duelo, quase todas as cartas existentes desde a primeira coleção (<span class="fst-italic">Legend of Blue-Eyes '+
    'Dragon</span>) até a mais recente são permitidas para jogar - exceto cartas "banidas" conforme uma lista periódica '+
    '(anteriormente semestral ou trimestral, agora sem um período fixo) publicada pela Konami. Normalmente, pessoas que '+
    'jogam neste formato usam <span class="fst-italic">decks</span> de <span class="fst-italic">First Turn Kill</span> (onde não há chance de o oponente jogar se a estratégia do <span class="fst-italic">Deck</span> '+
    'tiver sucesso), <span class="fst-italic">One Turn Kill</span> (onde o oponente tem seus pontos de vida reduzidos a 0 num mesmo turno) e <span class="fst-italic">decks</span> com '+
    'cartas limitadas e restritas.';

    $("#staticBackdrop3-l1-1")[0].innerHTML = textStaticBackdrop3l11;

    let textStaticBackdrop3l12 = '<span class="fw-bold">Avançado</span> Neste formato, mais largamente utilizado nos torneios, há maior limitação das cartas permitidas para uso '+
    '(algumas cartas são limitadas a 2 ou 1 por <span class="fst-italic">Deck</span>). Por causa disto, aqui predominam os Decks baseados no controle da '+
    'partida através da interrupção das investidas do oponente (ou "controle de campo") ou remoção de cartas.';

    $("#staticBackdrop3-l1-2")[0].innerHTML = textStaticBackdrop3l12;

    let textStaticBackdropp3p3 = 'Os campeonatos mais conhecidos e movimentados são Yu-Gi-Oh! <span class="fst-italic">World Championship</span> e Yu-Gi-Oh! <span class="fst-italic">Championship Series</span>, ou '+
    'YCS, mas há outros tipos de campeonatos, como a "<span class="fst-italic">Pegasus League</span>" (com regras próprias e variadas a cada torneio), '+
    '<span class="fst-italic">Sneak Peek</span>" (torneios de <span class="fst-italic">Decks</span> montados com a coleção mais recente),"<span class="fst-italic">Dragon Duel</span>" (com crianças até 12 anos), <span class="fst-italic">World '+
    'Championship Qualifier</span>; ou WCQ, Yu-Gi-Oh! Day e <span class="fst-italic">Ultimate Duelist Series</span>, ou UDS.';

    $("#staticBackdrop3-p-3")[0].innerHTML = textStaticBackdropp3p3;

    $("#titile-staticBackdrop3-2").innerText = 'Outros jogos';

    $("#staticBackdrop3-p-4").innerText = 'Vários outros jogos foram adaptados do mangá original:';

    let textStaticBackdrop3l13 = '<span class="fst-italic">Capsule Monster Chess</span> (Capmon) — Jogo de miniaturas colecionáveis.';
    $("#staticBackdrop3-l1-3")[0].innerHTML = textStaticBackdrop3l13;
 
    let textStaticBackdrop3l14 = '<span class="fst-italic">Monster World</span> — Um jogo de xadrez RPG.';
    $("#staticBackdrop3-l1-4")[0].innerHTML = textStaticBackdrop3l14;

    let textStaticBackdrop3l15 = ' <span class="fst-italic">Dungeon Dice Monsters</span> (DDM), conhecido no mangá como <span class="fst-italic">Dragons Dice & Dungeons</span> (DDD) — Um jogo de tabuleiro cujos '+
    'quadrados são criados com faces de dados D6. Foi lançado como um jogo de cartas real, mas o jogo não é popular e '+
    'novas figuras não são mais lançadas.';

    $("#staticBackdrop3-l1-5")[0].innerHTML = textStaticBackdrop3l15;

    $("#staticBackdrop3-l1-6")[0].innerHTML = '<span class="fst-italic">Duel Links</span> - Jogo de cartas para IOS, Android e Microsoft.';

    $("#staticBackdrop3-p-5")[0].innerHTML = 'Fonte: <a target="_blank" href="https://pt.wikipedia.org/wiki/Yu-Gi-Oh!#:~:text=6%20Liga%C3%A7%C3%B5es%20externas-,Hist%C3%B3ria,%E6%AD%A6%E8%97%A4%E5%8F%8C%E5%85%AD%20Mut%C5%8D%20Sugoroku).">Wikipédia</a>, a enciclopédia livre.';
    $("#staticBackdrop3-to-go-back")[0].innerText = 'Voltar';

    // Modal gameplays
    $("#title-gameplays")[0].innerText = 'Gameplays de yu-gi-oh!';

    $("#title-gameplays-1")[0].innerText = 'Vídeos de Gameplays de Jogos yu-gi-oh!';

    $("#gameplays-description-1")[0].innerText = 'YouTuber: Renan Sparrow | Jogo: Master Duel';
    $("#gameplays-description-2")[0].innerText = 'YouTuber: Fiaspo | Jogo: YU-GI-OH DUEL LINKS';
    $("#gameplays-description-3")[0].innerText = 'Canal: Dysphoric Entertainment | Jogo: Yu-Gi-Oh! The Duelists of the Roses (PS2)';
    $("#staticBackdrop4-go-back")[0].innerText = "Voltar";
};
