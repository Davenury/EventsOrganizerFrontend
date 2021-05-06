import React, { useEffect, useState } from 'react';
import { api } from '../../services/apis/EventsApi';

export function AdminPanel(props){
    
    const [instructors, setInstructors] = useState([])

    useEffect(() => {
        api.getInstructors()
            .then(promises => Promise.all(promises))
            .then(events => {
                console.log(events)
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
            <div>
                <label>{instructor.firstName} {instructor.lastName}</label> 
                <input type="email" value={instructor.email} onChange={onChangeValue(idx)}/>
        </div>
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