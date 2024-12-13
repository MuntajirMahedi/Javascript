//singleton
// Object.create

// oject liter

var jsUser = {
    name : "Hitesh",
    age : "18",
    email : "hitesh@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}
// Object.freeze(jsUser);
// console.log(jsUser.name, jsUser.age, jsUser.email);

// console.log(`Name :-${jsUser.name}, Age:- ${jsUser.age},Email:- ${jsUser.city}`); 

// console.log(jsUser);
// jsUser.age = "19";

// Object.freeze(jsUser);
// console.log(jsUser);

// jsUser.age = "20";
//  console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello Js User");
}

// console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}, ${this.age}`);
}

// console.log(jsUser.greetingTwo()); 






