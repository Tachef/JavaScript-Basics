function graduation(input) {
    let index = 0; 
    let name = input[index]; // Прочитане на името на ученикът
    index++;

    let i = 1; // Брояч за класовете на ученика. От първи клас !
    let sumGrade = 0; // Брояч за всичките оценки 
    let badGradeCounter = 0; // Брояч за слабите оценки

    while(i <= 12) { // Итерация до 12 клас .
        let grade = Number(input[index]); // За всяка итерация получаваме една оценка и инкрементираме.
        index++;

        if (grade < 4.00) { // След като сме инкрементираме започваме да проверяваме оценката да ли е по-малка от 4.00 и ако е инкрементираме badGradeCounter с 1 единица 
            badGradeCounter++;
            if (badGradeCounter === 2) { // Ако има 2- лоши оценки, цикъла приключва и програмата отпечатва, че ученикът е изключен.
                break;
            }
            continue; // Ако върне false, ще ни върне в while(i <= 12) и ще започне нова проверка.
        }
        sumGrade += grade; // Добавяме оценката към сумата от оценки  и инкрементираме (прехвърляме ученикът в следващия клас)
        i++;
    }
    if (i < 12) {
        console.log(`${name} has been excluded at ${i} grade`)
    } else {
        let avg = sumGrade / 12
        console.log(`${name} graduated. Average grade: ${avg.toFixed(2)}`);
    }
}
graduation (["Gosho",

"5",

"5.5",

"6","5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])