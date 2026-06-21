//primitive
// 7types : string , number , boolean , null , undefined , symbol , bigint

//reference types/nonprimitive
// object , array , function    

//symbol
const id = Symbol("id");
const anoid = Symbol("id");
console.log(id === anoid);//false

const bigno = 1234567890123456789012345678901234567890n;    
const heroes = ["spiderman", "ironman", "thor"];    
let myobject = {
    name : "spiderman",
    age : 22,
}
const myfunction = function(){
    console.log("hello");
}   

console.log(typeof id);


// there are 2 types of memeory in javascript ---stack memory and heap memeory
// int primitive datatypes stack memory is used 
// in non primitive datattype heap memory is used
//stack memory creates the copy of data in memory while heap memory creates the reference of data 
let name = "hitesh";
let another = name;
another = "chai";
console.log(name);
console.log(another);
let user = {
    email: "user@google.com",
    upi :"user@ybl"
}
let user2 = user;
user2.email = "hitesh@google.com";
console.log(user.email)//hitesh@google.com
console.log(user2.email);//hitesh@google.com
