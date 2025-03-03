// Function to genrate the three digit random number 
const generateThreeDigitNumber = () => {
    return Math.floor(Math.random() * 900) + 100;
}


let randomArray = [];
// Function to store random values in the array
const storeRandomValuesInArray = () => {
    let index = 0;

    for (let i = 0; i < 10; i++) {
        randomArray[index++] = generateThreeDigitNumber();
    }
    return randomArray;
}

// Function to find the second Largest  element
const findSecondLargest = () => {
    let largestValue = Number.MIN_VALUE;
    let secondLargest = largestValue;
    randomArray.forEach((value) => {
        if (largestValue < value) {
            secondLargest = largestValue;
            largestValue = value;

        }
    })
    return secondLargest;
}


// Function to find the second smallest element
const findSecondSmallest = () => {
    let smallestvalue = Number.MAX_VALUE;
    let secondSmallest = smallestvalue;
    randomArray.forEach((value) => {
        if (smallestvalue > value) {
            secondSmallest = smallestvalue;
            smallestvalue = value;
        }
    })

    return secondSmallest;
}


console.log(storeRandomValuesInArray());
console.log(findSecondLargest());
console.log(findSecondSmallest());



