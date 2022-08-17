import React, { useState } from 'react'
import users from '../../Utils/users';
import AddExpense from './components/AddExpense'
import Person from './components/Person'

const Feed = () => {
    const [userList, setUserList] = useState(users);

    return (
        <div>
            <Person userList={userList} setUserList={setUserList}/>
            <AddExpense setUserList={setUserList}/>
        </div>
    )
}

export default Feed