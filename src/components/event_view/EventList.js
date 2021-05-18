import { Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { Button } from '../../atoms/Button';
import { api } from '../../services/apis/EventsApi';
import { CoursesFromEventListView } from './CoursesFromEventListView';
import { Event } from './Event';

export const EventList = (props) => {

    const [events, setEvents] = useState([])
    const [toggle, setToggle] = useState(true)  //true - events, false - one event list
    const [toggledEvent, setToggledEvent] = useState(null)

    useEffect(() => {
        api.getAllEvents()
            .then(response => response.json())
            .then(data => setEvents(data))
    }, [])

    const toggleView = (name) => {
        setToggledEvent(name)
        setToggle(!toggle)
    }

    const createEventsViews = () => {
        return events.map(event => <Grid item xs={12} sm={6} m={2}><Event name={event} key={event} toggle={toggleView}/></Grid>)
    }

    return(
        <div style={{marginTop: "5%"}}>
            {
                    toggle 
                ?
                    <Grid container spacing={5}>
                        {createEventsViews()}
                    </Grid>
                :
                    <div>
                        <Button text="Back" onClick={toggleView} />
                        <CoursesFromEventListView event={toggledEvent} />
                    </div>
            }
        </div>
    )
}
