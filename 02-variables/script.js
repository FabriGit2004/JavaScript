
var global = "I'm a var , call me anywhere !";
let block = "I'm a let , call me while you are around the block !";
const ego = "I'm a const, I will never change !"

let variables = [global,block,ego]


variables.forEach(element => {
    alert(element)
});
