import React, {useState} from 'react';
import {AdminLoginInput} from "./AdminLoginInput";
import {AdminPanel} from "./AdminPanel";
import {api} from "../../services/apis/EventsApi"
import swal from 'sweetalert';
import { EventsList } from './EventsList';
import { Button } from '../../atoms/Button';

export function AdminView(){

    const [loggedIn, setLoggedIn] = useState(false)
    const [isUserSection,setUserSection] = useState(false)

    const handleSubmit = (username, password) => {
        api.postAdminLogin(username, password)
        .then(response => {
            if(response !== true) swal("Incorrect login and/or password.")
            setLoggedIn(response)
        })
    }


    const getButtonText = () =>  {
        return isUserSection?"Change to events admin section": "Change to user admin section"
    }

    const onClick = ()=> setUserSection(!isUserSection)
    

    const getContent = () => {

        return (
            <div>
            <Button variant="contained" onClick={onClick} text={getButtonText()} />
                {(isUserSection?<AdminPanel/>:<EventsList/>)}
            </div>
        )
    }

    return(
        <div style={{marginTop: "2%"}}>
            {
                loggedIn
                    ?
                    getContent()
                    :
                    <AdminLoginInput handleSubmit={handleSubmit}/>
            }
        </div>
    )
}
