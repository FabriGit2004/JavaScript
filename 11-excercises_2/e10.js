function validate(n){
	if (isNaN(n)){
		return 'Not a number...';
	}
	return parseInt(n);
}

let a = validate(prompt("Please , digit the first number : "));
let b = validate(prompt("Please , digit the second number : "));
let msg = '';
let operators = ['+','-','*','/','%'];

for (let i = 0; i < operators.length ; i++){
	
	msg += String(eval(`${a}${operators[i]}${b}`)) + "\n";
	
}

alert(msg);


