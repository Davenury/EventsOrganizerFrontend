import React, { useEffect, useState } from 'react';
import { api } from '../../services/apis/EventsApi';
import { Box } from '@material-ui/core';
import { EventView } from './EventView';
import { Button } from '../../atoms/Button';


export function EventsList(props) {

    const [events, setEvents] = useState([])
    const [index, setIndex] = useState(-1)

    useEffect(() => {
        api.getAllEvents()
            .then(promises => promises.json())
            .then(events => {
                setEvents(events)
            })
    }, [])

    const modifyIdxEvent = (idx) => 
        () => {
            setIndex(idx)
        }


    const getComponentForEachInstructor = events.map((event, idx) => {
        return (
            <Box m={1}>
                <Button text={event} onClick={modifyIdxEvent(idx)} style={{width: "80%"}} />
            </Box>
        )
    })

    return (
        <div style={{ height: "80vh", width: "100%", marginLeft: "auto", marginRight: "auto" }}>
            {index !== -1 ? <EventView eventName={events[index]} />
                : (<Box style={{width: "100%", marginLeft: "auto", marginRight: "auto"}}>
                    <h1>Events list</h1>
                    {getComponentForEachInstructor}
                </Box>)}
        </div>
    )
}