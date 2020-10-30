// INTERMEDIATE

/*
Students' Name and Hobbies Data

Given an array of students:
*/

let students = [
  {
      name: "Amna",
      hobbies: ["eating", "cooking"]
  },
  {
      name: "Daniyal",
      hobbies: ["arts", "shopping"]
  },
  {
      name: "Fahad",
      hobbies: ["coding", "cooking"]
  },
  {
      name: "Hajra",
      hobbies: ["sleep", "reading"]
  }
];
// output:
students.forEach((student) => {
  console.log('Hobbies of ' + student.name);

  student.hobbies.forEach((hobby, index) => {
    console.log((index + 1) + '. ' + hobby);
    
  });
});


