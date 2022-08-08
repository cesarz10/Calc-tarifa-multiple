import React from 'react'
import User from './logic';

// haciendolo con funciones/objetos
const Person = () => {
    const Juan = new User ("Juan", 200, 2, 0);
    
    // funcion para añadir miembro del grupo 
    const add_member = (name, balance, friends, debt) => {
        const member = new User (name, balance, friends, debt);
        return member;
    }

  return (
    <div>{Juan.balance}</div>
  )
}

export default Person;