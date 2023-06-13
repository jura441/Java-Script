window.addEventListener("DOMContentLoaded", (event)=> {
    /*Task 1*/
    const newCircle1 = new Circle(10);

    console.log(newCircle1.radius, newCircle1.diam, newCircle1.getCircleWidth())
    
    newCircle1.newRad = 100;
    console.log(newCircle1.radius);

   
 });
 


/*Task 1*/
class Circle {
    constructor(rad) {
        this._radius = rad;
    }
    getCircleWidth() {
        return Math.ceil(this.radius * 2 * Math.PI);
    };
    getCircleArea() {
        return Math.ceil(this.radius ** 2 * Math.PI);
    };
    get radius() {
        return this._radius;
    }
    get diam() {
        return this._radius * 2;
    }
    set newRad(newRadius) {
        if (newRadius <= 0) alert('Wrong!');
        this._radius = newRadius;
    }
}


