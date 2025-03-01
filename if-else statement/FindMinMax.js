// Function to get the 5 random number
let randomValues = [];

for (let index = 0; index < 5; index++) {
    randomValues[index] = Math.floor(Math.random() * 900) + 100;
}

// Calculating the maximum and minimum values from the array
var max = Number.MIN_VALUE;
var min = Number.MAX_VALUE;
randomValues.forEach((values) => {
    max = Math.max(max, values);
    min = Math.min(min, values);
})


console.log(randomValues);
console.log("Maximum value is: " + max + " Min values is: " + min);
