// let str="jaipur";
// let i=0;
// while(i< str.length){
//     console.log(str[i])
//     i++
// }
// let str="jaipur";
// let i=0;
// let bag=""
// while(i< str.length){
// bag=bag+str[i]+" "
//     i++
// }
// console.log(bag)
// let arr=[1,2,3,4,5];
// let i=0;
// while(i< arr.length){
//     console.log(arr[i])
//     i++
// }
// let arr=[1,2,3,4,5];
// let i=0;
// let bag="";
// while(i< arr.length){
// bag=bag+arr[i]+" " 
//    i++
// }
// console.log(bag)
// let arr=[1,2,3,4,5]
//  let sum=0;
//  i=0;
//  while(i< arr.length){
//     sum=sum+arr[i]
//     i++
//  }
// console.log(sum)
// let arr=[1,2,3,4,5,6,2,10]
// let i=0;
// while(i< arr.length){
//     if(arr[i]%2==1){
//         console.log(arr[i])
//     }
//     i++
// }
// let arr=[1,2,3,4,5,6,2,10]
// let i=0;
// while(i< arr.length){
//     if(arr[i]%2==0){
//         console.log(arr[i])
//     }
//     i++
// }
// let arr=[1,3,2,10,2,4,2]
// let i=0;
// let count=0;
// while(i< arr.length){
//     if(arr[i]==2){
//         count++
//     }
//     i++
// }
// console.log(count)
// let arr=[1,6,2,10,2,4]
// let i=0;
// let sum=0;
// while(i< arr.length){
//     if(arr[i]%2==1){
//         sum=sum+arr[i]
//     }
//     i++
// }
// console.log(sum)
// let arr=[1,6,2,10,2,4]
// let i=0;
// let sum=0;
// while(i< arr.length){
//     if(arr[i]%2==0){
//         sum=sum+arr[i]
//     }
//     i++
// }
// console.log(sum)
let arr=[1,6,2,10,2,4]
let i=0;
let count=0;
let sum=0;
let ave;
while(i<arr.length){
    if(arr[i]%2==0){
        count++
        sum=sum+arr[i]
    }
    i++
}
console.log(count);
console.log(sum);
console.log(ave=sum/count)


