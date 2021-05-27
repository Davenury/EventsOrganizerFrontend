import React, { useEffect, useState } from 'react';
import { api } from '../../services/apis/EventsApi';
import { InstructorView } from './InstructorView';


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
            <InstructorView instructorProp={instructor}/>
        )
    })

    const submitFunction = () => 
        api.updateInstructors(instructors)

    return(
        <div style={{height: "80vh", width: "90%", marginLeft: "auto", marginRight: "auto"}}>
            <h1>Admin Panel</h1>
            {getComponentForEachInstructor}
            <button type="button" onClick={submitFunction}>Submit</button>
        </div>
    )
}