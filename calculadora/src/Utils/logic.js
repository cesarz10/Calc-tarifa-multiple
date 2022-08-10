class User {
    
    constructor (name, balance, debt) {
        this.name = name;
        this.balance = balance;
        this.debt = debt;
    }

    //                                  funciones propias de cada usuario 

    // cambiar el valor de la deuda
    changeDebt (amount) {
        this.debt += amount;
    }

    // si alguien paga la cuenta completa, los otros usuarios le deberán el dinero menos su parte
    payBill (nMembers, bill) {
        const payed = this.splitBill(nMembers, bill);
        this.balance -= bill;
        this.debt -= payed * (nMembers - 1); // ????
    }


                                        // esto no es propio de acda usuario, no va aquí
    splitBill (nMembers, bill) {

        const billShare = bill / nMembers; // even share  ----> sería bueno que alguien pueda pagar por 
                                                       // otras personas específicas
        
        console.log(`Cada persona debe pagar $${billShare}`)
        return billShare;
    }



}

export default User;