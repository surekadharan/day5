//print the odd nummbers using an array
var odd=function(arr)
{
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%2!=0)
        result=arr[i];
        console.log(result);
    }
    return odd;
};
console.log(odd[1,2,3,4,5]);

//ARROW FUNCTION
const numbers = [1,2,3,4];
const odds = numbers.filter((num) => num % 2 === 1);
console.log(odds); 

//IIFE FUNCTION

(function(array){
    for(var i = 0 ; i< array.length ; i++){
               if(array[i]%2!=0){
                  console.log(array[i])
               } 
          }
    })([1,2,3,4])

    //2.Convert all the strings to title caps in a string array
//anonymous function
function (str) {
    str = str.toLowerCase().split(" ");
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(" ");
  }
  //arrow function
  titleCase = (str) => {
    str = str.toLowerCase().split(" ");
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(" ");
  }      
  //IIFE FUNCTION
  (function (str) {
    str = str.toLowerCase().split(" ");
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(" ");
  })("HELLO GUVI");

  //3.Sum of all numbers in an array 
//ANONYMOUS FUNCTION :
  function(array){
    var sum = 0;
    for(var i = 0 ; i< array.length ; i++){
       sum = sum + array[i];
     }
     return sum;
  }
//IIFE FUNCTION:
       (function(array){
var sum = 0;
    for(var i = 0 ; i< array.length ; i++){
       sum = sum + array[i];
     }
     return sum;
})([1,2,3,4])
//ARROW FUNCTION: 
      sum = (array)=>{
var sum = 0;
    for(var i = 0 ; i< array.length ; i++){
       sum = sum + array[i];
     }
     return sum;
     }
//4.eturn all the prime numbers in an array
//ANONYMOUS FUNCTION:
function(numArray){
     numArray = numArray.filter((number) => {
       for (var i = 2; i <= Math.sqrt(number); i++) {
         if (number % i === 0) return false;
       }
       return true;
     });
     console.log(numArray);
 }
//IIFE FUNCTION:
  (  
  function(numArray){
     numArray = numArray.filter((number) => {
       for (var i = 2; i <= Math.sqrt(number); i++) {
         if (number % i === 0) return false;
       }
       return true;
     });
     console.log(numArray);
 })([1,2,3,4]);
//ARROW FUNCTION:

primeNumber = (numArray) => {
     numArray = numArray.filter((number) => {
       for (var i = 2; i <= Math.sqrt(number); i++) {
         if (number % i === 0) return false;
       }
       return true;
     });
     console.log(numArray);
 }
 //5.Return all palindrome in an array
 //anonymous function
 let isPalindrome = function () {
  var myArray = ["cciid", 'racecar', 'honda', 'malayalam'];
  var arr = myArray.filter(function (c, d) {
    var palindrome = c.split(" ").reverse().join("");
    if (c == palindrome) {
      console.log(myArray[d]);
    }
  });
}
isPalindrome()


//IIFE :

( function () {
  var myArray = ['cciid', 'racecar', 'honda', 'malayalam'];
  var arr = myArray.filter(function (c, d) {
    var palindrome = c.split(" ").reverse().join(" ");
    if (c == palindrome) {
      console.log(myArray[d]);
    }
  });
})()

//ARROW FUNCTION:
Palindrome=(myArray)=>
var myArray = ["cciid", 'racecar', 'honda', 'malayalam'];
  var arr = myArray.filter(function (c, d) {
    var palindrome = c.split(" ").reverse().join("");
    if (c == palindrome) {
      console.log(myArray[d]);
    }
  });

Palindrome()
//6.Return median of two sorted arrays of same size.

//Anonymous :
let median = function(a, b) {

  let c = [...a, ...b].sort((a, b) => a - b);

  const half = c.length / 2 | 0;
  
if (c.length % 2) {
  return c[half];
} else {
  
  return (c[half] + c[half - 1]) / 2;
}
}
let arr1 = [1,3,5,7,9];
let arr2 = [2,6,8,10,11];
console.log(median(arr1, arr2));

// 7.Remove duplicates from an array

//Anonymous function:

let findDuplicates = function () {
  
    const yourArray = [1, 1, 2, 3, 4, 5, 5]
    let duplicates = []
    const tempArray = [...yourArray].sort() 
    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i + 1] === tempArray[i]) {
        duplicates.push(tempArray[i])
      }
    }
    console.log(duplicates) 
  }
  findDuplicates()
  //IIFE FUNCTION:
  (function(array){
    let dup = [...new Set(array)];
    console.log(dup);
   })([1,1,2,3,4]);
  