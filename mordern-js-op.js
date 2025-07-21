
        let num = 12;
        console.log(num);
        console.log(typeof num);
        console.log("*************************************");
        let Name = "Mayur";
        console.log(Name);
        console.log(typeof Name);
console.log("***************************************");
        let var1 = true;
        console.log(var1);
        console.log(typeof var1);

        console.log("******************************************");
        let ud;
        console.log(ud);
        console.log(typeof ud);  
        
        console.log("*************************************");
        let nu = null;
        console.log(nu);
        console.log(typeof nu);
        console.log("*****************************************");

        let big = 12345677890887777766756745468858n;
        console.log(big);
        console.log(typeof big);
console.log("***********************************");

let uniId = Symbol(123216);
console.log(uniId);
console.log(typeof uniId);

console.log("***********************************");

//nullish coelscheing

// '??' this is using you can display our defaul, out put like below

let UserName ;

console.log("Good Morning ! " +( UserName ?? "Sir") + " How are you" );

console.log("************************************************");

//ternary operator


let ternary = "mayur";
console.log(ternary === "mayur" ? "this is mayur" : "this is not mayur");
console.log("********************************************");
let ternary1 = true;
console.log(ternary1 === true ? "yes its true" : "no this is false");
//this operator work like same as if else sataement 

console.log("****************************************************");


// exponential operator 

let exponential = 22;
console.log( exponential ** 3); // cube of 22 (we can find the cube any value to use this method)


console.log("******************************************");

// concatenation operator

let js = "javascript";
console.log(js + " mayur");

let js1 = 1232;
console.log(js1 +  ` 123223213`) 

//some exaple for concatenation 

console.log("***************************************");


//string coersion 

let str1 = 12;
let str2 = 13;

console.log(str1 + str2);// 25 is perform opration 

console.log(str1 + "2"); // some you can add the value is add directly like this 122 one side number and secound side string it is not peerform opration 



/*

outputs : ==>

12
number
*************************************
Mayur
string
***************************************
true
boolean
******************************************
undefined
undefined
*************************************
null
object
*****************************************
12345677890887777766756745468858n
bigint
***********************************
Symbol(123216)
symbol
***********************************
Good Morning ! Sir How are you
************************************************
this is mayur
********************************************
yes its true
****************************************************
10648
******************************************
javascript mayur
1232 123223213
***************************************
25
122  */