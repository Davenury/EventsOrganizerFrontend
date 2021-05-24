import React, {useState} from 'react';
import {AdminLoginInput} from "./AdminLoginInput";
import {AdminPanel} from "./AdminPanel";
import {api} from "../../services/apis/EventsApi"
import swal from 'sweetalert';

export function AdminView(){

    const [loggedIn, setLoggedIn] = useState(false)

    const handleSubmit = (username, password) => {
        api.postAdminLogin(username, password)
        .then(response => {
            if(response !== true) swal("Incorrect login and/or password.")
            setLoggedIn(response)
        })
    }

    return(
        <div style={{marginTop: "2%"}}>
            {
                loggedIn
                    ?
                    <AdminPanel/>
                    :
                    <AdminLoginInput handleSubmit={handleSubmit}/>
            }
        </div>
    )
}
