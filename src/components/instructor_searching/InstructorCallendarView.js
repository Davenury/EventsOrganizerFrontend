import PropTypes from "prop-types";
import { api } from "../../services/apis/EventsApi";
import {useEffect, useState} from 'react';
import {CircularProgress} from "@material-ui/core";

export function InstructorCalendarView(props) {

    //domyślnie - pobranie wszystkich zajęć z danego instruktora

    const [person, setPerson] = useState(null);

    useEffect(() => {
        getAllThings()
    }, [])

    const getAllThings = () => {
        api.getInstructorById(1)
            .then(response => setPerson(response))
    }

    const preparePerson = () => {
        return Object.entries(person)
            .map(array => <p key={array[0]}> {array[0]}, {array[1]}</p>)
    }

    return (
        <div>
            {
                person ?
                    preparePerson()
                    :
                    <div>
                        <p>We're searching for your courses...</p>
                        <CircularProgress />
                    </div>
            }
        </div>
    )
}

InstructorCalendarView.propTypes = {
    name: PropTypes.string,
    surname: PropTypes.string,
    onBack: PropTypes.func
}