export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw TypeError('Name must be a string');
    if (!Number.isInteger(length)) throw TypeError('Length must be a number');
    if (!Array.isArray(students)) throw TypeError('Students must be an  array of strings');

    this._name = name;
    this._length = length;
    this._students = students;
  }

  getName() {
    return this._name;
  }

  setName(newName) {
    if (typeof newName !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = newName;
  }

  getLength() {
    return this._length;
  }

  setLength(newLength) {
    if (!Number.isInteger(newLength)) {
      throw TypeError('Name must be a number');
    }
    this._length = newLength;
  }

  getStudents() {
    return this._students;
  }

  setStudents(newStudents) {
    if (!Array.isArray(newStudents)) {
      throw TypeError('Name must be an array of Strings');
    }
    this._students = newStudents;
  }
}
