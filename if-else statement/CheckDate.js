// Get command line arguments
// console.log(process.argv);

// [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'C:\\Users\\harsh\\Desktop\\CG-BRIDGELABZ JAVA FULL STACK PROGRAM\\CG-BRIDGELAB (JS programming)\\if-else statement\\CheckDate.js',
//     '24',
//     '04'
// ]   To remove first two arguments we use slice method

const args = process.argv.slice(2);

if (args.length !== 2) {
    console.log("Please provide day and month as command line argument!");
    process.exit(1);
}

let day = parseInt(args[0]);
let month = parseInt(args[1]);

// Check if the date is within March 20 - June 20
const isInSpring = (month === 3 && day >= 20) ||
    (month === 4) ||
    (month === 5) ||
    (month === 6 && day <= 20);

console.log(isInSpring);