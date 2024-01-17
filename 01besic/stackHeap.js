
// stack(primitive) and heap(non-primitive(object,array,function))
// here this data store to stack memory
let name = "Aditya";
let name1 = name;
name = "sarkar";
console.log(name1);
console.log(name);

//here this data store to heap memory loaction
let obj = {
    name : "Aditya",
    gmail:"aditya@gmail.com"
    
};
let obj2 = obj;
obj2.name = "priyanka";
console.log(obj2.name);
console.log(obj.name);