// var tinderUser = new Object()
// console.log(tinderUser);

var tinderuser = {
    id : "123abc",
    name : "Sammy"
}
// console.log(tinderuser);

tinderuser.age = "18"
tinderuser.email = "rahul@google.com"
tinderuser.isLoggedIn = false

// console.log(tinderuser);

var regularUser = {
    fullname : {
        userfullname : {
            firstname : "bhavik",
            lastname : "limbachiya"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

var obj1 = {1: "A", 2:"B"}
var obj2 = {1: "C", 4:"D"}
var obj3 = {5: "E", 6:"F"}

// var obj3 = {obj1, obj2}
// console.log(obj3);

// var obj4 = Object.assign({},obj1, obj2, obj3);

var obj4 = {...obj1, ...obj2, ...obj3}  //Spread Operator
// console.log(obj4);

var users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    },
]

// console.log(users[1].email);
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));

// console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty("isLoggedIn"));

