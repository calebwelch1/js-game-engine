export class Pointer {
    static #x;
    static #y;
    static #isClicked = false;

    static init()
    {
        this.#x = 0;
        this.#y = 0;
        window.addEventListener('mousemove', this.mousemove);
        window.addEventListener('mousedown', this.mousedown);
        window.addEventListener('mouseup', this.mouseup);

    }
    // #x is private var
    static set pos({x,y}) {this.#x = x; this.#y=y;}
    static get pos() { return {x:this.#x, y:this.#y}};
    static set clicked(bool) {this.#isClicked = bool}
    static get clicked() {return this.#isClicked}

    static mousemove = (e)=>{
        this.pos = {x:e.pageX, y:e.pageY};
    }

    static mousedown = (e)=>{
        this.pos = {x:e.pageX, y:e.pageY};
        // this.#clicked = true;
        this.clicked = true;
    }

    static mouseup = (e)=>{
        this.pos = {x:e.pageX, y:e.pageY};
        this.clicked = false;
        // this.#clicked = false;
    }
}