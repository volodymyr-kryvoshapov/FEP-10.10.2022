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
