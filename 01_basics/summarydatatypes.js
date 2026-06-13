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