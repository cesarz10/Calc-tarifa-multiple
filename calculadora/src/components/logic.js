class User {
    
    constructor (name, balance, debt) {
        this.name = name;
        this.balance = balance;
        // this.friends = friends;
        this.debt = debt;
    }

    // functions 
    increaseDebt (amount) {
        this.debt += amount; //* this.friends;
    }

}

export default User;