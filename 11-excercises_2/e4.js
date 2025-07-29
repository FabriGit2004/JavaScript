let input = 0;
let sum = 0;
let count = 0;

while (input > -1){
	
    input = parseFloat(prompt("Type a positive number!"))
    
	if(isNaN(input)){
        alert("Not a number");
    }
	if (input < 0 ) {
		alert("Negative number, ending loop...")
	}
	
	if (input >= 0){
		count++;
		sum += input;
	}
	
}

alert(`Sum = ${sum} , Avg = ${sum/count}`);

