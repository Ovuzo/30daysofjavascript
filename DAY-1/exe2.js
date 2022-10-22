let statement = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(statement);//Using console.log() print out the following statement:

let quote = `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
console.log(quote);//Using console.log() print out the following quote by Mother Teresa:
let num = '10';
console.log(typeof num)//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let numInt = parseInt(num);
console.log(numInt);

let numb = '9.8';
numbFloat = parseFloat(numb);
console.log(numbFloat);//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let langOne = 'python';
let langTwo = 'jargon'
console.log(langOne.includes('on'));//Check if 'on' is found in both python and jargon
console.log(langTwo.includes('on'))
let sent = 'I hope this course is not full of jargon.'; //Check if jargon is in the sentence.
console.log(sent.includes('jargon'));
let mathNum = Math.floor(Math.random() * 101)
console.log(mathNum)//Generate a random number between 0 and 100 inclusively.
let oldSent = 'You cannot end a sentence with because because because is a conjunction'
let newSent = oldSent.split(" ");
console.log(oldSent.substring(30,-17) );
let newestSent = newSent.slice(6,10)
console.log(newestSent);
//Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

//Count the number of word love in this sentence.
let  love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.' 
let becus = 'You cannot end a sentence with because because because is a conjunction'
console.log(love.match(/love/gi));
console.log(becus.match(/because/gi));