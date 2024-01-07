export class Pointer {
    static #x;
    static #y;

    static init()
    {
        window.addEventListener('mousemove', this.mousemove);
    }
    // #x is private var
    static set pos({x,y}) {this.#x = x; this.#y=y;}
    static get pos() { return {x:this.#x, y:this.#y}};

    static mousemove = (e)=>{
        this.pos = {x:e.pageX, y:e.pageY};
    }
}