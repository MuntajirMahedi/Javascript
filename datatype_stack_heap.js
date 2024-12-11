// primitive

// 7 type of data type : string, number, boolearn, null, undefined, symbol, BigInt

let score = 100; //number
let scorevalue = 100.3 //number
let name = "rahul" // string

let isLoggedIn = false; // boolearn
let outsideTemp = null; // null
let uesrEmail; // undefined

let id = Symbol('123');
let anotherId = Symbol('123'); //symbol
//  console.log(id === anotherId);


let bigNumber = 782753259863295863n   // bigint
// console.log(typeof bigNumber); 


//reference (non primitive)
// Array, object, Functions


let heros = ["shktiman","naagraj", 3];  //Array
// console.log(heros[0]);
// console.log(heros[2]);


let myObj = {
  name:"hitesh",  
  age:22,
}       //object
// console.log(myObj.name); 


let myFunction = function(){
   // console.log("hello world");
    
} //function




//**************************************************

//satck (primitive), heap (non-primitive)

let myName = "bhavik";
let anotherName = myName;


anotherName = "chaiaurcode";

// console.log(myName);
// console.log(anotherName);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}
// console.log(userOne);

let userTwo = userOne;
 
userTwo.email = "ramesh@google.com"; 


console.log(userOne.email);
console.log(userTwo.email);

