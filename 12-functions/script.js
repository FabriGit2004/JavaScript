/* No parameters function*/

function bark(){
	return "woof woof";
}
alert(`My dog says : ${bark()}`);

/* function with parameters*/

function split(word,n){
	word = String(word);
	let m = [];
	for (let i = 0; i < word.length; i = i + n){
		m.push(word[i]);
	}
	return m;
}

alert(split("hello", 2));


/* when one parameter is default */

function yell(phrase, times = 1){
	
	msg = '';
	
	for(let i = 0; i < times ; i++){
		msg += phrase + '\n';
	}
	
	alert (msg.toUpperCase());
}

yell("aaaa");
yell("aaaa",4);


/* embedded functions + DOM function */

function say(word, show=false){
	
	if(show){
		const newDiv = document.createElement("div");
		newDiv.innerHTML = `<p>${word}</p>`;
		document.body.appendChild(newDiv);
	}
	
	else{alert(word)}
	
}

say("I'm a message",true);


/* DOM function */

function calc(n1,n2){
	document.write(`<h2>SUM : \t${n1+n2}</h2>`);
	document.write(`<h2>SUB : \t${n1-n2}</h2>`);
	document.write(`<h2>PRO : \t${n1*n2}</h2>`);
	document.write(`<h2>DIV : \t${n1/n2}</h2>`);
}


/* JSON + DOM function */

function calc(n1,n2){
	
	let ops = {
		"sum" : `${n1+n2}`,
		"sub" : `${n1-n2}`,
		"pro" : `${n1*n2}`,
		"div" : `${n1/n2}`,
			
	}
	
	document.write(`<h2>SUM : 	\t${ops.sum}</h2>`);
	document.write(`<h2>SUB : 	\t${ops.sub}</h2>`);
	document.write(`<h2>PRO : 	\t${ops.pro}</h2>`);
	document.write(`<h2>DIV : 	\t${ops.div}</h2>`);
}

calc(3,3);



/* ...rest ; type : [] */


function dresser(...clothes){
	
	for (let i = 0; i < clothes.length/2 ; i++){
		document.write(`<h3>...rest sentence nº ${i} = ${clothes[i]}</h6>`);
	}
	
}

dresser('socks','socks','socks','socks','socks','socks');


/* SpreadOperator */

function expand(m){
	
	let base = [1,2,3,...m];
	return `array created using the Spread Operator : [${base}] `;
	
}

alert(expand([4,5,6]));
