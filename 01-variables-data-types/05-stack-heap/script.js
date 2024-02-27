// Values are stored on the stack
const name = "Eric";
const age = 30;

// Reference values are stored on the heap
const person = {
  name: 'Genevieve',
  age: 26
}

let newName = name;
newName = 'Bebe';

let newPerson = person;
newPerson.name = 'Eric'

console.log(name, newName);
console.log(person, newPerson);