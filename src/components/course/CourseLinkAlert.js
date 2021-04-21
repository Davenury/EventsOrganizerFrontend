import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import { generate } from '../../services/utils/courseLinkGenerator';

export function CourseLinkAlert(props){

    return (
        <Alert severity="success">
            Here's your link: {generate(props.id)} !
        </Alert>
    )
}