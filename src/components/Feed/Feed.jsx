import React, { useState } from 'react'
import users from '../../Utils/users';
import AddExpense from './components/AddExpense'
import Person from './components/PersonList'

const Feed = () => {
    const [userList, setUserList] = useState(users); // renderizando lista de usuarios cuando hay cambios

    return (
        <div>
            <Person userList={userList} setUserList={setUserList}/>
            <AddExpense userList={userList} setUserList={setUserList}/>
        </div>
    )
}

export default Feed