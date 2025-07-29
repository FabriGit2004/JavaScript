// arithmetic operators

let a = 10;
let b = 2;

let ao = [

    `a = ${a} , b = ${b}`,
    "",
    `a + b = ${a + b}`,
    `a - b = ${a - b}`,
    `a * b = ${a * b}`,
    `a / b = ${a / b}`,
    `a ** b = ${a ** b}`,
    `a % b =${a % b}`

]

// string operators

let msg1 = "\n";

ao.forEach(e => {
    msg1 += `${e}\n`
})
alert(msg1)

// conditional

let co = [

    `a = ${a} , b = ${b}`,
    "",
    `a > b is ${a > b}`,
    `a < b is ${a < b}`,
    `a >= b is ${a >= b}`,
    `a <= b is ${a <= b}`,
    `a == b is ${a == b}`,
    `a === b is ${a === b}`,
    `a != b is ${a != b}`,
    `a !== b is ${a !== b}`,
    "",
    'obs : 10 == "10" is True , 10 === "10" is False'

]

let msg2 = "\n";

co.forEach(e => {
    msg2 += `${e}\n`
})
alert(msg2)

// increment 

let array = [];

for (let index = 0; index < 9; index++) {

    array.push(index)

}

alert(`0 <= index < 9 \n\n index++;   \n\n ${array}`);


// boolean

let T = true;
let F = false;


let bo = [

    'AND OR NOT',
    '',
    `true AND true = ${T && T}`,
    `true AND false = ${T && F}`,
    `true OR true = ${T || T}`,
    `true OR dalse = ${T || F}`,
    `NOT true = ${!T}`,
    `NOT false = ${!F}`,

]


let msg3 = "\n";

bo.forEach(e => {
    msg3 += `${e}\n`
})
alert(msg3)
