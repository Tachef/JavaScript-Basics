function sumOfTwoNumbers(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);
    let combinationCounter = 0; // Брояч за комбинации
    let isFound = false //  Дали съм намерил сума от числа, която да е равна на магическо число !

    for (let a = start; a <= end; a++) { // Преминаване от първото число до последното 
        for (let b = start; b <= end; b++) {
            let sum = a + b; // Сумиране на числата 
            combinationCounter++; //  добавя на  единица към брояча, ако намери комбинация !
            if(sum === magicNumber) { // Ако сумата е равна на магическото число ще отпечата 
                console.log(`Combination N:${combinationCounter} (${a} + ${b} = ${magicNumber})`);
                isFound = true // Ако намери комбинация ще го маркира и ще прекъсне цикъла заради break; !!!
                break; // Прекъсване на цикъла !
            }
        }
        if (isFound) { //В тялото на външния цикъл проверява да ли е намерил число, което е равно на магическото число и ако е намерил да прекъсни цикъла !
            break;
        }
    
    }

    if(!isFound){ // Ако не съм намерил комбинации отпечатай !
    console.log(`${combinationCounter} combinations - neither equals ${magicNumber}`)

    }

}
sumOfTwoNumbers(["1", "10", "5"]);