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

//static method (can never inhritated to all objects)
Car.breakMethod = function(){
    console.log("This is brack method of Car class")
}

let honda = new Car("red", 2023);
honda.startEngin();
Car.breakMethod();