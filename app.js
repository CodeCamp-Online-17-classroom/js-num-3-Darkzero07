const prompt = require('prompt-sync')();
let amount = +prompt("Purchase amout = ")
let point = Math.floor(amount/100)
console.log(`Your point = ${point}`)