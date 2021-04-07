import {useState} from "react";
import { TextField } from '../../atoms/TextField';
import { Button } from '../../atoms/Button';
import PropTypes from "prop-types";


export function InstructorInputComponent(props){

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")

    const handleNameChange = ({ target }) => {
        setName(target.value)
    }

    const handleSurnameChange = ({ target }) => {
        setSurname(target.value)
    }

    const handleSubmit = (_) =>{
        props.handleSubmit(name, surname)
    }

    return(
        <div>
            <TextField label="Name" value={name} onChange={handleNameChange} />
            <TextField mb={2} label="Surname" value={surname} onChange={handleSurnameChange} />
            <Button text="Search!" onClick={handleSubmit}></Button>
        </div>
    )
}

InstructorInputComponent.propTypes = {
    handleSubmit: PropTypes.func
}