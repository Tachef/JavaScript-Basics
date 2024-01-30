function salary(input) {
    let index = 0; // Не знам колко таба ще има, и за това създавам променлива с нулев индекс ! !
    let openTabs = Number(input[index]); // Прочитам колко таба ще има и след това инкрементирам индекса с единица, за да може да ми върне заплатата, а не отворените табове !!!
    index++;
    let salary = Number(input[index]); // Прочитам заплатата, която  ще получа и инкрементирам също.
    index++;

    for (let i = 0; i < openTabs; i++) { // преминавам през всички отворени табове.
        let currentTab = (input[index]); // Итерирам текущия таб !!!
        index++;
        if (currentTab === "Facebook") {
            salary -= 150;
        } else if (currentTab === "Instagram") {
            salary -= 100;
        } else if (currentTab === "Reddit") {
            salary -= 50;
        }
    }
    if (salary > 0) {
        console.log(salary);
    } else {
        console.log("You have lost your salary.")
    }
}
salary(["10",

"750",

"Facebook",

"Dev.bg",

"Instagram",

"Facebook",

"Reddit",

"Facebook",

"Facebook"])