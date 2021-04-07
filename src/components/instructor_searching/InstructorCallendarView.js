import PropTypes from "prop-types";
import { api } from "../../services/apis/EventsApi";
import {useEffect, useState} from 'react';
import { CircularProgress, Box } from "@material-ui/core";
import { Calendar } from '../calendar/Calendar';
import swal from 'sweetalert';

export function InstructorCalendarView(props) {

    //domyślnie - pobranie wszystkich zajęć z danego instruktora

    const [person, setPerson] = useState(null);
    const [fetching, setFetching] = useState(false);

    useEffect(() => {
        setFetching(true)
        getAllThings()
    }, [])

    const getAllThings = () => {
        api.getInstructorByName(props.name, props.surname)
            .then(response => setPerson(response))
            .catch(error =>{
                setFetching(false)
                swal("Error", "We've encounter an error while trying to get your classes! " + error, "error")
            })
    }

    const preparePerson = () => {
        return <Calendar person={person} />
    }

    return (
        <div>
            {
                person ?
                    preparePerson()
                    :
                    <div>
                        {
                            fetching ? 
                            <div>
                                We're getting your classes ready!
                                <Box m={2}>
                                    <CircularProgress />
                                </Box>
                            </div>
                            :
                            <div>
                                We didn't succeed in getting your courses!
                            </div>
                            //domyślnie 404?
                        }            
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