import React, { useEffect, useState } from 'react';
import { api } from '../../services/apis/EventsApi';
import { Button, Box } from '@material-ui/core';
import { EventView } from './EventView';


export function EventsList(props) {

    const [events, setEvents] = useState([])
    const [index, setIndex] = useState(-1)

    useEffect(() => {
        api.getAllEvents()
            .then(promises => promises.json())
            .then(events => {
                console.log(events)
                setEvents(events)
            })
    }, [])

    const modifyIdxEvent = (idx) => 
        () => {
            setIndex(idx)
        }


    const getComponentForEachInstructor = events.map((event, idx) => {
        return (
            <Button variant="contained"
                style={{ margin: "5px  0" }} onClick={modifyIdxEvent(idx)}
            >{event}</Button>
        )
    })

    return (
        <div style={{ height: "80vh", width: "90%", marginLeft: "auto", marginRight: "auto" }}>
            {index != -1 ? <EventView eventName={events[index]} />
                : (<Box display="flex" flexDirection="column" justifyContent="center" width="40%" margin="auto">
                    <h1>Events list</h1>
                    {getComponentForEachInstructor}
                </Box>)}
        </div>
    )
}