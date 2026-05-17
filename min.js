//Get the minimum number fro an array

const phonePrices = [15000,25000,32000,175000,22000,220000, 12000]

function getMin(prices){
    let min = phonePrices[0]
    for(const price of prices){
        if(price < min){
            min = price
        }
    }
    return min;
}

const cheap = getMin(phonePrices)
console.log('The cheapest price of phone is:', cheap);