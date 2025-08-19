function speak(word = 'hi'){console.log(word);


/* Annonymous function */


const f = 

	function(m){ 
		let x = 2;
		let y = 6;
		alert(((x+y)**m)); 
	}


/* Time interval -- Callback function */


/* Callback functions depend on the annonymous function to be considered as one */

let c = 0;
setInterval(function(){
	
	c++;
	alert(`I'm growing exponentially , my values is = ${c**c}`);
	
},2000)


