import PropTypes from "prop-types";
import { api } from "../../services/apis/EventsApi";
import {useEffect, useState} from 'react';
import { CircularProgress, Box } from "@material-ui/core";
import { Calendar } from '../calendar/Calendar';
import swal from 'sweetalert';
import { Button } from '../../atoms/Button';

export function InstructorCalendarView(props) {

    //domyślnie - pobranie wszystkich zajęć z danego instruktora

    const [person, setPerson] = useState(null);
    const [fetching, setFetching] = useState(false);

    useEffect(() => {
        setFetching(true)
        getAllThings()
    }, [])

    const assertResponse = response => {
        if(response === undefined || response === null || response.length === 0)
            throw "We didn't find any courses for this person"
    }

    const getAllThings = () => {
        api.getInstructorByName(props.name, props.surname)
            .then(response => {
                assertResponse(response)
                return response
            })
            .then(response => setPerson(response))
            .catch(error =>{
                setFetching(false)
                swal("Error", "We've encounter an error while trying to get your classes!\n" + error, "error")
            })
    }

    const back = () => {
        props.onBack()
    }

    const preparePerson = () => {
        return  <Calendar person={person} />
    }

    return (
        <div>
            <Box mb={2} style={{marginLeft: "5%", textAlign: "left"}}>
                <Button onClick={back} text="Back!"/>
            </Box>
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