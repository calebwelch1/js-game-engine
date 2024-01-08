import { Pointer } from './pointer.js';
import { drawCircle } from './canvas.js';

export class level {

    constructor(){
        this.setup();
    }

    setup = async () => {
        // console.log('setup')
        this.canvas = document.querySelector('canvas')
        // console.log('setup', document.querySelector('canvas'))
        if (!this.canvas) {
            console.error('Canvas element not found!');
            return;
        }
        
        this.ctx = this.canvas.getContext('2d');
        this.setScreenSize();
    }

    run(){
        // console.log('running');
         console.log(Pointer.pos)
        // random circle
        console.log('canvas',this.canvas)
        console.log('ctx',this.ctx)
        drawCircle(this.ctx, Pointer.pos.x, Pointer.pos.y,10,0,Math.PI*2,{fillStyle:'blue'});
    }

    setScreenSize() {
        let w = window.innerWidth;
        let h = window.innerHeight;

        this.canvas.width = w;
        this.canvas.height=h;
    }
}