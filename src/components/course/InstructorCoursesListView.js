import { Grid } from "@material-ui/core"
import { CourseDetails } from "./CourseDetails"

export const CoursesListView = (props) => {

    const prepareEvents = () => {
        return props.events.map(event => <Grid item xs={12} sm={6}><CourseDetails course={event} /></Grid>)
    }

    return (
        <div>
            <Grid container>
                {prepareEvents()}
            </Grid>
        </div>
    )
}
