
// switch

let number = 1;


switch (number) {
    case 1:
        alert("Case 1")
        break;

    case 2:
        alert("Case 2")
        break;

    case 3:
        alert("Case 3")
        break;

    default:
        alert("Case default")
        break;
}


// ternary

let bool = true;
alert((bool) ? `this is true` : `this is false`);


// var & let

if (1 > 0) {
    var global = "global-scope";
}

if (1 > 0) {
    let block = "block-scope";

    alert(`I'm ${block} a  (let) variable defined and called from inside this block of code.\n\nI'm ${global} a (var) variable defined outside this block and called from inside this block of code.`)
}

