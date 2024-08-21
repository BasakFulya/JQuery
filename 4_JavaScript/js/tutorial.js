//comment for one line
/*
comment for multi lines
*/

/*function name() {
    console.log("1st area");
}
name();

function name2() {
    console.error("Our Errors");
}
name2();

function name3() {
    console.warn("This is a warn");
}
name3();

alert("This is a pop-up");

//console.clear();

bfk_academy=function bfk(){
    console.log("Jquery Lessons");
}

bfk_academy();

bfk_academy2=()=>{console.log("Javascript Lessons");}

bfk_academy2();

*/

//var temp=99;  //number
//var temp=5.4; //number

//var temp="Software Academy"; //string // var temp='Software Academy' is ok too.Between ' ' and " " no difference;

//var temp=true; //boolean

//var temp=null; //object

// var temp;                  {    

// console.log(temp);           / undefined structure */
// console.log(typeof temp);  }

/*OBJECT*/
// var temp=[90,89,97,95];
// console.log(temp);
// console.log(typeof temp);


// var temp=Number("10");
// console.log(temp);
// console.log(typeof temp);

// var temp2=Number("t");  //NaN
// console.log(temp2);
// console.log(typeof temp2);


// var temp;  // undefined
// console.log(temp);
// console.log(typeof temp);
// alert(typeof temp);



/* ~~~~~~JavaScript Operators,Cast,Case-Sensitiv ~~~~~~*/

/* summation */

// var temp=9,temp2=10,temp3;
// temp3=temp+temp2;
// console.log(temp3);


// /* subtraction */

// var temp=9,temp2=10,temp3;
// temp3=temp-temp2;
// console.log(temp3);


// /* Multiplication */

// var temp=9,temp2=10,temp3;
// temp3=temp*temp2;
// console.log(temp3);

// /* Division */

// var temp=9,temp2=10,temp3;
// temp3=temp/temp2;
// console.log(temp3);

/*General example */
// var temp=9;
// var temp2=10;
// var temp3;

// temp--;
// temp=temp+5;
// console.log(temp);



/* example */
// var temp=9;
// var temp2=10;
// var temp3;

// temp--;
// temp=temp+5;
// temp++;
// console.log(temp);

/* example */

// var temp=9;
// var temp2=10;
// var temp3;

// temp=temp+5;
// temp++;
// console.log(temp);



/* CASTing example : convert from number to string*/
// var temp4=String(20);
// console.log(typeof temp4);
// console.log(temp4);


/*example */
// var temp4=Number('20'); //convertion was done
// console.log(typeof temp4);
// console.log(temp4);

/*Case Sensitivity */

// var bfkAcademy='JQuery';
// var BfkAcademy='Javascript';

// console.log(bfkAcademy);
// console.log(BfkAcademy);

/*type conversion*/
// var temp=Number(null);  //result:0
// var temp=Number(false); //result:0
// var temp=Number(true);  //result:1
// console.log(typeof temp);
// console.log(temp);


/*  IsNaN Number */
// isNaN('a99');     //true=number değildir false=number
// .toPrecision(8); //round the number 5, starting from the left side
// .toFixed(5);     //round 5 number after the comma


// var num = 99.9877665;
// console.log(num.toPrecision(5));
// console.log(num.toFixed(5));

// var isNum=Number=('78a');
// console.log(isNum);
// console.log(typeof isNum);

// console.log(isNaN('88d'));

// var value=isNaN('90b');
// if(value){
//     console.log("it is not a number")
// }else{
//     console.log("it is a number")
// }

/* ~~~~~ Date ~~~~~~ */


// new Date

// const date=new Date();
// console.log(date.getFullYear());
// console.log(date.getMonth()); // 0-1-2-3-4-5-6-7-8-9
// console.log(date.getDay());



/* Syntax,var,let,const,global scope,local scope */

//var num100; //u can not start with a num
//var num-DocumentTimeline; //not correct definition
// var num9;  //it is ok
// var $num;
// var num_area;


//it works which defined area
// let scope="Bfk Academy";
// console.log(scope);

//const is a constant
// const notchangable = 98;
// console.log(notchangable);

// notchangable= 79;
// console.log(notchangable);

/*~~~~~~ Math ~~~~~~ */

// Math.PI ;          //pi number
// Math.random();     //random
// Math.round(6.5);   //ceil+floor;7
// Math.ceil(6.4);    // round up = 7
// Math.floor(6.4);   // round down = 6
// Math.sqrt(81);     // square root = 9 
// Math.pow(2,5);     // power  = 25
// Math.abs(-90);     // absolute = 90
// Math.min(1,2,5,90);// minimum = 1
// Math.max(1,2,5,90);// maximum = 20

// console.log(Math.PI);
// console.log(Math.round(Math.random()*10+1)); //1<=x x<=10
// console.log(Math.round(6.5));
// console.log(Math.ceil(6.1));
// console.log(Math.floor(6.9));

// console.log(Math.sqrt(25));
// console.log(Math.pow(3,2));
// console.log(Math.abs(-98));
// console.log(Math.min(1,2,5,10,20));
// console.log(Math.max(1,2,3,5,10,20));


/* Escape Strings Templates */
// \    Escape Character
// ``   Backtick
// { }  Curly Brackets
// ~    Tilda
// &    Ampersand
// ${ } 


// let name = "Fulya";
// let surname = "Karaduman";
// NameSurname = `your name: ${name} surname: ${surname}`


// let name,surname,fullName;
// name="Fulya";
// surname="Karaduman";
// fullName=`your name: ${name} your surname: ${surname}`;  //ES6 Backtick
// alert(fullName);


// console.error("\ trial "); //Escape Character
// console.error(`\ trial `);


// var word="Bfk Academy Türkiye Software";
// var s2="BFK";

// console.log(word.length);
// console.log(word.toLocaleUpperCase());
// console.log(word.toLocaleLowerCase());
// console.log(word.concat(" Added."));
// console.log("search" +word.search(s2));//if present = 0, otherwise = -1
// console.log(word.indexOf(s2));
// console.log(word.trim().length);
// console.log(word.split(","));
// console.log(word.substring(0,11));
// console.log(word.startsWith("BFK"));
// console.log(word.endsWith("yazılım"));

// let word2="BFK Akademi,Türkiye Yazılımı,Türkce";
// let replaceValue = word2.replace(/i/g,'i').replace(/c/g,'ç');
// console.log(replaceValue);

//pascal case = Bfk Academy
//camel case = jquerySoftware

/*~~~~~ Conditions ~~~~~*/
// var result=99>1;
// console.log(result);

// if(result){
// console.log("Greater")
// }else{
// console.log("Smaller");    
// }


/* if structure */
// if(true){

// }else if(98>1){

// }else{

// }


//Ternary
// var ternary =(5<1)? "true" : false;
// console.log(ternary);

// console.log( 5 < 1 ? "Great" : "Smaller" )
// var value=Number(prompt("Enter a value"));

// var result=2;
// switch (result) {
//     case 1:
//         console.log("1");
//     break;

//     case 2:
//         console.log("2");
//     break;

//     case 3:
//         console.log("3");
//     break;

//     default:
//         console.log("out of area");
//     break;
// }

/*  Loops  */
//iterative for

// for(let i=0; i<5; i++){
//     console.log(i);
// }

// //while
// let i2=0;
// while(i2<5){
//     console.log(i2);
//     i2++;
// }

// do{
//     let i3=6;
//     console.log(i3); 
//     i3--;
// }while(i3>0);

//for in 
// var array=[1,5,6,8,78];

// for( var temp in array ){
//     console.log( ` numbers :${temp} element:${array[temp]}`);
// }

//For Each
// var array=[1,5,6,8,78];
// array.forEach(
//     function (item){
//         console.log(item)
//     }
// );

//if return needed in Map Arrays
// var newArray=array.map(function (item){
//     return item+1;
// } );
// console.log( newArray);
// console.log( typeof newArray);

//break    = break the loop,exit from the loop
//return   = break the method,exit from that function
//continue = do not run only for this value,continue after this value

/* Array  */

// var array=[1,2,4,3,5,"BFK Academy",[4,9,6,8]];
// console.log(typeof array);
// var sort=array.sort();
// for (var i=0; i<array; i++){
//     console.log(sort[i]);
// }

//for in
// for( let temp in array ){
//     console.log(array[temp])
// }

/* ~~~~~ BOM = Browser Object Model ~~~~~ */

// console.log(window);
// window.alert("Screen");
// var del=window.confirm("Do you want to delete?");
// if(del){
//     console.log("deleting");
// }else{
//     console.log("not deleted");
// }

/* ~~~~~ Object ~~~~~ */
// var array=[];
// console.log(array);

var software={
    //let=local
    html5:'semantic',
    css3:'box-shadow',
    responsive:"@media",
    bootstrap4:'color',
    javascript:'BOM',
    java:['servlet','jsp','jsf','spring'],
    javaEE:{
        jsf:'x',
        jsp:'y',
        servlet:'z'
    }
};

console.log(software.html5);
console.log(software.responsive);
console.log(software.java[1]);

var trial=[ { },{ } ]
trial[0].name
// console.log(software)

