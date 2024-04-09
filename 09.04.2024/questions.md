while loop

1.starting point
2.end point
3.increment/decriment

syntex:-
        while(starting point<=end point){
            task
            3.increment/decriment
        }
questions:-

1. how to print all element of a string
       ----print vertical----
let str="jaipur";
let i=0;
while(i< str.length){
    console.log(str[i])
    i++
}
    ---print horizontal -------

let str="jaipur";
let i=0;
let bag=""
while(i< str.length){
bag=bag+str[i]+" "
    i++
}
console.log(bag)

2. how to print all element of an array

       ----print vertical----

let arr=[1,2,3,4,5];
let i=0;
while(i< arr.length){
    console.log(arr[i])
    i++
}
       ----print vertical----

let arr=[1,2,3,4,5];
let i=0;
let bag="";
while(i< arr.length){
bag=bag+arr[i]+" " 
   i++
}
console.log(bag)

3. how to find sum of array elements
 
 let arr=[1,2,3,4,5]
 let sum=0;
 i=0;
 while(i< arr.length){
    sum=sum+arr[i]
    i++
 }
console.log(sum)

4. print odd /even numbers inside an array

---------print odd numbers-----
let arr=[1,2,3,4,5,6,2,10]
let i=0;
while(i< arr.length){
    if(arr[i]%2==1){
        console.log(arr[i])
    }
    i++
}

---------print even numbers-----
let arr=[1,2,3,4,5,6,2,10]
let i=0;
while(i< arr.length){
    if(arr[i]%2==0){
        console.log(arr[i])
    }
    i++
}

5. how many times 2 present inside an array

let arr=[1,3,2,10,2,4]
let i=0;
let count=0;
while(i< arr.length){
    if(arr[i]==2){
        count++
    }
    i++
}
console.log(count)

6. sum of odd /even numbers of an array

----sum of odd numbers of an array-----
let arr=[1,6,2,10,2,4]
let i=0;
let sum=0;
while(i< arr.length){
    if(arr[i]%2==1){
        sum=sum+arr[i]
    }
    i++
}
console.log(sum)

----sum of odd numbers of an array-----
let arr=[1,6,2,10,2,4]
let i=0;
let sum=0;
while(i< arr.length){
    if(arr[i]%2==0){
        sum=sum+arr[i]
    }
    i++
}
console.log(sum)

7. 

let arr=[1,6,2,10,2,4]
let i=0;
let count=0;
let sum=0;
let ave;
while(i< arr.length){
    if(arr[i]%2==0){
        count++
        sum=sum+arr[i]
    }
    i++
}
console.log(count);
console.log(sum);
console.log(ave=sum/count)


