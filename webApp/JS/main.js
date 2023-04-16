'use strict';

const Person = require('./model/person');

const persons = [
  new Person('Ana Smith', '1998-12-15'),
  new Person('Bob Jone', '1945-11-16'),
  new Person('Carlos Slim Helu', '1976-09-24'),
];

persons.forEach((person) => {
  console.log(person.toString());
});



const Employee = require('./model/Employee/employee');

const jimHanson = new Employee('Jim Hanson', '1985-06-22', 245990.00, '2021-04-01');
jimHanson.doJob('Software Engineer');