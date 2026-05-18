/*Your task is to calculate the total budget required to buy electronics:
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
*/

function calculateElectronicsBudget(laptopQuantity,tabletQuantity,mobileQuantity){
    laptop = 35000
    tablet = 15000
    mobile = 20000

    const laptopPrice = laptop * laptopQuantity 
    const tabletPrice = tablet * tabletQuantity
    const mobilePrice = mobile * mobileQuantity
    const total = laptopPrice + tabletPrice + mobilePrice
    return total;
}

const totalBudget = calculateElectronicsBudget(1,3,5)
console.log(totalBudget);