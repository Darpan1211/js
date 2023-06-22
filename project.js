//add 5 student deatils 
class Student{
    constructor(name,city,age) {
        this.name = name;
        this.city = city;
        this.age = age;

    }
    get description(){
        return `Student ${this.name} has live in ${this.city} and his age is ${this.age}`
    }
}
let student1 = new Student("darpan","Surat","23");
let student2 = new Student("Eshan","Surat","19");
console.log(student1.description);