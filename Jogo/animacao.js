class Animacao{
  constructor(matriz, imagem, x, variacaoY, largura, altura , larguraSprite, alturaSprite){
    this.matriz = matriz;
    this.imagem = imagem;
    this.altura = altura;
    this.largura =largura;
    this.variacaoY = variacaoY;
    this.x = x;
    this.y = height - this.altura - this.variacaoY;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;
    
    this.frameAtual = 0
  
  }
  exibe(){
    image(this.imagem, this.x,this.y,          this.largura,this.altura,          this.matriz[this.frameAtual][0],
 this.matriz[this.frameAtual][1], this.larguraSprite,    this.alturaSprite);
    this.anima();
  }
  tiraExibicao(){
    image(atingida, this.x -20,this.y -20,          this.largura- 40,this.altura - 60);
    this.anima();
  }
  anima(){
    this.frameAtual++
    if(this.frameAtual >= this.matriz.length -1){
      this.frameAtual = 0;
    }
  }
}