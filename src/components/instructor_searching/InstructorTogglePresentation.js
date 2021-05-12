import { useEffect, useState } from 'react';
import { InstructorCalendarView } from './InstructorCallendarView';
import { api } from "../../services/apis/EventsApi";

export const InstructorTogglePresentation = (props) => {

    const [events, setEvents] = useState(null)

    useEffect(() => {
        api.getInstructorsCourses(props.person)
            .then(response => response.map( elem => elem.json() ))
            .then(promises => Promise.all(promises))
            .then(events => setEvents(events[0]))
    }, [])

    return(
        <div>
            <InstructorCalendarView
                onBack={props.onBack}
                person={props.person}
                events={events}/>
        </div>
    )
}
