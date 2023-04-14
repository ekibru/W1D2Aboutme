
// Question 1 
// create the student object using object literal
let student = {
    firstName: '',
    lastName: '',
    grades: [],
    inputNewGrade: function(newGrade) {
      this.grades.push(newGrade);
    },
    computeAverageGrade: function() {
      let sum = 0;
      for (let i = 0; i < this.grades.length; i++) {
        sum += this.grades[i];
      }
      return sum / this.grades.length;
    }
  };
  
  // create an array with multiple students using Object.create()
  let students = [
    Object.create(student),
    Object.create(student),
    Object.create(student)
  ];
  
  // set properties for each student
  students[0].firstName = 'John';
  students[0].lastName = 'Doe';
  students[0].grades = [85, 92, 78, 90];
  
  students[1].firstName = 'Jane';
  students[1].lastName = 'Smith';
  students[1].grades = [90, 87, 94, 82];
  
  students[2].firstName = 'Bob';
  students[2].lastName = 'Johnson';
  students[2].grades = [78, 83, 76, 89];
  
  // compute the average for all students
  let sum = 0;
  for (let i = 0; i < students.length; i++) {
    sum += students[i].computeAverageGrade();
  }
  let avg = sum / students.length;
  console.log('Average grade for all students:', avg);

  // Question 2

  // define the student constructor function
function Student(firstName, lastName, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = grades;
    this.inputNewGrade = function(newGrade) {
      this.grades.push(newGrade);
    };
    this.computeAverageGrade = function() {
      let sum = 0;
      for (let i = 0; i < this.grades.length; i++) {
        sum += this.grades[i];
      }
      return sum / this.grades.length;
    };
  }
  
  // create an array with multiple students using the student constructor function
  let students1 = [
    new Student('John', 'Doe', [85, 92, 78, 90]),
    new Student('Jane', 'Smith', [90, 87, 94, 82]),
    new Student('Bob', 'Johnson', [78, 83, 76, 89])
  ];
  
  // compute the average for all students
  let sum2 = 0;
  for (let i = 0; i < students1.length; i++) {
    sum2 += students[i].computeAverageGrade();
  }
  let avg2= sum2/ students1.length;
  console.log('Average grade for all students:', avg);

  // Qustion 3

  // adding a new method to the built-in Array constructor function

Array.prototype.sort = function() {

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (this[j] < this[i]) {
            // swaping position 
          let temp = this[i];
          this[i] = this[j];
          this[j] = temp;
        }
      }
    }
    return this;
  };
  
  // create an array of grades
  let grades = [85, 92, 78, 90, 87, 94, 82, 78, 83, 76, 89];
  
  // sort the array in ascending order using the new method
  grades.sort();
  
  // print the sorted array
  console.log('Sorted grades:', grades);