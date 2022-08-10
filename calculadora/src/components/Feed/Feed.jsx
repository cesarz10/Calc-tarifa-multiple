import React from 'react'
import AddExpense from './components/AddExpense'
import Person from './components/Person'

const Feed = () => {
    return (
        <div>
            <Person />
            <AddExpense />
        </div>
    )
}

export default Feed