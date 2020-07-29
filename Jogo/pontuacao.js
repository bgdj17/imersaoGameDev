class Pontuacao{
  constructor(){
    this.pontos = 0 ;
  }
  
  exibe(){
    let localXPontuacao = width - 30;
    let localYPontuacao = 50
    textAlign(RIGHT)
    fill('#fff')
    textSize(40);
  text(parseInt(this.pontos), localXPontuacao, localYPontuacao);
  }
  mostrarPontuacao(){
  this.pontos = this.pontos + 0.2;
  }
  ganharPonto(){
  this.pontos = this.pontos + 100;
  }
}