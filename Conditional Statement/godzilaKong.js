function godzillavsKong(input) {
    budgetMovie = Number(input[0]);
    countStatics = Number(input[1]);
    pricePerStatic = Number(input[2]);

    priceClothes = countStatics * pricePerStatic;
    priceDecor = budgetMovie * 0.10;

    if(countStatics >150) {
        let discount = priceClothes * 0.10;
        priceClothes = priceClothes - discount;
    }

    expenses = priceDecor + priceClothes;

    if(expenses > budgetMovie) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(expenses - budgetMovie).toFixed(2)} leva more.`);
    }
     else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budgetMovie - expenses).toFixed(2)} leva left.`);
    }
}
godzillavsKong(["9587.88",
"222",
"55.68"])

