import { Button as MB } from '@material-ui/core';
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

export function Button(props){

    let theme;
    if(props.color){
        theme = createMuiTheme({
            palette: {
                primary: props.color,
            },
        });
    }

    const button = <MB
                    variant={props.variant}
                    color={props.button_color}
                    onClick={props.onClick}>{props.text}</MB>

    return (<div>
        {
            theme ? <ThemeProvider theme={theme}>
                    {button}
                  </ThemeProvider>
                  : button
        }
        </div>
    )
}

Button.defaultProps = {
    variant: "contained",
    button_color: "primary",
    text: "Oops, something should be here!"
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    variant: PropTypes.string
}