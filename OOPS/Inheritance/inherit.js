// Parent Class
class BankAccount {
    #balance;
    #accountNumber;

    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.#accountNumber = Date.now();
        this.#balance = balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            console.log("Deposit amount must be greater than 0");
            return;
        }

        this.#balance += amount;
        console.log(`₹${amount} deposited successfully`);
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.log("Withdrawal amount must be greater than 0");
            return;
        }

        if (amount > this.#balance) {
            console.log("Insufficient Balance");
            return;
        }

        this.#balance -= amount;
        console.log(`₹${amount} withdrawn successfully`);
    }

    // Getter
    get balance() {
        return this.#balance;
    }

    get accountNumber() {
        return this.#accountNumber;
    }

    displayAccountDetails() {
        console.log("-----------------------------");
        console.log("Customer :", this.customerName);
        console.log("Account  :", this.#accountNumber);
        console.log("Balance  : ₹" + this.#balance);
        console.log("-----------------------------");
    }
}

// Child Class
class CurrentAccount extends BankAccount {
    transactionLimit = 100000;

    constructor(customerName, balance, branch) {
        super(customerName, balance);
        this.branch = branch;
    }

    takeBusinessLoan(amount) {
        console.log(
            `${this.customerName} received a business loan of ₹${amount}`
        );
    }
}

// Child Class
class SavingsAccount extends BankAccount {
    interestRate = 0.04;

    constructor(customerName, balance) {
        super(customerName, balance);
    }

    takePersonalLoan(amount) {
        console.log(
            `${this.customerName} received a personal loan of ₹${amount}`
        );
    }

    addInterest() {
        const interest = this.balance * this.interestRate;
        this.deposit(interest);
    }
}

// Current Account

const harsh = new CurrentAccount(
    "Harsh",
    5000,
    "Uttar Pradesh"
);

harsh.deposit(3000);
harsh.withdraw(2000);
harsh.takeBusinessLoan(50000);

harsh.displayAccountDetails();

console.log("Balance:", harsh.balance);
console.log("Account Number:", harsh.accountNumber);

// Savings Account

const eva = new SavingsAccount("Eva", 10000);

eva.deposit(5000);
eva.withdraw(3000);

eva.takePersonalLoan(20000);

eva.addInterest();

eva.displayAccountDetails();
