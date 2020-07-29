class Vida {
  constructor(total, inicial) {
    this.total = total;
    this.inicial = inicial
    this.altura = 20;
    this.largura = 20;
    this.vidas = this.inicial
    this.xInicial = 10;
    this.y = 10
  }
  draw() {
    for (let i = 0; i < this.vidas; i++) {
      const margem = i * 25;
      let posicao = this.xInicial + (1 + i)
      image(imagemVida, posicao + margem, this.y, this.altura, this.largura);
    }
  }
  ganhaVida() {
    if (this.vidas <= this.total) {
      this.vidas++
    }
  }
  perdeVida(){
    this.vidas--
  
  }
}