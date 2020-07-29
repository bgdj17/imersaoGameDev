class Jogo {
  constructor() {
    this.indice = 0
    this.mapa = fita.mapa
  }
  setup() {
    // classifier.classify(gotWord);        
    cenario0 = new Cenario(imagemCenario, imagemCenario, 1);
    cenario2 = new Cenario(imagem2[7], imagem2[6], 1);
    cenario4 = new Cenario(imagem2[3], imagem2[2], 2);
    cenario5 = new Cenario(imagem2[1], imagem2[0], 4);
    
    personagem = new Personagem(matrizHipsta, imagemPersonagem, 40, 30, 110, 135, 220, 270);
    
    const inimigoGota = new Inimigo(matrizInimigoGotinha, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10, 200);
    const inimigoTroll = new Inimigo(matrizInimigoTroll, imagemInimigoTroll, width, 0, 200, 200, 400, 400, 10, 100); 
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoGotaVoadora, width - 52, 200, 100, 75, 200, 150, 10, 200);
    inimigos.push(inimigoGota, inimigoTroll, inimigoVoador);
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
    
    itemPotion = new Item(imagemlavaPotion, width - 52, height / 2, 40, 50, 5000);

    trilhaSonora.loop()
    itemStar = new Item(imagemItemStrela, width - 52, height / 3, 35, 35, 9);
    itemStar2 = new Item(imagemItemStrela, width - 10, height / 3, 35, 35, 9)
  }
  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula();
      somPulo.play()
    }
  }
  // mousePressed(mouseIsPressed) {
  // if(mouseIsPressed) {
  //  personagem.pula();
  //      somPulo.play() 
  //   } 
  // }

  draw() {

    frameRate(40)
    cenario0.exibe();
    cenario0.move();
    cenario5.exibe();
    cenario5.move();
    personagem.exibe();
    personagem.aplicaGravidade();
    pontuacao.exibe();
    pontuacao.mostrarPontuacao();
    vida.draw();
    itemPotion.exibe()
    itemPotion.move()
    itemStar.exibe();
    itemStar.move();
    itemStar2.exibe();
    itemStar2.move();
    const linhaAtual = this.mapa[this.indice]
    const inimigo = inimigos[linhaAtual.obstaculo]
    const inimigoVisivel = inimigo.x < -inimigo.largura
    inimigo.velocidade = linhaAtual.velocidade;
    inimigo.exibe();
    inimigo.move();

    if (mouseIsPressed) {
      personagem.pula();
      somPulo.play()
    }

    if (inimigoVisivel) {
      this.indice++
      inimigo.aparece();
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0
      }
    }
    if (personagem.estaColidindo(itemPotion)) {
      somItemPotion.play()
      vida.ganhaVida()
      itemPotion.sumir()
      itemPotion.x = width - 52
      itemPotion.y = height / 2
    }
    
     if (personagem.estaColidindo(itemStar)) {
                somMoeda.play();
      pontuacao.ganharPonto()
      text('+100', width - 49, 80)
      itemStar.sumir()
      itemStar.x = width - 52
      itemStar.y = height / 1.5
    }
       if (personagem.estaColidindo(itemStar2)) {
         somMoeda.play();
      pontuacao.ganharPonto()
      text('+100', width - 49, 80)
      itemStar2.sumir()
      itemStar2.x = width - 10
      itemStar2.y = height / 1.5
    }
    
    

  
    if (personagem.estaColidindo(inimigo)) {
      frameRate(12)
      personagem.tiraExibicao();
      pancada.play();
      vida.perdeVida()
      personagem.ficarInvencivel()
      if (vida.vidas == 0) {
        frameRate(1)
        image(imagemGameOver, width / 2 - 200, height / 3)
        var botaoRetry = new BotaoRetry('retry', width / 2, height / 2);
        trilhaSonora.stop()
        gameOverSound.play()
        somMorri.play();
        noLoop();

      }

    }
  }
}