const myNums = [1,2,3,4,5,6,7,8,9];
// with filter:

const result = myNums.filter((item)=>{
  return item>5;
})
// console.log(result);

// with out filter:
const newArr = []
myNums.forEach((num)=>{
  if (num > 4) {
    newArr.push(num);
  }
})
// console.log(newArr); 

const books = [
  { title: "Book One", genre: "History", publish: 1981, edition: 1989 },
  { title: "Book Two", genre: "Science", publish: 1983, edition: 1998 },
  { title: "Book Three", genre: "Bangla", publish: 1984, edition: 1922 },
  { title: "Book Four", genre: "English", publish: 1985, edition: 1976 },
  { title: "Book Five", genre: "Geography",publish: 1986,edition: 1976 },
  { title: "Book Six", genre: "Science", publish: 1988, edition: 1970 },
  { title: "Book Seven", genre: "Bangla", publish: 1955, edition: 1960 },
  { title: "Book Eight", genre: "English", publish: 1945, edition: 1928 },
  { title: "Book Nine", genre: "Geography", publish: 1945, edition: 1928 },
];
// const userBooks = books.filter((bk)=>bk.genre === "Bangla") 
const userBooks = books.filter((bk)=>{
 return bk.publish >= 1984 && bk.genre==="Bangla"
})

console.log(userBooks);