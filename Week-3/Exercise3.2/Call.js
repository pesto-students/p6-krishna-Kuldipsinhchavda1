function personData(companyName) {
  var data = {
    companyName,
    name: this.name,
    salary: this.salary,
  };
  console.log(data);
}

var person1 = {
  name: "Kuldip",
  salary: "40k",
};

var person2 = {
  name: "Meet",
  salary: "40k",
};

personData.call(person1, "bacancy");
personData.call(person2, "Zignut");
