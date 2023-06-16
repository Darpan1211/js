let car = {
    color:"black",
    model:"2023",
    company:"Honda"
}
console.log(car["model"]);

let properties = "color";
console.log(car[properties]);

//"Modify" The Object property

car["color"] = "Grey";
car.model = "2022";
console.log(car.color);