//2.Convert the UML diagram to Typescript class. - use number for double
class Circle{
    constructor(radius=4.0,color="Reddish brown"){
        this.radius = radius;
        this.color = color;
    }
    toString(radius=this.radius){
        this.radius = radius;
        return `converting to string ${(this.radius).toString()+(this.color).toString()}`
    }

    circle(){
        return `color : ${this.color} and radius : ${this.radius}`;
    }
    circle(radius){
        this.radius=radius;
        return `radius : ${this.radius}`;
    }
    circle(radius,color){
        this.radius=radius;
        this.color=color;
        return `the radius : ${this.radius} and color : ${this.color}`;
    }
    setRadius(radius=1.0){
        this.radius=radius;
    }
    getRadius(){
        return `the radius by get and set is ${this.radius}`;
    }
    setColor(color="red"){
        this.color=color;
    }
    getColor(){
        return `the color by get and set is ${this.color}`;
    }

    getArea(){
        return `the area is ${(this.radius)*(this.radius)*4}`;
    }
    getCircumference(){
        return `the circumference is ${(this.radius)*2*(Math.PI)}`;
    }
}
let circ = new Circle(6,"black");

console.log(circ.circle()); 
console.log(circ.circle(5)); 
console.log(circ.circle(4,"white"));
circ.setRadius();
console.log(circ.getRadius()); 
circ.setColor();
console.log(circ.getColor()); 
console.log(circ.toString(6));
console.log(circ.getArea()); 
console.log(circ.getCircumference());