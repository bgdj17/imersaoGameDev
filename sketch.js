function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  jogo = new Jogo()
  telaInicial = new TelaInicial();
  jogo.setup()
  cenas = {
    jogo,
    telaInicial
  }
  botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height / 2);
}

function keyPressed() {
  jogo.keyPressed(key)
}
 // function mousePressed(){
 // jogo.mousePressed(mouseIsPressed)
 // }
// function gotWord(error, result) {
//   if (error) {
//     console.log(error)}
//   if(results[0].label == 'up'){
//     personagem.pula
//   }
//   }

function draw() {
  cenas[cenaAtual].draw();
}