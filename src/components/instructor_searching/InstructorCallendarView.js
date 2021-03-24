import PropTypes from "prop-types";

export function InstructorCalendarView(props){

    //domyślnie - pobranie wszystkich zajęć z danego instruktora

    return(
        <div>
            {props.name}, {props.surname}
        </div>
    )
}

InstructorCalendarView.propTypes = {
    name: PropTypes.string,
    surname: PropTypes.string,
    onBack: PropTypes.func
}