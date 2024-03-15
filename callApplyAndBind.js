// let name={
//     firstname:"prahant",
//     lastname:"Triedi",
//     printFullName:function()
//     {
//         console.log(this.firstname+" "+this.lastname);
//     }
// }
// name.printFullName();


// let name2={
//     firstname:"Sachin",
//     lastname:"Tendulkar"
// }

// // function borrowing  using call method

// name.printFullName.call(name2);// now it wil print sachin Tendulkar as a result


let name={
    firstname:"prahant",
    lastname:"Triedi",
    
}
let printFullName=function(hometown,state)
    {
        console.log(this.firstname+" "+this.lastname+" "+hometown+" "+state);
    }

let name2={
    firstname:"Sachin",
    lastname:"Tendulkar"
}
printFullName.call(name2,"Kanpur","up");

printFullName.apply(name2,["Kanpur","up"]);// all the parameter passed as a arraylist


//bind method...

let printName=printFullName.bind(name2,"Kanpur","up");// it will return the copy of method..
// that will be invoced latter
printName();



// function borrowing  using call method

