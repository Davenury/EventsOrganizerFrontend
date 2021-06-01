import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import { Calendar } from '../calendar/Calendar';
import { mapCoursesToEvents } from '../../services/utils/coursesMapper';

export function InstructorCalendarView(props) {

    const prepareEvents = () => {
        return mapCoursesToEvents(props.events)
    }

    const preparePerson = () => {
        return  <Calendar events={prepareEvents()} />
    }

    return (
        <div>
            <Box mb={2} style={{marginLeft: "5%", textAlign: "left"}}>
                { preparePerson() }
            </Box>
        </div>
    )
}

InstructorCalendarView.propTypes = {
    name: PropTypes.string,
    surname: PropTypes.string,
    onBack: PropTypes.func
}