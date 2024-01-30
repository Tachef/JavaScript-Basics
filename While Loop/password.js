function password(input) {
    let index = 0;
    let username = input[index];
    index++;
    let password = input[index];
    index++;
    
    while (true) {
        let tempPassword = input[index];
        index++;
        if (tempPassword === password) {
            console.log(`Welcome ${username}!`);
            break;
        }
    }
}
password(["Nakov", "1234", "Pass", "1324", "1234"])