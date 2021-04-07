import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import PropTypes from 'prop-types';
import { CourseModal } from '../course/CourseModal';

const localizer = momentLocalizer(moment);

export function CalendarView(props){

    const [openModal, setOpenModal] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);

    const eventSelected = (event, e) => {
        setSelectedCourse(event.course)
        handleOpenModal()
    }

    const handleOpenModal = () => {
        setOpenModal(true)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    return(
        <div style={{height: "80vh", width: "90%", marginLeft: "auto", marginRight: "auto"}}>
            <Calendar
                localizer={localizer}
                events={props.events}
                onSelectEvent={eventSelected}
            />
            <CourseModal 
                open={openModal}
                handleOpen={handleOpenModal}
                handleClose={handleCloseModal}
                course={selectedCourse}
            />
        </div>
    )
}

CalendarView.defaultProps = {
    events: []
}

CalendarView.propTypes = {
    events: PropTypes.arrayOf(PropTypes.object)
}