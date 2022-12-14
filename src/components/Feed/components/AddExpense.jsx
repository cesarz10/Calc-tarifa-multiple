import React, { useState } from 'react'
import users from '../../../Utils/users'


const formInitialState = {
    person: users[0].name, // persona a la que se le debe
    description: "", // qué se compró
    amount: "" // valor del gasto
}

const AddExpense = ({ userList, setUserList }) => {

    const [formExpense, setFormExpense] = useState(formInitialState)

    // handler del form
    const handleExpenseForm = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormExpense({ ...formExpense, [name]: value });
    };

    const splitBill = (host, nMembers, amount, users) => {

        const amountShare = parseFloat((amount / nMembers).toFixed(2)); // even share  ----> sería bueno que alguien pueda pagar por 
        // otras personas específicas

        for (let user of users) {
            if (user.name !== host) {
                // user.debt.amount += amountShare;
                user.payTo(host, (amount / users.length));
            }
        }
        return amountShare;
    };

    const handleNewExpense = (event) => {
        event.preventDefault(event);

        var { person, amount } = formExpense; // destructuring -> saca las keys del objeto        
        const host = users.find(user => user.name === person);
        const nMembers = users.length;
        
        amount = parseFloat(amount);
        host.expend(amount);

        splitBill(host.name, nMembers, amount, users);
        setUserList([...users])

        setFormExpense(formInitialState)
    };



    return (
        <div>
            <h3>Add new expense</h3>
            <form onSubmit={handleNewExpense}>
                <label>
                    <p>Person</p>
                    { /* <input type="text" name='person' value={formExpense.person} onChange={handleExpenseForm} /> */}
                    <select name='person' onChange={handleExpenseForm}>
                        {userList.map((user, index) =>  // se mapea la lista de usuarios para el dropdown
                            <option key={index}>{user.name}</option>
                        )}
                    </select>
                </label>
                <label>
                    <p>Description</p>
                    <input type="text" name='description' value={formExpense.description} onChange={handleExpenseForm} />
                </label>
                <label>
                    <p>Amount</p>
                    <input type="text" name='amount' value={formExpense.amount} onChange={handleExpenseForm} />
                </label>
                <button type='submit'>Add Group Expense</button>
            </form>
        </div>
    )
}

export default AddExpense