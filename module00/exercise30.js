employees = [
    {"fullname": "jack shephard", "department": "IT", "salary": 100000, "year": 1978, "fulltime": true},
    {"fullname": "kate austen", "department": "SALES", "salary": 200000, "year": 1985, "fulltime": false},
    {"fullname": "ben linus", "department": "IT", "salary": 150000, "year": 1967, "fulltime": true},
    {"fullname": "james sawyer", "department": "FINANCE", "salary": 70000, "year": 1979, "fulltime": true},
    {"fullname": "kim kwon", "department": "IT", "salary": 120000, "year": 1986, "fulltime": true},
    {"fullname": "sun kwon", "department": "IT", "salary": 200000, "year": 1984, "fulltime": false},
    {"fullname": "hugo reyes", "department": "IT", "salary": 120000, "year": 1992, "fulltime": true}
]

let total_salary_of_it_dept = 0;
for (const employee of employees) {
    if (employee.department === "IT") {
        if (employee.fulltime) {
            const salary = employee.salary;
            total_salary_of_it_dept += salary;
        }
    }
}
console.log(total_salary_of_it_dept);
total_salary_of_it_dept =
employees.filter(employee => employee.department === "IT")
         .filter(employee => employee.fulltime)
         .map(employee => employee.salary)
         .reduce((a, b) => a + b, 0);
console.log(total_salary_of_it_dept);
