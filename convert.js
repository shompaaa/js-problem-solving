
// Task-1: Inch to Feet

function inchToFeet(inch){
    const feetTotal = inch / 12;
    const feetNumber = parseInt(feetTotal);
    const inchNumber = inch % 12;
    const result = `${feetNumber} feet ${inchNumber} inch`;
    return result;
}

const myHeight = inchToFeet(75);
console.log(myHeight);

// Task-2: Mile to Kilometer

function mileToKilo(mile){
    const kilometer = mile * 1.60934;
    return kilometer;
}

const kilo = mileToKilo(5);
console.log(kilo);