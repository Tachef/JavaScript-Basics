function trainTheTrainers(input) {
    let index = 0;
    let juryCount = Number(input[index++]);
    let command = input[index++];

    let totalScore = 0;
    let scoreCounter = 0;

    while (command !== "Finish") {
        let presentationName = command;
        let avgSum = 0;

        for (let judge = 1; judge <= juryCount; judge++) {
            let currentScore = Number(input[index++]);

            avgSum += currentScore;
        }

        let avgScore = avgSum / juryCount;
        console.log(`${presentationName} - ${avgScore.toFixed(2)}.`);
        totalScore += avgScore;
        scoreCounter++;
        command = input[index++];

    }

    let totalAvgScore = totalScore / scoreCounter; // среден успех от всички презентации
    console.log(`Student's final assessment is ${totalAvgScore.toFixed(2)}.`);


}
trainTheTrainers(["2",

"While-Loop",

"6.00",

"5.50",

"For-Loop",

"5.84",

"5.66",

"Finish"])