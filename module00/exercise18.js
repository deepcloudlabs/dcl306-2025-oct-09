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
    },
    increase_salary : function(rate){
        this.salary *= (1. + rate/ 100);
    }
};

console.log(jack);
let cloned_jack = {...jack};
console.log(cloned_jack);
let jack2 = JSON.parse(JSON.stringify(jack));
console.log(jack2);
