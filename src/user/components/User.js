import React from 'react'

import Button from '../../shared/FormElements/Button'
const User = props =>{
    return <li>

        <div>{props.firstname}{props.lastname}</div>
        <div>{props.email}</div>
        <button>Delete User</button>
        <div></div>
    </li>
}
export default User;