let score = "33abc";//nan
let score2 = null;//0
let score3 = undefined;//nan
let score4 = true;//1
console.log(typeof score); // number
console.log(typeof(score));
let valinnumber = Number(score);
console.log(typeof valinnumber);
console.log(valinnumber);

//"33" = 33
//"33abac" nan
// true = 1; false =0;
let islogged = 1;
let boole = Boolean(islogged);
console.log(boole);
let id2 = "";
console.log(Boolean(id2));
// 1->true 0->false 
// "" ->false
//"hitesh" ->true
let some = 33;
let stri = String(some);
console.log(stri);
console.log(typeof stri);


/* operations */
let value = 3;
let negval = -value;
console.log(negval);
console.log(2+2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);
let str1 = "hello";
let str2 = " Paras";
let str3 = str1 +str2;
console.log(str3);
console.log("1" + 2);
console.log(1 + "2");
console.log("1" +2 +2);
console.log(1+2 + "2");
console.log(true);
console.log(+true);
console.log(+"");
let n1 , n2 , n3;
n1 = n2 = n3 = 2+2;
let n4 = 100;
console.log(n4++);
console.log(++n4);
