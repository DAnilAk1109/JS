const id = 1250050;
//id = 1250051                    // updation not allowed
let name = "Ak";
let Email = "ak11@gmail.com";     // here mail can be change in future so we use "let"
let place = "hyderabad";
state = "telangana";              // here assign value is possible without using "const" or "let"
let mobile;                       //no assigning of value is possible output as undefined
// avoid use "var" because issue in block scope and functional scope 
/*console.log(id);
console.log(name);
console.log(Email);
console.log(place);    multi line commet */
console.table([id, name, Email, place, state, mobile]);