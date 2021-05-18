import { CoursesListView } from '../course/InstructorCoursesListView';
import { useState, useEffect } from 'react';
import { api } from '../../services/apis/EventsApi'

export const CoursesFromEventListView = (props) => {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        api.getAllCoursesInEvents(props.event)
            .then(response => response.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <CoursesListView events={courses} />
    )
}
