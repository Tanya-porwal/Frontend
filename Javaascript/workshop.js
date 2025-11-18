// var name ="Alice";
// var  name ="Bob";
// console.log(name);// error nhi aaega var mai but overwriting ho jaegi 
// let namee ="Alice";
// // let  namee ="Bob"; ///error aaega 
// console.log(name);
// const isOdd= n =>{
//     if(n%2!=0){
//         console.log("true") ;
//     }
//     console.log("false");
//     }
// isOdd(14);

// const isOdd= n =>n%2=== 1;
// isOdd(14);

// const greet = name =>"Hello, "+ name +"!";
// const add = (a,b)=>a+b ;
// greet("bhumi");
// add(1,4);

// const no=[1,4,7,9,6];
// const squares = no.map(num => num*num);
// console.log(no);
// console.log(squares);

// const name = "tanya";
// const age = 18 ;
// console.log(`Hello ,my name is ${name} and my age is ${age} and I was born in ${2025-age}.`);
// const points =10 ;
// const code = `Hey User 
// You have ${points} points!`
// console.log(code);

// const person={
//     firstName:"Tanya",
//     lastName :"Porwal",
//     age:21 ,
// }
// const names= ["tanya","bhumi","nancy","vaibhav","abhay","rashi"];
// const [ , ,hii, ,yes]= names ;
// console.log(hii);// array destructuringgg 

let count =10 ;
const timer = setInterval(()=>{
    console.log("Blast "+ count);
    count-- ;
    if(count===0)clearInterval(timer);
    
})
console.log("boom");

