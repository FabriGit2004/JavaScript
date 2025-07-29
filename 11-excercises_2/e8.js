let num = parseInt(prompt("Please , digit a number : "));
let m = [];

for (let i = 0 ; i <= num ; i++){

	if (num % i === 0){
		m.push(i);
	}

}

alert(m);