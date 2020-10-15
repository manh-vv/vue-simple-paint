import { Pen } from './Pen';

export class Eraser extends Pen {
  _size = 20;
  draw(mouse) {
    this.ctx.clearRect(mouse.x, mouse.y, this.size, this.size);
  }
}
