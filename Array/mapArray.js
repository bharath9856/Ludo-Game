 const products = [
     {
         name: 'laptop',
         price: 1000,
         count:5
     },
     {
         name:"desktop",
         price: 1500,
         count: 2
     },
     {
         name:"phone",
         price:500,
         count:10
     }
 ]

 // calculate the total value of each product (array version)
 const totalProductsvalue = products.map(item => item.price*item.count);
 console.log(totalProductsvalue);

 // calculate the total value of each product with names( object  version)
 const totalProductsValue = products.map(item=>({
     name:item.name,
     value:item.price*item.count
 }))
 console.log(totalProductsValue);



// Multiply the each number with there own value and index   /// index start with zero.

var numbers = [1,2,3,4,5]
const numbersDouble = numbers.map(multiply);

function multiply(value,index,arr){
    return value*index;
}
console.log(numbersDouble);


//convert array string into array numbers
const str=['1','2','3','4','5'];

const numbers = str.map(Number);
console.log(numbers);
const numbers1 = str.map(num=>Number(num));
console.log(typeof(numbers1[0]));

