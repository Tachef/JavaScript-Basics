

// 4- Workout
function runningProgram(input) {
    let n = Number(input[0]);
    let M = Number(input[1]);
    let sum = M;

    for (let i = 2; i < n + 2; i++) {
        let K = Number(input[i]);
        M *= 1 + K / 100;
        sum += M;
    }

    if (sum <= 1000.00) {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000.00 - sum)} more kilometers`);
    } else {
        console.log(`You've done a great job running ${Math.ceil(sum - 1000.00)} more kilometers!`);
    }
}
runningProgram



// 5-Everest
function everest(input) {
    let startHeight = 5364;
    let target = 8848;
    let currentHeight = 0;
    let count = 1;
    let index = 0;

    while (true) {
        let yesOrNo = input[index++];

        if (yesOrNo === "END") {
            break;
        }

        if (yesOrNo === "Yes") {
            count++;
        }

        let inputHeight = input[index++];
        let height = parseInt(inputHeight);

        currentHeight += height;

        if (currentHeight + startHeight >= target || count === 5) {
            break;
        }
    }

    if (startHeight + currentHeight < target) {
        console.log("Failed!");
        console.log(startHeight + currentHeight);
    } else {
        console.log(`Goal reached for ${count} days!`);
    }
}
everest



// 6-Substitute
function generateChanges(input) {
    const k = +input[0];
    const l = +input[1];
    const m = +input[2];
    const n = +input[3];

    let counter = 0;

    outerLoop: for (let i = k; i <= 8; i++) {
        if (i % 2 === 1) {
            continue;
        }
        for (let o = 9; o >= l; o--) {
            if (o % 2 === 0) {
                continue;
            }
            for (let p = m; p <= 8; p++) {
                if (p % 2 === 1) {
                    continue;
                }
                for (let q = 9; q >= n; q--) {
                    if (q % 2 === 0) {
                        continue;
                    }

                    if (i === p && o === q) {
                        console.log("Cannot change the same player.");
                    } else {
                        counter++;
                        console.log(`${i}${o} - ${p}${q}`);
                    }

                    if (counter === 6) {
                        break outerLoop;
                    }
                }
            }
        }
    }
}
generateChanges(["7",
"6",
"8",
"5"])






