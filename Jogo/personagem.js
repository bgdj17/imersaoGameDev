class Personagem extends Animacao{
  constructor(matriz,imagem,x,variacaoY, largura, altura , larguraSprite, alturaSprite){
    super(matriz ,imagem ,x ,variacaoY, largura, altura , larguraSprite, alturaSprite);
    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;
    this.gravidade = 4;
    this.velocidadeDoPulo = 0;
    this.alturaDoPulo = -40;
    this.pulo = 0;
    this.invencivel = false
  }
  pula(){
    if(this.pulo < 2){
    this.velocidadeDoPulo = this.alturaDoPulo;
      this.pulo++
    }
  }
  
  aplicaGravidade(){
  this.y = this.y + this.velocidadeDoPulo;
  this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade
    if(this.y > this.yInicial){
      this.y = this.yInicial;
      this.pulo =0;
    }
  }
  ficarInvencivel(){
  this.invencivel = true;
    setTimeout(()=> { this.invencivel = false}, 1000)
  
  }
  estaColidindo(inimigo){
    if(this.invencivel){return false}
    const precisao = 0.72;
  const colisao = collideRectRect(
    this.x,
    this.y, 
    this.largura * precisao, 
    this.altura * precisao, 
    inimigo.x, 
    inimigo.y, 
    inimigo.largura * precisao,
    inimigo.altura * precisao,
   );
    return colisao;
  }
  
}