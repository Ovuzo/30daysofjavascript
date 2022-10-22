/*Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

Enter your age: 30
You are old enough to drive.

Enter your age:15
You are left with 3 years to drive.*/
let age = prompt("Enter your age")
let underAge = 18 - age;
 if (age >= 18) {
 console.log("You are old enough to drive");
 } else if (age < 18) {
console.log(`u are ${underAge}years remaining to drive`);
}

/**Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

Enter your age: 30
You are 5 years older than me. */
let myAge = prompt("my age is")
let yourAge = prompt("your age is")
if (myAge > yourAge){
    answer= myAge - yourAge;
    console.log(`I am ${answer}years older than you`)
} else if (yourAge > myAge){
    age =yourAge - myAge;
    console.log(`Youe are ${age}years old older than me` )
}

/*If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

using if else
ternary operator.
  let a = 4
  let b = 3
  4 is greater than 3*/
let a= prompt("input a");
let b= prompt("input b") ;
if (a > b){
    console.log("a is greater than b")
}else {
console.log("a is less than b")
}

/**Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

Enter a number: 2
2 is an even number

Enter a number: 9
9 is is an odd number. */

let x = prompt("enter number: ")
if (x % 2 == 0){
    console.log("This is an even number")
}else if (x % 2 !== 0){
    console.log("This is an odd number")
}

/**Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F */

let scores = 90;
switch(scores){
    case a:
        if(a >= 80)
        console.log("you made an A")

}