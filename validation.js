function multiply(num1,num2){
    if(typeof num1 !=='number' || typeof num2 !== 'number'){
        return 'Please Provide a Number'
    }
    return num1 * num2
}

const result = multiply(5,7)
console.log(result);


function fullName(firsName,lastName){
    if(typeof firsName !=='string'){
        return "First Name should be String"
    }
    else if(typeof lastName !=='string'){
        return 'Last Name should be string'
    }
    const fullName = firsName + ' '+ lastName
    return fullName
}

const fName = fullName("Shompa", "Akter")
console.log('Full Name:',fName);


function getPrice(product){
    if(typeof product !=='object'){
        return 'Please Provide an object'
    }
    const price = product.price
    return price
}

const price = getPrice({name: 'Chulkani Molom', price: 120, color: 'Green'})
console.log(price);


function getSecond(numbers){
    if(Array.isArray(numbers)===false){
        return 'PLease provide an array'
    }
    const second = numbers[1]
    return second
}
const result2 = getSecond([1,45,25])
console.log(result2);