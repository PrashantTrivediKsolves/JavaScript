const cart=["shoes","pants","kurta"];

createOrder(cart,function(orderId)
{
    proceedToPayment(orderId);
});// orderId 


const promise=createOrder(cart);

// {data :undfined}

promise.then(function(orderId)
{
    return proceedToPayment(orderId);
}).then(function(paymentInfo)
{
    return showOrderSummary(paymentInfo);
}).then(function(orderId)
{
    return changeWallet(orderId);
});


// this helps us to get out of callback hell..
// alert("hello");




// const GitHub_Api="https://jsonplaceholder.typicode.com/users";

// const user=fetch(GitHub_Api);// it will return the promise...

// user.then((data)=>
// {
//     // console.log(data.body);
//     console.log(data);
//     console.log(data.url);
// })



















