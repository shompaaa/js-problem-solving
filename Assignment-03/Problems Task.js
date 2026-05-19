/** Problem -01 ( Divide the Asset ) */
var area = 2060;
var siblings = 2;

var landAreaPerPerson = area / siblings;
console.log(landAreaPerPerson);



/** Problem -02 ( Cycle or Laptop ) */
var money = 25000;
if(money >= 25000 ){
    console.log("Laptop");
}
else if(money>= 10000){
    console.log("Cycle");
}
else{
    console.log("Chocolate");
}


/** Problem -03 ( Medicine Planner ) */
var lastDay = 11 ;
for(let day = 1; day <= lastDay; day++){
    if(day % 3 ===0){
        console.log(day, "-Medicine");
    }
    else{
        console.log(day, '-Rest');
    }
}


/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
if(fileName.includes('.pdf') || fileName.includes('.docx') || fileName.startsWith('#')){
    console.log('Store')
}
else{
    console.log('Delete')
}


/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
const getName = student.name
const getRoll = student.roll
const getDept = student.department
const generatedMail = getName+getRoll
console.log(generatedMail+'.'+getDept+'@ph.ac.bd');



/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
var currentSalary = startingSalary * Math.pow(1.05, experience);

console.log(currentSalary.toFixed(2));