function cleverLilly(input) {
    let age = Number(input[0]);
    let washingMachine = Number(input[1]);
    let toyPrice = Number(input[2]);

    let money = 0;
    let toysCounter = 0;
    let currentMoney = 10; // колко пари ще получи за текущия рожден (Като условия за четен рожден ден !)

    for (let i = 1; i <= age; i++) { // Преминава през годините на Лили (от първия рожден ден до текущия ,който е "5") !!!
        if (i % 2 === 0) { //  Условие ако е четно !!!
            money += currentMoney; // добавя парите, които има !!!
            currentMoney += 10; // добавя 10 лв към парите, които има !!!
            money--; // Изважда на по единица на всяко четно (-1)  !!!
        } else {
            toysCounter++; // Добавя играчка с една единица (+1)
        }
    }

    money += toysCounter * toyPrice; // аналогично на money = money + (toysCounter * toysPrice);
    let diff = Math.abs(washingMachine - money); // Изполване на Math.abs, защото дава винаги положително число и разликата между двете числа !
    if (money >= washingMachine) { // Парите са повече или равни на цената на пералнята !
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }




}
cleverLilly(["5", "30", "6"]);