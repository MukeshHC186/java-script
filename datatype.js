// ----primitives (value type)-------
// ------1.number----------
let a=10;
console.log(typeof a)
// ------2.string---------
let data="mukesh";
console.log(typeof data)
// ------3.boolean-----
let mohit=true;
let manish=false;
console.log(typeof mohit)
// -------4.undefined-------
let user;
console.log(typeof user)
// -----------5.null---------
let value=null;
let b=20;
if(b==20){
    user=100;
}
else{
    user=30;
}
console.log(user)
// ----Non primitives (value type)-------
// -----1.object---------
let person={
    firstname:"mukesh",
    lastname:"jat",
    age:30
}
console.log(typeof person)
console.log(person.firstname)
console.log(person.lastname)
console.log(person.age)
// ------2.array--------
let c=["mukesh","mohit",1,2,3]
console.log(typeof c)
// -----3.function----------
function mk (a){
    console.log(a)
}


