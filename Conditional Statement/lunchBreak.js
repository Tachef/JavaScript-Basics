function lunchBreak(input) {
    let movieName = input[0];
    let durationEp = Number(input[1]);
    let timeBreak = Number(input[2]);

    lunchtime = timeBreak * 1/ 8;
    restTime = timeBreak * 1 / 4;

    let timeLeft = timeBreak - lunchtime - restTime;
    
    if(durationEp >= timeLeft) {
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(durationEp - timeLeft)} more minutes.`);
    } else {
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(timeLeft - durationEp)} minutes free time.`);
    }
}
lunchBreak(["Teen Wolf",
"48",
"60"])
;