const input = 'Turpentines and turtles';
let vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];


for (let i = 0; i < input.length; i++) {
    if (input[i] === 'e') {
        resultArray.push(input[i]);
    } else if (input[i] === 'u') {
        resultArray.push(input[i]);
    }// console.log(i);
    for (let j = 0; j < vowels.length; j++) {
        // console.log(j);
        if (input[i] === vowels[j]) {
            resultArray.push(input[i]);
        }
    }
} 



console.log(resultArray);

const resultsString = resultArray.map(resultArray => {
    return resultArray.toUpperCase();
  });
console.log(resultsString);
