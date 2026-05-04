// var, let, const - line by line Comparison

a = 12; //not appreciate

var a;
var a = 12;
var num = ((23*13-89)%45)*122;

let a;
let a = 12;
const a = 12;
// const a; not possible

//declarations and initialization

var a; //declare 
var a = 12; // declare and initialize(1st value dewa )

let a;
let a = 12;


//var
var b= 12;
var b= 13;

// let 

let c = 15;
// let c = 19; error 

const name = "Shihab" //never change value. If try to change the value its show error


var d = 18;
/* 
1. add window 

2. function scope 
        function abcd(){
            if(){
                var a = 12;
            }

        }
        loop er vitore variable declare korar por o function er jekono jaigai use kora jai 

3. redeclare kora jai with same name 

*/

// Scope (global , block , functional)

//var functional scoped 
// let block scoped 


// global 
var a = 13


// block
{
     var z = 534; // not respect block scope
}

{
    let named = HolaAI; //let block scoped fully respect a block scope
}

// functional
function abcdef() {
    if(true){
        var a = 13; // var use nearest fuction
    }
}



// Reassignment , redeclaration 

// reassignment means again assign the value [update value]

var a = 12;
a=32;
var a = 122;

let b = 12;
b = 32;
// let b = 15; 

// redeclaration is possible with var but redeclaration is not possible with let 


// Temporal Dead Zone

console.log(a);

let a = 12;

//The variable exists in memory (because of hoisting).But until it’s initialized, it’s in the Temporal Dead Zone (TDZ).That means you can’t access or use it — if you try, you’ll get a ReferenceError.Whereas with var, the variable is hoisted and initialized with undefined, so you can access it before the assignment (but it may cause logical bugs)


// Hoisting impact per type

// Hoisting - when we create a variable in js. the variable divided into two parts. declare part goes into up and initialization part stays where I wrote it.


// 1.
console.log(a); // undefined. var have no TDZ
var a= 'shihab'

//2.
console.log(a); // Reference type error . goes TDZ(initialization)
let a = 'shahriar'

//3

var d = 1; // global
{
    var d= 2; //override bcz var functional scoped here global scoped var not respect block scoped
}

console.log(d); //2

//3 
let a = 10; // global scope [let block scope let fully respect block scope ]
{
    let a = 20;
    console.log("Inside:",a); //20
    
}
console.log("Outside:",a); //10

//4
let b = 10; // global scope [let block scope let fully respect block scope ]
{
    
    console.log("Inside:",b);
    
}
console.log("Outside:",b);


