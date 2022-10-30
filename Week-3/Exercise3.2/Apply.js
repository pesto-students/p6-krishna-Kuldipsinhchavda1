const person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
};

var personData = person.fullName.apply(person1, ["Oslo", "Norway"]);

console.log(personData);
