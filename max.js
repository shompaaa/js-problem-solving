//Get the maximum value from the two:

const dishaScore = 85;
const salmaScore = 58;
if(dishaScore> salmaScore){
    console.log('Disha is the Winner');
}
else{
    console.log('Salma is the Winner');
}

//With function
function getMax (num1,num2){
    if(num1>num2){
        return num1;
    }
    return num2;
}

const maxValue = getMax(120, 220)
console.log("The max value is:", maxValue);

//Function With Three Numbers
function getMaxFromThree(num1,num2,num3){
    if(num1> num2 && num1 > num3){
        return num1;
    }
    else if(num2 > num1 && num2 > num3){
        return num2
    }
    return num3
}

const max = getMaxFromThree(120,250,220)
console.log("The max value of three is:",max);


//Get the maximum value from unlimited numbers
const ultimateMax = Math.max(250,520,45,125,750,920,1500)
console.log("The Ultimate max value is:", ultimateMax);