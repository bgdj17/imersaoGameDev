class BotaoRetry {
  constructor(texto, x, y) {
    this.texto = texto
    this.x = x;
    this.y = y;
    this.botao = createButton(this.texto);
    this.botao.mousePressed(setup);
    this.botao.addClass('botao-tela-inicial');
    this.botao.mousePressed(() => this._retry());
    this.botao.position(this.x, this.y);
      this.botao.center('horizontal')
    }
  _retry(){
    window.location.reload()
  }
}