 console.log(10 + 30);
        console.log(50 - 20);
        console.log(15 * 25);
        console.log(14 / 45); //Quotient
        console.log(55 % 13); //Remainder.


        console.log("*******************************");
        //  let add1 = 12;
          //add1 = 12 + 23;
          //console.log(add1);
//adding 20 and stored in add2 variable 120  
           let add2 = 100;
           add2 += 20;
           console.log(add2);
//subtraction 50 and stored in add2 variable 70
           add2 -= 50;
           console.log(add2);
//multi 10 and stored in add2 variable 700 

          add2 *= 10;
          console.log(add2);

// divide quotent 40  and stored in add2 variable 20
           add2 %= 40;
           console.log(add2);
 //divive remainder 40 and stored in add2 variable  0.5           
           add2 /= 40;
           console.log(add2);  



           console.log("**********   check value increasing and decrasing '<' - '>'  ********************")


           console.log(12 > 3) //true 
           console.log(12 < 3) //false
           console.log(22 < 44) //true
           console.log(22 > 44) //false


           console.log("****************************");
           
           let add3 = 20;
           let add_3 = 40;

           add3 = 90;
           add_3 = 100
         
           console.log(add3 > add_3);

           //strictly check values using '<=' - '>='; 

           console.log(12 >= 12); //true because bothe value are same 
           console.log(12 >= 13); //false  because 13 is big of the 12 so false 
           
           console.log("*********************************");

             console.log(12 > 9); // true 

           //try using not opreator

           console.log(!12 > 9); //false because '!' not oprater is use 12 so 'NAN' nat a number

           console.log("***************************************");
           

           //try using and  

           console.log(12 > 9 && 22 > 13); // true like bothe condition are same 
           console.log(12 > 9 && 12 > 13); //false like one condition are wrong '12 > 13' this 
           
           console.log("******************************************");
           

           //try using or 

           console.log(12 > 9 || 12 > 13); //true like one condtion is true so it is true 
            
           console.log(12 > 22 || 12 > 28); //false like both are wrong so it is false 

           console.log("*********************************************");
           //increasing value using '++';

           let add4 = 12;
           add4++;
           console.log(add4); //13 becuase value increasing by 1 ;

           //decreasing value using '--';

            let add_4 = 40;
            add_4--;
           console.log(add_4); //39 because  value decrasing by 1;
console.log("************************************************");

// equality (==);

console.log(12 == 13); //fasle because value are not same 
console.log(12 == 12); //true beacause value are same 

console.log(12 == "12") //true value are same like string is diffrent data type but value are same .

console.log("******************************************************");

//strictly equality (===);

console.log( 12 === 12); //true values are same both side 
console.log(13 === 12); //false value are diffrent 
console.log("12" === 12); //false value are same but data type is diffrent so it check strictly .




/*
output : ==>

                                                        
40
30
375
0.3111111111111111
3
*******************************
120
70
700
20
0.5
**********   check value increasing and decrasing '<' - '>'  ********************
true
false
true
false
****************************
false
true
false
*********************************
true
false
***************************************
true
false
******************************************
true
false
*********************************************
13
39
************************************************
false
true
true
******************************************************
true
false
false 

    */