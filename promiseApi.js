// const p1=new Promise((resolve,rejeted)=>
// {
//     setTimeout(()=>resolve("P1 success"),3000);

// })
// const p2=new Promise((resolve,rejeted)=>
// {
//     setTimeout(()=>resolve("P2 success"),1000);

//     // setTimeout(()=>rejeted("P2 rejected"),1000);
// })
// const p3=new Promise((resolve,rejeted)=>
// {
//     setTimeout(()=>rejeted("P3 rejected"),2000);
// })
// // it will give the promise
// Promise.all([p1,p2,p3]).then(res=>{
//     console.log(res);// it will give the arrayof object
// }).catch((err)=>
// {console.error(err);});


// promise .allSettled..

// const p1=new Promise((resolve,rejeted)=>
// {
//     setTimeout(()=>resolve("P1 success"),3000);

// })
// const p2=new Promise((resolve,rejeted)=>
// {
//     setTimeout(()=>resolve("P2 success"),1000);

//     // setTimeout(()=>rejeted("P2 rejected"),1000);
// })
// const p3=new Promise((resolve,rejeted)=>
// {
//     setTimeout(()=>rejeted("P3 rejected"),2000);
// })
// // it will give the promise
// Promise.allSettled([p1,p2,p3]).then(res=>{
//     console.log(res);// it will give the arrayof object
// }).catch((err)=>
// {console.error(err);});


// promise .race

// const p1=new Promise((resolve,rejeted)=>
// {
//     setTimeout(()=>resolve("P1 success"),3000);

// })
// const p2=new Promise((resolve,rejeted)=>
// {
//     setTimeout(()=>resolve("P2 success"),1000);

//     // setTimeout(()=>rejeted("P2 rejected"),1000);
// })
// const p3=new Promise((resolve,rejeted)=>
// {
//     setTimeout(()=>rejeted("P3 rejected"),2000);
// })
// // it will give the promise
// Promise.race([p1,p2,p3]).then(res=>{
//     console.log(res);// it will give the arrayof object
// }).catch((err)=>
// {console.error(err);});

// promise.any
const p1=new Promise((resolve,rejeted)=>
{
    setTimeout(()=>resolve("P1 success"),3000);

})
const p2=new Promise((resolve,rejeted)=>
{
    setTimeout(()=>resolve("P2 success"),4000);

    // setTimeout(()=>rejeted("P2 rejected"),1000);
})
const p3=new Promise((resolve,rejeted)=>
{
    setTimeout(()=>rejeted("P3 rejected"),2000);
})
// it will give the promise
Promise.any([p1,p2,p3]).then(res=>{
    console.log(res);// it will give the arrayof object
}).catch((err)=>
{console.error(err);});