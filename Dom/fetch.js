// both async/await and Promise.then() are mechanisms thet can handle javascript asynchronous code 
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data[0].name);
//   })
//   .catch((error) => {
//     console.error("eror ocured ", error);
//   });
  //async/await we are also handle asynchronous  code that is 

  //  async function getData() {
  //   try {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     const data = await response.json();
  //     console.log(`name :- ${data[0].name} email:- ${data[0].email} `);
  //   } catch (error) {
  //     console.log("error occured ",error);
  //   }
  //   }
  //   getData();
  //lets fetch() resquest method GET,POST,DELETE
  var obj = {
    id :'1',
    name:'Aditya Sarkar',
    email:'Adityaexale@gamil.com'
  }
    async function getAPi() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
      } catch (error) {
        console.error("error code ",error);
      }
 
}
  

getAPi();

