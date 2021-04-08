import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    course: {
        background: "#0A7A99",
        color: "#fff",
        position: "relative",
        zIndex: 1,
        marginTop: "-1px",
        paddingTop: "80px",
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)"
    }
}));

export function CourseDetails(props){

    const classes = useStyles();

    return (
        <Box m={2} p={2}>
            <Card variant="outlined">
                <div className={classes.course} />
                <CardContent>
                    Cokolwiek
                </CardContent>
            </Card>
        </Box>
    )
}