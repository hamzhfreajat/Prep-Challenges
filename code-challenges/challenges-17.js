'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// referring to the given examples find out the pattern used and
// Write a function that takes 2 integers and prints the patterns using recursion
// 
// Input: 16, 5
// Output: [16, 11, 6, 1, -4, 1, 6, 11, 16]
//
// Input: 50, 9
// Output: [50, 41, 32, 23, 14, 5, -4, 5, 14, 23, 32, 41, 50]
//


const recursionPattern = (int1, int2) => {
    let arr1 = []; 
    let flag = false; 
    function subRecursion(int1, int2){
        arr1.push(int1)
        if(int1<0) flag = true; 
        if(flag) return arr1; 
        subRecursion(int1 - int2 , int2)
        arr1.push(int1)
        return arr1;  
    }
    return subRecursion(int1, int2)
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
// 
// Write a function that takes a string (HTML tag)
// and extracts the link from the HTML tag
//
// Ex: <a href="http://www.hackerrank.com"><h1><b>HackerRank</b></h1></a> ==> "www.hackerrank.com"
// Ex: <a href="http://www.something.org"><h1><b>HackerRank</b></h1></a> ==> "www.something.org"
//
// Note:
//  Assume that links end with .com, .org or .net
// 

const filterLinks = (str) => {
   let regex = /((ftp|http|https))?[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/ ; 
   let str1 = str.match(regex);
   return str1[0]; 

}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
// 
// A phrase is considered palindrome if, after converting all uppercase letters into lowercase letters
// and removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
// 
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// as you can see "amanaplanacanalpanama" is a palindrome.
//

const isPalindrome = (str) => {
    str = str.replace(/[^a-zA-Z0-9 ]/g, '').replaceAll(" ", "").toLowerCase();
    console.log(str)
    let len = str.length; 
   for (let i = 0; i <len  / 2; i++) {  
  
        // validate the first and last characters are same  
        if (str[i] !== str[len - 1 - i]) {  
           return false; 
        }  
    }  
  return true
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
// 
//  Write a function that takes 2 arguments, one is a string and the other is an array
//  the function should return a boolean than indicates if both have the same pattern
//
//  EX: 
//  Input: "abba", ['cat', 'dog', 'dog', 'cat']
//  output: true
//
//  as you can see the a acted as the cat in the array, and b as the dog, and the pattern was the same
//
//  Input: "cda", ['cat', 'dog', 'cat']
//  output: false
//
//  here if the pattern had three different things so the array should had 3 different things to be true
//

const samePattern = (str, arr) => {
    let arr1 = []; 
    let obj = {}; 
    let bol = true; 
    str = str.split(""); 
    str.forEach((item,index) => {
        if(obj[item] != undefined){
            arr1.push([index , obj[item]]);  
        }else{
            obj[item]= index; 
        }  
    })
    if(arr1.length != 0 ){
        arr1.forEach(item => {
            if(arr[item[0]] !== arr[item[1]]) bol = false; 
    })
    }else{
        let toFindDuplicates = arr.filter((item, index) => arr.indexOf(item) !== index)
       if(toFindDuplicates.length > 0) bol = false; 
        console.log(toFindDuplicates)
      
    }
  
    return bol
}
// -------------------------------------------------------------------------------------------------------


module.exports = { recursionPattern, filterLinks, isPalindrome, samePattern };