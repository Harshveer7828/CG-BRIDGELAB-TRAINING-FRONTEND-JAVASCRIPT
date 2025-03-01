// 1. Feet to Inch
// 2. Feet to Meter
// 3. Inch to Feet
// 4. Meter to Feet

const convertLength = (option, value) => {
    switch (option) {
        case 1: return `${value} feet = ${value * 12} inches`; 
        case 2: return `${value} feet = ${(value * 0.3048).toFixed(2)} meters`; 
        case 3: return `${value} inches = ${(value / 12).toFixed(2)} feet`;
        case 4: return `${value} meters = ${(value * 3.28084).toFixed(2)} feet`; 
        default: return "Invalid option (Choose between 1-4)";
    }
};

const option = parseInt(process.argv[2]);
const value = parseFloat(process.argv[3]);
console.log(convertLength(option, value));
