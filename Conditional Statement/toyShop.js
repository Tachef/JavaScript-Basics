function toyShop(input) {
    let priceTravel = Number(input[0]);
    let countPuzzle = Number(input[1]);
    let countDolls = Number(input[2]);
    let countTeddyBears = Number(input[3]);
    let countMinions = Number(input[4]);
    let countTrucks = Number(input[5]);

    totalToys = countPuzzle + countDolls + countTeddyBears + countMinions + countTrucks;
    totalPrice = countPuzzle * 2.60 + countDolls * 3 + countTeddyBears * 4.10 + countMinions * 8.20 + countTrucks * 2;
    if(totalToys >= 50) {
        let discount = totalPrice * 0.25;
        totalPrice = totalPrice - discount;
    }

    let rent = totalPrice * 0.10;
    profit = totalPrice - rent;

    if(profit >= priceTravel) {
        console.log(`Yes! ${(profit - priceTravel).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(priceTravel - profit).toFixed(2)} lv needed.`);
    }

}
toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"])

