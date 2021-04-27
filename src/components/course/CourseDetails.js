import React from 'react';
import { Box, OutlinedInput } from '@material-ui/core';
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
    },
    column:{
        float: "left",
        width: "50%"
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
                <div>
                    {propertiesToHumanRedableNames[key]}: {value.firstName} {value.lastName}
                </div>
            )
        }
        else if((key === "startTime" || key === "endTime") && value !== null){
            return(
                <div>
                    {propertiesToHumanRedableNames[key]}: {new Date(value).toLocaleString()}
                </div>
            )
        }
        else if(value !== null && Object.keys(propertiesToHumanRedableNames).includes(key)){
            return (
                <div>
                    {propertiesToHumanRedableNames[key]}: {value}
                </div>
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
                    { prepareCourseDetails(props.course) }
                </CardContent>
            </Card>
        </Box>
    )
}