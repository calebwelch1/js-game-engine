import { Pointer } from './pointer.js';
import { drawCircle } from './canvas.js';
import { Settings } from './settings.js';

export class level {

    constructor(){
        this.setup();
    }

    setup = async () => {
        this.canvas = document.querySelector('canvas')
        if (!this.canvas) {
            console.error('Canvas element not found!');
            return;
        }
        this.ctx = this.canvas.getContext('2d');
        this.setScreenSize();
        // TODO: add colors to settings
        // TODO: add listeners for div clicks to set settings color
        this.setColors();
        // console.log('blue', this.blue);
        this.blue.addEventListener('mousedown', Settings.color = 'blue');
        this.red.addEventListener('mousedown', Settings.color = 'red');

    }

    run(){
        if (Pointer.clicked) {
        // Settings.color ? Settings.color : 'black'
        drawCircle(this.ctx, Pointer.pos.x, Pointer.pos.y,10,0,Math.PI*2, true, {fillStyle:Settings.color});
        }
        // drawCircle(this.ctx, Pointer.pos.x, Pointer.pos.y,10,0,Math.PI*2,{fillStyle:'blue'});
    }

    setScreenSize() {
        let w = window.innerWidth;
        let h = window.innerHeight;

        this.canvas.width = w;
        this.canvas.height=h;
    }

    setColors() {
        this.red = document.querySelector('div.red')
        this.blue = document.querySelector('div.blue')
        this.green = document.querySelector('div.green')
        this.black = document.querySelector('div.black')
        this.white = document.querySelector('div.white')
        return [this.red, this.blue, this.green,this.black, this.white];
    }
}