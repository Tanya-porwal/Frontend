// console.log((null||0)||(22&&1)&&("yuu"&& *));
// let age=14 ;
// if (age>=13 && age<=19) {
//     console.log("teenager");
// }
// else {
//     console.log("Not a teenager");
//}
// let n=5;
// for (let i =n; i >0; i--) {
//     let str="";
//     for(let j=i-1;j>0;j--){
//         str += "*";
//         // console.log(str); 
//     }
//      console.log(str); 
//  }

// let age =15;
// if(age<=18 && age>=12){
//     console.log("teen");

// }
// else{
//       console.log("Not teen"); 

// }
// let arr=[10,20,30];
// // for(let i=0;i<arr.length;i++){
// //     console.log(i);
// // }
// for(let num of arr){
//     console.log(num);
// }
const calculate = function(opr,n1,n2,...rest){
    switch (opr) {
        case "add":
            return overallsum ;
            break;
        case "subtract":
            return overalldiff;
            break;
        case "multiply":
            return overallproduct ;
            break;
        case "division":
            return overalldiv ;
            break;
        default:
            return "nothing ";
            break;
    }
    let overallsum=n1+n2;
    let overalldiff=n1-n2;
    let overallproduct=n1*n2;
    let overalldiv=n1/n2;
    for (let i = 0; i < rest.length; i++) {
        overallsum += rest[i]; 
    }
    for (let i = 0; i < rest.length; i++) {
        overalldiff -= rest[i]; 
    }
    for (let i = 0; i < rest.length; i++) {
        overallproduct *= rest[i]; 
    }
    for (let i = 0; i < rest.length; i++) {
        overalldiv /= rest[i]; 
    }
}        
console.log(calculate(1,2,"add"));
console.log(calculate(1,2,"subtract"));
console.log(calculate(1,2,"multiply"));
console.log(calculate(1,2,"division"));




