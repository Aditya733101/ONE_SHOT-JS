// foreach loop: - 

// const arr = ["aditya","bittu","megha"];
// arr.forEach((element)=>{
//   console.log(element);
// })


//for of loop: - 
// const arr2 = [ 1,2,3,4,5];
// for (const iterator of arr2) {
//   console.log(iterator*iterator);
// }

const obj = {
  name:"aditya",
  lname: "sarkar",
  age:9,
  gmail:"adityasarkar@mil.com"
}
//for in loop hold the key object and array
for (const key in obj) {
  // console.log(`${key} :- ${obj[key]}`);
}
//for in loop used to for in loop :
const arr = [1,3,4,5,6];
for (const key in arr) {
  // console.log(`${key} :- ${arr[key]}`);f
}
// array object :-

const objNew = [
  {
    languageNmae : "javascript",
    file : "js"
  },
  { languageNmae : "java",
    file : "j"
  },
  { languageNmae : "cpp",
    file : "c++"
  }
]
objNew.forEach((item)=>{
  console.log(item.languageNmae);
})
