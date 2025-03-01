const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const num = parseInt(process.argv[2]);
console.log(num, "is", isPrime(num) ? "a Prime Number" : "Not a Prime Number");