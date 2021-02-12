class Mouse {
    constructor() {
        this.x = 0;
        this.y = 0;
        this._x = 0;
        this._y = 0;
    }

    updatePosition = (event) => {
        const e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
    }

    setOrigin = (e) => {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    }

    show = () => {
        return `(${this.x}, ${this.y})`;
    }
}

export default Mouse;