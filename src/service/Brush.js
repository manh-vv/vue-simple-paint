import { Pen } from './Pen';

export class Brush extends Pen {
  _size = 10;
  _color = {
    alpha: 0.05,
    hex: '#2D00CC',
    hexa: '#2D00CC0D',
    hsla: { h: 253.17757009345794, s: 1, l: 0.4, a: 0.05 },
    hsva: { h: 253.17757009345794, s: 1, v: 0.8, a: 0.05 },
    hue: 253.17757009345794,
    rgba: { r: 45, g: 0, b: 204, a: 0.05 },
  };

  setup(ctx, canvas) {
    super.setup(ctx, canvas);
    this.ctx.globalAlpha = 0.05;
  }
}
