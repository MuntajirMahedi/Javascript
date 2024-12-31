//For Loop
//For in Loop   
//For of Loop
//While Loop
//Do While Loop


//Create a loop that prints the numbers from 1 to 10 to the console.
//for loop
 
    for (let i = 1; i <= 10; i++) {
        // console.log(i); 
    }

//_______________________________________________________________    

//program to add first n natural numbers
var sum = 0;
var n = 3;
for (let i = 1; i <= n; i++) {
    // console.log(i + " + ");
    sum = sum + i;

}
//  console.log("Sum of first " + n + " natural numbers : " + sum);

//_______________________________________________________________

//for in loop  //object
var marks = {   
    bhavik: 90, 
    sam: 80,
    jay: 85,
    ravi: 70,
    raj: 60,
    jen: 95 
}   
for (let a in marks) {
    // console.log(a + " : " + marks[a]);cls
}

//_______________________________________________________________

//for of loop  //array
var fruits = ["apple", "banana", "mango", "orange", "grapes"];
for (let b of fruits) {
    // console.log(b);
}

//_______________________________________________________________

//while loop

let num = 10
let i = 1;
while (i <= num) {
    // console.log(i);
    i++;
}

//_______________________________________________________________

//do while loop

let number = 10;
let a = 1;
do {
    console.log(a);
    a++;
}
while (a <= number);



