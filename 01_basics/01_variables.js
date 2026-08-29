const accountid = 144553;
let email = "ahujap315";
var pass = "12345";
/* prefer not to use var, as it is function scoped and can lead to unexpected behavior. Use let for variables that may change and const for variables that should not change. */
city = "jaipur";
let state;
//accountid = 2; -- not allowed
email = "hc@hc";
name2 = "paras";

pass = "123";
city = "morada";
console.log(email); 
console.table([email, pass, city , state]); 
console.log(accountid);