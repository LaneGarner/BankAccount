class BankAccount {
    constructor(accountNumber, owner){
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.transactions = [];
    }
    
    deposit(amt) {
        if(amt <= 0) {
            return false
        } else {
            return this.transactions.push(amt)
        }
    }

    charge(amt, payee) {
        if((this.balance() - amt) < 0) {
            console.log('Cannot complete charge')
            return false
        } else {
            new Transaction(amt, payee)
            return this.transactions.push(amt *= -1) 
        }
    }

    balance() {
        const reducer = (acc, cur) => acc + cur;
        return this.transactions.reduce(reducer)
    }
}

class Transaction {
    constructor(amount, payee){
        this.amount = amount;
        this.payee= payee;
        this.date= new Date;
    }
}

class SavingsAccount extends BankAccount {
    constructor(accountNumber, owner, interestRate){
        super(accountNumber, owner);
        this.interestRate= interestRate; 
    }
    // * accrueInterest() - This method should use the balance() to get the current balance and add a new transaction representing a deposit of the appropriate amount.
    accrueInterest() {
        let balance = this.balance()
        balance = balance * this.interestRate
        return this.deposit(balance)
    }
}

const myAccount = new BankAccount (12345, 'Lane')

myAccount.deposit(10)
console.log('balance after deposit: ', myAccount.balance())

myAccount.charge(30, 'possum pizza')
console.log('balance after charge: ', myAccount.balance())


const newSavings = new SavingsAccount (54321, 'Brian', .02)

newSavings.deposit(100)
console.log('Savings balance after deposit: ', newSavings.balance())

newSavings.accrueInterest(100)
console.log('Savings balance after interest: ', newSavings.balance())

console.log('savings transactions: ', newSavings.transactions)

// newSavings.charge(30, 'lil nonas')
// console.log('balance after charge: ', newSavings.balance())



