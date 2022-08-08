import React from 'react'
import users from '../Utils/users';
import User from './logic';

// haciendolo con funciones/objetos
const Person = () => {

    // funcion para añadir miembro del grupo 
    const add_member = (name, balance, debt) => {
        const member = new User(name, balance, debt);
        users.push(member)
    }

    let newUser = { name: "", balance: null };

    const handleNewUser = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        newUser = { ...newUser, [name]: value } // ... -> spread operator
    }

    const handleSubmit = (event) => {
        event.preventDefault(event)
        add_member(newUser.name, newUser.balance, 0)
        console.log(users);
    }

    console.log(users);

    return (
        <>
            {users.map((user, index) => {
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
                <button type='submit'>Add User</button>
            </form>
        </>
    )
}

export default Person;