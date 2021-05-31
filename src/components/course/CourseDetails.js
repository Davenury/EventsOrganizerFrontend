import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GroupIcon from '@material-ui/icons/Group';
import PersonIcon from '@material-ui/icons/Person';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AssignmentIcon from '@material-ui/icons/Assignment';
import RoomIcon from '@material-ui/icons/Room';

const useStyles = makeStyles((theme) => ({
    course: {
        background: "#0A7A99",
        color: "#fff",
        position: "relative",
        zIndex: 1,
        marginTop: "-1px",
        paddingTop: "80px",
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)",
        textAlign: "left"
    },
    row: {
        display: "table",
        clear: "both",
        content: "",
        width: "100%"
    }
}));


const propertiesToHumanRedableNames = {
    "startTime": {
        title: "Start",
        icon: <CalendarTodayIcon fontSize="small" />
    },
    "endTime": {
        title: "End",
        icon: <CalendarTodayIcon fontSize="small" />
    },
    "studentsGroup": {
        title: "Students' Group",
        icon: <GroupIcon fontSize="small" />
    },
    "classesType": {
        title: "Type",
        icon: <AssignmentIcon fontSize="small" />
    },
    "numberOfHours": {
        title: "Hours",
        icon: <AccessTimeIcon fontSize="small" />
    },
    "classesForm": {
        title: "Form",
        icon: <AssignmentIcon fontSize="small" />
    },
    "classroom": {
        title: "Classroom",
        icon: <RoomIcon fontSize="small" />
    },
    "instructor": {
        title: "Instructor",
        icon: <PersonIcon fontSize="small" />
    }
}

const renderTitleWithIcon = key => {
    return (
        <div style={{display: "inline"}}>
            <div style={{display: "flex", alignItems: "center"}}>
                <div style={{marginRight: "10px"}}>{propertiesToHumanRedableNames[key].icon}</div> {propertiesToHumanRedableNames[key].title}
            </div>
        </div>
    )
}


const prepareCourseDetails = (course) => {
    return Object.entries(course).map(([key, value]) => {
        if(key === "instructor"){
            return (
                <Grid item xs={12} sm={6}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        {renderTitleWithIcon(key)}: {value.firstName} {value.lastName}
                    </div>
                </Grid>
            )
        }
        else if((key === "startTime" || key === "endTime") && value !== null){
            return(
                <Grid item xs={12} sm={6}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        {renderTitleWithIcon(key)}: {new Date(value).toLocaleString()}
                    </div>
                </Grid>
            )
        }
        else if(value !== null && Object.keys(propertiesToHumanRedableNames).includes(key)){
            return (
                <Grid item xs={12} sm={6}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        {renderTitleWithIcon(key)}: {value}
                    </div>
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