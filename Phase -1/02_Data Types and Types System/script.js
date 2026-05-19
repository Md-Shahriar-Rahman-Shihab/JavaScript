// ***************Data types and types System*********************************//

// data er type

//12 shihab true [] {} () null undefined NaN Symbol bigInt

/*
data 2 types: 
1. primitives ---> Jesob value jake copy korle amra ek real copy pai [string, number, boolean,null,undefined,symbol,bigint]

2. reference ---> aisob copy korar por real copy pai na kintu amra reference pai parent er [arrays,objects,function]-----> [],{},function()


*/

//*************Primitives ******************/

let a = 12;
let b = a;
// b=b+3;

a= a+2;

/** first a value is 12 and b value is 12 then I update the value of a not b so value change only a so, a = 14 and b = 12 */

//*************Reference ******************** */
let numArray1 = [1,2,3];
let numArray2 = numArray1;
numArray2.pop();  
numArray1.push(78);
// numArray1 = [8,7]

/**first numArray1 and numArray2 value is [1,2,3] but numArray2 is reference numArray1 [akn theke numArray1 er value numArray2 er o so numArray2 change korle numArray1 er value change hoi. If we change the value of numArray2 its change the value of numArray1 also if we change the value of numArray1 means update through pop push its  effect the value of numArray2 but if equal diye value change korle numArray1 onno value reference kore */

/**
 numArray1 ──► [1,2,3]
 numArray2 ──┘

 numArray1 = [8,7];
 numArray1 ──► [8,7]
 numArray2 ──► [1,2]

 */


//*********************Strings******************************//

/**
 * ' ' --- single quotes
 * " " --- double quotes
 * ` ` --- backticks
 

    'shihab' , "shihab" , `shihab`

 */


//********************number*********************************//

/**
 * 12 - integer  
 * 12.3 - float //those two are numbers
 */



//***********************boolean*******************************//
/** true and false
 * let a = true;
 * let b = false;
 */



//*********************null*************************************//
/**
 * ami jene bujhe kono value null dici
 * 
 * let selectedStudents = null
 * let selectedStudents = 'shihab'
 * 
 * present a ami value jani na so initialize with null but future a value asbe so amra present a oi variable er value null rakhte parbo
 * 
 */

//*********************undefined************************************// 

/** Ami ekta variable banaichi kintu tar kono value dai ni by default tar value undefined hoi jai 
 * 
 * js engine undefined value dai
 * 
*/
let c;

/** This is the difference between null and undefined  */



//*************************  symbol **************************/

/** 
 * unique immutable [change hobe na] value create hoi
 * Create unique identifiers
 * 
 * 
 * future a amra kono libraries use korbo akn ei case a libraries er moddhe kichu fields thake jar similar kichu create kore feli and vul bosoto amader create kora fields sei library er original fields ke o change kore dai
*/

/* 
let shihabjs ={
    uid: 12,
    model: 'Shihab', 
    uid
}

shihabjs.uid = 1; //override kore dibe

*/


let u1 = Symbol("uid"); // u1 holds a symbol which name is uid
let u2 = Symbol("uid");

//u1 === u2 //false 

let obj = {
    uid: 1,
    name: "shihab",
    age: 24,
    email: "test@test.com"
};


// obj.a=5;

let u3 = Symbol("uid");
obj[u3] = '0001'



//*****************************bigInt****************************//

// Number.MAX_SAFE_INTEGER
let num1 = Number.MAX_SAFE_INTEGER; //integer er max value


let bigNum = 9007199254740991n;
let x = 8n;
let SumOfBigNumAndX = bigNum + x;



//**************************************************************************** */
//**************************************Reference******************************/
//***************************************************************************** */


//*******************Arrays******************************** */

let arr1 = [1,2,3];
let arr2 = arr1;

arr1.pop();

//**********************Object***************** */

let obj1= {
    name:"Shihab",
};
let obj2 = obj1;

obj2.name = "Shahriar";


//********************************************************************** */
//************************Dynamic typing**************************** */

// js a static typing nai js a dynamic typing ache means ami data ke change korte parbo because dynamic data types ache  

/**
 * others programming language a 
 * int a = 12;
 * a = true;
 * not possible
 */

let variable = 12;
variable = true;
variable = "Shihab";
variable = null;
variable = [4,5,6];
variable = {
    name: "s",
    age: 15,
};
variable = undefined

//************************************************************** */
//*****************typeof quirks*************************/

typeof 12; //number
typeof null; //object
typeof "Shihab" //object
typeof NaN; //number

NaN === NaN // false 
.1+.4 //0.5
.1+.2 //0.30000000000000004

//[]+[] ----------> ''

1+"1" //"11"

1 == "1" //true
1 ==='1' //false


typeof null
typeof NaN


//******************Type coercion ************* */

// type coercion ---> concept jaita te ami ekta type automatically convert hoye jabe 

// + plus icon duita kaj kore ek hocche add and second hocche concat

"5" + 1 //'51' concatenation 

// full operation er modhe ekta operand jodi string hoi js onno number operand ke string a convert kore and concat kore dai

//- minus icon only perform subtract 
"5"-1 // 4

//************************Truthy vs falsy values********* */

// 0 false "" null undefined NaN document.all ---------> falsy value 

!!0

!!""

if(null){

}

// baki others value Truthy values

if(-1){

}


////********************Predict the result*********************** */

true + false //1+0 =1
null + 1 //0+1 = 1
5+"5" //"55"
!!undefined //false  