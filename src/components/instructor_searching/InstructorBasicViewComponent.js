import {InstructorInputComponent} from "./InstructorInputComponent";

import {InstructorCalendarView} from "./InstructorCallendarView";
import {useState} from "react";


export function InstructorBasicViewComponent(){

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")

    const handleSubmit = (name, surname) => {
        setName(name)
        setSurname(surname)
    }

    const nameAndSurnameArentEmpty = () => {
        return name && surname
    }

    const makeBack = () => {
        setName("")
        setSurname("")
    }

    return(
        <div style={{marginTop: "2%"}}>
        {
            nameAndSurnameArentEmpty()
            ?
                <InstructorCalendarView
                    onBack={makeBack}
                    name={name}
                    surname={surname}/>
            :
                <InstructorInputComponent
                    handleSubmit={handleSubmit}/>
        }
        </div>
    )
}