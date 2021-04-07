import { Button as MB } from '@material-ui/core';
import PropTypes from 'prop-types';

export function Button(props){
    return <MB
            variant={props.variant}
            color={props.color}
            onClick={props.onClick}> {props.text} </MB>
}

Button.defaultProps = {
    variant: "contained",
    color: "primary"
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    variant: PropTypes.string,
    color: PropTypes.string
}