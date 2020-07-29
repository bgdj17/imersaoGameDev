class Cenario{
  constructor(imagem,imagem2, velocidade){
    this.imagem = imagem;
    this.velocidade = velocidade;
    this.x1 = 0;
    this.x2 = width;
    this.imagem2 = imagem2;
    
  }
  exibe(){
  image(this.imagem, this.x1, 0, width, height);
  image(this.imagem, this.x2, 0, width, height);
  image(this.imagem2, this.x1, 0, width, height);
  image(this.imagem2, this.x2, 0, width, height);
  
  }
  move()  {
    this.x1 = this.x1 - this.velocidade
    this.x2 = this.x2 - this.velocidade
    if(this.x1 < -width){
      this.x1 = width
    }
    if(this.x2 < -width){
      this.x2 = width
    }
  
  }
}
