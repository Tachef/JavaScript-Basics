function cake(input) {
    let index = 0;
    let size1 = Number(input[index]);
    index++;
    let size2 = Number(input[index]);
    index++;

    let totalSize = size1 * size2;
    let command = input[index];
    index++;
    let totalPieces = 0;

    while (command !== "STOP") {
        let currentPieces = Number(command)
        totalSize -= currentPieces;

        if (totalSize < 0) {
            break;
        }
        totalPieces += currentPieces;
        command = input[index];
        index++;
    }

    if (totalSize >= 0) {
        console.log(`${totalSize} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${Math.abs(totalSize)} pieces more.`);
    }
}
cake (["10",
"2",
"2",
"4",
"6",
"STOP"])