var Person = function () { };

Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
};

const Teacher = function () { };

Teacher.prototype = new Person();

Teacher.prototype.teach = function (subject) {
    console.log(this.name + " just learn " + subject);
};

var him = new Teacher();

him.initialize("Kuldip", 22);

him.teach("Maths");

