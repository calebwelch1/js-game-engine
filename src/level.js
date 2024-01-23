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

        function setSettingsSize(size) {
            // TODO: check that size is both a num and above 0
            // if 
            Settings.remove('size');
            Settings.add('size', size)
        }

        this.canvas = document.querySelector('canvas')
        if (!this.canvas) {
            console.error('Canvas element not found!');
            return;
        }
        this.ctx = this.canvas.getContext('2d');
        this.setScreenSize();

        // set size event listeners
        // document.querySelector('button.decrementSize').addEventListener('mousedown', () => setSettingsSize(Settings.get('size')+10))
        // document.querySelector('button.incrementSize').addEventListener('mousedown', () => setSettingsSize(Settings.get('size')-10))
        // set colors even listeners
            document.querySelector('button.darkred').addEventListener('mousedown', () => setSettingsColor('darkred'))
            document.querySelector('button.midnightblue').addEventListener('mousedown', () => setSettingsColor('midnightblue'))
            document.querySelector('button.seagreen').addEventListener('mousedown', () => setSettingsColor('lightseagreen'))
            document.querySelector('button.black').addEventListener('mousedown', () => setSettingsColor('black'))
            document.querySelector('button.white').addEventListener('mousedown', () => setSettingsColor('whitesmoke'))

            document.querySelector('button.orangered').addEventListener('mousedown', () => setSettingsColor('orangered'))
            document.querySelector('button.powderblue').addEventListener('mousedown', () => setSettingsColor('powderblue'))
            document.querySelector('button.lightgreen').addEventListener('mousedown', () => setSettingsColor('lightgreen'))
            document.querySelector('button.orchid').addEventListener('mousedown', () => setSettingsColor('orchid'))
            document.querySelector('button.purple').addEventListener('mousedown', () => setSettingsColor('purple'))

            document.querySelector('button.red').addEventListener('mousedown', () => setSettingsColor('red'))
            document.querySelector('button.blue').addEventListener('mousedown', () => setSettingsColor('blue'))
            document.querySelector('button.green').addEventListener('mousedown', () => setSettingsColor('green'))
            document.querySelector('button.yellow').addEventListener('mousedown', () => setSettingsColor('yellow'))
            document.querySelector('button.orange').addEventListener('mousedown', () => setSettingsColor('orange'))


            //TODO:
            // saving canvas
            // crop
            // other paint features
    }

    run(color = 'blue'){
        // SETTINGS DEFAULT VALUES
        Settings.add('color', color)
        Settings.add('size', 10)
        if (Pointer.clicked) {
        let color = Settings.get('color');
        let size = Settings.get('size');
        drawCircle(this.ctx, Pointer.pos.x, Pointer.pos.y,size,0,Math.PI*2, true, {fillStyle:color});
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