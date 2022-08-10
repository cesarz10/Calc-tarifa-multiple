import React, { useState } from 'react'

const formInitialState = {
    person: "",
    description: "",
    amount: ""
}

const AddExpense = () => {

    const [formExpense, setFormExpense] = useState(formInitialState)

    console.log("me he renderizado");
    const handleExpenseForm = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormExpense({ ...formExpense, [name]: value });
    };

    const handleNewExpense = (event) => {
        event.preventDefault(event);

        //aquí debe ir la lógica antes de limpiar el form
        setFormExpense(formInitialState)
    };

    return (
        <div>
            <h3>Add new expense</h3>
            <form onSubmit={handleNewExpense}>
                <label>
                    <p>Person</p>
                    <input type="text" name='person' value={formExpense.person} onChange={handleExpenseForm} />
                </label>
                <label>
                    <p>Description</p>
                    <input type="text" name='description' value={formExpense.description} onChange={handleExpenseForm} />
                </label>
                <label>
                    <p>Amount</p>
                    <input type="text" name='amount' value={formExpense.amount} onChange={handleExpenseForm} />
                </label>
                <button type='submit'>Add Member</button>
            </form>
        </div>
    )
}

export default AddExpense