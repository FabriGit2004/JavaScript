let num = parseFloat(prompt("Enter a number"));
let msg = "";
for (let i = 1 ; i <= 10 ; i++){
	msg += `${num} * \t${i} \t= \t${num*i}\n`;
}
alert(msg);