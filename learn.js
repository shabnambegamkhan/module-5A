

 // kisi sentance ko chota krke likhne ke liye -----------


// const input=require("readline-sync")
// function data(name,maxlength){

// if(name.length>maxlength){
//     return name.substring(0,maxlength) + "..."
// }
// // return name
// console.log(name);
// }
// let name=input.question("enter the num = ")
// data(name)




// -------- FUNCTION CALLBACK ----------

// function abc(callback){
//     setTimeout (function(){
//         console.log('abc');
//         callback()
//     },2000)
    
// }

// function abc2(){
//     setTimeout (function(){
//         console.log('abc');
//     },5000)
    
// }

// abc2(abc)



//---------- PROMISE METHODE ---------

const obj = new Promise()

function abc(a,b){
    //code 
    let x=4;
    let y=8;
    if(x>y){
        let msg="done"
        a(resolve)
    }
    else{
        b("solve")
    }
}