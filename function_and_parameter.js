function sayMyName() {
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("V");
    console.log("I");
    console.log("K");  
}

// sayMyName();

function addTwonumber(number1,number2) {
        console.log(number1 + number2);
 
}
// addTwonumber(3, 4)

// var result = addTwonumber(3, 4)

// console.log("result : ", result);

function addTwoNumber(number1,number2) {
       
    // let value = number1 + number2
    // return value

    return number1 + number2

}
//  console.log("result: ",addTwoNumber(3, 4));
 

var result = addTwoNumber(3, 4)
// console.log("Result: ", result);



function loginUserMessage(username = "sam") {  //override value
    if (username === undefined) {
        console.log("Please Enter Username ");
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


function calculateCartPrice(val1, val2, ...num1) {
    return num1 
}   
// console.log(calculateCartPrice(200, 300, 400, 500));

var user = {
    username: "bhavik",
    price: 199
    }

    function handleObject(anyObject) {
        console.log(`Username: ${anyObject.username} and Price: ${anyObject.price}`);
    }

    // handleObject(user);

var mynewArray = [100, 200, 300, 400]

function returnSecondValue(getArray) {
    return getArray[1]
} 

// console.log(returnSecondValue(mynewArray));
// console.log(returnSecondValue([100, 200, 300, 400]));

