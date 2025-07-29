
let randomNum = 17 - Math.floor(Math.random()* 10);
let guess = 0;

while (guess !== randomNum){
		
	console.log(randomNum);
	guess = parseInt(prompt("Please guess the number between 1 and 17 "));
	if (guess === randomNum){alert("You guessed the random number.")};

}
