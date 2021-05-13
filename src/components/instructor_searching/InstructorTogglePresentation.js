import { useEffect, useState } from 'react';
import { InstructorCalendarView } from './InstructorCallendarView';
import { api } from "../../services/apis/EventsApi";
import { InstructorCoursesListView } from './InstructorCoursesListView';

export const InstructorTogglePresentation = (props) => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        api.getInstructorsCourses(props.person)
            .then(response => response.map( elem => elem.json() ))
            .then(promises => Promise.all(promises))
            .then(events => setEvents(events[0]))
    }, [])

    return(
        <div>
            {
                props.type === "list" ?
                    <InstructorCoursesListView 
                        events={events}
                    />
                :
                <InstructorCalendarView
                    events={events}/>
            }
        </div>
    )
}
