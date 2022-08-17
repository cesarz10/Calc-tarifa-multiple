import React from 'react'
import users from '../../../Utils/users';
import User from '../../../Utils/userClass';


// haciendolo con funciones/objetos
const Person = ({ userList, setUserList }) => {

    ///  estado actual,  funcion para cambiar,   estado inicial
    // funcion para añadir miembro del grupo 
    const add_member = (name, budget, debt, expenses) => {
        const member = new User(name, budget, debt, expenses);
        users.push(member)
        return member
    };

    let newUser = { name: "", budget: 0, debt: 0, expenses: 0 };

    // handler para ingresar nuevo miembro al oprimir botón
    const handleNewUser = (event) => {

        const name = event.target.name; // nombre en el form
        const value = event.target.value; // valor en el form

        newUser = { ...newUser, [name]: value } // ... -> spread operator
    };

    // se añade el nuevo miembro al oprimir el botón
    const handleSubmit = (event) => {
        event.preventDefault(event);
        add_member(newUser.name, newUser.budget, newUser.debt, newUser.expenses)
        // nMembers = users.length;
        setUserList([...users]);
    }

    const forOfDebt = (userDebts) => {
        let arr = []

        for (const userDebt of userDebts) { // userDebt: [usuario, amount]
            let userObj = { name: userDebt[0], debt: userDebt[1] }
            arr.push(userObj)
        }
        return arr;
    }

    // # de miembros será por default los miembros del array users
    // let nMembers = users.length;

    return (
        <>
            {userList.map((user, index) => { // se mapea el array de miembros y se muestran las 3 propiedades

                let tempDebt = forOfDebt(user.debt);
                console.log(tempDebt, "!!!!!!!!!!!!!!!!");

                return (
                    <div key={index}>
                        {/* <p>{`User: ${user.name}, Budget: ${user.budget}, Debt: ${tempDebt[0]} | $${tempDebt[1]}, Expenses: ${user.expenses}`}</p> */}
                        <p>{`User: ${user.name}, Budget: ${user.budget}, Expenses: ${user.expenses}`}</p>
                        {`Debt: ${tempDebt.map(x => {
                            return (
                            <div>
                                {console.log(x)}
                                <p>{x.name}</p>
                                <p>{x.debt}</p>
                            </div>)}
                        )}`}
                    </div>
                )
            })}

            <h3>Add new user</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Name</p>
                    <input type="text" name='name' onChange={handleNewUser} />
                </label>
                <label>
                    <p>Budget</p>
                    <input type="text" name='budget' onChange={handleNewUser} />
                </label>
                <button type='submit'>Add Member</button>
            </form>
        </>
    )
}

export default Person;