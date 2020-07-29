function preload() {
   // const options = { probabilityThreshold: 0.95 };
  // classifier = ml5.soundClassifier('SpeechCommands18w', options);
  imagemCenario = loadImage('imagens/newBack.jpg');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoTroll = loadImage('imagens/inimigos/troll.png');
  imagemInimigoGotaVoadora = loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemGameOver = loadImage('imagens/game-over.png');
  imagemTelaInicial = loadImage('imagens/telaInicial.png');
  fonteTelaInicial = loadFont('imagens/fonteTelaInicial.otf');   
  imagemVida = loadImage('imagens/coracao.png');
  imagem2 = [
loadImage('imagens/cenario/Layer_0000_9.png'), loadImage('imagens/cenario/Layer_0001_8.png'),         loadImage('imagens/cenario/Layer_0002_7.png'), loadImage('imagens/cenario/Layer_0003_6.png'), loadImage('imagens/cenario/Layer_0004_Lights.png'), loadImage('imagens/cenario/Layer_0005_5.png'), loadImage('imagens/cenario/Layer_0006_4.png'),
loadImage('imagens/cenario/Layer_0007_Lights.png'), loadImage('imagens/cenario/Layer_0008_3.png'), loadImage('imagens/cenario/Layer_0009_2.png'),           loadImage('imagens/cenario/Layer_0010_1.png')
  ];
  imagemlavaPotion=loadImage('imagens/LavaPotion.png');
  imagemItemStrela = loadImage('imagens/star.png');
  atingida = loadImage('imagens/atingida.png');
  fita = loadJSON('fita/fita.json');
  pancada = loadSound('som/pancada.mp3');
  somPulo = loadSound('som/somPulo.mp3');
  somMoeda = loadSound('som/coin2.wav');
  somMorri = loadSound('som/morri.mp3');
  gameOverSound = loadSound('som/game_over_music.wav');
  somItemPotion = loadSound('som/bubble2.wav');
  trilhaSonora = loadSound('som/trilha_jogo.mp3');
  
 
 
      }