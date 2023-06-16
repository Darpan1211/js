function greet(){
    console.log(`Hello ${this.firstName} ${this.lastName} on coder`);
}
let users={
    firstName:"Drapan",
    lastName:"Patel"
}

let greets = greet.bind(users);
greets()