const group = new Group();

group.addStudent(new Student('John', [10, 8])); // средний балл = 9
group.addStudent(new Student('Alex', [10, 9])); // средний балл = 9.5
group.addStudent(new Student('Bob', [6, 10,])); // средний балл = 8
group.addStudent({}); // игнорируем добавление невалидных данных

group.students = [{}];

console.log(group.students)

// Выводим средний балл группы
console.log(group.getAverageMark() === (9 + 9.5 + 8) / 3);