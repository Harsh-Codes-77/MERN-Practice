class BankAccount {
    constructor(customerName, balance) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        this.#balance -= amount;
    }
}

class CurrentAccount extends BankAccount {
    transactionLimit = 100000;

    constructor(customerName, balance, branch) {
        super(customerName, balance); // Call the parent constructor to initialize properties
        this.branch = branch;
    }

    takeBusinessLoan(amount) {
        console.log("Loan of: " + amount);
    }
}

const harsh = new CurrentAccount("harsh", 5000, "Uttar Pradesh");
console.log(harsh);
harsh.takeBusinessLoan(50000); // Output: Loan of: 50000

class SavingsAccount extends BankAccount {
    interestRate = 0.04;

    constructor(customerName, balance) {
        super(customerName, balance); // Call the parent constructor to initialize properties
    }

    takePersonalLoan(amount) {
        console.log("Loan of: " + amount);
    }
}

const eva = new SavingsAccount("Eva", 10000);
console.log(eva);
eva.takePersonalLoan(20000); // Output: Loan of: 20000
eva.deposit(5000); // Update balance
console.log(eva); // Output: SavingsAccount { customerName: 'Eva', accountNumber: 1618888888888, balance: 15000, interestRate: 0.04 }