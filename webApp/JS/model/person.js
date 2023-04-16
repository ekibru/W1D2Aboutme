'use strict';

class Person {
  constructor(name, dateOfBirth) {
    this.name = name;
    this.dateOfBirth = new Date(dateOfBirth);
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getDateOfBirth() {
    return this.dateOfBirth;
  }

  setDateOfBirth(dateOfBirth) {
    this.dateOfBirth = new Date(dateOfBirth);
  }

  toString() {
    const formattedDate = this.dateOfBirth.toISOString().split('T')[0];
    return `{ Name: ${this.name}, DateOfBirth: ${formattedDate} }`;
  }
}

module.exports = Person;
