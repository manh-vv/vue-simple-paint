import { Pen } from './Pen';

export class Brush extends Pen {
  _size = 10;
  _color = {
    alpha: 0.05,
    hex: '#00CC99',
    hexa: '#00CC991A',
    hsla: { h: 165, s: 1, l: 0.4, a: 0.05 },
    hsva: { h: 165, s: 1, v: 0.8, a: 0.05 },
    hue: 165,
    rgba: { r: 0, g: 204, b: 153, a: 0.05 },
  };

  setup(ctx, canvas) {
    super.setup(ctx, canvas);
    this.ctx.globalAlpha = 0.05;
  }
}
