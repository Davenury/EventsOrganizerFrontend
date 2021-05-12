import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import PropTypes from 'prop-types';
import { CourseModal } from '../course/CourseModal';
import { getColor } from '../../services/utils/courseColorsGetter';

const localizer = momentLocalizer(moment);

const eventStyleGetter = (event, start, end, isSelected) => {
    console.log(event);
    var backgroundColor = getColor(event.course.event);
    var style = {
        backgroundColor: backgroundColor,
        borderRadius: '0px',
        opacity: 0.8,
        color: 'black',
        border: '0px',
        display: 'block'
    };
    return {
        style: style
    };
}

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

    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    let isMobile = (width <= 768);

    return(
        <div style={{height: "80vh", width: "90%", marginLeft: "auto", marginRight: "auto"}}>
            {
                isMobile 
                ?
                <Calendar
                    localizer={localizer}
                    events={props.events}
                    onSelectEvent={eventSelected}
                    eventPropGetter={eventStyleGetter}
                    view="day"
                />
                :
                <Calendar
                    localizer={localizer}
                    events={props.events}
                    onSelectEvent={eventSelected}
                    eventPropGetter={eventStyleGetter}
                />
            }
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