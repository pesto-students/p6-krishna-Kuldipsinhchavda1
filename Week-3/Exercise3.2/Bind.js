const personName = {
  firstName: "Kuldipsinh",
  lastName: "Chavda",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};

var name = personName.fullName.bind(member);
console.log(name());

//.bind is binds permanently
