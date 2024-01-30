function shopping(input) {
    budget = Number(input[0]);
    countGpu = Number(input[1]);
    countCpu = Number(input[2]);
    countRam = Number(input[3]);

    let gpuPrice = countGpu * 250;
    let cpuPrice = countCpu * (gpuPrice * 0.35);
    let ramPrice = countRam * (gpuPrice * 0.10);

    let totalSum = gpuPrice + cpuPrice + ramPrice;

    if(countGpu > countCpu) {
        discount = totalSum * 0.15;
        totalSum -= discount;
    }
    if(budget >= totalSum) {
        console.log(`You have ${(budget - totalSum).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalSum - budget).toFixed(2)} leva more!`);
    }
}
shopping(["900", "2", "1", "3"]);