//Find the lowest number in the array below.

const heights = [167, 190, 120, 165, 137];

function getLowest(numbers){
    let lowest = numbers[0]
    for(const number of numbers){
        if(number < lowest){
            lowest= number
        }
    }
    return lowest
}

const lowestNumber = getLowest(heights)
console.log('The Lowest Number is:', lowestNumber);
