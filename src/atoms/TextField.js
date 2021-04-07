import {Box, TextField as TF} from "@material-ui/core";
import PropTypes from 'prop-types';

export function TextField(props) {
    return(
        <Box m={props.margin} p={props.padding} mb={props.mb}>
            <TF
                id="standard-basic"
                label={props.label}
                value={props.value}
                onChange={props.onChange}/>
        </Box>
    )
}

TextField.defaultProps = {
    margin: 1,
    padding: 1,
    value: "",
    mb: 0
}

TextField.propTypes = {
    margin: PropTypes.number,
    padding: PropTypes.number,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    mb: PropTypes.number
}