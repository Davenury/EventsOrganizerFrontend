import {useState} from "react";
import {Box, Button, TextField} from "@material-ui/core";
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
            <Box m={1} p={1}>
                <TextField
                    id="standard-basic"
                    label="Name"
                    value={name}
                    onChange={handleNameChange}/>
            </Box>
            <Box m={1} p={1} mb={2}>
                <TextField
                    id="standard-basic"
                    label="Surname"
                    value={surname}
                    onChange={handleSurnameChange}/>
            </Box>
            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}> Search! </Button>
        </div>
    )
}

InstructorInputComponent.propTypes = {
    handleSubmit: PropTypes.func
}