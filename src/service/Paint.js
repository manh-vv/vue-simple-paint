import { Broom } from './Broom';
import { Brush } from './Brush';
import { Eraser } from './Eraser';
import { Pencil } from './Pencil';

export class Paint {
  penCollections = new Map();

  mouse = { x: 0, y: 0 };

  constructor(containerId = 'simple-paint') {
    this.painting = document.getElementById(containerId);
    if (!this.painting) {
      throw new Error(`There is no element with id: ${containerId}`);
    }
  }

  setup() {
    const painting = this.painting;
    const paintStyle = getComputedStyle(painting);
    const canvas = (this.canvas = document.createElement('canvas'));
    canvas.width = parseInt(paintStyle.getPropertyValue('width'));
    canvas.height = parseInt(paintStyle.getPropertyValue('height'));
    canvas.setAttribute('style', 'border: 1px dotted gray;');

    // append it to the dom
    // TODO take care of the existing canvas
    painting.appendChild(canvas);

    // get context
    this.ctx = canvas.getContext('2d');

    // begin set up
    const mouse = this.mouse;

    canvas.addEventListener('mousemove', function(e) {
      mouse.x = e.pageX - this.offsetLeft;
      mouse.y = e.pageY - this.offsetTop;
    });

    const onPaint = this.onPaint.bind(this);
    const _this = this;

    canvas.addEventListener('mousedown', function(e) {
      if (_this.pen) {
        _this.pen.startDraw(_this.mouse);
      }

      canvas.addEventListener('mousemove', onPaint);
    });

    canvas.addEventListener('mouseup', function() {
      canvas.removeEventListener('mousemove', onPaint);
      if (_this.pen) {
        _this.pen.stopDraw(_this.mouse);
      }
    });

    // default pen type is pencil
    this.setPen('pencil');
  }

  onPaint() {
    if (this.pen) {
      this.pen.draw(this.mouse);
    }
  }

  get pen() {
    return this._pen;
  }

  set pen(p) {
    p.setup(this.ctx, this.canvas);
    this._pen = p;
    console.log('-- set pen to:', p.name);
  }

  setPen(name, color) {
    if (this.penCollections.has(name)) {
      this.pen = this.penCollections.get(name);
    } else {
      switch (name) {
        case 'pencil':
          this.pen = new Pencil(name);
          break;
        case 'brush':
          this.pen = new Brush(name);
          break;
        case 'broom':
          this.pen = new Broom(name);
          break;
        case 'eraser':
          this.pen = new Eraser(name);
          break;
        default:
          throw new Error('Wrong name of pen');
      }

      this.penCollections.set(this.pen.name, this.pen);
    }

    if (color) {
      this.pen.color = color;
    }
  }

  erase() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
