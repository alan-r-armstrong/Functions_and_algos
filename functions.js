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