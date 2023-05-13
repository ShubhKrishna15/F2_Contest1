/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  arr.map(student => {
    if (student.marks > 50) {
      console.log(student);
    }
  });
}

// PrintStudentswithMap();

function PrintStudentsbyForEach() {
  arr.forEach(student => {
    if (student.marks > 50) {
      console.log(student);
    }
  });
}

// PrintStudentsbyForEach();

function addData() {
  const newStudent = { id: 4, name: "susan", age: "20", marks: 45 };
  arr.push(newStudent);
  console.log(arr);
}


function removeFailedStudent() {
  arr = arr.filter(student => student.marks >= 50);
  console.log(arr);
}

// removeFailedStudent();

function concatenateArray() {
  const newArray = [
    { id: 4, name: "jane", age: "21", marks: 75 },
    { id: 5, name: "bob", age: "19", marks: 60 },
    { id: 6, name: "lisa", age: "22", marks: 90 }
  ];
  const concatenatedArray = arr.concat(newArray);
  console.log(concatenatedArray);
}

// concatenateArray();
