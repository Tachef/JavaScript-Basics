function worldSwimmingRecord(input) {
    let record = Number(input[0]); //Record in sec
    let distance = Number(input[1]); // Distance in meters
    let timePerMeter = Number(input[2]); // Time for swimming/1 meter


    let neededTime = distance * timePerMeter;
    let delay = Math.floor(distance / 15) * 12.5 // Total delay
    let finishTime = neededTime + delay;

    if(finishTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${finishTime.toFixed(2)} seconds.`);
    } else{
        console.log(`No, he failed! He was ${(finishTime - record).toFixed(2)} seconds slower. `);
    }
}
worldSwimmingRecord(["10464", "1500", "20"]);
