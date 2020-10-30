// INTERMEDIATE

/*
Extensive Students' Data
*/

let students = [
  {
    name: "Amna",
    gender: "f",
    dob: new Date("02-04-1990"),
    address: {
      ilaqa: "Gulistan-e-Johar",
      city: "Karachi",
      country: "Pakistan",
      postalCode: 47114
    },
    phoneNo: "0331-2324243",
    admissionTestScore: 56,
    hasInternet: true,
    hasComputer: false,
    hasJob: true,
    hasSchoolBefore: false
  },
  {
    name: "Hadia",
    gender: "f",
    dob: new Date("05-15-1984"),
    address: {
      ilaqa: "Lyari",
      city: "Karachi",
      country: "Pakistan",
      postalCode: 75660
    },
    phoneNo: "0345-3452953",
    admissionTestScore: 48,
    hasInternet: false,
    hasComputer: false,
    hasJob: false,
    hasSchoolBefore: true
  },
  {
    name: "Ahmed",
    gender: "m",
    dob: new Date("06-27-2002"),
    address: {
      ilaqa: "University Road",
      city: "Quetta",
      country: "Pakistan",
      postalCode: 82215
    },
    phoneNo: "0333-0124325",
    admissionTestScore: 33,
    hasInternet: true,
    hasComputer: false,
    hasJob: false,
    hasSchoolBefore: false
  },
  {
    name: "Fariha",
    gender: "f",
    dob: new Date("09-13-1998"),
    address: {
      ilaqa: "University Road",
      city: "Karachi",
      country: "Pakistan",
      postalCode: 82215
    },
    phoneNo: "0331-9432532",
    admissionTestScore: 33,
    hasInternet: true,
    hasComputer: false,
    hasJob: false,
    hasSchoolBefore: false
  },
  {
    name: "Abdullah",
    gender: "m",
    dob: new Date("01-24-1972"),
    address: {
      ilaqa: "Bazar Colony",
      city: "Lahore",
      country: "Pakistan",
      postalCode: 32212
    },
    phoneNo: "0345-9912121",
    admissionTestScore: 33,
    hasInternet: false,
    hasComputer: false,
    hasJob: true,
    hasSchoolBefore: true
  }
];
// output:

/*
QUESTION # 01
console.log(`Print each student in this format:
`);
*/
students.forEach(function (student) {
  console.log('Name: ' + student.name);
  console.log('Gender: ' + student.gender);
  console.log('City: ' + student.address.city);
  console.log('Score: ' + student.admissionTestScore + ' marks');
});

console.log('****************************');

/*
QUESTION # 02
console.log(`Print names of female students only.
`);
*/
students.forEach(function (student) {
  if (student.gender == 'f') {
    console.log('Name: ' + student.name);
  }
});

console.log('****************************');

/*
QUESTION # 03
console.log(`Print names of male students only.
`);
*/
students.forEach(function (student) {
  if (student.gender == 'm') {
    console.log('Name: ' + student.name);
  }
});

console.log('****************************');

/*
QUESTION # 04
console.log(`Print names of students who have passed the admission test. Passing marks are 50.`);
*/
students.forEach(function (student) {
  if (student.admissionTestScore >= 50) {
    console.log('Name: ' + student.name);
  }
});

console.log('****************************');

/*
QUESTION # 05
console.log(`Print names of eligible students only (students who have internet and live in Karachi are eligible)`);
*/
students.forEach(function (student) {
  if (student.hasInternet == true && student.address.city == 'Karachi') {
    console.log('Name: ' + student.name);
  }
});

console.log('****************************');

/*
QUESTION # 06
console.log(`Print address of each student in this format:
     Amna's address:
     Gulistan-e-Johar in Karachi, Pakistan`);
     */
students.forEach(function (student) {
  console.log(student.name + `'s address: `);
  console.log(student.address.ilaqa + ' in ' + student.address.city + ', ' + student.address.country);
});

console.log('****************************');

/*
QUESTION # 07
console.log(`Print names and phone number of students who have Ufone.`);
*/
students.forEach(function (student) {
  if(student.phoneNo.includes ('0330') || student.phoneNo.includes ('0331') || student.phoneNo.includes ('0332') || student.phoneNo.includes ('0333') || student.phoneNo.includes ('0334') || student.phoneNo.includes ('0335') || student.phoneNo.includes ('0335') || student.phoneNo.includes ('0336') || student.phoneNo.includes ('0337'));
  console.log('Name: ' + student.name + ', ' + 'Phone No: ' + student.phoneNo);
});

console.log('****************************');

/*
QUESTION # 08
console.log(`Students who have a job or a class are placed in Group B. Print the names of students in Group A, and in Group B, in the below format:
Group A:  name1, name2
Group B:  name3, name4, name5.`);
*/
students.forEach(function (student) { 
  if(student.hasJob == false && student.hasSchoolBefore == false) {
    console.log('Group A: ' + student.name);
  } else {
    console.log('Group B: ' + student.name);
  }
});

console.log('****************************');

/*
QUESTION # 09
console.log(`Print age of each student in the below format:  Amna's age is 29 years
`);
*/
students.forEach(function (student) {
  console.log(student.name + `'s age is ` + (2020 - student.dob.getFullYear()) + ' years');
});

console.log('****************************');
