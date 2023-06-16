// Method--> It is nothing but object property(key) holding 
//Function as "Value"

let person = {
    firstName: 'Darpan',
    lastName: 'Patel',
    City:'Surat',
    birthyear: 1997,
    Education: 'Computer Science',
    getSummary: function(){
        return `${this.firstName} brook lived in ${this.City}.He is ${this.Education} and his birthyear is ${this.birthyear}`;
    }

}
console.log(person.getSummary());