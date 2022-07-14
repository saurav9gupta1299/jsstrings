//1. Count Characters
//You are given a string S,and your task is to return an array B(having a size of 2), where B[0] contains the count of character A (uppercase) in string S and B[1] contains the count of character D (uppercase) in string S.

//Note: You have to complete countCharacters function. No need to take any input.

const countCharacters = (S) => 
{
  let res = [0,0];
  for(let i = 0;i<S.length;i++)
  {
    if(S[i] == "A")
    {
      res[0]++;
    }
    else if (S[i] == "D")
    {
      res[1]++;
    }
  }
  return res;
};

// Count the Heads
// Tina is given a string  S which contains the first letter of all the student names in her class. She got a curiosity to check how many people have their names starting from the same alphabet. So given a string  S , she decided to write a code that finds out the count of characters that occur more than once in the string.

// Note: You have to complete Count Head function. No need to take any input.


// Count the Vowels
// You are given a string 
// S
//  containing both uppercase and lowercase letters. You need to find out the number of vowels in the given string.

// Note: You have to complete Count_Vowel function. No need to take any input.


var Count_Vowels= (S) => 
{
  let v_list = 'aeiouAEIOU';
  let count = 0;
  
  for(let i = 0; i < S.length ; i++)
  {
    if (v_list.indexOf(S[i]) !== -1)
    {
      count ++;
    }
  
  }
  return count;
};

// Concatenate the Strings
// You are given two strings 
// S
// 1
//  and 
// S
// 2
//  (containing both uppercase and lowercase letters), You need to retrun a string which is the concatenation of both the given strings. 

// Note: You have to complete Concatenate_Strings function. No need to take any input.


var Concatenate_Strings = (S1, S2) => {
    return (S1.concat(S2));
};

console.log(Concatenate_Strings('Prep','bytes'));

// Find Length
// You are given a string 
// S
// , and your task is to return the length of the string 
// S
// .

// Note: You have to solve it without using length method. You have to complete findLength function. No need to take any input.


const findLength = (S) => 
{
    return S.length;
};

// Find the Winner
// You are given a string 
// S
//  consisting of two letters 
// A
//  and 
// D
// ,where each character represent the winner of N games played between Aditya and Danish, where letter 
// A
//  represents the win of Aditya and letter 
// D
//  represents the win of Danish. 
// You need to find out the that which player wins the maximum number of games or there is a draw between them.

// Note: You have to complete Game_Winner function. No need to take any input.

var Game_Winner = (S) => 
{
  let B=[], countA=0, countD=0;
  for(let i=0; i<=S.length; i++){
    if(S[i]==="A"){
      countA++;
    }
    if(S[i]==="D"){
      countD++;
    }
  }
   if(countA>countD){
     return "Aditya";
   }
   else if (countA<countD){
     return "Danish";
   }
   else {
     return "Draw";
   }
    
}


// Join Strings
// You are given two strings 
// S
//  and 
// P
// , and your task is to concatenate them and return the concatenated string.

// Note: You have to complete joinStrings function. No need to take any input.

const joinStrings = (S, P) => 
{
   return (S.concat(P)); 
};
 

// Plaindrome Check

var Palin_Check = (str) =>
{
	let N = str.length;
  for(let i = 0;i<N/2;i++)
  {
    if(str[i] !== str[N-1-i])
    {
      return ("False");
    }
  }
  return("True");
}

// Reverse the String
// You are given a string 
// S
// , Your task is to Reverse the string.
// String can contain both upppercase lowercase letters. 
// Note: You have to complete Reverse_String function. No need to take any input.

var Reverse_String = (str) => 
{
  return str.split("").reverse().join("");
     
};

// Match the Strings


var String_Match = (S1,S2) => 
{
  if(S1 == S2)
  {
    return("YES");
  }
  else
  {
    return("NO");
  }
};

// String Replace
// You are given a string 
// S
// , along with a pattern string and a text string. 
// You need to repalce the pattern string in 
// S
//  to the text string.

// Note: You have to complete Replace function. No need to take any input.

var Replace = (S, pattern , text) => 
{
  return (S.replace(pattern,text)) ;   
};

// Split the String
// You are given a string 
// S
// , Your task is to split the string with respect to spaces.

// Note: You have to complete Split_the_String function. No need to take any input.


var Split_the_string = (S) => 
{
  return S.split(" ");
};

// Count the Vowels and Consonants
// You are given a string 
// S
//  containing both uppercase and lowercase letters. 
// You need to find out the number of vowels and the number of consonants in the given string.

// Note: You have to complete Count_Vowels function and Count_Consonants function. No need to take any input.

var Count_Vowels= (S) => 
{
  let vowel_list = 'aeiouAEIOU';
  let count = 0;
  
  for(let i = 0; i < S.length ; i++)
  {
    if (vowel_list.indexOf(S[i]) !== -1)
    {
      count ++;
    }
  }
  return count;
};

var Count_Consonants= (S) => 
{
  let cons_list = 'aeiouAEIOU';
  let count1 = 0;
  
  for(let j = 0; j < S.length ; j++)
  {
    if (cons_list.indexOf(S[j]) == -1)
    {
      count1++;
    }
  }
  return count1;
};

