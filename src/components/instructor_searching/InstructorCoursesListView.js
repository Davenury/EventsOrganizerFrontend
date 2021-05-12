import { CourseDetails } from "../course/CourseDetails"

export const InstructorCoursesListView = (props) => {

    const prepareEvents = () => {
        return props.events.map(event => <CourseDetails course={event} />)
    }

    return (
        <div>
            {prepareEvents()}
        </div>
    )
}
