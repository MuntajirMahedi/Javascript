function sayMyName() {
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("V");
    console.log("I");
    console.log("K");  
}

// sayMyName();
// function addTwoNumber(number1,number2) {
//         console.log(number1 + number2);
 
// }
// addTwoNumber(3, 4)

function addTwoNumber(number1,number2) {
       
    // let value = number1 + number2
    // return value

    return number1 + number2

}
//  console.log("result: ",addTwoNumber(3, 4));
 

// var result = addTwoNumber(3, 4)
// console.log("Result: ", result);


function loginUserMessage(username = "sam") {  //override value
    if (username === undefined) {
        // console.log("Please Enter Username ");
        return
        
    }
    return `${username} just Logged In` 
} 

// console.log(loginUserMessage("bhavik"));



function OddEven(number){
          
    if (number === undefined ) {
        console.log(number + " Please Enter Number");
        return 
    }
      
    else if (number % 2 === 0) {
        console.log(number + " Is Even");
        return  
        }
    else {
         console.log(number + " Is odd");
         return
        }
} 
 
// console.log(OddEven(3));



