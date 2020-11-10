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
    // charge(payee, amt) {
        
    // }
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

const myAccount = new BankAccount ('12345', 'Lane')

myAccount.deposit(200)
console.log(myAccount.balance())

const buyPizza = new Transaction (40, 'Possum Pizza')

console.log(buyPizza)

