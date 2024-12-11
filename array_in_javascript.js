//Array

var myArr = [0, 1, 2, 3, 4, true,"rahul"];
var myHeros = ["shakiman","naagraj"];
var myArr2 = new Array(1, 2, 3, 4);

// console.log(myArr[5]);
// console.log(myArr2[3]);

//Array Methods

// myArr.push(5);
// myArr.push(6);
// myArr.pop();

// myArr.unshift(true);
// myArr.shift();

// console.log(myArr.includes('rahul'));
// console.log(myArr.indexOf(true));

var newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

console.log("A--", myArr);

var myn1 = myArr.slice(1, 3);
console.log(myn1);

console.log("B--",myArr);

var myn2 = myArr.splice(1, 3);

console.log("C--",myArr);
console.log(myn2);



