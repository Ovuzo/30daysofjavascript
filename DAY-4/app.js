/*Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

Enter your age: 30
You are old enough to drive.

Enter your age:15
You are left with 3 years to drive.*/

const age = prompt("Enter your age");
let underAge = 18 - age;
if (age >= 18) {
  console.log("You are old enough to drive");
} else if (age < 18) {
  console.log(`u are ${underAge}years remaining to drive`);
}
console.log(age);
/**Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

Enter your age: 30
You are 5 years older than me. */
const myAge = () => {
  prompt("my age is");
  let yourAge = prompt("your age is");
  if (myAge > yourAge) {
    answer = myAge - yourAge;
    console.log(`I am ${answer}years older than you`);
  } else if (yourAge > myAge) {
    age = yourAge - myAge;
    console.log(`Youe are ${age}years old older than me`);
  }
};
/*If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

using if else
ternary operator.
  let a = 4
  let b = 3
  4 is greater than 3*/
const a = prompt("input a");
let b = prompt("input b");
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than b");
}
/**Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

Enter a number: 2
2 is an even number

Enter a number: 9
9 is is an odd number. */

// let x = 2;
// if(x % 2 == 0){
//     console.log("x is an even number")
// }else if (x % 2 !==0 ){
//     console.log("x is an odd number")
// }

let x = prompt("enter number: ");
if (x % 2 == 0) {
  console.log("This is an even number");
} else if (x % 2 !== 0) {
  console.log("This is an odd number");
}

/**Write a code which can give grades to students according to theirs scores:
80-100, A
70-79, B
60-69, C
50-59, D
0-49, F */

let scores = Number(prompt("enter your score"));
switch (true) {
  case scores >= 80:
    console.log("A");
    break;
  case scores >= 70:
    console.log("B");
    break;
  case scores >= 60:
    console.log("C");
    break;
  case scores >= 50:
    console.log("D");
    break;
  default:
    console.log("you failed");
}

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

let season = prompt("Enter Month");
switch (season) {
  case "september":
  case "october":
  case "november":
    console.log("The season is Autumn");
    break;
  case "december":
  case "January":
  case "February":
    console.log("The season is winter");
    break;
  case "march":
  case "April":
  case may:
    console.log("The season is spring");
    break;
  case "june":
  case "july":
  case "August":
    console.log("The season is summer");
    break;
  default:
    console.log("Enter a correct Month");
}

/**Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
 */

switch (day) {
  case "saturday":
  case "sunday":
    console.log("its a weekend");
    break;
  case "monday":
  case "tuesday":
  case "wenesday":
  case "thurday":
  case "friday":
    console.log("its a working day");
    break;
  default:
    console.log("the day is invalid");
}

// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.

let month = prompt("Enter month That tells the number of days in it");
switch (month) {
  case "January":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    console.log(`${month} has 31 days`);
    break;
  case "february":
    console.log(`${month} has 28 days and 29day for leap year`);
    break;
  case "april":
  case "june":
  case "september":
  case "november":
    console.log(`${month} has 30 days`);
    break;
  default:
    console.log("enter a valid month");
}
