const students = [
  {
    id: 10,
    name: 'John Smith',
    marks: [10, 8, 6, 9, 8, 7]
  },
  {
    id: 11,
    name: 'John Doe',
    marks: [9, 8, 7, 6, 7]
  },
  {
    id: 12,
    name: 'Thomas Anderson',
    marks: [6, 7, 10, 8]
  },
  {
    id: 13,
    name: 'Jean-Baptiste Emanuel Zorg',
    marks: [10, 9, 8, 9]
  }
]

try {
  console.log(averageStudentMark(42));
} catch (error) {
  console.log(error.message);
}

console.log(averageGroupMark(students));

function averageStudentMark(studentId) {
  const student = students.find((student) => student.id === studentId);

  if (student) {
    return arrAverage(student.marks);
  }

  throw new Error(`Can not find student with id ${studentId}`);
  // return -1 undefined null false
}

function averageGroupMark(students) {
  let avrMark = 0;

  for (const student of students) {
    avrMark += arrAverage(student.marks);
  }

  return avrMark / students.length;
}

function arrAverage(numbersArr) {
  return numbersArr.reduce(sum) / numbersArr.length;
}

function sum(a, b) {
  return a + b;
}