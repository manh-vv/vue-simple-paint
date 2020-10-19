export class Pen {
  _size = 3;
  _color = {
    alpha: 1,
    hex: '#00CC99',
    hexa: '#00CC99FF',
    hsla: { h: 165, s: 1, l: 0.4, a: 1 },
    hsva: { h: 165, s: 1, v: 0.8, a: 1 },
    hue: 165,
    rgba: { r: 0, g: 204, b: 153, a: 1 },
  };

  constructor(name = 'pen') {
    this.name = name;
  }

  get size() {
    return this._size;
  }

  set size(v) {
    this._size = v;
    this.ctx.lineWidth = v;
  }

  get color() {
    return this._color;
  }

  set color(v) {
    this._color = v;
    this.ctx.strokeStyle = v.hex;

    if (v.alpha) {
      this.ctx.globalAlpha = v.alpha;
    }
  }

  setup(ctx, canvas) {
    this.canvas = canvas;
    this.ctx = ctx;

    ctx.lineWidth = this.size;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = this.color.hex;

    if (this.color.alpha) {
      this.ctx.globalAlpha = this.color.alpha;
    }
  }

  startDraw(mouse) {
    this.ctx.beginPath();
    this.ctx.moveTo(mouse.x, mouse.y);
  }

  draw(mouse) {
    this.ctx.lineTo(mouse.x, mouse.y);
    this.ctx.stroke();
  }

  stopDraw() {
    // this.ctx.closePath();
    // this.ctx.stroke();
  }
}
