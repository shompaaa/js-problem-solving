const products = [
    {name: 'Shampoo', price: 300, quantity: 2},
    {name: 'Comb', price: 150, quantity: 3},
    {name: 'Shirt', price: 950, quantity:2 },
    {name: 'Pant', price: 1200, quantity: 3},
    {name: 'Shoe', price: 2500, quantity:2 },
]


function cartTotal(products){
    let total = 0
    for(const product of products){
        const thisProductCost = product.price * product.quantity
        total = total + thisProductCost
    }
    return total
}

const totalShoppingCost = cartTotal(products)
console.log("Total Cost:", totalShoppingCost);