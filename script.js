//Updateing attributes of the HTML

let innovaters = document.querySelector("a");
console.log(innovaters.getAttribute("href")); // read attribute value

//set attributes

innovaters.setAttribute("href", "https://www.thecompass.co.in/");
console.log(innovaters.getAttribute("href")); // read attribute value
innovaters.innerText="Thecompass.co.in"