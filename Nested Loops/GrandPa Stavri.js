function granpa(input) {
    let index = 0;
    let daysCount = Number(input[index]);
    index++;

    let currentQuantity = 0;
    let total = 0;

    for (let i = 0; i < daysCount; i++) {
        let rakiaQuantity = Number(input[index]);
        index++;

        let degrees = Number(input[index]);
        index++;

        currentQuantity += rakiaQuantity;

        let sum = rakiaQuantity * degrees;
        total += sum;
    }

    let avgDegrees = total / currentQuantity;
    console.log(`Liter: ${currentQuantity.toFixed(2)}`);
    console.log(`Degrees: ${avgDegrees.toFixed(2)}`);

    if (avgDegrees < 38) {
        console.log(`Not good, you should baking!`);
    } else if ( avgDegrees >= 38 && avgDegrees <= 42) {
        console.log(`Super!`);
    } else {
        console.log(`Dilution with distilled water!`);
    }
}
granpa(["2",
"200",
"43",
"200",
"40"])
