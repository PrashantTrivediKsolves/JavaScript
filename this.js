// this is global space
"use strict";

console.log(this);// globalObject in case of browser is Window

// this inside a function

function x()
{
    // the value depends on strict or non-strict mode
    console.log(this);
}
// x();
// this in strict mode-(this substituton)

// if the value of this is undefined or null 
// this will be replaced with the global object
// only in non-strict mode

// this keyword value depends on how  the function is called (windows)
x();// undefined

//window.x(); // will give you the window object.....


// this inside a object's method.............

// const obj={
//     a:10,
//     x:function()
//     {
//         console.log(this.a);
//     }

// }
// obj.x();
// const obj2={
//     a:20
// }
// call apply bind methods (sharing methods)

const student={
    name:"prashant Trivedi",
    printName:function()
    {
        console.log(this.name);
    },
};
student.printName();

const student2={
    name:"surenra",
};

student.printName.call(student2);//value of this =student2
// now this is pointing to the student2 obj

// student2.printName();

// call apply bind...

// this inside arrow function

const obj={
    a:10,
    x:()=>
    {
        console.log(this);
    },
}
obj.x();

// arrow function is not have his own this (it will use the lexical scope this)

const obj2={
    a:20,
    x:function()
    {
        // enclosing lexical context..
        const y=()=>
        {
            console.log(this);
        }
        y();
    },    
}
obj2.x();

// this inside nested arrow function

// this inside DOM

// this inside the dom element =>will be reference to be the html element...


// this inside class ,constrctor 