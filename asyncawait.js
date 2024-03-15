
// always return a promise....

//onst { log } = require("console");


// async function will always return a promise...

// async function getData()
// {
//     return "Namaste";
// }
// const dataPromise=getData();
// // console.log(data);
// dataPromise.then(res=>console.log(res));

// returning promise...

// const p=new Promise((resolve,reject)=>
// {
//     resolve("promise Resolved Value");
// })
// async function getData()
// {
//     return p;
// }
// const dataPromise=getData();
// // console.log(data);
// dataPromise.then(res=>console.log(res));



// async and await..

// const p=new Promise((resolve,reject)=>
// {
//     setTimeout(function()
//     {
//         resolve("promise Resolved Value");

//     },10000);
// });
// const p1=new Promise((resolve,reject)=>
// {
//     setTimeout(function()
//     {
//         resolve("promise Resolved Value 1");

//     },5000);
// });

// async and await combo is used to handle promises..

// function getData(){
//     p.then(res=>console.log(res));
//     console.log("Namate java script");

// }
// getData();

// here  we are handling the promise using await...
// async function handlePromise()
// {
//     console.log("Hello world");
//     // js Engine was waiting for promise to resolve...
//     const val=await p;
//     console.log("Namaste javaScript");
//     console.log(val);
//     const val2=await p1;
//     console.log("Namaste javaScript 1");
//     console.log(val2);
// }

// handlePromise();
// console.log("Hello");
// console.log("bye");


// Empty

// call stack

// Async  p1,p2

// const api_Url="https://api.github.com/users/PrashantTrivediKsolves";
// // handle promise via Api call
// async function handlePromise()
// {
//    const data=await fetch(api_Url);
//    // it will return the response

//    // fetch()=> Response.json()=>JsonValue

// //    fetch().then(res=>res.json()).then(res=>console.log(res));
//    const jsonValue=await data.json();//this again a promise
//    console.log(jsonValue);
// }

// handlePromise();
//
// It seems like you're running your code in a Node.js environment where the fetch API is not available by default. fetch is a web API that is commonly available in web browsers but not in Node.js.

// To use fetch in a Node.js environment, you need to use an external library like node-fetch or axios which provide similar functionality.

// Here's how you can modify your code to use node-fetch:

// First, install node-fetch via npm:
// const fetch = require('node-fetch');
const api_Url = "https://api.github.com/users/PrashantTrivediKsolves";

// handle promise via Api call
async function handlePromise() {
   // Make the API call
//    try{
//    const data = await fetch(api_Url);
//    // Convert response to JSON format
//    const jsonValue = await data.json();
//    console.log(jsonValue);
//    } // This returns a promise containing the JSON data
//    catch(err){
//     console.log(err);

//    }
const data = await fetch(api_Url);
   // Convert response to JSON format
   const jsonValue = await data.json();
   console.log(jsonValue);
   // Log the JSON data to the console
   
}

// Call the function to execute the API request and logging
handlePromise().catch(err=>console.log(err));
console.log("Hello");
console.log("GLA");
