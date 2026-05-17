//Get the total price from an array of object:
const products = [
    {name: 'Shampoo', price: 300},
    {name: 'Comb', price: 150},
    {name: 'Shirt', price: 950},
    {name: 'Pant', price: 1200},
    {name: 'Shoe', price: 2500},
]

function getShoppingTotal(products){
    let sum = 0
    for(const product of products){
        sum = sum + product.price

    }
    return sum
}

const total = getShoppingTotal(products)
console.log("Total:",total);