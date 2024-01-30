function tennisRankList(input) {
    let index = 0;
    let tournaments = Number(input[index]);
    index ++;
    let startPoints = Number(input[index]);
    index++;

    let currentPoints = 0;
    let winCount = 0;

    for (let i = 0; i < tournaments; i++ ) {
        let result = input[index];
        index++;

        if (result === "W" ) {
            currentPoints += 2000;
            winCount++;
        } else if (result === "F") {
            currentPoints += 1200;
        } else {
            currentPoints += 720;
        }
    }
    let sumPoints = startPoints + currentPoints;
    let averagePoints = Math.floor(currentPoints / tournaments);
    let winPercent = winCount / tournaments * 100;
    console.log(`Final points: ${sumPoints}`)
    console.log(`Average points: ${averagePoints}`);
    console.log(`${winPercent.toFixed(2)}%`);
}
tennisRankList(["5",

"1400",

"F",

"SF",

"W",

"W",

"SF"])