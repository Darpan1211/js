//Add New Class in Html
let heading = document.querySelector('h1');
heading.classList.add('myAdd');

//Remove Class in Html
heading.classList.remove('myAdd');

//Replace the class
heading.classList.replace("myAdd", "newClass");

//Parent,Children and Sibling Elements
let parentElement = document.querySelector('.content');
//All children of parent
console.log(parentElement);

for (let i = 0; i < parentElement.children.length; i++) {
console.log(parentElement.children[i]);
}

//chid Element
let childElement  =document.querySelector('h1');
//Find the parent element
console.log(childElement.parentElement);