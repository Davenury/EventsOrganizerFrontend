import React, { useEffect, useState } from 'react';
import { CalendarView } from './CalendarView';
import { api } from '../../services/apis/EventsApi';
import { mapCoursesToEvents } from '../../services/utils/coursesMapper';

export function Calendar(props){
    
    const [events, setEvents] = useState([])

    useEffect(() => {
        api.getInstructorsCourses(props.person)
            .then(response => response.map( elem => elem.json() ))
            .then(promises => Promise.all(promises))
            .then(courses => mapCoursesToEvents(courses))
            .then(events => setEvents(events))
    }, [])

    return <CalendarView events={events} />
}