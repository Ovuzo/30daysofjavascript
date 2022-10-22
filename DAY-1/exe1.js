//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
//Print the string on the browser console using console.log()

let challenge = `30 Days of JavaScript`;
console.log(challenge);
console.log(challenge.length)//length of the string
console.log(challenge.toUpperCase())//capitalize string
console.log(chZallenge.toLowerCase() )// change string to lower case
console.log(challenge.substring(2, 21))// remove the first word
console.log(challenge.substring(0, 2) )// remove all words after 30
console.log(challenge.includes('Script'))//check if there is Script in the variable
console.log(challenge.split())//splite the string into an array
console.log(challenge.split(" "))//split the string at it space

let app = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' ;
newApp = app.split(",");
console.log(newApp);//split at a comma
console.log(challenge.replace("JavaScript", "Python"));//replace JavaScript with Python
console.log(challenge.charAt(15));//check the character position of index 15
console.log(challenge.charCodeAt("J"));//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.indexOf('a'));//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.lastIndexOf('a'));//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf("because"));//Use indexOf to find the position of the first occurrence of the word because
console.log(sentence.lastIndexOf("because"))//Use lastIndexOf to find the position of the last occurrence of the word because
console.log(sentence.search("because"));
let newChallenge = "    This sentence has apace in it     "
console.log(newChallenge.trim(" "))//Use trim() to remove any trailing whitespace at the beginning and the end of a string
console.log(challenge.startsWith('30'))//Use startsWith() method with the string
console.log(challenge.endsWith('JavaScript'))//Use endsWith() method with the string
console.log(challenge.match("a"))//Use match() method to find all the a’s in 30 Days Of JavaScript
let newString = '30 Days of'
console.log(newString.concat(' JavaScript'))//Use concat() and merge '30 Days of' and 'JavaScript' to a single string
console.log(challenge.repeat(2))//Use repeat() method to print 30 Days Of JavaScript 2 times