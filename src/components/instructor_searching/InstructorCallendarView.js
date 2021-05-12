import PropTypes from "prop-types";
import { CircularProgress, Box } from "@material-ui/core";
import { Calendar } from '../calendar/Calendar';
import { mapCoursesToEvents } from '../../services/utils/coursesMapper';

import { Button } from '../../atoms/Button';

export function InstructorCalendarView(props) {

    const back = () => {
        props.onBack()
    }

    const prepareEvents = () => {
        return mapCoursesToEvents(props.events)
    }

    const preparePerson = () => {
        return  <Calendar events={prepareEvents()} />
    }

    return (
        <div>
            <Box mb={2} style={{marginLeft: "5%", textAlign: "left"}}>
                <Button onClick={back} text="Back!"/>
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