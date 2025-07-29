let r = [1,2,3];
let msg = "";
for(let i = 0; i < r.length ; i++){
    msg += `spoons = ${r[i]} , prize = ${(r[i]*1.8)+0.50}\n`
}
alert(msg);