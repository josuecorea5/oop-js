//literal object
const natalia = {
  name: 'Natalia',
  age: 20,
  approvedCourses: [
    "Curso definitivo de HTML y CSS",
    "Curso practico de HTML y CSS"
  ],
  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

//create prototype
function Student(name,age,approvedCourses) {
  this.name = name;
  this.age = age;
  this.approvedCourse = approvedCourses; 
}

//add method
Student.prototype.approveCourse = function(newCourse) {
  this.approvedCourse.push(newCourse);
}

const juanita = new Student('Juanita',20,[
  'Curso de introducción a la terminal',
  'Curso practico de PHP'
])

//Prototypes with class sintax
class Student2 {
  constructor({name,age,email,approvedCourse=[]}){
    this.name = name;
    this.age = age;
    this.approvedCourse = approvedCourse; 
    this.email = email
  }
}

const miguelito = new Student2({
  email: 'miguelito@platzi.com',
  age: 28,
  name: 'Miguel'
})
