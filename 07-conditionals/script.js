
// IF

let rain = true;

if (rain) {

    alert("Don't forget your umbrella !");

} else {

    alert("Let's go to the beach !")

}


// ELSE IF


let ages = [0, 5, 18, 92, 150];
let msg = "";


for (let i = 0; i < ages.length; i++) {

    console.log(ages[i], msg);

    let r = "";


    if (ages[i] == 0) {

        r = "not valid.\n";

    } else if (ages[i] < 18) {

        r = "child or teenager.\n";

    } else if (ages[i] > 100) {

        r = "dead.\n"
        
    } else if (ages[i] >= 18) {

        r = "adult.\n";

    } 

    msg += r;

}

alert(msg);

// !

let sunny = false;

let goRunning = true;

if (!sunny) {

    goRunning = false;
    
} else {

    goRunning = true;

} 

alert(`Today we'll go running , this sentence is ${goRunning}`)