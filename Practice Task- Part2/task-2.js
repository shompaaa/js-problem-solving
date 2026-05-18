//Find the friend with the smallest name.
const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed',]

function getSmallestName(names){
    let smallest = names[0]
    for(const name of names){
        if(name.length < smallest.length){
            smallest = name
        }
    }
    return smallest
}

const smallestName = getSmallestName(friends)
console.log(smallestName);
