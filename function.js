let a = 100;

function a1(){
    console.log(a);
}
a1();
a = 200;
a1();
a = 300;
a1();

/*

Function

    It is a non-primitive datatype in JS
    It is used to create reusable code blocks which can be used whnever and wherever necessary
    It prevents the code from getting lengthy and errors from re-writing the same code lines.
    The function works in two stages:
    1. Declaration: We write the code block to be executed in this phase.
    2. Calling: We exeute the given block using the name of the function


    Syntax:


    Declaration

    function function_name(){
        Code block
    }


    Calling
    function_name()



    */

 let no1 = +prompt("enter number one");
 let no2 = +prompt("Enter number two");
 let no3 = +prompt("Enter number three");

function bigNo( a, b , c){
if(a >= b && a >= c){
    console.log("the big no is" + a);
}  else if (b >= a && b >= c){
console.log("the big number is " + b);  
} else {
    console.log("the big number is " +c);
}
}
bigNo(no1,no2,no3);


let big1 = (a, b, c) =>{
    if(a >= b && b >=a){
        console.log(a);
    } else if(b >= a && b >= c){
        console.log(b);
    } else{
        console.log(c);
    }
}

big1(no1, no2, no3);

let theFunction = function(a, b, c){
    if(a >= b && b >=a){
         console.log(a);
     } else if(b >= a && b >= c){
         console.log(b);
     } else{
         console.log(c);
    }
} 
theFunction(no1, no2, no3);

// selfe invoking function 
(function(a,b, c){
    if(a >= b && b >=a){
         console.log(a);
     } else if(b >= a && b >= c){
         console.log(b);
     } else{
         console.log(c);
    }
})(no1, no2, no3);



function countVowel(str){
    let count = 0;
for(const char of str){

    if(char === "m" || char === "a" || char === "y" || char === "u" || char === "r"){
        count++;
    }
 console.log(char);
}
console.log(count);
}

countVowel("mayur");



function mayur(){
    let a1 = 12;
    let a2 = 12;
    let b1 = a1 + a2;
     return b1;
   
}

//console.log(b1);// this is not valid 

console.log(mayur());//we can console the direct function not a variable 

let  jsa = (function js(){
    let j1 = 3;
    let j2 = 9;
    let j3 = j1 + j2;
    return j3;
})

console.log(jsa());



let name1 = () =>{
    let j1 = 3;
    let j2 = 9;
    let j3 = j1 + j2;
    return j3;
}

console.log(name1());