class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks; // [10, 8]
  }

  getAverageMark() {
    const sum = this.getMarksSum();

    return sum / this.marks.length; // 18 / 2
  }

  getMarksSum() { // 10 + 8 = 18
    return this.marks.reduce((acc, num) => acc + num); // acc = 10, num = 8
  }
}

class Group {
  #students = [];

  get students() {
    return this.#students;
  }

  addStudent(student) {
    if (this.isStudent(student)) {
      this.#students.push(student);
    }
  }

  isStudent(student) {
    return student instanceof Student;
  }

  getAverageMark() {
    const sum = this.getAverageMarksSum();

    return sum / this.#students.length; // (9 + 9.5 + 8) / 3
  }

  getAverageMarksSum() {  // (9 + 9.5 + 8)
    return this.#students.reduce((acc, student) => acc + student.getAverageMark(), 0);
  }
}

const group = new Group();

group.addStudent(new Student('John', [10, 8])); // средний балл = 9
group.addStudent(new Student('Alex', [10, 9])); // средний балл = 9.5
group.addStudent(new Student('Bob', [6, 10,])); // средний балл = 8
group.addStudent({}); // игнорируем добавление невалидных данных

group.students = [{}];

console.log(group.students)

// Выводим средний балл группы
console.log(group.getAverageMark() === (9 + 9.5 + 8) / 3);