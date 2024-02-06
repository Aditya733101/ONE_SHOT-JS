// map() : create a new array by applying a function   each element 
const arrNum = [1,2,3,4,5,6,7]
const myArr = arrNum
                    .map((item)=>item+10)
                    .map((item)=>item+1)
                    .filter((item)=>item>15)
console.log(myArr);
 




















