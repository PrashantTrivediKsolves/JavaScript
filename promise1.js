const cart=["shoes","pants","kurta"];

const promise=createOrder(cart);// order id...


// console.log(promise);

promise.then(function(orderid)
{
    console.log(orderid);
    return orderid;
    // proceedToPayment(orderId);
}).catch(function(err){
    console.log(err.message);
})
.then(function(orderId){
    return proceedTopayment(orderId);

}).then(function(paymentInfo)
{
    console.log(paymentInfo);
})
.catch(function(err){
    console.log("promise is rejected...");
    console.log(err.message);

}).then(function()
{
    console.log("no matter what will be happend i will call");
});

function proceedTopayment(orderId)
{
    /////................
    return new Promise(function(resolve,reject)
    {
        resolve("payment successfull")
    });
}
//
function validateCard(cart)
{
    return false;
}
function createOrder(cart)
{

    const pr=new Promise(function(resolve,reject)
    {
        // createOrder

        // validation
        if(!validateCard(cart))
        {
            const err=new Error("cart is not valid");
            return reject(err);
        }
        // logic for create order
        const orderid="1245";
        if(orderid)
        {
            setTimeout(function()
            {
                resolve(orderid);
            },5000);
        }
        // order id
    });
    return pr;
}

