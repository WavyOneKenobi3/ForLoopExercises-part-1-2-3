//Exercise #1: Construct for loops that accomplish the following tasks:
//a. Print the numbers 0 - 20, one number per line.
    //  for (let i = 0; i <= 20; i++) {
    //   console.log(i);
    //  };
  
//b. Print only the ODD values from 3 - 29, one number per line.
// for (let i = 3; i <= 30; i++) {
//    if(i % 2 === 1)
//    console.log(i);
// };

// //or
// for (let i = 3; i <= 29; i = i + 2) {

// }
// //c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
// for(let i = 3; i <= 29; i++) {
//   // console.log(i);
//   if(i % 2=== 1) {
//     console.log(i);
//   }
// }
// //d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers).
//   for (i = 50; i >= 20; i--) {
//     if (i % 3 === 0) {
//     console.log(i);

// };




// //Exercise #2: 
//Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42.

// let newArray = "LaunchCode";
// let wordArray = [1, 5, 'LC101', 'blue', 42];
// let rev = wordArray;

//Construct ``for`` loops to accomplish the following tasks:
//a. Print each element of the array to a new line.
  // for (let i = 0; i < newArray.length; i++){
  //   console.log(newArray[i]);
  // };
//or you can do this, same thing

//  for(const listArray of wordArray) {
//    console.log(listArray);
//  }

//b. Print each character of the string - in reverse order - to a new line. 
//  let reverseName = "";
//   for(let n = newArray.length-1; n >= 0; n--){
//      reverseName = reverseName + newArray[n]
//      console.log(newArray[n]);
//   };
// // or do this,samething
//  let j = newArray.length - 1;
//  while(j >= 0) {
//    console.log(newArray[j]);
//    j--;
//  } 


//Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
oldArray = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];

//a. One array contains the even numbers, and the other holds the odds.
let evenArray = [];
let oddArray = [];

for(let e = 0;e < oldArray.length; e++){
  let num = oldArray[e];
  
  if(num % 2 === 0){
    evenArray.push(num);
  }else{
    oddArray.push(num);
  }
}

//looping thru odds and evens elements in the arrays.

for(let e = 0;e < evenArray.length;e++){
  console.log(evenArray[e]);

}
for(let e = 0; e < oddArray.length; e++){
  console.log(oddArray[e]);
}
