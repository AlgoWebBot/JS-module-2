const student = {
    name: "shimul",
    age: 22,
    dept: "CSE",
    id: "19CSE061",
}


var secondName = 'Zahan';
student.name = secondName;
console.log(student);

// get all result from objects
for (var students in student) {
    console.log(students + ': ' + student[students]);
}

// get properties name
var properties = Object.keys(student);
console.log(properties);

// get properties value
var value = Object.values(student);
console.log(value);