//Parent Class

class Car{
    constructor(color,model){
        this.color = color;
        this.model = model;
    }
    startEngin(){
        console.log("This is strat engin method of Car class");
    }
}

//child class
class Bike extends Car{
    //Add some new peoperties and Method as well
    constructor(color,model,engin){
        super(color,model);
        this.engin = engin;
    }
        bikeMethod(){
            console.log("This is bike strat engin method ");
        }
}
let newBike = new Bike("Black",2023,"250cc")
console.log(newBike);

let honda = new Car("red", 2023);
console.log(honda);