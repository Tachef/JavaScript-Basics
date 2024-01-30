function traveling(input) {
    let index = 0;
    let command = input[index]; // Пишем тази променлива, защото не знаем каква стойност ще бъде !
    index++;

    while (command !== "End") {
        let destination = command;
        let budget = Number(input[index]); // 
        index++;
        sum = 0; // Променлива е в цикъла, защото за всяка нова дестинация да започва от нула.
        while (sum < budget) {
            let money = Number(input[index]);
            index++;
            sum += money;
        }
        console.log(`Going to ${destination}!`);
        command = input[index];
        index++;
    }
}
traveling(["Greece",

"1000",

"200",

"200",

"300",

"100",

"150",

"240",

"Spain",

"1200",

"300",

"500",

"193",

"423",

"End"])