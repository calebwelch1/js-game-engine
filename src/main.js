import { level } from './level.js';
import { Settings } from './settings.js';

class Game {
    constructor(){
        this.level = new level();
        this.previoustime = Date.now();

        this.run();
    }

    run = () => {
        // const tick = () =>  {
            let newtime = Date.now();
            Settings.dt = ( newtime - this.previoustime) / 1000;
            this.previoustime = newtime;
    
            this.level.run();
    
            requestAnimationFrame(this.run);
        // }
        // tick();

        // to run an async function with in a class, use arrow function 
        // the this within the arrow function accesses class and not window
    }
}

window.addEventListener("DOMContentLoaded", () => {
    new Game();
});