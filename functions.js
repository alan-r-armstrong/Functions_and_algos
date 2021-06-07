function a(){
    console.log('hello');
}
a();
console.log('Dojo');

function a(){
    console.log('hi');
    return 15;
}
x = a();
console.log('x is', x);

function a(n){
    console.log('n is', n);
    return n+15;
}
x = a(3);
console.log('x is', x);

function a(n){
    console.log('n is', n);
    y = n*2;
    return y;
}
x = a(3) +a(5);
console.log('x is', x);

function op(a,b){
    c = a+b;
    console.log('c is', c);
    return c;
}
x = op(2,3) + op(3,5);
console.log('x is', x);

function op(a,b){
    c = a+b;
    console.log('c is', c);
    return c;
}
x = op(2,3) + op(3,op(2,1)) + op(op(2,1),op(2,3));
console.log('x is', x)

var x = 15;
function a(){
    var x = 10;
}
console.log(x);
a();
console.log(x);

function multiply(x,y){
    console.log(x);
    console.log(y);
}
var b = multiply(2,3);
console.log(b);

function multiply(x,y){
    return x*y;
}
var b = multiply(2,3);
console.log(b);
console.log(multiply(5,2));

var x = [1,2,3,4,5,10]
for(var i=0; i<5; i++)
{
    i = i +3;
    console.log(i);
}

var x=15;
console.log(x);
function foo(){
    var x=10;
    console.log(x);
}
console.log(x);
foo();
console.log(x);

for(var i=0; i<15; i+=2){
    console.log(i);
}
// 
for(var i=0; i<3; i++){
    for(var j=0; j<2; j++){
        console.log(i*j);
    }
}

function foo(x,y){
    for(var i=0; i<x; i++){
        for(var j=0; j<x; j++){ 
            console.log(i*j);
        } 
    }
}
var z = foo(3,3);
console.log(z);

function foo(x,y){
    for(var i=0; i<x; i++){
        for(var j=0; j<y; j++){
            console.log(i*j);
        } 
    }
    return x*y;
}
var z = foo(3,5);
console.log(z);

function count(x){
    for(var i=0; i<x; i += 2){
    console.log(i);
    }
}
count(255);

for(var a = 1; a <= 100; a++){
    if(a % 3 == 0){
        continue;
    }
    console.log(a);
}

let alphabet = "abcdefghijklmnopqrstuvwxyz";
var greeting = alphabet.substr(7,2);
console.log(greeting);

function oddsAndEvens(number){
    var odds = [];
    var evens = [];

    for(var i = 0; i<=number; i++){
        if (i % 2 == 0){
            evens.push(i);
        }
        else odds.push(i);
    }
    return odds;
}
console.log(oddsAndEvens(50));

// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function numtostring(array){
    var a = "Dojo";
    for(var i=0; i<array.length; i++){
        if(array[i] <= -1)
            array[i] = a;
        }
    return array;
}
console.log(numtostring([-1,-2,0,-1,2,3,4]));

function a(){
    return 35;
}
console.log(a());

function b(){
    return 4;
}
console.log(b()+b());

function c(b){
    return b;
}
console.log(c(2)+c(4));

function d(b){
    console.log(b);
    return b*3;
}
console.log(d(3));

function e(b){
    return b*4;
    console.log(b);
}
console.log(e(10));

function f(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(f(15));

function g(b,c){
    return b*c;
}
console.log(10,3);
console.log( g(3,10) );

function h(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

function i(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
i();

function j(b,c){
    for(var i=b; i<c; i++) {
        console.log(i);
    }
    return b*c;
}
j(0,10);
console.log(j(0,10));

function k(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(j);
        }
        console.log(i);
    }
}

function l(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}


var z = 10;
function m(){
    var z = 15;
    console.log(z);
}
console.log(z);

var z = 10;
function n(){
    var z = 15;
    console.log(z);
}
n();
console.log(z);

var z = 10;
function o(){
    var z = 15;
    console.log(z);
    return z;
}
z = o();
console.log(z);

var x = 75;
if (x > 100) {    
    console.log("bigger than 100");
}
else if (x > 50) {    
    console.log("bigger than 50");
}
else if(x > 25) {
    console.log("bigger than 25");
}
else {    
    console.log("small number");
}