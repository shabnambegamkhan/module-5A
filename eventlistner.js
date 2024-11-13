

const input=require("readline-sync")

// =================callback function ===================


// function add(num1,num2){
//     console.log(num1+num2)

//   }
//   let a=10;
//   let b=20;
// //   add(a,b)
  

// function change(c,d){
// console.log(c+d);

// }
// change(20,30)

// function call(){

// }

/////////////////////////////////

// function one(callback){

//   setTimeout(()=>{
//     console.log("one");
//     callback (),1000});
    
  
//     function two(){
//       console.log("two");
      
//     }
//     one(two)
// }

/////////////////////////// PROMISE  //////////////////////


// let p=new Promise((resolve,reject)=>{
//   reject("not found")
// })
// p.then((responce)=>{
//   console.log(responce);
// })
// .catch((reject)=>{
//   console.log(reject);
// })


// const a = `ef84162e0b69444ebe66b3a57be592d9`;
//   const url = `https://www.google.com/search?q=wallpapre&oq=wallpapre&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg70gEIMzI0MWowajeoAgiwAgE&sourceid=chrome&ie=UTF-8`     

// fetch(url)
// .then(response=> response.json())
// .then(data => console.log(data))
// .catch(error => console.log("not found"))



const url = `https://openlibrary.org/search.json?q=the+lord+of+the+rings&page=2`;

fetch (url)
.then(response=> response.json())
.then(data=> console.log(data))
.catch(error=> console.log(" result not found"));