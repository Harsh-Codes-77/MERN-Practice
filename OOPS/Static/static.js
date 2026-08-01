class Company {
    static companyName = "Google";
    static phoneNumber = "1800-123-456";

    constructor(name, department, salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    showSalary() {
        console.log(`${this.name}'s Salary: ₹${this.salary}`);
    }

    increaseSalary(amount) {
        this.salary += amount;
        console.log(`${this.name}'s New Salary: ₹${this.salary}`);
    }

    static companyInfo() {
        console.log(`Company: ${Company.companyName}`);
        console.log(`Phone: ${Company.phoneNumber}`);
    }

    static balance() {
        console.log("Company Balance: ₹10,00,00,000");
    }
}

const emp1 = new Company("Harsh", "Developer", 50000);
const emp2 = new Company("Rahul", "HR", 40000);

emp1.showSalary();
emp1.increaseSalary(5000);

emp2.showSalary();
emp2.increaseSalary(3000);

Company.companyInfo();
Company.balance();