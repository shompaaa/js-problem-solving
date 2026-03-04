function noDuplicate(numbers){
    const unique = [];
    for(const number of numbers){
        if(unique.includes(number) === false){
            unique.push(number);
        }
    }
    return unique;
}


const numbers = [12, 25, 58, 5, 12, 84, 58, 7, 5];
const uniqueNumber = noDuplicate(numbers);
console.log(uniqueNumber);