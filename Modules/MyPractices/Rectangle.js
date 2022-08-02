class Rectangle {


    constructor(_width, _hight, _color) {
        console.log("The Rectangle is being created!");

        this.width = _width;
        this.hight = _hight;
        this.color = _color;

    }

    getArea () {
        return this.width * this.hight;
    }

    pringTescription() {
        console.log(`I am a rectangel of ${this.width} x ${this.hight} and I am ${this.color}`);
    }
}

let myRectangle1 = new Rectangle(5, 3, 'blue');
let myRectangle2 = new Rectangle(7, 3, 'blue');
myRectangle1.pringTescription();

console.log((myRectangle1.getArea()));

console.log((myRectangle2.getArea()));