//Function
"use strict"
let mainPlane={
    airline : "Fly India",
    iatacode:"FI",
    bookings:[],
    book:function(flightNum,name){
        console.log(`${name} Booking Flight on ${this.airline} with fight Number ${this.iatacode}${flightNum}`);
        this.bookings.push({flightName:`${this.airline}`, name:name,flightNumber:flightNum});
    }
}

mainPlane.book(553,"Darpan");
console.log(mainPlane);

let childplane = {
    airline:"CHild Plain",
    iatacode:"cp",
    bookings:[],
}

let book = mainPlane.book;

book.call(childplane,689,"key");

