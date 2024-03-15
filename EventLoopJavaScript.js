console.log("Start");

setTimeout(function cb()
{
    console.log("Call back");
},0);

console.log("end");

// millian
// blocking the main thread for 10 second...
// let startDate=new Date().getTime();
// let endDate=startDate;
// while(endDate<startDate+10000){
//     endDate=new Date().getTime();
// }
// console.log("while expires");

