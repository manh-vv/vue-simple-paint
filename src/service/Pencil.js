import { Pen } from './Pen';

export class Pencil extends Pen {
  _size = 1;
  setup(ctx, canvas) {
    super.setup(ctx, canvas);
    ctx.lineJoin = 'bevel';
  }
}
