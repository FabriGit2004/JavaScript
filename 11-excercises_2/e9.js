function even(n){
	if (isNaN(n)){
		alert( "String detected..." );
	}
	alert( n % 2 === 0 ? "Even" : "Odd") ;
}
even(parseInt(prompt("Please , digit a number : ")));
