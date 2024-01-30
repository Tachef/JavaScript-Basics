function histogram(input) {
    let index = 0;

    let n = Number(input[index]); // аналогично с input[0] броя на  n числа 
    index++;

    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;

    for (let i = 0; i < n; i++) {
        let currentNumber = Number(input[index]); // число
        index++;

        if(currentNumber < 200) {
            p1Counter++;
        } else if (currentNumber >= 200 && currentNumber < 400) {
            p2Counter++;
        } else if (currentNumber >= 400 && currentNumber < 600) {
            p3Counter++;
        } else if (currentNumber >= 600 && currentNumber < 800) {
            p4Counter++;
        } else {
            p5Counter++;
        }
    }

    let p1Percentage = p1Counter / n * 100;
    let p2Percentage = p2Counter / n * 100;
    let p3Percentage = p3Counter / n * 100;
    let p4Percentage = p4Counter / n * 100;
    let p5Percentage = p5Counter / n * 100;
    console.log(p1Percentage.toFixed(2) + "%");
    console.log(p2Percentage.toFixed(2) + "%");
    console.log(p3Percentage.toFixed(2) + "%");
    console.log(p4Percentage.toFixed(2) + "%");
    console.log(p5Percentage.toFixed(2) + "%");
}
histogram(["14", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200"])