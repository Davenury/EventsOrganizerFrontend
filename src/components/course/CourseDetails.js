import React from 'react';
import { Box, Grid } from '@material-ui/core';
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
    },
    row: {
        display: "table",
        clear: "both",
        content: "",
        width: "100%"
    }
}));


const propertiesToHumanRedableNames = {
    "startTime": "Time of Start",
    "endTime": "Time of End",
    "studentsGroup": "Student's Group",
    "classesType": "Type",
    "numberOfHours": "Hours",
    "classesForm": "Form",
    "classroom": "Classroom",
    "instructor": "Instructor"
}


const prepareCourseDetails = (course) => {
    return Object.entries(course).map(([key, value]) => {
        if(key === "instructor"){
            return (
                <Grid item xs={12} sm={6}>
                    {propertiesToHumanRedableNames[key]}: {value.firstName} {value.lastName}
                </Grid>
            )
        }
        else if((key === "startTime" || key === "endTime") && value !== null){
            return(
                <Grid item xs={12} sm={6}>
                    {propertiesToHumanRedableNames[key]}: {new Date(value).toLocaleString()}
                </Grid>
            )
        }
        else if(value !== null && Object.keys(propertiesToHumanRedableNames).includes(key)){
            return (
                <Grid item xs={12} sm={6}>
                    {propertiesToHumanRedableNames[key]}: {value}
                </Grid>
            )
        }
        else return null
    })
}


export function CourseDetails(props){

    const classes = useStyles();

    return (
        <Box m={2} p={2}>
            <Card variant="outlined">
                <div className={classes.course} />
                <CardContent>
                    <Typography
                        variant="h5"
                    >
                        {props.course.name}
                    </Typography>
                    <Grid container spacing={1} style={{marginTop: "1em"}}>
                    { prepareCourseDetails(props.course) }
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    )
}