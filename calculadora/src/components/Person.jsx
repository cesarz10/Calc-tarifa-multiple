import React, { useState } from 'react'
import users from '../Utils/users';
import User from './logic';

// haciendolo con funciones/objetos
const Person = () => {
    ///       estado actual,  funcion para cambiar,   estado inicial
    let [counter, setCounter] = useState(0)
    const [userList, setUserList] = useState(users)

    // funcion para añadir miembro del grupo 
    const add_member = (name, balance, debt) => {
        const member = new User(name, balance, debt);
        users.push(member)
        return member
    }

    let newUser = { name: "", balance: null };

    // handler para ingresar nuevo miembro al oprimir botón
    const handleNewUser = (event) => {

        const name = event.target.name; // nombre en el form
        const value = event.target.value; // usuario en el form

        if (name === "balance" && isNaN(value)) {
            console.log("necesita ser un número");
            return
        }

        newUser = { ...newUser, [name]: value } // ... -> spread operator
    }

    // se añade el nuevo miembro al oprimir el botón
    const handleSubmit = (event) => {
        event.preventDefault(event)
        add_member(newUser.name, newUser.balance, newUser.debt)
        console.log(users);
        nMembers = users.length;
        console.log(`${nMembers} usuarios`);

    }

    // # de miembros será por default los miembros del array users
    let nMembers = users.length;
    console.log(`${nMembers} usuarios`);
    console.log(users);

    return (
        <>
            {users.map((user, index) => { // se mapea el array de miembros y se muestran las 3 propiedades

                return (
                    <div key={index}>
                        <p>{`${user.name}, ${user.balance}, ${user.debt}`}</p>
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
                    <p>Balance</p>
                    <input type="text" name='balance' onChange={handleNewUser} />
                </label>
                <label>
                    <p>Deuda</p>
                    <input type="text" name='debt' onChange={handleNewUser} />
                </label>
                <button type='submit'>Add Member</button> 
            </form>
        </>
    )
}

export default Person;