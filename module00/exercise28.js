// Before ES6
const Cember = function(x=0,y=0,radius=1){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.area = function(){
        return Math.PI * this.radius ** 2;
    }
}
let circle1 = new Cember();
console.log(circle1);
console.log(circle1.area());
// After ES6
class Circle {
    constructor(x=0,y=0,radius=1) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    area(){
        return Math.PI * this.radius ** 2;
    }
}
let circle2 = new Circle();
console.log(circle2);
console.log(circle2.area());
