/*let price = 100.5;
let fullName = "Sado";
let isFollow = true;
let x = null;
let y = BigInt("123");

const student = {
    fullName: "Sado",
    age: 24,
    cgpa: 9.2,
    isPass: true,
}
student["age"] = student["age"] + 1;

console.log(student["age"]);

const product = {
    title: "Ball pen",
    rating: 4,
    offer: 5,
    price: 270,
};
console.log(product)

const profile = {
    username: "_sadochan",
    posts: 0,
    isfollow: false,
    following: 0,
};

console.log(profile)*/

//Artimetic Operator
/*let a = 5;
let b = 2;

console.log("a = ", a, " & b =", b);
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b);*/

//Unary Operator

/*let a = 5;
let b = 2;

console.log("a =", a, "& b =", b);
a--;
console.log("a =", a);*/

//Asigment Operators

/*let a = 5;
let b = 2;

a += 4,
console.log ("a =", a)*/

// Arithmetic Operators

//  var a = 10;
//  var b = 10;
//  var c = 4;

// console.log("The value of a + b is", a+b);
// console.log("The value of a - b is", a-b);
// console.log("The value of a * b is", a*b);
// console.log("The vaalue of a / b is", a/b);


// // Assigment Operators
// b += 2;
// console.log(b);
// b -= c;
// console.log(b);

// // Comparison Operators
// let x = 50;
// let y = 45;
// console.log(x == y);
// console.log(x > y);
// console.log(x < y);
// console.log(x >= y);
// console.log(x <= y);

// Logical Operators
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// Logical or
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// Logical not
// console.log(!false);
// console.log(!true);

// Function in JavaScript

// function avg(a, b) {
//     c = (a + b) / 2;
//     return c;
// }

// // DRY = Do not repeat yourself
// c1 = avg(4, 6);
// c2 = avg(14, 16);
// console.log(c1, c2);

// Conditionals in JavaScript

// var age = 4;
// if(age > 18){
//    console.log('You can drink')
// }
// else{
//     console.log('You cannot drink')
// }

// odd or even

// let num = 2;

// if (num % 2 === 0) {
//     console.log(num, "is even")
// } else {
//     console.log(num, "is odd")
// }

// let mode = "dark-mode";
// let color;

// if (mode === "dark-mode") {
//     color = "black"
// }

// console.log(color);

// let mode = "white"
// let color;

// if (mode === "dark") {
//     color = "black";
// } else if (mode === "blue") {
//     color = "blue";
// } else if (mode === "pink") {
//     color = "pink"
// } else {
//     color = "white";
// }
// console.log(color);


// let age = 15;

// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);

// alert("hello!"); // one time popup

// let num = prompt("enter a number");

// if (num % 5 === 0) {
//     console.log(num, "is a multiple of 5")
// } else {
//     console.log(num, "is not multiple of 5")
// }

// student marks practise

// let score = prompt("enter your score (0-100):");
// let grade;

// if (score >= 90 && score <= 100) {
//     grade = "A";
// } else if (score >= 70 && score <= 89) {
//     grade = "B";
// } else if (score >= 60 && score <= 69) {
//     grade = "C";
// } else if (score >= 50 && score <= 59) {
//     grade = "D";
// } else if (score >= 0 && score <= 49) {
//     grade = "F";
// }

// console.log("according to your scores, your grade was : ", grade);

// for (let count = 1; count <= 5; count++) {
//     console.log("SADO");
// }

// console.log("loop has ended")



// for-of loop
// let str = "SADO";
// let size = 0;

// for (let i of str) {
//     console.log("i=",i);
//     size++;
// }

// console.log("string size =", size);


// practice Qs1
// for (let num = 0; num <= 100; num++) {
//     if (num % 2 !== 0) {
//         console.log("num =", num);
//     }
// }


// practice Qs2

// let gameNum = 70;
// let userNum = prompt("Guess the game number : ");

// while (userNum != gameNum) {
//     userNum = prompt ("You entered wrong number. Guess again :");
// }

// console.log("congratulations, you entered the right number");


// Strings

// let str = "SadoKen"

// console.log(str[4]);

// Template literal
// let obj = {
//     item: "pen",
//     price: 10,
// }

// let output = `this is a ${obj.item} ${obj.price} rupees`;
// console.log(output);

// let str = "JavaScript";

// for (let i of str) {
//     console.log("i=", i);
// }

// let d = "i_love";
// let c = "A";
// console.log(`mwah ${d+c}`);


// let r = 67;
// let p = 89;
// console.log(`Total amount ${r+p}`);

// let str = "JavaScript";
// console.log(str.slice(4));

//  REPLACE NAME
// let str = "Hello Alizza";
// console.log(str.replace("Alizza","Sado"));

// Learned to create a simple automatic username generator using JavaScript.
// let fullName = prompt("Enter your fullName without spaces");
// let username = "@" + fullName + fullName.length;
// console.log(username);


// let marks = [86,52,18,77,82];
// console.log(marks);



// LOOPING
// let ps5 = ["Gta4","Gta5","Gta6"];
// for(let i=0; i < ps5.length; i++) {
//     console.log(ps5[i].toUpperCase());
// }

// let family = ["SADO","AlIZZA","TXIBI"];
// for(let i=0; i < family.length; i++){
//     console.log(family[i].toLowerCase());
// }



// function myLove(mia, paa) {
//     console.log(mia + paa + "Txibi");

// }

// myLove("I", "love")

// Function sum
// function cal(k, l) {
//     let p = k * l;
//     return p;
// }
// let tax = cal(9, 9);
// console.log(tax);

// SUM ARROW
// const sum = (a, b) => {
//     return a + b;
// }
// console.log(sum(12, 8));

// Modern JS
// const arrowSum = (g, h) => {
//     console.log(g - h);
// };

// Mult
// const arrowMul = (x, y) => {
//     console.log(x * y);
// };


// Normal Function
// function countVowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if (
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u"
//     ) {
//             count++;
//         }
//     }
//     return count;
// };




// Airrow function
// const countVow = (str) => {
//     let count = 0;
//     for (const char of str) {
//         if (
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u"
//         ) {
//             count++;
//         }
//     }
//     return count;
// };

// simple way
// let names = ["Sado", "Txibi", "Alizza"];
// names.forEach((val, idx) => {
//     console.log(val, idx);
// });

// hard way
// let arr = [10, 20, 30];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }



// ???????
// let num = [9, 8, 7, 6, , 5, 4];

// num.forEach(function printNum(val) {
//     console.log(val)
// });



// ?????
// let league = ["Taric :)","Me <3","Xayah"];

// league.forEach((val,idx,arr) => {
//     console.log(val,idx,arr);
// });

// ???????????????????
// function sado(a,b,operation) {
//     operation (a,b);
// }
// function Txibi (o,p) {
//     console.log(o + p);
// }

// sado (10,10,Txibi);


// ????????????
// let nums = [82,32,93,273,273];

// nums.forEach((num) => {
//     console.log(num * num);
// });