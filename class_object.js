//create class

class Car{
    constructor(color,model){
        this.color = color;
        this.model = model;
    }
    startEngin(){
        console.log("This is strat engin method of Car class");
    }
    get _startEngine(){
        console.log("This is strat engin method of Car class using get");
    }

    set changeColor(color){
        console.log(this.color = color)
    }
}

let honda = new Car("red", "green");
console.log(honda)
honda.startEngin();
honda.changeColor= "Yellow";
console.log(honda);