//this statement prints
foo();
//this statement causes an error
bar();

function foo(){
    console.log("This function was called before it was declared.");
}
var foobar = function bar(){
    return 1;
}
