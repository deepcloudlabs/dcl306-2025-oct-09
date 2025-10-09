class Employee {
    constructor(fullname, salary) {
        this.fullname = fullname;
        this.salary = salary;
        // this.sayHello = this.sayHello.bind(this);
    }

    sayHello = () => {
        // console.log(this);
        console.log(`Hello, ${this.fullname}!`);
    }
}

let jack = new Employee('Jack Bauer', 150_000);
jack.sayHello();
setInterval(jack.sayHello, 1_000);