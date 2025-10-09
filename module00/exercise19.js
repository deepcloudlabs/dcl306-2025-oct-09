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

for (let field in jack) {
    console.log(`${field}: ${jack[field]}`);
}

Object.entries(jack).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
})