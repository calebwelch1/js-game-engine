import { Pointer } from './pointer.js';
import { drawCircle } from './canvas.js';

export class level {
    // ctx;
    constructor(){
        this.setup();
    }

    setup = async () => {
        this.canvas = document.querySelector('canvas')
        this.ctx = this.canvas.getContext('2d');
        this.setScreenSize();
    }

    run(){
        // console.log('running');
         console.log(Pointer.pos)
        // this.ctx.drawPointer.pos
        // random circle
        drawCircle(this.ctx, Pointer.pos.x, Pointer.pos.y,10,0,Math.PI*2);
    }

    setScreenSize() {
        let w = window.innerWidth;
        let h = window.innerHeight;

        this.canvas.width = w;
        this.canvas.height=h;
    }
}