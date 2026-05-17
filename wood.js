//Get the total by multiplying their quantity

function woodQuantity(chairQuantity,tableQuantity,bedQuantity){
    const perChairWood = 3
    const perTableWood =10
    const perBedWood = 50

    const chairTotalWood = chairQuantity * perChairWood
    const tableTotalWood = tableQuantity * perTableWood
    const bedTotalWood = bedQuantity * perBedWood

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood

    return totalWood;
}

const wood = woodQuantity(20,25,15)
console.log('Total Wood Need:', wood,'cft');