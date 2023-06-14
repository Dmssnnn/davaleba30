let text = "dimitri, giorgi , vache ";
let result = text.slice(8,15);
let length = text.length;
let replace = text.replace("dimitri", "aja-aja")
const fruits = ["apple", "mango","blueberry"];
fruits.push("apple2");
fruits.shift();
fruits.unshift("dimitra");
fruits[0] = "zd";
const bijebi = ["jora","delpiero","alika"]
const gogoebi = ["gloria","gloria"];

const arrayOfNames = ["gio","jimi", "delpiero"];
const getSlice = arrayOfNames.slice(0,2);
console.log(getSlice)
const bijebiDaGogoebi = gogoebi.concat(bijebi);
console.log(bijebiDaGogoebi)
console.log(fruits);
console.log(replace)



// 3..დაამატეთ ობიექტების მასივი (სახელი, გვარი, ასაკი, პროფესია, ქულა); 
// map მეთოდის გამოყენებით შექმენით ახალი მასივი სადაც მხოლოდ სახელი და გვარი  იქნება. ['ნოკა ყიფიანი', 'გიორგი აბუთიძე'....]


const massiveOfObjects = [
    {
        name : 'dimitri',
        surname : 'alavidze',
        age : 19,
        profession : "web developer",
        grade : 80,
    },
    {
         name : 'givia',
        surname : 'alavidze',
        age : 89,
        profession : "back-end developer",
        grade :2,
    }    
]
const onlyNamesMassive = [];
// for ( i = 0 ; i < massiveOfObjects.length; i++){
//     onlyNamesMassive.push(massiveOfObjects[i].name);
//     const map
// }
const names = massiveOfObjects.map (massiveOfObjects => {
    onlyNamesMassive.push(massiveOfObjects.name)
    return onlyNamesMassive;
})
console.log(onlyNamesMassive)
const onlyGradesMassive = [];
const grades = massiveOfObjects.map (massiveOfObjects => {
    onlyGradesMassive.push(massiveOfObjects.grade)
    return onlyGradesMassive;
})
console.log (onlyGradesMassive);

const sum =onlyGradesMassive.reduce((accumulator, currentValue ) => {
    return accumulator * currentValue;
})
console.log(sum)

