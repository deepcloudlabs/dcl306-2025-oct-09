let jack = {
    fullname: "jack bauer",
    birth_year: 1965,
    "salary": 100_000,
    "iban": "TR1",
    department: {
        "name": "IT",
        "director": {
            "fullname": "kate austen"
        }
    }
};
//let fullname = jack.fullname;
//let salary = jack.salary;
let {fullname,salary} = jack;
console.log(fullname);
console.log(salary);

let jack2 = {...jack}; // shallow cloning
jack2.salary *= 1.5;
console.log(jack2.salary);
console.log(jack.salary);
jack2.department = {...jack.department};
jack2.department.director = {...jack.department.director};
jack2.department = {
    "name": "SALES",
    "director": {
        "fullname": "ben linus"
    }
}
console.log(jack.department);
let jack3 = JSON.parse(JSON.stringify(jack));