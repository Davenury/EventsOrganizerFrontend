import React from 'react';
import { Box } from '@material-ui/core';


export function CourseDetails(props){

    console.log(props.course)

    return (
        <Box m={2} p={2}>
            Here are your details about course!
        </Box>
    )
}