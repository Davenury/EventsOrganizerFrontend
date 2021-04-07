import React, { useEffect, useState } from 'react';
import { CalendarView } from './CalendarView';
import { api } from '../../services/apis/EventsApi';

export function Calendar(props){
    
    const [events, setEvents] = useState([])

    useEffect(() => {
        api.getInstructorsCourses(props.person)
            .then(response => response.map( elem => elem.json() ))
            .then(promises => Promise.all(promises))
            .then(courses => mapCoursesToEvents(courses))
            .then(events => setEvents(events))
    }, [])

    const mapCoursesToEvents = courses => {
        return courses.map(course => createClasses(course))
    }

    const createClasses = course => {
        return {
            title: course.classesType,
            start: new Date(course.startTime),
            end: new Date(course.endTime),
            course: course
        }
    }

    return <CalendarView events={events} />
}