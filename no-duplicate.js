function noDuplicate(numbers){
    const unique = [];
    for(const number of numbers){
        if(unique.includes(number) === false){
            unique.push(number);
        }
    }
    return unique;
}


const numbers = [12, 25, 58, 5, 12, 84, 58, 7, 5];
const uniqueNumber = noDuplicate(numbers);
console.log(uniqueNumber);



const num = [1,2,3,4];
const triple = num.map(item => item * 3);
console.log(triple);

const students = [
 {name:"Shompa", score:80},
 {name:"Rahim", score:40},
 {name:"Karim", score:90}
];

const eachStudent = students.filter(student => student.score > 50);
const stuName = students.map(student => student.name);
console.log(stuName);
console.log(eachStudent);