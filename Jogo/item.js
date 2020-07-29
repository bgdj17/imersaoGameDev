class Item{
  constructor(imagem, x, variacaoY, largura, altura, delay){
    this.imagem = imagem;
    this.altura = altura;
    this.largura =largura;
    this.variacaoY = variacaoY;
    this.x = x;
    this.y = height - this.altura - this.variacaoY;
    this.frameAtual = 0
    this.velocidade = 5
    this.delay = delay;
    this.x = width + this.delay;
  }
  
  exibe(){
    image(this.imagem, this.x,this.y, this.largura,this.altura);
   
  }
  move(){
  this.x = this.x -this.velocidade;
    if(this.x <= -this.largura - this.delay){
      this.x = width;
    }
  }
    sumir(){
      this.imagem.x = 0
      this.imagem.y =1000
      this.x = this.x -this.velocidade;
    if(this.x <= -this.largura - this.delay){
      this.x = width;
    }
    }
    
  }
