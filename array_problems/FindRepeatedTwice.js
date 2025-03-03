// function to find the repeated number
let resultArray = [];
let index = 0;
const findRepeats = ()=>{
    for(let i = 1;i <= 100; i++){
        let copy = i;
        let firstNumber = i % 10;
        let secondNumber = Math.floor(i / 10);
        if(firstNumber === secondNumber)  resultArray[index++] = copy;
        
    }
    return resultArray;
}


console.log(findRepeats());

