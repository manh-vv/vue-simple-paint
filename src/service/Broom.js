import { Pen } from './Pen';

export class Broom extends Pen {
  _size = 20;
  _color = {
    alpha: 1,
    hex: '#CC007B',
    hexa: '#CC007BFF',
    hsla: { h: 323.8317757009346, s: 1, l: 0.4, a: 1 },
    hsva: { h: 323.8317757009346, s: 1, v: 0.8, a: 1 },
    hue: 323.8317757009346,
    rgba: { r: 204, g: 0, b: 123, a: 1 },
  };

  get color() {
    return this._color;
  }

  set color(v) {
    this._color = v;
    if (v.alpha) {
      this.ctx.globalAlpha = v.alpha;
    }

    this.setup(this.ctx, this.canvas);
  }

  getSvg(size = 30, colorHex = '#000000') {
    return `<?xml version="1.0" standalone="no"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
     "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
     width="${size}pt" height="${size}pt" viewBox="0 0 120 120"
     preserveAspectRatio="xMidYMid meet">
    
    <g transform="translate(0,120) scale(0.1,-0.1)"
    fill="${colorHex}" stroke="none">
    <path d="M936 1051 c-4 -5 -2 -12 3 -15 5 -4 12 -2 15 3 4 5 2 12 -3 15 -5 4
    -12 2 -15 -3z"/>
    <path d="M711 1017 c-8 -10 -7 -19 3 -32 12 -16 16 -17 30 -6 12 10 13 18 5
    32 -12 22 -22 24 -38 6z"/>
    <path d="M780 1020 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
    -10 -4 -10 -10z"/>
    <path d="M680 970 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
    -10 -4 -10 -10z"/>
    <path d="M780 970 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
    -10 -4 -10 -10z"/>
    <path d="M485 960 c-11 -17 5 -50 25 -50 10 0 21 7 24 16 11 30 -33 60 -49 34z"/>
    <path d="M832 953 c-7 -7 -17 -11 -21 -9 -5 3 -8 -17 -8 -44 1 -48 9 -62 22
    -40 3 6 14 10 24 10 43 0 53 62 14 86 -14 9 -21 8 -31 -3z"/>
    <path d="M615 860 c4 -6 11 -8 16 -5 14 9 11 15 -7 15 -8 0 -12 -5 -9 -10z"/>
    <path d="M680 841 c0 -5 5 -13 10 -16 6 -3 10 -2 10 4 0 5 -4 13 -10 16 -5 3
    -10 2 -10 -4z"/>
    <path d="M400 820 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0
    -15 -4 -15 -10z"/>
    <path d="M854 819 c-10 -17 13 -36 27 -22 12 12 4 33 -11 33 -5 0 -12 -5 -16
    -11z"/>
    <path d="M710 800 c0 -11 7 -20 15 -20 8 0 15 6 15 14 0 8 -7 16 -15 20 -10 4
    -15 -1 -15 -14z"/>
    <path d="M614 799 c-8 -14 14 -19 38 -10 25 11 24 11 -10 15 -13 2 -25 -1 -28
    -5z"/>
    <path d="M995 790 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
    -8 -4 -11 -10z"/>
    <path d="M916 771 c-3 -5 0 -14 8 -20 10 -8 16 -8 25 2 6 8 8 17 4 20 -9 10
    -31 9 -37 -2z"/>
    <path d="M750 720 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0
    -15 -4 -15 -10z"/>
    <path d="M565 710 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
    -8 -4 -11 -10z"/>
    <path d="M485 690 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
    -8 -4 -11 -10z"/>
    <path d="M916 655 c4 -8 12 -15 20 -15 8 0 14 7 14 15 0 8 -9 15 -20 15 -13 0
    -18 -5 -14 -15z"/>
    <path d="M295 650 c3 -5 10 -10 16 -10 5 0 9 5 9 10 0 6 -7 10 -16 10 -8 0
    -12 -4 -9 -10z"/>
    <path d="M247 628 c-24 -13 -22 -48 3 -48 16 0 40 26 40 43 0 11 -27 14 -43 5z"/>
    <path d="M855 610 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
    -8 -4 -11 -10z"/>
    <path d="M455 590 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
    -8 -4 -11 -10z"/>
    <path d="M1060 580 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
    -10 -4 -10 -10z"/>
    <path d="M883 554 c-8 -20 8 -36 26 -25 15 10 8 41 -9 41 -6 0 -13 -7 -17 -16z"/>
    <path d="M750 525 c0 -9 5 -15 11 -13 6 2 11 8 11 13 0 5 -5 11 -11 13 -6 2
    -11 -4 -11 -13z"/>
    <path d="M920 515 c-20 -24 4 -45 26 -24 13 14 13 17 1 27 -11 10 -17 9 -27
    -3z"/>
    <path d="M450 475 c0 -8 7 -15 15 -15 8 0 15 7 15 15 0 8 -7 15 -15 15 -8 0
    -15 -7 -15 -15z"/>
    <path d="M725 420 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
    -8 -4 -11 -10z"/>
    <path d="M100 385 c0 -8 7 -15 15 -15 8 0 15 7 15 15 0 8 -7 15 -15 15 -8 0
    -15 -7 -15 -15z"/>
    <path d="M621 361 c-10 -6 -10 -10 -1 -16 13 -8 24 -1 19 14 -3 6 -10 7 -18 2z"/>
    <path d="M950 320 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0 -4
    -4 -4 -10z"/>
    <path d="M755 290 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
    -8 -4 -11 -10z"/>
    <path d="M545 240 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0 -7
    -4 -4 -10z"/>
    </g>
    </svg>`;
  }

  getImgSrc() {
    return `data:image/svg+xml;base64,${btoa(
      new XMLSerializer().serializeToString(
        new DOMParser().parseFromString(this.getSvg(this.size, this.color.hex), 'image/svg+xml')
          .children[0],
      ),
    )}`;
  }

  setup(ctx, canvas) {
    super.setup(ctx, canvas);

    const broomSvg = new Image(this.size, this.size);
    broomSvg.src = this.getImgSrc();

    broomSvg.onload = () => {
      this.broomSvg = broomSvg;

      const showSvgEl = document.getElementById('show-svg');
      if (showSvgEl) {
        showSvgEl.innerHTML = '';
        showSvgEl.appendChild(broomSvg);
      }
    };
  }

  startDraw(mouse) {
    this.draw(mouse);
  }

  draw(mouse) {
    if (this.broomSvg) {
      const dx = mouse.x - this.broomSvg.naturalWidth / 2;
      const dy = mouse.y - this.broomSvg.naturalHeight / 2;
      this.ctx.drawImage(this.broomSvg, dx, dy);
    }
  }
}
