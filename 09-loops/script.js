
// for

let msg1 = '';

for (let index = 0; index < 10; index++) {

    msg1 += `${index}\n`;

}

alert(`for \n\n${msg1}`);



// while

let msg2 = '';
let c = 0;

while (c !== 10) {

    msg2 += `${c}\n`;
    c++;

}

alert(`while \n\n${msg2}`);


// do while

c = 0;
let msg3 = '';
do {
    msg3 += `${c}\n`;
    c++;
} while (c < 10);

alert(`do while \n\n${msg3}`);