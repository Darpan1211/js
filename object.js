let car = function(color,model){
    //properties
    this.color = color;
    this.model = model;
}

let result = new car("black","2023");
let instance = new car("yellow","2025")
console.log(result,instance);