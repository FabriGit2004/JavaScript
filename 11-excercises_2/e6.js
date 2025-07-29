let a = parseInt(prompt('Enter an integer...'));
let b = parseInt(prompt('Enter an integer...'));
let bigger = 0;
let smaller = 0;
let msg = '';

if ( a > b ){

	bigger = a;
	smaller = b;

} else {
	smaller = a ;
	bigger = b;
	
}

for (let i = smaller ; i <= bigger ; i++){
	
	if ( i % 2 !== 0){
		msg += `${i}\n`;
	}
	
	
}

alert(msg);