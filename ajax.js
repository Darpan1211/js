let request = new XMLHttpRequest();
console.log(request);
request.addEventListener('readystatechange',()=>{
    console.log(request,request.readyState);
})


//set up the request

request.open("GET","https://jsonplaceholder.typicode.com/todos");

//sending the request
request.send();