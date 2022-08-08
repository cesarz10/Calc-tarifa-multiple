import React from 'react'
import User from './logic';

// haciendolo con funciones/objetos
const Person = () => {
    const Juan = new User("Juan", 200, 0);

    // funcion para añadir miembro del grupo 
    const add_member = (name, balance, debt) => {
        const member = new User(name, balance, debt);
        return member;
    }

    let newUser = { name: "", balance: null };

    const handleNewUser = (event) => {
        const name = event.target.name;
        const value = event.target.value
        newUser = { ...newUser, [name]: value }
    }

    const handleSubmit = (event) => {
        event.preventDefault(event)
        const addedMember = add_member(newUser.name, newUser.balance, 0)
        console.log(addedMember);
    }

    return (
        <>
            <div>{Juan.balance}</div>
            <div>{Juan.name}</div>
            <div>{Juan.debt}</div>

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