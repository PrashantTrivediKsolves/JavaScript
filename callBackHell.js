// console.log("Namste");


// setTimeout(function()
// {
//     console.log("JavaScript");
// },5000);


// console.log("Season 2");



const cart=["shoes","pants","kurta"];


// api.createOrder(cart,
//     function ()
//     {
//         api.proceedToPayment(function ()
//         {
//             api.showOrderSummary(function()
//             {
//                 api.updateWallet();
//             });
//         });
//     }
// );

// call back hell

// pyramid of doom type structure.. 

// inversion of control...
api.createOrder(cart,
    function ()
    {
        api.proceedToPayment();
    }
);










