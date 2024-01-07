import { Pointer } from './pointer.js';

export class level {
    constructor(){

    }

    setup = async () => {
        this.canvas = document.querySelector('canvas')
    }

    run(){
        // console.log('running');
         console.log(Pointer.pos)
    }

    setScreenSize() {
        let w = window.innerWidth;
        let h = window.innerHeight;

        this.canvas.width = w;
        this.canvas.height=h;
    }
}