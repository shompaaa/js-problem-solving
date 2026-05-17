const phones = [
    {name:'Samsung S24 Ultra',price: 155000, camera: '100MP',color: 'Black'},
    {name:'Infinix',price: 35000, camera: '40MP',color: 'Brown'},
    {name:'Iphone 17 Pro Max',price: 185000, camera: '100MP',color: 'Orange'},
    {name:'Samsung',price: 85000, camera: '80MP',color: 'White'},
    {name:'Oppo',price: 22000, camera: '500MP',color: 'Black'},
]


function getCheapestPhone(phones){
    let cheapest = phones[0]
    for(const phone of phones){
        if(phone.price < cheapest.price){
            cheapest = phone
        }
    }
    return cheapest
}

const cheap = getCheapestPhone(phones)
console.log('The Cheapest Phone is:', cheap);