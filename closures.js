// function x(fn){
//     var a=7;
//     fn(a);
// }
// x(function y(a)
// {
//     console.log(a);
// });

// function z()
// {
//     var b=900;
//     function x()
//     {
//         var a=7;
//         function y()
//         {
//             console.log(a,b);
//         }
//         a=100;
//         return y;
//     }
//     var z=x();
//     console.log(z());
// // ...............................................................
// }
// z();
function z()
{
    var b=900;
    function x()
    {
        var a=7;
        function y()
        {
            console.log(a,b);
        }
        y();
    }
    x();
// ...............................................................
}
z();