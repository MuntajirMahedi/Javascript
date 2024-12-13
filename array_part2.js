var marvel_heros = ["Thor", "Ironman", "Spiderman"];
var dc_heros = ["Superman", "Flash", "Batman"];

marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

var allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

 var all_new_heros = [...marvel_heros, ...dc_heros];
//  console.log(all_new_heros);

var another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]];

var real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

// console.log(Array.isArray("Rahul"));
console.log(Array.from("Rahul"));

var score1 = 100;
var score2 = 200;
var score3 = 300;

console.log(Array.of(score1, score2, score3));
