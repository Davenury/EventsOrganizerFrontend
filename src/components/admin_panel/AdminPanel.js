import React, { useEffect, useState } from 'react';
import { api } from '../../services/apis/EventsApi';
import { InstructorView } from './InstructorView';
import { Button, Grid } from '@material-ui/core';


export function AdminPanel(props){
    
    const [instructors, setInstructors] = useState([])

    useEffect(() => {
        api.getInstructors()
            .then(promises => Promise.all(promises))
            .then(events => {
                setInstructors(events)
            })
    }, [])

    const onChangeValue = (idx) => 
        (event) => {
            const newArray = [...instructors]
            newArray[idx].email = event.target.value
            setInstructors(newArray)
        }

    const getComponentForEachInstructor = instructors.map((instructor,idx) => {
        return (
            <Grid item xs={12} sm={6}><InstructorView instructorProp={instructor}/></Grid>
        )
    })

    const submitFunction = () => 
        api.updateInstructors(instructors)

    return(
        <div style={{height: "80vh", width: "90%", marginLeft: "auto", marginRight: "auto"}}>
            <h1>Admin Panel</h1>
            <Grid container>
            {getComponentForEachInstructor}
            </Grid>
            <Button color="primary" variant="contained" onClick={submitFunction} style={{marginBottom: "10px", marginTop: "10px"}}>Submit</Button>
        </div>
    )
}