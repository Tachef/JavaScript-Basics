function godzillavsKong(input) {
    let budget = Number(input[0]);
    let staticpeople = Number(input[1]);
    let staticClothesPeople = Number(input[2]);

    let totalClothesPrices = staticpeople * staticClothesPeople;

    let decor = budget * 0.10;

    if(staticpeople > 150) {
        let discount = totalClothesPrices * 0.10;
        totalClothesPrices = totalClothesPrices - discount;
    }

    let expenses = decor + totalClothesPrices;
    
}