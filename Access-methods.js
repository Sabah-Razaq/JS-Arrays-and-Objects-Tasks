// ACCESS METHODS

/*
Question 1
How will you access the third position of the following array? 
*/

let arr = [5, 10, 15]
// output:
arr[2];

/*
 Question 2
How will you access the second element, degree from the following object? 
*/

let obj = { name: "Maimoona", degree: "MBBS" }
// output:
obj.degree;
// or
obj['degree'];

/*
Question 3
How will you access all elements of the following array using loops?
*/

let arr = [1, 2, 3, 4, 5, 6, 7]
// output:
for (i = 0; i < arr.length; i++){
console.log(arr[i]);
}

/*
Question 4
How will you access all elements of the following object using loops?
*/

let obj = { name: "Maimoona", degree: "MBBS", age: 25 }
// output:
for (const property in obj) {
console.log(`${property}: ${obj[property]}`);
}               