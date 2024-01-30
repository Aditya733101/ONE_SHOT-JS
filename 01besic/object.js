// object: object is collection of properties and properties is an association between a name or key value 
const mySym = Symbol("key")
let objNew = {
    fname : "Aditya",
    lname:"sarkar",
    [mySym] :"mykey1",
    age:23,
    address:"gangarampur",
    gmail:"aditya@gmail.com",
    isright:true,
    sayhello:function(){
        console.log("my name is "+this.fname+this.lname);
    }
}
// objNew.gmail="adityachatgpt@gmail.com";
// console.log(objNew);
// Object.freeze(objNew);//object value are freeze not change;
// objNew.gmail="bittusarkar@gmail.com";
// console.log(objNew);




// console.log(objNew.gmail);
// objNew.sayhello();// object function call
// console.log(objNew);