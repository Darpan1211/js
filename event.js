// //Event BAsics

// let eventElement = document.querySelector('.clickme');
// //console.log(eventElement);

// eventElement.addEventListener('click', function(){
//     console.log("Click Me!");
// })

let elements = document.querySelectorAll('li');
console.log(elements)

elements.forEach(function(element){
    element.addEventListener('click', e=>{
        console.log(e.target)
        e.target.style.textDecoration="line-through"
    })
})

