while (true) {
    let a = parseFloat(prompt("Value of a :"));
    let b = parseFloat(prompt("Value of b :"));

    if (a <= 0 || b <= 0) {
        alert("One of the numbers is lower or equal to 0 !");
    }

    if (a > 0 && b > 0) {

        if (a === b) {
            alert("Equals !");
            break;
        }

        alert(`${a > b ? a : b} is greater than ${a < b ? a : b} !`)
        break;
    }
}