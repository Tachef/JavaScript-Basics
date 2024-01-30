function accountBalance(input) {
    let account = 0; // Започвам с нула лева 
    let index = 0; // n- брой итерации !
    let command = input[index]; // Пишем тази променлива, защото не знам с каква стойност ще е 
    index++;

    while(command !== "NoMoreMoney") {
        let money = Number(command); // Взимам ги от command = input[index], обръщам ги към число и ги запазвам тука 
        if (money < 0 ) { // Ако парите са по- малко от нула, отпечатваме конзол. лог и  цикъла  трябва да спре с break; !!!
            console.log(`Invalid operation!`);
            break;
        } 
        account += money; // получаме пари и ги внасяме в сметката 
        console.log(`Increase: ${money.toFixed(2)}`);

        command = input[index]; // Променяме стойността на променливата в края на цикъла. 
        index++;
    }

    console.log(`Total: ${account.toFixed(2)}`);


}
accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);