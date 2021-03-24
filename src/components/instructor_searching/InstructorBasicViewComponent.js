import {InstructorInputComponent} from "./InstructorInputComponent";
import {useState} from "react";
import {InstructorCalendarView} from "./InstructorCallendarView";


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

    return(
        <div>
        {
            nameAndSurnameArentEmpty()
            ?
                <InstructorCalendarView
                    name={name}
                    surname={surname}/>
            :
                <InstructorInputComponent
                    handleSubmit={handleSubmit}/>
        }
        </div>
    )
}