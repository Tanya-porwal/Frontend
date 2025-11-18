const arr=[1,3,5,66,7,9,40,99,33,7];
arr.push(67);
console.log(arr);
const last = arr.pop();
console.log(last);
console.log(arr);
arr.unshift(24);
console.log(arr);
// arr.shift();
const lastt= arr.shift();
console.log(lastt);
console.log(arr);
const ans= arr.find((num) => {
    return num%33===0;
})
console.log(ans);
const ans1= arr.findIndex((num) => {
    return num%33===0;
})
console.log(ans1);
const ans2= arr.filter((num) => {
    return num%33===0;
})
console.log(ans2);
const ans3= arr.map((num) => {
    return num* 2 ;
})
console.log(ans3);
const ans4= arr.map((num,index) => {
    return num* index ;
})
console.log(ans4);
