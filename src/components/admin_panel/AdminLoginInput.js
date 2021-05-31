import React, {useState} from 'react';
import {TextField} from "../../atoms/TextField";
import {Button} from "../../atoms/Button";
import PropTypes from "prop-types";

export function AdminLoginInput(props){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsernameChange = ({ target }) => {
        setUsername(target.value)
    }

    const handlePasswordChange = ({ target }) => {
        setPassword(target.value)
    }

    const handleSubmit = (_) => {
        props.handleSubmit(username, password)
    }

    return(
        <div>
            <h1>Admin Panel</h1>
            <TextField label="username" value={username} onChange={handleUsernameChange} />
            <TextField mb={2} type="password" label="password" value={password} onChange={handlePasswordChange} />
            <Button text="Submit" onClick={handleSubmit}/>
        </div>
    )
}

AdminLoginInput.propTypes = {
    handleSubmit: PropTypes.func
}
