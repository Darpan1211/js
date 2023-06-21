localStorage.setItem('Name', 'Darpan');
localStorage.setItem('City', 'Surat');

//Get item form LocalStorage

localStorage.setItem('City', 'Vadodara');
console.log(localStorage.getItem('City'));

//Remove item form LocalStorage
localStorage.removeItem('Name');

//aray of object add in localStorage

let vahicles = [
    {company:"honda",model:"2009"},
    {company:"BMW",model:"2010:"}
]
let stringOfVahicles = JSON.stringify(vahicles);
console.log(stringOfVahicles);

localStorage.setItem("vahicles",stringOfVahicles);

//Get stored item form LocalStorage

let storeData = localStorage.getItem('vehicles');
let objectFormate = JSON.parse(storeData)
console.log(objectFormate);