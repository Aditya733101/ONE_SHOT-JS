// reduce : Reduces the array to a single value by applying a function.
const arrMy = [1,2,3,4,5,6]
 const result = arrMy.reduce((acc,item)=>{ return acc+item},0)
//  console.log(result);
const shopingCart = [
  {
    item:'bag',
    price:2000
  },
   {
    item:'leptop',
    price:2009
  },
   {
    item:'pant',
    price:2000
  },
]

const allMoney = shopingCart.reduce((acc,item)=>{
  return acc+item.price
},0)
console.log(allMoney);