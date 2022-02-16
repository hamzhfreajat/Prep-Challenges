'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    let newArr = str.split(" "); 
    let index = Math.floor(newArr.length/2); 
    return newArr[index].length; 
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    let obj = {}; 
    let bool = true; 
    str2.split("").forEach((item,index) => {
        if(obj[item] == undefined){
            obj[item] = item  
        }
    })
    str1.split("").forEach((item) => {
        if(obj[item] == undefined){
             bool = false; 
        }
    })
    if(str1.length != str2.length){
        bool = false; 
    }
    return bool; 
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    let i ;
    if(int == 1 ){
        return 1
    }
    if(int ==0){
        return 0 ; 
    }
    let idx = arr.indexOf(int); 
    if(idx === -1){
      for(i=int ; i>0 ; i-- ){
          idx = arr.indexOf(i); 
          if(arr.indexOf(i) != -1){
              break; 
          }
      }
    }else{
        return idx; 
    }
    if(idx ==-1 ) return 0; 
    return idx+1;  
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };