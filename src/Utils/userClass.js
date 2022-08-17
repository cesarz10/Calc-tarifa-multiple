class User {

    constructor(name, budget, debt, expenses) {
        this.name = name; // nombre del usuario
        this.budget = budget; // budget de la cuenta personal (planeado vs gastado/recibido)
        // this.debt = {to: [], amount: []}; // deuda es específica a otro usuario -- podria ser un objeto
        this.debt = new Map([]); // deuda es específica a otro usuario -- podria ser un objeto
        this.expenses = expenses; // lo que se ha gastado durante el viaje/salida/etc..
    }

    //                                  funciones propias de cada usuario 

    // cambiar el valor de la deuda
    expend(amount) {
        this.expenses += amount;
        this.budget -= amount;
    }

    payTo (user, amount) { // pagar a alguien específico

        if(this.debt.has(user)) { 
            this.debt.set(user, this.debt.get(user) + amount);
        }

        else {
            this.debt.set(user, amount);
        }
        
    }

}

export default User;