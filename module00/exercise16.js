let jack = {
    fullname: "jack bauer",
    birth_year: 1965,
    "salary": 100_000,
    "iban": "TR1",
    department: {
        "name": "IT"
    }
};
console.log(jack.department.director?.fullname);
if (jack.department.director) // guard
    console.log(jack.department.director.fullname);
// console.log(jack["department"]["director"]["fullname"]);
