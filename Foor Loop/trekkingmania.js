function trekkingMania(input) {

    let groupsCount = Number(input[0]);

    let peopleGroup = 0;
    let totalPeople = 0

    let musala = 0;
    let monblan = 0;
    let kiliMandjaro = 0;
    let K2 = 0;
    let everest = 0;

    for (let i = 1; i < input.length; i++) {

        peopleGroup = Number(input[i]);
        if (peopleGroup <= 5) {
            musala += peopleGroup;
            totalPeople += peopleGroup;
            peopleGroup = 0;
        } else if (peopleGroup >= 6 && peopleGroup <= 12) {
            monblan += peopleGroup;
            totalPeople += peopleGroup;
            peopleGroup = 0;

        } else if (peopleGroup >= 13 && peopleGroup <= 25) {
            kiliMandjaro += peopleGroup;
            totalPeople += peopleGroup;
            peopleGroup = 0;
        } else if (peopleGroup >= 26 && peopleGroup <= 40) {
            K2 += peopleGroup;
            totalPeople += peopleGroup;
            peopleGroup = 0;
        } else if (peopleGroup >= 41) {
            everest += peopleGroup
            totalPeople += peopleGroup;
            peopleGroup = 0;
        }
    }
    console.log(`${((musala / totalPeople) * 100).toFixed(2)}%`);
    console.log(`${((monblan / totalPeople) * 100).toFixed(2)}%`);
    console.log(`${((kiliMandjaro / totalPeople) * 100).toFixed(2)}%`);
    console.log(`${((K2 / totalPeople) * 100).toFixed(2)}%`);
    console.log(`${((everest / totalPeople) * 100).toFixed(2)}%`);
}
trekkingMania(["5",

    "25",

    "41",

    "31",

    "250",

    "6"])