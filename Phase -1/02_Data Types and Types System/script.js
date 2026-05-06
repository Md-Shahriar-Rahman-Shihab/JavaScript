// Data types and types System

// data er type

//12 shihab true [] {} () null undefined NaN Symbol bigInt

/*
data 2 types: 
1. primitives ---> Jesob value jake copy korle amra ek real copy pai [string, number, boolean,null,undefined,symbol,bigint]

2. reference ---> aisob copy korar por real copy pai na kintu amra reference pai parent er [arrays,objects,function]-----> [],{},function()


*/

let a = 12;
let b = a;

a= a+2;

/** first a value is 12 and b value is 12 then I update the value of a not b so value change only a so, a = 14 and b = 12 */

let numArray1 = [1,2,3];
let numArray2 = numArray1;
// numArray2.pop();  
// numArray1 = [8,7]

/**first numArray1 and numArray2 value is [1,2,3] but numArray2 is reference numArray1 [akn theke numArray1 er value numArray2 er o so numArray2 change korle numArray1 er value change hoi na that means tor bou (numArray2) amr bou (numArray1) kintu amr bou(numArray1) tor bou(numArray2) na].  If we change the value of numArray2 its change the value of numArray1 also but if we change the value of numArray1 its not effect any in numArray2 */

//Strings

/**
 * ' ' --- single quotes
 * " " --- double quotes
 * ` ` --- backticks
 

    'shihab' , "shihab" , `shihab`

 */


//number

/**
 * 12 - integer  
 * 12.3 - float //those two are numbers
 */



//boolean
/** true and false
 * let a = true;
 * let b = false;
 */

//null
/**
 * ami jene bujhe kono value dai ni
 * 
 * let selectedStudents = null
 * let selectedStudents = shihab
 * 
 * present a ami value jani na so initialize with null but future a value asbe so amra present a oi variable er value null rakhte parbo
 * 
 */

//undefined 

/** Ami ekta variable banaichi kintu tar kono value dai ni by default tar value undefined hoi jai 
 * 
 * js engine undefined value dai
 * 
*/
let c;

/** This is the difference between null and undefined  */

// symbol 

/** 
 * unique immutable [change hobe na] value create hoi
 * Create unique identifiers
 * 
 * 
 * future a amra kono libraries use korbo akn ei case a libraries er moddhe kichu fields thake jar similar kichu create kori and vul bosoto amader create kora fields sei library er original fields ke o change kore dai
*/

/* 
let shihabjs ={
    uid: 12,
    model: 'Shihab', 
    uid
}

shihabjs.uid = 1; //override kore dibe

*/


let u1 = Symbol("uid");
let u2 = Symbol("uid");

//u1 === u2 //false

let obj = {
    uid: 1,
    name: "shihab",
    age: 24,
    email: "test@test.com"
};

let u3 = Symbol("uid");
obj[u3] = '0001'