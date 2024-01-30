function tradeCommissions(input) {
    let city = input[0];
    let sales = Number(input[1]);
    let commission = 0;

    if (city === "Sofia") {
        if (sales >= 0 && sales <= 500) {
            commission = 5;
        } else if (sales > 500 && sales <= 1000) {
            commission = 7;
        } else if (sales > 1000 && sales <= 10000) {
            commission = 8;
        } else if (sales > 10000) {
            commission = 12;
        } else {
            console.log("error");
        }
    } else if (city === "Varna") {
        if (sales >= 0 && sales <= 500) {
            commission = 4.5;
        } else if (sales > 500 && sales <= 1000) {
            commission = 7.5;
        } else if (sales > 1000 && sales <= 10000) {
            commission = 10;
        } else if (sales > 10000) {
            commission = 13;
        } else {
            console.log("error");
        }
    } else if (city === "Plovdiv") {
        if (sales >= 0 && sales <= 500) {
            commission = 5.5;
        } else if (sales > 500 && sales <= 1000) {
            commission = 8;
        } else if (sales > 1000 && sales <= 10000) {
            commission = 12;
        } else if (sales > 10000) {
            commission = 14.5;
        } else {
            console.log("error");
        }
    } else {
        console.log("error");
    }
        if( commission !=0) {
    let newCommissions = (sales * commission / 100 );
    console.log(newCommissions.toFixed(2));
        }
}
tradeCommissions(["Sofia", "1500"])

