import React, { useEffect, useState } from 'react';
import { api } from '../../services/apis/EventsApi';
import { TextField } from '@material-ui/core';

export function InstructorView({instructorProp}){
    
    const [instructor, setInstructor] = useState(instructorProp)
    const [isChangeMode, setIsChangeMode] = useState(false)

    const onChangeValue = (event) => {
            setInstructor({
                ...instructor,
                email: event.target.value
            })
        }

    const changeFunction = () => setIsChangeMode(true)


    const submitFunction = () => {
        api.updateInstructor(instructor)
        setIsChangeMode(false)
    }


    return(
        <div>
            <label>{instructor.firstName} {instructor.lastName}</label>
            {!isChangeMode ? (
                <button variant="contained" onClick={changeFunction}>Change instructor</button>
                ) : (<div>
                    <TextField type="email" value={instructor.email} onChange={onChangeValue}/>
                    <button variant="contained" onClick={submitFunction}>Submit</button>
                </div>
            )}
        </div>
    )
}