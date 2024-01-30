function oscars(input) {
    let index = 0; // Не знам колко ще са входните данни за това използвам променлива с индекс = 0; !
    let name = input[0]; // Прочитам името на актьора !
    index++;
    let points = Number(input[1]); // Прочитам точките на актьора !
    index++;
    let n = Number(input[2]); // Броя на журито
    index++;

    for (let i = 0; i < n; i++) { // Преминаване  през всички от журито !!
        let jury = input[index]; // За всяка итерация получавам иметото
        index++;
        let currentPoints = Number(input[index]);
        index++;
        currentPoints = jury.length * currentPoints / 2; // Вземам дължината на иметото на оценяващия, умножавам по точките му и ги разделям на 2.
        points += currentPoints; // Добавям точки точки на актьора от точките на оценителя(журито).
        if (points > 1250.5) { // Ако точките  са повече от 1250.5, прекъсвам изпълнението на цикъла.
            break;
        }
    }

    if(points > 1250.5) {
        console.log(`Congratulations, ${name} got a nominee for leading role with ${points.toFixed(1)}!`);
    } else {
        let diff = Math.abs(points - 1250.5); // Положителна стойост  и разликата.
        console.log(`Sorry, ${name} you need ${diff.toFixed(1)} more!`)
    }
}
oscars(["Zahari Baharov",

"205",

"4",

"Johnny Depp",

"45",

"Will Smith",

"29",

"Jet Lee",

"10",

"Matthew Mcconaughey",

"39"])