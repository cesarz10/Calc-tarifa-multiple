class User {

    constructor(name, budget, debt, expenses) {
        this.name = name; // nombre del usuario
        this.budget = budget; // budget de la cuenta personal (planeado vs gastado/recibido)
        this.debt = {to: '" "', amount: debt}; // deuda es específica a otro usuario -- podria ser un objeto
        this.expenses = expenses; // lo que se ha gastado durante el viaje/salida/etc..

    }

    //                                  funciones propias de cada usuario 

    // cambiar el valor de la deuda
    expend(amount) {
        console.log("entré a la función");
        this.expenses += amount;
        this.budget -= amount;
    }

    payTo (user, amount) { // pagar a alguien específico
        this.debt.to = user;
        this.debt.amount += amount;
        // this.debt.set({user}, user)
        // this.debt.set({amount}, amount)
    }

}

export default User;