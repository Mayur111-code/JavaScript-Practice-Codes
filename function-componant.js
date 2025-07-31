
        /*Component of a function

    1. Parameter: It the idea that we give to the function in form of variables 
                  which will be used for performing desired operation.


    2. Arguments: This is the actual data that we pass in function call and which 
                  is used in paramters to perform the given operation
    

            */


        let n1 = +prompt("first");
        let n2 = +prompt("secound");

       let a1 = +prompt("name");
        let a2 = +prompt("Last");


        function mult( nm1,nm2){
           
            console.log(nm1 * nm2);
          
           console.log(nm1 / nm2);
            }
       
mult(n1,n2);

//mult(a1,a2);


let str = "mayur";

let str1 = "borse";

console.log(str.concat(str1));

console.log(str.slice(0,3));

console.log(str.replace("a","A"));

console.log(str.padStart("#"));
