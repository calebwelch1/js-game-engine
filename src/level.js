import { Pointer } from './pointer.js';
import { drawCircle } from './canvas.js';
import { Settings } from './settings.js';

export class level {

    constructor(){
        this.setup();
    }

    setup = async () => {

        function setSettingsColor(color) {
            Settings.remove('color');
            Settings.add('color', color);
        };

        this.canvas = document.querySelector('canvas')
        if (!this.canvas) {
            console.error('Canvas element not found!');
            return;
        }
        this.ctx = this.canvas.getContext('2d');
        this.setScreenSize();

        // set colors even listeners
            document.querySelector('button.red').addEventListener('mousedown', () => setSettingsColor('red'))
            document.querySelector('button.blue').addEventListener('mousedown', () => setSettingsColor('blue'))
            document.querySelector('button.green').addEventListener('mousedown', () => setSettingsColor('green'))
            document.querySelector('button.black').addEventListener('mousedown', () => setSettingsColor('black'))
            document.querySelector('button.white').addEventListener('mousedown', () => setSettingsColor('white'))
            document.querySelector('.clickme').addEventListener('mousedown', () => setSettingsColor('orange'))

            //TODO:
            // saving canvas
            // crop
            // other paint features
    }

    run(color = 'blue'){
        Settings.add('color', color)
        console.log('settings color', this.getSettingsColor());
        if (Pointer.clicked) {
        let color = Settings.get('color');
        drawCircle(this.ctx, Pointer.pos.x, Pointer.pos.y,10,0,Math.PI*2, true, {fillStyle:color});
        }
        // drawCircle(this.ctx, Pointer.pos.x, Pointer.pos.y,10,0,Math.PI*2,{fillStyle:'blue'});
    }

    setScreenSize() {
        let w = window.innerWidth;
        let h = window.innerHeight;

        this.canvas.width = w;
        this.canvas.height=h;
    }

    getSettingsColor(){
       return Settings.get('color')
    }
}