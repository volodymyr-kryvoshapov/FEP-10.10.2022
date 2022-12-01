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
    return this.marks.reduce((acc, num) => acc + num);
  }
}
