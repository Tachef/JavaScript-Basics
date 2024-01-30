function fruitShop(input) {

    let fruit = input[0];
    let dayWeek = input[1];
    let count = Number(input[2]);
    let price = 0;

    if (dayWeek === "Monday" || dayWeek === "Tuesday" || dayWeek === "Wednesday" || dayWeek === "Thursday" || dayWeek === "Friday") {
        if (fruit === "banana") {
            price = count * 2.50;
            console.log(price.toFixed(2));
        } else if (fruit === "apple") {
            price = count * 1.20;
            console.log(price.toFixed(2));
        } else if (fruit === "orange") {
            price = count * 0.85;
            console.log(price.toFixed(2));
        } else if (fruit === "grapefruit") {
            price = count * 1.45;
            console.log(price.toFixed(2));
        } else if (fruit === "kiwi") {
            price = count * 2.70;
            console.log(price.toFixed(2));
        } else if (fruit === "pineapple") {
            price = count * 5.50;
            console.log(price.toFixed(2));
        } else if (fruit === "grapes") {
            price = count * 3.85;
            console.log(price.toFixed(2));
        } else {
            console.log("error");
        }
    } else if (dayWeek === "Saturday" || dayWeek === "Sunday") {
        if (fruit === "banana") {
            price = count * 2.70;
            console.log(price.toFixed(2));
        } else if (fruit === "apple") {
            price = count * 1.25;
            console.log(price.toFixed(2));
        } else if (fruit === "orange") {
            price = count * 0.90;
            console.log(price.toFixed(2));
        } else if (fruit === "grapefruit") {
            price = count * 1.60;
            console.log(price.toFixed(2));
        } else if (fruit === "kiwi") {
            price = count * 3.00;
            console.log(price.toFixed(2));
        } else if (fruit === "pineapple") {
            price = count * 5.60;
            console.log(price.toFixed(2));
        } else if (fruit === "grapes") {
            price = count * 4.20;
            console.log(price.toFixed(2));
        } else {
            console.log("error");
        }
    }
    else{
        console.log("error")
    }

}
fruitShop(["appl", "gosho", "2"])