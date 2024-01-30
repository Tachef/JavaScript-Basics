function numberPyramid(input) {
    let num = Number(input[0]);

    let counter = 1;
    let isBigger = false;
    for (let i = 1; i <= num; i++) {
        let buff = " ";

        for (let j = 1; j <= i; j++) {
            buff += counter + " ";
            counter++;
            if (counter > num) {
                isBigger = true;
                break;
            }
        }
        console.log(buff)
        if (isBigger) {
            break;
        }
    }
}
numberPyramid(["7"]);